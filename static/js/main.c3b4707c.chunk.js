(this["webpackJsonpshopping-cart"]=this["webpackJsonpshopping-cart"]||[]).push([[0],{19:function(e,t,c){e.exports={"black T-shirt":c(35),"blue jeans":c(36),"brawn bag":c(37),"darkblue jeans":c(38),"gray and black gap":c(39),"gray bag":c(40),"nike air 250":c(41),"nike air 300":c(42),"red gap":c(43),"white T-shirt":c(44)}},35:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/black_T-shirt.39cc51dd.jpg"},36:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/blue_jeans.3c1c0085.jpg"},37:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/brawn_bag.c083f482.jpg"},38:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/darkblue_jeans.bb55c432.jpg"},39:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/gray_and_black_Gap.b222b648.jpg"},40:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/gray_bag.5d8635c6.jpg"},41:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/nike_air_250.d26879cf.jpg"},42:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/nike_air_300.94e0f1d4.jpg"},43:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/red_gap.ff2f8fec.jpg"},44:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/white_T-shirt.672032b6.jpg"},45:function(e,t,c){},46:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),i=c(15),a=c.n(i),r=c(6),o=c(2),l=c(4),u=c.p+"static/media/cart.e05f0488.svg",j=c(0),d=[];function b(e){var t=Object(n.useState)(d),c=Object(l.a)(t,2),s=c[0],i=c[1];return Object(n.useEffect)((function(){e.selectedItems&&(d=e.selectedItems,i(e.selectedItems))}),[e.selectedItems]),Object(j.jsxs)("header",{children:[Object(j.jsx)("h2",{children:"Fake Store"}),Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)(r.b,{exact:!0,to:"/",activeClassName:"active",children:"homepage"})}),Object(j.jsx)("li",{children:Object(j.jsx)(r.b,{exact:!0,to:"/shop_page",activeClassName:"active",children:"shop page"})}),Object(j.jsx)("li",{children:Object(j.jsx)(r.b,{exact:!0,to:"/contact",activeClassName:"active",children:"contact"})}),Object(j.jsxs)("li",{onClick:function(){return e.func(!e.switch)},children:[Object(j.jsx)("img",{src:u}),s.length?Object(j.jsx)("div",{className:"countSelectedProducts",children:s.reduce((function(e,t){return e+t.count}),0)}):null]})]})]})}function h(e){return Object(j.jsx)("footer",{children:Object(j.jsx)("a",{href:"https://github.com/Falsin",children:"Made by Falsin"})})}var m=c(20);function f(e,t){function c(e){return Promise.all(Object(m.a)(e.children).map((function(e){return Promise.all(e.getAnimations().map((function(e){return e.finished})))})))}Object(n.useEffect)((function(){var n=document.getElementById("cart");n&&c(n).then((function(){document.getElementById(t).addEventListener("mousedown",(function(){n.classList.remove("active"),c(n).then((function(){return e.func(!e.status)}))}))}))}))}function O(e){return f(e.properties,"closeBtn"),Object(j.jsxs)("div",{className:"navBar",children:[Object(j.jsx)("h2",{children:"Your shopping cart"}),Object(j.jsx)("ul",{id:"listOfItems",children:e.objectWithCollection.array.length?e.objectWithCollection.array.map((function(t,c){return Object(j.jsx)("li",{children:Object(j.jsxs)("div",{className:"product",children:[Object(j.jsx)("div",{className:"image",style:{backgroundImage:"url(".concat(t.url,")")}}),Object(j.jsxs)("div",{className:"detailInfo",children:[Object(j.jsx)("h3",{children:t.productName}),Object(j.jsx)("p",{children:t.price}),Object(j.jsxs)("div",{children:[Object(j.jsx)("button",{className:"decrement",onClick:function(){return function(t){var c=e.objectWithCollection.array.map((function(e){return Object.assign({},e)}));c[t].count=--c[t].count,0===c[t].count&&c.splice(t,1),e.setObjectWithCollection({array:c,isElementsCollectionChangeFromChildComp:!e.objectWithCollection.isElementsCollectionChangeFromChildComp})}(c)},children:"minus"}),Object(j.jsx)("span",{children:t.count}),Object(j.jsx)("button",{className:"increment",onClick:function(){return function(t){var c=e.objectWithCollection.array.map((function(e){return Object.assign({},e)}));c[t].count=++c[t].count,e.setObjectWithCollection({array:c,isElementsCollectionChangeFromChildComp:!e.objectWithCollection.isElementsCollectionChangeFromChildComp})}(c)},children:"plus"})]})]})]})},c)})):null}),Object(j.jsxs)("div",{id:"total",children:["Total: $ ",e.objectWithCollection.array.reduce((function(e,t){return e+ +t.price.split(" ")[1]*t.count}),0)]}),Object(j.jsx)("button",{children:"Checkout"}),Object(j.jsx)("button",{id:"closeBtn",children:"Close"})]})}var p=c(10),x=[],g=function(e){f(e,"background");var t=Object(p.useState)({array:x,isElementsCollectionChangeFromChildComp:!1}),c=Object(l.a)(t,2),n=c[0],s=c[1];return Object(p.useEffect)((function(){if(e.selectedItems&&e.selectedItems.length){var t=Object.assign({},n);t.array=e.selectedItems,s(t)}else e.setSelectedItems(n.array)}),[e.selectedItems]),Object(p.useEffect)((function(){var t=Object.assign({},n);n.isElementsCollectionChangeFromChildComp?new Promise((function(c){try{t.isElementsCollectionChangeFromChildComp=!t.isElementsCollectionChangeFromChildComp,x=n.array,e.setSelectedItems(n.array)}finally{c(null)}})).then((function(){return s(t)})):x=n.array}),[n]),e.status?Object(j.jsxs)("section",{id:"cart",className:"active",children:[Object(j.jsx)("div",{id:"background"}),Object(j.jsx)(O,{properties:e,objectWithCollection:n,setObjectWithCollection:s})]}):null},C=c.p+"static/media/homepageBackground.b231f005.jpg";function v(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),c=t[0],s=t[1],i=Object(n.useState)(null),a=Object(l.a)(i,2),r=a[0],o=a[1];return Object(j.jsxs)("section",{className:"homepage",children:[Object(j.jsx)(b,{func:s,switch:c,selectedItems:r}),Object(j.jsx)("section",{className:"mainContent homepage",style:{backgroundImage:"url(".concat(C,")")},children:Object(j.jsx)("h1",{children:"We don't do fashion, we are fashion"})}),Object(j.jsx)(h,{}),Object(j.jsx)(g,{status:c,func:s,selectedItems:r,setSelectedItems:o})]})}var y=c(18),k=c.n(y),I=c(19);function N(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),c=t[0],s=t[1],i=Object(n.useState)([]),a=Object(l.a)(i,2),r=a[0],o=a[1],u=Object(n.useState)(null),d=Object(l.a)(u,2),m=d[0],f=d[1];return Object(n.useEffect)((function(){var e=Object.entries(I).map((function(e,t){return{productName:e[0],url:e[1].default,id:k()(),count:1,price:"$ ".concat(100*(t+1))}}));o(e)}),[]),Object(j.jsxs)("section",{className:"shopPage",children:[Object(j.jsx)(b,{func:s,switch:c,selectedItems:m}),Object(j.jsxs)("section",{className:"mainContent shopPage",children:[r.map((function(e,t){return Object(j.jsxs)("div",{className:"visible",children:[Object(j.jsx)("div",{className:"image",style:{backgroundImage:"url(".concat(e.url,")")}}),Object(j.jsx)("h3",{children:e.productName}),Object(j.jsxs)("div",{className:"info",children:[Object(j.jsx)("p",{children:e.price}),Object(j.jsx)("button",{onClick:function(){return function(e){var t=m.map((function(e){return Object.assign({},e)})),c=t.find((function(t){return t.id===e.id}));c?++c.count:t.push(e),f(t)}(e)},children:"Add to cart"})]})]},e.id)})),function(){for(var e=[],t=0;t<15;t++)e.push(Object(j.jsx)("div",{},t));return e}().map((function(e){return e}))]}),Object(j.jsx)(h,{}),Object(j.jsx)(g,{status:c,func:s,selectedItems:m,setSelectedItems:f})]})}function E(e){var t=Object(n.useState)(!1),c=Object(l.a)(t,2),s=c[0],i=c[1];return Object(j.jsxs)("section",{children:[Object(j.jsx)(b,{func:i,switch:s}),Object(j.jsx)("section",{className:"mainContent",children:Object(j.jsx)("h1",{children:"Hello!"})}),Object(j.jsx)(h,{}),Object(j.jsx)(g,{status:s,func:i})]})}c(45);function _(){return Object(j.jsx)(r.a,{children:Object(j.jsxs)(o.c,{children:[Object(j.jsx)(o.a,{exact:!0,path:"/",component:v}),Object(j.jsx)(o.a,{exact:!0,path:"/shop_page",component:N}),Object(j.jsx)(o.a,{exact:!0,path:"/contact",component:E})]})})}a.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(_,{})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.c3b4707c.chunk.js.map