# Define a Model Parser for LLama-Guard
from typing import TYPE_CHECKING, Dict, List, Optional, Any

import google.generativeai as genai
import copy

from aiconfig.default_parsers.parameterized_model_parser import ParameterizedModelParser
from aiconfig.model_parser import InferenceOptions
from aiconfig.schema import ExecuteResult, Output, Prompt
from aiconfig.util.params import resolve_prompt, resolve_prompt_string
from aiconfig import CallbackEvent, get_api_key_from_environment, AIConfigRuntime, PromptMetadata
from google.generativeai.types import content_types


# Circuluar Dependency Type Hints
if TYPE_CHECKING:
    from google.generativeai.types import AsyncGenerateContentResponse

def construct_regular_outputs(response: "AsyncGenerateContentResponse") -> list[Output]:
    """
    Construct regular output per response result, without streaming enabled
    """
    output_list = []
    for i, candidate in enumerate(response.candidates):
        output = ExecuteResult(
            **{
                "output_type": "execute_result",
                "data": candidate.content.parts[0].text,
                "execution_count": i,
                "metadata": response.prompt_feedback.__dict__,
            }
        )

        output_list.append(output)

    return output_list


async def construct_stream_outputs(
    response: "AsyncGenerateContentResponse", options: InferenceOptions
) -> list[Output]:
    """
    Construct Outputs while also streaming the response with stream callback

    Gemini api seems to not support more than one candidate, so we'll just use the first one
    """
    output_list = []

    acc = ""

    async for chunk in response:
        # deconstruct chunk

        data = chunk.parts[0].text
        acc += data
        if options is not None and options.stream_callback is not None:
            options.stream_callback(data, acc, 0)

    output = ExecuteResult(
        **{
            "output_type": "execute_result",
            "data": response.candidates[0].content.parts[0].text,
            "execution_count": 0,  # Hard coded for now. If api supports multiple candidates this can be updated.
            "metadata": response.prompt_feedback.__dict__,
        }
    )

    output_list.append(output)

    return output_list


class GeminiModelParser(ParameterizedModelParser):
    def __init__(self, id: str = "gemini-pro"):
        super().__init__()
        self.model = genai.GenerativeModel(id)

    def id(self) -> str:
        """
        Returns an identifier for the model (e.g. llama-2, gpt-4, etc.).
        """
        return "GeminiModelParser"

    async def serialize(
        self,
        prompt_name: str,
        data: Dict,
        ai_config: "AIConfigRuntime",
        parameters: Optional[Dict] = None,
        **kwargs,
    ) -> List[Prompt]:
        """
        Defines how a prompt and model inference settings get serialized in the .aiconfig.

        Args:
            prompt (str): The prompt to be serialized.
            inference_settings (dict): Model-specific inference settings to be serialized.

        Returns:
            str: Serialized representation of the prompt and inference settings.
        """

        event = CallbackEvent(
            "on_serialize_start",
            __name__,
            {
                "prompt_name": prompt_name,
                "data": data,
                "parameters": parameters,
                "kwargs": kwargs,
            },
        )
        await ai_config.callback_manager.run_callbacks(event)

        raise Exception("Not Implemented")

        event = CallbackEvent("on_serialize_complete", __name__, {"result": prompts})
        await ai_config.callback_manager.run_callbacks(event)

    async def deserialize(
        self, prompt: Prompt, aiconfig: "AIConfigRuntime", params: Optional[Dict] = None
    ) -> Dict:
        """
        Defines how to parse a prompt in the .aiconfig for a particular model
        and constructs the completion params for that model.

        Args:
            serialized_data (str): Serialized data from the .aiconfig.

        Returns:
            dict: Model-specific completion parameters.
        """
        await aiconfig.callback_manager.run_callbacks(
            CallbackEvent(
                "on_deserialize_start", __name__, {"prompt": prompt, "params": params}
            )
        )


        # Build Completion data
        model_settings = self.get_model_settings(prompt, aiconfig)

        completion_data = refine_chat_completion_params(model_settings)

        

        messages = self._construct_chat_history(prompt, aiconfig, params)


        if contains_prompt_template(prompt):
            resolved_prompt = resolve_prompt(prompt, params, aiconfig)
            messages.append({"role": "user", "parts": [{"text": resolved_prompt}]})
            completion_data["contents"] = messages
        else:
            prompt_input = prompt.input
            # This is checking attributes and not a dict like object. in schema.py, PromptInput allows arbitrary attributes/data, and gets serialized as an attribute because it is a pydantic type
            if not hasattr(prompt_input, "contents"):
                raise ValueError("Unable to deserialize input. Prompt input type is not a string, Gemini Model Parser expects prompt input to contain a 'contents' field as expected by Gemini API")
            
            # If contents is already set, no need to construct chat history and completion data. There is a different data format as input. Supported types:
            # - string
            # - list of strings
            # - role dict {"role": "user", "parts": "Hello"}
            # - Role dict with multiple parts {"role": "user", "parts": ["Hello", "World"]}
            completion_data['contents'] = parameterize_supported_gemini_input_data(prompt_input.contents, prompt, aiconfig, params)

        await aiconfig.callback_manager.run_callbacks(
            CallbackEvent(
                "on_deserialize_complete", __name__, {"output": completion_data}
            )
        )
        return completion_data

    async def run_inference(
        self,
        prompt: Prompt,
        aiconfig: "AIConfigRuntime",
        options: InferenceOptions,
        parameters,
    ) -> list[Output]:
        """
        Invoked to run a prompt in the .aiconfig. This method should perform
        the actual model inference based on the provided prompt and inference settings.

        Args:
            prompt (str): The input prompt.
            inference_settings (dict): Model-specific inference settings.

        Returns:
            ExecuteResult: The response from the model.
        """
        await aiconfig.callback_manager.run_callbacks(
            CallbackEvent(
                "on_run_start",
                __name__,
                {"prompt": prompt, "options": options, "parameters": parameters},
            )
        )

        # Auth check. don't need to explicitly set the key as long as this is set as an env var. genai.configure() will pick it up
        get_api_key_from_environment("GOOGLE_API_KEY")
        genai.configure()

        # TODO: check and handle api key here
        completion_data = await self.deserialize(prompt, aiconfig, parameters)

        stream = True  # Default value
        if options is not None and options.stream is not None:
            stream = options.stream
        elif "stream" in completion_data:
            stream = completion_data["stream"]
        completion_data["stream"] = stream

        response = await self.model.generate_content_async(**completion_data)

        outputs = None
        if stream:
            outputs = await construct_stream_outputs(response, options)
        else:
            outputs = construct_regular_outputs(response)

        prompt.outputs = outputs
        await aiconfig.callback_manager.run_callbacks(
            CallbackEvent("on_run_complete", __name__, {"result": prompt.outputs})
        )
        return prompt.outputs

    def get_output_text(
        self,
        prompt: Prompt,
        aiconfig: "AIConfigRuntime",
        output: Optional[Output] = None,
    ) -> str:
        if not output:
            output = aiconfig.get_latest_output(prompt)

        if not output:
            return ""

        if output.output_type == "execute_result":
            output_data = output.data
            if isinstance(output_data, str):
                return output_data
            else:
                raise ValueError("Not Implemented")

        else:
            return ""

    def _construct_chat_history(
        self, prompt: Prompt, aiconfig: "AIConfigRuntime", params: Dict
    ) -> List:
        """
        Constructs the chat history for the model
        """
        messages = []
        # Default to always use chat context
        remember_chat_context = not hasattr(
            prompt.metadata, "remember_chat_context"
        ) or (
            hasattr(prompt.metadata, "remember_chat_context")
            and prompt.metadata.remember_chat_context != False
        )
        if remember_chat_context:
            # handle chat history. check previous prompts for the same model. if same model, add prompt and its output to completion data if it has a completed output
            for i, previous_prompt in enumerate(aiconfig.prompts):
                # include prompts upto the current one
                if previous_prompt.name == prompt.name:
                    break

                previous_prompt_is_same_model = aiconfig.get_model_name(
                    previous_prompt
                ) == aiconfig.get_model_name(prompt)
                if previous_prompt_is_same_model:
                    previous_prompt_template = resolve_prompt(
                        previous_prompt, params, aiconfig
                    )
                    previous_prompt_output = aiconfig.get_latest_output(previous_prompt)
                    previous_prompt_output_text = self.get_output_text(
                        previous_prompt, aiconfig, previous_prompt_output
                    )

                    messages.append(
                        {"role": "user", "parts": [{"text": previous_prompt_template}]}
                    )
                    messages.append(
                        {
                            "role": "model",
                            "parts": [{"text": previous_prompt_output_text}],
                        }
                    )

        return messages


