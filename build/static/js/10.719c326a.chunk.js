(this.webpackJsonpbbk=this.webpackJsonpbbk||[]).push([[10],{51:function(t,e,n){t.exports=n.p+"static/media/logo.9bc6e05d.png"},52:function(t,e,n){"use strict";var c=n(46),b=n(47),r=n(0),a=n.n(r),o=n(12),i=n(49),u=n.n(i),l=n(54),s=n(50),j=n(9),O=n(7),d=n(13),p=(n(53),n(48));function f(){var t=Object(c.a)(["\n\t\tdisplay: none;\n\t"]);return f=function(){return t},t}function m(){var t=Object(c.a)(["\n\t\tposition: absolute;\n\t\tright: 10px;\n\t\ttop: 11px;\n\t\tcolor: #999;\n\t\tfont-size: 22px;\n\t"]);return m=function(){return t},t}function g(){var t=Object(c.a)(["\n\t\twidth: 100%;\n\t\tlist-style: none;\n\t\tpadding: 0;\n\t\ttop: 37px;\n\t\tposition: absolute;\n\t\tbackground: white;\n\t\tborder: 1px solid #ccc;\n\t\tborder-radius: 0px 0px 0.15rem 0.15rem;\n\t\tz-index: 1;\n\t\tli {\n\t\t\tpadding: 4px 12px;\n\t\t\tborder-bottom: 1px solid #eee;\n\t\t\t:last-of-type {\n\t\t\t\tborder: none;\n\t\t\t}\n\t\t}\n\t"]);return g=function(){return t},t}function v(){var t=Object(c.a)(["\n\t\tposition: relative;\n\t"]);return v=function(){return t},t}var x=function(t){var e=Object(r.useState)([]),n=Object(j.a)(e,2),c=n[0],i=n[1],x=Object(r.useState)(),h=Object(j.a)(x,2),y=h[0],w=h[1],k=Object(O.g)(),N=function(){var t=Object(s.a)(u.a.mark((function t(e){var n,c,b,r,a,o,s,j;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.length,c=e.slice(0,n-1).toLowerCase(),b=e.slice(n-1,e.length),r=e.toLowerCase(),a=c+String.fromCharCode(b.charCodeAt(0)+1).toLowerCase(),o=d.firestore(),t.next=8,o.collection("adverts").where("title_s",">=",r).where("title_s","<",a).get();case 8:s=t.sent,j=s.docs.map((function(t){var e=t.data();return Object(l.a)({docId:t.id},e)})),i(j);case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),C=Object(b.a)(v()),F=Object(b.a)(g()),S=Object(b.a)(m()),I=Object(b.a)(f());return Object(b.b)(a.a.Fragment,null,Object(b.b)("div",{css:C},Object(b.b)("form",{onSubmit:function(t){k.push("/search/"+y)}},Object(b.b)(p.i,{css:S}),Object(b.b)("input",{onChange:function(t){var e;e=t.target.value,w(e),N(e)},className:"form-control",type:"text",placeholder:"What are you looking for.."}),Object(b.b)("input",{type:"submit",value:"Submit",css:I}),c&&c.length>0&&Object(b.b)("ul",{css:F},c.map((function(t){return Object(b.b)("li",{key:t.docId},Object(b.b)(o.b,{to:"/advert/"+t.docId},t.title))}))))))},h=n(11),y=n(20),w=n(55);function k(){var t=Object(c.a)(["\n\t\t> a {\n\t\t\tmargin-left: 30px;\n\t\t}\n\t"]);return k=function(){return t},t}var N=function(){var t=Object(O.h)().pathname,e=Object(r.useContext)(h.a).currentUser,n=Object(b.a)(k());return Object(b.b)(a.a.Fragment,null,Object(b.b)("div",{css:n},function(){switch(t){case"/account/myadverts":return Object(b.b)(a.a.Fragment,null,Object(b.b)(o.b,{to:"/adverts"},Object(b.b)(p.k,null)," Adverts"),Object(b.b)(o.b,{to:"/account/favourites"},Object(b.b)(p.d,null)," My favourites"));case"/account/favourites":return Object(b.b)(a.a.Fragment,null,Object(b.b)(o.b,{to:"/adverts"},Object(b.b)(p.k,null)," Adverts"),Object(b.b)(o.b,{to:"/account/myadverts"},Object(b.b)(p.j,null)," My adverts"));case"/":return Object(b.b)(a.a.Fragment,null,!e&&Object(b.b)(a.a.Fragment,null,Object(b.b)(o.b,{to:"/signup"},Object(b.b)(p.l,null)," Sign up"),Object(b.b)(o.b,{to:"/login"},Object(b.b)(p.e,null)," Log in")),e&&Object(b.b)(a.a.Fragment,null,Object(b.b)(o.b,{to:"/post",className:"btn btn-primary"},Object(b.b)(w.a,null)," Post advert"),Object(b.b)(o.b,{to:"/account/myadverts"},Object(b.b)(p.j,null)," My adverts")));case"/signup":case"/login":return;case"/advert/":case"/adverts":return Object(b.b)(a.a.Fragment,null,Object(b.b)(o.b,{to:"/account/myadverts"},Object(b.b)(p.j,null)," My adverts"));default:return}}(),e&&Object(b.b)(a.a.Fragment,null,Object(b.b)(o.b,{to:"/",title:"Sign out",onClick:function(){return y.a.auth().signOut()}},Object(b.b)(p.f,null)," Sign out"),Object(b.b)(o.b,{to:"/post",className:"btn btn-primary"},Object(b.b)(w.a,null)," Post advert"))))},C=n(51),F=n.n(C);function S(){var t=Object(c.a)(["\n\tflex: 1 1 auto;\n"]);return S=function(){return t},t}function I(){var t=Object(c.a)(["\n\tmargin-top: 5px;\n\t// border-bottom: 1px solid #ddd;\n\t// margin-bottom: 15px;\n\talign-items: center;\n\t> div {\n\t\tmargin: 10px;\n\t}\n"]);return I=function(){return t},t}var P=Object(b.a)(I()),A=Object(b.a)(S()),M=function(){return Object(b.b)(a.a.Fragment,null,Object(b.b)("div",{css:P,className:"clearfix d-flex"},Object(b.b)("div",null,Object(b.b)("div",null,Object(b.b)(o.b,{to:"/"},Object(b.b)("img",{src:F.a,alt:"Logo",width:"80"})))),Object(b.b)("div",{css:A},Object(b.b)(x,null)),Object(b.b)(N,null)))};function L(){var t=Object(c.a)(["\n\t\tmargin: 80px 0;\n\t\tli {\n\t\t\tmargin-bottom: 10px;\n\t\t\t:first-of-type {\n\t\t\t\tmargin-bottom: 20px;\n\t\t\t\tfont-weight: bold;\n\t\t\t\ttext-transform: uppercase;\n\t\t\t}\n\t\t}\n\t"]);return L=function(){return t},t}var z=function(){var t=Object(b.a)(L());return Object(b.b)(a.a.Fragment,null,Object(b.b)("div",{className:"row"},Object(b.b)("ul",{className:"list-unstyled col-md-3",css:t},Object(b.b)("li",null,"About"),Object(b.b)("li",null,Object(b.b)(o.b,{to:"#"},"About 5th")),Object(b.b)("li",null,Object(b.b)(o.b,{to:"#"},"Press Contact")),Object(b.b)("li",null,Object(b.b)(o.b,{to:"#"},"Careers"))),Object(b.b)("ul",{className:"list-unstyled col-md-3",css:t},Object(b.b)("li",null,"Help"),Object(b.b)("li",null,Object(b.b)(o.b,{to:"#"},"FAQ")),Object(b.b)("li",null,Object(b.b)(o.b,{to:"#"},"Contact")),Object(b.b)("li",null,Object(b.b)(o.b,{to:"#"},"Policies"))),Object(b.b)("ul",{className:"list-unstyled col-md-3",css:t},Object(b.b)("li",null,"More"),Object(b.b)("li",null,Object(b.b)(o.b,{to:"#"},"Cars")),Object(b.b)("li",null,Object(b.b)(o.b,{to:"#"},"Insurance")),Object(b.b)("li",null,Object(b.b)(o.b,{to:"#"},"Business"))),Object(b.b)("ul",{className:"list-unstyled col-md-3",css:t},Object(b.b)("li",null,"Others"),Object(b.b)("li",null,Object(b.b)(o.b,{to:"#"},"Popular searches")),Object(b.b)("li",null,Object(b.b)(o.b,{to:"#"},"Social media")),Object(b.b)("li",null,Object(b.b)(o.b,{to:"#"},"Blog")))))},B=n(21);function W(){var t=Object(c.a)(["\n\tposition: absolute;\n\tright: 0;\n\tbottom: 0;\n\tbackground: white;\n\tpadding: 20px;\n\twidth: 360px;\n\tfont-size: 14px;\n\tbox-shadow: rgba(0, 0, 0, 0.15) 0px 3px 13px 0px;\n\tborder-radius: 10px 0px 0px 0;\n"]);return W=function(){return t},t}var J=Object(b.a)(W()),U=function(){var t=Object(r.useContext)(B.a),e=Object(j.a)(t,2),n=e[0],c=e[1];return Object(b.b)(a.a.Fragment,null,Object(b.b)(a.a.Fragment,null,!n&&Object(b.b)("div",{css:J},Object(b.b)("p",null,"We use cookies for the best experience. By using the site you accept our cookie policy ",Object(b.b)(o.b,{to:"cookies"},"Cookie Policy"),"."),Object(b.b)("p",null,"Also, check our ",Object(b.b)(o.b,{to:"privacy-policy"},"Privacy Policy")," for more information."),Object(b.b)("div",{className:"text-right"},Object(b.b)("button",{className:"btn btn-outline-primary",onClick:function(){c((function(t){return!t}))}},"OK")))))};function _(){var t=Object(c.a)(["\n\t\tbackground: aliceblue;\n\t\tmargin-top: 15px;\n\t"]);return _=function(){return t},t}function E(){var t=Object(c.a)(["\n\t\tbox-shadow: 0px 1px 2px rgba(0, 0, 0, 0.18) !important;\n\t\tmargin-bottom: 15px;\n\t"]);return E=function(){return t},t}function H(){var t=Object(c.a)(["\n\t\talign-items: center;\n\t\tmin-height: 24em;\n\t\tjustify-content: center;\n\t"]);return H=function(){return t},t}function K(){var t=Object(c.a)(["\n\t\tposition: relative;\n\t\th1,\n\t\th2 {\n\t\t\tmargin-bottom: 20px;\n\t\t}\n\t"]);return K=function(){return t},t}e.a=function(t){var e=Object(b.a)(K()),n=Object(b.a)(H()),c=Object(b.a)(E()),r=Object(b.a)(_());return Object(b.b)("div",{css:e},Object(b.b)("div",{css:c},Object(b.b)("div",{className:"container"},Object(b.b)(M,null))),Object(b.b)("div",{className:"container",css:n},t.children),Object(b.b)("div",{css:r},Object(b.b)("div",{className:"container"},Object(b.b)(z,null))),Object(b.b)(U,null))}},65:function(t,e,n){"use strict";n.r(e);var c=n(49),b=n.n(c),r=n(54),a=n(46),o=n(50),i=n(9),u=n(47),l=n(0),s=n.n(l),j=n(12),O=n(13),d=(n(53),n(52));function p(){var t=Object(a.a)(["\n\t\tmin-height: 200px;\n\t\tdisplay: flex;\n\t\tjustify-content: space-around;\n\t\talign-items: center;\n\t\tfont-size: 14px;\n\t\ttext-transform: uppercase;\n\t"]);return p=function(){return t},t}function f(){var t=Object(a.a)(["\n\t\tdisplay: flex;\n\t\theight: 200px;\n\t\talign-items: center;\n\t\tjustify-content: center;\n\t\tborder-bottom: 6px solid indianred;\n\t\tbackground: rgb(34, 193, 195);\n\t\tbackground: radial-gradient(circle, rgba(34, 193, 195, 1) 0%, rgba(169, 62, 136, 1) 0%, rgba(193, 65, 169, 1) 19%, rgba(198, 63, 186, 1) 29%, rgba(109, 85, 197, 1) 74%, rgba(76, 93, 201, 1) 79%, rgba(128, 190, 131, 1) 100%, rgba(45, 168, 253, 1) 100%);\n\t\timg {\n\t\t\theight: 100%;\n\t\t\twidth: auto;\n\t\t}\n\t"]);return f=function(){return t},t}function m(){var t=Object(a.a)(["\n\t\ttext-align: center;\n\t\tpadding: 1rem;\n\t\tborder-bottom: 6px solid indianred;\n\t"]);return m=function(){return t},t}function g(){var t=Object(a.a)(["\n\t\tflex: 0 0 24%;\n\t\tborder: 1px solid #eee;\n\t\tpadding: 0;\n\t\tmax-width: 24%;\n\t\tmargin-bottom: 15px;\n\t\tbackground: white;\n\t\tborder-radius: 0px 0px 2px 2px;\n\t\tbox-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.13);\n\t\ttransition: box-shadow 0.2s;\n\t\t:hover {\n\t\t\tbox-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.15);\n\t\t\tsvg {\n\t\t\t\tcolor: black;\n\t\t\t}\n\t\t}\n\t"]);return g=function(){return t},t}e.default=function(t){var e=Object(l.useState)(O.auth().currentUser.email),n=Object(i.a)(e,1)[0],c=Object(l.useState)([]),a=Object(i.a)(c,2),v=a[0],x=a[1];function h(){return(h=Object(o.a)(b.a.mark((function t(){var e,c;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.firestore().collection("adverts").where("user","==",n).get();case 2:e=t.sent,c=e.docs.map((function(t){var e=t.data();return Object(r.a)({docId:t.id},e)})),x(c);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}Object(l.useEffect)((function(){!function(){h.apply(this,arguments)}()}),[]);var y=Object(u.a)(g()),w=Object(u.a)(m()),k=Object(u.a)(f()),N=Object(u.a)(p());return Object(u.b)(d.a,null,Object(u.b)("h2",null,"My favourites"),Object(u.b)("div",{className:"row no-gutters d-flex justify-content-between"},v.length>0?v.map((function(t){return Object(u.b)("div",{className:"col-md-3",key:t.docId,css:y},Object(u.b)("div",{css:w},Object(u.b)(j.b,{to:"/advert/"+t.docId},t.title," - ",t.price)),t.file.length>0?t.file.map((function(e,n){return 1===n?void 0:Object(u.b)(j.b,{to:"/advert/"+t.docId,key:t.docId},Object(u.b)("div",{key:n,css:k},Object(u.b)("img",{src:e.url,alt:t.title})))})):Object(u.b)("div",{css:N},"No images"))})):Object(u.b)(s.a.Fragment,null,Object(u.b)("p",null,"You do not seem to have posted any adverts yet."),Object(u.b)("p",null,"Why don't you ",Object(u.b)(j.b,{to:"/post"},"post one now"),"?"))))}}}]);
//# sourceMappingURL=10.719c326a.chunk.js.map