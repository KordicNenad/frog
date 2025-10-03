(function(){const R=document.createElement("link").relList;if(R&&R.supports&&R.supports("modulepreload"))return;for(const q of document.querySelectorAll('link[rel="modulepreload"]'))m(q);new MutationObserver(q=>{for(const D of q)if(D.type==="childList")for(const k of D.addedNodes)k.tagName==="LINK"&&k.rel==="modulepreload"&&m(k)}).observe(document,{childList:!0,subtree:!0});function H(q){const D={};return q.integrity&&(D.integrity=q.integrity),q.referrerPolicy&&(D.referrerPolicy=q.referrerPolicy),q.crossOrigin==="use-credentials"?D.credentials="include":q.crossOrigin==="anonymous"?D.credentials="omit":D.credentials="same-origin",D}function m(q){if(q.ep)return;q.ep=!0;const D=H(q);fetch(q.href,D)}})();function cd(v){return v&&v.__esModule&&Object.prototype.hasOwnProperty.call(v,"default")?v.default:v}var $c={exports:{}},pn={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fr;function Ug(){if(Fr)return pn;Fr=1;var v=Symbol.for("react.transitional.element"),R=Symbol.for("react.fragment");function H(m,q,D){var k=null;if(D!==void 0&&(k=""+D),q.key!==void 0&&(k=""+q.key),"key"in q){D={};for(var ht in q)ht!=="key"&&(D[ht]=q[ht])}else D=q;return q=D.ref,{$$typeof:v,type:m,key:k,ref:q!==void 0?q:null,props:D}}return pn.Fragment=R,pn.jsx=H,pn.jsxs=H,pn}var Pr;function Rg(){return Pr||(Pr=1,$c.exports=Ug()),$c.exports}var d=Rg(),Fc={exports:{}},Z={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ir;function Hg(){if(Ir)return Z;Ir=1;var v=Symbol.for("react.transitional.element"),R=Symbol.for("react.portal"),H=Symbol.for("react.fragment"),m=Symbol.for("react.strict_mode"),q=Symbol.for("react.profiler"),D=Symbol.for("react.consumer"),k=Symbol.for("react.context"),ht=Symbol.for("react.forward_ref"),_=Symbol.for("react.suspense"),T=Symbol.for("react.memo"),U=Symbol.for("react.lazy"),J=Symbol.iterator;function tt(o){return o===null||typeof o!="object"?null:(o=J&&o[J]||o["@@iterator"],typeof o=="function"?o:null)}var Ht={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},qt=Object.assign,re={};function Bt(o,j,O){this.props=o,this.context=j,this.refs=re,this.updater=O||Ht}Bt.prototype.isReactComponent={},Bt.prototype.setState=function(o,j){if(typeof o!="object"&&typeof o!="function"&&o!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,o,j,"setState")},Bt.prototype.forceUpdate=function(o){this.updater.enqueueForceUpdate(this,o,"forceUpdate")};function dl(){}dl.prototype=Bt.prototype;function je(o,j,O){this.props=o,this.context=j,this.refs=re,this.updater=O||Ht}var Mt=je.prototype=new dl;Mt.constructor=je,qt(Mt,Bt.prototype),Mt.isPureReactComponent=!0;var de=Array.isArray,$={H:null,A:null,T:null,S:null,V:null},Lt=Object.prototype.hasOwnProperty;function wt(o,j,O,E,Y,F){return O=F.ref,{$$typeof:v,type:o,key:j,ref:O!==void 0?O:null,props:F}}function Vt(o,j){return wt(o.type,j,void 0,void 0,void 0,o.props)}function pe(o){return typeof o=="object"&&o!==null&&o.$$typeof===v}function Rl(o){var j={"=":"=0",":":"=2"};return"$"+o.replace(/[=:]/g,function(O){return j[O]})}var Ee=/\/+/g;function Dt(o,j){return typeof o=="object"&&o!==null&&o.key!=null?Rl(""+o.key):j.toString(36)}function gl(){}function hl(o){switch(o.status){case"fulfilled":return o.value;case"rejected":throw o.reason;default:switch(typeof o.status=="string"?o.then(gl,gl):(o.status="pending",o.then(function(j){o.status==="pending"&&(o.status="fulfilled",o.value=j)},function(j){o.status==="pending"&&(o.status="rejected",o.reason=j)})),o.status){case"fulfilled":return o.value;case"rejected":throw o.reason}}throw o}function _t(o,j,O,E,Y){var F=typeof o;(F==="undefined"||F==="boolean")&&(o=null);var Q=!1;if(o===null)Q=!0;else switch(F){case"bigint":case"string":case"number":Q=!0;break;case"object":switch(o.$$typeof){case v:case R:Q=!0;break;case U:return Q=o._init,_t(Q(o._payload),j,O,E,Y)}}if(Q)return Y=Y(o),Q=E===""?"."+Dt(o,0):E,de(Y)?(O="",Q!=null&&(O=Q.replace(Ee,"$&/")+"/"),_t(Y,j,O,"",function(Qe){return Qe})):Y!=null&&(pe(Y)&&(Y=Vt(Y,O+(Y.key==null||o&&o.key===Y.key?"":(""+Y.key).replace(Ee,"$&/")+"/")+Q)),j.push(Y)),1;Q=0;var Kt=E===""?".":E+":";if(de(o))for(var ot=0;ot<o.length;ot++)E=o[ot],F=Kt+Dt(E,ot),Q+=_t(E,j,O,F,Y);else if(ot=tt(o),typeof ot=="function")for(o=ot.call(o),ot=0;!(E=o.next()).done;)E=E.value,F=Kt+Dt(E,ot++),Q+=_t(E,j,O,F,Y);else if(F==="object"){if(typeof o.then=="function")return _t(hl(o),j,O,E,Y);throw j=String(o),Error("Objects are not valid as a React child (found: "+(j==="[object Object]"?"object with keys {"+Object.keys(o).join(", ")+"}":j)+"). If you meant to render a collection of children, use an array instead.")}return Q}function x(o,j,O){if(o==null)return o;var E=[],Y=0;return _t(o,E,"","",function(F){return j.call(O,F,Y++)}),E}function A(o){if(o._status===-1){var j=o._result;j=j(),j.then(function(O){(o._status===0||o._status===-1)&&(o._status=1,o._result=O)},function(O){(o._status===0||o._status===-1)&&(o._status=2,o._result=O)}),o._status===-1&&(o._status=0,o._result=j)}if(o._status===1)return o._result.default;throw o._result}var X=typeof reportError=="function"?reportError:function(o){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var j=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof o=="object"&&o!==null&&typeof o.message=="string"?String(o.message):String(o),error:o});if(!window.dispatchEvent(j))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",o);return}console.error(o)};function ut(){}return Z.Children={map:x,forEach:function(o,j,O){x(o,function(){j.apply(this,arguments)},O)},count:function(o){var j=0;return x(o,function(){j++}),j},toArray:function(o){return x(o,function(j){return j})||[]},only:function(o){if(!pe(o))throw Error("React.Children.only expected to receive a single React element child.");return o}},Z.Component=Bt,Z.Fragment=H,Z.Profiler=q,Z.PureComponent=je,Z.StrictMode=m,Z.Suspense=_,Z.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=$,Z.__COMPILER_RUNTIME={__proto__:null,c:function(o){return $.H.useMemoCache(o)}},Z.cache=function(o){return function(){return o.apply(null,arguments)}},Z.cloneElement=function(o,j,O){if(o==null)throw Error("The argument must be a React element, but you passed "+o+".");var E=qt({},o.props),Y=o.key,F=void 0;if(j!=null)for(Q in j.ref!==void 0&&(F=void 0),j.key!==void 0&&(Y=""+j.key),j)!Lt.call(j,Q)||Q==="key"||Q==="__self"||Q==="__source"||Q==="ref"&&j.ref===void 0||(E[Q]=j[Q]);var Q=arguments.length-2;if(Q===1)E.children=O;else if(1<Q){for(var Kt=Array(Q),ot=0;ot<Q;ot++)Kt[ot]=arguments[ot+2];E.children=Kt}return wt(o.type,Y,void 0,void 0,F,E)},Z.createContext=function(o){return o={$$typeof:k,_currentValue:o,_currentValue2:o,_threadCount:0,Provider:null,Consumer:null},o.Provider=o,o.Consumer={$$typeof:D,_context:o},o},Z.createElement=function(o,j,O){var E,Y={},F=null;if(j!=null)for(E in j.key!==void 0&&(F=""+j.key),j)Lt.call(j,E)&&E!=="key"&&E!=="__self"&&E!=="__source"&&(Y[E]=j[E]);var Q=arguments.length-2;if(Q===1)Y.children=O;else if(1<Q){for(var Kt=Array(Q),ot=0;ot<Q;ot++)Kt[ot]=arguments[ot+2];Y.children=Kt}if(o&&o.defaultProps)for(E in Q=o.defaultProps,Q)Y[E]===void 0&&(Y[E]=Q[E]);return wt(o,F,void 0,void 0,null,Y)},Z.createRef=function(){return{current:null}},Z.forwardRef=function(o){return{$$typeof:ht,render:o}},Z.isValidElement=pe,Z.lazy=function(o){return{$$typeof:U,_payload:{_status:-1,_result:o},_init:A}},Z.memo=function(o,j){return{$$typeof:T,type:o,compare:j===void 0?null:j}},Z.startTransition=function(o){var j=$.T,O={};$.T=O;try{var E=o(),Y=$.S;Y!==null&&Y(O,E),typeof E=="object"&&E!==null&&typeof E.then=="function"&&E.then(ut,X)}catch(F){X(F)}finally{$.T=j}},Z.unstable_useCacheRefresh=function(){return $.H.useCacheRefresh()},Z.use=function(o){return $.H.use(o)},Z.useActionState=function(o,j,O){return $.H.useActionState(o,j,O)},Z.useCallback=function(o,j){return $.H.useCallback(o,j)},Z.useContext=function(o){return $.H.useContext(o)},Z.useDebugValue=function(){},Z.useDeferredValue=function(o,j){return $.H.useDeferredValue(o,j)},Z.useEffect=function(o,j,O){var E=$.H;if(typeof O=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return E.useEffect(o,j)},Z.useId=function(){return $.H.useId()},Z.useImperativeHandle=function(o,j,O){return $.H.useImperativeHandle(o,j,O)},Z.useInsertionEffect=function(o,j){return $.H.useInsertionEffect(o,j)},Z.useLayoutEffect=function(o,j){return $.H.useLayoutEffect(o,j)},Z.useMemo=function(o,j){return $.H.useMemo(o,j)},Z.useOptimistic=function(o,j){return $.H.useOptimistic(o,j)},Z.useReducer=function(o,j,O){return $.H.useReducer(o,j,O)},Z.useRef=function(o){return $.H.useRef(o)},Z.useState=function(o){return $.H.useState(o)},Z.useSyncExternalStore=function(o,j,O){return $.H.useSyncExternalStore(o,j,O)},Z.useTransition=function(){return $.H.useTransition()},Z.version="19.1.1",Z}var td;function lf(){return td||(td=1,Fc.exports=Hg()),Fc.exports}var ve=lf();const qg=cd(ve);var Pc={exports:{}},yn={},Ic={exports:{}},tf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ed;function Yg(){return ed||(ed=1,(function(v){function R(x,A){var X=x.length;x.push(A);t:for(;0<X;){var ut=X-1>>>1,o=x[ut];if(0<q(o,A))x[ut]=A,x[X]=o,X=ut;else break t}}function H(x){return x.length===0?null:x[0]}function m(x){if(x.length===0)return null;var A=x[0],X=x.pop();if(X!==A){x[0]=X;t:for(var ut=0,o=x.length,j=o>>>1;ut<j;){var O=2*(ut+1)-1,E=x[O],Y=O+1,F=x[Y];if(0>q(E,X))Y<o&&0>q(F,E)?(x[ut]=F,x[Y]=X,ut=Y):(x[ut]=E,x[O]=X,ut=O);else if(Y<o&&0>q(F,X))x[ut]=F,x[Y]=X,ut=Y;else break t}}return A}function q(x,A){var X=x.sortIndex-A.sortIndex;return X!==0?X:x.id-A.id}if(v.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var D=performance;v.unstable_now=function(){return D.now()}}else{var k=Date,ht=k.now();v.unstable_now=function(){return k.now()-ht}}var _=[],T=[],U=1,J=null,tt=3,Ht=!1,qt=!1,re=!1,Bt=!1,dl=typeof setTimeout=="function"?setTimeout:null,je=typeof clearTimeout=="function"?clearTimeout:null,Mt=typeof setImmediate<"u"?setImmediate:null;function de(x){for(var A=H(T);A!==null;){if(A.callback===null)m(T);else if(A.startTime<=x)m(T),A.sortIndex=A.expirationTime,R(_,A);else break;A=H(T)}}function $(x){if(re=!1,de(x),!qt)if(H(_)!==null)qt=!0,Lt||(Lt=!0,Dt());else{var A=H(T);A!==null&&_t($,A.startTime-x)}}var Lt=!1,wt=-1,Vt=5,pe=-1;function Rl(){return Bt?!0:!(v.unstable_now()-pe<Vt)}function Ee(){if(Bt=!1,Lt){var x=v.unstable_now();pe=x;var A=!0;try{t:{qt=!1,re&&(re=!1,je(wt),wt=-1),Ht=!0;var X=tt;try{e:{for(de(x),J=H(_);J!==null&&!(J.expirationTime>x&&Rl());){var ut=J.callback;if(typeof ut=="function"){J.callback=null,tt=J.priorityLevel;var o=ut(J.expirationTime<=x);if(x=v.unstable_now(),typeof o=="function"){J.callback=o,de(x),A=!0;break e}J===H(_)&&m(_),de(x)}else m(_);J=H(_)}if(J!==null)A=!0;else{var j=H(T);j!==null&&_t($,j.startTime-x),A=!1}}break t}finally{J=null,tt=X,Ht=!1}A=void 0}}finally{A?Dt():Lt=!1}}}var Dt;if(typeof Mt=="function")Dt=function(){Mt(Ee)};else if(typeof MessageChannel<"u"){var gl=new MessageChannel,hl=gl.port2;gl.port1.onmessage=Ee,Dt=function(){hl.postMessage(null)}}else Dt=function(){dl(Ee,0)};function _t(x,A){wt=dl(function(){x(v.unstable_now())},A)}v.unstable_IdlePriority=5,v.unstable_ImmediatePriority=1,v.unstable_LowPriority=4,v.unstable_NormalPriority=3,v.unstable_Profiling=null,v.unstable_UserBlockingPriority=2,v.unstable_cancelCallback=function(x){x.callback=null},v.unstable_forceFrameRate=function(x){0>x||125<x?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Vt=0<x?Math.floor(1e3/x):5},v.unstable_getCurrentPriorityLevel=function(){return tt},v.unstable_next=function(x){switch(tt){case 1:case 2:case 3:var A=3;break;default:A=tt}var X=tt;tt=A;try{return x()}finally{tt=X}},v.unstable_requestPaint=function(){Bt=!0},v.unstable_runWithPriority=function(x,A){switch(x){case 1:case 2:case 3:case 4:case 5:break;default:x=3}var X=tt;tt=x;try{return A()}finally{tt=X}},v.unstable_scheduleCallback=function(x,A,X){var ut=v.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?ut+X:ut):X=ut,x){case 1:var o=-1;break;case 2:o=250;break;case 5:o=1073741823;break;case 4:o=1e4;break;default:o=5e3}return o=X+o,x={id:U++,callback:A,priorityLevel:x,startTime:X,expirationTime:o,sortIndex:-1},X>ut?(x.sortIndex=X,R(T,x),H(_)===null&&x===H(T)&&(re?(je(wt),wt=-1):re=!0,_t($,X-ut))):(x.sortIndex=o,R(_,x),qt||Ht||(qt=!0,Lt||(Lt=!0,Dt()))),x},v.unstable_shouldYield=Rl,v.unstable_wrapCallback=function(x){var A=tt;return function(){var X=tt;tt=A;try{return x.apply(this,arguments)}finally{tt=X}}}})(tf)),tf}var ld;function Bg(){return ld||(ld=1,Ic.exports=Yg()),Ic.exports}var ef={exports:{}},Rt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ad;function Gg(){if(ad)return Rt;ad=1;var v=lf();function R(_){var T="https://react.dev/errors/"+_;if(1<arguments.length){T+="?args[]="+encodeURIComponent(arguments[1]);for(var U=2;U<arguments.length;U++)T+="&args[]="+encodeURIComponent(arguments[U])}return"Minified React error #"+_+"; visit "+T+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function H(){}var m={d:{f:H,r:function(){throw Error(R(522))},D:H,C:H,L:H,m:H,X:H,S:H,M:H},p:0,findDOMNode:null},q=Symbol.for("react.portal");function D(_,T,U){var J=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:q,key:J==null?null:""+J,children:_,containerInfo:T,implementation:U}}var k=v.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function ht(_,T){if(_==="font")return"";if(typeof T=="string")return T==="use-credentials"?T:""}return Rt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=m,Rt.createPortal=function(_,T){var U=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!T||T.nodeType!==1&&T.nodeType!==9&&T.nodeType!==11)throw Error(R(299));return D(_,T,null,U)},Rt.flushSync=function(_){var T=k.T,U=m.p;try{if(k.T=null,m.p=2,_)return _()}finally{k.T=T,m.p=U,m.d.f()}},Rt.preconnect=function(_,T){typeof _=="string"&&(T?(T=T.crossOrigin,T=typeof T=="string"?T==="use-credentials"?T:"":void 0):T=null,m.d.C(_,T))},Rt.prefetchDNS=function(_){typeof _=="string"&&m.d.D(_)},Rt.preinit=function(_,T){if(typeof _=="string"&&T&&typeof T.as=="string"){var U=T.as,J=ht(U,T.crossOrigin),tt=typeof T.integrity=="string"?T.integrity:void 0,Ht=typeof T.fetchPriority=="string"?T.fetchPriority:void 0;U==="style"?m.d.S(_,typeof T.precedence=="string"?T.precedence:void 0,{crossOrigin:J,integrity:tt,fetchPriority:Ht}):U==="script"&&m.d.X(_,{crossOrigin:J,integrity:tt,fetchPriority:Ht,nonce:typeof T.nonce=="string"?T.nonce:void 0})}},Rt.preinitModule=function(_,T){if(typeof _=="string")if(typeof T=="object"&&T!==null){if(T.as==null||T.as==="script"){var U=ht(T.as,T.crossOrigin);m.d.M(_,{crossOrigin:U,integrity:typeof T.integrity=="string"?T.integrity:void 0,nonce:typeof T.nonce=="string"?T.nonce:void 0})}}else T==null&&m.d.M(_)},Rt.preload=function(_,T){if(typeof _=="string"&&typeof T=="object"&&T!==null&&typeof T.as=="string"){var U=T.as,J=ht(U,T.crossOrigin);m.d.L(_,U,{crossOrigin:J,integrity:typeof T.integrity=="string"?T.integrity:void 0,nonce:typeof T.nonce=="string"?T.nonce:void 0,type:typeof T.type=="string"?T.type:void 0,fetchPriority:typeof T.fetchPriority=="string"?T.fetchPriority:void 0,referrerPolicy:typeof T.referrerPolicy=="string"?T.referrerPolicy:void 0,imageSrcSet:typeof T.imageSrcSet=="string"?T.imageSrcSet:void 0,imageSizes:typeof T.imageSizes=="string"?T.imageSizes:void 0,media:typeof T.media=="string"?T.media:void 0})}},Rt.preloadModule=function(_,T){if(typeof _=="string")if(T){var U=ht(T.as,T.crossOrigin);m.d.m(_,{as:typeof T.as=="string"&&T.as!=="script"?T.as:void 0,crossOrigin:U,integrity:typeof T.integrity=="string"?T.integrity:void 0})}else m.d.m(_)},Rt.requestFormReset=function(_){m.d.r(_)},Rt.unstable_batchedUpdates=function(_,T){return _(T)},Rt.useFormState=function(_,T,U){return k.H.useFormState(_,T,U)},Rt.useFormStatus=function(){return k.H.useHostTransitionStatus()},Rt.version="19.1.1",Rt}var nd;function Xg(){if(nd)return ef.exports;nd=1;function v(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(v)}catch(R){console.error(R)}}return v(),ef.exports=Gg(),ef.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var id;function Cg(){if(id)return yn;id=1;var v=Bg(),R=lf(),H=Xg();function m(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)e+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function q(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function D(t){var e=t,l=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(l=e.return),t=e.return;while(t)}return e.tag===3?l:null}function k(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function ht(t){if(D(t)!==t)throw Error(m(188))}function _(t){var e=t.alternate;if(!e){if(e=D(t),e===null)throw Error(m(188));return e!==t?null:t}for(var l=t,a=e;;){var n=l.return;if(n===null)break;var i=n.alternate;if(i===null){if(a=n.return,a!==null){l=a;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===l)return ht(n),t;if(i===a)return ht(n),e;i=i.sibling}throw Error(m(188))}if(l.return!==a.return)l=n,a=i;else{for(var u=!1,c=n.child;c;){if(c===l){u=!0,l=n,a=i;break}if(c===a){u=!0,a=n,l=i;break}c=c.sibling}if(!u){for(c=i.child;c;){if(c===l){u=!0,l=i,a=n;break}if(c===a){u=!0,a=i,l=n;break}c=c.sibling}if(!u)throw Error(m(189))}}if(l.alternate!==a)throw Error(m(190))}if(l.tag!==3)throw Error(m(188));return l.stateNode.current===l?t:e}function T(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=T(t),e!==null)return e;t=t.sibling}return null}var U=Object.assign,J=Symbol.for("react.element"),tt=Symbol.for("react.transitional.element"),Ht=Symbol.for("react.portal"),qt=Symbol.for("react.fragment"),re=Symbol.for("react.strict_mode"),Bt=Symbol.for("react.profiler"),dl=Symbol.for("react.provider"),je=Symbol.for("react.consumer"),Mt=Symbol.for("react.context"),de=Symbol.for("react.forward_ref"),$=Symbol.for("react.suspense"),Lt=Symbol.for("react.suspense_list"),wt=Symbol.for("react.memo"),Vt=Symbol.for("react.lazy"),pe=Symbol.for("react.activity"),Rl=Symbol.for("react.memo_cache_sentinel"),Ee=Symbol.iterator;function Dt(t){return t===null||typeof t!="object"?null:(t=Ee&&t[Ee]||t["@@iterator"],typeof t=="function"?t:null)}var gl=Symbol.for("react.client.reference");function hl(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===gl?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case qt:return"Fragment";case Bt:return"Profiler";case re:return"StrictMode";case $:return"Suspense";case Lt:return"SuspenseList";case pe:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case Ht:return"Portal";case Mt:return(t.displayName||"Context")+".Provider";case je:return(t._context.displayName||"Context")+".Consumer";case de:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case wt:return e=t.displayName||null,e!==null?e:hl(t.type)||"Memo";case Vt:e=t._payload,t=t._init;try{return hl(t(e))}catch{}}return null}var _t=Array.isArray,x=R.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,A=H.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X={pending:!1,data:null,method:null,action:null},ut=[],o=-1;function j(t){return{current:t}}function O(t){0>o||(t.current=ut[o],ut[o]=null,o--)}function E(t,e){o++,ut[o]=t.current,t.current=e}var Y=j(null),F=j(null),Q=j(null),Kt=j(null);function ot(t,e){switch(E(Q,e),E(F,t),E(Y,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?Er(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=Er(e),t=Ar(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}O(Y),E(Y,t)}function Qe(){O(Y),O(F),O(Q)}function qi(t){t.memoizedState!==null&&E(Kt,t);var e=Y.current,l=Ar(e,t.type);e!==l&&(E(F,t),E(Y,l))}function xn(t){F.current===t&&(O(Y),O(F)),Kt.current===t&&(O(Kt),dn._currentValue=X)}var Yi=Object.prototype.hasOwnProperty,Bi=v.unstable_scheduleCallback,Gi=v.unstable_cancelCallback,sd=v.unstable_shouldYield,rd=v.unstable_requestPaint,ye=v.unstable_now,dd=v.unstable_getCurrentPriorityLevel,af=v.unstable_ImmediatePriority,nf=v.unstable_UserBlockingPriority,Sn=v.unstable_NormalPriority,gd=v.unstable_LowPriority,uf=v.unstable_IdlePriority,hd=v.log,md=v.unstable_setDisableYieldValue,ba=null,kt=null;function Ze(t){if(typeof hd=="function"&&md(t),kt&&typeof kt.setStrictMode=="function")try{kt.setStrictMode(ba,t)}catch{}}var Jt=Math.clz32?Math.clz32:yd,vd=Math.log,pd=Math.LN2;function yd(t){return t>>>=0,t===0?32:31-(vd(t)/pd|0)|0}var zn=256,Tn=4194304;function ml(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function jn(t,e,l){var a=t.pendingLanes;if(a===0)return 0;var n=0,i=t.suspendedLanes,u=t.pingedLanes;t=t.warmLanes;var c=a&134217727;return c!==0?(a=c&~i,a!==0?n=ml(a):(u&=c,u!==0?n=ml(u):l||(l=c&~t,l!==0&&(n=ml(l))))):(c=a&~i,c!==0?n=ml(c):u!==0?n=ml(u):l||(l=a&~t,l!==0&&(n=ml(l)))),n===0?0:e!==0&&e!==n&&(e&i)===0&&(i=n&-n,l=e&-e,i>=l||i===32&&(l&4194048)!==0)?e:n}function xa(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function bd(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function cf(){var t=zn;return zn<<=1,(zn&4194048)===0&&(zn=256),t}function ff(){var t=Tn;return Tn<<=1,(Tn&62914560)===0&&(Tn=4194304),t}function Xi(t){for(var e=[],l=0;31>l;l++)e.push(t);return e}function Sa(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function xd(t,e,l,a,n,i){var u=t.pendingLanes;t.pendingLanes=l,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=l,t.entangledLanes&=l,t.errorRecoveryDisabledLanes&=l,t.shellSuspendCounter=0;var c=t.entanglements,f=t.expirationTimes,h=t.hiddenUpdates;for(l=u&~l;0<l;){var b=31-Jt(l),z=1<<b;c[b]=0,f[b]=-1;var p=h[b];if(p!==null)for(h[b]=null,b=0;b<p.length;b++){var y=p[b];y!==null&&(y.lane&=-536870913)}l&=~z}a!==0&&of(t,a,0),i!==0&&n===0&&t.tag!==0&&(t.suspendedLanes|=i&~(u&~e))}function of(t,e,l){t.pendingLanes|=e,t.suspendedLanes&=~e;var a=31-Jt(e);t.entangledLanes|=e,t.entanglements[a]=t.entanglements[a]|1073741824|l&4194090}function sf(t,e){var l=t.entangledLanes|=e;for(t=t.entanglements;l;){var a=31-Jt(l),n=1<<a;n&e|t[a]&e&&(t[a]|=e),l&=~n}}function Ci(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Qi(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function rf(){var t=A.p;return t!==0?t:(t=window.event,t===void 0?32:Vr(t.type))}function Sd(t,e){var l=A.p;try{return A.p=t,e()}finally{A.p=l}}var Le=Math.random().toString(36).slice(2),Nt="__reactFiber$"+Le,Gt="__reactProps$"+Le,Hl="__reactContainer$"+Le,Zi="__reactEvents$"+Le,zd="__reactListeners$"+Le,Td="__reactHandles$"+Le,df="__reactResources$"+Le,za="__reactMarker$"+Le;function Li(t){delete t[Nt],delete t[Gt],delete t[Zi],delete t[zd],delete t[Td]}function ql(t){var e=t[Nt];if(e)return e;for(var l=t.parentNode;l;){if(e=l[Hl]||l[Nt]){if(l=e.alternate,e.child!==null||l!==null&&l.child!==null)for(t=_r(t);t!==null;){if(l=t[Nt])return l;t=_r(t)}return e}t=l,l=t.parentNode}return null}function Yl(t){if(t=t[Nt]||t[Hl]){var e=t.tag;if(e===5||e===6||e===13||e===26||e===27||e===3)return t}return null}function Ta(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(m(33))}function Bl(t){var e=t[df];return e||(e=t[df]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function St(t){t[za]=!0}var gf=new Set,hf={};function vl(t,e){Gl(t,e),Gl(t+"Capture",e)}function Gl(t,e){for(hf[t]=e,t=0;t<e.length;t++)gf.add(e[t])}var jd=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),mf={},vf={};function Ed(t){return Yi.call(vf,t)?!0:Yi.call(mf,t)?!1:jd.test(t)?vf[t]=!0:(mf[t]=!0,!1)}function En(t,e,l){if(Ed(e))if(l===null)t.removeAttribute(e);else{switch(typeof l){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var a=e.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+l)}}function An(t,e,l){if(l===null)t.removeAttribute(e);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+l)}}function Ae(t,e,l,a){if(a===null)t.removeAttribute(l);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(l);return}t.setAttributeNS(e,l,""+a)}}var wi,pf;function Xl(t){if(wi===void 0)try{throw Error()}catch(l){var e=l.stack.trim().match(/\n( *(at )?)/);wi=e&&e[1]||"",pf=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+wi+t+pf}var Vi=!1;function Ki(t,e){if(!t||Vi)return"";Vi=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(e){var z=function(){throw Error()};if(Object.defineProperty(z.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(z,[])}catch(y){var p=y}Reflect.construct(t,[],z)}else{try{z.call()}catch(y){p=y}t.call(z.prototype)}}else{try{throw Error()}catch(y){p=y}(z=t())&&typeof z.catch=="function"&&z.catch(function(){})}}catch(y){if(y&&p&&typeof y.stack=="string")return[y.stack,p.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=a.DetermineComponentFrameRoot(),u=i[0],c=i[1];if(u&&c){var f=u.split(`
`),h=c.split(`
`);for(n=a=0;a<f.length&&!f[a].includes("DetermineComponentFrameRoot");)a++;for(;n<h.length&&!h[n].includes("DetermineComponentFrameRoot");)n++;if(a===f.length||n===h.length)for(a=f.length-1,n=h.length-1;1<=a&&0<=n&&f[a]!==h[n];)n--;for(;1<=a&&0<=n;a--,n--)if(f[a]!==h[n]){if(a!==1||n!==1)do if(a--,n--,0>n||f[a]!==h[n]){var b=`
`+f[a].replace(" at new "," at ");return t.displayName&&b.includes("<anonymous>")&&(b=b.replace("<anonymous>",t.displayName)),b}while(1<=a&&0<=n);break}}}finally{Vi=!1,Error.prepareStackTrace=l}return(l=t?t.displayName||t.name:"")?Xl(l):""}function Ad(t){switch(t.tag){case 26:case 27:case 5:return Xl(t.type);case 16:return Xl("Lazy");case 13:return Xl("Suspense");case 19:return Xl("SuspenseList");case 0:case 15:return Ki(t.type,!1);case 11:return Ki(t.type.render,!1);case 1:return Ki(t.type,!0);case 31:return Xl("Activity");default:return""}}function yf(t){try{var e="";do e+=Ad(t),t=t.return;while(t);return e}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}function le(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function bf(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Od(t){var e=bf(t)?"checked":"value",l=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),a=""+t[e];if(!t.hasOwnProperty(e)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var n=l.get,i=l.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return n.call(this)},set:function(u){a=""+u,i.call(this,u)}}),Object.defineProperty(t,e,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(u){a=""+u},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function On(t){t._valueTracker||(t._valueTracker=Od(t))}function xf(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var l=e.getValue(),a="";return t&&(a=bf(t)?t.checked?"true":"false":t.value),t=a,t!==l?(e.setValue(t),!0):!1}function Mn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Md=/[\n"\\]/g;function ae(t){return t.replace(Md,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function ki(t,e,l,a,n,i,u,c){t.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?t.type=u:t.removeAttribute("type"),e!=null?u==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+le(e)):t.value!==""+le(e)&&(t.value=""+le(e)):u!=="submit"&&u!=="reset"||t.removeAttribute("value"),e!=null?Ji(t,u,le(e)):l!=null?Ji(t,u,le(l)):a!=null&&t.removeAttribute("value"),n==null&&i!=null&&(t.defaultChecked=!!i),n!=null&&(t.checked=n&&typeof n!="function"&&typeof n!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?t.name=""+le(c):t.removeAttribute("name")}function Sf(t,e,l,a,n,i,u,c){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(t.type=i),e!=null||l!=null){if(!(i!=="submit"&&i!=="reset"||e!=null))return;l=l!=null?""+le(l):"",e=e!=null?""+le(e):l,c||e===t.value||(t.value=e),t.defaultValue=e}a=a??n,a=typeof a!="function"&&typeof a!="symbol"&&!!a,t.checked=c?t.checked:!!a,t.defaultChecked=!!a,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(t.name=u)}function Ji(t,e,l){e==="number"&&Mn(t.ownerDocument)===t||t.defaultValue===""+l||(t.defaultValue=""+l)}function Cl(t,e,l,a){if(t=t.options,e){e={};for(var n=0;n<l.length;n++)e["$"+l[n]]=!0;for(l=0;l<t.length;l++)n=e.hasOwnProperty("$"+t[l].value),t[l].selected!==n&&(t[l].selected=n),n&&a&&(t[l].defaultSelected=!0)}else{for(l=""+le(l),e=null,n=0;n<t.length;n++){if(t[n].value===l){t[n].selected=!0,a&&(t[n].defaultSelected=!0);return}e!==null||t[n].disabled||(e=t[n])}e!==null&&(e.selected=!0)}}function zf(t,e,l){if(e!=null&&(e=""+le(e),e!==t.value&&(t.value=e),l==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=l!=null?""+le(l):""}function Tf(t,e,l,a){if(e==null){if(a!=null){if(l!=null)throw Error(m(92));if(_t(a)){if(1<a.length)throw Error(m(93));a=a[0]}l=a}l==null&&(l=""),e=l}l=le(e),t.defaultValue=l,a=t.textContent,a===l&&a!==""&&a!==null&&(t.value=a)}function Ql(t,e){if(e){var l=t.firstChild;if(l&&l===t.lastChild&&l.nodeType===3){l.nodeValue=e;return}}t.textContent=e}var Dd=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function jf(t,e,l){var a=e.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?a?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":a?t.setProperty(e,l):typeof l!="number"||l===0||Dd.has(e)?e==="float"?t.cssFloat=l:t[e]=(""+l).trim():t[e]=l+"px"}function Ef(t,e,l){if(e!=null&&typeof e!="object")throw Error(m(62));if(t=t.style,l!=null){for(var a in l)!l.hasOwnProperty(a)||e!=null&&e.hasOwnProperty(a)||(a.indexOf("--")===0?t.setProperty(a,""):a==="float"?t.cssFloat="":t[a]="");for(var n in e)a=e[n],e.hasOwnProperty(n)&&l[n]!==a&&jf(t,n,a)}else for(var i in e)e.hasOwnProperty(i)&&jf(t,i,e[i])}function Wi(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var _d=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Nd=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Dn(t){return Nd.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var $i=null;function Fi(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Zl=null,Ll=null;function Af(t){var e=Yl(t);if(e&&(t=e.stateNode)){var l=t[Gt]||null;t:switch(t=e.stateNode,e.type){case"input":if(ki(t,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),e=l.name,l.type==="radio"&&e!=null){for(l=t;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+ae(""+e)+'"][type="radio"]'),e=0;e<l.length;e++){var a=l[e];if(a!==t&&a.form===t.form){var n=a[Gt]||null;if(!n)throw Error(m(90));ki(a,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(e=0;e<l.length;e++)a=l[e],a.form===t.form&&xf(a)}break t;case"textarea":zf(t,l.value,l.defaultValue);break t;case"select":e=l.value,e!=null&&Cl(t,!!l.multiple,e,!1)}}}var Pi=!1;function Of(t,e,l){if(Pi)return t(e,l);Pi=!0;try{var a=t(e);return a}finally{if(Pi=!1,(Zl!==null||Ll!==null)&&(hi(),Zl&&(e=Zl,t=Ll,Ll=Zl=null,Af(e),t)))for(e=0;e<t.length;e++)Af(t[e])}}function ja(t,e){var l=t.stateNode;if(l===null)return null;var a=l[Gt]||null;if(a===null)return null;l=a[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(t=t.type,a=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!a;break t;default:t=!1}if(t)return null;if(l&&typeof l!="function")throw Error(m(231,e,typeof l));return l}var Oe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ii=!1;if(Oe)try{var Ea={};Object.defineProperty(Ea,"passive",{get:function(){Ii=!0}}),window.addEventListener("test",Ea,Ea),window.removeEventListener("test",Ea,Ea)}catch{Ii=!1}var we=null,tu=null,_n=null;function Mf(){if(_n)return _n;var t,e=tu,l=e.length,a,n="value"in we?we.value:we.textContent,i=n.length;for(t=0;t<l&&e[t]===n[t];t++);var u=l-t;for(a=1;a<=u&&e[l-a]===n[i-a];a++);return _n=n.slice(t,1<a?1-a:void 0)}function Nn(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Un(){return!0}function Df(){return!1}function Xt(t){function e(l,a,n,i,u){this._reactName=l,this._targetInst=n,this.type=a,this.nativeEvent=i,this.target=u,this.currentTarget=null;for(var c in t)t.hasOwnProperty(c)&&(l=t[c],this[c]=l?l(i):i[c]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Un:Df,this.isPropagationStopped=Df,this}return U(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Un)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Un)},persist:function(){},isPersistent:Un}),e}var pl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Rn=Xt(pl),Aa=U({},pl,{view:0,detail:0}),Ud=Xt(Aa),eu,lu,Oa,Hn=U({},Aa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:nu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Oa&&(Oa&&t.type==="mousemove"?(eu=t.screenX-Oa.screenX,lu=t.screenY-Oa.screenY):lu=eu=0,Oa=t),eu)},movementY:function(t){return"movementY"in t?t.movementY:lu}}),_f=Xt(Hn),Rd=U({},Hn,{dataTransfer:0}),Hd=Xt(Rd),qd=U({},Aa,{relatedTarget:0}),au=Xt(qd),Yd=U({},pl,{animationName:0,elapsedTime:0,pseudoElement:0}),Bd=Xt(Yd),Gd=U({},pl,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Xd=Xt(Gd),Cd=U({},pl,{data:0}),Nf=Xt(Cd),Qd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Zd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ld={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wd(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Ld[t])?!!e[t]:!1}function nu(){return wd}var Vd=U({},Aa,{key:function(t){if(t.key){var e=Qd[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Nn(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Zd[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:nu,charCode:function(t){return t.type==="keypress"?Nn(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Nn(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Kd=Xt(Vd),kd=U({},Hn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Uf=Xt(kd),Jd=U({},Aa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:nu}),Wd=Xt(Jd),$d=U({},pl,{propertyName:0,elapsedTime:0,pseudoElement:0}),Fd=Xt($d),Pd=U({},Hn,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Id=Xt(Pd),t0=U({},pl,{newState:0,oldState:0}),e0=Xt(t0),l0=[9,13,27,32],iu=Oe&&"CompositionEvent"in window,Ma=null;Oe&&"documentMode"in document&&(Ma=document.documentMode);var a0=Oe&&"TextEvent"in window&&!Ma,Rf=Oe&&(!iu||Ma&&8<Ma&&11>=Ma),Hf=" ",qf=!1;function Yf(t,e){switch(t){case"keyup":return l0.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Bf(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var wl=!1;function n0(t,e){switch(t){case"compositionend":return Bf(e);case"keypress":return e.which!==32?null:(qf=!0,Hf);case"textInput":return t=e.data,t===Hf&&qf?null:t;default:return null}}function i0(t,e){if(wl)return t==="compositionend"||!iu&&Yf(t,e)?(t=Mf(),_n=tu=we=null,wl=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Rf&&e.locale!=="ko"?null:e.data;default:return null}}var u0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!u0[t.type]:e==="textarea"}function Xf(t,e,l,a){Zl?Ll?Ll.push(a):Ll=[a]:Zl=a,e=xi(e,"onChange"),0<e.length&&(l=new Rn("onChange","change",null,l,a),t.push({event:l,listeners:e}))}var Da=null,_a=null;function c0(t){xr(t,0)}function qn(t){var e=Ta(t);if(xf(e))return t}function Cf(t,e){if(t==="change")return e}var Qf=!1;if(Oe){var uu;if(Oe){var cu="oninput"in document;if(!cu){var Zf=document.createElement("div");Zf.setAttribute("oninput","return;"),cu=typeof Zf.oninput=="function"}uu=cu}else uu=!1;Qf=uu&&(!document.documentMode||9<document.documentMode)}function Lf(){Da&&(Da.detachEvent("onpropertychange",wf),_a=Da=null)}function wf(t){if(t.propertyName==="value"&&qn(_a)){var e=[];Xf(e,_a,t,Fi(t)),Of(c0,e)}}function f0(t,e,l){t==="focusin"?(Lf(),Da=e,_a=l,Da.attachEvent("onpropertychange",wf)):t==="focusout"&&Lf()}function o0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return qn(_a)}function s0(t,e){if(t==="click")return qn(e)}function r0(t,e){if(t==="input"||t==="change")return qn(e)}function d0(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Wt=typeof Object.is=="function"?Object.is:d0;function Na(t,e){if(Wt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var l=Object.keys(t),a=Object.keys(e);if(l.length!==a.length)return!1;for(a=0;a<l.length;a++){var n=l[a];if(!Yi.call(e,n)||!Wt(t[n],e[n]))return!1}return!0}function Vf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Kf(t,e){var l=Vf(t);t=0;for(var a;l;){if(l.nodeType===3){if(a=t+l.textContent.length,t<=e&&a>=e)return{node:l,offset:e-t};t=a}t:{for(;l;){if(l.nextSibling){l=l.nextSibling;break t}l=l.parentNode}l=void 0}l=Vf(l)}}function kf(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?kf(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Jf(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=Mn(t.document);e instanceof t.HTMLIFrameElement;){try{var l=typeof e.contentWindow.location.href=="string"}catch{l=!1}if(l)t=e.contentWindow;else break;e=Mn(t.document)}return e}function fu(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var g0=Oe&&"documentMode"in document&&11>=document.documentMode,Vl=null,ou=null,Ua=null,su=!1;function Wf(t,e,l){var a=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;su||Vl==null||Vl!==Mn(a)||(a=Vl,"selectionStart"in a&&fu(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Ua&&Na(Ua,a)||(Ua=a,a=xi(ou,"onSelect"),0<a.length&&(e=new Rn("onSelect","select",null,e,l),t.push({event:e,listeners:a}),e.target=Vl)))}function yl(t,e){var l={};return l[t.toLowerCase()]=e.toLowerCase(),l["Webkit"+t]="webkit"+e,l["Moz"+t]="moz"+e,l}var Kl={animationend:yl("Animation","AnimationEnd"),animationiteration:yl("Animation","AnimationIteration"),animationstart:yl("Animation","AnimationStart"),transitionrun:yl("Transition","TransitionRun"),transitionstart:yl("Transition","TransitionStart"),transitioncancel:yl("Transition","TransitionCancel"),transitionend:yl("Transition","TransitionEnd")},ru={},$f={};Oe&&($f=document.createElement("div").style,"AnimationEvent"in window||(delete Kl.animationend.animation,delete Kl.animationiteration.animation,delete Kl.animationstart.animation),"TransitionEvent"in window||delete Kl.transitionend.transition);function bl(t){if(ru[t])return ru[t];if(!Kl[t])return t;var e=Kl[t],l;for(l in e)if(e.hasOwnProperty(l)&&l in $f)return ru[t]=e[l];return t}var Ff=bl("animationend"),Pf=bl("animationiteration"),If=bl("animationstart"),h0=bl("transitionrun"),m0=bl("transitionstart"),v0=bl("transitioncancel"),to=bl("transitionend"),eo=new Map,du="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");du.push("scrollEnd");function ge(t,e){eo.set(t,e),vl(e,[t])}var lo=new WeakMap;function ne(t,e){if(typeof t=="object"&&t!==null){var l=lo.get(t);return l!==void 0?l:(e={value:t,source:e,stack:yf(e)},lo.set(t,e),e)}return{value:t,source:e,stack:yf(e)}}var ie=[],kl=0,gu=0;function Yn(){for(var t=kl,e=gu=kl=0;e<t;){var l=ie[e];ie[e++]=null;var a=ie[e];ie[e++]=null;var n=ie[e];ie[e++]=null;var i=ie[e];if(ie[e++]=null,a!==null&&n!==null){var u=a.pending;u===null?n.next=n:(n.next=u.next,u.next=n),a.pending=n}i!==0&&ao(l,n,i)}}function Bn(t,e,l,a){ie[kl++]=t,ie[kl++]=e,ie[kl++]=l,ie[kl++]=a,gu|=a,t.lanes|=a,t=t.alternate,t!==null&&(t.lanes|=a)}function hu(t,e,l,a){return Bn(t,e,l,a),Gn(t)}function Jl(t,e){return Bn(t,null,null,e),Gn(t)}function ao(t,e,l){t.lanes|=l;var a=t.alternate;a!==null&&(a.lanes|=l);for(var n=!1,i=t.return;i!==null;)i.childLanes|=l,a=i.alternate,a!==null&&(a.childLanes|=l),i.tag===22&&(t=i.stateNode,t===null||t._visibility&1||(n=!0)),t=i,i=i.return;return t.tag===3?(i=t.stateNode,n&&e!==null&&(n=31-Jt(l),t=i.hiddenUpdates,a=t[n],a===null?t[n]=[e]:a.push(e),e.lane=l|536870912),i):null}function Gn(t){if(50<an)throw an=0,xc=null,Error(m(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var Wl={};function p0(t,e,l,a){this.tag=t,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $t(t,e,l,a){return new p0(t,e,l,a)}function mu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Me(t,e){var l=t.alternate;return l===null?(l=$t(t.tag,e,t.key,t.mode),l.elementType=t.elementType,l.type=t.type,l.stateNode=t.stateNode,l.alternate=t,t.alternate=l):(l.pendingProps=e,l.type=t.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=t.flags&65011712,l.childLanes=t.childLanes,l.lanes=t.lanes,l.child=t.child,l.memoizedProps=t.memoizedProps,l.memoizedState=t.memoizedState,l.updateQueue=t.updateQueue,e=t.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},l.sibling=t.sibling,l.index=t.index,l.ref=t.ref,l.refCleanup=t.refCleanup,l}function no(t,e){t.flags&=65011714;var l=t.alternate;return l===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=l.childLanes,t.lanes=l.lanes,t.child=l.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=l.memoizedProps,t.memoizedState=l.memoizedState,t.updateQueue=l.updateQueue,t.type=l.type,e=l.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Xn(t,e,l,a,n,i){var u=0;if(a=t,typeof t=="function")mu(t)&&(u=1);else if(typeof t=="string")u=bg(t,l,Y.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case pe:return t=$t(31,l,e,n),t.elementType=pe,t.lanes=i,t;case qt:return xl(l.children,n,i,e);case re:u=8,n|=24;break;case Bt:return t=$t(12,l,e,n|2),t.elementType=Bt,t.lanes=i,t;case $:return t=$t(13,l,e,n),t.elementType=$,t.lanes=i,t;case Lt:return t=$t(19,l,e,n),t.elementType=Lt,t.lanes=i,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case dl:case Mt:u=10;break t;case je:u=9;break t;case de:u=11;break t;case wt:u=14;break t;case Vt:u=16,a=null;break t}u=29,l=Error(m(130,t===null?"null":typeof t,"")),a=null}return e=$t(u,l,e,n),e.elementType=t,e.type=a,e.lanes=i,e}function xl(t,e,l,a){return t=$t(7,t,a,e),t.lanes=l,t}function vu(t,e,l){return t=$t(6,t,null,e),t.lanes=l,t}function pu(t,e,l){return e=$t(4,t.children!==null?t.children:[],t.key,e),e.lanes=l,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var $l=[],Fl=0,Cn=null,Qn=0,ue=[],ce=0,Sl=null,De=1,_e="";function zl(t,e){$l[Fl++]=Qn,$l[Fl++]=Cn,Cn=t,Qn=e}function io(t,e,l){ue[ce++]=De,ue[ce++]=_e,ue[ce++]=Sl,Sl=t;var a=De;t=_e;var n=32-Jt(a)-1;a&=~(1<<n),l+=1;var i=32-Jt(e)+n;if(30<i){var u=n-n%5;i=(a&(1<<u)-1).toString(32),a>>=u,n-=u,De=1<<32-Jt(e)+n|l<<n|a,_e=i+t}else De=1<<i|l<<n|a,_e=t}function yu(t){t.return!==null&&(zl(t,1),io(t,1,0))}function bu(t){for(;t===Cn;)Cn=$l[--Fl],$l[Fl]=null,Qn=$l[--Fl],$l[Fl]=null;for(;t===Sl;)Sl=ue[--ce],ue[ce]=null,_e=ue[--ce],ue[ce]=null,De=ue[--ce],ue[ce]=null}var Yt=null,dt=null,I=!1,Tl=null,be=!1,xu=Error(m(519));function jl(t){var e=Error(m(418,""));throw qa(ne(e,t)),xu}function uo(t){var e=t.stateNode,l=t.type,a=t.memoizedProps;switch(e[Nt]=t,e[Gt]=a,l){case"dialog":K("cancel",e),K("close",e);break;case"iframe":case"object":case"embed":K("load",e);break;case"video":case"audio":for(l=0;l<un.length;l++)K(un[l],e);break;case"source":K("error",e);break;case"img":case"image":case"link":K("error",e),K("load",e);break;case"details":K("toggle",e);break;case"input":K("invalid",e),Sf(e,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0),On(e);break;case"select":K("invalid",e);break;case"textarea":K("invalid",e),Tf(e,a.value,a.defaultValue,a.children),On(e)}l=a.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||e.textContent===""+l||a.suppressHydrationWarning===!0||jr(e.textContent,l)?(a.popover!=null&&(K("beforetoggle",e),K("toggle",e)),a.onScroll!=null&&K("scroll",e),a.onScrollEnd!=null&&K("scrollend",e),a.onClick!=null&&(e.onclick=Si),e=!0):e=!1,e||jl(t)}function co(t){for(Yt=t.return;Yt;)switch(Yt.tag){case 5:case 13:be=!1;return;case 27:case 3:be=!0;return;default:Yt=Yt.return}}function Ra(t){if(t!==Yt)return!1;if(!I)return co(t),I=!0,!1;var e=t.tag,l;if((l=e!==3&&e!==27)&&((l=e===5)&&(l=t.type,l=!(l!=="form"&&l!=="button")||Yc(t.type,t.memoizedProps)),l=!l),l&&dt&&jl(t),co(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(m(317));t:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8)if(l=t.data,l==="/$"){if(e===0){dt=me(t.nextSibling);break t}e--}else l!=="$"&&l!=="$!"&&l!=="$?"||e++;t=t.nextSibling}dt=null}}else e===27?(e=dt,ul(t.type)?(t=Cc,Cc=null,dt=t):dt=e):dt=Yt?me(t.stateNode.nextSibling):null;return!0}function Ha(){dt=Yt=null,I=!1}function fo(){var t=Tl;return t!==null&&(Zt===null?Zt=t:Zt.push.apply(Zt,t),Tl=null),t}function qa(t){Tl===null?Tl=[t]:Tl.push(t)}var Su=j(null),El=null,Ne=null;function Ve(t,e,l){E(Su,e._currentValue),e._currentValue=l}function Ue(t){t._currentValue=Su.current,O(Su)}function zu(t,e,l){for(;t!==null;){var a=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,a!==null&&(a.childLanes|=e)):a!==null&&(a.childLanes&e)!==e&&(a.childLanes|=e),t===l)break;t=t.return}}function Tu(t,e,l,a){var n=t.child;for(n!==null&&(n.return=t);n!==null;){var i=n.dependencies;if(i!==null){var u=n.child;i=i.firstContext;t:for(;i!==null;){var c=i;i=n;for(var f=0;f<e.length;f++)if(c.context===e[f]){i.lanes|=l,c=i.alternate,c!==null&&(c.lanes|=l),zu(i.return,l,t),a||(u=null);break t}i=c.next}}else if(n.tag===18){if(u=n.return,u===null)throw Error(m(341));u.lanes|=l,i=u.alternate,i!==null&&(i.lanes|=l),zu(u,l,t),u=null}else u=n.child;if(u!==null)u.return=n;else for(u=n;u!==null;){if(u===t){u=null;break}if(n=u.sibling,n!==null){n.return=u.return,u=n;break}u=u.return}n=u}}function Ya(t,e,l,a){t=null;for(var n=e,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var u=n.alternate;if(u===null)throw Error(m(387));if(u=u.memoizedProps,u!==null){var c=n.type;Wt(n.pendingProps.value,u.value)||(t!==null?t.push(c):t=[c])}}else if(n===Kt.current){if(u=n.alternate,u===null)throw Error(m(387));u.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(t!==null?t.push(dn):t=[dn])}n=n.return}t!==null&&Tu(e,t,l,a),e.flags|=262144}function Zn(t){for(t=t.firstContext;t!==null;){if(!Wt(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Al(t){El=t,Ne=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Ut(t){return oo(El,t)}function Ln(t,e){return El===null&&Al(t),oo(t,e)}function oo(t,e){var l=e._currentValue;if(e={context:e,memoizedValue:l,next:null},Ne===null){if(t===null)throw Error(m(308));Ne=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else Ne=Ne.next=e;return l}var y0=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(l,a){t.push(a)}};this.abort=function(){e.aborted=!0,t.forEach(function(l){return l()})}},b0=v.unstable_scheduleCallback,x0=v.unstable_NormalPriority,bt={$$typeof:Mt,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ju(){return{controller:new y0,data:new Map,refCount:0}}function Ba(t){t.refCount--,t.refCount===0&&b0(x0,function(){t.controller.abort()})}var Ga=null,Eu=0,Pl=0,Il=null;function S0(t,e){if(Ga===null){var l=Ga=[];Eu=0,Pl=Oc(),Il={status:"pending",value:void 0,then:function(a){l.push(a)}}}return Eu++,e.then(so,so),e}function so(){if(--Eu===0&&Ga!==null){Il!==null&&(Il.status="fulfilled");var t=Ga;Ga=null,Pl=0,Il=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function z0(t,e){var l=[],a={status:"pending",value:null,reason:null,then:function(n){l.push(n)}};return t.then(function(){a.status="fulfilled",a.value=e;for(var n=0;n<l.length;n++)(0,l[n])(e)},function(n){for(a.status="rejected",a.reason=n,n=0;n<l.length;n++)(0,l[n])(void 0)}),a}var ro=x.S;x.S=function(t,e){typeof e=="object"&&e!==null&&typeof e.then=="function"&&S0(t,e),ro!==null&&ro(t,e)};var Ol=j(null);function Au(){var t=Ol.current;return t!==null?t:ft.pooledCache}function wn(t,e){e===null?E(Ol,Ol.current):E(Ol,e.pool)}function go(){var t=Au();return t===null?null:{parent:bt._currentValue,pool:t}}var Xa=Error(m(460)),ho=Error(m(474)),Vn=Error(m(542)),Ou={then:function(){}};function mo(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Kn(){}function vo(t,e,l){switch(l=t[l],l===void 0?t.push(e):l!==e&&(e.then(Kn,Kn),e=l),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,yo(t),t;default:if(typeof e.status=="string")e.then(Kn,Kn);else{if(t=ft,t!==null&&100<t.shellSuspendCounter)throw Error(m(482));t=e,t.status="pending",t.then(function(a){if(e.status==="pending"){var n=e;n.status="fulfilled",n.value=a}},function(a){if(e.status==="pending"){var n=e;n.status="rejected",n.reason=a}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,yo(t),t}throw Ca=e,Xa}}var Ca=null;function po(){if(Ca===null)throw Error(m(459));var t=Ca;return Ca=null,t}function yo(t){if(t===Xa||t===Vn)throw Error(m(483))}var Ke=!1;function Mu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Du(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ke(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Je(t,e,l){var a=t.updateQueue;if(a===null)return null;if(a=a.shared,(et&2)!==0){var n=a.pending;return n===null?e.next=e:(e.next=n.next,n.next=e),a.pending=e,e=Gn(t),ao(t,null,l),e}return Bn(t,a,e,l),Gn(t)}function Qa(t,e,l){if(e=e.updateQueue,e!==null&&(e=e.shared,(l&4194048)!==0)){var a=e.lanes;a&=t.pendingLanes,l|=a,e.lanes=l,sf(t,l)}}function _u(t,e){var l=t.updateQueue,a=t.alternate;if(a!==null&&(a=a.updateQueue,l===a)){var n=null,i=null;if(l=l.firstBaseUpdate,l!==null){do{var u={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};i===null?n=i=u:i=i.next=u,l=l.next}while(l!==null);i===null?n=i=e:i=i.next=e}else n=i=e;l={baseState:a.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:a.shared,callbacks:a.callbacks},t.updateQueue=l;return}t=l.lastBaseUpdate,t===null?l.firstBaseUpdate=e:t.next=e,l.lastBaseUpdate=e}var Nu=!1;function Za(){if(Nu){var t=Il;if(t!==null)throw t}}function La(t,e,l,a){Nu=!1;var n=t.updateQueue;Ke=!1;var i=n.firstBaseUpdate,u=n.lastBaseUpdate,c=n.shared.pending;if(c!==null){n.shared.pending=null;var f=c,h=f.next;f.next=null,u===null?i=h:u.next=h,u=f;var b=t.alternate;b!==null&&(b=b.updateQueue,c=b.lastBaseUpdate,c!==u&&(c===null?b.firstBaseUpdate=h:c.next=h,b.lastBaseUpdate=f))}if(i!==null){var z=n.baseState;u=0,b=h=f=null,c=i;do{var p=c.lane&-536870913,y=p!==c.lane;if(y?(W&p)===p:(a&p)===p){p!==0&&p===Pl&&(Nu=!0),b!==null&&(b=b.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});t:{var C=t,B=c;p=e;var it=l;switch(B.tag){case 1:if(C=B.payload,typeof C=="function"){z=C.call(it,z,p);break t}z=C;break t;case 3:C.flags=C.flags&-65537|128;case 0:if(C=B.payload,p=typeof C=="function"?C.call(it,z,p):C,p==null)break t;z=U({},z,p);break t;case 2:Ke=!0}}p=c.callback,p!==null&&(t.flags|=64,y&&(t.flags|=8192),y=n.callbacks,y===null?n.callbacks=[p]:y.push(p))}else y={lane:p,tag:c.tag,payload:c.payload,callback:c.callback,next:null},b===null?(h=b=y,f=z):b=b.next=y,u|=p;if(c=c.next,c===null){if(c=n.shared.pending,c===null)break;y=c,c=y.next,y.next=null,n.lastBaseUpdate=y,n.shared.pending=null}}while(!0);b===null&&(f=z),n.baseState=f,n.firstBaseUpdate=h,n.lastBaseUpdate=b,i===null&&(n.shared.lanes=0),ll|=u,t.lanes=u,t.memoizedState=z}}function bo(t,e){if(typeof t!="function")throw Error(m(191,t));t.call(e)}function xo(t,e){var l=t.callbacks;if(l!==null)for(t.callbacks=null,t=0;t<l.length;t++)bo(l[t],e)}var ta=j(null),kn=j(0);function So(t,e){t=Xe,E(kn,t),E(ta,e),Xe=t|e.baseLanes}function Uu(){E(kn,Xe),E(ta,ta.current)}function Ru(){Xe=kn.current,O(ta),O(kn)}var We=0,L=null,at=null,pt=null,Jn=!1,ea=!1,Ml=!1,Wn=0,wa=0,la=null,T0=0;function mt(){throw Error(m(321))}function Hu(t,e){if(e===null)return!1;for(var l=0;l<e.length&&l<t.length;l++)if(!Wt(t[l],e[l]))return!1;return!0}function qu(t,e,l,a,n,i){return We=i,L=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,x.H=t===null||t.memoizedState===null?ns:is,Ml=!1,i=l(a,n),Ml=!1,ea&&(i=To(e,l,a,n)),zo(t),i}function zo(t){x.H=ei;var e=at!==null&&at.next!==null;if(We=0,pt=at=L=null,Jn=!1,wa=0,la=null,e)throw Error(m(300));t===null||zt||(t=t.dependencies,t!==null&&Zn(t)&&(zt=!0))}function To(t,e,l,a){L=t;var n=0;do{if(ea&&(la=null),wa=0,ea=!1,25<=n)throw Error(m(301));if(n+=1,pt=at=null,t.updateQueue!=null){var i=t.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}x.H=_0,i=e(l,a)}while(ea);return i}function j0(){var t=x.H,e=t.useState()[0];return e=typeof e.then=="function"?Va(e):e,t=t.useState()[0],(at!==null?at.memoizedState:null)!==t&&(L.flags|=1024),e}function Yu(){var t=Wn!==0;return Wn=0,t}function Bu(t,e,l){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~l}function Gu(t){if(Jn){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}Jn=!1}We=0,pt=at=L=null,ea=!1,wa=Wn=0,la=null}function Ct(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pt===null?L.memoizedState=pt=t:pt=pt.next=t,pt}function yt(){if(at===null){var t=L.alternate;t=t!==null?t.memoizedState:null}else t=at.next;var e=pt===null?L.memoizedState:pt.next;if(e!==null)pt=e,at=t;else{if(t===null)throw L.alternate===null?Error(m(467)):Error(m(310));at=t,t={memoizedState:at.memoizedState,baseState:at.baseState,baseQueue:at.baseQueue,queue:at.queue,next:null},pt===null?L.memoizedState=pt=t:pt=pt.next=t}return pt}function Xu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Va(t){var e=wa;return wa+=1,la===null&&(la=[]),t=vo(la,t,e),e=L,(pt===null?e.memoizedState:pt.next)===null&&(e=e.alternate,x.H=e===null||e.memoizedState===null?ns:is),t}function $n(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Va(t);if(t.$$typeof===Mt)return Ut(t)}throw Error(m(438,String(t)))}function Cu(t){var e=null,l=L.updateQueue;if(l!==null&&(e=l.memoCache),e==null){var a=L.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(e={data:a.data.map(function(n){return n.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),l===null&&(l=Xu(),L.updateQueue=l),l.memoCache=e,l=e.data[e.index],l===void 0)for(l=e.data[e.index]=Array(t),a=0;a<t;a++)l[a]=Rl;return e.index++,l}function Re(t,e){return typeof e=="function"?e(t):e}function Fn(t){var e=yt();return Qu(e,at,t)}function Qu(t,e,l){var a=t.queue;if(a===null)throw Error(m(311));a.lastRenderedReducer=l;var n=t.baseQueue,i=a.pending;if(i!==null){if(n!==null){var u=n.next;n.next=i.next,i.next=u}e.baseQueue=n=i,a.pending=null}if(i=t.baseState,n===null)t.memoizedState=i;else{e=n.next;var c=u=null,f=null,h=e,b=!1;do{var z=h.lane&-536870913;if(z!==h.lane?(W&z)===z:(We&z)===z){var p=h.revertLane;if(p===0)f!==null&&(f=f.next={lane:0,revertLane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),z===Pl&&(b=!0);else if((We&p)===p){h=h.next,p===Pl&&(b=!0);continue}else z={lane:0,revertLane:h.revertLane,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null},f===null?(c=f=z,u=i):f=f.next=z,L.lanes|=p,ll|=p;z=h.action,Ml&&l(i,z),i=h.hasEagerState?h.eagerState:l(i,z)}else p={lane:z,revertLane:h.revertLane,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null},f===null?(c=f=p,u=i):f=f.next=p,L.lanes|=z,ll|=z;h=h.next}while(h!==null&&h!==e);if(f===null?u=i:f.next=c,!Wt(i,t.memoizedState)&&(zt=!0,b&&(l=Il,l!==null)))throw l;t.memoizedState=i,t.baseState=u,t.baseQueue=f,a.lastRenderedState=i}return n===null&&(a.lanes=0),[t.memoizedState,a.dispatch]}function Zu(t){var e=yt(),l=e.queue;if(l===null)throw Error(m(311));l.lastRenderedReducer=t;var a=l.dispatch,n=l.pending,i=e.memoizedState;if(n!==null){l.pending=null;var u=n=n.next;do i=t(i,u.action),u=u.next;while(u!==n);Wt(i,e.memoizedState)||(zt=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),l.lastRenderedState=i}return[i,a]}function jo(t,e,l){var a=L,n=yt(),i=I;if(i){if(l===void 0)throw Error(m(407));l=l()}else l=e();var u=!Wt((at||n).memoizedState,l);u&&(n.memoizedState=l,zt=!0),n=n.queue;var c=Oo.bind(null,a,n,t);if(Ka(2048,8,c,[t]),n.getSnapshot!==e||u||pt!==null&&pt.memoizedState.tag&1){if(a.flags|=2048,aa(9,Pn(),Ao.bind(null,a,n,l,e),null),ft===null)throw Error(m(349));i||(We&124)!==0||Eo(a,e,l)}return l}function Eo(t,e,l){t.flags|=16384,t={getSnapshot:e,value:l},e=L.updateQueue,e===null?(e=Xu(),L.updateQueue=e,e.stores=[t]):(l=e.stores,l===null?e.stores=[t]:l.push(t))}function Ao(t,e,l,a){e.value=l,e.getSnapshot=a,Mo(e)&&Do(t)}function Oo(t,e,l){return l(function(){Mo(e)&&Do(t)})}function Mo(t){var e=t.getSnapshot;t=t.value;try{var l=e();return!Wt(t,l)}catch{return!0}}function Do(t){var e=Jl(t,2);e!==null&&ee(e,t,2)}function Lu(t){var e=Ct();if(typeof t=="function"){var l=t;if(t=l(),Ml){Ze(!0);try{l()}finally{Ze(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Re,lastRenderedState:t},e}function _o(t,e,l,a){return t.baseState=l,Qu(t,at,typeof a=="function"?a:Re)}function E0(t,e,l,a,n){if(ti(t))throw Error(m(485));if(t=e.action,t!==null){var i={payload:n,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){i.listeners.push(u)}};x.T!==null?l(!0):i.isTransition=!1,a(i),l=e.pending,l===null?(i.next=e.pending=i,No(e,i)):(i.next=l.next,e.pending=l.next=i)}}function No(t,e){var l=e.action,a=e.payload,n=t.state;if(e.isTransition){var i=x.T,u={};x.T=u;try{var c=l(n,a),f=x.S;f!==null&&f(u,c),Uo(t,e,c)}catch(h){wu(t,e,h)}finally{x.T=i}}else try{i=l(n,a),Uo(t,e,i)}catch(h){wu(t,e,h)}}function Uo(t,e,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(a){Ro(t,e,a)},function(a){return wu(t,e,a)}):Ro(t,e,l)}function Ro(t,e,l){e.status="fulfilled",e.value=l,Ho(e),t.state=l,e=t.pending,e!==null&&(l=e.next,l===e?t.pending=null:(l=l.next,e.next=l,No(t,l)))}function wu(t,e,l){var a=t.pending;if(t.pending=null,a!==null){a=a.next;do e.status="rejected",e.reason=l,Ho(e),e=e.next;while(e!==a)}t.action=null}function Ho(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function qo(t,e){return e}function Yo(t,e){if(I){var l=ft.formState;if(l!==null){t:{var a=L;if(I){if(dt){e:{for(var n=dt,i=be;n.nodeType!==8;){if(!i){n=null;break e}if(n=me(n.nextSibling),n===null){n=null;break e}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){dt=me(n.nextSibling),a=n.data==="F!";break t}}jl(a)}a=!1}a&&(e=l[0])}}return l=Ct(),l.memoizedState=l.baseState=e,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:qo,lastRenderedState:e},l.queue=a,l=es.bind(null,L,a),a.dispatch=l,a=Lu(!1),i=Wu.bind(null,L,!1,a.queue),a=Ct(),n={state:e,dispatch:null,action:t,pending:null},a.queue=n,l=E0.bind(null,L,n,i,l),n.dispatch=l,a.memoizedState=t,[e,l,!1]}function Bo(t){var e=yt();return Go(e,at,t)}function Go(t,e,l){if(e=Qu(t,e,qo)[0],t=Fn(Re)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var a=Va(e)}catch(u){throw u===Xa?Vn:u}else a=e;e=yt();var n=e.queue,i=n.dispatch;return l!==e.memoizedState&&(L.flags|=2048,aa(9,Pn(),A0.bind(null,n,l),null)),[a,i,t]}function A0(t,e){t.action=e}function Xo(t){var e=yt(),l=at;if(l!==null)return Go(e,l,t);yt(),e=e.memoizedState,l=yt();var a=l.queue.dispatch;return l.memoizedState=t,[e,a,!1]}function aa(t,e,l,a){return t={tag:t,create:l,deps:a,inst:e,next:null},e=L.updateQueue,e===null&&(e=Xu(),L.updateQueue=e),l=e.lastEffect,l===null?e.lastEffect=t.next=t:(a=l.next,l.next=t,t.next=a,e.lastEffect=t),t}function Pn(){return{destroy:void 0,resource:void 0}}function Co(){return yt().memoizedState}function In(t,e,l,a){var n=Ct();a=a===void 0?null:a,L.flags|=t,n.memoizedState=aa(1|e,Pn(),l,a)}function Ka(t,e,l,a){var n=yt();a=a===void 0?null:a;var i=n.memoizedState.inst;at!==null&&a!==null&&Hu(a,at.memoizedState.deps)?n.memoizedState=aa(e,i,l,a):(L.flags|=t,n.memoizedState=aa(1|e,i,l,a))}function Qo(t,e){In(8390656,8,t,e)}function Zo(t,e){Ka(2048,8,t,e)}function Lo(t,e){return Ka(4,2,t,e)}function wo(t,e){return Ka(4,4,t,e)}function Vo(t,e){if(typeof e=="function"){t=t();var l=e(t);return function(){typeof l=="function"?l():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Ko(t,e,l){l=l!=null?l.concat([t]):null,Ka(4,4,Vo.bind(null,e,t),l)}function Vu(){}function ko(t,e){var l=yt();e=e===void 0?null:e;var a=l.memoizedState;return e!==null&&Hu(e,a[1])?a[0]:(l.memoizedState=[t,e],t)}function Jo(t,e){var l=yt();e=e===void 0?null:e;var a=l.memoizedState;if(e!==null&&Hu(e,a[1]))return a[0];if(a=t(),Ml){Ze(!0);try{t()}finally{Ze(!1)}}return l.memoizedState=[a,e],a}function Ku(t,e,l){return l===void 0||(We&1073741824)!==0?t.memoizedState=e:(t.memoizedState=l,t=Fs(),L.lanes|=t,ll|=t,l)}function Wo(t,e,l,a){return Wt(l,e)?l:ta.current!==null?(t=Ku(t,l,a),Wt(t,e)||(zt=!0),t):(We&42)===0?(zt=!0,t.memoizedState=l):(t=Fs(),L.lanes|=t,ll|=t,e)}function $o(t,e,l,a,n){var i=A.p;A.p=i!==0&&8>i?i:8;var u=x.T,c={};x.T=c,Wu(t,!1,e,l);try{var f=n(),h=x.S;if(h!==null&&h(c,f),f!==null&&typeof f=="object"&&typeof f.then=="function"){var b=z0(f,a);ka(t,e,b,te(t))}else ka(t,e,a,te(t))}catch(z){ka(t,e,{then:function(){},status:"rejected",reason:z},te())}finally{A.p=i,x.T=u}}function O0(){}function ku(t,e,l,a){if(t.tag!==5)throw Error(m(476));var n=Fo(t).queue;$o(t,n,e,X,l===null?O0:function(){return Po(t),l(a)})}function Fo(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:X,baseState:X,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Re,lastRenderedState:X},next:null};var l={};return e.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Re,lastRenderedState:l},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function Po(t){var e=Fo(t).next.queue;ka(t,e,{},te())}function Ju(){return Ut(dn)}function Io(){return yt().memoizedState}function ts(){return yt().memoizedState}function M0(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var l=te();t=ke(l);var a=Je(e,t,l);a!==null&&(ee(a,e,l),Qa(a,e,l)),e={cache:ju()},t.payload=e;return}e=e.return}}function D0(t,e,l){var a=te();l={lane:a,revertLane:0,action:l,hasEagerState:!1,eagerState:null,next:null},ti(t)?ls(e,l):(l=hu(t,e,l,a),l!==null&&(ee(l,t,a),as(l,e,a)))}function es(t,e,l){var a=te();ka(t,e,l,a)}function ka(t,e,l,a){var n={lane:a,revertLane:0,action:l,hasEagerState:!1,eagerState:null,next:null};if(ti(t))ls(e,n);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var u=e.lastRenderedState,c=i(u,l);if(n.hasEagerState=!0,n.eagerState=c,Wt(c,u))return Bn(t,e,n,0),ft===null&&Yn(),!1}catch{}finally{}if(l=hu(t,e,n,a),l!==null)return ee(l,t,a),as(l,e,a),!0}return!1}function Wu(t,e,l,a){if(a={lane:2,revertLane:Oc(),action:a,hasEagerState:!1,eagerState:null,next:null},ti(t)){if(e)throw Error(m(479))}else e=hu(t,l,a,2),e!==null&&ee(e,t,2)}function ti(t){var e=t.alternate;return t===L||e!==null&&e===L}function ls(t,e){ea=Jn=!0;var l=t.pending;l===null?e.next=e:(e.next=l.next,l.next=e),t.pending=e}function as(t,e,l){if((l&4194048)!==0){var a=e.lanes;a&=t.pendingLanes,l|=a,e.lanes=l,sf(t,l)}}var ei={readContext:Ut,use:$n,useCallback:mt,useContext:mt,useEffect:mt,useImperativeHandle:mt,useLayoutEffect:mt,useInsertionEffect:mt,useMemo:mt,useReducer:mt,useRef:mt,useState:mt,useDebugValue:mt,useDeferredValue:mt,useTransition:mt,useSyncExternalStore:mt,useId:mt,useHostTransitionStatus:mt,useFormState:mt,useActionState:mt,useOptimistic:mt,useMemoCache:mt,useCacheRefresh:mt},ns={readContext:Ut,use:$n,useCallback:function(t,e){return Ct().memoizedState=[t,e===void 0?null:e],t},useContext:Ut,useEffect:Qo,useImperativeHandle:function(t,e,l){l=l!=null?l.concat([t]):null,In(4194308,4,Vo.bind(null,e,t),l)},useLayoutEffect:function(t,e){return In(4194308,4,t,e)},useInsertionEffect:function(t,e){In(4,2,t,e)},useMemo:function(t,e){var l=Ct();e=e===void 0?null:e;var a=t();if(Ml){Ze(!0);try{t()}finally{Ze(!1)}}return l.memoizedState=[a,e],a},useReducer:function(t,e,l){var a=Ct();if(l!==void 0){var n=l(e);if(Ml){Ze(!0);try{l(e)}finally{Ze(!1)}}}else n=e;return a.memoizedState=a.baseState=n,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:n},a.queue=t,t=t.dispatch=D0.bind(null,L,t),[a.memoizedState,t]},useRef:function(t){var e=Ct();return t={current:t},e.memoizedState=t},useState:function(t){t=Lu(t);var e=t.queue,l=es.bind(null,L,e);return e.dispatch=l,[t.memoizedState,l]},useDebugValue:Vu,useDeferredValue:function(t,e){var l=Ct();return Ku(l,t,e)},useTransition:function(){var t=Lu(!1);return t=$o.bind(null,L,t.queue,!0,!1),Ct().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,l){var a=L,n=Ct();if(I){if(l===void 0)throw Error(m(407));l=l()}else{if(l=e(),ft===null)throw Error(m(349));(W&124)!==0||Eo(a,e,l)}n.memoizedState=l;var i={value:l,getSnapshot:e};return n.queue=i,Qo(Oo.bind(null,a,i,t),[t]),a.flags|=2048,aa(9,Pn(),Ao.bind(null,a,i,l,e),null),l},useId:function(){var t=Ct(),e=ft.identifierPrefix;if(I){var l=_e,a=De;l=(a&~(1<<32-Jt(a)-1)).toString(32)+l,e="«"+e+"R"+l,l=Wn++,0<l&&(e+="H"+l.toString(32)),e+="»"}else l=T0++,e="«"+e+"r"+l.toString(32)+"»";return t.memoizedState=e},useHostTransitionStatus:Ju,useFormState:Yo,useActionState:Yo,useOptimistic:function(t){var e=Ct();e.memoizedState=e.baseState=t;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=l,e=Wu.bind(null,L,!0,l),l.dispatch=e,[t,e]},useMemoCache:Cu,useCacheRefresh:function(){return Ct().memoizedState=M0.bind(null,L)}},is={readContext:Ut,use:$n,useCallback:ko,useContext:Ut,useEffect:Zo,useImperativeHandle:Ko,useInsertionEffect:Lo,useLayoutEffect:wo,useMemo:Jo,useReducer:Fn,useRef:Co,useState:function(){return Fn(Re)},useDebugValue:Vu,useDeferredValue:function(t,e){var l=yt();return Wo(l,at.memoizedState,t,e)},useTransition:function(){var t=Fn(Re)[0],e=yt().memoizedState;return[typeof t=="boolean"?t:Va(t),e]},useSyncExternalStore:jo,useId:Io,useHostTransitionStatus:Ju,useFormState:Bo,useActionState:Bo,useOptimistic:function(t,e){var l=yt();return _o(l,at,t,e)},useMemoCache:Cu,useCacheRefresh:ts},_0={readContext:Ut,use:$n,useCallback:ko,useContext:Ut,useEffect:Zo,useImperativeHandle:Ko,useInsertionEffect:Lo,useLayoutEffect:wo,useMemo:Jo,useReducer:Zu,useRef:Co,useState:function(){return Zu(Re)},useDebugValue:Vu,useDeferredValue:function(t,e){var l=yt();return at===null?Ku(l,t,e):Wo(l,at.memoizedState,t,e)},useTransition:function(){var t=Zu(Re)[0],e=yt().memoizedState;return[typeof t=="boolean"?t:Va(t),e]},useSyncExternalStore:jo,useId:Io,useHostTransitionStatus:Ju,useFormState:Xo,useActionState:Xo,useOptimistic:function(t,e){var l=yt();return at!==null?_o(l,at,t,e):(l.baseState=t,[t,l.queue.dispatch])},useMemoCache:Cu,useCacheRefresh:ts},na=null,Ja=0;function li(t){var e=Ja;return Ja+=1,na===null&&(na=[]),vo(na,t,e)}function Wa(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function ai(t,e){throw e.$$typeof===J?Error(m(525)):(t=Object.prototype.toString.call(e),Error(m(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function us(t){var e=t._init;return e(t._payload)}function cs(t){function e(r,s){if(t){var g=r.deletions;g===null?(r.deletions=[s],r.flags|=16):g.push(s)}}function l(r,s){if(!t)return null;for(;s!==null;)e(r,s),s=s.sibling;return null}function a(r){for(var s=new Map;r!==null;)r.key!==null?s.set(r.key,r):s.set(r.index,r),r=r.sibling;return s}function n(r,s){return r=Me(r,s),r.index=0,r.sibling=null,r}function i(r,s,g){return r.index=g,t?(g=r.alternate,g!==null?(g=g.index,g<s?(r.flags|=67108866,s):g):(r.flags|=67108866,s)):(r.flags|=1048576,s)}function u(r){return t&&r.alternate===null&&(r.flags|=67108866),r}function c(r,s,g,S){return s===null||s.tag!==6?(s=vu(g,r.mode,S),s.return=r,s):(s=n(s,g),s.return=r,s)}function f(r,s,g,S){var M=g.type;return M===qt?b(r,s,g.props.children,S,g.key):s!==null&&(s.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Vt&&us(M)===s.type)?(s=n(s,g.props),Wa(s,g),s.return=r,s):(s=Xn(g.type,g.key,g.props,null,r.mode,S),Wa(s,g),s.return=r,s)}function h(r,s,g,S){return s===null||s.tag!==4||s.stateNode.containerInfo!==g.containerInfo||s.stateNode.implementation!==g.implementation?(s=pu(g,r.mode,S),s.return=r,s):(s=n(s,g.children||[]),s.return=r,s)}function b(r,s,g,S,M){return s===null||s.tag!==7?(s=xl(g,r.mode,S,M),s.return=r,s):(s=n(s,g),s.return=r,s)}function z(r,s,g){if(typeof s=="string"&&s!==""||typeof s=="number"||typeof s=="bigint")return s=vu(""+s,r.mode,g),s.return=r,s;if(typeof s=="object"&&s!==null){switch(s.$$typeof){case tt:return g=Xn(s.type,s.key,s.props,null,r.mode,g),Wa(g,s),g.return=r,g;case Ht:return s=pu(s,r.mode,g),s.return=r,s;case Vt:var S=s._init;return s=S(s._payload),z(r,s,g)}if(_t(s)||Dt(s))return s=xl(s,r.mode,g,null),s.return=r,s;if(typeof s.then=="function")return z(r,li(s),g);if(s.$$typeof===Mt)return z(r,Ln(r,s),g);ai(r,s)}return null}function p(r,s,g,S){var M=s!==null?s.key:null;if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return M!==null?null:c(r,s,""+g,S);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case tt:return g.key===M?f(r,s,g,S):null;case Ht:return g.key===M?h(r,s,g,S):null;case Vt:return M=g._init,g=M(g._payload),p(r,s,g,S)}if(_t(g)||Dt(g))return M!==null?null:b(r,s,g,S,null);if(typeof g.then=="function")return p(r,s,li(g),S);if(g.$$typeof===Mt)return p(r,s,Ln(r,g),S);ai(r,g)}return null}function y(r,s,g,S,M){if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return r=r.get(g)||null,c(s,r,""+S,M);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case tt:return r=r.get(S.key===null?g:S.key)||null,f(s,r,S,M);case Ht:return r=r.get(S.key===null?g:S.key)||null,h(s,r,S,M);case Vt:var w=S._init;return S=w(S._payload),y(r,s,g,S,M)}if(_t(S)||Dt(S))return r=r.get(g)||null,b(s,r,S,M,null);if(typeof S.then=="function")return y(r,s,g,li(S),M);if(S.$$typeof===Mt)return y(r,s,g,Ln(s,S),M);ai(s,S)}return null}function C(r,s,g,S){for(var M=null,w=null,N=s,G=s=0,jt=null;N!==null&&G<g.length;G++){N.index>G?(jt=N,N=null):jt=N.sibling;var P=p(r,N,g[G],S);if(P===null){N===null&&(N=jt);break}t&&N&&P.alternate===null&&e(r,N),s=i(P,s,G),w===null?M=P:w.sibling=P,w=P,N=jt}if(G===g.length)return l(r,N),I&&zl(r,G),M;if(N===null){for(;G<g.length;G++)N=z(r,g[G],S),N!==null&&(s=i(N,s,G),w===null?M=N:w.sibling=N,w=N);return I&&zl(r,G),M}for(N=a(N);G<g.length;G++)jt=y(N,r,G,g[G],S),jt!==null&&(t&&jt.alternate!==null&&N.delete(jt.key===null?G:jt.key),s=i(jt,s,G),w===null?M=jt:w.sibling=jt,w=jt);return t&&N.forEach(function(rl){return e(r,rl)}),I&&zl(r,G),M}function B(r,s,g,S){if(g==null)throw Error(m(151));for(var M=null,w=null,N=s,G=s=0,jt=null,P=g.next();N!==null&&!P.done;G++,P=g.next()){N.index>G?(jt=N,N=null):jt=N.sibling;var rl=p(r,N,P.value,S);if(rl===null){N===null&&(N=jt);break}t&&N&&rl.alternate===null&&e(r,N),s=i(rl,s,G),w===null?M=rl:w.sibling=rl,w=rl,N=jt}if(P.done)return l(r,N),I&&zl(r,G),M;if(N===null){for(;!P.done;G++,P=g.next())P=z(r,P.value,S),P!==null&&(s=i(P,s,G),w===null?M=P:w.sibling=P,w=P);return I&&zl(r,G),M}for(N=a(N);!P.done;G++,P=g.next())P=y(N,r,G,P.value,S),P!==null&&(t&&P.alternate!==null&&N.delete(P.key===null?G:P.key),s=i(P,s,G),w===null?M=P:w.sibling=P,w=P);return t&&N.forEach(function(Ng){return e(r,Ng)}),I&&zl(r,G),M}function it(r,s,g,S){if(typeof g=="object"&&g!==null&&g.type===qt&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case tt:t:{for(var M=g.key;s!==null;){if(s.key===M){if(M=g.type,M===qt){if(s.tag===7){l(r,s.sibling),S=n(s,g.props.children),S.return=r,r=S;break t}}else if(s.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Vt&&us(M)===s.type){l(r,s.sibling),S=n(s,g.props),Wa(S,g),S.return=r,r=S;break t}l(r,s);break}else e(r,s);s=s.sibling}g.type===qt?(S=xl(g.props.children,r.mode,S,g.key),S.return=r,r=S):(S=Xn(g.type,g.key,g.props,null,r.mode,S),Wa(S,g),S.return=r,r=S)}return u(r);case Ht:t:{for(M=g.key;s!==null;){if(s.key===M)if(s.tag===4&&s.stateNode.containerInfo===g.containerInfo&&s.stateNode.implementation===g.implementation){l(r,s.sibling),S=n(s,g.children||[]),S.return=r,r=S;break t}else{l(r,s);break}else e(r,s);s=s.sibling}S=pu(g,r.mode,S),S.return=r,r=S}return u(r);case Vt:return M=g._init,g=M(g._payload),it(r,s,g,S)}if(_t(g))return C(r,s,g,S);if(Dt(g)){if(M=Dt(g),typeof M!="function")throw Error(m(150));return g=M.call(g),B(r,s,g,S)}if(typeof g.then=="function")return it(r,s,li(g),S);if(g.$$typeof===Mt)return it(r,s,Ln(r,g),S);ai(r,g)}return typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint"?(g=""+g,s!==null&&s.tag===6?(l(r,s.sibling),S=n(s,g),S.return=r,r=S):(l(r,s),S=vu(g,r.mode,S),S.return=r,r=S),u(r)):l(r,s)}return function(r,s,g,S){try{Ja=0;var M=it(r,s,g,S);return na=null,M}catch(N){if(N===Xa||N===Vn)throw N;var w=$t(29,N,null,r.mode);return w.lanes=S,w.return=r,w}finally{}}}var ia=cs(!0),fs=cs(!1),fe=j(null),xe=null;function $e(t){var e=t.alternate;E(xt,xt.current&1),E(fe,t),xe===null&&(e===null||ta.current!==null||e.memoizedState!==null)&&(xe=t)}function os(t){if(t.tag===22){if(E(xt,xt.current),E(fe,t),xe===null){var e=t.alternate;e!==null&&e.memoizedState!==null&&(xe=t)}}else Fe()}function Fe(){E(xt,xt.current),E(fe,fe.current)}function He(t){O(fe),xe===t&&(xe=null),O(xt)}var xt=j(0);function ni(t){for(var e=t;e!==null;){if(e.tag===13){var l=e.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||Xc(l)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}function $u(t,e,l,a){e=t.memoizedState,l=l(a,e),l=l==null?e:U({},e,l),t.memoizedState=l,t.lanes===0&&(t.updateQueue.baseState=l)}var Fu={enqueueSetState:function(t,e,l){t=t._reactInternals;var a=te(),n=ke(a);n.payload=e,l!=null&&(n.callback=l),e=Je(t,n,a),e!==null&&(ee(e,t,a),Qa(e,t,a))},enqueueReplaceState:function(t,e,l){t=t._reactInternals;var a=te(),n=ke(a);n.tag=1,n.payload=e,l!=null&&(n.callback=l),e=Je(t,n,a),e!==null&&(ee(e,t,a),Qa(e,t,a))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var l=te(),a=ke(l);a.tag=2,e!=null&&(a.callback=e),e=Je(t,a,l),e!==null&&(ee(e,t,l),Qa(e,t,l))}};function ss(t,e,l,a,n,i,u){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(a,i,u):e.prototype&&e.prototype.isPureReactComponent?!Na(l,a)||!Na(n,i):!0}function rs(t,e,l,a){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(l,a),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(l,a),e.state!==t&&Fu.enqueueReplaceState(e,e.state,null)}function Dl(t,e){var l=e;if("ref"in e){l={};for(var a in e)a!=="ref"&&(l[a]=e[a])}if(t=t.defaultProps){l===e&&(l=U({},l));for(var n in t)l[n]===void 0&&(l[n]=t[n])}return l}var ii=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function ds(t){ii(t)}function gs(t){console.error(t)}function hs(t){ii(t)}function ui(t,e){try{var l=t.onUncaughtError;l(e.value,{componentStack:e.stack})}catch(a){setTimeout(function(){throw a})}}function ms(t,e,l){try{var a=t.onCaughtError;a(l.value,{componentStack:l.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function Pu(t,e,l){return l=ke(l),l.tag=3,l.payload={element:null},l.callback=function(){ui(t,e)},l}function vs(t){return t=ke(t),t.tag=3,t}function ps(t,e,l,a){var n=l.type.getDerivedStateFromError;if(typeof n=="function"){var i=a.value;t.payload=function(){return n(i)},t.callback=function(){ms(e,l,a)}}var u=l.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(t.callback=function(){ms(e,l,a),typeof n!="function"&&(al===null?al=new Set([this]):al.add(this));var c=a.stack;this.componentDidCatch(a.value,{componentStack:c!==null?c:""})})}function N0(t,e,l,a,n){if(l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(e=l.alternate,e!==null&&Ya(e,l,n,!0),l=fe.current,l!==null){switch(l.tag){case 13:return xe===null?zc():l.alternate===null&&gt===0&&(gt=3),l.flags&=-257,l.flags|=65536,l.lanes=n,a===Ou?l.flags|=16384:(e=l.updateQueue,e===null?l.updateQueue=new Set([a]):e.add(a),jc(t,a,n)),!1;case 22:return l.flags|=65536,a===Ou?l.flags|=16384:(e=l.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([a])},l.updateQueue=e):(l=e.retryQueue,l===null?e.retryQueue=new Set([a]):l.add(a)),jc(t,a,n)),!1}throw Error(m(435,l.tag))}return jc(t,a,n),zc(),!1}if(I)return e=fe.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=n,a!==xu&&(t=Error(m(422),{cause:a}),qa(ne(t,l)))):(a!==xu&&(e=Error(m(423),{cause:a}),qa(ne(e,l))),t=t.current.alternate,t.flags|=65536,n&=-n,t.lanes|=n,a=ne(a,l),n=Pu(t.stateNode,a,n),_u(t,n),gt!==4&&(gt=2)),!1;var i=Error(m(520),{cause:a});if(i=ne(i,l),ln===null?ln=[i]:ln.push(i),gt!==4&&(gt=2),e===null)return!0;a=ne(a,l),l=e;do{switch(l.tag){case 3:return l.flags|=65536,t=n&-n,l.lanes|=t,t=Pu(l.stateNode,a,t),_u(l,t),!1;case 1:if(e=l.type,i=l.stateNode,(l.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(al===null||!al.has(i))))return l.flags|=65536,n&=-n,l.lanes|=n,n=vs(n),ps(n,t,l,a),_u(l,n),!1}l=l.return}while(l!==null);return!1}var ys=Error(m(461)),zt=!1;function Et(t,e,l,a){e.child=t===null?fs(e,null,l,a):ia(e,t.child,l,a)}function bs(t,e,l,a,n){l=l.render;var i=e.ref;if("ref"in a){var u={};for(var c in a)c!=="ref"&&(u[c]=a[c])}else u=a;return Al(e),a=qu(t,e,l,u,i,n),c=Yu(),t!==null&&!zt?(Bu(t,e,n),qe(t,e,n)):(I&&c&&yu(e),e.flags|=1,Et(t,e,a,n),e.child)}function xs(t,e,l,a,n){if(t===null){var i=l.type;return typeof i=="function"&&!mu(i)&&i.defaultProps===void 0&&l.compare===null?(e.tag=15,e.type=i,Ss(t,e,i,a,n)):(t=Xn(l.type,null,a,e,e.mode,n),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!uc(t,n)){var u=i.memoizedProps;if(l=l.compare,l=l!==null?l:Na,l(u,a)&&t.ref===e.ref)return qe(t,e,n)}return e.flags|=1,t=Me(i,a),t.ref=e.ref,t.return=e,e.child=t}function Ss(t,e,l,a,n){if(t!==null){var i=t.memoizedProps;if(Na(i,a)&&t.ref===e.ref)if(zt=!1,e.pendingProps=a=i,uc(t,n))(t.flags&131072)!==0&&(zt=!0);else return e.lanes=t.lanes,qe(t,e,n)}return Iu(t,e,l,a,n)}function zs(t,e,l){var a=e.pendingProps,n=a.children,i=t!==null?t.memoizedState:null;if(a.mode==="hidden"){if((e.flags&128)!==0){if(a=i!==null?i.baseLanes|l:l,t!==null){for(n=e.child=t.child,i=0;n!==null;)i=i|n.lanes|n.childLanes,n=n.sibling;e.childLanes=i&~a}else e.childLanes=0,e.child=null;return Ts(t,e,a,l)}if((l&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&wn(e,i!==null?i.cachePool:null),i!==null?So(e,i):Uu(),os(e);else return e.lanes=e.childLanes=536870912,Ts(t,e,i!==null?i.baseLanes|l:l,l)}else i!==null?(wn(e,i.cachePool),So(e,i),Fe(),e.memoizedState=null):(t!==null&&wn(e,null),Uu(),Fe());return Et(t,e,n,l),e.child}function Ts(t,e,l,a){var n=Au();return n=n===null?null:{parent:bt._currentValue,pool:n},e.memoizedState={baseLanes:l,cachePool:n},t!==null&&wn(e,null),Uu(),os(e),t!==null&&Ya(t,e,a,!0),null}function ci(t,e){var l=e.ref;if(l===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(m(284));(t===null||t.ref!==l)&&(e.flags|=4194816)}}function Iu(t,e,l,a,n){return Al(e),l=qu(t,e,l,a,void 0,n),a=Yu(),t!==null&&!zt?(Bu(t,e,n),qe(t,e,n)):(I&&a&&yu(e),e.flags|=1,Et(t,e,l,n),e.child)}function js(t,e,l,a,n,i){return Al(e),e.updateQueue=null,l=To(e,a,l,n),zo(t),a=Yu(),t!==null&&!zt?(Bu(t,e,i),qe(t,e,i)):(I&&a&&yu(e),e.flags|=1,Et(t,e,l,i),e.child)}function Es(t,e,l,a,n){if(Al(e),e.stateNode===null){var i=Wl,u=l.contextType;typeof u=="object"&&u!==null&&(i=Ut(u)),i=new l(a,i),e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Fu,e.stateNode=i,i._reactInternals=e,i=e.stateNode,i.props=a,i.state=e.memoizedState,i.refs={},Mu(e),u=l.contextType,i.context=typeof u=="object"&&u!==null?Ut(u):Wl,i.state=e.memoizedState,u=l.getDerivedStateFromProps,typeof u=="function"&&($u(e,l,u,a),i.state=e.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(u=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),u!==i.state&&Fu.enqueueReplaceState(i,i.state,null),La(e,a,i,n),Za(),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308),a=!0}else if(t===null){i=e.stateNode;var c=e.memoizedProps,f=Dl(l,c);i.props=f;var h=i.context,b=l.contextType;u=Wl,typeof b=="object"&&b!==null&&(u=Ut(b));var z=l.getDerivedStateFromProps;b=typeof z=="function"||typeof i.getSnapshotBeforeUpdate=="function",c=e.pendingProps!==c,b||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(c||h!==u)&&rs(e,i,a,u),Ke=!1;var p=e.memoizedState;i.state=p,La(e,a,i,n),Za(),h=e.memoizedState,c||p!==h||Ke?(typeof z=="function"&&($u(e,l,z,a),h=e.memoizedState),(f=Ke||ss(e,l,f,a,p,h,u))?(b||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(e.flags|=4194308)):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=a,e.memoizedState=h),i.props=a,i.state=h,i.context=u,a=f):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),a=!1)}else{i=e.stateNode,Du(t,e),u=e.memoizedProps,b=Dl(l,u),i.props=b,z=e.pendingProps,p=i.context,h=l.contextType,f=Wl,typeof h=="object"&&h!==null&&(f=Ut(h)),c=l.getDerivedStateFromProps,(h=typeof c=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==z||p!==f)&&rs(e,i,a,f),Ke=!1,p=e.memoizedState,i.state=p,La(e,a,i,n),Za();var y=e.memoizedState;u!==z||p!==y||Ke||t!==null&&t.dependencies!==null&&Zn(t.dependencies)?(typeof c=="function"&&($u(e,l,c,a),y=e.memoizedState),(b=Ke||ss(e,l,b,a,p,y,f)||t!==null&&t.dependencies!==null&&Zn(t.dependencies))?(h||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(a,y,f),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(a,y,f)),typeof i.componentDidUpdate=="function"&&(e.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof i.componentDidUpdate!="function"||u===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=a,e.memoizedState=y),i.props=a,i.state=y,i.context=f,a=b):(typeof i.componentDidUpdate!="function"||u===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),a=!1)}return i=a,ci(t,e),a=(e.flags&128)!==0,i||a?(i=e.stateNode,l=a&&typeof l.getDerivedStateFromError!="function"?null:i.render(),e.flags|=1,t!==null&&a?(e.child=ia(e,t.child,null,n),e.child=ia(e,null,l,n)):Et(t,e,l,n),e.memoizedState=i.state,t=e.child):t=qe(t,e,n),t}function As(t,e,l,a){return Ha(),e.flags|=256,Et(t,e,l,a),e.child}var tc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ec(t){return{baseLanes:t,cachePool:go()}}function lc(t,e,l){return t=t!==null?t.childLanes&~l:0,e&&(t|=oe),t}function Os(t,e,l){var a=e.pendingProps,n=!1,i=(e.flags&128)!==0,u;if((u=i)||(u=t!==null&&t.memoizedState===null?!1:(xt.current&2)!==0),u&&(n=!0,e.flags&=-129),u=(e.flags&32)!==0,e.flags&=-33,t===null){if(I){if(n?$e(e):Fe(),I){var c=dt,f;if(f=c){t:{for(f=c,c=be;f.nodeType!==8;){if(!c){c=null;break t}if(f=me(f.nextSibling),f===null){c=null;break t}}c=f}c!==null?(e.memoizedState={dehydrated:c,treeContext:Sl!==null?{id:De,overflow:_e}:null,retryLane:536870912,hydrationErrors:null},f=$t(18,null,null,0),f.stateNode=c,f.return=e,e.child=f,Yt=e,dt=null,f=!0):f=!1}f||jl(e)}if(c=e.memoizedState,c!==null&&(c=c.dehydrated,c!==null))return Xc(c)?e.lanes=32:e.lanes=536870912,null;He(e)}return c=a.children,a=a.fallback,n?(Fe(),n=e.mode,c=fi({mode:"hidden",children:c},n),a=xl(a,n,l,null),c.return=e,a.return=e,c.sibling=a,e.child=c,n=e.child,n.memoizedState=ec(l),n.childLanes=lc(t,u,l),e.memoizedState=tc,a):($e(e),ac(e,c))}if(f=t.memoizedState,f!==null&&(c=f.dehydrated,c!==null)){if(i)e.flags&256?($e(e),e.flags&=-257,e=nc(t,e,l)):e.memoizedState!==null?(Fe(),e.child=t.child,e.flags|=128,e=null):(Fe(),n=a.fallback,c=e.mode,a=fi({mode:"visible",children:a.children},c),n=xl(n,c,l,null),n.flags|=2,a.return=e,n.return=e,a.sibling=n,e.child=a,ia(e,t.child,null,l),a=e.child,a.memoizedState=ec(l),a.childLanes=lc(t,u,l),e.memoizedState=tc,e=n);else if($e(e),Xc(c)){if(u=c.nextSibling&&c.nextSibling.dataset,u)var h=u.dgst;u=h,a=Error(m(419)),a.stack="",a.digest=u,qa({value:a,source:null,stack:null}),e=nc(t,e,l)}else if(zt||Ya(t,e,l,!1),u=(l&t.childLanes)!==0,zt||u){if(u=ft,u!==null&&(a=l&-l,a=(a&42)!==0?1:Ci(a),a=(a&(u.suspendedLanes|l))!==0?0:a,a!==0&&a!==f.retryLane))throw f.retryLane=a,Jl(t,a),ee(u,t,a),ys;c.data==="$?"||zc(),e=nc(t,e,l)}else c.data==="$?"?(e.flags|=192,e.child=t.child,e=null):(t=f.treeContext,dt=me(c.nextSibling),Yt=e,I=!0,Tl=null,be=!1,t!==null&&(ue[ce++]=De,ue[ce++]=_e,ue[ce++]=Sl,De=t.id,_e=t.overflow,Sl=e),e=ac(e,a.children),e.flags|=4096);return e}return n?(Fe(),n=a.fallback,c=e.mode,f=t.child,h=f.sibling,a=Me(f,{mode:"hidden",children:a.children}),a.subtreeFlags=f.subtreeFlags&65011712,h!==null?n=Me(h,n):(n=xl(n,c,l,null),n.flags|=2),n.return=e,a.return=e,a.sibling=n,e.child=a,a=n,n=e.child,c=t.child.memoizedState,c===null?c=ec(l):(f=c.cachePool,f!==null?(h=bt._currentValue,f=f.parent!==h?{parent:h,pool:h}:f):f=go(),c={baseLanes:c.baseLanes|l,cachePool:f}),n.memoizedState=c,n.childLanes=lc(t,u,l),e.memoizedState=tc,a):($e(e),l=t.child,t=l.sibling,l=Me(l,{mode:"visible",children:a.children}),l.return=e,l.sibling=null,t!==null&&(u=e.deletions,u===null?(e.deletions=[t],e.flags|=16):u.push(t)),e.child=l,e.memoizedState=null,l)}function ac(t,e){return e=fi({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function fi(t,e){return t=$t(22,t,null,e),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function nc(t,e,l){return ia(e,t.child,null,l),t=ac(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Ms(t,e,l){t.lanes|=e;var a=t.alternate;a!==null&&(a.lanes|=e),zu(t.return,e,l)}function ic(t,e,l,a,n){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:a,tail:l,tailMode:n}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=a,i.tail=l,i.tailMode=n)}function Ds(t,e,l){var a=e.pendingProps,n=a.revealOrder,i=a.tail;if(Et(t,e,a.children,l),a=xt.current,(a&2)!==0)a=a&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ms(t,l,e);else if(t.tag===19)Ms(t,l,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}a&=1}switch(E(xt,a),n){case"forwards":for(l=e.child,n=null;l!==null;)t=l.alternate,t!==null&&ni(t)===null&&(n=l),l=l.sibling;l=n,l===null?(n=e.child,e.child=null):(n=l.sibling,l.sibling=null),ic(e,!1,n,l,i);break;case"backwards":for(l=null,n=e.child,e.child=null;n!==null;){if(t=n.alternate,t!==null&&ni(t)===null){e.child=n;break}t=n.sibling,n.sibling=l,l=n,n=t}ic(e,!0,l,null,i);break;case"together":ic(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function qe(t,e,l){if(t!==null&&(e.dependencies=t.dependencies),ll|=e.lanes,(l&e.childLanes)===0)if(t!==null){if(Ya(t,e,l,!1),(l&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(m(153));if(e.child!==null){for(t=e.child,l=Me(t,t.pendingProps),e.child=l,l.return=e;t.sibling!==null;)t=t.sibling,l=l.sibling=Me(t,t.pendingProps),l.return=e;l.sibling=null}return e.child}function uc(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&Zn(t)))}function U0(t,e,l){switch(e.tag){case 3:ot(e,e.stateNode.containerInfo),Ve(e,bt,t.memoizedState.cache),Ha();break;case 27:case 5:qi(e);break;case 4:ot(e,e.stateNode.containerInfo);break;case 10:Ve(e,e.type,e.memoizedProps.value);break;case 13:var a=e.memoizedState;if(a!==null)return a.dehydrated!==null?($e(e),e.flags|=128,null):(l&e.child.childLanes)!==0?Os(t,e,l):($e(e),t=qe(t,e,l),t!==null?t.sibling:null);$e(e);break;case 19:var n=(t.flags&128)!==0;if(a=(l&e.childLanes)!==0,a||(Ya(t,e,l,!1),a=(l&e.childLanes)!==0),n){if(a)return Ds(t,e,l);e.flags|=128}if(n=e.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),E(xt,xt.current),a)break;return null;case 22:case 23:return e.lanes=0,zs(t,e,l);case 24:Ve(e,bt,t.memoizedState.cache)}return qe(t,e,l)}function _s(t,e,l){if(t!==null)if(t.memoizedProps!==e.pendingProps)zt=!0;else{if(!uc(t,l)&&(e.flags&128)===0)return zt=!1,U0(t,e,l);zt=(t.flags&131072)!==0}else zt=!1,I&&(e.flags&1048576)!==0&&io(e,Qn,e.index);switch(e.lanes=0,e.tag){case 16:t:{t=e.pendingProps;var a=e.elementType,n=a._init;if(a=n(a._payload),e.type=a,typeof a=="function")mu(a)?(t=Dl(a,t),e.tag=1,e=Es(null,e,a,t,l)):(e.tag=0,e=Iu(null,e,a,t,l));else{if(a!=null){if(n=a.$$typeof,n===de){e.tag=11,e=bs(null,e,a,t,l);break t}else if(n===wt){e.tag=14,e=xs(null,e,a,t,l);break t}}throw e=hl(a)||a,Error(m(306,e,""))}}return e;case 0:return Iu(t,e,e.type,e.pendingProps,l);case 1:return a=e.type,n=Dl(a,e.pendingProps),Es(t,e,a,n,l);case 3:t:{if(ot(e,e.stateNode.containerInfo),t===null)throw Error(m(387));a=e.pendingProps;var i=e.memoizedState;n=i.element,Du(t,e),La(e,a,null,l);var u=e.memoizedState;if(a=u.cache,Ve(e,bt,a),a!==i.cache&&Tu(e,[bt],l,!0),Za(),a=u.element,i.isDehydrated)if(i={element:a,isDehydrated:!1,cache:u.cache},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){e=As(t,e,a,l);break t}else if(a!==n){n=ne(Error(m(424)),e),qa(n),e=As(t,e,a,l);break t}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(dt=me(t.firstChild),Yt=e,I=!0,Tl=null,be=!0,l=fs(e,null,a,l),e.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling}else{if(Ha(),a===n){e=qe(t,e,l);break t}Et(t,e,a,l)}e=e.child}return e;case 26:return ci(t,e),t===null?(l=Hr(e.type,null,e.pendingProps,null))?e.memoizedState=l:I||(l=e.type,t=e.pendingProps,a=zi(Q.current).createElement(l),a[Nt]=e,a[Gt]=t,Ot(a,l,t),St(a),e.stateNode=a):e.memoizedState=Hr(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return qi(e),t===null&&I&&(a=e.stateNode=Nr(e.type,e.pendingProps,Q.current),Yt=e,be=!0,n=dt,ul(e.type)?(Cc=n,dt=me(a.firstChild)):dt=n),Et(t,e,e.pendingProps.children,l),ci(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&I&&((n=a=dt)&&(a=ug(a,e.type,e.pendingProps,be),a!==null?(e.stateNode=a,Yt=e,dt=me(a.firstChild),be=!1,n=!0):n=!1),n||jl(e)),qi(e),n=e.type,i=e.pendingProps,u=t!==null?t.memoizedProps:null,a=i.children,Yc(n,i)?a=null:u!==null&&Yc(n,u)&&(e.flags|=32),e.memoizedState!==null&&(n=qu(t,e,j0,null,null,l),dn._currentValue=n),ci(t,e),Et(t,e,a,l),e.child;case 6:return t===null&&I&&((t=l=dt)&&(l=cg(l,e.pendingProps,be),l!==null?(e.stateNode=l,Yt=e,dt=null,t=!0):t=!1),t||jl(e)),null;case 13:return Os(t,e,l);case 4:return ot(e,e.stateNode.containerInfo),a=e.pendingProps,t===null?e.child=ia(e,null,a,l):Et(t,e,a,l),e.child;case 11:return bs(t,e,e.type,e.pendingProps,l);case 7:return Et(t,e,e.pendingProps,l),e.child;case 8:return Et(t,e,e.pendingProps.children,l),e.child;case 12:return Et(t,e,e.pendingProps.children,l),e.child;case 10:return a=e.pendingProps,Ve(e,e.type,a.value),Et(t,e,a.children,l),e.child;case 9:return n=e.type._context,a=e.pendingProps.children,Al(e),n=Ut(n),a=a(n),e.flags|=1,Et(t,e,a,l),e.child;case 14:return xs(t,e,e.type,e.pendingProps,l);case 15:return Ss(t,e,e.type,e.pendingProps,l);case 19:return Ds(t,e,l);case 31:return a=e.pendingProps,l=e.mode,a={mode:a.mode,children:a.children},t===null?(l=fi(a,l),l.ref=e.ref,e.child=l,l.return=e,e=l):(l=Me(t.child,a),l.ref=e.ref,e.child=l,l.return=e,e=l),e;case 22:return zs(t,e,l);case 24:return Al(e),a=Ut(bt),t===null?(n=Au(),n===null&&(n=ft,i=ju(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=l),n=i),e.memoizedState={parent:a,cache:n},Mu(e),Ve(e,bt,n)):((t.lanes&l)!==0&&(Du(t,e),La(e,null,null,l),Za()),n=t.memoizedState,i=e.memoizedState,n.parent!==a?(n={parent:a,cache:a},e.memoizedState=n,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=n),Ve(e,bt,a)):(a=i.cache,Ve(e,bt,a),a!==n.cache&&Tu(e,[bt],l,!0))),Et(t,e,e.pendingProps.children,l),e.child;case 29:throw e.pendingProps}throw Error(m(156,e.tag))}function Ye(t){t.flags|=4}function Ns(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Xr(e)){if(e=fe.current,e!==null&&((W&4194048)===W?xe!==null:(W&62914560)!==W&&(W&536870912)===0||e!==xe))throw Ca=Ou,ho;t.flags|=8192}}function oi(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?ff():536870912,t.lanes|=e,oa|=e)}function $a(t,e){if(!I)switch(t.tailMode){case"hidden":e=t.tail;for(var l=null;e!==null;)e.alternate!==null&&(l=e),e=e.sibling;l===null?t.tail=null:l.sibling=null;break;case"collapsed":l=t.tail;for(var a=null;l!==null;)l.alternate!==null&&(a=l),l=l.sibling;a===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:a.sibling=null}}function rt(t){var e=t.alternate!==null&&t.alternate.child===t.child,l=0,a=0;if(e)for(var n=t.child;n!==null;)l|=n.lanes|n.childLanes,a|=n.subtreeFlags&65011712,a|=n.flags&65011712,n.return=t,n=n.sibling;else for(n=t.child;n!==null;)l|=n.lanes|n.childLanes,a|=n.subtreeFlags,a|=n.flags,n.return=t,n=n.sibling;return t.subtreeFlags|=a,t.childLanes=l,e}function R0(t,e,l){var a=e.pendingProps;switch(bu(e),e.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return rt(e),null;case 1:return rt(e),null;case 3:return l=e.stateNode,a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),Ue(bt),Qe(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(Ra(e)?Ye(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,fo())),rt(e),null;case 26:return l=e.memoizedState,t===null?(Ye(e),l!==null?(rt(e),Ns(e,l)):(rt(e),e.flags&=-16777217)):l?l!==t.memoizedState?(Ye(e),rt(e),Ns(e,l)):(rt(e),e.flags&=-16777217):(t.memoizedProps!==a&&Ye(e),rt(e),e.flags&=-16777217),null;case 27:xn(e),l=Q.current;var n=e.type;if(t!==null&&e.stateNode!=null)t.memoizedProps!==a&&Ye(e);else{if(!a){if(e.stateNode===null)throw Error(m(166));return rt(e),null}t=Y.current,Ra(e)?uo(e):(t=Nr(n,a,l),e.stateNode=t,Ye(e))}return rt(e),null;case 5:if(xn(e),l=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==a&&Ye(e);else{if(!a){if(e.stateNode===null)throw Error(m(166));return rt(e),null}if(t=Y.current,Ra(e))uo(e);else{switch(n=zi(Q.current),t){case 1:t=n.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:t=n.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":t=n.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":t=n.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":t=n.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof a.is=="string"?n.createElement("select",{is:a.is}):n.createElement("select"),a.multiple?t.multiple=!0:a.size&&(t.size=a.size);break;default:t=typeof a.is=="string"?n.createElement(l,{is:a.is}):n.createElement(l)}}t[Nt]=e,t[Gt]=a;t:for(n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.tag!==27&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;n=n.return}n.sibling.return=n.return,n=n.sibling}e.stateNode=t;t:switch(Ot(t,l,a),l){case"button":case"input":case"select":case"textarea":t=!!a.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&Ye(e)}}return rt(e),e.flags&=-16777217,null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==a&&Ye(e);else{if(typeof a!="string"&&e.stateNode===null)throw Error(m(166));if(t=Q.current,Ra(e)){if(t=e.stateNode,l=e.memoizedProps,a=null,n=Yt,n!==null)switch(n.tag){case 27:case 5:a=n.memoizedProps}t[Nt]=e,t=!!(t.nodeValue===l||a!==null&&a.suppressHydrationWarning===!0||jr(t.nodeValue,l)),t||jl(e)}else t=zi(t).createTextNode(a),t[Nt]=e,e.stateNode=t}return rt(e),null;case 13:if(a=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(n=Ra(e),a!==null&&a.dehydrated!==null){if(t===null){if(!n)throw Error(m(318));if(n=e.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(m(317));n[Nt]=e}else Ha(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;rt(e),n=!1}else n=fo(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=n),n=!0;if(!n)return e.flags&256?(He(e),e):(He(e),null)}if(He(e),(e.flags&128)!==0)return e.lanes=l,e;if(l=a!==null,t=t!==null&&t.memoizedState!==null,l){a=e.child,n=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(n=a.alternate.memoizedState.cachePool.pool);var i=null;a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(i=a.memoizedState.cachePool.pool),i!==n&&(a.flags|=2048)}return l!==t&&l&&(e.child.flags|=8192),oi(e,e.updateQueue),rt(e),null;case 4:return Qe(),t===null&&Nc(e.stateNode.containerInfo),rt(e),null;case 10:return Ue(e.type),rt(e),null;case 19:if(O(xt),n=e.memoizedState,n===null)return rt(e),null;if(a=(e.flags&128)!==0,i=n.rendering,i===null)if(a)$a(n,!1);else{if(gt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(i=ni(t),i!==null){for(e.flags|=128,$a(n,!1),t=i.updateQueue,e.updateQueue=t,oi(e,t),e.subtreeFlags=0,t=l,l=e.child;l!==null;)no(l,t),l=l.sibling;return E(xt,xt.current&1|2),e.child}t=t.sibling}n.tail!==null&&ye()>di&&(e.flags|=128,a=!0,$a(n,!1),e.lanes=4194304)}else{if(!a)if(t=ni(i),t!==null){if(e.flags|=128,a=!0,t=t.updateQueue,e.updateQueue=t,oi(e,t),$a(n,!0),n.tail===null&&n.tailMode==="hidden"&&!i.alternate&&!I)return rt(e),null}else 2*ye()-n.renderingStartTime>di&&l!==536870912&&(e.flags|=128,a=!0,$a(n,!1),e.lanes=4194304);n.isBackwards?(i.sibling=e.child,e.child=i):(t=n.last,t!==null?t.sibling=i:e.child=i,n.last=i)}return n.tail!==null?(e=n.tail,n.rendering=e,n.tail=e.sibling,n.renderingStartTime=ye(),e.sibling=null,t=xt.current,E(xt,a?t&1|2:t&1),e):(rt(e),null);case 22:case 23:return He(e),Ru(),a=e.memoizedState!==null,t!==null?t.memoizedState!==null!==a&&(e.flags|=8192):a&&(e.flags|=8192),a?(l&536870912)!==0&&(e.flags&128)===0&&(rt(e),e.subtreeFlags&6&&(e.flags|=8192)):rt(e),l=e.updateQueue,l!==null&&oi(e,l.retryQueue),l=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),a=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),a!==l&&(e.flags|=2048),t!==null&&O(Ol),null;case 24:return l=null,t!==null&&(l=t.memoizedState.cache),e.memoizedState.cache!==l&&(e.flags|=2048),Ue(bt),rt(e),null;case 25:return null;case 30:return null}throw Error(m(156,e.tag))}function H0(t,e){switch(bu(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ue(bt),Qe(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return xn(e),null;case 13:if(He(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(m(340));Ha()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return O(xt),null;case 4:return Qe(),null;case 10:return Ue(e.type),null;case 22:case 23:return He(e),Ru(),t!==null&&O(Ol),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return Ue(bt),null;case 25:return null;default:return null}}function Us(t,e){switch(bu(e),e.tag){case 3:Ue(bt),Qe();break;case 26:case 27:case 5:xn(e);break;case 4:Qe();break;case 13:He(e);break;case 19:O(xt);break;case 10:Ue(e.type);break;case 22:case 23:He(e),Ru(),t!==null&&O(Ol);break;case 24:Ue(bt)}}function Fa(t,e){try{var l=e.updateQueue,a=l!==null?l.lastEffect:null;if(a!==null){var n=a.next;l=n;do{if((l.tag&t)===t){a=void 0;var i=l.create,u=l.inst;a=i(),u.destroy=a}l=l.next}while(l!==n)}}catch(c){ct(e,e.return,c)}}function Pe(t,e,l){try{var a=e.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var i=n.next;a=i;do{if((a.tag&t)===t){var u=a.inst,c=u.destroy;if(c!==void 0){u.destroy=void 0,n=e;var f=l,h=c;try{h()}catch(b){ct(n,f,b)}}}a=a.next}while(a!==i)}}catch(b){ct(e,e.return,b)}}function Rs(t){var e=t.updateQueue;if(e!==null){var l=t.stateNode;try{xo(e,l)}catch(a){ct(t,t.return,a)}}}function Hs(t,e,l){l.props=Dl(t.type,t.memoizedProps),l.state=t.memoizedState;try{l.componentWillUnmount()}catch(a){ct(t,e,a)}}function Pa(t,e){try{var l=t.ref;if(l!==null){switch(t.tag){case 26:case 27:case 5:var a=t.stateNode;break;case 30:a=t.stateNode;break;default:a=t.stateNode}typeof l=="function"?t.refCleanup=l(a):l.current=a}}catch(n){ct(t,e,n)}}function Se(t,e){var l=t.ref,a=t.refCleanup;if(l!==null)if(typeof a=="function")try{a()}catch(n){ct(t,e,n)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(n){ct(t,e,n)}else l.current=null}function qs(t){var e=t.type,l=t.memoizedProps,a=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":l.autoFocus&&a.focus();break t;case"img":l.src?a.src=l.src:l.srcSet&&(a.srcset=l.srcSet)}}catch(n){ct(t,t.return,n)}}function cc(t,e,l){try{var a=t.stateNode;eg(a,t.type,l,e),a[Gt]=e}catch(n){ct(t,t.return,n)}}function Ys(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&ul(t.type)||t.tag===4}function fc(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Ys(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&ul(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function oc(t,e,l){var a=t.tag;if(a===5||a===6)t=t.stateNode,e?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(t,e):(e=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,e.appendChild(t),l=l._reactRootContainer,l!=null||e.onclick!==null||(e.onclick=Si));else if(a!==4&&(a===27&&ul(t.type)&&(l=t.stateNode,e=null),t=t.child,t!==null))for(oc(t,e,l),t=t.sibling;t!==null;)oc(t,e,l),t=t.sibling}function si(t,e,l){var a=t.tag;if(a===5||a===6)t=t.stateNode,e?l.insertBefore(t,e):l.appendChild(t);else if(a!==4&&(a===27&&ul(t.type)&&(l=t.stateNode),t=t.child,t!==null))for(si(t,e,l),t=t.sibling;t!==null;)si(t,e,l),t=t.sibling}function Bs(t){var e=t.stateNode,l=t.memoizedProps;try{for(var a=t.type,n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Ot(e,a,l),e[Nt]=t,e[Gt]=l}catch(i){ct(t,t.return,i)}}var Be=!1,vt=!1,sc=!1,Gs=typeof WeakSet=="function"?WeakSet:Set,Tt=null;function q0(t,e){if(t=t.containerInfo,Hc=Mi,t=Jf(t),fu(t)){if("selectionStart"in t)var l={start:t.selectionStart,end:t.selectionEnd};else t:{l=(l=t.ownerDocument)&&l.defaultView||window;var a=l.getSelection&&l.getSelection();if(a&&a.rangeCount!==0){l=a.anchorNode;var n=a.anchorOffset,i=a.focusNode;a=a.focusOffset;try{l.nodeType,i.nodeType}catch{l=null;break t}var u=0,c=-1,f=-1,h=0,b=0,z=t,p=null;e:for(;;){for(var y;z!==l||n!==0&&z.nodeType!==3||(c=u+n),z!==i||a!==0&&z.nodeType!==3||(f=u+a),z.nodeType===3&&(u+=z.nodeValue.length),(y=z.firstChild)!==null;)p=z,z=y;for(;;){if(z===t)break e;if(p===l&&++h===n&&(c=u),p===i&&++b===a&&(f=u),(y=z.nextSibling)!==null)break;z=p,p=z.parentNode}z=y}l=c===-1||f===-1?null:{start:c,end:f}}else l=null}l=l||{start:0,end:0}}else l=null;for(qc={focusedElem:t,selectionRange:l},Mi=!1,Tt=e;Tt!==null;)if(e=Tt,t=e.child,(e.subtreeFlags&1024)!==0&&t!==null)t.return=e,Tt=t;else for(;Tt!==null;){switch(e=Tt,i=e.alternate,t=e.flags,e.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&i!==null){t=void 0,l=e,n=i.memoizedProps,i=i.memoizedState,a=l.stateNode;try{var C=Dl(l.type,n,l.elementType===l.type);t=a.getSnapshotBeforeUpdate(C,i),a.__reactInternalSnapshotBeforeUpdate=t}catch(B){ct(l,l.return,B)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,l=t.nodeType,l===9)Gc(t);else if(l===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Gc(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(m(163))}if(t=e.sibling,t!==null){t.return=e.return,Tt=t;break}Tt=e.return}}function Xs(t,e,l){var a=l.flags;switch(l.tag){case 0:case 11:case 15:Ie(t,l),a&4&&Fa(5,l);break;case 1:if(Ie(t,l),a&4)if(t=l.stateNode,e===null)try{t.componentDidMount()}catch(u){ct(l,l.return,u)}else{var n=Dl(l.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(n,e,t.__reactInternalSnapshotBeforeUpdate)}catch(u){ct(l,l.return,u)}}a&64&&Rs(l),a&512&&Pa(l,l.return);break;case 3:if(Ie(t,l),a&64&&(t=l.updateQueue,t!==null)){if(e=null,l.child!==null)switch(l.child.tag){case 27:case 5:e=l.child.stateNode;break;case 1:e=l.child.stateNode}try{xo(t,e)}catch(u){ct(l,l.return,u)}}break;case 27:e===null&&a&4&&Bs(l);case 26:case 5:Ie(t,l),e===null&&a&4&&qs(l),a&512&&Pa(l,l.return);break;case 12:Ie(t,l);break;case 13:Ie(t,l),a&4&&Zs(t,l),a&64&&(t=l.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(l=w0.bind(null,l),fg(t,l))));break;case 22:if(a=l.memoizedState!==null||Be,!a){e=e!==null&&e.memoizedState!==null||vt,n=Be;var i=vt;Be=a,(vt=e)&&!i?tl(t,l,(l.subtreeFlags&8772)!==0):Ie(t,l),Be=n,vt=i}break;case 30:break;default:Ie(t,l)}}function Cs(t){var e=t.alternate;e!==null&&(t.alternate=null,Cs(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&Li(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var st=null,Qt=!1;function Ge(t,e,l){for(l=l.child;l!==null;)Qs(t,e,l),l=l.sibling}function Qs(t,e,l){if(kt&&typeof kt.onCommitFiberUnmount=="function")try{kt.onCommitFiberUnmount(ba,l)}catch{}switch(l.tag){case 26:vt||Se(l,e),Ge(t,e,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:vt||Se(l,e);var a=st,n=Qt;ul(l.type)&&(st=l.stateNode,Qt=!1),Ge(t,e,l),fn(l.stateNode),st=a,Qt=n;break;case 5:vt||Se(l,e);case 6:if(a=st,n=Qt,st=null,Ge(t,e,l),st=a,Qt=n,st!==null)if(Qt)try{(st.nodeType===9?st.body:st.nodeName==="HTML"?st.ownerDocument.body:st).removeChild(l.stateNode)}catch(i){ct(l,e,i)}else try{st.removeChild(l.stateNode)}catch(i){ct(l,e,i)}break;case 18:st!==null&&(Qt?(t=st,Dr(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,l.stateNode),vn(t)):Dr(st,l.stateNode));break;case 4:a=st,n=Qt,st=l.stateNode.containerInfo,Qt=!0,Ge(t,e,l),st=a,Qt=n;break;case 0:case 11:case 14:case 15:vt||Pe(2,l,e),vt||Pe(4,l,e),Ge(t,e,l);break;case 1:vt||(Se(l,e),a=l.stateNode,typeof a.componentWillUnmount=="function"&&Hs(l,e,a)),Ge(t,e,l);break;case 21:Ge(t,e,l);break;case 22:vt=(a=vt)||l.memoizedState!==null,Ge(t,e,l),vt=a;break;default:Ge(t,e,l)}}function Zs(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{vn(t)}catch(l){ct(e,e.return,l)}}function Y0(t){switch(t.tag){case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new Gs),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new Gs),e;default:throw Error(m(435,t.tag))}}function rc(t,e){var l=Y0(t);e.forEach(function(a){var n=V0.bind(null,t,a);l.has(a)||(l.add(a),a.then(n,n))})}function Ft(t,e){var l=e.deletions;if(l!==null)for(var a=0;a<l.length;a++){var n=l[a],i=t,u=e,c=u;t:for(;c!==null;){switch(c.tag){case 27:if(ul(c.type)){st=c.stateNode,Qt=!1;break t}break;case 5:st=c.stateNode,Qt=!1;break t;case 3:case 4:st=c.stateNode.containerInfo,Qt=!0;break t}c=c.return}if(st===null)throw Error(m(160));Qs(i,u,n),st=null,Qt=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(e.subtreeFlags&13878)for(e=e.child;e!==null;)Ls(e,t),e=e.sibling}var he=null;function Ls(t,e){var l=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Ft(e,t),Pt(t),a&4&&(Pe(3,t,t.return),Fa(3,t),Pe(5,t,t.return));break;case 1:Ft(e,t),Pt(t),a&512&&(vt||l===null||Se(l,l.return)),a&64&&Be&&(t=t.updateQueue,t!==null&&(a=t.callbacks,a!==null&&(l=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=l===null?a:l.concat(a))));break;case 26:var n=he;if(Ft(e,t),Pt(t),a&512&&(vt||l===null||Se(l,l.return)),a&4){var i=l!==null?l.memoizedState:null;if(a=t.memoizedState,l===null)if(a===null)if(t.stateNode===null){t:{a=t.type,l=t.memoizedProps,n=n.ownerDocument||n;e:switch(a){case"title":i=n.getElementsByTagName("title")[0],(!i||i[za]||i[Nt]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(a),n.head.insertBefore(i,n.querySelector("head > title"))),Ot(i,a,l),i[Nt]=t,St(i),a=i;break t;case"link":var u=Br("link","href",n).get(a+(l.href||""));if(u){for(var c=0;c<u.length;c++)if(i=u[c],i.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&i.getAttribute("rel")===(l.rel==null?null:l.rel)&&i.getAttribute("title")===(l.title==null?null:l.title)&&i.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){u.splice(c,1);break e}}i=n.createElement(a),Ot(i,a,l),n.head.appendChild(i);break;case"meta":if(u=Br("meta","content",n).get(a+(l.content||""))){for(c=0;c<u.length;c++)if(i=u[c],i.getAttribute("content")===(l.content==null?null:""+l.content)&&i.getAttribute("name")===(l.name==null?null:l.name)&&i.getAttribute("property")===(l.property==null?null:l.property)&&i.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&i.getAttribute("charset")===(l.charSet==null?null:l.charSet)){u.splice(c,1);break e}}i=n.createElement(a),Ot(i,a,l),n.head.appendChild(i);break;default:throw Error(m(468,a))}i[Nt]=t,St(i),a=i}t.stateNode=a}else Gr(n,t.type,t.stateNode);else t.stateNode=Yr(n,a,t.memoizedProps);else i!==a?(i===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):i.count--,a===null?Gr(n,t.type,t.stateNode):Yr(n,a,t.memoizedProps)):a===null&&t.stateNode!==null&&cc(t,t.memoizedProps,l.memoizedProps)}break;case 27:Ft(e,t),Pt(t),a&512&&(vt||l===null||Se(l,l.return)),l!==null&&a&4&&cc(t,t.memoizedProps,l.memoizedProps);break;case 5:if(Ft(e,t),Pt(t),a&512&&(vt||l===null||Se(l,l.return)),t.flags&32){n=t.stateNode;try{Ql(n,"")}catch(y){ct(t,t.return,y)}}a&4&&t.stateNode!=null&&(n=t.memoizedProps,cc(t,n,l!==null?l.memoizedProps:n)),a&1024&&(sc=!0);break;case 6:if(Ft(e,t),Pt(t),a&4){if(t.stateNode===null)throw Error(m(162));a=t.memoizedProps,l=t.stateNode;try{l.nodeValue=a}catch(y){ct(t,t.return,y)}}break;case 3:if(Ei=null,n=he,he=Ti(e.containerInfo),Ft(e,t),he=n,Pt(t),a&4&&l!==null&&l.memoizedState.isDehydrated)try{vn(e.containerInfo)}catch(y){ct(t,t.return,y)}sc&&(sc=!1,ws(t));break;case 4:a=he,he=Ti(t.stateNode.containerInfo),Ft(e,t),Pt(t),he=a;break;case 12:Ft(e,t),Pt(t);break;case 13:Ft(e,t),Pt(t),t.child.flags&8192&&t.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(pc=ye()),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,rc(t,a)));break;case 22:n=t.memoizedState!==null;var f=l!==null&&l.memoizedState!==null,h=Be,b=vt;if(Be=h||n,vt=b||f,Ft(e,t),vt=b,Be=h,Pt(t),a&8192)t:for(e=t.stateNode,e._visibility=n?e._visibility&-2:e._visibility|1,n&&(l===null||f||Be||vt||_l(t)),l=null,e=t;;){if(e.tag===5||e.tag===26){if(l===null){f=l=e;try{if(i=f.stateNode,n)u=i.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none";else{c=f.stateNode;var z=f.memoizedProps.style,p=z!=null&&z.hasOwnProperty("display")?z.display:null;c.style.display=p==null||typeof p=="boolean"?"":(""+p).trim()}}catch(y){ct(f,f.return,y)}}}else if(e.tag===6){if(l===null){f=e;try{f.stateNode.nodeValue=n?"":f.memoizedProps}catch(y){ct(f,f.return,y)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;l===e&&(l=null),e=e.return}l===e&&(l=null),e.sibling.return=e.return,e=e.sibling}a&4&&(a=t.updateQueue,a!==null&&(l=a.retryQueue,l!==null&&(a.retryQueue=null,rc(t,l))));break;case 19:Ft(e,t),Pt(t),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,rc(t,a)));break;case 30:break;case 21:break;default:Ft(e,t),Pt(t)}}function Pt(t){var e=t.flags;if(e&2){try{for(var l,a=t.return;a!==null;){if(Ys(a)){l=a;break}a=a.return}if(l==null)throw Error(m(160));switch(l.tag){case 27:var n=l.stateNode,i=fc(t);si(t,i,n);break;case 5:var u=l.stateNode;l.flags&32&&(Ql(u,""),l.flags&=-33);var c=fc(t);si(t,c,u);break;case 3:case 4:var f=l.stateNode.containerInfo,h=fc(t);oc(t,h,f);break;default:throw Error(m(161))}}catch(b){ct(t,t.return,b)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function ws(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;ws(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function Ie(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)Xs(t,e.alternate,e),e=e.sibling}function _l(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:Pe(4,e,e.return),_l(e);break;case 1:Se(e,e.return);var l=e.stateNode;typeof l.componentWillUnmount=="function"&&Hs(e,e.return,l),_l(e);break;case 27:fn(e.stateNode);case 26:case 5:Se(e,e.return),_l(e);break;case 22:e.memoizedState===null&&_l(e);break;case 30:_l(e);break;default:_l(e)}t=t.sibling}}function tl(t,e,l){for(l=l&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var a=e.alternate,n=t,i=e,u=i.flags;switch(i.tag){case 0:case 11:case 15:tl(n,i,l),Fa(4,i);break;case 1:if(tl(n,i,l),a=i,n=a.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(h){ct(a,a.return,h)}if(a=i,n=a.updateQueue,n!==null){var c=a.stateNode;try{var f=n.shared.hiddenCallbacks;if(f!==null)for(n.shared.hiddenCallbacks=null,n=0;n<f.length;n++)bo(f[n],c)}catch(h){ct(a,a.return,h)}}l&&u&64&&Rs(i),Pa(i,i.return);break;case 27:Bs(i);case 26:case 5:tl(n,i,l),l&&a===null&&u&4&&qs(i),Pa(i,i.return);break;case 12:tl(n,i,l);break;case 13:tl(n,i,l),l&&u&4&&Zs(n,i);break;case 22:i.memoizedState===null&&tl(n,i,l),Pa(i,i.return);break;case 30:break;default:tl(n,i,l)}e=e.sibling}}function dc(t,e){var l=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==l&&(t!=null&&t.refCount++,l!=null&&Ba(l))}function gc(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Ba(t))}function ze(t,e,l,a){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Vs(t,e,l,a),e=e.sibling}function Vs(t,e,l,a){var n=e.flags;switch(e.tag){case 0:case 11:case 15:ze(t,e,l,a),n&2048&&Fa(9,e);break;case 1:ze(t,e,l,a);break;case 3:ze(t,e,l,a),n&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Ba(t)));break;case 12:if(n&2048){ze(t,e,l,a),t=e.stateNode;try{var i=e.memoizedProps,u=i.id,c=i.onPostCommit;typeof c=="function"&&c(u,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(f){ct(e,e.return,f)}}else ze(t,e,l,a);break;case 13:ze(t,e,l,a);break;case 23:break;case 22:i=e.stateNode,u=e.alternate,e.memoizedState!==null?i._visibility&2?ze(t,e,l,a):Ia(t,e):i._visibility&2?ze(t,e,l,a):(i._visibility|=2,ua(t,e,l,a,(e.subtreeFlags&10256)!==0)),n&2048&&dc(u,e);break;case 24:ze(t,e,l,a),n&2048&&gc(e.alternate,e);break;default:ze(t,e,l,a)}}function ua(t,e,l,a,n){for(n=n&&(e.subtreeFlags&10256)!==0,e=e.child;e!==null;){var i=t,u=e,c=l,f=a,h=u.flags;switch(u.tag){case 0:case 11:case 15:ua(i,u,c,f,n),Fa(8,u);break;case 23:break;case 22:var b=u.stateNode;u.memoizedState!==null?b._visibility&2?ua(i,u,c,f,n):Ia(i,u):(b._visibility|=2,ua(i,u,c,f,n)),n&&h&2048&&dc(u.alternate,u);break;case 24:ua(i,u,c,f,n),n&&h&2048&&gc(u.alternate,u);break;default:ua(i,u,c,f,n)}e=e.sibling}}function Ia(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var l=t,a=e,n=a.flags;switch(a.tag){case 22:Ia(l,a),n&2048&&dc(a.alternate,a);break;case 24:Ia(l,a),n&2048&&gc(a.alternate,a);break;default:Ia(l,a)}e=e.sibling}}var tn=8192;function ca(t){if(t.subtreeFlags&tn)for(t=t.child;t!==null;)Ks(t),t=t.sibling}function Ks(t){switch(t.tag){case 26:ca(t),t.flags&tn&&t.memoizedState!==null&&Sg(he,t.memoizedState,t.memoizedProps);break;case 5:ca(t);break;case 3:case 4:var e=he;he=Ti(t.stateNode.containerInfo),ca(t),he=e;break;case 22:t.memoizedState===null&&(e=t.alternate,e!==null&&e.memoizedState!==null?(e=tn,tn=16777216,ca(t),tn=e):ca(t));break;default:ca(t)}}function ks(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function en(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var l=0;l<e.length;l++){var a=e[l];Tt=a,Ws(a,t)}ks(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Js(t),t=t.sibling}function Js(t){switch(t.tag){case 0:case 11:case 15:en(t),t.flags&2048&&Pe(9,t,t.return);break;case 3:en(t);break;case 12:en(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,ri(t)):en(t);break;default:en(t)}}function ri(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var l=0;l<e.length;l++){var a=e[l];Tt=a,Ws(a,t)}ks(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:Pe(8,e,e.return),ri(e);break;case 22:l=e.stateNode,l._visibility&2&&(l._visibility&=-3,ri(e));break;default:ri(e)}t=t.sibling}}function Ws(t,e){for(;Tt!==null;){var l=Tt;switch(l.tag){case 0:case 11:case 15:Pe(8,l,e);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var a=l.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Ba(l.memoizedState.cache)}if(a=l.child,a!==null)a.return=l,Tt=a;else t:for(l=t;Tt!==null;){a=Tt;var n=a.sibling,i=a.return;if(Cs(a),a===l){Tt=null;break t}if(n!==null){n.return=i,Tt=n;break t}Tt=i}}}var B0={getCacheForType:function(t){var e=Ut(bt),l=e.data.get(t);return l===void 0&&(l=t(),e.data.set(t,l)),l}},G0=typeof WeakMap=="function"?WeakMap:Map,et=0,ft=null,V=null,W=0,lt=0,It=null,el=!1,fa=!1,hc=!1,Xe=0,gt=0,ll=0,Nl=0,mc=0,oe=0,oa=0,ln=null,Zt=null,vc=!1,pc=0,di=1/0,gi=null,al=null,At=0,nl=null,sa=null,ra=0,yc=0,bc=null,$s=null,an=0,xc=null;function te(){if((et&2)!==0&&W!==0)return W&-W;if(x.T!==null){var t=Pl;return t!==0?t:Oc()}return rf()}function Fs(){oe===0&&(oe=(W&536870912)===0||I?cf():536870912);var t=fe.current;return t!==null&&(t.flags|=32),oe}function ee(t,e,l){(t===ft&&(lt===2||lt===9)||t.cancelPendingCommit!==null)&&(da(t,0),il(t,W,oe,!1)),Sa(t,l),((et&2)===0||t!==ft)&&(t===ft&&((et&2)===0&&(Nl|=l),gt===4&&il(t,W,oe,!1)),Te(t))}function Ps(t,e,l){if((et&6)!==0)throw Error(m(327));var a=!l&&(e&124)===0&&(e&t.expiredLanes)===0||xa(t,e),n=a?Q0(t,e):Tc(t,e,!0),i=a;do{if(n===0){fa&&!a&&il(t,e,0,!1);break}else{if(l=t.current.alternate,i&&!X0(l)){n=Tc(t,e,!1),i=!1;continue}if(n===2){if(i=e,t.errorRecoveryDisabledLanes&i)var u=0;else u=t.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){e=u;t:{var c=t;n=ln;var f=c.current.memoizedState.isDehydrated;if(f&&(da(c,u).flags|=256),u=Tc(c,u,!1),u!==2){if(hc&&!f){c.errorRecoveryDisabledLanes|=i,Nl|=i,n=4;break t}i=Zt,Zt=n,i!==null&&(Zt===null?Zt=i:Zt.push.apply(Zt,i))}n=u}if(i=!1,n!==2)continue}}if(n===1){da(t,0),il(t,e,0,!0);break}t:{switch(a=t,i=n,i){case 0:case 1:throw Error(m(345));case 4:if((e&4194048)!==e)break;case 6:il(a,e,oe,!el);break t;case 2:Zt=null;break;case 3:case 5:break;default:throw Error(m(329))}if((e&62914560)===e&&(n=pc+300-ye(),10<n)){if(il(a,e,oe,!el),jn(a,0,!0)!==0)break t;a.timeoutHandle=Or(Is.bind(null,a,l,Zt,gi,vc,e,oe,Nl,oa,el,i,2,-0,0),n);break t}Is(a,l,Zt,gi,vc,e,oe,Nl,oa,el,i,0,-0,0)}}break}while(!0);Te(t)}function Is(t,e,l,a,n,i,u,c,f,h,b,z,p,y){if(t.timeoutHandle=-1,z=e.subtreeFlags,(z&8192||(z&16785408)===16785408)&&(rn={stylesheets:null,count:0,unsuspend:xg},Ks(e),z=zg(),z!==null)){t.cancelPendingCommit=z(ur.bind(null,t,e,i,l,a,n,u,c,f,b,1,p,y)),il(t,i,u,!h);return}ur(t,e,i,l,a,n,u,c,f)}function X0(t){for(var e=t;;){var l=e.tag;if((l===0||l===11||l===15)&&e.flags&16384&&(l=e.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var a=0;a<l.length;a++){var n=l[a],i=n.getSnapshot;n=n.value;try{if(!Wt(i(),n))return!1}catch{return!1}}if(l=e.child,e.subtreeFlags&16384&&l!==null)l.return=e,e=l;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function il(t,e,l,a){e&=~mc,e&=~Nl,t.suspendedLanes|=e,t.pingedLanes&=~e,a&&(t.warmLanes|=e),a=t.expirationTimes;for(var n=e;0<n;){var i=31-Jt(n),u=1<<i;a[i]=-1,n&=~u}l!==0&&of(t,l,e)}function hi(){return(et&6)===0?(nn(0),!1):!0}function Sc(){if(V!==null){if(lt===0)var t=V.return;else t=V,Ne=El=null,Gu(t),na=null,Ja=0,t=V;for(;t!==null;)Us(t.alternate,t),t=t.return;V=null}}function da(t,e){var l=t.timeoutHandle;l!==-1&&(t.timeoutHandle=-1,ag(l)),l=t.cancelPendingCommit,l!==null&&(t.cancelPendingCommit=null,l()),Sc(),ft=t,V=l=Me(t.current,null),W=e,lt=0,It=null,el=!1,fa=xa(t,e),hc=!1,oa=oe=mc=Nl=ll=gt=0,Zt=ln=null,vc=!1,(e&8)!==0&&(e|=e&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=e;0<a;){var n=31-Jt(a),i=1<<n;e|=t[n],a&=~i}return Xe=e,Yn(),l}function tr(t,e){L=null,x.H=ei,e===Xa||e===Vn?(e=po(),lt=3):e===ho?(e=po(),lt=4):lt=e===ys?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,It=e,V===null&&(gt=1,ui(t,ne(e,t.current)))}function er(){var t=x.H;return x.H=ei,t===null?ei:t}function lr(){var t=x.A;return x.A=B0,t}function zc(){gt=4,el||(W&4194048)!==W&&fe.current!==null||(fa=!0),(ll&134217727)===0&&(Nl&134217727)===0||ft===null||il(ft,W,oe,!1)}function Tc(t,e,l){var a=et;et|=2;var n=er(),i=lr();(ft!==t||W!==e)&&(gi=null,da(t,e)),e=!1;var u=gt;t:do try{if(lt!==0&&V!==null){var c=V,f=It;switch(lt){case 8:Sc(),u=6;break t;case 3:case 2:case 9:case 6:fe.current===null&&(e=!0);var h=lt;if(lt=0,It=null,ga(t,c,f,h),l&&fa){u=0;break t}break;default:h=lt,lt=0,It=null,ga(t,c,f,h)}}C0(),u=gt;break}catch(b){tr(t,b)}while(!0);return e&&t.shellSuspendCounter++,Ne=El=null,et=a,x.H=n,x.A=i,V===null&&(ft=null,W=0,Yn()),u}function C0(){for(;V!==null;)ar(V)}function Q0(t,e){var l=et;et|=2;var a=er(),n=lr();ft!==t||W!==e?(gi=null,di=ye()+500,da(t,e)):fa=xa(t,e);t:do try{if(lt!==0&&V!==null){e=V;var i=It;e:switch(lt){case 1:lt=0,It=null,ga(t,e,i,1);break;case 2:case 9:if(mo(i)){lt=0,It=null,nr(e);break}e=function(){lt!==2&&lt!==9||ft!==t||(lt=7),Te(t)},i.then(e,e);break t;case 3:lt=7;break t;case 4:lt=5;break t;case 7:mo(i)?(lt=0,It=null,nr(e)):(lt=0,It=null,ga(t,e,i,7));break;case 5:var u=null;switch(V.tag){case 26:u=V.memoizedState;case 5:case 27:var c=V;if(!u||Xr(u)){lt=0,It=null;var f=c.sibling;if(f!==null)V=f;else{var h=c.return;h!==null?(V=h,mi(h)):V=null}break e}}lt=0,It=null,ga(t,e,i,5);break;case 6:lt=0,It=null,ga(t,e,i,6);break;case 8:Sc(),gt=6;break t;default:throw Error(m(462))}}Z0();break}catch(b){tr(t,b)}while(!0);return Ne=El=null,x.H=a,x.A=n,et=l,V!==null?0:(ft=null,W=0,Yn(),gt)}function Z0(){for(;V!==null&&!sd();)ar(V)}function ar(t){var e=_s(t.alternate,t,Xe);t.memoizedProps=t.pendingProps,e===null?mi(t):V=e}function nr(t){var e=t,l=e.alternate;switch(e.tag){case 15:case 0:e=js(l,e,e.pendingProps,e.type,void 0,W);break;case 11:e=js(l,e,e.pendingProps,e.type.render,e.ref,W);break;case 5:Gu(e);default:Us(l,e),e=V=no(e,Xe),e=_s(l,e,Xe)}t.memoizedProps=t.pendingProps,e===null?mi(t):V=e}function ga(t,e,l,a){Ne=El=null,Gu(e),na=null,Ja=0;var n=e.return;try{if(N0(t,n,e,l,W)){gt=1,ui(t,ne(l,t.current)),V=null;return}}catch(i){if(n!==null)throw V=n,i;gt=1,ui(t,ne(l,t.current)),V=null;return}e.flags&32768?(I||a===1?t=!0:fa||(W&536870912)!==0?t=!1:(el=t=!0,(a===2||a===9||a===3||a===6)&&(a=fe.current,a!==null&&a.tag===13&&(a.flags|=16384))),ir(e,t)):mi(e)}function mi(t){var e=t;do{if((e.flags&32768)!==0){ir(e,el);return}t=e.return;var l=R0(e.alternate,e,Xe);if(l!==null){V=l;return}if(e=e.sibling,e!==null){V=e;return}V=e=t}while(e!==null);gt===0&&(gt=5)}function ir(t,e){do{var l=H0(t.alternate,t);if(l!==null){l.flags&=32767,V=l;return}if(l=t.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!e&&(t=t.sibling,t!==null)){V=t;return}V=t=l}while(t!==null);gt=6,V=null}function ur(t,e,l,a,n,i,u,c,f){t.cancelPendingCommit=null;do vi();while(At!==0);if((et&6)!==0)throw Error(m(327));if(e!==null){if(e===t.current)throw Error(m(177));if(i=e.lanes|e.childLanes,i|=gu,xd(t,l,i,u,c,f),t===ft&&(V=ft=null,W=0),sa=e,nl=t,ra=l,yc=i,bc=n,$s=a,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,K0(Sn,function(){return rr(),null})):(t.callbackNode=null,t.callbackPriority=0),a=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||a){a=x.T,x.T=null,n=A.p,A.p=2,u=et,et|=4;try{q0(t,e,l)}finally{et=u,A.p=n,x.T=a}}At=1,cr(),fr(),or()}}function cr(){if(At===1){At=0;var t=nl,e=sa,l=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||l){l=x.T,x.T=null;var a=A.p;A.p=2;var n=et;et|=4;try{Ls(e,t);var i=qc,u=Jf(t.containerInfo),c=i.focusedElem,f=i.selectionRange;if(u!==c&&c&&c.ownerDocument&&kf(c.ownerDocument.documentElement,c)){if(f!==null&&fu(c)){var h=f.start,b=f.end;if(b===void 0&&(b=h),"selectionStart"in c)c.selectionStart=h,c.selectionEnd=Math.min(b,c.value.length);else{var z=c.ownerDocument||document,p=z&&z.defaultView||window;if(p.getSelection){var y=p.getSelection(),C=c.textContent.length,B=Math.min(f.start,C),it=f.end===void 0?B:Math.min(f.end,C);!y.extend&&B>it&&(u=it,it=B,B=u);var r=Kf(c,B),s=Kf(c,it);if(r&&s&&(y.rangeCount!==1||y.anchorNode!==r.node||y.anchorOffset!==r.offset||y.focusNode!==s.node||y.focusOffset!==s.offset)){var g=z.createRange();g.setStart(r.node,r.offset),y.removeAllRanges(),B>it?(y.addRange(g),y.extend(s.node,s.offset)):(g.setEnd(s.node,s.offset),y.addRange(g))}}}}for(z=[],y=c;y=y.parentNode;)y.nodeType===1&&z.push({element:y,left:y.scrollLeft,top:y.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<z.length;c++){var S=z[c];S.element.scrollLeft=S.left,S.element.scrollTop=S.top}}Mi=!!Hc,qc=Hc=null}finally{et=n,A.p=a,x.T=l}}t.current=e,At=2}}function fr(){if(At===2){At=0;var t=nl,e=sa,l=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||l){l=x.T,x.T=null;var a=A.p;A.p=2;var n=et;et|=4;try{Xs(t,e.alternate,e)}finally{et=n,A.p=a,x.T=l}}At=3}}function or(){if(At===4||At===3){At=0,rd();var t=nl,e=sa,l=ra,a=$s;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?At=5:(At=0,sa=nl=null,sr(t,t.pendingLanes));var n=t.pendingLanes;if(n===0&&(al=null),Qi(l),e=e.stateNode,kt&&typeof kt.onCommitFiberRoot=="function")try{kt.onCommitFiberRoot(ba,e,void 0,(e.current.flags&128)===128)}catch{}if(a!==null){e=x.T,n=A.p,A.p=2,x.T=null;try{for(var i=t.onRecoverableError,u=0;u<a.length;u++){var c=a[u];i(c.value,{componentStack:c.stack})}}finally{x.T=e,A.p=n}}(ra&3)!==0&&vi(),Te(t),n=t.pendingLanes,(l&4194090)!==0&&(n&42)!==0?t===xc?an++:(an=0,xc=t):an=0,nn(0)}}function sr(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,Ba(e)))}function vi(t){return cr(),fr(),or(),rr()}function rr(){if(At!==5)return!1;var t=nl,e=yc;yc=0;var l=Qi(ra),a=x.T,n=A.p;try{A.p=32>l?32:l,x.T=null,l=bc,bc=null;var i=nl,u=ra;if(At=0,sa=nl=null,ra=0,(et&6)!==0)throw Error(m(331));var c=et;if(et|=4,Js(i.current),Vs(i,i.current,u,l),et=c,nn(0,!1),kt&&typeof kt.onPostCommitFiberRoot=="function")try{kt.onPostCommitFiberRoot(ba,i)}catch{}return!0}finally{A.p=n,x.T=a,sr(t,e)}}function dr(t,e,l){e=ne(l,e),e=Pu(t.stateNode,e,2),t=Je(t,e,2),t!==null&&(Sa(t,2),Te(t))}function ct(t,e,l){if(t.tag===3)dr(t,t,l);else for(;e!==null;){if(e.tag===3){dr(e,t,l);break}else if(e.tag===1){var a=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(al===null||!al.has(a))){t=ne(l,t),l=vs(2),a=Je(e,l,2),a!==null&&(ps(l,a,e,t),Sa(a,2),Te(a));break}}e=e.return}}function jc(t,e,l){var a=t.pingCache;if(a===null){a=t.pingCache=new G0;var n=new Set;a.set(e,n)}else n=a.get(e),n===void 0&&(n=new Set,a.set(e,n));n.has(l)||(hc=!0,n.add(l),t=L0.bind(null,t,e,l),e.then(t,t))}function L0(t,e,l){var a=t.pingCache;a!==null&&a.delete(e),t.pingedLanes|=t.suspendedLanes&l,t.warmLanes&=~l,ft===t&&(W&l)===l&&(gt===4||gt===3&&(W&62914560)===W&&300>ye()-pc?(et&2)===0&&da(t,0):mc|=l,oa===W&&(oa=0)),Te(t)}function gr(t,e){e===0&&(e=ff()),t=Jl(t,e),t!==null&&(Sa(t,e),Te(t))}function w0(t){var e=t.memoizedState,l=0;e!==null&&(l=e.retryLane),gr(t,l)}function V0(t,e){var l=0;switch(t.tag){case 13:var a=t.stateNode,n=t.memoizedState;n!==null&&(l=n.retryLane);break;case 19:a=t.stateNode;break;case 22:a=t.stateNode._retryCache;break;default:throw Error(m(314))}a!==null&&a.delete(e),gr(t,l)}function K0(t,e){return Bi(t,e)}var pi=null,ha=null,Ec=!1,yi=!1,Ac=!1,Ul=0;function Te(t){t!==ha&&t.next===null&&(ha===null?pi=ha=t:ha=ha.next=t),yi=!0,Ec||(Ec=!0,J0())}function nn(t,e){if(!Ac&&yi){Ac=!0;do for(var l=!1,a=pi;a!==null;){if(t!==0){var n=a.pendingLanes;if(n===0)var i=0;else{var u=a.suspendedLanes,c=a.pingedLanes;i=(1<<31-Jt(42|t)+1)-1,i&=n&~(u&~c),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(l=!0,pr(a,i))}else i=W,i=jn(a,a===ft?i:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(i&3)===0||xa(a,i)||(l=!0,pr(a,i));a=a.next}while(l);Ac=!1}}function k0(){hr()}function hr(){yi=Ec=!1;var t=0;Ul!==0&&(lg()&&(t=Ul),Ul=0);for(var e=ye(),l=null,a=pi;a!==null;){var n=a.next,i=mr(a,e);i===0?(a.next=null,l===null?pi=n:l.next=n,n===null&&(ha=l)):(l=a,(t!==0||(i&3)!==0)&&(yi=!0)),a=n}nn(t)}function mr(t,e){for(var l=t.suspendedLanes,a=t.pingedLanes,n=t.expirationTimes,i=t.pendingLanes&-62914561;0<i;){var u=31-Jt(i),c=1<<u,f=n[u];f===-1?((c&l)===0||(c&a)!==0)&&(n[u]=bd(c,e)):f<=e&&(t.expiredLanes|=c),i&=~c}if(e=ft,l=W,l=jn(t,t===e?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a=t.callbackNode,l===0||t===e&&(lt===2||lt===9)||t.cancelPendingCommit!==null)return a!==null&&a!==null&&Gi(a),t.callbackNode=null,t.callbackPriority=0;if((l&3)===0||xa(t,l)){if(e=l&-l,e===t.callbackPriority)return e;switch(a!==null&&Gi(a),Qi(l)){case 2:case 8:l=nf;break;case 32:l=Sn;break;case 268435456:l=uf;break;default:l=Sn}return a=vr.bind(null,t),l=Bi(l,a),t.callbackPriority=e,t.callbackNode=l,e}return a!==null&&a!==null&&Gi(a),t.callbackPriority=2,t.callbackNode=null,2}function vr(t,e){if(At!==0&&At!==5)return t.callbackNode=null,t.callbackPriority=0,null;var l=t.callbackNode;if(vi()&&t.callbackNode!==l)return null;var a=W;return a=jn(t,t===ft?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a===0?null:(Ps(t,a,e),mr(t,ye()),t.callbackNode!=null&&t.callbackNode===l?vr.bind(null,t):null)}function pr(t,e){if(vi())return null;Ps(t,e,!0)}function J0(){ng(function(){(et&6)!==0?Bi(af,k0):hr()})}function Oc(){return Ul===0&&(Ul=cf()),Ul}function yr(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Dn(""+t)}function br(t,e){var l=e.ownerDocument.createElement("input");return l.name=e.name,l.value=e.value,t.id&&l.setAttribute("form",t.id),e.parentNode.insertBefore(l,e),t=new FormData(t),l.parentNode.removeChild(l),t}function W0(t,e,l,a,n){if(e==="submit"&&l&&l.stateNode===n){var i=yr((n[Gt]||null).action),u=a.submitter;u&&(e=(e=u[Gt]||null)?yr(e.formAction):u.getAttribute("formAction"),e!==null&&(i=e,u=null));var c=new Rn("action","action",null,a,n);t.push({event:c,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(Ul!==0){var f=u?br(n,u):new FormData(n);ku(l,{pending:!0,data:f,method:n.method,action:i},null,f)}}else typeof i=="function"&&(c.preventDefault(),f=u?br(n,u):new FormData(n),ku(l,{pending:!0,data:f,method:n.method,action:i},i,f))},currentTarget:n}]})}}for(var Mc=0;Mc<du.length;Mc++){var Dc=du[Mc],$0=Dc.toLowerCase(),F0=Dc[0].toUpperCase()+Dc.slice(1);ge($0,"on"+F0)}ge(Ff,"onAnimationEnd"),ge(Pf,"onAnimationIteration"),ge(If,"onAnimationStart"),ge("dblclick","onDoubleClick"),ge("focusin","onFocus"),ge("focusout","onBlur"),ge(h0,"onTransitionRun"),ge(m0,"onTransitionStart"),ge(v0,"onTransitionCancel"),ge(to,"onTransitionEnd"),Gl("onMouseEnter",["mouseout","mouseover"]),Gl("onMouseLeave",["mouseout","mouseover"]),Gl("onPointerEnter",["pointerout","pointerover"]),Gl("onPointerLeave",["pointerout","pointerover"]),vl("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),vl("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),vl("onBeforeInput",["compositionend","keypress","textInput","paste"]),vl("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),vl("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),vl("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var un="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),P0=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(un));function xr(t,e){e=(e&4)!==0;for(var l=0;l<t.length;l++){var a=t[l],n=a.event;a=a.listeners;t:{var i=void 0;if(e)for(var u=a.length-1;0<=u;u--){var c=a[u],f=c.instance,h=c.currentTarget;if(c=c.listener,f!==i&&n.isPropagationStopped())break t;i=c,n.currentTarget=h;try{i(n)}catch(b){ii(b)}n.currentTarget=null,i=f}else for(u=0;u<a.length;u++){if(c=a[u],f=c.instance,h=c.currentTarget,c=c.listener,f!==i&&n.isPropagationStopped())break t;i=c,n.currentTarget=h;try{i(n)}catch(b){ii(b)}n.currentTarget=null,i=f}}}}function K(t,e){var l=e[Zi];l===void 0&&(l=e[Zi]=new Set);var a=t+"__bubble";l.has(a)||(Sr(e,t,2,!1),l.add(a))}function _c(t,e,l){var a=0;e&&(a|=4),Sr(l,t,a,e)}var bi="_reactListening"+Math.random().toString(36).slice(2);function Nc(t){if(!t[bi]){t[bi]=!0,gf.forEach(function(l){l!=="selectionchange"&&(P0.has(l)||_c(l,!1,t),_c(l,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[bi]||(e[bi]=!0,_c("selectionchange",!1,e))}}function Sr(t,e,l,a){switch(Vr(e)){case 2:var n=Eg;break;case 8:n=Ag;break;default:n=Vc}l=n.bind(null,e,l,t),n=void 0,!Ii||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(n=!0),a?n!==void 0?t.addEventListener(e,l,{capture:!0,passive:n}):t.addEventListener(e,l,!0):n!==void 0?t.addEventListener(e,l,{passive:n}):t.addEventListener(e,l,!1)}function Uc(t,e,l,a,n){var i=a;if((e&1)===0&&(e&2)===0&&a!==null)t:for(;;){if(a===null)return;var u=a.tag;if(u===3||u===4){var c=a.stateNode.containerInfo;if(c===n)break;if(u===4)for(u=a.return;u!==null;){var f=u.tag;if((f===3||f===4)&&u.stateNode.containerInfo===n)return;u=u.return}for(;c!==null;){if(u=ql(c),u===null)return;if(f=u.tag,f===5||f===6||f===26||f===27){a=i=u;continue t}c=c.parentNode}}a=a.return}Of(function(){var h=i,b=Fi(l),z=[];t:{var p=eo.get(t);if(p!==void 0){var y=Rn,C=t;switch(t){case"keypress":if(Nn(l)===0)break t;case"keydown":case"keyup":y=Kd;break;case"focusin":C="focus",y=au;break;case"focusout":C="blur",y=au;break;case"beforeblur":case"afterblur":y=au;break;case"click":if(l.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=_f;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Hd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Wd;break;case Ff:case Pf:case If:y=Bd;break;case to:y=Fd;break;case"scroll":case"scrollend":y=Ud;break;case"wheel":y=Id;break;case"copy":case"cut":case"paste":y=Xd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Uf;break;case"toggle":case"beforetoggle":y=e0}var B=(e&4)!==0,it=!B&&(t==="scroll"||t==="scrollend"),r=B?p!==null?p+"Capture":null:p;B=[];for(var s=h,g;s!==null;){var S=s;if(g=S.stateNode,S=S.tag,S!==5&&S!==26&&S!==27||g===null||r===null||(S=ja(s,r),S!=null&&B.push(cn(s,S,g))),it)break;s=s.return}0<B.length&&(p=new y(p,C,null,l,b),z.push({event:p,listeners:B}))}}if((e&7)===0){t:{if(p=t==="mouseover"||t==="pointerover",y=t==="mouseout"||t==="pointerout",p&&l!==$i&&(C=l.relatedTarget||l.fromElement)&&(ql(C)||C[Hl]))break t;if((y||p)&&(p=b.window===b?b:(p=b.ownerDocument)?p.defaultView||p.parentWindow:window,y?(C=l.relatedTarget||l.toElement,y=h,C=C?ql(C):null,C!==null&&(it=D(C),B=C.tag,C!==it||B!==5&&B!==27&&B!==6)&&(C=null)):(y=null,C=h),y!==C)){if(B=_f,S="onMouseLeave",r="onMouseEnter",s="mouse",(t==="pointerout"||t==="pointerover")&&(B=Uf,S="onPointerLeave",r="onPointerEnter",s="pointer"),it=y==null?p:Ta(y),g=C==null?p:Ta(C),p=new B(S,s+"leave",y,l,b),p.target=it,p.relatedTarget=g,S=null,ql(b)===h&&(B=new B(r,s+"enter",C,l,b),B.target=g,B.relatedTarget=it,S=B),it=S,y&&C)e:{for(B=y,r=C,s=0,g=B;g;g=ma(g))s++;for(g=0,S=r;S;S=ma(S))g++;for(;0<s-g;)B=ma(B),s--;for(;0<g-s;)r=ma(r),g--;for(;s--;){if(B===r||r!==null&&B===r.alternate)break e;B=ma(B),r=ma(r)}B=null}else B=null;y!==null&&zr(z,p,y,B,!1),C!==null&&it!==null&&zr(z,it,C,B,!0)}}t:{if(p=h?Ta(h):window,y=p.nodeName&&p.nodeName.toLowerCase(),y==="select"||y==="input"&&p.type==="file")var M=Cf;else if(Gf(p))if(Qf)M=r0;else{M=o0;var w=f0}else y=p.nodeName,!y||y.toLowerCase()!=="input"||p.type!=="checkbox"&&p.type!=="radio"?h&&Wi(h.elementType)&&(M=Cf):M=s0;if(M&&(M=M(t,h))){Xf(z,M,l,b);break t}w&&w(t,p,h),t==="focusout"&&h&&p.type==="number"&&h.memoizedProps.value!=null&&Ji(p,"number",p.value)}switch(w=h?Ta(h):window,t){case"focusin":(Gf(w)||w.contentEditable==="true")&&(Vl=w,ou=h,Ua=null);break;case"focusout":Ua=ou=Vl=null;break;case"mousedown":su=!0;break;case"contextmenu":case"mouseup":case"dragend":su=!1,Wf(z,l,b);break;case"selectionchange":if(g0)break;case"keydown":case"keyup":Wf(z,l,b)}var N;if(iu)t:{switch(t){case"compositionstart":var G="onCompositionStart";break t;case"compositionend":G="onCompositionEnd";break t;case"compositionupdate":G="onCompositionUpdate";break t}G=void 0}else wl?Yf(t,l)&&(G="onCompositionEnd"):t==="keydown"&&l.keyCode===229&&(G="onCompositionStart");G&&(Rf&&l.locale!=="ko"&&(wl||G!=="onCompositionStart"?G==="onCompositionEnd"&&wl&&(N=Mf()):(we=b,tu="value"in we?we.value:we.textContent,wl=!0)),w=xi(h,G),0<w.length&&(G=new Nf(G,t,null,l,b),z.push({event:G,listeners:w}),N?G.data=N:(N=Bf(l),N!==null&&(G.data=N)))),(N=a0?n0(t,l):i0(t,l))&&(G=xi(h,"onBeforeInput"),0<G.length&&(w=new Nf("onBeforeInput","beforeinput",null,l,b),z.push({event:w,listeners:G}),w.data=N)),W0(z,t,h,l,b)}xr(z,e)})}function cn(t,e,l){return{instance:t,listener:e,currentTarget:l}}function xi(t,e){for(var l=e+"Capture",a=[];t!==null;){var n=t,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=ja(t,l),n!=null&&a.unshift(cn(t,n,i)),n=ja(t,e),n!=null&&a.push(cn(t,n,i))),t.tag===3)return a;t=t.return}return[]}function ma(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function zr(t,e,l,a,n){for(var i=e._reactName,u=[];l!==null&&l!==a;){var c=l,f=c.alternate,h=c.stateNode;if(c=c.tag,f!==null&&f===a)break;c!==5&&c!==26&&c!==27||h===null||(f=h,n?(h=ja(l,i),h!=null&&u.unshift(cn(l,h,f))):n||(h=ja(l,i),h!=null&&u.push(cn(l,h,f)))),l=l.return}u.length!==0&&t.push({event:e,listeners:u})}var I0=/\r\n?/g,tg=/\u0000|\uFFFD/g;function Tr(t){return(typeof t=="string"?t:""+t).replace(I0,`
`).replace(tg,"")}function jr(t,e){return e=Tr(e),Tr(t)===e}function Si(){}function nt(t,e,l,a,n,i){switch(l){case"children":typeof a=="string"?e==="body"||e==="textarea"&&a===""||Ql(t,a):(typeof a=="number"||typeof a=="bigint")&&e!=="body"&&Ql(t,""+a);break;case"className":An(t,"class",a);break;case"tabIndex":An(t,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":An(t,l,a);break;case"style":Ef(t,a,i);break;case"data":if(e!=="object"){An(t,"data",a);break}case"src":case"href":if(a===""&&(e!=="a"||l!=="href")){t.removeAttribute(l);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(l);break}a=Dn(""+a),t.setAttribute(l,a);break;case"action":case"formAction":if(typeof a=="function"){t.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(l==="formAction"?(e!=="input"&&nt(t,e,"name",n.name,n,null),nt(t,e,"formEncType",n.formEncType,n,null),nt(t,e,"formMethod",n.formMethod,n,null),nt(t,e,"formTarget",n.formTarget,n,null)):(nt(t,e,"encType",n.encType,n,null),nt(t,e,"method",n.method,n,null),nt(t,e,"target",n.target,n,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(l);break}a=Dn(""+a),t.setAttribute(l,a);break;case"onClick":a!=null&&(t.onclick=Si);break;case"onScroll":a!=null&&K("scroll",t);break;case"onScrollEnd":a!=null&&K("scrollend",t);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(m(61));if(l=a.__html,l!=null){if(n.children!=null)throw Error(m(60));t.innerHTML=l}}break;case"multiple":t.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":t.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){t.removeAttribute("xlink:href");break}l=Dn(""+a),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,""+a):t.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,""):t.removeAttribute(l);break;case"capture":case"download":a===!0?t.setAttribute(l,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,a):t.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?t.setAttribute(l,a):t.removeAttribute(l);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?t.removeAttribute(l):t.setAttribute(l,a);break;case"popover":K("beforetoggle",t),K("toggle",t),En(t,"popover",a);break;case"xlinkActuate":Ae(t,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":Ae(t,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":Ae(t,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":Ae(t,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":Ae(t,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":Ae(t,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":Ae(t,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":Ae(t,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":Ae(t,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":En(t,"is",a);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=_d.get(l)||l,En(t,l,a))}}function Rc(t,e,l,a,n,i){switch(l){case"style":Ef(t,a,i);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(m(61));if(l=a.__html,l!=null){if(n.children!=null)throw Error(m(60));t.innerHTML=l}}break;case"children":typeof a=="string"?Ql(t,a):(typeof a=="number"||typeof a=="bigint")&&Ql(t,""+a);break;case"onScroll":a!=null&&K("scroll",t);break;case"onScrollEnd":a!=null&&K("scrollend",t);break;case"onClick":a!=null&&(t.onclick=Si);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!hf.hasOwnProperty(l))t:{if(l[0]==="o"&&l[1]==="n"&&(n=l.endsWith("Capture"),e=l.slice(2,n?l.length-7:void 0),i=t[Gt]||null,i=i!=null?i[l]:null,typeof i=="function"&&t.removeEventListener(e,i,n),typeof a=="function")){typeof i!="function"&&i!==null&&(l in t?t[l]=null:t.hasAttribute(l)&&t.removeAttribute(l)),t.addEventListener(e,a,n);break t}l in t?t[l]=a:a===!0?t.setAttribute(l,""):En(t,l,a)}}}function Ot(t,e,l){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":K("error",t),K("load",t);var a=!1,n=!1,i;for(i in l)if(l.hasOwnProperty(i)){var u=l[i];if(u!=null)switch(i){case"src":a=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(m(137,e));default:nt(t,e,i,u,l,null)}}n&&nt(t,e,"srcSet",l.srcSet,l,null),a&&nt(t,e,"src",l.src,l,null);return;case"input":K("invalid",t);var c=i=u=n=null,f=null,h=null;for(a in l)if(l.hasOwnProperty(a)){var b=l[a];if(b!=null)switch(a){case"name":n=b;break;case"type":u=b;break;case"checked":f=b;break;case"defaultChecked":h=b;break;case"value":i=b;break;case"defaultValue":c=b;break;case"children":case"dangerouslySetInnerHTML":if(b!=null)throw Error(m(137,e));break;default:nt(t,e,a,b,l,null)}}Sf(t,i,c,f,h,u,n,!1),On(t);return;case"select":K("invalid",t),a=u=i=null;for(n in l)if(l.hasOwnProperty(n)&&(c=l[n],c!=null))switch(n){case"value":i=c;break;case"defaultValue":u=c;break;case"multiple":a=c;default:nt(t,e,n,c,l,null)}e=i,l=u,t.multiple=!!a,e!=null?Cl(t,!!a,e,!1):l!=null&&Cl(t,!!a,l,!0);return;case"textarea":K("invalid",t),i=n=a=null;for(u in l)if(l.hasOwnProperty(u)&&(c=l[u],c!=null))switch(u){case"value":a=c;break;case"defaultValue":n=c;break;case"children":i=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(m(91));break;default:nt(t,e,u,c,l,null)}Tf(t,a,n,i),On(t);return;case"option":for(f in l)if(l.hasOwnProperty(f)&&(a=l[f],a!=null))switch(f){case"selected":t.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:nt(t,e,f,a,l,null)}return;case"dialog":K("beforetoggle",t),K("toggle",t),K("cancel",t),K("close",t);break;case"iframe":case"object":K("load",t);break;case"video":case"audio":for(a=0;a<un.length;a++)K(un[a],t);break;case"image":K("error",t),K("load",t);break;case"details":K("toggle",t);break;case"embed":case"source":case"link":K("error",t),K("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(h in l)if(l.hasOwnProperty(h)&&(a=l[h],a!=null))switch(h){case"children":case"dangerouslySetInnerHTML":throw Error(m(137,e));default:nt(t,e,h,a,l,null)}return;default:if(Wi(e)){for(b in l)l.hasOwnProperty(b)&&(a=l[b],a!==void 0&&Rc(t,e,b,a,l,void 0));return}}for(c in l)l.hasOwnProperty(c)&&(a=l[c],a!=null&&nt(t,e,c,a,l,null))}function eg(t,e,l,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,u=null,c=null,f=null,h=null,b=null;for(y in l){var z=l[y];if(l.hasOwnProperty(y)&&z!=null)switch(y){case"checked":break;case"value":break;case"defaultValue":f=z;default:a.hasOwnProperty(y)||nt(t,e,y,null,a,z)}}for(var p in a){var y=a[p];if(z=l[p],a.hasOwnProperty(p)&&(y!=null||z!=null))switch(p){case"type":i=y;break;case"name":n=y;break;case"checked":h=y;break;case"defaultChecked":b=y;break;case"value":u=y;break;case"defaultValue":c=y;break;case"children":case"dangerouslySetInnerHTML":if(y!=null)throw Error(m(137,e));break;default:y!==z&&nt(t,e,p,y,a,z)}}ki(t,u,c,f,h,b,i,n);return;case"select":y=u=c=p=null;for(i in l)if(f=l[i],l.hasOwnProperty(i)&&f!=null)switch(i){case"value":break;case"multiple":y=f;default:a.hasOwnProperty(i)||nt(t,e,i,null,a,f)}for(n in a)if(i=a[n],f=l[n],a.hasOwnProperty(n)&&(i!=null||f!=null))switch(n){case"value":p=i;break;case"defaultValue":c=i;break;case"multiple":u=i;default:i!==f&&nt(t,e,n,i,a,f)}e=c,l=u,a=y,p!=null?Cl(t,!!l,p,!1):!!a!=!!l&&(e!=null?Cl(t,!!l,e,!0):Cl(t,!!l,l?[]:"",!1));return;case"textarea":y=p=null;for(c in l)if(n=l[c],l.hasOwnProperty(c)&&n!=null&&!a.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:nt(t,e,c,null,a,n)}for(u in a)if(n=a[u],i=l[u],a.hasOwnProperty(u)&&(n!=null||i!=null))switch(u){case"value":p=n;break;case"defaultValue":y=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(m(91));break;default:n!==i&&nt(t,e,u,n,a,i)}zf(t,p,y);return;case"option":for(var C in l)if(p=l[C],l.hasOwnProperty(C)&&p!=null&&!a.hasOwnProperty(C))switch(C){case"selected":t.selected=!1;break;default:nt(t,e,C,null,a,p)}for(f in a)if(p=a[f],y=l[f],a.hasOwnProperty(f)&&p!==y&&(p!=null||y!=null))switch(f){case"selected":t.selected=p&&typeof p!="function"&&typeof p!="symbol";break;default:nt(t,e,f,p,a,y)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var B in l)p=l[B],l.hasOwnProperty(B)&&p!=null&&!a.hasOwnProperty(B)&&nt(t,e,B,null,a,p);for(h in a)if(p=a[h],y=l[h],a.hasOwnProperty(h)&&p!==y&&(p!=null||y!=null))switch(h){case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(m(137,e));break;default:nt(t,e,h,p,a,y)}return;default:if(Wi(e)){for(var it in l)p=l[it],l.hasOwnProperty(it)&&p!==void 0&&!a.hasOwnProperty(it)&&Rc(t,e,it,void 0,a,p);for(b in a)p=a[b],y=l[b],!a.hasOwnProperty(b)||p===y||p===void 0&&y===void 0||Rc(t,e,b,p,a,y);return}}for(var r in l)p=l[r],l.hasOwnProperty(r)&&p!=null&&!a.hasOwnProperty(r)&&nt(t,e,r,null,a,p);for(z in a)p=a[z],y=l[z],!a.hasOwnProperty(z)||p===y||p==null&&y==null||nt(t,e,z,p,a,y)}var Hc=null,qc=null;function zi(t){return t.nodeType===9?t:t.ownerDocument}function Er(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Ar(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function Yc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Bc=null;function lg(){var t=window.event;return t&&t.type==="popstate"?t===Bc?!1:(Bc=t,!0):(Bc=null,!1)}var Or=typeof setTimeout=="function"?setTimeout:void 0,ag=typeof clearTimeout=="function"?clearTimeout:void 0,Mr=typeof Promise=="function"?Promise:void 0,ng=typeof queueMicrotask=="function"?queueMicrotask:typeof Mr<"u"?function(t){return Mr.resolve(null).then(t).catch(ig)}:Or;function ig(t){setTimeout(function(){throw t})}function ul(t){return t==="head"}function Dr(t,e){var l=e,a=0,n=0;do{var i=l.nextSibling;if(t.removeChild(l),i&&i.nodeType===8)if(l=i.data,l==="/$"){if(0<a&&8>a){l=a;var u=t.ownerDocument;if(l&1&&fn(u.documentElement),l&2&&fn(u.body),l&4)for(l=u.head,fn(l),u=l.firstChild;u;){var c=u.nextSibling,f=u.nodeName;u[za]||f==="SCRIPT"||f==="STYLE"||f==="LINK"&&u.rel.toLowerCase()==="stylesheet"||l.removeChild(u),u=c}}if(n===0){t.removeChild(i),vn(e);return}n--}else l==="$"||l==="$?"||l==="$!"?n++:a=l.charCodeAt(0)-48;else a=0;l=i}while(l);vn(e)}function Gc(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var l=e;switch(e=e.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":Gc(l),Li(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}t.removeChild(l)}}function ug(t,e,l,a){for(;t.nodeType===1;){var n=l;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!a&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(a){if(!t[za])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(i=t.getAttribute("rel"),i==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(i!==n.rel||t.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||t.getAttribute("title")!==(n.title==null?null:n.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(i=t.getAttribute("src"),(i!==(n.src==null?null:n.src)||t.getAttribute("type")!==(n.type==null?null:n.type)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&t.getAttribute("name")===i)return t}else return t;if(t=me(t.nextSibling),t===null)break}return null}function cg(t,e,l){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!l||(t=me(t.nextSibling),t===null))return null;return t}function Xc(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function fg(t,e){var l=t.ownerDocument;if(t.data!=="$?"||l.readyState==="complete")e();else{var a=function(){e(),l.removeEventListener("DOMContentLoaded",a)};l.addEventListener("DOMContentLoaded",a),t._reactRetry=a}}function me(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="F!"||e==="F")break;if(e==="/$")return null}}return t}var Cc=null;function _r(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var l=t.data;if(l==="$"||l==="$!"||l==="$?"){if(e===0)return t;e--}else l==="/$"&&e++}t=t.previousSibling}return null}function Nr(t,e,l){switch(e=zi(l),t){case"html":if(t=e.documentElement,!t)throw Error(m(452));return t;case"head":if(t=e.head,!t)throw Error(m(453));return t;case"body":if(t=e.body,!t)throw Error(m(454));return t;default:throw Error(m(451))}}function fn(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);Li(t)}var se=new Map,Ur=new Set;function Ti(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Ce=A.d;A.d={f:og,r:sg,D:rg,C:dg,L:gg,m:hg,X:vg,S:mg,M:pg};function og(){var t=Ce.f(),e=hi();return t||e}function sg(t){var e=Yl(t);e!==null&&e.tag===5&&e.type==="form"?Po(e):Ce.r(t)}var va=typeof document>"u"?null:document;function Rr(t,e,l){var a=va;if(a&&typeof e=="string"&&e){var n=ae(e);n='link[rel="'+t+'"][href="'+n+'"]',typeof l=="string"&&(n+='[crossorigin="'+l+'"]'),Ur.has(n)||(Ur.add(n),t={rel:t,crossOrigin:l,href:e},a.querySelector(n)===null&&(e=a.createElement("link"),Ot(e,"link",t),St(e),a.head.appendChild(e)))}}function rg(t){Ce.D(t),Rr("dns-prefetch",t,null)}function dg(t,e){Ce.C(t,e),Rr("preconnect",t,e)}function gg(t,e,l){Ce.L(t,e,l);var a=va;if(a&&t&&e){var n='link[rel="preload"][as="'+ae(e)+'"]';e==="image"&&l&&l.imageSrcSet?(n+='[imagesrcset="'+ae(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(n+='[imagesizes="'+ae(l.imageSizes)+'"]')):n+='[href="'+ae(t)+'"]';var i=n;switch(e){case"style":i=pa(t);break;case"script":i=ya(t)}se.has(i)||(t=U({rel:"preload",href:e==="image"&&l&&l.imageSrcSet?void 0:t,as:e},l),se.set(i,t),a.querySelector(n)!==null||e==="style"&&a.querySelector(on(i))||e==="script"&&a.querySelector(sn(i))||(e=a.createElement("link"),Ot(e,"link",t),St(e),a.head.appendChild(e)))}}function hg(t,e){Ce.m(t,e);var l=va;if(l&&t){var a=e&&typeof e.as=="string"?e.as:"script",n='link[rel="modulepreload"][as="'+ae(a)+'"][href="'+ae(t)+'"]',i=n;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=ya(t)}if(!se.has(i)&&(t=U({rel:"modulepreload",href:t},e),se.set(i,t),l.querySelector(n)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(sn(i)))return}a=l.createElement("link"),Ot(a,"link",t),St(a),l.head.appendChild(a)}}}function mg(t,e,l){Ce.S(t,e,l);var a=va;if(a&&t){var n=Bl(a).hoistableStyles,i=pa(t);e=e||"default";var u=n.get(i);if(!u){var c={loading:0,preload:null};if(u=a.querySelector(on(i)))c.loading=5;else{t=U({rel:"stylesheet",href:t,"data-precedence":e},l),(l=se.get(i))&&Qc(t,l);var f=u=a.createElement("link");St(f),Ot(f,"link",t),f._p=new Promise(function(h,b){f.onload=h,f.onerror=b}),f.addEventListener("load",function(){c.loading|=1}),f.addEventListener("error",function(){c.loading|=2}),c.loading|=4,ji(u,e,a)}u={type:"stylesheet",instance:u,count:1,state:c},n.set(i,u)}}}function vg(t,e){Ce.X(t,e);var l=va;if(l&&t){var a=Bl(l).hoistableScripts,n=ya(t),i=a.get(n);i||(i=l.querySelector(sn(n)),i||(t=U({src:t,async:!0},e),(e=se.get(n))&&Zc(t,e),i=l.createElement("script"),St(i),Ot(i,"link",t),l.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(n,i))}}function pg(t,e){Ce.M(t,e);var l=va;if(l&&t){var a=Bl(l).hoistableScripts,n=ya(t),i=a.get(n);i||(i=l.querySelector(sn(n)),i||(t=U({src:t,async:!0,type:"module"},e),(e=se.get(n))&&Zc(t,e),i=l.createElement("script"),St(i),Ot(i,"link",t),l.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(n,i))}}function Hr(t,e,l,a){var n=(n=Q.current)?Ti(n):null;if(!n)throw Error(m(446));switch(t){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(e=pa(l.href),l=Bl(n).hoistableStyles,a=l.get(e),a||(a={type:"style",instance:null,count:0,state:null},l.set(e,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){t=pa(l.href);var i=Bl(n).hoistableStyles,u=i.get(t);if(u||(n=n.ownerDocument||n,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(t,u),(i=n.querySelector(on(t)))&&!i._p&&(u.instance=i,u.state.loading=5),se.has(t)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},se.set(t,l),i||yg(n,t,l,u.state))),e&&a===null)throw Error(m(528,""));return u}if(e&&a!==null)throw Error(m(529,""));return null;case"script":return e=l.async,l=l.src,typeof l=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=ya(l),l=Bl(n).hoistableScripts,a=l.get(e),a||(a={type:"script",instance:null,count:0,state:null},l.set(e,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(m(444,t))}}function pa(t){return'href="'+ae(t)+'"'}function on(t){return'link[rel="stylesheet"]['+t+"]"}function qr(t){return U({},t,{"data-precedence":t.precedence,precedence:null})}function yg(t,e,l,a){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?a.loading=1:(e=t.createElement("link"),a.preload=e,e.addEventListener("load",function(){return a.loading|=1}),e.addEventListener("error",function(){return a.loading|=2}),Ot(e,"link",l),St(e),t.head.appendChild(e))}function ya(t){return'[src="'+ae(t)+'"]'}function sn(t){return"script[async]"+t}function Yr(t,e,l){if(e.count++,e.instance===null)switch(e.type){case"style":var a=t.querySelector('style[data-href~="'+ae(l.href)+'"]');if(a)return e.instance=a,St(a),a;var n=U({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return a=(t.ownerDocument||t).createElement("style"),St(a),Ot(a,"style",n),ji(a,l.precedence,t),e.instance=a;case"stylesheet":n=pa(l.href);var i=t.querySelector(on(n));if(i)return e.state.loading|=4,e.instance=i,St(i),i;a=qr(l),(n=se.get(n))&&Qc(a,n),i=(t.ownerDocument||t).createElement("link"),St(i);var u=i;return u._p=new Promise(function(c,f){u.onload=c,u.onerror=f}),Ot(i,"link",a),e.state.loading|=4,ji(i,l.precedence,t),e.instance=i;case"script":return i=ya(l.src),(n=t.querySelector(sn(i)))?(e.instance=n,St(n),n):(a=l,(n=se.get(i))&&(a=U({},l),Zc(a,n)),t=t.ownerDocument||t,n=t.createElement("script"),St(n),Ot(n,"link",a),t.head.appendChild(n),e.instance=n);case"void":return null;default:throw Error(m(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(a=e.instance,e.state.loading|=4,ji(a,l.precedence,t));return e.instance}function ji(t,e,l){for(var a=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=a.length?a[a.length-1]:null,i=n,u=0;u<a.length;u++){var c=a[u];if(c.dataset.precedence===e)i=c;else if(i!==n)break}i?i.parentNode.insertBefore(t,i.nextSibling):(e=l.nodeType===9?l.head:l,e.insertBefore(t,e.firstChild))}function Qc(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function Zc(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Ei=null;function Br(t,e,l){if(Ei===null){var a=new Map,n=Ei=new Map;n.set(l,a)}else n=Ei,a=n.get(l),a||(a=new Map,n.set(l,a));if(a.has(t))return a;for(a.set(t,null),l=l.getElementsByTagName(t),n=0;n<l.length;n++){var i=l[n];if(!(i[za]||i[Nt]||t==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var u=i.getAttribute(e)||"";u=t+u;var c=a.get(u);c?c.push(i):a.set(u,[i])}}return a}function Gr(t,e,l){t=t.ownerDocument||t,t.head.insertBefore(l,e==="title"?t.querySelector("head > title"):null)}function bg(t,e,l){if(l===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function Xr(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var rn=null;function xg(){}function Sg(t,e,l){if(rn===null)throw Error(m(475));var a=rn;if(e.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(e.state.loading&4)===0){if(e.instance===null){var n=pa(l.href),i=t.querySelector(on(n));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(a.count++,a=Ai.bind(a),t.then(a,a)),e.state.loading|=4,e.instance=i,St(i);return}i=t.ownerDocument||t,l=qr(l),(n=se.get(n))&&Qc(l,n),i=i.createElement("link"),St(i);var u=i;u._p=new Promise(function(c,f){u.onload=c,u.onerror=f}),Ot(i,"link",l),e.instance=i}a.stylesheets===null&&(a.stylesheets=new Map),a.stylesheets.set(e,t),(t=e.state.preload)&&(e.state.loading&3)===0&&(a.count++,e=Ai.bind(a),t.addEventListener("load",e),t.addEventListener("error",e))}}function zg(){if(rn===null)throw Error(m(475));var t=rn;return t.stylesheets&&t.count===0&&Lc(t,t.stylesheets),0<t.count?function(e){var l=setTimeout(function(){if(t.stylesheets&&Lc(t,t.stylesheets),t.unsuspend){var a=t.unsuspend;t.unsuspend=null,a()}},6e4);return t.unsuspend=e,function(){t.unsuspend=null,clearTimeout(l)}}:null}function Ai(){if(this.count--,this.count===0){if(this.stylesheets)Lc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Oi=null;function Lc(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Oi=new Map,e.forEach(Tg,t),Oi=null,Ai.call(t))}function Tg(t,e){if(!(e.state.loading&4)){var l=Oi.get(t);if(l)var a=l.get(null);else{l=new Map,Oi.set(t,l);for(var n=t.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var u=n[i];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(l.set(u.dataset.precedence,u),a=u)}a&&l.set(null,a)}n=e.instance,u=n.getAttribute("data-precedence"),i=l.get(u)||a,i===a&&l.set(null,n),l.set(u,n),this.count++,a=Ai.bind(this),n.addEventListener("load",a),n.addEventListener("error",a),i?i.parentNode.insertBefore(n,i.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(n,t.firstChild)),e.state.loading|=4}}var dn={$$typeof:Mt,Provider:null,Consumer:null,_currentValue:X,_currentValue2:X,_threadCount:0};function jg(t,e,l,a,n,i,u,c){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Xi(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xi(0),this.hiddenUpdates=Xi(null),this.identifierPrefix=a,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function Cr(t,e,l,a,n,i,u,c,f,h,b,z){return t=new jg(t,e,l,u,c,f,h,z),e=1,i===!0&&(e|=24),i=$t(3,null,null,e),t.current=i,i.stateNode=t,e=ju(),e.refCount++,t.pooledCache=e,e.refCount++,i.memoizedState={element:a,isDehydrated:l,cache:e},Mu(i),t}function Qr(t){return t?(t=Wl,t):Wl}function Zr(t,e,l,a,n,i){n=Qr(n),a.context===null?a.context=n:a.pendingContext=n,a=ke(e),a.payload={element:l},i=i===void 0?null:i,i!==null&&(a.callback=i),l=Je(t,a,e),l!==null&&(ee(l,t,e),Qa(l,t,e))}function Lr(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var l=t.retryLane;t.retryLane=l!==0&&l<e?l:e}}function wc(t,e){Lr(t,e),(t=t.alternate)&&Lr(t,e)}function wr(t){if(t.tag===13){var e=Jl(t,67108864);e!==null&&ee(e,t,67108864),wc(t,67108864)}}var Mi=!0;function Eg(t,e,l,a){var n=x.T;x.T=null;var i=A.p;try{A.p=2,Vc(t,e,l,a)}finally{A.p=i,x.T=n}}function Ag(t,e,l,a){var n=x.T;x.T=null;var i=A.p;try{A.p=8,Vc(t,e,l,a)}finally{A.p=i,x.T=n}}function Vc(t,e,l,a){if(Mi){var n=Kc(a);if(n===null)Uc(t,e,a,Di,l),Kr(t,a);else if(Mg(n,t,e,l,a))a.stopPropagation();else if(Kr(t,a),e&4&&-1<Og.indexOf(t)){for(;n!==null;){var i=Yl(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var u=ml(i.pendingLanes);if(u!==0){var c=i;for(c.pendingLanes|=2,c.entangledLanes|=2;u;){var f=1<<31-Jt(u);c.entanglements[1]|=f,u&=~f}Te(i),(et&6)===0&&(di=ye()+500,nn(0))}}break;case 13:c=Jl(i,2),c!==null&&ee(c,i,2),hi(),wc(i,2)}if(i=Kc(a),i===null&&Uc(t,e,a,Di,l),i===n)break;n=i}n!==null&&a.stopPropagation()}else Uc(t,e,a,null,l)}}function Kc(t){return t=Fi(t),kc(t)}var Di=null;function kc(t){if(Di=null,t=ql(t),t!==null){var e=D(t);if(e===null)t=null;else{var l=e.tag;if(l===13){if(t=k(e),t!==null)return t;t=null}else if(l===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return Di=t,null}function Vr(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(dd()){case af:return 2;case nf:return 8;case Sn:case gd:return 32;case uf:return 268435456;default:return 32}default:return 32}}var Jc=!1,cl=null,fl=null,ol=null,gn=new Map,hn=new Map,sl=[],Og="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Kr(t,e){switch(t){case"focusin":case"focusout":cl=null;break;case"dragenter":case"dragleave":fl=null;break;case"mouseover":case"mouseout":ol=null;break;case"pointerover":case"pointerout":gn.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":hn.delete(e.pointerId)}}function mn(t,e,l,a,n,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:l,eventSystemFlags:a,nativeEvent:i,targetContainers:[n]},e!==null&&(e=Yl(e),e!==null&&wr(e)),t):(t.eventSystemFlags|=a,e=t.targetContainers,n!==null&&e.indexOf(n)===-1&&e.push(n),t)}function Mg(t,e,l,a,n){switch(e){case"focusin":return cl=mn(cl,t,e,l,a,n),!0;case"dragenter":return fl=mn(fl,t,e,l,a,n),!0;case"mouseover":return ol=mn(ol,t,e,l,a,n),!0;case"pointerover":var i=n.pointerId;return gn.set(i,mn(gn.get(i)||null,t,e,l,a,n)),!0;case"gotpointercapture":return i=n.pointerId,hn.set(i,mn(hn.get(i)||null,t,e,l,a,n)),!0}return!1}function kr(t){var e=ql(t.target);if(e!==null){var l=D(e);if(l!==null){if(e=l.tag,e===13){if(e=k(l),e!==null){t.blockedOn=e,Sd(t.priority,function(){if(l.tag===13){var a=te();a=Ci(a);var n=Jl(l,a);n!==null&&ee(n,l,a),wc(l,a)}});return}}else if(e===3&&l.stateNode.current.memoizedState.isDehydrated){t.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}t.blockedOn=null}function _i(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var l=Kc(t.nativeEvent);if(l===null){l=t.nativeEvent;var a=new l.constructor(l.type,l);$i=a,l.target.dispatchEvent(a),$i=null}else return e=Yl(l),e!==null&&wr(e),t.blockedOn=l,!1;e.shift()}return!0}function Jr(t,e,l){_i(t)&&l.delete(e)}function Dg(){Jc=!1,cl!==null&&_i(cl)&&(cl=null),fl!==null&&_i(fl)&&(fl=null),ol!==null&&_i(ol)&&(ol=null),gn.forEach(Jr),hn.forEach(Jr)}function Ni(t,e){t.blockedOn===e&&(t.blockedOn=null,Jc||(Jc=!0,v.unstable_scheduleCallback(v.unstable_NormalPriority,Dg)))}var Ui=null;function Wr(t){Ui!==t&&(Ui=t,v.unstable_scheduleCallback(v.unstable_NormalPriority,function(){Ui===t&&(Ui=null);for(var e=0;e<t.length;e+=3){var l=t[e],a=t[e+1],n=t[e+2];if(typeof a!="function"){if(kc(a||l)===null)continue;break}var i=Yl(l);i!==null&&(t.splice(e,3),e-=3,ku(i,{pending:!0,data:n,method:l.method,action:a},a,n))}}))}function vn(t){function e(f){return Ni(f,t)}cl!==null&&Ni(cl,t),fl!==null&&Ni(fl,t),ol!==null&&Ni(ol,t),gn.forEach(e),hn.forEach(e);for(var l=0;l<sl.length;l++){var a=sl[l];a.blockedOn===t&&(a.blockedOn=null)}for(;0<sl.length&&(l=sl[0],l.blockedOn===null);)kr(l),l.blockedOn===null&&sl.shift();if(l=(t.ownerDocument||t).$$reactFormReplay,l!=null)for(a=0;a<l.length;a+=3){var n=l[a],i=l[a+1],u=n[Gt]||null;if(typeof i=="function")u||Wr(l);else if(u){var c=null;if(i&&i.hasAttribute("formAction")){if(n=i,u=i[Gt]||null)c=u.formAction;else if(kc(n)!==null)continue}else c=u.action;typeof c=="function"?l[a+1]=c:(l.splice(a,3),a-=3),Wr(l)}}}function Wc(t){this._internalRoot=t}Ri.prototype.render=Wc.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(m(409));var l=e.current,a=te();Zr(l,a,t,e,null,null)},Ri.prototype.unmount=Wc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Zr(t.current,2,null,t,null,null),hi(),e[Hl]=null}};function Ri(t){this._internalRoot=t}Ri.prototype.unstable_scheduleHydration=function(t){if(t){var e=rf();t={blockedOn:null,target:t,priority:e};for(var l=0;l<sl.length&&e!==0&&e<sl[l].priority;l++);sl.splice(l,0,t),l===0&&kr(t)}};var $r=R.version;if($r!=="19.1.1")throw Error(m(527,$r,"19.1.1"));A.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(m(188)):(t=Object.keys(t).join(","),Error(m(268,t)));return t=_(e),t=t!==null?T(t):null,t=t===null?null:t.stateNode,t};var _g={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:x,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Hi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Hi.isDisabled&&Hi.supportsFiber)try{ba=Hi.inject(_g),kt=Hi}catch{}}return yn.createRoot=function(t,e){if(!q(t))throw Error(m(299));var l=!1,a="",n=ds,i=gs,u=hs,c=null;return e!=null&&(e.unstable_strictMode===!0&&(l=!0),e.identifierPrefix!==void 0&&(a=e.identifierPrefix),e.onUncaughtError!==void 0&&(n=e.onUncaughtError),e.onCaughtError!==void 0&&(i=e.onCaughtError),e.onRecoverableError!==void 0&&(u=e.onRecoverableError),e.unstable_transitionCallbacks!==void 0&&(c=e.unstable_transitionCallbacks)),e=Cr(t,1,!1,null,null,l,a,n,i,u,c,null),t[Hl]=e.current,Nc(t),new Wc(e)},yn.hydrateRoot=function(t,e,l){if(!q(t))throw Error(m(299));var a=!1,n="",i=ds,u=gs,c=hs,f=null,h=null;return l!=null&&(l.unstable_strictMode===!0&&(a=!0),l.identifierPrefix!==void 0&&(n=l.identifierPrefix),l.onUncaughtError!==void 0&&(i=l.onUncaughtError),l.onCaughtError!==void 0&&(u=l.onCaughtError),l.onRecoverableError!==void 0&&(c=l.onRecoverableError),l.unstable_transitionCallbacks!==void 0&&(f=l.unstable_transitionCallbacks),l.formState!==void 0&&(h=l.formState)),e=Cr(t,1,!0,e,l??null,a,n,i,u,c,f,h),e.context=Qr(null),l=e.current,a=te(),a=Ci(a),n=ke(a),n.callback=null,Je(l,n,a),l=a,e.current.lanes=l,Sa(e,l),Te(e),t[Hl]=e.current,Nc(t),new Ri(e)},yn.version="19.1.1",yn}var ud;function Qg(){if(ud)return Pc.exports;ud=1;function v(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(v)}catch(R){console.error(R)}}return v(),Pc.exports=Cg(),Pc.exports}var Zg=Qg();const Lg=cd(Zg),fd=ve.createContext(),wg=()=>{const v=ve.useContext(fd);if(!v)throw new Error("useLanguageContext must be used within a LanguageProvider");return v},Vg=({children:v})=>{const[R,H]=ve.useState("en");ve.useEffect(()=>{const D=localStorage.getItem("language")||"en";H(D)},[]);const q={language:R,toggleLanguage:()=>{const D=R==="en"?"mne":"en";H(D),localStorage.setItem("language",D)},setLanguage:H};return d.jsx(fd.Provider,{value:q,children:v})},od=()=>{const[v,R]=ve.useState(!1);return ve.useEffect(()=>{const m=localStorage.getItem("theme"),q=window.matchMedia("(prefers-color-scheme: dark)").matches;(m==="dark"||!m&&q)&&(R(!0),document.body.classList.add("dark-mode"))},[]),{isDark:v,toggleTheme:()=>{R(!v),v?(document.body.classList.remove("dark-mode"),localStorage.setItem("theme","light")):(document.body.classList.add("dark-mode"),localStorage.setItem("theme","dark"))}}},Kg={en:{"nav.home":"Home","nav.services":"Services","nav.portfolio":"Portfolio","nav.sectors":"Sectors","nav.about":"About","nav.contact":"Contact","hero.title":"Frog Web Design & Management","hero.description":"We create stunning, high-performance websites tailored to your business needs. Our comprehensive management services ensure your digital presence stays fresh and effective.","sectors.title":"Sectors We Specialize In","sectors.food.title":"Food Industry","sectors.food.description":"From restaurants to food delivery services, we create mouth-watering websites that showcase your culinary offerings.","sectors.retail.title":"Small Retail","sectors.retail.description":"E-commerce solutions that help small retailers compete with the big players in the digital marketplace.","sectors.hospitality.title":"Hotels & Hospitality","sectors.hospitality.description":"Booking systems and beautiful designs that make travelers want to stay at your property.","sectors.manufacturing.title":"Manufacturing","sectors.manufacturing.description":"Professional websites that highlight your manufacturing capabilities and streamline B2B interactions.","about.title":"About Frog Web Design","about.text1":"Frog Web Design & Management has quickly established itself as a leader in creating custom digital solutions for businesses across various sectors.","about.text2":"Our team of designers, developers, and digital strategists work together to deliver websites that not only look great but also drive results.","about.text3":"What sets us apart is our sector-specific approach. We take the time to understand the unique challenges and opportunities in your industry.","services.hero.title":"Our Services","services.hero.description":"Discover our comprehensive web design and management services tailored to your business needs.","services.process.title":"Our Process","services.process.step1.title":"Initial Consultation","services.process.step1.description":"You give us ideas for the website, specifications on what pages you want and what should be on the page, and also links to other websites that you like and want us to do something similar to.","services.process.step2.title":"Design Phase","services.process.step2.description":"We bring you a few designs and you choose which you like. The money is paid after the design but before we begin the creation process.","services.process.step3.title":"Development","services.process.step3.description":"We from that design create the website and give you the preview of it.","services.process.step4.title":"Revisions","services.process.step4.description":"We change any details that you want.","services.process.step5.title":"Launch & Hosting","services.process.step5.description":"After all of that we start hosting the website for you for a monthly or yearly fee. Monthly it's 20€, yearly it's 180€.","services.pricing.title":"Website Pricing","services.addons.title":"Additional Options","services.pricing.basic.title":"Basic Website","services.pricing.basic.feature1":"Simple one page website","services.pricing.basic.feature2":"Text and photos","services.pricing.basic.feature3":"Links to social media","services.pricing.basic.feature4":"Location and contact information","services.pricing.standard.title":"Standard Website","services.pricing.standard.feature1":"Multiple pages (Home, About, Contact, etc.)","services.pricing.standard.feature2":"Images and text content","services.pricing.standard.feature3":"Simple functionality","services.pricing.blog.title":"Content Management","services.pricing.blog.feature1":"Add-on to any website","services.pricing.blog.feature2":"Allows owner to post and manage posts","services.pricing.blog.feature3":"Basic content management system","services.pricing.custom.title":"Custom Functionality","services.pricing.custom.feature1":"Specialized functionality","services.pricing.custom.feature2":"Price depends on complexity","services.pricing.custom.feature3":"Custom solutions for your needs","services.hosting.title":"Hosting Options","services.hosting.description":"Reliable hosting services to keep your website online and secure.","services.hosting.monthly.title":"Monthly","services.hosting.monthly.period":"per month","services.hosting.yearly.title":"Yearly","services.hosting.yearly.period":"per year","services.hosting.yearly.note":"(Save 25%)","portfolio.hero.title":"Our Portfolio","portfolio.hero.description":"Explore our latest web design projects and see how we've helped businesses establish their digital presence.","portfolio.projects.title":"Featured Projects","portfolio.projects.subtitle":"Take a look at some of the websites we've created for our clients across various industries.","portfolio.visit":"Visit Website","portfolio.cta.title":"Ready to Start Your Project?","portfolio.cta.description":"Let us create a stunning website that represents your business and drives results.","portfolio.cta.button":"Get Started","footer.about":"Specializing in sector-specific web design and comprehensive digital management solutions to help your business thrive online.","footer.links.title":"Quick Links","footer.contact.title":"Contact Us","footer.contact.address":"Podgorica","footer.copyright":"© 2025 Frog Web Design & Management. All rights reserved."},mne:{"nav.home":"Početna","nav.services":"Usluge","nav.portfolio":"Portfolio","nav.sectors":"Sektori","nav.about":"O Nama","nav.contact":"Kontakt","hero.title":"Frog Web Dizajn & Menadžment","hero.description":"Kreiramo impresivne, visoko funkcionalne web stranice prilagođene vašim poslovnim potrebama. Naše sveobuhvatne usluge osiguravaju da vaš brend ostane savršeno prilagođen.","sectors.title":"Sektori u kojima se specijalizujemo","sectors.food.title":"Prehrambena industrija","sectors.food.description":"Od restorana do usluga isporuke hrane, kreiramo web stranice koje prikazuju vašu kulinarsku ponudu.","sectors.retail.title":"Maloprodaja","sectors.retail.description":"E-commerce rešenja koja pomažu malim trgovcima da se takmiče sa velikim igračima na digitalnom tržištu.","sectors.hospitality.title":"Hoteli i ugostiteljstvo","sectors.hospitality.description":"Sistemi za rezervacije i prelepi dizajni koji korisnike podstiču da ostanu u vašem objektu.","sectors.manufacturing.title":"Proizvodnja","sectors.manufacturing.description":"Profesionalne web stranice koje ističu vaše proizvodne kapacitete i pojednostavljuju B2B interakcije.","about.title":"O Frog Web Dizajnu","about.text1":"Frog Web Design & Management se brzo etablirao kao lider u kreiranju prilagođenih digitalnih rešenja za biznise različitih sektora.","about.text2":"Naš tim dizajnera, developera i digitalnih stratega radi zajedno na dostavi web stranica koje ne samo da izgledaju sjajno već i donose rezultate.","about.text3":"Ono što nas izdvaja je naš pristup specifičan za svaki sektor. Posvećujemo vrijeme da razumijemo jedinstvene izazove i prilike u vašoj industriji.","services.hero.title":"Naše Usluge","services.hero.description":"Otkrijte naše sveobuhvatne usluge web dizajna i upravljanja prilagođene vašim poslovnim potrebama.","services.process.title":"Naš Proces","services.process.step1.title":"Početna Konzultacija","services.process.step1.description":"Dajete nam ideje za web stranicu, specifikacije o tome koje stranice želite i šta bi trebalo da bude na stranici, kao i linkove drugih web stranica koje vam se sviđaju i želite da napravimo nešto slično.","services.process.step2.title":"Faza Dizajna","services.process.step2.description":"Donosimo vam nekoliko dizajna i vi birate koji vam se sviđa. Novac se plaća nakon dizajna, ali prije nego što započnemo sa izradom.","services.process.step3.title":"Razvoj","services.process.step3.description":"Na osnovu tog dizajna kreiramo web stranicu i dajemo vam pregled.","services.process.step4.title":"Revizije","services.process.step4.description":"Mijenjamo sve detalje koje želite.","services.process.step5.title":"Pokretanje i Hosting","services.process.step5.description":"Nakon svega toga, počinjemo sa hostingom web stranice za vas uz mjesečnu ili godišnju naknadu. Mjesečno je 20€, godišnje 180€.","services.pricing.title":"Cijene Web Stranica","services.addons.title":"Dodatne Opcije","services.pricing.basic.title":"Osnovna Web Stranica","services.pricing.basic.feature1":"Jednostavna jednostranačna web stranica","services.pricing.basic.feature2":"Tekst i fotografije","services.pricing.basic.feature3":"Linkovi","services.pricing.basic.feature4":"Lokacija i kontakt informacije","services.pricing.standard.title":"Standardna Web Stranica","services.pricing.standard.feature1":"Više stranica (Početna, O Nama, Kontakt, itd.)","services.pricing.standard.feature2":"Slike i tekstualni sadržaj","services.pricing.standard.feature3":"Osnovna funkcionalnost","services.pricing.blog.title":"Upravljanje Sadržajem","services.pricing.blog.feature1":"Dodatak za bilo koju web stranicu","services.pricing.blog.feature2":"Omogućava vlasniku da objavljuje i upravlja postovima","services.pricing.blog.feature3":"Osnovni sistem za upravljanje sadržajem","services.pricing.custom.title":"Prilagođena Funkcionalnost","services.pricing.custom.feature1":"Specijalizirana funkcionalnost","services.pricing.custom.feature2":"Cijena zavisi od složenosti","services.pricing.custom.feature3":"Prilagođena rješenja za vaše potrebe","services.hosting.title":"Hosting Opcije","services.hosting.description":"Pouzdane hosting usluge kako bi vaša web stranica bila online i sigurna.","services.hosting.monthly.title":"Mjesečno","services.hosting.monthly.period":"mjesečno","services.hosting.yearly.title":"Godišnje","services.hosting.yearly.period":"godišnje","services.hosting.yearly.note":"(Uštedite 25%)","portfolio.hero.title":"Naš Portfolio","portfolio.hero.description":"Pogledajte naše najnovije web dizajn projekte i vidite kako smo pomogli biznisima da uspostave svoje digitalno prisustvo.","portfolio.projects.title":"Istaknuti Projekti","portfolio.projects.subtitle":"Pogledajte neke od web stranica koje smo kreirali za naše klijente u različitim industrijama.","portfolio.visit":"Posjetite Web Stranicu","portfolio.cta.title":"Spremni da Započnete Svoj Projekt?","portfolio.cta.description":"Dozvolite nam da kreiramo impresivnu web stranicu koja predstavlja vaš biznis i donosi rezultate.","portfolio.cta.button":"Započnite","footer.about":"Specijalizovani za web dizajn specifičan za sektor i sveobuhvatna digitalna rješenja za upravljanje kako bismo pomogli vašem biznisu da napreduje online.","footer.links.title":"Brzi Linkovi","footer.contact.title":"Kontaktirajte Nas","footer.contact.address":"Podgorica","footer.copyright":"© 2025 Frog Web Dizajn & Menadžment. Sva prava zadržana."}},bn=()=>{const{language:v,toggleLanguage:R}=wg();return{language:v,toggleLanguage:R,t:m=>Kg[v][m]||m}},kg=()=>{const[v,R]=ve.useState(!1),{isDark:H,toggleTheme:m}=od(),{language:q,toggleLanguage:D,t:k}=bn(),ht="https://bisque-ferret-692937.hostingersite.com/wp-content/uploads/2025/07/the-logo-1.svg",_="https://bisque-ferret-692937.hostingersite.com/wp-content/uploads/2025/07/the-logo-white-1.svg",T={en:"https://flagcdn.com/w20/gb.png",mne:"https://flagcdn.com/w20/me.png"},U=()=>{R(!v),document.body.style.overflow=v?"":"hidden"},J=()=>{R(!1),document.body.style.overflow=""};return ve.useEffect(()=>{const tt=()=>{window.innerWidth>768&&J()};return window.addEventListener("resize",tt),()=>window.removeEventListener("resize",tt)},[]),d.jsxs(d.Fragment,{children:[d.jsx("div",{className:"pattern-bg"}),d.jsx("header",{children:d.jsx("div",{className:"container",children:d.jsxs("nav",{children:[d.jsx("a",{href:"/",className:"logo-link",children:d.jsx("img",{className:"logo",src:H?_:ht,alt:"Frog Web Design Logo",width:120,height:32})}),d.jsx("button",{className:`mobile-menu-btn ${v?"active":""}`,onClick:U,"aria-label":"Toggle mobile menu",children:"☰"}),d.jsxs("div",{className:`nav-links ${v?"active":""}`,children:[d.jsx("button",{className:"close-menu-btn",onClick:J,"aria-label":"Close menu",children:"✕"}),d.jsx("a",{href:"/",onClick:J,children:k("nav.home")}),d.jsx("a",{href:"/services",onClick:J,children:k("nav.services")}),d.jsx("a",{href:"/portfolio",onClick:J,children:k("nav.portfolio")}),d.jsx("a",{href:"/#sectors",onClick:J,children:k("nav.sectors")}),d.jsx("a",{href:"/#about",onClick:J,children:k("nav.about")}),d.jsx("a",{href:"/#contact",onClick:J,children:k("nav.contact")}),d.jsxs("div",{className:"toggle-container",children:[d.jsxs("button",{className:"language-toggle",onClick:D,"aria-label":"Toggle language",children:[d.jsx("img",{className:"flag-icon",src:T[q],alt:`${q==="en"?"English":"Montenegrin"} flag`,width:20,height:14}),d.jsx("span",{className:"language-text",children:q==="en"?"ENG":"MNE"})]}),d.jsx("button",{className:"theme-toggle",onClick:m,"aria-label":"Toggle theme",children:H?"🌞":"🌙"})]})]}),d.jsx("div",{className:`mobile-menu-overlay ${v?"active":""}`,onClick:J})]})})}),d.jsx("style",{jsx:!0,children:`
                header {
                    padding: 15px 0;
                    position: sticky;
                    top: 0;
                    background-color: rgba(255, 255, 255, 0.98);
                    backdrop-filter: blur(10px);
                    z-index: 1000;
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
                    transition: var(--transition);
                }

                body.dark-mode header {
                    background-color: rgba(29, 30, 32, 0.98);
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
                }

                .container {
                    padding: 0 15px;
                }

                nav {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .logo {
                    transition: var(--transition);
                    width: 120px;
                    height: auto;
                }

                .logo:hover {
                    filter: drop-shadow(0 0 8px var(--primary-purple));
                }

                .nav-links {
                    display: none;
                    align-items: center;
                    gap: 25px;
                }

                .nav-links a {
                    text-decoration: none;
                    color: var(--black);
                    font-weight: 500;
                    transition: var(--transition);
                    position: relative;
                    font-size: 0.95rem;
                    padding: 8px 0;
                }

                body.dark-mode .nav-links a {
                    color: var(--white);
                }

                .nav-links a:hover {
                    color: var(--primary-purple);
                }

                .nav-links a::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 0;
                    height: 2px;
                    background-color: var(--primary-purple);
                    transition: width 0.3s ease;
                }

                .nav-links a:hover::after {
                    width: 100%;
                }

                .theme-toggle, .language-toggle {
                    background: none;
                    border: none;
                    cursor: pointer;
                    font-size: 20px;
                    color: var(--black);
                    transition: var(--transition);
                    padding: 6px;
                    display: flex;
                    align-items: center;
                    flex-direction: column;
                    -webkit-tap-highlight-color: transparent;
                }

                body.dark-mode .theme-toggle,
                body.dark-mode .language-toggle {
                    color: var(--white);
                }

                .theme-toggle:active,
                .language-toggle:active {
                    transform: scale(0.95);
                }

                .theme-toggle:hover {
                    color: var(--primary-purple);
                    transform: rotate(30deg);
                }

                .language-toggle:hover {
                    color: var(--primary-purple);
                }

                .toggle-container {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    margin-left: 15px;
                }

                .flag-icon {
                    margin-bottom: 2px;
                    border: 1px solid rgba(0,0,0,0.1);
                }

                body.dark-mode .flag-icon {
                    border-color: rgba(255,255,255,0.1);
                }

                .language-text {
                    font-size: 10px;
                    margin-top: 1px;
                }

                .mobile-menu-btn {
                    display: block;
                    background: none;
                    border: none;
                    font-size: 24px;
                    cursor: pointer;
                    color: var(--black);
                    z-index: 1001;
                    transition: var(--transition);
                    padding: 6px;
                    -webkit-tap-highlight-color: transparent;
                }

                body.dark-mode .mobile-menu-btn {
                    color: var(--white);
                }

                .mobile-menu-btn:active {
                    transform: scale(0.95);
                }

                .mobile-menu-btn:hover {
                    color: var(--primary-purple);
                }

                .close-menu-btn {
                    display: block;
                    position: absolute;
                    top: 15px;
                    right: 15px;
                    font-size: 24px;
                    background: none;
                    border: none;
                    color: var(--black);
                    cursor: pointer;
                    z-index: 1002;
                    padding: 6px;
                    -webkit-tap-highlight-color: transparent;
                }

                body.dark-mode .close-menu-btn {
                    color: var(--white);
                }

                .close-menu-btn:active {
                    transform: scale(0.95);
                }

                .mobile-menu-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: rgba(0,0,0,0.5);
                    z-index: 998;
                    opacity: 0;
                    visibility: hidden;
                    transition: var(--transition);
                }

                .mobile-menu-overlay.active {
                    opacity: 1;
                    visibility: visible;
                }

                @media (max-width: 768px) {
                    .nav-links {
                        position: fixed;
                        top: 0;
                        right: -100%;
                        width: 85%;
                        max-width: 300px;
                        height: 100vh;
                        background-color: var(--white);
                        flex-direction: column;
                        align-items: flex-start;
                        padding: 70px 25px 25px;
                        gap: 20px;
                        box-shadow: -5px 0 15px rgba(0,0,0,0.1);
                        transition: right 0.3s ease;
                        z-index: 999;
                        display: flex;
                    }

                    body.dark-mode .nav-links {
                        background-color: var(--dark-card);
                        box-shadow: -5px 0 15px rgba(0,0,0,0.3);
                    }

                    .nav-links.active {
                        right: 0;
                    }

                    .nav-links a {
                        font-size: 1.1rem;
                        padding: 10px 0;
                        width: 100%;
                    }

                    .toggle-container {
                        margin-left: 0;
                        margin-top: 20px;
                        flex-direction: row;
                        gap: 15px;
                    }

                    .theme-toggle, .language-toggle {
                        font-size: 22px;
                    }

                    .close-menu-btn {
                        display: block;
                    }

                    .mobile-menu-btn.active {
                        visibility: hidden;
                    }
                }

                @media (min-width: 769px) {
                    .nav-links {
                        display: flex;
                    }

                    .mobile-menu-btn {
                        display: none;
                    }

                    .close-menu-btn {
                        display: none;
                    }

                    .mobile-menu-overlay {
                        display: none;
                    }
                }

                /* Small mobile devices */
                @media (max-width: 360px) {
                    .container {
                        padding: 0 12px;
                    }

                    .logo {
                        width: 100px;
                    }

                    .nav-links {
                        width: 90%;
                        padding: 60px 20px 20px;
                    }

                    .nav-links a {
                        font-size: 1rem;
                    }

                    .toggle-container {
                        gap: 12px;
                    }

                    .theme-toggle, .language-toggle {
                        font-size: 20px;
                    }
                }
            `})]})},Jg=()=>{const{isDark:v}=od(),{t:R}=bn();return d.jsxs("footer",{id:"contact",children:[d.jsxs("div",{className:"container",children:[d.jsxs("div",{className:"footer-content",children:[d.jsxs("div",{className:"footer-about",children:[d.jsx("img",{className:"footer-logo",src:v?"https://bisque-ferret-692937.hostingersite.com/wp-content/uploads/2025/07/the-logo-white-1.svg":"https://bisque-ferret-692937.hostingersite.com/wp-content/uploads/2025/07/the-logo-1.svg",alt:"Frog Web Design Logo",width:100,height:27}),d.jsx("p",{children:R("footer.about")})]}),d.jsxs("div",{className:"footer-links",children:[d.jsx("h3",{children:R("footer.links.title")}),d.jsxs("ul",{children:[d.jsx("li",{children:d.jsx("a",{href:"/",children:R("nav.home")})}),d.jsx("li",{children:d.jsx("a",{href:"/services",children:R("nav.services")})}),d.jsx("li",{children:d.jsx("a",{href:"/portfolio",children:R("nav.portfolio")})}),d.jsx("li",{children:d.jsx("a",{href:"/#sectors",children:R("nav.sectors")})}),d.jsx("li",{children:d.jsx("a",{href:"/#about",children:R("nav.about")})}),d.jsx("li",{children:d.jsx("a",{href:"/#contact",children:R("nav.contact")})})]})]}),d.jsxs("div",{className:"footer-contact",children:[d.jsx("h3",{children:R("footer.contact.title")}),d.jsx("p",{children:"📧 frogmne@gmail.com"}),d.jsxs("p",{className:"phone-number",children:["📞 067-340-714",d.jsx("span",{className:"call-hours",children:"Pozivi od 16:00 do 20:00"})]}),d.jsxs("p",{children:["🏢 ",R("footer.contact.address")]})]})]}),d.jsx("div",{className:"copyright",children:d.jsx("p",{children:R("footer.copyright")})})]}),d.jsx("style",{jsx:!0,children:`
                footer {
                    background-color: var(--black);
                    color: var(--white);
                    padding: 40px 0 20px;
                }

                .container {
                    padding: 0 15px;
                }

                .footer-content {
                    display: flex;
                    flex-direction: column;
                    gap: 30px;
                    margin-bottom: 30px;
                }

                .footer-logo {
                    margin-bottom: 15px;
                    transition: var(--transition);
                    width: 100px;
                    height: auto;
                }

                .footer-logo:hover {
                    filter: drop-shadow(0 0 8px var(--primary-purple));
                }

                .footer-about p {
                    opacity: 0.8;
                    line-height: 1.6;
                    font-size: 0.95rem;
                }

                .footer-links h3, .footer-contact h3 {
                    font-size: 1.1rem;
                    margin-bottom: 15px;
                    color: var(--white);
                }

                .footer-links ul {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }

                .footer-links li {
                    margin-bottom: 8px;
                }

                .footer-links a {
                    color: var(--white);
                    text-decoration: none;
                    opacity: 0.8;
                    transition: var(--transition);
                    font-size: 0.9rem;
                }

                .footer-links a:hover {
                    opacity: 1;
                    color: var(--primary-purple);
                }

                .footer-contact p {
                    opacity: 0.8;
                    margin-bottom: 12px;
                    display: flex;
                    align-items: flex-start;
                    gap: 8px;
                    font-size: 0.9rem;
                    line-height: 1.4;
                }

                .phone-number {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    gap: 4px;
                }

                .call-hours {
                    font-size: 0.7rem;
                    text-decoration: underline;
                    color: #ff6b6b;
                    margin-left: 0;
                    line-height: 1.2;
                }

                .copyright {
                    text-align: center;
                    padding-top: 20px;
                    border-top: 1px solid rgba(255, 255, 255, 0.1);
                    opacity: 0.7;
                    font-size: 0.85rem;
                }

                /* Tablet Styles */
                @media (min-width: 768px) {
                    footer {
                        padding: 50px 0 25px;
                    }

                    .container {
                        padding: 0 20px;
                    }

                    .footer-content {
                        flex-direction: row;
                        gap: 40px;
                        margin-bottom: 40px;
                    }

                    .footer-about {
                        flex: 1;
                    }

                    .footer-links {
                        flex: 1;
                    }

                    .footer-contact {
                        flex: 1;
                    }

                    .footer-logo {
                        width: 120px;
                        margin-bottom: 20px;
                    }

                    .footer-about p {
                        font-size: 1rem;
                    }

                    .footer-links h3, .footer-contact h3 {
                        font-size: 1.2rem;
                        margin-bottom: 20px;
                    }

                    .footer-links a {
                        font-size: 1rem;
                    }

                    .footer-contact p {
                        font-size: 1rem;
                    }

                    .phone-number {
                        flex-direction: row;
                        align-items: center;
                    }

                    .call-hours {
                        margin-left: 8px;
                    }

                    .copyright {
                        padding-top: 30px;
                        font-size: 0.9rem;
                    }
                }

                /* Desktop Styles */
                @media (min-width: 1024px) {
                    .footer-content {
                        gap: 60px;
                    }
                }

                /* Small mobile devices */
                @media (max-width: 360px) {
                    .container {
                        padding: 0 12px;
                    }

                    .footer-content {
                        gap: 25px;
                    }

                    .footer-logo {
                        width: 90px;
                    }

                    .footer-about p {
                        font-size: 0.9rem;
                    }

                    .footer-links h3, .footer-contact h3 {
                        font-size: 1rem;
                    }

                    .footer-links a {
                        font-size: 0.85rem;
                    }

                    .footer-contact p {
                        font-size: 0.85rem;
                    }

                    .call-hours {
                        font-size: 0.65rem;
                    }

                    .copyright {
                        font-size: 0.8rem;
                    }
                }
            `})]})},Wg=()=>{const{t:v}=bn(),R=[{icon:"🍽️",title:v("sectors.food.title"),description:v("sectors.food.description")},{icon:"🛍️",title:v("sectors.retail.title"),description:v("sectors.retail.description")},{icon:"🏨",title:v("sectors.hospitality.title"),description:v("sectors.hospitality.description")},{icon:"🏭",title:v("sectors.manufacturing.title"),description:v("sectors.manufacturing.description")}];return d.jsxs("main",{children:[d.jsx("section",{className:"hero section-padding",children:d.jsx("div",{className:"container",children:d.jsxs("div",{className:"hero-content",children:[d.jsx("h1",{className:"text-gradient",children:v("hero.title")}),d.jsx("p",{className:"hero-description",children:v("hero.description")}),d.jsxs("div",{className:"hero-actions",children:[d.jsx("a",{href:"/services",className:"btn",children:v("nav.services")}),d.jsx("a",{href:"/portfolio",className:"btn btn-secondary",children:v("portfolio.cta.button")})]})]})})}),d.jsx("section",{id:"sectors",className:"sectors section-padding",children:d.jsxs("div",{className:"container",children:[d.jsx("h2",{className:"section-title",children:v("sectors.title")}),d.jsx("div",{className:"sectors-grid",children:R.map((H,m)=>d.jsxs("div",{className:"sector-card card",children:[d.jsx("div",{className:"sector-icon",children:H.icon}),d.jsx("h3",{children:H.title}),d.jsx("p",{children:H.description})]},m))}),d.jsx("div",{className:"sectors-cta",children:d.jsx("a",{href:"/portfolio",className:"btn",children:v("portfolio.hero.title")})})]})}),d.jsx("section",{id:"about",className:"about section-padding",children:d.jsx("div",{className:"container",children:d.jsxs("div",{className:"about-content",children:[d.jsxs("div",{className:"about-text",children:[d.jsx("h2",{children:v("about.title")}),d.jsx("p",{children:v("about.text1")}),d.jsx("p",{children:v("about.text2")}),d.jsx("p",{children:v("about.text3")}),d.jsx("div",{className:"about-cta",children:d.jsx("a",{href:"/services",className:"btn",children:v("portfolio.cta.button")})})]}),d.jsx("div",{className:"about-image",children:d.jsx("img",{src:"https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",alt:"Team working on web design",loading:"lazyy"})})]})})}),d.jsx("style",{jsx:!0,children:`
                .hero {
                    text-align: center;
                    background: linear-gradient(135deg, rgba(81, 38, 210, 0.05) 0%, rgba(123, 74, 255, 0.05) 100%);
                    padding: 50px 0;
                }

                .hero-content {
                    max-width: 100%;
                    margin: 0 auto;
                    padding: 0 15px;
                }

                .hero h1 {
                    font-size: 2.2rem;
                    font-weight: 800;
                    margin-bottom: 16px;
                    line-height: 1.2;
                }

                .hero-description {
                    font-size: 1.1rem;
                    margin-bottom: 30px;
                    line-height: 1.6;
                    color: var(--gray-600);
                }

                body.dark-mode .hero-description {
                    color: var(--gray-300);
                }

                .hero-actions {
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                    align-items: center;
                }

                .btn {
                    padding: 14px 28px;
                    font-size: 1rem;
                    width: 200px;
                    text-align: center;
                    border-radius: 8px;
                }

                .btn-secondary {
                    background: transparent;
                    border: 2px solid var(--primary-purple);
                    color: var(--primary-purple);
                }

                .btn-secondary:hover,
                .btn-secondary:focus {
                    background: var(--primary-purple);
                    color: var(--white);
                }

                .section-padding {
                    padding: 50px 0;
                }

                .section-title {
                    text-align: center;
                    margin-bottom: 40px;
                    font-size: 1.8rem;
                    font-weight: 700;
                    padding: 0 15px;
                }

                .sectors-grid {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 20px;
                    margin-bottom: 30px;
                    padding: 0 10px;
                }

                .sector-card {
                    text-align: center;
                    padding: 25px 20px;
                    border-radius: 12px;
                }

                .sector-icon {
                    font-size: 2.5rem;
                    margin-bottom: 16px;
                }

                .sector-card h3 {
                    font-size: 1.3rem;
                    margin-bottom: 12px;
                    color: var(--primary-purple);
                }

                .sector-card p {
                    color: var(--gray-600);
                    line-height: 1.6;
                    font-size: 0.95rem;
                }

                body.dark-mode .sector-card p {
                    color: var(--gray-300);
                }

                .sectors-cta {
                    text-align: center;
                    margin-top: 30px;
                    padding: 0 15px;
                }

                .about {
                    background-color: var(--light-gray);
                }

                body.dark-mode .about {
                    background-color: #1a1a1a;
                }

                .about-content {
                    display: flex;
                    flex-direction: column;
                    gap: 30px;
                }

                .about-text h2 {
                    font-size: 1.8rem;
                    margin-bottom: 20px;
                    color: var(--primary-purple);
                }

                .about-text p {
                    line-height: 1.7;
                    margin-bottom: 16px;
                    font-size: 1rem;
                    color: var(--gray-600);
                }

                body.dark-mode .about-text p {
                    color: var(--gray-300);
                }

                .about-cta {
                    margin-top: 25px;
                }

                .about-image {
                    border-radius: 12px;
                    overflow: hidden;
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
                    order: -1;
                }

                body.dark-mode .about-image {
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
                }

                .about-image img {
                    width: 100%;
                    height: auto;
                    display: block;
                }

                /* Tablet Styles */
                @media (min-width: 768px) {
                    .hero {
                        padding: 80px 0;
                    }

                    .hero h1 {
                        font-size: 2.8rem;
                    }

                    .hero-description {
                        font-size: 1.2rem;
                        margin-bottom: 40px;
                    }

                    .hero-actions {
                        flex-direction: row;
                        justify-content: center;
                        gap: 20px;
                    }

                    .btn {
                        width: auto;
                    }

                    .section-padding {
                        padding: 80px 0;
                    }

                    .section-title {
                        font-size: 2.2rem;
                    }

                    .sectors-grid {
                        grid-template-columns: repeat(2, 1fr);
                        gap: 25px;
                    }

                    .sector-card {
                        padding: 30px 25px;
                    }

                    .sector-icon {
                        font-size: 3rem;
                    }

                    .sector-card h3 {
                        font-size: 1.5rem;
                    }

                    .about-content {
                        flex-direction: row;
                        gap: 50px;
                        align-items: center;
                    }

                    .about-text {
                        flex: 1;
                    }

                    .about-text h2 {
                        font-size: 2.2rem;
                    }

                    .about-text p {
                        font-size: 1.1rem;
                    }

                    .about-image {
                        flex: 1;
                        order: 2;
                    }
                }

                /* Desktop Styles */
                @media (min-width: 1024px) {
                    .hero h1 {
                        font-size: 3.5rem;
                    }

                    .sectors-grid {
                        grid-template-columns: repeat(4, 1fr);
                        gap: 30px;
                    }

                    .sector-card:hover {
                        transform: translateY(-5px);
                    }

                    .about-content {
                        gap: 60px;
                    }

                    .about-text h2 {
                        font-size: 2.5rem;
                    }
                }

                /* Small mobile devices */
                @media (max-width: 360px) {
                    .hero h1 {
                        font-size: 1.8rem;
                    }

                    .hero-description {
                        font-size: 1rem;
                    }

                    .section-title {
                        font-size: 1.6rem;
                    }

                    .sectors-grid {
                        padding: 0 5px;
                        gap: 15px;
                    }

                    .sector-card {
                        padding: 20px 15px;
                    }

                    .sector-icon {
                        font-size: 2rem;
                    }

                    .sector-card h3 {
                        font-size: 1.2rem;
                    }

                    .sector-card p {
                        font-size: 0.9rem;
                    }
                }

                /* Improved touch interactions */
                @media (hover: none) and (pointer: coarse) {
                    .sector-card:active {
                        transform: scale(0.98);
                    }
                }
            `})]})},$g=()=>{const{t:v}=bn(),R=[{number:1,title:v("services.process.step1.title"),description:v("services.process.step1.description")},{number:2,title:v("services.process.step2.title"),description:v("services.process.step2.description")},{number:3,title:v("services.process.step3.title"),description:v("services.process.step3.description")},{number:4,title:v("services.process.step4.title"),description:v("services.process.step4.description")},{number:5,title:v("services.process.step5.title"),description:v("services.process.step5.description")}],H=[{title:v("services.pricing.basic.title"),price:"50€",features:[v("services.pricing.basic.feature1"),v("services.pricing.basic.feature2"),v("services.pricing.basic.feature3"),v("services.pricing.basic.feature4")]},{title:v("services.pricing.standard.title"),price:"150€",features:[v("services.pricing.standard.feature1"),v("services.pricing.standard.feature2"),v("services.pricing.standard.feature3")]}],m=[{title:v("services.pricing.blog.title"),price:"+50€",features:[v("services.pricing.blog.feature1"),v("services.pricing.blog.feature2"),v("services.pricing.blog.feature3")]},{title:v("services.pricing.custom.title"),price:"50€-300€",features:[v("services.pricing.custom.feature1"),v("services.pricing.custom.feature2"),v("services.pricing.custom.feature3")]}],q=[{title:v("services.hosting.monthly.title"),price:"5€-20€",period:v("services.hosting.monthly.period")},{title:v("services.hosting.yearly.title"),price:"45€-180€",period:v("services.hosting.yearly.period"),note:v("services.hosting.yearly.note")}];return d.jsxs("main",{children:[d.jsx("section",{className:"hero section-padding",children:d.jsxs("div",{className:"container",children:[d.jsx("h1",{className:"text-gradient",children:v("services.hero.title")}),d.jsx("p",{className:"hero-description",children:v("services.hero.description")})]})}),d.jsx("section",{id:"process",className:"process section-padding",children:d.jsxs("div",{className:"container",children:[d.jsx("h2",{className:"section-title",children:v("services.process.title")}),d.jsx("div",{className:"process-steps",children:R.map((D,k)=>d.jsxs("div",{className:"step",children:[d.jsx("div",{className:"step-number",children:D.number}),d.jsxs("div",{className:"step-content",children:[d.jsx("h3",{children:D.title}),d.jsx("p",{children:D.description})]})]},k))})]})}),d.jsx("section",{id:"pricing",className:"pricing section-padding",children:d.jsxs("div",{className:"container",children:[d.jsx("h2",{className:"section-title",children:v("services.pricing.title")}),d.jsx("div",{className:"pricing-cards",children:H.map((D,k)=>d.jsxs("div",{className:"pricing-card card",children:[d.jsx("h3",{children:D.title}),d.jsx("div",{className:"price",children:D.price}),d.jsx("ul",{children:D.features.map((ht,_)=>d.jsx("li",{children:ht},_))})]},k))})]})}),d.jsx("section",{className:"pricing section-padding",children:d.jsxs("div",{className:"container",children:[d.jsx("h2",{className:"section-title",children:v("services.addons.title")}),d.jsx("div",{className:"pricing-cards",children:m.map((D,k)=>d.jsxs("div",{className:"pricing-card card",children:[d.jsx("h3",{children:D.title}),d.jsx("div",{className:"price",children:D.price}),d.jsx("ul",{children:D.features.map((ht,_)=>d.jsx("li",{children:ht},_))})]},k))})]})}),d.jsx("section",{className:"hosting section-padding",children:d.jsxs("div",{className:"container",children:[d.jsx("h2",{className:"section-title",children:v("services.hosting.title")}),d.jsxs("div",{className:"hosting-content",children:[d.jsx("p",{children:v("services.hosting.description")}),d.jsx("div",{className:"hosting-options",children:q.map((D,k)=>d.jsxs("div",{className:"hosting-option card",children:[d.jsx("h3",{children:D.title}),d.jsx("div",{className:"price",children:D.price}),d.jsx("div",{className:"period",children:D.period}),D.note&&d.jsx("p",{className:"note",children:D.note})]},k))})]})]})}),d.jsx("style",{jsx:!0,children:`
                .hero {
                    text-align: center;
                    background: linear-gradient(135deg, rgba(81, 38, 210, 0.05) 0%, rgba(123, 74, 255, 0.05) 100%);
                    padding: 50px 0;
                }

                .hero h1 {
                    font-size: 2.2rem;
                    font-weight: 800;
                    margin-bottom: 16px;
                    line-height: 1.2;
                    padding: 0 15px;
                }

                .hero-description {
                    font-size: 1.1rem;
                    max-width: 100%;
                    margin: 0 auto;
                    line-height: 1.6;
                    color: var(--gray-600);
                    padding: 0 20px;
                }

                body.dark-mode .hero-description {
                    color: var(--gray-300);
                }

                .section-padding {
                    padding: 50px 0;
                }

                .section-title {
                    text-align: center;
                    margin-bottom: 40px;
                    font-size: 1.8rem;
                    font-weight: 700;
                    padding: 0 15px;
                }

                .process {
                    background-color: var(--light-gray);
                    margin: 0 -20px;
                    padding: 50px 20px;
                }

                body.dark-mode .process {
                    background-color: #1a1a1a;
                }

                .process-steps {
                    max-width: 100%;
                    margin: 0 auto;
                }

                .step {
                    display: flex;
                    flex-direction: column;
                    margin-bottom: 30px;
                    align-items: center;
                    text-align: center;
                    gap: 15px;
                }

                .step-number {
                    background-color: var(--primary-purple);
                    color: white;
                    width: 45px;
                    height: 45px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-weight: bold;
                    font-size: 1.1rem;
                    flex-shrink: 0;
                    box-shadow: 0 4px 12px rgba(81, 38, 210, 0.3);
                }

                .step-content {
                    flex: 1;
                }

                .step h3 {
                    font-size: 1.3rem;
                    margin-bottom: 12px;
                    color: var(--primary-purple);
                }

                .step p {
                    line-height: 1.6;
                    color: var(--gray-600);
                    font-size: 0.95rem;
                }

                body.dark-mode .step p {
                    color: var(--gray-300);
                }

                .pricing-cards {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 20px;
                    margin-top: 30px;
                    padding: 0 10px;
                }

                .pricing-card {
                    text-align: center;
                    padding: 25px 20px;
                    border-radius: 12px;
                }

                .pricing-card h3 {
                    font-size: 1.3rem;
                    margin-bottom: 16px;
                    color: var(--primary-purple);
                }

                .pricing-card .price {
                    font-size: 2rem;
                    font-weight: 700;
                    margin-bottom: 20px;
                    color: var(--primary-purple);
                }

                .pricing-card ul {
                    list-style: none;
                    padding: 0;
                    margin-bottom: 20px;
                    text-align: left;
                }

                .pricing-card li {
                    margin-bottom: 10px;
                    display: flex;
                    align-items: flex-start;
                    gap: 8px;
                    color: var(--gray-600);
                    font-size: 0.95rem;
                    line-height: 1.4;
                }

                body.dark-mode .pricing-card li {
                    color: var(--gray-300);
                }

                .pricing-card li::before {
                    content: "✓";
                    color: var(--primary-purple);
                    font-weight: bold;
                    flex-shrink: 0;
                    margin-top: 2px;
                }

                .hosting {
                    background-color: var(--light-gray);
                    text-align: center;
                }

                body.dark-mode .hosting {
                    background-color: #1a1a1a;
                }

                .hosting-content {
                    max-width: 100%;
                    margin: 0 auto;
                    padding: 0 15px;
                }

                .hosting-content p {
                    font-size: 1rem;
                    margin-bottom: 30px;
                    color: var(--gray-600);
                    line-height: 1.6;
                }

                body.dark-mode .hosting-content p {
                    color: var(--gray-300);
                }

                .hosting-options {
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                    margin-top: 20px;
                }

                .hosting-option {
                    text-align: center;
                    padding: 25px 20px;
                    border-radius: 12px;
                }

                .hosting-option h3 {
                    font-size: 1.3rem;
                    margin-bottom: 16px;
                    color: var(--primary-purple);
                }

                .hosting-option .price {
                    font-size: 1.8rem;
                    font-weight: 700;
                    margin-bottom: 8px;
                    color: var(--primary-purple);
                }

                .hosting-option .period {
                    color: var(--gray-600);
                    margin-bottom: 12px;
                    font-size: 0.95rem;
                }

                body.dark-mode .hosting-option .period {
                    color: var(--gray-300);
                }

                .hosting-option .note {
                    color: #00c853;
                    font-weight: 600;
                    margin: 0;
                    font-size: 0.9rem;
                }

                /* Tablet Styles */
                @media (min-width: 768px) {
                    .hero {
                        padding: 80px 0;
                    }

                    .hero h1 {
                        font-size: 2.8rem;
                    }

                    .hero-description {
                        font-size: 1.2rem;
                        max-width: 700px;
                    }

                    .section-padding {
                        padding: 80px 0;
                    }

                    .section-title {
                        font-size: 2.2rem;
                    }

                    .process {
                        margin: 0;
                        border-radius: 20px;
                        padding: 60px 40px;
                    }

                    .step {
                        flex-direction: row;
                        text-align: left;
                        align-items: flex-start;
                    }

                    .step-number {
                        margin-bottom: 0;
                    }

                    .pricing-cards {
                        grid-template-columns: repeat(2, 1fr);
                        gap: 25px;
                    }

                    .pricing-card {
                        padding: 30px 25px;
                    }

                    .pricing-card h3 {
                        font-size: 1.5rem;
                    }

                    .pricing-card .price {
                        font-size: 2.5rem;
                    }

                    .hosting-options {
                        flex-direction: row;
                        justify-content: center;
                        gap: 25px;
                    }

                    .hosting-option {
                        width: 250px;
                        padding: 30px 25px;
                    }

                    .hosting-option h3 {
                        font-size: 1.5rem;
                    }

                    .hosting-option .price {
                        font-size: 2.2rem;
                    }
                }

                /* Desktop Styles */
                @media (min-width: 1024px) {
                    .hero h1 {
                        font-size: 3.5rem;
                    }

                    .pricing-cards {
                        grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
                        gap: 30px;
                    }

                    .pricing-card:hover {
                        transform: translateY(-5px);
                    }

                    .hosting-option:hover {
                        transform: translateY(-5px);
                    }
                }

                /* Small mobile devices */
                @media (max-width: 360px) {
                    .hero h1 {
                        font-size: 1.8rem;
                    }

                    .hero-description {
                        font-size: 1rem;
                        padding: 0 15px;
                    }

                    .section-title {
                        font-size: 1.6rem;
                    }

                    .process {
                        padding: 40px 15px;
                    }

                    .step-number {
                        width: 40px;
                        height: 40px;
                        font-size: 1rem;
                    }

                    .step h3 {
                        font-size: 1.2rem;
                    }

                    .step p {
                        font-size: 0.9rem;
                    }

                    .pricing-cards {
                        padding: 0 5px;
                        gap: 15px;
                    }

                    .pricing-card {
                        padding: 20px 15px;
                    }

                    .pricing-card h3 {
                        font-size: 1.2rem;
                    }

                    .pricing-card .price {
                        font-size: 1.8rem;
                    }

                    .pricing-card li {
                        font-size: 0.9rem;
                    }

                    .hosting-option {
                        padding: 20px 15px;
                    }

                    .hosting-option h3 {
                        font-size: 1.2rem;
                    }

                    .hosting-option .price {
                        font-size: 1.6rem;
                    }
                }

                /* Improved touch interactions */
                @media (hover: none) and (pointer: coarse) {
                    .pricing-card:active,
                    .hosting-option:active {
                        transform: scale(0.98);
                    }
                }
            `})]})},Fg=()=>{const{t:v}=bn(),R=[{name:"Elite Teniski Klub boobs",url:"https://wheat-pony-218531.hostingersite.com/",image:"https://images.unsplash.com/photo-1554068865-24cecd4e34b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",category:"Sports Club"},{name:"SignPro",url:"https://orangered-porpoise-307649.hostingersite.com/",image:"https://i.etsystatic.com/19865441/r/il/5fb507/2040003635/il_794xN.2040003635_ize6.jpg",category:"Signage Company"},{name:"Sunny Side Hotel",url:"https://lightslategrey-monkey-401196.hostingersite.com/",image:"https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",category:"Hotel & Hospitality"},{name:"Picerija Plamen",url:"https://peru-lyrebird-995805.hostingersite.com/",image:"https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",category:"Restaurant"}];return d.jsxs("main",{children:[d.jsx("section",{className:"hero section-padding",children:d.jsxs("div",{className:"container",children:[d.jsx("h1",{className:"text-gradient",children:v("portfolio.hero.title")}),d.jsx("p",{className:"hero-description",children:v("portfolio.hero.description")})]})}),d.jsx("section",{className:"portfolio section-padding",children:d.jsxs("div",{className:"container",children:[d.jsx("h2",{className:"section-title",children:v("portfolio.projects.title")}),d.jsx("p",{className:"portfolio-subtitle",children:v("portfolio.projects.subtitle")}),d.jsx("div",{className:"portfolio-grid",children:R.map((H,m)=>d.jsxs("a",{href:H.url,target:"_blank",rel:"noopener noreferrer",className:"portfolio-card",children:[d.jsx("div",{className:"portfolio-background",style:{backgroundImage:H.image?`url(${H.image})`:"none",backgroundColor:H.image?"transparent":"#000000"}}),d.jsxs("div",{className:"portfolio-content",children:[d.jsx("h3",{className:"portfolio-name",children:H.name}),d.jsx("p",{className:"portfolio-category",children:H.category})]}),d.jsx("div",{className:"portfolio-overlay",children:d.jsx("span",{className:"portfolio-link-text",children:v("portfolio.visit")})})]},m))})]})}),d.jsx("section",{className:"portfolio-cta section-padding",children:d.jsx("div",{className:"container",children:d.jsxs("div",{className:"cta-content",children:[d.jsx("h2",{children:v("portfolio.cta.title")}),d.jsx("p",{children:v("portfolio.cta.description")}),d.jsx("a",{href:"#contact",className:"btn btn-large",children:v("portfolio.cta.button")})]})})}),d.jsx("style",{jsx:!0,children:`
                .hero {
                    text-align: center;
                    background: linear-gradient(135deg, rgba(81, 38, 210, 0.05) 0%, rgba(123, 74, 255, 0.05) 100%);
                    padding: 50px 0;
                }

                .hero h1 {
                    font-size: 2.2rem;
                    font-weight: 800;
                    margin-bottom: 16px;
                    line-height: 1.2;
                    padding: 0 15px;
                }

                .hero-description {
                    font-size: 1.1rem;
                    max-width: 100%;
                    margin: 0 auto;
                    line-height: 1.6;
                    color: var(--gray-600);
                    padding: 0 20px;
                }

                body.dark-mode .hero-description {
                    color: var(--gray-300);
                }

                .section-padding {
                    padding: 50px 0;
                }

                .section-title {
                    text-align: center;
                    margin-bottom: 16px;
                    font-size: 1.8rem;
                    font-weight: 700;
                    padding: 0 15px;
                }

                .portfolio-subtitle {
                    text-align: center;
                    font-size: 1rem;
                    color: var(--gray-600);
                    margin-bottom: 40px;
                    max-width: 100%;
                    margin-left: auto;
                    margin-right: auto;
                    padding: 0 20px;
                    line-height: 1.5;
                }

                body.dark-mode .portfolio-subtitle {
                    color: var(--gray-300);
                }

                .portfolio-grid {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 20px;
                    margin-top: 30px;
                    padding: 0 10px;
                }

                .portfolio-card {
                    position: relative;
                    height: 220px;
                    border-radius: 12px;
                    overflow: hidden;
                    text-decoration: none;
                    color: inherit;
                    transition: all 0.3s ease;
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
                    border: 1px solid rgba(81, 38, 210, 0.1);
                    -webkit-tap-highlight-color: transparent;
                }

                body.dark-mode .portfolio-card {
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
                    border-color: rgba(255, 255, 255, 0.1);
                }

                .portfolio-card:active {
                    transform: scale(0.98);
                }

                .portfolio-background {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background-size: cover;
                    background-position: center;
                    background-repeat: no-repeat;
                    filter: blur(6px) brightness(0.7);
                    transition: filter 0.3s ease;
                }

                .portfolio-card:hover .portfolio-background,
                .portfolio-card:focus .portfolio-background {
                    filter: blur(3px) brightness(0.8);
                }

                /* For cards without images - black background */
                .portfolio-background:not([style*="background-image"]) {
                    filter: none;
                    background: linear-gradient(135deg, #000000 0%, #333333 100%);
                }

                .portfolio-card:hover .portfolio-background:not([style*="background-image"]),
                .portfolio-card:focus .portfolio-background:not([style*="background-image"]) {
                    filter: brightness(1.1);
                }

                .portfolio-content {
                    position: relative;
                    z-index: 2;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    padding: 20px 15px;
                }

                .portfolio-name {
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: white;
                    margin-bottom: 8px;
                    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
                    transition: all 0.3s ease;
                    line-height: 1.2;
                }

                .portfolio-card:hover .portfolio-name,
                .portfolio-card:focus .portfolio-name {
                    transform: scale(1.05);
                }

                .portfolio-category {
                    color: rgba(255, 255, 255, 0.9);
                    font-size: 0.9rem;
                    font-weight: 500;
                    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
                    margin: 0;
                    line-height: 1.3;
                }

                .portfolio-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(81, 38, 210, 0.9);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    opacity: 0;
                    transition: opacity 0.3s ease;
                    z-index: 3;
                }

                .portfolio-card:hover .portfolio-overlay,
                .portfolio-card:focus .portfolio-overlay {
                    opacity: 1;
                }

                .portfolio-link-text {
                    color: white;
                    font-size: 1rem;
                    font-weight: 600;
                    padding: 10px 20px;
                    border: 2px solid white;
                    border-radius: 6px;
                    transition: all 0.3s ease;
                }

                .portfolio-card:hover .portfolio-link-text,
                .portfolio-card:focus .portfolio-link-text {
                    background: white;
                    color: var(--primary-purple);
                }

                .portfolio-cta {
                    background: linear-gradient(135deg, var(--primary-purple) 0%, var(--primary-purple-light) 100%);
                    color: white;
                    text-align: center;
                    padding: 50px 0;
                }

                .cta-content {
                    max-width: 100%;
                    margin: 0 auto;
                    padding: 0 20px;
                }

                .cta-content h2 {
                    font-size: 1.8rem;
                    margin-bottom: 16px;
                    color: white;
                    line-height: 1.2;
                }

                .cta-content p {
                    font-size: 1rem;
                    margin-bottom: 25px;
                    opacity: 0.9;
                    line-height: 1.5;
                }

                .btn-large {
                    padding: 14px 32px;
                    font-size: 1rem;
                    background: white;
                    color: var(--primary-purple);
                    border-radius: 8px;
                    font-weight: 600;
                }

                .btn-large:hover,
                .btn-large:focus {
                    background: rgba(255, 255, 255, 0.9);
                    transform: translateY(-2px);
                }

                .btn-large:active {
                    transform: translateY(0);
                }

                /* Tablet Styles */
                @media (min-width: 768px) {
                    .hero {
                        padding: 80px 0;
                    }

                    .hero h1 {
                        font-size: 2.8rem;
                    }

                    .hero-description {
                        font-size: 1.2rem;
                        max-width: 700px;
                    }

                    .section-padding {
                        padding: 80px 0;
                    }

                    .section-title {
                        font-size: 2.2rem;
                    }

                    .portfolio-subtitle {
                        font-size: 1.1rem;
                        margin-bottom: 60px;
                    }

                    .portfolio-grid {
                        grid-template-columns: repeat(2, 1fr);
                        gap: 25px;
                        margin-top: 40px;
                        padding: 0;
                    }

                    .portfolio-card {
                        height: 280px;
                        border-radius: 16px;
                    }

                    .portfolio-name {
                        font-size: 1.8rem;
                    }

                    .portfolio-category {
                        font-size: 1rem;
                    }

                    .portfolio-link-text {
                        font-size: 1.1rem;
                        padding: 12px 25px;
                    }

                    .cta-content h2 {
                        font-size: 2.2rem;
                    }

                    .cta-content p {
                        font-size: 1.1rem;
                    }
                }

                /* Desktop Styles */
                @media (min-width: 1024px) {
                    .hero h1 {
                        font-size: 3.5rem;
                    }

                    .portfolio-grid {
                        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
                        gap: 30px;
                    }

                    .portfolio-card {
                        height: 300px;
                    }

                    .portfolio-card:hover {
                        transform: translateY(-8px);
                        box-shadow: 0 20px 40px rgba(81, 38, 210, 0.2);
                    }

                    .portfolio-name {
                        font-size: 2rem;
                    }

                    .portfolio-link-text {
                        font-size: 1.3rem;
                    }

                    .cta-content h2 {
                        font-size: 2.5rem;
                    }

                    .cta-content p {
                        font-size: 1.2rem;
                    }
                }

                /* Small mobile devices */
                @media (max-width: 360px) {
                    .hero h1 {
                        font-size: 1.8rem;
                    }

                    .hero-description {
                        font-size: 1rem;
                    }

                    .section-title {
                        font-size: 1.6rem;
                    }

                    .portfolio-grid {
                        padding: 0 5px;
                        gap: 15px;
                    }

                    .portfolio-card {
                        height: 200px;
                    }

                    .portfolio-name {
                        font-size: 1.3rem;
                    }

                    .portfolio-category {
                        font-size: 0.85rem;
                    }

                    .portfolio-link-text {
                        font-size: 0.9rem;
                        padding: 8px 16px;
                    }

                    .cta-content h2 {
                        font-size: 1.6rem;
                    }

                    .cta-content p {
                        font-size: 0.95rem;
                    }
                }

                /* Improved touch interactions */
                @media (hover: none) and (pointer: coarse) {
                    .portfolio-overlay {
                        opacity: 1;
                        background: rgba(81, 38, 210, 0.7);
                    }

                    .portfolio-card:active .portfolio-overlay {
                        background: rgba(81, 38, 210, 0.9);
                    }

                    .portfolio-link-text {
                        background: rgba(255, 255, 255, 0.1);
                        backdrop-filter: blur(10px);
                    }

                    .portfolio-card:active .portfolio-link-text {
                        background: white;
                        color: var(--primary-purple);
                    }
                }
            `})]})};function Pg(){const[v,R]=ve.useState("home");return ve.useEffect(()=>{const H=m=>{const q=m.target.closest("a");if(q&&q.getAttribute("href")){const D=q.getAttribute("href");D==="/services"?(m.preventDefault(),R("services"),window.scrollTo(0,0)):D==="/portfolio"?(m.preventDefault(),R("portfolio"),window.scrollTo(0,0)):D==="/"&&(m.preventDefault(),R("home"),window.scrollTo(0,0))}};return document.addEventListener("click",H),()=>document.removeEventListener("click",H)},[]),d.jsxs("div",{className:"app",children:[d.jsx(kg,{}),v==="home"&&d.jsx(Wg,{}),v==="services"&&d.jsx($g,{}),v==="portfolio"&&d.jsx(Fg,{}),d.jsx(Jg,{})]})}function Ig(){return d.jsx(Vg,{children:d.jsx(Pg,{})})}Lg.createRoot(document.getElementById("root")).render(d.jsx(qg.StrictMode,{children:d.jsx(Ig,{})}));
