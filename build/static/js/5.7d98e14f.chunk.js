(this["webpackJsonpbsc-proj"]=this["webpackJsonpbsc-proj"]||[]).push([[5],{47:function(t,e,n){"use strict";var c=n(20),a=n(9),r=n(0),o=n.n(r),b=n(13);function i(){var t=Object(c.a)(["\n\twidth: 50%;\n"]);return i=function(){return t},t}var u=Object(a.a)(i()),l=function(){return Object(a.b)("input",{css:u,className:"form-control",type:"text",placeholder:"What are you looking for.."})},s=n(7),O=n(12),j=n(21),d=n(52),f=n(54),p=n(53);function v(){var t=Object(c.a)(["\n\t\t> a {\n\t\t\tmargin-left: 30px;\n\t\t}\n\t"]);return v=function(){return t},t}var m=function(){var t=Object(s.g)().pathname,e=Object(r.useContext)(O.a).currentUser;console.log(t);var n=Object(a.a)(v());return Object(a.b)(o.a.Fragment,null,Object(a.b)("div",{css:n},function(){switch(t){case"/account":return Object(a.b)(o.a.Fragment,null,Object(a.b)(b.c,{activeClassName:"active",to:"/adverts"},Object(a.b)(p.a,null)," Adverts"),Object(a.b)(b.c,{activeClassName:"active",to:"/account/settings"},Object(a.b)(p.b,null)," Settings"));case"/account/settings":return Object(a.b)(o.a.Fragment,null,Object(a.b)(b.c,{activeClassName:"active",to:"/adverts"},Object(a.b)(p.a,null)," Adverts"),Object(a.b)(b.c,{activeClassName:"active",to:"/account"},Object(a.b)(d.e,null)," My account"));case"/":return Object(a.b)(o.a.Fragment,null,!e&&Object(a.b)(o.a.Fragment,null,Object(a.b)(b.c,{activeClassName:"active",to:"/signup"},Object(a.b)(d.f,null)," Sign up"),Object(a.b)(b.c,{activeClassName:"active",to:"/login"},Object(a.b)(d.a,null)," Log in")),e&&Object(a.b)(o.a.Fragment,null,Object(a.b)(b.c,{activeClassName:"active",to:"/post",className:"btn btn-primary"},Object(a.b)(f.a,null)," Post advert"),Object(a.b)(b.c,{activeClassName:"active",to:"/account"},Object(a.b)(d.e,null)," My account")));case"/signup":case"/login":return;case"/adverts":return Object(a.b)(o.a.Fragment,null,Object(a.b)(b.c,{activeClassName:"active",to:"/post",className:"btn btn-primary"},Object(a.b)(f.a,null)," Post advert"),Object(a.b)(b.c,{activeClassName:"active",to:"/account"},Object(a.b)(p.c,null)," My account"));case"/advert":return Object(a.b)(o.a.Fragment,null,Object(a.b)(b.c,{activeClassName:"active",to:"/post",className:"btn btn-primary"},Object(a.b)(f.a,null)," Post advert"),Object(a.b)(b.c,{activeClassName:"active",to:"/account"},Object(a.b)(d.e,null)," My account"));default:return}}(),e&&Object(a.b)(b.c,{activeClassName:"active",to:"/account",title:"Sign out",onClick:function(){return j.a.auth().signOut()}},Object(a.b)(d.b,null)," Sign out")))};function g(){var t=Object(c.a)(["\n\tfont-weight: 900;\n"]);return g=function(){return t},t}function h(){var t=Object(c.a)(['\n\tbackground: #372a2a;\n\tdisplay: inline-block;\n\theight: 44px;\n\ttext-align: center;\n\tletter-spacing: -1px;\n\tposition: relative;\n\tcolor: white;\n\twidth: 60px;\n\t&:before {\n\t\tborder-bottom: 8px solid #372a2a;\n\t\tborder-left: 30px solid transparent;\n\t\tborder-right: 30px solid transparent;\n\t\tcontent: "";\n\t\theight: 0;\n\t\tleft: 0;\n\t\tposition: absolute;\n\t\ttop: -8px;\n\t\twidth: 0;\n\t}\n\ta,\n\ta:hover {\n\t\tcolor: white;\n\t\ttext-decoration: none;\n\t}\n']);return h=function(){return t},t}function y(){var t=Object(c.a)(["\n\tflex: 1 1 auto;\n"]);return y=function(){return t},t}function w(){var t=Object(c.a)(["\n\tmargin-top: 5px;\n\t// border-bottom: 1px solid #ddd;\n\t// margin-bottom: 15px;\n\talign-items: center;\n\t> div {\n\t\tmargin: 10px;\n\t}\n"]);return w=function(){return t},t}var x=Object(a.a)(w()),N=Object(a.a)(y()),k=Object(a.a)(h()),C=Object(a.a)(g());e.a=function(){return Object(a.b)(o.a.Fragment,null,Object(a.b)("div",{css:x,className:"clearfix d-flex"},Object(a.b)("div",null,Object(a.b)("div",{css:k},Object(a.b)(b.b,{to:"/"},Object(a.b)("h1",{css:C},"5th")))),Object(a.b)("div",{css:N},Object(a.b)(l,null)),Object(a.b)(m,null)))}},48:function(t,e,n){"use strict";var c=n(20),a=n(0),r=n.n(a),o=n(9),b=n(47);function i(){var t=Object(c.a)(["\n\t\tbackground: aliceblue;\n\t\tmargin-bottom: 15px;\n\t"]);return i=function(){return t},t}function u(){var t=Object(c.a)(["\n\t\talign-items: center;\n\t\tmin-height: 24em;\n\t\tjustify-content: center;\n\t"]);return u=function(){return t},t}e.a=function(t){var e=Object(o.a)(u()),n=Object(o.a)(i());return Object(o.b)(r.a.Fragment,null,Object(o.b)("div",{css:n},Object(o.b)("div",{className:"container"},Object(o.b)(b.a,null))),Object(o.b)("div",{className:"container",css:e},t.children))}},50:function(t,e,n){"use strict";function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",(function(){return c}))},55:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var c=n(50);function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);e&&(c=c.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,c)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){Object(c.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}},58:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var c=n(0),a=n.n(c),r=n(13),o=function(){return a.a.createElement(a.a.Fragment,null,"We use cookies in order to improve your experience on our website, show personalised and original content and targeted ads, analyse our website's traffic and understand where our audience is coming from. To find out more about our policies, or to opt-out, please check our"," ",a.a.createElement(r.b,{to:"cookies"},"Cookie Policy"),". Also, check our ",a.a.createElement(r.b,{to:"privacy-policy"},"Privacy Policy")," for more information. Thank you.")}},65:function(t,e,n){"use strict";n.r(e);var c=n(49),a=n.n(c),r=n(55),o=n(20),b=n(51),i=n(15),u=n(9),l=n(0),s=n(13),O=n(58),j=n(14),d=(n(57),n(48));function f(){var t=Object(o.a)(["\n\t\tmax-height: 100px;\n\t\twidth: auto;\n\t"]);return f=function(){return t},t}e.default=function(t){var e=Object(l.useState)(j.auth().currentUser.email),n=Object(i.a)(e,2),c=n[0],o=(n[1],Object(l.useState)([])),p=Object(i.a)(o,2),v=p[0],m=p[1];function g(){return h.apply(this,arguments)}function h(){return(h=Object(b.a)(a.a.mark((function t(){var e,n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j.firestore().collection("adverts").where("user","==",c).get();case 2:e=t.sent,n=e.docs.map((function(t){var e=t.data();return Object(r.a)({docId:t.id},e)})),console.log(n),m(n);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function y(){return(y=Object(b.a)(a.a.mark((function t(e){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:j.firestore().collection("adverts").doc(e).delete().then((function(){console.log("Document successfully deleted!"),g()})).catch((function(t){console.error("Error removing document: ",t)}));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}Object(l.useEffect)((function(){g()}),[]);var w=Object(u.a)(f());return Object(u.b)(d.a,null,Object(u.b)("h2",null,"My adverts"),v.length>0?Object(u.b)("table",{class:"table table-sm table-bordered"},Object(u.b)("thead",null,Object(u.b)("tr",null,Object(u.b)("th",{scope:"col"},"Image"),Object(u.b)("th",{scope:"col"},"Title"),Object(u.b)("th",{scope:"col"},"Edit"),Object(u.b)("th",{scope:"col"},"Delete"))),Object(u.b)("tbody",null,v.map((function(t){return Object(u.b)("tr",{key:t.docId},Object(u.b)("td",null,t.file.length>0?t.file.map((function(t,e){return Object(u.b)("span",{key:e},Object(u.b)("img",{src:t.url,width:"300",css:w}))})):Object(u.b)("span",null,"No images")),Object(u.b)("td",null,Object(u.b)(s.b,{to:"/advert/"+t.docId,data:"nice"},t.title," - ",t.price)),Object(u.b)("td",null,Object(u.b)(s.b,{to:"/edit/"+t.docId,data:"edit"},"Edit")),Object(u.b)("td",null,Object(u.b)(s.b,{onClick:function(){!function(t){y.apply(this,arguments)}(t.docId)}},"Delete")))})))):Object(u.b)("p",null,"No data"),Object(u.b)(O.a,null))}}}]);
//# sourceMappingURL=5.7d98e14f.chunk.js.map