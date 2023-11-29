(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[778],{6111:function(e,t,n){"use strict";var r=n(4836);t.Z=void 0;var o=r(n(4938)),a=n(5893),i=(0,o.default)((0,a.jsx)("path",{d:"m12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"}),"Favorite");t.Z=i},4938:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.createSvgIcon}});var r=n(3875)},3875:function(e,t,n){"use strict";n.r(t),n.d(t,{capitalize:function(){return o.Z},createChainedFunction:function(){return a},createSvgIcon:function(){return i.Z},debounce:function(){return u.Z},deprecatedPropType:function(){return utils_deprecatedPropType},isMuiElement:function(){return l.Z},ownerDocument:function(){return s.Z},ownerWindow:function(){return c.Z},requirePropFactory:function(){return utils_requirePropFactory},setRef:function(){return d},unstable_ClassNameGenerator:function(){return b},unstable_useEnhancedEffect:function(){return p.Z},unstable_useId:function(){return f},unsupportedProp:function(){return utils_unsupportedProp},useControlled:function(){return m.Z},useEventCallback:function(){return h.Z},useForkRef:function(){return g.Z},useIsFocusVisible:function(){return v.Z}});var r=n(7078),o=n(8216),a=n(9064).Z,i=n(8169),u=n(7144),utils_deprecatedPropType=function(e,t){return()=>null},l=n(1579),s=n(8038),c=n(5340);n(7462);var utils_requirePropFactory=function(e,t){return()=>null},d=n(7960).Z,p=n(8974),f=n(2996).Z,utils_unsupportedProp=function(e,t,n,r,o){return null},m=n(2021),h=n(2068),g=n(1705),v=n(8791);let b={configure:e=>{r.Z.configure(e)}}},778:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return map_page}});var r=n(5893),o=n(6111),a=n(4238),i=n(9417),u=n(3366),l=n(7462),s=n(7294),c=n(512),d=n(4780),p=n(7739),f=n(8216),m=n(7623),h=n(1588),g=n(4867);function getFabUtilityClass(e){return(0,g.Z)("MuiFab",e)}let v=(0,h.Z)("MuiFab",["root","primary","secondary","extended","circular","focusVisible","disabled","colorInherit","sizeSmall","sizeMedium","sizeLarge","info","error","warning","success"]);var b=n(1496);let x=["children","className","color","component","disabled","disableFocusRipple","focusVisibleClassName","size","variant"],useUtilityClasses=e=>{let{color:t,variant:n,classes:r,size:o}=e,a={root:["root",n,`size${(0,f.Z)(o)}`,"inherit"===t?"colorInherit":t]},i=(0,d.Z)(a,getFabUtilityClass,r);return(0,l.Z)({},r,i)},_=(0,b.ZP)(p.Z,{name:"MuiFab",slot:"Root",shouldForwardProp:e=>(0,b.FO)(e)||"classes"===e,overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,t[n.variant],t[`size${(0,f.Z)(n.size)}`],"inherit"===n.color&&t.colorInherit,t[(0,f.Z)(n.size)],t[n.color]]}})(({theme:e,ownerState:t})=>{var n,r;return(0,l.Z)({},e.typography.button,{minHeight:36,transition:e.transitions.create(["background-color","box-shadow","border-color"],{duration:e.transitions.duration.short}),borderRadius:"50%",padding:0,minWidth:0,width:56,height:56,zIndex:(e.vars||e).zIndex.fab,boxShadow:(e.vars||e).shadows[6],"&:active":{boxShadow:(e.vars||e).shadows[12]},color:e.vars?e.vars.palette.text.primary:null==(n=(r=e.palette).getContrastText)?void 0:n.call(r,e.palette.grey[300]),backgroundColor:(e.vars||e).palette.grey[300],"&:hover":{backgroundColor:(e.vars||e).palette.grey.A100,"@media (hover: none)":{backgroundColor:(e.vars||e).palette.grey[300]},textDecoration:"none"},[`&.${v.focusVisible}`]:{boxShadow:(e.vars||e).shadows[6]}},"small"===t.size&&{width:40,height:40},"medium"===t.size&&{width:48,height:48},"extended"===t.variant&&{borderRadius:24,padding:"0 16px",width:"auto",minHeight:"auto",minWidth:48,height:48},"extended"===t.variant&&"small"===t.size&&{width:"auto",padding:"0 8px",borderRadius:17,minWidth:34,height:34},"extended"===t.variant&&"medium"===t.size&&{width:"auto",padding:"0 16px",borderRadius:20,minWidth:40,height:40},"inherit"===t.color&&{color:"inherit"})},({theme:e,ownerState:t})=>(0,l.Z)({},"inherit"!==t.color&&"default"!==t.color&&null!=(e.vars||e).palette[t.color]&&{color:(e.vars||e).palette[t.color].contrastText,backgroundColor:(e.vars||e).palette[t.color].main,"&:hover":{backgroundColor:(e.vars||e).palette[t.color].dark,"@media (hover: none)":{backgroundColor:(e.vars||e).palette[t.color].main}}}),({theme:e})=>({[`&.${v.disabled}`]:{color:(e.vars||e).palette.action.disabled,boxShadow:(e.vars||e).shadows[0],backgroundColor:(e.vars||e).palette.action.disabledBackground}})),y=s.forwardRef(function(e,t){let n=(0,m.Z)({props:e,name:"MuiFab"}),{children:o,className:a,color:i="default",component:s="button",disabled:d=!1,disableFocusRipple:p=!1,focusVisibleClassName:f,size:h="large",variant:g="circular"}=n,v=(0,u.Z)(n,x),b=(0,l.Z)({},n,{color:i,component:s,disabled:d,disableFocusRipple:p,size:h,variant:g}),y=useUtilityClasses(b);return(0,r.jsx)(_,(0,l.Z)({className:(0,c.Z)(y.root,a),component:s,disabled:d,focusRipple:!p,focusVisibleClassName:(0,c.Z)(y.focusVisible,f),ownerState:b,ref:t},v,{classes:y,children:o}))});var w=n(8583),C=n(5243),j=n.n(C);n(6904);var k={src:"/ArMapSns/_next/static/media/me.178bc37f.png"};let I=(0,s.createContext)(null),P=I.Provider;function useLeafletContext(){let e=(0,s.useContext)(I);if(null==e)throw Error("No context provided: useLeafletContext() can only be used in a descendant of <MapContainer>");return e}function _extends(){return(_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}let Z=(0,s.forwardRef)(function({bounds:e,boundsOptions:t,center:n,children:r,className:o,id:a,placeholder:i,style:u,whenReady:l,zoom:c,...d},p){let[f]=(0,s.useState)({className:o,id:a,style:u}),[m,h]=(0,s.useState)(null);(0,s.useImperativeHandle)(p,()=>m?.map??null,[m]);let g=(0,s.useCallback)(r=>{if(null!==r&&null===m){let o=new C.Map(r,d);null!=n&&null!=c?o.setView(n,c):null!=e&&o.fitBounds(e,t),null!=l&&o.whenReady(l),h(Object.freeze({__version:1,map:o}))}},[]);(0,s.useEffect)(()=>()=>{m?.map.remove()},[m]);let v=m?s.createElement(P,{value:m},r):i??null;return s.createElement("div",_extends({},f,{ref:g}),v)});var z=n(3935);function element_createElementObject(e,t,n){return Object.freeze({instance:e,context:t,container:n})}function element_createElementHook(e,t){return null==t?function(t,n){let r=(0,s.useRef)();return r.current||(r.current=e(t,n)),r}:function(n,r){let o=(0,s.useRef)();o.current||(o.current=e(n,r));let a=(0,s.useRef)(n),{instance:i}=o.current;return(0,s.useEffect)(function(){a.current!==n&&(t(i,n,a.current),a.current=n)},[i,n,r]),o}}function useAttribution(e,t){let n=(0,s.useRef)(t);(0,s.useEffect)(function(){t!==n.current&&null!=e.attributionControl&&(null!=n.current&&e.attributionControl.removeAttribution(n.current),null!=t&&e.attributionControl.addAttribution(t)),n.current=t},[e,t])}function useEventHandlers(e,t){let n=(0,s.useRef)();(0,s.useEffect)(function(){return null!=t&&e.instance.on(t),n.current=t,function(){null!=n.current&&e.instance.off(n.current),n.current=null}},[e,t])}function withPane(e,t){let n=e.pane??t.pane;return n?{...e,pane:n}:e}function createLayerHook(e){return function(t){var n;let r=useLeafletContext(),o=e(withPane(t,r),r);return useAttribution(r.map,t.attribution),useEventHandlers(o.current,t.eventHandlers),n=o.current,(0,s.useEffect)(function(){let e=r.layerContainer??r.map;return e.addLayer(n.instance),function(){r.layerContainer?.removeLayer(n.instance),r.map.removeLayer(n.instance)}},[r,n]),o}}let E=function(e,t){let n=element_createElementHook(e,t),r=createLayerHook(n);return(0,s.forwardRef)(function(e,t){let{instance:n}=r(e).current;return(0,s.useImperativeHandle)(t,()=>n),null})}(function({url:e,...t},n){let r=new C.TileLayer(e,withPane(t,n));return element_createElementObject(r,n)},function(e,t,n){!function(e,t,n){let{opacity:r,zIndex:o}=t;null!=r&&r!==n.opacity&&e.setOpacity(r),null!=o&&o!==n.zIndex&&e.setZIndex(o)}(e,t,n);let{url:r}=t;null!=r&&r!==n.url&&e.setUrl(r)}),N=function(e,t){let n=element_createElementHook(e,t),r=createLayerHook(n);return(0,s.forwardRef)(function(e,t){let{instance:n,context:o}=r(e).current;return(0,s.useImperativeHandle)(t,()=>n),null==e.children?null:s.createElement(P,{value:o},e.children)})}(function({position:e,...t},n){let r=new C.Marker(e,t);return element_createElementObject(r,Object.freeze({...n,overlayContainer:r}))},function(e,t,n){t.position!==n.position&&e.setLatLng(t.position),null!=t.icon&&t.icon!==n.icon&&e.setIcon(t.icon),null!=t.zIndexOffset&&t.zIndexOffset!==n.zIndexOffset&&e.setZIndexOffset(t.zIndexOffset),null!=t.opacity&&t.opacity!==n.opacity&&e.setOpacity(t.opacity),null!=e.dragging&&t.draggable!==n.draggable&&(!0===t.draggable?e.dragging.enable():e.dragging.disable())}),O=function(e,t){var n;let r=element_createElementHook(e);return n=function(e,n){let o=useLeafletContext(),a=r(withPane(e,o),o);return useAttribution(o.map,e.attribution),useEventHandlers(a.current,e.eventHandlers),t(a.current,o,e,n),a},(0,s.forwardRef)(function(e,t){let[r,o]=(0,s.useState)(!1),{instance:a}=n(e,o).current;(0,s.useImperativeHandle)(t,()=>a),(0,s.useEffect)(function(){r&&a.update()},[a,r,e.children]);let i=a._contentNode;return i?(0,z.createPortal)(e.children,i):null})}(function(e,t){let n=new C.Popup(e,t.overlayContainer);return element_createElementObject(n,t)},function(e,t,{position:n},r){(0,s.useEffect)(function(){let{instance:o}=e;function onPopupOpen(e){e.popup===o&&(o.update(),r(!0))}function onPopupClose(e){e.popup===o&&r(!1)}return t.map.on({popupopen:onPopupOpen,popupclose:onPopupClose}),null==t.overlayContainer?(null!=n&&o.setLatLng(n),o.openOn(t.map)):t.overlayContainer.bindPopup(o),function(){t.map.off({popupopen:onPopupOpen,popupclose:onPopupClose}),t.overlayContainer?.unbindPopup(),t.map.removeLayer(o)}},[e,t,r,n])});var S=n(6221),H=n(9854),L=n(3936),R=n(3483),M=n(6819),F=n(8041),B=n.n(F);j().Icon.Default.mergeOptions({iconRetinaUrl:k.src,iconSize:[48,48]});let U=j().icon({iconUrl:k.src,iconSize:[48,48]}),A=j().icon({iconUrl:"/ArMapSns/_next/static/media/other.a347bcce.png",iconSize:[48,48]}),W=j().icon({iconUrl:"/ArMapSns/_next/static/media/pingu.4dc5b828.png",iconSize:[48,48]}),LocationMarker=e=>{let{coordinates:t}=e,n=useLeafletContext().map;return(0,s.useEffect)(()=>{null!==t.latitude&&null!==t.longitude&&n.setView([t.latitude,t.longitude],n.getZoom())},[t,n]),null};var map_page=()=>{let[e]=(0,w.KO)(S.LF),[t,n]=(0,w.KO)(S.ge);(0,s.useEffect)(()=>{"undefined"!=typeof navigator&&null!==navigator.geolocation&&navigator.geolocation.watchPosition(e=>{n({latitude:e.coords.latitude,longitude:e.coords.longitude})})},[n]);let[u,l]=(0,s.useState)(!1),handleClosePopup=()=>{l(!1)},[c,d]=(0,s.useState)(null),p=(0,s.useCallback)(async()=>{if(null===t.latitude||null===t.longitude)return;let e=t.latitude,n=t.longitude,r=await R.x.posts.$get({query:{latitude:e,longitude:n}}).catch(M.F);d(r),console.log("getPosts")},[t.latitude,t.longitude]),[f,m]=(0,s.useState)(""),postPostContent=async()=>{if((null==e?void 0:e.id)===void 0||""===f||null===t.latitude||null===t.longitude)return;let n=t.latitude,r=t.longitude;await R.x.myPost.$post({body:{username:"aaa",content:f,latitude:n,longitude:r,userID:e.id}}),m(""),handleClosePopup(),p()},[h,g]=(0,s.useState)(0),handleLike=async t=>{if((null==e?void 0:e.id)===void 0||void 0===t)return;let n=await R.x.posts.$post({body:{postId:t,userId:e.id}});g(n),await p(),console.log("result",n),console.log("likecount",h)};(0,s.useEffect)(()=>{p()},[p]);let formatTime=e=>{let t=new Date(e);return new Intl.DateTimeFormat("ja-JP",{year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric",hour12:!0}).format(t)};return e?(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{className:B().container,children:[(0,r.jsx)(L.v,{user:e}),null!==t.latitude&&null!==t.longitude&&(0,r.jsx)("div",{className:"".concat(B().mapWrapper," ").concat(u?B().blurred:""),children:(0,r.jsxs)(Z,{center:[t.latitude,t.longitude],zoom:17,scrollWheelZoom:!1,style:{height:"93vh",width:"100%"},children:[(0,r.jsx)(E,{attribution:'\xa9 <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),(0,r.jsx)(LocationMarker,{coordinates:t}),(0,r.jsx)(N,{position:[t.latitude,t.longitude],icon:W}),null==c?void 0:c.map(t=>(0,r.jsx)(N,{icon:e.id===t.userID?U:A,position:[t.latitude,t.longitude],children:(0,r.jsxs)(O,{children:[(0,r.jsx)("div",{style:{fontSize:"10px"},children:formatTime(t.postTime)}),(0,r.jsx)("div",{style:{fontSize:"18px"},children:t.content}),(0,r.jsx)(y,{size:"small",color:"secondary","aria-label":"like",onClick:()=>handleLike(t.id),children:(0,r.jsx)(o.Z,{})}),(0,r.jsx)("br",{}),t.likeCount,"いいね"]})},t.id))]})})]}),!u&&(0,r.jsx)("button",{onClick:()=>{l(!0)},className:B().postButton,children:"POST"}),!u&&(0,r.jsxs)("div",{className:B().nearInfo,children:["近くに",(0,r.jsx)("span",{className:B().infoNumber,children:c?c.length:0}),"件の投稿があります"]}),u&&(0,r.jsx)("div",{className:B().popup,children:(0,r.jsxs)("div",{className:B().popupContent,children:[(0,r.jsx)(a.Z,{label:"いまなにしてる？",value:f,onChange:e=>m(e.target.value),InputProps:{endAdornment:(0,r.jsx)("div",{className:B().sendButton,children:(0,r.jsx)(i.Z,{onClick:postPostContent,disabled:!f.trim(),children:"投稿する"})})}}),(0,r.jsx)("button",{onClick:handleClosePopup,children:"戻る"})]})})]}):(0,r.jsx)(H.g,{visible:!0})}},3936:function(e,t,n){"use strict";n.d(t,{v:function(){return BasicHeader}});var r=n(5893),o=n(8583),a=n(1163),i=n(6221);let HumanIcon=e=>(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:e.size,height:e.size,fill:e.fill,children:(0,r.jsx)("path",{d:"M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm7.753 18.305c-.261-.586-.789-.991-1.871-1.241-2.293-.529-4.428-.993-3.393-2.945 3.145-5.942.833-9.119-2.489-9.119-3.388 0-5.644 3.299-2.489 9.119 1.066 1.964-1.148 2.427-3.393 2.945-1.084.25-1.608.658-1.867 1.246-1.405-1.723-2.251-3.919-2.251-6.31 0-5.514 4.486-10 10-10s10 4.486 10 10c0 2.389-.845 4.583-2.247 6.305z"})});var u=n(4076),l=n(5293),s=n.n(l);let BasicHeader=e=>{let{user:t}=e,onLogout=async()=>{confirm("Logout?")&&await (0,u.kS)()},n=(0,a.useRouter)(),[l,c]=(0,o.KO)(i.XI),handleChenge=async()=>{l?await n.push("/"):await n.push("/AR"),c(!l)};return(0,r.jsx)("div",{className:s().container,children:(0,r.jsxs)("div",{className:s().main,children:[(0,r.jsx)("h3",{children:"ArMapSNS"}),(0,r.jsxs)("div",{className:s().userBtn,onClick:onLogout,children:[void 0!==t.photoURL?(0,r.jsx)("img",{className:s().userIcon,src:t.photoURL,height:24,alt:t.displayName}):(0,r.jsx)(HumanIcon,{size:18,fill:"#555"}),(0,r.jsx)("span",{className:s().userName,children:t.displayName})]}),(0,r.jsx)("button",{onClick:handleChenge,children:"MAP or AR"})]})})}},4076:function(e,t,n){"use strict";n.d(t,{_u:function(){return loginWithGitHub},id:function(){return authWithEmail},kS:function(){return logout}});var r=n(4857),o=n(2509),a=n(3483),i=n(6819);let loginWithGitHub=async()=>{let e=new r.GH;e.addScope("read:user"),await (0,r.rh)((0,o.l)(),e).catch(e=>(console.error("Error during sign-in:",e),null))},logout=async()=>{await (0,o.l)().signOut()},checkIfNewUser=async e=>{let t=await a.x.user.$get({query:{userID:e}});0===t.length&&await a.x.user.post({body:{userID:e}}).catch(i.F)},authWithEmail=async(e,t)=>{let n=(0,o.l)();try{let o=await (0,r.e5)(n,e,t),a=o.user.uid;await checkIfNewUser(a),console.log("ログイン成功")}catch(o){if("auth/user-not-found"!==o.code)return console.error("ログイン失敗",o),null;try{let o=await (0,r.Xb)(n,e,t),a=o.user.uid;await checkIfNewUser(a),console.log("新規登録成功")}catch(e){return console.log("新規登録失敗",e),null}}}},6904:function(){},8041:function(e){e.exports={container:"map_container__Oqp4f",mapWrapper:"map_mapWrapper__1_3pi",blurred:"map_blurred__c4Upe",postButton:"map_postButton__J5imn",popup:"map_popup__I387y",popupContent:"map_popupContent__QJI8d",sendButton:"map_sendButton__aVyVz",nearInfo:"map_nearInfo__GUsCz",infoNumber:"map_infoNumber__5jGUy"}},5293:function(e){e.exports={container:"BasicHeader_container__ASIaK",main:"BasicHeader_main__Vqufr",userBtn:"BasicHeader_userBtn__wlK48",userIcon:"BasicHeader_userIcon__UecGa",userName:"BasicHeader_userName__KiR1h"}},4836:function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);