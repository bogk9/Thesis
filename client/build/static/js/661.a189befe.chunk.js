"use strict";(self.webpackChunkforum_sample=self.webpackChunkforum_sample||[]).push([[661],{6661:function(t,e,r){r.r(e),r.d(e,{default:function(){return Y}});var n=r(9439),a=r(4942),i=r(3366),o=r(7462),c=r(2791),u=(r(8457),r(8182)),s=r(4419),l=r(277),d=r(5513),h=r(5915),v=r(3423),f=r(5878),m=r(1217);function p(t){return(0,m.Z)("MuiAvatarGroup",t)}var g=(0,f.Z)("MuiAvatarGroup",["root","avatar"]),x=r(184),Z=["children","className","component","componentsProps","max","slotProps","spacing","total","variant"],w={small:-16,medium:null},j=(0,l.ZP)("div",{name:"MuiAvatarGroup",slot:"Root",overridesResolver:function(t,e){return(0,o.Z)((0,a.Z)({},"& .".concat(g.avatar),e.avatar),e.root)}})((function(t){var e,r=t.theme;return e={},(0,a.Z)(e,"& .".concat(h.Z.root),{border:"2px solid ".concat((r.vars||r).palette.background.default),boxSizing:"content-box",marginLeft:-8,"&:last-child":{marginLeft:0}}),(0,a.Z)(e,"display","flex"),(0,a.Z)(e,"flexDirection","row-reverse"),e})),y=(0,l.ZP)(v.Z,{name:"MuiAvatarGroup",slot:"Avatar",overridesResolver:function(t,e){return e.avatar}})((function(t){var e=t.theme;return{border:"2px solid ".concat((e.vars||e).palette.background.default),boxSizing:"content-box",marginLeft:-8,"&:last-child":{marginLeft:0}}})),b=c.forwardRef((function(t,e){var r,n=(0,d.Z)({props:t,name:"MuiAvatarGroup"}),a=n.children,l=n.className,h=n.component,v=void 0===h?"div":h,f=n.componentsProps,m=void 0===f?{}:f,g=n.max,b=void 0===g?5:g,C=n.slotProps,k=void 0===C?{}:C,L=n.spacing,R=void 0===L?"medium":L,E=n.total,A=n.variant,M=void 0===A?"circular":A,P=(0,i.Z)(n,Z),S=b<2?2:b,T=(0,o.Z)({},n,{max:b,spacing:R,component:v,variant:M}),z=function(t){var e=t.classes;return(0,s.Z)({root:["root"],avatar:["avatar"]},p,e)}(T),N=c.Children.toArray(a).filter((function(t){return c.isValidElement(t)})),X=E||N.length;X===S&&(S+=1),S=Math.min(X+1,S);var Y=Math.min(N.length,S-1),D=Math.max(X-S,X-Y,0),B=R&&void 0!==w[R]?w[R]:-R,G=null!=(r=k.additionalAvatar)?r:m.additionalAvatar;return(0,x.jsxs)(j,(0,o.Z)({as:v,ownerState:T,className:(0,u.Z)(z.root,l),ref:e},P,{children:[D?(0,x.jsxs)(y,(0,o.Z)({ownerState:T,variant:M},G,{className:(0,u.Z)(z.avatar,null==G?void 0:G.className),style:(0,o.Z)({marginLeft:B},null==G?void 0:G.style),children:["+",D]})):null,N.slice(0,Y).reverse().map((function(t,e){return c.cloneElement(t,{className:(0,u.Z)(t.props.className,z.avatar),style:(0,o.Z)({marginLeft:e===Y-1?void 0:B},t.props.style),variant:t.props.variant||M})}))]}))})),C=r(3811),k=r(4244),L=r(228),R=r(9594),E=r(478),A=r(2847),M=r(4428),P=r(9455),S=r(4565),T=(0,l.ZP)(L.Z)((function(t){t.theme;return{display:"flex",justifyContent:"space-between"}})),z=(0,l.ZP)(S.Z)((function(t){return{fontSize:25,fontWeight:500,color:t.theme.palette.text.primary}})),N=(0,l.ZP)(L.Z)((function(t){var e=t.theme;return{display:"flex",flex:"1",flexDirection:"column",backgroundColor:e.palette.neutral.light,padding:e.spacing(2),borderRadius:e.spacing(2),marginTop:e.spacing(2)}}));function X(t,e){var r=(new Date).getTime();return function(){var n=(new Date).getTime();n-r>=e&&(r=n,t.apply(null,arguments))}}var Y=function(){var t=(0,c.useState)(!0),e=(0,n.Z)(t,2),r=e[0],a=e[1],i=(0,c.useRef)(!1),o=(0,c.useRef)({color:"black"}),u=(0,c.useRef)(null),s=(0,c.useRef)(null),l=(0,c.useRef)(null),d=(0,c.useRef)(null),h=function(){var t=l.current.getBoundingClientRect();u.current.width=t.width,d.current=u.current.getBoundingClientRect(),m(o.current.state,u.current,u.current.getContext("2d"))},f=function(t,e,r,n,a,i,o,c){if(o.beginPath(),o.moveTo(t-d.current.left,e-d.current.top),o.lineTo(r-d.current.left,n-d.current.top),o.strokeStyle=a,o.lineWidth=2,o.stroke(),o.closePath(),c){var u=i.width,l=i.height;s.current.emit("drawing",{x0:t/u,y0:e/l,x1:r/u,y1:n/l,color:a})}},m=function(t,e,r){var n=u.current.width,a=u.current.height;t.forEach((function(t){return f(t.x0*n,t.y0*a,t.x1*n,t.y1*a,t.color,e,r)}))};return(0,c.useEffect)((function(){var t=u.current,e=t.getContext("2d");function r(t){i.current=!0,o.current.x=t.clientX||t.touches[0].clientX,o.current.y=t.clientY||t.touches[0].clientY}function n(r){i.current&&(i.current=!1,f(o.current.x,o.current.y,r.clientX||r.touches[0].clientX,r.clientY||r.touches[0].clientY,o.current.color,t,e,!0))}function a(r){i.current&&(f(o.current.x,o.current.y,r.clientX||r.touches[0].clientX,r.clientY||r.touches[0].clientY,o.current.color,t,e,!0),o.current.x=r.clientX||r.touches[0].clientX,o.current.y=r.clientY||r.touches[0].clientY)}s.current=(0,M.io)(P.gp),s.current.on("previousDrawings",(function(t){o.current.state=t})),s.current.on("drawing",(function(r){return function(t,e,r){var n=u.current.width,a=u.current.height;f(t.x0*n,t.y0*a,t.x1*n,t.y1*a,t.color,e,r)}(r,t,e)})),s.current.on("clear",(function(){return o.current.state=[]})),t.addEventListener("mousedown",r,!1),t.addEventListener("mouseup",n,!1),t.addEventListener("mouseout",n,!1),t.addEventListener("mousemove",X(a,10),!1),t.addEventListener("touchstart",r,!1),t.addEventListener("touchend",n,!1),t.addEventListener("touchcancel",n,!1),t.addEventListener("touchmove",X(a,10),!1),window.addEventListener("resize",h,!1),t&&setTimeout((function(){d.current=t.getBoundingClientRect(),t.width=l.current.getBoundingClientRect().width-32,t.height=350,m(o.current.state,t,e)}),350)}),[]),(0,x.jsxs)(N,{children:[(0,x.jsxs)(T,{children:[(0,x.jsx)(z,{children:"Moodboard"}),(0,x.jsx)(C.Z,{onClick:function(){return a(!r)},children:r?(0,x.jsx)(A.Z,{}):(0,x.jsx)(E.Z,{})})]}),(0,x.jsxs)(k.Z,{in:r,children:[(0,x.jsxs)(L.Z,{mt:1,sx:{display:"flex",gap:1,alignItems:"center"},children:[(0,x.jsxs)(b,{sx:{"& .MuiAvatar-root":{width:32,height:32,fontSize:15}},max:4,children:[(0,x.jsx)(v.Z,{sx:{width:32,height:32},alt:"Remy Sharp",src:"/static/images/avatar/1.jpg"}),(0,x.jsx)(v.Z,{sx:{width:32,height:32},alt:"Travis Howard",src:"/static/images/avatar/2.jpg"}),(0,x.jsx)(v.Z,{sx:{width:32,height:32},alt:"Cindy Baker",src:"/static/images/avatar/3.jpg"}),(0,x.jsx)(v.Z,{sx:{width:32,height:32},alt:"Agnes Walker",src:"/static/images/avatar/4.jpg"}),(0,x.jsx)(v.Z,{sx:{width:32,height:32},alt:"Trevor Henderson",src:"/static/images/avatar/5.jpg"})]}),(0,x.jsx)(L.Z,{sx:{display:"flex",gap:.5},children:["red","black","lightblue"].map((function(t){return(0,x.jsx)(R.Z,{label:"",sx:{backgroundColor:t,"&&:hover":{backgroundColor:t},width:32},onClick:function(){return o.current.color=t},variant:"outlined"})}))}),(0,x.jsx)(R.Z,{label:"Clear board",onClick:function(){u.current.getContext("2d").clearRect(0,0,u.current.width,u.current.height),s.current.emit("clear",{})}})]}),(0,x.jsx)(L.Z,{mt:2,sx:{padding:2,paddingTop:0},ref:l,children:(0,x.jsx)("canvas",{className:"moodboard",ref:u})})]})]})}},478:function(t,e,r){var n=r(4836);e.Z=void 0;var a=n(r(5649)),i=r(184),o=(0,a.default)((0,i.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 12-4-4h8l-4 4z"}),"ArrowDropDownCircle");e.Z=o},2847:function(t,e,r){var n=r(4836);e.Z=void 0;var a=n(r(5649)),i=r(184),o=(0,a.default)((0,i.jsx)("path",{d:"M11.29 8.71 6.7 13.3c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 10.83l3.88 3.88c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L12.7 8.71c-.38-.39-1.02-.39-1.41 0z"}),"ExpandLessRounded");e.Z=o}}]);
//# sourceMappingURL=661.a189befe.chunk.js.map