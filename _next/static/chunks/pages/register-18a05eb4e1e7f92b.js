(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[495],{9219:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/register",function(){return a(7601)}])},2176:function(e,t,a){"use strict";a.d(t,{r:function(){return useLoading}});var n=a(5893),i=a(5103),r=a(8583),s=a(7294),l=a(9854);let o=(0,i.cn)(0),c=(0,i.cn)(e=>e(o)>0),useLoading=()=>{let[e,t]=(0,r.KO)(o),[a]=(0,r.KO)(c),i=(0,s.useCallback)(()=>t(e+1),[e,t]),g=(0,s.useCallback)(()=>t(e-1),[e,t]);return{loadingElm:(0,n.jsx)(l.g,{visible:a}),addLoading:i,removeLoading:g}}},7601:function(e,t,a){"use strict";a.r(t);var n=a(5893),i=a(7357),r=a(4238),s=a(9417),l=a(5861),o=a(4857),c=a(8583),g=a(1163),u=a(7294),d=a(6221),m=a(3483),p=a(2509),h=a(6819),x=a(2176),_=a(420),f=a.n(_),j=a(2961),v=a(2450),y=a(3946);t.default=()=>{let[,e]=(0,c.KO)(d.LF),{loadingElm:t,addLoading:a,removeLoading:_}=(0,x.r)(),[w,C]=(0,u.useState)(""),[b,Z]=(0,u.useState)(""),[k,N]=(0,u.useState)(!1),I=(0,g.useRouter)(),[E,M]=(0,u.useState)(""),signUpWithEmail1=async(t,a)=>{let n=(0,p.l)();try{let i=await (0,o.Xb)(n,w,a),r=i.user.uid;e(e=>({...e,id:r,email:t,displayName:null==e?void 0:e.displayName,photoURL:null==e?void 0:e.photoURL})),await m.x.user.post({body:{userID:r}}).catch(h.F),console.log("新規登録成功")}catch(e){throw console.error("新規登録失敗",e),e}},createAccount=async()=>{a();try{await signUpWithEmail1(w,b),M("")}catch(e){M("サインアップに失敗しました")}_()},handleChange=async()=>{await I.push("/login")};return(0,n.jsxs)("div",{className:f().container,children:[(0,n.jsxs)("div",{className:f().main,children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("img",{className:f().appImage,src:"/images/applogo1.png",alt:"APP logo",style:{position:"relative",right:"-5px",top:"-15px"}}),(0,n.jsx)("img",{className:f().logoImage,src:"/images/logo.png",alt:"ARMapConnect Logo"})]}),(0,n.jsx)("div",{}),(0,n.jsxs)(i.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center",justifyContent:"center",p:3,width:"100%",maxWidth:400},children:[(0,n.jsx)(r.Z,{label:"Email",type:"email",variant:"outlined",value:w,onChange:e=>C(e.target.value),fullWidth:!0,sx:{mt:2}}),(0,n.jsx)(r.Z,{label:"Password",type:k?"text":"password",variant:"outlined",value:b,onChange:e=>Z(e.target.value),fullWidth:!0,sx:{mt:2},InputProps:{endAdornment:(0,n.jsx)(y.Z,{"aria-label":"toggle password visibility",onClick:()=>{N(!k)},children:k?(0,n.jsx)(v.Z,{}):(0,n.jsx)(j.Z,{})})}}),(0,n.jsxs)(i.Z,{sx:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",p:3,width:"100%",maxWidth:400},children:[(0,n.jsx)(s.Z,{variant:"contained",sx:{mt:2,mr:2},onClick:createAccount,children:"新規登録"}),(0,n.jsx)(s.Z,{variant:"contained",sx:{mt:2},onClick:()=>{let e=new Date().getTime(),t="user".concat(Math.floor(1e4*Math.random())).concat(e,"@example.com"),a="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";for(let e=0;e<14;e++)a+=n.charAt(Math.floor(Math.random()*n.length));C(t),Z(a)},children:"ランダム生成"})]}),E&&(0,n.jsx)(l.Z,{color:"error",sx:{mt:2},children:E})]}),E&&(0,n.jsx)(l.Z,{color:"error",sx:{mt:2},children:E}),(0,n.jsx)(s.Z,{variant:"outlined",color:"primary",sx:{mt:2},onClick:handleChange,children:"戻る"})]}),t]})}},420:function(e){e.exports={container:"register_container__eyHGd",main:"register_main__McpOr",appname:"register_appname__4YNmJ",register:"register_register__JKHBP",registerLink:"register_registerLink__aymRJ",title:"register_title__SWO1g",btn:"register_btn__MZ6m2",logoImage:"register_logoImage___u7aM",appImage:"register_appImage__MlFtb"}}},function(e){e.O(0,[117,794,774,888,179],function(){return e(e.s=9219)}),_N_E=e.O()}]);