(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[459],{7357:function(t,e,n){"use strict";n.d(e,{Z:function(){return x}});var r=n(7462),i=n(3366),a=n(7294),o=n(512),l=n(9731),s=n(6523),u=n(9707),c=n(9718),h=n(5893);let p=["className","component"];var g=n(7078),d=n(1265),f=n(606);let m=(0,d.Z)(),y=function(t={}){let{themeId:e,defaultTheme:n,defaultClassName:g="MuiBox-root",generateClassName:d}=t,f=(0,l.ZP)("div",{shouldForwardProp:t=>"theme"!==t&&"sx"!==t&&"as"!==t})(s.Z),m=a.forwardRef(function(t,a){let l=(0,c.Z)(n),s=(0,u.Z)(t),{className:m,component:y="div"}=s,x=(0,i.Z)(s,p);return(0,h.jsx)(f,(0,r.Z)({as:y,ref:a,className:(0,o.Z)(m,d?d(g):g),theme:e&&l[e]||l},x))});return m}({themeId:f.Z,defaultTheme:m,defaultClassName:"MuiBox-root",generateClassName:g.Z.generate});var x=y},9707:function(t,e,n){"use strict";n.d(e,{Z:function(){return extendSxProp}});var r=n(7462),i=n(3366),a=n(9766),o=n(4920);let l=["sx"],splitProps=t=>{var e,n;let r={systemProps:{},otherProps:{}},i=null!=(e=null==t||null==(n=t.theme)?void 0:n.unstable_sxConfig)?e:o.Z;return Object.keys(t).forEach(e=>{i[e]?r.systemProps[e]=t[e]:r.otherProps[e]=t[e]}),r};function extendSxProp(t){let e;let{sx:n}=t,o=(0,i.Z)(t,l),{systemProps:s,otherProps:u}=splitProps(o);return e=Array.isArray(n)?[s,...n]:"function"==typeof n?(...t)=>{let e=n(...t);return(0,a.P)(e)?(0,r.Z)({},s,e):s}:(0,r.Z)({},s,n),(0,r.Z)({},u,{sx:e})}},4498:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return n(4807)}])},2176:function(t,e,n){"use strict";n.d(e,{r:function(){return useLoading}});var r=n(5893),i=n(5103),a=n(8583),o=n(7294),l=n(9854);let s=(0,i.cn)(0),u=(0,i.cn)(t=>t(s)>0),useLoading=()=>{let[t,e]=(0,a.KO)(s),[n]=(0,a.KO)(u),i=(0,o.useCallback)(()=>e(t+1),[t,e]),c=(0,o.useCallback)(()=>e(t-1),[t,e]);return{loadingElm:(0,r.jsx)(l.g,{visible:n}),addLoading:i,removeLoading:c}}},4807:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return index_page}});var r=n(5893),i=n(7357),a=n(3366),o=n(7462),l=n(7294),s=n(512),u=n(9707),c=n(4780),h=n(1496),p=n(7623),g=n(8216),d=n(1588),f=n(4867);function getTypographyUtilityClass(t){return(0,f.Z)("MuiTypography",t)}(0,d.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);let m=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],useUtilityClasses=t=>{let{align:e,gutterBottom:n,noWrap:r,paragraph:i,variant:a,classes:o}=t,l={root:["root",a,"inherit"!==t.align&&`align${(0,g.Z)(e)}`,n&&"gutterBottom",r&&"noWrap",i&&"paragraph"]};return(0,c.Z)(l,getTypographyUtilityClass,o)},y=(0,h.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(t,e)=>{let{ownerState:n}=t;return[e.root,n.variant&&e[n.variant],"inherit"!==n.align&&e[`align${(0,g.Z)(n.align)}`],n.noWrap&&e.noWrap,n.gutterBottom&&e.gutterBottom,n.paragraph&&e.paragraph]}})(({theme:t,ownerState:e})=>(0,o.Z)({margin:0},"inherit"===e.variant&&{font:"inherit"},"inherit"!==e.variant&&t.typography[e.variant],"inherit"!==e.align&&{textAlign:e.align},e.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},e.gutterBottom&&{marginBottom:"0.35em"},e.paragraph&&{marginBottom:16})),x={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},v={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},transformDeprecatedColors=t=>v[t]||t,w=l.forwardRef(function(t,e){let n=(0,p.Z)({props:t,name:"MuiTypography"}),i=transformDeprecatedColors(n.color),l=(0,u.Z)((0,o.Z)({},n,{color:i})),{align:c="inherit",className:h,component:g,gutterBottom:d=!1,noWrap:f=!1,paragraph:v=!1,variant:w="body1",variantMapping:b=x}=l,Z=(0,a.Z)(l,m),_=(0,o.Z)({},l,{align:c,color:i,className:h,component:g,gutterBottom:d,noWrap:f,paragraph:v,variant:w,variantMapping:b}),C=g||(v?"p":b[w]||x[w])||"span",j=useUtilityClasses(_);return(0,r.jsx)(y,(0,o.Z)({as:C,ref:e,ownerState:_,className:(0,s.Z)(j.root,h)},Z))});var b=n(9417),Z=n(4238),_=n(5547),C=n(1163);let GithubIcon=t=>(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:t.size,height:t.size,fill:t.fill,children:(0,r.jsx)("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})});var j=n(4076),N=n(2176),P=n(8256),k=n.n(P),index_page=()=>{let{loadingElm:t,addLoading:e,removeLoading:n}=(0,N.r)(),[a,o]=(0,l.useState)(""),[s,u]=(0,l.useState)(""),c=(0,C.useRouter)(),loginGithub=async()=>{e(),await (0,j._u)(),n()},loginEmail=async()=>{e(),await (0,j.id)(a,s),n()},handleChange=async()=>{await c.push("/register")};return(0,r.jsxs)("div",{className:k().container,children:[(0,r.jsxs)("div",{className:k().main,children:[(0,r.jsxs)(i.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"center",p:3},children:[(0,r.jsx)(w,{variant:"h4",gutterBottom:!0,children:_.X}),(0,r.jsx)(b.Z,{variant:"contained",startIcon:(0,r.jsx)(GithubIcon,{size:18,fill:"#fff"}),sx:{mt:2,mb:2},onClick:loginGithub,children:"Login with GitHub"}),(0,r.jsx)(Z.Z,{label:"Email",type:"email",variant:"outlined",value:a,onChange:t=>o(t.target.value),fullWidth:!0,sx:{mt:2}}),(0,r.jsx)(Z.Z,{label:"Password",type:"password",variant:"outlined",value:s,onChange:t=>u(t.target.value),fullWidth:!0,sx:{mt:2}}),(0,r.jsx)(b.Z,{variant:"contained",sx:{mt:2},onClick:loginEmail,children:"Login with Email"})]}),(0,r.jsx)("div",{style:{marginTop:"16px"},onClick:loginGithub,children:(0,r.jsxs)("div",{className:k().btn,children:[(0,r.jsx)(GithubIcon,{size:18,fill:"#fff"}),(0,r.jsx)("span",{children:"GitHubでのログインはこちら"})]})}),(0,r.jsx)("button",{style:{marginTop:"16px"},onClick:handleChange,children:"新規登録"})]}),t]})}},4076:function(t,e,n){"use strict";n.d(e,{_u:function(){return loginWithGitHub},id:function(){return authWithEmail},kS:function(){return logout}});var r=n(4857),i=n(2509),a=n(3483),o=n(6819);let loginWithGitHub=async()=>{let t=new r.GH;t.addScope("read:user"),await (0,r.rh)((0,i.l)(),t).catch(t=>(console.error("Error during sign-in:",t),null))},logout=async()=>{await (0,i.l)().signOut()},checkIfNewUser=async t=>{let e=await a.x.user.$get({query:{userID:t}});0===e.length&&await a.x.user.post({body:{userID:t}}).catch(o.F)},authWithEmail=async(t,e)=>{let n=(0,i.l)();try{let i=await (0,r.e5)(n,t,e),a=i.user.uid;await checkIfNewUser(a),console.log("ログイン成功")}catch(i){if("auth/user-not-found"!==i.code)return console.error("ログイン失敗",i),null;try{let i=await (0,r.Xb)(n,t,e),a=i.user.uid;await checkIfNewUser(a),console.log("新規登録成功")}catch(t){return console.log("新規登録失敗",t),null}}}},5547:function(t,e,n){"use strict";n.d(e,{X:function(){return r}});let r="ArMapSNS"},8256:function(t){t.exports={container:"login_container__muLWd",main:"login_main__xBhVh",title:"login_title__RHJw5",btn:"login_btn__PrM31"}}},function(t){t.O(0,[10,774,888,179],function(){return t(t.s=4498)}),_N_E=t.O()}]);