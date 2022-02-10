(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var f,g="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},h;
if("function"==typeof Object.setPrototypeOf)h=Object.setPrototypeOf;else{var k;a:{var aa={a:!0},l={};try{l.__proto__=aa;k=l.a;break a}catch(a){}k=!1}h=k?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var m=h,n=this||self;
function p(a){a=a.split(".");for(var b=n,c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function ba(a,b,c){return a.call.apply(a.bind,arguments)}
function ca(a,b,c){if(!a)throw Error();if(2<arguments.length){var e=Array.prototype.slice.call(arguments,2);return function(){var d=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(d,e);return a.apply(b,d)}}return function(){return a.apply(b,arguments)}}
function q(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?q=ba:q=ca;return q.apply(null,arguments)}
function r(a,b){var c=a.split("."),e=n;c[0]in e||"undefined"==typeof e.execScript||e.execScript("var "+c[0]);for(var d;c.length&&(d=c.shift());)c.length||void 0===b?e[d]&&e[d]!==Object.prototype[d]?e=e[d]:e=e[d]={}:e[d]=b}
;function u(){this.s=this.s;this.B=this.B}
u.prototype.s=!1;u.prototype.dispose=function(){this.s||(this.s=!0,this.G())};
u.prototype.G=function(){if(this.B)for(;this.B.length;)this.B.shift()()};var v=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};r("yt.config_",v);function w(a,b){return a in v?v[a]:b}
;function x(a){var b=w("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:w("EXPERIMENT_FLAGS",{})[a]}
;var y,z=x("web_emulated_idle_callback_delay");y=void 0===z?300:Number(z||0);var B=1E3/60-3;
function C(a){a=void 0===a?{}:a;u.call(this);this.g=[];this.g[8]=[];this.g[4]=[];this.g[3]=[];this.g[2]=[];this.g[1]=[];this.g[0]=[];this.j=0;this.N=a.timeout||1;this.i={};this.o=B;this.C=this.h=this.m=0;this.D=this.l=!1;this.u=[];this.H=q(this.R,this);this.M=q(this.T,this);this.J=q(this.O,this);this.K=q(this.P,this);this.L=q(this.S,this);this.A=this.F=!1;var b;if(b=!!window.requestIdleCallback)b=x("disable_scheduler_requestIdleCallback"),b=!("string"===typeof b&&"false"===b?0:b);this.I=b;(this.v=
!!a.useRaf&&!!window.requestAnimationFrame)&&document.addEventListener("visibilitychange",this.H)}
C.prototype=g(u.prototype);C.prototype.constructor=C;if(m)m(C,u);else for(var D in u)if("prototype"!=D)if(Object.defineProperties){var E=Object.getOwnPropertyDescriptor(u,D);E&&Object.defineProperty(C,D,E)}else C[D]=u[D];function F(a,b){var c=Date.now();G(b);c=Date.now()-c;a.l||(a.o-=c)}
function H(a,b,c,e){++a.C;if(10==c)return F(a,b),a.C;var d=a.C;a.i[d]=b;a.l&&!e?a.u.push({id:d,priority:c}):(a.g[c].push(d),a.D||a.l||(0!=a.h&&I(a)!=a.m&&J(a),a.start()));return d}
function K(a){a.u.length=0;for(var b=4;0<=b;b--)a.g[b].length=0;a.g[8].length=0;a.i={};J(a)}
function I(a){if(a.g[8].length){if(a.A)return 4;if(!document.hidden&&a.v)return 3}for(var b=4;b>=a.j;b--)if(0<a.g[b].length)return 0<b?!document.hidden&&a.v?3:2:1;return 0}
function G(a){try{a()}catch(b){(a=p("yt.logging.errors.log"))&&a(b)}}
function L(a){if(a.g[8].length)return!0;for(var b=3;0<=b;b--)if(a.g[b].length)return!0;return!1}
f=C.prototype;f.P=function(a){var b=void 0;a&&(b=a.timeRemaining());this.F=!0;M(this,b);this.F=!1};
f.T=function(){M(this)};
f.O=function(){N(this)};
f.S=function(){this.A=!0;var a=I(this);4==a&&a!=this.m&&(J(this),this.start());M(this);this.A=!1};
f.R=function(){document.hidden||N(this);this.h&&(J(this),this.start())};
function N(a){J(a);a.l=!0;for(var b=Date.now(),c=a.g[8];c.length;){var e=c.shift(),d=a.i[e];delete a.i[e];d&&G(d)}O(a);a.l=!1;L(a)&&a.start();a.o-=Date.now()-b}
function O(a){for(var b=0,c=a.u.length;b<c;b++){var e=a.u[b];a.g[e.priority].push(e.id)}a.u.length=0}
function M(a,b){a.A&&4==a.m&&a.h||J(a);a.l=!0;for(var c=Date.now()+(b||a.o),e=a.g[4];e.length;){var d=e.shift(),t=a.i[d];delete a.i[d];t&&G(t)}e=a.F?0:1;e=a.j>e?a.j:e;if(!(Date.now()>=c)){do{a:{d=a;t=e;for(var A=3;A>=t;A--)for(var S=d.g[A];S.length;){var T=S.shift(),U=d.i[T];delete d.i[T];if(U){d=U;break a}}d=null}d&&G(d)}while(d&&Date.now()<c)}a.l=!1;O(a);a.o=B;L(a)&&a.start()}
f.start=function(){this.D=!1;if(0==this.h)switch(this.m=I(this),this.m){case 1:var a=this.K;this.h=this.I?window.requestIdleCallback(a,{timeout:3E3}):window.setTimeout(a,y);break;case 2:this.h=window.setTimeout(this.M,this.N);break;case 3:this.h=window.requestAnimationFrame(this.L);break;case 4:this.h=window.setTimeout(this.J,0)}};
function J(a){if(a.h){switch(a.m){case 1:var b=a.h;a.I?window.cancelIdleCallback(b):window.clearTimeout(b);break;case 2:case 4:window.clearTimeout(a.h);break;case 3:window.cancelAnimationFrame(a.h)}a.h=0}}
f.G=function(){K(this);J(this);this.v&&document.removeEventListener("visibilitychange",this.H);u.prototype.G.call(this)};var P=p("yt.scheduler.instance.timerIdMap_")||{},Q=0,R=0;function V(){var a=p("ytglobal.schedulerInstanceInstance_");if(!a||a.s)a=new C(w("scheduler",void 0)||{}),r("ytglobal.schedulerInstanceInstance_",a);return a}
function da(){var a=p("ytglobal.schedulerInstanceInstance_");a&&(a&&"function"==typeof a.dispose&&a.dispose(),r("ytglobal.schedulerInstanceInstance_",null))}
function ea(){K(V())}
function fa(a,b,c){if(0==c||void 0===c)return c=void 0===c,-H(V(),a,b,c);var e=window.setTimeout(function(){var d=H(V(),a,b);P[e]=d},c);
return e}
function ha(a){var b=V();F(b,a)}
function ia(a){var b=V();if(0>a)delete b.i[-a];else{var c=P[a];c?(delete b.i[c],delete P[a]):window.clearTimeout(a)}}
function W(a){var b=p("ytcsi.tick");b&&b(a)}
function ja(){W("jse");X()}
function X(){window.clearTimeout(Q);V().start()}
function ka(){var a=V();J(a);a.D=!0;window.clearTimeout(Q);Q=window.setTimeout(ja,800)}
function Y(){window.clearTimeout(R);R=window.setTimeout(function(){W("jset");Z(0)},800)}
function Z(a){Y();var b=V();b.j=a;b.start()}
function la(a){Y();var b=V();b.j>a&&(b.j=a,b.start())}
function ma(){window.clearTimeout(R);var a=V();a.j=0;a.start()}
;p("yt.scheduler.initialized")||(r("yt.scheduler.instance.dispose",da),r("yt.scheduler.instance.addJob",fa),r("yt.scheduler.instance.addImmediateJob",ha),r("yt.scheduler.instance.cancelJob",ia),r("yt.scheduler.instance.cancelAllJobs",ea),r("yt.scheduler.instance.start",X),r("yt.scheduler.instance.pause",ka),r("yt.scheduler.instance.setPriorityThreshold",Z),r("yt.scheduler.instance.enablePriorityThreshold",la),r("yt.scheduler.instance.clearPriorityThreshold",ma),r("yt.scheduler.initialized",!0));}).call(this);
