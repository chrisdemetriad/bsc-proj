(this["webpackJsonpbsc-proj"]=this["webpackJsonpbsc-proj"]||[]).push([[11],{51:function(t,e,n){t.exports=n.p+"static/media/logo.9bc6e05d.png"},52:function(t,e,n){"use strict";var c=n(46),b=n(47),a=n(0),r=n.n(a),o=n(12),i=n(49),l=n.n(i),s=n(54),u=n(50),j=n(9),O=n(7),d=n(13),p=(n(53),n(48));function m(){var t=Object(c.a)(["\n\t\tdisplay: none;\n\t"]);return m=function(){return t},t}function f(){var t=Object(c.a)(["\n\t\tposition: absolute;\n\t\tright: 10px;\n\t\ttop: 11px;\n\t\tcolor: #999;\n\t\tfont-size: 22px;\n\t"]);return f=function(){return t},t}function v(){var t=Object(c.a)(["\n\t\twidth: 100%;\n\t\tlist-style: none;\n\t\tpadding: 0;\n\t\ttop: 37px;\n\t\tposition: absolute;\n\t\tbackground: white;\n\t\tborder: 1px solid #ccc;\n\t\tborder-radius: 0px 0px 0.15rem 0.15rem;\n\t\tz-index: 1;\n\t\tli {\n\t\t\tpadding: 4px 12px;\n\t\t\tborder-bottom: 1px solid #eee;\n\t\t\t:last-of-type {\n\t\t\t\tborder: none;\n\t\t\t}\n\t\t}\n\t"]);return v=function(){return t},t}function g(){var t=Object(c.a)(["\n\t\tposition: relative;\n\t\t@media (max-width: 800px) {\n\t\t\tdisplay: none;\n\t\t}\n\t"]);return g=function(){return t},t}var h=function(t){var e=Object(a.useState)([]),n=Object(j.a)(e,2),c=n[0],i=n[1],h=Object(a.useState)(),x=Object(j.a)(h,2),y=x[0],w=x[1],N=Object(O.g)(),k=function(){var t=Object(u.a)(l.a.mark((function t(e){var n,c,b,a,r,o,u,j;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.length,c=e.slice(0,n-1).toLowerCase(),b=e.slice(n-1,e.length),a=e.toLowerCase(),r=c+String.fromCharCode(b.charCodeAt(0)+1).toLowerCase(),o=d.firestore(),t.next=8,o.collection("adverts").where("title_s",">=",a).where("title_s","<",r).get();case 8:u=t.sent,j=u.docs.map((function(t){var e=t.data();return Object(s.a)({docId:t.id},e)})),i(j);case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();Object(a.useEffect)((function(){void 0!==y&&window.location.reload(!0)}),[window.location.pathname]);var C=Object(b.a)(g()),F=Object(b.a)(v()),S=Object(b.a)(f()),P=Object(b.a)(m());return Object(b.b)(r.a.Fragment,null,Object(b.b)("div",{css:C},Object(b.b)(p.i,{css:S}),Object(b.b)("input",{onChange:function(t){var e;void 0!==(e=t.target.value)&&(w(e),k(e))},onKeyPress:function(t){"Enter"===t.key&&N.push("/search/"+y)},className:"form-control",type:"text",placeholder:"What are you looking for.."}),Object(b.b)("input",{type:"submit",value:"Submit",css:P}),c&&c.length>0&&Object(b.b)("ul",{css:F},c.map((function(t){return Object(b.b)("li",{key:t.docId},Object(b.b)(o.b,{to:"/advert/"+t.docId},t.title))})))))},x=n(11),y=n(20),w=n(55);function N(){var t=Object(c.a)(["\n\t\t> a {\n\t\t\tmargin-left: 30px;\n\t\t\t@media (max-width: 800px) {\n\t\t\t\tmargin-left: 3px;\n\t\t\t}\n\t\t\t@media (max-width: 600px) {\n\t\t\t\tmargin-left: 6px;\n\t\t\t}\n\t\t}\n\t"]);return N=function(){return t},t}var k=function(){var t=Object(O.h)().pathname,e=Object(a.useContext)(x.a).currentUser,n=Object(b.a)(N());return Object(b.b)(r.a.Fragment,null,Object(b.b)("div",{css:n},function(){switch(t){case"/account/myadverts":return Object(b.b)(r.a.Fragment,null,Object(b.b)(o.b,{to:"/adverts"},Object(b.b)(p.k,null)," Adverts"),Object(b.b)(o.b,{to:"/account/favourites"},Object(b.b)(p.d,null)," My favourites"));case"/account/favourites":return Object(b.b)(r.a.Fragment,null,Object(b.b)(o.b,{to:"/adverts"},Object(b.b)(p.k,null)," Adverts"),Object(b.b)(o.b,{to:"/account/myadverts"},Object(b.b)(p.j,null)," My adverts"));case"/":return Object(b.b)(r.a.Fragment,null,!e&&Object(b.b)(r.a.Fragment,null,Object(b.b)(o.b,{to:"/signup"},Object(b.b)(p.l,null)," Sign up"),Object(b.b)(o.b,{to:"/login"},Object(b.b)(p.e,null)," Log in")),e&&Object(b.b)(r.a.Fragment,null,Object(b.b)(o.b,{to:"/post",className:"btn btn-primary"},Object(b.b)(w.a,null)," Post advert"),Object(b.b)(o.b,{to:"/account/myadverts"},Object(b.b)(p.j,null)," My adverts")));case"/signup":case"/login":return;case"/advert/":case"/adverts":return Object(b.b)(r.a.Fragment,null,Object(b.b)(o.b,{to:"/account/myadverts"},Object(b.b)(p.j,null)," My adverts"));default:return}}(),e&&Object(b.b)(r.a.Fragment,null,Object(b.b)(o.b,{to:"/",title:"Sign out",onClick:function(){return y.a.auth().signOut()}},Object(b.b)(p.f,null)," Sign out"),Object(b.b)(o.b,{to:"/post",className:"btn btn-primary"},Object(b.b)(w.a,null)," Post advert"))))},C=n(51),F=n.n(C);function S(){var t=Object(c.a)(["\n\tflex: 1 1 auto;\n"]);return S=function(){return t},t}function P(){var t=Object(c.a)(["\n\tmargin-top: 5px;\n\t// border-bottom: 1px solid #ddd;\n\t// margin-bottom: 15px;\n\talign-items: center;\n\t> div {\n\t\tmargin: 0;\n\t}\n"]);return P=function(){return t},t}var A=Object(b.a)(P()),L=Object(b.a)(S()),E=function(){return Object(b.b)(r.a.Fragment,null,Object(b.b)("div",{css:A,className:"clearfix d-flex"},Object(b.b)("div",null,Object(b.b)(o.b,{to:"/"},Object(b.b)("img",{src:F.a,alt:"Logo",width:"80",title:"5th - BUY AND SELL"}))),Object(b.b)("div",{css:L},Object(b.b)(h,null)),Object(b.b)(k,null)))};function z(){var t=Object(c.a)(["\n\t\tmargin: 80px 0;\n\t\tli {\n\t\t\tmargin-bottom: 10px;\n\t\t\t:first-of-type {\n\t\t\t\tmargin-bottom: 20px;\n\t\t\t\tfont-weight: bold;\n\t\t\t\ttext-transform: uppercase;\n\t\t\t}\n\t\t}\n\t"]);return z=function(){return t},t}var B=function(){var t=Object(b.a)(z());return Object(b.b)(r.a.Fragment,null,Object(b.b)("div",{className:"row"},Object(b.b)("ul",{className:"list-unstyled col-md-3",css:t},Object(b.b)("li",null,"About"),Object(b.b)("li",null,Object(b.b)(o.b,{to:"#"},"About 5th")),Object(b.b)("li",null,Object(b.b)(o.b,{to:"#"},"Press Contact")),Object(b.b)("li",null,Object(b.b)(o.b,{to:"#"},"Careers"))),Object(b.b)("ul",{className:"list-unstyled col-md-3",css:t},Object(b.b)("li",null,"Help"),Object(b.b)("li",null,Object(b.b)(o.b,{to:"#"},"FAQ")),Object(b.b)("li",null,Object(b.b)(o.b,{to:"#"},"Contact")),Object(b.b)("li",null,Object(b.b)(o.b,{to:"#"},"Policies"))),Object(b.b)("ul",{className:"list-unstyled col-md-3",css:t},Object(b.b)("li",null,"More"),Object(b.b)("li",null,Object(b.b)(o.b,{to:"#"},"Cars")),Object(b.b)("li",null,Object(b.b)(o.b,{to:"#"},"Insurance")),Object(b.b)("li",null,Object(b.b)(o.b,{to:"#"},"Business"))),Object(b.b)("ul",{className:"list-unstyled col-md-3",css:t},Object(b.b)("li",null,"Others"),Object(b.b)("li",null,Object(b.b)(o.b,{to:"#"},"Popular searches")),Object(b.b)("li",null,Object(b.b)(o.b,{to:"#"},"Social media")),Object(b.b)("li",null,Object(b.b)(o.b,{to:"#"},"Blog")))))},M=n(21);function I(){var t=Object(c.a)(["\n\tposition: absolute;\n\tright: 0;\n\tbottom: 0;\n\tbackground: white;\n\tpadding: 20px;\n\twidth: 360px;\n\tfont-size: 14px;\n\tbox-shadow: rgba(0, 0, 0, 0.15) 0px 3px 13px 0px;\n\tborder-radius: 10px 0px 0px 0;\n"]);return I=function(){return t},t}var J=Object(b.a)(I()),K=function(){var t=Object(a.useContext)(M.a),e=Object(j.a)(t,2),n=e[0],c=e[1];return Object(b.b)(r.a.Fragment,null,Object(b.b)(r.a.Fragment,null,!n&&Object(b.b)("div",{css:J},Object(b.b)("p",null,"We use cookies for the best experience. By using the site you accept our cookie policy ",Object(b.b)(o.b,{to:"cookies"},"Cookie Policy"),"."),Object(b.b)("p",null,"Also, check our ",Object(b.b)(o.b,{to:"privacy-policy"},"Privacy Policy")," for more information."),Object(b.b)("div",{className:"text-right"},Object(b.b)("button",{className:"btn btn-outline-primary",onClick:function(){c((function(t){return!t}))}},"OK")))))};function U(){var t=Object(c.a)(["\n\t\tbox-shadow: 0px -2px 2px rgba(0, 0, 0, 0.18) !important;\n\t\tmargin-top: 15px;\n\t"]);return U=function(){return t},t}function W(){var t=Object(c.a)(["\n\t\tbox-shadow: 0px 1px 2px rgba(0, 0, 0, 0.18) !important;\n\t\tmargin-bottom: 15px;\n\t\t> div {\n\t\t\t@media (max-width: 1110px) {\n\t\t\t\tmargin: 0;\n\t\t\t\twidth: 100%;\n\t\t\t\tmax-width: 100%;\n\t\t\t}\n\t\t}\n\t"]);return W=function(){return t},t}function _(){var t=Object(c.a)(["\n\t\talign-items: center;\n\t\tmin-height: 24em;\n\t\tjustify-content: center;\n\t\t@media (max-width: 1110px) {\n\t\t\tmax-width: 100%;\n\t\t}\n\t"]);return _=function(){return t},t}function D(){var t=Object(c.a)(["\n\t\tposition: relative;\n\t\th1,\n\t\th2 {\n\t\t\tmargin-bottom: 20px;\n\t\t}\n\t"]);return D=function(){return t},t}e.a=function(t){var e=Object(b.a)(D()),n=Object(b.a)(_()),c=Object(b.a)(W()),a=Object(b.a)(U());return Object(b.b)("div",{css:e},Object(b.b)("div",{css:c},Object(b.b)("div",{className:"container"},Object(b.b)(E,null))),Object(b.b)("div",{className:"container",css:n},t.children),Object(b.b)("div",{css:a},Object(b.b)("div",{className:"container"},Object(b.b)(B,null))),Object(b.b)(K,null))}},77:function(t,e,n){"use strict";n.r(e);var c=n(49),b=n.n(c),a=n(46),r=n(50),o=n(57),i=n(54),l=n(9),s=n(47),u=n(0),j=n(13),O=n(48),d=(n(53),n(30),n(52)),p=n(12);function m(){var t=Object(a.a)(["\n\tul {\n\t\tdisplay: flex;\n\t\tjustify-content: space-evenly;\n\t\tpadding: 70px 30px;\n\t\tmargin: 30px 0;\n\t\tcolor: #666;\n\t\tletter-spacing: -1px;\n\t\ttext-transform: uppercase;\n\t\tfont-size: 1rem;\n\t}\n"]);return m=function(){return t},t}var f=Object(s.a)(m()),v=function(){return Object(s.b)("div",{css:f},Object(s.b)("ul",{className:"list-unstyled"},Object(s.b)("li",null,Object(s.b)(p.b,{to:"/adverts/clothes"},"Clothes")),Object(s.b)("li",null,Object(s.b)(p.b,{to:"/adverts/electronics"},"Electronics")),Object(s.b)("li",null,Object(s.b)(p.b,{to:"/adverts/vehicles"},"Vehicles")),Object(s.b)("li",null,Object(s.b)(p.b,{to:"/adverts/toys"},"Toys")),Object(s.b)("li",null,Object(s.b)(p.b,{to:"/adverts/books"},"Books"))))};function g(){var t=Object(a.a)(["\n\t\tflex-direction: column;\n\t\tjustify-content: space-between;\n\t\tpadding: 20px;\n\t"]);return g=function(){return t},t}function h(){var t=Object(a.a)(["\n\t\tmin-height: 200px;\n\t\tdisplay: flex;\n\t\tjustify-content: space-around;\n\t\talign-items: center;\n\t\tfont-size: 14px;\n\t\ttext-transform: uppercase;\n\t"]);return h=function(){return t},t}function x(){var t=Object(a.a)(["\n\t\ttext-align: center;\n\t\tbackground: rgb(34, 193, 195);\n\t\tbackground: radial-gradient(circle, rgba(34, 193, 195, 1) 0%, rgba(169, 62, 136, 1) 0%, rgba(193, 65, 169, 1) 19%, rgba(198, 63, 186, 1) 29%, rgba(109, 85, 197, 1) 74%, rgba(76, 93, 201, 1) 79%, rgba(128, 190, 131, 1) 100%, rgba(45, 168, 253, 1) 100%);\n\t\timg {\n\t\t\tmax-height: 430px;\n\t\t}\n\t"]);return x=function(){return t},t}function y(){var t=Object(a.a)(['\n\t\tborder: 11px solid #eee;\n\t\t> [class*="col-"] > div {\n\t\t\tbackground: white;\n\n\t\t\theight: 100%;\n\t\t}\n\t']);return y=function(){return t},t}e.default=function(t){var e=Object(u.useReducer)((function(t,e){return Object(i.a)({},t,{},e)}),{postcode:"",category:"",description:"",type:"",price:"",title:"",email:"",phone:"",city:"",file:[]}),n=Object(l.a)(e,2),c=n[0],a=n[1],p=Object(u.useState)("Show phone"),m=Object(l.a)(p,2),f=m[0],w=m[1],N=Object(u.useState)("Show email"),k=Object(l.a)(N,2),C=k[0],F=k[1];Object(u.useEffect)((function(){t.match.params.id&&function(){P.apply(this,arguments)}(t.match.params.id)}),[]);var S=function(t,e){a(Object(o.a)({},t,e))};function P(){return(P=Object(r.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:j.firestore().collection("adverts").doc(t.match.params.id).get().then(function(){var t=Object(r.a)(b.a.mark((function t(e){var n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.exists?(n=e.data(),S("email",n.email),S("postcode",n.postcode),S("category",n.category),S("description",n.description),S("post",n.post),S("price",n.price),S("title",n.title),S("phone",n.phone),S("city",n.city),S("file",n.file)):console.log("No such document!");case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){console.error("Error adding document: ",t)}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var A=Object(s.a)(y()),L=Object(s.a)(x()),E=Object(s.a)(h()),z=Object(s.a)(g());return Object(s.b)(d.a,null,Object(s.b)("h1",null,c.title),Object(s.b)("div",{className:"row no-gutters",css:A},Object(s.b)("div",{className:"col-sm-12 col-md-5 col-7 "},Object(s.b)("div",{className:""},c.file.length>0?c.file.map((function(t,e){return 1===e?void 0:Object(s.b)("div",{css:L,key:e},Object(s.b)("img",{src:t.url,alt:t.title}))})):Object(s.b)("div",{css:E},"No images"))),Object(s.b)("div",{className:"col-sm-12 col-md-7 col-5 position-relative"},Object(s.b)("div",{css:z,className:"d-flex"},Object(s.b)("div",{className:"clearfix"},Object(s.b)("button",{className:"btn btn-outline-primary",onClick:function(){w(c.phone)}},Object(s.b)(O.h,null)," ",f),Object(s.b)("button",{className:"btn btn-outline-primary float-right",onClick:function(){F(c.email)}},Object(s.b)(O.g,null)," ",C),Object(s.b)("div",{className:"w-100 mb-5"}),Object(s.b)("h3",null,"\xa3",c.price),Object(s.b)("div",{className:"w-100 mb-5"}),Object(s.b)("div",{className:"description"},c.description)),Object(s.b)("span",null,c.city,c.postcode&&", "+c.postcode," ",2===c.post&&Object(s.b)("small",null,"(collection only)")," ",1===c.post&&Object(s.b)("small",null,"(will also post)"))))),Object(s.b)(v,null))}}}]);
//# sourceMappingURL=11.dd8f92c8.chunk.js.map