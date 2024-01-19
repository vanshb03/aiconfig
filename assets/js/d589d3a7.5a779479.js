"use strict";(self.webpackChunkaiconfig_docs=self.webpackChunkaiconfig_docs||[]).push([[162],{6443:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>g,frontMatter:()=>l,metadata:()=>d,toc:()=>p});var i=t(5893),a=t(1151),o=t(4866),r=t(5162),s=t(4883);const l={sidebar_position:2},c="Getting Started",d={id:"getting-started",title:"Getting Started",description:"AIConfig is a framework that makes it easy to build generative AI applications for production. It manages generative AI prompts and model parameters as JSON-serializable configs that can be version controlled, evaluated, and opened in a local editor for rapid prototyping. Please read AIConfig Basics to learn more.",source:"@site/docs/getting-started.md",sourceDirName:".",slug:"/getting-started",permalink:"/docs/getting-started",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docSidebar",previous:{title:"What is AIConfig",permalink:"/docs/basics"},next:{title:"AIConfig Editor",permalink:"/docs/editor"}},u={},p=[{value:"Quickstart",id:"quickstart",level:2},{value:"Getting Started Tutorial",id:"getting-started-tutorial",level:2},{value:"Install",id:"install",level:2},{value:"Python",id:"python",level:4},{value:"Node.js (TypeScript)",id:"nodejs-typescript",level:4},{value:"Setup your API Key(s)",id:"setup-your-api-keys",level:2},{value:"Open AIConfig Editor",id:"open-aiconfig-editor",level:2},{value:"Create an AIConfig",id:"create-an-aiconfig",level:2},{value:"Use AIConfig in your Application Code",id:"use-aiconfig-in-your-application-code",level:2},{value:"Edit your AIConfig",id:"edit-your-aiconfig",level:2},{value:"Next Steps",id:"next-steps",level:2},{value:"Coming Soon",id:"coming-soon",level:2},{value:"Questions or Feedback?",id:"questions-or-feedback",level:2}];function h(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"getting-started",children:"Getting Started"}),"\n",(0,i.jsxs)(n.p,{children:["AIConfig is a framework that makes it easy to build generative AI applications for production. It manages generative AI prompts and model parameters as JSON-serializable configs that can be version controlled, evaluated, and opened in a local editor for rapid prototyping. Please read ",(0,i.jsx)(n.a,{href:"https://aiconfig.lastmileai.dev/docs/basics/",children:"AIConfig Basics"})," to learn more."]}),"\n",(0,i.jsx)(n.h2,{id:"quickstart",children:"Quickstart"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"pip3 install python-aiconfig"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"export OPENAI_API_KEY='your-key'"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"aiconfig edit"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"getting-started-tutorial",children:"Getting Started Tutorial"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"In this tutorial, we will create a customizable NYC travel itinerary using AIConfig."})}),"\n",(0,i.jsx)(n.h2,{id:"install",children:"Install"}),"\n",(0,i.jsx)(n.h4,{id:"python",children:"Python"}),"\n",(0,i.jsxs)(o.Z,{groupId:"package-manager",queryString:!0,defaultValue:s.Z.defaultPythonPackageManager,values:s.Z.pythonPackageManagers,children:[(0,i.jsx)(r.Z,{value:"pip",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ pip install --user python-aiconfig\n"})})}),(0,i.jsx)(r.Z,{value:"poetry",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ poetry add python-aiconfig\n"})})})]}),"\n",(0,i.jsx)(n.h4,{id:"nodejs-typescript",children:"Node.js (TypeScript)"}),"\n",(0,i.jsxs)(o.Z,{groupId:"package-manager",queryString:!0,defaultValue:s.Z.defaultNodePackageManager,values:s.Z.nodePackageManagers,children:[(0,i.jsx)(r.Z,{value:"npm",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ npm install aiconfig\n"})})}),(0,i.jsx)(r.Z,{value:"yarn",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ yarn add aiconfig\n"})})})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note:"})," You need to install the python AIConfig package to create and edit your configs using the AIConfig Editor. You can still use the AIConfig Node SDK to interact with your config in your application code."]}),"\n",(0,i.jsx)(n.h2,{id:"setup-your-api-keys",children:"Setup your API Key(s)"}),"\n",(0,i.jsx)(n.p,{children:"You will need to specifiy API keys for the model providers (i.e. OpenAI, Google, HuggingFace) you plan to use. We recommend adding your API keys as environment variables so that they are accessible for all projects. The python library will automatically detect and use them without you having to write any code."}),"\n",(0,i.jsxs)(n.p,{children:["For this tutorial, you will need to have an OpenAI API key that has access to GPT-4. Setup help for other API keys is available ",(0,i.jsx)(n.a,{href:"https://aiconfig.lastmileai.dev/docs/editor#env-api-keys",children:"here"}),"."]}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsx)("summary",{children:" Setup your OpenAI API Key as a environment variable (MacOS / Linux / Windows)"}),(0,i.jsxs)("div",{children:[(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Get your OpenAI API Key: ",(0,i.jsx)(n.a,{href:"https://platform.openai.com/account/api-keys",children:"https://platform.openai.com/account/api-keys"})]}),"\n",(0,i.jsx)(n.li,{children:"Open Terminal"}),"\n",(0,i.jsxs)(n.li,{children:["Edit Bash Profile: Use the command ",(0,i.jsx)(n.code,{children:"nano ~/.bash_profile"})," or ",(0,i.jsx)(n.code,{children:"nano ~/.zshrc"})," (for newer MacOS versions) to open the profile file in a text editor."]}),"\n",(0,i.jsxs)(n.li,{children:["Add Environment Variable: In the editor, add the line below, replacing ",(0,i.jsx)(n.em,{children:"your-api-key-here"})," with your actual API key:"]}),"\n"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"export OPENAI_API_KEY='your-api-key-here'\n"})}),(0,i.jsxs)(n.ol,{start:"5",children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.em,{children:"[Optional] add in environment variables for your other model providers (Google, HuggingFace, Anyscale, etc.)."})}),"\n",(0,i.jsxs)(n.li,{children:["Save and Exit: Press ",(0,i.jsx)(n.code,{children:"Ctrl+O"})," followed by ",(0,i.jsx)(n.code,{children:"ENTER"})," to write the change. Then ",(0,i.jsx)(n.code,{children:"Ctrl+X"})," to close the editor."]}),"\n",(0,i.jsxs)(n.li,{children:["Load Your Profile: Use the command ",(0,i.jsx)(n.code,{children:"source ~/.bash_profile"})," or ",(0,i.jsx)(n.code,{children:"source ~/.zshrc"})," to load the updated profile."]}),"\n",(0,i.jsxs)(n.li,{children:["Verification: Verify the setup by typing ",(0,i.jsx)(n.code,{children:"echo $OPENAI_API_KEY"})," in the terminal. It should display your API key."]}),"\n"]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"open-aiconfig-editor",children:"Open AIConfig Editor"}),"\n",(0,i.jsxs)(n.p,{children:["AIConfig Editor allows you to visually create and edit the prompt chains and model parameters that are stored as AIConfigs. You can also chain prompts and use global and local parameters in your prompts. Learn more about ",(0,i.jsx)(n.a,{href:"https://aiconfig.lastmileai.dev/docs/editor",children:"AIConfig Editor"}),"."]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Open your Terminal"}),"\n",(0,i.jsxs)(n.li,{children:["Run this command: ",(0,i.jsx)(n.code,{children:"aiconfig edit --aiconfig-path=travel.aiconfig.json"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["This will open AIConfig Editor in your default browser at ",(0,i.jsx)(n.a,{href:"http://localhost:8080/",children:"http://localhost:8080/"})," and create a new AIConfig JSON file ",(0,i.jsx)(n.code,{children:"travel.aiconfig.json"})," in your current directory."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://github.com/lastmile-ai/aiconfig/assets/81494782/ae3188c7-2471-41d4-bb7f-9012284d9a88",alt:"img_editor"})}),"\n",(0,i.jsx)(n.p,{children:"An AIConfig JSON file is generated - shown below:"}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsx)("summary",{children:(0,i.jsx)(n.code,{children:"travel.aiconfig.json"})}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "name": "",\n  "schema_version": "latest",\n  "metadata": {\n    "parameters": {},\n    "models": {}\n  },\n  "description": "",\n  "prompts": [\n    {\n      "name": "prompt_1",\n      "input": "",\n      "metadata": {\n        "model": "gpt-4",\n        "parameters": {}\n      },\n      "outputs": []\n    }\n  ],\n  "$schema": "https://json.schemastore.org/aiconfig-1.0"\n}\n'})})]}),"\n",(0,i.jsx)(n.h2,{id:"create-an-aiconfig",children:"Create an AIConfig"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"1. Give your AIConfig a title and a description."})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://github.com/lastmile-ai/aiconfig/assets/81494782/6c929c8d-1f91-4ea8-aacf-63bd985d4600",alt:"image2"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.strong,{children:["2. Create your first prompt ",(0,i.jsx)(n.code,{children:"get_activities"}),"."]})}),"\n",(0,i.jsxs)(n.p,{children:['This prompt uses GPT-3.5 to generate a list of activities in NYC. Prompt is "Tell me 10 fun attractions to do in NYC". Run the prompt using the ',(0,i.jsx)(n.strong,{children:"Play"})," button.\n",(0,i.jsx)(n.img,{src:"https://github.com/lastmile-ai/aiconfig/assets/81494782/3463be60-cd39-4e3b-8081-eb616e8967f8",alt:"image3"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"3. Click the Save button."})}),"\n",(0,i.jsx)(n.p,{children:"Notice that your AIConfig JSON file updates with the prompt. Your work in AIConfig Editor will auto-save every 15 seconds but you can always manually save with the button."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.strong,{children:["4. Create your second prompt ",(0,i.jsx)(n.code,{children:"gen_itinerary"})," which depends on your first prompt."]})}),"\n",(0,i.jsxs)(n.p,{children:["This prompt uses GPT-4 to generate an itinerary based on the output of our first prompt ",(0,i.jsx)(n.code,{children:"get_activities"})," (chaining) and a local variable ",(0,i.jsx)(n.code,{children:"order_by"}),". Local parameters are local to the prompt cell whereas global parameters can be used across prompt cells in the editor. Run the prompt using the Play button."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://github.com/lastmile-ai/aiconfig/assets/81494782/73558099-b42b-48d2-bac4-3023766da5a0",alt:"img_editor"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.strong,{children:["5. Click the ",(0,i.jsx)(n.strong,{children:"Save"})," button."]})}),"\n",(0,i.jsx)(n.p,{children:"Notice that your AIConfig JSON file updates with the second prompt, including the chaining logic and parameters. See below:"}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsx)("summary",{children:(0,i.jsx)(n.code,{children:"travel.aiconfig.json"})}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "name": "NYC Trip Planner",\n  "description": "Intrepid explorer with ChatGPT and AIConfig",\n  "schema_version": "latest",\n  "metadata": {\n    "models": {\n      "gpt-3.5-turbo": {\n        "model": "gpt-3.5-turbo",\n        "top_p": 1,\n        "temperature": 1\n      },\n      "gpt-4": {\n        "model": "gpt-4",\n        "max_tokens": 3000\n      }\n    },\n    "default_model": "gpt-3.5-turbo"\n  },\n  "prompts": [\n    {\n      "name": "get_activities",\n      "input": "Tell me 10 fun attractions to do in NYC."\n    },\n    {\n      "name": "gen_itinerary",\n      "input": "Generate an itinerary ordered by {{order_by}} for these activities: {{get_activities.output}}.",\n      "metadata": {\n        "model": "gpt-4",\n        "parameters": {\n          "order_by": "geographic location"\n        }\n      }\n    }\n  ]\n}\n'})})]}),"\n",(0,i.jsx)(n.h2,{id:"use-aiconfig-in-your-application-code",children:"Use AIConfig in your Application Code"}),"\n",(0,i.jsx)(n.p,{children:"You can execute the prompts from the AIConfig generated from Local Editor in your application code using either the python or Node SDK. In this section we will demonstrate basic features of the SDK. Please refer to the API reference documentation for more features."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.strong,{children:["1. Create a new script ",(0,i.jsx)(n.code,{children:"app.py"})," or ",(0,i.jsx)(n.code,{children:"app.ts"}),"."]})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"2. Load your AIConfig."})}),"\n",(0,i.jsxs)(o.Z,{groupId:"aiconfig-language",queryString:!0,defaultValue:s.Z.defaultAIConfigLanguage,values:s.Z.aiConfigLanguages,children:[(0,i.jsx)(r.Z,{value:"python",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",metastring:'title="app.py"',children:'from aiconfig import AIConfigRuntime, InferenceOptions\nimport asyncio\n\nconfig = AIConfigRuntime.load("travel.aiconfig.json")\n'})})}),(0,i.jsx)(r.Z,{value:"node",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",metastring:'title="app.ts"',children:'import * as path from "path";\nimport { AIConfigRuntime, InferenceOptions } from "aiconfig";\n\nasync function travelWithGPT() {\n  const aiConfig = AIConfigRuntime.load(\n    path.join(__dirname, "travel.aiconfig.json")\n  );\n}\n\ntravelWithGPT();\n'})})})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"3. Setup streaming for your model responses."})}),"\n",(0,i.jsxs)(o.Z,{groupId:"aiconfig-language",queryString:!0,defaultValue:s.Z.defaultAIConfigLanguage,values:s.Z.aiConfigLanguages,children:[(0,i.jsx)(r.Z,{value:"python",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",metastring:'title="app.py"',children:"inference_options = InferenceOptions(stream=True)\n"})})}),(0,i.jsx)(r.Z,{value:"node",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",metastring:'title="app.ts"',children:'async function travelWithGPT() {\n  const aiConfig = AIConfigRuntime.load(\n    path.join(__dirname, "travel.aiconfig.json")\n  );\n\n  const options: InferenceOptions = {\n    callbacks: {\n      streamCallback: (data: any, _acc: any, _idx: any) => {\n        // Write streamed content to console\n        process.stdout.write(data?.content || "\\n");\n      },\n    },\n  };\n}\n\ntravelWithGPT();\n'})})})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.strong,{children:["4. Run ",(0,i.jsx)(n.code,{children:"get_activities"})," prompt from the AIConfig."]})}),"\n",(0,i.jsx)(n.p,{children:"Add these lines to your script. To see the output, open your terminal and run your script."}),"\n",(0,i.jsxs)(o.Z,{groupId:"aiconfig-language",queryString:!0,defaultValue:s.Z.defaultAIConfigLanguage,values:s.Z.aiConfigLanguages,children:[(0,i.jsx)(r.Z,{value:"python",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",metastring:'title="app.py"',children:'async def travelWithGPT():\n  get_activities_response = await config.run("get_activities", options=inference_options)\n\nasyncio.run(travelWithGPT())\n'})})}),(0,i.jsx)(r.Z,{value:"node",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",metastring:'title="app.ts"',children:'async function travelWithGPT() {\n  const aiConfig = AIConfigRuntime.load(\n    path.join(__dirname, "travel.aiconfig.json")\n  );\n\n  const options: InferenceOptions = {\n    callbacks: {\n      streamCallback: (data: any, _acc: any, _idx: any) => {\n        // Write streamed content to console\n        process.stdout.write(data?.content || "\\n");\n      },\n    },\n  };\n\n  // Run a single prompt\n  await aiConfig.run("get_activities", /*params*/ undefined, options);\n}\n\ntravelWithGPT();\n'})})})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.strong,{children:["5. Run the ",(0,i.jsx)(n.code,{children:"gen_itinerary"})," prompt from the AIConfig."]})}),"\n",(0,i.jsx)(n.p,{children:"Replace the travelWithGPT() function code with these line(s). To see the output, open your terminal and run your script."}),"\n",(0,i.jsxs)(o.Z,{groupId:"aiconfig-language",queryString:!0,defaultValue:s.Z.defaultAIConfigLanguage,values:s.Z.aiConfigLanguages,children:[(0,i.jsx)(r.Z,{value:"python",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",metastring:'title="app.py"',children:'async def travelWithGPT():\n  gen_itinerary_response = await config.run("gen_itinerary", options=inference_options, run_with_dependencies=True)\n\nasyncio.run(travelWithGPT())\n'})})}),(0,i.jsx)(r.Z,{value:"node",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",metastring:'title="app.ts"',children:'async function travelWithGPT() {\n  const aiConfig = AIConfigRuntime.load(\n    path.join(__dirname, "travel.aiconfig.json")\n  );\n\n  const options: InferenceOptions = {\n    callbacks: {\n      streamCallback: (data: any, _acc: any, _idx: any) => {\n        // Write streamed content to console\n        process.stdout.write(data?.content || "\\n");\n      },\n    },\n  };\n\n  // Run a prompt with dependencies\n  await aiConfig.runWithDependencies(\n    "gen_itinerary",\n    /*params*/ { order_by: "duration" },\n    options\n  );\n}\n\ntravelWithGPT();\n'})})})]}),"\n",(0,i.jsxs)(n.p,{children:["You will see the model response in your terminal. Since this prompt depends on another prompt, we see the response from the ",(0,i.jsx)(n.code,{children:"get_activities"})," prompt followed by the response from the ",(0,i.jsx)(n.code,{children:"gen_itinerary"})," prompt."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.strong,{children:["6. Run the ",(0,i.jsx)(n.code,{children:"gen_itinerary"})," prompt with a different parameter."]})}),"\n",(0,i.jsx)(n.p,{children:"Replace the travelWithGPT() function code with these line(s). To see the output, open your terminal and run your script."}),"\n",(0,i.jsxs)(o.Z,{groupId:"aiconfig-language",queryString:!0,defaultValue:s.Z.defaultAIConfigLanguage,values:s.Z.aiConfigLanguages,children:[(0,i.jsx)(r.Z,{value:"python",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",metastring:'title="app.py"',children:'async def travelWithGPT():\n  gen_itinerary_response = await config.run("gen_itinerary", params = {"order_by" : "location"}, options=inference_options, run_with_dependencies=True)\n\nasyncio.run(travelWithGPT())\n'})})}),(0,i.jsx)(r.Z,{value:"node",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",metastring:'title="app.ts"',children:'async function travelWithGPT() {\n  const aiConfig = AIConfigRuntime.load(\n    path.join(__dirname, "travel.aiconfig.json")\n  );\n\n  const options: InferenceOptions = {\n    callbacks: {\n      streamCallback: (data: any, _acc: any, _idx: any) => {\n        // Write streamed content to console\n        process.stdout.write(data?.content || "\\n");\n      },\n    },\n  };\n\n  // Run a prompt with dependencies\n  await aiConfig.runWithDependencies(\n    "gen_itinerary",\n    /*params*/ { order_by: "location" },\n    options\n  );\n}\n\ntravelWithGPT();\n'})})})]}),"\n",(0,i.jsx)(n.p,{children:"You will see the model response in your terminal. Notice how the output differs with the updated parameter."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"7. Save the aiconfig to disk and serialize outputs from the model run."})}),"\n",(0,i.jsx)(n.p,{children:"Run your script."}),"\n",(0,i.jsxs)(o.Z,{groupId:"aiconfig-language",queryString:!0,defaultValue:s.Z.defaultAIConfigLanguage,values:s.Z.aiConfigLanguages,children:[(0,i.jsx)(r.Z,{value:"python",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",metastring:'title="app.py"',children:"config.save('updated_travel.aiconfig.json', include_outputs=True)\n"})})}),(0,i.jsx)(r.Z,{value:"node",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",metastring:'title="app.ts"',children:'async function travelWithGPT() {\n  const aiConfig = AIConfigRuntime.load(\n    path.join(__dirname, "travel.aiconfig.json")\n  );\n\n  const options: InferenceOptions = {\n    callbacks: {\n      streamCallback: (data: any, _acc: any, _idx: any) => {\n        // Write streamed content to console\n        process.stdout.write(data?.content || "\\n");\n      },\n    },\n  };\n\n  // Run a prompt with dependencies\n  await aiConfig.runWithDependencies(\n    "gen_itinerary",\n    /*params*/ { order_by: "location" },\n    options\n  );\n\n  // Save and serialize outputs\n  aiConfig.save(\n    "updated.aiconfig.json",\n    /*saveOptions*/ { serializeOutputs: true }\n  );\n}\n\ntravelWithGPT();\n'})})})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Full Script"})}),"\n",(0,i.jsxs)(o.Z,{groupId:"aiconfig-language",queryString:!0,defaultValue:s.Z.defaultAIConfigLanguage,values:s.Z.aiConfigLanguages,children:[(0,i.jsx)(r.Z,{value:"python",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",metastring:'title="app.py"',children:'from aiconfig import AIConfigRuntime, InferenceOptions\nimport asyncio\n\nconfig = AIConfigRuntime.load("travel.aiconfig.json")\ninference_options = InferenceOptions(stream=True)\n\nasync def travelWithGPT():\n  gen_itinerary_response = await config.run("gen_itinerary", params = {"order_by" : "location"}, options=inference_options, run_with_dependencies=True)\n\nasyncio.run(travelWithGPT())\nconfig.save(\'updated_travel.aiconfig.json\', include_outputs=True)\n'})})}),(0,i.jsx)(r.Z,{value:"node",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",metastring:'title="app.ts"',children:'import * as path from "path";\nimport { AIConfigRuntime, InferenceOptions } from "aiconfig";\n\nasync function travelWithGPT() {\n  const aiConfig = AIConfigRuntime.load(\n    path.join(__dirname, "travel.aiconfig.json")\n  );\n\n  const options: InferenceOptions = {\n    callbacks: {\n      streamCallback: (data: any, _acc: any, _idx: any) => {\n        // Write streamed content to console\n        process.stdout.write(data?.content || "\\n");\n      },\n    },\n  };\n\n  // Run a prompt with dependencies\n  await aiConfig.runWithDependencies(\n    "gen_itinerary",\n    /*params*/ { order_by: "location" },\n    options\n  );\n\n  // Save and serialize outputs\n  aiConfig.save(\n    "updated.aiconfig.json",\n    /*saveOptions*/ { serializeOutputs: true }\n  );\n}\n\ntravelWithGPT();\n'})})})]}),"\n",(0,i.jsx)(n.h2,{id:"edit-your-aiconfig",children:"Edit your AIConfig"}),"\n",(0,i.jsx)(n.p,{children:"You can iterate and edit your aiconfig using the AIConfig Editor. Now that we have an aiconfig file artifact that encapsulates the generative AI parts of our application, the application code doesn't need to change even as the aiconfig is updated."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Open your Terminal"}),"\n",(0,i.jsxs)(n.li,{children:["Run this command: ",(0,i.jsx)(n.code,{children:"aiconfig edit --aiconfig-path=updated_travel.aiconfig.json"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["A new tab with the AIConfig Editor opens in your default browser at ",(0,i.jsx)(n.a,{href:"http://localhost:8080/",children:"http://localhost:8080/"})," with the prompts, chaining logic, and settings from ",(0,i.jsx)(n.code,{children:"updated_travel.aiconfig.json"}),". Your edits will auto-save every 15 seconds. You can also manually save with the Save button."]}),"\n",(0,i.jsx)(n.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,i.jsx)(n.p,{children:"Check out these examples and guides:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/lastmile-ai/aiconfig/tree/main/cookbooks/Function-Calling-OpenAI",children:"OpenAI function calling"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/lastmile-ai/aiconfig/tree/main/cookbooks/RAG-with-AIConfig",children:"RAG with AIConfig"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/lastmile-ai/aiconfig/tree/main/cookbooks/Wizard-GPT",children:"CLI Chatbot"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/lastmile-ai/aiconfig/tree/main/cookbooks/Basic-Prompt-Routing",children:"Prompt routing"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/lastmile-ai/aiconfig/tree/main/cookbooks/Chain-of-Verification",children:"Chain of thought"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"coming-soon",children:"Coming Soon"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Non-default model support in Local Editor"}),"\n",(0,i.jsx)(n.li,{children:"OpenAI Assistants API support"}),"\n",(0,i.jsx)(n.li,{children:"Multimodal ModelParsers: GPT4-V support, Whisper"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"questions-or-feedback",children:"Questions or Feedback?"}),"\n",(0,i.jsxs)(n.p,{children:["Join our Discord community ",(0,i.jsx)(n.a,{href:"https://discord.com/invite/xBhNKTetGx",children:"here"}),"! We welcome your feedback and are here to help with any questions."]})]})}function g(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},4883:(e,n,t)=>{t.d(n,{Z:()=>r});var i=t(412);const a=!!i.Z.canUseDOM&&navigator.platform.startsWith("Mac"),o=!!i.Z.canUseDOM&&navigator.platform.startsWith("Win"),r={defaultOs:a?"macos":o?"windows":"linux",defaultNodePackageManager:"npm",defaultPythonPackageManager:"pip",defaultPlatform:a?"ios":"android",defaultSyntax:"functional",defaultAIConfigLanguage:"python",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],nodePackageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],pythonPackageManagers:[{label:"pip",value:"pip"},{label:"poetry",value:"poetry"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],aiConfigLanguages:[{label:"Python",value:"python"},{label:"TypeScript",value:"node"}]}},5162:(e,n,t)=>{t.d(n,{Z:()=>r});t(7294);var i=t(6010);const a={tabItem:"tabItem_Ymn6"};var o=t(5893);function r(e){let{children:n,hidden:t,className:r}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,i.Z)(a.tabItem,r),hidden:t,children:n})}},4866:(e,n,t)=>{t.d(n,{Z:()=>I});var i=t(7294),a=t(6010),o=t(2466),r=t(6550),s=t(469),l=t(1980),c=t(7392),d=t(12);function u(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,i.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:i,default:a}}=e;return{value:n,label:t,attributes:i,default:a}}))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const a=(0,r.k6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l._X)(o),(0,i.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(a.location.search);n.set(o,e),a.replace({...a.location,search:n.toString()})}),[o,a])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,o=p(e),[r,l]=(0,i.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const i=t.find((e=>e.default))??t[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:n,tabValues:o}))),[c,u]=g({queryString:t,groupId:a}),[f,m]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,o]=(0,d.Nk)(t);return[a,(0,i.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:a}),j=(()=>{const e=c??f;return h({value:e,tabValues:o})?e:null})();(0,s.Z)((()=>{j&&l(j)}),[j]);return{selectedValue:r,selectValue:(0,i.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),m(e)}),[u,m,o]),tabValues:o}}var m=t(2389);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(5893);function y(e){let{className:n,block:t,selectedValue:i,selectValue:r,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),d=e=>{const n=e.currentTarget,t=l.indexOf(n),a=s[t].value;a!==i&&(c(n),r(a))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},n),children:s.map((e=>{let{value:n,label:t,attributes:o}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>l.push(e),onKeyDown:u,onClick:d,...o,className:(0,a.Z)("tabs__item",j.tabItem,o?.className,{"tabs__item--active":i===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:a}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===a));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function b(e){const n=f(e);return(0,x.jsxs)("div",{className:(0,a.Z)("tabs-container",j.tabList),children:[(0,x.jsx)(y,{...e,...n}),(0,x.jsx)(v,{...e,...n})]})}function I(e){const n=(0,m.Z)();return(0,x.jsx)(b,{...e,children:u(e.children)},String(n))}},1151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>r});var i=t(7294);const a={},o=i.createContext(a);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);