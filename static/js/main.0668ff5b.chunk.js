(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{110:function(e,t,n){e.exports={dFlex:"User_dFlex__n3smv",wrapper:"User_wrapper__13ZrS",flexColumn:"User_flexColumn__-gnQ1",alignItemCenter:"User_alignItemCenter__1SxXq",justifyContentSpaceBetween:"User_justifyContentSpaceBetween__2dJq3",alignItemStart:"User_alignItemStart__3uihU",avatar:"User_avatar__kZgOT",messageText:"User_messageText__3XzU0",sendBtn:"User_sendBtn__3jC0F",selectedPage:"User_selectedPage__3ayze",hide:"User_hide__lN18c",show:"User_show__3elsv"}},129:function(e,t,n){e.exports={dialogs:"Dialogs_dialogs__2WKCh",dialogItems:"Dialogs_dialogItems__3yCcL",dialog:"Dialogs_dialog__2Daee",messages:"Dialogs_messages__MHF9P",message:"Dialogs_message__1J1V_",messageText:"Dialogs_messageText__obrUB",active:"Dialogs_active__2GyTP",imgAvatar:"Dialogs_imgAvatar__285g3",sendBtn:"Dialogs_sendBtn__1biV9"}},132:function(e,t,n){e.exports={profile:"Profile_profile__18EnP",headImg:"Profile_headImg__1vnn7",myPost:"Profile_myPost__161li",infoUser:"Profile_infoUser__3wtr1",userImg:"Profile_userImg__3shKb",userDesc:"Profile_userDesc__AKCOl",sendBtn:"Profile_sendBtn__2DXkA"}},133:function(e,t,n){e.exports={error:"FormInputs_error__1HRrH",textRed:"FormInputs_textRed__-E7Ym"}},185:function(e,t,n){e.exports={usersAvatar:"Messages_usersAvatar__2vZrZ",imgAvatar:"Messages_imgAvatar__1-Jmg",imgLike:"Messages_imgLike__3NNoY"}},227:function(e,t,n){},311:function(e,t,n){},315:function(e,t,n){e.exports={nav:"Navbar_nav__2b8W8",navItem:"Navbar_navItem__2UtVS",active:"Navbar_active__2eo96",navSetting:"Navbar_navSetting__2SV-W"}},358:function(e,t,n){e.exports={sendBtn:"Paginator_sendBtn__2f8WW",selectedPage:"Paginator_selectedPage__1EPc_"}},359:function(e,t,n){e.exports={dFlex:"Preloader_dFlex__2REBI"}},360:function(e,t,n){e.exports={header:"Header_header__2iDiE"}},361:function(e,t,n){"use strict";n.r(t);n(227);var r=n(17),a=n(177),c=n(18),i=n.n(c),s=n(30),o=n(8),u=n(50),l=n(178),j=n.n(l).a.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"c98f6fbc-d9ff-41de-93ed-d14a024d97dc"},timeout:2e4}),d=function(e,t){try{return j.get("users?page=".concat(e,"&count=").concat(t))}catch(n){throw new Error}},b=function(e){try{return j.get("profile/".concat(e))}catch(t){throw new Error}},p=function(e){try{return j.get("profile/status/".concat(e))}catch(t){throw new Error}},g=function(e){try{return j.put("profile/status/",{status:e})}catch(t){throw new Error}},h=function(){try{return j.get("auth/me")}catch(e){throw new Error}},O=function(e,t,n){try{return j.post("auth/login",{email:e,password:t,rememberMe:n})}catch(r){throw new Error}},m=function(){try{return j.delete("auth/login")}catch(e){throw new Error}},f=function(e){try{return j.post("follow/".concat(e))}catch(t){throw new Error}},x=function(e){try{return j.delete("follow/".concat(e))}catch(t){throw new Error}},v="app/INITIALIZED_SUCCESS",_="app/SET_TIME_OUT",y={initialized:!1,timeOut:!1},w=function(e){return{type:_,timeOut:e}},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return Object(o.a)(Object(o.a)({},e),{},{initialized:!0});case _:return Object(o.a)(Object(o.a)({},e),{},{timeOut:t.timeOut});default:return e}},C="auth/FOLLOW",S={authUserId:null,email:null,login:null,isAuth:!1},k=function(e,t,n,r){return{type:C,payload:{authUserId:e,login:t,email:n,isAuth:r}}},I=function(){return function(){var e=Object(s.a)(i.a.mark((function e(t){var n,r,a,c,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h();case 3:0===(n=e.sent).data.resultCode&&(r=n.data.data,a=r.id,c=r.login,s=r.email,t(k(a,c,s,!0))),t(w(!1)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),t(w(!0));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:return Object(o.a)(Object(o.a)({},e),t.payload);default:return e}},E=n(44),L="dialog/ADD-MESSAGE",T={dialogs:[{id:1,name:"Dimych",img:""},{id:2,name:"Andrey",img:""},{id:3,name:"Sveta",img:""},{id:4,name:"Sasha",img:""},{id:5,name:"Viktor",img:""},{id:6,name:"Valera",img:""}],messages:[{id:1,message:"Hey!",name:"Dimych",dialog_id:1},{id:2,message:"Hey! How are you?",name:"Me",dialog_id:1},{id:3,message:"Hey why nobody love me?",name:"Me",dialog_id:1},{id:4,message:"Hey!",name:"Sveta",dialog_id:3},{id:5,message:"Hey! How are you?",name:"Me",dialog_id:3},{id:6,message:"Hey why nobody love me?",name:"Me",dialog_id:4}]},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case L:var n={id:5,message:t.newMessage,dialog_id:t.dialogId,name:"Me"};return Object(o.a)(Object(o.a)({},e),{},{messages:[].concat(Object(E.a)(e.messages),[n])});default:return e}},M="profile/ADD-POST",U="profile/INCREMENT_LIKE",A="profile/DECREMENT_LIKE",D="profile/TOGGLE_IS_FETCHING",z="profile/SET_USER_PROFILE",H="profile/SET_STATUS",q="profile/SET_TIME_OUT",R={posts:[{id:1,userMessage:"Hey, why nobody love me?",likeCount:5},{id:2,userMessage:"It's our new Program! Hey!",likeCount:10}],profile:null,isFetching:!0,status:"",timeOut:!1},W=function(e){return{type:D,isFetching:e}},B=function(e){return{type:H,status:e}},Y=function(e){return{type:q,timeOut:e}},G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case M:var n={id:5,userMessage:t.newPost,likeCount:0};return Object(o.a)(Object(o.a)({},e),{},{posts:[].concat(Object(E.a)(e.posts),[n])});case U:var r=Object(o.a)({},e);return r.posts=Object(E.a)(e.posts),r.posts.forEach((function(e){e.id==t.id&&(e.likeCount+=1)})),r;case A:var a=Object(o.a)({},e);return a.posts=Object(E.a)(e.posts),a.posts.forEach((function(e){e.id==t.id&&(e.likeCount-=1)})),a;case D:return Object(o.a)(Object(o.a)({},e),{},{isFetching:t.isFetching});case z:return Object(o.a)(Object(o.a)({},e),{},{profile:t.data});case H:return Object(o.a)(Object(o.a)({},e),{},{status:t.status});case q:return Object(o.a)(Object(o.a)({},e),{},{timeOut:t.timeOut});default:return e}},K=function(e,t,n,r){return e.map((function(e){return e[t]==n?Object(o.a)(Object(o.a)({},e),r):e}))},V="users/FOLLOW",J="users/UNFOLLOW",X="users/SET_USERS",Z="users/SET_CURRENT_PAGE",Q="users/SET_TOTAL_COUNT",$="users/SET_IS_FETCHING",ee="users/SET_IS_FOLLOWING_PROGRESS",te="users/SET_TIME_OUT",ne={users:[],currentPage:1,totalItemsCount:0,pageSize:4,isFetching:!1,isFollowingProgress:[],timeOut:!1},re=function(e){return{type:V,userId:e}},ae=function(e){return{type:J,userId:e}},ce=function(e){return{type:Z,currentPage:e}},ie=function(e){return{type:$,isFetching:e}},se=function(e,t){return{type:ee,isFollowingProgress:e,userId:t}},oe=function(e){return{type:te,timeOut:e}},ue=function(){var e=Object(s.a)(i.a.mark((function e(t,n,r,a){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(se(!0,n)),e.next=4,r(n);case 4:0===e.sent.data.resultCode&&t(a(n)),t(se(!1,n)),t(oe(!1)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),t(oe(!0));case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t,n,r,a){return e.apply(this,arguments)}}(),le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case V:return Object(o.a)(Object(o.a)({},e),{},{users:K(e.users,"id",t.userId,{followed:!0})});case J:return Object(o.a)(Object(o.a)({},e),{},{users:K(e.users,"id",t.userId,{followed:!1})});case X:return Object(o.a)(Object(o.a)({},e),{},{users:t.data});case Z:return Object(o.a)(Object(o.a)({},e),{},{currentPage:t.currentPage});case Q:return Object(o.a)(Object(o.a)({},e),{},{totalItemsCount:t.totalItemsCount});case $:return Object(o.a)(Object(o.a)({},e),{},{isFetching:t.isFetching});case ee:return Object(o.a)(Object(o.a)({},e),{},{isFollowingProgress:t.isFollowingProgress?[].concat(Object(E.a)(e.isFollowingProgress),[t.userId]):e.isFollowingProgress.filter((function(e){return e!=t.userId}))});case te:return Object(o.a)(Object(o.a)({},e),{},{timeOut:t.timeOut});default:return e}},je=n(176),de=Object(r.c)({profilePage:G,dialogsPage:N,usersPage:le,auth:F,app:P,form:je.a}),be=Object(r.e)(de,Object(r.a)(a.a));window.store=be;var pe=n(0),ge=n.n(pe),he=n(16),Oe=n.n(he),me=(n(311),n(15)),fe=n(58),xe=n(20),ve=(n(315),n(388)),_e=n(391),ye=n(392),we=n(402),Pe=n(363),Ce=n(136),Se=n.n(Ce),ke=n(137),Ie=n.n(ke),Fe=n(138),Ee=n.n(Fe),Le=n(393),Te=n(394),Ne=n(395),Me=n(1),Ue=["component","to","fullWidth","setValuebutton","valuebutton"],Ae=function(e){var t=e.component,n=e.to,r=e.fullWidth,a=(e.setValuebutton,e.valuebutton,Object(fe.a)(e,Ue)),c=a.pathName===a.text.toLowerCase();return Object(Me.jsx)(ve.a,{component:t,to:n,fullWidth:r,children:Object(Me.jsxs)(_e.a,{container:!0,alignItems:"center",spacing:2,children:[Object(Me.jsx)(_e.a,{item:!0,children:a.icon}),Object(Me.jsx)(_e.a,{item:!0,children:Object(Me.jsx)(ye.a,{color:c?"primary":"textPrimary",children:a.text})})]})})},De=function(e){var t;e.setValuebutton;switch(e.pathName){case"profile":t=0;break;case"messages":t=1;break;case"users":t=2;break;default:t=0}return Object(Me.jsx)(we.a,{display:{xs:"block",sm:"block",md:"none",lg:"none",xl:"none"},children:Object(Me.jsx)(Le.a,{position:"fixed",color:"primary",style:{top:"auto",bottom:0},children:Object(Me.jsxs)(Te.a,{value:t,showLabels:!0,children:[Object(Me.jsx)(Ne.a,{component:xe.b,to:"/profile",label:"Profile",icon:Object(Me.jsx)(Se.a,{})}),Object(Me.jsx)(Ne.a,{component:xe.b,to:"/messages",label:"Messages",icon:Object(Me.jsx)(Ie.a,{})}),Object(Me.jsx)(Ne.a,{component:xe.b,to:"/users",label:"Users",icon:Object(Me.jsx)(Ee.a,{})})]})})})},ze=function(e){var t=e.location.pathname.replace("/","");return Object(Me.jsxs)(Me.Fragment,{children:[Object(Me.jsx)(we.a,{display:{xs:"none",sm:"none",md:"block"},children:Object(Me.jsx)(Pe.a,{elevation:4,children:Object(Me.jsxs)(we.a,{paddingX:1,paddingY:2,children:[Object(Me.jsx)(we.a,{paddingX:1,paddingBottom:1,children:Object(Me.jsx)(ye.a,{variant:"h6",children:"Menu"})}),Object(Me.jsx)(Ae,{text:"Profile",icon:Object(Me.jsx)(Se.a,{color:"primary"}),pathName:t,component:xe.b,to:"/profile",fullWidth:!0}),Object(Me.jsx)(Ae,{text:"Messages",icon:Object(Me.jsx)(Ie.a,{color:"primary"}),pathName:t,component:xe.b,to:"/messages",fullWidth:!0}),Object(Me.jsx)(Ae,{text:"Users",icon:Object(Me.jsx)(Ee.a,{color:"primary"}),pathName:t,component:xe.b,to:"/users",fullWidth:!0})]})})}),Object(Me.jsx)(De,{pathName:t})]})},He=n(23),qe=Object(r.d)(Object(me.b)((function(e){return{}}),{}),He.f)((function(e){return Object(Me.jsx)(ze,Object(o.a)({},e))})),Re=n(54),We=n(75),Be=n(57),Ye=n(56),Ge=function(e){return{isAuth:e.auth.isAuth}};n(129);var Ke=n(396),Ve=n(406),Je=Object(Ke.a)((function(e){return{bgLightGreen:{backgroundColor:"rgba(104, 179, 107, 0.3)",borderColor:"rgba(104, 179, 107, 0.3)"}}})),Xe=function(e){var t=Je(),n="Me"==e.message.name;return Object(Me.jsx)(_e.a,{container:!0,justifyContent:n?"flex-start":"flex-end",children:Object(Me.jsx)(we.a,{pb:3,children:Object(Me.jsxs)(_e.a,{container:!0,alignItems:"center",spacing:1,children:[n?Object(Me.jsx)(_e.a,{item:!0,children:Object(Me.jsx)(Ve.a,{alt:"avatar",src:"https://imagine-lab.enpc.fr/wp-content/uploads/EuDMTYL9805PPka2gquKHS7qh.png"})}):null,Object(Me.jsx)(_e.a,{item:!0,children:Object(Me.jsx)(we.a,{p:1,className:n?t.bgLightGreen:"",border:2,borderRadius:12,borderColor:n?"":"grey.500",children:Object(Me.jsx)(ye.a,{variant:"body2",children:e.message.message})})}),n?null:Object(Me.jsx)(_e.a,{item:!0,children:Object(Me.jsx)(Ve.a,{alt:"avatar",src:"https://imagine-lab.enpc.fr/wp-content/uploads/EuDMTYL9805PPka2gquKHS7qh.png"})})]})})})},Ze=Object(Ke.a)((function(e){return{small:{width:e.spacing(7),height:e.spacing(7)}}})),Qe=function(e){Ze();return Object(Me.jsx)(we.a,{pb:3,children:Object(Me.jsx)(xe.b,{to:"/messages/"+e.id,style:{color:"inherit"},children:Object(Me.jsxs)(_e.a,{container:!0,alignItems:"center",spacing:1,children:[Object(Me.jsx)(_e.a,{item:!0,children:Object(Me.jsx)(Ve.a,{component:"span",src:e.img?e.img:"https://imagine-lab.enpc.fr/wp-content/uploads/EuDMTYL9805PPka2gquKHS7qh.png"})}),Object(Me.jsx)(_e.a,{item:!0,children:Object(Me.jsx)(ye.a,{variant:"body2",display:"inline",children:e.name})})]})})})},$e=n(174),et=n(175),tt=n(133),nt=n.n(tt),rt=n(401),at=n(404),ct=["input","meta","type"];function it(e){var t=e.input,n=e.meta,r=e.placeholder,a=Boolean(n.touched&&n.error);return Object(Me.jsx)(rt.a,Object(o.a)(Object(o.a)({},t),{},{label:r,multiline:!0,rows:4,variant:"outlined",helperText:a?n.error:null,error:a,style:{width:"100%"}}))}function st(e){var t=e.input,n=e.meta,r=e.placeholder,a=e.type,c=Boolean(n.touched&&n.error);return Object(Me.jsx)(rt.a,Object(o.a)(Object(o.a)({},t),{},{type:a,label:r,variant:"outlined",helperText:c?n.error:null,error:c}))}var ot=function(e){var t=e.input,n=e.meta,r=(e.type,Object(fe.a)(e,ct),n.touched&&n.error);return Object(Me.jsxs)(Me.Fragment,{children:[Object(Me.jsx)(at.a,Object(o.a)(Object(o.a)({},t),{},{color:"primary",inputProps:{"aria-label":"secondary checkbox"},style:{display:"inline-block"}})),r?Object(Me.jsx)(ye.a,{variant:"body1",color:"error",children:n.error}):void 0]})},ut=function(e){if(!e)return"Field is required"},lt=function(e){return function(t){if(!(t.length>=e))return"Minimum length should be "+e}},jt=Object(Ke.a)((function(e){return{bgLightGreen:{backgroundColor:"rgba(104, 179, 107, 0.3)",borderColor:"rgba(104, 179, 107, 0.3)"}}})),dt=(lt(15),function(e){return Object(Me.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(Me.jsx)(we.a,{children:Object(Me.jsx)($e.a,{name:"message",placeholder:"New message",component:st})}),Object(Me.jsx)(we.a,{pt:2,children:Object(Me.jsx)(ve.a,{type:"submit",variant:"contained",color:"primary",children:"Send"})})]})});dt=Object(et.a)({form:"dialogForm"})(dt);var bt=Object(r.d)(Object(me.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{addMessage:function(t,n){e(function(e,t){return{type:L,newMessage:e,dialogId:t}}(t,n))}}})),(function(e){var t=function(t){Object(Be.a)(r,t);var n=Object(Ye.a)(r);function r(){return Object(Re.a)(this,r),n.apply(this,arguments)}return Object(We.a)(r,[{key:"render",value:function(){return this.props.isAuth?Object(Me.jsx)(e,Object(o.a)({},this.props)):Object(Me.jsx)(He.a,{to:"/login"})}}]),r}(ge.a.Component);return Object(me.b)(Ge)(t)}),He.f)((function(e){var t=jt(),n=e.match.params.dialogId?e.match.params.dialogId:1;return Object(Me.jsx)(we.a,{pl:{md:3},children:Object(Me.jsxs)(_e.a,{container:!0,children:[Object(Me.jsx)(_e.a,{item:!0,children:Object(Me.jsx)(we.a,{borderRight:1,borderColor:"grey.500",pr:2,children:e.dialogsPage.dialogs.map((function(e){return Object(Me.jsx)(Qe,{name:e.name,id:e.id},e.id)}))})}),Object(Me.jsx)(_e.a,{item:!0,children:Object(Me.jsxs)(we.a,{pl:2,children:[Object(Me.jsx)(we.a,{mb:2,className:t.bgLightGreen,border:2,borderRadius:12,children:Object(Me.jsx)(_e.a,{container:!0,justifyContent:"center",children:Object(Me.jsx)(we.a,{p:1,children:Object(Me.jsx)(ye.a,{variant:"h6",children:e.dialogsPage.dialogs[n-1].name})})})}),e.dialogsPage.messages.filter((function(e){return e.dialog_id==n})).map((function(e){return Object(Me.jsx)(Xe,{message:e},e.id)})),Object(Me.jsx)(dt,{onSubmit:function(t){!function(t,n){e.addMessage(t.message,n)}(t,n)}})]})})]})})}));function pt(){return Object(Me.jsx)("div",{children:"News"})}function gt(){return Object(Me.jsx)("div",{children:"Music"})}function ht(){return Object(Me.jsx)("div",{children:"Settings"})}n(358);var Ot=n(403),mt=["portionSize","pageSize","totalItemsCount"];function ft(e){e.portionSize;var t=e.pageSize,n=e.totalItemsCount,r=Object(fe.a)(e,mt),a=Math.ceil(n/t);return Object(Me.jsx)(Ot.a,{page:r.currentPage,count:a,color:"primary",siblingCount:2,onChange:function(e,t){r.onChangePage(t)}})}var xt=n(110),vt=n.n(xt),_t=["user"],yt=Object(Ke.a)((function(e){return{root:{minWidth:"200px",maxWidth:"500px",minHeight:"75px",maxHeight:"150px"},small:{width:e.spacing(7),height:e.spacing(7)}}})),wt=function(e){var t=e.followed,n=e.follow,r=e.unFollow,a=e.userId,c=e.isFollowingProgress;return Object(Me.jsx)(ve.a,{disabled:c.some((function(e){return e===a})),style:{width:"120px"},variant:"contained",color:"primary",onClick:function(){t?r(a):n(a)},children:t?"Un follow":"Follow"})},Pt=function(e){return Object(Me.jsxs)(_e.a,{container:!0,spacing:1,children:[Object(Me.jsx)(_e.a,{item:!0,children:Object(Me.jsx)(we.a,{fontWeight:"fontWeightBold",component:"span",children:e.infoName})}),Object(Me.jsx)(_e.a,{item:!0,children:e.text})]})},Ct=function(e){var t=e.user,n=Object(fe.a)(e,_t),r=yt();return Object(Me.jsx)(we.a,{pb:2,mb:1,children:Object(Me.jsx)(Pe.a,{elevation:2,children:Object(Me.jsx)(we.a,{p:2,children:Object(Me.jsxs)(_e.a,{container:!0,spacing:2,alignItems:"center",children:[Object(Me.jsx)(_e.a,{item:!0,children:Object(Me.jsxs)(_e.a,{container:!0,direction:"column",alignItems:"center",spacing:1,children:[Object(Me.jsx)(_e.a,{item:!0,children:Object(Me.jsx)(xe.b,{to:"/profile/".concat(t.id),children:Object(Me.jsx)(Ve.a,{className:r.small,src:null!=t.photos.small?t.photos.small:"https://imagine-lab.enpc.fr/wp-content/uploads/EuDMTYL9805PPka2gquKHS7qh.png",alt:"avatar"})})}),Object(Me.jsx)(_e.a,{item:!0,children:Object(Me.jsx)(wt,{followed:t.followed,follow:n.follow,unFollow:n.unFollow,userId:t.id,isFollowingProgress:n.isFollowingProgress})})]})}),Object(Me.jsxs)(_e.a,{item:!0,children:[Object(Me.jsx)(Pt,{infoName:"Name:",text:t.name}),Object(Me.jsx)(Pt,{infoName:"Country:",text:"user.location.country"}),Object(Me.jsx)(Pt,{infoName:"City:",text:"user.location.city"}),Object(Me.jsx)(Pt,{infoName:"Status:",text:null!=t.status?t.status:"status"})]})]})})})})},St=function(e){return Object(Me.jsxs)(we.a,{pl:{md:3},pb:6,pt:1,className:e.isFetching?vt.a.hide:vt.a.show,children:[Object(Me.jsx)(_e.a,{container:!0,justifyContent:"center",children:Object(Me.jsx)(we.a,{pb:2,children:Object(Me.jsx)(ft,{onChangePage:e.onChangePage,currentPage:e.currentPage,pageSize:e.pageSize,totalItemsCount:e.totalPageCount,setCurrentPage:e.setCurrentPage})})}),e.users.map((function(t){return Object(Me.jsx)(Ct,{isFollowingProgress:e.isFollowingProgress,user:t,follow:e.follow,unFollow:e.unFollow},t.id)}))]})},kt=n.p+"static/media/opentime_from_png_20fps.366dd217.gif";n(359);function It(){return Object(Me.jsx)(_e.a,{container:!0,justifyContent:"center",alignItems:"center",children:Object(Me.jsx)("img",{src:kt,width:"500",alt:"Preloader"})})}var Ft=n(68),Et=Object(Ft.a)((function(e){return e.usersPage.users}),(function(e){return e})),Lt=Object(Ft.a)((function(e){return e.usersPage.pageSize}),(function(e){return e})),Tt=Object(Ft.a)((function(e){return e.usersPage.totalItemsCount}),(function(e){return e})),Nt=Object(Ft.a)((function(e){return e.usersPage.currentPage}),(function(e){return e})),Mt=Object(Ft.a)((function(e){return e.usersPage.isFetching}),(function(e){return e})),Ut=Object(Ft.a)((function(e){return e.usersPage.isFollowingProgress}),(function(e){return e})),At=n(184),Dt=n.n(At),zt=Object(Ke.a)((function(e){return{large:{width:e.spacing(15),height:e.spacing(15)}}})),Ht=function(e){var t=zt(),n=e.args?e.args:[];return Object(Me.jsxs)(_e.a,{container:!0,direction:"column",alignItems:"center",justifyContent:"center",children:[Object(Me.jsx)(Dt.a,{color:"primary",className:"".concat(t.large," ").concat(t.mainColor)}),Object(Me.jsx)(we.a,{pt:2,children:Object(Me.jsx)(ve.a,{variant:"contained",color:"primary",onClick:function(){e.reset.apply(e,Object(E.a)(n))},children:"Reset"})})]})},qt=function(e){Object(Be.a)(n,e);var t=Object(Ye.a)(n);function n(){var e;Object(Re.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).onChangePage=function(t){e.props.requestUsers(t,e.props.pageSize)},e.render=function(){return e.props.timeOut?Object(Me.jsx)(Ht,{reset:e.props.requestUsers,args:[e.props.currentPage,e.props.pageSize]}):Object(Me.jsxs)(Me.Fragment,{children:[e.props.isFetching?Object(Me.jsx)(It,{}):null,Object(Me.jsx)(St,{isFetching:e.props.isFetching,totalPageCount:e.props.totalPageCount,pageSize:e.props.pageSize,currentPage:e.props.currentPage,users:e.props.users,onChangePage:e.onChangePage,follow:e.props.follow,unFollow:e.props.unFollow,isFollowingProgress:e.props.isFollowingProgress,setCurrentPage:e.props.setCurrentPage},e.props.id)]})},e}return Object(We.a)(n,[{key:"componentDidMount",value:function(){this.props.requestUsers(this.props.currentPage,this.props.pageSize)}}]),n}(ge.a.Component),Rt=Object(r.d)(Object(me.b)((function(e){return{users:Et(e),pageSize:Lt(e),totalPageCount:Tt(e),currentPage:Nt(e),isFetching:Mt(e),isFollowingProgress:Ut(e),timeOut:e.usersPage.timeOut}}),{requestUsers:function(e,t){return function(){var n=Object(s.a)(i.a.mark((function n(r){var a;return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,r(ie(!0)),r(ce(e)),n.next=5,d(e,t);case 5:a=n.sent,r(ie(!1)),r((i=a.data.items,{type:X,data:i})),r((c=a.data.totalCount,{type:Q,totalItemsCount:c})),r(oe(!1)),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(0),r(oe(!0));case 15:case"end":return n.stop()}var c,i}),n,null,[[0,12]])})));return function(e){return n.apply(this,arguments)}}()},unFollow:function(e){return function(){var t=Object(s.a)(i.a.mark((function t(n){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:ue(n,e,x,ae);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},follow:function(e){return function(){var t=Object(s.a)(i.a.mark((function t(n){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:ue(n,e,f,re);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:ce}))(qt),Wt=n(92),Bt=n(185),Yt=n.n(Bt),Gt=n(398),Kt=n(407),Vt=n(186),Jt=n.n(Vt),Xt=n(187),Zt=n.n(Xt),Qt=function(e){var t=e.click,n=e.id,r=e.incrementLike,a=e.decrementLike;return Object(Me.jsx)(Gt.a,{onClick:function(){t?a(n):r(n)},children:t?Object(Me.jsx)(Jt.a,{color:"primary"}):Object(Me.jsx)(Zt.a,{color:"primary"})})};function $t(e){var t=Object(pe.useState)(!1),n=Object(Wt.a)(t,2),r=n[0],a=n[1];return Object(Me.jsx)(we.a,{paddingY:2,children:Object(Me.jsxs)(_e.a,{container:!0,alignItems:"center",children:[Object(Me.jsx)(_e.a,{item:!0,children:Object(Me.jsx)("img",{className:Yt.a.imgAvatar,src:"https://imagine-lab.enpc.fr/wp-content/uploads/EuDMTYL9805PPka2gquKHS7qh.png",alt:"userAvatar"})}),Object(Me.jsx)(_e.a,{item:!0,children:e.userMessage}),Object(Me.jsx)(_e.a,{item:!0,children:Object(Me.jsx)(Kt.a,{title:"Like",children:Object(Me.jsx)(we.a,{children:Object(Me.jsx)(Qt,{click:r,incrementLike:function(t){a(!0),e.incrementLike(t)},decrementLike:function(t){a(!1),e.decrementLike(t)},id:e.id})})})}),Object(Me.jsx)(_e.a,{item:!0,children:Object(Me.jsx)(ye.a,{children:e.likeCount})})]})})}n(132);var en=lt(15),tn=function(e){return Object(Me.jsxs)("form",{onSubmit:e.handleSubmit,style:{width:"100%"},children:[Object(Me.jsx)($e.a,{name:"news",placeholder:"New post",component:it,validate:[ut,en]}),Object(Me.jsx)(we.a,{py:1,children:Object(Me.jsx)(ve.a,{variant:"contained",color:"primary",type:"submit",children:"Add post"})})]})};tn=Object(et.a)({form:"post"})(tn);var nn=function(e){return Object(Me.jsxs)(we.a,{paddingY:3,children:[Object(Me.jsx)(ye.a,{variant:"h5",children:"My posts"}),Object(Me.jsx)(we.a,{paddingY:2,children:Object(Me.jsx)(tn,{onSubmit:function(t){e.addPost(t.news)}})}),e.profilePage.posts.map((function(t){return Object(Me.jsx)($t,{id:t.id,userMessage:t.userMessage,likeCount:t.likeCount,incrementLike:e.incrementLike,decrementLike:e.decrementLike},t.id)}))]})},rn=Object(me.b)((function(e){return{profilePage:e.profilePage}}),(function(e){return{addPost:function(t){e(Object(u.a)("post")),e(function(e){return{type:M,newPost:e}}(t))},incrementLike:function(t){e(function(e){return{type:U,id:e}}(t))},decrementLike:function(t){e(function(e){return{type:A,id:e}}(t))}}}))(nn),an=Object(Ke.a)((function(e){return{large:{width:e.spacing(20),height:e.spacing(20)}}})),cn=ge.a.memo((function(e){var t=an(),n=Object(pe.useState)(!1),r=Object(Wt.a)(n,2),a=r[0],c=r[1],i=Object(pe.useState)(e.status),s=Object(Wt.a)(i,2),o=s[0],u=s[1],l=function(){c(!a),a&&e.updateStatus(o)};return Object(pe.useEffect)((function(){u(e.status)}),[e.status]),Object(Me.jsx)(we.a,{p:1,children:Object(Me.jsxs)(_e.a,{container:!0,children:[Object(Me.jsx)(_e.a,{item:!0,container:!0,xs:12,sm:5,md:4,lg:3,justifyContent:"center",children:Object(Me.jsx)(Ve.a,{className:t.large,src:e.profile.photos.large?e.profile.photos.large:"https://imagine-lab.enpc.fr/wp-content/uploads/EuDMTYL9805PPka2gquKHS7qh.png"})}),Object(Me.jsx)(_e.a,{item:!0,container:!0,direction:"column",xs:12,sm:7,md:8,lg:9,children:Object(Me.jsxs)(we.a,{paddingTop:{xs:4,sm:0},children:[Object(Me.jsx)(ye.a,{variant:"h4",children:e.profile.fullName}),Object(Me.jsx)(we.a,{p:1}),Object(Me.jsxs)(ye.a,{variant:"h6",children:["About me: ",e.profile.aboutMe?e.profile.aboutMe:"No"]}),Object(Me.jsxs)(ye.a,{variant:"h6",children:["Looking for job: ",e.profile.lookingForAJob?"Yes":"No"]}),Object(Me.jsxs)(ye.a,{variant:"h6",children:["Looking for job description: ",e.profile.lookingForAJobDescription?e.profile.lookingForAJobDescription:"No"]}),Object(Me.jsxs)(ye.a,{variant:"h6",children:["Web Site: ",e.profile.contacts.website?Object(Me.jsx)("a",{href:"http://".concat(e.profile.contacts.website),children:e.profile.contacts.website}):"No"]}),Object(Me.jsx)("div",{children:Object(Me.jsxs)(ye.a,{children:["Status:",a?Object(Me.jsx)("input",{onChange:function(e){!function(e){u(e.currentTarget.value)}(e)},onBlur:function(){l()},autoFocus:!0,type:"text",value:o}):Object(Me.jsx)("span",{onDoubleClick:function(){l()},children:e.status?e.status:"-----"})]})})]})})]})})})),sn=Object(me.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status}}),{updateStatus:function(e){return function(){var t=Object(s.a)(i.a.mark((function t(n){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,g(e);case 3:t.sent,n(B(e)),n(Y(!1)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),n(Y(!0));case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()}})(cn),on=function(e){return Object(Me.jsx)(we.a,{pl:{md:3},children:Object(Me.jsxs)(we.a,{pb:5,children:[Object(Me.jsx)(sn,{}),Object(Me.jsx)(rn,{})]})})},un=Object(r.d)(Object(me.b)((function(e){return{authUserId:e.auth.authUserId,profilePage:e.profilePage}}),{getProfile:function(e){return function(){var t=Object(s.a)(i.a.mark((function t(n){var r,a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n(W(!0)),t.next=4,b(e);case 4:return r=t.sent,t.next=7,p(e);case 7:a=t.sent,n((c=r.data,{type:z,data:c})),n(B(a.data)),n(W(!1)),n(Y(!1)),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(0),n(Y(!0));case 17:case"end":return t.stop()}var c}),t,null,[[0,14]])})));return function(e){return t.apply(this,arguments)}}()}}),He.f)((function(e){var t=e.match.params.userId?e.match.params.userId:e.authUserId;return Object(pe.useEffect)((function(){t&&e.getProfile(t)}),[t]),e.profilePage.timeOut?Object(Me.jsx)(Ht,{reset:e.getProfile,args:[t]}):t?e.profilePage.isFetching?Object(Me.jsx)(It,{}):Object(Me.jsx)(on,{}):Object(Me.jsx)(He.a,{to:"/login"})})),ln=n(399),jn=n(189),dn=n.n(jn),bn=(n(360),Object(Ke.a)((function(e){return{large:{width:e.spacing(7),height:e.spacing(7)},textColorGreen:{color:e.palette.success.main}}}))),pn=function(e){var t=bn();return Object(Me.jsx)(Pe.a,{square:!0,elevation:3,children:Object(Me.jsx)(ln.a,{children:Object(Me.jsxs)(_e.a,{container:!0,justifyContent:"space-between",children:[Object(Me.jsx)(_e.a,{item:!0,children:Object(Me.jsxs)(we.a,{p:1,children:[Object(Me.jsx)(ye.a,{variant:"h3",className:t.textColorGreen,children:"Social"}),Object(Me.jsx)(ye.a,{variant:"body2",align:"right",children:"NETWORK"})]})}),Object(Me.jsx)(_e.a,{item:!0,children:e.isAuth?Object(Me.jsx)(we.a,{paddingY:1,children:Object(Me.jsxs)(_e.a,{item:!0,container:!0,alignItems:"center",spacing:1,children:[Object(Me.jsxs)(_e.a,{item:!0,children:[Object(Me.jsx)(Ve.a,{className:t.large,src:"https://imagine-lab.enpc.fr/wp-content/uploads/EuDMTYL9805PPka2gquKHS7qh.png"}),Object(Me.jsx)(ye.a,{children:e.login})]}),Object(Me.jsx)(_e.a,{item:!0,children:Object(Me.jsx)(Kt.a,{title:"Log out",children:Object(Me.jsx)(Gt.a,{onClick:function(){return e.logout()},fontSize:"large",color:"primary","aria-label":"log out",children:Object(Me.jsx)(dn.a,{})})})})]})}):Object(Me.jsx)(we.a,{paddingTop:3,children:Object(Me.jsx)(ve.a,{variant:"contained",color:"primary",children:Object(Me.jsx)(xe.b,{to:"/login",style:{color:"inherit"},children:"Login"})})})})]})})})},gn=function(e){Object(Be.a)(n,e);var t=Object(Ye.a)(n);function n(){var e;Object(Re.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).render=function(){return Object(Me.jsx)(pn,Object(o.a)({},e.props))},e}return n}(ge.a.Component),hn=Object(me.b)((function(e){return{userId:e.auth.authUserId,login:e.auth.login,isAuth:e.auth.isAuth}}),{logout:function(){return function(){var e=Object(s.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m();case 3:0===e.sent.data.resultCode&&t(k(null,null,null,!1)),t(w(!1)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),t(w(!0));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()}})(gn),On=lt(5),mn=Object(et.a)({form:"login"})((function(e){return Object(Me.jsxs)(we.a,{paddingLeft:{md:3},children:[Object(Me.jsx)(ye.a,{variant:"h4",gutterBottom:!0,children:"Login"}),Object(Me.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(Me.jsx)(we.a,{pb:2,children:Object(Me.jsx)($e.a,{type:"text",placeholder:"Login",name:"email",component:st,validate:[ut,On]})}),Object(Me.jsx)(we.a,{pb:2,children:Object(Me.jsx)($e.a,{type:"password",placeholder:"Password",name:"password",validate:[ut],component:st})}),Object(Me.jsxs)(we.a,{pb:2,children:[Object(Me.jsx)($e.a,{type:"checkbox",name:"rememberMe",component:ot}),Object(Me.jsx)(ye.a,{display:"inline",children:"Remember me"})]}),Object(Me.jsx)(we.a,{children:Object(Me.jsx)(ye.a,{className:nt.a.textRed,children:e.error})}),Object(Me.jsx)(ve.a,{variant:"contained",color:"primary",type:"submit",children:"Login"})]})]})})),fn=function(e){Object(Be.a)(n,e);var t=Object(Ye.a)(n);function n(){var e;Object(Re.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).submit=function(t){e.props.login(t.email,t.password,t.rememberMe)},e}return Object(We.a)(n,[{key:"render",value:function(){return this.props.isAuth?Object(Me.jsx)(He.a,{to:"/profile"}):Object(Me.jsx)(mn,{onSubmit:this.submit})}}]),n}(ge.a.Component),xn=Object(me.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,n){return function(){var r=Object(s.a)(i.a.mark((function r(a){var c,s;return i.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,O(e,t,n);case 3:0===(c=r.sent).data.resultCode?a(I()):(s=c.data.messages?c.data.messages[0]:"Some error",a(Object(u.b)("login",{_error:s}))),a(w(!1)),r.next=11;break;case 8:r.prev=8,r.t0=r.catch(0),a(w(!0));case 11:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(e){return r.apply(this,arguments)}}()}})(fn),vn=n(400),_n=n(190),yn=Object(_n.a)({palette:{primary:{dark:"#2e7031",main:"#43a047",light:"#68b36b"},secondary:{dark:"#47824a",main:"#66bb6a",light:"#84c887"}}}),wn=Object(me.b)((function(e){return{initialized:e.app.initialized,timeOut:e.app.timeOut}}),{initializeApp:function(){return function(){var e=Object(s.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I();case 2:return n=e.sent,e.next=5,t(n);case 5:return e.next=7,t({type:v});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})((function(e){return Object(pe.useEffect)((function(){e.initializeApp()}),[]),e.timeOut?Object(Me.jsx)(vn.a,{theme:yn,children:Object(Me.jsx)(Ht,{reset:e.initializeApp})}):e.initialized?Object(Me.jsxs)(vn.a,{theme:yn,children:[Object(Me.jsx)(hn,{}),Object(Me.jsx)(ln.a,{children:Object(Me.jsx)(we.a,{marginTop:3,children:Object(Me.jsxs)(_e.a,{container:!0,children:[Object(Me.jsx)(_e.a,{item:!0,md:3,children:Object(Me.jsx)(qe,{})}),Object(Me.jsxs)(_e.a,{item:!0,xs:12,md:9,children:[Object(Me.jsx)(He.b,{path:"/profile/:userId?",render:function(){return Object(Me.jsx)(un,{})}}),Object(Me.jsx)(He.b,{path:"/messages/:dialogId?",render:function(){return Object(Me.jsx)(bt,{})}}),Object(Me.jsx)(He.b,{path:"/users",render:function(){return Object(Me.jsx)(Rt,{})}}),Object(Me.jsx)(He.b,{path:"/login",render:function(){return Object(Me.jsx)(xn,{})}}),Object(Me.jsx)(He.b,{path:"/news",render:function(){return Object(Me.jsx)(pt,{})}}),Object(Me.jsx)(He.b,{path:"/music",render:function(){return Object(Me.jsx)(gt,{})}}),Object(Me.jsx)(He.b,{path:"/settings",render:function(){return Object(Me.jsx)(ht,{})}})]})]})})})]}):Object(Me.jsx)(It,{})}));Oe.a.render(Object(Me.jsx)(xe.a,{children:Object(Me.jsx)(me.a,{store:be,children:Object(Me.jsx)(wn,{})})}),document.getElementById("root"))}},[[361,1,2]]]);
//# sourceMappingURL=main.0668ff5b.chunk.js.map