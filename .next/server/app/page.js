(()=>{var e={};e.id=974,e.ids=[974],e.modules={846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},9294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},3033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},2412:e=>{"use strict";e.exports=require("assert")},4735:e=>{"use strict";e.exports=require("events")},9021:e=>{"use strict";e.exports=require("fs")},1630:e=>{"use strict";e.exports=require("http")},5591:e=>{"use strict";e.exports=require("https")},1820:e=>{"use strict";e.exports=require("os")},3873:e=>{"use strict";e.exports=require("path")},9771:e=>{"use strict";e.exports=require("process")},7910:e=>{"use strict";e.exports=require("stream")},3997:e=>{"use strict";e.exports=require("tty")},9551:e=>{"use strict";e.exports=require("url")},8354:e=>{"use strict";e.exports=require("util")},4075:e=>{"use strict";e.exports=require("zlib")},2128:(e,t,n)=>{"use strict";n.r(t),n.d(t,{GlobalError:()=>s.a,__next_app__:()=>d,pages:()=>c,routeModule:()=>f,tree:()=>u});var r=n(260),i=n(8203),o=n(5155),s=n.n(o),a=n(7292),l={};for(let e in a)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>a[e]);n.d(t,l);let u=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(n.bind(n,1737)),"C:\\Users\\asus\\OneDrive\\Dokumen\\BlogFix\\src\\app\\page.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(n.bind(n,440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(n.bind(n,7803)),"C:\\Users\\asus\\OneDrive\\Dokumen\\BlogFix\\src\\app\\layout.tsx"],loading:[()=>Promise.resolve().then(n.bind(n,1154)),"C:\\Users\\asus\\OneDrive\\Dokumen\\BlogFix\\src\\app\\loading.tsx"],"not-found":[()=>Promise.resolve().then(n.bind(n,42)),"C:\\Users\\asus\\OneDrive\\Dokumen\\BlogFix\\src\\app\\not-found.tsx"],forbidden:[()=>Promise.resolve().then(n.t.bind(n,9116,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(n.t.bind(n,1485,23)),"next/dist/client/components/unauthorized-error"],metadata:{icon:[async e=>(await Promise.resolve().then(n.bind(n,440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["C:\\Users\\asus\\OneDrive\\Dokumen\\BlogFix\\src\\app\\page.tsx"],d={require:n,loadChunk:()=>Promise.resolve()},f=new r.AppPageRouteModule({definition:{kind:i.RouteKind.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:u}})},6294:(e,t,n)=>{Promise.resolve().then(n.t.bind(n,9607,23)),Promise.resolve().then(n.t.bind(n,1066,23)),Promise.resolve().then(n.bind(n,3602))},6030:(e,t,n)=>{Promise.resolve().then(n.t.bind(n,8531,23)),Promise.resolve().then(n.t.bind(n,1902,23)),Promise.resolve().then(n.bind(n,1117))},1117:(e,t,n)=>{"use strict";n.d(t,{default:()=>G});var r=n(5512),i=n(8009),o=n(4195);let s=i.forwardRef(({className:e,...t},n)=>(0,r.jsx)("div",{ref:n,className:(0,o.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",e),...t}));s.displayName="Card",i.forwardRef(({className:e,...t},n)=>(0,r.jsx)("div",{ref:n,className:(0,o.cn)("flex flex-col space-y-1.5 p-6",e),...t})).displayName="CardHeader",i.forwardRef(({className:e,...t},n)=>(0,r.jsx)("div",{ref:n,className:(0,o.cn)("text-2xl font-semibold leading-none tracking-tight",e),...t})).displayName="CardTitle",i.forwardRef(({className:e,...t},n)=>(0,r.jsx)("div",{ref:n,className:(0,o.cn)("text-sm text-muted-foreground",e),...t})).displayName="CardDescription";let a=i.forwardRef(({className:e,...t},n)=>(0,r.jsx)("div",{ref:n,className:(0,o.cn)("p-6 pt-0",e),...t}));function l(e){return"[object Object]"===Object.prototype.toString.call(e)||Array.isArray(e)}function u(e,t){let n=Object.keys(e),r=Object.keys(t);return n.length===r.length&&JSON.stringify(Object.keys(e.breakpoints||{}))===JSON.stringify(Object.keys(t.breakpoints||{}))&&n.every(n=>{let r=e[n],i=t[n];return"function"==typeof r?`${r}`==`${i}`:l(r)&&l(i)?u(r,i):r===i})}function c(e){return e.concat().sort((e,t)=>e.name>t.name?1:-1).map(e=>e.options)}function d(e){return"number"==typeof e}function f(e){return"string"==typeof e}function p(e){return"boolean"==typeof e}function m(e){return"[object Object]"===Object.prototype.toString.call(e)}function g(e){return Math.abs(e)}function x(e){return Math.sign(e)}function h(e){return w(e).map(Number)}function v(e){return e[y(e)]}function y(e){return Math.max(0,e.length-1)}function b(e,t=0){return Array.from(Array(e),(e,n)=>t+n)}function w(e){return Object.keys(e)}function N(e,t){return void 0!==t.MouseEvent&&e instanceof t.MouseEvent}function j(){let e=[],t={add:function(n,r,i,o={passive:!0}){let s;return"addEventListener"in n?(n.addEventListener(r,i,o),s=()=>n.removeEventListener(r,i,o)):(n.addListener(i),s=()=>n.removeListener(i)),e.push(s),t},clear:function(){e=e.filter(e=>e())}};return t}function k(e=0,t=0){let n=g(e-t);function r(n){return n<e||n>t}return{length:n,max:t,min:e,constrain:function(n){return r(n)?n<e?e:t:n},reachedAny:r,reachedMax:function(e){return e>t},reachedMin:function(t){return t<e},removeOffset:function(e){return n?e-n*Math.ceil((e-t)/n):e}}}function S(e){let t=e;function n(e){return d(e)?e:e.get()}return{get:function(){return t},set:function(e){t=n(e)},add:function(e){t+=n(e)},subtract:function(e){t-=n(e)}}}function C(e,t){let n="x"===e.scroll?function(e){return`translate3d(${e}px,0px,0px)`}:function(e){return`translate3d(0px,${e}px,0px)`},r=t.style,i=null,o=!1;return{clear:function(){o||(r.transform="",t.getAttribute("style")||t.removeAttribute("style"))},to:function(t){if(o)return;let s=Math.round(100*e.direction(t))/100;s!==i&&(r.transform=n(s),i=s)},toggleActive:function(e){o=!e}}}a.displayName="CardContent",i.forwardRef(({className:e,...t},n)=>(0,r.jsx)("div",{ref:n,className:(0,o.cn)("flex items-center p-6 pt-0",e),...t})).displayName="CardFooter";let O={align:"center",axis:"x",container:null,slides:null,containScroll:"trimSnaps",direction:"ltr",slidesToScroll:1,inViewThreshold:0,breakpoints:{},dragFree:!1,dragThreshold:10,loop:!1,skipSnaps:!1,duration:25,startIndex:0,active:!0,watchDrag:!0,watchResize:!0,watchSlides:!0,watchFocus:!0};function D(e,t,n){let r,i,o,s,a;let l=e.ownerDocument,u=l.defaultView,c=function(e){function t(e,t){return function e(t,n){return[t,n].reduce((t,n)=>(w(n).forEach(r=>{let i=t[r],o=n[r],s=m(i)&&m(o);t[r]=s?e(i,o):o}),t),{})}(e,t||{})}return{mergeOptions:t,optionsAtMedia:function(n){let r=n.breakpoints||{},i=w(r).filter(t=>e.matchMedia(t).matches).map(e=>r[e]).reduce((e,n)=>t(e,n),{});return t(n,i)},optionsMediaQueries:function(t){return t.map(e=>w(e.breakpoints||{})).reduce((e,t)=>e.concat(t),[]).map(e.matchMedia)}}}(u),E=(a=[],{init:function(e,t){return(a=t.filter(({options:e})=>!1!==c.optionsAtMedia(e).active)).forEach(t=>t.init(e,c)),t.reduce((e,t)=>Object.assign(e,{[t.name]:t}),{})},destroy:function(){a=a.filter(e=>e.destroy())}}),A=j(),P=function(){let e,t={},n={init:function(t){e=t},emit:function(r){return(t[r]||[]).forEach(t=>t(e,r)),n},off:function(e,r){return t[e]=(t[e]||[]).filter(e=>e!==r),n},on:function(e,r){return t[e]=(t[e]||[]).concat([r]),n},clear:function(){t={}}};return n}(),{mergeOptions:I,optionsAtMedia:F,optionsMediaQueries:L}=c,{on:M,off:q,emit:z}=P,R=!1,T=I(O,D.globalOptions),U=I(T),$=[];function _(t,n){!R&&(U=F(T=I(T,t)),$=n||$,function(){let{container:t,slides:n}=U;o=(f(t)?e.querySelector(t):t)||e.children[0];let r=f(n)?o.querySelectorAll(n):n;s=[].slice.call(r||o.children)}(),r=function t(n){let r=function(e,t,n,r,i,o,s){let a,l;let{align:u,axis:c,direction:m,startIndex:O,loop:D,duration:E,dragFree:A,dragThreshold:P,inViewThreshold:I,slidesToScroll:F,skipSnaps:L,containScroll:M,watchResize:q,watchSlides:z,watchDrag:R,watchFocus:T}=o,U={measure:function(e){let{offsetTop:t,offsetLeft:n,offsetWidth:r,offsetHeight:i}=e;return{top:t,right:n+r,bottom:t+i,left:n,width:r,height:i}}},$=U.measure(t),_=n.map(U.measure),B=function(e,t){let n="rtl"===t,r="y"===e,i=!r&&n?-1:1;return{scroll:r?"y":"x",cross:r?"x":"y",startEdge:r?"top":n?"right":"left",endEdge:r?"bottom":n?"left":"right",measureSize:function(e){let{height:t,width:n}=e;return r?t:n},direction:function(e){return e*i}}}(c,m),H=B.measureSize($),V={measure:function(e){return e/100*H}},G=function(e,t){let n={start:function(){return 0},center:function(e){return(t-e)/2},end:function(e){return t-e}};return{measure:function(r,i){return f(e)?n[e](r):e(t,r,i)}}}(u,H),X=!D&&!!M,{slideSizes:J,slideSizesWithGaps:K,startGap:W,endGap:Q}=function(e,t,n,r,i,o){let{measureSize:s,startEdge:a,endEdge:l}=e,u=n[0]&&i,c=function(){if(!u)return 0;let e=n[0];return g(t[a]-e[a])}(),d=u?parseFloat(o.getComputedStyle(v(r)).getPropertyValue(`margin-${l}`)):0,f=n.map(s),p=n.map((e,t,n)=>{let r=t===y(n);return t?r?f[t]+d:n[t+1][a]-e[a]:f[t]+c}).map(g);return{slideSizes:f,slideSizesWithGaps:p,startGap:c,endGap:d}}(B,$,_,n,D||!!M,i),Y=function(e,t,n,r,i,o,s,a,l){let{startEdge:u,endEdge:c,direction:f}=e,p=d(n);return{groupSlides:function(e){return p?h(e).filter(e=>e%n==0).map(t=>e.slice(t,t+n)):e.length?h(e).reduce((n,l,d)=>{let p=v(n)||0,m=l===y(e),x=i[u]-o[p][u],h=i[u]-o[l][c],b=r||0!==p?0:f(s),w=g(h-(!r&&m?f(a):0)-(x+b));return d&&w>t+2&&n.push(l),m&&n.push(e.length),n},[]).map((t,n,r)=>{let i=Math.max(r[n-1]||0);return e.slice(i,t)}):[]}}}(B,H,F,D,$,_,W,Q,0),{snaps:Z,snapsAligned:ee}=function(e,t,n,r,i){let{startEdge:o,endEdge:s}=e,{groupSlides:a}=i,l=a(r).map(e=>v(e)[s]-e[0][o]).map(g).map(t.measure),u=r.map(e=>n[o]-e[o]).map(e=>-g(e)),c=a(u).map(e=>e[0]).map((e,t)=>e+l[t]);return{snaps:u,snapsAligned:c}}(B,G,$,_,Y),et=-v(Z)+v(K),{snapsContained:en,scrollContainLimit:er}=function(e,t,n,r,i){let o=k(-t+e,0),s=n.map((e,t)=>{let{min:r,max:i}=o,s=o.constrain(e),a=t===y(n);return t?a||1>g(r-s)?r:1>g(i-s)?i:s:i}).map(e=>parseFloat(e.toFixed(3))),a=function(){let e=s[0],t=v(s);return k(s.lastIndexOf(e),s.indexOf(t)+1)}();return{snapsContained:function(){if(t<=e+2)return[o.max];if("keepSnaps"===r)return s;let{min:n,max:i}=a;return s.slice(n,i)}(),scrollContainLimit:a}}(H,et,ee,M,0),ei=X?en:ee,{limit:eo}=function(e,t,n){let r=t[0];return{limit:k(n?r-e:v(t),r)}}(et,ei,D),es=function e(t,n,r){let{constrain:i}=k(0,t),o=t+1,s=a(n);function a(e){return r?g((o+e)%o):i(e)}function l(){return e(t,s,r)}let u={get:function(){return s},set:function(e){return s=a(e),u},add:function(e){return l().set(s+e)},clone:l};return u}(y(ei),O,D),ea=es.clone(),el=h(n),eu=({dragHandler:e,scrollBody:t,scrollBounds:n,options:{loop:r}})=>{r||n.constrain(e.pointerDown()),t.seek()},ec=({scrollBody:e,translate:t,location:n,offsetLocation:r,previousLocation:i,scrollLooper:o,slideLooper:s,dragHandler:a,animation:l,eventHandler:u,scrollBounds:c,options:{loop:d}},f)=>{let p=e.settled(),m=!c.shouldConstrain(),g=d?p:p&&m;g&&!a.pointerDown()&&(l.stop(),u.emit("settle")),g||u.emit("scroll");let x=n.get()*f+i.get()*(1-f);r.set(x),d&&(o.loop(e.direction()),s.loop()),t.to(r.get())},ed=function(e,t,n,r){let i=j(),o=1e3/60,s=null,a=0,l=0;function u(e){if(!l)return;s||(s=e);let i=e-s;for(s=e,a+=i;a>=o;)n(),a-=o;r(a/o),l&&(l=t.requestAnimationFrame(u))}function c(){t.cancelAnimationFrame(l),s=null,a=0,l=0}return{init:function(){i.add(e,"visibilitychange",()=>{e.hidden&&(s=null,a=0)})},destroy:function(){c(),i.clear()},start:function(){l||(l=t.requestAnimationFrame(u))},stop:c,update:n,render:r}}(r,i,()=>eu(eS),e=>ec(eS,e)),ef=ei[es.get()],ep=S(ef),em=S(ef),eg=S(ef),ex=S(ef),eh=function(e,t,n,r,i,o){let s=0,a=0,l=i,u=.68,c=e.get(),d=0;function f(e){return l=e,m}function p(e){return u=e,m}let m={direction:function(){return a},duration:function(){return l},velocity:function(){return s},seek:function(){let t=r.get()-e.get(),i=0;return l?(n.set(e),s+=t/l,s*=u,c+=s,e.add(s),i=c-d):(s=0,n.set(r),e.set(r),i=t),a=x(i),d=c,m},settled:function(){return .001>g(r.get()-t.get())},useBaseFriction:function(){return p(.68)},useBaseDuration:function(){return f(i)},useFriction:p,useDuration:f};return m}(ep,eg,em,ex,E,0),ev=function(e,t,n,r,i){let{reachedAny:o,removeOffset:s,constrain:a}=r;function l(e){return e.concat().sort((e,t)=>g(e)-g(t))[0]}function u(t,r){let i=[t,t+n,t-n];if(!e)return t;if(!r)return l(i);let o=i.filter(e=>x(e)===r);return o.length?l(o):v(i)-n}return{byDistance:function(n,r){let l=i.get()+n,{index:c,distance:d}=function(n){let r=e?s(n):a(n),{index:i}=t.map((e,t)=>({diff:u(e-r,0),index:t})).sort((e,t)=>g(e.diff)-g(t.diff))[0];return{index:i,distance:r}}(l),f=!e&&o(l);if(!r||f)return{index:c,distance:n};let p=n+u(t[c]-d,0);return{index:c,distance:p}},byIndex:function(e,n){let r=u(t[e]-i.get(),n);return{index:e,distance:r}},shortcut:u}}(D,ei,et,eo,ex),ey=function(e,t,n,r,i,o,s){function a(i){let a=i.distance,l=i.index!==t.get();o.add(a),a&&(r.duration()?e.start():(e.update(),e.render(1),e.update())),l&&(n.set(t.get()),t.set(i.index),s.emit("select"))}return{distance:function(e,t){a(i.byDistance(e,t))},index:function(e,n){let r=t.clone().set(e);a(i.byIndex(r.get(),n))}}}(ed,es,ea,eh,ev,ex,s),eb=function(e){let{max:t,length:n}=e;return{get:function(e){return n?-((e-t)/n):0}}}(eo),ew=j(),eN=function(e,t,n,r){let i;let o={},s=null,a=null,l=!1;return{init:function(){i=new IntersectionObserver(e=>{l||(e.forEach(e=>{o[t.indexOf(e.target)]=e}),s=null,a=null,n.emit("slidesInView"))},{root:e.parentElement,threshold:r}),t.forEach(e=>i.observe(e))},destroy:function(){i&&i.disconnect(),l=!0},get:function(e=!0){if(e&&s)return s;if(!e&&a)return a;let t=w(o).reduce((t,n)=>{let r=parseInt(n),{isIntersecting:i}=o[r];return(e&&i||!e&&!i)&&t.push(r),t},[]);return e&&(s=t),e||(a=t),t}}}(t,n,s,I),{slideRegistry:ej}=function(e,t,n,r,i,o){let{groupSlides:s}=i,{min:a,max:l}=r;return{slideRegistry:function(){let r=s(o);return 1===n.length?[o]:e&&"keepSnaps"!==t?r.slice(a,l).map((e,t,n)=>{let r=t===y(n);return t?r?b(y(o)-v(n)[0]+1,v(n)[0]):e:b(v(n[0])+1)}):r}()}}(X,M,ei,er,Y,el),ek=function(e,t,n,r,i,o,s,a){let l={passive:!0,capture:!0},u=0;function c(e){"Tab"===e.code&&(u=new Date().getTime())}return{init:function(f){a&&(o.add(document,"keydown",c,!1),t.forEach((t,c)=>{o.add(t,"focus",t=>{(p(a)||a(f,t))&&function(t){if(new Date().getTime()-u>10)return;s.emit("slideFocusStart"),e.scrollLeft=0;let o=n.findIndex(e=>e.includes(t));d(o)&&(i.useDuration(0),r.index(o,0),s.emit("slideFocus"))}(c)},l)}))}}}(e,n,ej,ey,eh,ew,s,T),eS={ownerDocument:r,ownerWindow:i,eventHandler:s,containerRect:$,slideRects:_,animation:ed,axis:B,dragHandler:function(e,t,n,r,i,o,s,a,l,u,c,d,f,m,h,v,y,b,w){let{cross:S,direction:C}=e,O=["INPUT","SELECT","TEXTAREA"],D={passive:!1},E=j(),A=j(),P=k(50,225).constrain(m.measure(20)),I={mouse:300,touch:400},F={mouse:500,touch:600},L=h?43:25,M=!1,q=0,z=0,R=!1,T=!1,U=!1,$=!1;function _(e){if(!N(e,r)&&e.touches.length>=2)return B(e);let t=o.readPoint(e),n=o.readPoint(e,S),s=g(t-q),l=g(n-z);if(!T&&!$&&(!e.cancelable||!(T=s>l)))return B(e);let c=o.pointerMove(e);s>v&&(U=!0),u.useFriction(.3).useDuration(.75),a.start(),i.add(C(c)),e.preventDefault()}function B(e){let t=c.byDistance(0,!1).index!==d.get(),n=o.pointerUp(e)*(h?F:I)[$?"mouse":"touch"],r=function(e,t){let n=d.add(-1*x(e)),r=c.byDistance(e,!h).distance;return h||g(e)<P?r:y&&t?.5*r:c.byIndex(n.get(),0).distance}(C(n),t),i=function(e,t){var n,r;if(0===e||0===t||g(e)<=g(t))return 0;let i=(n=g(e),r=g(t),g(n-r));return g(i/e)}(n,r);T=!1,R=!1,A.clear(),u.useDuration(L-10*i).useFriction(.68+i/50),l.distance(r,!h),$=!1,f.emit("pointerUp")}function H(e){U&&(e.stopPropagation(),e.preventDefault(),U=!1)}return{init:function(e){w&&E.add(t,"dragstart",e=>e.preventDefault(),D).add(t,"touchmove",()=>void 0,D).add(t,"touchend",()=>void 0).add(t,"touchstart",a).add(t,"mousedown",a).add(t,"touchcancel",B).add(t,"contextmenu",B).add(t,"click",H,!0);function a(a){(p(w)||w(e,a))&&function(e){let a=N(e,r);$=a,U=h&&a&&!e.buttons&&M,M=g(i.get()-s.get())>=2,a&&0!==e.button||function(e){let t=e.nodeName||"";return O.includes(t)}(e.target)||(R=!0,o.pointerDown(e),u.useFriction(0).useDuration(0),i.set(s),function(){let e=$?n:t;A.add(e,"touchmove",_,D).add(e,"touchend",B).add(e,"mousemove",_,D).add(e,"mouseup",B)}(),q=o.readPoint(e),z=o.readPoint(e,S),f.emit("pointerDown"))}(a)}},destroy:function(){E.clear(),A.clear()},pointerDown:function(){return R}}}(B,e,r,i,ex,function(e,t){let n,r;function i(e){return e.timeStamp}function o(n,r){let i=r||e.scroll,o=`client${"x"===i?"X":"Y"}`;return(N(n,t)?n:n.touches[0])[o]}return{pointerDown:function(e){return n=e,r=e,o(e)},pointerMove:function(e){let t=o(e)-o(r),s=i(e)-i(n)>170;return r=e,s&&(n=e),t},pointerUp:function(e){if(!n||!r)return 0;let t=o(r)-o(n),s=i(e)-i(n),a=i(e)-i(r)>170,l=t/s;return s&&!a&&g(l)>.1?l:0},readPoint:o}}(B,i),ep,ed,ey,eh,ev,es,s,V,A,P,L,0,R),eventStore:ew,percentOfView:V,index:es,indexPrevious:ea,limit:eo,location:ep,offsetLocation:eg,previousLocation:em,options:o,resizeHandler:function(e,t,n,r,i,o,s){let a,l;let u=[e].concat(r),c=[],d=!1;function f(e){return i.measureSize(s.measure(e))}return{init:function(i){o&&(l=f(e),c=r.map(f),a=new ResizeObserver(n=>{(p(o)||o(i,n))&&function(n){for(let o of n){if(d)return;let n=o.target===e,s=r.indexOf(o.target),a=n?l:c[s];if(g(f(n?e:r[s])-a)>=.5){i.reInit(),t.emit("resize");break}}}(n)}),n.requestAnimationFrame(()=>{u.forEach(e=>a.observe(e))}))},destroy:function(){d=!0,a&&a.disconnect()}}}(t,s,i,n,B,q,U),scrollBody:eh,scrollBounds:function(e,t,n,r,i){let o=i.measure(10),s=i.measure(50),a=k(.1,.99),l=!1;function u(){return!!(!l&&e.reachedAny(n.get())&&e.reachedAny(t.get()))}return{shouldConstrain:u,constrain:function(i){if(!u())return;let l=e.reachedMin(t.get())?"min":"max",c=g(e[l]-t.get()),d=n.get()-t.get(),f=a.constrain(c/s);n.subtract(d*f),!i&&g(d)<o&&(n.set(e.constrain(n.get())),r.useDuration(25).useBaseFriction())},toggleActive:function(e){l=!e}}}(eo,eg,ex,eh,V),scrollLooper:function(e,t,n,r){let{reachedMin:i,reachedMax:o}=k(t.min+.1,t.max+.1);return{loop:function(t){if(!(1===t?o(n.get()):-1===t&&i(n.get())))return;let s=-1*t*e;r.forEach(e=>e.add(s))}}}(et,eo,eg,[ep,eg,em,ex]),scrollProgress:eb,scrollSnapList:ei.map(eb.get),scrollSnaps:ei,scrollTarget:ev,scrollTo:ey,slideLooper:function(e,t,n,r,i,o,s,a,l){let u=h(i),c=p(f(h(i).reverse(),s[0]),n,!1).concat(p(f(u,t-s[0]-1),-n,!0));function d(e,t){return e.reduce((e,t)=>e-i[t],t)}function f(e,t){return e.reduce((e,n)=>d(e,t)>0?e.concat([n]):e,[])}function p(i,s,u){let c=o.map((e,n)=>({start:e-r[n]+.5+s,end:e+t-.5+s}));return i.map(t=>{let r=u?0:-n,i=u?n:0,o=c[t][u?"end":"start"];return{index:t,loopPoint:o,slideLocation:S(-1),translate:C(e,l[t]),target:()=>a.get()>o?r:i}})}return{canLoop:function(){return c.every(({index:e})=>.1>=d(u.filter(t=>t!==e),t))},clear:function(){c.forEach(e=>e.translate.clear())},loop:function(){c.forEach(e=>{let{target:t,translate:n,slideLocation:r}=e,i=t();i!==r.get()&&(n.to(i),r.set(i))})},loopPoints:c}}(B,H,et,J,K,Z,ei,eg,n),slideFocus:ek,slidesHandler:(l=!1,{init:function(e){z&&(a=new MutationObserver(t=>{!l&&(p(z)||z(e,t))&&function(t){for(let n of t)if("childList"===n.type){e.reInit(),s.emit("slidesChanged");break}}(t)})).observe(t,{childList:!0})},destroy:function(){a&&a.disconnect(),l=!0}}),slidesInView:eN,slideIndexes:el,slideRegistry:ej,slidesToScroll:Y,target:ex,translate:C(B,t)};return eS}(e,o,s,l,u,n,P);return n.loop&&!r.slideLooper.canLoop()?t(Object.assign({},n,{loop:!1})):r}(U),L([T,...$.map(({options:e})=>e)]).forEach(e=>A.add(e,"change",B)),U.active&&(r.translate.to(r.location.get()),r.animation.init(),r.slidesInView.init(),r.slideFocus.init(X),r.eventHandler.init(X),r.resizeHandler.init(X),r.slidesHandler.init(X),r.options.loop&&r.slideLooper.loop(),o.offsetParent&&s.length&&r.dragHandler.init(X),i=E.init(X,$)))}function B(e,t){let n=G();H(),_(I({startIndex:n},e),t),P.emit("reInit")}function H(){r.dragHandler.destroy(),r.eventStore.clear(),r.translate.clear(),r.slideLooper.clear(),r.resizeHandler.destroy(),r.slidesHandler.destroy(),r.slidesInView.destroy(),r.animation.destroy(),E.destroy(),A.clear()}function V(e,t,n){U.active&&!R&&(r.scrollBody.useBaseFriction().useDuration(!0===t?0:U.duration),r.scrollTo.index(e,n||0))}function G(){return r.index.get()}let X={canScrollNext:function(){return r.index.add(1).get()!==G()},canScrollPrev:function(){return r.index.add(-1).get()!==G()},containerNode:function(){return o},internalEngine:function(){return r},destroy:function(){R||(R=!0,A.clear(),H(),P.emit("destroy"),P.clear())},off:q,on:M,emit:z,plugins:function(){return i},previousScrollSnap:function(){return r.indexPrevious.get()},reInit:B,rootNode:function(){return e},scrollNext:function(e){V(r.index.add(1).get(),e,-1)},scrollPrev:function(e){V(r.index.add(-1).get(),e,1)},scrollProgress:function(){return r.scrollProgress.get(r.location.get())},scrollSnapList:function(){return r.scrollSnapList},scrollTo:V,selectedScrollSnap:G,slideNodes:function(){return s},slidesInView:function(){return r.slidesInView.get()},slidesNotInView:function(){return r.slidesInView.get(!1)}};return _(t,n),setTimeout(()=>P.emit("init"),0),X}function E(e={},t=[]){let n=(0,i.useRef)(e),r=(0,i.useRef)(t),[o,s]=(0,i.useState)(),[a,l]=(0,i.useState)(),d=(0,i.useCallback)(()=>{o&&o.reInit(n.current,r.current)},[o]);return(0,i.useEffect)(()=>{u(n.current,e)||(n.current=e,d())},[e,d]),(0,i.useEffect)(()=>{!function(e,t){if(e.length!==t.length)return!1;let n=c(e),r=c(t);return n.every((e,t)=>u(e,r[t]))}(r.current,t)&&(r.current=t,d())},[t,d]),(0,i.useEffect)(()=>{if("undefined"!=typeof window&&window.document&&window.document.createElement&&a){D.globalOptions=E.globalOptions;let e=D(a,n.current,r.current);return s(e),()=>e.destroy()}s(void 0)},[a,s]),[l,o]}D.globalOptions=void 0,E.globalOptions=void 0;var A=n(1680);let P=(0,A.A)("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]),I=(0,A.A)("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);var F=n(9400);let L=i.createContext(null);function M(){let e=i.useContext(L);if(!e)throw Error("useCarousel must be used within a <Carousel />");return e}let q=i.forwardRef(({orientation:e="horizontal",opts:t,setApi:n,plugins:s,className:a,children:l,...u},c)=>{let[d,f]=E({...t,axis:"horizontal"===e?"x":"y"},s),[p,m]=i.useState(!1),[g,x]=i.useState(!1),h=i.useCallback(e=>{e&&(m(e.canScrollPrev()),x(e.canScrollNext()))},[]),v=i.useCallback(()=>{f?.scrollPrev()},[f]),y=i.useCallback(()=>{f?.scrollNext()},[f]),b=i.useCallback(e=>{"ArrowLeft"===e.key?(e.preventDefault(),v()):"ArrowRight"===e.key&&(e.preventDefault(),y())},[v,y]);return i.useEffect(()=>{f&&n&&n(f)},[f,n]),i.useEffect(()=>{if(f)return h(f),f.on("reInit",h),f.on("select",h),()=>{f?.off("select",h)}},[f,h]),(0,r.jsx)(L.Provider,{value:{carouselRef:d,api:f,opts:t,orientation:e||(t?.axis==="y"?"vertical":"horizontal"),scrollPrev:v,scrollNext:y,canScrollPrev:p,canScrollNext:g},children:(0,r.jsx)("div",{ref:c,onKeyDownCapture:b,className:(0,o.cn)("relative",a),role:"region","aria-roledescription":"carousel",...u,children:l})})});q.displayName="Carousel";let z=i.forwardRef(({className:e,...t},n)=>{let{carouselRef:i,orientation:s}=M();return(0,r.jsx)("div",{ref:i,className:"overflow-hidden",children:(0,r.jsx)("div",{ref:n,className:(0,o.cn)("flex","horizontal"===s?"-ml-4":"-mt-4 flex-col",e),...t})})});z.displayName="CarouselContent";let R=i.forwardRef(({className:e,...t},n)=>{let{orientation:i}=M();return(0,r.jsx)("div",{ref:n,role:"group","aria-roledescription":"slide",className:(0,o.cn)("min-w-0 shrink-0 grow-0 basis-full","horizontal"===i?"pl-4":"pt-4",e),...t})});R.displayName="CarouselItem",i.forwardRef(({className:e,variant:t="outline",size:n="icon",...i},s)=>{let{orientation:a,scrollPrev:l,canScrollPrev:u}=M();return(0,r.jsxs)(F.$,{ref:s,variant:t,size:n,className:(0,o.cn)("absolute  h-8 w-8 rounded-full","horizontal"===a?"-left-12 top-1/2 -translate-y-1/2":"-top-12 left-1/2 -translate-x-1/2 rotate-90",e),disabled:!u,onClick:l,...i,children:[(0,r.jsx)(P,{className:"h-4 w-4"}),(0,r.jsx)("span",{className:"sr-only",children:"Previous slide"})]})}).displayName="CarouselPrevious",i.forwardRef(({className:e,variant:t="outline",size:n="icon",...i},s)=>{let{orientation:a,scrollNext:l,canScrollNext:u}=M();return(0,r.jsxs)(F.$,{ref:s,variant:t,size:n,className:(0,o.cn)("absolute h-8 w-8 rounded-full","horizontal"===a?"-right-12 top-1/2 -translate-y-1/2":"-bottom-12 left-1/2 -translate-x-1/2 rotate-90",e),disabled:!u,onClick:l,...i,children:[(0,r.jsx)(I,{className:"h-4 w-4"}),(0,r.jsx)("span",{className:"sr-only",children:"Next slide"})]})}).displayName="CarouselNext";let T=(0,n(1643).F)("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function U({className:e,variant:t,...n}){return(0,r.jsx)("div",{className:(0,o.cn)(T({variant:t}),e),...n})}var $=n(8531),_=n.n($);let B=(0,A.A)("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]),H={active:!0,breakpoints:{},delay:4e3,jump:!1,playOnInit:!0,stopOnFocusIn:!0,stopOnInteraction:!0,stopOnMouseEnter:!1,stopOnLastSnap:!1,rootNode:null};function V(e={}){let t,n,r,i;let o=null,s=0,a=!1,l=!1,u=!1,c=!1;function d(){r||(a||n.emit("autoplay:play"),function(){let{ownerWindow:e}=n.internalEngine();e.clearTimeout(s),s=e.setTimeout(y,i[n.selectedScrollSnap()]),o=new Date().getTime(),n.emit("autoplay:timerset")}(),a=!0)}function f(){r||(a&&n.emit("autoplay:stop"),function(){let{ownerWindow:e}=n.internalEngine();e.clearTimeout(s),s=0,o=null,n.emit("autoplay:timerstopped")}(),a=!1)}function p(){if(m())return u=a,f();u&&d()}function m(){let{ownerDocument:e}=n.internalEngine();return"hidden"===e.visibilityState}function g(){l||f()}function x(){l||d()}function h(){l=!0,f()}function v(){l=!1,d()}function y(){let{index:e}=n.internalEngine(),r=e.clone().add(1).get(),i=n.scrollSnapList().length-1,o=t.stopOnLastSnap&&r===i;if(n.canScrollNext()?n.scrollNext(c):n.scrollTo(0,c),n.emit("autoplay:select"),o)return f();d()}return{name:"autoplay",options:e,init:function(o,s){n=o;let{mergeOptions:a,optionsAtMedia:l}=s,u=a(H,V.globalOptions);if(t=l(a(u,e)),n.scrollSnapList().length<=1)return;c=t.jump,r=!1,i=function(e,t){let n=e.scrollSnapList();return"number"==typeof t?n.map(()=>t):t(n,e)}(n,t.delay);let{eventStore:y,ownerDocument:b}=n.internalEngine(),w=!!n.internalEngine().options.watchDrag,N=function(e,t){let n=e.rootNode();return t&&t(n)||n}(n,t.rootNode);y.add(b,"visibilitychange",p),w&&n.on("pointerDown",g),w&&!t.stopOnInteraction&&n.on("pointerUp",x),t.stopOnMouseEnter&&y.add(N,"mouseenter",h),t.stopOnMouseEnter&&!t.stopOnInteraction&&y.add(N,"mouseleave",v),t.stopOnFocusIn&&n.on("slideFocusStart",f),t.stopOnFocusIn&&!t.stopOnInteraction&&y.add(n.containerNode(),"focusout",d),t.playOnInit&&!m()&&d()},destroy:function(){n.off("pointerDown",g).off("pointerUp",x).off("slideFocusStart",f),f(),r=!0,a=!1},play:function(e){void 0!==e&&(c=e),d()},stop:function(){a&&f()},reset:function(){a&&d()},isPlaying:function(){return a},timeUntilNext:function(){return o?i[n.selectedScrollSnap()]-(new Date().getTime()-o):null}}}function G({posts:e}){return(0,r.jsx)("section",{children:(0,r.jsx)(q,{plugins:[V({delay:3e3,stopOnInteraction:!1})],children:(0,r.jsx)(z,{className:"rounded-lg",children:e.map(e=>(0,r.jsx)(R,{className:"hover:shadow-xl hover:-translate-y-1 transition ease-in-out duration-300",children:(0,r.jsx)(_(),{href:`/entries/${e.fields.slug}`,children:(0,r.jsxs)(s,{className:"relative w-full h-[36rem] rounded-lg dark:border-slate-800",children:[(0,r.jsx)("div",{className:"absolute w-full h-full bg-cover bg-center filter brightness-50 rounded-lg",style:{backgroundImage:`url(${e.fields.image.fields.file.url})`}}),(0,r.jsxs)(a,{className:"relative z-10 flex flex-col justify-center items-start min-h-screen gap-y-4",children:[(0,r.jsx)("div",{className:"flex gap-2",children:e.fields.tags.map(e=>(0,r.jsx)(U,{className:"",children:e.charAt(0).toUpperCase()+e.slice(1)},e))}),(0,r.jsx)("h2",{className:"text-4xl font-bold text-start tracking-tight text-slate-50",children:e.fields.title}),(0,r.jsx)("p",{className:"text-start text-slate-200",children:e.fields.description}),(0,r.jsxs)("div",{className:"flex items-center gap-2",children:[(0,r.jsx)(B,{className:"w-4 h-4 text-slate-300"}),(0,r.jsx)("p",{className:"text-slate-300",children:new Date(e.sys.createdAt).toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"})})]})]})]})})},e.fields.title))})})})}V.globalOptions=void 0},519:(e,t,n)=>{"use strict";n.d(t,{A:()=>l});var r=n(6301);let i=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),o=(...e)=>e.filter((e,t,n)=>!!e&&""!==e.trim()&&n.indexOf(e)===t).join(" ").trim();var s={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let a=(0,r.forwardRef)(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:a="",children:l,iconNode:u,...c},d)=>(0,r.createElement)("svg",{ref:d,...s,width:t,height:t,stroke:e,strokeWidth:i?24*Number(n)/Number(t):n,className:o("lucide",a),...c},[...u.map(([e,t])=>(0,r.createElement)(e,t)),...Array.isArray(l)?l:[l]])),l=((e,t)=>{let n=(0,r.forwardRef)(({className:n,...s},l)=>(0,r.createElement)(a,{ref:l,iconNode:t,className:o(`lucide-${i(e)}`,n),...s}));return n.displayName=`${e}`,n})("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]])},1737:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>y,dynamic:()=>x,fetchCache:()=>h,revalidate:()=>v});var r=n(2740),i=n(9607),o=n.n(i),s=n(5635);n(6301);var a=n(7699),l=n(3327);let u=(0,a.F)("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function c({className:e,variant:t,...n}){return(0,r.jsx)("div",{className:(0,l.cn)(u({variant:t}),e),...n})}var d=n(8380),f=n(519);function p({posts:e,categories:t}){return(0,r.jsxs)("section",{className:"my-10",children:[(0,r.jsxs)("div",{className:"flex items-center justify-between",children:[(0,r.jsx)(o(),{href:"/entries",className:"text-3xl font-bold text-primary",children:"Entries"}),(0,r.jsx)("div",{className:"flex items-center gap-x-2",children:t.map(e=>(0,r.jsx)(c,{children:(0,r.jsx)(o(),{href:`/category/${e}`,children:e.charAt(0).toUpperCase()+e.slice(1)})},e))})]}),(0,r.jsx)("div",{className:"grid grid-cols-1 gap-8 mt-8",children:e.map(e=>(0,r.jsxs)("div",{className:"flex flex-col md:flex-row",children:[(0,r.jsx)("div",{className:"flex flex-col md:w-1/2",children:(0,r.jsx)(s.default,{src:`https:${e.fields.image.fields.file.url}`,width:500,height:300,className:"rounded-lg",alt:e.fields.image.fields.title})}),(0,r.jsxs)("div",{className:"flex flex-col md:w-1/2 gap-y-8",children:[(0,r.jsx)("h4",{className:"text-2xl font-bold text-primary",children:e.fields.title}),(0,r.jsx)("p",{className:"text-foreground",children:e.fields.description}),(0,r.jsxs)("div",{className:"flex items-center gap-x-2",children:[(0,r.jsx)(f.A,{size:16}),(0,r.jsx)("p",{className:"text-foreground",children:new Date(e.sys.createdAt).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})})]}),(0,r.jsx)("div",{className:"flex flex-wrap gap-x-2",children:e.fields.tags.map(e=>(0,r.jsx)(c,{variant:"outline",children:e.charAt(0).toUpperCase()+e.slice(1)},e))}),(0,r.jsx)("div",{className:"flex flex-wrap gap-x-2",children:(0,r.jsx)(d.$,{children:(0,r.jsx)(o(),{href:`/entries/${e.fields.slug}`,children:"Leer m\xe1s"})})})]})]},e.sys.id))})]})}var m=n(3602),g=n(5007);let x="auto",h="auto",v=10;async function y(){let e=(await g.S.getEntries({content_type:"blog3",limit:3})).items??[],t=(await g.S.getEntries({content_type:"blog3",limit:3,skip:3})).items??[],n=[...new Set(t.map(e=>e.fields.tags).flat())];return(0,r.jsxs)("section",{className:"lg:px-16 px-2",children:[(0,r.jsx)(m.default,{posts:e}),(0,r.jsx)(p,{posts:t,categories:n})]})}},3602:(e,t,n)=>{"use strict";n.d(t,{default:()=>r});let r=(0,n(6760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"C:\\\\Users\\\\asus\\\\OneDrive\\\\Dokumen\\\\BlogFix\\\\src\\\\components\\\\hero-carousel.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\asus\\OneDrive\\Dokumen\\BlogFix\\src\\components\\hero-carousel.tsx","default")}};var t=require("../webpack-runtime.js");t.C(e);var n=e=>t(t.s=e),r=t.X(0,[638,391,750],()=>n(2128));module.exports=r})();