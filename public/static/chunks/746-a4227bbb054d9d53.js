(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[746],{3514:function(e,t,n){var a={"./de/translation.json":[2287,287],"./en/translation.json":[1856,856],"./es/translation.json":[3388,388],"./fr/translation.json":[7487,487],"./ru/translation.json":[9355,355]};function r(e){if(!n.o(a,e))return Promise.resolve().then(function(){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t});var t=a[e],r=t[0];return n.e(t[1]).then(function(){return n.t(r,19)})}r.keys=function(){return Object.keys(a)},r.id=3514,e.exports=r},8746:function(e,t,n){Promise.resolve().then(n.t.bind(n,3899,23)),Promise.resolve().then(n.t.bind(n,5328,23)),Promise.resolve().then(n.bind(n,7520))},8024:function(e,t,n){"use strict";n.d(t,{$:function(){return m}});var a=n(2265),r=n(6027),i=n(89),s=n(8358),o=n(4312),u=n(6519);let l=["de","en","ru","es","fr"],c="translation",d="i18next";function m(e,t,n){let[r,o]=(0,s.fP)([d]),u=(0,i.$G)(t,n),{i18n:l}=u;{let[t,n]=(0,a.useState)(l.resolvedLanguage);(0,a.useEffect)(()=>{t!==l.resolvedLanguage&&n(l.resolvedLanguage)},[t,l.resolvedLanguage]),(0,a.useEffect)(()=>{e&&l.resolvedLanguage!==e&&l.changeLanguage(e)},[e,l]),(0,a.useEffect)(()=>{r.i18next!==e&&o(d,e,{path:"/"})},[e,r.i18next])}return u}r.ZP.use(i.Db).use(u.Z).use((0,o.Z)((e,t)=>n(3514)("./".concat(e,"/").concat(t,".json")))).init({...function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"de",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:c;return{supportedLngs:l,lng:e,fallbackNS:c,defaultNS:c,ns:t}}(),lng:void 0,detection:{order:["path","htmlTag","cookie","navigator"]},preload:[]})},777:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var a=n(7437),r=n(2265),i=n(6134),s=n.n(i),o=e=>{let{days:t,onChange:n,defaultValue:r,label:i}=e;return(0,a.jsxs)("div",{children:[i&&(0,a.jsx)("label",{style:{marginBottom:"5px",display:"block"},htmlFor:"day_select",children:i}),(0,a.jsx)("select",{id:"day_select",className:s().select,onChange:e=>{n(e.target.value,"day")},defaultValue:r,children:t.map((e,t)=>(0,a.jsx)("option",{value:e,children:e},t))})]})},u=e=>{let{label:t,months:n,onChange:r,defaultValue:i}=e;return(0,a.jsxs)("div",{children:[t&&(0,a.jsx)("label",{style:{marginBottom:"5px",display:"block"},htmlFor:"month_select",children:t}),(0,a.jsx)("select",{id:"month_select",className:s().select,onChange:r,defaultValue:i,children:n.map(e=>(0,a.jsx)("option",{value:e.num,children:e.name},e.name))})]})},l=n(9081),c=n.n(l),d=e=>{let{onChangeHandler:t,months:n,initialMonthIndex:i,initialDay:s,monthLabel:l,dayLabel:d}=e,[m,_]=(0,r.useState)(n[i-1]);return(0,a.jsxs)("div",{className:c().birthdayInput,children:[(0,a.jsx)(u,{label:l,months:n,onChange:e=>{let a=n[parseInt(e.target.value)-1];_(a),t(a.num,"month")},defaultValue:i}),(0,a.jsx)(o,{label:d,onChange:(e,n)=>{t(e,"day")},days:m.countDates,defaultValue:s})]})}},9597:function(e,t,n){"use strict";n.d(t,{z:function(){return s}});var a=n(7437);n(2265);var r=n(6357),i=n.n(r);let s=e=>{let{children:t,onClick:n,className:r,disabled:s}=e;return(0,a.jsx)("button",{...e,onClick:n,className:i().btn,children:t})}},8598:function(e,t,n){"use strict";var a=n(7437),r=n(2265),i=n(6134),s=n.n(i),o=n(3167),u=n.n(o),l=n(2669),c=n(2289);t.Z=e=>{let{cities:t=[],onChange:n,placeholder:i,id:o,required:d,defaultValue:m}=e,[_,h]=(0,r.useState)(m||""),[x,f]=(0,r.useState)(!1),[p,{data:g={data:[]},isLoading:v,isError:y}]=(0,l.W4)(),N=[...t,...g.data].filter(e=>{let{city:t}=e,n=t.toLowerCase(),a=_.toLowerCase();return n.includes(a)&&n!==a}),b=e=>{n({target:{value:e,id:o}}),h(e)};return(0,r.useEffect)(()=>{_&&p(_),f(!1)},[_]),(0,r.useEffect)(()=>{N.length>0?f(!0):f(!1)},[N]),(0,a.jsxs)("div",{className:s().inputBlock,children:[(0,a.jsx)("div",{className:u().customSelect,onClick:()=>f(!x),children:(0,a.jsx)(c.I,{type:"text",id:o,required:d,name:o,placeholder:i,value:_,onChange:e=>b(e.target.value),defaultValue:m})}),x&&_.length>0&&(0,a.jsx)("div",{className:u().selectDropdown,children:N.map((e,t)=>(0,a.jsx)("div",{className:u().option,onClick:()=>b(e.city),children:e.city},"".concat(t,"_").concat(e.city)))})]})}},2289:function(e,t,n){"use strict";n.d(t,{I:function(){return l}});var a=n(7437),r=n(2265),i=n(6134),s=n.n(i),o=n(6800),u=n.n(o);let l=(0,r.forwardRef)((e,t)=>{let{label:n,isError:i=!1,placeholder:o,onBlur:l,onChange:c,onFocus:d,onInput:m,list:_,resetField:h,resetMask:x,handleSearch:f,handleCalendar:p,value:g,type:v,maxLength:y,className:N,white:b,required:j,id:C,defaultValue:k,wrappDataTestid:I,size:T="m",textAlign:S,...L}=e,[w,E]=(0,r.useState)(g||k),P=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,r.useCallback)(e=>{t.forEach(t=>{t&&("function"==typeof t?t(e):t.current=e)})},[t])}(t,(0,r.useRef)(null)),q=u()(s().input,{[N]:N});return(0,a.jsxs)("div",{className:s().inputBlock,children:[(0,a.jsx)("label",{htmlFor:C,children:n}),(0,a.jsx)("input",{className:q,defaultValue:k,id:C,list:_,maxLength:y,onChange:e=>{E(e.currentTarget.value),c&&c(e)},placeholder:o,ref:P,required:j,type:v,value:g,...L})]})})},2890:function(e,t,n){"use strict";n.d(t,{I:function(){return a.I}});var a=n(2289)},6263:function(e,t,n){"use strict";n.d(t,{x:function(){return l}});var a=n(7437),r=n(2265),i=n(6800),s=n.n(i),o=n(5328),u=n.n(o);let l=e=>{let{tag:t,children:n,weight:i,className:o,size:l,theme:c="primary"}=e,d=s()(u().text,u()["text_".concat(t)],{[u()["text_".concat(i)]]:i,[u()["text_".concat(l)]]:l,[u()["text_".concat(c)]]:c,[o]:o});return(0,a.jsx)(e=>{let{...a}=e;return(0,r.createElement)(t,a,n)},{className:d,children:n})}},30:function(e,t,n){"use strict";var a=n(7437),r=n(6363),i=n.n(r),s=n(3580);t.Z=e=>{let{children:t}=e;return(0,a.jsxs)("div",{className:i().formWrapper,children:[t,(0,a.jsx)(s.Ix,{})]})}},7520:function(e,t,n){"use strict";n.d(t,{default:function(){return j}});var a=n(7437),r=n(2265),i=n(1543),s=n.n(i),o=n(2890),u=n(6134),l=n.n(u);let c=[{code:"ar",name:"Arabic",nativeName:"العربية"},{code:"zh",name:"Chinese",nativeName:"中文 (Zhōngw\xe9n), 汉语, 漢語"},{code:"da",name:"Danish",nativeName:"dansk"},{code:"nl",name:"Dutch",nativeName:"Nederlands, Vlaams"},{code:"en",name:"English",nativeName:"English"},{code:"fi",name:"Finnish",nativeName:"suomi, suomen kieli"},{code:"fr",name:"French",nativeName:"fran\xe7ais, langue fran\xe7aise"},{code:"de",name:"German",nativeName:"Deutsch"},{code:"el",name:"Greek, Modern",nativeName:"ελληνικά"},{code:"hi",name:"Hindi",nativeName:"हिन्दी, हिंदी"},{code:"hu",name:"Hungarian",nativeName:"magyar"},{code:"it",name:"Italian",nativeName:"italiano"},{code:"ja",name:"Japanese",nativeName:"日本語 (にほんご)"},{code:"ko",name:"Korean",nativeName:"한국어 (韓國語), 조선말 (朝鮮語)"},{code:"fa",name:"Persian",nativeName:"فارسی"},{code:"pl",name:"Polish",nativeName:"polski"},{code:"pt",name:"Portuguese",nativeName:"Portugu\xeas"},{code:"ru",name:"Russian",nativeName:"русский язык"},{code:"sr",name:"Serbian",nativeName:"српски језик"},{code:"sk",name:"Slovak",nativeName:"slovenčina"},{code:"es",name:"Spanish; Castilian",nativeName:"espa\xf1ol, castellano"},{code:"sv",name:"Swedish",nativeName:"svenska"},{code:"th",name:"Thai",nativeName:"ไทย"},{code:"tr",name:"Turkish",nativeName:"T\xfcrk\xe7e"},{code:"uk",name:"Ukrainian",nativeName:"українська"},{code:"vi",name:"Vietnamese",nativeName:"Tiếng Việt"},{code:"cs",name:"Czech",nativeName:"čeština"},{code:"hr",name:"Croatian",nativeName:"hrvatski jezik"}].sort((e,t)=>e.name.localeCompare(t.name));var d=e=>{let{selectedLanguage:t="none",id:n,onChange:r,defaultValue:i}=e;return(0,a.jsxs)("select",{id:n,className:l().select,value:t,onChange:r,children:[(0,a.jsx)("option",{value:"none",disabled:!0,children:i}),c.map(e=>(0,a.jsx)("option",{value:e.name,children:e.nativeName},e.name))]})},m=n(9597),_=n(8660),h=n(30),x=n(777),f=n(6263),p=n(8041),g=n(6463),v=n(7469),y=n(3580);n(4193);var N=n(8598),b=n(8024),j=e=>{let{months:t,placeholders:n,buttonTitle:i,type:u="user",userId:l}=e,{currentMonthIndex:j,currentDay:C}=(0,r.useMemo)(()=>(function(){let e=new Date;return{currentDay:e.getDate(),currentMonthIndex:e.getMonth()+1}})(),[]),{language:k}=(0,_.Qg)(),I=(0,g.useSearchParams)(),T=(0,g.useRouter)(),S=(0,r.useMemo)(()=>parseInt(I.get("month")||"".concat(j)),[j,I]),L=(0,r.useMemo)(()=>parseInt(I.get("day")||"".concat(C)),[C,I]),w=(0,r.useMemo)(()=>I.get("name")||void 0,[I]),[E,P]=(0,r.useState)(()=>({month:S,day:L,name:w,language:function(e){let t=c.find(t=>t.code===e);return null==t?void 0:t.name}(k)})),[q,D]=(0,r.useState)(l),[V,B]=(0,r.useState)(),[A,{data:F={},isLoading:Z,isError:U,isSuccess:O}]=(0,v.l4)(),[z,{isLoading:M,isError:R,isSuccess:Y}]=(0,p.kP)(),H=Z||M,W=U||R,G="user"===u?O:O&&Y,J=(0,r.useCallback)(async e=>{e.preventDefault(),await A(E)},[F,E,u]),Q=e=>{let{target:t}=e;t.id?P({...E,[t.id]:t.value}):console.error("key arg is not specified")},K=(0,r.useCallback)((e,t)=>{P(n=>({...n,[t]:e}))},[]);(0,r.useEffect)(()=>{F.data&&("friend"===u?B(F.data.userId):D(F.data.userId)),q&&"friend"===u&&V&&O&&V&&z({userId:q,friendId:V})},[z,V,O,u,q,F]);let{namePlaceholder:X,cityPlaceholder:$,passwordPlaceholder:ee,langPlaceholder:et,secondLangPlaceholder:en,thirdLangPlaceholder:ea,newUserSuccessMessage:er,newUserErrorMessage:ei,notesPlaceholder:es}=n,eo=(0,g.usePathname)();(0,r.useEffect)(()=>{H?y.Am.info("Benutzer wird hinzugef\xfcgt...",{autoClose:!1}):G?(y.Am.success(er),eo.includes("user")?T.back():q&&T.push("/user/".concat(q))):W&&y.Am.error(ei)},[H,G,W,q]);let{t:eu}=(0,b.$)(k);return(0,a.jsx)(h.Z,{children:(0,a.jsxs)("form",{onSubmit:J,style:{flexDirection:"column"},children:[(0,a.jsx)(o.I,{type:"label",required:!0,id:"name",defaultValue:w,placeholder:X,onChange:Q}),(0,a.jsx)(x.Z,{monthLabel:eu("month_holder"),dayLabel:eu("day_holder"),months:t,initialMonthIndex:S,initialDay:L,onChangeHandler:K}),(0,a.jsx)(N.Z,{id:"city",placeholder:$,onChange:Q}),(0,a.jsx)(o.I,{required:!0,type:"email",id:"email",placeholder:"Email",onChange:Q}),(0,a.jsx)(o.I,{required:!0,type:"password",id:"password",placeholder:ee,onChange:Q}),(0,a.jsx)(d,{id:"language",defaultValue:et,selectedLanguage:E.language,onChange:Q}),(0,a.jsx)(d,{id:"foreign",defaultValue:en,selectedLanguage:E.foreign,onChange:Q}),(0,a.jsx)(d,{id:"another_foreign",defaultValue:ea,selectedLanguage:E.another_foreign,onChange:Q}),"friend"===u&&(0,a.jsx)(o.I,{type:"textfield",id:"note",placeholder:es,onChange:Q}),(0,a.jsx)(m.z,{type:"submit",disabled:H,className:s().submitBtn,children:H?"Sending..":i}),W&&(0,a.jsx)(f.x,{tag:"p",style:{color:"red"},children:"Error. Try again"})]})})}},8660:function(e,t,n){"use strict";n.d(t,{HW:function(){return s},Qg:function(){return o}});var a=n(7437),r=n(2265);let i=(0,r.createContext)(void 0),s=e=>{let{children:t,value:n}=e;return(0,a.jsx)(i.Provider,{value:n,children:t})},o=()=>{let e=(0,r.useContext)(i);if(!e)throw Error("useLanguageContext must be used within a LanguageContextProvider");return e}},7469:function(e,t,n){"use strict";n.d(t,{Iw:function(){return l},YA:function(){return o},iJ:function(){return i},l4:function(){return s}});var a=n(8507),r=n(1050);let i=(0,a.LC)({baseQuery:r.r,endpoints:e=>({register:e.mutation({query:e=>({url:"/api/auth/sign-in",method:"POST",body:e})}),login:e.mutation({query:e=>({url:"/api/auth/login",method:"POST",body:e})}),me:e.query({query:e=>({url:"/api/auth/me?userId=".concat(e),credentials:"include"})}),remind:e.mutation({query:e=>({url:"/api/remind",method:"POST",body:{email:e}})})})}),{useRegisterMutation:s,useLoginMutation:o,useLazyMeQuery:u,useRemindMutation:l}=i},1050:function(e,t,n){"use strict";n.d(t,{r:function(){return i}});var a=n(6074),r=n(357);let i=(0,a.ni)({baseUrl:r.env.NEXT_API_BASE_URL,credentials:"same-origin",prepareHeaders:e=>(e.set("Content-Type","application/json"),e)})},2669:function(e,t,n){"use strict";n.d(t,{W4:function(){return o},Y1:function(){return i}});var a=n(8507),r=n(1050);let i=(0,a.LC)({baseQuery:r.r,endpoints:e=>({getCities:e.query({query:e=>"/api/getCities?city=".concat(e)})})}),{useGetCitiesQuery:s,useLazyGetCitiesQuery:o}=i},8041:function(e,t,n){"use strict";n.d(t,{BG:function(){return i},kP:function(){return s}});var a=n(8507),r=n(1050);let i=(0,a.LC)({baseQuery:r.r,endpoints:e=>({addFriendship:e.mutation({query:e=>{let{userId:t,friendId:n}=e;return{url:"/api/addFriendship",method:"POST",body:{userId:t,friendId:n}}}}),getAllUserFriends:e.query({query:e=>"/api/getAllUserFriends?userId=".concat(e)}),getAllUsers:e.query({query:e=>{let{birthday:t,city:n}=e;return"/api/getAllUsers?birthday=".concat(t,"&city=").concat(n)}})})}),{useAddFriendshipMutation:s,useGetAllUserFriendsQuery:o,useGetAllUsersQuery:u,useLazyGetAllUsersQuery:l}=i},4193:function(){},9081:function(e){e.exports={birthdayInput:"BirthdayInput_birthdayInput__jau1B"}},6357:function(e){e.exports={btn:"Button_btn__T_tor"}},3167:function(e){e.exports={customSelect:"CitySelect_customSelect___0NHC",selectDropdown:"CitySelect_selectDropdown__dkCL3",option:"CitySelect_option__JxifE"}},6134:function(e){e.exports={inputBlock:"Input_inputBlock__A9N6Y",input:"Input_input__hHazC",select:"Input_select__u67ma"}},5328:function(e){e.exports={text_h1:"Text_text_h1__OdNbi",text_h2:"Text_text_h2__Nw8YB",text_h3:"Text_text_h3__4S0Tf",text_h4:"Text_text_h4__HvIiJ",text_h5:"Text_text_h5__K87Vt",text_bold:"Text_text_bold__rf_8I",text_medium:"Text_text_medium__nRIOp",text_regular:"Text_text_regular__uDYK2",text_xs:"Text_text_xs__LY21J",text_s:"Text_text_s__4zmlr",text_m:"Text_text_m__wXbdE",text_l:"Text_text_l__tIVVd",text_xl:"Text_text_xl__gGNCf",text_primary:"Text_text_primary__Rg4dV",text_secondary:"Text_text_secondary__IWZLR",text_alert:"Text_text_alert__YbKal",text_success:"Text_text_success__gIiq0",text_action:"Text_text_action__hA7LD"}},3899:function(e){e.exports={signup:"NewUserFormWrapper_signup__4X4R_"}},6363:function(e){e.exports={formWrapper:"StyledForm_formWrapper__Zn4r_"}},1543:function(e){e.exports={submitBtn:"NewUserFormFull_submitBtn__9wYYc"}}}]);