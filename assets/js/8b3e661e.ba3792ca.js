"use strict";(self.webpackChunkgarfish_docs=self.webpackChunkgarfish_docs||[]).push([[954],{8994:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return s},default:function(){return m}});var n=r(1513),a=r(1275),i=(r(7711),r(4635)),o=["components"],l={title:"Garfish.router",slug:"/api/router",order:5},p=void 0,u={unversionedId:"guide/API/router",id:"guide/API/router",isDocsHomePage:!1,title:"Garfish.router",description:"Garfish.router \u662f Garfish \u63d0\u4f9b\u7684\u8def\u7531\u65b9\u6cd5\uff0c\u901a\u8fc7 router \u53ef\u4ee5\u63d0\u4f9b\u8def\u7531\u80fd\u529b",source:"@site/docs/guide/API/router.md",sourceDirName:"guide/API",slug:"/api/router",permalink:"/api/router",editUrl:"https://github.com/bytedance/garfish/tree/master/website/docs/guide/API/router.md",tags:[],version:"current",lastUpdatedBy:"Zhou xiao",lastUpdatedAt:1641693e3,formattedLastUpdatedAt:"2022/1/9",frontMatter:{title:"Garfish.router",slug:"/api/router",order:5},sidebar:"guide",previous:{title:"Garfish.channel",permalink:"/api/channel"},next:{title:"Garfish.setOptions",permalink:"/api/setOptions"}},s=[{value:"router.push",id:"routerpush",children:[{value:"\u6ce8\u610f\u70b9",id:"\u6ce8\u610f\u70b9",children:[],level:3},{value:"\u6848\u4f8b",id:"\u6848\u4f8b",children:[],level:3}],level:2},{value:"router.replace",id:"routerreplace",children:[],level:2},{value:"router.beforeEach",id:"routerbeforeeach",children:[],level:2},{value:"router.afterEach",id:"routeraftereach",children:[],level:2},{value:"\u8def\u7531\u5b88\u536b",id:"\u8def\u7531\u5b88\u536b",children:[],level:2}],d={toc:s};function m(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Garfish.router")," \u662f Garfish \u63d0\u4f9b\u7684\u8def\u7531\u65b9\u6cd5\uff0c\u901a\u8fc7 router \u53ef\u4ee5\u63d0\u4f9b\u8def\u7531\u80fd\u529b"),(0,i.kt)("h2",{id:"routerpush"},"router.push"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"router.push({ path: string, query?: Record<string, string> }) : void"),(0,i.kt)("br",null)),(0,i.kt)("p",null,"\u60f3\u8981\u5bfc\u822a\u5230\u4e0d\u540c\u7684 URL\uff0c\u5219\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"router.push")," \u65b9\u6cd5\u3002\u8fd9\u4e2a\u65b9\u6cd5\u4f1a\u5411 ",(0,i.kt)("inlineCode",{parentName:"p"},"history")," \u6808\u6dfb\u52a0\u4e00\u4e2a\u65b0\u7684\u8bb0\u5f55\uff0c\u6240\u4ee5\uff0c\u5f53\u7528\u6237\u70b9\u51fb\u6d4f\u89c8\u5668\u540e\u9000\u6309\u94ae\u65f6\uff0c\u5219\u56de\u5230\u4e4b\u524d\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"URL"),"\u3002"),(0,i.kt)("h3",{id:"\u6ce8\u610f\u70b9"},"\u6ce8\u610f\u70b9"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c\u6709\u5728 ",(0,i.kt)("inlineCode",{parentName:"li"},"Garfish.run")," \u65f6\u914d\u7f6e\uff0c",(0,i.kt)("inlineCode",{parentName:"li"},"basename"),"\u3002\u5c06\u5728\u8df3\u8f6c\u65f6\u589e\u52a0 ",(0,i.kt)("inlineCode",{parentName:"li"},"basename")," \u4f5c\u4e3a\u8df3\u8f6c\u524d\u7f00\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"Garfish")," \u63d0\u4f9b\u7684\u8def\u7531\u65b9\u6cd5\uff0c\u5728\u5df2\u7ecf\u6253\u5f00\u5b50\u5e94\u7528\u7684\u573a\u666f\u4e0b\u8df3\u8f6c\u5bf9\u5e94\u5b50\u5e94\u7528\u7684\u5b50\u8def\u7531\u4f1a\u89e6\u53d1\u7ec4\u4ef6\u66f4\u65b0",(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},"\u5728\u975e ",(0,i.kt)("inlineCode",{parentName:"p"},"Garfish")," \u5fae\u524d\u7aef\u73af\u5883\uff0c\u76f4\u63a5\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"history.pushState")," \u8df3\u8f6c\u8def\u7531\u662f\u4e0d\u4f1a\u89e6\u53d1\u5bf9\u5e94\u8def\u7531\u7684\u7ec4\u4ef6\u66f4\u65b0\u7684\uff0c\u539f\u56e0\u5728\u4e8e ",(0,i.kt)("inlineCode",{parentName:"p"},"vue")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"react")," \u4e0d\u662f\u76d1\u542c\u8def\u7531\u53d8\u5316\u548c\u89e6\u53d1\u7ec4\u4ef6\u66f4\u65b0"))),(0,i.kt)("li",{parentName:"ul"},"\u672c ",(0,i.kt)("inlineCode",{parentName:"li"},"api")," \u53ef\u4ee5\u5728 ",(0,i.kt)("inlineCode",{parentName:"li"},"react-router-prompt")," \u89e6\u53d1\u591a\u6b21\u65f6\uff0c\u914d\u5408 ",(0,i.kt)("inlineCode",{parentName:"li"},"autoRefreshApp")," \u914d\u7f6e\u3002\u5173\u95ed\u5176\u4ed6\u8df3\u8f6c\u65b9\u6cd5\u89e6\u53d1\u5b50\u5e94\u7528\u5237\u65b0\u7ec4\u4ef6\uff0c\u53ef\u9650\u5236 ",(0,i.kt)("inlineCode",{parentName:"li"},"prompt")," \u89e6\u53d1\u591a\u6b21\u6216\u5b50\u5e94\u7528\u989d\u5916\u5378\u8f7d\u591a\u6b21\u7684\u573a\u666f\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"autoRefreshApp")," \u9009\u9879\u5173\u95ed\u540e\uff0c\u53ef\u4ee5\u53ea\u80fd\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"li"},"Garfish.router")," \u8df3\u8f6c\u5b50\u5e94\u7528\u8def\u7531")),(0,i.kt)("h3",{id:"\u6848\u4f8b"},"\u6848\u4f8b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import Garfish from 'garfish';\nGarfish.router.push({ path: '/vue-a' );\nGarfish.router.replace({ path: '/react2' })\n")),(0,i.kt)("h2",{id:"routerreplace"},"router.replace"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"router.replace({ path: string, query?: Record<string, string> }) : void")),(0,i.kt)("p",null,"\u8ddf ",(0,i.kt)("inlineCode",{parentName:"p"},"router.push")," \u5f88\u50cf\uff0c\u552f\u4e00\u7684\u4e0d\u540c\u5c31\u662f\uff0c\u5b83\u4e0d\u4f1a\u5411 ",(0,i.kt)("inlineCode",{parentName:"p"},"history")," \u6dfb\u52a0\u65b0\u8bb0\u5f55\uff0c\u800c\u662f\u8ddf\u5b83\u7684\u65b9\u6cd5\u540d\u4e00\u6837\uff0c\u66ff\u6362\u6389\u5f53\u524d\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"history")," \u8bb0\u5f55\u3002"),(0,i.kt)("h2",{id:"routerbeforeeach"},"router.beforeEach"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"router.beforeEach(to: RouterInfo, from: RouterInfo, next: Function): void")),(0,i.kt)("p",null,"\u5728\u8def\u7531\u8df3\u8f6c\u540e\uff0c\u5b50\u5e94\u7528\u6302\u8f7d\u524d\u89e6\u53d1\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"interface RouterInfo {\n  fullPath: string;\n  path: string;\n  query: Object;\n  matched: Array<AppInfo>;\n}\n")),(0,i.kt)("p",null,"\u6bcf\u4e2a\u5b88\u536b\u65b9\u6cd5\u63a5\u6536\u4e09\u4e2a\u53c2\u6570"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"to ")," \u5373\u5c06\u8981\u8fdb\u5165\u7684\u76ee\u6807\u8def\u7531\u4fe1\u606f\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"from")," \u5373\u5c06\u79bb\u5f00\u7684\u8def\u7531\u4fe1\u606f\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"next")," \u963b\u585e\u6267\u884c\u56de\u8c03\u3002")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"Garfish.router.beforeEach((to, from, next) => {\n  // console.log(to, from);\n  next();\n})\n\nGarfish.router.afterEach((to, from, next) => {\n  // console.log(to, from);\n  next();autoRefreshApp\n})\n\nGarfish.run(...);\n")),(0,i.kt)("h2",{id:"routeraftereach"},"router.afterEach"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"router.afterEach(to: RouterInfo, from: RouterInfo, next) : void")),(0,i.kt)("p",null,"\u8ddf ",(0,i.kt)("inlineCode",{parentName:"p"},"router.afterEach")," \u5f88\u50cf\uff0c\u552f\u4e00\u7684\u4e0d\u540c\u5c31\u662f\uff0c\u5728\u8def\u7531\u8df3\u8f6c\u540e\uff0c\u5b50\u5e94\u7528\u6302\u8f7d\u540e\u89e6\u53d1\u3002"),(0,i.kt)("h2",{id:"\u8def\u7531\u5b88\u536b"},"\u8def\u7531\u5b88\u536b"),(0,i.kt)("p",null,"\u6b63\u5982\u5176\u540d\uff0c\u63d0\u4f9b\u7684\u5bfc\u822a\u5b88\u536b\u4e3b\u8981\u7528\u6765\u901a\u8fc7\u8df3\u8f6c\u6216\u53d6\u6d88\u7684\u65b9\u5f0f\u5b88\u536b\u5bfc\u822a\u3002\u5728\u5fae\u524d\u7aef\u73af\u5883\u4e2d\uff0c\u8df3\u8f6c\u8def\u7531\u65f6\uff0c\u8def\u7531\u5b88\u536b\u5728\u672a\u8c03\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"next")," \u51fd\u6570\u65f6\uff0c\u5c06\u4f1a\u963b\u585e\u5b50\u5e94\u7528\u7684\u6e32\u67d3\u3002"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u4f46\u662f\u4e0d\u80fd\u963b\u585e\u5b50\u5e94\u7528\u5185\u7684\u8def\u7531\u8df3\u8f6c\uff0c\u56e0\u4e3a\u5b50\u5e94\u7528\u5185\u7684\u8def\u7531\u8df3\u8f6c\u4e0d\u80fd\u88ab ",(0,i.kt)("inlineCode",{parentName:"p"},"Garfish")," \u963b\u585e")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u6ce8\u610f\u70b9\uff1a")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"\u5c06\u8def\u7531\u5b88\u536b\u6ce8\u518c\u653e\u5728 ",(0,i.kt)("inlineCode",{parentName:"li"},"Garfish.run")," \u524d\u6267\u884c\uff0c\u5426\u5219\u5c06\u65e0\u6cd5\u63a5\u6536\u5230\u9996\u6b21\u52a0\u8f7d\u662f\u7684\u8def\u7531\u94a9\u5b50\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u82e5\u4f7f\u7528\u4e86\u8def\u7531\u5b88\u536b\uff0c\u8bf7\u786e\u4fdd ",(0,i.kt)("inlineCode",{parentName:"li"},"next")," \u51fd\u6570\u88ab\u6267\u884c\uff0c\u5426\u5219\u5c06\u4f1a\u963b\u585e\u8def\u7531\u5185\u90e8\u52a0\u8f7d\u903b\u8f91\u3002\n:::")))))}m.isMDXComponent=!0}}]);