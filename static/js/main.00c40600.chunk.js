(this["webpackJsonpshopping-cart"]=this["webpackJsonpshopping-cart"]||[]).push([[0],{19:function(t,e,c){t.exports={"black T-shirt":c(35),"blue jeans":c(36),"brawn bag":c(37),"darkblue jeans":c(38),"gray and black gap":c(39),"gray bag":c(40),"nike air 250":c(41),"nike air 300":c(42),"red gap":c(43),"white T-shirt":c(44)}},35:function(t,e,c){"use strict";c.r(e),e.default=c.p+"static/media/black_T-shirt.39cc51dd.jpg"},36:function(t,e,c){"use strict";c.r(e),e.default=c.p+"static/media/blue_jeans.3c1c0085.jpg"},37:function(t,e,c){"use strict";c.r(e),e.default=c.p+"static/media/brawn_bag.c083f482.jpg"},38:function(t,e,c){"use strict";c.r(e),e.default=c.p+"static/media/darkblue_jeans.bb55c432.jpg"},39:function(t,e,c){"use strict";c.r(e),e.default=c.p+"static/media/gray_and_black_Gap.b222b648.jpg"},40:function(t,e,c){"use strict";c.r(e),e.default=c.p+"static/media/gray_bag.5d8635c6.jpg"},41:function(t,e,c){"use strict";c.r(e),e.default=c.p+"static/media/nike_air_250.d26879cf.jpg"},42:function(t,e,c){"use strict";c.r(e),e.default=c.p+"static/media/nike_air_300.94e0f1d4.jpg"},43:function(t,e,c){"use strict";c.r(e),e.default=c.p+"static/media/red_gap.ff2f8fec.jpg"},44:function(t,e,c){"use strict";c.r(e),e.default=c.p+"static/media/white_T-shirt.672032b6.jpg"},45:function(t,e,c){},46:function(t,e,c){"use strict";c.r(e);var n=c(1),s=c.n(n),i=c(15),a=c.n(i),r=c(6),j=c(2),u=c(5),o=c(0);function l(t){return Object(o.jsxs)("header",{children:[Object(o.jsx)("h2",{children:"Fake Store"}),Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:Object(o.jsx)(r.b,{exact:!0,to:"/",activeClassName:"active",children:"homepage"})}),Object(o.jsx)("li",{children:Object(o.jsx)(r.b,{exact:!0,to:"/shop_page",activeClassName:"active",children:"shop page"})}),Object(o.jsx)("li",{children:Object(o.jsx)(r.b,{exact:!0,to:"/contact",activeClassName:"active",children:"contact"})}),Object(o.jsx)("li",{onClick:function(){return t.func(!t.switch)},children:"Cart"})]})]})}function d(t){return Object(o.jsx)("footer",{children:Object(o.jsx)("a",{href:"https://github.com/Falsin",children:"Made by Falsin"})})}var b=c(20);function h(t,e){function c(t){return Promise.all(Object(b.a)(t.children).map((function(t){return Promise.all(t.getAnimations().map((function(t){return t.finished})))})))}Object(n.useEffect)((function(){var n=document.getElementById("cart");n&&c(n).then((function(){document.getElementById(e).addEventListener("mousedown",(function(){n.classList.remove("active"),c(n).then((function(){return t.func(!t.status)}))}))}))}))}function f(t){return h(t.properties,"closeBtn"),Object(o.jsxs)("div",{className:"navBar",children:[Object(o.jsx)("h2",{children:"Your shopping cart"}),Object(o.jsx)("ul",{id:"listOfItems",children:t.test.length?t.test.map((function(e,c){return Object(o.jsx)("li",{children:Object(o.jsxs)("div",{className:"product",children:[Object(o.jsx)("div",{className:"image",style:{backgroundImage:"url(".concat(e.url,")")}}),Object(o.jsxs)("div",{className:"detailInfo",children:[Object(o.jsx)("h3",{children:e.productName}),Object(o.jsx)("p",{children:e.price}),Object(o.jsxs)("div",{children:[Object(o.jsx)("button",{className:"decrement",onClick:function(){var e=t.test.map((function(t){return Object.assign({},t)}));e[c].count=--e[c].count,0===e[c].count&&e.splice(c,1),t.setElementsCollection(e),console.log(e[c])},children:"minus"}),Object(o.jsx)("span",{children:e.count}),Object(o.jsx)("button",{className:"increment",children:"plus"})]})]})]})},c)})):null}),Object(o.jsxs)("div",{id:"total",children:["Total: $ ",t.test.reduce((function(t,e){return t+ +e.price.split(" ")[1]*e.count}),0)]}),Object(o.jsx)("button",{children:"Checkout"}),Object(o.jsx)("button",{id:"closeBtn",children:"Close"})]})}var p=c(14),O=[];function m(t){h(t,"background");var e=Object(p.useState)(O),c=Object(u.a)(e,2),n=c[0],s=c[1];return Object(p.useEffect)((function(){if(t.element)try{var e=O.find((function(e){return t.element.id===e.id}));e.count=++e.count}catch(n){var c=Object.assign({},t.element);c.count=++c.count,O.push(c)}finally{s(O),t.setSelectedItem(null)}})),t.status?Object(o.jsxs)("section",{id:"cart",className:"active",children:[Object(o.jsx)("div",{id:"background"}),Object(o.jsx)(f,{properties:t,test:n,setElementsCollection:s})]}):null}var x=c.p+"static/media/homepageBackground.b231f005.jpg";function g(){var t=Object(n.useState)(!1),e=Object(u.a)(t,2),c=e[0],s=e[1];return Object(o.jsxs)("section",{children:[Object(o.jsx)(l,{func:s,switch:c}),Object(o.jsx)("section",{className:"mainContent homepage",style:{backgroundImage:"url(".concat(x,")")},children:Object(o.jsx)("h1",{children:"We don't do fashion, we are fashion"})}),Object(o.jsx)(d,{}),Object(o.jsx)(m,{status:c,func:s})]})}var v=c(18),k=c.n(v),N=c(19);function _(){var t=Object(n.useState)(!1),e=Object(u.a)(t,2),c=e[0],s=e[1],i=Object(n.useState)([]),a=Object(u.a)(i,2),r=a[0],j=a[1],b=Object(n.useState)(null),h=Object(u.a)(b,2),f=h[0],p=h[1];return Object(n.useEffect)((function(){var t=Object.entries(N).map((function(t,e){return{productName:t[0],url:t[1].default,id:k()(),count:0,price:"$ ".concat(100*(e+1))}}));j(t)}),[]),Object(o.jsxs)("section",{children:[Object(o.jsx)(l,{func:s,switch:c}),Object(o.jsx)("section",{className:"mainContent shopPage",children:r.map((function(t,e){return Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:"image",style:{backgroundImage:"url(".concat(t.url,")")}}),Object(o.jsx)("h3",{children:t.productName}),Object(o.jsxs)("div",{className:"info",children:[Object(o.jsx)("p",{children:t.price}),Object(o.jsx)("button",{onClick:function(){p(t)},children:"Add to cart"})]})]},t.id)}))}),Object(o.jsx)(d,{}),Object(o.jsx)(m,{status:c,func:s,element:f,setSelectedItem:p})]})}function C(t){return Object(o.jsxs)("section",{children:[Object(o.jsx)(l,{}),Object(o.jsx)("section",{className:"mainContent",children:Object(o.jsx)("h1",{children:"Hello!"})}),Object(o.jsx)(d,{})]})}c(45);function y(){return Object(o.jsx)(r.a,{children:Object(o.jsxs)(j.c,{children:[Object(o.jsx)(j.a,{exact:!0,path:"/",component:g}),Object(o.jsx)(j.a,{exact:!0,path:"/shop_page",component:_}),Object(o.jsx)(j.a,{exact:!0,path:"/contact",component:C})]})})}a.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(y,{})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.00c40600.chunk.js.map