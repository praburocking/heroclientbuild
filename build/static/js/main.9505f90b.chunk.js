(this.webpackJsonpheroclient=this.webpackJsonpheroclient||[]).push([[0],{105:function(e,t,a){},106:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(18),o=a.n(l),c=(a(75),a(76),a(77),a(7)),s=a.n(c),u=a(24),i=a(109),m=a(110),d=a(64),h=a(115),E=a(65),p=a(66),g=a(111),b=(a(79),a(114)),f=a(116),v=a(8),y=function(e){return r.a.createElement("div",null,r.a.createElement(b.a,{variant:"pills",defaultActiveKey:"/home",className:"justify-content-end "},r.a.createElement(f.a.Brand,{style:{textAlign:"right"}},"Welcome to SuperHeros"),r.a.createElement(b.a.Item,null,r.a.createElement(b.a.Link,{as:v.b,to:"/login"}," Login")),r.a.createElement(b.a.Item,null,r.a.createElement(b.a.Link,{as:v.b,to:"/signup"},"signup"))))},w=a(10),x=a(29),_=a.n(x);function O(e,t,a){var n=new Date;a||(a=30),n.setTime(n.getTime()+24*a*60*60*1e3);var r="expires="+n.toUTCString();document.cookie=e+"="+t+";"+r+";path=/"}function I(e){for(var t=e+"=",a=decodeURIComponent(document.cookie).split(";"),n=0;n<a.length;n++){for(var r=a[n];" "==r.charAt(0);)r=r.substring(1);if(0==r.indexOf(t))return r.substring(t.length,r.length)}return""}function j(e){document.cookie=e+"= ; expires =Thu, 01 Jan 1970 00:00:00 GMT ;path=/"}var k=function(e){O("token",e.token,30),O("username",e.username,30),O("id",e.id)},N=function(){return{headers:{authorization:"bearer "+I("token")}}},L=function(){var e=I("token");return e||void 0},C=function(e){return{user:e.user,hero:e.hero}},S=function(e){var t={username:I("username"),token:I("token"),id:I("id")};e.dispatch({type:"USER_INIT",data:t})};a(102).config(),console.log("server url",Object({NODE_ENV:"production",PUBLIC_URL:""}).SERVER_URL);Object({NODE_ENV:"production",PUBLIC_URL:""}).SERVER_URL;var H="https://prabuheros-server.herokuapp.com/api/"+"hero",R=function(e){return console.log("loginData ",e),_.a.post("https://prabuheros-server.herokuapp.com/api/login",e).then((function(e){return e})).catch((function(e){return e.response}))},T=function(e){return _.a.post(H,e,N()).then((function(e){return e})).catch((function(e){return e.response}))},z=a(25),D=a(108),B=function(e){return r.a.createElement(D.a,{style:{paddingTop:"100px"}},r.a.createElement("img",{width:125,height:125,className:"mr-3",src:"batman-512.png",alt:"Generic placeholder"}),r.a.createElement(D.a.Body,null,r.a.createElement("h5",null,"Meet your Heros"),r.a.createElement("p",null,"Come and Create your heros with us, you can add new heros, edit them, give power to them, create an arch enemy, view their stats on dashboard and much more...")))},U=Object(z.f)(Object(w.b)((function(e){return{user:e.user,auth:e.auth,hero:e.hero}}),{login_handler:function(e){return{type:"USER_INIT",data:e}}})((function(e){var t=Object(n.useState)(""),a=Object(u.a)(t,2),l=a[0],o=a[1],c=Object(n.useState)(""),b=Object(u.a)(c,2),f=b[0],v=b[1];return console.log("user",e.user),r.a.createElement("div",null,r.a.createElement(y,null),r.a.createElement(i.a,null,r.a.createElement(m.a,null,r.a.createElement(d.a,{xs:12,md:7},r.a.createElement(B,null)),r.a.createElement(d.a,{xs:12,md:{offset:"0"}},r.a.createElement("div",{className:"Login"},r.a.createElement("h2",{style:{textAlign:"center"}},"LOGIN"),r.a.createElement(h.a,{onSubmit:function(t){var a;return s.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return t.preventDefault(),n.next=3,s.a.awrap(R({user_name:t.target.user_name.value,password:t.target.password.value}));case 3:a=n.sent,console.log("response",a),k(a.data),e.login_handler(a.data),e.history.push("/"),console.log("user",e.user);case 9:case"end":return n.stop()}}))}},r.a.createElement(E.a,{controlId:"user_name",bssize:"large"},r.a.createElement(h.a.Label,null,"User ID"),r.a.createElement(p.a,{autoFocus:!0,type:"text",value:l,name:"user_name",onChange:function(e){return o(e.target.value)}})),r.a.createElement(E.a,{controlId:"password",bssize:"large"},r.a.createElement(h.a.Label,null,"Password"),r.a.createElement(p.a,{value:f,onChange:function(e){return v(e.target.value)},type:"password"})),r.a.createElement(g.a,{block:!0,bssize:"large",disabled:!(l.length>0&&f.length>0),type:"submit"},"Login")))))))}))),A=(a(105),Object(z.f)((function(e){var t=Object(n.useState)(""),a=Object(u.a)(t,2),l=a[0],o=a[1],c=Object(n.useState)(""),b=Object(u.a)(c,2),f=b[0],v=b[1];return r.a.createElement("div",null,r.a.createElement(y,null),r.a.createElement(i.a,null,r.a.createElement(m.a,null,r.a.createElement(d.a,{xs:12,md:7},r.a.createElement(B,null)),r.a.createElement(d.a,{xs:12,md:5},r.a.createElement("div",{className:"Signup"},r.a.createElement("h2",{style:{textAlign:"center"}},"SIGNUP"),r.a.createElement(h.a,{onSubmit:function(t){var a,n;return s.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return t.preventDefault(),a={user_name:t.target.name.value,email:t.target.email.value,password:t.target.password.value},r.next=4,s.a.awrap((l=a,_.a.post("https://prabuheros-server.herokuapp.com/api/signup",l).then((function(e){return e})).catch((function(e){return e.response}))));case 4:200===(n=r.sent).status&&(console.log("pushing you to login"),e.history.push("/login")),console.log("response =>",n);case 7:case"end":return r.stop()}var l}))}},r.a.createElement(E.a,{controlId:"name",bssize:"large"},r.a.createElement(h.a.Label,null,"Name"),r.a.createElement(p.a,{autoFocus:!0,type:"text",name:"name"})),r.a.createElement(E.a,{controlId:"email",bssize:"large"},r.a.createElement(h.a.Label,null,"Email"),r.a.createElement(p.a,{autoFocus:!0,type:"email",value:l,onChange:function(e){return o(e.target.value)}})),r.a.createElement(E.a,{controlId:"password",bssize:"large"},r.a.createElement(h.a.Label,null,"Password"),r.a.createElement(p.a,{value:f,onChange:function(e){return v(e.target.value)},type:"password"})),r.a.createElement(g.a,{block:!0,bssize:"large",disabled:!(l.length>0&&f.length>0),type:"submit"},"Signup")))))))}))),F=a(112),P=function(e){return s.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.awrap(_.a.post("https://prabuheros-server.herokuapp.com/api/logout",{signout:!0},N()).then((function(e){return e})).catch((function(e){return e.response})));case 2:200===t.sent.status&&(j("token"),j("username"),j("id"),e.push("/login"));case 4:case"end":return t.stop()}}))},G=Object(z.f)(Object(w.b)(null,{heros_handler:function(e){return{type:"HERO_INIT",data:e}}})((function(e){return r.a.createElement("div",null,r.a.createElement(f.a,{bg:"primary",expand:"lg",variant:"dark"},r.a.createElement(f.a.Brand,null,r.a.createElement("img",{src:"batman-512.png",width:"30",height:"30",className:"d-inline-block align-top",alt:"React Bootstrap logo"})," ","Heros"),r.a.createElement(f.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(f.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(b.a,{className:"mr-auto"},r.a.createElement(b.a.Link,{as:v.b,to:"/dashboard"},"DashBoard"),r.a.createElement(b.a.Link,{as:v.b,to:"/heros"},"Heros"))),e.is_search&&r.a.createElement(h.a,{inline:!0,onSubmit:function(t){var a;return s.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return t.preventDefault(),console.log("seach ",t.target.search.value),n.next=4,s.a.awrap((r=t.target.search.value,_.a.get(H+"/search?search_term="+r,N()).then((function(e){return e})).catch((function(e){return e.response}))));case 4:200===(a=n.sent).status&&(console.log(a.data),e.heros_handler(a.data));case 6:case"end":return n.stop()}var r}))}},r.a.createElement(p.a,{type:"text",name:"search",id:"search",placeholder:"Search Heros",className:"mr-sm-2"}),r.a.createElement(g.a,{variant:"outline-light",type:"submit"},"Search")),r.a.createElement(f.a.Collapse,{className:"justify-content-end"},r.a.createElement(f.a.Text,null,"Signed in as: ",r.a.createElement(v.b,{href:"",to:"/user"},e.username)," "),r.a.createElement(g.a,{variant:"danger",onClick:function(){return P(e.history)},style:{marginLeft:"7px"}}," Sign-out"))))}))),V=a(28),W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return"HERO_INIT"===t.type?t.data:"HERO_ADD"===t.type?e.concat(t.data):e},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return"USER_INIT"===t.type?(console.log("action",t),t.data):e},M=a(67),K=Object(V.c)({hero:W,user:J}),$=Object(V.d)(K,Object(V.a)(M.a)),q=a(68),Q=a(113),X=Object(w.b)(C,{add_hero_state:function(e){return{type:"HERO_ADD",data:e}}})((function(e){console.log("create_notes",e);return r.a.createElement(Q.a,{show:e.show,onHide:e.onHide,size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0},r.a.createElement(h.a,{onSubmit:function(t){var a;return s.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return t.preventDefault(),a={name:t.target.name.value,real_name:t.target.real_name.value,power:t.target.power.value,country:t.target.country.value,color:t.target.color.value,weapon:t.target.weapons.value,arch_enemy:t.target.arch_enemy.value},n.next=4,s.a.awrap(T(a));case 4:a=n.sent,console.log("add hero ",a),e.add_hero_state(a.data),e.onHide();case 8:case"end":return n.stop()}}))}},r.a.createElement(Q.a.Header,{closeButton:!0},r.a.createElement(Q.a.Title,{id:"contained-modal-title-vcenter"},r.a.createElement("div",{style:{alignContent:"center"}}," Create Hero"))),r.a.createElement(Q.a.Body,null,r.a.createElement(E.a,{controlId:"name",bssize:"large"},r.a.createElement(h.a.Label,null,"Name"),r.a.createElement(p.a,{autoFocus:!0,type:"text",name:"name"})," "),r.a.createElement(E.a,{controlId:"real_name",bssize:"large"},r.a.createElement(h.a.Label,null,"real name"),r.a.createElement(p.a,{autoFocus:!0,type:"text",name:"real name"})),r.a.createElement(E.a,{controlId:"power",bssize:"large"},r.a.createElement(h.a.Label,null,"power"),r.a.createElement(p.a,{name:"power",type:"text"})),r.a.createElement(E.a,{controlId:"country",bssize:"large"},r.a.createElement(h.a.Label,null,"Country"),r.a.createElement(p.a,{name:"country",type:"text"})),r.a.createElement(E.a,{controlId:"color",bssize:"large"},r.a.createElement(h.a.Label,null,"Color"),r.a.createElement(p.a,{name:"color",type:"text"})),r.a.createElement(E.a,{controlId:"weapons",bssize:"large"},r.a.createElement(h.a.Label,null,"weapons"),r.a.createElement(p.a,{name:"weapons",type:"text"})),r.a.createElement(E.a,{controlId:"arch_enemy",bssize:"large"},r.a.createElement(h.a.Label,null,"Arch Enemy"),r.a.createElement(p.a,{name:"arch_enemy",type:"text"}))),r.a.createElement(Q.a.Footer,null,r.a.createElement(g.a,Object(q.a)({variant:"success",type:"submit"},"type","submit"),"Create Hero"),r.a.createElement(g.a,{onClick:e.onHide,variant:"danger"},"Close"))))})),Y=Object(w.b)(C,{heros_handler:function(e){return{type:"HERO_INIT",data:e}}})((function(e){var t=Object(n.useState)(!1),a=Object(u.a)(t,2),l=a[0],o=a[1];return Object(n.useEffect)((function(){!function(e){var t;s.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,s.a.awrap(_.a.get(H,N()).then((function(e){return e})).catch((function(e){return e.response})));case 2:200===(t=a.sent).status&&(console.log("db heros ",t.data),e(t.data));case 4:case"end":return a.stop()}}))}(e.heros_handler)}),[]),console.log("props.hero ",e),r.a.createElement("div",null,r.a.createElement(G,{username:e.user.username,is_search:!0}),r.a.createElement("div",{style:{paddingTop:"15px",padding:"20px"}},r.a.createElement("div",{style:{padding:"15px"}},r.a.createElement(g.a,{className:"justify-content-end",onClick:function(){return o(!0)}},"+ New Hero")),r.a.createElement(F.a,{striped:!0,hover:!0,responsive:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Real Name"),r.a.createElement("th",null,"Power"),r.a.createElement("th",null,"Country"),r.a.createElement("th",null,"Color"),r.a.createElement("th",null,"Weapons"),r.a.createElement("th",null,"Arch Enemy"))),r.a.createElement("tbody",null,(void 0!==e.hero||0!==e.hero.length)&&e.hero.map((function(e){return r.a.createElement("tr",{key:e.id},r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.real_name),r.a.createElement("td",null,e.power),r.a.createElement("td",null,e.country),r.a.createElement("td",null,e.color),r.a.createElement("td",null,e.weapon),r.a.createElement("td",null,e.arch_enemy))})))),(void 0===e.hero||0===e.hero.length)&&r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement("h3",null,"Getting your heros here... ")),r.a.createElement(X,{show:l,onHide:function(){return o(!1)}})))})),Z=Object(w.b)(C)((function(e){return console.log("dash board ",e),r.a.createElement("div",null,r.a.createElement(G,{username:e.user.username,is_searh:!1}),r.a.createElement("div",{className:"d-flex justify-content-center",sytle:{alignContent:"center"}},r.a.createElement("h1",{style:{padding:"25px"}},"DashBoard is under construction, please use Heros Tab ")),r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement("img",{src:"batman-512.png",width:"300",height:"300",alt:"React Bootstrap logo"})))}));var ee=function(e){return null!==$.user&&void 0!==$.user||(console.log("store user added"),S($)),r.a.createElement("div",null,r.a.createElement(w.a,{store:e.store},r.a.createElement(v.a,null,r.a.createElement(z.b,{exact:!0,path:"/signup",render:function(){return L()?r.a.createElement(z.a,{to:"/dashboard"}):r.a.createElement(A,null)}}),r.a.createElement(z.b,{exact:!0,path:"/login",render:function(){return L()?r.a.createElement(z.a,{to:"/dashboard"}):r.a.createElement(U,null)}}),r.a.createElement(z.b,{exact:!0,path:"/dashboard",render:function(){return L()?r.a.createElement(Z,null):r.a.createElement(z.a,{to:"/login"})}}),r.a.createElement(z.b,{exact:!0,path:"/heros",render:function(){return L()?r.a.createElement(Y,null):r.a.createElement(z.a,{to:"/login"})}}),r.a.createElement(z.b,{exact:!0,path:"/",render:function(){return L()?r.a.createElement(z.a,{to:"/dashboard"}):r.a.createElement(z.a,{to:"/login"})}}),r.a.createElement(z.b,{exact:!0,path:"*",render:function(){return L()?r.a.createElement(z.a,{to:"/dashboard"}):r.a.createElement(z.a,{to:"/login"})}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(ee,{store:$}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},70:function(e,t,a){e.exports=a(106)},75:function(e,t,a){},76:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},77:function(e,t,a){},79:function(e,t,a){}},[[70,1,2]]]);
//# sourceMappingURL=main.9505f90b.chunk.js.map