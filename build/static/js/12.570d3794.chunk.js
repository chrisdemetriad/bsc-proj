(this["webpackJsonpbsc-proj"]=this["webpackJsonpbsc-proj"]||[]).push([[12],{47:function(t,e,n){"use strict";var a=n(20),c=n(9),r=n(0),o=n.n(r),s=n(13);function b(){var t=Object(a.a)(["\n\twidth: 50%;\n"]);return b=function(){return t},t}var i=Object(c.a)(b()),u=function(){return Object(c.b)("input",{css:i,className:"form-control",type:"text",placeholder:"What are you looking for.."})},l=n(7),j=n(12),O=n(21),v=n(52),m=n(54),d=n(53);function p(){var t=Object(a.a)(["\n\t\t> a {\n\t\t\tmargin-left: 30px;\n\t\t}\n\t"]);return p=function(){return t},t}var f=function(){var t=Object(l.g)().pathname,e=Object(r.useContext)(j.a).currentUser;console.log(t);var n=Object(c.a)(p());return Object(c.b)(o.a.Fragment,null,Object(c.b)("div",{css:n},function(){switch(t){case"/account":return Object(c.b)(o.a.Fragment,null,Object(c.b)(s.c,{activeClassName:"active",to:"/adverts"},Object(c.b)(d.a,null)," Adverts"),Object(c.b)(s.c,{activeClassName:"active",to:"/account/settings"},Object(c.b)(d.b,null)," Settings"));case"/account/settings":return Object(c.b)(o.a.Fragment,null,Object(c.b)(s.c,{activeClassName:"active",to:"/adverts"},Object(c.b)(d.a,null)," Adverts"),Object(c.b)(s.c,{activeClassName:"active",to:"/account"},Object(c.b)(v.e,null)," My account"));case"/":return Object(c.b)(o.a.Fragment,null,!e&&Object(c.b)(o.a.Fragment,null,Object(c.b)(s.c,{activeClassName:"active",to:"/signup"},Object(c.b)(v.f,null)," Sign up"),Object(c.b)(s.c,{activeClassName:"active",to:"/login"},Object(c.b)(v.a,null)," Log in")),e&&Object(c.b)(o.a.Fragment,null,Object(c.b)(s.c,{activeClassName:"active",to:"/post",className:"btn btn-primary"},Object(c.b)(m.a,null)," Post advert"),Object(c.b)(s.c,{activeClassName:"active",to:"/account"},Object(c.b)(v.e,null)," My account")));case"/signup":case"/login":return;case"/adverts":return Object(c.b)(o.a.Fragment,null,Object(c.b)(s.c,{activeClassName:"active",to:"/post",className:"btn btn-primary"},Object(c.b)(m.a,null)," Post advert"),Object(c.b)(s.c,{activeClassName:"active",to:"/account"},Object(c.b)(d.c,null)," My account"));case"/advert":return Object(c.b)(o.a.Fragment,null,Object(c.b)(s.c,{activeClassName:"active",to:"/post",className:"btn btn-primary"},Object(c.b)(m.a,null)," Post advert"),Object(c.b)(s.c,{activeClassName:"active",to:"/account"},Object(c.b)(v.e,null)," My account"));default:return}}(),e&&Object(c.b)(s.c,{activeClassName:"active",to:"/account",title:"Sign out",onClick:function(){return O.a.auth().signOut()}},Object(c.b)(v.b,null)," Sign out")))};function g(){var t=Object(a.a)(["\n\tfont-weight: 900;\n"]);return g=function(){return t},t}function h(){var t=Object(a.a)(['\n\tbackground: #372a2a;\n\tdisplay: inline-block;\n\theight: 44px;\n\ttext-align: center;\n\tletter-spacing: -1px;\n\tposition: relative;\n\tcolor: white;\n\twidth: 60px;\n\t&:before {\n\t\tborder-bottom: 8px solid #372a2a;\n\t\tborder-left: 30px solid transparent;\n\t\tborder-right: 30px solid transparent;\n\t\tcontent: "";\n\t\theight: 0;\n\t\tleft: 0;\n\t\tposition: absolute;\n\t\ttop: -8px;\n\t\twidth: 0;\n\t}\n\ta,\n\ta:hover {\n\t\tcolor: white;\n\t\ttext-decoration: none;\n\t}\n']);return h=function(){return t},t}function x(){var t=Object(a.a)(["\n\tflex: 1 1 auto;\n"]);return x=function(){return t},t}function N(){var t=Object(a.a)(["\n\tmargin-top: 5px;\n\t// border-bottom: 1px solid #ddd;\n\t// margin-bottom: 15px;\n\talign-items: center;\n\t> div {\n\t\tmargin: 10px;\n\t}\n"]);return N=function(){return t},t}var y=Object(c.a)(N()),C=Object(c.a)(x()),w=Object(c.a)(h()),F=Object(c.a)(g());e.a=function(){return Object(c.b)(o.a.Fragment,null,Object(c.b)("div",{css:y,className:"clearfix d-flex"},Object(c.b)("div",null,Object(c.b)("div",{css:w},Object(c.b)(s.b,{to:"/"},Object(c.b)("h1",{css:F},"5th")))),Object(c.b)("div",{css:C},Object(c.b)(u,null)),Object(c.b)(f,null)))}},48:function(t,e,n){"use strict";var a=n(20),c=n(0),r=n.n(c),o=n(9),s=n(47);function b(){var t=Object(a.a)(["\n\t\tbackground: aliceblue;\n\t\tmargin-bottom: 15px;\n\t"]);return b=function(){return t},t}function i(){var t=Object(a.a)(["\n\t\talign-items: center;\n\t\tmin-height: 24em;\n\t\tjustify-content: center;\n\t"]);return i=function(){return t},t}e.a=function(t){var e=Object(o.a)(i()),n=Object(o.a)(b());return Object(o.b)(r.a.Fragment,null,Object(o.b)("div",{css:n},Object(o.b)("div",{className:"container"},Object(o.b)(s.a,null))),Object(o.b)("div",{className:"container",css:e},t.children))}},71:function(t,e,n){"use strict";n.r(e);var a=n(49),c=n.n(a),r=n(51),o=n(15),s=n(0),b=n.n(s),i=n(13),u=n(14),l=(n(57),n(48));e.default=function(t){var e=Object(s.useState)(""),n=Object(o.a)(e,2),a=n[0],j=n[1],O=Object(s.useState)(!0),v=Object(o.a)(O,2),m=v[0],d=v[1];function p(){return(p=Object(r.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("editPost"),u.firestore().collection("adverts").doc(t.match.params.id).get().then(function(){var t=Object(r.a)(c.a.mark((function t(e){var n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.exists?(n=e.data(),console.log(n),j(n.title)):console.log("No such document!");case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){console.error("Error adding document: ",t)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(s.useEffect)((function(){"edited"==t.match.params.status?d(!1):"added"==t.match.params.status&&d(!0),t.match.params.id&&function(){p.apply(this,arguments)}(t.match.params.id)}),[]),b.a.createElement(b.a.Fragment,null,b.a.createElement(l.a,null,m?b.a.createElement("h2",null,"The advert has been successfully posted"):b.a.createElement("h2",null,"The advert has been successfully edited"),b.a.createElement(i.b,{to:"/advert/"+t.match.params.id,data:"nice"},a)))}}}]);
//# sourceMappingURL=12.570d3794.chunk.js.map