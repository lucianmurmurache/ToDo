(function(t){function e(e){for(var n,a,r=e[0],l=e[1],s=e[2],u=0,A=[];u<r.length;u++)a=r[u],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&A.push(i[a][0]),i[a]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);c&&c(e);while(A.length)A.shift()();return d.push.apply(d,s||[]),o()}function o(){for(var t,e=0;e<d.length;e++){for(var o=d[e],n=!0,r=1;r<o.length;r++){var l=o[r];0!==i[l]&&(n=!1)}n&&(d.splice(e--,1),t=a(a.s=o[0]))}return t}var n={},i={app:0},d=[];function a(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=t,a.c=n,a.d=function(t,e,o){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(o,n,function(e){return t[e]}.bind(null,n));return o},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="https://lucianmurmurache.github.io/ToDo/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var s=0;s<r.length;s++)e(r[s]);var c=l;d.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"034f":function(t,e,o){"use strict";var n=o("85ec"),i=o.n(n);i.a},"256d":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAF00lEQVR4nO2aTWgTaQCGn9hEElpqaiwalZbQi38VtGpZhVpF2GJAciheeygpiPWvFw8KXRCExYs9eJCtCCoW96RIQUhRwkqxFlHXgsVDoD9Mfpo2RtKkJjPOXtqwbSdpmnzTROwDc/lm5p33e8m838wQAxo4nU5Va/xnp7+/37B0bEMxjJQS6wEU20CxWQ+g2AaKzXoAxTZQbNYDKLaBYrMegJ7ily9f5saNG9TU1BSkU15eTmdnJ729vRgMy55mC0K3AAwGA4cOHeLAgQP09PTQ1NSUl05NTQ137tyhpaWFbdu24XA4hPo0ag3abDamp6cLEq6qqsJqtQJgMpno6uoiHA7j8/k4fPgwdXV1WK1WzGYzZrOZVCpFIpEgFosxMTHB8PAwqVSK7u5utmzZktZ1OBz4fL5V+7HZbJrjmgG4XC6ePn1aUAiquviF0mg0cv36dX78+JEOJhuKohAMBtm6dWtW3Vyw2Wy4XC4ePHiwbJ/mLWCxWHC5XBlTy4WvX78SCoUWjVVWVuY0eYCysjK2b9++bHx0dHRVPhYmb7FYNPdn7ICFEHI1vBRVVfny5Ute52YiFosRCARyPt5qtWadPKxQghaLherq6twd/o8jR45w7NixvM7NREVFBe3t7TkfX11dnXXyoNMqYDQacbvdwpcsgDNnzrBz505heroEsGvXLux2ux7SGAwGmpubhenpEsDevXv1kE2zZ88eYVq6BFDok99K1NbWCtPSJYDy8nI9ZHXR13wQKhS9AzAajWzcuJFkMrnisbIsE4/HmZ2d1dYSbQ7AbDbrIbvsGpkCmJubw+/3k0gk2L17d1YdXQKIxWJ6yKZRVZV4PL5oLJlM4vf78fv9zMzMoKpqTr9EXQIIh8N6yKaJRCLIsowsywQCASRJIhwO5/WeoEsA79+/58SJE3pIAzA4OMi7d++YmppCUZSCtHRZBd6+fZuxdETQ09NDIBAoePKgUwCxWIy+vj49pOnv72dgYECYnm5fhJ49e8arV6+Eao6OjtLW1iZUU7cAVFXl9u3bPHnyJK9yWorH46G5ubngL1VLERKA0WiktbWV06dPs3nz5vS4oig8fPiQS5cuMTg4mNc9Ozw8TGtrKy0tLQSDQRF2FyFkFZBlmWg0yoULF2hvb+fWrVu8efMmvd/n83Hz5k1MJhN1dXXs2LEDt9tNRUWFpt79+/cZGhrC4/Hk9f1vNQhbBj0eD3a7nbNnz3L16lUuXrzIxMRE+gFFkiQikQiqqnL06FGuXLmSUevz58/cvXtXlLWsCO2Avr4+xsfHMZlMnD9/no8fPzIwMMDIyEj66QzA7XZn1Tl37pxIW1kRFoCiKIyNjdHR0YGiKOzbt49Hjx5pvrvX19dn1XI4HGzatEmUtawUdAuoqkooFEKSJEKhELIsA3Dv3j06Ojo4fvw4IyMjDA0N8fr1a8rKyti/fz8HDx5cUdtutxONRguxlxOrDkBVVaanp5EkiUAgQCqVWnZMV1cXDQ0NNDQ0ANDY2EhjY2PhbnUg5wAikQiSJOH3+/n+/XvWY2dnZ3E6nTx+/JiTJ08WbFJPsgaQTCYZGxvj5cuXJBKJVQkHg0FOnTpFU1MTTqcTh8NBPB5ncnKSzs5OKisrCzIuCs0AotEo8XicVCrF5OTkqie/gKqqeL1evF7vovG2trbSD+BX4Zf/g4QuH0RWQlEUIe/yIihKACK/6xfKL38LrAdQbAPFRjMAr9d7LRgMzq21Gb0IBoNzXq/3mta+Mq3BT58+/aOq6p/fvn2rHR8fr5mamsr+L4MSpaqqakaW5b8/fPjw2/Pnz70rn6FNOfAHEAPUn2SLAd3z3oVhB3oBpQQmmGlTgL/mvepGPfCiBCa7dHsx723N+B34V/Ak8tn+nfdSFDYA7YCUxaBemzR/7ZJYyteyKHUpOFHoWZRrUnCiEF2Ua15woii0KItacKLIpyhLquBEkUtRlnTBiUKrKH+qghPFQlEWteD+A5h4LVlTDzcxAAAAAElFTkSuQmCC"},"56d7":function(t,e,o){"use strict";o.r(e);var n=o("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("md-card",[n("md-card-header",[n("div",{staticClass:"md-card-title"},[t._v(" To "),n("img",{attrs:{src:o("cf05")}}),t._v(" Do ")])]),n("md-card-content",{staticClass:"md-card-content"},[n("md-field",{staticClass:"md-field"},[n("md-input",{attrs:{placeholder:"Add a todo.."},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addTodo()}},model:{value:t.currentTodo,callback:function(e){t.currentTodo=e},expression:"currentTodo"}}),n("md-button",{staticClass:"fa fa-plus",on:{click:function(e){return t.addTodo()}}},[n("md-icon",[t._v("add")]),n("md-tooltip",{attrs:{"md-direction":"top","md-delay":"1000"}},[t._v("Add")])],1)],1),n("div",{staticClass:"todo-list"},[n("ul",{staticClass:"todos"},t._l(t.todos,(function(e){return n("li",{key:e.id,staticClass:"todo-item"},[n("span",[n("md-checkbox",{staticClass:"completed md-primary",attrs:{type:"checkbox"},on:{change:t.toggleCompleted},model:{value:e.completed,callback:function(o){t.$set(e,"completed",o)},expression:"todo.completed"}})],1),!1===e.editing?n("span",{staticClass:"todo-item-label",class:{"is-complete":e.completed},on:{dblclick:function(o){return t.editTodo(e)}}},[t._v(t._s(e.label))]):t._e(),e.editing?n("div",[n("md-field",[n("md-input",{attrs:{type:"text",placeholder:"Edit.."},on:{keyup:[function(o){return!o.type.indexOf("key")&&t._k(o.keyCode,"enter",13,o.key,"Enter")?null:t.stopEdit(e)},function(o){return!o.type.indexOf("key")&&t._k(o.keyCode,"esc",27,o.key,["Esc","Escape"])?null:t.stopEdit(e)}],focusout:function(o){return t.stopEdit(e)}},model:{value:e.label,callback:function(o){t.$set(e,"label",o)},expression:"todo.label"}})],1)],1):t._e(),n("span",[n("md-button",{staticClass:"md-fab md-mini md-primary",on:{click:function(o){return t.editTodo(e)}}},[n("md-icon",[t._v("edit")]),n("md-tooltip",{attrs:{"md-direction":"top","md-delay":"1000"}},[t._v("edit")])],1),n("md-button",{staticClass:"md-fab md-mini",on:{click:function(o){return t.removeTodo(e)}}},[n("md-icon",[t._v("delete")]),n("md-tooltip",{attrs:{"md-direction":"top","md-delay":"1000"}},[t._v("delete")])],1)],1)])})),0)])],1)],1),t._m(0)],1)},d=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"media"},[n("a",{attrs:{href:"https://github.com/lucianmurmurache/ToDo","aria-label":"Social media logo - github",alt:"Github logo",target:"_blank"}},[n("img",{attrs:{src:o("256d")}})]),n("a",{attrs:{href:"https://de.linkedin.com/in/lucian-murmurache-88155473","aria-label":"Social media logo - linkedin",alt:"LinkedIn logo",target:"_blank"}},[n("img",{attrs:{src:o("f535")}})])])}],a={data(){return{todos:[],currentTodo:"",editedTodo:"",hasError:!1}},mounted(){if(localStorage.getItem("todos"))try{this.todos=JSON.parse(localStorage.getItem("todos"))}catch(t){localStorage.removeItem("todos")}},methods:{addTodo(){const t=JSON.stringify(this.todos);localStorage.setItem("todos",t),this.currentTodo?(this.hasError=!1,this.todos.push({id:this.todos.length,label:this.currentTodo,completed:!1,editing:!1}),this.currentTodo=""):this.hasError=!0},removeTodo(t){var e=this.todos.indexOf(t);this.todos.splice(e,1),localStorage.removeItem("todos")},editTodo(t){t.editing=!0},stopEdit(t){t.editing=!1},toggleCompleted(){this.todos.completed=!this.todos.completed},persist(){localStorage.todo=this.todos}}},r=a,l=(o("034f"),o("2877")),s=Object(l["a"])(r,i,d,!1,null,null,null),c=s.exports,u=o("9c30");o("51de"),o("0759");n["default"].use(u["MdCard"]),n["default"].use(u["MdIcon"]),n["default"].use(u["MdField"]),n["default"].use(u["MdButton"]),n["default"].use(u["MdTooltip"]),n["default"].use(u["MdCheckbox"]),n["default"].config.productionTip=!1,new n["default"]({render:t=>t(c)}).$mount("#app")},"85ec":function(t,e,o){},cf05:function(t,e,o){t.exports=o.p+"img/logo.d090fa7e.png"},f535:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEvElEQVR4nO2aP0g7SRzFX4wGYkCja8DDeCdoFyI2KqepLLSwiYUg2Hm9jSDoD/QawRMLKyHcgYWFcK0Iv0KEeAo2gWCCpFEx6qx/dmMSNSa7q3ONevpzEhPdza5cPrAQZmZn3vdl981u1AQG/f39lNX+1VlbWzP92FamhxAjUTJAbwF6UzJAbwF6UzJAbwF6UzJAbwF6UzJAbwF6U67WRFVVVRgaGoLb7YbJZEI4HMbKygoSiYRaS2gC0wCO4yCKYt6TWCwWzM3Nwel0Prc1NTWhra0No6OjkCTp80o/CcdxzHbmLeD1erOewMLj8bwq/gmn04nu7u6859EKjuPg9XqZfUwDrFZrQSbU1dVl7XM4HHnNoRVPxVutVmZ/1hB8MsFut7+7yMHBwYf6tMZut+csHnhnF7BarXl9g4FAANvb22/at7a2EAgE8pCqDQ6HI2fxgEq7AKUUs7Oz6OrqgtvtxsPDA0KhEHZ2dkCpsX9cUm0bpJRie3ubeSUYGdUMUBOLxYL6+npwHIfr62tEo1HNtlJVDOA4DjMzM8y+8fFxJJNJAEBfXx8GBgbejIlEIlhYWEBDQwOGh4fh8XhQVvZfPEmShK2tLSwvL+Py8lINyc+oYkB5eTnzOQAAzGbz8+eqqirmOFEU4XK5MDU1BZvN9qbfYrGgp6cHnZ2dmJ6eRiQSUUM2AIO8C9TW1mYt/iU2mw2Tk5Oorq7Oe25FUZBMJsHzPLPfEAY0Nja+W/wTtbW1GBwczDkmnU7j8PAQu7u7IIQgHo9DlmXmWEOFYCaTQTAYRDqdhsvlyvqE2dvbi6WlJdzf3z+3SZIEnufB8zxisRgopXmZahgDBEHA2NjY80tYRUUFJiYm0NHR8WZsZWUlmpubsbe3h7OzMxBCIAjCh545DGEApRTz8/Ov3kBlWcbi4iLa29thMr35ixYAYH19/dVV8BEMkQEHBwcIh8Nv2gVBQDQaZZ5jNps/XTxgEANubm6Y7aIo4vj4mNmXb2i+hyFugZfE43EQQkAIQSaTwe3tLXNcttuiUAxhgKIoiEQi4HkeqVSqqGsbwoB4PI79/X1d1i5qBmR7GNETza8AWZZxdHQEQghaW1u1Xq5gNDdgc3Pz+TnciD+OaH4LGLHol3zqCqCU4uLiAoIgqKWn6BRsAKUUoiiCEIKzszPIsoympiYNpBWHvA24uroCIQQ8zyOTybzqk2U56zamKMqrOVjjTk9Ps65LCGGeE4vF8pWek5wGSJKEo6MjbGxs4O7uLuu409NTtLS0vLuYz+eDz+crSODIyEhB4wuFaUAikUAqlYIsyzg5OclZ/FcnqwH/FwzxNqgnJQP0FqA3JQP0FqA3JQNYjX6//9v5+Xm62GK04vz8PO33+7+x+sysxlAo9A+l9I9kMvlLNBr9+fLyMvd/GRiUmpqamKIofweDwV9XV1f9H53HBuB3ADcA6Bc5bgBMP2pXjZ8A/AXg3gAFZjvuAfz5qFUz3AC+G6DYH4/vj9qKRh+AXZWL+Mix+6hFF8oA/AaA5BCo1UEe1zbEVl7MoNQk4NRCy6AsSsCphdpBWfSAU4vPBqWuAacWHwlKQwWcWuQTlIYOOLVgBeWXCji1eApKXQPuXzU22LYksSm8AAAAAElFTkSuQmCC"}});
//# sourceMappingURL=app.ac084726.js.map