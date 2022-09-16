"use strict";(self.webpackChunkecdx=self.webpackChunkecdx||[]).push([[387],{3825:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>g,frontMatter:()=>c,metadata:()=>s,toc:()=>p});var a=t(7462),r=t(3366),o=(t(7294),t(3905)),i=["components"],c={sidebar_position:1},d="Read-Only DAG",s={unversionedId:"tutorial-react/read-only-dag",id:"tutorial-react/read-only-dag",title:"Read-Only DAG",description:"Pre-Steps",source:"@site/docs/tutorial-react/read-only-dag.md",sourceDirName:"tutorial-react",slug:"/tutorial-react/read-only-dag",permalink:"/nice-dag/docs/tutorial-react/read-only-dag",editUrl:"https://github.com/eBay/nice-dag/tree/nice-dag-docusaurus/docs/tutorial-react/read-only-dag.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Edge",permalink:"/nice-dag/docs/dag-model/edge"},next:{title:"Render Edge",permalink:"/nice-dag/docs/tutorial-react/render-edge"}},l={},p=[{value:"Pre-Steps",id:"pre-steps",level:2},{value:"Create a React Component",id:"create-a-react-component",level:3},{value:"Create initNodes list",id:"create-initnodes-list",level:3},{value:"Step 1: Add <code>useNiceDag</code> hook",id:"step-1-add-usenicedag-hook",level:2},{value:"Step 2: Render DAG node",id:"step-2-render-dag-node",level:2},{value:"Step 3: Adapt DAG diagram position",id:"step-3-adapt-dag-diagram-position",level:2}],u={toc:p};function g(e){var n=e.components,c=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,c,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"read-only-dag"},"Read-Only DAG"),(0,o.kt)("h2",{id:"pre-steps"},"Pre-Steps"),(0,o.kt)("h3",{id:"create-a-react-component"},"Create a React Component"),(0,o.kt)("p",null,"Since ",(0,o.kt)("strong",{parentName:"p"},"Nice-Dag")," doesn't give a react component in default, you need to create a react component which can have a container showing DAG diagram."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import React from "react";\n\nexport function MyFirstDag() {\n  return (\n    <div>\n      <div className="my-first-dag" />\n    </div>\n  );\n}\n')),(0,o.kt)("p",null,"Please give the container default height or width (depends on direction of the DAG diagram). For this example, we should set height of the container."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},".my-first-dag {\n  height: 400px;\n}\n")),(0,o.kt)("h3",{id:"create-initnodes-list"},"Create initNodes list"),(0,o.kt)("p",null,"To simplify the sample, we add a mock node list to the same file of the component. The node list is used to initiate the DAG diagram."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import React from "react";\n\nconst NodeData = [\n  {\n    id: "start",\n  },\n  {\n    id: "task",\n    dependencies: ["start"],\n  },\n  {\n    id: "end",\n    dependencies: ["task"],\n  },\n];\n\nexport function MyFirstDag() {\n  ...\n}\n')),(0,o.kt)("p",null,"The sample shows a typical DAG diagram has 3 nodes, ",(0,o.kt)("strong",{parentName:"p"},"start"),", ",(0,o.kt)("strong",{parentName:"p"},"task"),", and ",(0,o.kt)("strong",{parentName:"p"},"end"),"."),(0,o.kt)("p",null,"Once you apply the hook to your application, you can adapt the incoming of the node list, such that it can be in the manner of react component ",(0,o.kt)("inlineCode",{parentName:"p"},"property")," or a list from react ",(0,o.kt)("inlineCode",{parentName:"p"},"redux")," state."),(0,o.kt)("h2",{id:"step-1-add-usenicedag-hook"},"Step 1: Add ",(0,o.kt)("inlineCode",{parentName:"h2"},"useNiceDag")," hook"),(0,o.kt)("p",null,"To use ",(0,o.kt)("a",{parentName:"p",href:"/nice-dag/docs/api-ref/useNiceDag"},"useNiceDag"),", you need to import it from ",(0,o.kt)("inlineCode",{parentName:"p"},"@ebay/nice-dag-react"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import { useNiceDag } from "@ebay/nice-dag-react";\n')),(0,o.kt)("p",null,"After then, you can add the hook to the render function."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'export function MyFirstDag() {\n  //call useNiceDag\n  const { niceDagEl, render } = useNiceDag({\n    initNodes: NodeData,\n  });\n\n  return (\n    <div>\n      <div className="my-first-dag" ref={niceDagEl} />\n    </div>\n  );\n}\n')),(0,o.kt)("p",null,"There are two objects return by ",(0,o.kt)("a",{parentName:"p",href:"/nice-dag/docs/api-ref/useNiceDag"},"useNiceDag"),", of which one is ",(0,o.kt)("strong",{parentName:"p"},"niceDagEl"),", and the other is ",(0,o.kt)("inlineCode",{parentName:"p"},"render"),"."),(0,o.kt)("p",null,"Essentically, the dom operations is handled by ",(0,o.kt)("strong",{parentName:"p"},"nice-dag-core"),", we give a DOM host which can associate react component with pure DOM operations. ",(0,o.kt)("inlineCode",{parentName:"p"},"niceDagEl")," is used to link the react component to the DOM elements created by ",(0,o.kt)("inlineCode",{parentName:"p"},"nice-dag-core"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'<div className="my-first-dag" ref={niceDagEl} />\n')),(0,o.kt)("h2",{id:"step-2-render-dag-node"},"Step 2: Render DAG node"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Nice-Dag")," doesn't give any default render for node. To create a renderer for a node, you need to pass ",(0,o.kt)("a",{parentName:"p",href:"/nice-dag/docs/api-ref/useNiceDag"},"useNiceDag")," an function argument."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import { useNiceDag } from "@ebay/nice-dag-react";\n...\n\nfunction renderNode({ node }) {\n  //todo: write you node render here\n}\n\nexport default function MyFirstDag() {\n  //call useNiceDag\n  const { niceDagEl, render } = useNiceDag({\n    initNodes: NodeData,\n    renderNode, //pass renderNode function\n  });\n\n  return (\n    <div>\n      <div className="my-first-dag" ref={niceDagEl} />\n      {render()}\n    </div>\n  );\n}\n')),(0,o.kt)("p",null,"Besides creating a renderNode function, you need to call ",(0,o.kt)("strong",{parentName:"p"},"render")," within the component JSX statement."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'<div>\n  <div className="my-first-dag" ref={niceDagEl} />\n  {render()}\n</div>\n')),(0,o.kt)("p",null,"Actually, the container associating ",(0,o.kt)("strong",{parentName:"p"},"niceDagEL")," creates a DOM container which is used to host wrappers (with position, size) of DAG nodes. While, the ",(0,o.kt)("strong",{parentName:"p"},"render")," method returns a list of React components which is based on ",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/portals.html"},(0,o.kt)("strong",{parentName:"a"},"React.createPortal")),", assoicating DOM elements with node renderer."),(0,o.kt)("p",null,"Now, you can create customized node renderers."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import { useNiceDag } from "@ebay/nice-dag-react";\n...\n\nfunction SampleNode({ node }) {\n  return (\n    <div className="my-first-dag-node">\n      <span>{node.id}</span>\n    </div>\n  );\n}\n\nfunction renderNode({ node }) {\n  return <SampleNode node={node} />;\n}\n\nexport function MyFirstDag() {\n  //call useNiceDag\n  const { niceDagEl, render } = useNiceDag({\n    initNodes: NodeData,\n    renderNode, //pass renderNode function\n  });\n  ...\n}\n')),(0,o.kt)("p",null,"To show the node renderer, here is to give a simple style."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},".my-first-dag-node {\n  width: 100%;\n  height: 100%;\n  border: 1px solid black;\n}\n")),(0,o.kt)("p",null,"Besides, you need to give the size of node by a function."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import { useNiceDag } from "@ebay/nice-dag-react";\n...\n\nfunction getNodeSize({ node }) {\n  return {\n    width: 60,\n    height: 60,\n  };\n}\n\nexport function MyFirstDag() {\n  //call useNiceDag\n  const { niceDagEl, render } = useNiceDag({\n    initNodes: NodeData,\n    renderNode, //pass renderNode function\n    getNodeSize, //pass node size control function\n  });\n  ...\n}\n')),(0,o.kt)("h2",{id:"step-3-adapt-dag-diagram-position"},"Step 3: Adapt DAG diagram position"),(0,o.kt)("p",null,"If you want to make the diagram position in the center of the container, you can call ",(0,o.kt)("a",{parentName:"p",href:"/nice-dag/docs/api-ref/nice-dag#center"},(0,o.kt)("strong",{parentName:"a"},"niceDag.center"))," function within a ",(0,o.kt)("inlineCode",{parentName:"p"},"useEffect")," hook."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import { useNiceDag } from "@ebay/nice-dag-react";\n...\n\nexport function MyFirstDag() {\n  //call useNiceDag\n  const { niceDag, niceDagEl, render } = useNiceDag({\n    initNodes: NodeData,\n    renderNode, //pass renderNode function\n    getNodeSize, //pass node size control function\n  }); //add niceDag as a return value\n\n  useEffect(() => {\n    if (niceDag) { //check if niceDag exists\n      const bounds = niceDagEl.current.getBoundingClientRect();\n      niceDag.center({\n        width: bounds.width,\n        height: 600,\n      });\n    };\n  }, [niceDag, niceDagEl]);\n  ...\n}\n')),(0,o.kt)("p",null,"Please check if ",(0,o.kt)("a",{parentName:"p",href:"/nice-dag/docs/api-ref/nice-dag"},"niceDag")," exists before use the ",(0,o.kt)("inlineCode",{parentName:"p"},"center")," api."),(0,o.kt)("p",null,"Finally, we can get the ",(0,o.kt)("strong",{parentName:"p"},"DAG diagram")," , as shown below."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"sampleDAG",src:t(1580).Z,width:"1094",height:"482"})))}g.isMDXComponent=!0},3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>g});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=a.createContext({}),s=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=s(e.components);return a.createElement(d.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=s(t),g=r,m=u["".concat(d,".").concat(g)]||u[g]||p[g]||o;return t?a.createElement(m,i(i({ref:n},l),{},{components:t})):a.createElement(m,i({ref:n},l))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=u;var c={};for(var d in n)hasOwnProperty.call(n,d)&&(c[d]=n[d]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},1580:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/sampleDAG-76d728eab58e4bb331b144a089be6e71.png"}}]);