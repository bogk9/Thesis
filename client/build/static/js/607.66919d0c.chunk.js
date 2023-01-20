"use strict";(self.webpackChunkforum_sample=self.webpackChunkforum_sample||[]).push([[607],{6607:function(e,n,t){t.r(n),t.d(n,{GroupAdmin:function(){return ae}});var r=t(228),i=t(3811),a=t(6871),o=t(1413),s=t(9439),u=t(5987),d=t(478),c=t(2847),l=t(9823),m=t(4244),h=t(8771),f=t(7924),p=t(2791),g=t(1134),Z=t(9434),x=t(6964),v=t(4569),j=t.n(v),b=t(9455),k="".concat(b.LB,"api/v1/groups"),C=t(9230),S=t(277),P=t(4565),y=t(6746),w=t(1091),R=(0,S.ZP)(r.Z)((function(e){e.theme;return{display:"flex",justifyContent:"space-between"}})),D=(0,S.ZP)(P.Z)({fontSize:25,fontWeight:500}),B=(0,S.ZP)(r.Z)((function(e){var n=e.theme;return{display:"flex",flex:"1",flexDirection:"column",backgroundColor:n.palette.neutral.light,padding:n.spacing(2),borderRadius:n.spacing(2),marginTop:n.spacing(2)}})),_=(0,S.ZP)(r.Z)((function(e){return{marginTop:e.theme.spacing(1),display:"flex"}})),G=(0,S.ZP)(y.Z)((function(e){return{borderRadius:e.theme.spacing(2),width:"70%"}})),I=(0,S.ZP)(w.Z)((function(e){var n=e.theme;return{borderRadius:n.spacing(4),backgroundColor:"#8361e8",marginLeft:n.spacing(2),width:"30%"}})),z=t(184),T=["openByDefault"],L=["ref"],A=function(e){var n,t,r,v=e.openByDefault,b=((0,u.Z)(e,T),(0,a.UO)().id),S=(0,p.useState)(v||!1),P=(0,s.Z)(S,2),y=P[0],w=P[1],A=(0,Z.I0)(),E=(0,p.useState)(),W=(0,s.Z)(E,2),M=W[0],q=W[1],O=(0,p.useState)(),N=(0,s.Z)(O,2),K=N[0],U=N[1],X=(0,p.useState)(),$=(0,s.Z)(X,2),H=$[0],V=$[1],F=(0,Z.v9)((function(e){return e.auth.user})),J=null===(n=(0,Z.v9)((function(e){return e.workgroups.data})))||void 0===n?void 0:n.find((function(e){return e._id==b})),Q=(0,C.$G)().t,Y=(0,g.cI)(),ee=Y.register,ne=Y.handleSubmit,te=Y.formState.errors,re=(Y.watch,Y.reset),ie=ee("name",{required:Q("editGroupData.namerequired"),minLength:{value:2,message:Q("editGroupData.nametooshort")},maxLength:{value:64,message:Q("editGroupData.nametoolong")}}),ae=ie.ref,oe=(0,u.Z)(ie,L);return(0,p.useEffect)((function(){!function(){var e={};e.name=null===J||void 0===J?void 0:J.name,re((0,o.Z)((0,o.Z)({},e),{},{name:e.name}))}()}),[F,J]),(0,z.jsxs)(B,{children:[(0,z.jsxs)(R,{children:[(0,z.jsx)(D,{children:Q("editGroupData.editgroupdata")}),(0,z.jsx)(i.Z,{onClick:function(){return w(!y)},children:y?(0,z.jsx)(c.Z,{}):(0,z.jsx)(d.Z,{})})]}),(0,z.jsxs)(m.Z,{in:y,children:[(0,z.jsx)(m.Z,{in:K||H,children:(0,z.jsx)(h.Z,{severity:H?"error":"success",action:(0,z.jsx)(i.Z,{"aria-label":"close",color:"inherit",size:"small",onClick:function(){H?V(!1):U(!1)},children:(0,z.jsx)(l.Z,{fontSize:"inherit"})}),children:K?Q("editGroupData.success"):H})}),(0,z.jsxs)(_,{component:"form",onSubmit:ne((function(e){var n,t,r;V(""),U(!1),q(!0),(n=b,t=e.name,r=F.token,j().patch("".concat(k,"/").concat(n),{name:t},{headers:{Authorization:"Bearer ".concat(r)}}).then((function(e){return Promise.resolve(e.data.data)}),(function(e){var n=e.response&&e.response.data&&e.response.data.message||e.message||e.toString();return Promise.reject(n)}))).then((function(){U(!0),A((0,x.KX)(F.token)),re()})).catch((function(e){U(!1),V(e)})).finally((function(){return q(!1)}))})),noValidate:!0,children:[(0,z.jsx)(G,(0,o.Z)((0,o.Z)({margin:"normal",required:!0,fullWidth:!0,name:"name",id:"name",placeholder:Q("editGroupData.name"),inputRef:ae},oe),{},{error:!!te.name,helperText:null===te||void 0===te||null===(t=te.name)||void 0===t?void 0:t.message})),(0,z.jsx)(I,{type:"submit",fullWidth:!0,variant:"contained",disabled:M,disableElevation:!0,children:Q("editGroupData.submit")})]}),(0,z.jsx)(f.Z,{error:!0,children:null===te||void 0===te||null===(r=te.name)||void 0===r?void 0:r.message})]})]})},E=t(853),W="".concat(b.LB,"api/v1/groups"),M=(0,S.ZP)(r.Z)((function(e){e.theme;return{display:"flex",justifyContent:"space-between"}})),q=(0,S.ZP)(P.Z)({fontSize:25,fontWeight:500}),O=(0,S.ZP)(r.Z)((function(e){var n=e.theme;return{display:"flex",flex:"1",flexDirection:"column",backgroundColor:n.palette.neutral.light,padding:n.spacing(2),borderRadius:n.spacing(2),marginTop:n.spacing(2)}})),N=((0,S.ZP)(y.Z)((function(e){return{borderRadius:e.theme.spacing(2),".MuiInputBase-inputAdornedEnd":{backgroundColor:"lightgreen",borderTopRightRadius:0,borderBottomRightRadius:0},".MuiInputAdornment-positionEnd":{alignSelf:"stretch",maxHeight:"100%",height:"inherit"}}})),(0,S.ZP)(y.Z)((function(e){return{borderRadius:e.theme.spacing(2),width:"70%"}})),(0,S.ZP)(w.Z)((function(e){var n=e.theme;return{borderRadius:n.spacing(4),backgroundColor:"#8361e8",marginLeft:n.spacing(2),width:"30%"}})),["openByDefault"]),K=function(e){var n,t=e.openByDefault,o=((0,u.Z)(e,N),(0,a.UO)().id),l=(0,p.useState)(t||!1),h=(0,s.Z)(l,2),f=h[0],g=h[1],v=null===(n=(0,Z.v9)((function(e){return e.workgroups.data})))||void 0===n?void 0:n.find((function(e){return e._id==o})),b=(0,Z.v9)((function(e){return e.auth.user})),k=(0,C.$G)().t,S=(0,Z.I0)(),P=(0,p.useMemo)((function(){return[{field:"_id",headerName:"ID",width:90},{field:"name",headerName:k("editGroupMembers.name"),width:100},{field:"email",headerName:"E-mail",width:150},{field:"action",headerName:k("editGroupMembers.action"),sortable:!1,renderCell:function(e){var n=e.api,t={};n.getAllColumns().filter((function(e){return"__check__"!==e.field&&!!e})).forEach((function(n){return t[n.field]=e.row[n.field]}));var r=t._id===b._id;return(0,z.jsx)(w.Z,{disabled:r,onClick:function(e){var n,r,i;e.stopPropagation(),(n=v._id,r=t._id,i=b.token,j().post("".concat(W,"/").concat(n,"/kick-user/").concat(r),{},{headers:{Authorization:"Bearer ".concat(i)}}).then((function(e){return Promise.resolve(e.data.data)}),(function(e){var n=e.response&&e.response.data&&e.response.data.message||e.message||e.toString();return Promise.reject(n)}))).then((function(){return S((0,x.KX)(b.token))}))},children:k("editGroupMembers.kickuser")})}}]}),[v]);return(0,z.jsxs)(O,{children:[(0,z.jsxs)(M,{children:[(0,z.jsx)(q,{children:k("editGroupMembers.editgroupmembers")}),(0,z.jsx)(i.Z,{onClick:function(){return g(!f)},children:f?(0,z.jsx)(c.Z,{}):(0,z.jsx)(d.Z,{})})]}),(0,z.jsx)(m.Z,{in:f,children:(0,z.jsx)(r.Z,{sx:{height:300},children:(0,z.jsx)(E._,{sx:{borderRadius:4,marginTop:1},getRowId:function(e){return e._id},rows:(null===v||void 0===v?void 0:v.members)||[],columns:P,pageSize:4,rowsPerPageOptions:[4],checkboxSelection:!0,disableSelectionOnClick:!0})})})]})},U=t(9760),X=(0,S.ZP)(P.Z)({fontSize:25,fontWeight:500}),$=t(8254),H="".concat(b.LB,"api/v1/classes"),V=(0,S.ZP)(r.Z)((function(e){e.theme;return{display:"flex",justifyContent:"space-between"}})),F=(0,S.ZP)(P.Z)({fontSize:25,fontWeight:500}),J=(0,S.ZP)(r.Z)((function(e){var n=e.theme;return{display:"flex",flex:"1",flexDirection:"column",backgroundColor:n.palette.neutral.light,padding:n.spacing(2),borderRadius:n.spacing(2),marginTop:n.spacing(2)}})),Q=(0,S.ZP)(y.Z)((function(e){return{borderRadius:e.theme.spacing(2),".MuiInputBase-inputAdornedEnd":{backgroundColor:"lightgreen",borderTopRightRadius:0,borderBottomRightRadius:0},".MuiInputAdornment-positionEnd":{alignSelf:"stretch",maxHeight:"100%",height:"inherit"}}})),Y=(0,S.ZP)(y.Z)((function(e){return{borderRadius:e.theme.spacing(2),width:"70%"}})),ee=(0,S.ZP)(r.Z)((function(e){var n=e.theme;return{marginTop:n.spacing(1),marginBottom:n.spacing(1),display:"flex"}})),ne=(0,S.ZP)(w.Z)((function(e){var n=e.theme;return{borderRadius:n.spacing(4),backgroundColor:"#8361e8",marginLeft:n.spacing(2),width:"30%"}})),te=["openByDefault"],re=["ref"];function ie(e){var n,t=e.openByDefault,r=((0,u.Z)(e,te),(0,p.useState)(!1)),a=(0,s.Z)(r,2),f=a[0],v=a[1],b=(0,p.useState)(!1),k=(0,s.Z)(b,2),S=k[0],y=k[1],R=(0,p.useState)(""),D=(0,s.Z)(R,2),B=D[0],_=D[1],G=(0,p.useState)(""),I=(0,s.Z)(G,2),T=I[0],L=I[1],A=(0,p.useState)(t||!1),E=(0,s.Z)(A,2),W=E[0],M=E[1],q=(0,Z.v9)((function(e){return e.auth.user.token})),O=(0,Z.I0)(),N=(0,C.$G)().t,K=(0,g.cI)(),U=K.register,X=K.handleSubmit,ie=K.formState.errors,ae=(K.watch,K.reset),oe=U("name",{required:N("addClass.namerequired"),minLength:{value:2,message:N("addClass.nametooshort")},maxLength:{value:64,message:N("addClass.nametoolong")}}),se=oe.ref,ue=(0,u.Z)(oe,re),de=function(e,n){"error"==e?_(n):y(!0),setTimeout((function(){return"error"==e?_(""):y(!1)}),2500)};return(0,z.jsx)(p.Fragment,{children:(0,z.jsxs)(J,{children:[(0,z.jsxs)(V,{children:[(0,z.jsx)(F,{children:N("addClass.createnewclass")}),(0,z.jsx)(i.Z,{onClick:function(){return M(!W)},children:W?(0,z.jsx)(c.Z,{}):(0,z.jsx)(d.Z,{})})]}),(0,z.jsxs)(m.Z,{in:W,children:[(0,z.jsx)(m.Z,{in:S||B,children:(0,z.jsx)(h.Z,{severity:B?"error":"success",action:(0,z.jsx)(i.Z,{"aria-label":"close",color:"inherit",size:"small",onClick:function(){B?_(!1):y(!1)},children:(0,z.jsx)(l.Z,{fontSize:"inherit"})}),children:S?N("addClass.success"):B})}),(0,z.jsxs)(ee,{component:"form",onSubmit:X((function(e){_(""),y(!1),v(!0),function(e,n){return j().post(H,{name:e},{headers:{Authorization:"Bearer ".concat(n)}}).then((function(e){return Promise.resolve(e.data.data)}),(function(e){var n=e.response&&e.response.data&&e.response.data.message||e.message||e.toString();return Promise.reject(n)}))}(e.name,q).then((function(){de("success"),L("https://blabla.com/invite/322-bfdda-sgaw"),O((0,x.KX)(q)),ae()})).catch((function(e){y(!1),de("error",e)})).finally((function(){return v(!1)}))})),noValidate:!0,children:[(0,z.jsx)(Y,(0,o.Z)((0,o.Z)({margin:"normal",required:!0,fullWidth:!0,name:"name",id:"name",placeholder:N("addClass.name"),inputRef:se},ue),{},{error:!!ie.name,helperText:null===ie||void 0===ie||null===(n=ie.name)||void 0===n?void 0:n.message})),(0,z.jsx)(ne,{type:"submit",fullWidth:!0,variant:"contained",disabled:f,disableElevation:!0,children:N("addClass.submit")})]}),(0,z.jsxs)(m.Z,{in:T,children:[(0,z.jsx)(P.Z,{mt:2,mb:1,children:"Invite share link"}),(0,z.jsx)(Q,{fullWidth:!0,id:"outlined-adornment-password",InputLabelProps:{shrink:!1},value:T||"Submit the form to get your invitation link.",disabled:!0,endAdornment:(0,z.jsx)($.Z,{position:"end",children:(0,z.jsx)(w.Z,{onClick:function(){return navigator.clipboard.writeText(T)},children:"Copy"})})})]})]})]})})}var ae=function(){var e,n=(0,a.UO)().id,t=null===(e=(0,Z.v9)((function(e){return e.workgroups.data})))||void 0===e?void 0:e.find((function(e){return e._id==n})),o=(0,a.s0)();return(0,z.jsxs)(r.Z,{mt:2,children:[(0,z.jsxs)(r.Z,{sx:{display:"flex",flexDirection:"column"},children:[(0,z.jsx)(r.Z,{children:(0,z.jsx)(i.Z,{onClick:function(){return o("/manage-groups")},children:(0,z.jsx)(U.Z,{})})}),(0,z.jsxs)(r.Z,{sx:{display:"flex"},children:[(0,z.jsx)(X,{ml:1,children:"Edit group \xa0"}),(0,z.jsx)(X,{sx:{fontWeight:"400 !important"},children:null===t||void 0===t?void 0:t.name})]})]}),(0,z.jsx)(ie,{openByDefault:!0}),(0,z.jsx)(A,{}),(0,z.jsx)(K,{})]})}}}]);
//# sourceMappingURL=607.66919d0c.chunk.js.map