"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[358],{9760:function(n,e,t){var r=t(8055),a=t(1330),i=t(184);e.Z=function(){return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("p",{children:["...Posts load failed",(0,i.jsx)(r.l,{children:(0,i.jsx)(a.Z,{color:"#eb1052",size:10})})]})})}},3174:function(n,e,t){t.d(e,{Z:function(){return g}});var r,a,i,o=t(501),c=t(6871),u=t(168),s=t(6444),p=s.ZP.ul(r||(r=(0,u.Z)(["\n    display: grid;\n    grid-template-columns: repeat(auto-fill,minmax(100px,1fr));\n    grid-gap: 50px 20px;\n    justify-items: center;\n    list-style: none;\n    max-width: calc(100vw - 90px);\n    margin: 20px auto;\n    border-radius: 5px;\n"]))),d=s.ZP.li(a||(a=(0,u.Z)(["\n    display: block;     \n    width: 100%;\n    height: 150px;\n    object-fit: cover;\n    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 10px 0px,\n            rgba(0, 0, 0, 0.5) 0px 2px 15px 0px;\n    filter: grayscale(40%);\n    cursor: pointer;\n    text-align: center;\n"]))),f=s.ZP.img(i||(i=(0,u.Z)(["\n    display: block;\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 10px 0px,\n            rgba(0, 0, 0, 0.5) 0px 2px 15px 0px;\n    filter: grayscale(40%);\n    cursor: pointer;\n    &:hover{\n        filter: none;\n        transition: 0.3s ease-out;\n        transform: scale(1.06);\n    }\n"]))),x=t(352),l=t(184),h=function(n){var e=n.items,t=(0,c.TH)(),r=e.map((function(n){var e=n.id,r=n.title,a=n.poster_path;return(0,l.jsx)(d,{children:(0,l.jsxs)(o.rU,{state:{from:t},to:"/movies/".concat(e),children:[a?(0,l.jsx)(f,{src:"https://image.tmdb.org/t/p/w500/".concat(a),alt:r}):(0,l.jsx)(f,{src:x,alt:"checkman"}),(0,l.jsx)("p",{children:r})]})},e)}));return(0,l.jsx)(p,{children:r})},g=h;h.defaultProps={items:[]}},1701:function(n,e,t){t.d(e,{Hg:function(){return s},TP:function(){return d},tx:function(){return x},z1:function(){return p},zv:function(){return f}});var r=t(5861),a=t(7757),i=t.n(a),o=t(4569),c=t.n(o);c().defaults.baseURL="https://api.themoviedb.org/3/";var u="2614fd8eb411c7000221cf444d5a4c67",s=function(){var n=(0,r.Z)(i().mark((function n(){var e,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("trending/movie/day?api_key=".concat(u));case 2:return e=n.sent,t=e.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("search/movie?api_key=".concat(u,"&query=").concat(e));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("movie/".concat(e,"?api_key=").concat(u));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("movie/".concat(e,"/credits?api_key=").concat(u));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),x=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("movie/".concat(e,"/reviews?api_key=").concat(u));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},2358:function(n,e,t){t.r(e),t.d(e,{default:function(){return C}});var r,a,i,o,c,u=t(2982),s=t(1413),p=t(5861),d=t(885),f=t(7757),x=t.n(f),l=t(9760),h=t(854),g=t(3174),v=t(1701),m=t(2791),b=t(501),Z=t(4942),y=t(8185),w=t(168),k=t(6444),j=k.ZP.header(r||(r=(0,w.Z)(["\n    top: 0;\n    left: 0;\n    position: sticky;\n    z-index: 1100;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    min-height: 64px;\n    padding-right: 24px;\n    padding-left: 24px;\n    padding-top: 12px;\n    padding-bottom: 12px;\n    color: #fff;\n    background: linear-gradient(90deg, #139e32a9, #c1ff05c0, #01eeffa6 );\n    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 10px 0px,\n            rgba(0, 0, 0, 0.5) 0px 2px 15px 0px;\n    border-radius: 5px;\n    "]))),_=k.ZP.form(a||(a=(0,w.Z)(["\n    display: flex;\n    align-items: center;\n    width: 100%;\n    max-width: 600px;\n    background-color: #fff;\n    border-radius: 5px;\n    overflow: hidden;\n    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 10px 0px,\n            rgba(0, 0, 0, 0.5) 0px 2px 15px 0px;\n"]))),P=k.ZP.button(i||(i=(0,w.Z)(["\n    display: inline-block;\n    width: 48px;\n    height: 48px;\n    border: 0;\n    /* background-image: url('https://image.flaticon.com/icons/svg/149/149852.svg'); */\n    background-size: 40%;\n    background-repeat: no-repeat;\n    background-position: center;\n    opacity: 0.6;\n    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n    cursor: pointer;\n    outline: none;\n    &:hover{\n        opacity: 1;\n    }\n"]))),q=k.ZP.span(o||(o=(0,w.Z)(["\n    position: absolute;\n    width: 1px;\n    height: 1px;\n    padding: 0;\n    overflow: hidden;\n    clip: rect(0, 0, 0, 0);\n    white-space: nowrap;\n    clip-path: inset(50%);\n    border: 0;\n"]))),z=k.ZP.input(c||(c=(0,w.Z)(["\n    display: inline-block;\n    width: 100%;\n    font: inherit;\n    font-size: 20px;\n    border: none;\n    outline: none;\n    padding-left: 4px;\n    padding-right: 4px;\n    &::placeholder {\n        font: inherit;\n        font-size: 18px;\n    }\n"]))),S=t(184);function F(n){var e=n.onSubmitForm,t=(0,m.useState)({query:""}),r=(0,d.Z)(t,2),a=r[0],i=r[1];return(0,S.jsx)(j,{children:(0,S.jsxs)(_,{onSubmit:function(n){n.preventDefault(),e((0,s.Z)({},a)),i({query:""})},children:[(0,S.jsxs)(P,{type:"submit",children:[(0,S.jsx)(y.dVI,{}),(0,S.jsx)(q,{children:"Search"})]}),(0,S.jsx)(z,{name:"query",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies",value:a.query,onChange:function(n){var e=n.currentTarget;console.log("target",e.value);var t=e.name,r=e.value;i((0,s.Z)((0,s.Z)({},a),{},(0,Z.Z)({},t,r)))},required:!0})]})})}var C=function(){var n=(0,m.useState)({items:[],loading:!1,error:null}),e=(0,d.Z)(n,2),t=e[0],r=e[1],a=(0,b.lr)(),i=(0,d.Z)(a,2),o=i[0],c=i[1],f=o.get("query");(0,m.useEffect)((function(){var n=function(){var n=(0,p.Z)(x().mark((function n(){var e;return x().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,r((function(n){return(0,s.Z)((0,s.Z)({},n),{},{loading:!0,error:null})})),n.next=4,(0,v.z1)(f);case 4:e=n.sent,r((function(n){return(0,s.Z)((0,s.Z)({},n),{},{items:(0,u.Z)(e.results)})})),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),r((function(e){return(0,s.Z)((0,s.Z)({},e),{},{error:n.t0})}));case 11:return n.prev=11,r((function(n){return(0,s.Z)((0,s.Z)({},n),{},{loading:!1})})),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[0,8,11,14]])})));return function(){return n.apply(this,arguments)}}();f&&n()}),[f]);var Z=t.items,y=t.loading,w=t.error;return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(F,{onSubmitForm:function(n){var e=n.query;c({query:e})}}),y&&(0,S.jsx)(h.Z,{}),Z.length>0&&(0,S.jsx)(g.Z,{items:Z}),w&&(0,S.jsx)(l.Z,{})]})}},352:function(n,e,t){n.exports=t.p+"static/media/58e0ccb473a4915b2e1fa0fa.4d6659390f3028136cfe.png"}}]);
//# sourceMappingURL=358.14ed895d.chunk.js.map