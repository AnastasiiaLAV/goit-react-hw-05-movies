"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[387],{3387:function(n,r,t){t.r(r),t.d(r,{default:function(){return j}});var e,a,c,i=t(2982),o=t(1413),u=t(5861),s=t(885),p=t(7757),f=t.n(p),l=t(9760),d=t(854),x=t(1701),v=t(2791),h=t(6871),m=t(352),g=t(168),b=t(6444),y=b.ZP.ul(e||(e=(0,g.Z)(["\n    display: grid;\n    grid-template-columns: repeat(auto-fill,minmax(100px,1fr));\n    grid-gap: 50px 20px;\n    justify-items: center;\n    list-style: none;\n    max-width: calc(100vw - 90px);\n    margin: 20px auto;\n    border-radius: 5px;\n"]))),Z=b.ZP.li(a||(a=(0,g.Z)(["\n    display: block;     \n    width: 100%;\n    height: 150px;\n    object-fit: cover;\n    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 10px 0px,\n            rgba(0, 0, 0, 0.5) 0px 2px 15px 0px;\n    filter: grayscale(40%);\n    cursor: pointer;\n    text-align: center;\n"]))),w=b.ZP.img(c||(c=(0,g.Z)(["\n    display: block;\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 10px 0px,\n            rgba(0, 0, 0, 0.5) 0px 2px 15px 0px;\n    filter: grayscale(40%);\n    cursor: pointer;\n    &:hover{\n        filter: none;\n        transition: 0.3s ease-out;\n        transform: scale(1.06);\n    }\n"]))),k=t(184),j=function(){var n=(0,h.UO)().movieId,r=(0,v.useState)({items:[],loading:!1,error:null}),t=(0,s.Z)(r,2),e=t[0],a=t[1];(0,v.useEffect)((function(){var r=function(){var r=(0,u.Z)(f().mark((function r(){var t;return f().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,a((function(n){return(0,o.Z)((0,o.Z)({},n),{},{loading:!0,error:null})})),r.next=4,(0,x.zv)(n);case 4:t=r.sent,a((function(n){return(0,o.Z)((0,o.Z)({},n),{},{items:(0,i.Z)(t.cast)})})),r.next=11;break;case 8:r.prev=8,r.t0=r.catch(0),a((function(n){return(0,o.Z)((0,o.Z)({},n),{},{error:r.t0})}));case 11:return r.prev=11,a((function(n){return(0,o.Z)((0,o.Z)({},n),{},{loading:!1})})),r.finish(11);case 14:case"end":return r.stop()}}),r,null,[[0,8,11,14]])})));return function(){return r.apply(this,arguments)}}();r()}),[n]);var c=e.items,p=e.loading,g=e.error,b=c.map((function(n){var r=n.id,t=n.profile_path,e=n.name;return(0,k.jsxs)(Z,{children:[t?(0,k.jsx)(w,{src:"https://image.tmdb.org/t/p/w500/".concat(t),alt:e}):(0,k.jsx)(w,{src:m,alt:e}),(0,k.jsx)("p",{children:e})]},r)}));return(0,k.jsxs)(k.Fragment,{children:[p&&(0,k.jsx)(d.Z,{}),g&&(0,k.jsx)(l.Z,{}),(0,k.jsx)(y,{children:b})]})}},9760:function(n,r,t){var e=t(8055),a=t(1330),c=t(184);r.Z=function(){return(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)("p",{children:["...Posts load failed",(0,c.jsx)(e.l,{children:(0,c.jsx)(a.Z,{color:"#eb1052",size:10})})]})})}},1701:function(n,r,t){t.d(r,{Hg:function(){return s},TP:function(){return f},tx:function(){return d},z1:function(){return p},zv:function(){return l}});var e=t(5861),a=t(7757),c=t.n(a),i=t(4569),o=t.n(i);o().defaults.baseURL="https://api.themoviedb.org/3/";var u="2614fd8eb411c7000221cf444d5a4c67",s=function(){var n=(0,e.Z)(c().mark((function n(){var r,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("trending/movie/day?api_key=".concat(u));case 2:return r=n.sent,t=r.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(c().mark((function n(r){var t,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("search/movie?api_key=".concat(u,"&query=").concat(r));case 2:return t=n.sent,e=t.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(c().mark((function n(r){var t,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("movie/".concat(r,"?api_key=").concat(u));case 2:return t=n.sent,e=t.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),l=function(){var n=(0,e.Z)(c().mark((function n(r){var t,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("movie/".concat(r,"/credits?api_key=").concat(u));case 2:return t=n.sent,e=t.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),d=function(){var n=(0,e.Z)(c().mark((function n(r){var t,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("movie/".concat(r,"/reviews?api_key=").concat(u));case 2:return t=n.sent,e=t.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}()},352:function(n,r,t){n.exports=t.p+"static/media/58e0ccb473a4915b2e1fa0fa.4d6659390f3028136cfe.png"},2982:function(n,r,t){t.d(r,{Z:function(){return c}});var e=t(907);var a=t(181);function c(n){return function(n){if(Array.isArray(n))return(0,e.Z)(n)}(n)||function(n){if("undefined"!==typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||(0,a.Z)(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=387.d17aa76d.chunk.js.map