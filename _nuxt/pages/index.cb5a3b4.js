(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{326:function(e){e.exports=JSON.parse('{"food":[{"id":1,"name":"Bread","description":"A fresh piece of bread","price":20,"img":"./img/bread.jpg"},{"id":2,"name":"Milk","description":"A cold glass of milk","price":54,"img":"./img/milk.jpg"},{"id":3,"name":"Apple","description":"Sweet apples for a pie","price":120,"img":"./img/apple.jpg"},{"id":4,"name":"Juice","description":"Your favourite juice","price":67,"img":"./img/juice.jpg"},{"id":5,"name":"Meat","description":"A fresh stake","price":358,"img":"./img/meat.jpg"},{"id":6,"name":"Chicken","description":"Your favourite food","price":320,"img":"./img/chicken.jpg"},{"id":7,"name":"Rice","description":"Feel like in China","price":83,"img":"./img/rice.jpg"},{"id":8,"name":"Cake","description":"Some pleasure in your life","price":230,"img":"./img/cake.jpg"},{"id":9,"name":"Banana","description":"Ba-na-na!","price":180,"img":"./img/banana.png"},{"id":10,"name":"Coffee beans","description":"Just add some water","price":20,"img":"./img/coffee.jpg"}],"groceryLists":[{"id":1,"date":1593767280341,"sum":852,"food":[{"id":2,"check":true},{"id":3,"check":true},{"id":5,"check":true},{"id":6,"check":false}]}]}')},335:function(e,t,r){"use strict";r.r(t);r(10),r(8),r(6),r(4),r(9);var n=r(2),c=r(73),data=r(326);function o(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function m(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var l={computed:m(m({},Object(c.b)({menuIitems:"getMenuItems"})),{},{items:function(){return this.menuIitems.filter((function(e){return 0!==e.id}))}}),created:function(){this.setGroceryLists(data.groceryLists),this.setFood(data.food)},methods:m({},Object(c.c)(["setGroceryLists","setFood"]))},d=r(64),f=r(91),j=r.n(f),h=r(125),v=r(126),O=r(86),y=r(57),k=r(128),w=r(70),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"d-flex flex-column justify-center align-center"},[e._m(0),e._v(" "),r("v-list",{staticClass:"nav mt-5"},[r("v-list-item-group",{attrs:{color:"primary"}},e._l(e.items,(function(t,i){return r("v-list-item",{key:i,attrs:{to:t.to,router:"",exact:""}},[r("v-list-item-icon",[r("v-icon",{domProps:{textContent:e._s(t.icon)}})],1),e._v(" "),r("v-list-item-content",[r("v-list-item-title",[e._v(e._s(t.description))])],1)],1)})),1)],1)],1)}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"text-center ma-5"},[t("h1",{staticClass:"primary--text text-h1"},[this._v("\n      Welcome"),t("br"),this._v("to"),t("br"),this._v("Grocery list\n    ")])])}],!1,null,null,null);t.default=component.exports;j()(component,{VIcon:h.a,VList:v.a,VListItem:O.a,VListItemContent:y.a,VListItemGroup:k.a,VListItemIcon:w.a,VListItemTitle:y.b})}}]);