(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[459],{4498:function(n,i,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return t(7914)}])},7914:function(n,i,t){"use strict";t.r(i),t.d(i,{default:function(){return index_page}});var e=t(5893);let GithubIcon=n=>(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:n.size,height:n.size,fill:n.fill,children:(0,e.jsx)("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})});var l=t(4076),s=t(5103),a=t(8583),c=t(7294),u=t(9854);let o=(0,s.cn)(0),r=(0,s.cn)(n=>n(o)>0),useLoading=()=>{let[n,i]=(0,a.KO)(o),[t]=(0,a.KO)(r),l=(0,c.useCallback)(()=>i(n+1),[n,i]),s=(0,c.useCallback)(()=>i(n-1),[n,i]);return{loadingElm:(0,e.jsx)(u.g,{visible:t}),addLoading:l,removeLoading:s}};var d=t(8256),_=t.n(d),index_page=()=>{let{loadingElm:n,addLoading:i,removeLoading:t}=useLoading(),loginGithub=async()=>{i(),await (0,l._u)(),t()};return(0,e.jsxs)("div",{className:_().container,children:[(0,e.jsxs)("div",{className:_().main,children:[(0,e.jsx)("div",{className:_().title,children:"ArMapSNS"}),(0,e.jsx)("div",{style:{marginTop:"16px"},onClick:loginGithub,children:(0,e.jsxs)("div",{className:_().btn,children:[(0,e.jsx)(GithubIcon,{size:18,fill:"#fff"}),(0,e.jsx)("span",{children:"Login with GitHub"})]})})]}),n]})}},4076:function(n,i,t){"use strict";t.d(i,{_u:function(){return loginWithGitHub},kS:function(){return logout}});var e=t(4857),l=t(2509);t(3483);var s=t(6819);let loginWithGitHub=async()=>{let n=new e.GH;n.addScope("read:user"),await (0,e.rh)((0,l.l)(),n).catch(s.F)},logout=async()=>{await (0,l.l)().signOut()}},8256:function(n){n.exports={container:"login_container__muLWd",main:"login_main__xBhVh",title:"login_title__RHJw5",btn:"login_btn__PrM31"}}},function(n){n.O(0,[774,888,179],function(){return n(n.s=4498)}),_N_E=n.O()}]);