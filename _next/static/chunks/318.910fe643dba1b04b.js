(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[318],{2318:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return map_page}});var r=n(5893),o=n(2244),u=n(8993),a=n(8583),l=n(5243),i=n.n(l);n(6904);var c={src:"/ArMapSns/_next/static/media/me.178bc37f.png"},s=n(7294);function extendContext(e,t){return Object.freeze({...e,...t})}let p=(0,s.createContext)(null),d=p.Provider;function useLeafletContext(){let e=(0,s.useContext)(p);if(null==e)throw Error("No context provided: useLeafletContext() can only be used in a descendant of <MapContainer>");return e}function _extends(){return(_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}let f=(0,s.forwardRef)(function({bounds:e,boundsOptions:t,center:n,children:r,className:o,id:u,placeholder:a,style:i,whenReady:c,zoom:p,...f},m){let[h]=(0,s.useState)({className:o,id:u,style:i}),[g,x]=(0,s.useState)(null);(0,s.useImperativeHandle)(m,()=>g?.map??null,[g]);let v=(0,s.useCallback)(r=>{if(null!==r&&null===g){let o=new l.Map(r,f);null!=n&&null!=p?o.setView(n,p):null!=e&&o.fitBounds(e,t),null!=c&&o.whenReady(c),x(Object.freeze({__version:1,map:o}))}},[]);(0,s.useEffect)(()=>()=>{g?.map.remove()},[g]);let _=g?s.createElement(d,{value:g},r):a??null;return s.createElement("div",_extends({},h,{ref:v}),_)});var m=n(3935);function createContainerComponent(e){return(0,s.forwardRef)(function(t,n){let{instance:r,context:o}=e(t).current;return(0,s.useImperativeHandle)(n,()=>r),null==t.children?null:s.createElement(d,{value:o},t.children)})}function element_createElementObject(e,t,n){return Object.freeze({instance:e,context:t,container:n})}function element_createElementHook(e,t){return null==t?function(t,n){let r=(0,s.useRef)();return r.current||(r.current=e(t,n)),r}:function(n,r){let o=(0,s.useRef)();o.current||(o.current=e(n,r));let u=(0,s.useRef)(n),{instance:a}=o.current;return(0,s.useEffect)(function(){u.current!==n&&(t(a,n,u.current),u.current=n)},[a,n,r]),o}}function useAttribution(e,t){let n=(0,s.useRef)(t);(0,s.useEffect)(function(){t!==n.current&&null!=e.attributionControl&&(null!=n.current&&e.attributionControl.removeAttribution(n.current),null!=t&&e.attributionControl.addAttribution(t)),n.current=t},[e,t])}function useEventHandlers(e,t){let n=(0,s.useRef)();(0,s.useEffect)(function(){return null!=t&&e.instance.on(t),n.current=t,function(){null!=n.current&&e.instance.off(n.current),n.current=null}},[e,t])}function withPane(e,t){let n=e.pane??t.pane;return n?{...e,pane:n}:e}function useLayerLifecycle(e,t){(0,s.useEffect)(function(){let n=t.layerContainer??t.map;return n.addLayer(e.instance),function(){t.layerContainer?.removeLayer(e.instance),t.map.removeLayer(e.instance)}},[t,e])}function createLayerHook(e){return function(t){let n=useLeafletContext(),r=e(withPane(t,n),n);return useAttribution(n.map,t.attribution),useEventHandlers(r.current,t.eventHandlers),useLayerLifecycle(r.current,n),r}}let h=function(e,t){let n=element_createElementHook(e,t),r=createLayerHook(n);return(0,s.forwardRef)(function(e,t){let{instance:n}=r(e).current;return(0,s.useImperativeHandle)(t,()=>n),null})}(function({url:e,...t},n){let r=new l.TileLayer(e,withPane(t,n));return element_createElementObject(r,n)},function(e,t,n){!function(e,t,n){let{opacity:r,zIndex:o}=t;null!=r&&r!==n.opacity&&e.setOpacity(r),null!=o&&o!==n.zIndex&&e.setZIndex(o)}(e,t,n);let{url:r}=t;null!=r&&r!==n.url&&e.setUrl(r)}),g=function(e,t){let n=element_createElementHook(e,t);return createContainerComponent(function(e){let t=useLeafletContext(),r=n(withPane(e,t),t);return useEventHandlers(r.current,e.eventHandlers),useLayerLifecycle(r.current,t),function(e,t){let n=(0,s.useRef)();(0,s.useEffect)(function(){if(t.pathOptions!==n.current){let r=t.pathOptions??{};e.instance.setStyle(r),n.current=r}},[e,t])}(r.current,e),r})}(function({center:e,children:t,...n},r){let o=new l.CircleMarker(e,n);return element_createElementObject(o,extendContext(r,{overlayContainer:o}))},function(e,t,n){t.center!==n.center&&e.setLatLng(t.center),null!=t.radius&&t.radius!==n.radius&&e.setRadius(t.radius)}),x=function(e,t){let n=element_createElementHook(e,t),r=createLayerHook(n);return createContainerComponent(r)}(function({position:e,...t},n){let r=new l.Marker(e,t);return element_createElementObject(r,extendContext(n,{overlayContainer:r}))},function(e,t,n){t.position!==n.position&&e.setLatLng(t.position),null!=t.icon&&t.icon!==n.icon&&e.setIcon(t.icon),null!=t.zIndexOffset&&t.zIndexOffset!==n.zIndexOffset&&e.setZIndexOffset(t.zIndexOffset),null!=t.opacity&&t.opacity!==n.opacity&&e.setOpacity(t.opacity),null!=e.dragging&&t.draggable!==n.draggable&&(!0===t.draggable?e.dragging.enable():e.dragging.disable())}),v=function(e,t){var n;let r=element_createElementHook(e);return n=function(e,n){let o=useLeafletContext(),u=r(withPane(e,o),o);return useAttribution(o.map,e.attribution),useEventHandlers(u.current,e.eventHandlers),t(u.current,o,e,n),u},(0,s.forwardRef)(function(e,t){let[r,o]=(0,s.useState)(!1),{instance:u}=n(e,o).current;(0,s.useImperativeHandle)(t,()=>u),(0,s.useEffect)(function(){r&&u.update()},[u,r,e.children]);let a=u._contentNode;return a?(0,m.createPortal)(e.children,a):null})}(function(e,t){let n=new l.Popup(e,t.overlayContainer);return element_createElementObject(n,t)},function(e,t,{position:n},r){(0,s.useEffect)(function(){let{instance:o}=e;function onPopupOpen(e){e.popup===o&&(o.update(),r(!0))}function onPopupClose(e){e.popup===o&&r(!1)}return t.map.on({popupopen:onPopupOpen,popupclose:onPopupClose}),null==t.overlayContainer?(null!=n&&o.setLatLng(n),o.openOn(t.map)):t.overlayContainer.bindPopup(o),function(){t.map.off({popupopen:onPopupOpen,popupclose:onPopupClose}),t.overlayContainer?.unbindPopup(),t.map.removeLayer(o)}},[e,t,r,n])});var _=n(6221),y=n(9854),C=n(3936),b=n(3483),w=n(6819),j=n(8041),L=n.n(j);i().Icon.Default.mergeOptions({iconRetinaUrl:c.src,iconSize:[48,48]});let E=i().icon({iconUrl:c.src,iconSize:[48,48]}),O=i().icon({iconUrl:"/ArMapSns/_next/static/media/other.a347bcce.png",iconSize:[48,48]}),LocationMarker=e=>{let{coordinates:t}=e,n=useLeafletContext().map;return(0,s.useEffect)(()=>{null!==t.latitude&&null!==t.longitude&&n.setView([t.latitude,t.longitude],n.getZoom())},[t,n]),null};var map_page=()=>{let[e]=(0,a.KO)(_.LF),[t,n]=(0,a.KO)(_.ge);(0,s.useEffect)(()=>{"undefined"!=typeof navigator&&null!==navigator.geolocation&&navigator.geolocation.watchPosition(e=>{n({latitude:e.coords.latitude,longitude:e.coords.longitude})})},[n]);let[l,i]=(0,s.useState)(!1),handleClosePopup=()=>{i(!1)},[c,p]=(0,s.useState)(null),d=(0,s.useCallback)(async()=>{if(null===t.latitude||null===t.longitude)return;let e=t.latitude,n=t.longitude,r=await b.x.posts.$get({query:{latitude:e,longitude:n}}).catch(w.F);p(r),console.log("getPosts")},[t.latitude,t.longitude]),[m,j]=(0,s.useState)(""),postPostContent=async()=>{if((null==e?void 0:e.id)===void 0||""===m||null===t.latitude||null===t.longitude)return;let n=t.latitude,r=t.longitude;await b.x.myPost.$post({body:{username:"aaa",content:m,latitude:n,longitude:r,userID:e.id}}),j(""),handleClosePopup(),d()};return((0,s.useEffect)(()=>{d()},[d]),e)?(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{className:L().container,children:[(0,r.jsx)(C.v,{user:e}),null!==t.latitude&&null!==t.longitude&&(0,r.jsx)("div",{className:"".concat(L().mapWrapper," ").concat(l?L().blurred:""),children:(0,r.jsxs)(f,{center:[t.latitude,t.longitude],zoom:17,scrollWheelZoom:!1,style:{height:"93vh",width:"100%"},children:[(0,r.jsx)(h,{attribution:'\xa9 <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),(0,r.jsx)(LocationMarker,{coordinates:t}),(0,r.jsx)(g,{center:[t.latitude,t.longitude],radius:8,color:"red",fillOpacity:.1}),null==c?void 0:c.map(t=>(0,r.jsx)(x,{icon:e.id===t.userID?E:O,position:[t.latitude,t.longitude],children:(0,r.jsxs)(v,{children:[t.postTime,(0,r.jsx)("br",{}),t.content]})},t.id))]})})]}),!l&&(0,r.jsx)("button",{onClick:()=>{i(!0)},className:L().postButton,children:"POST"}),l&&(0,r.jsx)("div",{className:L().popup,children:(0,r.jsxs)("div",{className:L().popupContent,children:[(0,r.jsx)(o.Z,{label:"投稿内容",value:m,onChange:e=>j(e.target.value),InputProps:{endAdornment:(0,r.jsx)(u.Z,{onClick:postPostContent,disabled:!m.trim(),children:"投稿する"})}}),(0,r.jsx)("button",{onClick:handleClosePopup,children:"閉じる"})]})})]}):(0,r.jsx)(y.g,{visible:!0})}},3936:function(e,t,n){"use strict";n.d(t,{v:function(){return BasicHeader}});var r=n(5893),o=n(8583),u=n(1163),a=n(6221);let HumanIcon=e=>(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:e.size,height:e.size,fill:e.fill,children:(0,r.jsx)("path",{d:"M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm7.753 18.305c-.261-.586-.789-.991-1.871-1.241-2.293-.529-4.428-.993-3.393-2.945 3.145-5.942.833-9.119-2.489-9.119-3.388 0-5.644 3.299-2.489 9.119 1.066 1.964-1.148 2.427-3.393 2.945-1.084.25-1.608.658-1.867 1.246-1.405-1.723-2.251-3.919-2.251-6.31 0-5.514 4.486-10 10-10s10 4.486 10 10c0 2.389-.845 4.583-2.247 6.305z"})});var l=n(4076),i=n(5293),c=n.n(i);let BasicHeader=e=>{let{user:t}=e,onLogout=async()=>{confirm("Logout?")&&await (0,l.kS)()},n=(0,u.useRouter)(),[i,s]=(0,o.KO)(a.XI),handleChenge=async()=>{i?await n.push("/"):await n.push("/AR"),s(!i)};return(0,r.jsx)("div",{className:c().container,children:(0,r.jsxs)("div",{className:c().main,children:[(0,r.jsx)("h3",{children:"ArMapSNS"}),(0,r.jsxs)("div",{className:c().userBtn,onClick:onLogout,children:[void 0!==t.photoURL?(0,r.jsx)("img",{className:c().userIcon,src:t.photoURL,height:24,alt:t.displayName}):(0,r.jsx)(HumanIcon,{size:18,fill:"#555"}),(0,r.jsx)("span",{className:c().userName,children:t.displayName})]}),(0,r.jsx)("button",{onClick:handleChenge,children:"MAP or AR"})]})})}},4076:function(e,t,n){"use strict";n.d(t,{id:function(){return authWithEmail},kS:function(){return logout}});var r=n(4857),o=n(2509),u=n(3483),a=n(6819);let logout=async()=>{await (0,o.l)().signOut()},checkIfNewUser=async e=>{let t=await u.x.user.$get({query:{userID:e}});0===t.length&&await u.x.user.post({body:{userID:e}}).catch(a.F)},authWithEmail=async(e,t)=>{let n=(0,o.l)();try{let o=await (0,r.e5)(n,e,t),u=o.user.uid;await checkIfNewUser(u),console.log("ログイン成功")}catch(o){if("auth/user-not-found"!==o.code)return console.error("ログイン失敗",o),null;try{let o=await (0,r.Xb)(n,e,t),u=o.user.uid;await checkIfNewUser(u),console.log("新規登録成功")}catch(e){return console.log("新規登録失敗",e),null}}}},6904:function(){},8041:function(e){e.exports={container:"map_container__Oqp4f",mapWrapper:"map_mapWrapper__1_3pi",blurred:"map_blurred__c4Upe",postButton:"map_postButton__J5imn",popup:"map_popup__I387y",popupContent:"map_popupContent__QJI8d"}},5293:function(e){e.exports={container:"BasicHeader_container__ASIaK",main:"BasicHeader_main__Vqufr",userBtn:"BasicHeader_userBtn__wlK48",userIcon:"BasicHeader_userIcon__UecGa",userName:"BasicHeader_userName__KiR1h"}}}]);