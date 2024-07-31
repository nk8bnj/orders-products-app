(()=>{var e={};e.id=409,e.ids=[409],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9491:e=>{"use strict";e.exports=require("assert")},4300:e=>{"use strict";e.exports=require("buffer")},2081:e=>{"use strict";e.exports=require("child_process")},6113:e=>{"use strict";e.exports=require("crypto")},2361:e=>{"use strict";e.exports=require("events")},7147:e=>{"use strict";e.exports=require("fs")},3685:e=>{"use strict";e.exports=require("http")},5687:e=>{"use strict";e.exports=require("https")},1808:e=>{"use strict";e.exports=require("net")},1017:e=>{"use strict";e.exports=require("path")},2781:e=>{"use strict";e.exports=require("stream")},4404:e=>{"use strict";e.exports=require("tls")},6224:e=>{"use strict";e.exports=require("tty")},7310:e=>{"use strict";e.exports=require("url")},3837:e=>{"use strict";e.exports=require("util")},9796:e=>{"use strict";e.exports=require("zlib")},7529:()=>{},8359:()=>{},3739:()=>{},6731:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>i.a,__next_app__:()=>p,originalPathname:()=>c,pages:()=>u,routeModule:()=>x,tree:()=>l}),r(7352),r(5866),r(2029);var s=r(3191),n=r(8716),a=r(7922),i=r.n(a),o=r(5231),d={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(d[e]=()=>o[e]);r.d(t,d);let l=["",{children:["/_not-found",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.t.bind(r,5866,23)),"next/dist/client/components/not-found-error"]}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,2029)),"/Users/Nikita/Code/orders-products-app/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,5866,23)),"next/dist/client/components/not-found-error"]}],u=[],c="/_not-found/page",p={require:r,loadChunk:()=>Promise.resolve()},x=new s.AppPageRouteModule({definition:{kind:n.x.APP_PAGE,page:"/_not-found/page",pathname:"/_not-found",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},7957:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,2994,23)),Promise.resolve().then(r.t.bind(r,6114,23)),Promise.resolve().then(r.t.bind(r,9727,23)),Promise.resolve().then(r.t.bind(r,9671,23)),Promise.resolve().then(r.t.bind(r,1868,23)),Promise.resolve().then(r.t.bind(r,4759,23))},1799:(e,t,r)=>{Promise.resolve().then(r.bind(r,9679))},9679:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>N});var s=r(326),n=r(7270),a=r.n(n);r(9973);var i=r(5842),o=r(434),d=r(5047),l=r(325),u=r.n(l);let c=()=>{let e=(0,d.usePathname)();return s.jsx("div",{className:u().container,children:(0,s.jsxs)("nav",{className:u().links,children:[s.jsx("img",{src:"/avatar.png",className:u().avatar,alt:"avatar"}),s.jsx(o.default,{href:"/products",className:u().link,children:s.jsx("p",{className:"/products"===e||"/"===e?u().active:"",children:"Products"})}),s.jsx(o.default,{href:"/orders",className:u().link,children:s.jsx("p",{className:"/orders"===e?u().active:"",children:"Orders"})})]})})};var p=r(7577),x=r(8848),_=r(3765),f=r(7380),m=r.n(f);let h=()=>{let[e,t]=(0,p.useState)(""),[r,n]=(0,p.useState)(""),[a,i]=(0,p.useState)(0);return(0,p.useEffect)(()=>{let e=(0,x.io)("http://localhost:3000"),r=setInterval(()=>{(0,_.dR)(t,n)},1e3);return e.on("activeSessions",e=>{i(e)}),()=>{clearInterval(r),e.disconnect()}},[]),s.jsx("div",{className:m().container,children:(0,s.jsxs)("div",{className:m().main,children:[(0,s.jsxs)("div",{className:m().logo,children:["d",s.jsx("span",{children:"ZEN"}),"code"]}),(0,s.jsxs)("div",{className:m().activeSessions,children:["Active Sessions: ",s.jsx("span",{children:a})]}),s.jsx("div",{className:m().dateWrapper,children:(0,s.jsxs)("div",{className:m().date,children:[s.jsx("span",{children:e}),s.jsx("div",{className:m().time,children:s.jsx("span",{className:m().clock,children:r})})]})})]})})};var v=r(3146),g=r(2225),j=r(167);let y=(0,v.xC)({reducer:{products:j.ZP,orders:g.ZP}});var P=r(5419),b=r.n(P);function N({children:e}){return s.jsx("html",{lang:"en",children:s.jsx("body",{className:a().className,children:(0,s.jsxs)(i.zt,{store:y,children:[s.jsx(h,{}),(0,s.jsxs)("div",{className:"d-flex",children:[s.jsx(c,{}),s.jsx("div",{className:b().main,children:e})]})]})})})}},2225:(e,t,r)=>{"use strict";r.d(t,{AU:()=>a,ZP:()=>d,wH:()=>o});var s=r(3146),n=r(4099);let a=(0,s.hg)("orders/fetchOrders",async()=>(await n.Z.get("http://localhost:3000/data/orders.json")).data),i=(0,s.oM)({name:"orders",initialState:{orders:[],error:null},reducers:{deleteOrder(e,t){e.orders=e.orders.filter(e=>e.id!==t.payload)}},extraReducers:e=>{e.addCase(a.fulfilled,(e,t)=>{e.orders=t.payload}).addCase(a.rejected,(e,t)=>{e.error=t.error.message||"Failed to fetch orders"})}}),{deleteOrder:o}=i.actions,d=i.reducer},167:(e,t,r)=>{"use strict";r.d(t,{Ir:()=>l,Tv:()=>o,ZP:()=>u,jk:()=>d,t2:()=>a});var s=r(3146),n=r(4099);let a=(0,s.hg)("products/fetchProducts",async()=>(await n.Z.get("http://localhost:3000/data/products.json")).data),i=(0,s.oM)({name:"products",initialState:{products:[],loading:!1,error:null,filter:"",typeFilter:"all"},reducers:{setFilter(e,t){e.filter=t.payload},setTypeFilter(e,t){e.typeFilter=t.payload},deleteProduct(e,t){e.products=e.products.filter(e=>e.id!==t.payload)}},extraReducers:e=>{e.addCase(a.pending,e=>{e.loading=!0,e.error=null}).addCase(a.fulfilled,(e,t)=>{e.products=t.payload,e.loading=!1}).addCase(a.rejected,(e,t)=>{e.loading=!1,e.error=t.error.message||"Something went wrong"})}}),{setFilter:o,setTypeFilter:d,deleteProduct:l}=i.actions,u=i.reducer},3765:(e,t,r)=>{"use strict";function s(e,t){return new Date(e).toLocaleDateString("en-GB","sm"===t?{day:"2-digit",month:"2-digit"}:{day:"2-digit",month:"short",year:"numeric"}).replace(/ /g," / ").replace(",","")}r.d(t,{dR:()=>n,p6:()=>s,vy:()=>a});let n=(e,t)=>{let r=new Date;e(new Intl.DateTimeFormat("en-US",{weekday:"long",day:"numeric",month:"long",year:"numeric"}).format(r)),t(new Intl.DateTimeFormat("en-US",{hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1}).format(r))};function a(e){return(41.05*e).toFixed(2)}},5419:e=>{e.exports={main:"page_main__GlU4n"}},325:e=>{e.exports={container:"NavigationMenu_container__cQGmD",avatar:"NavigationMenu_avatar__s_2hL",links:"NavigationMenu_links__i__39",link:"NavigationMenu_link__6aWzt",active:"NavigationMenu_active__W_yui"}},7380:e=>{e.exports={container:"TopMenu_container__Szrj_",main:"TopMenu_main__xt_yP",logo:"TopMenu_logo__uTdYX",dateWrapper:"TopMenu_dateWrapper__b_kch",date:"TopMenu_date__RbGzE",time:"TopMenu_time__RiefM",activeSessions:"TopMenu_activeSessions__bL6hu"}},6399:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{isNotFoundError:function(){return n},notFound:function(){return s}});let r="NEXT_NOT_FOUND";function s(){let e=Error(r);throw e.digest=r,e}function n(e){return"object"==typeof e&&null!==e&&"digest"in e&&e.digest===r}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7352:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{PARALLEL_ROUTE_DEFAULT_PATH:function(){return n},default:function(){return a}});let s=r(6399),n="next/dist/client/components/parallel-route-default.js";function a(){(0,s.notFound)()}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2029:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>i,__esModule:()=>a,default:()=>o});var s=r(8570);let n=(0,s.createProxy)(String.raw`/Users/Nikita/Code/orders-products-app/src/app/layout.tsx`),{__esModule:a,$$typeof:i}=n;n.default;let o=(0,s.createProxy)(String.raw`/Users/Nikita/Code/orders-products-app/src/app/layout.tsx#default`)}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[948,68],()=>r(6731));module.exports=s})();