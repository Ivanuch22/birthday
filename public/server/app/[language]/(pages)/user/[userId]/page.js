(()=>{var e={};e.id=155,e.ids=[155],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},39432:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>i.a,__next_app__:()=>x,originalPathname:()=>u,pages:()=>c,routeModule:()=>_,tree:()=>d}),r(86613),r(30233),r(59680),r(35866);var a=r(23191),n=r(88716),s=r(37922),i=r.n(s),o=r(95231),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);r.d(t,l);let d=["",{children:["[language]",{children:["(pages)",{children:["user",{children:["[userId]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,86613)),"/var/www/site_user76/data/www/366dates.com/app/[language]/(pages)/user/[userId]/page.tsx"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,30233)),"/var/www/site_user76/data/www/366dates.com/app/[language]/(pages)/layout.tsx"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,59680)),"/var/www/site_user76/data/www/366dates.com/app/[language]/layout.tsx"]}]},{"not-found":[()=>Promise.resolve().then(r.t.bind(r,35866,23)),"next/dist/client/components/not-found-error"]}],c=["/var/www/site_user76/data/www/366dates.com/app/[language]/(pages)/user/[userId]/page.tsx"],u="/[language]/(pages)/user/[userId]/page",x={require:r,loadChunk:()=>Promise.resolve()},_=new a.AppPageRouteModule({definition:{kind:n.x.APP_PAGE,page:"/[language]/(pages)/user/[userId]/page",pathname:"/[language]/user/[userId]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},15320:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,79404,23)),Promise.resolve().then(r.bind(r,65400)),Promise.resolve().then(r.bind(r,88802))},23016:(e,t,r)=>{"use strict";r.d(t,{I:()=>a.I});var a=r(817)},65400:(e,t,r)=>{"use strict";r.d(t,{default:()=>i});var a=r(10326),n=r(57665),s=r(35047);let i=({children:e})=>{let t=(0,s.useRouter)(),r=(0,s.usePathname)();return a.jsx(n.z,{onClick:()=>{document.cookie="Auth=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;",2===r.split("/").length?t.refresh():t.push("/")},children:e})}},33713:(e,t,r)=>{"use strict";r.d(t,{default:()=>d});var a=r(10326),n=r(17577),s=r(31205),i=r(80916),o=r.n(i),l=r(57665);let d=({columns:e,data:t})=>{let{getTableProps:r,getTableBodyProps:i,headerGroups:d,page:c,prepareRow:u,gotoPage:x,nextPage:_,previousPage:h,canNextPage:m,canPreviousPage:g,pageCount:p,state:{pageIndex:w}}=(0,s.useTable)({columns:e,data:t,initialState:{pageIndex:0}},s.usePagination);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("table",{...r(),className:o().table,children:[a.jsx("thead",{children:d.map((e,t)=>(0,n.createElement)("tr",{...e.getHeaderGroupProps(),key:t},e.headers.map(e=>(0,n.createElement)("th",{...e.getHeaderProps(),key:e.id},e.render("Header")))))}),a.jsx("tbody",{...i(),children:c.map(e=>(u(e),(0,n.createElement)("tr",{...e.getRowProps(),key:e.id},e.cells.map((e,t)=>(0,n.createElement)("td",{...e.getCellProps(),key:t},e.render("Cell"))))))})]}),(0,a.jsxs)("div",{className:o().pagination,children:[a.jsx(l.z,{onClick:()=>x(0),disabled:!g,children:"<<"})," ",a.jsx(l.z,{onClick:()=>h(),disabled:!g,children:"<"})," ",a.jsx(l.z,{onClick:()=>_(),disabled:!m,children:">"})," ",a.jsx(l.z,{onClick:()=>x(p-1),disabled:!m,children:">>"})," ",a.jsx("span",{children:(0,a.jsxs)("strong",{children:[w+1," / ",p]})})]})]})}},88802:(e,t,r)=>{"use strict";r.d(t,{default:()=>P});var a=r(10326),n=r(63746),s=r(17577),i=r.n(s),o=r(29550),l=r(57665),d=r(23016),c=r(76863);function u(e,t=new Date().getMonth()+1){let r=new Date,[a,n]=e.split("/").map(Number),s=r.getFullYear();return(n<t||n===t&&a<r.getDate())&&s++,Math.ceil((new Date(s,n-1,a).getTime()-r.getTime())/864e5)}var x=r(10103),_=r.n(x);let h=({birthday:e})=>{let t=u(e);return t>0&&(0,a.jsxs)(n.x,{tag:"p",className:_().daysUntilText,children:[t," day",1===t?"":"s"," until birthday"]})};var m=r(24670),g=r.n(m),p=r(893),w=r(15269),f=r(8357);function y(e){return["Januar","Februar","M\xe4rz","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"][e-1]}let b=i().memo(({months:e,initialMonthIndex:t,userId:r,placeholders:i,onSubmit:u,initialDay:x,buttonText:_,showDaysUntil:m=!1,title:b,actionPath:j="/add-friend"})=>{let[v,T]=(0,s.useState)(()=>({month:`${t}`,day:`${x}`,name:"",note:"",month_name:y(t),id:""})),[P,I]=(0,s.useState)(""),[S,k]=(0,s.useState)(r),[D,U]=(0,s.useState)(),[C,{data:F={},isLoading:M,isError:H,isSuccess:N}]=(0,w.l4)(),[E,{isLoading:z,isError:A,isSuccess:q}]=(0,f.kP)(),O=(0,s.useCallback)(async e=>{e.preventDefault(),u&&u(v),C({...v,email:function(){let e=["nomail.com"],t="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",r="";for(var a=0;a<Math.floor(6*Math.random())+5;a++)r+=t.charAt(Math.floor(Math.random()*t.length));return r+"@"+e[Math.floor(Math.random()*e.length)]}(),password:"nopass"}).then(()=>{document.location.reload()})},[v]),G=(0,s.useCallback)((e,t)=>{T(r=>({...r,[t]:e,month_name:"month"===t&&y(e)}))},[v.month,v.day]),$=(0,s.useCallback)(({target:e},t)=>{T(r=>({...r,[t]:e.value}))},[]);(0,s.useEffect)(()=>{F.data&&U(F.data.userId),S&&D&&N&&D&&E({userId:S,friendId:D})},[E,D,N,S,F]);let{monthPlaceholder:B,dayPlaceholder:Z,cityPlaceholder:J,notePlaceholder:L,namePlaceholder:R}=i;return(0,a.jsxs)(c.Z,{children:[b&&a.jsx(n.x,{tag:"h2",children:b}),(0,a.jsxs)("form",{onSubmit:O,className:g().newUserFormInitial,children:[(0,a.jsxs)("div",{className:g().newUserFormInitial__formGroup,children:[a.jsx(d.I,{type:"text",placeholder:R,required:!0,value:v.name,onChange:e=>$(e,"name")}),a.jsx(p.Z,{required:!0,placeholder:J,onChange:e=>$(e,"city")})]}),a.jsx(o.Z,{monthLabel:B,dayLabel:Z,months:e,initialMonthIndex:t,initialDay:x,onChangeHandler:G}),a.jsx(d.I,{type:"textfield",placeholder:L,value:v.note,onChange:e=>$(e,"note")}),a.jsx(l.z,{type:"submit",children:_})]}),m&&P&&a.jsx(h,{birthday:P})]})});var j=r(33713);let v=({data:e,exclude:t,additionalColumns:r=[],t:n})=>{let s=[{Header:n("name"),accessor:"name"},{Header:n("month"),accessor:"month_name"},{Header:n("day"),accessor:"day"},{Header:n("city"),accessor:"city"},{Header:n("language"),accessor:"language"},{Header:n("foreign"),accessor:"foreign"},{Header:n("another_foreign"),accessor:"another_foreign"},{Header:n("notes"),accessor:"note"},...r,{Header:"ID",accessor:"id"}];return a.jsx(j.default,{columns:t?s.filter(e=>!t?.includes(e.accessor)):s,data:e})};var T=r(67135);let P=({addFriendTitle:e,upcomingFriendsTitle:t,addFriendButtonText:r,friendsData:i,months:o,currentDay:l,currentMonthIndex:d,language:c,userId:x,placeholders:_})=>{let[h,m]=(0,s.useState)([]),[g,p]=(0,s.useState)([]),w=async e=>{try{let t=await fetch("/api/getAllUserFriends",{method:"POST",body:JSON.stringify({userId:e}),cache:"no-store",mode:"no-cors"}),r=await t.json();m(r)}catch(e){return console.error(e),[]}};(0,s.useEffect)(()=>{w(x)},[]),(0,s.useEffect)(()=>{p(h.map(e=>{let t=u(`${e.day}/${e.month}`);return{...e,days_until:t||0}}))},[h]);let{t:f}=(0,T.$)(c);return(0,a.jsxs)(a.Fragment,{children:[a.jsx("section",{children:a.jsx(b,{userId:x,placeholders:_,title:e,showDaysUntil:!0,months:o,initialDay:l,initialMonthIndex:d,buttonText:r,onSubmit:e=>{m([{...e},...h])}})}),(0,a.jsxs)("section",{children:[a.jsx(n.x,{tag:"h2",children:t}),a.jsx(v,{data:g,t:f,exclude:["language","foreign","another_foreign","id"],additionalColumns:[{Header:f("days_until"),accessor:"days_until"}]})]})]})}},68466:e=>{e.exports={btn:"Button_btn__T_tor"}},80916:e=>{e.exports={table:"Table_table__YseOC",pagination:"Table_pagination__ro4bO"}},88631:e=>{e.exports={text_h1:"Text_text_h1__OdNbi",text_h2:"Text_text_h2__Nw8YB",text_h3:"Text_text_h3__4S0Tf",text_h4:"Text_text_h4__HvIiJ",text_h5:"Text_text_h5__K87Vt",text_bold:"Text_text_bold__rf_8I",text_medium:"Text_text_medium__nRIOp",text_regular:"Text_text_regular__uDYK2",text_xs:"Text_text_xs__LY21J",text_s:"Text_text_s__4zmlr",text_m:"Text_text_m__wXbdE",text_l:"Text_text_l__tIVVd",text_xl:"Text_text_xl__gGNCf",text_primary:"Text_text_primary__Rg4dV",text_secondary:"Text_text_secondary__IWZLR",text_alert:"Text_text_alert__YbKal",text_success:"Text_text_success__gIiq0",text_action:"Text_text_action__hA7LD"}},10103:e=>{e.exports={daysUntilText:"DaysUntilBirthdayText_daysUntilText__w2WAm"}},81334:e=>{e.exports={header:"Header_header___WHye"}},91561:e=>{e.exports={searchblock:"StyledSearchPage_searchblock__i9AhW"}},24670:e=>{e.exports={newUserFormInitial:"NewUserFormInitial_newUserFormInitial__1a1su",newUserFormInitial__formGroup:"NewUserFormInitial_newUserFormInitial__formGroup__iJUD1"}},86613:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>p,metadata:()=>g});var a=r(19510),n=r(67604),s=r(17050),i=r(12690),o=r(69219),l=r(35142),d=r(57371),c=r(91121),u=r(68570);let x=(0,u.createProxy)(String.raw`/var/www/site_user76/data/www/366dates.com/src/components/organisms/UserDashboard/UserDashboard.tsx`),{__esModule:_,$$typeof:h}=x;x.default;let m=(0,u.createProxy)(String.raw`/var/www/site_user76/data/www/366dates.com/src/components/organisms/UserDashboard/UserDashboard.tsx#default`),g={title:"Blog des Freundeskalenders - Ihre Quelle f\xfcr Inspiration und einzigartige Geschichten!",description:"Tauchen Sie ein in die faszinierende Welt unserer Geschichten, inspirierenden Artikel und unterhaltsamen Fakten \xfcber Feiern und Treffen!"},p=async({params:e,searchParams:t})=>{let{userId:r,language:u}=e,{t:x}=await (0,o.$)(u),_=await (0,i.Z)(u),h=new Date,{day:g=h.getDate(),month:p=h.getMonth()+1,city:w}=t,f={newUserSuccessMessage:x("new_user_success"),newUserErrorMessage:x("new_user_error"),cityPlaceholder:x("city"),monthPlaceholder:x("month_holder"),dayPlaceholder:x("day_holder"),notePlaceholder:x("notes"),namePlaceholder:x("name_holder")};return(0,a.jsxs)(s.Z,{children:[a.jsx(l.Z,{language:u,isLogged:!0,children:a.jsx(d.default,{href:"/",children:a.jsx(c.z,{children:x("home")})})}),a.jsx(n.x,{tag:"h1",children:x("blog_title")}),a.jsx(m,{userId:r,placeholders:f,addFriendTitle:x("add_friend"),myFriendsTitle:x("my_friends"),upcomingFriendsTitle:x("upcoming_birthdays"),language:u,months:_,currentDay:g,currentMonthIndex:p,addFriendButtonText:x("add_friend")})]})}},91121:(e,t,r)=>{"use strict";r.d(t,{z:()=>i});var a=r(19510);r(71159);var n=r(68466),s=r.n(n);let i=e=>{let{children:t,onClick:r,className:n,disabled:i}=e;return a.jsx("button",{...e,onClick:r,className:s().btn,children:t})}},67604:(e,t,r)=>{"use strict";r.d(t,{x:()=>d});var a=r(19510),n=r(71159),s=r(67815),i=r.n(s),o=r(88631),l=r.n(o);let d=({tag:e,children:t,weight:r,className:s,size:o,theme:d="primary"})=>{let c=i()(l().text,l()[`text_${e}`],{[l()[`text_${r}`]]:r,[l()[`text_${o}`]]:o,[l()[`text_${d}`]]:d,[s]:s});return a.jsx(({...r})=>(0,n.createElement)(e,r,t),{className:c,children:t})}},35142:(e,t,r)=>{"use strict";r.d(t,{Z:()=>h});var a=r(19510),n=r(91121),s=r(69219),i=r(57371),o=r(81334),l=r.n(o),d=r(68570);let c=(0,d.createProxy)(String.raw`/var/www/site_user76/data/www/366dates.com/src/components/atoms/SignOutButton/SignOutButton.tsx`),{__esModule:u,$$typeof:x}=c;c.default;let _=(0,d.createProxy)(String.raw`/var/www/site_user76/data/www/366dates.com/src/components/atoms/SignOutButton/SignOutButton.tsx#default`),h=async({language:e,isLogged:t,children:r})=>{let{t:o}=await (0,s.$)(e);return(0,a.jsxs)("header",{className:l().header,children:[r,t?a.jsx(_,{children:o("sign-out")}):(0,a.jsxs)(a.Fragment,{children:[a.jsx(i.default,{href:"/auth/login",children:a.jsx(n.z,{children:o("login")})}),a.jsx(i.default,{href:"/auth/sign-up",children:a.jsx(n.z,{children:o("sign-up")})})]})]})}},17050:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var a=r(19510),n=r(91561),s=r.n(n);let i=({children:e})=>a.jsx("div",{className:s().searchblock,children:e})},67815:(e,t)=>{var r;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var a={}.hasOwnProperty;function n(){for(var e="",t=0;t<arguments.length;t++){var r=arguments[t];r&&(e=s(e,function(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return n.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var r in e)a.call(e,r)&&e[r]&&(t=s(t,r));return t}(r)))}return e}function s(e,t){return t?e?e+" "+t:e+t:e}e.exports?(n.default=n,e.exports=n):void 0!==(r=(function(){return n}).apply(t,[]))&&(e.exports=r)}()}};var t=require("../../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[948,471,579,260,404,611,481],()=>r(39432));module.exports=a})();