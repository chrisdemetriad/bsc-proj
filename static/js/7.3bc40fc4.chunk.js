(this["webpackJsonpbbk-proj"]=this["webpackJsonpbbk-proj"]||[]).push([[7],{51:function(t,n,e){t.exports=e.p+"static/media/logo.9bc6e05d.png"},52:function(t,n,e){"use strict";var c=e(46),b=e(47),r=e(0),a=e.n(r),o=e(12),i=e(49),u=e.n(i),l=e(54),s=e(50),j=e(9),O=e(7),d=e(13),p=(e(53),e(48));function f(){var t=Object(c.a)(["\n\t\tdisplay: none;\n\t"]);return f=function(){return t},t}function m(){var t=Object(c.a)(["\n\t\tposition: absolute;\n\t\tright: 10px;\n\t\ttop: 11px;\n\t\tcolor: #999;\n\t\tfont-size: 22px;\n\t"]);return m=function(){return t},t}function v(){var t=Object(c.a)(["\n\t\twidth: 100%;\n\t\tlist-style: none;\n\t\tpadding: 0;\n\t\ttop: 37px;\n\t\tposition: absolute;\n\t\tbackground: white;\n\t\tborder: 1px solid #ccc;\n\t\tborder-radius: 0px 0px 0.15rem 0.15rem;\n\t\tz-index: 1;\n\t\tli {\n\t\t\tpadding: 4px 12px;\n\t\t\tborder-bottom: 1px solid #eee;\n\t\t\t:last-of-type {\n\t\t\t\tborder: none;\n\t\t\t}\n\t\t}\n\t"]);return v=function(){return t},t}function g(){var t=Object(c.a)(["\n\t\tposition: relative;\n\t"]);return g=function(){return t},t}var x=function(t){var n=Object(r.useState)([]),e=Object(j.a)(n,2),c=e[0],i=e[1],x=Object(r.useState)(),h=Object(j.a)(x,2),y=h[0],k=h[1],w=Object(O.g)(),C=function(){var t=Object(s.a)(u.a.mark((function t(n){var e,c,b,r,a,o,s,j;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=n.length,c=n.slice(0,e-1).toLowerCase(),b=n.slice(e-1,n.length),r=n.toLowerCase(),a=c+String.fromCharCode(b.charCodeAt(0)+1).toLowerCase(),o=d.firestore(),t.next=8,o.collection("adverts").where("title_s",">=",r).where("title_s","<",a).get();case 8:s=t.sent,j=s.docs.map((function(t){var n=t.data();return Object(l.a)({docId:t.id},n)})),i(j);case 11:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}();Object(r.useEffect)((function(){void 0!=y&&window.location.reload(!0)}),[window.location.pathname]);var N=Object(b.a)(g()),F=Object(b.a)(v()),P=Object(b.a)(m()),S=Object(b.a)(f());return Object(b.b)(a.a.Fragment,null,Object(b.b)("div",{css:N},Object(b.b)(p.i,{css:P}),Object(b.b)("input",{onChange:function(t){var n;void 0!=(n=t.target.value)&&(k(n),C(n))},onKeyPress:function(t){"Enter"===t.key&&w.push("/search/"+y)},className:"form-control",type:"text",placeholder:"What are you looking for.."}),Object(b.b)("input",{type:"submit",value:"Submit",css:S}),c&&c.length>0&&Object(b.b)("ul",{css:F},c.map((function(t){return Object(b.b)("li",{key:t.docId},Object(b.b)(o.b,{to:"/advert/"+t.docId},t.title))})))))},h=e(11),y=e(20),k=e(55);function w(){var t=Object(c.a)(["\n\t\t> a {\n\t\t\tmargin-left: 30px;\n\t\t}\n\t"]);return w=function(){return t},t}var C=function(){var t=Object(O.h)().pathname,n=Object(r.useContext)(h.a).currentUser,e=Object(b.a)(w());return Object(b.b)(a.a.Fragment,null,Object(b.b)("div",{css:e},function(){switch(t){case"/account/myadverts":return Object(b.b)(a.a.Fragment,null,Object(b.b)(o.b,{to:"/adverts"},Object(b.b)(p.k,null)," Adverts"),Object(b.b)(o.b,{to:"/account/favourites"},Object(b.b)(p.d,null)," My favourites"));case"/account/favourites":return Object(b.b)(a.a.Fragment,null,Object(b.b)(o.b,{to:"/adverts"},Object(b.b)(p.k,null)," Adverts"),Object(b.b)(o.b,{to:"/account/myadverts"},Object(b.b)(p.j,null)," My adverts"));case"/":return Object(b.b)(a.a.Fragment,null,!n&&Object(b.b)(a.a.Fragment,null,Object(b.b)(o.b,{to:"/signup"},Object(b.b)(p.l,null)," Sign up"),Object(b.b)(o.b,{to:"/login"},Object(b.b)(p.e,null)," Log in")),n&&Object(b.b)(a.a.Fragment,null,Object(b.b)(o.b,{to:"/post",className:"btn btn-primary"},Object(b.b)(k.a,null)," Post advert"),Object(b.b)(o.b,{to:"/account/myadverts"},Object(b.b)(p.j,null)," My adverts")));case"/signup":case"/login":return;case"/advert/":case"/adverts":return Object(b.b)(a.a.Fragment,null,Object(b.b)(o.b,{to:"/account/myadverts"},Object(b.b)(p.j,null)," My adverts"));default:return}}(),n&&Object(b.b)(a.a.Fragment,null,Object(b.b)(o.b,{to:"/",title:"Sign out",onClick:function(){return y.a.auth().signOut()}},Object(b.b)(p.f,null)," Sign out"),Object(b.b)(o.b,{to:"/post",className:"btn btn-primary"},Object(b.b)(k.a,null)," Post advert"))))},N=e(51),F=e.n(N);function P(){var t=Object(c.a)(["\n\tflex: 1 1 auto;\n"]);return P=function(){return t},t}function S(){var t=Object(c.a)(["\n\tmargin-top: 5px;\n\t// border-bottom: 1px solid #ddd;\n\t// margin-bottom: 15px;\n\talign-items: center;\n\t> div {\n\t\tmargin: 10px;\n\t}\n"]);return S=function(){return t},t}var A=Object(b.a)(S()),z=Object(b.a)(P()),I=function(){return Object(b.b)(a.a.Fragment,null,Object(b.b)("div",{css:A,className:"clearfix d-flex"},Object(b.b)("div",null,Object(b.b)("div",null,Object(b.b)(o.b,{to:"/"},Object(b.b)("img",{src:F.a,alt:"Logo",width:"80"})))),Object(b.b)("div",{css:z},Object(b.b)(x,null)),Object(b.b)(C,null)))};function L(){var t=Object(c.a)(["\n\t\tmargin: 80px 0;\n\t\tli {\n\t\t\tmargin-bottom: 10px;\n\t\t\t:first-of-type {\n\t\t\t\tmargin-bottom: 20px;\n\t\t\t\tfont-weight: bold;\n\t\t\t\ttext-transform: uppercase;\n\t\t\t}\n\t\t}\n\t"]);return L=function(){return t},t}var M=function(){var t=Object(b.a)(L());return Object(b.b)(a.a.Fragment,null,Object(b.b)("div",{className:"row"},Object(b.b)("ul",{className:"list-unstyled col-md-3",css:t},Object(b.b)("li",null,"About"),Object(b.b)("li",null,Object(b.b)(o.b,{to:"#"},"About 5th")),Object(b.b)("li",null,Object(b.b)(o.b,{to:"#"},"Press Contact")),Object(b.b)("li",null,Object(b.b)(o.b,{to:"#"},"Careers"))),Object(b.b)("ul",{className:"list-unstyled col-md-3",css:t},Object(b.b)("li",null,"Help"),Object(b.b)("li",null,Object(b.b)(o.b,{to:"#"},"FAQ")),Object(b.b)("li",null,Object(b.b)(o.b,{to:"#"},"Contact")),Object(b.b)("li",null,Object(b.b)(o.b,{to:"#"},"Policies"))),Object(b.b)("ul",{className:"list-unstyled col-md-3",css:t},Object(b.b)("li",null,"More"),Object(b.b)("li",null,Object(b.b)(o.b,{to:"#"},"Cars")),Object(b.b)("li",null,Object(b.b)(o.b,{to:"#"},"Insurance")),Object(b.b)("li",null,Object(b.b)(o.b,{to:"#"},"Business"))),Object(b.b)("ul",{className:"list-unstyled col-md-3",css:t},Object(b.b)("li",null,"Others"),Object(b.b)("li",null,Object(b.b)(o.b,{to:"#"},"Popular searches")),Object(b.b)("li",null,Object(b.b)(o.b,{to:"#"},"Social media")),Object(b.b)("li",null,Object(b.b)(o.b,{to:"#"},"Blog")))))},B=e(21);function J(){var t=Object(c.a)(["\n\tposition: absolute;\n\tright: 0;\n\tbottom: 0;\n\tbackground: white;\n\tpadding: 20px;\n\twidth: 360px;\n\tfont-size: 14px;\n\tbox-shadow: rgba(0, 0, 0, 0.15) 0px 3px 13px 0px;\n\tborder-radius: 10px 0px 0px 0;\n"]);return J=function(){return t},t}var E=Object(b.a)(J()),K=function(){var t=Object(r.useContext)(B.a),n=Object(j.a)(t,2),e=n[0],c=n[1];return Object(b.b)(a.a.Fragment,null,Object(b.b)(a.a.Fragment,null,!e&&Object(b.b)("div",{css:E},Object(b.b)("p",null,"We use cookies for the best experience. By using the site you accept our cookie policy ",Object(b.b)(o.b,{to:"cookies"},"Cookie Policy"),"."),Object(b.b)("p",null,"Also, check our ",Object(b.b)(o.b,{to:"privacy-policy"},"Privacy Policy")," for more information."),Object(b.b)("div",{className:"text-right"},Object(b.b)("button",{className:"btn btn-outline-primary",onClick:function(){c((function(t){return!t}))}},"OK")))))};function U(){var t=Object(c.a)(["\n\t\tbackground: aliceblue;\n\t\tmargin-top: 15px;\n\t"]);return U=function(){return t},t}function W(){var t=Object(c.a)(["\n\t\tbox-shadow: 0px 1px 2px rgba(0, 0, 0, 0.18) !important;\n\t\tmargin-bottom: 15px;\n\t"]);return W=function(){return t},t}function _(){var t=Object(c.a)(["\n\t\talign-items: center;\n\t\tmin-height: 24em;\n\t\tjustify-content: center;\n\t"]);return _=function(){return t},t}function H(){var t=Object(c.a)(["\n\t\tposition: relative;\n\t\th1,\n\t\th2 {\n\t\t\tmargin-bottom: 20px;\n\t\t}\n\t"]);return H=function(){return t},t}n.a=function(t){var n=Object(b.a)(H()),e=Object(b.a)(_()),c=Object(b.a)(W()),r=Object(b.a)(U());return Object(b.b)("div",{css:n},Object(b.b)("div",{css:c},Object(b.b)("div",{className:"container"},Object(b.b)(I,null))),Object(b.b)("div",{className:"container",css:e},t.children),Object(b.b)("div",{css:r},Object(b.b)("div",{className:"container"},Object(b.b)(M,null))),Object(b.b)(K,null))}},63:function(t,n,e){t.exports=e.p+"static/media/404.fa29ff4d.jpg"},64:function(t,n,e){"use strict";e.r(n);var c=e(46),b=e(47),r=e(12),a=e(0),o=e(11),i=e(52),u=e(21),l=e(63),s=e.n(l);function j(){var t=Object(c.a)(["\n\tfont-size: 3rem;\n\tcolor: black;\n\tbackground: white;\n\topacity: 0.5;\n\tfont-weight: bold;\n\tpadding: 20px;\n"]);return j=function(){return t},t}function O(){var t=Object(c.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tmin-height: 800px;\n\tjustify-content: space-around;\n\tbackground-image: url(",");\n\tbackground-size: cover;\n\tpadding: 0;\n"]);return O=function(){return t},t}var d=Object(b.a)(O(),s.a),p=Object(b.a)(j());n.default=function(){var t=Object(a.useContext)(o.a).currentUser;return Object(b.b)(u.b,null,Object(b.b)(i.a,null,Object(b.b)("div",{css:d},Object(b.b)("p",{css:p},"Oh, no! You poor thing!"),t?Object(b.b)(r.b,{className:"btn btn-primary p-3",to:"/post"},"Post today"):Object(b.b)(r.b,{className:"btn btn-secondary p-3",to:"/login"},"Join today")),Object(b.b)("small",null,"Image by ",Object(b.b)("a",{href:"sianbuckler"},"sianbuckler")," from Pixabay.")))}}}]);
//# sourceMappingURL=7.3bc40fc4.chunk.js.map