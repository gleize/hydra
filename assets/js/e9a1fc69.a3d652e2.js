(window.webpackJsonp=window.webpackJsonp||[]).push([[170],{249:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(8),a=(n(0),n(267)),i={id:"defaults",title:"Defaults",sidebar_label:"Defaults"},l={unversionedId:"tutorial/defaults",id:"version-0.11/tutorial/defaults",isDocsHomePage:!1,title:"Defaults",description:"After office politics, you decide that you want to use MySQL by default.",source:"@site/versioned_docs/version-0.11/tutorial/4_defaults.md",slug:"/tutorial/defaults",permalink:"/docs/0.11/tutorial/defaults",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/versioned_docs/version-0.11/tutorial/4_defaults.md",version:"0.11",lastUpdatedBy:"Omry Yadan",lastUpdatedAt:1619816984,formattedLastUpdatedAt:"4/30/2021",sidebar_label:"Defaults",sidebar:"version-0.11/docs",previous:{title:"Config groups",permalink:"/docs/0.11/tutorial/config_groups"},next:{title:"Config composition",permalink:"/docs/0.11/tutorial/composition"}},c=[{value:"Config group defaults",id:"config-group-defaults",children:[{value:"Overriding a config group default",id:"overriding-a-config-group-default",children:[]}]},{value:"Non-config group defaults",id:"non-config-group-defaults",children:[]}],u={toc:c};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"After office politics, you decide that you want to use MySQL by default.\nYou no longer want to type ",Object(a.b)("inlineCode",{parentName:"p"},"db=mysql")," every time you run your application."),Object(a.b)("p",null,"You can add a ",Object(a.b)("inlineCode",{parentName:"p"},"defaults")," list into your config file."),Object(a.b)("h2",{id:"config-group-defaults"},"Config group defaults"),Object(a.b)("p",null,"Configuration file: ",Object(a.b)("inlineCode",{parentName:"p"},"config.yaml")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-yaml"},"defaults:\n  - db: mysql\n")),Object(a.b)("p",null,"Remember to specify ",Object(a.b)("inlineCode",{parentName:"p"},"config.yaml")," as the ",Object(a.b)("inlineCode",{parentName:"p"},"config_path"),"."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"@hydra.main(config_path='conf/config.yaml')\ndef my_app(cfg):\n    print(OmegaConf.to_yaml(cfg))\n")),Object(a.b)("p",null,"When you run the updated application, MySQL is loaded by default."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-yaml"},"$ python my_app.py\ndb:\n  driver: mysql\n  pass: secret\n  user: omry\n")),Object(a.b)("h3",{id:"overriding-a-config-group-default"},"Overriding a config group default"),Object(a.b)("p",null,"You can still load PostgreSQL, and override individual values."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-yaml"},"$ python my_app.py db=postgresql db.timeout=20\ndb:\n  driver: postgresql\n  pass: drowssap\n  timeout: 20\n  user: postgres_user\n")),Object(a.b)("p",null,"You can prevent a default from being loaded by assigning ",Object(a.b)("inlineCode",{parentName:"p"},"null")," to it in the command line:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-yaml"},"$ python my_app.py db=null\n{}\n")),Object(a.b)("h2",{id:"non-config-group-defaults"},"Non-config group defaults"),Object(a.b)("p",null,"Sometimes a config file you want to merge does not belong in any config group.\nThe following will load ",Object(a.b)("inlineCode",{parentName:"p"},"some_file.yaml")," from your config directory:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-yaml"},"defaults:\n  - some_file\n")),Object(a.b)("p",null,"Config files that not a part of a ",Object(a.b)("inlineCode",{parentName:"p"},"config group")," like ",Object(a.b)("inlineCode",{parentName:"p"},"db")," cannot be overridden."))}p.isMDXComponent=!0},267:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),p=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=p(n),f=r,b=d["".concat(i,".").concat(f)]||d[f]||s[f]||a;return n?o.a.createElement(b,l(l({ref:t},u),{},{components:n})):o.a.createElement(b,l({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);