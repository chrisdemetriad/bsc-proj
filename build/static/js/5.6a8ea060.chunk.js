(this["webpackJsonpbsc-proj"]=this["webpackJsonpbsc-proj"]||[]).push([[5],{51:function(t,n,e){t.exports=e.p+"static/media/logo.9bc6e05d.png"},52:function(t,n,e){"use strict";var r=e(46),c=e(47),o=e(0),a=e.n(o),b=e(12),i=e(49),u=e.n(i),s=e(54),l=e(50),d=e(9),j=e(7),O=e(13),f=(e(53),e(48));function p(){var t=Object(r.a)(["\n\t\tdisplay: none;\n\t"]);return p=function(){return t},t}function m(){var t=Object(r.a)(["\n\t\tposition: absolute;\n\t\tright: 10px;\n\t\ttop: 11px;\n\t\tcolor: #999;\n\t\tfont-size: 22px;\n\t"]);return m=function(){return t},t}function v(){var t=Object(r.a)(["\n\t\twidth: 100%;\n\t\tlist-style: none;\n\t\tpadding: 0;\n\t\ttop: 37px;\n\t\tposition: absolute;\n\t\tbackground: white;\n\t\tborder: 1px solid #ccc;\n\t\tborder-radius: 0px 0px 0.15rem 0.15rem;\n\t\tz-index: 1;\n\t\tli {\n\t\t\tpadding: 4px 12px;\n\t\t\tborder-bottom: 1px solid #eee;\n\t\t\t:last-of-type {\n\t\t\t\tborder: none;\n\t\t\t}\n\t\t}\n\t"]);return v=function(){return t},t}function g(){var t=Object(r.a)(["\n\t\tposition: relative;\n\t"]);return g=function(){return t},t}var h=function(t){var n=Object(o.useState)([]),e=Object(d.a)(n,2),r=e[0],i=e[1],h=Object(o.useState)(),x=Object(d.a)(h,2),y=x[0],w=x[1],k=Object(j.g)(),C=function(){var t=Object(l.a)(u.a.mark((function t(n){var e,r,c,o,a,b,l,d;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=n.length,r=n.slice(0,e-1).toLowerCase(),c=n.slice(e-1,n.length),o=n.toLowerCase(),a=r+String.fromCharCode(c.charCodeAt(0)+1).toLowerCase(),b=O.firestore(),t.next=8,b.collection("adverts").where("title_s",">=",o).where("title_s","<",a).get();case 8:l=t.sent,d=l.docs.map((function(t){var n=t.data();return Object(s.a)({docId:t.id},n)})),i(d);case 11:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}();Object(o.useEffect)((function(){void 0!=y&&window.location.reload(!0)}),[window.location.pathname]);var I=Object(c.a)(g()),N=Object(c.a)(v()),F=Object(c.a)(m()),A=Object(c.a)(p());return Object(c.b)(a.a.Fragment,null,Object(c.b)("div",{css:I},Object(c.b)(f.i,{css:F}),Object(c.b)("input",{onChange:function(t){var n;void 0!=(n=t.target.value)&&(w(n),C(n))},onKeyPress:function(t){"Enter"===t.key&&k.push("/search/"+y)},className:"form-control",type:"text",placeholder:"What are you looking for.."}),Object(c.b)("input",{type:"submit",value:"Submit",css:A}),r&&r.length>0&&Object(c.b)("ul",{css:N},r.map((function(t){return Object(c.b)("li",{key:t.docId},Object(c.b)(b.b,{to:"/advert/"+t.docId},t.title))})))))},x=e(11),y=e(20),w=e(55);function k(){var t=Object(r.a)(["\n\t\t> a {\n\t\t\tmargin-left: 30px;\n\t\t}\n\t"]);return k=function(){return t},t}var C=function(){var t=Object(j.h)().pathname,n=Object(o.useContext)(x.a).currentUser,e=Object(c.a)(k());return Object(c.b)(a.a.Fragment,null,Object(c.b)("div",{css:e},function(){switch(t){case"/account/myadverts":return Object(c.b)(a.a.Fragment,null,Object(c.b)(b.b,{to:"/adverts"},Object(c.b)(f.k,null)," Adverts"),Object(c.b)(b.b,{to:"/account/favourites"},Object(c.b)(f.d,null)," My favourites"));case"/account/favourites":return Object(c.b)(a.a.Fragment,null,Object(c.b)(b.b,{to:"/adverts"},Object(c.b)(f.k,null)," Adverts"),Object(c.b)(b.b,{to:"/account/myadverts"},Object(c.b)(f.j,null)," My adverts"));case"/":return Object(c.b)(a.a.Fragment,null,!n&&Object(c.b)(a.a.Fragment,null,Object(c.b)(b.b,{to:"/signup"},Object(c.b)(f.l,null)," Sign up"),Object(c.b)(b.b,{to:"/login"},Object(c.b)(f.e,null)," Log in")),n&&Object(c.b)(a.a.Fragment,null,Object(c.b)(b.b,{to:"/post",className:"btn btn-primary"},Object(c.b)(w.a,null)," Post advert"),Object(c.b)(b.b,{to:"/account/myadverts"},Object(c.b)(f.j,null)," My adverts")));case"/signup":case"/login":return;case"/advert/":case"/adverts":return Object(c.b)(a.a.Fragment,null,Object(c.b)(b.b,{to:"/account/myadverts"},Object(c.b)(f.j,null)," My adverts"));default:return}}(),n&&Object(c.b)(a.a.Fragment,null,Object(c.b)(b.b,{to:"/",title:"Sign out",onClick:function(){return y.a.auth().signOut()}},Object(c.b)(f.f,null)," Sign out"),Object(c.b)(b.b,{to:"/post",className:"btn btn-primary"},Object(c.b)(w.a,null)," Post advert"))))},I=e(51),N=e.n(I);function F(){var t=Object(r.a)(["\n\tflex: 1 1 auto;\n"]);return F=function(){return t},t}function A(){var t=Object(r.a)(["\n\tmargin-top: 5px;\n\t// border-bottom: 1px solid #ddd;\n\t// margin-bottom: 15px;\n\talign-items: center;\n\t> div {\n\t\tmargin: 10px;\n\t}\n"]);return A=function(){return t},t}var S=Object(c.a)(A()),P=Object(c.a)(F()),z=function(){return Object(c.b)(a.a.Fragment,null,Object(c.b)("div",{css:S,className:"clearfix d-flex"},Object(c.b)("div",null,Object(c.b)("div",null,Object(c.b)(b.b,{to:"/"},Object(c.b)("img",{src:N.a,alt:"Logo",width:"80",title:"5th"})))),Object(c.b)("div",{css:P},Object(c.b)(h,null)),Object(c.b)(C,null)))};function E(){var t=Object(r.a)(["\n\t\tmargin: 80px 0;\n\t\tli {\n\t\t\tmargin-bottom: 10px;\n\t\t\t:first-of-type {\n\t\t\t\tmargin-bottom: 20px;\n\t\t\t\tfont-weight: bold;\n\t\t\t\ttext-transform: uppercase;\n\t\t\t}\n\t\t}\n\t"]);return E=function(){return t},t}var L=function(){var t=Object(c.a)(E());return Object(c.b)(a.a.Fragment,null,Object(c.b)("div",{className:"row"},Object(c.b)("ul",{className:"list-unstyled col-md-3",css:t},Object(c.b)("li",null,"About"),Object(c.b)("li",null,Object(c.b)(b.b,{to:"#"},"About 5th")),Object(c.b)("li",null,Object(c.b)(b.b,{to:"#"},"Press Contact")),Object(c.b)("li",null,Object(c.b)(b.b,{to:"#"},"Careers"))),Object(c.b)("ul",{className:"list-unstyled col-md-3",css:t},Object(c.b)("li",null,"Help"),Object(c.b)("li",null,Object(c.b)(b.b,{to:"#"},"FAQ")),Object(c.b)("li",null,Object(c.b)(b.b,{to:"#"},"Contact")),Object(c.b)("li",null,Object(c.b)(b.b,{to:"#"},"Policies"))),Object(c.b)("ul",{className:"list-unstyled col-md-3",css:t},Object(c.b)("li",null,"More"),Object(c.b)("li",null,Object(c.b)(b.b,{to:"#"},"Cars")),Object(c.b)("li",null,Object(c.b)(b.b,{to:"#"},"Insurance")),Object(c.b)("li",null,Object(c.b)(b.b,{to:"#"},"Business"))),Object(c.b)("ul",{className:"list-unstyled col-md-3",css:t},Object(c.b)("li",null,"Others"),Object(c.b)("li",null,Object(c.b)(b.b,{to:"#"},"Popular searches")),Object(c.b)("li",null,Object(c.b)(b.b,{to:"#"},"Social media")),Object(c.b)("li",null,Object(c.b)(b.b,{to:"#"},"Blog")))))},M=e(21);function B(){var t=Object(r.a)(["\n\tposition: absolute;\n\tright: 0;\n\tbottom: 0;\n\tbackground: white;\n\tpadding: 20px;\n\twidth: 360px;\n\tfont-size: 14px;\n\tbox-shadow: rgba(0, 0, 0, 0.15) 0px 3px 13px 0px;\n\tborder-radius: 10px 0px 0px 0;\n"]);return B=function(){return t},t}var U=Object(c.a)(B()),J=function(){var t=Object(o.useContext)(M.a),n=Object(d.a)(t,2),e=n[0],r=n[1];return Object(c.b)(a.a.Fragment,null,Object(c.b)(a.a.Fragment,null,!e&&Object(c.b)("div",{css:U},Object(c.b)("p",null,"We use cookies for the best experience. By using the site you accept our cookie policy ",Object(c.b)(b.b,{to:"cookies"},"Cookie Policy"),"."),Object(c.b)("p",null,"Also, check our ",Object(c.b)(b.b,{to:"privacy-policy"},"Privacy Policy")," for more information."),Object(c.b)("div",{className:"text-right"},Object(c.b)("button",{className:"btn btn-outline-primary",onClick:function(){r((function(t){return!t}))}},"OK")))))};function K(){var t=Object(r.a)(["\n\t\tbackground: aliceblue;\n\t\tmargin-top: 15px;\n\t"]);return K=function(){return t},t}function W(){var t=Object(r.a)(["\n\t\tbox-shadow: 0px 1px 2px rgba(0, 0, 0, 0.18) !important;\n\t\tmargin-bottom: 15px;\n\t"]);return W=function(){return t},t}function _(){var t=Object(r.a)(["\n\t\talign-items: center;\n\t\tmin-height: 24em;\n\t\tjustify-content: center;\n\t"]);return _=function(){return t},t}function H(){var t=Object(r.a)(["\n\t\tposition: relative;\n\t\th1,\n\t\th2 {\n\t\t\tmargin-bottom: 20px;\n\t\t}\n\t"]);return H=function(){return t},t}n.a=function(t){var n=Object(c.a)(H()),e=Object(c.a)(_()),r=Object(c.a)(W()),o=Object(c.a)(K());return Object(c.b)("div",{css:n},Object(c.b)("div",{css:r},Object(c.b)("div",{className:"container"},Object(c.b)(z,null))),Object(c.b)("div",{className:"container",css:e},t.children),Object(c.b)("div",{css:o},Object(c.b)("div",{className:"container"},Object(c.b)(L,null))),Object(c.b)(J,null))}},57:function(t,n,e){"use strict";e.d(n,"a",(function(){return o}));var r=e(16);var c=e(22);function o(t){return function(t){if(Array.isArray(t))return Object(r.a)(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||Object(c.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},69:function(t,n,e){"use strict";e.r(n);var r=e(54),c=e(57),o=e(49),a=e.n(o),b=e(46),i=e(50),u=e(9),s=e(47),l=e(0),d=e(11),j=e(7),O=e(12),f=e(13),p=(e(53),e(52)),m=e(48);function v(){var t=Object(b.a)(["\n\t\tfont-size: 2rem;\n\t\tfloat: right;\n\t\tcolor: #e34d4d;\n\t\ttransition: color 0.2s;\n\t\tcursor: pointer;\n\t"]);return v=function(){return t},t}function g(){var t=Object(b.a)(["\n\t\tfont-size: 2rem;\n\t\tfloat: right;\n\t\tcolor: #888;\n\t\ttransition: color 0.2s;\n\t\tcursor: pointer;\n\t"]);return g=function(){return t},t}function h(){var t=Object(b.a)(["\n\t\tmin-height: 200px;\n\t\tdisplay: flex;\n\t\tjustify-content: space-around;\n\t\talign-items: center;\n\t\tfont-size: 14px;\n\t\ttext-transform: uppercase;\n\t"]);return h=function(){return t},t}function x(){var t=Object(b.a)(["\n\t\tdisplay: flex;\n\t\theight: 200px;\n\t\talign-items: center;\n\t\tjustify-content: center;\n\t\tbackground: rgb(34, 193, 195);\n\t\tbackground: radial-gradient(circle, rgba(34, 193, 195, 1) 0%, rgba(169, 62, 136, 1) 0%, rgba(193, 65, 169, 1) 19%, rgba(198, 63, 186, 1) 29%, rgba(109, 85, 197, 1) 74%, rgba(76, 93, 201, 1) 79%, rgba(128, 190, 131, 1) 100%, rgba(45, 168, 253, 1) 100%);\n\t\timg {\n\t\t\theight: 100%;\n\t\t\twidth: auto;\n\t\t}\n\t\t}\n\t"]);return x=function(){return t},t}function y(){var t=Object(b.a)(["\n\t\tfont-size: 10px;\n\t\ttext-transform: uppercase;\n\t\tmargin-bottom: 0;\n\t"]);return y=function(){return t},t}function w(){var t=Object(b.a)(["\n\t\tfont-size: 20px;\n\t\tfont-weight: bold;\n\t"]);return w=function(){return t},t}function k(){var t=Object(b.a)(["\n\t\tfont-size: 15px;\n\t\tfont-weight: bold;\n\t"]);return k=function(){return t},t}function C(){var t=Object(b.a)(["\n\t\tborder-top: 6px solid indianred;\n\t\tpadding: 1rem;\n\t"]);return C=function(){return t},t}function I(){var t=Object(b.a)(["\n\t\tflex: 0 0 24%;\n\t\tborder: 1px solid #eee;\n\t\tpadding: 0;\n\t\tmax-width: 24%;\n\t\tmargin-bottom: 15px;\n\t\tbackground: white;\n\t\tborder-radius: 0px 0px 2px 2px;\n\t\tbox-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.13);\n\t\ttransition: box-shadow 0.2s;\n\t\t:hover {\n\t\t\tbox-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.15);\n\t\t\tsvg {\n\t\t\t\tcolor: black;\n\t\t\t}\n\t\t}\n\t"]);return I=function(){return t},t}n.default=function(t){var n=Object(l.useState)([]),e=Object(u.a)(n,2),o=e[0],b=e[1],N=Object(l.useState)([]),F=Object(u.a)(N,2),A=F[0],S=F[1],P=Object(l.useContext)(d.a).currentUser,z=f.firestore().collection("favorite"),E=Object(j.h)().pathname.split("/"),L=E.pop()||E.pop(),M=L.charAt(0).toUpperCase()+L.slice(1);function B(){return(B=Object(i.a)(a.a.mark((function t(){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t){P&&f.firestore().collection("favorite").doc(P.email).get().then(function(){var n=Object(i.a)(a.a.mark((function n(e){return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e.data()?t(e.data().productId):t([]);case 1:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()).catch((function(t){console.error("Error adding document: ",t)}))})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function U(t){return J.apply(this,arguments)}function J(){return(J=Object(i.a)(a.a.mark((function t(n){var e,r,o;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=A,r=[],P&&(A.length>0?(A.indexOf(n.docId)>-1?(e.splice(A.indexOf(n.docId),1),r=Object(c.a)(e)):r=[].concat(Object(c.a)(A),[n.docId]),f.firestore().collection("favorite").doc(P.email).update({productId:r}).then((function(t){S(r)})).catch((function(t){console.error("Error adding document: ",t)}))):(o={productId:[n.docId]},z.doc(P.email).set(o).then((function(t){S(o.productId)})).catch((function(t){console.error("Error adding document: ",t)}))));case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function K(){return(K=Object(i.a)(a.a.mark((function t(){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise(function(){var t=Object(i.a)(a.a.mark((function t(n){var e,c;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("Adverts"==M){t.next=6;break}return t.next=3,f.firestore().collection("adverts").where("category","==",M).get();case 3:e=t.sent,t.next=9;break;case 6:return t.next=8,f.firestore().collection("adverts").get();case 8:e=t.sent;case 9:c=e.docs.map((function(t){var n=t.data();return Object(r.a)({docId:t.id},n)})),n(c);case 11:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}Object(l.useEffect)((function(){var t=!0;return function(){return B.apply(this,arguments)}().then((function(n){t&&S(n)})),function(){return t=!1}}),[]),Object(l.useEffect)((function(){var t=!0;return function(){return K.apply(this,arguments)}().then((function(n){t&&b(n)})),function(){return t=!1}}),[A]);var W=Object(s.a)(I()),_=Object(s.a)(C()),H=Object(s.a)(k()),Q=Object(s.a)(w()),T=Object(s.a)(y()),q=Object(s.a)(x()),D=Object(s.a)(h()),G=Object(s.a)(g()),R=Object(s.a)(v());return Object(s.b)(p.a,null,Object(s.b)("h2",null,"Adverts"),o&&o.length>0?Object(s.b)("div",{className:"row no-gutters d-flex justify-content-between"},o.map((function(t){return Object(s.b)("div",{className:"col-md-3",key:t.docId,css:W},t.file.length>0?t.file.map((function(n,e){return 1===e?void 0:Object(s.b)(O.b,{to:"/advert/"+t.docId,key:t.docId},Object(s.b)("div",{key:e,css:q},Object(s.b)("img",{src:n.url,alt:t.title})))})):Object(s.b)("div",{css:D},"No images"),Object(s.b)("div",{css:_},Object(s.b)("p",{css:H},Object(s.b)(O.b,{to:"/advert/"+t.docId},t.title)),Object(s.b)("p",{css:T},t.city,t.postcode&&", "+t.postcode),Object(s.b)("div",{className:"clearfix"},Object(s.b)("span",{css:Q},"\xa3",t.price),P&&(A.length>0&&A.indexOf(t.docId)>-1?Object(s.b)(m.a,{onClick:function(){U(t)},css:R}):Object(s.b)(m.d,{onClick:function(){U(t)},css:G})))))}))):Object(s.b)("p",null,"No data in ",Object(s.b)("code",null,L),"."))}}}]);
//# sourceMappingURL=5.6a8ea060.chunk.js.map