"use strict";(self.webpackChunkaiconfig_docs=self.webpackChunkaiconfig_docs||[]).push([[7928],{18:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>g,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var i=t(5893),a=t(1151),r=t(4866),o=t(5162),s=t(4883);const l={sidebar_position:5},c="Run a Prompt",u={id:"overview/run-aiconfig",title:"Run a Prompt",description:'TLDR: Call config.run("prompt_name").',source:"@site/docs/overview/run-aiconfig.md",sourceDirName:"overview",slug:"/overview/run-aiconfig",permalink:"/docs/overview/run-aiconfig",draft:!1,unlisted:!1,editUrl:"https://github.com/lastmile-ai/aiconfig/aiconfig-docs/docs/overview/run-aiconfig.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"docSidebar",previous:{title:"Passing Data into Prompts",permalink:"/docs/overview/parameters"},next:{title:"Tracing and Monitoring",permalink:"/docs/overview/monitoring-aiconfig"}},d={},p=[{value:"Run a single Prompt",id:"run-a-single-prompt",level:2},{value:"Run a Prompt chain",id:"run-a-prompt-chain",level:2},{value:"Running with cached outputs",id:"running-with-cached-outputs",level:3},{value:"Re-running the entire chain",id:"re-running-the-entire-chain",level:3},{value:"Streaming outputs",id:"streaming-outputs",level:2},{value:"Passing data into prompts",id:"passing-data-into-prompts",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"run-a-prompt",children:"Run a Prompt"}),"\n",(0,i.jsxs)(n.admonition,{type:"tip",children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"TLDR"}),": Call ",(0,i.jsx)(n.code,{children:'config.run("prompt_name")'}),"."]}),(0,i.jsxs)(n.p,{children:["If you want to re-run the transitive closure of dependencies in a prompt chain, call ",(0,i.jsx)(n.code,{children:'config.run("prompt_name", params, options, run_with_dependencies=True)'}),"."]})]}),"\n",(0,i.jsxs)(n.p,{children:["Once you've ",(0,i.jsxs)(n.a,{href:"/docs/overview/create-an-aiconfig",children:["created an ",(0,i.jsx)(n.code,{children:"aiconfig"})]}),", defined your prompts and ",(0,i.jsx)(n.a,{href:"/docs/overview/define-prompt-chain",children:"prompt chains"}),", it is time to run the prompt."]}),"\n",(0,i.jsxs)(n.p,{children:["Running a prompt means invoking model inference for that prompt. The interface for running a prompt is the same no matter what underlying model is being invoked. This is one of the things that makes ",(0,i.jsx)(n.code,{children:"aiconfig"})," powerful -- by removing model-specific logic from your application code, it streamlines your application and helps you iterate faster."]}),"\n",(0,i.jsxs)(r.Z,{groupId:"aiconfig-language",queryString:!0,defaultValue:s.Z.defaultAIConfigLanguage,values:s.Z.aiConfigLanguages,children:[(0,i.jsx)(o.Z,{value:"node",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",metastring:'title="app.ts"',children:'import * as path from "path";\nimport { AIConfigRuntime } from "aiconfig";\n\nasync function runPrompt() {\n  const config = AIConfigRuntime.load(path.join(__dirname, "aiconfig.json"));\n  const result = await config.run("prompt_name");\n  return result;\n}\n'})})}),(0,i.jsx)(o.Z,{value:"python",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",metastring:'title="app.py"',children:"from aiconfig import AIConfigRuntime\n\nconfig = AIConfigRuntime.load('aiconfig.json')\nresult = await config.run(\"prompt_name\")\n"})})})]}),"\n",(0,i.jsxs)(n.p,{children:["Under the covers, the ",(0,i.jsx)(n.code,{children:"run"})," function does a couple of things:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"It deserializes the given prompt into the data type expected by the model's inference endpoint."}),"\n",(0,i.jsxs)(n.li,{children:["It applies model settings specified in the prompt and global ",(0,i.jsx)(n.a,{href:"/docs/overview/ai-config-format#metadata",children:"metadata"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["It passes data using ",(0,i.jsx)(n.a,{href:"/docs/overview/parameters",children:"parameters"})," specified in the ",(0,i.jsx)(n.code,{children:"run"})," call."]}),"\n",(0,i.jsx)(n.li,{children:"It calls the model's inference endpoint with the fully resolved arguments in the shape expected by the model."}),"\n",(0,i.jsxs)(n.li,{children:["Finally, it caches the resulting outputs in the ",(0,i.jsx)(n.code,{children:"AIConfigRuntime"})," object."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"run-a-single-prompt",children:"Run a single Prompt"}),"\n",(0,i.jsxs)(n.p,{children:["Running a single prompt is just done with ",(0,i.jsx)(n.code,{children:"config.run"}),". The request will be routed to the model corresponding to that prompt."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["The nice side effect of this is that you can swap out ",(0,i.jsx)(n.code,{children:"aiconfig"}),"s used by your application, change the underlying models and settings, and never need to update your application code!"]})}),"\n",(0,i.jsx)(n.h2,{id:"run-a-prompt-chain",children:"Run a Prompt chain"}),"\n",(0,i.jsx)(n.h3,{id:"running-with-cached-outputs",children:"Running with cached outputs"}),"\n",(0,i.jsxs)(n.p,{children:["Consider the following example ",(0,i.jsx)(n.code,{children:"aiconfig"}),". ",(0,i.jsx)(n.code,{children:"gen_itinerary"})," is a prompt chain that depends on the output of ",(0,i.jsx)(n.code,{children:"get_activities"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "name": "NYC Trip Planner",\n  "description": "Intrepid explorer with ChatGPT and AIConfig",\n  "schema_version": "latest",\n  "metadata": {},\n  "prompts": [\n    {\n      "name": "get_activities",\n      "input": "Tell me 10 fun attractions to do in NYC.",\n      "metadata": {\n        "model": "gpt-3.5-turbo"\n      }\n    },\n    {\n      "name": "gen_itinerary",\n      "input": "Generate an itinerary ordered by geographic location for these activities: {{get_activities.output}}.",\n      "metadata": {\n        "model": "gpt-4"\n      }\n    }\n  ]\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["By default, calling ",(0,i.jsx)(n.code,{children:"gen_itinerary"})," will use the cached output for ",(0,i.jsx)(n.code,{children:"get_activities"}),"."]}),"\n",(0,i.jsxs)(r.Z,{groupId:"aiconfig-language",queryString:!0,defaultValue:s.Z.defaultAIConfigLanguage,values:s.Z.aiConfigLanguages,children:[(0,i.jsx)(o.Z,{value:"node",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",metastring:'title="app.ts"',children:'import * as path from "path";\nimport { AIConfigRuntime, InferenceOptions } from "aiconfig";\n\nasync function travelWithGPT() {\n  const config = AIConfigRuntime.load(\n    path.join(__dirname, "travel.aiconfig.json")\n  );\n\n  await config.run("get_activities");\n\n  // Uses the cached output for `get_activities` to resolve the `gen_itinerary` prompt\n  await config.run("gen_itinerary");\n}\n'})})}),(0,i.jsx)(o.Z,{value:"python",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",metastring:'title="app.py"',children:'from aiconfig import AIConfigRuntime, InferenceOptions\nconfig = AIConfigRuntime.load(\'travel.aiconfig.json\')\n\nawait config.run("get_activities")\n\n# Uses the cached output for `get_activities` to resolve the `gen_itinerary` prompt\nawait config.run("gen_itinerary");\n'})})})]}),"\n",(0,i.jsx)(n.h3,{id:"re-running-the-entire-chain",children:"Re-running the entire chain"}),"\n",(0,i.jsxs)(n.p,{children:["Running with dependencies is useful to re-executing ",(0,i.jsx)(n.a,{href:"/docs/overview/define-prompt-chain",children:"prompt chains"}),"."]}),"\n",(0,i.jsxs)(r.Z,{groupId:"aiconfig-language",queryString:!0,defaultValue:s.Z.defaultAIConfigLanguage,values:s.Z.aiConfigLanguages,children:[(0,i.jsx)(o.Z,{value:"node",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",metastring:'title="app.ts"',children:'import * as path from "path";\nimport { AIConfigRuntime, InferenceOptions } from "aiconfig";\n\nasync function travelWithGPT() {\n  const config = AIConfigRuntime.load(\n    path.join(__dirname, "travel.aiconfig.json")\n  );\n\n  // Re-runs `get_activities` first, and then uses the output to resolve the `gen_itinerary` prompt\n  await config.runWithDependencies("gen_itinerary");\n}\n'})})}),(0,i.jsx)(o.Z,{value:"python",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",metastring:'title="app.py"',children:"from aiconfig import AIConfigRuntime, InferenceOptions\nconfig = AIConfigRuntime.load('travel.aiconfig.json')\n\n# Re-runs `get_activities` first, and then uses the output to resolve the `gen_itinerary` prompt\nawait config.run(\"gen_itinerary\", run_with_dependencies=True);\n"})})})]}),"\n",(0,i.jsx)(n.h2,{id:"streaming-outputs",children:"Streaming outputs"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"run"})," API makes it easy to stream outputs in a consistent way across any model that supports it."]}),"\n",(0,i.jsxs)(n.p,{children:["You can pass in an ",(0,i.jsx)(n.code,{children:"InferenceOptions"})," object, which allows you to specify a streaming callback:"]}),"\n",(0,i.jsxs)(r.Z,{groupId:"aiconfig-language",queryString:!0,defaultValue:s.Z.defaultAIConfigLanguage,values:s.Z.aiConfigLanguages,children:[(0,i.jsx)(o.Z,{value:"node",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",metastring:'title="app.ts"',children:'import * as path from "path";\nimport { AIConfigRuntime, InferenceOptions } from "aiconfig";\n\nasync function streamOutputs() {\n  const aiConfig = AIConfigRuntime.load(\n    path.join(__dirname, "travel.aiconfig.json")\n  );\n\n  const options: InferenceOptions = {\n    callbacks: {\n      streamCallback: (data: any, _acc: any, _idx: any) => {\n        // Write streamed content to console\n        process.stdout.write(data?.content || "\\n");\n      },\n    },\n  };\n\n  // Run a single prompt\n  await aiConfig.run("get_activities", /*params*/ undefined, options);\n}\n'})})}),(0,i.jsx)(o.Z,{value:"python",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",metastring:'title="app.py"',children:"from aiconfig import AIConfigRuntime, InferenceOptions\nconfig = AIConfigRuntime.load('travel.aiconfig.json')\n\ninference_options = InferenceOptions(stream=True) # Defines a console streaming callback\nawait config.run(\"get_activities\", options=inference_options)\n"})})})]}),"\n",(0,i.jsx)(n.h2,{id:"passing-data-into-prompts",children:"Passing data into prompts"}),"\n",(0,i.jsxs)(n.p,{children:["You can pass data into prompts using parameters. Please see ",(0,i.jsx)(n.a,{href:"/docs/overview/parameters",children:"this guide"})," to learn more."]})]})}function g(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},4883:(e,n,t)=>{t.d(n,{Z:()=>o});var i=t(412);const a=!!i.Z.canUseDOM&&navigator.platform.startsWith("Mac"),r=!!i.Z.canUseDOM&&navigator.platform.startsWith("Win"),o={defaultOs:a?"macos":r?"windows":"linux",defaultNodePackageManager:"npm",defaultPythonPackageManager:"pip",defaultPlatform:a?"ios":"android",defaultSyntax:"functional",defaultAIConfigLanguage:"python",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],nodePackageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],pythonPackageManagers:[{label:"pip",value:"pip"},{label:"poetry",value:"poetry"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],aiConfigLanguages:[{label:"TypeScript",value:"node"},{label:"Python",value:"python"}]}},5162:(e,n,t)=>{t.d(n,{Z:()=>o});t(7294);var i=t(6010);const a={tabItem:"tabItem_Ymn6"};var r=t(5893);function o(e){let{children:n,hidden:t,className:o}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,i.Z)(a.tabItem,o),hidden:t,children:n})}},4866:(e,n,t)=>{t.d(n,{Z:()=>w});var i=t(7294),a=t(6010),r=t(2466),o=t(6550),s=t(469),l=t(1980),c=t(7392),u=t(12);function d(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,i.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:i,default:a}}=e;return{value:n,label:t,attributes:i,default:a}}))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const a=(0,o.k6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l._X)(r),(0,i.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(a.location.search);n.set(r,e),a.replace({...a.location,search:n.toString()})}),[r,a])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,r=p(e),[o,l]=(0,i.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const i=t.find((e=>e.default))??t[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:n,tabValues:r}))),[c,d]=g({queryString:t,groupId:a}),[f,m]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,r]=(0,u.Nk)(t);return[a,(0,i.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:a}),v=(()=>{const e=c??f;return h({value:e,tabValues:r})?e:null})();(0,s.Z)((()=>{v&&l(v)}),[v]);return{selectedValue:o,selectValue:(0,i.useCallback)((e=>{if(!h({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),m(e)}),[d,m,r]),tabValues:r}}var m=t(2389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(5893);function j(e){let{className:n,block:t,selectedValue:i,selectValue:o,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.o5)(),u=e=>{const n=e.currentTarget,t=l.indexOf(n),a=s[t].value;a!==i&&(c(n),o(a))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},n),children:s.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>l.push(e),onKeyDown:d,onClick:u,...r,className:(0,a.Z)("tabs__item",v.tabItem,r?.className,{"tabs__item--active":i===n}),children:t??n},n)}))})}function b(e){let{lazy:n,children:t,selectedValue:a}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===a));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function y(e){const n=f(e);return(0,x.jsxs)("div",{className:(0,a.Z)("tabs-container",v.tabList),children:[(0,x.jsx)(j,{...e,...n}),(0,x.jsx)(b,{...e,...n})]})}function w(e){const n=(0,m.Z)();return(0,x.jsx)(y,{...e,children:d(e.children)},String(n))}},1151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>o});var i=t(7294);const a={},r=i.createContext(a);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);