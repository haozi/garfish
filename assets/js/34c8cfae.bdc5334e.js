"use strict";(self.webpackChunkgarfish_docs=self.webpackChunkgarfish_docs||[]).push([[209],{4029:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var a=n(1513),r=n(1275),s=(n(7711),n(4635)),i=["components"],o={title:"Garfish.setExternal",slug:"/api/setExternal",order:6},u=void 0,l={unversionedId:"guide/API/setExternal",id:"guide/API/setExternal",isDocsHomePage:!1,title:"Garfish.setExternal",description:"Garfish.setExternal \u7528\u4e8e\u5b9e\u73b0\u5e94\u7528\u95f4\u7684\u4f9d\u8d56\u5171\u4eab\uff0c\u901a\u8fc7\u8be5\u51fd\u6570\u5c06\u4f9d\u8d56\u8fdb\u884c\u6ce8\u518c\uff0c\u6ce8\u518c\u5b8c\u6210\u540e\u53ef\u4ee5\u5b9e\u73b0\u4e3b\u5b50\u5e94\u7528\u7684\u4f9d\u8d56\u5171\u4eab\uff0c\u4f46\u53ef\u80fd\u4f1a\u7531\u4e8e\u5171\u4eab\u5e26\u6765\u67d0\u4e9b\u4f9d\u8d56\u7684\u5f71\u54cd\uff0c\u82e5\u51fa\u73b0\u95ee\u9898\u5efa\u8bae\u5173\u95ed\u5171\u4eab\u3002",source:"@site/docs/guide/API/setExternal.md",sourceDirName:"guide/API",slug:"/api/setExternal",permalink:"/api/setExternal",editUrl:"https://github.com/bytedance/garfish/tree/master/website/docs/guide/API/setExternal.md",tags:[],version:"current",lastUpdatedBy:"Zhou xiao",lastUpdatedAt:1640315925,formattedLastUpdatedAt:"2021/12/24",frontMatter:{title:"Garfish.setExternal",slug:"/api/setExternal",order:6},sidebar:"guide",previous:{title:"Garfish.setOptions",permalink:"/api/setOptions"},next:{title:"Garfish.getGlobalObject",permalink:"/api/getGlobalObject"}},p=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[],level:3}],c={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,s.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"Garfish.setExternal")," \u7528\u4e8e\u5b9e\u73b0\u5e94\u7528\u95f4\u7684\u4f9d\u8d56\u5171\u4eab\uff0c\u901a\u8fc7\u8be5\u51fd\u6570\u5c06\u4f9d\u8d56\u8fdb\u884c\u6ce8\u518c\uff0c\u6ce8\u518c\u5b8c\u6210\u540e\u53ef\u4ee5\u5b9e\u73b0\u4e3b\u5b50\u5e94\u7528\u7684\u4f9d\u8d56\u5171\u4eab\uff0c\u4f46\u53ef\u80fd\u4f1a\u7531\u4e8e\u5171\u4eab\u5e26\u6765\u67d0\u4e9b\u4f9d\u8d56\u7684\u5f71\u54cd\uff0c\u82e5\u51fa\u73b0\u95ee\u9898\u5efa\u8bae\u5173\u95ed\u5171\u4eab\u3002"),(0,s.kt)("h3",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"\u4e3b\u5e94\u7528")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// \u4e3b\u5e94\u7528 webpack \u914d\u7f6e\nmodule.exports = {\n  output: {\n    // \u9700\u8981\u914d\u7f6e\u6210 umd \u89c4\u8303\n    libraryTarget: 'umd',\n    // \u8bf7\u6c42\u786e\u4fdd\u8be5\u503c\u4e0e\u5b50\u5e94\u7528\u7684\u503c\u4e0d\u76f8\u540c\u907f\u514d\u4e0e\u5b50\u5e94\u7528\u53d1\u751f\u5f71\u54cd\n    jsonpFunction: 'main-app-jsonpFunction',\n  },\n};\n\n// \u4e3b\u5e94\u7528 index.js\nimport Vue from 'vue';\nimport Garfish from 'garfish';\n\nGarfish.setExternal('vue', Vue);\n")),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"\u5b50\u5e94\u7528")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// \u4e3b\u5e94\u7528 webpack \u914d\u7f6e\nmodule.exports = {\n  output: {\n    // \u9700\u8981\u914d\u7f6e\u6210 umd \u89c4\u8303\n    libraryTarget: 'umd',\n    // \u4fee\u6539\u4e0d\u89c4\u8303\u7684\u4ee3\u7801\u683c\u5f0f\uff0c\u907f\u514d\u9003\u9038\u6c99\u7bb1\n    globalObject: 'window',\n    // \u8bf7\u6c42\u786e\u4fdd\u6bcf\u4e2a\u5b50\u5e94\u7528\u8be5\u503c\u90fd\u4e0d\u76f8\u540c\uff0c\u5426\u5219\u53ef\u80fd\u51fa\u73b0 webpack chunk \u4e92\u76f8\u5f71\u54cd\u7684\u53ef\u80fd\n    jsonpFunction: 'vue-app-jsonpFunction',\n    // \u4fdd\u8bc1\u5b50\u5e94\u7528\u7684\u8d44\u6e90\u8def\u5f84\u53d8\u4e3a\u7edd\u5bf9\u8def\u5f84\uff0c\u907f\u514d\u5b50\u5e94\u7528\u7684\u76f8\u5bf9\u8d44\u6e90\u5728\u53d8\u4e3a\u4e3b\u5e94\u7528\u4e0a\u7684\u76f8\u5bf9\u8d44\u6e90\uff0c\u56e0\u4e3a\u5b50\u5e94\u7528\u548c\u4e3b\u5e94\u7528\u5728\u540c\u4e00\u4e2a\u6587\u6863\u6d41\uff0c\u76f8\u5bf9\u8def\u5f84\u662f\u76f8\u5bf9\u4e8e\u4e3b\u5e94\u7528\u800c\u8a00\u7684\n    publicPath: 'http://localhost:8000',\n  },\n  externals: {\n    vue: 'vue',\n  },\n};\n")))}d.isMDXComponent=!0}}]);