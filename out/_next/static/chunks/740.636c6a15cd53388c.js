"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[740],{8490:function(t,e,n){n.r(e);var r=n(2777),a=n(2262),c=n(748),u=n(5959),s=n(3553),o=n(7247),i=n(9499),l=n(2037),f=n.n(l),d=(n(4987),n(7294)),p=n(5893);function h(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=(0,o.Z)(t);if(e){var a=(0,o.Z)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return(0,s.Z)(this,n)}}var v=function(t){(0,u.Z)(n,t);var e=h(n);function n(){var t;(0,r.Z)(this,n);for(var a=arguments.length,u=new Array(a),s=0;s<a;s++)u[s]=arguments[s];return t=e.call.apply(e,[this].concat(u)),(0,i.Z)((0,c.Z)(t),"state",{textValue:null,percent:null,start:20,end:800}),(0,i.Z)((0,c.Z)(t),"onSlide",(function(e,n,r,a,c){t.setState({textValue:r[0].toFixed(2),percent:c[0].toFixed(2)})})),(0,i.Z)((0,c.Z)(t),"updateValues",(function(e){t.setState({start:e[0],end:e[1]})})),t}return(0,a.Z)(n,[{key:"render",value:function(){var t=this,e=this.state,n=e.start,r=e.end;return(0,p.jsxs)("div",{children:[(0,p.jsx)(f(),{connect:!0,range:{min:0,max:1e3},start:[20,800],onSlide:this.onSlide,onUpdate:function(e){return t.updateValues(e)}}),n&&r&&(0,p.jsx)("div",{className:"price-number mt-3",children:(0,p.jsxs)("span",{className:"amount",children:["$",n," - $",r]})})]})}}]),n}(d.Component);e.default=v}}]);