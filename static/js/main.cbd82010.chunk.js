(this["webpackJsonpshopping-cart"]=this["webpackJsonpshopping-cart"]||[]).push([[0],{18:function(e,t,c){e.exports={"black T-shirt":c(34),"blue jeans":c(35),"brawn bag":c(36),"darkblue jeans":c(37),"gray and black gap":c(38),"gray bag":c(39),"nike air 250":c(40),"nike air 300":c(41),"red gap":c(42),"white T-shirt":c(43)}},34:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/black_T-shirt.39cc51dd.jpg"},35:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/blue_jeans.3c1c0085.jpg"},36:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/brawn_bag.c083f482.jpg"},37:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/darkblue_jeans.bb55c432.jpg"},38:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/gray_and_black_Gap.b222b648.jpg"},39:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/gray_bag.5d8635c6.jpg"},40:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/nike_air_250.d26879cf.jpg"},41:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/nike_air_300.94e0f1d4.jpg"},42:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/red_gap.ff2f8fec.jpg"},43:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/white_T-shirt.672032b6.jpg"},44:function(e,t,c){},45:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),i=c(14),a=c.n(i),r=c(6),o=c(2),l=c(3),u=c.p+"static/media/cart.e05f0488.svg",j=c(0),d=[];function b(e){var t=Object(n.useState)(d),c=Object(l.a)(t,2),s=c[0],i=c[1];return Object(n.useEffect)((function(){e.selectedItems&&(d=e.selectedItems,i(e.selectedItems))}),[e.selectedItems]),Object(j.jsxs)("header",{children:[Object(j.jsx)("h2",{children:"Fake Store"}),Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)(r.b,{exact:!0,to:"/",activeClassName:"active",children:"homepage"})}),Object(j.jsx)("li",{children:Object(j.jsx)(r.b,{exact:!0,to:"/shop_page",activeClassName:"active",children:"shop page"})}),Object(j.jsx)("li",{children:Object(j.jsx)(r.b,{exact:!0,to:"/contact",activeClassName:"active",children:"contact"})}),Object(j.jsxs)("li",{onClick:function(){return e.func(!e.switch)},children:[Object(j.jsx)("img",{src:u}),s.length?Object(j.jsx)("div",{className:"countSelectedProducts",children:s.reduce((function(e,t){return e+t.count}),0)}):null]})]})]})}function m(e){return Object(j.jsx)("footer",{children:Object(j.jsx)("a",{href:"https://github.com/Falsin",children:"Made by Falsin"})})}var h=c(19);function f(e,t){function c(e){return Promise.all(Object(h.a)(e.children).map((function(e){return Promise.all(e.getAnimations().map((function(e){return e.finished})))})))}Object(n.useEffect)((function(){var n=document.getElementById("cart");n&&c(n).then((function(){document.getElementById(t).addEventListener("mousedown",(function(){n.classList.remove("active"),c(n).then((function(){return e.func(!e.status)}))}))}))}))}function O(e){function t(t,c){var n={decrement:function(){s[t].count=--s[t].count,0===s[t].count&&s.splice(t,1)},increment:function(){s[t].count=++s[t].count}},s=e.objectWithCollection.array.map((function(e){return Object.assign({},e)}));n[c](),e.setObjectWithCollection({array:s,isElementsCollectionChangeFromChildComp:!e.objectWithCollection.isElementsCollectionChangeFromChildComp})}return f(e.properties,"closeBtn"),Object(j.jsxs)("div",{className:"navBar",children:[Object(j.jsx)("h2",{children:"Your shopping cart"}),Object(j.jsx)("ul",{id:"listOfItems",children:e.objectWithCollection.array.length?e.objectWithCollection.array.map((function(e,c){return Object(j.jsx)("li",{children:Object(j.jsxs)("div",{className:"product",children:[Object(j.jsx)("div",{className:"image",style:{backgroundImage:"url(".concat(e.url,")")}}),Object(j.jsxs)("div",{className:"detailInfo",children:[Object(j.jsx)("h3",{children:e.productName}),Object(j.jsx)("p",{children:e.price}),Object(j.jsxs)("div",{children:[Object(j.jsx)("button",{className:"decrement",onClick:function(){return t(c,"decrement")}}),Object(j.jsx)("span",{children:e.count}),Object(j.jsx)("button",{className:"increment",onClick:function(){return t(c,"increment")}})]})]})]})},c)})):null}),Object(j.jsxs)("div",{id:"total",children:["Total: $ ",e.objectWithCollection.array.reduce((function(e,t){return e+ +t.price.split(" ")[1]*t.count}),0)]}),Object(j.jsx)("button",{id:"checkoutBtn",children:"Checkout"}),Object(j.jsx)("button",{id:"closeBtn",children:"Close"})]})}var p=[],x=function(e){f(e,"background");var t=Object(n.useState)({array:p,isElementsCollectionChangeFromChildComp:!1}),c=Object(l.a)(t,2),s=c[0],i=c[1];return Object(n.useEffect)((function(){if(e.selectedItems&&e.selectedItems.length){var t=Object.assign({},s);t.array=e.selectedItems,i(t)}else e.setSelectedItems(s.array)}),[e.selectedItems]),Object(n.useEffect)((function(){var t=Object.assign({},s);s.isElementsCollectionChangeFromChildComp?new Promise((function(c){try{t.isElementsCollectionChangeFromChildComp=!t.isElementsCollectionChangeFromChildComp,p=s.array,e.setSelectedItems(s.array)}finally{c(null)}})).then((function(){return i(t)})):p=s.array}),[s]),e.status?Object(j.jsxs)("section",{id:"cart",className:"active",children:[Object(j.jsx)("div",{id:"background"}),Object(j.jsx)(O,{properties:e,objectWithCollection:s,setObjectWithCollection:i})]}):null},g=c.p+"static/media/homepageBackground.b231f005.jpg";function v(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),c=t[0],s=t[1],i=Object(n.useState)(null),a=Object(l.a)(i,2),r=a[0],o=a[1];return Object(j.jsxs)("section",{className:"homepage",children:[Object(j.jsx)(b,{func:s,switch:c,selectedItems:r}),Object(j.jsx)("section",{className:"mainContent",style:{backgroundImage:"url(".concat(g,")")},children:Object(j.jsx)("h1",{children:"We don't do fashion, we are fashion"})}),Object(j.jsx)(m,{}),Object(j.jsx)(x,{status:c,func:s,selectedItems:r,setSelectedItems:o})]})}var C=c(17),I=c.n(C),k=c(18);function y(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),c=t[0],s=t[1],i=Object(n.useState)([]),a=Object(l.a)(i,2),r=a[0],o=a[1],u=Object(n.useState)(null),d=Object(l.a)(u,2),h=d[0],f=d[1];return Object(n.useEffect)((function(){var e=Object.entries(k).map((function(e,t){return{productName:e[0],url:e[1].default,id:I()(),count:1,price:"$ ".concat(100*(t+1))}}));o(e)}),[]),Object(j.jsxs)("section",{className:"shopPage",children:[Object(j.jsx)(b,{func:s,switch:c,selectedItems:h}),Object(j.jsxs)("section",{className:"mainContent",children:[r.map((function(e,t){return Object(j.jsxs)("div",{className:"visible",children:[Object(j.jsx)("div",{className:"image",style:{backgroundImage:"url(".concat(e.url,")")}}),Object(j.jsx)("h3",{children:e.productName}),Object(j.jsxs)("div",{className:"info",children:[Object(j.jsx)("p",{children:e.price}),Object(j.jsx)("button",{onClick:function(){return function(e){var t=h.map((function(e){return Object.assign({},e)})),c=t.find((function(t){return t.id===e.id}));c?++c.count:t.push(e),f(t)}(e)},children:"Add to cart"})]})]},e.id)})),function(){for(var e=[],t=0;t<15;t++)e.push(Object(j.jsx)("div",{},t));return e}().map((function(e){return e}))]}),Object(j.jsx)(m,{}),Object(j.jsx)(x,{status:c,func:s,selectedItems:h,setSelectedItems:f})]})}var N=c.p+"static/media/gitIcon.909e3e5f.svg",S=c.p+"static/media/facebookIcon.4a09a774.svg",_=c.p+"static/media/twitterIcon.916f395f.svg";function w(e){var t=Object(n.useState)(!1),c=Object(l.a)(t,2),s=c[0],i=c[1],a=Object(n.useState)(null),r=Object(l.a)(a,2),o=r[0],u=r[1];return Object(j.jsxs)("section",{className:"contact",children:[Object(j.jsx)(b,{func:i,switch:s,selectedItems:o}),Object(j.jsxs)("section",{className:"mainContent",children:[Object(j.jsxs)("div",{className:"Icons",children:[Object(j.jsx)("img",{src:N}),Object(j.jsx)("img",{src:S}),Object(j.jsx)("img",{src:_})]}),Object(j.jsx)("div",{children:"Russia, Moscow, Barby street 123"})]}),Object(j.jsx)(m,{}),Object(j.jsx)(x,{status:s,func:i,selectedItems:o,setSelectedItems:u})]})}c(44);function E(){return Object(j.jsx)(r.a,{children:Object(j.jsxs)(o.c,{children:[Object(j.jsx)(o.a,{exact:!0,path:"/",component:v}),Object(j.jsx)(o.a,{exact:!0,path:"/shop_page",component:y}),Object(j.jsx)(o.a,{exact:!0,path:"/contact",component:w})]})})}a.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(E,{})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.cbd82010.chunk.js.map