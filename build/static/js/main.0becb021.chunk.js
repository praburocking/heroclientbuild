(this.webpackJsonpheroclient=this.webpackJsonpheroclient||[]).push([[0],{118:function(e,t,a){},119:function(e,t,a){},125:function(e,t,a){},126:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(20),c=a.n(l),o=(a(89),a(90),a(91),a(6)),s=a.n(o),i=a(33),u=a(8),m=a(130),d=a(131),h=a(74),p=a(137),E=a(75),g=a(76),b=a(132),v=a(133),f=(a(93),a(136)),y=a(138),w=a(10),N=function(e){return r.a.createElement("div",null,r.a.createElement(f.a,{variant:"pills",defaultActiveKey:"/home",className:"justify-content-end "},r.a.createElement(y.a.Brand,{style:{textAlign:"right"}},"Welcome to SuperHeros"),r.a.createElement(f.a.Item,null,r.a.createElement(f.a.Link,{as:w.b,to:"/login"}," Login")),r.a.createElement(f.a.Item,null,r.a.createElement(f.a.Link,{as:w.b,to:"/signup"},"signup"))))},O=a(9),x=a(31),j=a.n(x),_={TOKEN:"token",USERNAME:"username",ID:"id",errorResponse:[400,401,404,500]};function S(e,t,a){var n=new Date;a||(a=30),n.setTime(n.getTime()+24*a*60*60*1e3);var r="expires="+n.toUTCString();document.cookie=e+"="+t+";"+r+";path=/"}function C(e){for(var t=e+"=",a=decodeURIComponent(document.cookie).split(";"),n=0;n<a.length;n++){for(var r=a[n];" "===r.charAt(0);)r=r.substring(1);if(0===r.indexOf(t))return r.substring(t.length,r.length)}return""}function k(e){document.cookie=e+"= ; expires =Thu, 01 Jan 1970 00:00:00 GMT ;path=/"}var I=function(e){S("token",e.token,30),S("username",e.username,30),S("id",e.id)},H=function(){return{headers:{authorization:"bearer "+C("token")}}},P=function(){var e=C("token");return e||void 0},R=function(e){return{user:e.user,hero:e.hero}},L=function(e){var t={username:C("username"),token:C("token"),id:C("id")};e.dispatch({type:"USER_INIT",data:t})};a(67).config(),console.log("server url",Object({NODE_ENV:"production",PUBLIC_URL:"",REACT_APP_DEVELOPMENT_SERVER_URL:"http://localhost:3001/api/",REACT_APP_PRODUCTION_SERVER_URL:"https://prabuheros-server.herokuapp.com/api/",REACT_APP_TEST_STRIPE_PK:"pk_test_9radQ2WXLrFFlDGV0XqNMUkw00PoyDNs29",REACT_APP_PRODUCTION_STRIPE_PK:"pk_live_iyPbhH04G2xJnlJwIi4gCQPi00y2HagUM9"}));var T="https://prabuheros-server.herokuapp.com/api/",D=T+"hero",z=function(e){return console.log("loginData ",e),j.a.post("https://prabuheros-server.herokuapp.com/api/login",e).then((function(e){return e})).catch((function(e){return e.response}))},A=function(){return j.a.get(D,H()).then((function(e){return e})).catch((function(e){return e.response}))},U=function(e){return j.a.post(D,e,H()).then((function(e){return e})).catch((function(e){return e.response}))},F=function(){return j.a.post("https://prabuheros-server.herokuapp.com/api/pay",null,H()).then((function(e){return e})).catch((function(e){return e.response}))},B=a(29),G=a(128),M=function(e){return r.a.createElement(G.a,{style:{paddingTop:"100px"}},r.a.createElement("img",{width:125,height:125,className:"mr-3",src:"batman-512.png",alt:"Generic placeholder"}),r.a.createElement(G.a.Body,null,r.a.createElement("h5",null,"Meet your Heros"),r.a.createElement("p",null,"Come and Create your heros with us, you can add new heros, edit them, give power to them, create an arch enemy, view their stats on dashboard and much more...")))},J=a(129);var V=function(e){return void 0!==e.error&&e.error.show?r.a.createElement(J.a,{variant:e.error.variant,onClose:function(){return e.setError(Object(i.a)({},e.error,{show:!1}))},dismissible:!0},r.a.createElement(J.a.Heading,null,e.error.heading),r.a.createElement("p",null,e.error.content)):r.a.createElement(r.a.Fragment,null)},K=Object(B.f)(Object(O.b)((function(e){return{user:e.user,auth:e.auth,hero:e.hero}}),{login_handler:function(e){return{type:"USER_INIT",data:e}}})((function(e){var t=Object(n.useState)(""),a=Object(u.a)(t,2),l=a[0],c=a[1],o=Object(n.useState)(""),f=Object(u.a)(o,2),y=f[0],w=f[1],O=Object(n.useState)({show:!1,heading:"invalid Credentials",content:"please retry with proper Username/Password",variant:"danger"}),x=Object(u.a)(O,2),j=x[0],S=x[1],C=Object(n.useState)(!1),k=Object(u.a)(C,2),H=k[0],P=k[1];return console.log("user",e.user),r.a.createElement("div",null,r.a.createElement(N,null),r.a.createElement(m.a,null,r.a.createElement(d.a,null,r.a.createElement(h.a,{xs:12,md:7},r.a.createElement(M,null)),r.a.createElement(h.a,{xs:12,md:{offset:"0"}},r.a.createElement("div",{className:"Login"},r.a.createElement("h2",{style:{textAlign:"center"}},"LOGIN"),r.a.createElement(V,{error:j,setError:S}),console.log("error in jsx",j),r.a.createElement(p.a,{onSubmit:function(t){var a;return s.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return t.preventDefault(),P(!0),n.next=4,s.a.awrap(z({user_name:t.target.user_name.value,password:t.target.password.value}));case 4:a=n.sent,console.log("response",a),a&&_.errorResponse.includes(a.status)?401===a.status?(console.log("error"),S(Object(i.a)({},j,{show:!0})),P(!1)):(S({show:!0,heading:a.data.message,content:""}),P(!1)):a&&(I(a.data),e.login_handler(a.data),e.history.push("/"),console.log("user",e.user));case 7:case"end":return n.stop()}}))},noValidate:!0,validated:!1},r.a.createElement(E.a,{controlId:"user_name",bssize:"large"},r.a.createElement(p.a.Label,null,"User ID"),r.a.createElement(g.a,{autoFocus:!0,type:"text",value:l,name:"user_name",required:!0,onChange:function(e){return c(e.target.value)}}),r.a.createElement(p.a.Control.Feedback,{type:"invalid"},"please enter the user ID")),r.a.createElement(E.a,{controlId:"password",bssize:"large"},r.a.createElement(p.a.Label,null,"Password"),r.a.createElement(g.a,{value:y,onChange:function(e){return w(e.target.value)},type:"password",required:!0}),r.a.createElement(p.a.Control.Feedback,{type:"invalid"},"please enter the password")),r.a.createElement(b.a,{block:!0,bssize:"large",disabled:!(l.length>0&&y.length>0&&!H),type:"submit"},H&&r.a.createElement(v.a,{as:"span",animation:"border",size:"sm",role:"status","aria-hidden":"true"})," ",H&&"Logging You In",!H&&"Login")))))))}))),W=(a(118),Object(B.f)((function(e){var t=Object(n.useState)(""),a=Object(u.a)(t,2),l=a[0],c=a[1],o=Object(n.useState)(""),f=Object(u.a)(o,2),y=f[0],w=f[1],O=Object(n.useState)(""),x=Object(u.a)(O,2),S=x[0],C=x[1],k=Object(n.useState)({show:!1,heading:"Exception in Signing up",content:"",variant:"danger"}),I=Object(u.a)(k,2),H=I[0],P=I[1],R=Object(n.useState)(!1),L=Object(u.a)(R,2),T=L[0],D=L[1];return r.a.createElement("div",null,r.a.createElement(N,null),r.a.createElement(m.a,null,r.a.createElement(d.a,null,r.a.createElement(h.a,{xs:12,md:7},r.a.createElement(M,null)),r.a.createElement(h.a,{xs:12,md:5},r.a.createElement("div",{className:"Signup"},r.a.createElement("h2",{style:{textAlign:"center"}},"SIGNUP"),r.a.createElement(V,{error:H,setError:P}),r.a.createElement(p.a,{onSubmit:function(t){var a,n;return s.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return t.preventDefault(),a={user_name:t.target.name.value,email:t.target.email.value,password:t.target.password.value},D(!0),r.next=5,s.a.awrap((l=a,j.a.post("https://prabuheros-server.herokuapp.com/api/signup",l).then((function(e){return e})).catch((function(e){return e.response}))));case 5:n=r.sent,_.errorResponse.includes(n.status)?(D(!1),P(Object(i.a)({},H,{show:!0,content:n.data.message}))):n.data&&(console.log("pushing you to login"),e.history.push("/login")),console.log("response =>",n);case 8:case"end":return r.stop()}var l}))}},r.a.createElement(E.a,{controlId:"name",bssize:"large"},r.a.createElement(p.a.Label,null,"Name"),r.a.createElement(g.a,{autoFocus:!0,type:"text",name:"name",value:S,onChange:function(e){return C(e.target.value)},placeholder:"more than 4 characters"})),r.a.createElement(E.a,{controlId:"email",bssize:"large"},r.a.createElement(p.a.Label,null,"Email"),r.a.createElement(g.a,{autoFocus:!0,type:"email",value:l,onChange:function(e){return c(e.target.value)}})),r.a.createElement(E.a,{controlId:"password",bssize:"large"},r.a.createElement(p.a.Label,null,"Password"),r.a.createElement(g.a,{value:y,onChange:function(e){return w(e.target.value)},type:"password"})),r.a.createElement(b.a,{block:!0,bssize:"large",disabled:!(l.length>0&&y.length>0&&S.length>4&&!T),type:"submit"},T&&r.a.createElement(v.a,{as:"span",animation:"border",size:"sm",role:"status","aria-hidden":"true"})," ",T&&"Signing you up",!T&&"Signup")))))))}))),q=a(134),Q=function(e){return s.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.awrap(j.a.post("https://prabuheros-server.herokuapp.com/api/logout",{signout:!0},H()).then((function(e){return e})).catch((function(e){return e.response})));case 2:200===t.sent.status&&(k("token"),k("username"),k("id"),e.push("/login"));case 4:case"end":return t.stop()}}))},X=Object(B.f)(Object(O.b)(null,{heros_handler:function(e){return{type:"HERO_INIT",data:e}}})((function(e){return r.a.createElement("div",null,r.a.createElement(y.a,{bg:"primary",expand:"lg",variant:"dark"},r.a.createElement(y.a.Brand,null,r.a.createElement("img",{src:"/batman-512.png",width:"30",height:"30",className:"d-inline-block align-top",alt:"React Bootstrap logo"})," ","Heros"),r.a.createElement(y.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(y.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(f.a,{className:"mr-auto"},r.a.createElement(f.a.Link,{as:w.b,to:"/dashboard"},"DashBoard"),r.a.createElement(f.a.Link,{as:w.b,to:"/heros"},"Heros"))),e.is_search&&r.a.createElement(p.a,{inline:!0,onSubmit:function(t){var a;return s.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return t.preventDefault(),console.log("seach ",t.target.search.value),n.next=4,s.a.awrap((r=t.target.search.value,j.a.get(D+"/search?search_term="+r,H()).then((function(e){return e})).catch((function(e){return e.response}))));case 4:200===(a=n.sent).status&&(console.log(a.data),e.heros_handler(a.data));case 6:case"end":return n.stop()}var r}))}},r.a.createElement(g.a,{type:"text",name:"search",id:"search",placeholder:"Search Heros",className:"mr-sm-2"}),r.a.createElement(b.a,{variant:"outline-light",type:"submit"},"Search")),r.a.createElement(y.a.Collapse,{className:"justify-content-end"},r.a.createElement(y.a.Text,null,"Signed in as: ",r.a.createElement(w.b,{href:"",to:"/user"},e.username)," "),r.a.createElement(b.a,{variant:"danger",onClick:function(){return Q(e.history)},style:{marginLeft:"7px"}}," Sign-out"))))}))),Y=a(32),$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return"HERO_INIT"===t.type?t.data:"HERO_ADD"===t.type?e.concat(t.data):e},Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return"USER_INIT"===t.type?(console.log("action",t),t.data):e},ee=a(77),te=Object(Y.c)({hero:$,user:Z}),ae=Object(Y.d)(te,Object(Y.a)(ee.a)),ne=a(42),re=a(135),le=Object(O.b)(R,{add_hero_state:function(e){return{type:"HERO_ADD",data:e}}})((function(e){console.log("create_notes",e);return r.a.createElement(re.a,{show:e.show,onHide:e.onHide,size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0},r.a.createElement(p.a,{onSubmit:function(t){var a;return s.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return t.preventDefault(),a={name:t.target.name.value,real_name:t.target.real_name.value,power:t.target.power.value,country:t.target.country.value,color:t.target.color.value,weapon:t.target.weapons.value,arch_enemy:t.target.arch_enemy.value},n.next=4,s.a.awrap(U(a));case 4:a=n.sent,console.log("add hero ",a),e.add_hero_state(a.data),e.onHide();case 8:case"end":return n.stop()}}))}},r.a.createElement(re.a.Header,{closeButton:!0},r.a.createElement(re.a.Title,{id:"contained-modal-title-vcenter"},r.a.createElement("div",{style:{alignContent:"center"}}," Create Hero"))),r.a.createElement(re.a.Body,null,r.a.createElement(E.a,{controlId:"name",bssize:"large"},r.a.createElement(p.a.Label,null,"Name"),r.a.createElement(g.a,{autoFocus:!0,type:"text",name:"name"})," "),r.a.createElement(E.a,{controlId:"real_name",bssize:"large"},r.a.createElement(p.a.Label,null,"real name"),r.a.createElement(g.a,{autoFocus:!0,type:"text",name:"real name"})),r.a.createElement(E.a,{controlId:"power",bssize:"large"},r.a.createElement(p.a.Label,null,"power"),r.a.createElement(g.a,{name:"power",type:"text"})),r.a.createElement(E.a,{controlId:"country",bssize:"large"},r.a.createElement(p.a.Label,null,"Country"),r.a.createElement(g.a,{name:"country",type:"text"})),r.a.createElement(E.a,{controlId:"color",bssize:"large"},r.a.createElement(p.a.Label,null,"Color"),r.a.createElement(g.a,{name:"color",type:"text"})),r.a.createElement(E.a,{controlId:"weapons",bssize:"large"},r.a.createElement(p.a.Label,null,"weapons"),r.a.createElement(g.a,{name:"weapons",type:"text"})),r.a.createElement(E.a,{controlId:"arch_enemy",bssize:"large"},r.a.createElement(p.a.Label,null,"Arch Enemy"),r.a.createElement(g.a,{name:"arch_enemy",type:"text"}))),r.a.createElement(re.a.Footer,null,r.a.createElement(b.a,Object(ne.a)({variant:"success",type:"submit"},"type","submit"),"Create Hero"),r.a.createElement(b.a,{onClick:e.onHide,variant:"danger"},"Close"))))})),ce=function(e,t){t.push("/heros/"+e)},oe=Object(O.b)(R,{heros_handler:function(e){return{type:"HERO_INIT",data:e}}})(Object(B.f)((function(e){var t=Object(n.useState)(!1),a=Object(u.a)(t,2),l=a[0],c=a[1];return Object(n.useEffect)((function(){!function(e){var t;s.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,s.a.awrap(A());case 2:200===(t=a.sent).status&&(console.log("db heros ",t.data),e(t.data));case 4:case"end":return a.stop()}}))}(e.heros_handler)}),[]),console.log("props.hero ",e),r.a.createElement("div",null,r.a.createElement(X,{username:e.user.username,is_search:!0}),r.a.createElement("div",{style:{paddingTop:"15px",padding:"20px"}},r.a.createElement("div",{style:{padding:"15px"}},r.a.createElement(b.a,{className:"justify-content-end",onClick:function(){return c(!0)}},"+ New Hero")),r.a.createElement(q.a,{hover:!0,responsive:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Real Name"),r.a.createElement("th",null,"Power"),r.a.createElement("th",null,"Country"),r.a.createElement("th",null,"Color"),r.a.createElement("th",null,"Weapons"),r.a.createElement("th",null,"Arch Enemy"))),r.a.createElement("tbody",null,(void 0!==e.hero||0!==e.hero.length)&&e.hero.map((function(t){return r.a.createElement("tr",{key:t.id,onClick:function(){return ce(t.id,e.history)}},r.a.createElement("td",null,t.name),r.a.createElement("td",null,t.real_name),r.a.createElement("td",null,t.power),r.a.createElement("td",null,t.country),r.a.createElement("td",null,t.color),r.a.createElement("td",null,t.weapon),r.a.createElement("td",null,t.arch_enemy))})))),(void 0===e.hero||0===e.hero.length)&&r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement("h3",null,"Getting your heros here... ")),r.a.createElement(le,{show:l,onHide:function(){return c(!1)}})))}))),se=Object(O.b)(R)((function(e){return console.log("dash board ",e),r.a.createElement("div",null,r.a.createElement(X,{username:e.user.username,is_searh:!1}),r.a.createElement("div",{className:"d-flex justify-content-center",sytle:{alignContent:"center"}},r.a.createElement("h1",{style:{padding:"25px"}},"DashBoard is under construction, please use Heros Tab ")),r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement("img",{src:"batman-512.png",width:"300",height:"300",alt:"React Bootstrap logo"})))})),ie=(a(119),{borderRight:"2px",borderStyle:"hidden solid hidden hidden",minHeight:"100vh",maxHeight:"100vh",paddingRight:"0px"}),ue=function(e,t){t.push(e)},me=Object(O.b)(R,{heros_handler:function(e){return{type:"HERO_INIT",data:e}}})(Object(B.f)((function(e){var t=Object(n.useState)(!1),a=Object(u.a)(t,2),l=a[0],c=a[1],o=Object(n.useState)(!0),i=Object(u.a)(o,2),p=i[0],E=i[1],g=Object(n.useState)({name:!1}),v=Object(u.a)(g,2);v[0],v[1];Object(n.useEffect)((function(){e.hero!==[]&&void 0!==e.hero||function(e){var t;s.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,s.a.awrap(A());case 2:200===(t=a.sent).status&&(console.log("db heros ",t.data),e(t.data));case 4:case"end":return a.stop()}}))}(e.heros_handler)}),[]),console.log("props detail view hero ",e);var f=void 0;return e.hero&&(f=e.hero.find((function(t){return t.id===e.currentHero}))),console.log("currentHero",f),e.hero&&f?r.a.createElement("div",null,r.a.createElement(X,{username:e.user.username,is_search:!0}),r.a.createElement(d.a,{style:{paddingLeft:"20px",borderBottomStyle:"solid",borderRight:"2px"}},r.a.createElement("div",{style:{padding:"15px"}},r.a.createElement(b.a,{className:"justify-content-end",onClick:function(){return c(!0)}},"+ New Hero"))),r.a.createElement(d.a,{style:{minHight:"100vh"}},r.a.createElement(h.a,{sm:{span:3},style:ie},r.a.createElement(q.a,{hover:!0,responsive:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Real Name"))),r.a.createElement("tbody",null,(void 0!==e.hero||0!==e.hero.length)&&e.hero.map((function(t){return r.a.createElement("tr",{key:t.id,onClick:function(){return ue(t.id,e.history)}},r.a.createElement("td",null,t.name),r.a.createElement("td",null,t.real_name))}))))),r.a.createElement(h.a,{style:{background:f.color}},r.a.createElement("div",{className:"container emp-profile"},r.a.createElement("form",{method:"post"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-4"},r.a.createElement("div",{className:"profile-img"},r.a.createElement("img",{src:"/batman-512.png",width:"275",height:"183",alt:"heros"}),r.a.createElement("div",{className:"file btn btn-lg btn-primary"},"Change Photo",r.a.createElement("input",{type:"file",name:"file"})))),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"profile-head"},r.a.createElement("h4",null,f.name),r.a.createElement("h6",null,f.real_name),r.a.createElement("p",{className:"proile-rating"},"power : ",r.a.createElement("span",null,f.power)),r.a.createElement("ul",{className:"nav nav-tabs",id:"myTab",role:"tablist"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link active",id:"home-tab","data-toggle":"tab",onClick:function(){return E(!0)},role:"tab","aria-controls":"home","aria-selected":"true"},"About"))))),r.a.createElement("div",{className:"col-md-2"},r.a.createElement("input",{type:"submit",className:"profile-edit-btn",name:"btnAddMore",value:"Edit Profile"}))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-4"}),r.a.createElement("div",{className:"col-md-8"},r.a.createElement("div",{className:"tab-content profile-tab",id:"myTabContent"},p&&r.a.createElement("div",{className:"tab-pane fade show active",id:"home",role:"tabpanel","aria-labelledby":"home-tab"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("label",null,"Hero's Id")),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("p",null,f.id))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("label",null,"Country")),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("p",null,f.country))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("label",null,"Color")),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("p",null,f.color))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("label",null,"Arch-Enemy")),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("p",null,f.arch_enemy))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("label",null,"Weapons")),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("p",null,f.weapon))))))))))),r.a.createElement(le,{show:l,onHide:function(){return c(!1)}})):r.a.createElement(m.a,null,"Fetching your heros...")}))),de=a(21),he=Object(O.b)(R)((function(e){return r.a.createElement(re.a,{show:e.show,onHide:e.onHide,size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0},r.a.createElement(p.a,{onSubmit:function(t){var a,n;return s.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return t.preventDefault(),a=e.elements.getElement("card"),console.log("cardElement",a),r.next=5,s.a.awrap(F());case 5:n=r.sent,_.errorResponse.includes(n)||(console.log("response data",n),e.stripe.handleCardPayment(n.data.client_secret).then((function(e){console.log("payment response",e)})).catch((function(e){console.log("Exception ",e)})),e.onHide());case 7:case"end":return r.stop()}}))}},r.a.createElement(re.a.Header,null,"Payment"),r.a.createElement(re.a.Body,null,r.a.createElement(p.a.Group,{as:d.a,controlId:"formPlaintextEmail"},r.a.createElement(p.a.Label,{column:!0,sm:"2"},"Name"),r.a.createElement(h.a,{sm:"10"},r.a.createElement(p.a.Control,{plaintext:!0,readOnly:!0,defaultValue:e.user.username}))),r.a.createElement(de.CardElement,{style:{base:{fontSize:"18px"}}})),r.a.createElement(re.a.Footer,null,r.a.createElement(b.a,{variant:"success",type:"submit"},"pay"))))})),pe=Object(de.injectStripe)((function(e){var t=Object(n.useState)(!1),a=Object(u.a)(t,2),l=a[0],c=a[1],o=Object(n.useState)(""),i=Object(u.a)(o,2),m=i[0],d=i[1];return r.a.createElement("div",{style:{padding:"15px"}},r.a.createElement(b.a,{variant:"primary",onClick:function(){return c(!0)}},"pay"),r.a.createElement(he,{show:l,handlePay:function(){var t,a;return s.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.elements.getElement("card"),console.log("cardElement",t),n.next=4,s.a.awrap(F());case 4:a=n.sent,_.errorResponse.includes(a)||(console.log("response data",a),d(a.data.client_secret),c(!0)),e.stripe.handleCardPayment(a.data.client_secret).then((function(e){console.log("payment response",e)})).catch((function(e){console.log("Exception ",e)})),c(!1);case 8:case"end":return n.stop()}}))},onHide:function(){return c(!1)},clientKey:m,stripe:e.stripe,elements:e.elements}))})),Ee=a(79),ge=a(80),be=a(82),ve=a(81),fe=a(28),ye=a(83),we=(a(125),function(e){function t(e){var a;return Object(Ee.a)(this,t),(a=Object(be.a)(this,Object(ve.a)(t).call(this,e))).state={amount:0,currency:"",clientSecret:null,error:null,metadata:null,disabled:!1,succeeded:!1,processing:!1},a.handleSubmit=a.handleSubmit.bind(Object(fe.a)(a)),a}return Object(ye.a)(t,e),Object(ge.a)(t,[{key:"componentDidMount",value:function(){this.setState({amount:"10000",currency:"INR"})}},{key:"handleSubmit",value:function(e){var t=this;return s.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:e.preventDefault(),F().then((function(e){console.log("clientSEcret",e),t.setState({clientSecret:e.data.client_secret,disabled:!0,processing:!0}),t.props.stripe.handleCardPayment(t.state.clientSecret).then((function(e){e.error?(t.setState({error:"Payment failed: ".concat(e.error.message),disabled:!1,processing:!1}),console.log("[error]",e.error)):(t.setState({processing:!1,succeeded:!0,error:"",metadata:e.paymentIntent}),console.log("[PaymentIntent]",e.paymentIntent))}))})).catch((function(e){t.setState({error:e.message})}));case 2:case"end":return a.stop()}}))}},{key:"renderSuccess",value:function(){return r.a.createElement("div",{className:"sr-field-success message"},r.a.createElement("h1",null,"Your test payment succeeded"),r.a.createElement("p",null,"View PaymentIntent response:"),r.a.createElement("pre",{className:"sr-callout"},r.a.createElement("code",null,JSON.stringify(this.state.metadata,null,2))))}},{key:"renderForm",value:function(){return r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("h1",null,this.state.currency.toLocaleUpperCase()," ",this.state.amount.toLocaleString(navigator.language,{minimumFractionDigits:2})," "),r.a.createElement("h4",null,"Pre-order the Pasha package"),r.a.createElement("div",{className:"sr-combo-inputs"},r.a.createElement("div",{className:"sr-combo-inputs-row"},r.a.createElement("input",{type:"text",id:"name",placeholder:"Name",autoComplete:"cardholder",className:"sr-input"})),r.a.createElement("div",{className:"sr-combo-inputs-row"},r.a.createElement(de.CardElement,{className:"sr-input sr-card-element",style:{base:{color:"#32325d",fontFamily:'"Helvetica Neue", Helvetica, sans-serif',fontSmoothing:"antialiased",fontSize:"16px","::placeholder":{color:"#aab7c4"}},invalid:{color:"#fa755a",iconColor:"#fa755a"}}}))),this.state.error&&r.a.createElement("div",{className:"message sr-field-error"},this.state.error),!this.state.succeeded&&r.a.createElement("button",{className:"btn",disabled:this.state.disabled},this.state.processing?"Processing\u2026":"Pay"))}},{key:"render",value:function(){return r.a.createElement("div",{className:"checkout-form"},r.a.createElement("div",{className:"sr-payment-form"},r.a.createElement("div",{className:"sr-form-row"}),this.state.succeeded&&this.renderSuccess(),!this.state.succeeded&&this.renderForm()))}}]),t}(n.Component)),Ne=(Object(de.injectStripe)(we),Object(O.b)(R)(Object(B.f)((function(e){var t=Object(n.useState)(!1),a=Object(u.a)(t,2);a[0],a[1];return r.a.createElement("div",null,r.a.createElement(X,{username:e.user.username,is_search:!0}),r.a.createElement(de.Elements,null,r.a.createElement(pe,null)))}))));a(67).config();var Oe=function(e){return null!==ae.user&&void 0!==ae.user||(console.log("store user added"),L(ae)),r.a.createElement("div",null,r.a.createElement(de.StripeProvider,{apiKey:"pk_live_iyPbhH04G2xJnlJwIi4gCQPi00y2HagUM9"},r.a.createElement(O.a,{store:e.store},r.a.createElement(w.a,null,r.a.createElement(B.b,{exact:!0,path:"/signup",render:function(){return P()?r.a.createElement(B.a,{to:"/dashboard"}):r.a.createElement(W,null)}}),r.a.createElement(B.b,{exact:!0,path:"/login",render:function(){return P()?r.a.createElement(B.a,{to:"/dashboard"}):r.a.createElement(K,null)}}),r.a.createElement(B.b,{exact:!0,path:"/dashboard",render:function(){return P()?r.a.createElement(se,null):r.a.createElement(B.a,{to:"/login"})}}),r.a.createElement(B.b,{exact:!0,path:"/heros",render:function(){return P()?r.a.createElement(oe,null):r.a.createElement(B.a,{to:"/login"})}}),r.a.createElement(B.b,{exact:!0,path:"/",render:function(){return P()?r.a.createElement(B.a,{to:"/dashboard"}):r.a.createElement(B.a,{to:"/login"})}}),r.a.createElement(B.b,{exact:!0,path:"/heros/:id",render:function(e){var t=e.match;return P()?r.a.createElement(me,{currentHero:t.params.id}):r.a.createElement(B.a,{to:"/login"})}}),r.a.createElement(B.b,{exact:!0,path:"/user",render:function(e){e.match;return P()?r.a.createElement(Ne,null):r.a.createElement(B.a,{to:"/login"})}})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(Oe,{store:ae}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},84:function(e,t,a){e.exports=a(126)},89:function(e,t,a){},90:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},91:function(e,t,a){},93:function(e,t,a){}},[[84,1,2]]]);
//# sourceMappingURL=main.0becb021.chunk.js.map