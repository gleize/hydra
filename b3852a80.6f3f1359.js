(window.webpackJsonp=window.webpackJsonp||[]).push([[133],{203:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return f}));var r=n(3),o=n(8),i=(n(0),n(266)),a=n(275),c={id:"write_protect_config_node",title:"Read-only config"},u={unversionedId:"patterns/write_protect_config_node",id:"patterns/write_protect_config_node",isDocsHomePage:!1,title:"Read-only config",description:"Problem",source:"@site/docs/patterns/write_protect_config_node.md",slug:"/patterns/write_protect_config_node",permalink:"/docs/next/patterns/write_protect_config_node",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/docs/patterns/write_protect_config_node.md",version:"current",lastUpdatedBy:"Omry Yadan",lastUpdatedAt:1611167889,sidebar:"docs",previous:{title:"Specializing configuration",permalink:"/docs/next/patterns/specializing_config"},next:{title:"Overview",permalink:"/docs/next/configure_hydra/intro"}},s=[{value:"Problem",id:"problem",children:[]},{value:"Solution",id:"solution",children:[]}],l={toc:s};function f(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)(a.a,{text:"Example application",to:"examples/patterns/write_protect_config_node",mdxType:"ExampleGithubLink"}),Object(i.b)("h3",{id:"problem"},"Problem"),Object(i.b)("p",null,"Sometimes you want to prevent a config node from being changed accidentally."),Object(i.b)("h3",{id:"solution"},"Solution"),Object(i.b)("p",null,"Structured Configs can enable it by passing ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://omegaconf.readthedocs.io/en/latest/structured_config.html#frozen"}),"frozen=True")," in the dataclass definition.\nUsing Structured Configs, you can annotate a dataclass as frozen. This is recursive and applies to all child nodes."),Object(i.b)("p",null,"This will prevent modifications via code, command line overrides and config composition."),Object(i.b)("div",{className:"row"},Object(i.b)("div",{className:"col col--6"},Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python",metastring:'title="frozen.py" {1}',title:'"frozen.py"',"{1}":!0}),'@dataclass(frozen=True)\nclass SerialPort:\n    baud_rate: int = 19200\n    data_bits: int = 8\n    stop_bits: int = 1\n\n\ncs = ConfigStore.instance()\ncs.store(name="config", node=SerialPort)\n\n\n@hydra.main(config_name="config")\ndef my_app(cfg: SerialPort) -> None:\n    print(cfg)\n\n\nif __name__ == "__main__":\n    my_app()\n'))),Object(i.b)("div",{className:"col  col--6"},Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell",metastring:'script title="Output"',script:!0,title:'"Output"'}),"$ python frozen.py data_bits=10\nError merging override data_bits=10\nCannot change read-only config container\n    full_key: data_bits\n    reference_type=Optional[SerialPort]\n    object_type=SerialPort\n")))),Object(i.b)("div",{class:"alert alert--warning",role:"alert"},Object(i.b)("strong",null,"NOTE"),": A crafty user can find many ways around this. This is just making it harder to change things accidentally."))}f.isMDXComponent=!0},266:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return g}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),l=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},f=function(e){var t=l(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),f=l(n),p=r,g=f["".concat(a,".").concat(p)]||f[p]||d[p]||i;return n?o.a.createElement(g,c(c({ref:t},s),{},{components:n})):o.a.createElement(g,c({ref:t},s))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=p;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},267:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}))},268:function(e,t,n){"use strict";n.r(t);var r=n(11);n.d(t,"MemoryRouter",(function(){return r.d})),n.d(t,"Prompt",(function(){return r.f})),n.d(t,"Redirect",(function(){return r.g})),n.d(t,"Route",(function(){return r.h})),n.d(t,"Router",(function(){return r.i})),n.d(t,"StaticRouter",(function(){return r.j})),n.d(t,"Switch",(function(){return r.k})),n.d(t,"generatePath",(function(){return r.l})),n.d(t,"matchPath",(function(){return r.m})),n.d(t,"useHistory",(function(){return r.n})),n.d(t,"useLocation",(function(){return r.o})),n.d(t,"useParams",(function(){return r.p})),n.d(t,"useRouteMatch",(function(){return r.q})),n.d(t,"withRouter",(function(){return r.r})),n.d(t,"BrowserRouter",(function(){return r.a})),n.d(t,"HashRouter",(function(){return r.b})),n.d(t,"Link",(function(){return r.c})),n.d(t,"NavLink",(function(){return r.e}))},269:function(e,t,n){"use strict";var r=n(0),o=n.n(r),i=n(11),a=n(267),c=n(7),u=Object(r.createContext)({collectLink:function(){}}),s=n(270),l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};t.a=function(e){var t,n,f,d=e.isNavLink,p=e.to,g=e.href,v=e.activeClassName,b=e.isActive,m=e["data-noBrokenLinkCheck"],h=e.autoAddBaseUrl,O=void 0===h||h,y=l(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),j=Object(s.b)().withBaseUrl,w=Object(r.useContext)(u),D=p||g,_=Object(a.a)(D),P=null==D?void 0:D.replace("pathname://",""),x=void 0!==P?(n=P,O&&function(e){return e.startsWith("/")}(n)?j(n):n):void 0,A=Object(r.useRef)(!1),E=d?i.e:i.c,V=c.a.canUseIntersectionObserver;Object(r.useEffect)((function(){return!V&&_&&window.docusaurus.prefetch(x),function(){V&&f&&f.disconnect()}}),[x,V,_]);var k=null!==(t=null==x?void 0:x.startsWith("#"))&&void 0!==t&&t,S=!x||!_||k;return x&&_&&!k&&!m&&w.collectLink(x),S?o.a.createElement("a",Object.assign({href:x},D&&!_&&{target:"_blank",rel:"noopener noreferrer"},y)):o.a.createElement(E,Object.assign({},y,{onMouseEnter:function(){A.current||(window.docusaurus.preload(x),A.current=!0)},innerRef:function(e){var t,n;V&&e&&_&&(t=e,n=function(){window.docusaurus.prefetch(x)},(f=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(f.unobserve(t),f.disconnect(),n())}))}))).observe(t))},to:x||""},d&&{isActive:b,activeClassName:v}))}},270:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return a}));var r=n(21),o=n(267);function i(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var i=void 0===r?{}:r,a=i.forcePrependBaseUrl,c=void 0!==a&&a,u=i.absolute,s=void 0!==u&&u;if(!n)return n;if(n.startsWith("#"))return n;if(Object(o.b)(n))return n;if(c)return t+n;var l=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+l:l}(i,n,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},271:function(e,t,n){try{e.exports=n(272)}catch(r){e.exports={}}},272:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useDocVersionSuggestions=t.useActiveDocContext=t.useActiveVersion=t.useLatestVersion=t.useVersions=t.useActivePluginAndVersion=t.useActivePlugin=t.useDocsData=t.useAllDocsData=void 0;var r=n(268),o=n(273),i=n(274);t.useAllDocsData=function(){return o.useAllPluginInstancesData("docusaurus-plugin-content-docs")},t.useDocsData=function(e){return o.usePluginData("docusaurus-plugin-content-docs",e)},t.useActivePlugin=function(e){void 0===e&&(e={});var n=t.useAllDocsData(),o=r.useLocation().pathname;return i.getActivePlugin(n,o,e)},t.useActivePluginAndVersion=function(e){void 0===e&&(e={});var n=t.useActivePlugin(e),o=r.useLocation().pathname;if(n)return{activePlugin:n,activeVersion:i.getActiveVersion(n.pluginData,o)}},t.useVersions=function(e){return t.useDocsData(e).versions},t.useLatestVersion=function(e){var n=t.useDocsData(e);return i.getLatestVersion(n)},t.useActiveVersion=function(e){var n=t.useDocsData(e),o=r.useLocation().pathname;return i.getActiveVersion(n,o)},t.useActiveDocContext=function(e){var n=t.useDocsData(e),o=r.useLocation().pathname;return i.getActiveDocContext(n,o)},t.useDocVersionSuggestions=function(e){var n=t.useDocsData(e),o=r.useLocation().pathname;return i.getDocVersionSuggestions(n,o)}},273:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return o})),n.d(t,"useAllPluginInstancesData",(function(){return i})),n.d(t,"usePluginData",(function(){return a}));var r=n(21);function o(){var e=Object(r.default)().globalData;if(!e)throw new Error("Docusaurus global data not found");return e}function i(e){var t=o()[e];if(!t)throw new Error("Docusaurus plugin global data not found for pluginName="+e);return t}function a(e,t){void 0===t&&(t="default");var n=i(e)[t];if(!n)throw new Error("Docusaurus plugin global data not found for pluginName="+e+" and pluginId="+t);return n}},274:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDocVersionSuggestions=t.getActiveDocContext=t.getActiveVersion=t.getLatestVersion=t.getActivePlugin=void 0;var r=n(268);t.getActivePlugin=function(e,t,n){void 0===n&&(n={});var o=Object.entries(e).find((function(e){e[0];var n=e[1];return!!r.matchPath(t,{path:n.path,exact:!1,strict:!1})})),i=o?{pluginId:o[0],pluginData:o[1]}:void 0;if(!i&&n.failfast)throw new Error("Can't find active docs plugin for pathname="+t+", while it was expected to be found. Maybe you tried to use a docs feature that can only be used on a docs-related page? Existing docs plugin paths are: "+Object.values(e).map((function(e){return e.path})).join(", "));return i},t.getLatestVersion=function(e){return e.versions.find((function(e){return e.isLast}))},t.getActiveVersion=function(e,n){var o=t.getLatestVersion(e);return[].concat(e.versions.filter((function(e){return e!==o})),[o]).find((function(e){return!!r.matchPath(n,{path:e.path,exact:!1,strict:!1})}))},t.getActiveDocContext=function(e,n){var o,i,a=t.getActiveVersion(e,n),c=null==a?void 0:a.docs.find((function(e){return!!r.matchPath(n,{path:e.path,exact:!0,strict:!1})}));return{activeVersion:a,activeDoc:c,alternateDocVersions:c?(o=c.id,i={},e.versions.forEach((function(e){e.docs.forEach((function(t){t.id===o&&(i[e.name]=t)}))})),i):{}}},t.getDocVersionSuggestions=function(e,n){var r=t.getLatestVersion(e),o=t.getActiveDocContext(e,n),i=o.activeVersion!==r;return{latestDocSuggestion:i?null==o?void 0:o.alternateDocVersions[r.name]:void 0,latestVersionSuggestion:i?r:void 0}}},275:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return l}));var r=n(3),o=n(0),i=n.n(o),a=n(269),c=n(21),u=n(271);function s(e){return i.a.createElement(a.a,Object(r.a)({},e,{to:(t=e.to,o=Object(u.useActiveVersion)(),Object(c.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!==(n=null==o?void 0:o.name)&&void 0!==n?n:"current"]+t),target:"_blank"}));var t,n,o}function l(e){var t,n=null!==(t=e.text)&&void 0!==t?t:"Example";return i.a.createElement(s,e,i.a.createElement("img",{src:"https://img.shields.io/badge/-"+n+"-informational",alt:"Example"}))}}}]);