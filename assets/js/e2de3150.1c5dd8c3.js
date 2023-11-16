"use strict";(self.webpackChunkaiconfig_docs=self.webpackChunkaiconfig_docs||[]).push([[7007],{8703:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>f,frontMatter:()=>l,metadata:()=>d,toc:()=>p});var t=a(5893),o=a(1151),i=a(4866),r=a(5162),s=a(4883);const l={sidebar_position:2},c="Create an AIConfig",d={id:"overview/create-an-aiconfig",title:"Create an AIConfig",description:"There are 2 ways to create an aiconfig from scratch.",source:"@site/docs/overview/create-an-aiconfig.md",sourceDirName:"overview",slug:"/overview/create-an-aiconfig",permalink:"/docs/overview/create-an-aiconfig",draft:!1,unlisted:!1,editUrl:"https://github.com/lastmile-ai/aiconfig/aiconfig-docs/docs/overview/create-an-aiconfig.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docSidebar",previous:{title:"AIConfig Specification",permalink:"/docs/overview/ai-config-format"},next:{title:"Define a Prompt Chain",permalink:"/docs/overview/define-prompt-chain"}},u={},p=[{value:"AIConfig SDK",id:"aiconfig-sdk",level:2},{value:"Create <code>aiconfig</code> programmatically",id:"create-aiconfig-programmatically",level:3},{value:"OpenAI API Python Wrapper",id:"openai-api-python-wrapper",level:3},{value:"AI Workbook editor",id:"ai-workbook-editor",level:2},{value:"Editing existing AIConfig",id:"editing-existing-aiconfig",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"create-an-aiconfig",children:"Create an AIConfig"}),"\n",(0,t.jsxs)(n.p,{children:["There are 2 ways to create an ",(0,t.jsx)(n.code,{children:"aiconfig"})," from scratch."]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Using the ",(0,t.jsx)(n.a,{href:"#aiconfig-sdk",children:"AIConfig SDK"})]}),"\n",(0,t.jsxs)(n.li,{children:["Using the ",(0,t.jsx)(n.a,{href:"#ai-workbook-editor",children:"AI Workbook editor"})]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"aiconfig-sdk",children:"AIConfig SDK"}),"\n",(0,t.jsxs)(n.h3,{id:"create-aiconfig-programmatically",children:["Create ",(0,t.jsx)(n.code,{children:"aiconfig"})," programmatically"]}),"\n",(0,t.jsxs)(n.p,{children:["You can use the ",(0,t.jsx)(n.code,{children:"create"})," function to create an empty ",(0,t.jsx)(n.code,{children:"aiconfig"}),". To create prompts in the config, you can use the ",(0,t.jsx)(n.code,{children:"serialize"})," function, which takes in data in the form that a model expects (e.g. OpenAI completion params), and creates Prompt objects that can be saved in the ",(0,t.jsx)(n.code,{children:"aiconfig"}),"."]}),"\n",(0,t.jsxs)(i.Z,{groupId:"aiconfig-language",queryString:!0,defaultValue:s.Z.defaultAIConfigLanguage,values:s.Z.aiConfigLanguages,children:[(0,t.jsx)(r.Z,{value:"node",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",metastring:'title="app.ts"',children:'import OpenAI from "openai";\nimport * as path from "path";\nimport { AIConfigRuntime } from "aiconfig";\n\nasync function createAIConfig() {\n  const aiConfig = AIConfigRuntime.create(\n    "MyAIConfig",\n    "This is my new AIConfig"\n  );\n\n  // OpenAI completion params\n  const model = "gpt-4-0613";\n  const data: OpenAI.Chat.Completions.ChatCompletionCreateParams = {\n    model,\n    messages: [\n      { role: "user", content: "Say this is a test" },\n      { role: "assistant", content: "This is a test." },\n      { role: "user", content: "What do you say?" },\n    ],\n  };\n\n  // Serialize the data into the aiconfig format.\n  const result = await aiConfig.serialize(model, data, "demoPrompt");\n  const prompts = Array.isArray(result) ? result : [result];\n\n  // Add the prompts to the aiconfig\n  for (const prompt of prompts) {\n    aiConfig.addPrompt(prompt);\n  }\n\n  // Try running "demoPrompt" (this will run "What do you say?")\n  const output = await aiConfig.run("demoPrompt");\n\n  // Save the aiconfig to disk\n  aiConfig.save("new.aiconfig.json", { serializeOutputs: true });\n}\n'})})}),(0,t.jsxs)(r.Z,{value:"python",children:[(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://github.com/lastmile-ai/aiconfig/blob/main/cookbooks/Create-AIConfig-Programmatically/create_aiconfig_programmatically.ipynb",children:"Clone this notebook"})," to create an ",(0,t.jsx)(n.code,{children:"aiconfig"})," programmatically."]})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",metastring:'title="app.py"',children:'from aiconfig import AIConfigRuntime\n\nnew_config = AIConfigRuntime.create("my_aiconfig", "This is my new AIConfig")\n\n# OpenAI completion params\nmodel = "gpt-4-0613"\ndata = {\n    "model": model,\n    "messages": [\n      { "role": "user", "content": "Say this is a test" },\n      { "role": "assistant", "content": "This is a test." },\n      { "role": "user", "content": "What do you say?" }\n    ]\n}\n\n# Serialize the data into the aiconfig format.\nresults = await new_config.serialize(model, data, "results")\n\n# Add the prompts to the aiconfig\nfor i, prompt in enumerate(results):\n    new_config.add_prompt(f"prompt_{i}", prompt)\n\n# Save the aiconfig to disk\nnew_config.save(\'new.aiconfig.json\', include_output=True)\n'})})]})]}),"\n",(0,t.jsx)(n.h3,{id:"openai-api-python-wrapper",children:"OpenAI API Python Wrapper"}),"\n",(0,t.jsxs)(n.p,{children:["If you're using OpenAI chat models, you can also use introspection to wrap OpenAI API calls and save an ",(0,t.jsx)(n.code,{children:"aiconfig"})," automatically:"]}),"\n",(0,t.jsx)(n.p,{children:"Replace"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"import openai\n"})}),"\n",(0,t.jsx)(n.p,{children:"with"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'import openai\nfrom aiconfig.ChatCompletion import create_and_save_to_config\nnew_config = AIConfigRuntime.create("my_aiconfig", "This is my new AIConfig")\nopenai.chat.completions.create = create_and_save_to_config(aiconfig=new_config)\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Now call OpenAI regularly. The results will automatically get saved in ",(0,t.jsx)(n.code,{children:"new_config"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'completion_params = {\n  "model": "gpt-3.5-turbo",\n  "temperature": 1,\n  "messages": [\n      {\n        "role": "user",\n        "content": "Tell me a joke about config files"\n      }\n  ],\n}\n\n# Updates new_config automatically\nresponse = openai.chat.completions.create(**completion_params)\n\n# Save results to disk\nnew_config.save("new.aiconfig.json", include_output=True)\n'})}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["For a complete guide, see the ",(0,t.jsx)(n.a,{href:"https://github.com/lastmile-ai/aiconfig/blob/main/cookbooks/OpenAI-ChatCompletion-AIConfigWrapper/openai_wrapper.ipynb",children:"OpenAI API Wrapper notebook"}),"."]})}),"\n",(0,t.jsx)(n.h2,{id:"ai-workbook-editor",children:"AI Workbook editor"}),"\n",(0,t.jsxs)(n.p,{children:["AI Workbook is a visual notebook editor for ",(0,t.jsx)(n.code,{children:"aiconfig"}),"."]}),"\n",(0,t.jsx)("p",{align:"center",children:(0,t.jsx)("video",{controls:!0,height:"480",width:"800",children:(0,t.jsx)("source",{src:"https://github.com/lastmile-ai/aiconfig/assets/81494782/d826b872-eab6-4245-91dc-96a509b4f5ec"})})}),"\n",(0,t.jsxs)(n.admonition,{type:"tip",children:[(0,t.jsxs)(n.p,{children:["In the Jupyter world, an ",(0,t.jsx)(n.code,{children:"ipynb"})," is a JSON file, but it's very rare to edit the JSON directly. Most people use the notebook editor which serializes updates into the ",(0,t.jsx)(n.code,{children:"ipynb"}),"."]}),(0,t.jsxs)(n.p,{children:["Using an AI Workbook with an ",(0,t.jsx)(n.code,{children:"aiconfig"})," is meant to satisfy the same behavior."]})]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Go to ",(0,t.jsx)(n.a,{href:"https://lastmileai.dev",children:"https://lastmileai.dev"}),"."]}),"\n",(0,t.jsx)(n.li,{children:"Create a new Workbook"}),"\n",(0,t.jsx)(n.li,{children:"Once you are done, click \"...\" and select 'Download as AIConfig'"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Try out the workbook playground here: ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.a,{href:"https://lastmileai.dev/workbooks/clooqs3p200kkpe53u6n2rhr9",children:"NYC Travel Workbook"})})]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["We are currently working on a local editor that you can run yourself. For now, please use the hosted version on ",(0,t.jsx)(n.a,{href:"https://lastmileai.dev",children:"https://lastmileai.dev"}),"."]})}),"\n",(0,t.jsx)(n.h3,{id:"editing-existing-aiconfig",children:"Editing existing AIConfig"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Go to ",(0,t.jsx)(n.a,{href:"https://lastmileai.dev",children:"https://lastmileai.dev"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Go to Workbooks page: ",(0,t.jsx)(n.a,{href:"https://lastmileai.dev/workbooks",children:"https://lastmileai.dev/workbooks"})]}),"\n",(0,t.jsx)(n.li,{children:"Click dropdown from '+ New Workbook' and select 'Create from AIConfig'"}),"\n",(0,t.jsxs)(n.li,{children:["Upload ",(0,t.jsx)(n.code,{children:"travel.aiconfig.json"})]}),"\n"]}),"\n",(0,t.jsx)("p",{align:"center",children:(0,t.jsx)("video",{controls:!0,height:"480",width:"800",children:(0,t.jsx)("source",{src:"https://github.com/lastmile-ai/aiconfig/assets/81494782/5d901493-bbda-4f8e-93c7-dd9a91bf242e"})})})]})}function f(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},4883:(e,n,a)=>{a.d(n,{Z:()=>r});var t=a(412);const o=!!t.Z.canUseDOM&&navigator.platform.startsWith("Mac"),i=!!t.Z.canUseDOM&&navigator.platform.startsWith("Win"),r={defaultOs:o?"macos":i?"windows":"linux",defaultNodePackageManager:"npm",defaultPythonPackageManager:"pip",defaultPlatform:o?"ios":"android",defaultSyntax:"functional",defaultAIConfigLanguage:"python",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],nodePackageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],pythonPackageManagers:[{label:"pip",value:"pip"},{label:"poetry",value:"poetry"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],aiConfigLanguages:[{label:"TypeScript",value:"node"},{label:"Python",value:"python"}]}},5162:(e,n,a)=>{a.d(n,{Z:()=>r});a(7294);var t=a(6010);const o={tabItem:"tabItem_Ymn6"};var i=a(5893);function r(e){let{children:n,hidden:a,className:r}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,t.Z)(o.tabItem,r),hidden:a,children:n})}},4866:(e,n,a)=>{a.d(n,{Z:()=>w});var t=a(7294),o=a(6010),i=a(2466),r=a(6550),s=a(469),l=a(1980),c=a(7392),d=a(12);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:a}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:a,attributes:t,default:o}}=e;return{value:n,label:a,attributes:t,default:o}}))}(a);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,a])}function h(e){let{value:n,tabValues:a}=e;return a.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:a}=e;const o=(0,r.k6)(),i=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a});return[(0,l._X)(i),(0,t.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(o.location.search);n.set(i,e),o.replace({...o.location,search:n.toString()})}),[i,o])]}function m(e){const{defaultValue:n,queryString:a=!1,groupId:o}=e,i=p(e),[r,l]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=a.find((e=>e.default))??a[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:i}))),[c,u]=f({queryString:a,groupId:o}),[m,g]=function(e){let{groupId:n}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(n),[o,i]=(0,d.Nk)(a);return[o,(0,t.useCallback)((e=>{a&&i.set(e)}),[a,i])]}({groupId:o}),b=(()=>{const e=c??m;return h({value:e,tabValues:i})?e:null})();(0,s.Z)((()=>{b&&l(b)}),[b]);return{selectedValue:r,selectValue:(0,t.useCallback)((e=>{if(!h({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),g(e)}),[u,g,i]),tabValues:i}}var g=a(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=a(5893);function x(e){let{className:n,block:a,selectedValue:t,selectValue:r,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),d=e=>{const n=e.currentTarget,a=l.indexOf(n),o=s[a].value;o!==t&&(c(n),r(o))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=l.indexOf(e.currentTarget)+1;n=l[a]??l[0];break}case"ArrowLeft":{const a=l.indexOf(e.currentTarget)-1;n=l[a]??l[l.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},n),children:s.map((e=>{let{value:n,label:a,attributes:i}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>l.push(e),onKeyDown:u,onClick:d,...i,className:(0,o.Z)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":t===n}),children:a??n},n)}))})}function y(e){let{lazy:n,children:a,selectedValue:o}=e;const i=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===o));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==o})))})}function j(e){const n=m(e);return(0,v.jsxs)("div",{className:(0,o.Z)("tabs-container",b.tabList),children:[(0,v.jsx)(x,{...e,...n}),(0,v.jsx)(y,{...e,...n})]})}function w(e){const n=(0,g.Z)();return(0,v.jsx)(j,{...e,children:u(e.children)},String(n))}},1151:(e,n,a)=>{a.d(n,{Z:()=>s,a:()=>r});var t=a(7294);const o={},i=t.createContext(o);function r(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);