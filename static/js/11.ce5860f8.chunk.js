(this["webpackJsonpbsc-proj"]=this["webpackJsonpbsc-proj"]||[]).push([[11],{51:function(t,e,n){t.exports=n.p+"static/media/logo.9bc6e05d.png"},52:function(t,e,n){"use strict";var c=n(46),b=n(47),r=n(0),a=n.n(r),o=n(12),i=n(49),l=n.n(i),s=n(54),u=n(50),j=n(9),O=n(7),p=n(13),d=(n(53),n(48));function f(){var t=Object(c.a)(["\n\t\tdisplay: none;\n\t"]);return f=function(){return t},t}function m(){var t=Object(c.a)(["\n\t\tposition: absolute;\n\t\tright: 10px;\n\t\ttop: 11px;\n\t\tcolor: #999;\n\t\tfont-size: 22px;\n\t"]);return m=function(){return t},t}function v(){var t=Object(c.a)(["\n\t\twidth: 100%;\n\t\tlist-style: none;\n\t\tpadding: 0;\n\t\ttop: 37px;\n\t\tposition: absolute;\n\t\tbackground: white;\n\t\tborder: 1px solid #ccc;\n\t\tborder-radius: 0px 0px 0.15rem 0.15rem;\n\t\tz-index: 1;\n\t\tli {\n\t\t\tpadding: 4px 12px;\n\t\t\tborder-bottom: 1px solid #eee;\n\t\t\t:last-of-type {\n\t\t\t\tborder: none;\n\t\t\t}\n\t\t}\n\t"]);return v=function(){return t},t}function g(){var t=Object(c.a)(["\n\t\tposition: relative;\n\t"]);return g=function(){return t},t}var h=function(t){var e=Object(r.useState)([]),n=Object(j.a)(e,2),c=n[0],i=n[1],h=Object(r.useState)(),x=Object(j.a)(h,2),y=x[0],w=x[1],k=Object(O.g)(),N=function(){var t=Object(u.a)(l.a.mark((function t(e){var n,c,b,r,a,o,u,j;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.length,c=e.slice(0,n-1).toLowerCase(),b=e.slice(n-1,e.length),r=e.toLowerCase(),a=c+String.fromCharCode(b.charCodeAt(0)+1).toLowerCase(),o=p.firestore(),t.next=8,o.collection("adverts").where("title_s",">=",r).where("title_s","<",a).get();case 8:u=t.sent,j=u.docs.map((function(t){var e=t.data();return Object(s.a)({docId:t.id},e)})),i(j);case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();Object(r.useEffect)((function(){void 0!==y&&window.location.reload(!0)}),[window.location.pathname]);var C=Object(b.a)(g()),F=Object(b.a)(v()),S=Object(b.a)(m()),P=Object(b.a)(f());return Object(b.b)(a.a.Fragment,null,Object(b.b)("div",{css:C},Object(b.b)(d.i,{css:S}),Object(b.b)("input",{onChange:function(t){var e;void 0!==(e=t.target.value)&&(w(e),N(e))},onKeyPress:function(t){"Enter"===t.key&&k.push("/search/"+y)},className:"form-control",type:"text",placeholder:"What are you looking for.."}),Object(b.b)("input",{type:"submit",value:"Submit",css:P}),c&&c.length>0&&Object(b.b)("ul",{css:F},c.map((function(t){return Object(b.b)("li",{key:t.docId},Object(b.b)(o.b,{to:"/advert/"+t.docId},t.title))})))))},x=n(11),y=n(20),w=n(55);function k(){var t=Object(c.a)(["\n\t\t> a {\n\t\t\tmargin-left: 30px;\n\t\t}\n\t"]);return k=function(){return t},t}var N=function(){var t=Object(O.h)().pathname,e=Object(r.useContext)(x.a).currentUser,n=Object(b.a)(k());return Object(b.b)(a.a.Fragment,null,Object(b.b)("div",{css:n},function(){switch(t){case"/account/myadverts":return Object(b.b)(a.a.Fragment,null,Object(b.b)(o.b,{to:"/adverts"},Object(b.b)(d.k,null)," Adverts"),Object(b.b)(o.b,{to:"/account/favourites"},Object(b.b)(d.d,null)," My favourites"));case"/account/favourites":return Object(b.b)(a.a.Fragment,null,Object(b.b)(o.b,{to:"/adverts"},Object(b.b)(d.k,null)," Adverts"),Object(b.b)(o.b,{to:"/account/myadverts"},Object(b.b)(d.j,null)," My adverts"));case"/":return Object(b.b)(a.a.Fragment,null,!e&&Object(b.b)(a.a.Fragment,null,Object(b.b)(o.b,{to:"/signup"},Object(b.b)(d.l,null)," Sign up"),Object(b.b)(o.b,{to:"/login"},Object(b.b)(d.e,null)," Log in")),e&&Object(b.b)(a.a.Fragment,null,Object(b.b)(o.b,{to:"/post",className:"btn btn-primary"},Object(b.b)(w.a,null)," Post advert"),Object(b.b)(o.b,{to:"/account/myadverts"},Object(b.b)(d.j,null)," My adverts")));case"/signup":case"/login":return;case"/advert/":case"/adverts":return Object(b.b)(a.a.Fragment,null,Object(b.b)(o.b,{to:"/account/myadverts"},Object(b.b)(d.j,null)," My adverts"));default:return}}(),e&&Object(b.b)(a.a.Fragment,null,Object(b.b)(o.b,{to:"/",title:"Sign out",onClick:function(){return y.a.auth().signOut()}},Object(b.b)(d.f,null)," Sign out"),Object(b.b)(o.b,{to:"/post",className:"btn btn-primary"},Object(b.b)(w.a,null)," Post advert"))))},C=n(51),F=n.n(C);function S(){var t=Object(c.a)(["\n\tflex: 1 1 auto;\n"]);return S=function(){return t},t}function P(){var t=Object(c.a)(["\n\tmargin-top: 5px;\n\t// border-bottom: 1px solid #ddd;\n\t// margin-bottom: 15px;\n\talign-items: center;\n\t> div {\n\t\tmargin: 10px;\n\t}\n"]);return P=function(){return t},t}var A=Object(b.a)(P()),z=Object(b.a)(S()),E=function(){return Object(b.b)(a.a.Fragment,null,Object(b.b)("div",{css:A,className:"clearfix d-flex"},Object(b.b)("div",null,Object(b.b)("div",null,Object(b.b)(o.b,{to:"/"},Object(b.b)("img",{src:F.a,alt:"Logo",width:"80",title:"5th - buy and sell"})))),Object(b.b)("div",{css:z},Object(b.b)(h,null)),Object(b.b)(N,null)))};function L(){var t=Object(c.a)(["\n\t\tmargin: 80px 0;\n\t\tli {\n\t\t\tmargin-bottom: 10px;\n\t\t\t:first-of-type {\n\t\t\t\tmargin-bottom: 20px;\n\t\t\t\tfont-weight: bold;\n\t\t\t\ttext-transform: uppercase;\n\t\t\t}\n\t\t}\n\t"]);return L=function(){return t},t}var M=function(){var t=Object(b.a)(L());return Object(b.b)(a.a.Fragment,null,Object(b.b)("div",{className:"row"},Object(b.b)("ul",{className:"list-unstyled col-md-3",css:t},Object(b.b)("li",null,"About"),Object(b.b)("li",null,Object(b.b)(o.b,{to:"#"},"About 5th")),Object(b.b)("li",null,Object(b.b)(o.b,{to:"#"},"Press Contact")),Object(b.b)("li",null,Object(b.b)(o.b,{to:"#"},"Careers"))),Object(b.b)("ul",{className:"list-unstyled col-md-3",css:t},Object(b.b)("li",null,"Help"),Object(b.b)("li",null,Object(b.b)(o.b,{to:"#"},"FAQ")),Object(b.b)("li",null,Object(b.b)(o.b,{to:"#"},"Contact")),Object(b.b)("li",null,Object(b.b)(o.b,{to:"#"},"Policies"))),Object(b.b)("ul",{className:"list-unstyled col-md-3",css:t},Object(b.b)("li",null,"More"),Object(b.b)("li",null,Object(b.b)(o.b,{to:"#"},"Cars")),Object(b.b)("li",null,Object(b.b)(o.b,{to:"#"},"Insurance")),Object(b.b)("li",null,Object(b.b)(o.b,{to:"#"},"Business"))),Object(b.b)("ul",{className:"list-unstyled col-md-3",css:t},Object(b.b)("li",null,"Others"),Object(b.b)("li",null,Object(b.b)(o.b,{to:"#"},"Popular searches")),Object(b.b)("li",null,Object(b.b)(o.b,{to:"#"},"Social media")),Object(b.b)("li",null,Object(b.b)(o.b,{to:"#"},"Blog")))))},B=n(21);function I(){var t=Object(c.a)(["\n\tposition: absolute;\n\tright: 0;\n\tbottom: 0;\n\tbackground: white;\n\tpadding: 20px;\n\twidth: 360px;\n\tfont-size: 14px;\n\tbox-shadow: rgba(0, 0, 0, 0.15) 0px 3px 13px 0px;\n\tborder-radius: 10px 0px 0px 0;\n"]);return I=function(){return t},t}var J=Object(b.a)(I()),K=function(){var t=Object(r.useContext)(B.a),e=Object(j.a)(t,2),n=e[0],c=e[1];return Object(b.b)(a.a.Fragment,null,Object(b.b)(a.a.Fragment,null,!n&&Object(b.b)("div",{css:J},Object(b.b)("p",null,"We use cookies for the best experience. By using the site you accept our cookie policy ",Object(b.b)(o.b,{to:"cookies"},"Cookie Policy"),"."),Object(b.b)("p",null,"Also, check our ",Object(b.b)(o.b,{to:"privacy-policy"},"Privacy Policy")," for more information."),Object(b.b)("div",{className:"text-right"},Object(b.b)("button",{className:"btn btn-outline-primary",onClick:function(){c((function(t){return!t}))}},"OK")))))};function W(){var t=Object(c.a)(["\n\t\tbackground: aliceblue;\n\t\tmargin-top: 15px;\n\t"]);return W=function(){return t},t}function _(){var t=Object(c.a)(["\n\t\tbox-shadow: 0px 1px 2px rgba(0, 0, 0, 0.18) !important;\n\t\tmargin-bottom: 15px;\n\t"]);return _=function(){return t},t}function H(){var t=Object(c.a)(["\n\t\talign-items: center;\n\t\tmin-height: 24em;\n\t\tjustify-content: center;\n\t"]);return H=function(){return t},t}function Q(){var t=Object(c.a)(["\n\t\tposition: relative;\n\t\th1,\n\t\th2 {\n\t\t\tmargin-bottom: 20px;\n\t\t}\n\t"]);return Q=function(){return t},t}e.a=function(t){var e=Object(b.a)(Q()),n=Object(b.a)(H()),c=Object(b.a)(_()),r=Object(b.a)(W());return Object(b.b)("div",{css:e},Object(b.b)("div",{css:c},Object(b.b)("div",{className:"container"},Object(b.b)(E,null))),Object(b.b)("div",{className:"container",css:n},t.children),Object(b.b)("div",{css:r},Object(b.b)("div",{className:"container"},Object(b.b)(M,null))),Object(b.b)(K,null))}},76:function(t,e,n){"use strict";n.r(e);var c=n(49),b=n.n(c),r=n(46),a=n(50),o=n(56),i=n(54),l=n(9),s=n(47),u=n(0),j=n(13),O=n(48),p=(n(53),n(30),n(52)),d=n(12);function f(){var t=Object(r.a)(["\n\tul {\n\t\tdisplay: flex;\n\t\tjustify-content: space-evenly;\n\t\tpadding: 70px 30px;\n\t\tmargin: 30px 0;\n\t\tcolor: #666;\n\t\tletter-spacing: -1px;\n\t\ttext-transform: uppercase;\n\t\tfont-size: 1rem;\n\t}\n"]);return f=function(){return t},t}var m=Object(s.a)(f()),v=function(){return Object(s.b)("div",{css:m},Object(s.b)("ul",{className:"list-unstyled"},Object(s.b)("li",null,Object(s.b)(d.b,{to:"/adverts/clothes"},"Clothes")),Object(s.b)("li",null,Object(s.b)(d.b,{to:"/adverts/electronics"},"Electronics")),Object(s.b)("li",null,Object(s.b)(d.b,{to:"/adverts/vehicles"},"Vehicles")),Object(s.b)("li",null,Object(s.b)(d.b,{to:"/adverts/toys"},"Toys")),Object(s.b)("li",null,Object(s.b)(d.b,{to:"/adverts/books"},"Books"))))};function g(){var t=Object(r.a)(["\n\t\tflex-direction: column;\n\t\tjustify-content: space-between;\n\t\tpadding: 20px;\n\t"]);return g=function(){return t},t}function h(){var t=Object(r.a)(["\n\t\tmin-height: 200px;\n\t\tdisplay: flex;\n\t\tjustify-content: space-around;\n\t\talign-items: center;\n\t\tfont-size: 14px;\n\t\ttext-transform: uppercase;\n\t"]);return h=function(){return t},t}function x(){var t=Object(r.a)(["\n\t\ttext-align: center;\n\t\tbackground: rgb(34, 193, 195);\n\t\tbackground: radial-gradient(circle, rgba(34, 193, 195, 1) 0%, rgba(169, 62, 136, 1) 0%, rgba(193, 65, 169, 1) 19%, rgba(198, 63, 186, 1) 29%, rgba(109, 85, 197, 1) 74%, rgba(76, 93, 201, 1) 79%, rgba(128, 190, 131, 1) 100%, rgba(45, 168, 253, 1) 100%);\n\t\timg {\n\t\t\tmax-height: 430px;\n\t\t}\n\t"]);return x=function(){return t},t}function y(){var t=Object(r.a)(['\n\t\tborder: 11px solid #eee;\n\t\t> [class*="col-"] > div {\n\t\t\tbackground: white;\n\n\t\t\theight: 100%;\n\t\t}\n\t']);return y=function(){return t},t}e.default=function(t){var e=Object(u.useReducer)((function(t,e){return Object(i.a)({},t,{},e)}),{postcode:"",category:"",description:"",type:"",price:"",title:"",email:"",phone:"",city:"",file:[]}),n=Object(l.a)(e,2),c=n[0],r=n[1],d=Object(u.useState)("Show phone"),f=Object(l.a)(d,2),m=f[0],w=f[1],k=Object(u.useState)("Show email"),N=Object(l.a)(k,2),C=N[0],F=N[1];Object(u.useEffect)((function(){t.match.params.id&&function(){P.apply(this,arguments)}(t.match.params.id)}),[]);var S=function(t,e){r(Object(o.a)({},t,e))};function P(){return(P=Object(a.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:j.firestore().collection("adverts").doc(t.match.params.id).get().then(function(){var t=Object(a.a)(b.a.mark((function t(e){var n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.exists?(n=e.data(),S("email",n.email),S("postcode",n.postcode),S("category",n.category),S("description",n.description),S("post",n.post),S("price",n.price),S("title",n.title),S("phone",n.phone),S("city",n.city),S("file",n.file)):console.log("No such document!");case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){console.error("Error adding document: ",t)}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var A=Object(s.a)(y()),z=Object(s.a)(x()),E=Object(s.a)(h()),L=Object(s.a)(g());return Object(s.b)(p.a,null,Object(s.b)("h1",null,c.title),Object(s.b)("div",{className:"row no-gutters",css:A},Object(s.b)("div",{className:"col-7"},Object(s.b)("div",{className:""},c.file.length>0?c.file.map((function(t,e){return 1===e?void 0:Object(s.b)("div",{css:z,key:e},Object(s.b)("img",{src:t.url,alt:t.title}))})):Object(s.b)("div",{css:E},"No images"))),Object(s.b)("div",{className:"col-5 position-relative"},Object(s.b)("div",{css:L,className:"d-flex"},Object(s.b)("div",{className:"clearfix"},Object(s.b)("button",{className:"btn btn-outline-primary",onClick:function(){w(c.phone)}},Object(s.b)(O.h,null)," ",m),Object(s.b)("button",{className:"btn btn-outline-primary float-right",onClick:function(){F(c.email)}},Object(s.b)(O.g,null)," ",C),Object(s.b)("div",{className:"w-100 mb-5"}),Object(s.b)("h3",null,"\xa3",c.price),Object(s.b)("div",{className:"w-100 mb-5"}),Object(s.b)("div",{className:"description"},c.description)),Object(s.b)("span",null,c.city,c.postcode&&", "+c.postcode," ",2===c.post&&Object(s.b)("small",null,"(collection only)")," ",1===c.post&&Object(s.b)("small",null,"(will also post)"))))),Object(s.b)(v,null))}}}]);
//# sourceMappingURL=11.ce5860f8.chunk.js.map