def refine_chat_completion_params(model_settings):
    # completion parameters to be used for Gemini's api
    # messages handled seperately
    supported_keys = {
        "contents",
        "generation_config",
        "safety_settings",
        "stream",
    }
    completion_data = {}
    for key in model_settings:
        if key.lower() in supported_keys:
            completion_data[key.lower()] = model_settings[key]

    return completion_data


def parameterize_supported_gemini_input_data(part: Any, prompt: Prompt, aiconfig: "AIConfigRuntime", input_params: dict[str, Any]):
    """
    Parameterizes the input for the Gemini API based on the type of the input part.
    This function specifically handles string-based types in the context of Gemini API.

    Gemini API supports a variety of inputs, some of which are called 'parts', coined by Gemini API.
    * Important: This method supports a subset of the Gemini API inputs. Specifically, types that contain strings (and not protos, images, etc)

    Args:
        part (Any): The part to be parameterized
        prompt (Prompt): The prompt object
        aiconfig (AIConfigRuntime): The AIConfigRuntime object
        input_params (Dict): The input parameters to be used for parameterization

    Returns:
        Any: The parameterized part
    """
    if isinstance(part, str):
        return resolve_prompt_string(prompt, input_params, aiconfig, part)
    elif isinstance(part, list):
        # This is expecting a list of strings. If its anything else, this will probably fail.
        return [parameterize_supported_gemini_input_data(item, prompt, aiconfig, input_params) for item in part]
    elif isinstance(part, dict):
        # Expect "parts" key to be present in role dict
        if "parts" in part:
            part = copy.deepcopy(part)
            part["parts"] = parameterize_supported_gemini_input_data(part["parts"], prompt, aiconfig, input_params)
            return part
        else:
            raise ValueError(f"Input Dictionary to Gemini Model Parser must contain a 'parts' key. Input provided: {part}")
    else:
        raise ValueError(f"Unable to parameterize part. Unsupported type: {type(part)} with value: {part}")


def contains_prompt_template(prompt: Prompt):
    """
    Check if a prompt's input is a valid string.
    """
    return isinstance(prompt.input, str) or (
        hasattr(prompt.input, "data") and isinstance(prompt.input.data, str)
    )


AIConfigRuntime.register_model_parser(GeminiModelParser("gemini-pro"), "gemini-pro")
