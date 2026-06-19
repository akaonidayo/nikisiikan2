(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var rh={exports:{}},Ho={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yg;function ty(){if(Yg)return Ho;Yg=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:h,ref:l!==void 0?l:null,props:c}}return Ho.Fragment=t,Ho.jsx=i,Ho.jsxs=i,Ho}var jg;function ey(){return jg||(jg=1,rh.exports=ty()),rh.exports}var et=ey(),oh={exports:{}},ce={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zg;function ny(){if(Zg)return ce;Zg=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),g=Symbol.iterator;function S(P){return P===null||typeof P!="object"?null:(P=g&&P[g]||P["@@iterator"],typeof P=="function"?P:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,M={};function y(P,Q,vt){this.props=P,this.context=Q,this.refs=M,this.updater=vt||E}y.prototype.isReactComponent={},y.prototype.setState=function(P,Q){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,Q,"setState")},y.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function C(){}C.prototype=y.prototype;function L(P,Q,vt){this.props=P,this.context=Q,this.refs=M,this.updater=vt||E}var N=L.prototype=new C;N.constructor=L,w(N,y.prototype),N.isPureReactComponent=!0;var H=Array.isArray;function U(){}var I={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function z(P,Q,vt){var Nt=vt.ref;return{$$typeof:r,type:P,key:Q,ref:Nt!==void 0?Nt:null,props:vt}}function Z(P,Q){return z(P.type,Q,P.props)}function B(P){return typeof P=="object"&&P!==null&&P.$$typeof===r}function X(P){var Q={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(vt){return Q[vt]})}var ut=/\/+/g;function ht(P,Q){return typeof P=="object"&&P!==null&&P.key!=null?X(""+P.key):Q.toString(36)}function W(P){switch(P.status){case"fulfilled":return P.value;case"rejected":throw P.reason;default:switch(typeof P.status=="string"?P.then(U,U):(P.status="pending",P.then(function(Q){P.status==="pending"&&(P.status="fulfilled",P.value=Q)},function(Q){P.status==="pending"&&(P.status="rejected",P.reason=Q)})),P.status){case"fulfilled":return P.value;case"rejected":throw P.reason}}throw P}function O(P,Q,vt,Nt,Ot){var ct=typeof P;(ct==="undefined"||ct==="boolean")&&(P=null);var Mt=!1;if(P===null)Mt=!0;else switch(ct){case"bigint":case"string":case"number":Mt=!0;break;case"object":switch(P.$$typeof){case r:case t:Mt=!0;break;case v:return Mt=P._init,O(Mt(P._payload),Q,vt,Nt,Ot)}}if(Mt)return Ot=Ot(P),Mt=Nt===""?"."+ht(P,0):Nt,H(Ot)?(vt="",Mt!=null&&(vt=Mt.replace(ut,"$&/")+"/"),O(Ot,Q,vt,"",function(ie){return ie})):Ot!=null&&(B(Ot)&&(Ot=Z(Ot,vt+(Ot.key==null||P&&P.key===Ot.key?"":(""+Ot.key).replace(ut,"$&/")+"/")+Mt)),Q.push(Ot)),1;Mt=0;var Dt=Nt===""?".":Nt+":";if(H(P))for(var Ft=0;Ft<P.length;Ft++)Nt=P[Ft],ct=Dt+ht(Nt,Ft),Mt+=O(Nt,Q,vt,ct,Ot);else if(Ft=S(P),typeof Ft=="function")for(P=Ft.call(P),Ft=0;!(Nt=P.next()).done;)Nt=Nt.value,ct=Dt+ht(Nt,Ft++),Mt+=O(Nt,Q,vt,ct,Ot);else if(ct==="object"){if(typeof P.then=="function")return O(W(P),Q,vt,Nt,Ot);throw Q=String(P),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.")}return Mt}function F(P,Q,vt){if(P==null)return P;var Nt=[],Ot=0;return O(P,Nt,"","",function(ct){return Q.call(vt,ct,Ot++)}),Nt}function lt(P){if(P._status===-1){var Q=P._result;Q=Q(),Q.then(function(vt){(P._status===0||P._status===-1)&&(P._status=1,P._result=vt)},function(vt){(P._status===0||P._status===-1)&&(P._status=2,P._result=vt)}),P._status===-1&&(P._status=0,P._result=Q)}if(P._status===1)return P._result.default;throw P._result}var mt=typeof reportError=="function"?reportError:function(P){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof P=="object"&&P!==null&&typeof P.message=="string"?String(P.message):String(P),error:P});if(!window.dispatchEvent(Q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",P);return}console.error(P)},Et={map:F,forEach:function(P,Q,vt){F(P,function(){Q.apply(this,arguments)},vt)},count:function(P){var Q=0;return F(P,function(){Q++}),Q},toArray:function(P){return F(P,function(Q){return Q})||[]},only:function(P){if(!B(P))throw Error("React.Children.only expected to receive a single React element child.");return P}};return ce.Activity=x,ce.Children=Et,ce.Component=y,ce.Fragment=i,ce.Profiler=l,ce.PureComponent=L,ce.StrictMode=s,ce.Suspense=m,ce.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,ce.__COMPILER_RUNTIME={__proto__:null,c:function(P){return I.H.useMemoCache(P)}},ce.cache=function(P){return function(){return P.apply(null,arguments)}},ce.cacheSignal=function(){return null},ce.cloneElement=function(P,Q,vt){if(P==null)throw Error("The argument must be a React element, but you passed "+P+".");var Nt=w({},P.props),Ot=P.key;if(Q!=null)for(ct in Q.key!==void 0&&(Ot=""+Q.key),Q)!T.call(Q,ct)||ct==="key"||ct==="__self"||ct==="__source"||ct==="ref"&&Q.ref===void 0||(Nt[ct]=Q[ct]);var ct=arguments.length-2;if(ct===1)Nt.children=vt;else if(1<ct){for(var Mt=Array(ct),Dt=0;Dt<ct;Dt++)Mt[Dt]=arguments[Dt+2];Nt.children=Mt}return z(P.type,Ot,Nt)},ce.createContext=function(P){return P={$$typeof:h,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null},P.Provider=P,P.Consumer={$$typeof:c,_context:P},P},ce.createElement=function(P,Q,vt){var Nt,Ot={},ct=null;if(Q!=null)for(Nt in Q.key!==void 0&&(ct=""+Q.key),Q)T.call(Q,Nt)&&Nt!=="key"&&Nt!=="__self"&&Nt!=="__source"&&(Ot[Nt]=Q[Nt]);var Mt=arguments.length-2;if(Mt===1)Ot.children=vt;else if(1<Mt){for(var Dt=Array(Mt),Ft=0;Ft<Mt;Ft++)Dt[Ft]=arguments[Ft+2];Ot.children=Dt}if(P&&P.defaultProps)for(Nt in Mt=P.defaultProps,Mt)Ot[Nt]===void 0&&(Ot[Nt]=Mt[Nt]);return z(P,ct,Ot)},ce.createRef=function(){return{current:null}},ce.forwardRef=function(P){return{$$typeof:d,render:P}},ce.isValidElement=B,ce.lazy=function(P){return{$$typeof:v,_payload:{_status:-1,_result:P},_init:lt}},ce.memo=function(P,Q){return{$$typeof:p,type:P,compare:Q===void 0?null:Q}},ce.startTransition=function(P){var Q=I.T,vt={};I.T=vt;try{var Nt=P(),Ot=I.S;Ot!==null&&Ot(vt,Nt),typeof Nt=="object"&&Nt!==null&&typeof Nt.then=="function"&&Nt.then(U,mt)}catch(ct){mt(ct)}finally{Q!==null&&vt.types!==null&&(Q.types=vt.types),I.T=Q}},ce.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},ce.use=function(P){return I.H.use(P)},ce.useActionState=function(P,Q,vt){return I.H.useActionState(P,Q,vt)},ce.useCallback=function(P,Q){return I.H.useCallback(P,Q)},ce.useContext=function(P){return I.H.useContext(P)},ce.useDebugValue=function(){},ce.useDeferredValue=function(P,Q){return I.H.useDeferredValue(P,Q)},ce.useEffect=function(P,Q){return I.H.useEffect(P,Q)},ce.useEffectEvent=function(P){return I.H.useEffectEvent(P)},ce.useId=function(){return I.H.useId()},ce.useImperativeHandle=function(P,Q,vt){return I.H.useImperativeHandle(P,Q,vt)},ce.useInsertionEffect=function(P,Q){return I.H.useInsertionEffect(P,Q)},ce.useLayoutEffect=function(P,Q){return I.H.useLayoutEffect(P,Q)},ce.useMemo=function(P,Q){return I.H.useMemo(P,Q)},ce.useOptimistic=function(P,Q){return I.H.useOptimistic(P,Q)},ce.useReducer=function(P,Q,vt){return I.H.useReducer(P,Q,vt)},ce.useRef=function(P){return I.H.useRef(P)},ce.useState=function(P){return I.H.useState(P)},ce.useSyncExternalStore=function(P,Q,vt){return I.H.useSyncExternalStore(P,Q,vt)},ce.useTransition=function(){return I.H.useTransition()},ce.version="19.2.7",ce}var Kg;function Xd(){return Kg||(Kg=1,oh.exports=ny()),oh.exports}var Zt=Xd(),lh={exports:{}},Vo={},ch={exports:{}},uh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qg;function iy(){return Qg||(Qg=1,(function(r){function t(O,F){var lt=O.length;O.push(F);t:for(;0<lt;){var mt=lt-1>>>1,Et=O[mt];if(0<l(Et,F))O[mt]=F,O[lt]=Et,lt=mt;else break t}}function i(O){return O.length===0?null:O[0]}function s(O){if(O.length===0)return null;var F=O[0],lt=O.pop();if(lt!==F){O[0]=lt;t:for(var mt=0,Et=O.length,P=Et>>>1;mt<P;){var Q=2*(mt+1)-1,vt=O[Q],Nt=Q+1,Ot=O[Nt];if(0>l(vt,lt))Nt<Et&&0>l(Ot,vt)?(O[mt]=Ot,O[Nt]=lt,mt=Nt):(O[mt]=vt,O[Q]=lt,mt=Q);else if(Nt<Et&&0>l(Ot,lt))O[mt]=Ot,O[Nt]=lt,mt=Nt;else break t}}return F}function l(O,F){var lt=O.sortIndex-F.sortIndex;return lt!==0?lt:O.id-F.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();r.unstable_now=function(){return h.now()-d}}var m=[],p=[],v=1,x=null,g=3,S=!1,E=!1,w=!1,M=!1,y=typeof setTimeout=="function"?setTimeout:null,C=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function N(O){for(var F=i(p);F!==null;){if(F.callback===null)s(p);else if(F.startTime<=O)s(p),F.sortIndex=F.expirationTime,t(m,F);else break;F=i(p)}}function H(O){if(w=!1,N(O),!E)if(i(m)!==null)E=!0,U||(U=!0,X());else{var F=i(p);F!==null&&W(H,F.startTime-O)}}var U=!1,I=-1,T=5,z=-1;function Z(){return M?!0:!(r.unstable_now()-z<T)}function B(){if(M=!1,U){var O=r.unstable_now();z=O;var F=!0;try{t:{E=!1,w&&(w=!1,C(I),I=-1),S=!0;var lt=g;try{e:{for(N(O),x=i(m);x!==null&&!(x.expirationTime>O&&Z());){var mt=x.callback;if(typeof mt=="function"){x.callback=null,g=x.priorityLevel;var Et=mt(x.expirationTime<=O);if(O=r.unstable_now(),typeof Et=="function"){x.callback=Et,N(O),F=!0;break e}x===i(m)&&s(m),N(O)}else s(m);x=i(m)}if(x!==null)F=!0;else{var P=i(p);P!==null&&W(H,P.startTime-O),F=!1}}break t}finally{x=null,g=lt,S=!1}F=void 0}}finally{F?X():U=!1}}}var X;if(typeof L=="function")X=function(){L(B)};else if(typeof MessageChannel<"u"){var ut=new MessageChannel,ht=ut.port2;ut.port1.onmessage=B,X=function(){ht.postMessage(null)}}else X=function(){y(B,0)};function W(O,F){I=y(function(){O(r.unstable_now())},F)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(O){O.callback=null},r.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<O?Math.floor(1e3/O):5},r.unstable_getCurrentPriorityLevel=function(){return g},r.unstable_next=function(O){switch(g){case 1:case 2:case 3:var F=3;break;default:F=g}var lt=g;g=F;try{return O()}finally{g=lt}},r.unstable_requestPaint=function(){M=!0},r.unstable_runWithPriority=function(O,F){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var lt=g;g=O;try{return F()}finally{g=lt}},r.unstable_scheduleCallback=function(O,F,lt){var mt=r.unstable_now();switch(typeof lt=="object"&&lt!==null?(lt=lt.delay,lt=typeof lt=="number"&&0<lt?mt+lt:mt):lt=mt,O){case 1:var Et=-1;break;case 2:Et=250;break;case 5:Et=1073741823;break;case 4:Et=1e4;break;default:Et=5e3}return Et=lt+Et,O={id:v++,callback:F,priorityLevel:O,startTime:lt,expirationTime:Et,sortIndex:-1},lt>mt?(O.sortIndex=lt,t(p,O),i(m)===null&&O===i(p)&&(w?(C(I),I=-1):w=!0,W(H,lt-mt))):(O.sortIndex=Et,t(m,O),E||S||(E=!0,U||(U=!0,X()))),O},r.unstable_shouldYield=Z,r.unstable_wrapCallback=function(O){var F=g;return function(){var lt=g;g=F;try{return O.apply(this,arguments)}finally{g=lt}}}})(uh)),uh}var Jg;function ay(){return Jg||(Jg=1,ch.exports=iy()),ch.exports}var fh={exports:{}},Hn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $g;function sy(){if($g)return Hn;$g=1;var r=Xd();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)p+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,v){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:""+x,children:m,containerInfo:p,implementation:v}}var h=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Hn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Hn.createPortal=function(m,p){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,v)},Hn.flushSync=function(m){var p=h.T,v=s.p;try{if(h.T=null,s.p=2,m)return m()}finally{h.T=p,s.p=v,s.d.f()}},Hn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},Hn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Hn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var v=p.as,x=d(v,p.crossOrigin),g=typeof p.integrity=="string"?p.integrity:void 0,S=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;v==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:x,integrity:g,fetchPriority:S}):v==="script"&&s.d.X(m,{crossOrigin:x,integrity:g,fetchPriority:S,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Hn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var v=d(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},Hn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var v=p.as,x=d(v,p.crossOrigin);s.d.L(m,v,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Hn.preloadModule=function(m,p){if(typeof m=="string")if(p){var v=d(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},Hn.requestFormReset=function(m){s.d.r(m)},Hn.unstable_batchedUpdates=function(m,p){return m(p)},Hn.useFormState=function(m,p,v){return h.H.useFormState(m,p,v)},Hn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Hn.version="19.2.7",Hn}var t_;function ry(){if(t_)return fh.exports;t_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),fh.exports=sy(),fh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var e_;function oy(){if(e_)return Vo;e_=1;var r=ay(),t=Xd(),i=ry();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(s(188))}function p(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),e;if(f===o)return m(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=f;else{for(var _=!1,R=u.child;R;){if(R===a){_=!0,a=u,o=f;break}if(R===o){_=!0,o=u,a=f;break}R=R.sibling}if(!_){for(R=f.child;R;){if(R===a){_=!0,a=f,o=u;break}if(R===o){_=!0,o=f,a=u;break}R=R.sibling}if(!_)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function v(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=v(e),n!==null)return n;e=e.sibling}return null}var x=Object.assign,g=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),C=Symbol.for("react.consumer"),L=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),H=Symbol.for("react.suspense"),U=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),z=Symbol.for("react.activity"),Z=Symbol.for("react.memo_cache_sentinel"),B=Symbol.iterator;function X(e){return e===null||typeof e!="object"?null:(e=B&&e[B]||e["@@iterator"],typeof e=="function"?e:null)}var ut=Symbol.for("react.client.reference");function ht(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ut?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case w:return"Fragment";case y:return"Profiler";case M:return"StrictMode";case H:return"Suspense";case U:return"SuspenseList";case z:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case E:return"Portal";case L:return e.displayName||"Context";case C:return(e._context.displayName||"Context")+".Consumer";case N:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case I:return n=e.displayName||null,n!==null?n:ht(e.type)||"Memo";case T:n=e._payload,e=e._init;try{return ht(e(n))}catch{}}return null}var W=Array.isArray,O=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,lt={pending:!1,data:null,method:null,action:null},mt=[],Et=-1;function P(e){return{current:e}}function Q(e){0>Et||(e.current=mt[Et],mt[Et]=null,Et--)}function vt(e,n){Et++,mt[Et]=e.current,e.current=n}var Nt=P(null),Ot=P(null),ct=P(null),Mt=P(null);function Dt(e,n){switch(vt(ct,n),vt(Ot,e),vt(Nt,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?gg(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=gg(n),e=_g(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Q(Nt),vt(Nt,e)}function Ft(){Q(Nt),Q(Ot),Q(ct)}function ie(e){e.memoizedState!==null&&vt(Mt,e);var n=Nt.current,a=_g(n,e.type);n!==a&&(vt(Ot,e),vt(Nt,a))}function Kt(e){Ot.current===e&&(Q(Nt),Q(Ot)),Mt.current===e&&(Q(Mt),Io._currentValue=lt)}var se,oe;function xe(e){if(se===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);se=n&&n[1]||"",oe=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+se+e+oe}var Fe=!1;function ue(e,n){if(!e||Fe)return"";Fe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var St=function(){throw Error()};if(Object.defineProperty(St.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(St,[])}catch(ft){var ot=ft}Reflect.construct(e,[],St)}else{try{St.call()}catch(ft){ot=ft}e.call(St.prototype)}}else{try{throw Error()}catch(ft){ot=ft}(St=e())&&typeof St.catch=="function"&&St.catch(function(){})}}catch(ft){if(ft&&ot&&typeof ft.stack=="string")return[ft.stack,ot.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),_=f[0],R=f[1];if(_&&R){var G=_.split(`
`),st=R.split(`
`);for(u=o=0;o<G.length&&!G[o].includes("DetermineComponentFrameRoot");)o++;for(;u<st.length&&!st[u].includes("DetermineComponentFrameRoot");)u++;if(o===G.length||u===st.length)for(o=G.length-1,u=st.length-1;1<=o&&0<=u&&G[o]!==st[u];)u--;for(;1<=o&&0<=u;o--,u--)if(G[o]!==st[u]){if(o!==1||u!==1)do if(o--,u--,0>u||G[o]!==st[u]){var pt=`
`+G[o].replace(" at new "," at ");return e.displayName&&pt.includes("<anonymous>")&&(pt=pt.replace("<anonymous>",e.displayName)),pt}while(1<=o&&0<=u);break}}}finally{Fe=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?xe(a):""}function hn(e,n){switch(e.tag){case 26:case 27:case 5:return xe(e.type);case 16:return xe("Lazy");case 13:return e.child!==n&&n!==null?xe("Suspense Fallback"):xe("Suspense");case 19:return xe("SuspenseList");case 0:case 15:return ue(e.type,!1);case 11:return ue(e.type.render,!1);case 1:return ue(e.type,!0);case 31:return xe("Activity");default:return""}}function Ve(e){try{var n="",a=null;do n+=hn(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Mn=Object.prototype.hasOwnProperty,q=r.unstable_scheduleCallback,en=r.unstable_cancelCallback,de=r.unstable_shouldYield,Oe=r.unstable_requestPaint,Ut=r.unstable_now,Le=r.unstable_getCurrentPriorityLevel,D=r.unstable_ImmediatePriority,b=r.unstable_UserBlockingPriority,$=r.unstable_NormalPriority,gt=r.unstable_LowPriority,Tt=r.unstable_IdlePriority,Pt=r.log,zt=r.unstable_setDisableYieldValue,tt=null,J=null;function Ct(e){if(typeof Pt=="function"&&zt(e),J&&typeof J.setStrictMode=="function")try{J.setStrictMode(tt,e)}catch{}}var wt=Math.clz32?Math.clz32:Wt,At=Math.log,Rt=Math.LN2;function Wt(e){return e>>>=0,e===0?32:31-(At(e)/Rt|0)|0}var te=256,re=262144,V=4194304;function bt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function dt(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,f=e.suspendedLanes,_=e.pingedLanes;e=e.warmLanes;var R=o&134217727;return R!==0?(o=R&~f,o!==0?u=bt(o):(_&=R,_!==0?u=bt(_):a||(a=R&~e,a!==0&&(u=bt(a))))):(R=o&~f,R!==0?u=bt(R):_!==0?u=bt(_):a||(a=o&~e,a!==0&&(u=bt(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Lt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function yt(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function xt(){var e=V;return V<<=1,(V&62914560)===0&&(V=4194304),e}function Gt(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function qt(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Se(e,n,a,o,u,f){var _=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var R=e.entanglements,G=e.expirationTimes,st=e.hiddenUpdates;for(a=_&~a;0<a;){var pt=31-wt(a),St=1<<pt;R[pt]=0,G[pt]=-1;var ot=st[pt];if(ot!==null)for(st[pt]=null,pt=0;pt<ot.length;pt++){var ft=ot[pt];ft!==null&&(ft.lane&=-536870913)}a&=~St}o!==0&&fe(e,o,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(_&~n))}function fe(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-wt(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function _n(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-wt(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function vn(e,n){var a=n&-n;return a=(a&42)!==0?1:$n(a),(a&(e.suspendedLanes|n))!==0?0:a}function $n(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function fa(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Yi(){var e=F.p;return e!==0?e:(e=window.event,e===void 0?32:Gg(e.type))}function nn(e,n){var a=F.p;try{return F.p=e,n()}finally{F.p=a}}var we=Math.random().toString(36).slice(2),De="__reactFiber$"+we,Be="__reactProps$"+we,Ze="__reactContainer$"+we,xn="__reactEvents$"+we,Ti="__reactListeners$"+we,Yn="__reactHandles$"+we,li="__reactResources$"+we,ci="__reactMarker$"+we;function ji(e){delete e[De],delete e[Be],delete e[xn],delete e[Ti],delete e[Yn]}function jn(e){var n=e[De];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Ze]||a[De]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=Eg(e);e!==null;){if(a=e[De])return a;e=Eg(e)}return n}e=a,a=e.parentNode}return null}function Cn(e){if(e=e[De]||e[Ze]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function ha(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function zi(e){var n=e[li];return n||(n=e[li]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function dn(e){e[ci]=!0}var Js=new Set,A={};function j(e,n){rt(e,n),rt(e+"Capture",n)}function rt(e,n){for(A[e]=n,e=0;e<n.length;e++)Js.add(n[e])}var it=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),nt={},Bt={};function kt(e){return Mn.call(Bt,e)?!0:Mn.call(nt,e)?!1:it.test(e)?Bt[e]=!0:(nt[e]=!0,!1)}function It(e,n,a){if(kt(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Yt(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Xt(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function ee(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function pe(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Jt(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,f=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(_){a=""+_,f.call(this,_)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(_){a=""+_},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Pe(e){if(!e._valueTracker){var n=pe(e)?"checked":"value";e._valueTracker=Jt(e,n,""+e[n])}}function rn(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=pe(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function $e(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var ke=/[\n"\\]/g;function Xe(e){return e.replace(ke,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Vt(e,n,a,o,u,f,_,R){e.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?e.type=_:e.removeAttribute("type"),n!=null?_==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+ee(n)):e.value!==""+ee(n)&&(e.value=""+ee(n)):_!=="submit"&&_!=="reset"||e.removeAttribute("value"),n!=null?Me(e,_,ee(n)):a!=null?Me(e,_,ee(a)):o!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?e.name=""+ee(R):e.removeAttribute("name")}function Gn(e,n,a,o,u,f,_,R){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Pe(e);return}a=a!=null?""+ee(a):"",n=n!=null?""+ee(n):a,R||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=R?e.checked:!!o,e.defaultChecked=!!o,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(e.name=_),Pe(e)}function Me(e,n,a){n==="number"&&$e(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function wn(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+ee(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function ui(e,n,a){if(n!=null&&(n=""+ee(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+ee(a):""}function Ii(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(W(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=ee(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),Pe(e)}function fi(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var We=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function on(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||We.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Fi(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&on(e,u,o)}else for(var f in n)n.hasOwnProperty(f)&&on(e,f,n[f])}function He(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Zi=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Va=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function bs(e){return Va.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function da(){}var nu=null;function iu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var $s=null,tr=null;function mp(e){var n=Cn(e);if(n&&(e=n.stateNode)){var a=e[Be]||null;t:switch(e=n.stateNode,n.type){case"input":if(Vt(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Xe(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[Be]||null;if(!u)throw Error(s(90));Vt(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&rn(o)}break t;case"textarea":ui(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&wn(e,!!a.multiple,n,!1)}}}var au=!1;function gp(e,n,a){if(au)return e(n,a);au=!0;try{var o=e(n);return o}finally{if(au=!1,($s!==null||tr!==null)&&(Zl(),$s&&(n=$s,e=tr,tr=$s=null,mp(n),e)))for(n=0;n<e.length;n++)mp(e[n])}}function $r(e,n){var a=e.stateNode;if(a===null)return null;var o=a[Be]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var pa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),su=!1;if(pa)try{var to={};Object.defineProperty(to,"passive",{get:function(){su=!0}}),window.addEventListener("test",to,to),window.removeEventListener("test",to,to)}catch{su=!1}var ka=null,ru=null,cl=null;function _p(){if(cl)return cl;var e,n=ru,a=n.length,o,u="value"in ka?ka.value:ka.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var _=a-e;for(o=1;o<=_&&n[a-o]===u[f-o];o++);return cl=u.slice(e,1<o?1-o:void 0)}function ul(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function fl(){return!0}function vp(){return!1}function ti(e){function n(a,o,u,f,_){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=_,this.currentTarget=null;for(var R in e)e.hasOwnProperty(R)&&(a=e[R],this[R]=a?a(f):f[R]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?fl:vp,this.isPropagationStopped=vp,this}return x(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=fl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=fl)},persist:function(){},isPersistent:fl}),n}var Es={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hl=ti(Es),eo=x({},Es,{view:0,detail:0}),Jv=ti(eo),ou,lu,no,dl=x({},eo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:uu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==no&&(no&&e.type==="mousemove"?(ou=e.screenX-no.screenX,lu=e.screenY-no.screenY):lu=ou=0,no=e),ou)},movementY:function(e){return"movementY"in e?e.movementY:lu}}),xp=ti(dl),$v=x({},dl,{dataTransfer:0}),tx=ti($v),ex=x({},eo,{relatedTarget:0}),cu=ti(ex),nx=x({},Es,{animationName:0,elapsedTime:0,pseudoElement:0}),ix=ti(nx),ax=x({},Es,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),sx=ti(ax),rx=x({},Es,{data:0}),Sp=ti(rx),ox={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},lx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},cx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ux(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=cx[e])?!!n[e]:!1}function uu(){return ux}var fx=x({},eo,{key:function(e){if(e.key){var n=ox[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=ul(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?lx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:uu,charCode:function(e){return e.type==="keypress"?ul(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ul(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),hx=ti(fx),dx=x({},dl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),yp=ti(dx),px=x({},eo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:uu}),mx=ti(px),gx=x({},Es,{propertyName:0,elapsedTime:0,pseudoElement:0}),_x=ti(gx),vx=x({},dl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),xx=ti(vx),Sx=x({},Es,{newState:0,oldState:0}),yx=ti(Sx),Mx=[9,13,27,32],fu=pa&&"CompositionEvent"in window,io=null;pa&&"documentMode"in document&&(io=document.documentMode);var bx=pa&&"TextEvent"in window&&!io,Mp=pa&&(!fu||io&&8<io&&11>=io),bp=" ",Ep=!1;function Tp(e,n){switch(e){case"keyup":return Mx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ap(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var er=!1;function Ex(e,n){switch(e){case"compositionend":return Ap(n);case"keypress":return n.which!==32?null:(Ep=!0,bp);case"textInput":return e=n.data,e===bp&&Ep?null:e;default:return null}}function Tx(e,n){if(er)return e==="compositionend"||!fu&&Tp(e,n)?(e=_p(),cl=ru=ka=null,er=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Mp&&n.locale!=="ko"?null:n.data;default:return null}}var Ax={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Ax[e.type]:n==="textarea"}function Cp(e,n,a,o){$s?tr?tr.push(o):tr=[o]:$s=o,n=nc(n,"onChange"),0<n.length&&(a=new hl("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var ao=null,so=null;function Rx(e){ug(e,0)}function pl(e){var n=ha(e);if(rn(n))return e}function wp(e,n){if(e==="change")return n}var Dp=!1;if(pa){var hu;if(pa){var du="oninput"in document;if(!du){var Np=document.createElement("div");Np.setAttribute("oninput","return;"),du=typeof Np.oninput=="function"}hu=du}else hu=!1;Dp=hu&&(!document.documentMode||9<document.documentMode)}function Up(){ao&&(ao.detachEvent("onpropertychange",Lp),so=ao=null)}function Lp(e){if(e.propertyName==="value"&&pl(so)){var n=[];Cp(n,so,e,iu(e)),gp(Rx,n)}}function Cx(e,n,a){e==="focusin"?(Up(),ao=n,so=a,ao.attachEvent("onpropertychange",Lp)):e==="focusout"&&Up()}function wx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return pl(so)}function Dx(e,n){if(e==="click")return pl(n)}function Nx(e,n){if(e==="input"||e==="change")return pl(n)}function Ux(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var hi=typeof Object.is=="function"?Object.is:Ux;function ro(e,n){if(hi(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Mn.call(n,u)||!hi(e[u],n[u]))return!1}return!0}function Op(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Pp(e,n){var a=Op(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Op(a)}}function zp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?zp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Ip(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=$e(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=$e(e.document)}return n}function pu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Lx=pa&&"documentMode"in document&&11>=document.documentMode,nr=null,mu=null,oo=null,gu=!1;function Fp(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;gu||nr==null||nr!==$e(o)||(o=nr,"selectionStart"in o&&pu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),oo&&ro(oo,o)||(oo=o,o=nc(mu,"onSelect"),0<o.length&&(n=new hl("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=nr)))}function Ts(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var ir={animationend:Ts("Animation","AnimationEnd"),animationiteration:Ts("Animation","AnimationIteration"),animationstart:Ts("Animation","AnimationStart"),transitionrun:Ts("Transition","TransitionRun"),transitionstart:Ts("Transition","TransitionStart"),transitioncancel:Ts("Transition","TransitionCancel"),transitionend:Ts("Transition","TransitionEnd")},_u={},Bp={};pa&&(Bp=document.createElement("div").style,"AnimationEvent"in window||(delete ir.animationend.animation,delete ir.animationiteration.animation,delete ir.animationstart.animation),"TransitionEvent"in window||delete ir.transitionend.transition);function As(e){if(_u[e])return _u[e];if(!ir[e])return e;var n=ir[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Bp)return _u[e]=n[a];return e}var Gp=As("animationend"),Hp=As("animationiteration"),Vp=As("animationstart"),Ox=As("transitionrun"),Px=As("transitionstart"),zx=As("transitioncancel"),kp=As("transitionend"),Xp=new Map,vu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");vu.push("scrollEnd");function Bi(e,n){Xp.set(e,n),j(n,[e])}var ml=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Ai=[],ar=0,xu=0;function gl(){for(var e=ar,n=xu=ar=0;n<e;){var a=Ai[n];Ai[n++]=null;var o=Ai[n];Ai[n++]=null;var u=Ai[n];Ai[n++]=null;var f=Ai[n];if(Ai[n++]=null,o!==null&&u!==null){var _=o.pending;_===null?u.next=u:(u.next=_.next,_.next=u),o.pending=u}f!==0&&Wp(a,u,f)}}function _l(e,n,a,o){Ai[ar++]=e,Ai[ar++]=n,Ai[ar++]=a,Ai[ar++]=o,xu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Su(e,n,a,o){return _l(e,n,a,o),vl(e)}function Rs(e,n){return _l(e,null,null,n),vl(e)}function Wp(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-wt(a),e=f.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),f):null}function vl(e){if(50<Do)throw Do=0,Df=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var sr={};function Ix(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function di(e,n,a,o){return new Ix(e,n,a,o)}function yu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ma(e,n){var a=e.alternate;return a===null?(a=di(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function qp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function xl(e,n,a,o,u,f){var _=0;if(o=e,typeof e=="function")yu(e)&&(_=1);else if(typeof e=="string")_=VS(e,a,Nt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case z:return e=di(31,a,n,u),e.elementType=z,e.lanes=f,e;case w:return Cs(a.children,u,f,n);case M:_=8,u|=24;break;case y:return e=di(12,a,n,u|2),e.elementType=y,e.lanes=f,e;case H:return e=di(13,a,n,u),e.elementType=H,e.lanes=f,e;case U:return e=di(19,a,n,u),e.elementType=U,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case L:_=10;break t;case C:_=9;break t;case N:_=11;break t;case I:_=14;break t;case T:_=16,o=null;break t}_=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=di(_,a,n,u),n.elementType=e,n.type=o,n.lanes=f,n}function Cs(e,n,a,o){return e=di(7,e,o,n),e.lanes=a,e}function Mu(e,n,a){return e=di(6,e,null,n),e.lanes=a,e}function Yp(e){var n=di(18,null,null,0);return n.stateNode=e,n}function bu(e,n,a){return n=di(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var jp=new WeakMap;function Ri(e,n){if(typeof e=="object"&&e!==null){var a=jp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:Ve(n)},jp.set(e,n),n)}return{value:e,source:n,stack:Ve(n)}}var rr=[],or=0,Sl=null,lo=0,Ci=[],wi=0,Xa=null,Ki=1,Qi="";function ga(e,n){rr[or++]=lo,rr[or++]=Sl,Sl=e,lo=n}function Zp(e,n,a){Ci[wi++]=Ki,Ci[wi++]=Qi,Ci[wi++]=Xa,Xa=e;var o=Ki;e=Qi;var u=32-wt(o)-1;o&=~(1<<u),a+=1;var f=32-wt(n)+u;if(30<f){var _=u-u%5;f=(o&(1<<_)-1).toString(32),o>>=_,u-=_,Ki=1<<32-wt(n)+u|a<<u|o,Qi=f+e}else Ki=1<<f|a<<u|o,Qi=e}function Eu(e){e.return!==null&&(ga(e,1),Zp(e,1,0))}function Tu(e){for(;e===Sl;)Sl=rr[--or],rr[or]=null,lo=rr[--or],rr[or]=null;for(;e===Xa;)Xa=Ci[--wi],Ci[wi]=null,Qi=Ci[--wi],Ci[wi]=null,Ki=Ci[--wi],Ci[wi]=null}function Kp(e,n){Ci[wi++]=Ki,Ci[wi++]=Qi,Ci[wi++]=Xa,Ki=n.id,Qi=n.overflow,Xa=e}var Pn=null,an=null,Re=!1,Wa=null,Di=!1,Au=Error(s(519));function qa(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw co(Ri(n,e)),Au}function Qp(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[De]=e,n[Be]=o,a){case"dialog":Ee("cancel",n),Ee("close",n);break;case"iframe":case"object":case"embed":Ee("load",n);break;case"video":case"audio":for(a=0;a<Uo.length;a++)Ee(Uo[a],n);break;case"source":Ee("error",n);break;case"img":case"image":case"link":Ee("error",n),Ee("load",n);break;case"details":Ee("toggle",n);break;case"input":Ee("invalid",n),Gn(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Ee("invalid",n);break;case"textarea":Ee("invalid",n),Ii(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||pg(n.textContent,a)?(o.popover!=null&&(Ee("beforetoggle",n),Ee("toggle",n)),o.onScroll!=null&&Ee("scroll",n),o.onScrollEnd!=null&&Ee("scrollend",n),o.onClick!=null&&(n.onclick=da),n=!0):n=!1,n||qa(e,!0)}function Jp(e){for(Pn=e.return;Pn;)switch(Pn.tag){case 5:case 31:case 13:Di=!1;return;case 27:case 3:Di=!0;return;default:Pn=Pn.return}}function lr(e){if(e!==Pn)return!1;if(!Re)return Jp(e),Re=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Wf(e.type,e.memoizedProps)),a=!a),a&&an&&qa(e),Jp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));an=bg(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));an=bg(e)}else n===27?(n=an,rs(e.type)?(e=Kf,Kf=null,an=e):an=n):an=Pn?Ui(e.stateNode.nextSibling):null;return!0}function ws(){an=Pn=null,Re=!1}function Ru(){var e=Wa;return e!==null&&(ai===null?ai=e:ai.push.apply(ai,e),Wa=null),e}function co(e){Wa===null?Wa=[e]:Wa.push(e)}var Cu=P(null),Ds=null,_a=null;function Ya(e,n,a){vt(Cu,n._currentValue),n._currentValue=a}function va(e){e._currentValue=Cu.current,Q(Cu)}function wu(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function Du(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var _=u.child;f=f.firstContext;t:for(;f!==null;){var R=f;f=u;for(var G=0;G<n.length;G++)if(R.context===n[G]){f.lanes|=a,R=f.alternate,R!==null&&(R.lanes|=a),wu(f.return,a,e),o||(_=null);break t}f=R.next}}else if(u.tag===18){if(_=u.return,_===null)throw Error(s(341));_.lanes|=a,f=_.alternate,f!==null&&(f.lanes|=a),wu(_,a,e),_=null}else _=u.child;if(_!==null)_.return=u;else for(_=u;_!==null;){if(_===e){_=null;break}if(u=_.sibling,u!==null){u.return=_.return,_=u;break}_=_.return}u=_}}function cr(e,n,a,o){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var _=u.alternate;if(_===null)throw Error(s(387));if(_=_.memoizedProps,_!==null){var R=u.type;hi(u.pendingProps.value,_.value)||(e!==null?e.push(R):e=[R])}}else if(u===Mt.current){if(_=u.alternate,_===null)throw Error(s(387));_.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Io):e=[Io])}u=u.return}e!==null&&Du(n,e,a,o),n.flags|=262144}function yl(e){for(e=e.firstContext;e!==null;){if(!hi(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ns(e){Ds=e,_a=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function zn(e){return $p(Ds,e)}function Ml(e,n){return Ds===null&&Ns(e),$p(e,n)}function $p(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},_a===null){if(e===null)throw Error(s(308));_a=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else _a=_a.next=n;return a}var Fx=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},Bx=r.unstable_scheduleCallback,Gx=r.unstable_NormalPriority,bn={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Nu(){return{controller:new Fx,data:new Map,refCount:0}}function uo(e){e.refCount--,e.refCount===0&&Bx(Gx,function(){e.controller.abort()})}var fo=null,Uu=0,ur=0,fr=null;function Hx(e,n){if(fo===null){var a=fo=[];Uu=0,ur=zf(),fr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Uu++,n.then(tm,tm),n}function tm(){if(--Uu===0&&fo!==null){fr!==null&&(fr.status="fulfilled");var e=fo;fo=null,ur=0,fr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Vx(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var em=O.S;O.S=function(e,n){F0=Ut(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Hx(e,n),em!==null&&em(e,n)};var Us=P(null);function Lu(){var e=Us.current;return e!==null?e:tn.pooledCache}function bl(e,n){n===null?vt(Us,Us.current):vt(Us,n.pool)}function nm(){var e=Lu();return e===null?null:{parent:bn._currentValue,pool:e}}var hr=Error(s(460)),Ou=Error(s(474)),El=Error(s(542)),Tl={then:function(){}};function im(e){return e=e.status,e==="fulfilled"||e==="rejected"}function am(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(da,da),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,rm(e),e;default:if(typeof n.status=="string")n.then(da,da);else{if(e=tn,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,rm(e),e}throw Os=n,hr}}function Ls(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Os=a,hr):a}}var Os=null;function sm(){if(Os===null)throw Error(s(459));var e=Os;return Os=null,e}function rm(e){if(e===hr||e===El)throw Error(s(483))}var dr=null,ho=0;function Al(e){var n=ho;return ho+=1,dr===null&&(dr=[]),am(dr,e,n)}function po(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Rl(e,n){throw n.$$typeof===g?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function om(e){function n(K,k){if(e){var at=K.deletions;at===null?(K.deletions=[k],K.flags|=16):at.push(k)}}function a(K,k){if(!e)return null;for(;k!==null;)n(K,k),k=k.sibling;return null}function o(K){for(var k=new Map;K!==null;)K.key!==null?k.set(K.key,K):k.set(K.index,K),K=K.sibling;return k}function u(K,k){return K=ma(K,k),K.index=0,K.sibling=null,K}function f(K,k,at){return K.index=at,e?(at=K.alternate,at!==null?(at=at.index,at<k?(K.flags|=67108866,k):at):(K.flags|=67108866,k)):(K.flags|=1048576,k)}function _(K){return e&&K.alternate===null&&(K.flags|=67108866),K}function R(K,k,at,_t){return k===null||k.tag!==6?(k=Mu(at,K.mode,_t),k.return=K,k):(k=u(k,at),k.return=K,k)}function G(K,k,at,_t){var ne=at.type;return ne===w?pt(K,k,at.props.children,_t,at.key):k!==null&&(k.elementType===ne||typeof ne=="object"&&ne!==null&&ne.$$typeof===T&&Ls(ne)===k.type)?(k=u(k,at.props),po(k,at),k.return=K,k):(k=xl(at.type,at.key,at.props,null,K.mode,_t),po(k,at),k.return=K,k)}function st(K,k,at,_t){return k===null||k.tag!==4||k.stateNode.containerInfo!==at.containerInfo||k.stateNode.implementation!==at.implementation?(k=bu(at,K.mode,_t),k.return=K,k):(k=u(k,at.children||[]),k.return=K,k)}function pt(K,k,at,_t,ne){return k===null||k.tag!==7?(k=Cs(at,K.mode,_t,ne),k.return=K,k):(k=u(k,at),k.return=K,k)}function St(K,k,at){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=Mu(""+k,K.mode,at),k.return=K,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case S:return at=xl(k.type,k.key,k.props,null,K.mode,at),po(at,k),at.return=K,at;case E:return k=bu(k,K.mode,at),k.return=K,k;case T:return k=Ls(k),St(K,k,at)}if(W(k)||X(k))return k=Cs(k,K.mode,at,null),k.return=K,k;if(typeof k.then=="function")return St(K,Al(k),at);if(k.$$typeof===L)return St(K,Ml(K,k),at);Rl(K,k)}return null}function ot(K,k,at,_t){var ne=k!==null?k.key:null;if(typeof at=="string"&&at!==""||typeof at=="number"||typeof at=="bigint")return ne!==null?null:R(K,k,""+at,_t);if(typeof at=="object"&&at!==null){switch(at.$$typeof){case S:return at.key===ne?G(K,k,at,_t):null;case E:return at.key===ne?st(K,k,at,_t):null;case T:return at=Ls(at),ot(K,k,at,_t)}if(W(at)||X(at))return ne!==null?null:pt(K,k,at,_t,null);if(typeof at.then=="function")return ot(K,k,Al(at),_t);if(at.$$typeof===L)return ot(K,k,Ml(K,at),_t);Rl(K,at)}return null}function ft(K,k,at,_t,ne){if(typeof _t=="string"&&_t!==""||typeof _t=="number"||typeof _t=="bigint")return K=K.get(at)||null,R(k,K,""+_t,ne);if(typeof _t=="object"&&_t!==null){switch(_t.$$typeof){case S:return K=K.get(_t.key===null?at:_t.key)||null,G(k,K,_t,ne);case E:return K=K.get(_t.key===null?at:_t.key)||null,st(k,K,_t,ne);case T:return _t=Ls(_t),ft(K,k,at,_t,ne)}if(W(_t)||X(_t))return K=K.get(at)||null,pt(k,K,_t,ne,null);if(typeof _t.then=="function")return ft(K,k,at,Al(_t),ne);if(_t.$$typeof===L)return ft(K,k,at,Ml(k,_t),ne);Rl(k,_t)}return null}function jt(K,k,at,_t){for(var ne=null,ze=null,Qt=k,ge=k=0,Ae=null;Qt!==null&&ge<at.length;ge++){Qt.index>ge?(Ae=Qt,Qt=null):Ae=Qt.sibling;var Ie=ot(K,Qt,at[ge],_t);if(Ie===null){Qt===null&&(Qt=Ae);break}e&&Qt&&Ie.alternate===null&&n(K,Qt),k=f(Ie,k,ge),ze===null?ne=Ie:ze.sibling=Ie,ze=Ie,Qt=Ae}if(ge===at.length)return a(K,Qt),Re&&ga(K,ge),ne;if(Qt===null){for(;ge<at.length;ge++)Qt=St(K,at[ge],_t),Qt!==null&&(k=f(Qt,k,ge),ze===null?ne=Qt:ze.sibling=Qt,ze=Qt);return Re&&ga(K,ge),ne}for(Qt=o(Qt);ge<at.length;ge++)Ae=ft(Qt,K,ge,at[ge],_t),Ae!==null&&(e&&Ae.alternate!==null&&Qt.delete(Ae.key===null?ge:Ae.key),k=f(Ae,k,ge),ze===null?ne=Ae:ze.sibling=Ae,ze=Ae);return e&&Qt.forEach(function(fs){return n(K,fs)}),Re&&ga(K,ge),ne}function ae(K,k,at,_t){if(at==null)throw Error(s(151));for(var ne=null,ze=null,Qt=k,ge=k=0,Ae=null,Ie=at.next();Qt!==null&&!Ie.done;ge++,Ie=at.next()){Qt.index>ge?(Ae=Qt,Qt=null):Ae=Qt.sibling;var fs=ot(K,Qt,Ie.value,_t);if(fs===null){Qt===null&&(Qt=Ae);break}e&&Qt&&fs.alternate===null&&n(K,Qt),k=f(fs,k,ge),ze===null?ne=fs:ze.sibling=fs,ze=fs,Qt=Ae}if(Ie.done)return a(K,Qt),Re&&ga(K,ge),ne;if(Qt===null){for(;!Ie.done;ge++,Ie=at.next())Ie=St(K,Ie.value,_t),Ie!==null&&(k=f(Ie,k,ge),ze===null?ne=Ie:ze.sibling=Ie,ze=Ie);return Re&&ga(K,ge),ne}for(Qt=o(Qt);!Ie.done;ge++,Ie=at.next())Ie=ft(Qt,K,ge,Ie.value,_t),Ie!==null&&(e&&Ie.alternate!==null&&Qt.delete(Ie.key===null?ge:Ie.key),k=f(Ie,k,ge),ze===null?ne=Ie:ze.sibling=Ie,ze=Ie);return e&&Qt.forEach(function($S){return n(K,$S)}),Re&&ga(K,ge),ne}function Je(K,k,at,_t){if(typeof at=="object"&&at!==null&&at.type===w&&at.key===null&&(at=at.props.children),typeof at=="object"&&at!==null){switch(at.$$typeof){case S:t:{for(var ne=at.key;k!==null;){if(k.key===ne){if(ne=at.type,ne===w){if(k.tag===7){a(K,k.sibling),_t=u(k,at.props.children),_t.return=K,K=_t;break t}}else if(k.elementType===ne||typeof ne=="object"&&ne!==null&&ne.$$typeof===T&&Ls(ne)===k.type){a(K,k.sibling),_t=u(k,at.props),po(_t,at),_t.return=K,K=_t;break t}a(K,k);break}else n(K,k);k=k.sibling}at.type===w?(_t=Cs(at.props.children,K.mode,_t,at.key),_t.return=K,K=_t):(_t=xl(at.type,at.key,at.props,null,K.mode,_t),po(_t,at),_t.return=K,K=_t)}return _(K);case E:t:{for(ne=at.key;k!==null;){if(k.key===ne)if(k.tag===4&&k.stateNode.containerInfo===at.containerInfo&&k.stateNode.implementation===at.implementation){a(K,k.sibling),_t=u(k,at.children||[]),_t.return=K,K=_t;break t}else{a(K,k);break}else n(K,k);k=k.sibling}_t=bu(at,K.mode,_t),_t.return=K,K=_t}return _(K);case T:return at=Ls(at),Je(K,k,at,_t)}if(W(at))return jt(K,k,at,_t);if(X(at)){if(ne=X(at),typeof ne!="function")throw Error(s(150));return at=ne.call(at),ae(K,k,at,_t)}if(typeof at.then=="function")return Je(K,k,Al(at),_t);if(at.$$typeof===L)return Je(K,k,Ml(K,at),_t);Rl(K,at)}return typeof at=="string"&&at!==""||typeof at=="number"||typeof at=="bigint"?(at=""+at,k!==null&&k.tag===6?(a(K,k.sibling),_t=u(k,at),_t.return=K,K=_t):(a(K,k),_t=Mu(at,K.mode,_t),_t.return=K,K=_t),_(K)):a(K,k)}return function(K,k,at,_t){try{ho=0;var ne=Je(K,k,at,_t);return dr=null,ne}catch(Qt){if(Qt===hr||Qt===El)throw Qt;var ze=di(29,Qt,null,K.mode);return ze.lanes=_t,ze.return=K,ze}finally{}}}var Ps=om(!0),lm=om(!1),ja=!1;function Pu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function zu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Za(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ka(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Ge&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=vl(e),Wp(e,null,a),n}return _l(e,o,n,a),vl(e)}function mo(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,_n(e,a)}}function Iu(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var _={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=_:f=f.next=_,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Fu=!1;function go(){if(Fu){var e=fr;if(e!==null)throw e}}function _o(e,n,a,o){Fu=!1;var u=e.updateQueue;ja=!1;var f=u.firstBaseUpdate,_=u.lastBaseUpdate,R=u.shared.pending;if(R!==null){u.shared.pending=null;var G=R,st=G.next;G.next=null,_===null?f=st:_.next=st,_=G;var pt=e.alternate;pt!==null&&(pt=pt.updateQueue,R=pt.lastBaseUpdate,R!==_&&(R===null?pt.firstBaseUpdate=st:R.next=st,pt.lastBaseUpdate=G))}if(f!==null){var St=u.baseState;_=0,pt=st=G=null,R=f;do{var ot=R.lane&-536870913,ft=ot!==R.lane;if(ft?(Te&ot)===ot:(o&ot)===ot){ot!==0&&ot===ur&&(Fu=!0),pt!==null&&(pt=pt.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});t:{var jt=e,ae=R;ot=n;var Je=a;switch(ae.tag){case 1:if(jt=ae.payload,typeof jt=="function"){St=jt.call(Je,St,ot);break t}St=jt;break t;case 3:jt.flags=jt.flags&-65537|128;case 0:if(jt=ae.payload,ot=typeof jt=="function"?jt.call(Je,St,ot):jt,ot==null)break t;St=x({},St,ot);break t;case 2:ja=!0}}ot=R.callback,ot!==null&&(e.flags|=64,ft&&(e.flags|=8192),ft=u.callbacks,ft===null?u.callbacks=[ot]:ft.push(ot))}else ft={lane:ot,tag:R.tag,payload:R.payload,callback:R.callback,next:null},pt===null?(st=pt=ft,G=St):pt=pt.next=ft,_|=ot;if(R=R.next,R===null){if(R=u.shared.pending,R===null)break;ft=R,R=ft.next,ft.next=null,u.lastBaseUpdate=ft,u.shared.pending=null}}while(!0);pt===null&&(G=St),u.baseState=G,u.firstBaseUpdate=st,u.lastBaseUpdate=pt,f===null&&(u.shared.lanes=0),es|=_,e.lanes=_,e.memoizedState=St}}function cm(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function um(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)cm(a[e],n)}var pr=P(null),Cl=P(0);function fm(e,n){e=Ra,vt(Cl,e),vt(pr,n),Ra=e|n.baseLanes}function Bu(){vt(Cl,Ra),vt(pr,pr.current)}function Gu(){Ra=Cl.current,Q(pr),Q(Cl)}var pi=P(null),Ni=null;function Qa(e){var n=e.alternate;vt(Sn,Sn.current&1),vt(pi,e),Ni===null&&(n===null||pr.current!==null||n.memoizedState!==null)&&(Ni=e)}function Hu(e){vt(Sn,Sn.current),vt(pi,e),Ni===null&&(Ni=e)}function hm(e){e.tag===22?(vt(Sn,Sn.current),vt(pi,e),Ni===null&&(Ni=e)):Ja()}function Ja(){vt(Sn,Sn.current),vt(pi,pi.current)}function mi(e){Q(pi),Ni===e&&(Ni=null),Q(Sn)}var Sn=P(0);function wl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||jf(a)||Zf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var xa=0,me=null,Ke=null,En=null,Dl=!1,mr=!1,zs=!1,Nl=0,vo=0,gr=null,kx=0;function pn(){throw Error(s(321))}function Vu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!hi(e[a],n[a]))return!1;return!0}function ku(e,n,a,o,u,f){return xa=f,me=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,O.H=e===null||e.memoizedState===null?Zm:sf,zs=!1,f=a(o,u),zs=!1,mr&&(f=pm(n,a,o,u)),dm(e),f}function dm(e){O.H=yo;var n=Ke!==null&&Ke.next!==null;if(xa=0,En=Ke=me=null,Dl=!1,vo=0,gr=null,n)throw Error(s(300));e===null||Tn||(e=e.dependencies,e!==null&&yl(e)&&(Tn=!0))}function pm(e,n,a,o){me=e;var u=0;do{if(mr&&(gr=null),vo=0,mr=!1,25<=u)throw Error(s(301));if(u+=1,En=Ke=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}O.H=Km,f=n(a,o)}while(mr);return f}function Xx(){var e=O.H,n=e.useState()[0];return n=typeof n.then=="function"?xo(n):n,e=e.useState()[0],(Ke!==null?Ke.memoizedState:null)!==e&&(me.flags|=1024),n}function Xu(){var e=Nl!==0;return Nl=0,e}function Wu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function qu(e){if(Dl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Dl=!1}xa=0,En=Ke=me=null,mr=!1,vo=Nl=0,gr=null}function Zn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return En===null?me.memoizedState=En=e:En=En.next=e,En}function yn(){if(Ke===null){var e=me.alternate;e=e!==null?e.memoizedState:null}else e=Ke.next;var n=En===null?me.memoizedState:En.next;if(n!==null)En=n,Ke=e;else{if(e===null)throw me.alternate===null?Error(s(467)):Error(s(310));Ke=e,e={memoizedState:Ke.memoizedState,baseState:Ke.baseState,baseQueue:Ke.baseQueue,queue:Ke.queue,next:null},En===null?me.memoizedState=En=e:En=En.next=e}return En}function Ul(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function xo(e){var n=vo;return vo+=1,gr===null&&(gr=[]),e=am(gr,e,n),n=me,(En===null?n.memoizedState:En.next)===null&&(n=n.alternate,O.H=n===null||n.memoizedState===null?Zm:sf),e}function Ll(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return xo(e);if(e.$$typeof===L)return zn(e)}throw Error(s(438,String(e)))}function Yu(e){var n=null,a=me.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=me.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Ul(),me.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=Z;return n.index++,a}function Sa(e,n){return typeof n=="function"?n(e):n}function Ol(e){var n=yn();return ju(n,Ke,e)}function ju(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=e.baseQueue,f=o.pending;if(f!==null){if(u!==null){var _=u.next;u.next=f.next,f.next=_}n.baseQueue=u=f,o.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var R=_=null,G=null,st=n,pt=!1;do{var St=st.lane&-536870913;if(St!==st.lane?(Te&St)===St:(xa&St)===St){var ot=st.revertLane;if(ot===0)G!==null&&(G=G.next={lane:0,revertLane:0,gesture:null,action:st.action,hasEagerState:st.hasEagerState,eagerState:st.eagerState,next:null}),St===ur&&(pt=!0);else if((xa&ot)===ot){st=st.next,ot===ur&&(pt=!0);continue}else St={lane:0,revertLane:st.revertLane,gesture:null,action:st.action,hasEagerState:st.hasEagerState,eagerState:st.eagerState,next:null},G===null?(R=G=St,_=f):G=G.next=St,me.lanes|=ot,es|=ot;St=st.action,zs&&a(f,St),f=st.hasEagerState?st.eagerState:a(f,St)}else ot={lane:St,revertLane:st.revertLane,gesture:st.gesture,action:st.action,hasEagerState:st.hasEagerState,eagerState:st.eagerState,next:null},G===null?(R=G=ot,_=f):G=G.next=ot,me.lanes|=St,es|=St;st=st.next}while(st!==null&&st!==n);if(G===null?_=f:G.next=R,!hi(f,e.memoizedState)&&(Tn=!0,pt&&(a=fr,a!==null)))throw a;e.memoizedState=f,e.baseState=_,e.baseQueue=G,o.lastRenderedState=f}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Zu(e){var n=yn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var _=u=u.next;do f=e(f,_.action),_=_.next;while(_!==u);hi(f,n.memoizedState)||(Tn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function mm(e,n,a){var o=me,u=yn(),f=Re;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var _=!hi((Ke||u).memoizedState,a);if(_&&(u.memoizedState=a,Tn=!0),u=u.queue,Ju(vm.bind(null,o,u,e),[e]),u.getSnapshot!==n||_||En!==null&&En.memoizedState.tag&1){if(o.flags|=2048,_r(9,{destroy:void 0},_m.bind(null,o,u,a,n),null),tn===null)throw Error(s(349));f||(xa&127)!==0||gm(o,n,a)}return a}function gm(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=me.updateQueue,n===null?(n=Ul(),me.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function _m(e,n,a,o){n.value=a,n.getSnapshot=o,xm(n)&&Sm(e)}function vm(e,n,a){return a(function(){xm(n)&&Sm(e)})}function xm(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!hi(e,a)}catch{return!0}}function Sm(e){var n=Rs(e,2);n!==null&&si(n,e,2)}function Ku(e){var n=Zn();if(typeof e=="function"){var a=e;if(e=a(),zs){Ct(!0);try{a()}finally{Ct(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sa,lastRenderedState:e},n}function ym(e,n,a,o){return e.baseState=a,ju(e,Ke,typeof o=="function"?o:Sa)}function Wx(e,n,a,o,u){if(Il(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){f.listeners.push(_)}};O.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,Mm(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Mm(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var f=O.T,_={};O.T=_;try{var R=a(u,o),G=O.S;G!==null&&G(_,R),bm(e,n,R)}catch(st){Qu(e,n,st)}finally{f!==null&&_.types!==null&&(f.types=_.types),O.T=f}}else try{f=a(u,o),bm(e,n,f)}catch(st){Qu(e,n,st)}}function bm(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Em(e,n,o)},function(o){return Qu(e,n,o)}):Em(e,n,a)}function Em(e,n,a){n.status="fulfilled",n.value=a,Tm(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Mm(e,a)))}function Qu(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Tm(n),n=n.next;while(n!==o)}e.action=null}function Tm(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Am(e,n){return n}function Rm(e,n){if(Re){var a=tn.formState;if(a!==null){t:{var o=me;if(Re){if(an){e:{for(var u=an,f=Di;u.nodeType!==8;){if(!f){u=null;break e}if(u=Ui(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){an=Ui(u.nextSibling),o=u.data==="F!";break t}}qa(o)}o=!1}o&&(n=a[0])}}return a=Zn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Am,lastRenderedState:n},a.queue=o,a=qm.bind(null,me,o),o.dispatch=a,o=Ku(!1),f=af.bind(null,me,!1,o.queue),o=Zn(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=Wx.bind(null,me,u,f,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function Cm(e){var n=yn();return wm(n,Ke,e)}function wm(e,n,a){if(n=ju(e,n,Am)[0],e=Ol(Sa)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=xo(n)}catch(_){throw _===hr?El:_}else o=n;n=yn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(me.flags|=2048,_r(9,{destroy:void 0},qx.bind(null,u,a),null)),[o,f,e]}function qx(e,n){e.action=n}function Dm(e){var n=yn(),a=Ke;if(a!==null)return wm(n,a,e);yn(),n=n.memoizedState,a=yn();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function _r(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=me.updateQueue,n===null&&(n=Ul(),me.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function Nm(){return yn().memoizedState}function Pl(e,n,a,o){var u=Zn();me.flags|=e,u.memoizedState=_r(1|n,{destroy:void 0},a,o===void 0?null:o)}function zl(e,n,a,o){var u=yn();o=o===void 0?null:o;var f=u.memoizedState.inst;Ke!==null&&o!==null&&Vu(o,Ke.memoizedState.deps)?u.memoizedState=_r(n,f,a,o):(me.flags|=e,u.memoizedState=_r(1|n,f,a,o))}function Um(e,n){Pl(8390656,8,e,n)}function Ju(e,n){zl(2048,8,e,n)}function Yx(e){me.flags|=4;var n=me.updateQueue;if(n===null)n=Ul(),me.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function Lm(e){var n=yn().memoizedState;return Yx({ref:n,nextImpl:e}),function(){if((Ge&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Om(e,n){return zl(4,2,e,n)}function Pm(e,n){return zl(4,4,e,n)}function zm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Im(e,n,a){a=a!=null?a.concat([e]):null,zl(4,4,zm.bind(null,n,e),a)}function $u(){}function Fm(e,n){var a=yn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Vu(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function Bm(e,n){var a=yn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Vu(n,o[1]))return o[0];if(o=e(),zs){Ct(!0);try{e()}finally{Ct(!1)}}return a.memoizedState=[o,n],o}function tf(e,n,a){return a===void 0||(xa&1073741824)!==0&&(Te&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=G0(),me.lanes|=e,es|=e,a)}function Gm(e,n,a,o){return hi(a,n)?a:pr.current!==null?(e=tf(e,a,o),hi(e,n)||(Tn=!0),e):(xa&42)===0||(xa&1073741824)!==0&&(Te&261930)===0?(Tn=!0,e.memoizedState=a):(e=G0(),me.lanes|=e,es|=e,n)}function Hm(e,n,a,o,u){var f=F.p;F.p=f!==0&&8>f?f:8;var _=O.T,R={};O.T=R,af(e,!1,n,a);try{var G=u(),st=O.S;if(st!==null&&st(R,G),G!==null&&typeof G=="object"&&typeof G.then=="function"){var pt=Vx(G,o);So(e,n,pt,vi(e))}else So(e,n,o,vi(e))}catch(St){So(e,n,{then:function(){},status:"rejected",reason:St},vi())}finally{F.p=f,_!==null&&R.types!==null&&(_.types=R.types),O.T=_}}function jx(){}function ef(e,n,a,o){if(e.tag!==5)throw Error(s(476));var u=Vm(e).queue;Hm(e,u,n,lt,a===null?jx:function(){return km(e),a(o)})}function Vm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:lt,baseState:lt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sa,lastRenderedState:lt},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sa,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function km(e){var n=Vm(e);n.next===null&&(n=e.alternate.memoizedState),So(e,n.next.queue,{},vi())}function nf(){return zn(Io)}function Xm(){return yn().memoizedState}function Wm(){return yn().memoizedState}function Zx(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=vi();e=Za(a);var o=Ka(n,e,a);o!==null&&(si(o,n,a),mo(o,n,a)),n={cache:Nu()},e.payload=n;return}n=n.return}}function Kx(e,n,a){var o=vi();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Il(e)?Ym(n,a):(a=Su(e,n,a,o),a!==null&&(si(a,e,o),jm(a,n,o)))}function qm(e,n,a){var o=vi();So(e,n,a,o)}function So(e,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Il(e))Ym(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var _=n.lastRenderedState,R=f(_,a);if(u.hasEagerState=!0,u.eagerState=R,hi(R,_))return _l(e,n,u,0),tn===null&&gl(),!1}catch{}finally{}if(a=Su(e,n,u,o),a!==null)return si(a,e,o),jm(a,n,o),!0}return!1}function af(e,n,a,o){if(o={lane:2,revertLane:zf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Il(e)){if(n)throw Error(s(479))}else n=Su(e,a,o,2),n!==null&&si(n,e,2)}function Il(e){var n=e.alternate;return e===me||n!==null&&n===me}function Ym(e,n){mr=Dl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function jm(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,_n(e,a)}}var yo={readContext:zn,use:Ll,useCallback:pn,useContext:pn,useEffect:pn,useImperativeHandle:pn,useLayoutEffect:pn,useInsertionEffect:pn,useMemo:pn,useReducer:pn,useRef:pn,useState:pn,useDebugValue:pn,useDeferredValue:pn,useTransition:pn,useSyncExternalStore:pn,useId:pn,useHostTransitionStatus:pn,useFormState:pn,useActionState:pn,useOptimistic:pn,useMemoCache:pn,useCacheRefresh:pn};yo.useEffectEvent=pn;var Zm={readContext:zn,use:Ll,useCallback:function(e,n){return Zn().memoizedState=[e,n===void 0?null:n],e},useContext:zn,useEffect:Um,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Pl(4194308,4,zm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Pl(4194308,4,e,n)},useInsertionEffect:function(e,n){Pl(4,2,e,n)},useMemo:function(e,n){var a=Zn();n=n===void 0?null:n;var o=e();if(zs){Ct(!0);try{e()}finally{Ct(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Zn();if(a!==void 0){var u=a(n);if(zs){Ct(!0);try{a(n)}finally{Ct(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=Kx.bind(null,me,e),[o.memoizedState,e]},useRef:function(e){var n=Zn();return e={current:e},n.memoizedState=e},useState:function(e){e=Ku(e);var n=e.queue,a=qm.bind(null,me,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:$u,useDeferredValue:function(e,n){var a=Zn();return tf(a,e,n)},useTransition:function(){var e=Ku(!1);return e=Hm.bind(null,me,e.queue,!0,!1),Zn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=me,u=Zn();if(Re){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),tn===null)throw Error(s(349));(Te&127)!==0||gm(o,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,Um(vm.bind(null,o,f,e),[e]),o.flags|=2048,_r(9,{destroy:void 0},_m.bind(null,o,f,a,n),null),a},useId:function(){var e=Zn(),n=tn.identifierPrefix;if(Re){var a=Qi,o=Ki;a=(o&~(1<<32-wt(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Nl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=kx++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:nf,useFormState:Rm,useActionState:Rm,useOptimistic:function(e){var n=Zn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=af.bind(null,me,!0,a),a.dispatch=n,[e,n]},useMemoCache:Yu,useCacheRefresh:function(){return Zn().memoizedState=Zx.bind(null,me)},useEffectEvent:function(e){var n=Zn(),a={impl:e};return n.memoizedState=a,function(){if((Ge&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},sf={readContext:zn,use:Ll,useCallback:Fm,useContext:zn,useEffect:Ju,useImperativeHandle:Im,useInsertionEffect:Om,useLayoutEffect:Pm,useMemo:Bm,useReducer:Ol,useRef:Nm,useState:function(){return Ol(Sa)},useDebugValue:$u,useDeferredValue:function(e,n){var a=yn();return Gm(a,Ke.memoizedState,e,n)},useTransition:function(){var e=Ol(Sa)[0],n=yn().memoizedState;return[typeof e=="boolean"?e:xo(e),n]},useSyncExternalStore:mm,useId:Xm,useHostTransitionStatus:nf,useFormState:Cm,useActionState:Cm,useOptimistic:function(e,n){var a=yn();return ym(a,Ke,e,n)},useMemoCache:Yu,useCacheRefresh:Wm};sf.useEffectEvent=Lm;var Km={readContext:zn,use:Ll,useCallback:Fm,useContext:zn,useEffect:Ju,useImperativeHandle:Im,useInsertionEffect:Om,useLayoutEffect:Pm,useMemo:Bm,useReducer:Zu,useRef:Nm,useState:function(){return Zu(Sa)},useDebugValue:$u,useDeferredValue:function(e,n){var a=yn();return Ke===null?tf(a,e,n):Gm(a,Ke.memoizedState,e,n)},useTransition:function(){var e=Zu(Sa)[0],n=yn().memoizedState;return[typeof e=="boolean"?e:xo(e),n]},useSyncExternalStore:mm,useId:Xm,useHostTransitionStatus:nf,useFormState:Dm,useActionState:Dm,useOptimistic:function(e,n){var a=yn();return Ke!==null?ym(a,Ke,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Yu,useCacheRefresh:Wm};Km.useEffectEvent=Lm;function rf(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:x({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var of={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=vi(),u=Za(o);u.payload=n,a!=null&&(u.callback=a),n=Ka(e,u,o),n!==null&&(si(n,e,o),mo(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=vi(),u=Za(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Ka(e,u,o),n!==null&&(si(n,e,o),mo(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=vi(),o=Za(a);o.tag=2,n!=null&&(o.callback=n),n=Ka(e,o,a),n!==null&&(si(n,e,a),mo(n,e,a))}};function Qm(e,n,a,o,u,f,_){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,f,_):n.prototype&&n.prototype.isPureReactComponent?!ro(a,o)||!ro(u,f):!0}function Jm(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&of.enqueueReplaceState(n,n.state,null)}function Is(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=x({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function $m(e){ml(e)}function t0(e){console.error(e)}function e0(e){ml(e)}function Fl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function n0(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function lf(e,n,a){return a=Za(a),a.tag=3,a.payload={element:null},a.callback=function(){Fl(e,n)},a}function i0(e){return e=Za(e),e.tag=3,e}function a0(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;e.payload=function(){return u(f)},e.callback=function(){n0(n,a,o)}}var _=a.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(e.callback=function(){n0(n,a,o),typeof u!="function"&&(ns===null?ns=new Set([this]):ns.add(this));var R=o.stack;this.componentDidCatch(o.value,{componentStack:R!==null?R:""})})}function Qx(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&cr(n,a,u,!0),a=pi.current,a!==null){switch(a.tag){case 31:case 13:return Ni===null?Kl():a.alternate===null&&mn===0&&(mn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Tl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Lf(e,o,u)),!1;case 22:return a.flags|=65536,o===Tl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Lf(e,o,u)),!1}throw Error(s(435,a.tag))}return Lf(e,o,u),Kl(),!1}if(Re)return n=pi.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Au&&(e=Error(s(422),{cause:o}),co(Ri(e,a)))):(o!==Au&&(n=Error(s(423),{cause:o}),co(Ri(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=Ri(o,a),u=lf(e.stateNode,o,u),Iu(e,u),mn!==4&&(mn=2)),!1;var f=Error(s(520),{cause:o});if(f=Ri(f,a),wo===null?wo=[f]:wo.push(f),mn!==4&&(mn=2),n===null)return!0;o=Ri(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=lf(a.stateNode,o,e),Iu(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(ns===null||!ns.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=i0(u),a0(u,e,a,o),Iu(a,u),!1}a=a.return}while(a!==null);return!1}var cf=Error(s(461)),Tn=!1;function In(e,n,a,o){n.child=e===null?lm(n,null,a,o):Ps(n,e.child,a,o)}function s0(e,n,a,o,u){a=a.render;var f=n.ref;if("ref"in o){var _={};for(var R in o)R!=="ref"&&(_[R]=o[R])}else _=o;return Ns(n),o=ku(e,n,a,_,f,u),R=Xu(),e!==null&&!Tn?(Wu(e,n,u),ya(e,n,u)):(Re&&R&&Eu(n),n.flags|=1,In(e,n,o,u),n.child)}function r0(e,n,a,o,u){if(e===null){var f=a.type;return typeof f=="function"&&!yu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,o0(e,n,f,o,u)):(e=xl(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!_f(e,u)){var _=f.memoizedProps;if(a=a.compare,a=a!==null?a:ro,a(_,o)&&e.ref===n.ref)return ya(e,n,u)}return n.flags|=1,e=ma(f,o),e.ref=n.ref,e.return=n,n.child=e}function o0(e,n,a,o,u){if(e!==null){var f=e.memoizedProps;if(ro(f,o)&&e.ref===n.ref)if(Tn=!1,n.pendingProps=o=f,_f(e,u))(e.flags&131072)!==0&&(Tn=!0);else return n.lanes=e.lanes,ya(e,n,u)}return uf(e,n,a,o,u)}function l0(e,n,a,o){var u=o.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(o=n.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~f}else o=0,n.child=null;return c0(e,n,f,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&bl(n,f!==null?f.cachePool:null),f!==null?fm(n,f):Bu(),hm(n);else return o=n.lanes=536870912,c0(e,n,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(bl(n,f.cachePool),fm(n,f),Ja(),n.memoizedState=null):(e!==null&&bl(n,null),Bu(),Ja());return In(e,n,u,a),n.child}function Mo(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function c0(e,n,a,o,u){var f=Lu();return f=f===null?null:{parent:bn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&bl(n,null),Bu(),hm(n),e!==null&&cr(e,n,o,!0),n.childLanes=u,null}function Bl(e,n){return n=Hl({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function u0(e,n,a){return Ps(n,e.child,null,a),e=Bl(n,n.pendingProps),e.flags|=2,mi(n),n.memoizedState=null,e}function Jx(e,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Re){if(o.mode==="hidden")return e=Bl(n,o),n.lanes=536870912,Mo(null,e);if(Hu(n),(e=an)?(e=Mg(e,Di),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Xa!==null?{id:Ki,overflow:Qi}:null,retryLane:536870912,hydrationErrors:null},a=Yp(e),a.return=n,n.child=a,Pn=n,an=null)):e=null,e===null)throw qa(n);return n.lanes=536870912,null}return Bl(n,o)}var f=e.memoizedState;if(f!==null){var _=f.dehydrated;if(Hu(n),u)if(n.flags&256)n.flags&=-257,n=u0(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(Tn||cr(e,n,a,!1),u=(a&e.childLanes)!==0,Tn||u){if(o=tn,o!==null&&(_=vn(o,a),_!==0&&_!==f.retryLane))throw f.retryLane=_,Rs(e,_),si(o,e,_),cf;Kl(),n=u0(e,n,a)}else e=f.treeContext,an=Ui(_.nextSibling),Pn=n,Re=!0,Wa=null,Di=!1,e!==null&&Kp(n,e),n=Bl(n,o),n.flags|=4096;return n}return e=ma(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Gl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function uf(e,n,a,o,u){return Ns(n),a=ku(e,n,a,o,void 0,u),o=Xu(),e!==null&&!Tn?(Wu(e,n,u),ya(e,n,u)):(Re&&o&&Eu(n),n.flags|=1,In(e,n,a,u),n.child)}function f0(e,n,a,o,u,f){return Ns(n),n.updateQueue=null,a=pm(n,o,a,u),dm(e),o=Xu(),e!==null&&!Tn?(Wu(e,n,f),ya(e,n,f)):(Re&&o&&Eu(n),n.flags|=1,In(e,n,a,f),n.child)}function h0(e,n,a,o,u){if(Ns(n),n.stateNode===null){var f=sr,_=a.contextType;typeof _=="object"&&_!==null&&(f=zn(_)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=of,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},Pu(n),_=a.contextType,f.context=typeof _=="object"&&_!==null?zn(_):sr,f.state=n.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(rf(n,a,_,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(_=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),_!==f.state&&of.enqueueReplaceState(f,f.state,null),_o(n,o,f,u),go(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){f=n.stateNode;var R=n.memoizedProps,G=Is(a,R);f.props=G;var st=f.context,pt=a.contextType;_=sr,typeof pt=="object"&&pt!==null&&(_=zn(pt));var St=a.getDerivedStateFromProps;pt=typeof St=="function"||typeof f.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,pt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(R||st!==_)&&Jm(n,f,o,_),ja=!1;var ot=n.memoizedState;f.state=ot,_o(n,o,f,u),go(),st=n.memoizedState,R||ot!==st||ja?(typeof St=="function"&&(rf(n,a,St,o),st=n.memoizedState),(G=ja||Qm(n,a,G,o,ot,st,_))?(pt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=st),f.props=o,f.state=st,f.context=_,o=G):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,zu(e,n),_=n.memoizedProps,pt=Is(a,_),f.props=pt,St=n.pendingProps,ot=f.context,st=a.contextType,G=sr,typeof st=="object"&&st!==null&&(G=zn(st)),R=a.getDerivedStateFromProps,(st=typeof R=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(_!==St||ot!==G)&&Jm(n,f,o,G),ja=!1,ot=n.memoizedState,f.state=ot,_o(n,o,f,u),go();var ft=n.memoizedState;_!==St||ot!==ft||ja||e!==null&&e.dependencies!==null&&yl(e.dependencies)?(typeof R=="function"&&(rf(n,a,R,o),ft=n.memoizedState),(pt=ja||Qm(n,a,pt,o,ot,ft,G)||e!==null&&e.dependencies!==null&&yl(e.dependencies))?(st||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,ft,G),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,ft,G)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||_===e.memoizedProps&&ot===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===e.memoizedProps&&ot===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ft),f.props=o,f.state=ft,f.context=G,o=pt):(typeof f.componentDidUpdate!="function"||_===e.memoizedProps&&ot===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===e.memoizedProps&&ot===e.memoizedState||(n.flags|=1024),o=!1)}return f=o,Gl(e,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&o?(n.child=Ps(n,e.child,null,u),n.child=Ps(n,null,a,u)):In(e,n,a,u),n.memoizedState=f.state,e=n.child):e=ya(e,n,u),e}function d0(e,n,a,o){return ws(),n.flags|=256,In(e,n,a,o),n.child}var ff={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function hf(e){return{baseLanes:e,cachePool:nm()}}function df(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=_i),e}function p0(e,n,a){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,_;if((_=f)||(_=e!==null&&e.memoizedState===null?!1:(Sn.current&2)!==0),_&&(u=!0,n.flags&=-129),_=(n.flags&32)!==0,n.flags&=-33,e===null){if(Re){if(u?Qa(n):Ja(),(e=an)?(e=Mg(e,Di),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Xa!==null?{id:Ki,overflow:Qi}:null,retryLane:536870912,hydrationErrors:null},a=Yp(e),a.return=n,n.child=a,Pn=n,an=null)):e=null,e===null)throw qa(n);return Zf(e)?n.lanes=32:n.lanes=536870912,null}var R=o.children;return o=o.fallback,u?(Ja(),u=n.mode,R=Hl({mode:"hidden",children:R},u),o=Cs(o,u,a,null),R.return=n,o.return=n,R.sibling=o,n.child=R,o=n.child,o.memoizedState=hf(a),o.childLanes=df(e,_,a),n.memoizedState=ff,Mo(null,o)):(Qa(n),pf(n,R))}var G=e.memoizedState;if(G!==null&&(R=G.dehydrated,R!==null)){if(f)n.flags&256?(Qa(n),n.flags&=-257,n=mf(e,n,a)):n.memoizedState!==null?(Ja(),n.child=e.child,n.flags|=128,n=null):(Ja(),R=o.fallback,u=n.mode,o=Hl({mode:"visible",children:o.children},u),R=Cs(R,u,a,null),R.flags|=2,o.return=n,R.return=n,o.sibling=R,n.child=o,Ps(n,e.child,null,a),o=n.child,o.memoizedState=hf(a),o.childLanes=df(e,_,a),n.memoizedState=ff,n=Mo(null,o));else if(Qa(n),Zf(R)){if(_=R.nextSibling&&R.nextSibling.dataset,_)var st=_.dgst;_=st,o=Error(s(419)),o.stack="",o.digest=_,co({value:o,source:null,stack:null}),n=mf(e,n,a)}else if(Tn||cr(e,n,a,!1),_=(a&e.childLanes)!==0,Tn||_){if(_=tn,_!==null&&(o=vn(_,a),o!==0&&o!==G.retryLane))throw G.retryLane=o,Rs(e,o),si(_,e,o),cf;jf(R)||Kl(),n=mf(e,n,a)}else jf(R)?(n.flags|=192,n.child=e.child,n=null):(e=G.treeContext,an=Ui(R.nextSibling),Pn=n,Re=!0,Wa=null,Di=!1,e!==null&&Kp(n,e),n=pf(n,o.children),n.flags|=4096);return n}return u?(Ja(),R=o.fallback,u=n.mode,G=e.child,st=G.sibling,o=ma(G,{mode:"hidden",children:o.children}),o.subtreeFlags=G.subtreeFlags&65011712,st!==null?R=ma(st,R):(R=Cs(R,u,a,null),R.flags|=2),R.return=n,o.return=n,o.sibling=R,n.child=o,Mo(null,o),o=n.child,R=e.child.memoizedState,R===null?R=hf(a):(u=R.cachePool,u!==null?(G=bn._currentValue,u=u.parent!==G?{parent:G,pool:G}:u):u=nm(),R={baseLanes:R.baseLanes|a,cachePool:u}),o.memoizedState=R,o.childLanes=df(e,_,a),n.memoizedState=ff,Mo(e.child,o)):(Qa(n),a=e.child,e=a.sibling,a=ma(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(_=n.deletions,_===null?(n.deletions=[e],n.flags|=16):_.push(e)),n.child=a,n.memoizedState=null,a)}function pf(e,n){return n=Hl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Hl(e,n){return e=di(22,e,null,n),e.lanes=0,e}function mf(e,n,a){return Ps(n,e.child,null,a),e=pf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function m0(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),wu(e.return,n,a)}function gf(e,n,a,o,u,f){var _=e.memoizedState;_===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:f}:(_.isBackwards=n,_.rendering=null,_.renderingStartTime=0,_.last=o,_.tail=a,_.tailMode=u,_.treeForkCount=f)}function g0(e,n,a){var o=n.pendingProps,u=o.revealOrder,f=o.tail;o=o.children;var _=Sn.current,R=(_&2)!==0;if(R?(_=_&1|2,n.flags|=128):_&=1,vt(Sn,_),In(e,n,o,a),o=Re?lo:0,!R&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&m0(e,a,n);else if(e.tag===19)m0(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&wl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),gf(n,!1,u,a,f,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&wl(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}gf(n,!0,a,null,f,o);break;case"together":gf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function ya(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),es|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(cr(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=ma(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=ma(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function _f(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&yl(e)))}function $x(e,n,a){switch(n.tag){case 3:Dt(n,n.stateNode.containerInfo),Ya(n,bn,e.memoizedState.cache),ws();break;case 27:case 5:ie(n);break;case 4:Dt(n,n.stateNode.containerInfo);break;case 10:Ya(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Hu(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Qa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?p0(e,n,a):(Qa(n),e=ya(e,n,a),e!==null?e.sibling:null);Qa(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(cr(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return g0(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),vt(Sn,Sn.current),o)break;return null;case 22:return n.lanes=0,l0(e,n,a,n.pendingProps);case 24:Ya(n,bn,e.memoizedState.cache)}return ya(e,n,a)}function _0(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)Tn=!0;else{if(!_f(e,a)&&(n.flags&128)===0)return Tn=!1,$x(e,n,a);Tn=(e.flags&131072)!==0}else Tn=!1,Re&&(n.flags&1048576)!==0&&Zp(n,lo,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(e=Ls(n.elementType),n.type=e,typeof e=="function")yu(e)?(o=Is(e,o),n.tag=1,n=h0(null,n,e,o,a)):(n.tag=0,n=uf(null,n,e,o,a));else{if(e!=null){var u=e.$$typeof;if(u===N){n.tag=11,n=s0(null,n,e,o,a);break t}else if(u===I){n.tag=14,n=r0(null,n,e,o,a);break t}}throw n=ht(e)||e,Error(s(306,n,""))}}return n;case 0:return uf(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Is(o,n.pendingProps),h0(e,n,o,u,a);case 3:t:{if(Dt(n,n.stateNode.containerInfo),e===null)throw Error(s(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,zu(e,n),_o(n,o,null,a);var _=n.memoizedState;if(o=_.cache,Ya(n,bn,o),o!==f.cache&&Du(n,[bn],a,!0),go(),o=_.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:_.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=d0(e,n,o,a);break t}else if(o!==u){u=Ri(Error(s(424)),n),co(u),n=d0(e,n,o,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(an=Ui(e.firstChild),Pn=n,Re=!0,Wa=null,Di=!0,a=lm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(ws(),o===u){n=ya(e,n,a);break t}In(e,n,o,a)}n=n.child}return n;case 26:return Gl(e,n),e===null?(a=Cg(n.type,null,n.pendingProps,null))?n.memoizedState=a:Re||(a=n.type,e=n.pendingProps,o=ic(ct.current).createElement(a),o[De]=n,o[Be]=e,Fn(o,a,e),dn(o),n.stateNode=o):n.memoizedState=Cg(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return ie(n),e===null&&Re&&(o=n.stateNode=Tg(n.type,n.pendingProps,ct.current),Pn=n,Di=!0,u=an,rs(n.type)?(Kf=u,an=Ui(o.firstChild)):an=u),In(e,n,n.pendingProps.children,a),Gl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Re&&((u=o=an)&&(o=wS(o,n.type,n.pendingProps,Di),o!==null?(n.stateNode=o,Pn=n,an=Ui(o.firstChild),Di=!1,u=!0):u=!1),u||qa(n)),ie(n),u=n.type,f=n.pendingProps,_=e!==null?e.memoizedProps:null,o=f.children,Wf(u,f)?o=null:_!==null&&Wf(u,_)&&(n.flags|=32),n.memoizedState!==null&&(u=ku(e,n,Xx,null,null,a),Io._currentValue=u),Gl(e,n),In(e,n,o,a),n.child;case 6:return e===null&&Re&&((e=a=an)&&(a=DS(a,n.pendingProps,Di),a!==null?(n.stateNode=a,Pn=n,an=null,e=!0):e=!1),e||qa(n)),null;case 13:return p0(e,n,a);case 4:return Dt(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=Ps(n,null,o,a):In(e,n,o,a),n.child;case 11:return s0(e,n,n.type,n.pendingProps,a);case 7:return In(e,n,n.pendingProps,a),n.child;case 8:return In(e,n,n.pendingProps.children,a),n.child;case 12:return In(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Ya(n,n.type,o.value),In(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,Ns(n),u=zn(u),o=o(u),n.flags|=1,In(e,n,o,a),n.child;case 14:return r0(e,n,n.type,n.pendingProps,a);case 15:return o0(e,n,n.type,n.pendingProps,a);case 19:return g0(e,n,a);case 31:return Jx(e,n,a);case 22:return l0(e,n,a,n.pendingProps);case 24:return Ns(n),o=zn(bn),e===null?(u=Lu(),u===null&&(u=tn,f=Nu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:o,cache:u},Pu(n),Ya(n,bn,u)):((e.lanes&a)!==0&&(zu(e,n),_o(n,null,null,a),go()),u=e.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Ya(n,bn,o)):(o=f.cache,Ya(n,bn,o),o!==u.cache&&Du(n,[bn],a,!0))),In(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function Ma(e){e.flags|=4}function vf(e,n,a,o,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(X0())e.flags|=8192;else throw Os=Tl,Ou}else e.flags&=-16777217}function v0(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Lg(n))if(X0())e.flags|=8192;else throw Os=Tl,Ou}function Vl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?xt():536870912,e.lanes|=n,yr|=n)}function bo(e,n){if(!Re)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function sn(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function tS(e,n,a){var o=n.pendingProps;switch(Tu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return sn(n),null;case 1:return sn(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),va(bn),Ft(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(lr(n)?Ma(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Ru())),sn(n),null;case 26:var u=n.type,f=n.memoizedState;return e===null?(Ma(n),f!==null?(sn(n),v0(n,f)):(sn(n),vf(n,u,null,o,a))):f?f!==e.memoizedState?(Ma(n),sn(n),v0(n,f)):(sn(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&Ma(n),sn(n),vf(n,u,e,o,a)),null;case 27:if(Kt(n),a=ct.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Ma(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return sn(n),null}e=Nt.current,lr(n)?Qp(n):(e=Tg(u,o,a),n.stateNode=e,Ma(n))}return sn(n),null;case 5:if(Kt(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Ma(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return sn(n),null}if(f=Nt.current,lr(n))Qp(n);else{var _=ic(ct.current);switch(f){case 1:f=_.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=_.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=_.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=_.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=_.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?_.createElement("select",{is:o.is}):_.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?_.createElement(u,{is:o.is}):_.createElement(u)}}f[De]=n,f[Be]=o;t:for(_=n.child;_!==null;){if(_.tag===5||_.tag===6)f.appendChild(_.stateNode);else if(_.tag!==4&&_.tag!==27&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===n)break t;for(;_.sibling===null;){if(_.return===null||_.return===n)break t;_=_.return}_.sibling.return=_.return,_=_.sibling}n.stateNode=f;t:switch(Fn(f,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&Ma(n)}}return sn(n),vf(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&Ma(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=ct.current,lr(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=Pn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[De]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||pg(e.nodeValue,a)),e||qa(n,!0)}else e=ic(e).createTextNode(o),e[De]=n,n.stateNode=e}return sn(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=lr(n),a!==null){if(e===null){if(!o)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[De]=n}else ws(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;sn(n),e=!1}else a=Ru(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(mi(n),n):(mi(n),null);if((n.flags&128)!==0)throw Error(s(558))}return sn(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=lr(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[De]=n}else ws(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;sn(n),u=!1}else u=Ru(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(mi(n),n):(mi(n),null)}return mi(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Vl(n,n.updateQueue),sn(n),null);case 4:return Ft(),e===null&&Gf(n.stateNode.containerInfo),sn(n),null;case 10:return va(n.type),sn(n),null;case 19:if(Q(Sn),o=n.memoizedState,o===null)return sn(n),null;if(u=(n.flags&128)!==0,f=o.rendering,f===null)if(u)bo(o,!1);else{if(mn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=wl(e),f!==null){for(n.flags|=128,bo(o,!1),e=f.updateQueue,n.updateQueue=e,Vl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)qp(a,e),a=a.sibling;return vt(Sn,Sn.current&1|2),Re&&ga(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&Ut()>Yl&&(n.flags|=128,u=!0,bo(o,!1),n.lanes=4194304)}else{if(!u)if(e=wl(f),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,Vl(n,e),bo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!Re)return sn(n),null}else 2*Ut()-o.renderingStartTime>Yl&&a!==536870912&&(n.flags|=128,u=!0,bo(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(e=o.last,e!==null?e.sibling=f:n.child=f,o.last=f)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=Ut(),e.sibling=null,a=Sn.current,vt(Sn,u?a&1|2:a&1),Re&&ga(n,o.treeForkCount),e):(sn(n),null);case 22:case 23:return mi(n),Gu(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(sn(n),n.subtreeFlags&6&&(n.flags|=8192)):sn(n),a=n.updateQueue,a!==null&&Vl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&Q(Us),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),va(bn),sn(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function eS(e,n){switch(Tu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return va(bn),Ft(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Kt(n),null;case 31:if(n.memoizedState!==null){if(mi(n),n.alternate===null)throw Error(s(340));ws()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(mi(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));ws()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Q(Sn),null;case 4:return Ft(),null;case 10:return va(n.type),null;case 22:case 23:return mi(n),Gu(),e!==null&&Q(Us),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return va(bn),null;case 25:return null;default:return null}}function x0(e,n){switch(Tu(n),n.tag){case 3:va(bn),Ft();break;case 26:case 27:case 5:Kt(n);break;case 4:Ft();break;case 31:n.memoizedState!==null&&mi(n);break;case 13:mi(n);break;case 19:Q(Sn);break;case 10:va(n.type);break;case 22:case 23:mi(n),Gu(),e!==null&&Q(Us);break;case 24:va(bn)}}function Eo(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var f=a.create,_=a.inst;o=f(),_.destroy=o}a=a.next}while(a!==u)}}catch(R){Ye(n,n.return,R)}}function $a(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&e)===e){var _=o.inst,R=_.destroy;if(R!==void 0){_.destroy=void 0,u=n;var G=a,st=R;try{st()}catch(pt){Ye(u,G,pt)}}}o=o.next}while(o!==f)}}catch(pt){Ye(n,n.return,pt)}}function S0(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{um(n,a)}catch(o){Ye(e,e.return,o)}}}function y0(e,n,a){a.props=Is(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Ye(e,n,o)}}function To(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){Ye(e,n,u)}}function Ji(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Ye(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Ye(e,n,u)}else a.current=null}function M0(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Ye(e,e.return,u)}}function xf(e,n,a){try{var o=e.stateNode;bS(o,e.type,a,n),o[Be]=n}catch(u){Ye(e,e.return,u)}}function b0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&rs(e.type)||e.tag===4}function Sf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||b0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&rs(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function yf(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=da));else if(o!==4&&(o===27&&rs(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(yf(e,n,a),e=e.sibling;e!==null;)yf(e,n,a),e=e.sibling}function kl(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&rs(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(kl(e,n,a),e=e.sibling;e!==null;)kl(e,n,a),e=e.sibling}function E0(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Fn(n,o,a),n[De]=e,n[Be]=a}catch(f){Ye(e,e.return,f)}}var ba=!1,An=!1,Mf=!1,T0=typeof WeakSet=="function"?WeakSet:Set,Ln=null;function nS(e,n){if(e=e.containerInfo,kf=uc,e=Ip(e),pu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var _=0,R=-1,G=-1,st=0,pt=0,St=e,ot=null;e:for(;;){for(var ft;St!==a||u!==0&&St.nodeType!==3||(R=_+u),St!==f||o!==0&&St.nodeType!==3||(G=_+o),St.nodeType===3&&(_+=St.nodeValue.length),(ft=St.firstChild)!==null;)ot=St,St=ft;for(;;){if(St===e)break e;if(ot===a&&++st===u&&(R=_),ot===f&&++pt===o&&(G=_),(ft=St.nextSibling)!==null)break;St=ot,ot=St.parentNode}St=ft}a=R===-1||G===-1?null:{start:R,end:G}}else a=null}a=a||{start:0,end:0}}else a=null;for(Xf={focusedElem:e,selectionRange:a},uc=!1,Ln=n;Ln!==null;)if(n=Ln,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Ln=e;else for(;Ln!==null;){switch(n=Ln,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var jt=Is(a.type,u);e=o.getSnapshotBeforeUpdate(jt,f),o.__reactInternalSnapshotBeforeUpdate=e}catch(ae){Ye(a,a.return,ae)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Yf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Yf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,Ln=e;break}Ln=n.return}}function A0(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Ta(e,a),o&4&&Eo(5,a);break;case 1:if(Ta(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(_){Ye(a,a.return,_)}else{var u=Is(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(_){Ye(a,a.return,_)}}o&64&&S0(a),o&512&&To(a,a.return);break;case 3:if(Ta(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{um(e,n)}catch(_){Ye(a,a.return,_)}}break;case 27:n===null&&o&4&&E0(a);case 26:case 5:Ta(e,a),n===null&&o&4&&M0(a),o&512&&To(a,a.return);break;case 12:Ta(e,a);break;case 31:Ta(e,a),o&4&&w0(e,a);break;case 13:Ta(e,a),o&4&&D0(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=fS.bind(null,a),NS(e,a))));break;case 22:if(o=a.memoizedState!==null||ba,!o){n=n!==null&&n.memoizedState!==null||An,u=ba;var f=An;ba=o,(An=n)&&!f?Aa(e,a,(a.subtreeFlags&8772)!==0):Ta(e,a),ba=u,An=f}break;case 30:break;default:Ta(e,a)}}function R0(e){var n=e.alternate;n!==null&&(e.alternate=null,R0(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&ji(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ln=null,ei=!1;function Ea(e,n,a){for(a=a.child;a!==null;)C0(e,n,a),a=a.sibling}function C0(e,n,a){if(J&&typeof J.onCommitFiberUnmount=="function")try{J.onCommitFiberUnmount(tt,a)}catch{}switch(a.tag){case 26:An||Ji(a,n),Ea(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:An||Ji(a,n);var o=ln,u=ei;rs(a.type)&&(ln=a.stateNode,ei=!1),Ea(e,n,a),Oo(a.stateNode),ln=o,ei=u;break;case 5:An||Ji(a,n);case 6:if(o=ln,u=ei,ln=null,Ea(e,n,a),ln=o,ei=u,ln!==null)if(ei)try{(ln.nodeType===9?ln.body:ln.nodeName==="HTML"?ln.ownerDocument.body:ln).removeChild(a.stateNode)}catch(f){Ye(a,n,f)}else try{ln.removeChild(a.stateNode)}catch(f){Ye(a,n,f)}break;case 18:ln!==null&&(ei?(e=ln,Sg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),wr(e)):Sg(ln,a.stateNode));break;case 4:o=ln,u=ei,ln=a.stateNode.containerInfo,ei=!0,Ea(e,n,a),ln=o,ei=u;break;case 0:case 11:case 14:case 15:$a(2,a,n),An||$a(4,a,n),Ea(e,n,a);break;case 1:An||(Ji(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&y0(a,n,o)),Ea(e,n,a);break;case 21:Ea(e,n,a);break;case 22:An=(o=An)||a.memoizedState!==null,Ea(e,n,a),An=o;break;default:Ea(e,n,a)}}function w0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{wr(e)}catch(a){Ye(n,n.return,a)}}}function D0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{wr(e)}catch(a){Ye(n,n.return,a)}}function iS(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new T0),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new T0),n;default:throw Error(s(435,e.tag))}}function Xl(e,n){var a=iS(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=hS.bind(null,e,o);o.then(u,u)}})}function ni(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],f=e,_=n,R=_;t:for(;R!==null;){switch(R.tag){case 27:if(rs(R.type)){ln=R.stateNode,ei=!1;break t}break;case 5:ln=R.stateNode,ei=!1;break t;case 3:case 4:ln=R.stateNode.containerInfo,ei=!0;break t}R=R.return}if(ln===null)throw Error(s(160));C0(f,_,u),ln=null,ei=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)N0(n,e),n=n.sibling}var Gi=null;function N0(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ni(n,e),ii(e),o&4&&($a(3,e,e.return),Eo(3,e),$a(5,e,e.return));break;case 1:ni(n,e),ii(e),o&512&&(An||a===null||Ji(a,a.return)),o&64&&ba&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Gi;if(ni(n,e),ii(e),o&512&&(An||a===null||Ji(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[ci]||f[De]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),Fn(f,o,a),f[De]=e,dn(f),o=f;break t;case"link":var _=Ng("link","href",u).get(o+(a.href||""));if(_){for(var R=0;R<_.length;R++)if(f=_[R],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){_.splice(R,1);break e}}f=u.createElement(o),Fn(f,o,a),u.head.appendChild(f);break;case"meta":if(_=Ng("meta","content",u).get(o+(a.content||""))){for(R=0;R<_.length;R++)if(f=_[R],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){_.splice(R,1);break e}}f=u.createElement(o),Fn(f,o,a),u.head.appendChild(f);break;default:throw Error(s(468,o))}f[De]=e,dn(f),o=f}e.stateNode=o}else Ug(u,e.type,e.stateNode);else e.stateNode=Dg(u,o,e.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?Ug(u,e.type,e.stateNode):Dg(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&xf(e,e.memoizedProps,a.memoizedProps)}break;case 27:ni(n,e),ii(e),o&512&&(An||a===null||Ji(a,a.return)),a!==null&&o&4&&xf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(ni(n,e),ii(e),o&512&&(An||a===null||Ji(a,a.return)),e.flags&32){u=e.stateNode;try{fi(u,"")}catch(jt){Ye(e,e.return,jt)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,xf(e,u,a!==null?a.memoizedProps:u)),o&1024&&(Mf=!0);break;case 6:if(ni(n,e),ii(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(jt){Ye(e,e.return,jt)}}break;case 3:if(rc=null,u=Gi,Gi=ac(n.containerInfo),ni(n,e),Gi=u,ii(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{wr(n.containerInfo)}catch(jt){Ye(e,e.return,jt)}Mf&&(Mf=!1,U0(e));break;case 4:o=Gi,Gi=ac(e.stateNode.containerInfo),ni(n,e),ii(e),Gi=o;break;case 12:ni(n,e),ii(e);break;case 31:ni(n,e),ii(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Xl(e,o)));break;case 13:ni(n,e),ii(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(ql=Ut()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Xl(e,o)));break;case 22:u=e.memoizedState!==null;var G=a!==null&&a.memoizedState!==null,st=ba,pt=An;if(ba=st||u,An=pt||G,ni(n,e),An=pt,ba=st,ii(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||G||ba||An||Fs(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){G=a=n;try{if(f=G.stateNode,u)_=f.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none";else{R=G.stateNode;var St=G.memoizedProps.style,ot=St!=null&&St.hasOwnProperty("display")?St.display:null;R.style.display=ot==null||typeof ot=="boolean"?"":(""+ot).trim()}}catch(jt){Ye(G,G.return,jt)}}}else if(n.tag===6){if(a===null){G=n;try{G.stateNode.nodeValue=u?"":G.memoizedProps}catch(jt){Ye(G,G.return,jt)}}}else if(n.tag===18){if(a===null){G=n;try{var ft=G.stateNode;u?yg(ft,!0):yg(G.stateNode,!1)}catch(jt){Ye(G,G.return,jt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Xl(e,a))));break;case 19:ni(n,e),ii(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Xl(e,o)));break;case 30:break;case 21:break;default:ni(n,e),ii(e)}}function ii(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(b0(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=Sf(e);kl(e,f,u);break;case 5:var _=a.stateNode;a.flags&32&&(fi(_,""),a.flags&=-33);var R=Sf(e);kl(e,R,_);break;case 3:case 4:var G=a.stateNode.containerInfo,st=Sf(e);yf(e,st,G);break;default:throw Error(s(161))}}catch(pt){Ye(e,e.return,pt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function U0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;U0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Ta(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)A0(e,n.alternate,n),n=n.sibling}function Fs(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:$a(4,n,n.return),Fs(n);break;case 1:Ji(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&y0(n,n.return,a),Fs(n);break;case 27:Oo(n.stateNode);case 26:case 5:Ji(n,n.return),Fs(n);break;case 22:n.memoizedState===null&&Fs(n);break;case 30:Fs(n);break;default:Fs(n)}e=e.sibling}}function Aa(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,f=n,_=f.flags;switch(f.tag){case 0:case 11:case 15:Aa(u,f,a),Eo(4,f);break;case 1:if(Aa(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(st){Ye(o,o.return,st)}if(o=f,u=o.updateQueue,u!==null){var R=o.stateNode;try{var G=u.shared.hiddenCallbacks;if(G!==null)for(u.shared.hiddenCallbacks=null,u=0;u<G.length;u++)cm(G[u],R)}catch(st){Ye(o,o.return,st)}}a&&_&64&&S0(f),To(f,f.return);break;case 27:E0(f);case 26:case 5:Aa(u,f,a),a&&o===null&&_&4&&M0(f),To(f,f.return);break;case 12:Aa(u,f,a);break;case 31:Aa(u,f,a),a&&_&4&&w0(u,f);break;case 13:Aa(u,f,a),a&&_&4&&D0(u,f);break;case 22:f.memoizedState===null&&Aa(u,f,a),To(f,f.return);break;case 30:break;default:Aa(u,f,a)}n=n.sibling}}function bf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&uo(a))}function Ef(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&uo(e))}function Hi(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)L0(e,n,a,o),n=n.sibling}function L0(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Hi(e,n,a,o),u&2048&&Eo(9,n);break;case 1:Hi(e,n,a,o);break;case 3:Hi(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&uo(e)));break;case 12:if(u&2048){Hi(e,n,a,o),e=n.stateNode;try{var f=n.memoizedProps,_=f.id,R=f.onPostCommit;typeof R=="function"&&R(_,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(G){Ye(n,n.return,G)}}else Hi(e,n,a,o);break;case 31:Hi(e,n,a,o);break;case 13:Hi(e,n,a,o);break;case 23:break;case 22:f=n.stateNode,_=n.alternate,n.memoizedState!==null?f._visibility&2?Hi(e,n,a,o):Ao(e,n):f._visibility&2?Hi(e,n,a,o):(f._visibility|=2,vr(e,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&bf(_,n);break;case 24:Hi(e,n,a,o),u&2048&&Ef(n.alternate,n);break;default:Hi(e,n,a,o)}}function vr(e,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,_=n,R=a,G=o,st=_.flags;switch(_.tag){case 0:case 11:case 15:vr(f,_,R,G,u),Eo(8,_);break;case 23:break;case 22:var pt=_.stateNode;_.memoizedState!==null?pt._visibility&2?vr(f,_,R,G,u):Ao(f,_):(pt._visibility|=2,vr(f,_,R,G,u)),u&&st&2048&&bf(_.alternate,_);break;case 24:vr(f,_,R,G,u),u&&st&2048&&Ef(_.alternate,_);break;default:vr(f,_,R,G,u)}n=n.sibling}}function Ao(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:Ao(a,o),u&2048&&bf(o.alternate,o);break;case 24:Ao(a,o),u&2048&&Ef(o.alternate,o);break;default:Ao(a,o)}n=n.sibling}}var Ro=8192;function xr(e,n,a){if(e.subtreeFlags&Ro)for(e=e.child;e!==null;)O0(e,n,a),e=e.sibling}function O0(e,n,a){switch(e.tag){case 26:xr(e,n,a),e.flags&Ro&&e.memoizedState!==null&&kS(a,Gi,e.memoizedState,e.memoizedProps);break;case 5:xr(e,n,a);break;case 3:case 4:var o=Gi;Gi=ac(e.stateNode.containerInfo),xr(e,n,a),Gi=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=Ro,Ro=16777216,xr(e,n,a),Ro=o):xr(e,n,a));break;default:xr(e,n,a)}}function P0(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Co(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Ln=o,I0(o,e)}P0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)z0(e),e=e.sibling}function z0(e){switch(e.tag){case 0:case 11:case 15:Co(e),e.flags&2048&&$a(9,e,e.return);break;case 3:Co(e);break;case 12:Co(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Wl(e)):Co(e);break;default:Co(e)}}function Wl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Ln=o,I0(o,e)}P0(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:$a(8,n,n.return),Wl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Wl(n));break;default:Wl(n)}e=e.sibling}}function I0(e,n){for(;Ln!==null;){var a=Ln;switch(a.tag){case 0:case 11:case 15:$a(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:uo(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Ln=o;else t:for(a=e;Ln!==null;){o=Ln;var u=o.sibling,f=o.return;if(R0(o),o===a){Ln=null;break t}if(u!==null){u.return=f,Ln=u;break t}Ln=f}}}var aS={getCacheForType:function(e){var n=zn(bn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return zn(bn).controller.signal}},sS=typeof WeakMap=="function"?WeakMap:Map,Ge=0,tn=null,be=null,Te=0,qe=0,gi=null,ts=!1,Sr=!1,Tf=!1,Ra=0,mn=0,es=0,Bs=0,Af=0,_i=0,yr=0,wo=null,ai=null,Rf=!1,ql=0,F0=0,Yl=1/0,jl=null,ns=null,Dn=0,is=null,Mr=null,Ca=0,Cf=0,wf=null,B0=null,Do=0,Df=null;function vi(){return(Ge&2)!==0&&Te!==0?Te&-Te:O.T!==null?zf():Yi()}function G0(){if(_i===0)if((Te&536870912)===0||Re){var e=re;re<<=1,(re&3932160)===0&&(re=262144),_i=e}else _i=536870912;return e=pi.current,e!==null&&(e.flags|=32),_i}function si(e,n,a){(e===tn&&(qe===2||qe===9)||e.cancelPendingCommit!==null)&&(br(e,0),as(e,Te,_i,!1)),qt(e,a),((Ge&2)===0||e!==tn)&&(e===tn&&((Ge&2)===0&&(Bs|=a),mn===4&&as(e,Te,_i,!1)),$i(e))}function H0(e,n,a){if((Ge&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Lt(e,n),u=o?lS(e,n):Uf(e,n,!0),f=o;do{if(u===0){Sr&&!o&&as(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!rS(a)){u=Uf(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var _=0;else _=e.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){n=_;t:{var R=e;u=wo;var G=R.current.memoizedState.isDehydrated;if(G&&(br(R,_).flags|=256),_=Uf(R,_,!1),_!==2){if(Tf&&!G){R.errorRecoveryDisabledLanes|=f,Bs|=f,u=4;break t}f=ai,ai=u,f!==null&&(ai===null?ai=f:ai.push.apply(ai,f))}u=_}if(f=!1,u!==2)continue}}if(u===1){br(e,0),as(e,n,0,!0);break}t:{switch(o=e,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:as(o,n,_i,!ts);break t;case 2:ai=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=ql+300-Ut(),10<u)){if(as(o,n,_i,!ts),dt(o,0,!0)!==0)break t;Ca=n,o.timeoutHandle=vg(V0.bind(null,o,a,ai,jl,Rf,n,_i,Bs,yr,ts,f,"Throttled",-0,0),u);break t}V0(o,a,ai,jl,Rf,n,_i,Bs,yr,ts,f,null,-0,0)}}break}while(!0);$i(e)}function V0(e,n,a,o,u,f,_,R,G,st,pt,St,ot,ft){if(e.timeoutHandle=-1,St=n.subtreeFlags,St&8192||(St&16785408)===16785408){St={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:da},O0(n,f,St);var jt=(f&62914560)===f?ql-Ut():(f&4194048)===f?F0-Ut():0;if(jt=XS(St,jt),jt!==null){Ca=f,e.cancelPendingCommit=jt(K0.bind(null,e,n,f,a,o,u,_,R,G,pt,St,null,ot,ft)),as(e,f,_,!st);return}}K0(e,n,f,a,o,u,_,R,G)}function rS(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!hi(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function as(e,n,a,o){n&=~Af,n&=~Bs,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var f=31-wt(u),_=1<<f;o[f]=-1,u&=~_}a!==0&&fe(e,a,n)}function Zl(){return(Ge&6)===0?(No(0),!1):!0}function Nf(){if(be!==null){if(qe===0)var e=be.return;else e=be,_a=Ds=null,qu(e),dr=null,ho=0,e=be;for(;e!==null;)x0(e.alternate,e),e=e.return;be=null}}function br(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,AS(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Ca=0,Nf(),tn=e,be=a=ma(e.current,null),Te=n,qe=0,gi=null,ts=!1,Sr=Lt(e,n),Tf=!1,yr=_i=Af=Bs=es=mn=0,ai=wo=null,Rf=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-wt(o),f=1<<u;n|=e[u],o&=~f}return Ra=n,gl(),a}function k0(e,n){me=null,O.H=yo,n===hr||n===El?(n=sm(),qe=3):n===Ou?(n=sm(),qe=4):qe=n===cf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,gi=n,be===null&&(mn=1,Fl(e,Ri(n,e.current)))}function X0(){var e=pi.current;return e===null?!0:(Te&4194048)===Te?Ni===null:(Te&62914560)===Te||(Te&536870912)!==0?e===Ni:!1}function W0(){var e=O.H;return O.H=yo,e===null?yo:e}function q0(){var e=O.A;return O.A=aS,e}function Kl(){mn=4,ts||(Te&4194048)!==Te&&pi.current!==null||(Sr=!0),(es&134217727)===0&&(Bs&134217727)===0||tn===null||as(tn,Te,_i,!1)}function Uf(e,n,a){var o=Ge;Ge|=2;var u=W0(),f=q0();(tn!==e||Te!==n)&&(jl=null,br(e,n)),n=!1;var _=mn;t:do try{if(qe!==0&&be!==null){var R=be,G=gi;switch(qe){case 8:Nf(),_=6;break t;case 3:case 2:case 9:case 6:pi.current===null&&(n=!0);var st=qe;if(qe=0,gi=null,Er(e,R,G,st),a&&Sr){_=0;break t}break;default:st=qe,qe=0,gi=null,Er(e,R,G,st)}}oS(),_=mn;break}catch(pt){k0(e,pt)}while(!0);return n&&e.shellSuspendCounter++,_a=Ds=null,Ge=o,O.H=u,O.A=f,be===null&&(tn=null,Te=0,gl()),_}function oS(){for(;be!==null;)Y0(be)}function lS(e,n){var a=Ge;Ge|=2;var o=W0(),u=q0();tn!==e||Te!==n?(jl=null,Yl=Ut()+500,br(e,n)):Sr=Lt(e,n);t:do try{if(qe!==0&&be!==null){n=be;var f=gi;e:switch(qe){case 1:qe=0,gi=null,Er(e,n,f,1);break;case 2:case 9:if(im(f)){qe=0,gi=null,j0(n);break}n=function(){qe!==2&&qe!==9||tn!==e||(qe=7),$i(e)},f.then(n,n);break t;case 3:qe=7;break t;case 4:qe=5;break t;case 7:im(f)?(qe=0,gi=null,j0(n)):(qe=0,gi=null,Er(e,n,f,7));break;case 5:var _=null;switch(be.tag){case 26:_=be.memoizedState;case 5:case 27:var R=be;if(_?Lg(_):R.stateNode.complete){qe=0,gi=null;var G=R.sibling;if(G!==null)be=G;else{var st=R.return;st!==null?(be=st,Ql(st)):be=null}break e}}qe=0,gi=null,Er(e,n,f,5);break;case 6:qe=0,gi=null,Er(e,n,f,6);break;case 8:Nf(),mn=6;break t;default:throw Error(s(462))}}cS();break}catch(pt){k0(e,pt)}while(!0);return _a=Ds=null,O.H=o,O.A=u,Ge=a,be!==null?0:(tn=null,Te=0,gl(),mn)}function cS(){for(;be!==null&&!de();)Y0(be)}function Y0(e){var n=_0(e.alternate,e,Ra);e.memoizedProps=e.pendingProps,n===null?Ql(e):be=n}function j0(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=f0(a,n,n.pendingProps,n.type,void 0,Te);break;case 11:n=f0(a,n,n.pendingProps,n.type.render,n.ref,Te);break;case 5:qu(n);default:x0(a,n),n=be=qp(n,Ra),n=_0(a,n,Ra)}e.memoizedProps=e.pendingProps,n===null?Ql(e):be=n}function Er(e,n,a,o){_a=Ds=null,qu(n),dr=null,ho=0;var u=n.return;try{if(Qx(e,u,n,a,Te)){mn=1,Fl(e,Ri(a,e.current)),be=null;return}}catch(f){if(u!==null)throw be=u,f;mn=1,Fl(e,Ri(a,e.current)),be=null;return}n.flags&32768?(Re||o===1?e=!0:Sr||(Te&536870912)!==0?e=!1:(ts=e=!0,(o===2||o===9||o===3||o===6)&&(o=pi.current,o!==null&&o.tag===13&&(o.flags|=16384))),Z0(n,e)):Ql(n)}function Ql(e){var n=e;do{if((n.flags&32768)!==0){Z0(n,ts);return}e=n.return;var a=tS(n.alternate,n,Ra);if(a!==null){be=a;return}if(n=n.sibling,n!==null){be=n;return}be=n=e}while(n!==null);mn===0&&(mn=5)}function Z0(e,n){do{var a=eS(e.alternate,e);if(a!==null){a.flags&=32767,be=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){be=e;return}be=e=a}while(e!==null);mn=6,be=null}function K0(e,n,a,o,u,f,_,R,G){e.cancelPendingCommit=null;do Jl();while(Dn!==0);if((Ge&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=xu,Se(e,a,f,_,R,G),e===tn&&(be=tn=null,Te=0),Mr=n,is=e,Ca=a,Cf=f,wf=u,B0=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,dS($,function(){return eg(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=O.T,O.T=null,u=F.p,F.p=2,_=Ge,Ge|=4;try{nS(e,n,a)}finally{Ge=_,F.p=u,O.T=o}}Dn=1,Q0(),J0(),$0()}}function Q0(){if(Dn===1){Dn=0;var e=is,n=Mr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=O.T,O.T=null;var o=F.p;F.p=2;var u=Ge;Ge|=4;try{N0(n,e);var f=Xf,_=Ip(e.containerInfo),R=f.focusedElem,G=f.selectionRange;if(_!==R&&R&&R.ownerDocument&&zp(R.ownerDocument.documentElement,R)){if(G!==null&&pu(R)){var st=G.start,pt=G.end;if(pt===void 0&&(pt=st),"selectionStart"in R)R.selectionStart=st,R.selectionEnd=Math.min(pt,R.value.length);else{var St=R.ownerDocument||document,ot=St&&St.defaultView||window;if(ot.getSelection){var ft=ot.getSelection(),jt=R.textContent.length,ae=Math.min(G.start,jt),Je=G.end===void 0?ae:Math.min(G.end,jt);!ft.extend&&ae>Je&&(_=Je,Je=ae,ae=_);var K=Pp(R,ae),k=Pp(R,Je);if(K&&k&&(ft.rangeCount!==1||ft.anchorNode!==K.node||ft.anchorOffset!==K.offset||ft.focusNode!==k.node||ft.focusOffset!==k.offset)){var at=St.createRange();at.setStart(K.node,K.offset),ft.removeAllRanges(),ae>Je?(ft.addRange(at),ft.extend(k.node,k.offset)):(at.setEnd(k.node,k.offset),ft.addRange(at))}}}}for(St=[],ft=R;ft=ft.parentNode;)ft.nodeType===1&&St.push({element:ft,left:ft.scrollLeft,top:ft.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<St.length;R++){var _t=St[R];_t.element.scrollLeft=_t.left,_t.element.scrollTop=_t.top}}uc=!!kf,Xf=kf=null}finally{Ge=u,F.p=o,O.T=a}}e.current=n,Dn=2}}function J0(){if(Dn===2){Dn=0;var e=is,n=Mr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=O.T,O.T=null;var o=F.p;F.p=2;var u=Ge;Ge|=4;try{A0(e,n.alternate,n)}finally{Ge=u,F.p=o,O.T=a}}Dn=3}}function $0(){if(Dn===4||Dn===3){Dn=0,Oe();var e=is,n=Mr,a=Ca,o=B0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Dn=5:(Dn=0,Mr=is=null,tg(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(ns=null),fa(a),n=n.stateNode,J&&typeof J.onCommitFiberRoot=="function")try{J.onCommitFiberRoot(tt,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=O.T,u=F.p,F.p=2,O.T=null;try{for(var f=e.onRecoverableError,_=0;_<o.length;_++){var R=o[_];f(R.value,{componentStack:R.stack})}}finally{O.T=n,F.p=u}}(Ca&3)!==0&&Jl(),$i(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===Df?Do++:(Do=0,Df=e):Do=0,No(0)}}function tg(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,uo(n)))}function Jl(){return Q0(),J0(),$0(),eg()}function eg(){if(Dn!==5)return!1;var e=is,n=Cf;Cf=0;var a=fa(Ca),o=O.T,u=F.p;try{F.p=32>a?32:a,O.T=null,a=wf,wf=null;var f=is,_=Ca;if(Dn=0,Mr=is=null,Ca=0,(Ge&6)!==0)throw Error(s(331));var R=Ge;if(Ge|=4,z0(f.current),L0(f,f.current,_,a),Ge=R,No(0,!1),J&&typeof J.onPostCommitFiberRoot=="function")try{J.onPostCommitFiberRoot(tt,f)}catch{}return!0}finally{F.p=u,O.T=o,tg(e,n)}}function ng(e,n,a){n=Ri(a,n),n=lf(e.stateNode,n,2),e=Ka(e,n,2),e!==null&&(qt(e,2),$i(e))}function Ye(e,n,a){if(e.tag===3)ng(e,e,a);else for(;n!==null;){if(n.tag===3){ng(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(ns===null||!ns.has(o))){e=Ri(a,e),a=i0(2),o=Ka(n,a,2),o!==null&&(a0(a,o,n,e),qt(o,2),$i(o));break}}n=n.return}}function Lf(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new sS;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Tf=!0,u.add(a),e=uS.bind(null,e,n,a),n.then(e,e))}function uS(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,tn===e&&(Te&a)===a&&(mn===4||mn===3&&(Te&62914560)===Te&&300>Ut()-ql?(Ge&2)===0&&br(e,0):Af|=a,yr===Te&&(yr=0)),$i(e)}function ig(e,n){n===0&&(n=xt()),e=Rs(e,n),e!==null&&(qt(e,n),$i(e))}function fS(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),ig(e,a)}function hS(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),ig(e,a)}function dS(e,n){return q(e,n)}var $l=null,Tr=null,Of=!1,tc=!1,Pf=!1,ss=0;function $i(e){e!==Tr&&e.next===null&&(Tr===null?$l=Tr=e:Tr=Tr.next=e),tc=!0,Of||(Of=!0,mS())}function No(e,n){if(!Pf&&tc){Pf=!0;do for(var a=!1,o=$l;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var _=o.suspendedLanes,R=o.pingedLanes;f=(1<<31-wt(42|e)+1)-1,f&=u&~(_&~R),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,og(o,f))}else f=Te,f=dt(o,o===tn?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||Lt(o,f)||(a=!0,og(o,f));o=o.next}while(a);Pf=!1}}function pS(){ag()}function ag(){tc=Of=!1;var e=0;ss!==0&&TS()&&(e=ss);for(var n=Ut(),a=null,o=$l;o!==null;){var u=o.next,f=sg(o,n);f===0?(o.next=null,a===null?$l=u:a.next=u,u===null&&(Tr=a)):(a=o,(e!==0||(f&3)!==0)&&(tc=!0)),o=u}Dn!==0&&Dn!==5||No(e),ss!==0&&(ss=0)}function sg(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var _=31-wt(f),R=1<<_,G=u[_];G===-1?((R&a)===0||(R&o)!==0)&&(u[_]=yt(R,n)):G<=n&&(e.expiredLanes|=R),f&=~R}if(n=tn,a=Te,a=dt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(qe===2||qe===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&en(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Lt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&en(o),fa(a)){case 2:case 8:a=b;break;case 32:a=$;break;case 268435456:a=Tt;break;default:a=$}return o=rg.bind(null,e),a=q(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&en(o),e.callbackPriority=2,e.callbackNode=null,2}function rg(e,n){if(Dn!==0&&Dn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Jl()&&e.callbackNode!==a)return null;var o=Te;return o=dt(e,e===tn?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(H0(e,o,n),sg(e,Ut()),e.callbackNode!=null&&e.callbackNode===a?rg.bind(null,e):null)}function og(e,n){if(Jl())return null;H0(e,n,!0)}function mS(){RS(function(){(Ge&6)!==0?q(D,pS):ag()})}function zf(){if(ss===0){var e=ur;e===0&&(e=te,te<<=1,(te&261888)===0&&(te=256)),ss=e}return ss}function lg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:bs(""+e)}function cg(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function gS(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var f=lg((u[Be]||null).action),_=o.submitter;_&&(n=(n=_[Be]||null)?lg(n.formAction):_.getAttribute("formAction"),n!==null&&(f=n,_=null));var R=new hl("action","action",null,o,u);e.push({event:R,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(ss!==0){var G=_?cg(u,_):new FormData(u);ef(a,{pending:!0,data:G,method:u.method,action:f},null,G)}}else typeof f=="function"&&(R.preventDefault(),G=_?cg(u,_):new FormData(u),ef(a,{pending:!0,data:G,method:u.method,action:f},f,G))},currentTarget:u}]})}}for(var If=0;If<vu.length;If++){var Ff=vu[If],_S=Ff.toLowerCase(),vS=Ff[0].toUpperCase()+Ff.slice(1);Bi(_S,"on"+vS)}Bi(Gp,"onAnimationEnd"),Bi(Hp,"onAnimationIteration"),Bi(Vp,"onAnimationStart"),Bi("dblclick","onDoubleClick"),Bi("focusin","onFocus"),Bi("focusout","onBlur"),Bi(Ox,"onTransitionRun"),Bi(Px,"onTransitionStart"),Bi(zx,"onTransitionCancel"),Bi(kp,"onTransitionEnd"),rt("onMouseEnter",["mouseout","mouseover"]),rt("onMouseLeave",["mouseout","mouseover"]),rt("onPointerEnter",["pointerout","pointerover"]),rt("onPointerLeave",["pointerout","pointerover"]),j("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),j("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),j("onBeforeInput",["compositionend","keypress","textInput","paste"]),j("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),j("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),j("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Uo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),xS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Uo));function ug(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var f=void 0;if(n)for(var _=o.length-1;0<=_;_--){var R=o[_],G=R.instance,st=R.currentTarget;if(R=R.listener,G!==f&&u.isPropagationStopped())break t;f=R,u.currentTarget=st;try{f(u)}catch(pt){ml(pt)}u.currentTarget=null,f=G}else for(_=0;_<o.length;_++){if(R=o[_],G=R.instance,st=R.currentTarget,R=R.listener,G!==f&&u.isPropagationStopped())break t;f=R,u.currentTarget=st;try{f(u)}catch(pt){ml(pt)}u.currentTarget=null,f=G}}}}function Ee(e,n){var a=n[xn];a===void 0&&(a=n[xn]=new Set);var o=e+"__bubble";a.has(o)||(fg(n,e,2,!1),a.add(o))}function Bf(e,n,a){var o=0;n&&(o|=4),fg(a,e,o,n)}var ec="_reactListening"+Math.random().toString(36).slice(2);function Gf(e){if(!e[ec]){e[ec]=!0,Js.forEach(function(a){a!=="selectionchange"&&(xS.has(a)||Bf(a,!1,e),Bf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[ec]||(n[ec]=!0,Bf("selectionchange",!1,n))}}function fg(e,n,a,o){switch(Gg(n)){case 2:var u=YS;break;case 8:u=jS;break;default:u=eh}a=u.bind(null,n,a,e),u=void 0,!su||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function Hf(e,n,a,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var _=o.tag;if(_===3||_===4){var R=o.stateNode.containerInfo;if(R===u)break;if(_===4)for(_=o.return;_!==null;){var G=_.tag;if((G===3||G===4)&&_.stateNode.containerInfo===u)return;_=_.return}for(;R!==null;){if(_=jn(R),_===null)return;if(G=_.tag,G===5||G===6||G===26||G===27){o=f=_;continue t}R=R.parentNode}}o=o.return}gp(function(){var st=f,pt=iu(a),St=[];t:{var ot=Xp.get(e);if(ot!==void 0){var ft=hl,jt=e;switch(e){case"keypress":if(ul(a)===0)break t;case"keydown":case"keyup":ft=hx;break;case"focusin":jt="focus",ft=cu;break;case"focusout":jt="blur",ft=cu;break;case"beforeblur":case"afterblur":ft=cu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ft=xp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ft=tx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ft=mx;break;case Gp:case Hp:case Vp:ft=ix;break;case kp:ft=_x;break;case"scroll":case"scrollend":ft=Jv;break;case"wheel":ft=xx;break;case"copy":case"cut":case"paste":ft=sx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ft=yp;break;case"toggle":case"beforetoggle":ft=yx}var ae=(n&4)!==0,Je=!ae&&(e==="scroll"||e==="scrollend"),K=ae?ot!==null?ot+"Capture":null:ot;ae=[];for(var k=st,at;k!==null;){var _t=k;if(at=_t.stateNode,_t=_t.tag,_t!==5&&_t!==26&&_t!==27||at===null||K===null||(_t=$r(k,K),_t!=null&&ae.push(Lo(k,_t,at))),Je)break;k=k.return}0<ae.length&&(ot=new ft(ot,jt,null,a,pt),St.push({event:ot,listeners:ae}))}}if((n&7)===0){t:{if(ot=e==="mouseover"||e==="pointerover",ft=e==="mouseout"||e==="pointerout",ot&&a!==nu&&(jt=a.relatedTarget||a.fromElement)&&(jn(jt)||jt[Ze]))break t;if((ft||ot)&&(ot=pt.window===pt?pt:(ot=pt.ownerDocument)?ot.defaultView||ot.parentWindow:window,ft?(jt=a.relatedTarget||a.toElement,ft=st,jt=jt?jn(jt):null,jt!==null&&(Je=c(jt),ae=jt.tag,jt!==Je||ae!==5&&ae!==27&&ae!==6)&&(jt=null)):(ft=null,jt=st),ft!==jt)){if(ae=xp,_t="onMouseLeave",K="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&(ae=yp,_t="onPointerLeave",K="onPointerEnter",k="pointer"),Je=ft==null?ot:ha(ft),at=jt==null?ot:ha(jt),ot=new ae(_t,k+"leave",ft,a,pt),ot.target=Je,ot.relatedTarget=at,_t=null,jn(pt)===st&&(ae=new ae(K,k+"enter",jt,a,pt),ae.target=at,ae.relatedTarget=Je,_t=ae),Je=_t,ft&&jt)e:{for(ae=SS,K=ft,k=jt,at=0,_t=K;_t;_t=ae(_t))at++;_t=0;for(var ne=k;ne;ne=ae(ne))_t++;for(;0<at-_t;)K=ae(K),at--;for(;0<_t-at;)k=ae(k),_t--;for(;at--;){if(K===k||k!==null&&K===k.alternate){ae=K;break e}K=ae(K),k=ae(k)}ae=null}else ae=null;ft!==null&&hg(St,ot,ft,ae,!1),jt!==null&&Je!==null&&hg(St,Je,jt,ae,!0)}}t:{if(ot=st?ha(st):window,ft=ot.nodeName&&ot.nodeName.toLowerCase(),ft==="select"||ft==="input"&&ot.type==="file")var ze=wp;else if(Rp(ot))if(Dp)ze=Nx;else{ze=wx;var Qt=Cx}else ft=ot.nodeName,!ft||ft.toLowerCase()!=="input"||ot.type!=="checkbox"&&ot.type!=="radio"?st&&He(st.elementType)&&(ze=wp):ze=Dx;if(ze&&(ze=ze(e,st))){Cp(St,ze,a,pt);break t}Qt&&Qt(e,ot,st),e==="focusout"&&st&&ot.type==="number"&&st.memoizedProps.value!=null&&Me(ot,"number",ot.value)}switch(Qt=st?ha(st):window,e){case"focusin":(Rp(Qt)||Qt.contentEditable==="true")&&(nr=Qt,mu=st,oo=null);break;case"focusout":oo=mu=nr=null;break;case"mousedown":gu=!0;break;case"contextmenu":case"mouseup":case"dragend":gu=!1,Fp(St,a,pt);break;case"selectionchange":if(Lx)break;case"keydown":case"keyup":Fp(St,a,pt)}var ge;if(fu)t:{switch(e){case"compositionstart":var Ae="onCompositionStart";break t;case"compositionend":Ae="onCompositionEnd";break t;case"compositionupdate":Ae="onCompositionUpdate";break t}Ae=void 0}else er?Tp(e,a)&&(Ae="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Ae="onCompositionStart");Ae&&(Mp&&a.locale!=="ko"&&(er||Ae!=="onCompositionStart"?Ae==="onCompositionEnd"&&er&&(ge=_p()):(ka=pt,ru="value"in ka?ka.value:ka.textContent,er=!0)),Qt=nc(st,Ae),0<Qt.length&&(Ae=new Sp(Ae,e,null,a,pt),St.push({event:Ae,listeners:Qt}),ge?Ae.data=ge:(ge=Ap(a),ge!==null&&(Ae.data=ge)))),(ge=bx?Ex(e,a):Tx(e,a))&&(Ae=nc(st,"onBeforeInput"),0<Ae.length&&(Qt=new Sp("onBeforeInput","beforeinput",null,a,pt),St.push({event:Qt,listeners:Ae}),Qt.data=ge)),gS(St,e,st,a,pt)}ug(St,n)})}function Lo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function nc(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=$r(e,a),u!=null&&o.unshift(Lo(e,u,f)),u=$r(e,n),u!=null&&o.push(Lo(e,u,f))),e.tag===3)return o;e=e.return}return[]}function SS(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function hg(e,n,a,o,u){for(var f=n._reactName,_=[];a!==null&&a!==o;){var R=a,G=R.alternate,st=R.stateNode;if(R=R.tag,G!==null&&G===o)break;R!==5&&R!==26&&R!==27||st===null||(G=st,u?(st=$r(a,f),st!=null&&_.unshift(Lo(a,st,G))):u||(st=$r(a,f),st!=null&&_.push(Lo(a,st,G)))),a=a.return}_.length!==0&&e.push({event:n,listeners:_})}var yS=/\r\n?/g,MS=/\u0000|\uFFFD/g;function dg(e){return(typeof e=="string"?e:""+e).replace(yS,`
`).replace(MS,"")}function pg(e,n){return n=dg(n),dg(e)===n}function Qe(e,n,a,o,u,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||fi(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&fi(e,""+o);break;case"className":Yt(e,"class",o);break;case"tabIndex":Yt(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Yt(e,a,o);break;case"style":Fi(e,o,f);break;case"data":if(n!=="object"){Yt(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=bs(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Qe(e,n,"name",u.name,u,null),Qe(e,n,"formEncType",u.formEncType,u,null),Qe(e,n,"formMethod",u.formMethod,u,null),Qe(e,n,"formTarget",u.formTarget,u,null)):(Qe(e,n,"encType",u.encType,u,null),Qe(e,n,"method",u.method,u,null),Qe(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=bs(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=da);break;case"onScroll":o!=null&&Ee("scroll",e);break;case"onScrollEnd":o!=null&&Ee("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=bs(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":Ee("beforetoggle",e),Ee("toggle",e),It(e,"popover",o);break;case"xlinkActuate":Xt(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Xt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Xt(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Xt(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Xt(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Xt(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Xt(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Xt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Xt(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":It(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Zi.get(a)||a,It(e,a,o))}}function Vf(e,n,a,o,u,f){switch(a){case"style":Fi(e,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?fi(e,o):(typeof o=="number"||typeof o=="bigint")&&fi(e,""+o);break;case"onScroll":o!=null&&Ee("scroll",e);break;case"onScrollEnd":o!=null&&Ee("scrollend",e);break;case"onClick":o!=null&&(e.onclick=da);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!A.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[Be]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):It(e,a,o)}}}function Fn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ee("error",e),Ee("load",e);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var _=a[f];if(_!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Qe(e,n,f,_,a,null)}}u&&Qe(e,n,"srcSet",a.srcSet,a,null),o&&Qe(e,n,"src",a.src,a,null);return;case"input":Ee("invalid",e);var R=f=_=u=null,G=null,st=null;for(o in a)if(a.hasOwnProperty(o)){var pt=a[o];if(pt!=null)switch(o){case"name":u=pt;break;case"type":_=pt;break;case"checked":G=pt;break;case"defaultChecked":st=pt;break;case"value":f=pt;break;case"defaultValue":R=pt;break;case"children":case"dangerouslySetInnerHTML":if(pt!=null)throw Error(s(137,n));break;default:Qe(e,n,o,pt,a,null)}}Gn(e,f,R,G,st,_,u,!1);return;case"select":Ee("invalid",e),o=_=f=null;for(u in a)if(a.hasOwnProperty(u)&&(R=a[u],R!=null))switch(u){case"value":f=R;break;case"defaultValue":_=R;break;case"multiple":o=R;default:Qe(e,n,u,R,a,null)}n=f,a=_,e.multiple=!!o,n!=null?wn(e,!!o,n,!1):a!=null&&wn(e,!!o,a,!0);return;case"textarea":Ee("invalid",e),f=u=o=null;for(_ in a)if(a.hasOwnProperty(_)&&(R=a[_],R!=null))switch(_){case"value":o=R;break;case"defaultValue":u=R;break;case"children":f=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(s(91));break;default:Qe(e,n,_,R,a,null)}Ii(e,o,u,f);return;case"option":for(G in a)if(a.hasOwnProperty(G)&&(o=a[G],o!=null))switch(G){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Qe(e,n,G,o,a,null)}return;case"dialog":Ee("beforetoggle",e),Ee("toggle",e),Ee("cancel",e),Ee("close",e);break;case"iframe":case"object":Ee("load",e);break;case"video":case"audio":for(o=0;o<Uo.length;o++)Ee(Uo[o],e);break;case"image":Ee("error",e),Ee("load",e);break;case"details":Ee("toggle",e);break;case"embed":case"source":case"link":Ee("error",e),Ee("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(st in a)if(a.hasOwnProperty(st)&&(o=a[st],o!=null))switch(st){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Qe(e,n,st,o,a,null)}return;default:if(He(n)){for(pt in a)a.hasOwnProperty(pt)&&(o=a[pt],o!==void 0&&Vf(e,n,pt,o,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(o=a[R],o!=null&&Qe(e,n,R,o,a,null))}function bS(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,_=null,R=null,G=null,st=null,pt=null;for(ft in a){var St=a[ft];if(a.hasOwnProperty(ft)&&St!=null)switch(ft){case"checked":break;case"value":break;case"defaultValue":G=St;default:o.hasOwnProperty(ft)||Qe(e,n,ft,null,o,St)}}for(var ot in o){var ft=o[ot];if(St=a[ot],o.hasOwnProperty(ot)&&(ft!=null||St!=null))switch(ot){case"type":f=ft;break;case"name":u=ft;break;case"checked":st=ft;break;case"defaultChecked":pt=ft;break;case"value":_=ft;break;case"defaultValue":R=ft;break;case"children":case"dangerouslySetInnerHTML":if(ft!=null)throw Error(s(137,n));break;default:ft!==St&&Qe(e,n,ot,ft,o,St)}}Vt(e,_,R,G,st,pt,f,u);return;case"select":ft=_=R=ot=null;for(f in a)if(G=a[f],a.hasOwnProperty(f)&&G!=null)switch(f){case"value":break;case"multiple":ft=G;default:o.hasOwnProperty(f)||Qe(e,n,f,null,o,G)}for(u in o)if(f=o[u],G=a[u],o.hasOwnProperty(u)&&(f!=null||G!=null))switch(u){case"value":ot=f;break;case"defaultValue":R=f;break;case"multiple":_=f;default:f!==G&&Qe(e,n,u,f,o,G)}n=R,a=_,o=ft,ot!=null?wn(e,!!a,ot,!1):!!o!=!!a&&(n!=null?wn(e,!!a,n,!0):wn(e,!!a,a?[]:"",!1));return;case"textarea":ft=ot=null;for(R in a)if(u=a[R],a.hasOwnProperty(R)&&u!=null&&!o.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:Qe(e,n,R,null,o,u)}for(_ in o)if(u=o[_],f=a[_],o.hasOwnProperty(_)&&(u!=null||f!=null))switch(_){case"value":ot=u;break;case"defaultValue":ft=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&Qe(e,n,_,u,o,f)}ui(e,ot,ft);return;case"option":for(var jt in a)if(ot=a[jt],a.hasOwnProperty(jt)&&ot!=null&&!o.hasOwnProperty(jt))switch(jt){case"selected":e.selected=!1;break;default:Qe(e,n,jt,null,o,ot)}for(G in o)if(ot=o[G],ft=a[G],o.hasOwnProperty(G)&&ot!==ft&&(ot!=null||ft!=null))switch(G){case"selected":e.selected=ot&&typeof ot!="function"&&typeof ot!="symbol";break;default:Qe(e,n,G,ot,o,ft)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ae in a)ot=a[ae],a.hasOwnProperty(ae)&&ot!=null&&!o.hasOwnProperty(ae)&&Qe(e,n,ae,null,o,ot);for(st in o)if(ot=o[st],ft=a[st],o.hasOwnProperty(st)&&ot!==ft&&(ot!=null||ft!=null))switch(st){case"children":case"dangerouslySetInnerHTML":if(ot!=null)throw Error(s(137,n));break;default:Qe(e,n,st,ot,o,ft)}return;default:if(He(n)){for(var Je in a)ot=a[Je],a.hasOwnProperty(Je)&&ot!==void 0&&!o.hasOwnProperty(Je)&&Vf(e,n,Je,void 0,o,ot);for(pt in o)ot=o[pt],ft=a[pt],!o.hasOwnProperty(pt)||ot===ft||ot===void 0&&ft===void 0||Vf(e,n,pt,ot,o,ft);return}}for(var K in a)ot=a[K],a.hasOwnProperty(K)&&ot!=null&&!o.hasOwnProperty(K)&&Qe(e,n,K,null,o,ot);for(St in o)ot=o[St],ft=a[St],!o.hasOwnProperty(St)||ot===ft||ot==null&&ft==null||Qe(e,n,St,ot,o,ft)}function mg(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function ES(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],f=u.transferSize,_=u.initiatorType,R=u.duration;if(f&&R&&mg(_)){for(_=0,R=u.responseEnd,o+=1;o<a.length;o++){var G=a[o],st=G.startTime;if(st>R)break;var pt=G.transferSize,St=G.initiatorType;pt&&mg(St)&&(G=G.responseEnd,_+=pt*(G<R?1:(R-st)/(G-st)))}if(--o,n+=8*(f+_)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var kf=null,Xf=null;function ic(e){return e.nodeType===9?e:e.ownerDocument}function gg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function _g(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Wf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var qf=null;function TS(){var e=window.event;return e&&e.type==="popstate"?e===qf?!1:(qf=e,!0):(qf=null,!1)}var vg=typeof setTimeout=="function"?setTimeout:void 0,AS=typeof clearTimeout=="function"?clearTimeout:void 0,xg=typeof Promise=="function"?Promise:void 0,RS=typeof queueMicrotask=="function"?queueMicrotask:typeof xg<"u"?function(e){return xg.resolve(null).then(e).catch(CS)}:vg;function CS(e){setTimeout(function(){throw e})}function rs(e){return e==="head"}function Sg(e,n){var a=n,o=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(u),wr(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Oo(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Oo(a);for(var f=a.firstChild;f;){var _=f.nextSibling,R=f.nodeName;f[ci]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=_}}else a==="body"&&Oo(e.ownerDocument.body);a=u}while(a);wr(n)}function yg(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function Yf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Yf(a),ji(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function wS(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[ci])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=Ui(e.nextSibling),e===null)break}return null}function DS(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Ui(e.nextSibling),e===null))return null;return e}function Mg(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Ui(e.nextSibling),e===null))return null;return e}function jf(e){return e.data==="$?"||e.data==="$~"}function Zf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function NS(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function Ui(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Kf=null;function bg(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return Ui(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function Eg(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function Tg(e,n,a){switch(n=ic(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Oo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);ji(e)}var Li=new Map,Ag=new Set;function ac(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var wa=F.d;F.d={f:US,r:LS,D:OS,C:PS,L:zS,m:IS,X:BS,S:FS,M:GS};function US(){var e=wa.f(),n=Zl();return e||n}function LS(e){var n=Cn(e);n!==null&&n.tag===5&&n.type==="form"?km(n):wa.r(e)}var Ar=typeof document>"u"?null:document;function Rg(e,n,a){var o=Ar;if(o&&typeof n=="string"&&n){var u=Xe(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Ag.has(u)||(Ag.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Fn(n,"link",e),dn(n),o.head.appendChild(n)))}}function OS(e){wa.D(e),Rg("dns-prefetch",e,null)}function PS(e,n){wa.C(e,n),Rg("preconnect",e,n)}function zS(e,n,a){wa.L(e,n,a);var o=Ar;if(o&&e&&n){var u='link[rel="preload"][as="'+Xe(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Xe(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Xe(a.imageSizes)+'"]')):u+='[href="'+Xe(e)+'"]';var f=u;switch(n){case"style":f=Rr(e);break;case"script":f=Cr(e)}Li.has(f)||(e=x({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),Li.set(f,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(Po(f))||n==="script"&&o.querySelector(zo(f))||(n=o.createElement("link"),Fn(n,"link",e),dn(n),o.head.appendChild(n)))}}function IS(e,n){wa.m(e,n);var a=Ar;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Xe(o)+'"][href="'+Xe(e)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Cr(e)}if(!Li.has(f)&&(e=x({rel:"modulepreload",href:e},n),Li.set(f,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(zo(f)))return}o=a.createElement("link"),Fn(o,"link",e),dn(o),a.head.appendChild(o)}}}function FS(e,n,a){wa.S(e,n,a);var o=Ar;if(o&&e){var u=zi(o).hoistableStyles,f=Rr(e);n=n||"default";var _=u.get(f);if(!_){var R={loading:0,preload:null};if(_=o.querySelector(Po(f)))R.loading=5;else{e=x({rel:"stylesheet",href:e,"data-precedence":n},a),(a=Li.get(f))&&Qf(e,a);var G=_=o.createElement("link");dn(G),Fn(G,"link",e),G._p=new Promise(function(st,pt){G.onload=st,G.onerror=pt}),G.addEventListener("load",function(){R.loading|=1}),G.addEventListener("error",function(){R.loading|=2}),R.loading|=4,sc(_,n,o)}_={type:"stylesheet",instance:_,count:1,state:R},u.set(f,_)}}}function BS(e,n){wa.X(e,n);var a=Ar;if(a&&e){var o=zi(a).hoistableScripts,u=Cr(e),f=o.get(u);f||(f=a.querySelector(zo(u)),f||(e=x({src:e,async:!0},n),(n=Li.get(u))&&Jf(e,n),f=a.createElement("script"),dn(f),Fn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function GS(e,n){wa.M(e,n);var a=Ar;if(a&&e){var o=zi(a).hoistableScripts,u=Cr(e),f=o.get(u);f||(f=a.querySelector(zo(u)),f||(e=x({src:e,async:!0,type:"module"},n),(n=Li.get(u))&&Jf(e,n),f=a.createElement("script"),dn(f),Fn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function Cg(e,n,a,o){var u=(u=ct.current)?ac(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Rr(a.href),a=zi(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Rr(a.href);var f=zi(u).hoistableStyles,_=f.get(e);if(_||(u=u.ownerDocument||u,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,_),(f=u.querySelector(Po(e)))&&!f._p&&(_.instance=f,_.state.loading=5),Li.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Li.set(e,a),f||HS(u,e,a,_.state))),n&&o===null)throw Error(s(528,""));return _}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Cr(a),a=zi(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Rr(e){return'href="'+Xe(e)+'"'}function Po(e){return'link[rel="stylesheet"]['+e+"]"}function wg(e){return x({},e,{"data-precedence":e.precedence,precedence:null})}function HS(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Fn(n,"link",a),dn(n),e.head.appendChild(n))}function Cr(e){return'[src="'+Xe(e)+'"]'}function zo(e){return"script[async]"+e}function Dg(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+Xe(a.href)+'"]');if(o)return n.instance=o,dn(o),o;var u=x({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),dn(o),Fn(o,"style",u),sc(o,a.precedence,e),n.instance=o;case"stylesheet":u=Rr(a.href);var f=e.querySelector(Po(u));if(f)return n.state.loading|=4,n.instance=f,dn(f),f;o=wg(a),(u=Li.get(u))&&Qf(o,u),f=(e.ownerDocument||e).createElement("link"),dn(f);var _=f;return _._p=new Promise(function(R,G){_.onload=R,_.onerror=G}),Fn(f,"link",o),n.state.loading|=4,sc(f,a.precedence,e),n.instance=f;case"script":return f=Cr(a.src),(u=e.querySelector(zo(f)))?(n.instance=u,dn(u),u):(o=a,(u=Li.get(f))&&(o=x({},a),Jf(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),dn(u),Fn(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,sc(o,a.precedence,e));return n.instance}function sc(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,_=0;_<o.length;_++){var R=o[_];if(R.dataset.precedence===n)f=R;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Qf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Jf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var rc=null;function Ng(e,n,a){if(rc===null){var o=new Map,u=rc=new Map;u.set(a,o)}else u=rc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[ci]||f[De]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var _=f.getAttribute(n)||"";_=e+_;var R=o.get(_);R?R.push(f):o.set(_,[f])}}return o}function Ug(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function VS(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Lg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function kS(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=Rr(o.href),f=n.querySelector(Po(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=oc.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,dn(f);return}f=n.ownerDocument||n,o=wg(o),(u=Li.get(u))&&Qf(o,u),f=f.createElement("link"),dn(f);var _=f;_._p=new Promise(function(R,G){_.onload=R,_.onerror=G}),Fn(f,"link",o),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=oc.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var $f=0;function XS(e,n){return e.stylesheets&&e.count===0&&cc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&cc(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&$f===0&&($f=62500*ES());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&cc(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>$f?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function oc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)cc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var lc=null;function cc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,lc=new Map,n.forEach(WS,e),lc=null,oc.call(e))}function WS(e,n){if(!(n.state.loading&4)){var a=lc.get(e);if(a)var o=a.get(null);else{a=new Map,lc.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var _=u[f];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(a.set(_.dataset.precedence,_),o=_)}o&&a.set(null,o)}u=n.instance,_=u.getAttribute("data-precedence"),f=a.get(_)||o,f===o&&a.set(null,u),a.set(_,u),this.count++,o=oc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Io={$$typeof:L,Provider:null,Consumer:null,_currentValue:lt,_currentValue2:lt,_threadCount:0};function qS(e,n,a,o,u,f,_,R,G){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Gt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Gt(0),this.hiddenUpdates=Gt(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=G,this.incompleteTransitions=new Map}function Og(e,n,a,o,u,f,_,R,G,st,pt,St){return e=new qS(e,n,a,_,G,st,pt,St,R),n=1,f===!0&&(n|=24),f=di(3,null,null,n),e.current=f,f.stateNode=e,n=Nu(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},Pu(f),e}function Pg(e){return e?(e=sr,e):sr}function zg(e,n,a,o,u,f){u=Pg(u),o.context===null?o.context=u:o.pendingContext=u,o=Za(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=Ka(e,o,n),a!==null&&(si(a,e,n),mo(a,e,n))}function Ig(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function th(e,n){Ig(e,n),(e=e.alternate)&&Ig(e,n)}function Fg(e){if(e.tag===13||e.tag===31){var n=Rs(e,67108864);n!==null&&si(n,e,67108864),th(e,67108864)}}function Bg(e){if(e.tag===13||e.tag===31){var n=vi();n=$n(n);var a=Rs(e,n);a!==null&&si(a,e,n),th(e,n)}}var uc=!0;function YS(e,n,a,o){var u=O.T;O.T=null;var f=F.p;try{F.p=2,eh(e,n,a,o)}finally{F.p=f,O.T=u}}function jS(e,n,a,o){var u=O.T;O.T=null;var f=F.p;try{F.p=8,eh(e,n,a,o)}finally{F.p=f,O.T=u}}function eh(e,n,a,o){if(uc){var u=nh(o);if(u===null)Hf(e,n,o,fc,a),Hg(e,o);else if(KS(u,e,n,a,o))o.stopPropagation();else if(Hg(e,o),n&4&&-1<ZS.indexOf(e)){for(;u!==null;){var f=Cn(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var _=bt(f.pendingLanes);if(_!==0){var R=f;for(R.pendingLanes|=2,R.entangledLanes|=2;_;){var G=1<<31-wt(_);R.entanglements[1]|=G,_&=~G}$i(f),(Ge&6)===0&&(Yl=Ut()+500,No(0))}}break;case 31:case 13:R=Rs(f,2),R!==null&&si(R,f,2),Zl(),th(f,2)}if(f=nh(o),f===null&&Hf(e,n,o,fc,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else Hf(e,n,o,null,a)}}function nh(e){return e=iu(e),ih(e)}var fc=null;function ih(e){if(fc=null,e=jn(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===31){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return fc=e,null}function Gg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Le()){case D:return 2;case b:return 8;case $:case gt:return 32;case Tt:return 268435456;default:return 32}default:return 32}}var ah=!1,os=null,ls=null,cs=null,Fo=new Map,Bo=new Map,us=[],ZS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Hg(e,n){switch(e){case"focusin":case"focusout":os=null;break;case"dragenter":case"dragleave":ls=null;break;case"mouseover":case"mouseout":cs=null;break;case"pointerover":case"pointerout":Fo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Bo.delete(n.pointerId)}}function Go(e,n,a,o,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=Cn(n),n!==null&&Fg(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function KS(e,n,a,o,u){switch(n){case"focusin":return os=Go(os,e,n,a,o,u),!0;case"dragenter":return ls=Go(ls,e,n,a,o,u),!0;case"mouseover":return cs=Go(cs,e,n,a,o,u),!0;case"pointerover":var f=u.pointerId;return Fo.set(f,Go(Fo.get(f)||null,e,n,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,Bo.set(f,Go(Bo.get(f)||null,e,n,a,o,u)),!0}return!1}function Vg(e){var n=jn(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,nn(e.priority,function(){Bg(a)});return}}else if(n===31){if(n=d(a),n!==null){e.blockedOn=n,nn(e.priority,function(){Bg(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function hc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=nh(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);nu=o,a.target.dispatchEvent(o),nu=null}else return n=Cn(a),n!==null&&Fg(n),e.blockedOn=a,!1;n.shift()}return!0}function kg(e,n,a){hc(e)&&a.delete(n)}function QS(){ah=!1,os!==null&&hc(os)&&(os=null),ls!==null&&hc(ls)&&(ls=null),cs!==null&&hc(cs)&&(cs=null),Fo.forEach(kg),Bo.forEach(kg)}function dc(e,n){e.blockedOn===n&&(e.blockedOn=null,ah||(ah=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,QS)))}var pc=null;function Xg(e){pc!==e&&(pc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){pc===e&&(pc=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(ih(o||a)===null)continue;break}var f=Cn(a);f!==null&&(e.splice(n,3),n-=3,ef(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function wr(e){function n(G){return dc(G,e)}os!==null&&dc(os,e),ls!==null&&dc(ls,e),cs!==null&&dc(cs,e),Fo.forEach(n),Bo.forEach(n);for(var a=0;a<us.length;a++){var o=us[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<us.length&&(a=us[0],a.blockedOn===null);)Vg(a),a.blockedOn===null&&us.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],_=u[Be]||null;if(typeof f=="function")_||Xg(a);else if(_){var R=null;if(f&&f.hasAttribute("formAction")){if(u=f,_=f[Be]||null)R=_.formAction;else if(ih(u)!==null)continue}else R=_.action;typeof R=="function"?a[o+1]=R:(a.splice(o,3),o-=3),Xg(a)}}}function Wg(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(_){return u=_})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function sh(e){this._internalRoot=e}mc.prototype.render=sh.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=vi();zg(a,o,e,n,null,null)},mc.prototype.unmount=sh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;zg(e.current,2,null,e,null,null),Zl(),n[Ze]=null}};function mc(e){this._internalRoot=e}mc.prototype.unstable_scheduleHydration=function(e){if(e){var n=Yi();e={blockedOn:null,target:e,priority:n};for(var a=0;a<us.length&&n!==0&&n<us[a].priority;a++);us.splice(a,0,e),a===0&&Vg(e)}};var qg=t.version;if(qg!=="19.2.7")throw Error(s(527,qg,"19.2.7"));F.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(n),e=e!==null?v(e):null,e=e===null?null:e.stateNode,e};var JS={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var gc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!gc.isDisabled&&gc.supportsFiber)try{tt=gc.inject(JS),J=gc}catch{}}return Vo.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",u=$m,f=t0,_=e0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(_=n.onRecoverableError)),n=Og(e,1,!1,null,null,a,o,null,u,f,_,Wg),e[Ze]=n.current,Gf(e),new sh(n)},Vo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,u="",f=$m,_=t0,R=e0,G=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.formState!==void 0&&(G=a.formState)),n=Og(e,1,!0,n,a??null,o,u,G,f,_,R,Wg),n.context=Pg(null),a=n.current,o=vi(),o=$n(o),u=Za(o),u.callback=null,Ka(a,u,o),a=o,n.current.lanes=a,qt(n,a),$i(n),e[Ze]=n.current,Gf(e),new mc(n)},Vo.version="19.2.7",Vo}var n_;function ly(){if(n_)return lh.exports;n_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),lh.exports=oy(),lh.exports}var cy=ly();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Wd="184",uy=0,i_=1,fy=2,Bc=1,dv=2,Ko=3,ys=0,Jn=1,ia=2,Ia=0,Wr=1,Jo=2,a_=3,s_=4,hy=5,Ws=100,dy=101,py=102,my=103,gy=104,_y=200,vy=201,xy=202,Sy=203,Qh=204,Jh=205,yy=206,My=207,by=208,Ey=209,Ty=210,Ay=211,Ry=212,Cy=213,wy=214,$h=0,td=1,ed=2,Yr=3,nd=4,id=5,ad=6,sd=7,pv=0,Dy=1,Ny=2,ra=0,mv=1,gv=2,_v=3,qd=4,vv=5,xv=6,Sv=7,yv=300,Zs=301,jr=302,hh=303,dh=304,$c=306,rd=1e3,za=1001,od=1002,Bn=1003,Uy=1004,_c=1005,Xn=1006,ph=1007,Ys=1008,bi=1009,Mv=1010,bv=1011,nl=1012,Yd=1013,ca=1014,aa=1015,Ba=1016,jd=1017,Zd=1018,il=1020,Ev=35902,Tv=35899,Av=1021,Rv=1022,qi=1023,Ga=1026,js=1027,Cv=1028,Kd=1029,Ks=1030,Qd=1031,Jd=1033,Gc=33776,Hc=33777,Vc=33778,kc=33779,ld=35840,cd=35841,ud=35842,fd=35843,hd=36196,dd=37492,pd=37496,md=37488,gd=37489,Wc=37490,_d=37491,vd=37808,xd=37809,Sd=37810,yd=37811,Md=37812,bd=37813,Ed=37814,Td=37815,Ad=37816,Rd=37817,Cd=37818,wd=37819,Dd=37820,Nd=37821,Ud=36492,Ld=36494,Od=36495,Pd=36283,zd=36284,qc=36285,Id=36286,Ly=3200,Fd=0,Oy=1,vs="",Pi="srgb",Yc="srgb-linear",jc="linear",je="srgb",Dr=7680,r_=519,Py=512,zy=513,Iy=514,$d=515,Fy=516,By=517,tp=518,Gy=519,o_=35044,l_="300 es",sa=2e3,al=2001;function Hy(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Zc(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Vy(){const r=Zc("canvas");return r.style.display="block",r}const c_={};function u_(...r){const t="THREE."+r.shift();console.log(t,...r)}function wv(r){const t=r[0];if(typeof t=="string"&&t.startsWith("TSL:")){const i=r[1];i&&i.isStackTrace?r[0]+=" "+i.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function le(...r){r=wv(r);const t="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...r)}}function Ue(...r){r=wv(r);const t="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...r)}}function Bd(...r){const t=r.join(" ");t in c_||(c_[t]=!0,le(...r))}function ky(r,t,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const Xy={[$h]:td,[ed]:ad,[nd]:sd,[Yr]:id,[td]:$h,[ad]:ed,[sd]:nd,[id]:Yr};class Qs{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,t);t.target=null}}}const Vn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],mh=Math.PI/180,Gd=180/Math.PI;function sl(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Vn[r&255]+Vn[r>>8&255]+Vn[r>>16&255]+Vn[r>>24&255]+"-"+Vn[t&255]+Vn[t>>8&255]+"-"+Vn[t>>16&15|64]+Vn[t>>24&255]+"-"+Vn[i&63|128]+Vn[i>>8&255]+"-"+Vn[i>>16&255]+Vn[i>>24&255]+Vn[s&255]+Vn[s>>8&255]+Vn[s>>16&255]+Vn[s>>24&255]).toLowerCase()}function ye(r,t,i){return Math.max(t,Math.min(i,r))}function Wy(r,t){return(r%t+t)%t}function gh(r,t,i){return(1-i)*r+i*t}function ko(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function ri(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const up=class up{constructor(t=0,i=0){this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=ye(this.x,t.x,i.x),this.y=ye(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=ye(this.x,t,i),this.y=ye(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(ye(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(ye(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,h=this.y-t.y;return this.x=c*s-h*l+t.x,this.y=c*l+h*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};up.prototype.isVector2=!0;let $t=up;class Qr{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,h,d){let m=s[l+0],p=s[l+1],v=s[l+2],x=s[l+3],g=c[h+0],S=c[h+1],E=c[h+2],w=c[h+3];if(x!==w||m!==g||p!==S||v!==E){let M=m*g+p*S+v*E+x*w;M<0&&(g=-g,S=-S,E=-E,w=-w,M=-M);let y=1-d;if(M<.9995){const C=Math.acos(M),L=Math.sin(C);y=Math.sin(y*C)/L,d=Math.sin(d*C)/L,m=m*y+g*d,p=p*y+S*d,v=v*y+E*d,x=x*y+w*d}else{m=m*y+g*d,p=p*y+S*d,v=v*y+E*d,x=x*y+w*d;const C=1/Math.sqrt(m*m+p*p+v*v+x*x);m*=C,p*=C,v*=C,x*=C}}t[i]=m,t[i+1]=p,t[i+2]=v,t[i+3]=x}static multiplyQuaternionsFlat(t,i,s,l,c,h){const d=s[l],m=s[l+1],p=s[l+2],v=s[l+3],x=c[h],g=c[h+1],S=c[h+2],E=c[h+3];return t[i]=d*E+v*x+m*S-p*g,t[i+1]=m*E+v*g+p*x-d*S,t[i+2]=p*E+v*S+d*g-m*x,t[i+3]=v*E-d*x-m*g-p*S,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,h=t._order,d=Math.cos,m=Math.sin,p=d(s/2),v=d(l/2),x=d(c/2),g=m(s/2),S=m(l/2),E=m(c/2);switch(h){case"XYZ":this._x=g*v*x+p*S*E,this._y=p*S*x-g*v*E,this._z=p*v*E+g*S*x,this._w=p*v*x-g*S*E;break;case"YXZ":this._x=g*v*x+p*S*E,this._y=p*S*x-g*v*E,this._z=p*v*E-g*S*x,this._w=p*v*x+g*S*E;break;case"ZXY":this._x=g*v*x-p*S*E,this._y=p*S*x+g*v*E,this._z=p*v*E+g*S*x,this._w=p*v*x-g*S*E;break;case"ZYX":this._x=g*v*x-p*S*E,this._y=p*S*x+g*v*E,this._z=p*v*E-g*S*x,this._w=p*v*x+g*S*E;break;case"YZX":this._x=g*v*x+p*S*E,this._y=p*S*x+g*v*E,this._z=p*v*E-g*S*x,this._w=p*v*x-g*S*E;break;case"XZY":this._x=g*v*x-p*S*E,this._y=p*S*x-g*v*E,this._z=p*v*E+g*S*x,this._w=p*v*x+g*S*E;break;default:le("Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],h=i[1],d=i[5],m=i[9],p=i[2],v=i[6],x=i[10],g=s+d+x;if(g>0){const S=.5/Math.sqrt(g+1);this._w=.25/S,this._x=(v-m)*S,this._y=(c-p)*S,this._z=(h-l)*S}else if(s>d&&s>x){const S=2*Math.sqrt(1+s-d-x);this._w=(v-m)/S,this._x=.25*S,this._y=(l+h)/S,this._z=(c+p)/S}else if(d>x){const S=2*Math.sqrt(1+d-s-x);this._w=(c-p)/S,this._x=(l+h)/S,this._y=.25*S,this._z=(m+v)/S}else{const S=2*Math.sqrt(1+x-s-d);this._w=(h-l)/S,this._x=(c+p)/S,this._y=(m+v)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ye(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,h=t._w,d=i._x,m=i._y,p=i._z,v=i._w;return this._x=s*v+h*d+l*p-c*m,this._y=l*v+h*m+c*d-s*p,this._z=c*v+h*p+s*m-l*d,this._w=h*v-s*d-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){let s=t._x,l=t._y,c=t._z,h=t._w,d=this.dot(t);d<0&&(s=-s,l=-l,c=-c,h=-h,d=-d);let m=1-i;if(d<.9995){const p=Math.acos(d),v=Math.sin(p);m=Math.sin(m*p)/v,i=Math.sin(i*p)/v,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const fp=class fp{constructor(t=0,i=0,s=0){this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(f_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(f_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,h=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*h,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,h=t.y,d=t.z,m=t.w,p=2*(h*l-d*s),v=2*(d*i-c*l),x=2*(c*s-h*i);return this.x=i+m*p+h*x-d*v,this.y=s+m*v+d*p-c*x,this.z=l+m*x+c*v-h*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=ye(this.x,t.x,i.x),this.y=ye(this.y,t.y,i.y),this.z=ye(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=ye(this.x,t,i),this.y=ye(this.y,t,i),this.z=ye(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(ye(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*h-s*m,this.z=s*d-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return _h.copy(this).projectOnVector(t),this.sub(_h)}reflect(t){return this.sub(_h.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(ye(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};fp.prototype.isVector3=!0;let Y=fp;const _h=new Y,f_=new Qr,hp=class hp{constructor(t,i,s,l,c,h,d,m,p){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,d,m,p)}set(t,i,s,l,c,h,d,m,p){const v=this.elements;return v[0]=t,v[1]=l,v[2]=d,v[3]=i,v[4]=c,v[5]=m,v[6]=s,v[7]=h,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],d=s[3],m=s[6],p=s[1],v=s[4],x=s[7],g=s[2],S=s[5],E=s[8],w=l[0],M=l[3],y=l[6],C=l[1],L=l[4],N=l[7],H=l[2],U=l[5],I=l[8];return c[0]=h*w+d*C+m*H,c[3]=h*M+d*L+m*U,c[6]=h*y+d*N+m*I,c[1]=p*w+v*C+x*H,c[4]=p*M+v*L+x*U,c[7]=p*y+v*N+x*I,c[2]=g*w+S*C+E*H,c[5]=g*M+S*L+E*U,c[8]=g*y+S*N+E*I,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],v=t[8];return i*h*v-i*d*p-s*c*v+s*d*m+l*c*p-l*h*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],v=t[8],x=v*h-d*p,g=d*m-v*c,S=p*c-h*m,E=i*x+s*g+l*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/E;return t[0]=x*w,t[1]=(l*p-v*s)*w,t[2]=(d*s-l*h)*w,t[3]=g*w,t[4]=(v*i-l*m)*w,t[5]=(l*c-d*i)*w,t[6]=S*w,t[7]=(s*m-p*i)*w,t[8]=(h*i-s*c)*w,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,h,d){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*h+p*d)+h+t,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(vh.makeScale(t,i)),this}rotate(t){return this.premultiply(vh.makeRotation(-t)),this}translate(t,i){return this.premultiply(vh.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}};hp.prototype.isMatrix3=!0;let he=hp;const vh=new he,h_=new he().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),d_=new he().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function qy(){const r={enabled:!0,workingColorSpace:Yc,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===je&&(l.r=Fa(l.r),l.g=Fa(l.g),l.b=Fa(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===je&&(l.r=qr(l.r),l.g=qr(l.g),l.b=qr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===vs?jc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Bd("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Bd("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[Yc]:{primaries:t,whitePoint:s,transfer:jc,toXYZ:h_,fromXYZ:d_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Pi},outputColorSpaceConfig:{drawingBufferColorSpace:Pi}},[Pi]:{primaries:t,whitePoint:s,transfer:je,toXYZ:h_,fromXYZ:d_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Pi}}}),r}const Ce=qy();function Fa(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function qr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Nr;class Yy{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{Nr===void 0&&(Nr=Zc("canvas")),Nr.width=t.width,Nr.height=t.height;const l=Nr.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=Nr}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Zc("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=Fa(c[h]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Fa(i[s]/255)*255):i[s]=Fa(i[s]);return{data:i,width:t.width,height:t.height}}else return le("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let jy=0;class ep{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:jy++}),this.uuid=sl(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayWidth,i.displayHeight,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?c.push(xh(l[h].image)):c.push(xh(l[h]))}else c=xh(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function xh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Yy.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(le("Texture: Unable to serialize Texture."),{})}let Zy=0;const Sh=new Y;class Wn extends Qs{constructor(t=Wn.DEFAULT_IMAGE,i=Wn.DEFAULT_MAPPING,s=za,l=za,c=Xn,h=Ys,d=qi,m=bi,p=Wn.DEFAULT_ANISOTROPY,v=vs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Zy++}),this.uuid=sl(),this.name="",this.source=new ep(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new $t(0,0),this.repeat=new $t(1,1),this.center=new $t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new he,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Sh).x}get height(){return this.source.getSize(Sh).y}get depth(){return this.source.getSize(Sh).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){le(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){le(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==yv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case rd:t.x=t.x-Math.floor(t.x);break;case za:t.x=t.x<0?0:1;break;case od:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case rd:t.y=t.y-Math.floor(t.y);break;case za:t.y=t.y<0?0:1;break;case od:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Wn.DEFAULT_IMAGE=null;Wn.DEFAULT_MAPPING=yv;Wn.DEFAULT_ANISOTROPY=1;const dp=class dp{constructor(t=0,i=0,s=0,l=1){this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,h=t.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const m=t.elements,p=m[0],v=m[4],x=m[8],g=m[1],S=m[5],E=m[9],w=m[2],M=m[6],y=m[10];if(Math.abs(v-g)<.01&&Math.abs(x-w)<.01&&Math.abs(E-M)<.01){if(Math.abs(v+g)<.1&&Math.abs(x+w)<.1&&Math.abs(E+M)<.1&&Math.abs(p+S+y-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const L=(p+1)/2,N=(S+1)/2,H=(y+1)/2,U=(v+g)/4,I=(x+w)/4,T=(E+M)/4;return L>N&&L>H?L<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(L),l=U/s,c=I/s):N>H?N<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(N),s=U/l,c=T/l):H<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(H),s=I/c,l=T/c),this.set(s,l,c,i),this}let C=Math.sqrt((M-E)*(M-E)+(x-w)*(x-w)+(g-v)*(g-v));return Math.abs(C)<.001&&(C=1),this.x=(M-E)/C,this.y=(x-w)/C,this.z=(g-v)/C,this.w=Math.acos((p+S+y-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=ye(this.x,t.x,i.x),this.y=ye(this.y,t.y,i.y),this.z=ye(this.z,t.z,i.z),this.w=ye(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=ye(this.x,t,i),this.y=ye(this.y,t,i),this.z=ye(this.z,t,i),this.w=ye(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(ye(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};dp.prototype.isVector4=!0;let gn=dp;class Ky extends Qs{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new gn(0,0,t,i),this.scissorTest=!1,this.viewport=new gn(0,0,t,i),this.textures=[];const l={width:t,height:i,depth:s.depth},c=new Wn(l),h=s.count;for(let d=0;d<h;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:Xn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new ep(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class oa extends Ky{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class Dv extends Wn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Bn,this.minFilter=Bn,this.wrapR=za,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Qy extends Wn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Bn,this.minFilter=Bn,this.wrapR=za,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Jc=class Jc{constructor(t,i,s,l,c,h,d,m,p,v,x,g,S,E,w,M){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,d,m,p,v,x,g,S,E,w,M)}set(t,i,s,l,c,h,d,m,p,v,x,g,S,E,w,M){const y=this.elements;return y[0]=t,y[4]=i,y[8]=s,y[12]=l,y[1]=c,y[5]=h,y[9]=d,y[13]=m,y[2]=p,y[6]=v,y[10]=x,y[14]=g,y[3]=S,y[7]=E,y[11]=w,y[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Jc().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return this.determinant()===0?(t.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const i=this.elements,s=t.elements,l=1/Ur.setFromMatrixColumn(t,0).length(),c=1/Ur.setFromMatrixColumn(t,1).length(),h=1/Ur.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,h=Math.cos(s),d=Math.sin(s),m=Math.cos(l),p=Math.sin(l),v=Math.cos(c),x=Math.sin(c);if(t.order==="XYZ"){const g=h*v,S=h*x,E=d*v,w=d*x;i[0]=m*v,i[4]=-m*x,i[8]=p,i[1]=S+E*p,i[5]=g-w*p,i[9]=-d*m,i[2]=w-g*p,i[6]=E+S*p,i[10]=h*m}else if(t.order==="YXZ"){const g=m*v,S=m*x,E=p*v,w=p*x;i[0]=g+w*d,i[4]=E*d-S,i[8]=h*p,i[1]=h*x,i[5]=h*v,i[9]=-d,i[2]=S*d-E,i[6]=w+g*d,i[10]=h*m}else if(t.order==="ZXY"){const g=m*v,S=m*x,E=p*v,w=p*x;i[0]=g-w*d,i[4]=-h*x,i[8]=E+S*d,i[1]=S+E*d,i[5]=h*v,i[9]=w-g*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(t.order==="ZYX"){const g=h*v,S=h*x,E=d*v,w=d*x;i[0]=m*v,i[4]=E*p-S,i[8]=g*p+w,i[1]=m*x,i[5]=w*p+g,i[9]=S*p-E,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(t.order==="YZX"){const g=h*m,S=h*p,E=d*m,w=d*p;i[0]=m*v,i[4]=w-g*x,i[8]=E*x+S,i[1]=x,i[5]=h*v,i[9]=-d*v,i[2]=-p*v,i[6]=S*x+E,i[10]=g-w*x}else if(t.order==="XZY"){const g=h*m,S=h*p,E=d*m,w=d*p;i[0]=m*v,i[4]=-x,i[8]=p*v,i[1]=g*x+w,i[5]=h*v,i[9]=S*x-E,i[2]=E*x-S,i[6]=d*v,i[10]=w*x+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Jy,t,$y)}lookAt(t,i,s){const l=this.elements;return xi.subVectors(t,i),xi.lengthSq()===0&&(xi.z=1),xi.normalize(),hs.crossVectors(s,xi),hs.lengthSq()===0&&(Math.abs(s.z)===1?xi.x+=1e-4:xi.z+=1e-4,xi.normalize(),hs.crossVectors(s,xi)),hs.normalize(),vc.crossVectors(xi,hs),l[0]=hs.x,l[4]=vc.x,l[8]=xi.x,l[1]=hs.y,l[5]=vc.y,l[9]=xi.y,l[2]=hs.z,l[6]=vc.z,l[10]=xi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],d=s[4],m=s[8],p=s[12],v=s[1],x=s[5],g=s[9],S=s[13],E=s[2],w=s[6],M=s[10],y=s[14],C=s[3],L=s[7],N=s[11],H=s[15],U=l[0],I=l[4],T=l[8],z=l[12],Z=l[1],B=l[5],X=l[9],ut=l[13],ht=l[2],W=l[6],O=l[10],F=l[14],lt=l[3],mt=l[7],Et=l[11],P=l[15];return c[0]=h*U+d*Z+m*ht+p*lt,c[4]=h*I+d*B+m*W+p*mt,c[8]=h*T+d*X+m*O+p*Et,c[12]=h*z+d*ut+m*F+p*P,c[1]=v*U+x*Z+g*ht+S*lt,c[5]=v*I+x*B+g*W+S*mt,c[9]=v*T+x*X+g*O+S*Et,c[13]=v*z+x*ut+g*F+S*P,c[2]=E*U+w*Z+M*ht+y*lt,c[6]=E*I+w*B+M*W+y*mt,c[10]=E*T+w*X+M*O+y*Et,c[14]=E*z+w*ut+M*F+y*P,c[3]=C*U+L*Z+N*ht+H*lt,c[7]=C*I+L*B+N*W+H*mt,c[11]=C*T+L*X+N*O+H*Et,c[15]=C*z+L*ut+N*F+H*P,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],h=t[1],d=t[5],m=t[9],p=t[13],v=t[2],x=t[6],g=t[10],S=t[14],E=t[3],w=t[7],M=t[11],y=t[15],C=m*S-p*g,L=d*S-p*x,N=d*g-m*x,H=h*S-p*v,U=h*g-m*v,I=h*x-d*v;return i*(w*C-M*L+y*N)-s*(E*C-M*H+y*U)+l*(E*L-w*H+y*I)-c*(E*N-w*U+M*I)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],v=t[8],x=t[9],g=t[10],S=t[11],E=t[12],w=t[13],M=t[14],y=t[15],C=i*d-s*h,L=i*m-l*h,N=i*p-c*h,H=s*m-l*d,U=s*p-c*d,I=l*p-c*m,T=v*w-x*E,z=v*M-g*E,Z=v*y-S*E,B=x*M-g*w,X=x*y-S*w,ut=g*y-S*M,ht=C*ut-L*X+N*B+H*Z-U*z+I*T;if(ht===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const W=1/ht;return t[0]=(d*ut-m*X+p*B)*W,t[1]=(l*X-s*ut-c*B)*W,t[2]=(w*I-M*U+y*H)*W,t[3]=(g*U-x*I-S*H)*W,t[4]=(m*Z-h*ut-p*z)*W,t[5]=(i*ut-l*Z+c*z)*W,t[6]=(M*N-E*I-y*L)*W,t[7]=(v*I-g*N+S*L)*W,t[8]=(h*X-d*Z+p*T)*W,t[9]=(s*Z-i*X-c*T)*W,t[10]=(E*U-w*N+y*C)*W,t[11]=(x*N-v*U-S*C)*W,t[12]=(d*z-h*B-m*T)*W,t[13]=(i*B-s*z+l*T)*W,t[14]=(w*L-E*H-M*C)*W,t[15]=(v*H-x*L+g*C)*W,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,h=t.x,d=t.y,m=t.z,p=c*h,v=c*d;return this.set(p*h+s,p*d-l*m,p*m+l*d,0,p*d+l*m,v*d+s,v*m-l*h,0,p*m-l*d,v*m+l*h,c*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,h){return this.set(1,s,c,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,h=i._y,d=i._z,m=i._w,p=c+c,v=h+h,x=d+d,g=c*p,S=c*v,E=c*x,w=h*v,M=h*x,y=d*x,C=m*p,L=m*v,N=m*x,H=s.x,U=s.y,I=s.z;return l[0]=(1-(w+y))*H,l[1]=(S+N)*H,l[2]=(E-L)*H,l[3]=0,l[4]=(S-N)*U,l[5]=(1-(g+y))*U,l[6]=(M+C)*U,l[7]=0,l[8]=(E+L)*I,l[9]=(M-C)*I,l[10]=(1-(g+w))*I,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;t.x=l[12],t.y=l[13],t.z=l[14];const c=this.determinant();if(c===0)return s.set(1,1,1),i.identity(),this;let h=Ur.set(l[0],l[1],l[2]).length();const d=Ur.set(l[4],l[5],l[6]).length(),m=Ur.set(l[8],l[9],l[10]).length();c<0&&(h=-h),Vi.copy(this);const p=1/h,v=1/d,x=1/m;return Vi.elements[0]*=p,Vi.elements[1]*=p,Vi.elements[2]*=p,Vi.elements[4]*=v,Vi.elements[5]*=v,Vi.elements[6]*=v,Vi.elements[8]*=x,Vi.elements[9]*=x,Vi.elements[10]*=x,i.setFromRotationMatrix(Vi),s.x=h,s.y=d,s.z=m,this}makePerspective(t,i,s,l,c,h,d=sa,m=!1){const p=this.elements,v=2*c/(i-t),x=2*c/(s-l),g=(i+t)/(i-t),S=(s+l)/(s-l);let E,w;if(m)E=c/(h-c),w=h*c/(h-c);else if(d===sa)E=-(h+c)/(h-c),w=-2*h*c/(h-c);else if(d===al)E=-h/(h-c),w=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=v,p[4]=0,p[8]=g,p[12]=0,p[1]=0,p[5]=x,p[9]=S,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=w,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,s,l,c,h,d=sa,m=!1){const p=this.elements,v=2/(i-t),x=2/(s-l),g=-(i+t)/(i-t),S=-(s+l)/(s-l);let E,w;if(m)E=1/(h-c),w=h/(h-c);else if(d===sa)E=-2/(h-c),w=-(h+c)/(h-c);else if(d===al)E=-1/(h-c),w=-c/(h-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=v,p[4]=0,p[8]=0,p[12]=g,p[1]=0,p[5]=x,p[9]=0,p[13]=S,p[2]=0,p[6]=0,p[10]=E,p[14]=w,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}};Jc.prototype.isMatrix4=!0;let fn=Jc;const Ur=new Y,Vi=new fn,Jy=new Y(0,0,0),$y=new Y(1,1,1),hs=new Y,vc=new Y,xi=new Y,p_=new fn,m_=new Qr;class Ms{constructor(t=0,i=0,s=0,l=Ms.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],h=l[4],d=l[8],m=l[1],p=l[5],v=l[9],x=l[2],g=l[6],S=l[10];switch(i){case"XYZ":this._y=Math.asin(ye(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,S),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(g,p),this._z=0);break;case"YXZ":this._x=Math.asin(-ye(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-x,c),this._z=0);break;case"ZXY":this._x=Math.asin(ye(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-x,S),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-ye(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(g,S),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(ye(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-x,c)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-ye(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(g,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-v,S),this._y=0);break;default:le("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return p_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(p_,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return m_.setFromEuler(this),this.setFromQuaternion(m_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ms.DEFAULT_ORDER="XYZ";let np=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},tM=0;const g_=new Y,Lr=new Qr,Da=new fn,xc=new Y,Xo=new Y,eM=new Y,nM=new Qr,__=new Y(1,0,0),v_=new Y(0,1,0),x_=new Y(0,0,1),S_={type:"added"},iM={type:"removed"},Or={type:"childadded",child:null},yh={type:"childremoved",child:null};class qn extends Qs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:tM++}),this.uuid=sl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qn.DEFAULT_UP.clone();const t=new Y,i=new Ms,s=new Qr,l=new Y(1,1,1);function c(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new fn},normalMatrix:{value:new he}}),this.matrix=new fn,this.matrixWorld=new fn,this.matrixAutoUpdate=qn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new np,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Lr.setFromAxisAngle(t,i),this.quaternion.multiply(Lr),this}rotateOnWorldAxis(t,i){return Lr.setFromAxisAngle(t,i),this.quaternion.premultiply(Lr),this}rotateX(t){return this.rotateOnAxis(__,t)}rotateY(t){return this.rotateOnAxis(v_,t)}rotateZ(t){return this.rotateOnAxis(x_,t)}translateOnAxis(t,i){return g_.copy(t).applyQuaternion(this.quaternion),this.position.add(g_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(__,t)}translateY(t){return this.translateOnAxis(v_,t)}translateZ(t){return this.translateOnAxis(x_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Da.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?xc.copy(t):xc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Xo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Da.lookAt(Xo,xc,this.up):Da.lookAt(xc,Xo,this.up),this.quaternion.setFromRotationMatrix(Da),l&&(Da.extractRotation(l.matrixWorld),Lr.setFromRotationMatrix(Da),this.quaternion.premultiply(Lr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Ue("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(S_),Or.child=t,this.dispatchEvent(Or),Or.child=null):Ue("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(iM),yh.child=t,this.dispatchEvent(yh),yh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Da.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Da.multiply(t.parent.matrixWorld)),t.applyMatrix4(Da),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(S_),Or.child=t,this.dispatchEvent(Or),Or.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xo,t,eM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xo,nM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const i=t.x,s=t.y,l=t.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*s-c[8]*l,c[13]+=s-c[1]*i-c[5]*s-c[9]*l,c[14]+=l-c[2]*i-c[6]*s-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,v=m.length;p<v;p++){const x=m[p];c(t.shapes,x)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(t.materials,this.material[m]));l.material=d}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(t.animations,m))}}if(i){const d=h(t.geometries),m=h(t.materials),p=h(t.textures),v=h(t.images),x=h(t.shapes),g=h(t.skeletons),S=h(t.animations),E=h(t.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),v.length>0&&(s.images=v),x.length>0&&(s.shapes=x),g.length>0&&(s.skeletons=g),S.length>0&&(s.animations=S),E.length>0&&(s.nodes=E)}return s.object=l,s;function h(d){const m=[];for(const p in d){const v=d[p];delete v.metadata,m.push(v)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}qn.DEFAULT_UP=new Y(0,1,0);qn.DEFAULT_MATRIX_AUTO_UPDATE=!0;qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Pa extends qn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const aM={type:"move"};class Mh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){h=!0;for(const w of t.hand.values()){const M=i.getJointPose(w,s),y=this._getHandJoint(p,w);M!==null&&(y.matrix.fromArray(M.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=M.radius),y.visible=M!==null}const v=p.joints["index-finger-tip"],x=p.joints["thumb-tip"],g=v.position.distanceTo(x.position),S=.02,E=.005;p.inputState.pinching&&g>S+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&g<=S-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:t,target:this})));d!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(aM)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new Pa;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}const Nv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ds={h:0,s:0,l:0},Sc={h:0,s:0,l:0};function bh(r,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(t-r)*6*i:i<1/2?t:i<2/3?r+(t-r)*6*(2/3-i):r}class ve{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=Pi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ce.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=Ce.workingColorSpace){return this.r=t,this.g=i,this.b=s,Ce.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=Ce.workingColorSpace){if(t=Wy(t,1),i=ye(i,0,1),s=ye(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,h=2*s-c;this.r=bh(h,c,t+1/3),this.g=bh(h,c,t),this.b=bh(h,c,t-1/3)}return Ce.colorSpaceToWorking(this,l),this}setStyle(t,i=Pi){function s(c){c!==void 0&&parseFloat(c)<1&&le("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:le("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);le("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=Pi){const s=Nv[t.toLowerCase()];return s!==void 0?this.setHex(s,i):le("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Fa(t.r),this.g=Fa(t.g),this.b=Fa(t.b),this}copyLinearToSRGB(t){return this.r=qr(t.r),this.g=qr(t.g),this.b=qr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Pi){return Ce.workingToColorSpace(kn.copy(this),t),Math.round(ye(kn.r*255,0,255))*65536+Math.round(ye(kn.g*255,0,255))*256+Math.round(ye(kn.b*255,0,255))}getHexString(t=Pi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Ce.workingColorSpace){Ce.workingToColorSpace(kn.copy(this),i);const s=kn.r,l=kn.g,c=kn.b,h=Math.max(s,l,c),d=Math.min(s,l,c);let m,p;const v=(d+h)/2;if(d===h)m=0,p=0;else{const x=h-d;switch(p=v<=.5?x/(h+d):x/(2-h-d),h){case s:m=(l-c)/x+(l<c?6:0);break;case l:m=(c-s)/x+2;break;case c:m=(s-l)/x+4;break}m/=6}return t.h=m,t.s=p,t.l=v,t}getRGB(t,i=Ce.workingColorSpace){return Ce.workingToColorSpace(kn.copy(this),i),t.r=kn.r,t.g=kn.g,t.b=kn.b,t}getStyle(t=Pi){Ce.workingToColorSpace(kn.copy(this),t);const i=kn.r,s=kn.g,l=kn.b;return t!==Pi?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(ds),this.setHSL(ds.h+t,ds.s+i,ds.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(ds),t.getHSL(Sc);const s=gh(ds.h,Sc.h,i),l=gh(ds.s,Sc.s,i),c=gh(ds.l,Sc.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const kn=new ve;ve.NAMES=Nv;class ip{constructor(t,i=25e-5){this.isFogExp2=!0,this.name="",this.color=new ve(t),this.density=i}clone(){return new ip(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class sM extends qn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ms,this.environmentIntensity=1,this.environmentRotation=new Ms,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const ki=new Y,Na=new Y,Eh=new Y,Ua=new Y,Pr=new Y,zr=new Y,y_=new Y,Th=new Y,Ah=new Y,Rh=new Y,Ch=new gn,wh=new gn,Dh=new gn;class Wi{constructor(t=new Y,i=new Y,s=new Y){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),ki.subVectors(t,i),l.cross(ki);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){ki.subVectors(l,i),Na.subVectors(s,i),Eh.subVectors(t,i);const h=ki.dot(ki),d=ki.dot(Na),m=ki.dot(Eh),p=Na.dot(Na),v=Na.dot(Eh),x=h*p-d*d;if(x===0)return c.set(0,0,0),null;const g=1/x,S=(p*m-d*v)*g,E=(h*v-d*m)*g;return c.set(1-S-E,E,S)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,Ua)===null?!1:Ua.x>=0&&Ua.y>=0&&Ua.x+Ua.y<=1}static getInterpolation(t,i,s,l,c,h,d,m){return this.getBarycoord(t,i,s,l,Ua)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Ua.x),m.addScaledVector(h,Ua.y),m.addScaledVector(d,Ua.z),m)}static getInterpolatedAttribute(t,i,s,l,c,h){return Ch.setScalar(0),wh.setScalar(0),Dh.setScalar(0),Ch.fromBufferAttribute(t,i),wh.fromBufferAttribute(t,s),Dh.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(Ch,c.x),h.addScaledVector(wh,c.y),h.addScaledVector(Dh,c.z),h}static isFrontFacing(t,i,s,l){return ki.subVectors(s,i),Na.subVectors(t,i),ki.cross(Na).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ki.subVectors(this.c,this.b),Na.subVectors(this.a,this.b),ki.cross(Na).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Wi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Wi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return Wi.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return Wi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Wi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let h,d;Pr.subVectors(l,s),zr.subVectors(c,s),Th.subVectors(t,s);const m=Pr.dot(Th),p=zr.dot(Th);if(m<=0&&p<=0)return i.copy(s);Ah.subVectors(t,l);const v=Pr.dot(Ah),x=zr.dot(Ah);if(v>=0&&x<=v)return i.copy(l);const g=m*x-v*p;if(g<=0&&m>=0&&v<=0)return h=m/(m-v),i.copy(s).addScaledVector(Pr,h);Rh.subVectors(t,c);const S=Pr.dot(Rh),E=zr.dot(Rh);if(E>=0&&S<=E)return i.copy(c);const w=S*p-m*E;if(w<=0&&p>=0&&E<=0)return d=p/(p-E),i.copy(s).addScaledVector(zr,d);const M=v*E-S*x;if(M<=0&&x-v>=0&&S-E>=0)return y_.subVectors(c,l),d=(x-v)/(x-v+(S-E)),i.copy(l).addScaledVector(y_,d);const y=1/(M+w+g);return h=w*y,d=g*y,i.copy(s).addScaledVector(Pr,h).addScaledVector(zr,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class rl{constructor(t=new Y(1/0,1/0,1/0),i=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Xi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Xi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Xi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let h=0,d=c.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,Xi):Xi.fromBufferAttribute(c,h),Xi.applyMatrix4(t.matrixWorld),this.expandByPoint(Xi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),yc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),yc.copy(s.boundingBox)),yc.applyMatrix4(t.matrixWorld),this.union(yc)}const l=t.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Xi),Xi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Wo),Mc.subVectors(this.max,Wo),Ir.subVectors(t.a,Wo),Fr.subVectors(t.b,Wo),Br.subVectors(t.c,Wo),ps.subVectors(Fr,Ir),ms.subVectors(Br,Fr),Gs.subVectors(Ir,Br);let i=[0,-ps.z,ps.y,0,-ms.z,ms.y,0,-Gs.z,Gs.y,ps.z,0,-ps.x,ms.z,0,-ms.x,Gs.z,0,-Gs.x,-ps.y,ps.x,0,-ms.y,ms.x,0,-Gs.y,Gs.x,0];return!Nh(i,Ir,Fr,Br,Mc)||(i=[1,0,0,0,1,0,0,0,1],!Nh(i,Ir,Fr,Br,Mc))?!1:(bc.crossVectors(ps,ms),i=[bc.x,bc.y,bc.z],Nh(i,Ir,Fr,Br,Mc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Xi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Xi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(La[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),La[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),La[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),La[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),La[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),La[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),La[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),La[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(La),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const La=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],Xi=new Y,yc=new rl,Ir=new Y,Fr=new Y,Br=new Y,ps=new Y,ms=new Y,Gs=new Y,Wo=new Y,Mc=new Y,bc=new Y,Hs=new Y;function Nh(r,t,i,s,l){for(let c=0,h=r.length-3;c<=h;c+=3){Hs.fromArray(r,c);const d=l.x*Math.abs(Hs.x)+l.y*Math.abs(Hs.y)+l.z*Math.abs(Hs.z),m=t.dot(Hs),p=i.dot(Hs),v=s.dot(Hs);if(Math.max(-Math.max(m,p,v),Math.min(m,p,v))>d)return!1}return!0}const Rn=new Y,Ec=new $t;let rM=0;class la extends Qs{constructor(t,i,s=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:rM++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=o_,this.updateRanges=[],this.gpuType=aa,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Ec.fromBufferAttribute(this,i),Ec.applyMatrix3(t),this.setXY(i,Ec.x,Ec.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)Rn.fromBufferAttribute(this,i),Rn.applyMatrix3(t),this.setXYZ(i,Rn.x,Rn.y,Rn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)Rn.fromBufferAttribute(this,i),Rn.applyMatrix4(t),this.setXYZ(i,Rn.x,Rn.y,Rn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)Rn.fromBufferAttribute(this,i),Rn.applyNormalMatrix(t),this.setXYZ(i,Rn.x,Rn.y,Rn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)Rn.fromBufferAttribute(this,i),Rn.transformDirection(t),this.setXYZ(i,Rn.x,Rn.y,Rn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=ko(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=ri(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=ko(i,this.array)),i}setX(t,i){return this.normalized&&(i=ri(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=ko(i,this.array)),i}setY(t,i){return this.normalized&&(i=ri(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=ko(i,this.array)),i}setZ(t,i){return this.normalized&&(i=ri(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=ko(i,this.array)),i}setW(t,i){return this.normalized&&(i=ri(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=ri(i,this.array),s=ri(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=ri(i,this.array),s=ri(s,this.array),l=ri(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=ri(i,this.array),s=ri(s,this.array),l=ri(l,this.array),c=ri(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==o_&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}}class Uv extends la{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class Lv extends la{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class cn extends la{constructor(t,i,s){super(new Float32Array(t),i,s)}}const oM=new rl,qo=new Y,Uh=new Y;class ap{constructor(t=new Y,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):oM.setFromPoints(t).getCenter(s);let l=0;for(let c=0,h=t.length;c<h;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;qo.subVectors(t,this.center);const i=qo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(qo,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Uh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(qo.copy(t.center).add(Uh)),this.expandByPoint(qo.copy(t.center).sub(Uh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let lM=0;const Oi=new fn,Lh=new qn,Gr=new Y,Si=new rl,Yo=new rl,On=new Y;class oi extends Qs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:lM++}),this.uuid=sl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Hy(t)?Lv:Uv)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new he().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Oi.makeRotationFromQuaternion(t),this.applyMatrix4(Oi),this}rotateX(t){return Oi.makeRotationX(t),this.applyMatrix4(Oi),this}rotateY(t){return Oi.makeRotationY(t),this.applyMatrix4(Oi),this}rotateZ(t){return Oi.makeRotationZ(t),this.applyMatrix4(Oi),this}translate(t,i,s){return Oi.makeTranslation(t,i,s),this.applyMatrix4(Oi),this}scale(t,i,s){return Oi.makeScale(t,i,s),this.applyMatrix4(Oi),this}lookAt(t){return Lh.lookAt(t),Lh.updateMatrix(),this.applyMatrix4(Lh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gr).negate(),this.translate(Gr.x,Gr.y,Gr.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const h=t[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new cn(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&le("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new rl);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ue("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];Si.setFromBufferAttribute(c),this.morphTargetsRelative?(On.addVectors(this.boundingBox.min,Si.min),this.boundingBox.expandByPoint(On),On.addVectors(this.boundingBox.max,Si.max),this.boundingBox.expandByPoint(On)):(this.boundingBox.expandByPoint(Si.min),this.boundingBox.expandByPoint(Si.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ue('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ap);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ue("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(t){const s=this.boundingSphere.center;if(Si.setFromBufferAttribute(t),i)for(let c=0,h=i.length;c<h;c++){const d=i[c];Yo.setFromBufferAttribute(d),this.morphTargetsRelative?(On.addVectors(Si.min,Yo.min),Si.expandByPoint(On),On.addVectors(Si.max,Yo.max),Si.expandByPoint(On)):(Si.expandByPoint(Yo.min),Si.expandByPoint(Yo.max))}Si.getCenter(s);let l=0;for(let c=0,h=t.count;c<h;c++)On.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(On));if(i)for(let c=0,h=i.length;c<h;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,v=d.count;p<v;p++)On.fromBufferAttribute(d,p),m&&(Gr.fromBufferAttribute(t,p),On.add(Gr)),l=Math.max(l,s.distanceToSquared(On))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Ue('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Ue("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new la(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let T=0;T<s.count;T++)d[T]=new Y,m[T]=new Y;const p=new Y,v=new Y,x=new Y,g=new $t,S=new $t,E=new $t,w=new Y,M=new Y;function y(T,z,Z){p.fromBufferAttribute(s,T),v.fromBufferAttribute(s,z),x.fromBufferAttribute(s,Z),g.fromBufferAttribute(c,T),S.fromBufferAttribute(c,z),E.fromBufferAttribute(c,Z),v.sub(p),x.sub(p),S.sub(g),E.sub(g);const B=1/(S.x*E.y-E.x*S.y);isFinite(B)&&(w.copy(v).multiplyScalar(E.y).addScaledVector(x,-S.y).multiplyScalar(B),M.copy(x).multiplyScalar(S.x).addScaledVector(v,-E.x).multiplyScalar(B),d[T].add(w),d[z].add(w),d[Z].add(w),m[T].add(M),m[z].add(M),m[Z].add(M))}let C=this.groups;C.length===0&&(C=[{start:0,count:t.count}]);for(let T=0,z=C.length;T<z;++T){const Z=C[T],B=Z.start,X=Z.count;for(let ut=B,ht=B+X;ut<ht;ut+=3)y(t.getX(ut+0),t.getX(ut+1),t.getX(ut+2))}const L=new Y,N=new Y,H=new Y,U=new Y;function I(T){H.fromBufferAttribute(l,T),U.copy(H);const z=d[T];L.copy(z),L.sub(H.multiplyScalar(H.dot(z))).normalize(),N.crossVectors(U,z);const B=N.dot(m[T])<0?-1:1;h.setXYZW(T,L.x,L.y,L.z,B)}for(let T=0,z=C.length;T<z;++T){const Z=C[T],B=Z.start,X=Z.count;for(let ut=B,ht=B+X;ut<ht;ut+=3)I(t.getX(ut+0)),I(t.getX(ut+1)),I(t.getX(ut+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new la(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let g=0,S=s.count;g<S;g++)s.setXYZ(g,0,0,0);const l=new Y,c=new Y,h=new Y,d=new Y,m=new Y,p=new Y,v=new Y,x=new Y;if(t)for(let g=0,S=t.count;g<S;g+=3){const E=t.getX(g+0),w=t.getX(g+1),M=t.getX(g+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,w),h.fromBufferAttribute(i,M),v.subVectors(h,c),x.subVectors(l,c),v.cross(x),d.fromBufferAttribute(s,E),m.fromBufferAttribute(s,w),p.fromBufferAttribute(s,M),d.add(v),m.add(v),p.add(v),s.setXYZ(E,d.x,d.y,d.z),s.setXYZ(w,m.x,m.y,m.z),s.setXYZ(M,p.x,p.y,p.z)}else for(let g=0,S=i.count;g<S;g+=3)l.fromBufferAttribute(i,g+0),c.fromBufferAttribute(i,g+1),h.fromBufferAttribute(i,g+2),v.subVectors(h,c),x.subVectors(l,c),v.cross(x),s.setXYZ(g+0,v.x,v.y,v.z),s.setXYZ(g+1,v.x,v.y,v.z),s.setXYZ(g+2,v.x,v.y,v.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)On.fromBufferAttribute(t,i),On.normalize(),t.setXYZ(i,On.x,On.y,On.z)}toNonIndexed(){function t(d,m){const p=d.array,v=d.itemSize,x=d.normalized,g=new p.constructor(m.length*v);let S=0,E=0;for(let w=0,M=m.length;w<M;w++){d.isInterleavedBufferAttribute?S=m[w]*d.data.stride+d.offset:S=m[w]*v;for(let y=0;y<v;y++)g[E++]=p[S++]}return new la(g,v,x)}if(this.index===null)return le("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new oi,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,s);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let v=0,x=p.length;v<x;v++){const g=p[v],S=t(g,s);m.push(S)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],v=[];for(let x=0,g=p.length;x<g;x++){const S=p[x];v.push(S.toJSON(t.data))}v.length>0&&(l[m]=v,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const p in l){const v=l[p];this.setAttribute(p,v.clone(i))}const c=t.morphAttributes;for(const p in c){const v=[],x=c[p];for(let g=0,S=x.length;g<S;g++)v.push(x[g].clone(i));this.morphAttributes[p]=v}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let p=0,v=h.length;p<v;p++){const x=h[p];this.addGroup(x.start,x.count,x.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let cM=0;class ol extends Qs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cM++}),this.uuid=sl(),this.name="",this.type="Material",this.blending=Wr,this.side=ys,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qh,this.blendDst=Jh,this.blendEquation=Ws,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ve(0,0,0),this.blendAlpha=0,this.depthFunc=Yr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=r_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Dr,this.stencilZFail=Dr,this.stencilZPass=Dr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){le(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){le(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Wr&&(s.blending=this.blending),this.side!==ys&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Qh&&(s.blendSrc=this.blendSrc),this.blendDst!==Jh&&(s.blendDst=this.blendDst),this.blendEquation!==Ws&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Yr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==r_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Dr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Dr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Dr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const h=[];for(const d in c){const m=c[d];delete m.metadata,h.push(m)}return h}if(i){const c=l(t.textures),h=l(t.images);c.length>0&&(s.textures=c),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Oa=new Y,Oh=new Y,Tc=new Y,gs=new Y,Ph=new Y,Ac=new Y,zh=new Y;class Ov{constructor(t=new Y,i=new Y(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Oa)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=Oa.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(Oa.copy(this.origin).addScaledVector(this.direction,i),Oa.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){Oh.copy(t).add(i).multiplyScalar(.5),Tc.copy(i).sub(t).normalize(),gs.copy(this.origin).sub(Oh);const c=t.distanceTo(i)*.5,h=-this.direction.dot(Tc),d=gs.dot(this.direction),m=-gs.dot(Tc),p=gs.lengthSq(),v=Math.abs(1-h*h);let x,g,S,E;if(v>0)if(x=h*m-d,g=h*d-m,E=c*v,x>=0)if(g>=-E)if(g<=E){const w=1/v;x*=w,g*=w,S=x*(x+h*g+2*d)+g*(h*x+g+2*m)+p}else g=c,x=Math.max(0,-(h*g+d)),S=-x*x+g*(g+2*m)+p;else g=-c,x=Math.max(0,-(h*g+d)),S=-x*x+g*(g+2*m)+p;else g<=-E?(x=Math.max(0,-(-h*c+d)),g=x>0?-c:Math.min(Math.max(-c,-m),c),S=-x*x+g*(g+2*m)+p):g<=E?(x=0,g=Math.min(Math.max(-c,-m),c),S=g*(g+2*m)+p):(x=Math.max(0,-(h*c+d)),g=x>0?c:Math.min(Math.max(-c,-m),c),S=-x*x+g*(g+2*m)+p);else g=h>0?-c:c,x=Math.max(0,-(h*g+d)),S=-x*x+g*(g+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,x),l&&l.copy(Oh).addScaledVector(Tc,g),S}intersectSphere(t,i){Oa.subVectors(t.center,this.origin);const s=Oa.dot(this.direction),l=Oa.dot(Oa)-s*s,c=t.radius*t.radius;if(l>c)return null;const h=Math.sqrt(c-l),d=s-h,m=s+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,h,d,m;const p=1/this.direction.x,v=1/this.direction.y,x=1/this.direction.z,g=this.origin;return p>=0?(s=(t.min.x-g.x)*p,l=(t.max.x-g.x)*p):(s=(t.max.x-g.x)*p,l=(t.min.x-g.x)*p),v>=0?(c=(t.min.y-g.y)*v,h=(t.max.y-g.y)*v):(c=(t.max.y-g.y)*v,h=(t.min.y-g.y)*v),s>h||c>l||((c>s||isNaN(s))&&(s=c),(h<l||isNaN(l))&&(l=h),x>=0?(d=(t.min.z-g.z)*x,m=(t.max.z-g.z)*x):(d=(t.max.z-g.z)*x,m=(t.min.z-g.z)*x),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,Oa)!==null}intersectTriangle(t,i,s,l,c){Ph.subVectors(i,t),Ac.subVectors(s,t),zh.crossVectors(Ph,Ac);let h=this.direction.dot(zh),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;gs.subVectors(this.origin,t);const m=d*this.direction.dot(Ac.crossVectors(gs,Ac));if(m<0)return null;const p=d*this.direction.dot(Ph.cross(gs));if(p<0||m+p>h)return null;const v=-d*gs.dot(zh);return v<0?null:this.at(v/h,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Xr extends ol{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ms,this.combine=pv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const M_=new fn,Vs=new Ov,Rc=new ap,b_=new Y,Cc=new Y,wc=new Y,Dc=new Y,Ih=new Y,Nc=new Y,E_=new Y,Uc=new Y;class Ne extends qn{constructor(t=new oi,i=new Xr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(c&&d){Nc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const v=d[m],x=c[m];v!==0&&(Ih.fromBufferAttribute(x,t),h?Nc.addScaledVector(Ih,v):Nc.addScaledVector(Ih.sub(i),v))}i.add(Nc)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Rc.copy(s.boundingSphere),Rc.applyMatrix4(c),Vs.copy(t.ray).recast(t.near),!(Rc.containsPoint(Vs.origin)===!1&&(Vs.intersectSphere(Rc,b_)===null||Vs.origin.distanceToSquared(b_)>(t.far-t.near)**2))&&(M_.copy(c).invert(),Vs.copy(t.ray).applyMatrix4(M_),!(s.boundingBox!==null&&Vs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,Vs)))}_computeIntersections(t,i,s){let l;const c=this.geometry,h=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,v=c.attributes.uv1,x=c.attributes.normal,g=c.groups,S=c.drawRange;if(d!==null)if(Array.isArray(h))for(let E=0,w=g.length;E<w;E++){const M=g[E],y=h[M.materialIndex],C=Math.max(M.start,S.start),L=Math.min(d.count,Math.min(M.start+M.count,S.start+S.count));for(let N=C,H=L;N<H;N+=3){const U=d.getX(N),I=d.getX(N+1),T=d.getX(N+2);l=Lc(this,y,t,s,p,v,x,U,I,T),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,S.start),w=Math.min(d.count,S.start+S.count);for(let M=E,y=w;M<y;M+=3){const C=d.getX(M),L=d.getX(M+1),N=d.getX(M+2);l=Lc(this,h,t,s,p,v,x,C,L,N),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let E=0,w=g.length;E<w;E++){const M=g[E],y=h[M.materialIndex],C=Math.max(M.start,S.start),L=Math.min(m.count,Math.min(M.start+M.count,S.start+S.count));for(let N=C,H=L;N<H;N+=3){const U=N,I=N+1,T=N+2;l=Lc(this,y,t,s,p,v,x,U,I,T),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,S.start),w=Math.min(m.count,S.start+S.count);for(let M=E,y=w;M<y;M+=3){const C=M,L=M+1,N=M+2;l=Lc(this,h,t,s,p,v,x,C,L,N),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function uM(r,t,i,s,l,c,h,d){let m;if(t.side===Jn?m=s.intersectTriangle(h,c,l,!0,d):m=s.intersectTriangle(l,c,h,t.side===ys,d),m===null)return null;Uc.copy(d),Uc.applyMatrix4(r.matrixWorld);const p=i.ray.origin.distanceTo(Uc);return p<i.near||p>i.far?null:{distance:p,point:Uc.clone(),object:r}}function Lc(r,t,i,s,l,c,h,d,m,p){r.getVertexPosition(d,Cc),r.getVertexPosition(m,wc),r.getVertexPosition(p,Dc);const v=uM(r,t,i,s,Cc,wc,Dc,E_);if(v){const x=new Y;Wi.getBarycoord(E_,Cc,wc,Dc,x),l&&(v.uv=Wi.getInterpolatedAttribute(l,d,m,p,x,new $t)),c&&(v.uv1=Wi.getInterpolatedAttribute(c,d,m,p,x,new $t)),h&&(v.normal=Wi.getInterpolatedAttribute(h,d,m,p,x,new Y),v.normal.dot(s.direction)>0&&v.normal.multiplyScalar(-1));const g={a:d,b:m,c:p,normal:new Y,materialIndex:0};Wi.getNormal(Cc,wc,Dc,g.normal),v.face=g,v.barycoord=x}return v}class fM extends Wn{constructor(t=null,i=1,s=1,l,c,h,d,m,p=Bn,v=Bn,x,g){super(null,h,d,m,p,v,l,c,x,g),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Fh=new Y,hM=new Y,dM=new he;class Xs{constructor(t=new Y(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=Fh.subVectors(s,i).cross(hM.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i,s=!0){const l=t.delta(Fh),c=this.normal.dot(l);if(c===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const h=-(t.start.dot(this.normal)+this.constant)/c;return s===!0&&(h<0||h>1)?null:i.copy(t.start).addScaledVector(l,h)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||dM.getNormalMatrix(t),l=this.coplanarPoint(Fh).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ks=new ap,pM=new $t(.5,.5),Oc=new Y;class sp{constructor(t=new Xs,i=new Xs,s=new Xs,l=new Xs,c=new Xs,h=new Xs){this.planes=[t,i,s,l,c,h]}set(t,i,s,l,c,h){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(c),d[5].copy(h),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=sa,s=!1){const l=this.planes,c=t.elements,h=c[0],d=c[1],m=c[2],p=c[3],v=c[4],x=c[5],g=c[6],S=c[7],E=c[8],w=c[9],M=c[10],y=c[11],C=c[12],L=c[13],N=c[14],H=c[15];if(l[0].setComponents(p-h,S-v,y-E,H-C).normalize(),l[1].setComponents(p+h,S+v,y+E,H+C).normalize(),l[2].setComponents(p+d,S+x,y+w,H+L).normalize(),l[3].setComponents(p-d,S-x,y-w,H-L).normalize(),s)l[4].setComponents(m,g,M,N).normalize(),l[5].setComponents(p-m,S-g,y-M,H-N).normalize();else if(l[4].setComponents(p-m,S-g,y-M,H-N).normalize(),i===sa)l[5].setComponents(p+m,S+g,y+M,H+N).normalize();else if(i===al)l[5].setComponents(m,g,M,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ks.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),ks.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ks)}intersectsSprite(t){ks.center.set(0,0,0);const i=pM.distanceTo(t.center);return ks.radius=.7071067811865476+i,ks.applyMatrix4(t.matrixWorld),this.intersectsSphere(ks)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Oc.x=l.normal.x>0?t.max.x:t.min.x,Oc.y=l.normal.y>0?t.max.y:t.min.y,Oc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Oc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Pv extends Wn{constructor(t=[],i=Zs,s,l,c,h,d,m,p,v){super(t,i,s,l,c,h,d,m,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class mM extends Wn{constructor(t,i,s,l,c,h,d,m,p){super(t,i,s,l,c,h,d,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Zr extends Wn{constructor(t,i,s=ca,l,c,h,d=Bn,m=Bn,p,v=Ga,x=1){if(v!==Ga&&v!==js)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:t,height:i,depth:x};super(g,l,c,h,d,m,v,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ep(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class gM extends Zr{constructor(t,i=ca,s=Zs,l,c,h=Bn,d=Bn,m,p=Ga){const v={width:t,height:t,depth:1},x=[v,v,v,v,v,v];super(t,t,i,s,l,c,h,d,m,p),this.image=x,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class zv extends Wn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Ss extends oi{constructor(t=1,i=1,s=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:h};const d=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const m=[],p=[],v=[],x=[];let g=0,S=0;E("z","y","x",-1,-1,s,i,t,h,c,0),E("z","y","x",1,-1,s,i,-t,h,c,1),E("x","z","y",1,1,t,s,i,l,h,2),E("x","z","y",1,-1,t,s,-i,l,h,3),E("x","y","z",1,-1,t,i,s,l,c,4),E("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new cn(p,3)),this.setAttribute("normal",new cn(v,3)),this.setAttribute("uv",new cn(x,2));function E(w,M,y,C,L,N,H,U,I,T,z){const Z=N/I,B=H/T,X=N/2,ut=H/2,ht=U/2,W=I+1,O=T+1;let F=0,lt=0;const mt=new Y;for(let Et=0;Et<O;Et++){const P=Et*B-ut;for(let Q=0;Q<W;Q++){const vt=Q*Z-X;mt[w]=vt*C,mt[M]=P*L,mt[y]=ht,p.push(mt.x,mt.y,mt.z),mt[w]=0,mt[M]=0,mt[y]=U>0?1:-1,v.push(mt.x,mt.y,mt.z),x.push(Q/I),x.push(1-Et/T),F+=1}}for(let Et=0;Et<T;Et++)for(let P=0;P<I;P++){const Q=g+P+W*Et,vt=g+P+W*(Et+1),Nt=g+(P+1)+W*(Et+1),Ot=g+(P+1)+W*Et;m.push(Q,vt,Ot),m.push(vt,Nt,Ot),lt+=6}d.addGroup(S,lt,z),S+=lt,g+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ss(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class yi extends oi{constructor(t=1,i=1,s=1,l=32,c=1,h=!1,d=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:s,radialSegments:l,heightSegments:c,openEnded:h,thetaStart:d,thetaLength:m};const p=this;l=Math.floor(l),c=Math.floor(c);const v=[],x=[],g=[],S=[];let E=0;const w=[],M=s/2;let y=0;C(),h===!1&&(t>0&&L(!0),i>0&&L(!1)),this.setIndex(v),this.setAttribute("position",new cn(x,3)),this.setAttribute("normal",new cn(g,3)),this.setAttribute("uv",new cn(S,2));function C(){const N=new Y,H=new Y;let U=0;const I=(i-t)/s;for(let T=0;T<=c;T++){const z=[],Z=T/c,B=Z*(i-t)+t;for(let X=0;X<=l;X++){const ut=X/l,ht=ut*m+d,W=Math.sin(ht),O=Math.cos(ht);H.x=B*W,H.y=-Z*s+M,H.z=B*O,x.push(H.x,H.y,H.z),N.set(W,I,O).normalize(),g.push(N.x,N.y,N.z),S.push(ut,1-Z),z.push(E++)}w.push(z)}for(let T=0;T<l;T++)for(let z=0;z<c;z++){const Z=w[z][T],B=w[z+1][T],X=w[z+1][T+1],ut=w[z][T+1];(t>0||z!==0)&&(v.push(Z,B,ut),U+=3),(i>0||z!==c-1)&&(v.push(B,X,ut),U+=3)}p.addGroup(y,U,0),y+=U}function L(N){const H=E,U=new $t,I=new Y;let T=0;const z=N===!0?t:i,Z=N===!0?1:-1;for(let X=1;X<=l;X++)x.push(0,M*Z,0),g.push(0,Z,0),S.push(.5,.5),E++;const B=E;for(let X=0;X<=l;X++){const ht=X/l*m+d,W=Math.cos(ht),O=Math.sin(ht);I.x=z*O,I.y=M*Z,I.z=z*W,x.push(I.x,I.y,I.z),g.push(0,Z,0),U.x=W*.5+.5,U.y=O*.5*Z+.5,S.push(U.x,U.y),E++}for(let X=0;X<l;X++){const ut=H+X,ht=B+X;N===!0?v.push(ht,ht+1,ut):v.push(ht+1,ht,ut),T+=3}p.addGroup(y,T,N===!0?1:2),y+=T}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yi(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ha{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){le("Curve: .getPoint() not implemented.")}getPointAt(t,i){const s=this.getUtoTmapping(t);return this.getPoint(s,i)}getPoints(t=5){const i=[];for(let s=0;s<=t;s++)i.push(this.getPoint(s/t));return i}getSpacedPoints(t=5){const i=[];for(let s=0;s<=t;s++)i.push(this.getPointAt(s/t));return i}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const i=[];let s,l=this.getPoint(0),c=0;i.push(0);for(let h=1;h<=t;h++)s=this.getPoint(h/t),c+=s.distanceTo(l),i.push(c),l=s;return this.cacheArcLengths=i,i}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,i=null){const s=this.getLengths();let l=0;const c=s.length;let h;i?h=i:h=t*s[c-1];let d=0,m=c-1,p;for(;d<=m;)if(l=Math.floor(d+(m-d)/2),p=s[l]-h,p<0)d=l+1;else if(p>0)m=l-1;else{m=l;break}if(l=m,s[l]===h)return l/(c-1);const v=s[l],g=s[l+1]-v,S=(h-v)/g;return(l+S)/(c-1)}getTangent(t,i){let l=t-1e-4,c=t+1e-4;l<0&&(l=0),c>1&&(c=1);const h=this.getPoint(l),d=this.getPoint(c),m=i||(h.isVector2?new $t:new Y);return m.copy(d).sub(h).normalize(),m}getTangentAt(t,i){const s=this.getUtoTmapping(t);return this.getTangent(s,i)}computeFrenetFrames(t,i=!1){const s=new Y,l=[],c=[],h=[],d=new Y,m=new fn;for(let S=0;S<=t;S++){const E=S/t;l[S]=this.getTangentAt(E,new Y)}c[0]=new Y,h[0]=new Y;let p=Number.MAX_VALUE;const v=Math.abs(l[0].x),x=Math.abs(l[0].y),g=Math.abs(l[0].z);v<=p&&(p=v,s.set(1,0,0)),x<=p&&(p=x,s.set(0,1,0)),g<=p&&s.set(0,0,1),d.crossVectors(l[0],s).normalize(),c[0].crossVectors(l[0],d),h[0].crossVectors(l[0],c[0]);for(let S=1;S<=t;S++){if(c[S]=c[S-1].clone(),h[S]=h[S-1].clone(),d.crossVectors(l[S-1],l[S]),d.length()>Number.EPSILON){d.normalize();const E=Math.acos(ye(l[S-1].dot(l[S]),-1,1));c[S].applyMatrix4(m.makeRotationAxis(d,E))}h[S].crossVectors(l[S],c[S])}if(i===!0){let S=Math.acos(ye(c[0].dot(c[t]),-1,1));S/=t,l[0].dot(d.crossVectors(c[0],c[t]))>0&&(S=-S);for(let E=1;E<=t;E++)c[E].applyMatrix4(m.makeRotationAxis(l[E],S*E)),h[E].crossVectors(l[E],c[E])}return{tangents:l,normals:c,binormals:h}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Iv extends Ha{constructor(t=0,i=0,s=1,l=1,c=0,h=Math.PI*2,d=!1,m=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=i,this.xRadius=s,this.yRadius=l,this.aStartAngle=c,this.aEndAngle=h,this.aClockwise=d,this.aRotation=m}getPoint(t,i=new $t){const s=i,l=Math.PI*2;let c=this.aEndAngle-this.aStartAngle;const h=Math.abs(c)<Number.EPSILON;for(;c<0;)c+=l;for(;c>l;)c-=l;c<Number.EPSILON&&(h?c=0:c=l),this.aClockwise===!0&&!h&&(c===l?c=-l:c=c-l);const d=this.aStartAngle+t*c;let m=this.aX+this.xRadius*Math.cos(d),p=this.aY+this.yRadius*Math.sin(d);if(this.aRotation!==0){const v=Math.cos(this.aRotation),x=Math.sin(this.aRotation),g=m-this.aX,S=p-this.aY;m=g*v-S*x+this.aX,p=g*x+S*v+this.aY}return s.set(m,p)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class _M extends Iv{constructor(t,i,s,l,c,h){super(t,i,s,s,l,c,h),this.isArcCurve=!0,this.type="ArcCurve"}}function rp(){let r=0,t=0,i=0,s=0;function l(c,h,d,m){r=c,t=d,i=-3*c+3*h-2*d-m,s=2*c-2*h+d+m}return{initCatmullRom:function(c,h,d,m,p){l(h,d,p*(d-c),p*(m-h))},initNonuniformCatmullRom:function(c,h,d,m,p,v,x){let g=(h-c)/p-(d-c)/(p+v)+(d-h)/v,S=(d-h)/v-(m-h)/(v+x)+(m-d)/x;g*=v,S*=v,l(h,d,g,S)},calc:function(c){const h=c*c,d=h*c;return r+t*c+i*h+s*d}}}const T_=new Y,A_=new Y,Bh=new rp,Gh=new rp,Hh=new rp;class Fv extends Ha{constructor(t=[],i=!1,s="centripetal",l=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=i,this.curveType=s,this.tension=l}getPoint(t,i=new Y){const s=i,l=this.points,c=l.length,h=(c-(this.closed?0:1))*t;let d=Math.floor(h),m=h-d;this.closed?d+=d>0?0:(Math.floor(Math.abs(d)/c)+1)*c:m===0&&d===c-1&&(d=c-2,m=1);let p,v;this.closed||d>0?p=l[(d-1)%c]:(A_.subVectors(l[0],l[1]).add(l[0]),p=A_);const x=l[d%c],g=l[(d+1)%c];if(this.closed||d+2<c?v=l[(d+2)%c]:(T_.subVectors(l[c-1],l[c-2]).add(l[c-1]),v=T_),this.curveType==="centripetal"||this.curveType==="chordal"){const S=this.curveType==="chordal"?.5:.25;let E=Math.pow(p.distanceToSquared(x),S),w=Math.pow(x.distanceToSquared(g),S),M=Math.pow(g.distanceToSquared(v),S);w<1e-4&&(w=1),E<1e-4&&(E=w),M<1e-4&&(M=w),Bh.initNonuniformCatmullRom(p.x,x.x,g.x,v.x,E,w,M),Gh.initNonuniformCatmullRom(p.y,x.y,g.y,v.y,E,w,M),Hh.initNonuniformCatmullRom(p.z,x.z,g.z,v.z,E,w,M)}else this.curveType==="catmullrom"&&(Bh.initCatmullRom(p.x,x.x,g.x,v.x,this.tension),Gh.initCatmullRom(p.y,x.y,g.y,v.y,this.tension),Hh.initCatmullRom(p.z,x.z,g.z,v.z,this.tension));return s.set(Bh.calc(m),Gh.calc(m),Hh.calc(m)),s}copy(t){super.copy(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(l.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let i=0,s=this.points.length;i<s;i++){const l=this.points[i];t.points.push(l.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(new Y().fromArray(l))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function R_(r,t,i,s,l){const c=(s-t)*.5,h=(l-i)*.5,d=r*r,m=r*d;return(2*i-2*s+c+h)*m+(-3*i+3*s-2*c-h)*d+c*r+i}function vM(r,t){const i=1-r;return i*i*t}function xM(r,t){return 2*(1-r)*r*t}function SM(r,t){return r*r*t}function $o(r,t,i,s){return vM(r,t)+xM(r,i)+SM(r,s)}function yM(r,t){const i=1-r;return i*i*i*t}function MM(r,t){const i=1-r;return 3*i*i*r*t}function bM(r,t){return 3*(1-r)*r*r*t}function EM(r,t){return r*r*r*t}function tl(r,t,i,s,l){return yM(r,t)+MM(r,i)+bM(r,s)+EM(r,l)}class TM extends Ha{constructor(t=new $t,i=new $t,s=new $t,l=new $t){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=i,this.v2=s,this.v3=l}getPoint(t,i=new $t){const s=i,l=this.v0,c=this.v1,h=this.v2,d=this.v3;return s.set(tl(t,l.x,c.x,h.x,d.x),tl(t,l.y,c.y,h.y,d.y)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class AM extends Ha{constructor(t=new Y,i=new Y,s=new Y,l=new Y){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=i,this.v2=s,this.v3=l}getPoint(t,i=new Y){const s=i,l=this.v0,c=this.v1,h=this.v2,d=this.v3;return s.set(tl(t,l.x,c.x,h.x,d.x),tl(t,l.y,c.y,h.y,d.y),tl(t,l.z,c.z,h.z,d.z)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class RM extends Ha{constructor(t=new $t,i=new $t){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=i}getPoint(t,i=new $t){const s=i;return t===1?s.copy(this.v2):(s.copy(this.v2).sub(this.v1),s.multiplyScalar(t).add(this.v1)),s}getPointAt(t,i){return this.getPoint(t,i)}getTangent(t,i=new $t){return i.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,i){return this.getTangent(t,i)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class CM extends Ha{constructor(t=new Y,i=new Y){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=i}getPoint(t,i=new Y){const s=i;return t===1?s.copy(this.v2):(s.copy(this.v2).sub(this.v1),s.multiplyScalar(t).add(this.v1)),s}getPointAt(t,i){return this.getPoint(t,i)}getTangent(t,i=new Y){return i.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,i){return this.getTangent(t,i)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class wM extends Ha{constructor(t=new $t,i=new $t,s=new $t){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=i,this.v2=s}getPoint(t,i=new $t){const s=i,l=this.v0,c=this.v1,h=this.v2;return s.set($o(t,l.x,c.x,h.x),$o(t,l.y,c.y,h.y)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Bv extends Ha{constructor(t=new Y,i=new Y,s=new Y){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=i,this.v2=s}getPoint(t,i=new Y){const s=i,l=this.v0,c=this.v1,h=this.v2;return s.set($o(t,l.x,c.x,h.x),$o(t,l.y,c.y,h.y),$o(t,l.z,c.z,h.z)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class DM extends Ha{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,i=new $t){const s=i,l=this.points,c=(l.length-1)*t,h=Math.floor(c),d=c-h,m=l[h===0?h:h-1],p=l[h],v=l[h>l.length-2?l.length-1:h+1],x=l[h>l.length-3?l.length-1:h+2];return s.set(R_(d,m.x,p.x,v.x,x.x),R_(d,m.y,p.y,v.y,x.y)),s}copy(t){super.copy(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(l.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let i=0,s=this.points.length;i<s;i++){const l=this.points[i];t.points.push(l.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(new $t().fromArray(l))}return this}}var NM=Object.freeze({__proto__:null,ArcCurve:_M,CatmullRomCurve3:Fv,CubicBezierCurve:TM,CubicBezierCurve3:AM,EllipseCurve:Iv,LineCurve:RM,LineCurve3:CM,QuadraticBezierCurve:wM,QuadraticBezierCurve3:Bv,SplineCurve:DM});class Kc extends oi{constructor(t=[new $t(0,-.5),new $t(.5,0),new $t(0,.5)],i=12,s=0,l=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:i,phiStart:s,phiLength:l},i=Math.floor(i),l=ye(l,0,Math.PI*2);const c=[],h=[],d=[],m=[],p=[],v=1/i,x=new Y,g=new $t,S=new Y,E=new Y,w=new Y;let M=0,y=0;for(let C=0;C<=t.length-1;C++)switch(C){case 0:M=t[C+1].x-t[C].x,y=t[C+1].y-t[C].y,S.x=y*1,S.y=-M,S.z=y*0,w.copy(S),S.normalize(),m.push(S.x,S.y,S.z);break;case t.length-1:m.push(w.x,w.y,w.z);break;default:M=t[C+1].x-t[C].x,y=t[C+1].y-t[C].y,S.x=y*1,S.y=-M,S.z=y*0,E.copy(S),S.x+=w.x,S.y+=w.y,S.z+=w.z,S.normalize(),m.push(S.x,S.y,S.z),w.copy(E)}for(let C=0;C<=i;C++){const L=s+C*v*l,N=Math.sin(L),H=Math.cos(L);for(let U=0;U<=t.length-1;U++){x.x=t[U].x*N,x.y=t[U].y,x.z=t[U].x*H,h.push(x.x,x.y,x.z),g.x=C/i,g.y=U/(t.length-1),d.push(g.x,g.y);const I=m[3*U+0]*N,T=m[3*U+1],z=m[3*U+0]*H;p.push(I,T,z)}}for(let C=0;C<i;C++)for(let L=0;L<t.length-1;L++){const N=L+C*t.length,H=N,U=N+t.length,I=N+t.length+1,T=N+1;c.push(H,U,T),c.push(I,T,U)}this.setIndex(c),this.setAttribute("position",new cn(h,3)),this.setAttribute("uv",new cn(d,2)),this.setAttribute("normal",new cn(p,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Kc(t.points,t.segments,t.phiStart,t.phiLength)}}class ll extends oi{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,h=i/2,d=Math.floor(s),m=Math.floor(l),p=d+1,v=m+1,x=t/d,g=i/m,S=[],E=[],w=[],M=[];for(let y=0;y<v;y++){const C=y*g-h;for(let L=0;L<p;L++){const N=L*x-c;E.push(N,-C,0),w.push(0,0,1),M.push(L/d),M.push(1-y/m)}}for(let y=0;y<m;y++)for(let C=0;C<d;C++){const L=C+p*y,N=C+p*(y+1),H=C+1+p*(y+1),U=C+1+p*y;S.push(L,N,U),S.push(N,H,U)}this.setIndex(S),this.setAttribute("position",new cn(E,3)),this.setAttribute("normal",new cn(w,3)),this.setAttribute("uv",new cn(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ll(t.width,t.height,t.widthSegments,t.heightSegments)}}class el extends oi{constructor(t=1,i=32,s=16,l=0,c=Math.PI*2,h=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:h,thetaLength:d},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const m=Math.min(h+d,Math.PI);let p=0;const v=[],x=new Y,g=new Y,S=[],E=[],w=[],M=[];for(let y=0;y<=s;y++){const C=[],L=y/s;let N=0;y===0&&h===0?N=.5/i:y===s&&m===Math.PI&&(N=-.5/i);for(let H=0;H<=i;H++){const U=H/i;x.x=-t*Math.cos(l+U*c)*Math.sin(h+L*d),x.y=t*Math.cos(h+L*d),x.z=t*Math.sin(l+U*c)*Math.sin(h+L*d),E.push(x.x,x.y,x.z),g.copy(x).normalize(),w.push(g.x,g.y,g.z),M.push(U+N,1-L),C.push(p++)}v.push(C)}for(let y=0;y<s;y++)for(let C=0;C<i;C++){const L=v[y][C+1],N=v[y][C],H=v[y+1][C],U=v[y+1][C+1];(y!==0||h>0)&&S.push(L,N,U),(y!==s-1||m<Math.PI)&&S.push(N,H,U)}this.setIndex(S),this.setAttribute("position",new cn(E,3)),this.setAttribute("normal",new cn(w,3)),this.setAttribute("uv",new cn(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new el(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class op extends oi{constructor(t=1,i=.4,s=12,l=48,c=Math.PI*2,h=0,d=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:i,radialSegments:s,tubularSegments:l,arc:c,thetaStart:h,thetaLength:d},s=Math.floor(s),l=Math.floor(l);const m=[],p=[],v=[],x=[],g=new Y,S=new Y,E=new Y;for(let w=0;w<=s;w++){const M=h+w/s*d;for(let y=0;y<=l;y++){const C=y/l*c;S.x=(t+i*Math.cos(M))*Math.cos(C),S.y=(t+i*Math.cos(M))*Math.sin(C),S.z=i*Math.sin(M),p.push(S.x,S.y,S.z),g.x=t*Math.cos(C),g.y=t*Math.sin(C),E.subVectors(S,g).normalize(),v.push(E.x,E.y,E.z),x.push(y/l),x.push(w/s)}}for(let w=1;w<=s;w++)for(let M=1;M<=l;M++){const y=(l+1)*w+M-1,C=(l+1)*(w-1)+M-1,L=(l+1)*(w-1)+M,N=(l+1)*w+M;m.push(y,C,N),m.push(C,L,N)}this.setIndex(m),this.setAttribute("position",new cn(p,3)),this.setAttribute("normal",new cn(v,3)),this.setAttribute("uv",new cn(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new op(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Qc extends oi{constructor(t=new Bv(new Y(-1,-1,0),new Y(-1,1,0),new Y(1,1,0)),i=64,s=1,l=8,c=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:i,radius:s,radialSegments:l,closed:c};const h=t.computeFrenetFrames(i,c);this.tangents=h.tangents,this.normals=h.normals,this.binormals=h.binormals;const d=new Y,m=new Y,p=new $t;let v=new Y;const x=[],g=[],S=[],E=[];w(),this.setIndex(E),this.setAttribute("position",new cn(x,3)),this.setAttribute("normal",new cn(g,3)),this.setAttribute("uv",new cn(S,2));function w(){for(let L=0;L<i;L++)M(L);M(c===!1?i:0),C(),y()}function M(L){v=t.getPointAt(L/i,v);const N=h.normals[L],H=h.binormals[L];for(let U=0;U<=l;U++){const I=U/l*Math.PI*2,T=Math.sin(I),z=-Math.cos(I);m.x=z*N.x+T*H.x,m.y=z*N.y+T*H.y,m.z=z*N.z+T*H.z,m.normalize(),g.push(m.x,m.y,m.z),d.x=v.x+s*m.x,d.y=v.y+s*m.y,d.z=v.z+s*m.z,x.push(d.x,d.y,d.z)}}function y(){for(let L=1;L<=i;L++)for(let N=1;N<=l;N++){const H=(l+1)*(L-1)+(N-1),U=(l+1)*L+(N-1),I=(l+1)*L+N,T=(l+1)*(L-1)+N;E.push(H,U,T),E.push(U,I,T)}}function C(){for(let L=0;L<=i;L++)for(let N=0;N<=l;N++)p.x=L/i,p.y=N/l,S.push(p.x,p.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Qc(new NM[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}function Kr(r){const t={};for(const i in r){t[i]={};for(const s in r[i]){const l=r[i][s];if(C_(l))l.isRenderTargetTexture?(le("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone();else if(Array.isArray(l))if(C_(l[0])){const c=[];for(let h=0,d=l.length;h<d;h++)c[h]=l[h].clone();t[i][s]=c}else t[i][s]=l.slice();else t[i][s]=l}}return t}function Qn(r){const t={};for(let i=0;i<r.length;i++){const s=Kr(r[i]);for(const l in s)t[l]=s[l]}return t}function C_(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function UM(r){const t=[];for(let i=0;i<r.length;i++)t.push(r[i].clone());return t}function Gv(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ce.workingColorSpace}const LM={clone:Kr,merge:Qn};var OM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,PM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ua extends ol{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=OM,this.fragmentShader=PM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Kr(t.uniforms),this.uniformsGroups=UM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class zM extends ua{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Kn extends ol{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fd,this.normalScale=new $t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ms,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class IM extends Kn{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new $t(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ye(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(i){this.ior=(1+.4*i)/(1-.4*i)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ve(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ve(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ve(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class FM extends ol{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ly,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class BM extends ol{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class lp extends qn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new ve(t),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const Vh=new fn,w_=new Y,D_=new Y;class Hv{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $t(512,512),this.mapType=bi,this.map=null,this.mapPass=null,this.matrix=new fn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new sp,this._frameExtents=new $t(1,1),this._viewportCount=1,this._viewports=[new gn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;w_.setFromMatrixPosition(t.matrixWorld),i.position.copy(w_),D_.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(D_),i.updateMatrixWorld(),Vh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vh,i.coordinateSystem,i.reversedDepth),i.coordinateSystem===al||i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Vh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Pc=new Y,zc=new Qr,ta=new Y;class Vv extends qn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new fn,this.projectionMatrix=new fn,this.projectionMatrixInverse=new fn,this.coordinateSystem=sa,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Pc,zc,ta),ta.x===1&&ta.y===1&&ta.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Pc,zc,ta.set(1,1,1)).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorld.decompose(Pc,zc,ta),ta.x===1&&ta.y===1&&ta.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Pc,zc,ta.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const _s=new Y,N_=new $t,U_=new $t;class Mi extends Vv{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Gd*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(mh*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Gd*2*Math.atan(Math.tan(mh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){_s.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(_s.x,_s.y).multiplyScalar(-t/_s.z),_s.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(_s.x,_s.y).multiplyScalar(-t/_s.z)}getViewSize(t,i){return this.getViewBounds(t,N_,U_),i.subVectors(U_,N_)}setViewOffset(t,i,s,l,c,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(mh*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;c+=h.offsetX*l/m,i-=h.offsetY*s/p,l*=h.width/m,s*=h.height/p}const d=this.filmOffset;d!==0&&(c+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class GM extends Hv{constructor(){super(new Mi(90,1,.5,500)),this.isPointLightShadow=!0}}class HM extends lp{constructor(t,i,s=0,l=2){super(t,i),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new GM}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.distance=this.distance,i.object.decay=this.decay,i.object.shadow=this.shadow.toJSON(),i}}class cp extends Vv{constructor(t=-1,i=1,s=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,h=s+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,h=c+p*this.view.width,d-=v*this.view.offsetY,m=d-v*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class VM extends Hv{constructor(){super(new cp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class L_ extends lp{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(qn.DEFAULT_UP),this.updateMatrix(),this.target=new qn,this.shadow=new VM}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}class kM extends lp{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}const Hr=-90,Vr=1;class XM extends qn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Mi(Hr,Vr,t,i);l.layers=this.layers,this.add(l);const c=new Mi(Hr,Vr,t,i);c.layers=this.layers,this.add(c);const h=new Mi(Hr,Vr,t,i);h.layers=this.layers,this.add(h);const d=new Mi(Hr,Vr,t,i);d.layers=this.layers,this.add(d);const m=new Mi(Hr,Vr,t,i);m.layers=this.layers,this.add(m);const p=new Mi(Hr,Vr,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,h,d,m]=i;for(const p of i)this.remove(p);if(t===sa)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===al)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,h,d,m,p,v]=this.children,x=t.getRenderTarget(),g=t.getActiveCubeFace(),S=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const w=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let M=!1;t.isWebGLRenderer===!0?M=t.state.buffers.depth.getReversed():M=t.reversedDepthBuffer,t.setRenderTarget(s,0,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,c),t.setRenderTarget(s,1,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,h),t.setRenderTarget(s,2,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,d),t.setRenderTarget(s,3,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,m),t.setRenderTarget(s,4,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,p),s.texture.generateMipmaps=w,t.setRenderTarget(s,5,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,v),t.setRenderTarget(x,g,S),t.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class WM extends Mi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const O_=new fn;class qM{constructor(t,i,s=0,l=1/0){this.ray=new Ov(t,i),this.near=s,this.far=l,this.camera=null,this.layers=new np,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,i){this.ray.set(t,i)}setFromCamera(t,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):Ue("Raycaster: Unsupported camera type: "+i.type)}setFromXRController(t){return O_.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(O_),this}intersectObject(t,i=!0,s=[]){return Hd(t,this,s,i),s.sort(P_),s}intersectObjects(t,i=!0,s=[]){for(let l=0,c=t.length;l<c;l++)Hd(t[l],this,s,i);return s.sort(P_),s}}function P_(r,t){return r.distance-t.distance}function Hd(r,t,i,s){let l=!0;if(r.layers.test(t.layers)&&r.raycast(t,i)===!1&&(l=!1),l===!0&&s===!0){const c=r.children;for(let h=0,d=c.length;h<d;h++)Hd(c[h],t,i,!0)}}const pp=class pp{constructor(t,i,s,l){this.elements=[1,0,0,1],t!==void 0&&this.set(t,i,s,l)}identity(){return this.set(1,0,0,1),this}fromArray(t,i=0){for(let s=0;s<4;s++)this.elements[s]=t[s+i];return this}set(t,i,s,l){const c=this.elements;return c[0]=t,c[2]=i,c[1]=s,c[3]=l,this}};pp.prototype.isMatrix2=!0;let z_=pp;function I_(r,t,i,s){const l=YM(s);switch(i){case Av:return r*t;case Cv:return r*t/l.components*l.byteLength;case Kd:return r*t/l.components*l.byteLength;case Ks:return r*t*2/l.components*l.byteLength;case Qd:return r*t*2/l.components*l.byteLength;case Rv:return r*t*3/l.components*l.byteLength;case qi:return r*t*4/l.components*l.byteLength;case Jd:return r*t*4/l.components*l.byteLength;case Gc:case Hc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Vc:case kc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case cd:case fd:return Math.max(r,16)*Math.max(t,8)/4;case ld:case ud:return Math.max(r,8)*Math.max(t,8)/2;case hd:case dd:case md:case gd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case pd:case Wc:case _d:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case vd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case xd:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Sd:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case yd:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Md:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case bd:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Ed:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Td:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Ad:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Rd:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Cd:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case wd:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Dd:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Nd:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Ud:case Ld:case Od:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Pd:case zd:return Math.ceil(r/4)*Math.ceil(t/4)*8;case qc:case Id:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function YM(r){switch(r){case bi:case Mv:return{byteLength:1,components:1};case nl:case bv:case Ba:return{byteLength:2,components:1};case jd:case Zd:return{byteLength:2,components:4};case ca:case Yd:case aa:return{byteLength:4,components:1};case Ev:case Tv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wd}}));typeof window<"u"&&(window.__THREE__?le("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wd);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function kv(){let r=null,t=!1,i=null,s=null;function l(c,h){i(c,h),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&r!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function jM(r){const t=new WeakMap;function i(d,m){const p=d.array,v=d.usage,x=p.byteLength,g=r.createBuffer();r.bindBuffer(m,g),r.bufferData(m,p,v),d.onUploadCallback();let S;if(p instanceof Float32Array)S=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)S=r.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?S=r.HALF_FLOAT:S=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=r.SHORT;else if(p instanceof Uint32Array)S=r.UNSIGNED_INT;else if(p instanceof Int32Array)S=r.INT;else if(p instanceof Int8Array)S=r.BYTE;else if(p instanceof Uint8Array)S=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:g,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:x}}function s(d,m,p){const v=m.array,x=m.updateRanges;if(r.bindBuffer(p,d),x.length===0)r.bufferSubData(p,0,v);else{x.sort((S,E)=>S.start-E.start);let g=0;for(let S=1;S<x.length;S++){const E=x[g],w=x[S];w.start<=E.start+E.count+1?E.count=Math.max(E.count,w.start+w.count-E.start):(++g,x[g]=w)}x.length=g+1;for(let S=0,E=x.length;S<E;S++){const w=x[S];r.bufferSubData(p,w.start*v.BYTES_PER_ELEMENT,v,w.start,w.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(r.deleteBuffer(m.buffer),t.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const v=t.get(d);(!v||v.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:h}}var ZM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,KM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,QM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,JM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$M=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,t1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,e1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,n1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,i1=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,a1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,s1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,r1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,o1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,l1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,c1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,u1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,f1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,h1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,d1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,p1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,m1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,g1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,_1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,v1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,x1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,S1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,y1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,M1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,b1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,E1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,T1="gl_FragColor = linearToOutputTexel( gl_FragColor );",A1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,R1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,C1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,w1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,D1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,N1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,U1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,L1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,O1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,P1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,z1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,I1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,F1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,B1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,G1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,H1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,V1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,k1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,X1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,W1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,q1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Y1=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,j1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Z1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,K1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Q1=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,J1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,eb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,nb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ib=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ab=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,sb=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ob=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,lb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,cb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ub=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fb=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,hb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,db=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,pb=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,mb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_b=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,vb=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,xb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Sb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Mb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Eb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Tb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ab=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Rb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Cb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Db=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Nb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Ub=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Lb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ob=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Pb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ib=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Fb=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Bb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Gb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Hb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Vb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,kb=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Xb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Wb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,qb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Yb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,jb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Zb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Kb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$b=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,nE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,iE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,aE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,sE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,rE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,lE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,cE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,uE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,pE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,gE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,_E=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,SE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ME=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,EE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,TE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,AE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,RE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,CE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,_e={alphahash_fragment:ZM,alphahash_pars_fragment:KM,alphamap_fragment:QM,alphamap_pars_fragment:JM,alphatest_fragment:$M,alphatest_pars_fragment:t1,aomap_fragment:e1,aomap_pars_fragment:n1,batching_pars_vertex:i1,batching_vertex:a1,begin_vertex:s1,beginnormal_vertex:r1,bsdfs:o1,iridescence_fragment:l1,bumpmap_pars_fragment:c1,clipping_planes_fragment:u1,clipping_planes_pars_fragment:f1,clipping_planes_pars_vertex:h1,clipping_planes_vertex:d1,color_fragment:p1,color_pars_fragment:m1,color_pars_vertex:g1,color_vertex:_1,common:v1,cube_uv_reflection_fragment:x1,defaultnormal_vertex:S1,displacementmap_pars_vertex:y1,displacementmap_vertex:M1,emissivemap_fragment:b1,emissivemap_pars_fragment:E1,colorspace_fragment:T1,colorspace_pars_fragment:A1,envmap_fragment:R1,envmap_common_pars_fragment:C1,envmap_pars_fragment:w1,envmap_pars_vertex:D1,envmap_physical_pars_fragment:H1,envmap_vertex:N1,fog_vertex:U1,fog_pars_vertex:L1,fog_fragment:O1,fog_pars_fragment:P1,gradientmap_pars_fragment:z1,lightmap_pars_fragment:I1,lights_lambert_fragment:F1,lights_lambert_pars_fragment:B1,lights_pars_begin:G1,lights_toon_fragment:V1,lights_toon_pars_fragment:k1,lights_phong_fragment:X1,lights_phong_pars_fragment:W1,lights_physical_fragment:q1,lights_physical_pars_fragment:Y1,lights_fragment_begin:j1,lights_fragment_maps:Z1,lights_fragment_end:K1,lightprobes_pars_fragment:Q1,logdepthbuf_fragment:J1,logdepthbuf_pars_fragment:$1,logdepthbuf_pars_vertex:tb,logdepthbuf_vertex:eb,map_fragment:nb,map_pars_fragment:ib,map_particle_fragment:ab,map_particle_pars_fragment:sb,metalnessmap_fragment:rb,metalnessmap_pars_fragment:ob,morphinstance_vertex:lb,morphcolor_vertex:cb,morphnormal_vertex:ub,morphtarget_pars_vertex:fb,morphtarget_vertex:hb,normal_fragment_begin:db,normal_fragment_maps:pb,normal_pars_fragment:mb,normal_pars_vertex:gb,normal_vertex:_b,normalmap_pars_fragment:vb,clearcoat_normal_fragment_begin:xb,clearcoat_normal_fragment_maps:Sb,clearcoat_pars_fragment:yb,iridescence_pars_fragment:Mb,opaque_fragment:bb,packing:Eb,premultiplied_alpha_fragment:Tb,project_vertex:Ab,dithering_fragment:Rb,dithering_pars_fragment:Cb,roughnessmap_fragment:wb,roughnessmap_pars_fragment:Db,shadowmap_pars_fragment:Nb,shadowmap_pars_vertex:Ub,shadowmap_vertex:Lb,shadowmask_pars_fragment:Ob,skinbase_vertex:Pb,skinning_pars_vertex:zb,skinning_vertex:Ib,skinnormal_vertex:Fb,specularmap_fragment:Bb,specularmap_pars_fragment:Gb,tonemapping_fragment:Hb,tonemapping_pars_fragment:Vb,transmission_fragment:kb,transmission_pars_fragment:Xb,uv_pars_fragment:Wb,uv_pars_vertex:qb,uv_vertex:Yb,worldpos_vertex:jb,background_vert:Zb,background_frag:Kb,backgroundCube_vert:Qb,backgroundCube_frag:Jb,cube_vert:$b,cube_frag:tE,depth_vert:eE,depth_frag:nE,distance_vert:iE,distance_frag:aE,equirect_vert:sE,equirect_frag:rE,linedashed_vert:oE,linedashed_frag:lE,meshbasic_vert:cE,meshbasic_frag:uE,meshlambert_vert:fE,meshlambert_frag:hE,meshmatcap_vert:dE,meshmatcap_frag:pE,meshnormal_vert:mE,meshnormal_frag:gE,meshphong_vert:_E,meshphong_frag:vE,meshphysical_vert:xE,meshphysical_frag:SE,meshtoon_vert:yE,meshtoon_frag:ME,points_vert:bE,points_frag:EE,shadow_vert:TE,shadow_frag:AE,sprite_vert:RE,sprite_frag:CE},Ht={common:{diffuse:{value:new ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new he}},envmap:{envMap:{value:null},envMapRotation:{value:new he},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new he}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new he}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new he},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new he},normalScale:{value:new $t(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new he},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new he}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new he}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new he}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new Y},probesMax:{value:new Y},probesResolution:{value:new Y}},points:{diffuse:{value:new ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0},uvTransform:{value:new he}},sprite:{diffuse:{value:new ve(16777215)},opacity:{value:1},center:{value:new $t(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}}},na={basic:{uniforms:Qn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.fog]),vertexShader:_e.meshbasic_vert,fragmentShader:_e.meshbasic_frag},lambert:{uniforms:Qn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new ve(0)},envMapIntensity:{value:1}}]),vertexShader:_e.meshlambert_vert,fragmentShader:_e.meshlambert_frag},phong:{uniforms:Qn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new ve(0)},specular:{value:new ve(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:_e.meshphong_vert,fragmentShader:_e.meshphong_frag},standard:{uniforms:Qn([Ht.common,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.roughnessmap,Ht.metalnessmap,Ht.fog,Ht.lights,{emissive:{value:new ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_e.meshphysical_vert,fragmentShader:_e.meshphysical_frag},toon:{uniforms:Qn([Ht.common,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.gradientmap,Ht.fog,Ht.lights,{emissive:{value:new ve(0)}}]),vertexShader:_e.meshtoon_vert,fragmentShader:_e.meshtoon_frag},matcap:{uniforms:Qn([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,{matcap:{value:null}}]),vertexShader:_e.meshmatcap_vert,fragmentShader:_e.meshmatcap_frag},points:{uniforms:Qn([Ht.points,Ht.fog]),vertexShader:_e.points_vert,fragmentShader:_e.points_frag},dashed:{uniforms:Qn([Ht.common,Ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_e.linedashed_vert,fragmentShader:_e.linedashed_frag},depth:{uniforms:Qn([Ht.common,Ht.displacementmap]),vertexShader:_e.depth_vert,fragmentShader:_e.depth_frag},normal:{uniforms:Qn([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,{opacity:{value:1}}]),vertexShader:_e.meshnormal_vert,fragmentShader:_e.meshnormal_frag},sprite:{uniforms:Qn([Ht.sprite,Ht.fog]),vertexShader:_e.sprite_vert,fragmentShader:_e.sprite_frag},background:{uniforms:{uvTransform:{value:new he},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_e.background_vert,fragmentShader:_e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new he}},vertexShader:_e.backgroundCube_vert,fragmentShader:_e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_e.cube_vert,fragmentShader:_e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_e.equirect_vert,fragmentShader:_e.equirect_frag},distance:{uniforms:Qn([Ht.common,Ht.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_e.distance_vert,fragmentShader:_e.distance_frag},shadow:{uniforms:Qn([Ht.lights,Ht.fog,{color:{value:new ve(0)},opacity:{value:1}}]),vertexShader:_e.shadow_vert,fragmentShader:_e.shadow_frag}};na.physical={uniforms:Qn([na.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new he},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new he},clearcoatNormalScale:{value:new $t(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new he},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new he},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new he},sheen:{value:0},sheenColor:{value:new ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new he},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new he},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new he},transmissionSamplerSize:{value:new $t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new he},attenuationDistance:{value:0},attenuationColor:{value:new ve(0)},specularColor:{value:new ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new he},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new he},anisotropyVector:{value:new $t},anisotropyMap:{value:null},anisotropyMapTransform:{value:new he}}]),vertexShader:_e.meshphysical_vert,fragmentShader:_e.meshphysical_frag};const Ic={r:0,b:0,g:0},wE=new fn,Xv=new he;Xv.set(-1,0,0,0,1,0,0,0,1);function DE(r,t,i,s,l,c){const h=new ve(0);let d=l===!0?0:1,m,p,v=null,x=0,g=null;function S(C){let L=C.isScene===!0?C.background:null;if(L&&L.isTexture){const N=C.backgroundBlurriness>0;L=t.get(L,N)}return L}function E(C){let L=!1;const N=S(C);N===null?M(h,d):N&&N.isColor&&(M(N,1),L=!0);const H=r.xr.getEnvironmentBlendMode();H==="additive"?i.buffers.color.setClear(0,0,0,1,c):H==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(r.autoClear||L)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function w(C,L){const N=S(L);N&&(N.isCubeTexture||N.mapping===$c)?(p===void 0&&(p=new Ne(new Ss(1,1,1),new ua({name:"BackgroundCubeMaterial",uniforms:Kr(na.backgroundCube.uniforms),vertexShader:na.backgroundCube.vertexShader,fragmentShader:na.backgroundCube.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(H,U,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(p)),p.material.uniforms.envMap.value=N,p.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(wE.makeRotationFromEuler(L.backgroundRotation)).transpose(),N.isCubeTexture&&N.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(Xv),p.material.toneMapped=Ce.getTransfer(N.colorSpace)!==je,(v!==N||x!==N.version||g!==r.toneMapping)&&(p.material.needsUpdate=!0,v=N,x=N.version,g=r.toneMapping),p.layers.enableAll(),C.unshift(p,p.geometry,p.material,0,0,null)):N&&N.isTexture&&(m===void 0&&(m=new Ne(new ll(2,2),new ua({name:"BackgroundMaterial",uniforms:Kr(na.background.uniforms),vertexShader:na.background.vertexShader,fragmentShader:na.background.fragmentShader,side:ys,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=N,m.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,m.material.toneMapped=Ce.getTransfer(N.colorSpace)!==je,N.matrixAutoUpdate===!0&&N.updateMatrix(),m.material.uniforms.uvTransform.value.copy(N.matrix),(v!==N||x!==N.version||g!==r.toneMapping)&&(m.material.needsUpdate=!0,v=N,x=N.version,g=r.toneMapping),m.layers.enableAll(),C.unshift(m,m.geometry,m.material,0,0,null))}function M(C,L){C.getRGB(Ic,Gv(r)),i.buffers.color.setClear(Ic.r,Ic.g,Ic.b,L,c)}function y(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return h},setClearColor:function(C,L=1){h.set(C),d=L,M(h,d)},getClearAlpha:function(){return d},setClearAlpha:function(C){d=C,M(h,d)},render:E,addToRenderList:w,dispose:y}}function NE(r,t){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=g(null);let c=l,h=!1;function d(B,X,ut,ht,W){let O=!1;const F=x(B,ht,ut,X);c!==F&&(c=F,p(c.object)),O=S(B,ht,ut,W),O&&E(B,ht,ut,W),W!==null&&t.update(W,r.ELEMENT_ARRAY_BUFFER),(O||h)&&(h=!1,N(B,X,ut,ht),W!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function m(){return r.createVertexArray()}function p(B){return r.bindVertexArray(B)}function v(B){return r.deleteVertexArray(B)}function x(B,X,ut,ht){const W=ht.wireframe===!0;let O=s[X.id];O===void 0&&(O={},s[X.id]=O);const F=B.isInstancedMesh===!0?B.id:0;let lt=O[F];lt===void 0&&(lt={},O[F]=lt);let mt=lt[ut.id];mt===void 0&&(mt={},lt[ut.id]=mt);let Et=mt[W];return Et===void 0&&(Et=g(m()),mt[W]=Et),Et}function g(B){const X=[],ut=[],ht=[];for(let W=0;W<i;W++)X[W]=0,ut[W]=0,ht[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:ut,attributeDivisors:ht,object:B,attributes:{},index:null}}function S(B,X,ut,ht){const W=c.attributes,O=X.attributes;let F=0;const lt=ut.getAttributes();for(const mt in lt)if(lt[mt].location>=0){const P=W[mt];let Q=O[mt];if(Q===void 0&&(mt==="instanceMatrix"&&B.instanceMatrix&&(Q=B.instanceMatrix),mt==="instanceColor"&&B.instanceColor&&(Q=B.instanceColor)),P===void 0||P.attribute!==Q||Q&&P.data!==Q.data)return!0;F++}return c.attributesNum!==F||c.index!==ht}function E(B,X,ut,ht){const W={},O=X.attributes;let F=0;const lt=ut.getAttributes();for(const mt in lt)if(lt[mt].location>=0){let P=O[mt];P===void 0&&(mt==="instanceMatrix"&&B.instanceMatrix&&(P=B.instanceMatrix),mt==="instanceColor"&&B.instanceColor&&(P=B.instanceColor));const Q={};Q.attribute=P,P&&P.data&&(Q.data=P.data),W[mt]=Q,F++}c.attributes=W,c.attributesNum=F,c.index=ht}function w(){const B=c.newAttributes;for(let X=0,ut=B.length;X<ut;X++)B[X]=0}function M(B){y(B,0)}function y(B,X){const ut=c.newAttributes,ht=c.enabledAttributes,W=c.attributeDivisors;ut[B]=1,ht[B]===0&&(r.enableVertexAttribArray(B),ht[B]=1),W[B]!==X&&(r.vertexAttribDivisor(B,X),W[B]=X)}function C(){const B=c.newAttributes,X=c.enabledAttributes;for(let ut=0,ht=X.length;ut<ht;ut++)X[ut]!==B[ut]&&(r.disableVertexAttribArray(ut),X[ut]=0)}function L(B,X,ut,ht,W,O,F){F===!0?r.vertexAttribIPointer(B,X,ut,W,O):r.vertexAttribPointer(B,X,ut,ht,W,O)}function N(B,X,ut,ht){w();const W=ht.attributes,O=ut.getAttributes(),F=X.defaultAttributeValues;for(const lt in O){const mt=O[lt];if(mt.location>=0){let Et=W[lt];if(Et===void 0&&(lt==="instanceMatrix"&&B.instanceMatrix&&(Et=B.instanceMatrix),lt==="instanceColor"&&B.instanceColor&&(Et=B.instanceColor)),Et!==void 0){const P=Et.normalized,Q=Et.itemSize,vt=t.get(Et);if(vt===void 0)continue;const Nt=vt.buffer,Ot=vt.type,ct=vt.bytesPerElement,Mt=Ot===r.INT||Ot===r.UNSIGNED_INT||Et.gpuType===Yd;if(Et.isInterleavedBufferAttribute){const Dt=Et.data,Ft=Dt.stride,ie=Et.offset;if(Dt.isInstancedInterleavedBuffer){for(let Kt=0;Kt<mt.locationSize;Kt++)y(mt.location+Kt,Dt.meshPerAttribute);B.isInstancedMesh!==!0&&ht._maxInstanceCount===void 0&&(ht._maxInstanceCount=Dt.meshPerAttribute*Dt.count)}else for(let Kt=0;Kt<mt.locationSize;Kt++)M(mt.location+Kt);r.bindBuffer(r.ARRAY_BUFFER,Nt);for(let Kt=0;Kt<mt.locationSize;Kt++)L(mt.location+Kt,Q/mt.locationSize,Ot,P,Ft*ct,(ie+Q/mt.locationSize*Kt)*ct,Mt)}else{if(Et.isInstancedBufferAttribute){for(let Dt=0;Dt<mt.locationSize;Dt++)y(mt.location+Dt,Et.meshPerAttribute);B.isInstancedMesh!==!0&&ht._maxInstanceCount===void 0&&(ht._maxInstanceCount=Et.meshPerAttribute*Et.count)}else for(let Dt=0;Dt<mt.locationSize;Dt++)M(mt.location+Dt);r.bindBuffer(r.ARRAY_BUFFER,Nt);for(let Dt=0;Dt<mt.locationSize;Dt++)L(mt.location+Dt,Q/mt.locationSize,Ot,P,Q*ct,Q/mt.locationSize*Dt*ct,Mt)}}else if(F!==void 0){const P=F[lt];if(P!==void 0)switch(P.length){case 2:r.vertexAttrib2fv(mt.location,P);break;case 3:r.vertexAttrib3fv(mt.location,P);break;case 4:r.vertexAttrib4fv(mt.location,P);break;default:r.vertexAttrib1fv(mt.location,P)}}}}C()}function H(){z();for(const B in s){const X=s[B];for(const ut in X){const ht=X[ut];for(const W in ht){const O=ht[W];for(const F in O)v(O[F].object),delete O[F];delete ht[W]}}delete s[B]}}function U(B){if(s[B.id]===void 0)return;const X=s[B.id];for(const ut in X){const ht=X[ut];for(const W in ht){const O=ht[W];for(const F in O)v(O[F].object),delete O[F];delete ht[W]}}delete s[B.id]}function I(B){for(const X in s){const ut=s[X];for(const ht in ut){const W=ut[ht];if(W[B.id]===void 0)continue;const O=W[B.id];for(const F in O)v(O[F].object),delete O[F];delete W[B.id]}}}function T(B){for(const X in s){const ut=s[X],ht=B.isInstancedMesh===!0?B.id:0,W=ut[ht];if(W!==void 0){for(const O in W){const F=W[O];for(const lt in F)v(F[lt].object),delete F[lt];delete W[O]}delete ut[ht],Object.keys(ut).length===0&&delete s[X]}}}function z(){Z(),h=!0,c!==l&&(c=l,p(c.object))}function Z(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:z,resetDefaultState:Z,dispose:H,releaseStatesOfGeometry:U,releaseStatesOfObject:T,releaseStatesOfProgram:I,initAttributes:w,enableAttribute:M,disableUnusedAttributes:C}}function UE(r,t,i){let s;function l(m){s=m}function c(m,p){r.drawArrays(s,m,p),i.update(p,s,1)}function h(m,p,v){v!==0&&(r.drawArraysInstanced(s,m,p,v),i.update(p,s,v))}function d(m,p,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,p,0,v);let g=0;for(let S=0;S<v;S++)g+=p[S];i.update(g,s,1)}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d}function LE(r,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const I=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(I){return!(I!==qi&&s.convert(I)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(I){const T=I===Ba&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==bi&&s.convert(I)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==aa&&!T)}function m(I){if(I==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const v=m(p);v!==p&&(le("WebGLRenderer:",p,"not supported, using",v,"instead."),p=v);const x=i.logarithmicDepthBuffer===!0,g=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control");i.reversedDepthBuffer===!0&&g===!1&&le("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const S=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=r.getParameter(r.MAX_TEXTURE_SIZE),M=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),y=r.getParameter(r.MAX_VERTEX_ATTRIBS),C=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),L=r.getParameter(r.MAX_VARYING_VECTORS),N=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),H=r.getParameter(r.MAX_SAMPLES),U=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:x,reversedDepthBuffer:g,maxTextures:S,maxVertexTextures:E,maxTextureSize:w,maxCubemapSize:M,maxAttributes:y,maxVertexUniforms:C,maxVaryings:L,maxFragmentUniforms:N,maxSamples:H,samples:U}}function OE(r){const t=this;let i=null,s=0,l=!1,c=!1;const h=new Xs,d=new he,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(x,g){const S=x.length!==0||g||s!==0||l;return l=g,s=x.length,S},this.beginShadows=function(){c=!0,v(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(x,g){i=v(x,g,0)},this.setState=function(x,g,S){const E=x.clippingPlanes,w=x.clipIntersection,M=x.clipShadows,y=r.get(x);if(!l||E===null||E.length===0||c&&!M)c?v(null):p();else{const C=c?0:s,L=C*4;let N=y.clippingState||null;m.value=N,N=v(E,g,L,S);for(let H=0;H!==L;++H)N[H]=i[H];y.clippingState=N,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=C}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function v(x,g,S,E){const w=x!==null?x.length:0;let M=null;if(w!==0){if(M=m.value,E!==!0||M===null){const y=S+w*4,C=g.matrixWorldInverse;d.getNormalMatrix(C),(M===null||M.length<y)&&(M=new Float32Array(y));for(let L=0,N=S;L!==w;++L,N+=4)h.copy(x[L]).applyMatrix4(C,d),h.normal.toArray(M,N),M[N+3]=h.constant}m.value=M,m.needsUpdate=!0}return t.numPlanes=w,t.numIntersection=0,M}}const xs=4,F_=[.125,.215,.35,.446,.526,.582],qs=20,PE=256,jo=new cp,B_=new ve;let kh=null,Xh=0,Wh=0,qh=!1;const zE=new Y;class G_{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,l=100,c={}){const{size:h=256,position:d=zE}=c;kh=this._renderer.getRenderTarget(),Xh=this._renderer.getActiveCubeFace(),Wh=this._renderer.getActiveMipmapLevel(),qh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=k_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=V_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(kh,Xh,Wh),this._renderer.xr.enabled=qh,t.scissorTest=!1,kr(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Zs||t.mapping===jr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),kh=this._renderer.getRenderTarget(),Xh=this._renderer.getActiveCubeFace(),Wh=this._renderer.getActiveMipmapLevel(),qh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Xn,minFilter:Xn,generateMipmaps:!1,type:Ba,format:qi,colorSpace:Yc,depthBuffer:!1},l=H_(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=H_(t,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=IE(c)),this._blurMaterial=BE(c,t,i),this._ggxMaterial=FE(c,t,i)}return l}_compileMaterial(t){const i=new Ne(new oi,t);this._renderer.compile(i,jo)}_sceneToCubeUV(t,i,s,l,c){const m=new Mi(90,1,i,s),p=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],x=this._renderer,g=x.autoClear,S=x.toneMapping;x.getClearColor(B_),x.toneMapping=ra,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(l),x.clearDepth(),x.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ne(new Ss,new Xr({name:"PMREM.Background",side:Jn,depthWrite:!1,depthTest:!1})));const w=this._backgroundBox,M=w.material;let y=!1;const C=t.background;C?C.isColor&&(M.color.copy(C),t.background=null,y=!0):(M.color.copy(B_),y=!0);for(let L=0;L<6;L++){const N=L%3;N===0?(m.up.set(0,p[L],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+v[L],c.y,c.z)):N===1?(m.up.set(0,0,p[L]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+v[L],c.z)):(m.up.set(0,p[L],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+v[L]));const H=this._cubeSize;kr(l,N*H,L>2?H:0,H,H),x.setRenderTarget(l),y&&x.render(w,m),x.render(t,m)}x.toneMapping=S,x.autoClear=g,t.background=C}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===Zs||t.mapping===jr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=k_()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=V_());const c=l?this._cubemapMaterial:this._equirectMaterial,h=this._lodMeshes[0];h.material=c;const d=c.uniforms;d.envMap.value=t;const m=this._cubeSize;kr(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(h,jo)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);i.autoClear=s}_applyGGXFilter(t,i,s){const l=this._renderer,c=this._pingPongRenderTarget,h=this._ggxMaterial,d=this._lodMeshes[s];d.material=h;const m=h.uniforms,p=s/(this._lodMeshes.length-1),v=i/(this._lodMeshes.length-1),x=Math.sqrt(p*p-v*v),g=0+p*1.25,S=x*g,{_lodMax:E}=this,w=this._sizeLods[s],M=3*w*(s>E-xs?s-E+xs:0),y=4*(this._cubeSize-w);m.envMap.value=t.texture,m.roughness.value=S,m.mipInt.value=E-i,kr(c,M,y,3*w,2*w),l.setRenderTarget(c),l.render(d,jo),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=E-s,kr(t,M,y,3*w,2*w),l.setRenderTarget(t),l.render(d,jo)}_blur(t,i,s,l,c){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,s,l,"latitudinal",c),this._halfBlur(h,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&Ue("blur direction must be either latitudinal or longitudinal!");const v=3,x=this._lodMeshes[l];x.material=p;const g=p.uniforms,S=this._sizeLods[s]-1,E=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*qs-1),w=c/E,M=isFinite(c)?1+Math.floor(v*w):qs;M>qs&&le(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${qs}`);const y=[];let C=0;for(let I=0;I<qs;++I){const T=I/w,z=Math.exp(-T*T/2);y.push(z),I===0?C+=z:I<M&&(C+=2*z)}for(let I=0;I<y.length;I++)y[I]=y[I]/C;g.envMap.value=t.texture,g.samples.value=M,g.weights.value=y,g.latitudinal.value=h==="latitudinal",d&&(g.poleAxis.value=d);const{_lodMax:L}=this;g.dTheta.value=E,g.mipInt.value=L-s;const N=this._sizeLods[l],H=3*N*(l>L-xs?l-L+xs:0),U=4*(this._cubeSize-N);kr(i,H,U,3*N,2*N),m.setRenderTarget(i),m.render(x,jo)}}function IE(r){const t=[],i=[],s=[];let l=r;const c=r-xs+1+F_.length;for(let h=0;h<c;h++){const d=Math.pow(2,l);t.push(d);let m=1/d;h>r-xs?m=F_[h-r+xs-1]:h===0&&(m=0),i.push(m);const p=1/(d-2),v=-p,x=1+p,g=[v,v,x,v,x,x,v,v,x,x,v,x],S=6,E=6,w=3,M=2,y=1,C=new Float32Array(w*E*S),L=new Float32Array(M*E*S),N=new Float32Array(y*E*S);for(let U=0;U<S;U++){const I=U%3*2/3-1,T=U>2?0:-1,z=[I,T,0,I+2/3,T,0,I+2/3,T+1,0,I,T,0,I+2/3,T+1,0,I,T+1,0];C.set(z,w*E*U),L.set(g,M*E*U);const Z=[U,U,U,U,U,U];N.set(Z,y*E*U)}const H=new oi;H.setAttribute("position",new la(C,w)),H.setAttribute("uv",new la(L,M)),H.setAttribute("faceIndex",new la(N,y)),s.push(new Ne(H,null)),l>xs&&l--}return{lodMeshes:s,sizeLods:t,sigmas:i}}function H_(r,t,i){const s=new oa(r,t,i);return s.texture.mapping=$c,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function kr(r,t,i,s,l){r.viewport.set(t,i,s,l),r.scissor.set(t,i,s,l)}function FE(r,t,i){return new ua({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:PE,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:tu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ia,depthTest:!1,depthWrite:!1})}function BE(r,t,i){const s=new Float32Array(qs),l=new Y(0,1,0);return new ua({name:"SphericalGaussianBlur",defines:{n:qs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:tu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ia,depthTest:!1,depthWrite:!1})}function V_(){return new ua({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:tu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ia,depthTest:!1,depthWrite:!1})}function k_(){return new ua({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:tu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ia,depthTest:!1,depthWrite:!1})}function tu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Wv extends oa{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new Pv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Ss(5,5,5),c=new ua({name:"CubemapFromEquirect",uniforms:Kr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Jn,blending:Ia});c.uniforms.tEquirect.value=i;const h=new Ne(l,c),d=i.minFilter;return i.minFilter===Ys&&(i.minFilter=Xn),new XM(1,10,this).update(t,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,s,l);t.setRenderTarget(c)}}function GE(r){let t=new WeakMap,i=new WeakMap,s=null;function l(g,S=!1){return g==null?null:S?h(g):c(g)}function c(g){if(g&&g.isTexture){const S=g.mapping;if(S===hh||S===dh)if(t.has(g)){const E=t.get(g).texture;return d(E,g.mapping)}else{const E=g.image;if(E&&E.height>0){const w=new Wv(E.height);return w.fromEquirectangularTexture(r,g),t.set(g,w),g.addEventListener("dispose",p),d(w.texture,g.mapping)}else return null}}return g}function h(g){if(g&&g.isTexture){const S=g.mapping,E=S===hh||S===dh,w=S===Zs||S===jr;if(E||w){let M=i.get(g);const y=M!==void 0?M.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==y)return s===null&&(s=new G_(r)),M=E?s.fromEquirectangular(g,M):s.fromCubemap(g,M),M.texture.pmremVersion=g.pmremVersion,i.set(g,M),M.texture;if(M!==void 0)return M.texture;{const C=g.image;return E&&C&&C.height>0||w&&C&&m(C)?(s===null&&(s=new G_(r)),M=E?s.fromEquirectangular(g):s.fromCubemap(g),M.texture.pmremVersion=g.pmremVersion,i.set(g,M),g.addEventListener("dispose",v),M.texture):null}}}return g}function d(g,S){return S===hh?g.mapping=Zs:S===dh&&(g.mapping=jr),g}function m(g){let S=0;const E=6;for(let w=0;w<E;w++)g[w]!==void 0&&S++;return S===E}function p(g){const S=g.target;S.removeEventListener("dispose",p);const E=t.get(S);E!==void 0&&(t.delete(S),E.dispose())}function v(g){const S=g.target;S.removeEventListener("dispose",v);const E=i.get(S);E!==void 0&&(i.delete(S),E.dispose())}function x(){t=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:x}}function HE(r){const t={};function i(s){if(t[s]!==void 0)return t[s];const l=r.getExtension(s);return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Bd("WebGLRenderer: "+s+" extension not supported."),l}}}function VE(r,t,i,s){const l={},c=new WeakMap;function h(x){const g=x.target;g.index!==null&&t.remove(g.index);for(const E in g.attributes)t.remove(g.attributes[E]);g.removeEventListener("dispose",h),delete l[g.id];const S=c.get(g);S&&(t.remove(S),c.delete(g)),s.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function d(x,g){return l[g.id]===!0||(g.addEventListener("dispose",h),l[g.id]=!0,i.memory.geometries++),g}function m(x){const g=x.attributes;for(const S in g)t.update(g[S],r.ARRAY_BUFFER)}function p(x){const g=[],S=x.index,E=x.attributes.position;let w=0;if(E===void 0)return;if(S!==null){const C=S.array;w=S.version;for(let L=0,N=C.length;L<N;L+=3){const H=C[L+0],U=C[L+1],I=C[L+2];g.push(H,U,U,I,I,H)}}else{const C=E.array;w=E.version;for(let L=0,N=C.length/3-1;L<N;L+=3){const H=L+0,U=L+1,I=L+2;g.push(H,U,U,I,I,H)}}const M=new(E.count>=65535?Lv:Uv)(g,1);M.version=w;const y=c.get(x);y&&t.remove(y),c.set(x,M)}function v(x){const g=c.get(x);if(g){const S=x.index;S!==null&&g.version<S.version&&p(x)}else p(x);return c.get(x)}return{get:d,update:m,getWireframeAttribute:v}}function kE(r,t,i){let s;function l(x){s=x}let c,h;function d(x){c=x.type,h=x.bytesPerElement}function m(x,g){r.drawElements(s,g,c,x*h),i.update(g,s,1)}function p(x,g,S){S!==0&&(r.drawElementsInstanced(s,g,c,x*h,S),i.update(g,s,S))}function v(x,g,S){if(S===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,g,0,c,x,0,S);let w=0;for(let M=0;M<S;M++)w+=g[M];i.update(w,s,1)}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=v}function XE(r){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,h,d){switch(i.calls++,h){case r.TRIANGLES:i.triangles+=d*(c/3);break;case r.LINES:i.lines+=d*(c/2);break;case r.LINE_STRIP:i.lines+=d*(c-1);break;case r.LINE_LOOP:i.lines+=d*c;break;case r.POINTS:i.points+=d*c;break;default:Ue("WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function WE(r,t,i){const s=new WeakMap,l=new gn;function c(h,d,m){const p=h.morphTargetInfluences,v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,x=v!==void 0?v.length:0;let g=s.get(d);if(g===void 0||g.count!==x){let Z=function(){T.dispose(),s.delete(d),d.removeEventListener("dispose",Z)};var S=Z;g!==void 0&&g.texture.dispose();const E=d.morphAttributes.position!==void 0,w=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,y=d.morphAttributes.position||[],C=d.morphAttributes.normal||[],L=d.morphAttributes.color||[];let N=0;E===!0&&(N=1),w===!0&&(N=2),M===!0&&(N=3);let H=d.attributes.position.count*N,U=1;H>t.maxTextureSize&&(U=Math.ceil(H/t.maxTextureSize),H=t.maxTextureSize);const I=new Float32Array(H*U*4*x),T=new Dv(I,H,U,x);T.type=aa,T.needsUpdate=!0;const z=N*4;for(let B=0;B<x;B++){const X=y[B],ut=C[B],ht=L[B],W=H*U*4*B;for(let O=0;O<X.count;O++){const F=O*z;E===!0&&(l.fromBufferAttribute(X,O),I[W+F+0]=l.x,I[W+F+1]=l.y,I[W+F+2]=l.z,I[W+F+3]=0),w===!0&&(l.fromBufferAttribute(ut,O),I[W+F+4]=l.x,I[W+F+5]=l.y,I[W+F+6]=l.z,I[W+F+7]=0),M===!0&&(l.fromBufferAttribute(ht,O),I[W+F+8]=l.x,I[W+F+9]=l.y,I[W+F+10]=l.z,I[W+F+11]=ht.itemSize===4?l.w:1)}}g={count:x,texture:T,size:new $t(H,U)},s.set(d,g),d.addEventListener("dispose",Z)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",h.morphTexture,i);else{let E=0;for(let M=0;M<p.length;M++)E+=p[M];const w=d.morphTargetsRelative?1:1-E;m.getUniforms().setValue(r,"morphTargetBaseInfluence",w),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",g.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}return{update:c}}function qE(r,t,i,s,l){let c=new WeakMap;function h(p){const v=l.render.frame,x=p.geometry,g=t.get(p,x);if(c.get(g)!==v&&(t.update(g),c.set(g,v)),p.isInstancedMesh&&(p.hasEventListener("dispose",m)===!1&&p.addEventListener("dispose",m),c.get(p)!==v&&(i.update(p.instanceMatrix,r.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,r.ARRAY_BUFFER),c.set(p,v))),p.isSkinnedMesh){const S=p.skeleton;c.get(S)!==v&&(S.update(),c.set(S,v))}return g}function d(){c=new WeakMap}function m(p){const v=p.target;v.removeEventListener("dispose",m),s.releaseStatesOfObject(v),i.remove(v.instanceMatrix),v.instanceColor!==null&&i.remove(v.instanceColor)}return{update:h,dispose:d}}const YE={[mv]:"LINEAR_TONE_MAPPING",[gv]:"REINHARD_TONE_MAPPING",[_v]:"CINEON_TONE_MAPPING",[qd]:"ACES_FILMIC_TONE_MAPPING",[xv]:"AGX_TONE_MAPPING",[Sv]:"NEUTRAL_TONE_MAPPING",[vv]:"CUSTOM_TONE_MAPPING"};function jE(r,t,i,s,l){const c=new oa(t,i,{type:r,depthBuffer:s,stencilBuffer:l,depthTexture:s?new Zr(t,i):void 0}),h=new oa(t,i,{type:Ba,depthBuffer:!1,stencilBuffer:!1}),d=new oi;d.setAttribute("position",new cn([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new cn([0,2,0,0,2,0],2));const m=new zM({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new Ne(d,m),v=new cp(-1,1,1,-1,0,1);let x=null,g=null,S=!1,E,w=null,M=[],y=!1;this.setSize=function(C,L){c.setSize(C,L),h.setSize(C,L);for(let N=0;N<M.length;N++){const H=M[N];H.setSize&&H.setSize(C,L)}},this.setEffects=function(C){M=C,y=M.length>0&&M[0].isRenderPass===!0;const L=c.width,N=c.height;for(let H=0;H<M.length;H++){const U=M[H];U.setSize&&U.setSize(L,N)}},this.begin=function(C,L){if(S||C.toneMapping===ra&&M.length===0)return!1;if(w=L,L!==null){const N=L.width,H=L.height;(c.width!==N||c.height!==H)&&this.setSize(N,H)}return y===!1&&C.setRenderTarget(c),E=C.toneMapping,C.toneMapping=ra,!0},this.hasRenderPass=function(){return y},this.end=function(C,L){C.toneMapping=E,S=!0;let N=c,H=h;for(let U=0;U<M.length;U++){const I=M[U];if(I.enabled!==!1&&(I.render(C,H,N,L),I.needsSwap!==!1)){const T=N;N=H,H=T}}if(x!==C.outputColorSpace||g!==C.toneMapping){x=C.outputColorSpace,g=C.toneMapping,m.defines={},Ce.getTransfer(x)===je&&(m.defines.SRGB_TRANSFER="");const U=YE[g];U&&(m.defines[U]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=N.texture,C.setRenderTarget(w),C.render(p,v),w=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){c.depthTexture&&c.depthTexture.dispose(),c.dispose(),h.dispose(),d.dispose(),m.dispose()}}const qv=new Wn,Vd=new Zr(1,1),Yv=new Dv,jv=new Qy,Zv=new Pv,X_=[],W_=[],q_=new Float32Array(16),Y_=new Float32Array(9),j_=new Float32Array(4);function Jr(r,t,i){const s=r[0];if(s<=0||s>0)return r;const l=t*i;let c=X_[l];if(c===void 0&&(c=new Float32Array(l),X_[l]=c),t!==0){s.toArray(c,0);for(let h=1,d=0;h!==t;++h)d+=i,r[h].toArray(c,d)}return c}function Nn(r,t){if(r.length!==t.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==t[i])return!1;return!0}function Un(r,t){for(let i=0,s=t.length;i<s;i++)r[i]=t[i]}function eu(r,t){let i=W_[t];i===void 0&&(i=new Int32Array(t),W_[t]=i);for(let s=0;s!==t;++s)i[s]=r.allocateTextureUnit();return i}function ZE(r,t){const i=this.cache;i[0]!==t&&(r.uniform1f(this.addr,t),i[0]=t)}function KE(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Nn(i,t))return;r.uniform2fv(this.addr,t),Un(i,t)}}function QE(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(Nn(i,t))return;r.uniform3fv(this.addr,t),Un(i,t)}}function JE(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Nn(i,t))return;r.uniform4fv(this.addr,t),Un(i,t)}}function $E(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(Nn(i,t))return;r.uniformMatrix2fv(this.addr,!1,t),Un(i,t)}else{if(Nn(i,s))return;j_.set(s),r.uniformMatrix2fv(this.addr,!1,j_),Un(i,s)}}function tT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(Nn(i,t))return;r.uniformMatrix3fv(this.addr,!1,t),Un(i,t)}else{if(Nn(i,s))return;Y_.set(s),r.uniformMatrix3fv(this.addr,!1,Y_),Un(i,s)}}function eT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(Nn(i,t))return;r.uniformMatrix4fv(this.addr,!1,t),Un(i,t)}else{if(Nn(i,s))return;q_.set(s),r.uniformMatrix4fv(this.addr,!1,q_),Un(i,s)}}function nT(r,t){const i=this.cache;i[0]!==t&&(r.uniform1i(this.addr,t),i[0]=t)}function iT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Nn(i,t))return;r.uniform2iv(this.addr,t),Un(i,t)}}function aT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Nn(i,t))return;r.uniform3iv(this.addr,t),Un(i,t)}}function sT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Nn(i,t))return;r.uniform4iv(this.addr,t),Un(i,t)}}function rT(r,t){const i=this.cache;i[0]!==t&&(r.uniform1ui(this.addr,t),i[0]=t)}function oT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Nn(i,t))return;r.uniform2uiv(this.addr,t),Un(i,t)}}function lT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Nn(i,t))return;r.uniform3uiv(this.addr,t),Un(i,t)}}function cT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Nn(i,t))return;r.uniform4uiv(this.addr,t),Un(i,t)}}function uT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(Vd.compareFunction=i.isReversedDepthBuffer()?tp:$d,c=Vd):c=qv,i.setTexture2D(t||c,l)}function fT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||jv,l)}function hT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||Zv,l)}function dT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||Yv,l)}function pT(r){switch(r){case 5126:return ZE;case 35664:return KE;case 35665:return QE;case 35666:return JE;case 35674:return $E;case 35675:return tT;case 35676:return eT;case 5124:case 35670:return nT;case 35667:case 35671:return iT;case 35668:case 35672:return aT;case 35669:case 35673:return sT;case 5125:return rT;case 36294:return oT;case 36295:return lT;case 36296:return cT;case 35678:case 36198:case 36298:case 36306:case 35682:return uT;case 35679:case 36299:case 36307:return fT;case 35680:case 36300:case 36308:case 36293:return hT;case 36289:case 36303:case 36311:case 36292:return dT}}function mT(r,t){r.uniform1fv(this.addr,t)}function gT(r,t){const i=Jr(t,this.size,2);r.uniform2fv(this.addr,i)}function _T(r,t){const i=Jr(t,this.size,3);r.uniform3fv(this.addr,i)}function vT(r,t){const i=Jr(t,this.size,4);r.uniform4fv(this.addr,i)}function xT(r,t){const i=Jr(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function ST(r,t){const i=Jr(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function yT(r,t){const i=Jr(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function MT(r,t){r.uniform1iv(this.addr,t)}function bT(r,t){r.uniform2iv(this.addr,t)}function ET(r,t){r.uniform3iv(this.addr,t)}function TT(r,t){r.uniform4iv(this.addr,t)}function AT(r,t){r.uniform1uiv(this.addr,t)}function RT(r,t){r.uniform2uiv(this.addr,t)}function CT(r,t){r.uniform3uiv(this.addr,t)}function wT(r,t){r.uniform4uiv(this.addr,t)}function DT(r,t,i){const s=this.cache,l=t.length,c=eu(i,l);Nn(s,c)||(r.uniform1iv(this.addr,c),Un(s,c));let h;this.type===r.SAMPLER_2D_SHADOW?h=Vd:h=qv;for(let d=0;d!==l;++d)i.setTexture2D(t[d]||h,c[d])}function NT(r,t,i){const s=this.cache,l=t.length,c=eu(i,l);Nn(s,c)||(r.uniform1iv(this.addr,c),Un(s,c));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||jv,c[h])}function UT(r,t,i){const s=this.cache,l=t.length,c=eu(i,l);Nn(s,c)||(r.uniform1iv(this.addr,c),Un(s,c));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||Zv,c[h])}function LT(r,t,i){const s=this.cache,l=t.length,c=eu(i,l);Nn(s,c)||(r.uniform1iv(this.addr,c),Un(s,c));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||Yv,c[h])}function OT(r){switch(r){case 5126:return mT;case 35664:return gT;case 35665:return _T;case 35666:return vT;case 35674:return xT;case 35675:return ST;case 35676:return yT;case 5124:case 35670:return MT;case 35667:case 35671:return bT;case 35668:case 35672:return ET;case 35669:case 35673:return TT;case 5125:return AT;case 36294:return RT;case 36295:return CT;case 36296:return wT;case 35678:case 36198:case 36298:case 36306:case 35682:return DT;case 35679:case 36299:case 36307:return NT;case 35680:case 36300:case 36308:case 36293:return UT;case 36289:case 36303:case 36311:case 36292:return LT}}class PT{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=pT(i.type)}}class zT{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=OT(i.type)}}class IT{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const d=l[c];d.setValue(t,i[d.id],s)}}}const Yh=/(\w+)(\])?(\[|\.)?/g;function Z_(r,t){r.seq.push(t),r.map[t.id]=t}function FT(r,t,i){const s=r.name,l=s.length;for(Yh.lastIndex=0;;){const c=Yh.exec(s),h=Yh.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){Z_(i,p===void 0?new PT(d,r,t):new zT(d,r,t));break}else{let x=i.map[d];x===void 0&&(x=new IT(d),Z_(i,x)),i=x}}}class Xc{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let h=0;h<s;++h){const d=t.getActiveUniform(i,h),m=t.getUniformLocation(i,d.name);FT(d,m,this)}const l=[],c=[];for(const h of this.seq)h.type===t.SAMPLER_2D_SHADOW||h.type===t.SAMPLER_CUBE_SHADOW||h.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(h):c.push(h);l.length>0&&(this.seq=l.concat(c))}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,h=i.length;c!==h;++c){const d=i[c],m=s[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const h=t[l];h.id in i&&s.push(h)}return s}}function K_(r,t,i){const s=r.createShader(t);return r.shaderSource(s,i),r.compileShader(s),s}const BT=37297;let GT=0;function HT(r,t){const i=r.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let h=l;h<c;h++){const d=h+1;s.push(`${d===t?">":" "} ${d}: ${i[h]}`)}return s.join(`
`)}const Q_=new he;function VT(r){Ce._getMatrix(Q_,Ce.workingColorSpace,r);const t=`mat3( ${Q_.elements.map(i=>i.toFixed(4))} )`;switch(Ce.getTransfer(r)){case jc:return[t,"LinearTransferOETF"];case je:return[t,"sRGBTransferOETF"];default:return le("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function J_(r,t,i){const s=r.getShaderParameter(t,r.COMPILE_STATUS),c=(r.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const h=/ERROR: 0:(\d+)/.exec(c);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+c+`

`+HT(r.getShaderSource(t),d)}else return c}function kT(r,t){const i=VT(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const XT={[mv]:"Linear",[gv]:"Reinhard",[_v]:"Cineon",[qd]:"ACESFilmic",[xv]:"AgX",[Sv]:"Neutral",[vv]:"Custom"};function WT(r,t){const i=XT[t];return i===void 0?(le("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Fc=new Y;function qT(){Ce.getLuminanceCoefficients(Fc);const r=Fc.x.toFixed(4),t=Fc.y.toFixed(4),i=Fc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function YT(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qo).join(`
`)}function jT(r){const t=[];for(const i in r){const s=r[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function ZT(r,t){const i={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(t,l),h=c.name;let d=1;c.type===r.FLOAT_MAT2&&(d=2),c.type===r.FLOAT_MAT3&&(d=3),c.type===r.FLOAT_MAT4&&(d=4),i[h]={type:c.type,location:r.getAttribLocation(t,h),locationSize:d}}return i}function Qo(r){return r!==""}function $_(r,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function tv(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const KT=/^[ \t]*#include +<([\w\d./]+)>/gm;function kd(r){return r.replace(KT,JT)}const QT=new Map;function JT(r,t){let i=_e[t];if(i===void 0){const s=QT.get(t);if(s!==void 0)i=_e[s],le('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return kd(i)}const $T=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ev(r){return r.replace($T,tA)}function tA(r,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function nv(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const eA={[Bc]:"SHADOWMAP_TYPE_PCF",[Ko]:"SHADOWMAP_TYPE_VSM"};function nA(r){return eA[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const iA={[Zs]:"ENVMAP_TYPE_CUBE",[jr]:"ENVMAP_TYPE_CUBE",[$c]:"ENVMAP_TYPE_CUBE_UV"};function aA(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":iA[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const sA={[jr]:"ENVMAP_MODE_REFRACTION"};function rA(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":sA[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const oA={[pv]:"ENVMAP_BLENDING_MULTIPLY",[Dy]:"ENVMAP_BLENDING_MIX",[Ny]:"ENVMAP_BLENDING_ADD"};function lA(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":oA[r.combine]||"ENVMAP_BLENDING_NONE"}function cA(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function uA(r,t,i,s){const l=r.getContext(),c=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=nA(i),p=aA(i),v=rA(i),x=lA(i),g=cA(i),S=YT(i),E=jT(c),w=l.createProgram();let M,y,C=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Qo).join(`
`),M.length>0&&(M+=`
`),y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Qo).join(`
`),y.length>0&&(y+=`
`)):(M=[nv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qo).join(`
`),y=[nv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+v:"",i.envMap?"#define "+x:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ra?"#define TONE_MAPPING":"",i.toneMapping!==ra?_e.tonemapping_pars_fragment:"",i.toneMapping!==ra?WT("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",_e.colorspace_pars_fragment,kT("linearToOutputTexel",i.outputColorSpace),qT(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Qo).join(`
`)),h=kd(h),h=$_(h,i),h=tv(h,i),d=kd(d),d=$_(d,i),d=tv(d,i),h=ev(h),d=ev(d),i.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,M=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,y=["#define varying in",i.glslVersion===l_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===l_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const L=C+M+h,N=C+y+d,H=K_(l,l.VERTEX_SHADER,L),U=K_(l,l.FRAGMENT_SHADER,N);l.attachShader(w,H),l.attachShader(w,U),i.index0AttributeName!==void 0?l.bindAttribLocation(w,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(w,0,"position"),l.linkProgram(w);function I(B){if(r.debug.checkShaderErrors){const X=l.getProgramInfoLog(w)||"",ut=l.getShaderInfoLog(H)||"",ht=l.getShaderInfoLog(U)||"",W=X.trim(),O=ut.trim(),F=ht.trim();let lt=!0,mt=!0;if(l.getProgramParameter(w,l.LINK_STATUS)===!1)if(lt=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,w,H,U);else{const Et=J_(l,H,"vertex"),P=J_(l,U,"fragment");Ue("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(w,l.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+W+`
`+Et+`
`+P)}else W!==""?le("WebGLProgram: Program Info Log:",W):(O===""||F==="")&&(mt=!1);mt&&(B.diagnostics={runnable:lt,programLog:W,vertexShader:{log:O,prefix:M},fragmentShader:{log:F,prefix:y}})}l.deleteShader(H),l.deleteShader(U),T=new Xc(l,w),z=ZT(l,w)}let T;this.getUniforms=function(){return T===void 0&&I(this),T};let z;this.getAttributes=function(){return z===void 0&&I(this),z};let Z=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return Z===!1&&(Z=l.getProgramParameter(w,BT)),Z},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(w),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=GT++,this.cacheKey=t,this.usedTimes=1,this.program=w,this.vertexShader=H,this.fragmentShader=U,this}let fA=0;class hA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new dA(t),i.set(t,s)),s}}class dA{constructor(t){this.id=fA++,this.code=t,this.usedTimes=0}}function pA(r){return r===Ks||r===Wc||r===qc}function mA(r,t,i,s,l,c){const h=new np,d=new hA,m=new Set,p=[],v=new Map,x=s.logarithmicDepthBuffer;let g=s.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(T){return m.add(T),T===0?"uv":`uv${T}`}function w(T,z,Z,B,X,ut){const ht=B.fog,W=X.geometry,O=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?B.environment:null,F=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,lt=t.get(T.envMap||O,F),mt=lt&&lt.mapping===$c?lt.image.height:null,Et=S[T.type];T.precision!==null&&(g=s.getMaxPrecision(T.precision),g!==T.precision&&le("WebGLProgram.getParameters:",T.precision,"not supported, using",g,"instead."));const P=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Q=P!==void 0?P.length:0;let vt=0;W.morphAttributes.position!==void 0&&(vt=1),W.morphAttributes.normal!==void 0&&(vt=2),W.morphAttributes.color!==void 0&&(vt=3);let Nt,Ot,ct,Mt;if(Et){const qt=na[Et];Nt=qt.vertexShader,Ot=qt.fragmentShader}else Nt=T.vertexShader,Ot=T.fragmentShader,d.update(T),ct=d.getVertexShaderID(T),Mt=d.getFragmentShaderID(T);const Dt=r.getRenderTarget(),Ft=r.state.buffers.depth.getReversed(),ie=X.isInstancedMesh===!0,Kt=X.isBatchedMesh===!0,se=!!T.map,oe=!!T.matcap,xe=!!lt,Fe=!!T.aoMap,ue=!!T.lightMap,hn=!!T.bumpMap,Ve=!!T.normalMap,Mn=!!T.displacementMap,q=!!T.emissiveMap,en=!!T.metalnessMap,de=!!T.roughnessMap,Oe=T.anisotropy>0,Ut=T.clearcoat>0,Le=T.dispersion>0,D=T.iridescence>0,b=T.sheen>0,$=T.transmission>0,gt=Oe&&!!T.anisotropyMap,Tt=Ut&&!!T.clearcoatMap,Pt=Ut&&!!T.clearcoatNormalMap,zt=Ut&&!!T.clearcoatRoughnessMap,tt=D&&!!T.iridescenceMap,J=D&&!!T.iridescenceThicknessMap,Ct=b&&!!T.sheenColorMap,wt=b&&!!T.sheenRoughnessMap,At=!!T.specularMap,Rt=!!T.specularColorMap,Wt=!!T.specularIntensityMap,te=$&&!!T.transmissionMap,re=$&&!!T.thicknessMap,V=!!T.gradientMap,bt=!!T.alphaMap,dt=T.alphaTest>0,Lt=!!T.alphaHash,yt=!!T.extensions;let xt=ra;T.toneMapped&&(Dt===null||Dt.isXRRenderTarget===!0)&&(xt=r.toneMapping);const Gt={shaderID:Et,shaderType:T.type,shaderName:T.name,vertexShader:Nt,fragmentShader:Ot,defines:T.defines,customVertexShaderID:ct,customFragmentShaderID:Mt,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:g,batching:Kt,batchingColor:Kt&&X._colorsTexture!==null,instancing:ie,instancingColor:ie&&X.instanceColor!==null,instancingMorph:ie&&X.morphTexture!==null,outputColorSpace:Dt===null?r.outputColorSpace:Dt.isXRRenderTarget===!0?Dt.texture.colorSpace:Ce.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:se,matcap:oe,envMap:xe,envMapMode:xe&&lt.mapping,envMapCubeUVHeight:mt,aoMap:Fe,lightMap:ue,bumpMap:hn,normalMap:Ve,displacementMap:Mn,emissiveMap:q,normalMapObjectSpace:Ve&&T.normalMapType===Oy,normalMapTangentSpace:Ve&&T.normalMapType===Fd,packedNormalMap:Ve&&T.normalMapType===Fd&&pA(T.normalMap.format),metalnessMap:en,roughnessMap:de,anisotropy:Oe,anisotropyMap:gt,clearcoat:Ut,clearcoatMap:Tt,clearcoatNormalMap:Pt,clearcoatRoughnessMap:zt,dispersion:Le,iridescence:D,iridescenceMap:tt,iridescenceThicknessMap:J,sheen:b,sheenColorMap:Ct,sheenRoughnessMap:wt,specularMap:At,specularColorMap:Rt,specularIntensityMap:Wt,transmission:$,transmissionMap:te,thicknessMap:re,gradientMap:V,opaque:T.transparent===!1&&T.blending===Wr&&T.alphaToCoverage===!1,alphaMap:bt,alphaTest:dt,alphaHash:Lt,combine:T.combine,mapUv:se&&E(T.map.channel),aoMapUv:Fe&&E(T.aoMap.channel),lightMapUv:ue&&E(T.lightMap.channel),bumpMapUv:hn&&E(T.bumpMap.channel),normalMapUv:Ve&&E(T.normalMap.channel),displacementMapUv:Mn&&E(T.displacementMap.channel),emissiveMapUv:q&&E(T.emissiveMap.channel),metalnessMapUv:en&&E(T.metalnessMap.channel),roughnessMapUv:de&&E(T.roughnessMap.channel),anisotropyMapUv:gt&&E(T.anisotropyMap.channel),clearcoatMapUv:Tt&&E(T.clearcoatMap.channel),clearcoatNormalMapUv:Pt&&E(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:zt&&E(T.clearcoatRoughnessMap.channel),iridescenceMapUv:tt&&E(T.iridescenceMap.channel),iridescenceThicknessMapUv:J&&E(T.iridescenceThicknessMap.channel),sheenColorMapUv:Ct&&E(T.sheenColorMap.channel),sheenRoughnessMapUv:wt&&E(T.sheenRoughnessMap.channel),specularMapUv:At&&E(T.specularMap.channel),specularColorMapUv:Rt&&E(T.specularColorMap.channel),specularIntensityMapUv:Wt&&E(T.specularIntensityMap.channel),transmissionMapUv:te&&E(T.transmissionMap.channel),thicknessMapUv:re&&E(T.thicknessMap.channel),alphaMapUv:bt&&E(T.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Ve||Oe),vertexNormals:!!W.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!W.attributes.uv&&(se||bt),fog:!!ht,useFog:T.fog===!0,fogExp2:!!ht&&ht.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||W.attributes.normal===void 0&&Ve===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:Ft,skinning:X.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:vt,numDirLights:z.directional.length,numPointLights:z.point.length,numSpotLights:z.spot.length,numSpotLightMaps:z.spotLightMap.length,numRectAreaLights:z.rectArea.length,numHemiLights:z.hemi.length,numDirLightShadows:z.directionalShadowMap.length,numPointLightShadows:z.pointShadowMap.length,numSpotLightShadows:z.spotShadowMap.length,numSpotLightShadowsWithMaps:z.numSpotLightShadowsWithMaps,numLightProbes:z.numLightProbes,numLightProbeGrids:ut.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:T.dithering,shadowMapEnabled:r.shadowMap.enabled&&Z.length>0,shadowMapType:r.shadowMap.type,toneMapping:xt,decodeVideoTexture:se&&T.map.isVideoTexture===!0&&Ce.getTransfer(T.map.colorSpace)===je,decodeVideoTextureEmissive:q&&T.emissiveMap.isVideoTexture===!0&&Ce.getTransfer(T.emissiveMap.colorSpace)===je,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===ia,flipSided:T.side===Jn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:yt&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(yt&&T.extensions.multiDraw===!0||Kt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Gt.vertexUv1s=m.has(1),Gt.vertexUv2s=m.has(2),Gt.vertexUv3s=m.has(3),m.clear(),Gt}function M(T){const z=[];if(T.shaderID?z.push(T.shaderID):(z.push(T.customVertexShaderID),z.push(T.customFragmentShaderID)),T.defines!==void 0)for(const Z in T.defines)z.push(Z),z.push(T.defines[Z]);return T.isRawShaderMaterial===!1&&(y(z,T),C(z,T),z.push(r.outputColorSpace)),z.push(T.customProgramCacheKey),z.join()}function y(T,z){T.push(z.precision),T.push(z.outputColorSpace),T.push(z.envMapMode),T.push(z.envMapCubeUVHeight),T.push(z.mapUv),T.push(z.alphaMapUv),T.push(z.lightMapUv),T.push(z.aoMapUv),T.push(z.bumpMapUv),T.push(z.normalMapUv),T.push(z.displacementMapUv),T.push(z.emissiveMapUv),T.push(z.metalnessMapUv),T.push(z.roughnessMapUv),T.push(z.anisotropyMapUv),T.push(z.clearcoatMapUv),T.push(z.clearcoatNormalMapUv),T.push(z.clearcoatRoughnessMapUv),T.push(z.iridescenceMapUv),T.push(z.iridescenceThicknessMapUv),T.push(z.sheenColorMapUv),T.push(z.sheenRoughnessMapUv),T.push(z.specularMapUv),T.push(z.specularColorMapUv),T.push(z.specularIntensityMapUv),T.push(z.transmissionMapUv),T.push(z.thicknessMapUv),T.push(z.combine),T.push(z.fogExp2),T.push(z.sizeAttenuation),T.push(z.morphTargetsCount),T.push(z.morphAttributeCount),T.push(z.numDirLights),T.push(z.numPointLights),T.push(z.numSpotLights),T.push(z.numSpotLightMaps),T.push(z.numHemiLights),T.push(z.numRectAreaLights),T.push(z.numDirLightShadows),T.push(z.numPointLightShadows),T.push(z.numSpotLightShadows),T.push(z.numSpotLightShadowsWithMaps),T.push(z.numLightProbes),T.push(z.shadowMapType),T.push(z.toneMapping),T.push(z.numClippingPlanes),T.push(z.numClipIntersection),T.push(z.depthPacking)}function C(T,z){h.disableAll(),z.instancing&&h.enable(0),z.instancingColor&&h.enable(1),z.instancingMorph&&h.enable(2),z.matcap&&h.enable(3),z.envMap&&h.enable(4),z.normalMapObjectSpace&&h.enable(5),z.normalMapTangentSpace&&h.enable(6),z.clearcoat&&h.enable(7),z.iridescence&&h.enable(8),z.alphaTest&&h.enable(9),z.vertexColors&&h.enable(10),z.vertexAlphas&&h.enable(11),z.vertexUv1s&&h.enable(12),z.vertexUv2s&&h.enable(13),z.vertexUv3s&&h.enable(14),z.vertexTangents&&h.enable(15),z.anisotropy&&h.enable(16),z.alphaHash&&h.enable(17),z.batching&&h.enable(18),z.dispersion&&h.enable(19),z.batchingColor&&h.enable(20),z.gradientMap&&h.enable(21),z.packedNormalMap&&h.enable(22),z.vertexNormals&&h.enable(23),T.push(h.mask),h.disableAll(),z.fog&&h.enable(0),z.useFog&&h.enable(1),z.flatShading&&h.enable(2),z.logarithmicDepthBuffer&&h.enable(3),z.reversedDepthBuffer&&h.enable(4),z.skinning&&h.enable(5),z.morphTargets&&h.enable(6),z.morphNormals&&h.enable(7),z.morphColors&&h.enable(8),z.premultipliedAlpha&&h.enable(9),z.shadowMapEnabled&&h.enable(10),z.doubleSided&&h.enable(11),z.flipSided&&h.enable(12),z.useDepthPacking&&h.enable(13),z.dithering&&h.enable(14),z.transmission&&h.enable(15),z.sheen&&h.enable(16),z.opaque&&h.enable(17),z.pointsUvs&&h.enable(18),z.decodeVideoTexture&&h.enable(19),z.decodeVideoTextureEmissive&&h.enable(20),z.alphaToCoverage&&h.enable(21),z.numLightProbeGrids>0&&h.enable(22),T.push(h.mask)}function L(T){const z=S[T.type];let Z;if(z){const B=na[z];Z=LM.clone(B.uniforms)}else Z=T.uniforms;return Z}function N(T,z){let Z=v.get(z);return Z!==void 0?++Z.usedTimes:(Z=new uA(r,z,T,l),p.push(Z),v.set(z,Z)),Z}function H(T){if(--T.usedTimes===0){const z=p.indexOf(T);p[z]=p[p.length-1],p.pop(),v.delete(T.cacheKey),T.destroy()}}function U(T){d.remove(T)}function I(){d.dispose()}return{getParameters:w,getProgramCacheKey:M,getUniforms:L,acquireProgram:N,releaseProgram:H,releaseShaderCache:U,programs:p,dispose:I}}function gA(){let r=new WeakMap;function t(h){return r.has(h)}function i(h){let d=r.get(h);return d===void 0&&(d={},r.set(h,d)),d}function s(h){r.delete(h)}function l(h,d,m){r.get(h)[d]=m}function c(){r=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function _A(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.materialVariant!==t.materialVariant?r.materialVariant-t.materialVariant:r.z!==t.z?r.z-t.z:r.id-t.id}function iv(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function av(){const r=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function h(g){let S=0;return g.isInstancedMesh&&(S+=2),g.isSkinnedMesh&&(S+=1),S}function d(g,S,E,w,M,y){let C=r[t];return C===void 0?(C={id:g.id,object:g,geometry:S,material:E,materialVariant:h(g),groupOrder:w,renderOrder:g.renderOrder,z:M,group:y},r[t]=C):(C.id=g.id,C.object=g,C.geometry=S,C.material=E,C.materialVariant=h(g),C.groupOrder=w,C.renderOrder=g.renderOrder,C.z=M,C.group=y),t++,C}function m(g,S,E,w,M,y){const C=d(g,S,E,w,M,y);E.transmission>0?s.push(C):E.transparent===!0?l.push(C):i.push(C)}function p(g,S,E,w,M,y){const C=d(g,S,E,w,M,y);E.transmission>0?s.unshift(C):E.transparent===!0?l.unshift(C):i.unshift(C)}function v(g,S){i.length>1&&i.sort(g||_A),s.length>1&&s.sort(S||iv),l.length>1&&l.sort(S||iv)}function x(){for(let g=t,S=r.length;g<S;g++){const E=r[g];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:m,unshift:p,finish:x,sort:v}}function vA(){let r=new WeakMap;function t(s,l){const c=r.get(s);let h;return c===void 0?(h=new av,r.set(s,[h])):l>=c.length?(h=new av,c.push(h)):h=c[l],h}function i(){r=new WeakMap}return{get:t,dispose:i}}function xA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new Y,color:new ve};break;case"SpotLight":i={position:new Y,direction:new Y,color:new ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new Y,color:new ve,distance:0,decay:0};break;case"HemisphereLight":i={direction:new Y,skyColor:new ve,groundColor:new ve};break;case"RectAreaLight":i={color:new ve,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return r[t.id]=i,i}}}function SA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=i,i}}}let yA=0;function MA(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function bA(r){const t=new xA,i=SA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new Y);const l=new Y,c=new fn,h=new fn;function d(p){let v=0,x=0,g=0;for(let z=0;z<9;z++)s.probe[z].set(0,0,0);let S=0,E=0,w=0,M=0,y=0,C=0,L=0,N=0,H=0,U=0,I=0;p.sort(MA);for(let z=0,Z=p.length;z<Z;z++){const B=p[z],X=B.color,ut=B.intensity,ht=B.distance;let W=null;if(B.shadow&&B.shadow.map&&(B.shadow.map.texture.format===Ks?W=B.shadow.map.texture:W=B.shadow.map.depthTexture||B.shadow.map.texture),B.isAmbientLight)v+=X.r*ut,x+=X.g*ut,g+=X.b*ut;else if(B.isLightProbe){for(let O=0;O<9;O++)s.probe[O].addScaledVector(B.sh.coefficients[O],ut);I++}else if(B.isDirectionalLight){const O=t.get(B);if(O.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const F=B.shadow,lt=i.get(B);lt.shadowIntensity=F.intensity,lt.shadowBias=F.bias,lt.shadowNormalBias=F.normalBias,lt.shadowRadius=F.radius,lt.shadowMapSize=F.mapSize,s.directionalShadow[S]=lt,s.directionalShadowMap[S]=W,s.directionalShadowMatrix[S]=B.shadow.matrix,C++}s.directional[S]=O,S++}else if(B.isSpotLight){const O=t.get(B);O.position.setFromMatrixPosition(B.matrixWorld),O.color.copy(X).multiplyScalar(ut),O.distance=ht,O.coneCos=Math.cos(B.angle),O.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),O.decay=B.decay,s.spot[w]=O;const F=B.shadow;if(B.map&&(s.spotLightMap[H]=B.map,H++,F.updateMatrices(B),B.castShadow&&U++),s.spotLightMatrix[w]=F.matrix,B.castShadow){const lt=i.get(B);lt.shadowIntensity=F.intensity,lt.shadowBias=F.bias,lt.shadowNormalBias=F.normalBias,lt.shadowRadius=F.radius,lt.shadowMapSize=F.mapSize,s.spotShadow[w]=lt,s.spotShadowMap[w]=W,N++}w++}else if(B.isRectAreaLight){const O=t.get(B);O.color.copy(X).multiplyScalar(ut),O.halfWidth.set(B.width*.5,0,0),O.halfHeight.set(0,B.height*.5,0),s.rectArea[M]=O,M++}else if(B.isPointLight){const O=t.get(B);if(O.color.copy(B.color).multiplyScalar(B.intensity),O.distance=B.distance,O.decay=B.decay,B.castShadow){const F=B.shadow,lt=i.get(B);lt.shadowIntensity=F.intensity,lt.shadowBias=F.bias,lt.shadowNormalBias=F.normalBias,lt.shadowRadius=F.radius,lt.shadowMapSize=F.mapSize,lt.shadowCameraNear=F.camera.near,lt.shadowCameraFar=F.camera.far,s.pointShadow[E]=lt,s.pointShadowMap[E]=W,s.pointShadowMatrix[E]=B.shadow.matrix,L++}s.point[E]=O,E++}else if(B.isHemisphereLight){const O=t.get(B);O.skyColor.copy(B.color).multiplyScalar(ut),O.groundColor.copy(B.groundColor).multiplyScalar(ut),s.hemi[y]=O,y++}}M>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ht.LTC_FLOAT_1,s.rectAreaLTC2=Ht.LTC_FLOAT_2):(s.rectAreaLTC1=Ht.LTC_HALF_1,s.rectAreaLTC2=Ht.LTC_HALF_2)),s.ambient[0]=v,s.ambient[1]=x,s.ambient[2]=g;const T=s.hash;(T.directionalLength!==S||T.pointLength!==E||T.spotLength!==w||T.rectAreaLength!==M||T.hemiLength!==y||T.numDirectionalShadows!==C||T.numPointShadows!==L||T.numSpotShadows!==N||T.numSpotMaps!==H||T.numLightProbes!==I)&&(s.directional.length=S,s.spot.length=w,s.rectArea.length=M,s.point.length=E,s.hemi.length=y,s.directionalShadow.length=C,s.directionalShadowMap.length=C,s.pointShadow.length=L,s.pointShadowMap.length=L,s.spotShadow.length=N,s.spotShadowMap.length=N,s.directionalShadowMatrix.length=C,s.pointShadowMatrix.length=L,s.spotLightMatrix.length=N+H-U,s.spotLightMap.length=H,s.numSpotLightShadowsWithMaps=U,s.numLightProbes=I,T.directionalLength=S,T.pointLength=E,T.spotLength=w,T.rectAreaLength=M,T.hemiLength=y,T.numDirectionalShadows=C,T.numPointShadows=L,T.numSpotShadows=N,T.numSpotMaps=H,T.numLightProbes=I,s.version=yA++)}function m(p,v){let x=0,g=0,S=0,E=0,w=0;const M=v.matrixWorldInverse;for(let y=0,C=p.length;y<C;y++){const L=p[y];if(L.isDirectionalLight){const N=s.directional[x];N.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(M),x++}else if(L.isSpotLight){const N=s.spot[S];N.position.setFromMatrixPosition(L.matrixWorld),N.position.applyMatrix4(M),N.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(M),S++}else if(L.isRectAreaLight){const N=s.rectArea[E];N.position.setFromMatrixPosition(L.matrixWorld),N.position.applyMatrix4(M),h.identity(),c.copy(L.matrixWorld),c.premultiply(M),h.extractRotation(c),N.halfWidth.set(L.width*.5,0,0),N.halfHeight.set(0,L.height*.5,0),N.halfWidth.applyMatrix4(h),N.halfHeight.applyMatrix4(h),E++}else if(L.isPointLight){const N=s.point[g];N.position.setFromMatrixPosition(L.matrixWorld),N.position.applyMatrix4(M),g++}else if(L.isHemisphereLight){const N=s.hemi[w];N.direction.setFromMatrixPosition(L.matrixWorld),N.direction.transformDirection(M),w++}}}return{setup:d,setupView:m,state:s}}function sv(r){const t=new bA(r),i=[],s=[],l=[];function c(g){x.camera=g,i.length=0,s.length=0,l.length=0}function h(g){i.push(g)}function d(g){s.push(g)}function m(g){l.push(g)}function p(){t.setup(i)}function v(g){t.setupView(i,g)}const x={lightsArray:i,shadowsArray:s,lightProbeGridArray:l,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:x,setupLights:p,setupLightsView:v,pushLight:h,pushShadow:d,pushLightProbeGrid:m}}function EA(r){let t=new WeakMap;function i(l,c=0){const h=t.get(l);let d;return h===void 0?(d=new sv(r),t.set(l,[d])):c>=h.length?(d=new sv(r),h.push(d)):d=h[c],d}function s(){t=new WeakMap}return{get:i,dispose:s}}const TA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,AA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,RA=[new Y(1,0,0),new Y(-1,0,0),new Y(0,1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1)],CA=[new Y(0,-1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1),new Y(0,-1,0),new Y(0,-1,0)],rv=new fn,Zo=new Y,jh=new Y;function wA(r,t,i){let s=new sp;const l=new $t,c=new $t,h=new gn,d=new FM,m=new BM,p={},v=i.maxTextureSize,x={[ys]:Jn,[Jn]:ys,[ia]:ia},g=new ua({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $t},radius:{value:4}},vertexShader:TA,fragmentShader:AA}),S=g.clone();S.defines.HORIZONTAL_PASS=1;const E=new oi;E.setAttribute("position",new la(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Ne(E,g),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bc;let y=this.type;this.render=function(U,I,T){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||U.length===0)return;this.type===dv&&(le("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Bc);const z=r.getRenderTarget(),Z=r.getActiveCubeFace(),B=r.getActiveMipmapLevel(),X=r.state;X.setBlending(Ia),X.buffers.depth.getReversed()===!0?X.buffers.color.setClear(0,0,0,0):X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const ut=y!==this.type;ut&&I.traverse(function(ht){ht.material&&(Array.isArray(ht.material)?ht.material.forEach(W=>W.needsUpdate=!0):ht.material.needsUpdate=!0)});for(let ht=0,W=U.length;ht<W;ht++){const O=U[ht],F=O.shadow;if(F===void 0){le("WebGLShadowMap:",O,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;l.copy(F.mapSize);const lt=F.getFrameExtents();l.multiply(lt),c.copy(F.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(c.x=Math.floor(v/lt.x),l.x=c.x*lt.x,F.mapSize.x=c.x),l.y>v&&(c.y=Math.floor(v/lt.y),l.y=c.y*lt.y,F.mapSize.y=c.y));const mt=r.state.buffers.depth.getReversed();if(F.camera._reversedDepth=mt,F.map===null||ut===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===Ko){if(O.isPointLight){le("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new oa(l.x,l.y,{format:Ks,type:Ba,minFilter:Xn,magFilter:Xn,generateMipmaps:!1}),F.map.texture.name=O.name+".shadowMap",F.map.depthTexture=new Zr(l.x,l.y,aa),F.map.depthTexture.name=O.name+".shadowMapDepth",F.map.depthTexture.format=Ga,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Bn,F.map.depthTexture.magFilter=Bn}else O.isPointLight?(F.map=new Wv(l.x),F.map.depthTexture=new gM(l.x,ca)):(F.map=new oa(l.x,l.y),F.map.depthTexture=new Zr(l.x,l.y,ca)),F.map.depthTexture.name=O.name+".shadowMap",F.map.depthTexture.format=Ga,this.type===Bc?(F.map.depthTexture.compareFunction=mt?tp:$d,F.map.depthTexture.minFilter=Xn,F.map.depthTexture.magFilter=Xn):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Bn,F.map.depthTexture.magFilter=Bn);F.camera.updateProjectionMatrix()}const Et=F.map.isWebGLCubeRenderTarget?6:1;for(let P=0;P<Et;P++){if(F.map.isWebGLCubeRenderTarget)r.setRenderTarget(F.map,P),r.clear();else{P===0&&(r.setRenderTarget(F.map),r.clear());const Q=F.getViewport(P);h.set(c.x*Q.x,c.y*Q.y,c.x*Q.z,c.y*Q.w),X.viewport(h)}if(O.isPointLight){const Q=F.camera,vt=F.matrix,Nt=O.distance||Q.far;Nt!==Q.far&&(Q.far=Nt,Q.updateProjectionMatrix()),Zo.setFromMatrixPosition(O.matrixWorld),Q.position.copy(Zo),jh.copy(Q.position),jh.add(RA[P]),Q.up.copy(CA[P]),Q.lookAt(jh),Q.updateMatrixWorld(),vt.makeTranslation(-Zo.x,-Zo.y,-Zo.z),rv.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),F._frustum.setFromProjectionMatrix(rv,Q.coordinateSystem,Q.reversedDepth)}else F.updateMatrices(O);s=F.getFrustum(),N(I,T,F.camera,O,this.type)}F.isPointLightShadow!==!0&&this.type===Ko&&C(F,T),F.needsUpdate=!1}y=this.type,M.needsUpdate=!1,r.setRenderTarget(z,Z,B)};function C(U,I){const T=t.update(w);g.defines.VSM_SAMPLES!==U.blurSamples&&(g.defines.VSM_SAMPLES=U.blurSamples,S.defines.VSM_SAMPLES=U.blurSamples,g.needsUpdate=!0,S.needsUpdate=!0),U.mapPass===null&&(U.mapPass=new oa(l.x,l.y,{format:Ks,type:Ba})),g.uniforms.shadow_pass.value=U.map.depthTexture,g.uniforms.resolution.value=U.mapSize,g.uniforms.radius.value=U.radius,r.setRenderTarget(U.mapPass),r.clear(),r.renderBufferDirect(I,null,T,g,w,null),S.uniforms.shadow_pass.value=U.mapPass.texture,S.uniforms.resolution.value=U.mapSize,S.uniforms.radius.value=U.radius,r.setRenderTarget(U.map),r.clear(),r.renderBufferDirect(I,null,T,S,w,null)}function L(U,I,T,z){let Z=null;const B=T.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(B!==void 0)Z=B;else if(Z=T.isPointLight===!0?m:d,r.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const X=Z.uuid,ut=I.uuid;let ht=p[X];ht===void 0&&(ht={},p[X]=ht);let W=ht[ut];W===void 0&&(W=Z.clone(),ht[ut]=W,I.addEventListener("dispose",H)),Z=W}if(Z.visible=I.visible,Z.wireframe=I.wireframe,z===Ko?Z.side=I.shadowSide!==null?I.shadowSide:I.side:Z.side=I.shadowSide!==null?I.shadowSide:x[I.side],Z.alphaMap=I.alphaMap,Z.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,Z.map=I.map,Z.clipShadows=I.clipShadows,Z.clippingPlanes=I.clippingPlanes,Z.clipIntersection=I.clipIntersection,Z.displacementMap=I.displacementMap,Z.displacementScale=I.displacementScale,Z.displacementBias=I.displacementBias,Z.wireframeLinewidth=I.wireframeLinewidth,Z.linewidth=I.linewidth,T.isPointLight===!0&&Z.isMeshDistanceMaterial===!0){const X=r.properties.get(Z);X.light=T}return Z}function N(U,I,T,z,Z){if(U.visible===!1)return;if(U.layers.test(I.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&Z===Ko)&&(!U.frustumCulled||s.intersectsObject(U))){U.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,U.matrixWorld);const ut=t.update(U),ht=U.material;if(Array.isArray(ht)){const W=ut.groups;for(let O=0,F=W.length;O<F;O++){const lt=W[O],mt=ht[lt.materialIndex];if(mt&&mt.visible){const Et=L(U,mt,z,Z);U.onBeforeShadow(r,U,I,T,ut,Et,lt),r.renderBufferDirect(T,null,ut,Et,U,lt),U.onAfterShadow(r,U,I,T,ut,Et,lt)}}}else if(ht.visible){const W=L(U,ht,z,Z);U.onBeforeShadow(r,U,I,T,ut,W,null),r.renderBufferDirect(T,null,ut,W,U,null),U.onAfterShadow(r,U,I,T,ut,W,null)}}const X=U.children;for(let ut=0,ht=X.length;ut<ht;ut++)N(X[ut],I,T,z,Z)}function H(U){U.target.removeEventListener("dispose",H);for(const T in p){const z=p[T],Z=U.target.uuid;Z in z&&(z[Z].dispose(),delete z[Z])}}}function DA(r,t){function i(){let V=!1;const bt=new gn;let dt=null;const Lt=new gn(0,0,0,0);return{setMask:function(yt){dt!==yt&&!V&&(r.colorMask(yt,yt,yt,yt),dt=yt)},setLocked:function(yt){V=yt},setClear:function(yt,xt,Gt,qt,Se){Se===!0&&(yt*=qt,xt*=qt,Gt*=qt),bt.set(yt,xt,Gt,qt),Lt.equals(bt)===!1&&(r.clearColor(yt,xt,Gt,qt),Lt.copy(bt))},reset:function(){V=!1,dt=null,Lt.set(-1,0,0,0)}}}function s(){let V=!1,bt=!1,dt=null,Lt=null,yt=null;return{setReversed:function(xt){if(bt!==xt){const Gt=t.get("EXT_clip_control");xt?Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.ZERO_TO_ONE_EXT):Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.NEGATIVE_ONE_TO_ONE_EXT),bt=xt;const qt=yt;yt=null,this.setClear(qt)}},getReversed:function(){return bt},setTest:function(xt){xt?Dt(r.DEPTH_TEST):Ft(r.DEPTH_TEST)},setMask:function(xt){dt!==xt&&!V&&(r.depthMask(xt),dt=xt)},setFunc:function(xt){if(bt&&(xt=Xy[xt]),Lt!==xt){switch(xt){case $h:r.depthFunc(r.NEVER);break;case td:r.depthFunc(r.ALWAYS);break;case ed:r.depthFunc(r.LESS);break;case Yr:r.depthFunc(r.LEQUAL);break;case nd:r.depthFunc(r.EQUAL);break;case id:r.depthFunc(r.GEQUAL);break;case ad:r.depthFunc(r.GREATER);break;case sd:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Lt=xt}},setLocked:function(xt){V=xt},setClear:function(xt){yt!==xt&&(yt=xt,bt&&(xt=1-xt),r.clearDepth(xt))},reset:function(){V=!1,dt=null,Lt=null,yt=null,bt=!1}}}function l(){let V=!1,bt=null,dt=null,Lt=null,yt=null,xt=null,Gt=null,qt=null,Se=null;return{setTest:function(fe){V||(fe?Dt(r.STENCIL_TEST):Ft(r.STENCIL_TEST))},setMask:function(fe){bt!==fe&&!V&&(r.stencilMask(fe),bt=fe)},setFunc:function(fe,_n,vn){(dt!==fe||Lt!==_n||yt!==vn)&&(r.stencilFunc(fe,_n,vn),dt=fe,Lt=_n,yt=vn)},setOp:function(fe,_n,vn){(xt!==fe||Gt!==_n||qt!==vn)&&(r.stencilOp(fe,_n,vn),xt=fe,Gt=_n,qt=vn)},setLocked:function(fe){V=fe},setClear:function(fe){Se!==fe&&(r.clearStencil(fe),Se=fe)},reset:function(){V=!1,bt=null,dt=null,Lt=null,yt=null,xt=null,Gt=null,qt=null,Se=null}}}const c=new i,h=new s,d=new l,m=new WeakMap,p=new WeakMap;let v={},x={},g={},S=new WeakMap,E=[],w=null,M=!1,y=null,C=null,L=null,N=null,H=null,U=null,I=null,T=new ve(0,0,0),z=0,Z=!1,B=null,X=null,ut=null,ht=null,W=null;const O=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,lt=0;const mt=r.getParameter(r.VERSION);mt.indexOf("WebGL")!==-1?(lt=parseFloat(/^WebGL (\d)/.exec(mt)[1]),F=lt>=1):mt.indexOf("OpenGL ES")!==-1&&(lt=parseFloat(/^OpenGL ES (\d)/.exec(mt)[1]),F=lt>=2);let Et=null,P={};const Q=r.getParameter(r.SCISSOR_BOX),vt=r.getParameter(r.VIEWPORT),Nt=new gn().fromArray(Q),Ot=new gn().fromArray(vt);function ct(V,bt,dt,Lt){const yt=new Uint8Array(4),xt=r.createTexture();r.bindTexture(V,xt),r.texParameteri(V,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(V,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Gt=0;Gt<dt;Gt++)V===r.TEXTURE_3D||V===r.TEXTURE_2D_ARRAY?r.texImage3D(bt,0,r.RGBA,1,1,Lt,0,r.RGBA,r.UNSIGNED_BYTE,yt):r.texImage2D(bt+Gt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,yt);return xt}const Mt={};Mt[r.TEXTURE_2D]=ct(r.TEXTURE_2D,r.TEXTURE_2D,1),Mt[r.TEXTURE_CUBE_MAP]=ct(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Mt[r.TEXTURE_2D_ARRAY]=ct(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Mt[r.TEXTURE_3D]=ct(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),Dt(r.DEPTH_TEST),h.setFunc(Yr),hn(!1),Ve(i_),Dt(r.CULL_FACE),Fe(Ia);function Dt(V){v[V]!==!0&&(r.enable(V),v[V]=!0)}function Ft(V){v[V]!==!1&&(r.disable(V),v[V]=!1)}function ie(V,bt){return g[V]!==bt?(r.bindFramebuffer(V,bt),g[V]=bt,V===r.DRAW_FRAMEBUFFER&&(g[r.FRAMEBUFFER]=bt),V===r.FRAMEBUFFER&&(g[r.DRAW_FRAMEBUFFER]=bt),!0):!1}function Kt(V,bt){let dt=E,Lt=!1;if(V){dt=S.get(bt),dt===void 0&&(dt=[],S.set(bt,dt));const yt=V.textures;if(dt.length!==yt.length||dt[0]!==r.COLOR_ATTACHMENT0){for(let xt=0,Gt=yt.length;xt<Gt;xt++)dt[xt]=r.COLOR_ATTACHMENT0+xt;dt.length=yt.length,Lt=!0}}else dt[0]!==r.BACK&&(dt[0]=r.BACK,Lt=!0);Lt&&r.drawBuffers(dt)}function se(V){return w!==V?(r.useProgram(V),w=V,!0):!1}const oe={[Ws]:r.FUNC_ADD,[dy]:r.FUNC_SUBTRACT,[py]:r.FUNC_REVERSE_SUBTRACT};oe[my]=r.MIN,oe[gy]=r.MAX;const xe={[_y]:r.ZERO,[vy]:r.ONE,[xy]:r.SRC_COLOR,[Qh]:r.SRC_ALPHA,[Ty]:r.SRC_ALPHA_SATURATE,[by]:r.DST_COLOR,[yy]:r.DST_ALPHA,[Sy]:r.ONE_MINUS_SRC_COLOR,[Jh]:r.ONE_MINUS_SRC_ALPHA,[Ey]:r.ONE_MINUS_DST_COLOR,[My]:r.ONE_MINUS_DST_ALPHA,[Ay]:r.CONSTANT_COLOR,[Ry]:r.ONE_MINUS_CONSTANT_COLOR,[Cy]:r.CONSTANT_ALPHA,[wy]:r.ONE_MINUS_CONSTANT_ALPHA};function Fe(V,bt,dt,Lt,yt,xt,Gt,qt,Se,fe){if(V===Ia){M===!0&&(Ft(r.BLEND),M=!1);return}if(M===!1&&(Dt(r.BLEND),M=!0),V!==hy){if(V!==y||fe!==Z){if((C!==Ws||H!==Ws)&&(r.blendEquation(r.FUNC_ADD),C=Ws,H=Ws),fe)switch(V){case Wr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Jo:r.blendFunc(r.ONE,r.ONE);break;case a_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case s_:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Ue("WebGLState: Invalid blending: ",V);break}else switch(V){case Wr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Jo:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case a_:Ue("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case s_:Ue("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ue("WebGLState: Invalid blending: ",V);break}L=null,N=null,U=null,I=null,T.set(0,0,0),z=0,y=V,Z=fe}return}yt=yt||bt,xt=xt||dt,Gt=Gt||Lt,(bt!==C||yt!==H)&&(r.blendEquationSeparate(oe[bt],oe[yt]),C=bt,H=yt),(dt!==L||Lt!==N||xt!==U||Gt!==I)&&(r.blendFuncSeparate(xe[dt],xe[Lt],xe[xt],xe[Gt]),L=dt,N=Lt,U=xt,I=Gt),(qt.equals(T)===!1||Se!==z)&&(r.blendColor(qt.r,qt.g,qt.b,Se),T.copy(qt),z=Se),y=V,Z=!1}function ue(V,bt){V.side===ia?Ft(r.CULL_FACE):Dt(r.CULL_FACE);let dt=V.side===Jn;bt&&(dt=!dt),hn(dt),V.blending===Wr&&V.transparent===!1?Fe(Ia):Fe(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),h.setFunc(V.depthFunc),h.setTest(V.depthTest),h.setMask(V.depthWrite),c.setMask(V.colorWrite);const Lt=V.stencilWrite;d.setTest(Lt),Lt&&(d.setMask(V.stencilWriteMask),d.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),d.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),q(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?Dt(r.SAMPLE_ALPHA_TO_COVERAGE):Ft(r.SAMPLE_ALPHA_TO_COVERAGE)}function hn(V){B!==V&&(V?r.frontFace(r.CW):r.frontFace(r.CCW),B=V)}function Ve(V){V!==uy?(Dt(r.CULL_FACE),V!==X&&(V===i_?r.cullFace(r.BACK):V===fy?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ft(r.CULL_FACE),X=V}function Mn(V){V!==ut&&(F&&r.lineWidth(V),ut=V)}function q(V,bt,dt){V?(Dt(r.POLYGON_OFFSET_FILL),(ht!==bt||W!==dt)&&(ht=bt,W=dt,h.getReversed()&&(bt=-bt),r.polygonOffset(bt,dt))):Ft(r.POLYGON_OFFSET_FILL)}function en(V){V?Dt(r.SCISSOR_TEST):Ft(r.SCISSOR_TEST)}function de(V){V===void 0&&(V=r.TEXTURE0+O-1),Et!==V&&(r.activeTexture(V),Et=V)}function Oe(V,bt,dt){dt===void 0&&(Et===null?dt=r.TEXTURE0+O-1:dt=Et);let Lt=P[dt];Lt===void 0&&(Lt={type:void 0,texture:void 0},P[dt]=Lt),(Lt.type!==V||Lt.texture!==bt)&&(Et!==dt&&(r.activeTexture(dt),Et=dt),r.bindTexture(V,bt||Mt[V]),Lt.type=V,Lt.texture=bt)}function Ut(){const V=P[Et];V!==void 0&&V.type!==void 0&&(r.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function Le(){try{r.compressedTexImage2D(...arguments)}catch(V){Ue("WebGLState:",V)}}function D(){try{r.compressedTexImage3D(...arguments)}catch(V){Ue("WebGLState:",V)}}function b(){try{r.texSubImage2D(...arguments)}catch(V){Ue("WebGLState:",V)}}function $(){try{r.texSubImage3D(...arguments)}catch(V){Ue("WebGLState:",V)}}function gt(){try{r.compressedTexSubImage2D(...arguments)}catch(V){Ue("WebGLState:",V)}}function Tt(){try{r.compressedTexSubImage3D(...arguments)}catch(V){Ue("WebGLState:",V)}}function Pt(){try{r.texStorage2D(...arguments)}catch(V){Ue("WebGLState:",V)}}function zt(){try{r.texStorage3D(...arguments)}catch(V){Ue("WebGLState:",V)}}function tt(){try{r.texImage2D(...arguments)}catch(V){Ue("WebGLState:",V)}}function J(){try{r.texImage3D(...arguments)}catch(V){Ue("WebGLState:",V)}}function Ct(V){return x[V]!==void 0?x[V]:r.getParameter(V)}function wt(V,bt){x[V]!==bt&&(r.pixelStorei(V,bt),x[V]=bt)}function At(V){Nt.equals(V)===!1&&(r.scissor(V.x,V.y,V.z,V.w),Nt.copy(V))}function Rt(V){Ot.equals(V)===!1&&(r.viewport(V.x,V.y,V.z,V.w),Ot.copy(V))}function Wt(V,bt){let dt=p.get(bt);dt===void 0&&(dt=new WeakMap,p.set(bt,dt));let Lt=dt.get(V);Lt===void 0&&(Lt=r.getUniformBlockIndex(bt,V.name),dt.set(V,Lt))}function te(V,bt){const Lt=p.get(bt).get(V);m.get(bt)!==Lt&&(r.uniformBlockBinding(bt,Lt,V.__bindingPointIndex),m.set(bt,Lt))}function re(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),h.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),v={},x={},Et=null,P={},g={},S=new WeakMap,E=[],w=null,M=!1,y=null,C=null,L=null,N=null,H=null,U=null,I=null,T=new ve(0,0,0),z=0,Z=!1,B=null,X=null,ut=null,ht=null,W=null,Nt.set(0,0,r.canvas.width,r.canvas.height),Ot.set(0,0,r.canvas.width,r.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:Dt,disable:Ft,bindFramebuffer:ie,drawBuffers:Kt,useProgram:se,setBlending:Fe,setMaterial:ue,setFlipSided:hn,setCullFace:Ve,setLineWidth:Mn,setPolygonOffset:q,setScissorTest:en,activeTexture:de,bindTexture:Oe,unbindTexture:Ut,compressedTexImage2D:Le,compressedTexImage3D:D,texImage2D:tt,texImage3D:J,pixelStorei:wt,getParameter:Ct,updateUBOMapping:Wt,uniformBlockBinding:te,texStorage2D:Pt,texStorage3D:zt,texSubImage2D:b,texSubImage3D:$,compressedTexSubImage2D:gt,compressedTexSubImage3D:Tt,scissor:At,viewport:Rt,reset:re}}function NA(r,t,i,s,l,c,h){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new $t,v=new WeakMap,x=new Set;let g;const S=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(D,b){return E?new OffscreenCanvas(D,b):Zc("canvas")}function M(D,b,$){let gt=1;const Tt=Le(D);if((Tt.width>$||Tt.height>$)&&(gt=$/Math.max(Tt.width,Tt.height)),gt<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const Pt=Math.floor(gt*Tt.width),zt=Math.floor(gt*Tt.height);g===void 0&&(g=w(Pt,zt));const tt=b?w(Pt,zt):g;return tt.width=Pt,tt.height=zt,tt.getContext("2d").drawImage(D,0,0,Pt,zt),le("WebGLRenderer: Texture has been resized from ("+Tt.width+"x"+Tt.height+") to ("+Pt+"x"+zt+")."),tt}else return"data"in D&&le("WebGLRenderer: Image in DataTexture is too big ("+Tt.width+"x"+Tt.height+")."),D;return D}function y(D){return D.generateMipmaps}function C(D){r.generateMipmap(D)}function L(D){return D.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?r.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function N(D,b,$,gt,Tt,Pt=!1){if(D!==null){if(r[D]!==void 0)return r[D];le("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let zt;gt&&(zt=t.get("EXT_texture_norm16"),zt||le("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let tt=b;if(b===r.RED&&($===r.FLOAT&&(tt=r.R32F),$===r.HALF_FLOAT&&(tt=r.R16F),$===r.UNSIGNED_BYTE&&(tt=r.R8),$===r.UNSIGNED_SHORT&&zt&&(tt=zt.R16_EXT),$===r.SHORT&&zt&&(tt=zt.R16_SNORM_EXT)),b===r.RED_INTEGER&&($===r.UNSIGNED_BYTE&&(tt=r.R8UI),$===r.UNSIGNED_SHORT&&(tt=r.R16UI),$===r.UNSIGNED_INT&&(tt=r.R32UI),$===r.BYTE&&(tt=r.R8I),$===r.SHORT&&(tt=r.R16I),$===r.INT&&(tt=r.R32I)),b===r.RG&&($===r.FLOAT&&(tt=r.RG32F),$===r.HALF_FLOAT&&(tt=r.RG16F),$===r.UNSIGNED_BYTE&&(tt=r.RG8),$===r.UNSIGNED_SHORT&&zt&&(tt=zt.RG16_EXT),$===r.SHORT&&zt&&(tt=zt.RG16_SNORM_EXT)),b===r.RG_INTEGER&&($===r.UNSIGNED_BYTE&&(tt=r.RG8UI),$===r.UNSIGNED_SHORT&&(tt=r.RG16UI),$===r.UNSIGNED_INT&&(tt=r.RG32UI),$===r.BYTE&&(tt=r.RG8I),$===r.SHORT&&(tt=r.RG16I),$===r.INT&&(tt=r.RG32I)),b===r.RGB_INTEGER&&($===r.UNSIGNED_BYTE&&(tt=r.RGB8UI),$===r.UNSIGNED_SHORT&&(tt=r.RGB16UI),$===r.UNSIGNED_INT&&(tt=r.RGB32UI),$===r.BYTE&&(tt=r.RGB8I),$===r.SHORT&&(tt=r.RGB16I),$===r.INT&&(tt=r.RGB32I)),b===r.RGBA_INTEGER&&($===r.UNSIGNED_BYTE&&(tt=r.RGBA8UI),$===r.UNSIGNED_SHORT&&(tt=r.RGBA16UI),$===r.UNSIGNED_INT&&(tt=r.RGBA32UI),$===r.BYTE&&(tt=r.RGBA8I),$===r.SHORT&&(tt=r.RGBA16I),$===r.INT&&(tt=r.RGBA32I)),b===r.RGB&&($===r.UNSIGNED_SHORT&&zt&&(tt=zt.RGB16_EXT),$===r.SHORT&&zt&&(tt=zt.RGB16_SNORM_EXT),$===r.UNSIGNED_INT_5_9_9_9_REV&&(tt=r.RGB9_E5),$===r.UNSIGNED_INT_10F_11F_11F_REV&&(tt=r.R11F_G11F_B10F)),b===r.RGBA){const J=Pt?jc:Ce.getTransfer(Tt);$===r.FLOAT&&(tt=r.RGBA32F),$===r.HALF_FLOAT&&(tt=r.RGBA16F),$===r.UNSIGNED_BYTE&&(tt=J===je?r.SRGB8_ALPHA8:r.RGBA8),$===r.UNSIGNED_SHORT&&zt&&(tt=zt.RGBA16_EXT),$===r.SHORT&&zt&&(tt=zt.RGBA16_SNORM_EXT),$===r.UNSIGNED_SHORT_4_4_4_4&&(tt=r.RGBA4),$===r.UNSIGNED_SHORT_5_5_5_1&&(tt=r.RGB5_A1)}return(tt===r.R16F||tt===r.R32F||tt===r.RG16F||tt===r.RG32F||tt===r.RGBA16F||tt===r.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function H(D,b){let $;return D?b===null||b===ca||b===il?$=r.DEPTH24_STENCIL8:b===aa?$=r.DEPTH32F_STENCIL8:b===nl&&($=r.DEPTH24_STENCIL8,le("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===ca||b===il?$=r.DEPTH_COMPONENT24:b===aa?$=r.DEPTH_COMPONENT32F:b===nl&&($=r.DEPTH_COMPONENT16),$}function U(D,b){return y(D)===!0||D.isFramebufferTexture&&D.minFilter!==Bn&&D.minFilter!==Xn?Math.log2(Math.max(b.width,b.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?b.mipmaps.length:1}function I(D){const b=D.target;b.removeEventListener("dispose",I),z(b),b.isVideoTexture&&v.delete(b),b.isHTMLTexture&&x.delete(b)}function T(D){const b=D.target;b.removeEventListener("dispose",T),B(b)}function z(D){const b=s.get(D);if(b.__webglInit===void 0)return;const $=D.source,gt=S.get($);if(gt){const Tt=gt[b.__cacheKey];Tt.usedTimes--,Tt.usedTimes===0&&Z(D),Object.keys(gt).length===0&&S.delete($)}s.remove(D)}function Z(D){const b=s.get(D);r.deleteTexture(b.__webglTexture);const $=D.source,gt=S.get($);delete gt[b.__cacheKey],h.memory.textures--}function B(D){const b=s.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),s.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let gt=0;gt<6;gt++){if(Array.isArray(b.__webglFramebuffer[gt]))for(let Tt=0;Tt<b.__webglFramebuffer[gt].length;Tt++)r.deleteFramebuffer(b.__webglFramebuffer[gt][Tt]);else r.deleteFramebuffer(b.__webglFramebuffer[gt]);b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer[gt])}else{if(Array.isArray(b.__webglFramebuffer))for(let gt=0;gt<b.__webglFramebuffer.length;gt++)r.deleteFramebuffer(b.__webglFramebuffer[gt]);else r.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&r.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let gt=0;gt<b.__webglColorRenderbuffer.length;gt++)b.__webglColorRenderbuffer[gt]&&r.deleteRenderbuffer(b.__webglColorRenderbuffer[gt]);b.__webglDepthRenderbuffer&&r.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const $=D.textures;for(let gt=0,Tt=$.length;gt<Tt;gt++){const Pt=s.get($[gt]);Pt.__webglTexture&&(r.deleteTexture(Pt.__webglTexture),h.memory.textures--),s.remove($[gt])}s.remove(D)}let X=0;function ut(){X=0}function ht(){return X}function W(D){X=D}function O(){const D=X;return D>=l.maxTextures&&le("WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+l.maxTextures),X+=1,D}function F(D){const b=[];return b.push(D.wrapS),b.push(D.wrapT),b.push(D.wrapR||0),b.push(D.magFilter),b.push(D.minFilter),b.push(D.anisotropy),b.push(D.internalFormat),b.push(D.format),b.push(D.type),b.push(D.generateMipmaps),b.push(D.premultiplyAlpha),b.push(D.flipY),b.push(D.unpackAlignment),b.push(D.colorSpace),b.join()}function lt(D,b){const $=s.get(D);if(D.isVideoTexture&&Oe(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&$.__version!==D.version){const gt=D.image;if(gt===null)le("WebGLRenderer: Texture marked for update but no image data found.");else if(gt.complete===!1)le("WebGLRenderer: Texture marked for update but image is incomplete");else{Ft($,D,b);return}}else D.isExternalTexture&&($.__webglTexture=D.sourceTexture?D.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,$.__webglTexture,r.TEXTURE0+b)}function mt(D,b){const $=s.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&$.__version!==D.version){Ft($,D,b);return}else D.isExternalTexture&&($.__webglTexture=D.sourceTexture?D.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,$.__webglTexture,r.TEXTURE0+b)}function Et(D,b){const $=s.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&$.__version!==D.version){Ft($,D,b);return}i.bindTexture(r.TEXTURE_3D,$.__webglTexture,r.TEXTURE0+b)}function P(D,b){const $=s.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&$.__version!==D.version){ie($,D,b);return}i.bindTexture(r.TEXTURE_CUBE_MAP,$.__webglTexture,r.TEXTURE0+b)}const Q={[rd]:r.REPEAT,[za]:r.CLAMP_TO_EDGE,[od]:r.MIRRORED_REPEAT},vt={[Bn]:r.NEAREST,[Uy]:r.NEAREST_MIPMAP_NEAREST,[_c]:r.NEAREST_MIPMAP_LINEAR,[Xn]:r.LINEAR,[ph]:r.LINEAR_MIPMAP_NEAREST,[Ys]:r.LINEAR_MIPMAP_LINEAR},Nt={[Py]:r.NEVER,[Gy]:r.ALWAYS,[zy]:r.LESS,[$d]:r.LEQUAL,[Iy]:r.EQUAL,[tp]:r.GEQUAL,[Fy]:r.GREATER,[By]:r.NOTEQUAL};function Ot(D,b){if(b.type===aa&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Xn||b.magFilter===ph||b.magFilter===_c||b.magFilter===Ys||b.minFilter===Xn||b.minFilter===ph||b.minFilter===_c||b.minFilter===Ys)&&le("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(D,r.TEXTURE_WRAP_S,Q[b.wrapS]),r.texParameteri(D,r.TEXTURE_WRAP_T,Q[b.wrapT]),(D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY)&&r.texParameteri(D,r.TEXTURE_WRAP_R,Q[b.wrapR]),r.texParameteri(D,r.TEXTURE_MAG_FILTER,vt[b.magFilter]),r.texParameteri(D,r.TEXTURE_MIN_FILTER,vt[b.minFilter]),b.compareFunction&&(r.texParameteri(D,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(D,r.TEXTURE_COMPARE_FUNC,Nt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Bn||b.minFilter!==_c&&b.minFilter!==Ys||b.type===aa&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||s.get(b).__currentAnisotropy){const $=t.get("EXT_texture_filter_anisotropic");r.texParameterf(D,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),s.get(b).__currentAnisotropy=b.anisotropy}}}function ct(D,b){let $=!1;D.__webglInit===void 0&&(D.__webglInit=!0,b.addEventListener("dispose",I));const gt=b.source;let Tt=S.get(gt);Tt===void 0&&(Tt={},S.set(gt,Tt));const Pt=F(b);if(Pt!==D.__cacheKey){Tt[Pt]===void 0&&(Tt[Pt]={texture:r.createTexture(),usedTimes:0},h.memory.textures++,$=!0),Tt[Pt].usedTimes++;const zt=Tt[D.__cacheKey];zt!==void 0&&(Tt[D.__cacheKey].usedTimes--,zt.usedTimes===0&&Z(b)),D.__cacheKey=Pt,D.__webglTexture=Tt[Pt].texture}return $}function Mt(D,b,$){return Math.floor(Math.floor(D/$)/b)}function Dt(D,b,$,gt){const Pt=D.updateRanges;if(Pt.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,b.width,b.height,$,gt,b.data);else{Pt.sort((wt,At)=>wt.start-At.start);let zt=0;for(let wt=1;wt<Pt.length;wt++){const At=Pt[zt],Rt=Pt[wt],Wt=At.start+At.count,te=Mt(Rt.start,b.width,4),re=Mt(At.start,b.width,4);Rt.start<=Wt+1&&te===re&&Mt(Rt.start+Rt.count-1,b.width,4)===te?At.count=Math.max(At.count,Rt.start+Rt.count-At.start):(++zt,Pt[zt]=Rt)}Pt.length=zt+1;const tt=i.getParameter(r.UNPACK_ROW_LENGTH),J=i.getParameter(r.UNPACK_SKIP_PIXELS),Ct=i.getParameter(r.UNPACK_SKIP_ROWS);i.pixelStorei(r.UNPACK_ROW_LENGTH,b.width);for(let wt=0,At=Pt.length;wt<At;wt++){const Rt=Pt[wt],Wt=Math.floor(Rt.start/4),te=Math.ceil(Rt.count/4),re=Wt%b.width,V=Math.floor(Wt/b.width),bt=te,dt=1;i.pixelStorei(r.UNPACK_SKIP_PIXELS,re),i.pixelStorei(r.UNPACK_SKIP_ROWS,V),i.texSubImage2D(r.TEXTURE_2D,0,re,V,bt,dt,$,gt,b.data)}D.clearUpdateRanges(),i.pixelStorei(r.UNPACK_ROW_LENGTH,tt),i.pixelStorei(r.UNPACK_SKIP_PIXELS,J),i.pixelStorei(r.UNPACK_SKIP_ROWS,Ct)}}function Ft(D,b,$){let gt=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(gt=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(gt=r.TEXTURE_3D);const Tt=ct(D,b),Pt=b.source;i.bindTexture(gt,D.__webglTexture,r.TEXTURE0+$);const zt=s.get(Pt);if(Pt.version!==zt.__version||Tt===!0){if(i.activeTexture(r.TEXTURE0+$),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){const dt=Ce.getPrimaries(Ce.workingColorSpace),Lt=b.colorSpace===vs?null:Ce.getPrimaries(b.colorSpace),yt=b.colorSpace===vs||dt===Lt?r.NONE:r.BROWSER_DEFAULT_WEBGL;i.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt)}i.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment);let J=M(b.image,!1,l.maxTextureSize);J=Ut(b,J);const Ct=c.convert(b.format,b.colorSpace),wt=c.convert(b.type);let At=N(b.internalFormat,Ct,wt,b.normalized,b.colorSpace,b.isVideoTexture);Ot(gt,b);let Rt;const Wt=b.mipmaps,te=b.isVideoTexture!==!0,re=zt.__version===void 0||Tt===!0,V=Pt.dataReady,bt=U(b,J);if(b.isDepthTexture)At=H(b.format===js,b.type),re&&(te?i.texStorage2D(r.TEXTURE_2D,1,At,J.width,J.height):i.texImage2D(r.TEXTURE_2D,0,At,J.width,J.height,0,Ct,wt,null));else if(b.isDataTexture)if(Wt.length>0){te&&re&&i.texStorage2D(r.TEXTURE_2D,bt,At,Wt[0].width,Wt[0].height);for(let dt=0,Lt=Wt.length;dt<Lt;dt++)Rt=Wt[dt],te?V&&i.texSubImage2D(r.TEXTURE_2D,dt,0,0,Rt.width,Rt.height,Ct,wt,Rt.data):i.texImage2D(r.TEXTURE_2D,dt,At,Rt.width,Rt.height,0,Ct,wt,Rt.data);b.generateMipmaps=!1}else te?(re&&i.texStorage2D(r.TEXTURE_2D,bt,At,J.width,J.height),V&&Dt(b,J,Ct,wt)):i.texImage2D(r.TEXTURE_2D,0,At,J.width,J.height,0,Ct,wt,J.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){te&&re&&i.texStorage3D(r.TEXTURE_2D_ARRAY,bt,At,Wt[0].width,Wt[0].height,J.depth);for(let dt=0,Lt=Wt.length;dt<Lt;dt++)if(Rt=Wt[dt],b.format!==qi)if(Ct!==null)if(te){if(V)if(b.layerUpdates.size>0){const yt=I_(Rt.width,Rt.height,b.format,b.type);for(const xt of b.layerUpdates){const Gt=Rt.data.subarray(xt*yt/Rt.data.BYTES_PER_ELEMENT,(xt+1)*yt/Rt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,dt,0,0,xt,Rt.width,Rt.height,1,Ct,Gt)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,dt,0,0,0,Rt.width,Rt.height,J.depth,Ct,Rt.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,dt,At,Rt.width,Rt.height,J.depth,0,Rt.data,0,0);else le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else te?V&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,dt,0,0,0,Rt.width,Rt.height,J.depth,Ct,wt,Rt.data):i.texImage3D(r.TEXTURE_2D_ARRAY,dt,At,Rt.width,Rt.height,J.depth,0,Ct,wt,Rt.data)}else{te&&re&&i.texStorage2D(r.TEXTURE_2D,bt,At,Wt[0].width,Wt[0].height);for(let dt=0,Lt=Wt.length;dt<Lt;dt++)Rt=Wt[dt],b.format!==qi?Ct!==null?te?V&&i.compressedTexSubImage2D(r.TEXTURE_2D,dt,0,0,Rt.width,Rt.height,Ct,Rt.data):i.compressedTexImage2D(r.TEXTURE_2D,dt,At,Rt.width,Rt.height,0,Rt.data):le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):te?V&&i.texSubImage2D(r.TEXTURE_2D,dt,0,0,Rt.width,Rt.height,Ct,wt,Rt.data):i.texImage2D(r.TEXTURE_2D,dt,At,Rt.width,Rt.height,0,Ct,wt,Rt.data)}else if(b.isDataArrayTexture)if(te){if(re&&i.texStorage3D(r.TEXTURE_2D_ARRAY,bt,At,J.width,J.height,J.depth),V)if(b.layerUpdates.size>0){const dt=I_(J.width,J.height,b.format,b.type);for(const Lt of b.layerUpdates){const yt=J.data.subarray(Lt*dt/J.data.BYTES_PER_ELEMENT,(Lt+1)*dt/J.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Lt,J.width,J.height,1,Ct,wt,yt)}b.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,Ct,wt,J.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,At,J.width,J.height,J.depth,0,Ct,wt,J.data);else if(b.isData3DTexture)te?(re&&i.texStorage3D(r.TEXTURE_3D,bt,At,J.width,J.height,J.depth),V&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,Ct,wt,J.data)):i.texImage3D(r.TEXTURE_3D,0,At,J.width,J.height,J.depth,0,Ct,wt,J.data);else if(b.isFramebufferTexture){if(re)if(te)i.texStorage2D(r.TEXTURE_2D,bt,At,J.width,J.height);else{let dt=J.width,Lt=J.height;for(let yt=0;yt<bt;yt++)i.texImage2D(r.TEXTURE_2D,yt,At,dt,Lt,0,Ct,wt,null),dt>>=1,Lt>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in r){const dt=r.canvas;if(dt.hasAttribute("layoutsubtree")||dt.setAttribute("layoutsubtree","true"),J.parentNode!==dt){dt.appendChild(J),x.add(b),dt.onpaint=qt=>{const Se=qt.changedElements;for(const fe of x)Se.includes(fe.image)&&(fe.needsUpdate=!0)},dt.requestPaint();return}const Lt=0,yt=r.RGBA,xt=r.RGBA,Gt=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,Lt,yt,xt,Gt,J),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(Wt.length>0){if(te&&re){const dt=Le(Wt[0]);i.texStorage2D(r.TEXTURE_2D,bt,At,dt.width,dt.height)}for(let dt=0,Lt=Wt.length;dt<Lt;dt++)Rt=Wt[dt],te?V&&i.texSubImage2D(r.TEXTURE_2D,dt,0,0,Ct,wt,Rt):i.texImage2D(r.TEXTURE_2D,dt,At,Ct,wt,Rt);b.generateMipmaps=!1}else if(te){if(re){const dt=Le(J);i.texStorage2D(r.TEXTURE_2D,bt,At,dt.width,dt.height)}V&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Ct,wt,J)}else i.texImage2D(r.TEXTURE_2D,0,At,Ct,wt,J);y(b)&&C(gt),zt.__version=Pt.version,b.onUpdate&&b.onUpdate(b)}D.__version=b.version}function ie(D,b,$){if(b.image.length!==6)return;const gt=ct(D,b),Tt=b.source;i.bindTexture(r.TEXTURE_CUBE_MAP,D.__webglTexture,r.TEXTURE0+$);const Pt=s.get(Tt);if(Tt.version!==Pt.__version||gt===!0){i.activeTexture(r.TEXTURE0+$);const zt=Ce.getPrimaries(Ce.workingColorSpace),tt=b.colorSpace===vs?null:Ce.getPrimaries(b.colorSpace),J=b.colorSpace===vs||zt===tt?r.NONE:r.BROWSER_DEFAULT_WEBGL;i.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);const Ct=b.isCompressedTexture||b.image[0].isCompressedTexture,wt=b.image[0]&&b.image[0].isDataTexture,At=[];for(let xt=0;xt<6;xt++)!Ct&&!wt?At[xt]=M(b.image[xt],!0,l.maxCubemapSize):At[xt]=wt?b.image[xt].image:b.image[xt],At[xt]=Ut(b,At[xt]);const Rt=At[0],Wt=c.convert(b.format,b.colorSpace),te=c.convert(b.type),re=N(b.internalFormat,Wt,te,b.normalized,b.colorSpace),V=b.isVideoTexture!==!0,bt=Pt.__version===void 0||gt===!0,dt=Tt.dataReady;let Lt=U(b,Rt);Ot(r.TEXTURE_CUBE_MAP,b);let yt;if(Ct){V&&bt&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Lt,re,Rt.width,Rt.height);for(let xt=0;xt<6;xt++){yt=At[xt].mipmaps;for(let Gt=0;Gt<yt.length;Gt++){const qt=yt[Gt];b.format!==qi?Wt!==null?V?dt&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Gt,0,0,qt.width,qt.height,Wt,qt.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Gt,re,qt.width,qt.height,0,qt.data):le("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?dt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Gt,0,0,qt.width,qt.height,Wt,te,qt.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Gt,re,qt.width,qt.height,0,Wt,te,qt.data)}}}else{if(yt=b.mipmaps,V&&bt){yt.length>0&&Lt++;const xt=Le(At[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Lt,re,xt.width,xt.height)}for(let xt=0;xt<6;xt++)if(wt){V?dt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,At[xt].width,At[xt].height,Wt,te,At[xt].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,re,At[xt].width,At[xt].height,0,Wt,te,At[xt].data);for(let Gt=0;Gt<yt.length;Gt++){const Se=yt[Gt].image[xt].image;V?dt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Gt+1,0,0,Se.width,Se.height,Wt,te,Se.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Gt+1,re,Se.width,Se.height,0,Wt,te,Se.data)}}else{V?dt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,Wt,te,At[xt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,re,Wt,te,At[xt]);for(let Gt=0;Gt<yt.length;Gt++){const qt=yt[Gt];V?dt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Gt+1,0,0,Wt,te,qt.image[xt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Gt+1,re,Wt,te,qt.image[xt])}}}y(b)&&C(r.TEXTURE_CUBE_MAP),Pt.__version=Tt.version,b.onUpdate&&b.onUpdate(b)}D.__version=b.version}function Kt(D,b,$,gt,Tt,Pt){const zt=c.convert($.format,$.colorSpace),tt=c.convert($.type),J=N($.internalFormat,zt,tt,$.normalized,$.colorSpace),Ct=s.get(b),wt=s.get($);if(wt.__renderTarget=b,!Ct.__hasExternalTextures){const At=Math.max(1,b.width>>Pt),Rt=Math.max(1,b.height>>Pt);Tt===r.TEXTURE_3D||Tt===r.TEXTURE_2D_ARRAY?i.texImage3D(Tt,Pt,J,At,Rt,b.depth,0,zt,tt,null):i.texImage2D(Tt,Pt,J,At,Rt,0,zt,tt,null)}i.bindFramebuffer(r.FRAMEBUFFER,D),de(b)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,gt,Tt,wt.__webglTexture,0,en(b)):(Tt===r.TEXTURE_2D||Tt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Tt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,gt,Tt,wt.__webglTexture,Pt),i.bindFramebuffer(r.FRAMEBUFFER,null)}function se(D,b,$){if(r.bindRenderbuffer(r.RENDERBUFFER,D),b.depthBuffer){const gt=b.depthTexture,Tt=gt&&gt.isDepthTexture?gt.type:null,Pt=H(b.stencilBuffer,Tt),zt=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;de(b)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,en(b),Pt,b.width,b.height):$?r.renderbufferStorageMultisample(r.RENDERBUFFER,en(b),Pt,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,Pt,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,zt,r.RENDERBUFFER,D)}else{const gt=b.textures;for(let Tt=0;Tt<gt.length;Tt++){const Pt=gt[Tt],zt=c.convert(Pt.format,Pt.colorSpace),tt=c.convert(Pt.type),J=N(Pt.internalFormat,zt,tt,Pt.normalized,Pt.colorSpace);de(b)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,en(b),J,b.width,b.height):$?r.renderbufferStorageMultisample(r.RENDERBUFFER,en(b),J,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,J,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function oe(D,b,$){const gt=b.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,D),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Tt=s.get(b.depthTexture);if(Tt.__renderTarget=b,(!Tt.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),gt){if(Tt.__webglInit===void 0&&(Tt.__webglInit=!0,b.depthTexture.addEventListener("dispose",I)),Tt.__webglTexture===void 0){Tt.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,Tt.__webglTexture),Ot(r.TEXTURE_CUBE_MAP,b.depthTexture);const Ct=c.convert(b.depthTexture.format),wt=c.convert(b.depthTexture.type);let At;b.depthTexture.format===Ga?At=r.DEPTH_COMPONENT24:b.depthTexture.format===js&&(At=r.DEPTH24_STENCIL8);for(let Rt=0;Rt<6;Rt++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0,At,b.width,b.height,0,Ct,wt,null)}}else lt(b.depthTexture,0);const Pt=Tt.__webglTexture,zt=en(b),tt=gt?r.TEXTURE_CUBE_MAP_POSITIVE_X+$:r.TEXTURE_2D,J=b.depthTexture.format===js?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(b.depthTexture.format===Ga)de(b)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,J,tt,Pt,0,zt):r.framebufferTexture2D(r.FRAMEBUFFER,J,tt,Pt,0);else if(b.depthTexture.format===js)de(b)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,J,tt,Pt,0,zt):r.framebufferTexture2D(r.FRAMEBUFFER,J,tt,Pt,0);else throw new Error("Unknown depthTexture format")}function xe(D){const b=s.get(D),$=D.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==D.depthTexture){const gt=D.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),gt){const Tt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,gt.removeEventListener("dispose",Tt)};gt.addEventListener("dispose",Tt),b.__depthDisposeCallback=Tt}b.__boundDepthTexture=gt}if(D.depthTexture&&!b.__autoAllocateDepthBuffer)if($)for(let gt=0;gt<6;gt++)oe(b.__webglFramebuffer[gt],D,gt);else{const gt=D.texture.mipmaps;gt&&gt.length>0?oe(b.__webglFramebuffer[0],D,0):oe(b.__webglFramebuffer,D,0)}else if($){b.__webglDepthbuffer=[];for(let gt=0;gt<6;gt++)if(i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[gt]),b.__webglDepthbuffer[gt]===void 0)b.__webglDepthbuffer[gt]=r.createRenderbuffer(),se(b.__webglDepthbuffer[gt],D,!1);else{const Tt=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Pt=b.__webglDepthbuffer[gt];r.bindRenderbuffer(r.RENDERBUFFER,Pt),r.framebufferRenderbuffer(r.FRAMEBUFFER,Tt,r.RENDERBUFFER,Pt)}}else{const gt=D.texture.mipmaps;if(gt&&gt.length>0?i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=r.createRenderbuffer(),se(b.__webglDepthbuffer,D,!1);else{const Tt=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Pt=b.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Pt),r.framebufferRenderbuffer(r.FRAMEBUFFER,Tt,r.RENDERBUFFER,Pt)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function Fe(D,b,$){const gt=s.get(D);b!==void 0&&Kt(gt.__webglFramebuffer,D,D.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),$!==void 0&&xe(D)}function ue(D){const b=D.texture,$=s.get(D),gt=s.get(b);D.addEventListener("dispose",T);const Tt=D.textures,Pt=D.isWebGLCubeRenderTarget===!0,zt=Tt.length>1;if(zt||(gt.__webglTexture===void 0&&(gt.__webglTexture=r.createTexture()),gt.__version=b.version,h.memory.textures++),Pt){$.__webglFramebuffer=[];for(let tt=0;tt<6;tt++)if(b.mipmaps&&b.mipmaps.length>0){$.__webglFramebuffer[tt]=[];for(let J=0;J<b.mipmaps.length;J++)$.__webglFramebuffer[tt][J]=r.createFramebuffer()}else $.__webglFramebuffer[tt]=r.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){$.__webglFramebuffer=[];for(let tt=0;tt<b.mipmaps.length;tt++)$.__webglFramebuffer[tt]=r.createFramebuffer()}else $.__webglFramebuffer=r.createFramebuffer();if(zt)for(let tt=0,J=Tt.length;tt<J;tt++){const Ct=s.get(Tt[tt]);Ct.__webglTexture===void 0&&(Ct.__webglTexture=r.createTexture(),h.memory.textures++)}if(D.samples>0&&de(D)===!1){$.__webglMultisampledFramebuffer=r.createFramebuffer(),$.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let tt=0;tt<Tt.length;tt++){const J=Tt[tt];$.__webglColorRenderbuffer[tt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,$.__webglColorRenderbuffer[tt]);const Ct=c.convert(J.format,J.colorSpace),wt=c.convert(J.type),At=N(J.internalFormat,Ct,wt,J.normalized,J.colorSpace,D.isXRRenderTarget===!0),Rt=en(D);r.renderbufferStorageMultisample(r.RENDERBUFFER,Rt,At,D.width,D.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+tt,r.RENDERBUFFER,$.__webglColorRenderbuffer[tt])}r.bindRenderbuffer(r.RENDERBUFFER,null),D.depthBuffer&&($.__webglDepthRenderbuffer=r.createRenderbuffer(),se($.__webglDepthRenderbuffer,D,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Pt){i.bindTexture(r.TEXTURE_CUBE_MAP,gt.__webglTexture),Ot(r.TEXTURE_CUBE_MAP,b);for(let tt=0;tt<6;tt++)if(b.mipmaps&&b.mipmaps.length>0)for(let J=0;J<b.mipmaps.length;J++)Kt($.__webglFramebuffer[tt][J],D,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,J);else Kt($.__webglFramebuffer[tt],D,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0);y(b)&&C(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(zt){for(let tt=0,J=Tt.length;tt<J;tt++){const Ct=Tt[tt],wt=s.get(Ct);let At=r.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(At=D.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(At,wt.__webglTexture),Ot(At,Ct),Kt($.__webglFramebuffer,D,Ct,r.COLOR_ATTACHMENT0+tt,At,0),y(Ct)&&C(At)}i.unbindTexture()}else{let tt=r.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(tt=D.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(tt,gt.__webglTexture),Ot(tt,b),b.mipmaps&&b.mipmaps.length>0)for(let J=0;J<b.mipmaps.length;J++)Kt($.__webglFramebuffer[J],D,b,r.COLOR_ATTACHMENT0,tt,J);else Kt($.__webglFramebuffer,D,b,r.COLOR_ATTACHMENT0,tt,0);y(b)&&C(tt),i.unbindTexture()}D.depthBuffer&&xe(D)}function hn(D){const b=D.textures;for(let $=0,gt=b.length;$<gt;$++){const Tt=b[$];if(y(Tt)){const Pt=L(D),zt=s.get(Tt).__webglTexture;i.bindTexture(Pt,zt),C(Pt),i.unbindTexture()}}}const Ve=[],Mn=[];function q(D){if(D.samples>0){if(de(D)===!1){const b=D.textures,$=D.width,gt=D.height;let Tt=r.COLOR_BUFFER_BIT;const Pt=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,zt=s.get(D),tt=b.length>1;if(tt)for(let Ct=0;Ct<b.length;Ct++)i.bindFramebuffer(r.FRAMEBUFFER,zt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ct,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,zt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ct,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,zt.__webglMultisampledFramebuffer);const J=D.texture.mipmaps;J&&J.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,zt.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,zt.__webglFramebuffer);for(let Ct=0;Ct<b.length;Ct++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(Tt|=r.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(Tt|=r.STENCIL_BUFFER_BIT)),tt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,zt.__webglColorRenderbuffer[Ct]);const wt=s.get(b[Ct]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,wt,0)}r.blitFramebuffer(0,0,$,gt,0,0,$,gt,Tt,r.NEAREST),m===!0&&(Ve.length=0,Mn.length=0,Ve.push(r.COLOR_ATTACHMENT0+Ct),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Ve.push(Pt),Mn.push(Pt),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Mn)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Ve))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),tt)for(let Ct=0;Ct<b.length;Ct++){i.bindFramebuffer(r.FRAMEBUFFER,zt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ct,r.RENDERBUFFER,zt.__webglColorRenderbuffer[Ct]);const wt=s.get(b[Ct]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,zt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ct,r.TEXTURE_2D,wt,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,zt.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&m){const b=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[b])}}}function en(D){return Math.min(l.maxSamples,D.samples)}function de(D){const b=s.get(D);return D.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Oe(D){const b=h.render.frame;v.get(D)!==b&&(v.set(D,b),D.update())}function Ut(D,b){const $=D.colorSpace,gt=D.format,Tt=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||$!==Yc&&$!==vs&&(Ce.getTransfer($)===je?(gt!==qi||Tt!==bi)&&le("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ue("WebGLTextures: Unsupported texture color space:",$)),b}function Le(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(p.width=D.naturalWidth||D.width,p.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(p.width=D.displayWidth,p.height=D.displayHeight):(p.width=D.width,p.height=D.height),p}this.allocateTextureUnit=O,this.resetTextureUnits=ut,this.getTextureUnits=ht,this.setTextureUnits=W,this.setTexture2D=lt,this.setTexture2DArray=mt,this.setTexture3D=Et,this.setTextureCube=P,this.rebindTextures=Fe,this.setupRenderTarget=ue,this.updateRenderTargetMipmap=hn,this.updateMultisampleRenderTarget=q,this.setupDepthRenderbuffer=xe,this.setupFrameBufferTexture=Kt,this.useMultisampledRTT=de,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function UA(r,t){function i(s,l=vs){let c;const h=Ce.getTransfer(l);if(s===bi)return r.UNSIGNED_BYTE;if(s===jd)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Zd)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Ev)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===Tv)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===Mv)return r.BYTE;if(s===bv)return r.SHORT;if(s===nl)return r.UNSIGNED_SHORT;if(s===Yd)return r.INT;if(s===ca)return r.UNSIGNED_INT;if(s===aa)return r.FLOAT;if(s===Ba)return r.HALF_FLOAT;if(s===Av)return r.ALPHA;if(s===Rv)return r.RGB;if(s===qi)return r.RGBA;if(s===Ga)return r.DEPTH_COMPONENT;if(s===js)return r.DEPTH_STENCIL;if(s===Cv)return r.RED;if(s===Kd)return r.RED_INTEGER;if(s===Ks)return r.RG;if(s===Qd)return r.RG_INTEGER;if(s===Jd)return r.RGBA_INTEGER;if(s===Gc||s===Hc||s===Vc||s===kc)if(h===je)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Gc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Hc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Vc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===kc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Gc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Hc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Vc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===kc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===ld||s===cd||s===ud||s===fd)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===ld)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===cd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===ud)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===fd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===hd||s===dd||s===pd||s===md||s===gd||s===Wc||s===_d)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===hd||s===dd)return h===je?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===pd)return h===je?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===md)return c.COMPRESSED_R11_EAC;if(s===gd)return c.COMPRESSED_SIGNED_R11_EAC;if(s===Wc)return c.COMPRESSED_RG11_EAC;if(s===_d)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===vd||s===xd||s===Sd||s===yd||s===Md||s===bd||s===Ed||s===Td||s===Ad||s===Rd||s===Cd||s===wd||s===Dd||s===Nd)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===vd)return h===je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===xd)return h===je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Sd)return h===je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===yd)return h===je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Md)return h===je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===bd)return h===je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Ed)return h===je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Td)return h===je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Ad)return h===je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Rd)return h===je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Cd)return h===je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===wd)return h===je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Dd)return h===je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Nd)return h===je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Ud||s===Ld||s===Od)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===Ud)return h===je?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Ld)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Od)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Pd||s===zd||s===qc||s===Id)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===Pd)return c.COMPRESSED_RED_RGTC1_EXT;if(s===zd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===qc)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Id)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===il?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const LA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,OA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class PA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new zv(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new ua({vertexShader:LA,fragmentShader:OA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ne(new ll(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class zA extends Qs{constructor(t,i){super();const s=this;let l=null,c=1,h=null,d="local-floor",m=1,p=null,v=null,x=null,g=null,S=null,E=null;const w=typeof XRWebGLBinding<"u",M=new PA,y={},C=i.getContextAttributes();let L=null,N=null;const H=[],U=[],I=new $t;let T=null;const z=new Mi;z.viewport=new gn;const Z=new Mi;Z.viewport=new gn;const B=[z,Z],X=new WM;let ut=null,ht=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ct){let Mt=H[ct];return Mt===void 0&&(Mt=new Mh,H[ct]=Mt),Mt.getTargetRaySpace()},this.getControllerGrip=function(ct){let Mt=H[ct];return Mt===void 0&&(Mt=new Mh,H[ct]=Mt),Mt.getGripSpace()},this.getHand=function(ct){let Mt=H[ct];return Mt===void 0&&(Mt=new Mh,H[ct]=Mt),Mt.getHandSpace()};function W(ct){const Mt=U.indexOf(ct.inputSource);if(Mt===-1)return;const Dt=H[Mt];Dt!==void 0&&(Dt.update(ct.inputSource,ct.frame,p||h),Dt.dispatchEvent({type:ct.type,data:ct.inputSource}))}function O(){l.removeEventListener("select",W),l.removeEventListener("selectstart",W),l.removeEventListener("selectend",W),l.removeEventListener("squeeze",W),l.removeEventListener("squeezestart",W),l.removeEventListener("squeezeend",W),l.removeEventListener("end",O),l.removeEventListener("inputsourceschange",F);for(let ct=0;ct<H.length;ct++){const Mt=U[ct];Mt!==null&&(U[ct]=null,H[ct].disconnect(Mt))}ut=null,ht=null,M.reset();for(const ct in y)delete y[ct];t.setRenderTarget(L),S=null,g=null,x=null,l=null,N=null,Ot.stop(),s.isPresenting=!1,t.setPixelRatio(T),t.setSize(I.width,I.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ct){c=ct,s.isPresenting===!0&&le("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ct){d=ct,s.isPresenting===!0&&le("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(ct){p=ct},this.getBaseLayer=function(){return g!==null?g:S},this.getBinding=function(){return x===null&&w&&(x=new XRWebGLBinding(l,i)),x},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(ct){if(l=ct,l!==null){if(L=t.getRenderTarget(),l.addEventListener("select",W),l.addEventListener("selectstart",W),l.addEventListener("selectend",W),l.addEventListener("squeeze",W),l.addEventListener("squeezestart",W),l.addEventListener("squeezeend",W),l.addEventListener("end",O),l.addEventListener("inputsourceschange",F),C.xrCompatible!==!0&&await i.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(I),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let Dt=null,Ft=null,ie=null;C.depth&&(ie=C.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Dt=C.stencil?js:Ga,Ft=C.stencil?il:ca);const Kt={colorFormat:i.RGBA8,depthFormat:ie,scaleFactor:c};x=this.getBinding(),g=x.createProjectionLayer(Kt),l.updateRenderState({layers:[g]}),t.setPixelRatio(1),t.setSize(g.textureWidth,g.textureHeight,!1),N=new oa(g.textureWidth,g.textureHeight,{format:qi,type:bi,depthTexture:new Zr(g.textureWidth,g.textureHeight,Ft,void 0,void 0,void 0,void 0,void 0,void 0,Dt),stencilBuffer:C.stencil,colorSpace:t.outputColorSpace,samples:C.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const Dt={antialias:C.antialias,alpha:!0,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(l,i,Dt),l.updateRenderState({baseLayer:S}),t.setPixelRatio(1),t.setSize(S.framebufferWidth,S.framebufferHeight,!1),N=new oa(S.framebufferWidth,S.framebufferHeight,{format:qi,type:bi,colorSpace:t.outputColorSpace,stencilBuffer:C.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),Ot.setContext(l),Ot.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function F(ct){for(let Mt=0;Mt<ct.removed.length;Mt++){const Dt=ct.removed[Mt],Ft=U.indexOf(Dt);Ft>=0&&(U[Ft]=null,H[Ft].disconnect(Dt))}for(let Mt=0;Mt<ct.added.length;Mt++){const Dt=ct.added[Mt];let Ft=U.indexOf(Dt);if(Ft===-1){for(let Kt=0;Kt<H.length;Kt++)if(Kt>=U.length){U.push(Dt),Ft=Kt;break}else if(U[Kt]===null){U[Kt]=Dt,Ft=Kt;break}if(Ft===-1)break}const ie=H[Ft];ie&&ie.connect(Dt)}}const lt=new Y,mt=new Y;function Et(ct,Mt,Dt){lt.setFromMatrixPosition(Mt.matrixWorld),mt.setFromMatrixPosition(Dt.matrixWorld);const Ft=lt.distanceTo(mt),ie=Mt.projectionMatrix.elements,Kt=Dt.projectionMatrix.elements,se=ie[14]/(ie[10]-1),oe=ie[14]/(ie[10]+1),xe=(ie[9]+1)/ie[5],Fe=(ie[9]-1)/ie[5],ue=(ie[8]-1)/ie[0],hn=(Kt[8]+1)/Kt[0],Ve=se*ue,Mn=se*hn,q=Ft/(-ue+hn),en=q*-ue;if(Mt.matrixWorld.decompose(ct.position,ct.quaternion,ct.scale),ct.translateX(en),ct.translateZ(q),ct.matrixWorld.compose(ct.position,ct.quaternion,ct.scale),ct.matrixWorldInverse.copy(ct.matrixWorld).invert(),ie[10]===-1)ct.projectionMatrix.copy(Mt.projectionMatrix),ct.projectionMatrixInverse.copy(Mt.projectionMatrixInverse);else{const de=se+q,Oe=oe+q,Ut=Ve-en,Le=Mn+(Ft-en),D=xe*oe/Oe*de,b=Fe*oe/Oe*de;ct.projectionMatrix.makePerspective(Ut,Le,D,b,de,Oe),ct.projectionMatrixInverse.copy(ct.projectionMatrix).invert()}}function P(ct,Mt){Mt===null?ct.matrixWorld.copy(ct.matrix):ct.matrixWorld.multiplyMatrices(Mt.matrixWorld,ct.matrix),ct.matrixWorldInverse.copy(ct.matrixWorld).invert()}this.updateCamera=function(ct){if(l===null)return;let Mt=ct.near,Dt=ct.far;M.texture!==null&&(M.depthNear>0&&(Mt=M.depthNear),M.depthFar>0&&(Dt=M.depthFar)),X.near=Z.near=z.near=Mt,X.far=Z.far=z.far=Dt,(ut!==X.near||ht!==X.far)&&(l.updateRenderState({depthNear:X.near,depthFar:X.far}),ut=X.near,ht=X.far),X.layers.mask=ct.layers.mask|6,z.layers.mask=X.layers.mask&-5,Z.layers.mask=X.layers.mask&-3;const Ft=ct.parent,ie=X.cameras;P(X,Ft);for(let Kt=0;Kt<ie.length;Kt++)P(ie[Kt],Ft);ie.length===2?Et(X,z,Z):X.projectionMatrix.copy(z.projectionMatrix),Q(ct,X,Ft)};function Q(ct,Mt,Dt){Dt===null?ct.matrix.copy(Mt.matrixWorld):(ct.matrix.copy(Dt.matrixWorld),ct.matrix.invert(),ct.matrix.multiply(Mt.matrixWorld)),ct.matrix.decompose(ct.position,ct.quaternion,ct.scale),ct.updateMatrixWorld(!0),ct.projectionMatrix.copy(Mt.projectionMatrix),ct.projectionMatrixInverse.copy(Mt.projectionMatrixInverse),ct.isPerspectiveCamera&&(ct.fov=Gd*2*Math.atan(1/ct.projectionMatrix.elements[5]),ct.zoom=1)}this.getCamera=function(){return X},this.getFoveation=function(){if(!(g===null&&S===null))return m},this.setFoveation=function(ct){m=ct,g!==null&&(g.fixedFoveation=ct),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=ct)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(X)},this.getCameraTexture=function(ct){return y[ct]};let vt=null;function Nt(ct,Mt){if(v=Mt.getViewerPose(p||h),E=Mt,v!==null){const Dt=v.views;S!==null&&(t.setRenderTargetFramebuffer(N,S.framebuffer),t.setRenderTarget(N));let Ft=!1;Dt.length!==X.cameras.length&&(X.cameras.length=0,Ft=!0);for(let oe=0;oe<Dt.length;oe++){const xe=Dt[oe];let Fe=null;if(S!==null)Fe=S.getViewport(xe);else{const hn=x.getViewSubImage(g,xe);Fe=hn.viewport,oe===0&&(t.setRenderTargetTextures(N,hn.colorTexture,hn.depthStencilTexture),t.setRenderTarget(N))}let ue=B[oe];ue===void 0&&(ue=new Mi,ue.layers.enable(oe),ue.viewport=new gn,B[oe]=ue),ue.matrix.fromArray(xe.transform.matrix),ue.matrix.decompose(ue.position,ue.quaternion,ue.scale),ue.projectionMatrix.fromArray(xe.projectionMatrix),ue.projectionMatrixInverse.copy(ue.projectionMatrix).invert(),ue.viewport.set(Fe.x,Fe.y,Fe.width,Fe.height),oe===0&&(X.matrix.copy(ue.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale)),Ft===!0&&X.cameras.push(ue)}const ie=l.enabledFeatures;if(ie&&ie.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&w){x=s.getBinding();const oe=x.getDepthInformation(Dt[0]);oe&&oe.isValid&&oe.texture&&M.init(oe,l.renderState)}if(ie&&ie.includes("camera-access")&&w){t.state.unbindTexture(),x=s.getBinding();for(let oe=0;oe<Dt.length;oe++){const xe=Dt[oe].camera;if(xe){let Fe=y[xe];Fe||(Fe=new zv,y[xe]=Fe);const ue=x.getCameraImage(xe);Fe.sourceTexture=ue}}}}for(let Dt=0;Dt<H.length;Dt++){const Ft=U[Dt],ie=H[Dt];Ft!==null&&ie!==void 0&&ie.update(Ft,Mt,p||h)}vt&&vt(ct,Mt),Mt.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:Mt}),E=null}const Ot=new kv;Ot.setAnimationLoop(Nt),this.setAnimationLoop=function(ct){vt=ct},this.dispose=function(){}}}const IA=new fn,Kv=new he;Kv.set(-1,0,0,0,1,0,0,0,1);function FA(r,t){function i(M,y){M.matrixAutoUpdate===!0&&M.updateMatrix(),y.value.copy(M.matrix)}function s(M,y){y.color.getRGB(M.fogColor.value,Gv(r)),y.isFog?(M.fogNear.value=y.near,M.fogFar.value=y.far):y.isFogExp2&&(M.fogDensity.value=y.density)}function l(M,y,C,L,N){y.isNodeMaterial?y.uniformsNeedUpdate=!1:y.isMeshBasicMaterial?c(M,y):y.isMeshLambertMaterial?(c(M,y),y.envMap&&(M.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(c(M,y),x(M,y)):y.isMeshPhongMaterial?(c(M,y),v(M,y),y.envMap&&(M.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(c(M,y),g(M,y),y.isMeshPhysicalMaterial&&S(M,y,N)):y.isMeshMatcapMaterial?(c(M,y),E(M,y)):y.isMeshDepthMaterial?c(M,y):y.isMeshDistanceMaterial?(c(M,y),w(M,y)):y.isMeshNormalMaterial?c(M,y):y.isLineBasicMaterial?(h(M,y),y.isLineDashedMaterial&&d(M,y)):y.isPointsMaterial?m(M,y,C,L):y.isSpriteMaterial?p(M,y):y.isShadowMaterial?(M.color.value.copy(y.color),M.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function c(M,y){M.opacity.value=y.opacity,y.color&&M.diffuse.value.copy(y.color),y.emissive&&M.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(M.map.value=y.map,i(y.map,M.mapTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,i(y.alphaMap,M.alphaMapTransform)),y.bumpMap&&(M.bumpMap.value=y.bumpMap,i(y.bumpMap,M.bumpMapTransform),M.bumpScale.value=y.bumpScale,y.side===Jn&&(M.bumpScale.value*=-1)),y.normalMap&&(M.normalMap.value=y.normalMap,i(y.normalMap,M.normalMapTransform),M.normalScale.value.copy(y.normalScale),y.side===Jn&&M.normalScale.value.negate()),y.displacementMap&&(M.displacementMap.value=y.displacementMap,i(y.displacementMap,M.displacementMapTransform),M.displacementScale.value=y.displacementScale,M.displacementBias.value=y.displacementBias),y.emissiveMap&&(M.emissiveMap.value=y.emissiveMap,i(y.emissiveMap,M.emissiveMapTransform)),y.specularMap&&(M.specularMap.value=y.specularMap,i(y.specularMap,M.specularMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest);const C=t.get(y),L=C.envMap,N=C.envMapRotation;L&&(M.envMap.value=L,M.envMapRotation.value.setFromMatrix4(IA.makeRotationFromEuler(N)).transpose(),L.isCubeTexture&&L.isRenderTargetTexture===!1&&M.envMapRotation.value.premultiply(Kv),M.reflectivity.value=y.reflectivity,M.ior.value=y.ior,M.refractionRatio.value=y.refractionRatio),y.lightMap&&(M.lightMap.value=y.lightMap,M.lightMapIntensity.value=y.lightMapIntensity,i(y.lightMap,M.lightMapTransform)),y.aoMap&&(M.aoMap.value=y.aoMap,M.aoMapIntensity.value=y.aoMapIntensity,i(y.aoMap,M.aoMapTransform))}function h(M,y){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,y.map&&(M.map.value=y.map,i(y.map,M.mapTransform))}function d(M,y){M.dashSize.value=y.dashSize,M.totalSize.value=y.dashSize+y.gapSize,M.scale.value=y.scale}function m(M,y,C,L){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,M.size.value=y.size*C,M.scale.value=L*.5,y.map&&(M.map.value=y.map,i(y.map,M.uvTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,i(y.alphaMap,M.alphaMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest)}function p(M,y){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,M.rotation.value=y.rotation,y.map&&(M.map.value=y.map,i(y.map,M.mapTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,i(y.alphaMap,M.alphaMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest)}function v(M,y){M.specular.value.copy(y.specular),M.shininess.value=Math.max(y.shininess,1e-4)}function x(M,y){y.gradientMap&&(M.gradientMap.value=y.gradientMap)}function g(M,y){M.metalness.value=y.metalness,y.metalnessMap&&(M.metalnessMap.value=y.metalnessMap,i(y.metalnessMap,M.metalnessMapTransform)),M.roughness.value=y.roughness,y.roughnessMap&&(M.roughnessMap.value=y.roughnessMap,i(y.roughnessMap,M.roughnessMapTransform)),y.envMap&&(M.envMapIntensity.value=y.envMapIntensity)}function S(M,y,C){M.ior.value=y.ior,y.sheen>0&&(M.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),M.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(M.sheenColorMap.value=y.sheenColorMap,i(y.sheenColorMap,M.sheenColorMapTransform)),y.sheenRoughnessMap&&(M.sheenRoughnessMap.value=y.sheenRoughnessMap,i(y.sheenRoughnessMap,M.sheenRoughnessMapTransform))),y.clearcoat>0&&(M.clearcoat.value=y.clearcoat,M.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(M.clearcoatMap.value=y.clearcoatMap,i(y.clearcoatMap,M.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,i(y.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(M.clearcoatNormalMap.value=y.clearcoatNormalMap,i(y.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===Jn&&M.clearcoatNormalScale.value.negate())),y.dispersion>0&&(M.dispersion.value=y.dispersion),y.iridescence>0&&(M.iridescence.value=y.iridescence,M.iridescenceIOR.value=y.iridescenceIOR,M.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(M.iridescenceMap.value=y.iridescenceMap,i(y.iridescenceMap,M.iridescenceMapTransform)),y.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=y.iridescenceThicknessMap,i(y.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),y.transmission>0&&(M.transmission.value=y.transmission,M.transmissionSamplerMap.value=C.texture,M.transmissionSamplerSize.value.set(C.width,C.height),y.transmissionMap&&(M.transmissionMap.value=y.transmissionMap,i(y.transmissionMap,M.transmissionMapTransform)),M.thickness.value=y.thickness,y.thicknessMap&&(M.thicknessMap.value=y.thicknessMap,i(y.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=y.attenuationDistance,M.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(M.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(M.anisotropyMap.value=y.anisotropyMap,i(y.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=y.specularIntensity,M.specularColor.value.copy(y.specularColor),y.specularColorMap&&(M.specularColorMap.value=y.specularColorMap,i(y.specularColorMap,M.specularColorMapTransform)),y.specularIntensityMap&&(M.specularIntensityMap.value=y.specularIntensityMap,i(y.specularIntensityMap,M.specularIntensityMapTransform))}function E(M,y){y.matcap&&(M.matcap.value=y.matcap)}function w(M,y){const C=t.get(y).light;M.referencePosition.value.setFromMatrixPosition(C.matrixWorld),M.nearDistance.value=C.shadow.camera.near,M.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function BA(r,t,i,s){let l={},c={},h=[];const d=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(C,L){const N=L.program;s.uniformBlockBinding(C,N)}function p(C,L){let N=l[C.id];N===void 0&&(E(C),N=v(C),l[C.id]=N,C.addEventListener("dispose",M));const H=L.program;s.updateUBOMapping(C,H);const U=t.render.frame;c[C.id]!==U&&(g(C),c[C.id]=U)}function v(C){const L=x();C.__bindingPointIndex=L;const N=r.createBuffer(),H=C.__size,U=C.usage;return r.bindBuffer(r.UNIFORM_BUFFER,N),r.bufferData(r.UNIFORM_BUFFER,H,U),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,L,N),N}function x(){for(let C=0;C<d;C++)if(h.indexOf(C)===-1)return h.push(C),C;return Ue("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(C){const L=l[C.id],N=C.uniforms,H=C.__cache;r.bindBuffer(r.UNIFORM_BUFFER,L);for(let U=0,I=N.length;U<I;U++){const T=Array.isArray(N[U])?N[U]:[N[U]];for(let z=0,Z=T.length;z<Z;z++){const B=T[z];if(S(B,U,z,H)===!0){const X=B.__offset,ut=Array.isArray(B.value)?B.value:[B.value];let ht=0;for(let W=0;W<ut.length;W++){const O=ut[W],F=w(O);typeof O=="number"||typeof O=="boolean"?(B.__data[0]=O,r.bufferSubData(r.UNIFORM_BUFFER,X+ht,B.__data)):O.isMatrix3?(B.__data[0]=O.elements[0],B.__data[1]=O.elements[1],B.__data[2]=O.elements[2],B.__data[3]=0,B.__data[4]=O.elements[3],B.__data[5]=O.elements[4],B.__data[6]=O.elements[5],B.__data[7]=0,B.__data[8]=O.elements[6],B.__data[9]=O.elements[7],B.__data[10]=O.elements[8],B.__data[11]=0):ArrayBuffer.isView(O)?B.__data.set(new O.constructor(O.buffer,O.byteOffset,B.__data.length)):(O.toArray(B.__data,ht),ht+=F.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,X,B.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function S(C,L,N,H){const U=C.value,I=L+"_"+N;if(H[I]===void 0)return typeof U=="number"||typeof U=="boolean"?H[I]=U:ArrayBuffer.isView(U)?H[I]=U.slice():H[I]=U.clone(),!0;{const T=H[I];if(typeof U=="number"||typeof U=="boolean"){if(T!==U)return H[I]=U,!0}else{if(ArrayBuffer.isView(U))return!0;if(T.equals(U)===!1)return T.copy(U),!0}}return!1}function E(C){const L=C.uniforms;let N=0;const H=16;for(let I=0,T=L.length;I<T;I++){const z=Array.isArray(L[I])?L[I]:[L[I]];for(let Z=0,B=z.length;Z<B;Z++){const X=z[Z],ut=Array.isArray(X.value)?X.value:[X.value];for(let ht=0,W=ut.length;ht<W;ht++){const O=ut[ht],F=w(O),lt=N%H,mt=lt%F.boundary,Et=lt+mt;N+=mt,Et!==0&&H-Et<F.storage&&(N+=H-Et),X.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=N,N+=F.storage}}}const U=N%H;return U>0&&(N+=H-U),C.__size=N,C.__cache={},this}function w(C){const L={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(L.boundary=4,L.storage=4):C.isVector2?(L.boundary=8,L.storage=8):C.isVector3||C.isColor?(L.boundary=16,L.storage=12):C.isVector4?(L.boundary=16,L.storage=16):C.isMatrix3?(L.boundary=48,L.storage=48):C.isMatrix4?(L.boundary=64,L.storage=64):C.isTexture?le("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(C)?(L.boundary=16,L.storage=C.byteLength):le("WebGLRenderer: Unsupported uniform value type.",C),L}function M(C){const L=C.target;L.removeEventListener("dispose",M);const N=h.indexOf(L.__bindingPointIndex);h.splice(N,1),r.deleteBuffer(l[L.id]),delete l[L.id],delete c[L.id]}function y(){for(const C in l)r.deleteBuffer(l[C]);h=[],l={},c={}}return{bind:m,update:p,dispose:y}}const GA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ea=null;function HA(){return ea===null&&(ea=new fM(GA,16,16,Ks,Ba),ea.name="DFG_LUT",ea.minFilter=Xn,ea.magFilter=Xn,ea.wrapS=za,ea.wrapT=za,ea.generateMipmaps=!1,ea.needsUpdate=!0),ea}class VA{constructor(t={}){const{canvas:i=Vy(),context:s=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:g=!1,outputBufferType:S=bi}=t;this.isWebGLRenderer=!0;let E;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=s.getContextAttributes().alpha}else E=h;const w=S,M=new Set([Jd,Qd,Kd]),y=new Set([bi,ca,nl,il,jd,Zd]),C=new Uint32Array(4),L=new Int32Array(4),N=new Y;let H=null,U=null;const I=[],T=[];let z=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ra,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const Z=this;let B=!1,X=null;this._outputColorSpace=Pi;let ut=0,ht=0,W=null,O=-1,F=null;const lt=new gn,mt=new gn;let Et=null;const P=new ve(0);let Q=0,vt=i.width,Nt=i.height,Ot=1,ct=null,Mt=null;const Dt=new gn(0,0,vt,Nt),Ft=new gn(0,0,vt,Nt);let ie=!1;const Kt=new sp;let se=!1,oe=!1;const xe=new fn,Fe=new Y,ue=new gn,hn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ve=!1;function Mn(){return W===null?Ot:1}let q=s;function en(A,j){return i.getContext(A,j)}try{const A={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:x};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Wd}`),i.addEventListener("webglcontextlost",xt,!1),i.addEventListener("webglcontextrestored",Gt,!1),i.addEventListener("webglcontextcreationerror",qt,!1),q===null){const j="webgl2";if(q=en(j,A),q===null)throw en(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw Ue("WebGLRenderer: "+A.message),A}let de,Oe,Ut,Le,D,b,$,gt,Tt,Pt,zt,tt,J,Ct,wt,At,Rt,Wt,te,re,V,bt,dt;function Lt(){de=new HE(q),de.init(),V=new UA(q,de),Oe=new LE(q,de,t,V),Ut=new DA(q,de),Oe.reversedDepthBuffer&&g&&Ut.buffers.depth.setReversed(!0),Le=new XE(q),D=new gA,b=new NA(q,de,Ut,D,Oe,V,Le),$=new GE(Z),gt=new jM(q),bt=new NE(q,gt),Tt=new VE(q,gt,Le,bt),Pt=new qE(q,Tt,gt,bt,Le),Wt=new WE(q,Oe,b),wt=new OE(D),zt=new mA(Z,$,de,Oe,bt,wt),tt=new FA(Z,D),J=new vA,Ct=new EA(de),Rt=new DE(Z,$,Ut,Pt,E,m),At=new wA(Z,Pt,Oe),dt=new BA(q,Le,Oe,Ut),te=new UE(q,de,Le),re=new kE(q,de,Le),Le.programs=zt.programs,Z.capabilities=Oe,Z.extensions=de,Z.properties=D,Z.renderLists=J,Z.shadowMap=At,Z.state=Ut,Z.info=Le}Lt(),w!==bi&&(z=new jE(w,i.width,i.height,l,c));const yt=new zA(Z,q);this.xr=yt,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){const A=de.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=de.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Ot},this.setPixelRatio=function(A){A!==void 0&&(Ot=A,this.setSize(vt,Nt,!1))},this.getSize=function(A){return A.set(vt,Nt)},this.setSize=function(A,j,rt=!0){if(yt.isPresenting){le("WebGLRenderer: Can't change size while VR device is presenting.");return}vt=A,Nt=j,i.width=Math.floor(A*Ot),i.height=Math.floor(j*Ot),rt===!0&&(i.style.width=A+"px",i.style.height=j+"px"),z!==null&&z.setSize(i.width,i.height),this.setViewport(0,0,A,j)},this.getDrawingBufferSize=function(A){return A.set(vt*Ot,Nt*Ot).floor()},this.setDrawingBufferSize=function(A,j,rt){vt=A,Nt=j,Ot=rt,i.width=Math.floor(A*rt),i.height=Math.floor(j*rt),this.setViewport(0,0,A,j)},this.setEffects=function(A){if(w===bi){Ue("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let j=0;j<A.length;j++)if(A[j].isOutputPass===!0){le("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}z.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(lt)},this.getViewport=function(A){return A.copy(Dt)},this.setViewport=function(A,j,rt,it){A.isVector4?Dt.set(A.x,A.y,A.z,A.w):Dt.set(A,j,rt,it),Ut.viewport(lt.copy(Dt).multiplyScalar(Ot).round())},this.getScissor=function(A){return A.copy(Ft)},this.setScissor=function(A,j,rt,it){A.isVector4?Ft.set(A.x,A.y,A.z,A.w):Ft.set(A,j,rt,it),Ut.scissor(mt.copy(Ft).multiplyScalar(Ot).round())},this.getScissorTest=function(){return ie},this.setScissorTest=function(A){Ut.setScissorTest(ie=A)},this.setOpaqueSort=function(A){ct=A},this.setTransparentSort=function(A){Mt=A},this.getClearColor=function(A){return A.copy(Rt.getClearColor())},this.setClearColor=function(){Rt.setClearColor(...arguments)},this.getClearAlpha=function(){return Rt.getClearAlpha()},this.setClearAlpha=function(){Rt.setClearAlpha(...arguments)},this.clear=function(A=!0,j=!0,rt=!0){let it=0;if(A){let nt=!1;if(W!==null){const Bt=W.texture.format;nt=M.has(Bt)}if(nt){const Bt=W.texture.type,kt=y.has(Bt),It=Rt.getClearColor(),Yt=Rt.getClearAlpha(),Xt=It.r,ee=It.g,pe=It.b;kt?(C[0]=Xt,C[1]=ee,C[2]=pe,C[3]=Yt,q.clearBufferuiv(q.COLOR,0,C)):(L[0]=Xt,L[1]=ee,L[2]=pe,L[3]=Yt,q.clearBufferiv(q.COLOR,0,L))}else it|=q.COLOR_BUFFER_BIT}j&&(it|=q.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),rt&&(it|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),it!==0&&q.clear(it)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),X=A},this.dispose=function(){i.removeEventListener("webglcontextlost",xt,!1),i.removeEventListener("webglcontextrestored",Gt,!1),i.removeEventListener("webglcontextcreationerror",qt,!1),Rt.dispose(),J.dispose(),Ct.dispose(),D.dispose(),$.dispose(),Pt.dispose(),bt.dispose(),dt.dispose(),zt.dispose(),yt.dispose(),yt.removeEventListener("sessionstart",Yi),yt.removeEventListener("sessionend",nn),we.stop()};function xt(A){A.preventDefault(),u_("WebGLRenderer: Context Lost."),B=!0}function Gt(){u_("WebGLRenderer: Context Restored."),B=!1;const A=Le.autoReset,j=At.enabled,rt=At.autoUpdate,it=At.needsUpdate,nt=At.type;Lt(),Le.autoReset=A,At.enabled=j,At.autoUpdate=rt,At.needsUpdate=it,At.type=nt}function qt(A){Ue("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Se(A){const j=A.target;j.removeEventListener("dispose",Se),fe(j)}function fe(A){_n(A),D.remove(A)}function _n(A){const j=D.get(A).programs;j!==void 0&&(j.forEach(function(rt){zt.releaseProgram(rt)}),A.isShaderMaterial&&zt.releaseShaderCache(A))}this.renderBufferDirect=function(A,j,rt,it,nt,Bt){j===null&&(j=hn);const kt=nt.isMesh&&nt.matrixWorld.determinant()<0,It=jn(A,j,rt,it,nt);Ut.setMaterial(it,kt);let Yt=rt.index,Xt=1;if(it.wireframe===!0){if(Yt=Tt.getWireframeAttribute(rt),Yt===void 0)return;Xt=2}const ee=rt.drawRange,pe=rt.attributes.position;let Jt=ee.start*Xt,Pe=(ee.start+ee.count)*Xt;Bt!==null&&(Jt=Math.max(Jt,Bt.start*Xt),Pe=Math.min(Pe,(Bt.start+Bt.count)*Xt)),Yt!==null?(Jt=Math.max(Jt,0),Pe=Math.min(Pe,Yt.count)):pe!=null&&(Jt=Math.max(Jt,0),Pe=Math.min(Pe,pe.count));const rn=Pe-Jt;if(rn<0||rn===1/0)return;bt.setup(nt,it,It,rt,Yt);let $e,ke=te;if(Yt!==null&&($e=gt.get(Yt),ke=re,ke.setIndex($e)),nt.isMesh)it.wireframe===!0?(Ut.setLineWidth(it.wireframeLinewidth*Mn()),ke.setMode(q.LINES)):ke.setMode(q.TRIANGLES);else if(nt.isLine){let Xe=it.linewidth;Xe===void 0&&(Xe=1),Ut.setLineWidth(Xe*Mn()),nt.isLineSegments?ke.setMode(q.LINES):nt.isLineLoop?ke.setMode(q.LINE_LOOP):ke.setMode(q.LINE_STRIP)}else nt.isPoints?ke.setMode(q.POINTS):nt.isSprite&&ke.setMode(q.TRIANGLES);if(nt.isBatchedMesh)if(de.get("WEBGL_multi_draw"))ke.renderMultiDraw(nt._multiDrawStarts,nt._multiDrawCounts,nt._multiDrawCount);else{const Xe=nt._multiDrawStarts,Vt=nt._multiDrawCounts,Gn=nt._multiDrawCount,Me=Yt?gt.get(Yt).bytesPerElement:1,wn=D.get(it).currentProgram.getUniforms();for(let ui=0;ui<Gn;ui++)wn.setValue(q,"_gl_DrawID",ui),ke.render(Xe[ui]/Me,Vt[ui])}else if(nt.isInstancedMesh)ke.renderInstances(Jt,rn,nt.count);else if(rt.isInstancedBufferGeometry){const Xe=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,Vt=Math.min(rt.instanceCount,Xe);ke.renderInstances(Jt,rn,Vt)}else ke.render(Jt,rn)};function vn(A,j,rt){A.transparent===!0&&A.side===ia&&A.forceSinglePass===!1?(A.side=Jn,A.needsUpdate=!0,Yn(A,j,rt),A.side=ys,A.needsUpdate=!0,Yn(A,j,rt),A.side=ia):Yn(A,j,rt)}this.compile=function(A,j,rt=null){rt===null&&(rt=A),U=Ct.get(rt),U.init(j),T.push(U),rt.traverseVisible(function(nt){nt.isLight&&nt.layers.test(j.layers)&&(U.pushLight(nt),nt.castShadow&&U.pushShadow(nt))}),A!==rt&&A.traverseVisible(function(nt){nt.isLight&&nt.layers.test(j.layers)&&(U.pushLight(nt),nt.castShadow&&U.pushShadow(nt))}),U.setupLights();const it=new Set;return A.traverse(function(nt){if(!(nt.isMesh||nt.isPoints||nt.isLine||nt.isSprite))return;const Bt=nt.material;if(Bt)if(Array.isArray(Bt))for(let kt=0;kt<Bt.length;kt++){const It=Bt[kt];vn(It,rt,nt),it.add(It)}else vn(Bt,rt,nt),it.add(Bt)}),U=T.pop(),it},this.compileAsync=function(A,j,rt=null){const it=this.compile(A,j,rt);return new Promise(nt=>{function Bt(){if(it.forEach(function(kt){D.get(kt).currentProgram.isReady()&&it.delete(kt)}),it.size===0){nt(A);return}setTimeout(Bt,10)}de.get("KHR_parallel_shader_compile")!==null?Bt():setTimeout(Bt,10)})};let $n=null;function fa(A){$n&&$n(A)}function Yi(){we.stop()}function nn(){we.start()}const we=new kv;we.setAnimationLoop(fa),typeof self<"u"&&we.setContext(self),this.setAnimationLoop=function(A){$n=A,yt.setAnimationLoop(A),A===null?we.stop():we.start()},yt.addEventListener("sessionstart",Yi),yt.addEventListener("sessionend",nn),this.render=function(A,j){if(j!==void 0&&j.isCamera!==!0){Ue("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;X!==null&&X.renderStart(A,j);const rt=yt.enabled===!0&&yt.isPresenting===!0,it=z!==null&&(W===null||rt)&&z.begin(Z,W);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),yt.enabled===!0&&yt.isPresenting===!0&&(z===null||z.isCompositing()===!1)&&(yt.cameraAutoUpdate===!0&&yt.updateCamera(j),j=yt.getCamera()),A.isScene===!0&&A.onBeforeRender(Z,A,j,W),U=Ct.get(A,T.length),U.init(j),U.state.textureUnits=b.getTextureUnits(),T.push(U),xe.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),Kt.setFromProjectionMatrix(xe,sa,j.reversedDepth),oe=this.localClippingEnabled,se=wt.init(this.clippingPlanes,oe),H=J.get(A,I.length),H.init(),I.push(H),yt.enabled===!0&&yt.isPresenting===!0){const kt=Z.xr.getDepthSensingMesh();kt!==null&&De(kt,j,-1/0,Z.sortObjects)}De(A,j,0,Z.sortObjects),H.finish(),Z.sortObjects===!0&&H.sort(ct,Mt),Ve=yt.enabled===!1||yt.isPresenting===!1||yt.hasDepthSensing()===!1,Ve&&Rt.addToRenderList(H,A),this.info.render.frame++,se===!0&&wt.beginShadows();const nt=U.state.shadowsArray;if(At.render(nt,A,j),se===!0&&wt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(it&&z.hasRenderPass())===!1){const kt=H.opaque,It=H.transmissive;if(U.setupLights(),j.isArrayCamera){const Yt=j.cameras;if(It.length>0)for(let Xt=0,ee=Yt.length;Xt<ee;Xt++){const pe=Yt[Xt];Ze(kt,It,A,pe)}Ve&&Rt.render(A);for(let Xt=0,ee=Yt.length;Xt<ee;Xt++){const pe=Yt[Xt];Be(H,A,pe,pe.viewport)}}else It.length>0&&Ze(kt,It,A,j),Ve&&Rt.render(A),Be(H,A,j)}W!==null&&ht===0&&(b.updateMultisampleRenderTarget(W),b.updateRenderTargetMipmap(W)),it&&z.end(Z),A.isScene===!0&&A.onAfterRender(Z,A,j),bt.resetDefaultState(),O=-1,F=null,T.pop(),T.length>0?(U=T[T.length-1],b.setTextureUnits(U.state.textureUnits),se===!0&&wt.setGlobalState(Z.clippingPlanes,U.state.camera)):U=null,I.pop(),I.length>0?H=I[I.length-1]:H=null,X!==null&&X.renderEnd()};function De(A,j,rt,it){if(A.visible===!1)return;if(A.layers.test(j.layers)){if(A.isGroup)rt=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(j);else if(A.isLightProbeGrid)U.pushLightProbeGrid(A);else if(A.isLight)U.pushLight(A),A.castShadow&&U.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Kt.intersectsSprite(A)){it&&ue.setFromMatrixPosition(A.matrixWorld).applyMatrix4(xe);const kt=Pt.update(A),It=A.material;It.visible&&H.push(A,kt,It,rt,ue.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Kt.intersectsObject(A))){const kt=Pt.update(A),It=A.material;if(it&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),ue.copy(A.boundingSphere.center)):(kt.boundingSphere===null&&kt.computeBoundingSphere(),ue.copy(kt.boundingSphere.center)),ue.applyMatrix4(A.matrixWorld).applyMatrix4(xe)),Array.isArray(It)){const Yt=kt.groups;for(let Xt=0,ee=Yt.length;Xt<ee;Xt++){const pe=Yt[Xt],Jt=It[pe.materialIndex];Jt&&Jt.visible&&H.push(A,kt,Jt,rt,ue.z,pe)}}else It.visible&&H.push(A,kt,It,rt,ue.z,null)}}const Bt=A.children;for(let kt=0,It=Bt.length;kt<It;kt++)De(Bt[kt],j,rt,it)}function Be(A,j,rt,it){const{opaque:nt,transmissive:Bt,transparent:kt}=A;U.setupLightsView(rt),se===!0&&wt.setGlobalState(Z.clippingPlanes,rt),it&&Ut.viewport(lt.copy(it)),nt.length>0&&xn(nt,j,rt),Bt.length>0&&xn(Bt,j,rt),kt.length>0&&xn(kt,j,rt),Ut.buffers.depth.setTest(!0),Ut.buffers.depth.setMask(!0),Ut.buffers.color.setMask(!0),Ut.setPolygonOffset(!1)}function Ze(A,j,rt,it){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;if(U.state.transmissionRenderTarget[it.id]===void 0){const Jt=de.has("EXT_color_buffer_half_float")||de.has("EXT_color_buffer_float");U.state.transmissionRenderTarget[it.id]=new oa(1,1,{generateMipmaps:!0,type:Jt?Ba:bi,minFilter:Ys,samples:Math.max(4,Oe.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ce.workingColorSpace})}const Bt=U.state.transmissionRenderTarget[it.id],kt=it.viewport||lt;Bt.setSize(kt.z*Z.transmissionResolutionScale,kt.w*Z.transmissionResolutionScale);const It=Z.getRenderTarget(),Yt=Z.getActiveCubeFace(),Xt=Z.getActiveMipmapLevel();Z.setRenderTarget(Bt),Z.getClearColor(P),Q=Z.getClearAlpha(),Q<1&&Z.setClearColor(16777215,.5),Z.clear(),Ve&&Rt.render(rt);const ee=Z.toneMapping;Z.toneMapping=ra;const pe=it.viewport;if(it.viewport!==void 0&&(it.viewport=void 0),U.setupLightsView(it),se===!0&&wt.setGlobalState(Z.clippingPlanes,it),xn(A,rt,it),b.updateMultisampleRenderTarget(Bt),b.updateRenderTargetMipmap(Bt),de.has("WEBGL_multisampled_render_to_texture")===!1){let Jt=!1;for(let Pe=0,rn=j.length;Pe<rn;Pe++){const $e=j[Pe],{object:ke,geometry:Xe,material:Vt,group:Gn}=$e;if(Vt.side===ia&&ke.layers.test(it.layers)){const Me=Vt.side;Vt.side=Jn,Vt.needsUpdate=!0,Ti(ke,rt,it,Xe,Vt,Gn),Vt.side=Me,Vt.needsUpdate=!0,Jt=!0}}Jt===!0&&(b.updateMultisampleRenderTarget(Bt),b.updateRenderTargetMipmap(Bt))}Z.setRenderTarget(It,Yt,Xt),Z.setClearColor(P,Q),pe!==void 0&&(it.viewport=pe),Z.toneMapping=ee}function xn(A,j,rt){const it=j.isScene===!0?j.overrideMaterial:null;for(let nt=0,Bt=A.length;nt<Bt;nt++){const kt=A[nt],{object:It,geometry:Yt,group:Xt}=kt;let ee=kt.material;ee.allowOverride===!0&&it!==null&&(ee=it),It.layers.test(rt.layers)&&Ti(It,j,rt,Yt,ee,Xt)}}function Ti(A,j,rt,it,nt,Bt){A.onBeforeRender(Z,j,rt,it,nt,Bt),A.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),nt.onBeforeRender(Z,j,rt,it,A,Bt),nt.transparent===!0&&nt.side===ia&&nt.forceSinglePass===!1?(nt.side=Jn,nt.needsUpdate=!0,Z.renderBufferDirect(rt,j,it,nt,A,Bt),nt.side=ys,nt.needsUpdate=!0,Z.renderBufferDirect(rt,j,it,nt,A,Bt),nt.side=ia):Z.renderBufferDirect(rt,j,it,nt,A,Bt),A.onAfterRender(Z,j,rt,it,nt,Bt)}function Yn(A,j,rt){j.isScene!==!0&&(j=hn);const it=D.get(A),nt=U.state.lights,Bt=U.state.shadowsArray,kt=nt.state.version,It=zt.getParameters(A,nt.state,Bt,j,rt,U.state.lightProbeGridArray),Yt=zt.getProgramCacheKey(It);let Xt=it.programs;it.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?j.environment:null,it.fog=j.fog;const ee=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;it.envMap=$.get(A.envMap||it.environment,ee),it.envMapRotation=it.environment!==null&&A.envMap===null?j.environmentRotation:A.envMapRotation,Xt===void 0&&(A.addEventListener("dispose",Se),Xt=new Map,it.programs=Xt);let pe=Xt.get(Yt);if(pe!==void 0){if(it.currentProgram===pe&&it.lightsStateVersion===kt)return ci(A,It),pe}else It.uniforms=zt.getUniforms(A),X!==null&&A.isNodeMaterial&&X.build(A,rt,It),A.onBeforeCompile(It,Z),pe=zt.acquireProgram(It,Yt),Xt.set(Yt,pe),it.uniforms=It.uniforms;const Jt=it.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Jt.clippingPlanes=wt.uniform),ci(A,It),it.needsLights=ha(A),it.lightsStateVersion=kt,it.needsLights&&(Jt.ambientLightColor.value=nt.state.ambient,Jt.lightProbe.value=nt.state.probe,Jt.directionalLights.value=nt.state.directional,Jt.directionalLightShadows.value=nt.state.directionalShadow,Jt.spotLights.value=nt.state.spot,Jt.spotLightShadows.value=nt.state.spotShadow,Jt.rectAreaLights.value=nt.state.rectArea,Jt.ltc_1.value=nt.state.rectAreaLTC1,Jt.ltc_2.value=nt.state.rectAreaLTC2,Jt.pointLights.value=nt.state.point,Jt.pointLightShadows.value=nt.state.pointShadow,Jt.hemisphereLights.value=nt.state.hemi,Jt.directionalShadowMatrix.value=nt.state.directionalShadowMatrix,Jt.spotLightMatrix.value=nt.state.spotLightMatrix,Jt.spotLightMap.value=nt.state.spotLightMap,Jt.pointShadowMatrix.value=nt.state.pointShadowMatrix),it.lightProbeGrid=U.state.lightProbeGridArray.length>0,it.currentProgram=pe,it.uniformsList=null,pe}function li(A){if(A.uniformsList===null){const j=A.currentProgram.getUniforms();A.uniformsList=Xc.seqWithValue(j.seq,A.uniforms)}return A.uniformsList}function ci(A,j){const rt=D.get(A);rt.outputColorSpace=j.outputColorSpace,rt.batching=j.batching,rt.batchingColor=j.batchingColor,rt.instancing=j.instancing,rt.instancingColor=j.instancingColor,rt.instancingMorph=j.instancingMorph,rt.skinning=j.skinning,rt.morphTargets=j.morphTargets,rt.morphNormals=j.morphNormals,rt.morphColors=j.morphColors,rt.morphTargetsCount=j.morphTargetsCount,rt.numClippingPlanes=j.numClippingPlanes,rt.numIntersection=j.numClipIntersection,rt.vertexAlphas=j.vertexAlphas,rt.vertexTangents=j.vertexTangents,rt.toneMapping=j.toneMapping}function ji(A,j){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;N.setFromMatrixPosition(j.matrixWorld);for(let rt=0,it=A.length;rt<it;rt++){const nt=A[rt];if(nt.texture!==null&&nt.boundingBox.containsPoint(N))return nt}return null}function jn(A,j,rt,it,nt){j.isScene!==!0&&(j=hn),b.resetTextureUnits();const Bt=j.fog,kt=it.isMeshStandardMaterial||it.isMeshLambertMaterial||it.isMeshPhongMaterial?j.environment:null,It=W===null?Z.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:Ce.workingColorSpace,Yt=it.isMeshStandardMaterial||it.isMeshLambertMaterial&&!it.envMap||it.isMeshPhongMaterial&&!it.envMap,Xt=$.get(it.envMap||kt,Yt),ee=it.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,pe=!!rt.attributes.tangent&&(!!it.normalMap||it.anisotropy>0),Jt=!!rt.morphAttributes.position,Pe=!!rt.morphAttributes.normal,rn=!!rt.morphAttributes.color;let $e=ra;it.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&($e=Z.toneMapping);const ke=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,Xe=ke!==void 0?ke.length:0,Vt=D.get(it),Gn=U.state.lights;if(se===!0&&(oe===!0||A!==F)){const He=A===F&&it.id===O;wt.setState(it,A,He)}let Me=!1;it.version===Vt.__version?(Vt.needsLights&&Vt.lightsStateVersion!==Gn.state.version||Vt.outputColorSpace!==It||nt.isBatchedMesh&&Vt.batching===!1||!nt.isBatchedMesh&&Vt.batching===!0||nt.isBatchedMesh&&Vt.batchingColor===!0&&nt.colorTexture===null||nt.isBatchedMesh&&Vt.batchingColor===!1&&nt.colorTexture!==null||nt.isInstancedMesh&&Vt.instancing===!1||!nt.isInstancedMesh&&Vt.instancing===!0||nt.isSkinnedMesh&&Vt.skinning===!1||!nt.isSkinnedMesh&&Vt.skinning===!0||nt.isInstancedMesh&&Vt.instancingColor===!0&&nt.instanceColor===null||nt.isInstancedMesh&&Vt.instancingColor===!1&&nt.instanceColor!==null||nt.isInstancedMesh&&Vt.instancingMorph===!0&&nt.morphTexture===null||nt.isInstancedMesh&&Vt.instancingMorph===!1&&nt.morphTexture!==null||Vt.envMap!==Xt||it.fog===!0&&Vt.fog!==Bt||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==wt.numPlanes||Vt.numIntersection!==wt.numIntersection)||Vt.vertexAlphas!==ee||Vt.vertexTangents!==pe||Vt.morphTargets!==Jt||Vt.morphNormals!==Pe||Vt.morphColors!==rn||Vt.toneMapping!==$e||Vt.morphTargetsCount!==Xe||!!Vt.lightProbeGrid!=U.state.lightProbeGridArray.length>0)&&(Me=!0):(Me=!0,Vt.__version=it.version);let wn=Vt.currentProgram;Me===!0&&(wn=Yn(it,j,nt),X&&it.isNodeMaterial&&X.onUpdateProgram(it,wn,Vt));let ui=!1,Ii=!1,fi=!1;const We=wn.getUniforms(),on=Vt.uniforms;if(Ut.useProgram(wn.program)&&(ui=!0,Ii=!0,fi=!0),it.id!==O&&(O=it.id,Ii=!0),Vt.needsLights){const He=ji(U.state.lightProbeGridArray,nt);Vt.lightProbeGrid!==He&&(Vt.lightProbeGrid=He,Ii=!0)}if(ui||F!==A){Ut.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),We.setValue(q,"projectionMatrix",A.projectionMatrix),We.setValue(q,"viewMatrix",A.matrixWorldInverse);const Zi=We.map.cameraPosition;Zi!==void 0&&Zi.setValue(q,Fe.setFromMatrixPosition(A.matrixWorld)),Oe.logarithmicDepthBuffer&&We.setValue(q,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(it.isMeshPhongMaterial||it.isMeshToonMaterial||it.isMeshLambertMaterial||it.isMeshBasicMaterial||it.isMeshStandardMaterial||it.isShaderMaterial)&&We.setValue(q,"isOrthographic",A.isOrthographicCamera===!0),F!==A&&(F=A,Ii=!0,fi=!0)}if(Vt.needsLights&&(Gn.state.directionalShadowMap.length>0&&We.setValue(q,"directionalShadowMap",Gn.state.directionalShadowMap,b),Gn.state.spotShadowMap.length>0&&We.setValue(q,"spotShadowMap",Gn.state.spotShadowMap,b),Gn.state.pointShadowMap.length>0&&We.setValue(q,"pointShadowMap",Gn.state.pointShadowMap,b)),nt.isSkinnedMesh){We.setOptional(q,nt,"bindMatrix"),We.setOptional(q,nt,"bindMatrixInverse");const He=nt.skeleton;He&&(He.boneTexture===null&&He.computeBoneTexture(),We.setValue(q,"boneTexture",He.boneTexture,b))}nt.isBatchedMesh&&(We.setOptional(q,nt,"batchingTexture"),We.setValue(q,"batchingTexture",nt._matricesTexture,b),We.setOptional(q,nt,"batchingIdTexture"),We.setValue(q,"batchingIdTexture",nt._indirectTexture,b),We.setOptional(q,nt,"batchingColorTexture"),nt._colorsTexture!==null&&We.setValue(q,"batchingColorTexture",nt._colorsTexture,b));const Fi=rt.morphAttributes;if((Fi.position!==void 0||Fi.normal!==void 0||Fi.color!==void 0)&&Wt.update(nt,rt,wn),(Ii||Vt.receiveShadow!==nt.receiveShadow)&&(Vt.receiveShadow=nt.receiveShadow,We.setValue(q,"receiveShadow",nt.receiveShadow)),(it.isMeshStandardMaterial||it.isMeshLambertMaterial||it.isMeshPhongMaterial)&&it.envMap===null&&j.environment!==null&&(on.envMapIntensity.value=j.environmentIntensity),on.dfgLUT!==void 0&&(on.dfgLUT.value=HA()),Ii){if(We.setValue(q,"toneMappingExposure",Z.toneMappingExposure),Vt.needsLights&&Cn(on,fi),Bt&&it.fog===!0&&tt.refreshFogUniforms(on,Bt),tt.refreshMaterialUniforms(on,it,Ot,Nt,U.state.transmissionRenderTarget[A.id]),Vt.needsLights&&Vt.lightProbeGrid){const He=Vt.lightProbeGrid;on.probesSH.value=He.texture,on.probesMin.value.copy(He.boundingBox.min),on.probesMax.value.copy(He.boundingBox.max),on.probesResolution.value.copy(He.resolution)}Xc.upload(q,li(Vt),on,b)}if(it.isShaderMaterial&&it.uniformsNeedUpdate===!0&&(Xc.upload(q,li(Vt),on,b),it.uniformsNeedUpdate=!1),it.isSpriteMaterial&&We.setValue(q,"center",nt.center),We.setValue(q,"modelViewMatrix",nt.modelViewMatrix),We.setValue(q,"normalMatrix",nt.normalMatrix),We.setValue(q,"modelMatrix",nt.matrixWorld),it.uniformsGroups!==void 0){const He=it.uniformsGroups;for(let Zi=0,Va=He.length;Zi<Va;Zi++){const bs=He[Zi];dt.update(bs,wn),dt.bind(bs,wn)}}return wn}function Cn(A,j){A.ambientLightColor.needsUpdate=j,A.lightProbe.needsUpdate=j,A.directionalLights.needsUpdate=j,A.directionalLightShadows.needsUpdate=j,A.pointLights.needsUpdate=j,A.pointLightShadows.needsUpdate=j,A.spotLights.needsUpdate=j,A.spotLightShadows.needsUpdate=j,A.rectAreaLights.needsUpdate=j,A.hemisphereLights.needsUpdate=j}function ha(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return ut},this.getActiveMipmapLevel=function(){return ht},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(A,j,rt){const it=D.get(A);it.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,it.__autoAllocateDepthBuffer===!1&&(it.__useRenderToTexture=!1),D.get(A.texture).__webglTexture=j,D.get(A.depthTexture).__webglTexture=it.__autoAllocateDepthBuffer?void 0:rt,it.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,j){const rt=D.get(A);rt.__webglFramebuffer=j,rt.__useDefaultFramebuffer=j===void 0};const zi=q.createFramebuffer();this.setRenderTarget=function(A,j=0,rt=0){W=A,ut=j,ht=rt;let it=null,nt=!1,Bt=!1;if(A){const It=D.get(A);if(It.__useDefaultFramebuffer!==void 0){Ut.bindFramebuffer(q.FRAMEBUFFER,It.__webglFramebuffer),lt.copy(A.viewport),mt.copy(A.scissor),Et=A.scissorTest,Ut.viewport(lt),Ut.scissor(mt),Ut.setScissorTest(Et),O=-1;return}else if(It.__webglFramebuffer===void 0)b.setupRenderTarget(A);else if(It.__hasExternalTextures)b.rebindTextures(A,D.get(A.texture).__webglTexture,D.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const ee=A.depthTexture;if(It.__boundDepthTexture!==ee){if(ee!==null&&D.has(ee)&&(A.width!==ee.image.width||A.height!==ee.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(A)}}const Yt=A.texture;(Yt.isData3DTexture||Yt.isDataArrayTexture||Yt.isCompressedArrayTexture)&&(Bt=!0);const Xt=D.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Xt[j])?it=Xt[j][rt]:it=Xt[j],nt=!0):A.samples>0&&b.useMultisampledRTT(A)===!1?it=D.get(A).__webglMultisampledFramebuffer:Array.isArray(Xt)?it=Xt[rt]:it=Xt,lt.copy(A.viewport),mt.copy(A.scissor),Et=A.scissorTest}else lt.copy(Dt).multiplyScalar(Ot).floor(),mt.copy(Ft).multiplyScalar(Ot).floor(),Et=ie;if(rt!==0&&(it=zi),Ut.bindFramebuffer(q.FRAMEBUFFER,it)&&Ut.drawBuffers(A,it),Ut.viewport(lt),Ut.scissor(mt),Ut.setScissorTest(Et),nt){const It=D.get(A.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+j,It.__webglTexture,rt)}else if(Bt){const It=j;for(let Yt=0;Yt<A.textures.length;Yt++){const Xt=D.get(A.textures[Yt]);q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0+Yt,Xt.__webglTexture,rt,It)}}else if(A!==null&&rt!==0){const It=D.get(A.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,It.__webglTexture,rt)}O=-1},this.readRenderTargetPixels=function(A,j,rt,it,nt,Bt,kt,It=0){if(!(A&&A.isWebGLRenderTarget)){Ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Yt=D.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&kt!==void 0&&(Yt=Yt[kt]),Yt){Ut.bindFramebuffer(q.FRAMEBUFFER,Yt);try{const Xt=A.textures[It],ee=Xt.format,pe=Xt.type;if(A.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+It),!Oe.textureFormatReadable(ee)){Ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Oe.textureTypeReadable(pe)){Ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=A.width-it&&rt>=0&&rt<=A.height-nt&&q.readPixels(j,rt,it,nt,V.convert(ee),V.convert(pe),Bt)}finally{const Xt=W!==null?D.get(W).__webglFramebuffer:null;Ut.bindFramebuffer(q.FRAMEBUFFER,Xt)}}},this.readRenderTargetPixelsAsync=async function(A,j,rt,it,nt,Bt,kt,It=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Yt=D.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&kt!==void 0&&(Yt=Yt[kt]),Yt)if(j>=0&&j<=A.width-it&&rt>=0&&rt<=A.height-nt){Ut.bindFramebuffer(q.FRAMEBUFFER,Yt);const Xt=A.textures[It],ee=Xt.format,pe=Xt.type;if(A.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+It),!Oe.textureFormatReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Oe.textureTypeReadable(pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Jt=q.createBuffer();q.bindBuffer(q.PIXEL_PACK_BUFFER,Jt),q.bufferData(q.PIXEL_PACK_BUFFER,Bt.byteLength,q.STREAM_READ),q.readPixels(j,rt,it,nt,V.convert(ee),V.convert(pe),0);const Pe=W!==null?D.get(W).__webglFramebuffer:null;Ut.bindFramebuffer(q.FRAMEBUFFER,Pe);const rn=q.fenceSync(q.SYNC_GPU_COMMANDS_COMPLETE,0);return q.flush(),await ky(q,rn,4),q.bindBuffer(q.PIXEL_PACK_BUFFER,Jt),q.getBufferSubData(q.PIXEL_PACK_BUFFER,0,Bt),q.deleteBuffer(Jt),q.deleteSync(rn),Bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,j=null,rt=0){const it=Math.pow(2,-rt),nt=Math.floor(A.image.width*it),Bt=Math.floor(A.image.height*it),kt=j!==null?j.x:0,It=j!==null?j.y:0;b.setTexture2D(A,0),q.copyTexSubImage2D(q.TEXTURE_2D,rt,0,0,kt,It,nt,Bt),Ut.unbindTexture()};const dn=q.createFramebuffer(),Js=q.createFramebuffer();this.copyTextureToTexture=function(A,j,rt=null,it=null,nt=0,Bt=0){let kt,It,Yt,Xt,ee,pe,Jt,Pe,rn;const $e=A.isCompressedTexture?A.mipmaps[Bt]:A.image;if(rt!==null)kt=rt.max.x-rt.min.x,It=rt.max.y-rt.min.y,Yt=rt.isBox3?rt.max.z-rt.min.z:1,Xt=rt.min.x,ee=rt.min.y,pe=rt.isBox3?rt.min.z:0;else{const on=Math.pow(2,-nt);kt=Math.floor($e.width*on),It=Math.floor($e.height*on),A.isDataArrayTexture?Yt=$e.depth:A.isData3DTexture?Yt=Math.floor($e.depth*on):Yt=1,Xt=0,ee=0,pe=0}it!==null?(Jt=it.x,Pe=it.y,rn=it.z):(Jt=0,Pe=0,rn=0);const ke=V.convert(j.format),Xe=V.convert(j.type);let Vt;j.isData3DTexture?(b.setTexture3D(j,0),Vt=q.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(b.setTexture2DArray(j,0),Vt=q.TEXTURE_2D_ARRAY):(b.setTexture2D(j,0),Vt=q.TEXTURE_2D),Ut.activeTexture(q.TEXTURE0),Ut.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,j.flipY),Ut.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),Ut.pixelStorei(q.UNPACK_ALIGNMENT,j.unpackAlignment);const Gn=Ut.getParameter(q.UNPACK_ROW_LENGTH),Me=Ut.getParameter(q.UNPACK_IMAGE_HEIGHT),wn=Ut.getParameter(q.UNPACK_SKIP_PIXELS),ui=Ut.getParameter(q.UNPACK_SKIP_ROWS),Ii=Ut.getParameter(q.UNPACK_SKIP_IMAGES);Ut.pixelStorei(q.UNPACK_ROW_LENGTH,$e.width),Ut.pixelStorei(q.UNPACK_IMAGE_HEIGHT,$e.height),Ut.pixelStorei(q.UNPACK_SKIP_PIXELS,Xt),Ut.pixelStorei(q.UNPACK_SKIP_ROWS,ee),Ut.pixelStorei(q.UNPACK_SKIP_IMAGES,pe);const fi=A.isDataArrayTexture||A.isData3DTexture,We=j.isDataArrayTexture||j.isData3DTexture;if(A.isDepthTexture){const on=D.get(A),Fi=D.get(j),He=D.get(on.__renderTarget),Zi=D.get(Fi.__renderTarget);Ut.bindFramebuffer(q.READ_FRAMEBUFFER,He.__webglFramebuffer),Ut.bindFramebuffer(q.DRAW_FRAMEBUFFER,Zi.__webglFramebuffer);for(let Va=0;Va<Yt;Va++)fi&&(q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,D.get(A).__webglTexture,nt,pe+Va),q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,D.get(j).__webglTexture,Bt,rn+Va)),q.blitFramebuffer(Xt,ee,kt,It,Jt,Pe,kt,It,q.DEPTH_BUFFER_BIT,q.NEAREST);Ut.bindFramebuffer(q.READ_FRAMEBUFFER,null),Ut.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else if(nt!==0||A.isRenderTargetTexture||D.has(A)){const on=D.get(A),Fi=D.get(j);Ut.bindFramebuffer(q.READ_FRAMEBUFFER,dn),Ut.bindFramebuffer(q.DRAW_FRAMEBUFFER,Js);for(let He=0;He<Yt;He++)fi?q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,on.__webglTexture,nt,pe+He):q.framebufferTexture2D(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,on.__webglTexture,nt),We?q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,Fi.__webglTexture,Bt,rn+He):q.framebufferTexture2D(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Fi.__webglTexture,Bt),nt!==0?q.blitFramebuffer(Xt,ee,kt,It,Jt,Pe,kt,It,q.COLOR_BUFFER_BIT,q.NEAREST):We?q.copyTexSubImage3D(Vt,Bt,Jt,Pe,rn+He,Xt,ee,kt,It):q.copyTexSubImage2D(Vt,Bt,Jt,Pe,Xt,ee,kt,It);Ut.bindFramebuffer(q.READ_FRAMEBUFFER,null),Ut.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else We?A.isDataTexture||A.isData3DTexture?q.texSubImage3D(Vt,Bt,Jt,Pe,rn,kt,It,Yt,ke,Xe,$e.data):j.isCompressedArrayTexture?q.compressedTexSubImage3D(Vt,Bt,Jt,Pe,rn,kt,It,Yt,ke,$e.data):q.texSubImage3D(Vt,Bt,Jt,Pe,rn,kt,It,Yt,ke,Xe,$e):A.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,Bt,Jt,Pe,kt,It,ke,Xe,$e.data):A.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,Bt,Jt,Pe,$e.width,$e.height,ke,$e.data):q.texSubImage2D(q.TEXTURE_2D,Bt,Jt,Pe,kt,It,ke,Xe,$e);Ut.pixelStorei(q.UNPACK_ROW_LENGTH,Gn),Ut.pixelStorei(q.UNPACK_IMAGE_HEIGHT,Me),Ut.pixelStorei(q.UNPACK_SKIP_PIXELS,wn),Ut.pixelStorei(q.UNPACK_SKIP_ROWS,ui),Ut.pixelStorei(q.UNPACK_SKIP_IMAGES,Ii),Bt===0&&j.generateMipmaps&&q.generateMipmap(Vt),Ut.unbindTexture()},this.initRenderTarget=function(A){D.get(A).__webglFramebuffer===void 0&&b.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?b.setTextureCube(A,0):A.isData3DTexture?b.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?b.setTexture2DArray(A,0):b.setTexture2D(A,0),Ut.unbindTexture()},this.resetState=function(){ut=0,ht=0,W=null,Ut.reset(),bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return sa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Ce._getDrawingBufferColorSpace(t),i.unpackColorSpace=Ce._getUnpackColorSpace()}}const kA={0:[[{x:0,y:-.75,z:0},{x:-.32,y:-.6,z:0},{x:-.42,y:-.3,z:0},{x:-.45,y:0,z:0},{x:-.42,y:.3,z:0},{x:-.32,y:.6,z:0},{x:0,y:.75,z:0},{x:.32,y:.6,z:0},{x:.42,y:.3,z:0},{x:.45,y:0,z:0},{x:.42,y:-.3,z:0},{x:.32,y:-.6,z:0},{x:0,y:-.75,z:0}]],1:[[{x:-.22,y:-.75,z:0},{x:.22,y:-.75,z:0}],[{x:0,y:-.75,z:0},{x:0,y:.72,z:0},{x:-.15,y:.55,z:0}]],2:[[{x:-.35,y:.4,z:0},{x:-.3,y:.62,z:0},{x:-.12,y:.75,z:0},{x:.12,y:.75,z:0},{x:.32,y:.62,z:0},{x:.35,y:.35,z:0},{x:.15,y:.08,z:0},{x:-.35,y:-.5,z:0},{x:-.35,y:-.75,z:0},{x:.35,y:-.75,z:0}]],3:[[{x:-.32,y:.55,z:0},{x:-.1,y:.75,z:0},{x:.25,y:.75,z:0},{x:.35,y:.52,z:0},{x:.2,y:.2,z:0},{x:-.05,y:.08,z:0},{x:.22,y:-.05,z:0},{x:.35,y:-.38,z:0},{x:.25,y:-.72,z:0},{x:-.1,y:-.75,z:0},{x:-.32,y:-.55,z:0}]],4:[[{x:-.32,y:.72,z:0},{x:-.35,y:.12,z:0},{x:.35,y:.12,z:0}],[{x:.18,y:-.75,z:0},{x:.18,y:.75,z:0}]],5:[[{x:.32,y:.75,z:0},{x:-.28,y:.75,z:0},{x:-.28,y:.1,z:0},{x:0,y:.12,z:0},{x:.28,y:.05,z:0},{x:.35,y:-.28,z:0},{x:.25,y:-.68,z:0},{x:-.1,y:-.75,z:0},{x:-.32,y:-.58,z:0}]],6:[[{x:.28,y:.7,z:0},{x:-.1,y:.75,z:0},{x:-.32,y:.45,z:0},{x:-.35,y:-.15,z:0},{x:-.2,y:-.65,z:0},{x:.05,y:-.75,z:0},{x:.32,y:-.6,z:0},{x:.35,y:-.18,z:0},{x:.1,y:.05,z:0},{x:-.15,y:.05,z:0},{x:-.32,y:-.15,z:0}]],7:[[{x:-.35,y:.72,z:0},{x:.35,y:.75,z:0},{x:.08,y:-.1,z:0},{x:-.12,y:-.75,z:0}]],8:[[{x:0,y:0,z:0},{x:-.3,y:.18,z:0},{x:-.32,y:.5,z:0},{x:-.12,y:.72,z:0},{x:.12,y:.72,z:0},{x:.32,y:.5,z:0},{x:.3,y:.18,z:0},{x:0,y:0,z:0},{x:-.32,y:-.18,z:0},{x:-.35,y:-.52,z:0},{x:-.15,y:-.75,z:0},{x:.15,y:-.75,z:0},{x:.35,y:-.52,z:0},{x:.32,y:-.18,z:0},{x:0,y:0,z:0}]],9:[[{x:.32,y:.18,z:0},{x:.12,y:.02,z:0},{x:-.15,y:.02,z:0},{x:-.32,y:.18,z:0},{x:-.35,y:.52,z:0},{x:-.12,y:.72,z:0},{x:.12,y:.72,z:0},{x:.32,y:.52,z:0},{x:.35,y:.12,z:0},{x:.22,y:-.42,z:0},{x:-.1,y:-.75,z:0},{x:-.28,y:-.7,z:0}]]},XA=[1,6,2,7,5,0,4,9,8,3];function ov(r,t=1){const i=XA.indexOf(r);return i===-1?0:(-.22+i/9*.44)*t}class WA{constructor(){this.ctx=null,this.humNode=null,this.humGain=null,this.backgroundNoiseGain=null,this.mercurySpikeNode=null,this.isHumming=!1,this.masterGain=null,this.clickVolume=.5,this.humVolume=.15}init(){if(!this.ctx)try{const t=window.AudioContext||window.webkitAudioContext;if(!t)return;this.ctx=new t,this.masterGain=this.ctx.createGain(),this.masterGain.gain.setValueAtTime(.8,this.ctx.currentTime),this.masterGain.connect(this.ctx.destination)}catch(t){console.warn("Web Audio API is not supported in this browser",t)}}setMasterVolume(t){this.init(),!(!this.masterGain||!this.ctx)&&this.masterGain.gain.setValueAtTime(t,this.ctx.currentTime)}setHumVolume(t){this.humVolume=t,this.humGain&&this.ctx&&this.humGain.gain.setValueAtTime(t*.1,this.ctx.currentTime)}setClickVolume(t){this.clickVolume=t}playSwitchClick(){if(this.init(),!this.ctx||!this.masterGain)return;this.ctx.state==="suspended"&&this.ctx.resume();const t=this.ctx.currentTime,i=this.ctx.createOscillator(),s=this.ctx.createGain();i.type="sine",i.frequency.setValueAtTime(1400,t),i.frequency.exponentialRampToValueAtTime(120,t+.08),s.gain.setValueAtTime(this.clickVolume*.8,t),s.gain.linearRampToValueAtTime(.001,t+.08),i.connect(s),s.connect(this.masterGain),i.start(t),i.stop(t+.09);const l=this.ctx.createOscillator(),c=this.ctx.createGain();l.type="triangle",l.frequency.setValueAtTime(150,t),l.frequency.setValueAtTime(60,t+.02),c.gain.setValueAtTime(this.clickVolume*1,t),c.gain.linearRampToValueAtTime(.001,t+.15),l.connect(c),c.connect(this.masterGain),l.start(t),l.stop(t+.16);const h=this.ctx.sampleRate*.02,d=this.ctx.createBuffer(1,h,this.ctx.sampleRate),m=d.getChannelData(0);for(let g=0;g<h;g++)m[g]=Math.random()*2-1;const p=this.ctx.createBufferSource();p.buffer=d;const v=this.ctx.createBiquadFilter();v.type="bandpass",v.frequency.setValueAtTime(2500,t),v.Q.setValueAtTime(4,t);const x=this.ctx.createGain();x.gain.setValueAtTime(this.clickVolume*.4,t),x.gain.linearRampToValueAtTime(.001,t+.02),p.connect(v),v.connect(x),x.connect(this.masterGain),p.start(t)}playRelayTick(){if(this.init(),!this.ctx||!this.masterGain||this.clickVolume<.01)return;this.ctx.state==="suspended"&&this.ctx.resume();const t=this.ctx.currentTime,i=this.ctx.createOscillator(),s=this.ctx.createGain();i.type="triangle",i.frequency.setValueAtTime(3200,t),i.frequency.exponentialRampToValueAtTime(600,t+.015),s.gain.setValueAtTime(this.clickVolume*.22,t),s.gain.exponentialRampToValueAtTime(.001,t+.015),i.connect(s),s.connect(this.masterGain),i.start(t),i.stop(t+.016);const l=this.ctx.createOscillator(),c=this.ctx.createGain();l.type="sine",l.frequency.setValueAtTime(6500,t),c.gain.setValueAtTime(this.clickVolume*.12,t),c.gain.exponentialRampToValueAtTime(.001,t+.008),l.connect(c),c.connect(this.masterGain),l.start(t),l.stop(t+.01)}startTransformerHum(){if(this.init(),!this.ctx||!this.masterGain||this.isHumming)return;this.ctx.state==="suspended"&&this.ctx.resume();const t=this.ctx.currentTime;this.isHumming=!0,this.humGain=this.ctx.createGain(),this.humGain.gain.setValueAtTime(0,t),this.humGain.gain.linearRampToValueAtTime(this.humVolume*.12,t+1.2);const i=this.ctx.createOscillator();i.type="sine",i.frequency.setValueAtTime(60,t);const s=this.ctx.createOscillator();s.type="triangle",s.frequency.setValueAtTime(120,t);const l=this.ctx.createGain();l.gain.setValueAtTime(.35,t);const c=this.ctx.createOscillator();c.type="sawtooth",c.frequency.setValueAtTime(180,t);const h=this.ctx.createGain();h.gain.setValueAtTime(.08,t);const d=this.ctx.createOscillator();d.type="sine",d.frequency.setValueAtTime(.7,t);const m=this.ctx.createGain();m.gain.setValueAtTime(.08,t);const p=this.ctx.createBiquadFilter();p.type="lowpass",p.frequency.setValueAtTime(280,t),d.connect(m),m.connect(l.gain),i.connect(p),s.connect(l),l.connect(p),c.connect(h),h.connect(p),p.connect(this.humGain),this.humGain.connect(this.masterGain),d.start(t),i.start(t),s.start(t),c.start(t),this.humNode=i}stopTransformerHum(){if(!this.ctx||!this.isHumming)return;const t=this.ctx.currentTime;this.humGain&&(this.humGain.gain.cancelScheduledValues(t),this.humGain.gain.setValueAtTime(this.humGain.gain.value,t),this.humGain.gain.exponentialRampToValueAtTime(1e-4,t+.4)),setTimeout(()=>{try{this.humNode&&(this.humNode.disconnect(),this.humNode=null),this.humGain&&(this.humGain.disconnect(),this.humGain=null)}catch{}this.isHumming=!1},500)}playPowerSputter(){if(this.init(),!this.ctx||!this.masterGain||this.clickVolume<.01)return;this.ctx.state==="suspended"&&this.ctx.resume();const t=this.ctx.currentTime,i=.6;for(let s=0;s<8;s++){const l=Math.random()*i,c=t+l,h=this.ctx.createBiquadFilter();h.type="bandpass",h.frequency.setValueAtTime(800+Math.random()*2e3,c),h.Q.setValueAtTime(3+Math.random()*5,c);const d=this.ctx.createOscillator();d.type="sawtooth",d.frequency.setValueAtTime(150+Math.random()*300,c);const m=this.ctx.createGain();m.gain.setValueAtTime(this.clickVolume*.15,c),m.gain.linearRampToValueAtTime(.001,c+.01+Math.random()*.03),d.connect(h),h.connect(m),m.connect(this.masterGain),d.start(c),d.stop(c+.05)}}}const un=new WA,lv={classic:{core:16774112,sheath:16726784,aura:16720384,ambient:16731136,trace:5068287},mercury:{core:14743551,sheath:35071,aura:19711,ambient:41727,trace:16736768},radioactive:{core:15794160,sheath:65348,aura:52241,ambient:1179426,trace:16746496}},qA=({powerOn:r,glowColor:t,exaggerateDepth:i,showGrid:s,timeMode:l,format12:c,flickerDegree:h,runCpp:d,dofEnabled:m,soundEnabled:p,onFpsUpdate:v,onTubeClick:x,onBackgroundClick:g})=>{const S=Zt.useRef(null),E=Zt.useRef(null),w=Zt.useRef(r),M=Zt.useRef(t),y=Zt.useRef(i),C=Zt.useRef(s),L=Zt.useRef(c),N=Zt.useRef(l),H=Zt.useRef(h),U=Zt.useRef(d),I=Zt.useRef(p),T=Zt.useRef(x),z=Zt.useRef(g);Zt.useEffect(()=>{w.current=r},[r]),Zt.useEffect(()=>{M.current=t},[t]),Zt.useEffect(()=>{y.current=i},[i]),Zt.useEffect(()=>{C.current=s},[s]),Zt.useEffect(()=>{L.current=c},[c]),Zt.useEffect(()=>{N.current=l},[l]),Zt.useEffect(()=>{H.current=h},[h]),Zt.useEffect(()=>{U.current=d},[d]),Zt.useEffect(()=>{I.current=p},[p]),Zt.useEffect(()=>{T.current=x},[x]),Zt.useEffect(()=>{z.current=g},[g]),Zt.useRef([0,0,0,0,0,0]);const Z=Zt.useRef(!0);Zt.useRef(!1),Zt.useRef({x:0,y:0});const B=Zt.useRef({x:.25,y:.1}),X=Zt.useRef({x:.25,y:.1}),ut=Zt.useRef(Array(6).fill(null).map(()=>Array(10).fill(0)));return Zt.useEffect(()=>{if(!E.current||!S.current)return;const ht=S.current.clientWidth,W=S.current.clientHeight,O=new VA({canvas:E.current,antialias:!0,alpha:!1,powerPreference:"high-performance",precision:"highp"});O.setPixelRatio(Math.min(window.devicePixelRatio,2)),O.setSize(ht,W),O.shadowMap.enabled=!0,O.shadowMap.type=dv,O.toneMapping=qd,O.toneMappingExposure=1.35;const F=new sM;F.background=new ve(394500),F.fog=new ip(394500,.04);const lt=ht/W,mt=36,Et=lt<1?mt*(1/lt)*.85:mt,P=new Mi(Et,lt,.1,50);P.position.set(0,1.4,7.8);const Q=new kM(1708557,.6);F.add(Q);const vt=new L_(16774634,1.25);vt.position.set(-3,6,4),vt.castShadow=!0,vt.shadow.mapSize.width=1024,vt.shadow.mapSize.height=1024,vt.shadow.bias=-5e-4,vt.shadow.radius=4,F.add(vt);const Nt=new L_(1121326,.45);Nt.position.set(2,-4,-1),F.add(Nt);const Ot=[];[-3.4,-2.2,-.6,.6,2.2,3.4].forEach(tt=>{const J=new HM(16733440,0,3.5,1.8);J.position.set(tt,-.2,.4),F.add(J),Ot.push(J)});const Mt=new Kn({color:12886362,roughness:.25,metalness:.9});(()=>{const tt=new Pa,J=new Ss(8.4,.5,2.4),Ct=new Kn({color:2430477,roughness:.35,metalness:.05}),wt=new Ne(J,Ct);wt.position.set(0,-.45,0),wt.receiveShadow=!0,wt.castShadow=!0,tt.add(wt);const At=new Ss(8.2,.04,2.2),Rt=new Kn({color:1314828,roughness:.18,metalness:.95}),Wt=new Ne(At,Rt);Wt.position.set(0,-.18,0),Wt.receiveShadow=!0,Wt.castShadow=!0,tt.add(Wt);const te=new yi(.04,.04,.02,8);[[-4,1],[4,1],[-4,-1],[4,-1]].forEach(([dt,Lt])=>{const yt=new Ne(te,Mt);yt.position.set(dt,-.15,Lt),tt.add(yt)});const V=new Ss(.6,.02,.22),bt=new Ne(V,Mt);bt.position.set(0,-.17,1),bt.receiveShadow=!0,tt.add(bt),F.add(tt)})();const Ft=[],ie=[],Kt=.44,se=1.7;for(let tt=0;tt<=30;tt++){const J=tt/30,Ct=-.18+J*se;let wt=Kt;if(J>.85){const At=(J-.85)/.15;wt=Kt*Math.cos(At*Math.PI*.48)}else if(J<.08){const At=J/.08;wt=Kt*(.94+At*.06)}ie.push(new $t(wt,Ct-.7))}const oe=new Kc(ie,32),xe=new IM({color:16777215,metalness:.1,roughness:.06,transmission:.98,ior:1.52,thickness:.45,specularIntensity:2.5,clearcoat:1,clearcoatRoughness:.05,attenuationColor:new ve(15659775),attenuationDistance:1.5,transparent:!0,depthWrite:!1,side:Jn}),Fe=new Kn({color:1118481,roughness:.42,metalness:.15}),ue=tt=>{const J=new Pa;J.position.set(tt,.48,0);const Ct=new yi(.48,.48,.28,32),wt=new Kn({color:2233104,roughness:.7,metalness:.05}),At=new Ne(Ct,wt);At.position.set(0,-.6,0),At.castShadow=!0,At.receiveShadow=!0,At.userData.isTube=!0,J.add(At);const Rt=new yi(.5,.5,.04,32),Wt=new Ne(Rt,Mt);Wt.position.set(0,-.74,0),Wt.userData.isTube=!0,J.add(Wt);const te=new yi(.44,.44,.08,24),re=new Ne(te,Fe);re.position.set(0,-.42,0),re.userData.isTube=!0,J.add(re);const V=new Ne(oe,xe);V.position.set(0,0,0),V.renderOrder=10,V.userData.isTube=!0,J.add(V);const bt=new Pa;if(s){const nn=new yi(.39,.39,1.32,28,24,!0),we=new Kn({color:4011314,wireframe:!0,transparent:!0,opacity:.8,metalness:1,roughness:.4}),De=new Ne(nn,we);De.position.set(0,.12,0),De.rotation.y=.25,De.userData.isTube=!0,bt.add(De);const Be=new yi(.388,.388,1.32,28,24,!0),Ze=new Kn({color:4011314,wireframe:!0,transparent:!0,opacity:.8,metalness:1,roughness:.4}),xn=new Ne(Be,Ze);xn.position.set(0,.12,0),xn.rotation.y=-.25,xn.userData.isTube=!0,bt.add(xn);const Ti=new Kn({color:1906709,roughness:.8,metalness:.15,side:ia}),Yn=new yi(.37,.37,1.1,12,1,!0,Math.PI*.55,Math.PI*.9),li=new Ne(Yn,Ti);li.position.set(0,.12,-.06),bt.add(li);const ci=new yi(.015,.015,1.34,6),ji=new Kn({color:2367516,metalness:.9}),jn=new Ne(ci,ji);jn.position.set(-.35,.12,-.15);const Cn=new Ne(ci,ji);Cn.position.set(.35,.12,-.15),bt.add(jn,Cn)}J.add(bt);const dt=new Kn({color:2366746,roughness:.8,metalness:.1,transparent:!0,opacity:.92}),Lt=new yi(.38,.38,.012,18),yt=new Ne(Lt,dt);yt.position.set(0,.76,0),J.add(yt);const xt=new Ne(Lt,dt);xt.position.set(0,-.36,0),J.add(xt);const Gt=new Kn({color:13553358,roughness:.15,metalness:1}),qt=new op(.12,.012,8,16),Se=new Ne(qt,Gt);Se.position.set(0,.82,0),Se.rotation.set(.12,.18,0),J.add(Se);const fe=new Kn({color:4077106,roughness:.5,metalness:.9}),_n=new yi(.006,.006,.12,6);for(let nn=0;nn<11;nn++){const we=nn/11*Math.PI*2,De=.28,Be=new Ne(_n,fe);Be.position.set(Math.cos(we)*De,-.41,Math.sin(we)*De),J.add(Be)}const vn=[];for(let nn=0;nn<=9;nn++){const we=new Pa,De=ov(nn,i);we.position.set(0,.1,De),we.scale.set(.72,.72,.72);const Be=kA[nn]||[],Ze=[],xn=[];Be.forEach(Cn=>{if(Cn.length<2)return;const ha=Cn.map(nt=>new Y(nt.x,nt.y,nt.z)),zi=new Fv(ha),dn=new Qc(zi,32,.045,6,!1),Js=new Xr({color:16727040,transparent:!0,opacity:0,blending:Jo,depthWrite:!1}),A=new Ne(dn,Js);we.add(A),xn.push(A);const j=new Qc(zi,32,.012,6,!1),rt=new Kn({color:2236189,roughness:.4,metalness:.95,emissive:new ve(0),emissiveIntensity:0}),it=new Ne(j,rt);we.add(it),Ze.push(it)});const Ti=new ll(.8,1.4),Yn=document.createElement("canvas");Yn.width=128,Yn.height=128;const li=Yn.getContext("2d");if(li){const Cn=li.createRadialGradient(64,64,4,64,64,60);Cn.addColorStop(0,"rgba(255, 80, 5, 0.7)"),Cn.addColorStop(.3,"rgba(255, 50, 0, 0.25)"),Cn.addColorStop(1,"rgba(255, 0, 0, 0)"),li.fillStyle=Cn,li.fillRect(0,0,128,128)}const ci=new mM(Yn),ji=new Xr({map:ci,transparent:!0,blending:Jo,depthWrite:!1,opacity:0}),jn=new Ne(Ti,ji);jn.position.set(0,0,-.05),we.add(jn),J.add(we),vn.push({coreMesh:Ze[0],subCores:Ze,subSheaths:xn,glowMesh:jn,index:nn,pathsCount:Be.length})}const $n=new el(.024,8,8),fa=new Xr({color:4476415,transparent:!0,opacity:.005}),Yi=new Ne($n,fa);Yi.position.set(.08,-.38,.22),J.add(Yi),F.add(J),Ft.push({group:J,digitMeshes:vn})};[-3.5,-2.3,-.6,.6,2.3,3.5].forEach(tt=>{ue(tt)});const Ve=[],Mn=tt=>{const J=new Pa;J.position.set(tt,.48,0);const Ct=new yi(.12,.14,.1,16),wt=new Ne(Ct,Mt);wt.position.set(0,-.5,0),J.add(wt);const At=[],Rt=.1;for(let yt=0;yt<=20;yt++){const xt=yt/20,Gt=-.3+xt*1.1;let qt=Rt;xt>.8&&(qt=Rt*Math.cos((xt-.8)/.2*Math.PI*.48)),At.push(new $t(qt,Gt-.2))}const Wt=new Kc(At,16),te=new Ne(Wt,xe);te.renderOrder=10,J.add(te);const re=new el(.035,12,12),V=new el(.075,12,12),bt=[-.1,.3],dt=[],Lt=[];bt.forEach(yt=>{const xt=new Kn({color:2236189,roughness:.1,metalness:.9,emissiveIntensity:0}),Gt=new Ne(re,xt);Gt.position.set(0,yt,0),J.add(Gt),dt.push(Gt);const qt=new Xr({color:16726784,transparent:!0,opacity:0,blending:Jo,depthWrite:!1}),Se=new Ne(V,qt);Se.position.set(0,yt,0),J.add(Se),Lt.push(Se)}),F.add(J),Ve.push({dots:dt,sheaths:Lt})};Mn(-1.45),Mn(1.45);let q=0,en=-1,de=0,Oe=0,Ut=0,Le=0;const D=tt=>{const J=(tt-q)/1e3;q=tt,de++,tt-Oe>=1e3&&(v&&v(Math.round(de*1e3/(tt-Oe))),de=0,Oe=tt),X.current.y=0,X.current.x=.15,B.current.y+=(X.current.y-B.current.y)*.08,B.current.x+=(X.current.x-B.current.x)*.08;const Ct=7.1,wt=B.current.y,At=B.current.x;P.position.x=Ct*Math.sin(wt)*Math.cos(At),P.position.z=Ct*Math.cos(wt)*Math.cos(At),P.position.y=Ct*Math.sin(At)+.4,P.lookAt(new Y(0,.4,0));const Rt=new Date;let Wt=N.current==="utc"?Rt.getUTCHours():Rt.getHours(),te=N.current==="utc"?Rt.getUTCMinutes():Rt.getMinutes(),re=N.current==="utc"?Rt.getUTCSeconds():Rt.getSeconds(),V=Rt.getMilliseconds();L.current&&(Wt=Wt%12,Wt===0&&(Wt=12));const bt=w.current&&V<500;Z.current=bt;let dt=[Math.floor(Wt/10),Wt%10,Math.floor(te/10),te%10,Math.floor(re/10),re%10];U.current&&(Ut+=J,Ut>.06&&(Ut=0,Le=(Le+1)%10),dt=[(Le+2)%10,(Le+7)%10,(Le+4)%10,(Le+9)%10,(Le+1)%10,(Le+6)%10]),w.current&&!U.current&&re!==en&&(en=re,I.current&&(un.playRelayTick(),re===0&&un.playPowerSputter()));const Lt=lv[M.current]||lv.classic;Ve.forEach(yt=>{yt.dots.forEach((xt,Gt)=>{const qt=xt.material,Se=yt.sheaths[Gt].material;if(bt){qt.color.setHex(Lt.core),qt.emissive.setHex(Lt.sheath),qt.emissiveIntensity=8,Se.color.setHex(Lt.sheath);const fe=.85+Math.sin(tt*.05+Gt*5)*.15;Se.opacity=.5*fe}else qt.color.setHex(2236189),qt.emissive.setHex(0),qt.emissiveIntensity=0,Se.opacity=0})});for(let yt=0;yt<6;yt++){const xt=dt[yt],Gt=Ft[yt];let qt=!1;Gt.digitMeshes.forEach(fe=>{const _n=fe.index;let vn=0;fe.subCores.forEach(Be=>{const Ze=Be.parent;Ze&&(Ze.position.z=ov(_n,y.current))}),w.current&&_n===xt&&(vn=1,qt=!0);const $n=ut.current[yt][_n],fa=16,Yi=7;let nn=$n;vn>$n?(nn+=(vn-$n)*fa*J,nn>1&&(nn=1)):(nn+=(vn-$n)*Yi*J,nn<0&&(nn=0)),ut.current[yt][_n]=nn;const we=ut.current[yt][_n];fe.subCores.forEach(Be=>{const Ze=Be.material;if(we>.02){let xn=1;if(H.current>.01){const Ti=tt*.06,Yn=Math.sin(Ti+yt*12)*Math.sin(Ti*.43)*Math.cos(Ti*1.83+_n);xn=1-Math.abs(Yn)*H.current*.42}Ze.color.lerpColors(new ve(3156259),new ve(Lt.core),Math.pow(we,3)),Ze.emissive.setHex(Lt.sheath),Ze.emissiveIntensity=8*we*xn}else Ze.color.setHex(1643536),Ze.emissive.setHex(0),Ze.emissiveIntensity=0}),fe.subSheaths.forEach(Be=>{const Ze=Be.material;Ze.color.setHex(Lt.sheath);const xn=.95+Math.sin(tt*.041+yt*10)*.05*H.current;Ze.opacity=.85*Math.pow(we,2)*xn});const De=fe.glowMesh.material;De.color.setHex(Lt.aura),De.opacity=.75*we});const Se=Ot[yt];if(w.current&&qt){Se.color.setHex(Lt.ambient);const fe=.9+Math.sin(tt*.03+yt*7)*.1*H.current;Se.intensity=4.5*fe}else Se.intensity=0}O.render(F,P),requestAnimationFrame(D)},b=requestAnimationFrame(D);r&&p&&un.startTransformerHum();const $=()=>{if(!S.current||!E.current)return;const tt=S.current.clientWidth,J=S.current.clientHeight,Ct=tt/J;P.aspect=Ct;const wt=Ct<1?mt*(1/Ct)*.85:mt;P.fov=wt,P.updateProjectionMatrix(),O.setSize(tt,J)},gt=new ResizeObserver(()=>{$()});S.current&&gt.observe(S.current);const Tt=new qM,Pt=new $t,zt=tt=>{var Rt;const J=E.current;if(!J)return;const Ct=J.getBoundingClientRect();Pt.x=(tt.clientX-Ct.left)/Ct.width*2-1,Pt.y=-((tt.clientY-Ct.top)/Ct.height)*2+1,Tt.setFromCamera(Pt,P);let wt=!1;const At=Tt.intersectObjects(F.children,!0);for(const Wt of At)if((Rt=Wt.object.userData)!=null&&Rt.isTube){wt=!0;break}wt?T.current&&T.current():z.current&&z.current()};return E.current&&E.current.addEventListener("click",zt),()=>{cancelAnimationFrame(b),gt.disconnect(),E.current&&E.current.removeEventListener("click",zt),O.dispose()}},[]),Zt.useEffect(()=>{r&&p?un.startTransformerHum():un.stopTransformerHum()},[r,p]),et.jsxs("div",{className:"relative w-full h-full select-none",ref:S,id:"canvas-container",children:[et.jsx("canvas",{ref:E,className:"w-full h-full block cursor-grab active:cursor-grabbing",id:"webgl-canvas"}),et.jsx("div",{id:"camera-vignette-fx",className:`absolute inset-0 pointer-events-none transition-all duration-1000 ${m?"bg-[radial-gradient(circle_at_center,transparent_40%,rgba(6,5,4,0.72)_100%)] shadow-[inset_0_0_80px_rgba(0,0,0,0.85)]":"bg-[radial-gradient(circle_at_center,transparent_60%,rgba(6,5,4,0.4)_100%)]"}`}),r&&et.jsx("div",{id:"crt-flare",className:"absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.3)_50%)] bg-[length:100%_4px]"})]})};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YA=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),jA=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,i,s)=>s?s.toUpperCase():i.toLowerCase()),cv=r=>{const t=jA(r);return t.charAt(0).toUpperCase()+t.slice(1)},Qv=(...r)=>r.filter((t,i,s)=>!!t&&t.trim()!==""&&s.indexOf(t)===i).join(" ").trim(),ZA=r=>{for(const t in r)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var KA={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QA=Zt.forwardRef(({color:r="currentColor",size:t=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:l="",children:c,iconNode:h,...d},m)=>Zt.createElement("svg",{ref:m,...KA,width:t,height:t,stroke:r,strokeWidth:s?Number(i)*24/Number(t):i,className:Qv("lucide",l),...!c&&!ZA(d)&&{"aria-hidden":"true"},...d},[...h.map(([p,v])=>Zt.createElement(p,v)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ei=(r,t)=>{const i=Zt.forwardRef(({className:s,...l},c)=>Zt.createElement(QA,{ref:c,iconNode:t,className:Qv(`lucide-${YA(cv(r))}`,`lucide-${r}`,s),...l}));return i.displayName=cv(r),i};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JA=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],Zh=Ei("activity",JA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $A=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],uv=Ei("clock",$A);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t2=[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],e2=Ei("compass",t2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n2=[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]],i2=Ei("cpu",n2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a2=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],s2=Ei("database",a2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r2=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],fv=Ei("eye",r2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o2=[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]],l2=Ei("gauge",o2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c2=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],u2=Ei("layers",c2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f2=[["path",{d:"M12 2v10",key:"mnfbl"}],["path",{d:"M18.4 6.6a9 9 0 1 1-12.77.04",key:"obofu9"}]],h2=Ei("power",f2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d2=[["path",{d:"M10 8h4",key:"1sr2af"}],["path",{d:"M12 21v-9",key:"17s77i"}],["path",{d:"M12 8V3",key:"13r4qs"}],["path",{d:"M17 16h4",key:"h1uq16"}],["path",{d:"M19 12V3",key:"o1uvq1"}],["path",{d:"M19 21v-5",key:"qua636"}],["path",{d:"M3 14h4",key:"bcjad9"}],["path",{d:"M5 10V3",key:"cb8scm"}],["path",{d:"M5 21v-7",key:"1w1uti"}]],p2=Ei("sliders-vertical",d2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m2=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],hv=Ei("volume-2",m2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g2=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],_2=Ei("volume-x",g2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v2=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],Kh=Ei("zap",v2);function x2(){const[r,t]=Zt.useState(!0),[i,s]=Zt.useState("classic"),[l,c]=Zt.useState(1.2),[h,d]=Zt.useState(!0),[m,p]=Zt.useState("local"),[v,x]=Zt.useState(!1),[g,S]=Zt.useState(.15),[E,w]=Zt.useState(!0),[M,y]=Zt.useState(!0),[C,L]=Zt.useState(!0),[N,H]=Zt.useState(!1),[U,I]=Zt.useState(50),[T,z]=Zt.useState(30),[Z,B]=Zt.useState(60),[X,ut]=Zt.useState(!1),ht=Zt.useRef({powerOn:r,runCpp:X,shufflingActive:N});Zt.useEffect(()=>{ht.current={powerOn:r,runCpp:X,shufflingActive:N}},[r,X,N]);const[W,O]=Zt.useState(Date.now()),[F,lt]=Zt.useState(318.4),[mt,Et]=Zt.useState(.142),[P,Q]=Zt.useState(15.2);Zt.useEffect(()=>{const se=setInterval(()=>{O(Date.now()),r&&!X&&(lt(oe=>parseFloat((oe+(Math.random()-.5)*.12).toFixed(2))),Et(oe=>parseFloat(Math.max(.08,Math.min(.25,oe+(Math.random()-.5)*.004)).toFixed(3))),Q(oe=>parseFloat(Math.max(14.8,Math.min(15.6,oe+(Math.random()-.5)*.015)).toFixed(2))))},85);return()=>clearInterval(se)},[r,X]),Zt.useEffect(()=>{un.init(),un.setClickVolume(U/100)},[U]),Zt.useEffect(()=>{un.setHumVolume(T/100)},[T]);const vt=()=>{un.playSwitchClick(),r||un.playPowerSputter(),t(!r)},Nt=()=>{un.playSwitchClick(),y(!M)},Ot=se=>{un.playSwitchClick(),s(se)},ct=()=>{un.playSwitchClick(),un.playPowerSputter(),ut(!0),setTimeout(()=>{ut(!1),un.playSwitchClick()},4500)},Mt=()=>{un.playSwitchClick(),d(!h)},Dt=()=>{un.playSwitchClick(),w(!E)},Ft=()=>{un.playSwitchClick(),p(m==="local"?"utc":"local")},ie=()=>{un.playSwitchClick(),x(!v)},Kt=()=>{if(!ht.current.powerOn||ht.current.runCpp||ht.current.shufflingActive)return;un.playSwitchClick(),un.playPowerSputter(),ut(!0),H(!0);let se=0;const oe=setInterval(()=>{se<18?(un.playRelayTick(),se++):clearInterval(oe)},75);setTimeout(()=>{ut(!1),H(!1),un.playSwitchClick()},1500)};return Zt.useEffect(()=>{const se=setInterval(()=>{Kt()},3e4);return()=>clearInterval(se)},[]),et.jsxs("div",{className:`min-h-[100dvh] bg-[#070605] flex flex-col items-center justify-between font-sans antialiased text-[#dcd1c4] select-none transition-all duration-500 ${C?"p-4 md:p-6":"p-0"}`,id:"app-wrapper",children:[C&&et.jsxs("header",{className:"w-full max-w-7xl flex flex-col sm:flex-row items-center justify-between border-b border-[#251f1a] pb-4 mb-4 select-none",id:"telemetry-header",children:[et.jsxs("div",{className:"flex items-center gap-3",children:[et.jsxs("div",{className:"relative flex items-center justify-center",children:[et.jsx("span",{className:`absolute w-3 h-3 rounded-full ${r?"bg-orange-500 animate-pulse shadow-[0_0_12px_#f97316]":"bg-neutral-800"}`}),et.jsx("span",{className:"w-5 h-5 rounded-full border border-[#f97316]/20 bg-[#120a06]"})]}),et.jsxs("div",{children:[et.jsx("h1",{className:"text-[#eee3be] text-xl font-bold tracking-widest font-sans",id:"app-title",children:"NIXIE VACUUM CHRONOMETER"}),et.jsx("p",{className:"text-xs font-mono text-[#766355] mt-0.5 tracking-wider uppercase",children:"HIGH VOLTAGE DISCHARGE INDUCTOR // LAB-GRADE MK-VII"})]})]}),et.jsxs("div",{className:"flex gap-6 mt-3 sm:mt-0 font-mono text-[10px]",id:"header-counters",children:[et.jsxs("div",{className:"border-l border-[#2e2620] pl-4",children:[et.jsx("span",{className:"block text-[#604f44] uppercase",children:"SYS_POWER"}),et.jsx("span",{className:`font-semibold ${r?"text-green-500":"text-red-500"}`,children:r?"170V DC [LIVE]":"DISCONNECTED"})]}),et.jsxs("div",{className:"border-l border-[#2e2620] pl-4",children:[et.jsx("span",{className:"block text-[#604f44] uppercase",children:"PLASMA_GAS"}),et.jsx("span",{className:"text-[#cfb9a3] font-semibold",children:r?`${P} TORR`:"0.00 TORR"})]}),et.jsxs("div",{className:"border-l border-[#2e2620] pl-4",children:[et.jsx("span",{className:"block text-[#604f44] uppercase",children:"FRAME_REND"}),et.jsxs("span",{className:"text-orange-400 font-semibold",children:[Z," FPS"]})]})]})]}),et.jsxs("main",{className:`grid grid-cols-1 ${C?"w-full max-w-7xl lg:grid-cols-4 gap-6 flex-grow":"fixed inset-0 w-full h-[100dvh] lg:grid-cols-1 z-50"} items-stretch transition-all duration-300`,id:"instrument-deck",children:[C&&et.jsxs("section",{className:"lg:col-span-1 flex flex-col gap-6",id:"telemetry-deck-left",children:[et.jsxs("div",{className:"bg-[#120d0b] border border-[#231c17] rounded-xl p-5 flex flex-col justify-between shadow-2xl relative overflow-hidden",id:"card-power",children:[et.jsx("div",{className:"absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-orange-500/5 to-transparent pointer-events-none"}),et.jsxs("div",{children:[et.jsxs("div",{className:"flex items-center justify-between mb-4",children:[et.jsxs("span",{className:"font-mono text-xs text-[#a28e7e] tracking-wider uppercase flex items-center gap-1.5 font-bold",children:[et.jsx(Kh,{className:"w-3.5 h-3.5 text-orange-400"})," 高電圧電源制御 (MAIN POWER)"]}),et.jsx("span",{className:"text-[9px] font-mono bg-orange-950/40 text-orange-400 border border-orange-500/20 px-1.5 py-0.5 rounded",children:"MAIN-R1"})]}),et.jsx("p",{className:"text-xs text-[#8c7868] leading-relaxed mb-6",children:"ニキシー管アノードのガラス放電電極に170V高電圧電力を供給します。低温起動時にはネオンガスの放電が揺らぐことがあります。"})]}),et.jsxs("div",{className:"flex flex-col gap-3",children:[et.jsxs("button",{onClick:vt,className:`w-full py-3.5 px-4 rounded-lg font-bold tracking-wider text-sm flex items-center justify-center gap-2.5 transition-all outline-none border cursor-pointer ${r?"bg-[#ff4f00] hover:bg-[#ff6924] text-[#fff4e1] border-orange-600 shadow-[0_0_20px_rgba(255,79,0,0.35)]":"bg-[#251e1a] hover:bg-[#2d2520] text-[#715c4d] border-neutral-800"}`,id:"power-switch-button",children:[et.jsx(h2,{className:"w-4.5 h-4.5"}),r?"主電源 ［ON］":"主電源 ［待機］"]}),et.jsxs("button",{disabled:!r||X,onClick:ct,className:`w-full py-2 px-3 rounded-lg font-mono text-xs font-semibold tracking-wider flex items-center justify-center gap-2 transition-all border cursor-pointer ${X?"bg-[#d49930] text-[#120a00] border-[#fbbd54] animate-pulse":r?"bg-[#1d1612] hover:bg-[#271e19] text-[#e8b56d] border-[#3f3128]":"bg-neutral-900 border-[#1f1a17] text-neutral-700 cursor-not-allowed"}`,id:"cpp-trigger-button",children:[et.jsx(i2,{className:"w-3.5 h-3.5"}),X?"電極再生中 [9V]":"電極再生スイープを実行 (CPP)"]})]})]}),et.jsxs("div",{className:"bg-[#120d0b] border border-[#231c17] rounded-xl p-5 flex flex-col justify-between shadow-2xl relative",id:"card-gas-mixture",children:[et.jsxs("span",{className:"font-mono text-xs text-[#a28e7e] tracking-wider uppercase mb-3 flex items-center gap-1.5 font-bold",children:[et.jsx(s2,{className:"w-3.5 h-3.5 text-blue-400"})," 放電ガス・スペクトル (GAS SPECTRUM)"]}),et.jsx("p",{className:"text-xs text-[#8c7868] leading-relaxed mb-4",children:"ガラス管に封入された混合ガスの比率を変更し、放電光の美しさとスペクトル波長（発光色）を調整します。"}),et.jsxs("div",{className:"flex flex-col gap-2.5",children:[et.jsxs("button",{disabled:!r,onClick:()=>Ot("classic"),className:`w-full p-2.5 rounded-lg flex items-center justify-between border transition-all text-xs cursor-pointer ${r?i==="classic"?"bg-[#251307] border-orange-500 text-orange-400 font-bold":"bg-[#18120e] hover:bg-[#1e1713] border-[#29221d] text-[#ae9a8a]":"opacity-30 cursor-not-allowed border-neutral-900"}`,children:[et.jsxs("div",{className:"flex items-center gap-2",children:[et.jsx("span",{className:"w-2 h-2 rounded-full bg-orange-500 shadow-[0_0_6px_#f97316]"}),et.jsx("span",{children:"クラシック・ネオン［琥珀］ (Ne-Ar)"})]}),et.jsx("span",{className:"font-mono text-[9px] text-[#604f44]",children:"170V DC"})]}),et.jsxs("button",{disabled:!r,onClick:()=>Ot("mercury"),className:`w-full p-2.5 rounded-lg flex items-center justify-between border transition-all text-xs cursor-pointer ${r?i==="mercury"?"bg-[#0b172d] border-blue-500 text-blue-400 font-bold":"bg-[#18120e] hover:bg-[#1e1713] border-[#29221d] text-[#ae9a8a]":"opacity-30 cursor-not-allowed border-neutral-900"}`,children:[et.jsxs("div",{className:"flex items-center gap-2",children:[et.jsx("span",{className:"w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_6px_#3b82f6]"}),et.jsx("span",{children:"水銀インダクション［蒼碧］ (Hg-Ne)"})]}),et.jsx("span",{className:"font-mono text-[9px] text-[#604f44]",children:"185V DC"})]}),et.jsxs("button",{disabled:!r,onClick:()=>Ot("radioactive"),className:`w-full p-2.5 rounded-lg flex items-center justify-between border transition-all text-xs cursor-pointer ${r?i==="radioactive"?"bg-[#0c1c13] border-emerald-500 text-emerald-400 font-bold":"bg-[#18120e] hover:bg-[#1e1713] border-[#29221d] text-[#ae9a8a]":"opacity-30 cursor-not-allowed border-neutral-900"}`,children:[et.jsxs("div",{className:"flex items-center gap-2",children:[et.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_6px_#10b981]"}),et.jsx("span",{children:"クリプトン・グロウ［翠緑］ (Kr-N2)"})]}),et.jsx("span",{className:"font-mono text-[9px] text-[#604f44]",children:"210V DC"})]})]})]})]}),et.jsxs("section",{className:`flex flex-col ${C?"lg:col-span-2 min-h-[460px] md:min-h-[500px]":"w-full h-full lg:col-span-1 absolute inset-0 z-0 bg-transparent"} justify-between ${C?"gap-4":"gap-0"}`,id:"middle-viewport",children:[et.jsxs("div",{className:`${C?"bg-radial from-[#15110e] to-[#0a0807] border border-[#2b221a] rounded-2xl flex-grow overflow-hidden shadow-inner relative flex flex-col":"w-full h-full bg-black relative flex-grow overflow-hidden flex flex-col"}`,id:"nixie-stage",children:[C&&et.jsxs(et.Fragment,{children:[et.jsxs("div",{className:"absolute top-4 left-4 z-10 flex gap-2 font-mono text-[9px]",id:"stage-status-tags",children:[et.jsx("span",{className:"px-2 py-1 rounded bg-black/60 backdrop-blur-md border border-[#261f18] text-[#a59180] tracking-wider font-semibold uppercase",children:"GLASS IOR: 1.54"}),et.jsx("span",{className:"px-2 py-1 rounded bg-black/60 backdrop-blur-md border border-[#261f18] text-[#a59180] tracking-wider font-semibold uppercase",children:"DOB: 1968"})]}),et.jsx("div",{className:"absolute top-4 right-4 z-10 flex gap-2 font-mono text-[9px]",id:"stage-util-tags",children:et.jsxs("span",{className:"px-2 py-1 rounded bg-black/60 backdrop-blur-md border border-[#261f18] text-[#f97316] tracking-wider font-bold uppercase flex items-center gap-1.5 animate-pulse",children:[et.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-orange-500"})," HDR PASS"]})})]}),et.jsx("div",{className:"w-full flex-grow relative",id:"canvas-frame",children:et.jsx(qA,{powerOn:r,glowColor:i,exaggerateDepth:l,showGrid:h,timeMode:m,format12:v,flickerDegree:g,runCpp:X,dofEnabled:E,soundEnabled:M,onFpsUpdate:B,onTubeClick:Kt,onBackgroundClick:()=>L(!0)})}),C&&et.jsxs("div",{className:"absolute bottom-4 left-1/2 -translate-x-1/2 z-10 bg-black/70 backdrop-blur-md border border-[#252019] px-4 py-2 rounded-full text-[9px] font-mono tracking-widest text-[#7c695b] text-center flex items-center gap-2 uppercase select-none w-[90%] justify-center pointer-events-none",id:"orbit-tips",children:[et.jsx(e2,{className:"w-3.5 h-3.5 text-[#a48c77]"})," NIXIE TUBES ARE INTERACTIVE. CLICK THEM TO TRIGGER SHUFFLE"]})]}),C&&et.jsxs("div",{className:"flex flex-col items-center gap-1 bg-[#110c09] border border-[#2a2119] rounded-xl p-4 shadow-xl text-center select-none",id:"shuffle-deck",children:[et.jsxs("button",{disabled:!r||X||N,onClick:Kt,className:`px-8 py-3.5 rounded-lg font-bold tracking-widest text-[#ffffff] border transition-all cursor-pointer flex items-center justify-center gap-2.5 ${r?N?"bg-[#ff5500] border-[#ffa14c] animate-pulse shadow-[0_0_20px_#ff5500]":"bg-gradient-to-b from-[#ff5500] to-[#b33300] hover:from-[#ff6d24] hover:to-[#cd3f00] border-[#ff7315] shadow-[0_4px_12px_rgba(255,85,0,0.25)] hover:shadow-[0_4px_20px_rgba(255,85,0,0.45)]":"bg-neutral-900 border-[#221c17] text-neutral-600 cursor-not-allowed"}`,id:"shuffle-filaments-button",children:[et.jsx(Zh,{className:`w-4 h-4 ${N?"animate-[spin_1s_linear_infinite]":""}`}),et.jsx("span",{children:"SHUFFLE FILAMENTS"})]}),et.jsx("span",{className:"text-[9px] font-mono text-[#7a6452] uppercase mt-1 tracking-wider",children:"TRIGGER RANDOMIZED DISCHARGE SWEEP // SCRAMBLE ELECTRODES"})]})]}),C&&et.jsxs("section",{className:"lg:col-span-1 flex flex-col gap-6",id:"telemetry-deck-right",onClick:se=>se.stopPropagation(),children:[et.jsxs("div",{className:"bg-[#120d0b] border border-[#231c17] rounded-xl p-5 shadow-2xl flex flex-col justify-between",id:"card-hardware-calibration",children:[et.jsx("div",{children:et.jsxs("span",{className:"font-mono text-[11px] text-[#a28e7e] tracking-wider uppercase mb-5 flex items-center gap-1.5 font-bold",children:[et.jsx(p2,{className:"w-3.5 h-3.5 text-orange-400"})," 真空管ダイヤル (DIALS)"]})}),et.jsxs("div",{className:"flex flex-col gap-6",children:[et.jsxs("div",{children:[et.jsxs("div",{className:"flex items-center justify-between mb-2 font-mono text-[10px]",children:[et.jsxs("span",{className:"text-[#a28e7e] flex items-center gap-1",children:[et.jsx(u2,{className:"w-3.5 h-3.5 text-amber-500"})," 前後奥行き補正 (Z-DEPTH)"]}),et.jsxs("span",{className:"text-orange-400 font-bold",children:[l.toFixed(1),"x"]})]}),et.jsx("input",{type:"range",min:"0.5",max:"2.5",step:"0.1",value:l,onChange:se=>c(parseFloat(se.target.value)),className:"w-full h-1 bg-gradient-to-r from-orange-950 to-orange-600 rounded-lg appearance-none cursor-pointer accent-[#ff5500] outline-none"})]}),et.jsxs("div",{children:[et.jsxs("div",{className:"flex items-center justify-between mb-2 font-mono text-[10px]",children:[et.jsxs("span",{className:"text-[#a28e7e] flex items-center gap-1",children:[et.jsx(Zh,{className:"w-3.5 h-3.5 text-[#ff7139]"})," 放電ゆらぎ強度 (FLICKER)"]}),et.jsxs("span",{className:"text-orange-400 font-bold",children:[Math.round(g*100),"%"]})]}),et.jsx("input",{type:"range",min:"0.0",max:"1.0",step:"0.05",value:g,onChange:se=>S(parseFloat(se.target.value)),className:"w-full h-1 bg-gradient-to-r from-orange-950 to-orange-600 rounded-lg appearance-none cursor-pointer accent-[#ff5500] outline-none"})]}),et.jsxs("div",{className:"border-t border-[#231a15] pt-4 mt-2",children:[et.jsxs("div",{className:"flex items-center justify-between mb-4 font-mono text-[11px] text-[#a28e7e] font-bold",children:[et.jsxs("span",{className:"flex items-center gap-1.5 uppercase",children:[M?et.jsx(hv,{className:"w-3.5 h-3.5 text-orange-400"}):et.jsx(_2,{className:"w-3.5 h-3.5 text-neutral-600"}),"スピーカー (AUDIO)"]}),et.jsxs("label",{className:"relative inline-flex items-center cursor-pointer select-none",children:[et.jsx("input",{type:"checkbox",checked:M,onChange:Nt,className:"sr-only peer"}),et.jsx("div",{className:"w-8 h-4 bg-[#231a14] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-[#866f5c] after:border-neutral-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-[#ff5500] peer-checked:after:bg-[#fff]"})]})]}),et.jsxs("div",{className:`space-y-4 transition-opacity duration-300 ${M?"opacity-100":"opacity-30 pointer-events-none"}`,children:[et.jsxs("div",{children:[et.jsxs("div",{className:"flex justify-between font-mono text-[10px] mb-2",children:[et.jsx("span",{className:"text-[#8c7868]",children:"高周波トランス・ノイズ"}),et.jsxs("span",{className:"text-orange-400 flex items-center gap-1",children:[et.jsx(Kh,{className:"w-2.5 h-2.5"}),T,"%"]})]}),et.jsx("input",{type:"range",min:"0",max:"100",value:T,onChange:se=>z(parseInt(se.target.value)),className:"w-full h-1 bg-[#251e18] rounded-lg appearance-none cursor-pointer accent-[#ff5500] outline-none"})]}),et.jsxs("div",{children:[et.jsxs("div",{className:"flex justify-between font-mono text-[10px] mb-2",children:[et.jsx("span",{className:"text-[#8c7868]",children:"電磁リレー・クリック音"}),et.jsxs("span",{className:"text-orange-400 flex items-center gap-1",children:[et.jsx(hv,{className:"w-2.5 h-2.5"}),U,"%"]})]}),et.jsx("input",{type:"range",min:"0",max:"100",value:U,onChange:se=>I(parseInt(se.target.value)),className:"w-full h-1 bg-[#251e18] rounded-lg appearance-none cursor-pointer accent-[#ff5500] outline-none"})]})]})]})]})]}),et.jsxs("div",{className:"bg-[#120d0b] border border-[#231c17] rounded-xl p-5 shadow-2xl space-y-4",id:"card-switches-grid",children:[et.jsxs("span",{className:"font-mono text-xs text-[#a28e7e] tracking-wider uppercase flex items-center gap-1.5 font-bold",children:[et.jsx(uv,{className:"w-3.5 h-3.5 text-orange-400"})," システム構成切替 (CORES)"]}),et.jsxs("div",{className:"grid grid-cols-2 gap-2",id:"grid-toggle-switches",children:[et.jsxs("button",{onClick:Mt,className:`p-2.5 rounded-lg border text-left flex flex-col justify-between h-20 transition-all font-mono cursor-pointer ${h?"bg-[#1f1915] border-[#ff5500]/40 text-[#fff4df]":"bg-[#110e0c] border-[#251e19] text-[#786354]"}`,children:[et.jsxs("div",{className:"flex justify-between w-full items-start",children:[et.jsx("span",{className:"text-[9px] text-[#8c7462] font-semibold uppercase",children:"陽極電極網"}),et.jsx("span",{className:`w-1.5 h-1.5 rounded-full ${h?"bg-orange-500 shadow-[0_0_6px_#f97316]":"bg-neutral-800"}`})]}),et.jsx("div",{className:"text-[11px] font-bold",children:h?"アノード網あり":"シールド非表示"})]}),et.jsxs("button",{onClick:Dt,className:`p-2.5 rounded-lg border text-left flex flex-col justify-between h-20 transition-all font-mono cursor-pointer ${E?"bg-[#1f1915] border-[#ff5500]/40 text-[#fff4df]":"bg-[#110e0c] border-[#251e19] text-[#786354]"}`,children:[et.jsxs("div",{className:"flex justify-between w-full items-start",children:[et.jsx("span",{className:"text-[9px] text-[#8c7462] font-semibold uppercase",children:"被写界深度ぼかし"}),et.jsx("span",{className:`w-1.5 h-1.5 rounded-full ${E?"bg-orange-500 shadow-[0_0_6px_#f97316]":"bg-neutral-800"}`})]}),et.jsx("div",{className:"text-[11px] font-bold",children:E?"レンズ効果あり":"ぼかし無効"})]}),et.jsxs("button",{onClick:Ft,className:`p-2.5 rounded-lg border text-left flex flex-col justify-between h-20 transition-all font-mono cursor-pointer ${m==="local"?"bg-[#1f1915] border-[#ff5500]/40 text-[#fff4df]":"bg-[#110e0c] border-[#251e19] text-[#786354]"}`,children:[et.jsxs("div",{className:"flex justify-between w-full items-start",children:[et.jsx("span",{className:"text-[9px] text-[#8c7462] font-semibold uppercase",children:"タイムゾーン"}),et.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-orange-500 shadow-[0_0_6px_#f97316]"})]}),et.jsx("div",{className:"text-[11px] font-bold",children:m==="local"?"ローカル時刻":"世界協定時 (UTC)"})]}),et.jsxs("button",{onClick:ie,className:`p-2.5 rounded-lg border text-left flex flex-col justify-between h-20 transition-all font-mono cursor-pointer ${v?"bg-[#1f1915] border-[#ff5500]/40 text-[#fff4df]":"bg-[#110e0c] border-[#251e19] text-[#786354]"}`,children:[et.jsxs("div",{className:"flex justify-between w-full items-start",children:[et.jsx("span",{className:"text-[9px] text-[#8c7462] font-semibold uppercase",children:"時間規格表示"}),et.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-orange-500 shadow-[0_0_6px_#f97316]"})]}),et.jsx("div",{className:"text-[11px] font-bold",children:v?"12時間形式":"24時間形式"})]})]}),et.jsxs("button",{onClick:()=>L(!1),className:"w-full mt-2 p-3 bg-[#1c1410] hover:bg-[#251a14] border border-[#ff5500]/30 hover:border-[#ff5500]/60 text-[#ffb180] rounded-lg text-xs font-bold tracking-widest flex items-center justify-center gap-2 transition-all cursor-pointer shadow-[0_0_15px_rgba(255,85,0,0.1)] hover:shadow-[0_0_20px_rgba(255,85,0,0.2)]",children:[et.jsx(fv,{className:"w-4 h-4"})," 全画面表示 (FULLSCREEN)"]})]})]})]}),C&&et.jsx("footer",{className:"w-full max-w-7xl bg-[#0f0b09] border border-[#231b15] rounded-xl p-4 mt-6 select-none",id:"telemetry-bar",onClick:se=>se.stopPropagation(),children:et.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 font-mono text-[10px]",id:"telemetry-grid",children:[et.jsxs("div",{className:"flex flex-col gap-1 items-start text-left bg-black/30 p-2.5 rounded border border-[#1b1511]",children:[et.jsxs("span",{className:"text-[#59493c] font-bold uppercase flex items-center gap-1",children:[et.jsx(fv,{className:"w-3 h-3 text-[#ff5500]"})," SYSTEM CORE"]}),et.jsx("span",{className:"text-[#a59383] font-semibold",children:"SOVIET IN-18 GLASS x6"})]}),et.jsxs("div",{className:"flex flex-col gap-1 items-start text-left bg-black/30 p-2.5 rounded border border-[#1b1511]",children:[et.jsxs("span",{className:"text-[#59493c] font-bold uppercase flex items-center gap-1",children:[et.jsx(l2,{className:"w-3 h-3 text-emerald-400"})," ANODE TEMPERATURE"]}),et.jsx("span",{className:"text-emerald-400 font-semibold",children:r?`${F} K`:"0.0 K"})]}),et.jsxs("div",{className:"flex flex-col gap-1 items-start text-left bg-black/30 p-2.5 rounded border border-[#1b1511]",children:[et.jsxs("span",{className:"text-[#59493c] font-bold uppercase flex items-center gap-1",children:[et.jsx(Zh,{className:"w-3 h-3 text-amber-500"})," SPUTTER COATING RATE"]}),et.jsx("span",{className:"text-orange-400 font-semibold",children:r?`${mt} mg/Ah`:"0.000 mg/Ah"})]}),et.jsxs("div",{className:"flex flex-col gap-1 items-start text-left bg-black/30 p-2.5 rounded border border-[#1b1511]",children:[et.jsxs("span",{className:"text-[#59493c] font-bold uppercase flex items-center gap-1",children:[et.jsx(uv,{className:"w-3 h-3 text-blue-400"})," TIMECODE LOG"]}),et.jsx("span",{className:"text-[#ae9a8a] font-semibold truncate w-full",children:W})]}),et.jsxs("div",{className:"flex flex-col gap-1 items-start text-left bg-black/30 p-2.5 rounded border border-[#1b1511] col-span-2",children:[et.jsxs("span",{className:"text-[#59493c] font-bold uppercase flex items-center gap-1",children:[et.jsx(Kh,{className:"w-3 h-3 text-orange-400"})," CALIBRATION STATIONS"]}),et.jsxs("span",{className:"text-[#7c6a5a] text-[9px] w-full truncate font-medium",children:["SWEEP SWT=[",X?"ACTIVE":"STANDBY","], DOFVIG=[",E?"ON":"OFF","]"]})]})]})})]})}cy.createRoot(document.getElementById("root")).render(et.jsx(Zt.StrictMode,{children:et.jsx(x2,{})}));
