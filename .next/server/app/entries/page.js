(()=>{var e={};e.id=769,e.ids=[769],e.modules={846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},9294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},3033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},2412:e=>{"use strict";e.exports=require("assert")},4735:e=>{"use strict";e.exports=require("events")},9021:e=>{"use strict";e.exports=require("fs")},1630:e=>{"use strict";e.exports=require("http")},5591:e=>{"use strict";e.exports=require("https")},1820:e=>{"use strict";e.exports=require("os")},3873:e=>{"use strict";e.exports=require("path")},9771:e=>{"use strict";e.exports=require("process")},7910:e=>{"use strict";e.exports=require("stream")},3997:e=>{"use strict";e.exports=require("tty")},9551:e=>{"use strict";e.exports=require("url")},8354:e=>{"use strict";e.exports=require("util")},4075:e=>{"use strict";e.exports=require("zlib")},6882:(e,r,s)=>{"use strict";s.r(r),s.d(r,{GlobalError:()=>n.a,__next_app__:()=>u,pages:()=>c,routeModule:()=>p,tree:()=>l});var t=s(260),i=s(8203),a=s(5155),n=s.n(a),o=s(7292),d={};for(let e in o)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(d[e]=()=>o[e]);s.d(r,d);let l=["",{children:["entries",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,2098)),"C:\\Users\\asus\\OneDrive\\Dokumen\\BlogFix\\src\\app\\entries\\page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,7803)),"C:\\Users\\asus\\OneDrive\\Dokumen\\BlogFix\\src\\app\\layout.tsx"],loading:[()=>Promise.resolve().then(s.bind(s,1154)),"C:\\Users\\asus\\OneDrive\\Dokumen\\BlogFix\\src\\app\\loading.tsx"],"not-found":[()=>Promise.resolve().then(s.bind(s,42)),"C:\\Users\\asus\\OneDrive\\Dokumen\\BlogFix\\src\\app\\not-found.tsx"],forbidden:[()=>Promise.resolve().then(s.t.bind(s,9116,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(s.t.bind(s,1485,23)),"next/dist/client/components/unauthorized-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["C:\\Users\\asus\\OneDrive\\Dokumen\\BlogFix\\src\\app\\entries\\page.tsx"],u={require:s,loadChunk:()=>Promise.resolve()},p=new t.AppPageRouteModule({definition:{kind:i.RouteKind.APP_PAGE,page:"/entries/page",pathname:"/entries",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},9044:(e,r,s)=>{Promise.resolve().then(s.t.bind(s,9607,23)),Promise.resolve().then(s.t.bind(s,1066,23))},8724:(e,r,s)=>{Promise.resolve().then(s.t.bind(s,8531,23)),Promise.resolve().then(s.t.bind(s,1902,23))},2098:(e,r,s)=>{"use strict";s.r(r),s.d(r,{default:()=>c,dynamic:()=>n,fetchCache:()=>o,metadata:()=>l,revalidate:()=>d});var t=s(2740),i=s(2429),a=s(5007);let n="auto",o="auto",d=10,l={title:"Blog Dev",description:"Next JS BLOG"};async function c(){let e=(await a.S.getEntries({content_type:"blog3"})).items;return(0,t.jsxs)("section",{className:"my-8 px-2 lg:px-16",children:[(0,t.jsx)("h1",{className:"text-3xl md:text-4xl font-bold tracking-tight text-primary text-center mb-10",children:"Entries the blog"}),(0,t.jsx)(i.A,{posts:e})]})}},2429:(e,r,s)=>{"use strict";s.d(r,{A:()=>h});var t=s(2740),i=s(6301),a=s(3327);let n=i.forwardRef(({className:e,...r},s)=>(0,t.jsx)("div",{ref:s,className:(0,a.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",e),...r}));n.displayName="Card";let o=i.forwardRef(({className:e,...r},s)=>(0,t.jsx)("div",{ref:s,className:(0,a.cn)("flex flex-col space-y-1.5 p-6",e),...r}));o.displayName="CardHeader";let d=i.forwardRef(({className:e,...r},s)=>(0,t.jsx)("div",{ref:s,className:(0,a.cn)("text-2xl font-semibold leading-none tracking-tight",e),...r}));d.displayName="CardTitle";let l=i.forwardRef(({className:e,...r},s)=>(0,t.jsx)("div",{ref:s,className:(0,a.cn)("text-sm text-muted-foreground",e),...r}));l.displayName="CardDescription";let c=i.forwardRef(({className:e,...r},s)=>(0,t.jsx)("div",{ref:s,className:(0,a.cn)("p-6 pt-0",e),...r}));c.displayName="CardContent";let u=i.forwardRef(({className:e,...r},s)=>(0,t.jsx)("div",{ref:s,className:(0,a.cn)("flex items-center p-6 pt-0",e),...r}));u.displayName="CardFooter";var p=s(9607),x=s.n(p),m=s(5635),f=s(8380);function h({posts:e}){return(0,t.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:e.map((e,r)=>(0,t.jsxs)(n,{className:"rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow",children:[(0,t.jsx)("div",{className:"relative h-48 w-full",children:(0,t.jsx)(x(),{href:`/entries/${e.fields.slug}`,children:(0,t.jsx)(m.default,{src:`https:${e.fields.image.fields.file.url}`,alt:e.fields.image.fields.title,layout:"fill",objectFit:"cover",className:"rounded-t-lg"})})}),(0,t.jsx)(o,{children:(0,t.jsx)(d,{children:e.fields.title})}),(0,t.jsx)(c,{children:(0,t.jsx)(l,{children:e.fields.description})}),(0,t.jsx)(u,{children:(0,t.jsx)(f.$,{variant:"default",children:(0,t.jsx)(x(),{href:`/entries/${e.fields.slug}`,children:"Read more"})})})]},r))})}}};var r=require("../../webpack-runtime.js");r.C(e);var s=e=>r(r.s=e),t=r.X(0,[638,391,750],()=>s(6882));module.exports=t})();