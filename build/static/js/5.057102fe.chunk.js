(this.webpackJsonpbbk=this.webpackJsonpbbk||[]).push([[5],{51:function(t,n,e){t.exports=e.p+"static/media/logo.9bc6e05d.png"},52:function(t,n,e){"use strict";var c=e(46),r=e(47),o=e(0),a=e.n(o),b=e(12),i=e(49),u=e.n(i),s=e(54),l=e(50),d=e(9),j=e(7),O=e(13),p=(e(53),e(48));function f(){var t=Object(c.a)(["\n\t\tdisplay: none;\n\t"]);return f=function(){return t},t}function m(){var t=Object(c.a)(["\n\t\tposition: absolute;\n\t\tright: 10px;\n\t\ttop: 11px;\n\t\tcolor: #999;\n\t\tfont-size: 22px;\n\t"]);return m=function(){return t},t}function v(){var t=Object(c.a)(["\n\t\twidth: 100%;\n\t\tlist-style: none;\n\t\tpadding: 0;\n\t\ttop: 37px;\n\t\tposition: absolute;\n\t\tbackground: white;\n\t\tborder: 1px solid #ccc;\n\t\tborder-radius: 0px 0px 0.15rem 0.15rem;\n\t\tz-index: 1;\n\t\tli {\n\t\t\tpadding: 4px 12px;\n\t\t\tborder-bottom: 1px solid #eee;\n\t\t\t:last-of-type {\n\t\t\t\tborder: none;\n\t\t\t}\n\t\t}\n\t"]);return v=function(){return t},t}function g(){var t=Object(c.a)(["\n\t\tposition: relative;\n\t"]);return g=function(){return t},t}var h=function(t){var n=Object(o.useState)([]),e=Object(d.a)(n,2),c=e[0],i=e[1],h=Object(o.useState)(),x=Object(d.a)(h,2),y=x[0],w=x[1],k=Object(j.g)(),I=function(){var t=Object(l.a)(u.a.mark((function t(n){var e,c,r,o,a,b,l,d;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=n.length,c=n.slice(0,e-1).toLowerCase(),r=n.slice(e-1,n.length),o=n.toLowerCase(),a=c+String.fromCharCode(r.charCodeAt(0)+1).toLowerCase(),b=O.firestore(),t.next=8,b.collection("adverts").where("title_s",">=",o).where("title_s","<",a).get();case 8:l=t.sent,d=l.docs.map((function(t){var n=t.data();return Object(s.a)({docId:t.id},n)})),i(d);case 11:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),C=Object(r.a)(g()),N=Object(r.a)(v()),F=Object(r.a)(m()),S=Object(r.a)(f());return Object(r.b)(a.a.Fragment,null,Object(r.b)("div",{css:C},Object(r.b)("form",{onSubmit:function(t){k.push("/search/"+y)}},Object(r.b)(p.i,{css:F}),Object(r.b)("input",{onChange:function(t){var n;n=t.target.value,w(n),I(n)},className:"form-control",type:"text",placeholder:"What are you looking for.."}),Object(r.b)("input",{type:"submit",value:"Submit",css:S}),c&&c.length>0&&Object(r.b)("ul",{css:N},c.map((function(t){return Object(r.b)("li",{key:t.docId},Object(r.b)(b.b,{to:"/advert/"+t.docId},t.title))}))))))},x=e(11),y=e(20),w=e(55);function k(){var t=Object(c.a)(["\n\t\t> a {\n\t\t\tmargin-left: 30px;\n\t\t}\n\t"]);return k=function(){return t},t}var I=function(){var t=Object(j.h)().pathname,n=Object(o.useContext)(x.a).currentUser,e=Object(r.a)(k());return Object(r.b)(a.a.Fragment,null,Object(r.b)("div",{css:e},function(){switch(t){case"/account/myadverts":return Object(r.b)(a.a.Fragment,null,Object(r.b)(b.b,{to:"/adverts"},Object(r.b)(p.k,null)," Adverts"),Object(r.b)(b.b,{to:"/account/favourites"},Object(r.b)(p.d,null)," My favourites"));case"/account/favourites":return Object(r.b)(a.a.Fragment,null,Object(r.b)(b.b,{to:"/adverts"},Object(r.b)(p.k,null)," Adverts"),Object(r.b)(b.b,{to:"/account/myadverts"},Object(r.b)(p.j,null)," My adverts"));case"/":return Object(r.b)(a.a.Fragment,null,!n&&Object(r.b)(a.a.Fragment,null,Object(r.b)(b.b,{to:"/signup"},Object(r.b)(p.l,null)," Sign up"),Object(r.b)(b.b,{to:"/login"},Object(r.b)(p.e,null)," Log in")),n&&Object(r.b)(a.a.Fragment,null,Object(r.b)(b.b,{to:"/post",className:"btn btn-primary"},Object(r.b)(w.a,null)," Post advert"),Object(r.b)(b.b,{to:"/account/myadverts"},Object(r.b)(p.j,null)," My adverts")));case"/signup":case"/login":return;case"/advert/":case"/adverts":return Object(r.b)(a.a.Fragment,null,Object(r.b)(b.b,{to:"/account/myadverts"},Object(r.b)(p.j,null)," My adverts"));default:return}}(),n&&Object(r.b)(a.a.Fragment,null,Object(r.b)(b.b,{to:"/",title:"Sign out",onClick:function(){return y.a.auth().signOut()}},Object(r.b)(p.f,null)," Sign out"),Object(r.b)(b.b,{to:"/post",className:"btn btn-primary"},Object(r.b)(w.a,null)," Post advert"))))},C=e(51),N=e.n(C);function F(){var t=Object(c.a)(["\n\tflex: 1 1 auto;\n"]);return F=function(){return t},t}function S(){var t=Object(c.a)(["\n\tmargin-top: 5px;\n\t// border-bottom: 1px solid #ddd;\n\t// margin-bottom: 15px;\n\talign-items: center;\n\t> div {\n\t\tmargin: 10px;\n\t}\n"]);return S=function(){return t},t}var A=Object(r.a)(S()),z=Object(r.a)(F()),P=function(){return Object(r.b)(a.a.Fragment,null,Object(r.b)("div",{css:A,className:"clearfix d-flex"},Object(r.b)("div",null,Object(r.b)("div",null,Object(r.b)(b.b,{to:"/"},Object(r.b)("img",{src:N.a,alt:"Logo",width:"80"})))),Object(r.b)("div",{css:z},Object(r.b)(h,null)),Object(r.b)(I,null)))};function U(){var t=Object(c.a)(["\n\t\tmargin: 80px 0;\n\t\tli {\n\t\t\tmargin-bottom: 10px;\n\t\t\t:first-of-type {\n\t\t\t\tmargin-bottom: 20px;\n\t\t\t\tfont-weight: bold;\n\t\t\t\ttext-transform: uppercase;\n\t\t\t}\n\t\t}\n\t"]);return U=function(){return t},t}var E=function(){var t=Object(r.a)(U());return Object(r.b)(a.a.Fragment,null,Object(r.b)("div",{className:"row"},Object(r.b)("ul",{className:"list-unstyled col-md-3",css:t},Object(r.b)("li",null,"About"),Object(r.b)("li",null,Object(r.b)(b.b,{to:"#"},"About 5th")),Object(r.b)("li",null,Object(r.b)(b.b,{to:"#"},"Press Contact")),Object(r.b)("li",null,Object(r.b)(b.b,{to:"#"},"Careers"))),Object(r.b)("ul",{className:"list-unstyled col-md-3",css:t},Object(r.b)("li",null,"Help"),Object(r.b)("li",null,Object(r.b)(b.b,{to:"#"},"FAQ")),Object(r.b)("li",null,Object(r.b)(b.b,{to:"#"},"Contact")),Object(r.b)("li",null,Object(r.b)(b.b,{to:"#"},"Policies"))),Object(r.b)("ul",{className:"list-unstyled col-md-3",css:t},Object(r.b)("li",null,"More"),Object(r.b)("li",null,Object(r.b)(b.b,{to:"#"},"Cars")),Object(r.b)("li",null,Object(r.b)(b.b,{to:"#"},"Insurance")),Object(r.b)("li",null,Object(r.b)(b.b,{to:"#"},"Business"))),Object(r.b)("ul",{className:"list-unstyled col-md-3",css:t},Object(r.b)("li",null,"Others"),Object(r.b)("li",null,Object(r.b)(b.b,{to:"#"},"Popular searches")),Object(r.b)("li",null,Object(r.b)(b.b,{to:"#"},"Social media")),Object(r.b)("li",null,Object(r.b)(b.b,{to:"#"},"Blog")))))},L=e(21);function M(){var t=Object(c.a)(["\n\tposition: absolute;\n\tright: 0;\n\tbottom: 0;\n\tbackground: white;\n\tpadding: 20px;\n\twidth: 360px;\n\tfont-size: 14px;\n\tbox-shadow: rgba(0, 0, 0, 0.15) 0px 3px 13px 0px;\n\tborder-radius: 10px 0px 0px 0;\n"]);return M=function(){return t},t}var B=Object(r.a)(M()),J=function(){var t=Object(o.useContext)(L.a),n=Object(d.a)(t,2),e=n[0],c=n[1];return Object(r.b)(a.a.Fragment,null,Object(r.b)(a.a.Fragment,null,!e&&Object(r.b)("div",{css:B},Object(r.b)("p",null,"We use cookies for the best experience. By using the site you accept our cookie policy ",Object(r.b)(b.b,{to:"cookies"},"Cookie Policy"),"."),Object(r.b)("p",null,"Also, check our ",Object(r.b)(b.b,{to:"privacy-policy"},"Privacy Policy")," for more information."),Object(r.b)("div",{className:"text-right"},Object(r.b)("button",{className:"btn btn-outline-primary",onClick:function(){c((function(t){return!t}))}},"OK")))))};function W(){var t=Object(c.a)(["\n\t\tbackground: aliceblue;\n\t\tmargin-top: 15px;\n\t"]);return W=function(){return t},t}function _(){var t=Object(c.a)(["\n\t\tbox-shadow: 0px 1px 2px rgba(0, 0, 0, 0.18) !important;\n\t\tmargin-bottom: 15px;\n\t"]);return _=function(){return t},t}function H(){var t=Object(c.a)(["\n\t\talign-items: center;\n\t\tmin-height: 24em;\n\t\tjustify-content: center;\n\t"]);return H=function(){return t},t}function K(){var t=Object(c.a)(["\n\t\tposition: relative;\n\t\th1,\n\t\th2 {\n\t\t\tmargin-bottom: 20px;\n\t\t}\n\t"]);return K=function(){return t},t}n.a=function(t){var n=Object(r.a)(K()),e=Object(r.a)(H()),c=Object(r.a)(_()),o=Object(r.a)(W());return Object(r.b)("div",{css:n},Object(r.b)("div",{css:c},Object(r.b)("div",{className:"container"},Object(r.b)(P,null))),Object(r.b)("div",{className:"container",css:e},t.children),Object(r.b)("div",{css:o},Object(r.b)("div",{className:"container"},Object(r.b)(E,null))),Object(r.b)(J,null))}},57:function(t,n,e){"use strict";e.d(n,"a",(function(){return o}));var c=e(16);var r=e(22);function o(t){return function(t){if(Array.isArray(t))return Object(c.a)(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||Object(r.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},69:function(t,n,e){"use strict";e.r(n);var c=e(54),r=e(57),o=e(49),a=e.n(o),b=e(46),i=e(50),u=e(9),s=e(47),l=e(0),d=e(11),j=e(7),O=e(12),p=e(13),f=(e(53),e(52)),m=e(48);function v(){var t=Object(b.a)(["\n\t\tfont-size: 2rem;\n\t\tfloat: right;\n\t\tcolor: #e34d4d;\n\t\ttransition: color 0.2s;\n\t\tcursor: pointer;\n\t"]);return v=function(){return t},t}function g(){var t=Object(b.a)(["\n\t\tfont-size: 2rem;\n\t\tfloat: right;\n\t\tcolor: #888;\n\t\ttransition: color 0.2s;\n\t\tcursor: pointer;\n\t"]);return g=function(){return t},t}function h(){var t=Object(b.a)(["\n\t\tmin-height: 200px;\n\t\tdisplay: flex;\n\t\tjustify-content: space-around;\n\t\talign-items: center;\n\t\tfont-size: 14px;\n\t\ttext-transform: uppercase;\n\t"]);return h=function(){return t},t}function x(){var t=Object(b.a)(["\n\t\tdisplay: flex;\n\t\theight: 200px;\n\t\talign-items: center;\n\t\tjustify-content: center;\n\t\tbackground: rgb(34, 193, 195);\n\t\tbackground: radial-gradient(circle, rgba(34, 193, 195, 1) 0%, rgba(169, 62, 136, 1) 0%, rgba(193, 65, 169, 1) 19%, rgba(198, 63, 186, 1) 29%, rgba(109, 85, 197, 1) 74%, rgba(76, 93, 201, 1) 79%, rgba(128, 190, 131, 1) 100%, rgba(45, 168, 253, 1) 100%);\n\t\timg {\n\t\t\theight: 100%;\n\t\t\twidth: auto;\n\t\t}\n\t\t}\n\t"]);return x=function(){return t},t}function y(){var t=Object(b.a)(["\n\t\tfont-size: 10px;\n\t\ttext-transform: uppercase;\n\t\tmargin-bottom: 0;\n\t"]);return y=function(){return t},t}function w(){var t=Object(b.a)(["\n\t\tfont-size: 20px;\n\t\tfont-weight: bold;\n\t"]);return w=function(){return t},t}function k(){var t=Object(b.a)(["\n\t\tfont-size: 15px;\n\t\tfont-weight: bold;\n\t"]);return k=function(){return t},t}function I(){var t=Object(b.a)(["\n\t\tborder-top: 6px solid indianred;\n\t\tpadding: 1rem;\n\t"]);return I=function(){return t},t}function C(){var t=Object(b.a)(["\n\t\tflex: 0 0 24%;\n\t\tborder: 1px solid #eee;\n\t\tpadding: 0;\n\t\tmax-width: 24%;\n\t\tmargin-bottom: 15px;\n\t\tbackground: white;\n\t\tborder-radius: 0px 0px 2px 2px;\n\t\tbox-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.13);\n\t\ttransition: box-shadow 0.2s;\n\t\t:hover {\n\t\t\tbox-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.15);\n\t\t\tsvg {\n\t\t\t\tcolor: black;\n\t\t\t}\n\t\t}\n\t"]);return C=function(){return t},t}n.default=function(t){var n=Object(l.useState)([]),e=Object(u.a)(n,2),o=e[0],b=e[1],N=Object(l.useState)({productId:[]}),F=Object(u.a)(N,2),S=F[0],A=F[1],z=Object(l.useContext)(d.a).currentUser,P=p.firestore().collection("favorite"),U=Object(j.h)().pathname.split("/"),E=U.pop()||U.pop(),L=E.charAt(0).toUpperCase()+E.slice(1);function M(){return(M=Object(i.a)(a.a.mark((function t(){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:p.auth().currentUser&&p.firestore().collection("favorite").doc(p.auth().currentUser.email).get().then(function(){var t=Object(i.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n.data()?A(n.data()):A({productId:[]});case 1:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()).catch((function(t){console.error("Error adding document: ",t)}));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function B(t){return J.apply(this,arguments)}function J(){return(J=Object(i.a)(a.a.mark((function t(n){var e,c;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=S,p.auth().currentUser&&(S.productId.length>0?(S.productId.indexOf(n.docId)>-1?e.productId.splice(S.productId.indexOf(n.docId),1):e.productId=[].concat(Object(r.a)(S.productId),[n.docId]),A({productId:[]}),p.firestore().collection("favorite").doc(p.auth().currentUser.email).update(e).then((function(t){A(e)})).catch((function(t){console.error("Error adding document: ",t)}))):(c={productId:[n.docId]},P.doc(p.auth().currentUser.email).set(c).then((function(t){A(c)})).catch((function(t){console.error("Error adding document: ",t)}))));case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function W(){return(W=Object(i.a)(a.a.mark((function t(){var n,e;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("Adverts"==L){t.next=6;break}return t.next=3,p.firestore().collection("adverts").where("category","==",L).get();case 3:n=t.sent,t.next=9;break;case 6:return t.next=8,p.firestore().collection("adverts").get();case 8:n=t.sent;case 9:e=n.docs.map((function(t){var n=t.data();return Object(c.a)({docId:t.id},n)})),b(e);case 11:case"end":return t.stop()}}),t)})))).apply(this,arguments)}Object(l.useEffect)((function(){!function(){M.apply(this,arguments)}()}),[]),Object(l.useEffect)((function(){!function(){W.apply(this,arguments)}()}),[S]);var _=Object(s.a)(C()),H=Object(s.a)(I()),K=Object(s.a)(k()),Q=Object(s.a)(w()),T=Object(s.a)(y()),q=Object(s.a)(x()),D=Object(s.a)(h()),G=Object(s.a)(g()),R=Object(s.a)(v());return Object(s.b)(f.a,null,Object(s.b)("h2",null,"Adverts"),o&&o.length>0?Object(s.b)("div",{className:"row no-gutters d-flex justify-content-between"},o.map((function(t){return Object(s.b)("div",{className:"col-md-3",key:t.docId,css:_},t.file.length>0?t.file.map((function(n,e){return 1===e?void 0:Object(s.b)(O.b,{to:"/advert/"+t.docId,key:t.docId},Object(s.b)("div",{key:e,css:q},Object(s.b)("img",{src:n.url,alt:t.title})))})):Object(s.b)("div",{css:D},"No images"),Object(s.b)("div",{css:H},Object(s.b)("p",{css:K},Object(s.b)(O.b,{to:"/advert/"+t.docId},t.title)),Object(s.b)("p",{css:T},t.city,t.postcode&&", "+t.postcode),Object(s.b)("div",{className:"clearfix"},Object(s.b)("span",{css:Q},"\xa3",t.price),z&&S&&(S.productId.indexOf(t.docId)>-1?Object(s.b)(m.a,{onClick:function(){B(t)},css:R}):Object(s.b)(m.d,{onClick:function(){B(t)},css:G})))))}))):Object(s.b)("p",null,"No data in ",Object(s.b)("code",null,E),"."))}}}]);
//# sourceMappingURL=5.057102fe.chunk.js.map