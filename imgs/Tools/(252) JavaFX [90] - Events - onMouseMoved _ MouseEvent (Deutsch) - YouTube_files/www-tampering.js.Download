(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
function n(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
function p(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:n(a)}}
function q(a){if(!(a instanceof Array)){a=p(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
var t="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function u(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var w=u(this);function x(a,b){if(b)a:{for(var c=w,e=a.split("."),h=0;h<e.length-1;h++){var k=e[h];if(!(k in c))break a;c=c[k]}e=e[e.length-1];h=c[e];k=b(h);k!=h&&null!=k&&t(c,e,{configurable:!0,writable:!0,value:k})}}
x("String.prototype.endsWith",function(a){return a?a:function(b,c){if(null==this)throw new TypeError("The 'this' value for String.prototype.endsWith must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype.endsWith must not be a regular expression");var e=this+"";b+="";void 0===c&&(c=e.length);for(var h=Math.max(0,Math.min(c|0,e.length)),k=b.length;0<k&&0<h;)if(e[--h]!=b[--k])return!1;return 0>=k}});
function y(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
x("Symbol",function(a){function b(h){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c("jscomp_symbol_"+(h||"")+"_"+e++,h)}
function c(h,k){this.g=h;t(this,"description",{configurable:!0,writable:!0,value:k})}
if(a)return a;c.prototype.toString=function(){return this.g};
var e=0;return b});
x("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var e=w[b[c]];"function"===typeof e&&"function"!=typeof e.prototype[a]&&t(e.prototype,a,{configurable:!0,writable:!0,value:function(){return z(n(this))}})}return a});
function z(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
x("WeakMap",function(a){function b(d){this.g=(g+=Math.random()+1).toString();if(d){d=p(d);for(var f;!(f=d.next()).done;)f=f.value,this.set(f[0],f[1])}}
function c(){}
function e(d){var f=typeof d;return"object"===f&&null!==d||"function"===f}
function h(d){if(!y(d,m)){var f=new c;t(d,m,{value:f})}}
function k(d){var f=Object[d];f&&(Object[d]=function(l){if(l instanceof c)return l;Object.isExtensible(l)&&h(l);return f(l)})}
if(function(){if(!a||!Object.seal)return!1;try{var d=Object.seal({}),f=Object.seal({}),l=new a([[d,2],[f,3]]);if(2!=l.get(d)||3!=l.get(f))return!1;l["delete"](d);l.set(f,4);return!l.has(d)&&4==l.get(f)}catch(r){return!1}}())return a;
var m="$jscomp_hidden_"+Math.random();k("freeze");k("preventExtensions");k("seal");var g=0;b.prototype.set=function(d,f){if(!e(d))throw Error("Invalid WeakMap key");h(d);if(!y(d,m))throw Error("WeakMap key fail: "+d);d[m][this.g]=f;return this};
b.prototype.get=function(d){return e(d)&&y(d,m)?d[m][this.g]:void 0};
b.prototype.has=function(d){return e(d)&&y(d,m)&&y(d[m],this.g)};
b.prototype["delete"]=function(d){return e(d)&&y(d,m)&&y(d[m],this.g)?delete d[m][this.g]:!1};
return b});
x("Map",function(a){function b(){var g={};return g.previous=g.next=g.head=g}
function c(g,d){var f=g.g;return z(function(){if(f){for(;f.head!=g.g;)f=f.previous;for(;f.next!=f.head;)return f=f.next,{done:!1,value:d(f)};f=null}return{done:!0,value:void 0}})}
function e(g,d){var f=d&&typeof d;"object"==f||"function"==f?k.has(d)?f=k.get(d):(f=""+ ++m,k.set(d,f)):f="p_"+d;var l=g.i[f];if(l&&y(g.i,f))for(var r=0;r<l.length;r++){var v=l[r];if(d!==d&&v.key!==v.key||d===v.key)return{id:f,list:l,index:r,h:v}}return{id:f,list:l,index:-1,h:void 0}}
function h(g){this.i={};this.g=b();this.size=0;if(g){g=p(g);for(var d;!(d=g.next()).done;)d=d.value,this.set(d[0],d[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var g=Object.seal({x:4}),d=new a(p([[g,"s"]]));if("s"!=d.get(g)||1!=d.size||d.get({x:4})||d.set({x:4},"t")!=d||2!=d.size)return!1;var f=d.entries(),l=f.next();if(l.done||l.value[0]!=g||"s"!=l.value[1])return!1;l=f.next();return l.done||4!=l.value[0].x||"t"!=l.value[1]||!f.next().done?!1:!0}catch(r){return!1}}())return a;
var k=new WeakMap;h.prototype.set=function(g,d){g=0===g?0:g;var f=e(this,g);f.list||(f.list=this.i[f.id]=[]);f.h?f.h.value=d:(f.h={next:this.g,previous:this.g.previous,head:this.g,key:g,value:d},f.list.push(f.h),this.g.previous.next=f.h,this.g.previous=f.h,this.size++);return this};
h.prototype["delete"]=function(g){g=e(this,g);return g.h&&g.list?(g.list.splice(g.index,1),g.list.length||delete this.i[g.id],g.h.previous.next=g.h.next,g.h.next.previous=g.h.previous,g.h.head=null,this.size--,!0):!1};
h.prototype.clear=function(){this.i={};this.g=this.g.previous=b();this.size=0};
h.prototype.has=function(g){return!!e(this,g).h};
h.prototype.get=function(g){return(g=e(this,g).h)&&g.value};
h.prototype.entries=function(){return c(this,function(g){return[g.key,g.value]})};
h.prototype.keys=function(){return c(this,function(g){return g.key})};
h.prototype.values=function(){return c(this,function(g){return g.value})};
h.prototype.forEach=function(g,d){for(var f=this.entries(),l;!(l=f.next()).done;)l=l.value,g.call(d,l[1],l[0],this)};
h.prototype[Symbol.iterator]=h.prototype.entries;var m=0;return h});
x("Set",function(a){function b(c){this.g=new Map;if(c){c=p(c);for(var e;!(e=c.next()).done;)this.add(e.value)}this.size=this.g.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),e=new a(p([c]));if(!e.has(c)||1!=e.size||e.add(c)!=e||1!=e.size||e.add({x:4})!=e||2!=e.size)return!1;var h=e.entries(),k=h.next();if(k.done||k.value[0]!=c||k.value[1]!=c)return!1;k=h.next();return k.done||k.value[0]==c||4!=k.value[0].x||k.value[1]!=k.value[0]?!1:h.next().done}catch(m){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.g.set(c,c);this.size=this.g.size;return this};
b.prototype["delete"]=function(c){c=this.g["delete"](c);this.size=this.g.size;return c};
b.prototype.clear=function(){this.g.clear();this.size=0};
b.prototype.has=function(c){return this.g.has(c)};
b.prototype.entries=function(){return this.g.entries()};
b.prototype.values=function(){return this.g.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,e){var h=this;this.g.forEach(function(k){return c.call(e,k,k,h)})};
return b});
var A=this||self;function B(a,b){var c=a.split("."),e=A;c[0]in e||"undefined"==typeof e.execScript||e.execScript("var "+c[0]);for(var h;c.length&&(h=c.shift());)c.length||void 0===b?e[h]&&e[h]!==Object.prototype[h]?e=e[h]:e=e[h]={}:e[h]=b}
;var C=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function D(a){return a?decodeURI(a):a}
;B("yt.config_",window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{});Object.freeze(["js-httpswwwgoogleanalyticscomanalyticsjs","js-chromeextensionpkedcjkdefgpdelpbcmbmeomcjbeemfm","video-","js-http","css-http"]);
var E=Object.freeze("document.appendChild document.body.appendChild document.querySelector document.querySelectorAll history.back history.go".split(" ")),F=Object.freeze("fonts.googleapis.com s0.2mdn.net securepubads.g.doubleclick.net ssl.google-analytics.com static.doubleclick.net www.google-analytics.com www.googletagservices.com www.youtube.com youtube.com".split(" ")),G=Object.freeze(["pkedcjkdefgpdelpbcmbmeomcjbeemfm","fjhoaacokmgbjemoflkofnenfaiekifl","enhhojjnijigcajfphajepfemndkmdlo"]),H=
Object.freeze(".corp.google.com .googlevideo.com .ytimg.com .google.com .googlesyndication.com .gstatic.com .prod.google.com .google.ru".split(" ")),I=Object.freeze(["chrome-extension","safari-extension","safari-resource","opera"]);function J(){return E.map(function(a){return K(a)}).filter(function(a){return!!a})}
function K(a){var b=a.split(".");a=b[b.length-1];b=b.reduce(function(c,e){return c&&c[e]},window);
if(!b)return a+" is missing";b=Function.prototype.toString.call(b).replace(/\n/g," ").replace(/  +/g," ");return b!="function "+a+"() { [native code] }"?a+" is not native, prologue: "+b.slice(0,50):null}
function L(a){var b=a.match(C)[1]||null;return I.some(function(c){return b==c})}
function M(a){var b=D(a.match(C)[3]||null);return!b||L(a)?!0:F.some(function(c){return b==c})||H.some(function(c){return b.endsWith(c)})}
function N(a){if(!L(a))return null;var b=D(a.match(C)[3]||null);return b?G.some(function(c){return b==c})?null:b:null}
function O(){var a=new Set;[].concat(q(document.querySelectorAll("script"))).forEach(function(b){b.src&&!M(b.src)&&a.add(b.src)});
[].concat(q(document.querySelectorAll("link[href]"))).forEach(function(b){"alternate"==b.rel||M(b.href)||a.add(b.href)});
return[].concat(q(a)).sort()}
function P(){var a=new Set;[].concat(q(document.querySelectorAll("script"))).forEach(function(b){b.src&&(b=N(b.src))&&a.add(b)});
return[].concat(q(a)).sort()}
;B("ytbin.polymer.shared.lib.tampering.info",function(){var a=O(),b=J(),c=P(),e=[];c.length&&e.push("extensions",c);a.length&&e.push("suspiciousIncludes",a);b.length&&e.push("suspiciousApis",b);return e.length?e:null});}).call(this);
