(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[495],{9219:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/register",function(){return n(7601)}])},7601:function(t,e,n){"use strict";n.r(e);var o=n(5893),s=n(9417),a=n(4238),c=n(3946),i=n(5861),l=n(1259),d=n(8583),r=n(1163),h=n(7294),p=n(6221),u=n(5066),y=n(6386),g=n(6819),x=n(2176),j=n(420),$=n.n(j),m=n(2961),b=n(2450);e.default=()=>{let[,t]=(0,d.KO)(p.LF),{loadingElm:e,addLoading:n,removeLoading:j}=(0,x.r)(),[E,T]=(0,h.useState)(""),[v,f]=(0,h.useState)(""),[w,G]=(0,h.useState)(!1),_=(0,r.useRouter)(),[k,C]=(0,h.useState)(""),signUpWithEmail1=async(e,n)=>{let o=(0,y.l)();try{let e=await (0,l.Xb)(o,E,n),s=e.user.uid,a={id:s,email:"",displayName:"",photoURL:""};t(a),await u.x.user.post({body:{userID:s}}).catch(g.F),localStorage.setItem("user",JSON.stringify(a)),console.log("新規登録成功")}catch(t){throw console.error("新規登録失敗",t),t}},createAccount=async()=>{n();try{C(""),await signUpWithEmail1(E,v),await _.push("/")}catch(t){C("サインアップに失敗しました")}j()},handleChange=async()=>{await _.push("/login")};return(0,o.jsxs)("div",{className:$().container,children:[(0,o.jsxs)("div",{id:"icon",style:{display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center",paddingTop:"80px"},children:[(0,o.jsx)("div",{style:{paddingTop:"30px"},children:(0,o.jsx)("img",{src:"/images/applogo1.png",alt:"APP logo",style:{position:"relative",right:"-5px",top:"-15px",width:"100px",height:"auto"}})}),(0,o.jsx)("div",{children:(0,o.jsx)("img",{style:{width:"280px",height:"auto"},src:"/images/logo.png",alt:"ARMapConnect Logo"})})]}),(0,o.jsxs)("div",{id:"input",style:{paddingTop:"60px"},children:[(0,o.jsx)("div",{style:{textAlign:"center",paddingLeft:"30%"},children:(0,o.jsx)(s.Z,{onClick:()=>{let t=new Date().getTime(),e="user".concat(Math.floor(1e4*Math.random())).concat(t,"@example.com"),n="",o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";for(let t=0;t<14;t++)n+=o.charAt(Math.floor(Math.random()*o.length));T(e),f(n)},children:"ランダム生成"})}),(0,o.jsx)("div",{style:{textAlign:"center"},children:(0,o.jsx)(a.Z,{style:{width:"70%",minWidth:"250px",maxWidth:"700px"},label:"Email",type:"email",variant:"outlined",value:E,onChange:t=>T(t.target.value),fullWidth:!0,sx:{mt:2}})}),(0,o.jsx)("div",{style:{textAlign:"center"},children:(0,o.jsx)(a.Z,{label:"Password",style:{width:"70%",minWidth:"250px",maxWidth:"700px"},type:w?"text":"password",variant:"outlined",value:v,onChange:t=>f(t.target.value),fullWidth:!0,sx:{mt:2},InputProps:{endAdornment:(0,o.jsx)(c.Z,{"aria-label":"toggle password visibility",onClick:()=>{G(!w)},children:w?(0,o.jsx)(b.Z,{}):(0,o.jsx)(m.Z,{})})}})})]}),(0,o.jsx)("div",{style:{paddingTop:"20px"},children:(0,o.jsxs)("div",{style:{textAlign:"center"},children:[(0,o.jsx)(s.Z,{variant:"contained",sx:{mt:3},onClick:createAccount,children:"新規登録"}),k&&(0,o.jsx)(i.Z,{color:"error",sx:{mt:3},children:k})]})}),(0,o.jsx)("div",{style:{textAlign:"center"},children:(0,o.jsx)(s.Z,{variant:"outlined",color:"primary",sx:{mt:2},onClick:handleChange,children:"戻る"})}),e]})}},5066:function(t,e,n){"use strict";n.d(e,{x:function(){return c}});var o=n(9239),s=n(7080),a=n(6154);let c=(t=>{let{baseURL:e,fetch:n}=t,o=(void 0===e?"":e).replace(/\/$/,""),a="/health",c="/likes",i="/myPost",l="/posts",d="/session",r="/tasks",h="/tasks/di",p="/test",u="/user",y="POST",g="DELETE",x="PATCH";return{health:{get:t=>n(o,a,"GET",t).json(),$get:t=>n(o,a,"GET",t).json().then(t=>t.body),$path:()=>"".concat(o).concat(a)},likes:{get:t=>n(o,c,"GET",t).json(),$get:t=>n(o,c,"GET",t).json().then(t=>t.body),post:t=>n(o,c,y,t).json(),$post:t=>n(o,c,y,t).json().then(t=>t.body),patch:t=>n(o,c,x,t).json(),$patch:t=>n(o,c,x,t).json().then(t=>t.body),delete:t=>n(o,c,g,t).text(),$delete:t=>n(o,c,g,t).text().then(t=>t.body),$path:t=>"".concat(o).concat(c).concat(t&&t.query?"?".concat((0,s._K)(t.query)):"")},me:{get:t=>n(o,"/me","GET",t).json(),$get:t=>n(o,"/me","GET",t).json().then(t=>t.body),$path:()=>"".concat(o).concat("/me")},myPost:{get:t=>n(o,i,"GET",t).json(),$get:t=>n(o,i,"GET",t).json().then(t=>t.body),post:t=>n(o,i,y,t).send(),$post:t=>n(o,i,y,t).send().then(t=>t.body),delete:t=>n(o,i,g,t).send(),$delete:t=>n(o,i,g,t).send().then(t=>t.body),$path:t=>"".concat(o).concat(i).concat(t&&t.query?"?".concat((0,s._K)(t.query)):"")},posts:{get:t=>n(o,l,"GET",t).json(),$get:t=>n(o,l,"GET",t).json().then(t=>t.body),post:t=>n(o,l,y,t).send(),$post:t=>n(o,l,y,t).send().then(t=>t.body),$path:t=>"".concat(o).concat(l).concat(t&&t.query?"?".concat((0,s._K)(t.query)):"")},session:{post:t=>n(o,d,y,t).json(),$post:t=>n(o,d,y,t).json().then(t=>t.body),delete:t=>n(o,d,g,t).json(),$delete:t=>n(o,d,g,t).json().then(t=>t.body),$path:()=>"".concat(o).concat(d)},tasks:{_taskId:t=>{let e="".concat(r,"/").concat(t);return{patch:t=>n(o,e,x,t).json(),$patch:t=>n(o,e,x,t).json().then(t=>t.body),delete:t=>n(o,e,g,t).json(),$delete:t=>n(o,e,g,t).json().then(t=>t.body),$path:()=>"".concat(o).concat(e)}},di:{get:t=>n(o,h,"GET",t).json(),$get:t=>n(o,h,"GET",t).json().then(t=>t.body),$path:()=>"".concat(o).concat(h)},get:t=>n(o,r,"GET",t).json(),$get:t=>n(o,r,"GET",t).json().then(t=>t.body),post:t=>n(o,r,y,t).json(),$post:t=>n(o,r,y,t).json().then(t=>t.body),patch:t=>n(o,r,x,t).json(),$patch:t=>n(o,r,x,t).json().then(t=>t.body),delete:t=>n(o,r,g,t).json(),$delete:t=>n(o,r,g,t).json().then(t=>t.body),$path:t=>"".concat(o).concat(r).concat(t&&t.query?"?".concat((0,s._K)(t.query)):"")},test:{get:t=>n(o,p,"GET",t).text(),$get:t=>n(o,p,"GET",t).text().then(t=>t.body),$path:()=>"".concat(o).concat(p)},user:{get:t=>n(o,u,"GET",t).json(),$get:t=>n(o,u,"GET",t).json().then(t=>t.body),post:t=>n(o,u,y,t).send(),$post:t=>n(o,u,y,t).send().then(t=>t.body),$path:t=>"".concat(o).concat(u).concat(t&&t.query?"?".concat((0,s._K)(t.query)):"")},get:t=>n(o,"","GET",t).text(),$get:t=>n(o,"","GET",t).text().then(t=>t.body),$path:()=>"".concat(o)}})((0,o.Z)(a.Z.create({withCredentials:!0})))},6819:function(t,e,n){"use strict";n.d(e,{F:function(){return returnNull}});let returnNull=()=>null},420:function(t){t.exports={container:"register_container__eyHGd"}}},function(t){t.O(0,[661,583,941,911,30,774,888,179],function(){return t(t.s=9219)}),_N_E=t.O()}]);