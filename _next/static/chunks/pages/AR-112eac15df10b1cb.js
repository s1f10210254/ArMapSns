(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[221],{4747:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/AR",function(){return n(3795)}])},6221:function(t,e,n){"use strict";n.d(e,{LF:function(){return a},ge:function(){return s}});var o=n(5103);let a=(0,o.cn)(null),s=(0,o.cn)({latitude:null,longitude:null});(0,o.cn)(!0)},9854:function(t,e,n){"use strict";n.d(e,{g:function(){return Loading}});var o=n(5893),a=n(7294),s=n(3935);let Portal=t=>{let{children:e}=t,[n,o]=(0,a.useState)();return(0,a.useEffect)(()=>{let t=document.createElement("div");return document.body.appendChild(t),o(t),()=>{document.body.removeChild(t)}},[]),n?s.createPortal(e,n):null};var i=n(8046),c=n.n(i);let Loading=t=>t.visible?(0,o.jsx)(Portal,{children:(0,o.jsx)("div",{className:c().container,children:(0,o.jsx)("div",{className:c().loader})})}):null},3795:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return index_page}});var o=n(5893),a=n(8583),s=n(1664),i=n.n(s),c=n(1163),l=n(7294),d=n(6221),r=n(9854),u=n(5066);let xValue=(t,e)=>void 0===e?0:-5*Math.cos(t/e*Math.PI*2),yValue=()=>0,zValue=(t,e)=>void 0===e?0:-5*Math.sin(t/e*Math.PI*2);var p=n(2745),h=n(6819),g=n(5123),y=n.n(g),ar_page=()=>{let[t,e]=(0,a.KO)(d.LF),[n,s]=(0,a.KO)(d.ge),[g,m]=(0,l.useState)(null),[f,j]=(0,l.useState)({}),[b,x]=(0,l.useState)(!0),v=(0,c.useRouter)();(0,l.useEffect)(()=>{let t=localStorage.getItem("user");if(null!==t){let n=JSON.parse(t);e(n)}else v.push("/login")},[e,v]);let E=(0,l.useCallback)(async()=>{if(null===n.latitude||null===n.longitude)return;let t=n.latitude,e=n.longitude,o=await u.x.posts.$get({query:{latitude:t,longitude:e}}).catch(h.F);m(o)},[n.latitude,n.longitude]);(0,l.useEffect)(()=>{"undefined"!=typeof navigator&&null!==navigator.geolocation&&navigator.geolocation.watchPosition(t=>{s({latitude:t.coords.latitude,longitude:t.coords.longitude})})},[s]);let $=(0,l.useCallback)(async e=>{if(null===t)return;let n=await u.x.likes.$get({query:{postId:e,userId:t.id}});return n},[t]),_=(0,l.useCallback)(async t=>{let e={};for(let n of t){let t=await $(n.id);e[n.id]=void 0!==t&&t}j(e)},[$]);(0,l.useEffect)(()=>{b&&null!==n.latitude&&null!==n.longitude&&E().then(()=>{g&&(_(g),x(!1))})},[b,n,E,g,_]);let T=(0,l.useCallback)(async e=>{if((null==t?void 0:t.id)===void 0||void 0===e)return;let n=await u.x.likes.$patch({body:{postId:e,userId:t.id}});j(t=>({...t,[e]:!t[e]})),m(t=>t?t.map(t=>t.id===e?{...t,likeCount:n}:t):t)},[null==t?void 0:t.id]),k=(0,l.useCallback)(async t=>{await u.x.likes.$delete({body:{postId:t}}).catch(h.F),await u.x.myPost.$delete({query:{postID:t}}).catch(h.F),await E()},[E]);return((0,l.useEffect)(()=>{void 0===AFRAME.components.likes&&AFRAME.registerComponent("likes",{schema:{postId:{type:"string"}},init(){this.el.addEventListener("click",()=>{let t=this.data.postId;T(t)})}}),void 0===AFRAME.components.delete&&AFRAME.registerComponent("delete",{schema:{postId:{type:"string"}},init(){this.el.addEventListener("click",()=>{let t=this.data.postId;confirm("削除しますか？")&&k(t)})}})},[k,T]),t)?(0,o.jsxs)("div",{children:[(0,o.jsx)(i(),{href:"/",children:(0,o.jsx)("button",{className:y().mapButton,children:"MAPに戻る"})}),(0,o.jsxs)("a-scene",{"vr-mode-ui":"enabled: false",arjs:"sourceType: webcam; videoTexture: true; debugUIEnabled: false",renderer:"antialias: true; alpha: true",children:[(0,o.jsxs)("a-assets",{children:[(0,o.jsx)("img",{id:"delete",src:"/icons/delete.png"}),(0,o.jsx)("img",{id:"heart",src:"/icons/likes.png"})]}),null==g?void 0:g.map((e,n)=>(0,o.jsxs)("a-entity",{id:"post".concat(n),position:"".concat(xValue(n,g.length)," ").concat(yValue()," ").concat(zValue(n,g.length)),rotation:"0 0 0","look-at":"[camera]",scale:"3 3 3",animation:"property: scale; to: 2.8 2.8 2.8; dir: alternate; dur: 2000; loop: true",children:[e.userID===(null==t?void 0:t.id)?(0,o.jsx)("a-box",{color:"#c2c7ee",height:"1",width:"1.5",depth:"0.1",position:"0 0 -0.1"}):(0,o.jsx)("a-box",{color:"#f6a985",height:"1",width:"1.5",depth:"0.1",position:"0 0 -0.1"}),(0,o.jsx)("a-plane",{color:"#fffbfb",height:"0.9",width:"1.4",position:"0 0 0",align:"center"}),(0,o.jsx)("a-text",{value:(0,p.N)(e.content),font:"/fonts/mplus-msdf.json","font-image":"/png/mplus-msdf.png",position:"-0.65 0.2 0.001","gps-entity-place":"latitude: ".concat(e.latitude,"; longitude: ").concat(e.longitude),scale:"0.4 0.4 0.4",color:"#000000",negate:"false"}),(0,o.jsx)("a-plane",{material:"src: #heart; transparent: true; color: ".concat(f[e.id]?"red":"white",";"),position:"-0.4 -0.3 0.09",scale:"0.2 0.2 0.2","gps-entity-place":"latitude: ".concat(e.latitude,"; longitude: ").concat(e.longitude)}),(0,o.jsx)("a-entity",{position:"-0.4, -0.3 0.1",likes:"postId: ".concat(e.id),children:(0,o.jsx)("a-entity",{class:"raycastable","gps-entity-place":"latitude: ".concat(e.latitude,"; longitude: ").concat(e.longitude),geometry:"primitive:box",material:"color:blue; opacity: 0.5",scale:"0.2 0.2 0.1",position:"0 0 0",visible:"false"})}),(0,o.jsx)("a-text",{value:"Likes: ".concat(e.likeCount),position:"-0.5 -0.2 0.1","gps-entity-place":"latitude: ".concat(e.latitude,"; longitude: ").concat(e.longitude),scale:"0.2 0.2 0.2",color:"black"}),(0,o.jsx)("a-text",{value:"".concat((0,p.m)(e.postTime)),position:"0.01 -0.4 0",font:"/fonts/mplus-msdf.json","font-image":"/png/mplus-msdf.png","gps-entity-place":"latitude: ".concat(e.latitude,"; longitude: ").concat(e.longitude),scale:"0.25 0.25 0.25",color:"#413f3f",negate:"false"}),(null==t?void 0:t.id)===e.userID&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("a-plane",{material:"src : #delete ;transparent: true;",position:"0.3 -0.25 0.1",scale:"0.1 0.1 0.1","gps-entity-place":"latitude: ".concat(e.latitude,"; longitude: ").concat(e.longitude)}),(0,o.jsx)("a-entity",{position:"0.3, -0.25 0.1",delete:"postId: ".concat(e.id),children:(0,o.jsx)("a-entity",{class:"raycastable","gps-entity-place":"latitude: ".concat(e.latitude,"; longitude: ").concat(e.longitude),geometry:"primitive:box",material:"color:blue; opacity: 0.5",scale:"0.2 0.2 0.1",position:"0 0 0",visible:"false"})})]})]},n)),(0,o.jsx)("a-camera",{"gps-camera":!0,"rotation-reader":!0}),(0,o.jsx)("a-light",{type:"ambient",color:"#FFFFFF"}),(0,o.jsx)("a-entity",{id:"mouseCursor",cursor:"rayOrigin: mouse",raycaster:"objects: .raycastable"})]})]}):(0,o.jsx)("div",{children:(0,o.jsx)(r.g,{visible:!0})})},index_page=()=>(0,o.jsx)("div",{children:(0,o.jsx)(ar_page,{})})},5066:function(t,e,n){"use strict";n.d(e,{x:function(){return i}});var o=n(9239),a=n(7080),s=n(6154);let i=(t=>{let{baseURL:e,fetch:n}=t,o=(void 0===e?"":e).replace(/\/$/,""),s="/health",i="/likes",c="/myPost",l="/posts",d="/session",r="/tasks",u="/tasks/di",p="/test",h="/user",g="POST",y="DELETE",m="PATCH";return{health:{get:t=>n(o,s,"GET",t).json(),$get:t=>n(o,s,"GET",t).json().then(t=>t.body),$path:()=>"".concat(o).concat(s)},likes:{get:t=>n(o,i,"GET",t).json(),$get:t=>n(o,i,"GET",t).json().then(t=>t.body),post:t=>n(o,i,g,t).json(),$post:t=>n(o,i,g,t).json().then(t=>t.body),patch:t=>n(o,i,m,t).json(),$patch:t=>n(o,i,m,t).json().then(t=>t.body),delete:t=>n(o,i,y,t).text(),$delete:t=>n(o,i,y,t).text().then(t=>t.body),$path:t=>"".concat(o).concat(i).concat(t&&t.query?"?".concat((0,a._K)(t.query)):"")},me:{get:t=>n(o,"/me","GET",t).json(),$get:t=>n(o,"/me","GET",t).json().then(t=>t.body),$path:()=>"".concat(o).concat("/me")},myPost:{get:t=>n(o,c,"GET",t).json(),$get:t=>n(o,c,"GET",t).json().then(t=>t.body),post:t=>n(o,c,g,t).send(),$post:t=>n(o,c,g,t).send().then(t=>t.body),delete:t=>n(o,c,y,t).send(),$delete:t=>n(o,c,y,t).send().then(t=>t.body),$path:t=>"".concat(o).concat(c).concat(t&&t.query?"?".concat((0,a._K)(t.query)):"")},posts:{get:t=>n(o,l,"GET",t).json(),$get:t=>n(o,l,"GET",t).json().then(t=>t.body),post:t=>n(o,l,g,t).send(),$post:t=>n(o,l,g,t).send().then(t=>t.body),$path:t=>"".concat(o).concat(l).concat(t&&t.query?"?".concat((0,a._K)(t.query)):"")},session:{post:t=>n(o,d,g,t).json(),$post:t=>n(o,d,g,t).json().then(t=>t.body),delete:t=>n(o,d,y,t).json(),$delete:t=>n(o,d,y,t).json().then(t=>t.body),$path:()=>"".concat(o).concat(d)},tasks:{_taskId:t=>{let e="".concat(r,"/").concat(t);return{patch:t=>n(o,e,m,t).json(),$patch:t=>n(o,e,m,t).json().then(t=>t.body),delete:t=>n(o,e,y,t).json(),$delete:t=>n(o,e,y,t).json().then(t=>t.body),$path:()=>"".concat(o).concat(e)}},di:{get:t=>n(o,u,"GET",t).json(),$get:t=>n(o,u,"GET",t).json().then(t=>t.body),$path:()=>"".concat(o).concat(u)},get:t=>n(o,r,"GET",t).json(),$get:t=>n(o,r,"GET",t).json().then(t=>t.body),post:t=>n(o,r,g,t).json(),$post:t=>n(o,r,g,t).json().then(t=>t.body),patch:t=>n(o,r,m,t).json(),$patch:t=>n(o,r,m,t).json().then(t=>t.body),delete:t=>n(o,r,y,t).json(),$delete:t=>n(o,r,y,t).json().then(t=>t.body),$path:t=>"".concat(o).concat(r).concat(t&&t.query?"?".concat((0,a._K)(t.query)):"")},test:{get:t=>n(o,p,"GET",t).text(),$get:t=>n(o,p,"GET",t).text().then(t=>t.body),$path:()=>"".concat(o).concat(p)},user:{get:t=>n(o,h,"GET",t).json(),$get:t=>n(o,h,"GET",t).json().then(t=>t.body),post:t=>n(o,h,g,t).send(),$post:t=>n(o,h,g,t).send().then(t=>t.body),$path:t=>"".concat(o).concat(h).concat(t&&t.query?"?".concat((0,a._K)(t.query)):"")},get:t=>n(o,"","GET",t).text(),$get:t=>n(o,"","GET",t).text().then(t=>t.body),$path:()=>"".concat(o)}})((0,o.Z)(s.Z.create({withCredentials:!0})))},2745:function(t,e,n){"use strict";n.d(e,{N:function(){return formatContent},m:function(){return formatTime}});let formatTime=t=>{let e=new Date(t);return new Intl.DateTimeFormat("ja-JP",{year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric",hour12:!0}).format(e)},formatContent=t=>{let e="";for(let n=0;n<t.length;n+=17){let o=t.substring(n,n+17);e+=o+(n+17<t.length?"\n":"")}return e}},6819:function(t,e,n){"use strict";n.d(e,{F:function(){return returnNull}});let returnNull=()=>null},5123:function(t){t.exports={mapButton:"ar_mapButton__k_EPZ",coordinatesInfo:"ar_coordinatesInfo__1KWgl"}},8046:function(t){t.exports={container:"Loading_container__wV1ri",loader:"Loading_loader__cpdbt",load:"Loading_load__8NQtO"}}},function(t){t.O(0,[583,911,664,774,888,179],function(){return t(t.s=4747)}),_N_E=t.O()}]);