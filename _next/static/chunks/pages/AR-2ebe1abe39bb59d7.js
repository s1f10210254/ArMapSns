(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[221],{4747:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/AR",function(){return n(7892)}])},7892:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return index_page}});var o=n(5893),a=n(8583),i=n(1163),l=n(7294),s=n(6221),r=n(3483),u=n(6819),d=n(5123),c=n.n(d),ar_page=()=>{let[e,t]=(0,a.KO)(s.ge),n=(0,i.useRouter)(),handleMAP=async()=>{await n.push("/")};(0,l.useEffect)(()=>{"undefined"!=typeof navigator&&null!==navigator.geolocation&&navigator.geolocation.watchPosition(e=>{t({latitude:e.coords.latitude,longitude:e.coords.longitude})})},[t]);let[d,p]=(0,l.useState)(null),[g,f]=(0,l.useState)(!0);(0,l.useEffect)(()=>{if(g&&null!==e.latitude&&null!==e.longitude){let oneRendaringGetPosts=async()=>{let t=e.latitude,n=e.longitude,o=await r.x.posts.$get({query:{latitude:t,longitude:n}}).catch(u.F);p(o)};oneRendaringGetPosts(),f(!1)}},[e.latitude,e.longitude,g]);let m=(0,l.useRef)(null),_=(0,l.useRef)(null);return(0,l.useEffect)(()=>{void 0===AFRAME.components["hit-box"]&&AFRAME.registerComponent("hit-box",{init(){this.el.addEventListener("click",()=>{alert("clickしました"),console.log("オブジェクトがクリックされました")})}}),void 0===AFRAME.components.log&&AFRAME.registerComponent("log",{schema:{type:"string"},init(){let e=this.data;console.log("log内容",e)}});let e=m.current;console.log("textElement",e),e&&e.addEventListener("gps-entity-place-update-positon",t=>{let n=_.current;console.log("debugElement",n),n&&(n.textContent="".concat(t.detail.distance,"m"),console.log(n),e.setAttribute("value","".concat(e.getAttribute("distanceMsg"),"left")))})},[]),(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{id:"debug",ref:_,style:{position:"fixed",zIndex:1e4,backgroundColor:"#fff",padding:"10px",top:0,left:0,display:"block"}}),(0,o.jsx)("button",{onClick:handleMAP,className:c().mapButton,children:"MAP"}),null!==e.latitude&&null!==e.longitude&&(0,o.jsxs)("div",{className:c().coordinatesInfo,children:["Latitude: ",e.latitude,", Longitude: ",e.longitude]}),(0,o.jsxs)("a-scene",{"vr-mode-ui":"enabled: false",arjs:"sourceType: webcam; videoTexture: true; debugUIEnabled: false",renderer:"antialias: true; alpha: true",children:[null==d?void 0:d.map((e,t)=>(0,o.jsx)("a-entity",{id:"post".concat(t),position:"0 ".concat(1.6+.5*t," -1"),rotation:"0 0 0",children:(0,o.jsx)("a-text",{value:e.content,scale:"0.5 0.5 0.5","looc-at":"camera",align:"center",animation__fadein:"property: material.opacity; from: 0; to: 1; dur: 1000",animation__fadeout:"property: material.opacity; from: 1; to: 0; startEvents: fadeout; dur: 1000",animation__slide:"property: position; from: 0 ${1.5 + index * 0.5} -1; to: 0 ${1.6 + index * 0.5} -1; dur: 2000; dir: alternate; repeat: indefinite",animation__scale:"property: scale; from: 0.5 0.5 0.5; to: 1 1 1; dur: 1500"})},t)),(0,o.jsx)("a-camera",{"gps-new-camera":"gpsMinDistance: 5","gps-camera":"minDistance:30; maxDistance:100"}),(0,o.jsx)("a-entity",{id:"mouseCursor",cursor:"rayOrigin: mouse",raycaster:"objects: .raycastable"})]})]})},index_page=()=>(0,o.jsx)("div",{children:(0,o.jsx)(ar_page,{})})},5123:function(e){e.exports={mapButton:"ar_mapButton__k_EPZ",coordinatesInfo:"ar_coordinatesInfo__1KWgl"}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=4747)}),_N_E=e.O()}]);