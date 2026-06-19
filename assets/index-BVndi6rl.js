(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var rh={exports:{}},Ho={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jg;function ey(){if(jg)return Ho;jg=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:h,ref:l!==void 0?l:null,props:c}}return Ho.Fragment=t,Ho.jsx=i,Ho.jsxs=i,Ho}var Zg;function ny(){return Zg||(Zg=1,rh.exports=ey()),rh.exports}var K=ny(),oh={exports:{}},fe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kg;function iy(){if(Kg)return fe;Kg=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),g=Symbol.iterator;function y(P){return P===null||typeof P!="object"?null:(P=g&&P[g]||P["@@iterator"],typeof P=="function"?P:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,M={};function S(P,J,bt){this.props=P,this.context=J,this.refs=M,this.updater=bt||T}S.prototype.isReactComponent={},S.prototype.setState=function(P,J){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,J,"setState")},S.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function C(){}C.prototype=S.prototype;function L(P,J,bt){this.props=P,this.context=J,this.refs=M,this.updater=bt||T}var U=L.prototype=new C;U.constructor=L,w(U,S.prototype),U.isPureReactComponent=!0;var V=Array.isArray;function N(){}var I={H:null,A:null,T:null,S:null},E=Object.prototype.hasOwnProperty;function z(P,J,bt){var wt=bt.ref;return{$$typeof:r,type:P,key:J,ref:wt!==void 0?wt:null,props:bt}}function Z(P,J){return z(P.type,J,P.props)}function G(P){return typeof P=="object"&&P!==null&&P.$$typeof===r}function Y(P){var J={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(bt){return J[bt]})}var lt=/\/+/g;function ht(P,J){return typeof P=="object"&&P!==null&&P.key!=null?Y(""+P.key):J.toString(36)}function k(P){switch(P.status){case"fulfilled":return P.value;case"rejected":throw P.reason;default:switch(typeof P.status=="string"?P.then(N,N):(P.status="pending",P.then(function(J){P.status==="pending"&&(P.status="fulfilled",P.value=J)},function(J){P.status==="pending"&&(P.status="rejected",P.reason=J)})),P.status){case"fulfilled":return P.value;case"rejected":throw P.reason}}throw P}function O(P,J,bt,wt,Ct){var rt=typeof P;(rt==="undefined"||rt==="boolean")&&(P=null);var Et=!1;if(P===null)Et=!0;else switch(rt){case"bigint":case"string":case"number":Et=!0;break;case"object":switch(P.$$typeof){case r:case t:Et=!0;break;case _:return Et=P._init,O(Et(P._payload),J,bt,wt,Ct)}}if(Et)return Ct=Ct(P),Et=wt===""?"."+ht(P,0):wt,V(Ct)?(bt="",Et!=null&&(bt=Et.replace(lt,"$&/")+"/"),O(Ct,J,bt,"",function(se){return se})):Ct!=null&&(G(Ct)&&(Ct=Z(Ct,bt+(Ct.key==null||P&&P.key===Ct.key?"":(""+Ct.key).replace(lt,"$&/")+"/")+Et)),J.push(Ct)),1;Et=0;var Rt=wt===""?".":wt+":";if(V(P))for(var Ft=0;Ft<P.length;Ft++)wt=P[Ft],rt=Rt+ht(wt,Ft),Et+=O(wt,J,bt,rt,Ct);else if(Ft=y(P),typeof Ft=="function")for(P=Ft.call(P),Ft=0;!(wt=P.next()).done;)wt=wt.value,rt=Rt+ht(wt,Ft++),Et+=O(wt,J,bt,rt,Ct);else if(rt==="object"){if(typeof P.then=="function")return O(k(P),J,bt,wt,Ct);throw J=String(P),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.")}return Et}function F(P,J,bt){if(P==null)return P;var wt=[],Ct=0;return O(P,wt,"","",function(rt){return J.call(bt,rt,Ct++)}),wt}function st(P){if(P._status===-1){var J=P._result;J=J(),J.then(function(bt){(P._status===0||P._status===-1)&&(P._status=1,P._result=bt)},function(bt){(P._status===0||P._status===-1)&&(P._status=2,P._result=bt)}),P._status===-1&&(P._status=0,P._result=J)}if(P._status===1)return P._result.default;throw P._result}var _t=typeof reportError=="function"?reportError:function(P){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var J=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof P=="object"&&P!==null&&typeof P.message=="string"?String(P.message):String(P),error:P});if(!window.dispatchEvent(J))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",P);return}console.error(P)},Mt={map:F,forEach:function(P,J,bt){F(P,function(){J.apply(this,arguments)},bt)},count:function(P){var J=0;return F(P,function(){J++}),J},toArray:function(P){return F(P,function(J){return J})||[]},only:function(P){if(!G(P))throw Error("React.Children.only expected to receive a single React element child.");return P}};return fe.Activity=x,fe.Children=Mt,fe.Component=S,fe.Fragment=i,fe.Profiler=l,fe.PureComponent=L,fe.StrictMode=s,fe.Suspense=m,fe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,fe.__COMPILER_RUNTIME={__proto__:null,c:function(P){return I.H.useMemoCache(P)}},fe.cache=function(P){return function(){return P.apply(null,arguments)}},fe.cacheSignal=function(){return null},fe.cloneElement=function(P,J,bt){if(P==null)throw Error("The argument must be a React element, but you passed "+P+".");var wt=w({},P.props),Ct=P.key;if(J!=null)for(rt in J.key!==void 0&&(Ct=""+J.key),J)!E.call(J,rt)||rt==="key"||rt==="__self"||rt==="__source"||rt==="ref"&&J.ref===void 0||(wt[rt]=J[rt]);var rt=arguments.length-2;if(rt===1)wt.children=bt;else if(1<rt){for(var Et=Array(rt),Rt=0;Rt<rt;Rt++)Et[Rt]=arguments[Rt+2];wt.children=Et}return z(P.type,Ct,wt)},fe.createContext=function(P){return P={$$typeof:h,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null},P.Provider=P,P.Consumer={$$typeof:c,_context:P},P},fe.createElement=function(P,J,bt){var wt,Ct={},rt=null;if(J!=null)for(wt in J.key!==void 0&&(rt=""+J.key),J)E.call(J,wt)&&wt!=="key"&&wt!=="__self"&&wt!=="__source"&&(Ct[wt]=J[wt]);var Et=arguments.length-2;if(Et===1)Ct.children=bt;else if(1<Et){for(var Rt=Array(Et),Ft=0;Ft<Et;Ft++)Rt[Ft]=arguments[Ft+2];Ct.children=Rt}if(P&&P.defaultProps)for(wt in Et=P.defaultProps,Et)Ct[wt]===void 0&&(Ct[wt]=Et[wt]);return z(P,rt,Ct)},fe.createRef=function(){return{current:null}},fe.forwardRef=function(P){return{$$typeof:d,render:P}},fe.isValidElement=G,fe.lazy=function(P){return{$$typeof:_,_payload:{_status:-1,_result:P},_init:st}},fe.memo=function(P,J){return{$$typeof:p,type:P,compare:J===void 0?null:J}},fe.startTransition=function(P){var J=I.T,bt={};I.T=bt;try{var wt=P(),Ct=I.S;Ct!==null&&Ct(bt,wt),typeof wt=="object"&&wt!==null&&typeof wt.then=="function"&&wt.then(N,_t)}catch(rt){_t(rt)}finally{J!==null&&bt.types!==null&&(J.types=bt.types),I.T=J}},fe.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},fe.use=function(P){return I.H.use(P)},fe.useActionState=function(P,J,bt){return I.H.useActionState(P,J,bt)},fe.useCallback=function(P,J){return I.H.useCallback(P,J)},fe.useContext=function(P){return I.H.useContext(P)},fe.useDebugValue=function(){},fe.useDeferredValue=function(P,J){return I.H.useDeferredValue(P,J)},fe.useEffect=function(P,J){return I.H.useEffect(P,J)},fe.useEffectEvent=function(P){return I.H.useEffectEvent(P)},fe.useId=function(){return I.H.useId()},fe.useImperativeHandle=function(P,J,bt){return I.H.useImperativeHandle(P,J,bt)},fe.useInsertionEffect=function(P,J){return I.H.useInsertionEffect(P,J)},fe.useLayoutEffect=function(P,J){return I.H.useLayoutEffect(P,J)},fe.useMemo=function(P,J){return I.H.useMemo(P,J)},fe.useOptimistic=function(P,J){return I.H.useOptimistic(P,J)},fe.useReducer=function(P,J,bt){return I.H.useReducer(P,J,bt)},fe.useRef=function(P){return I.H.useRef(P)},fe.useState=function(P){return I.H.useState(P)},fe.useSyncExternalStore=function(P,J,bt){return I.H.useSyncExternalStore(P,J,bt)},fe.useTransition=function(){return I.H.useTransition()},fe.version="19.2.7",fe}var Qg;function Wd(){return Qg||(Qg=1,oh.exports=iy()),oh.exports}var Xt=Wd(),lh={exports:{}},Vo={},ch={exports:{}},uh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jg;function ay(){return Jg||(Jg=1,(function(r){function t(O,F){var st=O.length;O.push(F);t:for(;0<st;){var _t=st-1>>>1,Mt=O[_t];if(0<l(Mt,F))O[_t]=F,O[st]=Mt,st=_t;else break t}}function i(O){return O.length===0?null:O[0]}function s(O){if(O.length===0)return null;var F=O[0],st=O.pop();if(st!==F){O[0]=st;t:for(var _t=0,Mt=O.length,P=Mt>>>1;_t<P;){var J=2*(_t+1)-1,bt=O[J],wt=J+1,Ct=O[wt];if(0>l(bt,st))wt<Mt&&0>l(Ct,bt)?(O[_t]=Ct,O[wt]=st,_t=wt):(O[_t]=bt,O[J]=st,_t=J);else if(wt<Mt&&0>l(Ct,st))O[_t]=Ct,O[wt]=st,_t=wt;else break t}}return F}function l(O,F){var st=O.sortIndex-F.sortIndex;return st!==0?st:O.id-F.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();r.unstable_now=function(){return h.now()-d}}var m=[],p=[],_=1,x=null,g=3,y=!1,T=!1,w=!1,M=!1,S=typeof setTimeout=="function"?setTimeout:null,C=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function U(O){for(var F=i(p);F!==null;){if(F.callback===null)s(p);else if(F.startTime<=O)s(p),F.sortIndex=F.expirationTime,t(m,F);else break;F=i(p)}}function V(O){if(w=!1,U(O),!T)if(i(m)!==null)T=!0,N||(N=!0,Y());else{var F=i(p);F!==null&&k(V,F.startTime-O)}}var N=!1,I=-1,E=5,z=-1;function Z(){return M?!0:!(r.unstable_now()-z<E)}function G(){if(M=!1,N){var O=r.unstable_now();z=O;var F=!0;try{t:{T=!1,w&&(w=!1,C(I),I=-1),y=!0;var st=g;try{e:{for(U(O),x=i(m);x!==null&&!(x.expirationTime>O&&Z());){var _t=x.callback;if(typeof _t=="function"){x.callback=null,g=x.priorityLevel;var Mt=_t(x.expirationTime<=O);if(O=r.unstable_now(),typeof Mt=="function"){x.callback=Mt,U(O),F=!0;break e}x===i(m)&&s(m),U(O)}else s(m);x=i(m)}if(x!==null)F=!0;else{var P=i(p);P!==null&&k(V,P.startTime-O),F=!1}}break t}finally{x=null,g=st,y=!1}F=void 0}}finally{F?Y():N=!1}}}var Y;if(typeof L=="function")Y=function(){L(G)};else if(typeof MessageChannel<"u"){var lt=new MessageChannel,ht=lt.port2;lt.port1.onmessage=G,Y=function(){ht.postMessage(null)}}else Y=function(){S(G,0)};function k(O,F){I=S(function(){O(r.unstable_now())},F)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(O){O.callback=null},r.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<O?Math.floor(1e3/O):5},r.unstable_getCurrentPriorityLevel=function(){return g},r.unstable_next=function(O){switch(g){case 1:case 2:case 3:var F=3;break;default:F=g}var st=g;g=F;try{return O()}finally{g=st}},r.unstable_requestPaint=function(){M=!0},r.unstable_runWithPriority=function(O,F){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var st=g;g=O;try{return F()}finally{g=st}},r.unstable_scheduleCallback=function(O,F,st){var _t=r.unstable_now();switch(typeof st=="object"&&st!==null?(st=st.delay,st=typeof st=="number"&&0<st?_t+st:_t):st=_t,O){case 1:var Mt=-1;break;case 2:Mt=250;break;case 5:Mt=1073741823;break;case 4:Mt=1e4;break;default:Mt=5e3}return Mt=st+Mt,O={id:_++,callback:F,priorityLevel:O,startTime:st,expirationTime:Mt,sortIndex:-1},st>_t?(O.sortIndex=st,t(p,O),i(m)===null&&O===i(p)&&(w?(C(I),I=-1):w=!0,k(V,st-_t))):(O.sortIndex=Mt,t(m,O),T||y||(T=!0,N||(N=!0,Y()))),O},r.unstable_shouldYield=Z,r.unstable_wrapCallback=function(O){var F=g;return function(){var st=g;g=F;try{return O.apply(this,arguments)}finally{g=st}}}})(uh)),uh}var $g;function sy(){return $g||($g=1,ch.exports=ay()),ch.exports}var fh={exports:{}},Yn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var t_;function ry(){if(t_)return Yn;t_=1;var r=Wd();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,_){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:""+x,children:m,containerInfo:p,implementation:_}}var h=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Yn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Yn.createPortal=function(m,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,_)},Yn.flushSync=function(m){var p=h.T,_=s.p;try{if(h.T=null,s.p=2,m)return m()}finally{h.T=p,s.p=_,s.d.f()}},Yn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},Yn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Yn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var _=p.as,x=d(_,p.crossOrigin),g=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:x,integrity:g,fetchPriority:y}):_==="script"&&s.d.X(m,{crossOrigin:x,integrity:g,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Yn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=d(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},Yn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,x=d(_,p.crossOrigin);s.d.L(m,_,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Yn.preloadModule=function(m,p){if(typeof m=="string")if(p){var _=d(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},Yn.requestFormReset=function(m){s.d.r(m)},Yn.unstable_batchedUpdates=function(m,p){return m(p)},Yn.useFormState=function(m,p,_){return h.H.useFormState(m,p,_)},Yn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Yn.version="19.2.7",Yn}var e_;function oy(){if(e_)return fh.exports;e_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),fh.exports=ry(),fh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n_;function ly(){if(n_)return Vo;n_=1;var r=sy(),t=Wd(),i=oy();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(s(188))}function p(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),e;if(f===o)return m(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=f;else{for(var v=!1,R=u.child;R;){if(R===a){v=!0,a=u,o=f;break}if(R===o){v=!0,o=u,a=f;break}R=R.sibling}if(!v){for(R=f.child;R;){if(R===a){v=!0,a=f,o=u;break}if(R===o){v=!0,o=f,a=u;break}R=R.sibling}if(!v)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function _(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=_(e),n!==null)return n;e=e.sibling}return null}var x=Object.assign,g=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),C=Symbol.for("react.consumer"),L=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),V=Symbol.for("react.suspense"),N=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),z=Symbol.for("react.activity"),Z=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function Y(e){return e===null||typeof e!="object"?null:(e=G&&e[G]||e["@@iterator"],typeof e=="function"?e:null)}var lt=Symbol.for("react.client.reference");function ht(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===lt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case w:return"Fragment";case S:return"Profiler";case M:return"StrictMode";case V:return"Suspense";case N:return"SuspenseList";case z:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case T:return"Portal";case L:return e.displayName||"Context";case C:return(e._context.displayName||"Context")+".Consumer";case U:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case I:return n=e.displayName||null,n!==null?n:ht(e.type)||"Memo";case E:n=e._payload,e=e._init;try{return ht(e(n))}catch{}}return null}var k=Array.isArray,O=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,st={pending:!1,data:null,method:null,action:null},_t=[],Mt=-1;function P(e){return{current:e}}function J(e){0>Mt||(e.current=_t[Mt],_t[Mt]=null,Mt--)}function bt(e,n){Mt++,_t[Mt]=e.current,e.current=n}var wt=P(null),Ct=P(null),rt=P(null),Et=P(null);function Rt(e,n){switch(bt(rt,n),bt(Ct,e),bt(wt,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?_g(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=_g(n),e=vg(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}J(wt),bt(wt,e)}function Ft(){J(wt),J(Ct),J(rt)}function se(e){e.memoizedState!==null&&bt(Et,e);var n=wt.current,a=vg(n,e.type);n!==a&&(bt(Ct,e),bt(wt,a))}function $t(e){Ct.current===e&&(J(wt),J(Ct)),Et.current===e&&(J(Et),Io._currentValue=st)}var Ie,ce;function me(e){if(Ie===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Ie=n&&n[1]||"",ce=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ie+e+ce}var ye=!1;function qt(e,n){if(!e||ye)return"";ye=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var yt=function(){throw Error()};if(Object.defineProperty(yt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(yt,[])}catch(ct){var ot=ct}Reflect.construct(e,[],yt)}else{try{yt.call()}catch(ct){ot=ct}e.call(yt.prototype)}}else{try{throw Error()}catch(ct){ot=ct}(yt=e())&&typeof yt.catch=="function"&&yt.catch(function(){})}}catch(ct){if(ct&&ot&&typeof ct.stack=="string")return[ct.stack,ot.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),v=f[0],R=f[1];if(v&&R){var B=v.split(`
`),it=R.split(`
`);for(u=o=0;o<B.length&&!B[o].includes("DetermineComponentFrameRoot");)o++;for(;u<it.length&&!it[u].includes("DetermineComponentFrameRoot");)u++;if(o===B.length||u===it.length)for(o=B.length-1,u=it.length-1;1<=o&&0<=u&&B[o]!==it[u];)u--;for(;1<=o&&0<=u;o--,u--)if(B[o]!==it[u]){if(o!==1||u!==1)do if(o--,u--,0>u||B[o]!==it[u]){var gt=`
`+B[o].replace(" at new "," at ");return e.displayName&&gt.includes("<anonymous>")&&(gt=gt.replace("<anonymous>",e.displayName)),gt}while(1<=o&&0<=u);break}}}finally{ye=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?me(a):""}function Oe(e,n){switch(e.tag){case 26:case 27:case 5:return me(e.type);case 16:return me("Lazy");case 13:return e.child!==n&&n!==null?me("Suspense Fallback"):me("Suspense");case 19:return me("SuspenseList");case 0:case 15:return qt(e.type,!1);case 11:return qt(e.type.render,!1);case 1:return qt(e.type,!0);case 31:return me("Activity");default:return""}}function Ge(e){try{var n="",a=null;do n+=Oe(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Dn=Object.prototype.hasOwnProperty,q=r.unstable_scheduleCallback,on=r.unstable_cancelCallback,ge=r.unstable_shouldYield,Pe=r.unstable_requestPaint,Nt=r.unstable_now,Qe=r.unstable_getCurrentPriorityLevel,D=r.unstable_ImmediatePriority,b=r.unstable_UserBlockingPriority,$=r.unstable_NormalPriority,mt=r.unstable_LowPriority,At=r.unstable_IdlePriority,Ut=r.log,Ot=r.unstable_setDisableYieldValue,ut=null,dt=null;function Pt(e){if(typeof Ut=="function"&&Ot(e),dt&&typeof dt.setStrictMode=="function")try{dt.setStrictMode(ut,e)}catch{}}var zt=Math.clz32?Math.clz32:jt,xt=Math.log,pt=Math.LN2;function jt(e){return e>>>=0,e===0?32:31-(xt(e)/pt|0)|0}var Yt=256,te=262144,H=4194304;function Tt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ft(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,f=e.suspendedLanes,v=e.pingedLanes;e=e.warmLanes;var R=o&134217727;return R!==0?(o=R&~f,o!==0?u=Tt(o):(v&=R,v!==0?u=Tt(v):a||(a=R&~e,a!==0&&(u=Tt(a))))):(R=o&~f,R!==0?u=Tt(R):v!==0?u=Tt(v):a||(a=o&~e,a!==0&&(u=Tt(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Lt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Dt(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function St(){var e=H;return H<<=1,(H&62914560)===0&&(H=4194304),e}function Ht(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Kt(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function re(e,n,a,o,u,f){var v=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var R=e.entanglements,B=e.expirationTimes,it=e.hiddenUpdates;for(a=v&~a;0<a;){var gt=31-zt(a),yt=1<<gt;R[gt]=0,B[gt]=-1;var ot=it[gt];if(ot!==null)for(it[gt]=null,gt=0;gt<ot.length;gt++){var ct=ot[gt];ct!==null&&(ct.lane&=-536870913)}a&=~yt}o!==0&&ue(e,o,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(v&~n))}function ue(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-zt(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function nn(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-zt(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function Fe(e,n){var a=n&-n;return a=(a&42)!==0?1:dn(a),(a&(e.suspendedLanes|n))!==0?0:a}function dn(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function In(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function ai(){var e=F.p;return e!==0?e:(e=window.event,e===void 0?32:Hg(e.type))}function di(e,n){var a=F.p;try{return F.p=e,n()}finally{F.p=a}}var pn=Math.random().toString(36).slice(2),an="__reactFiber$"+pn,_n="__reactProps$"+pn,He="__reactContainer$"+pn,en="__reactEvents$"+pn,Fn="__reactListeners$"+pn,En="__reactHandles$"+pn,ln="__reactResources$"+pn,yn="__reactMarker$"+pn;function pi(e){delete e[an],delete e[_n],delete e[en],delete e[Fn],delete e[En]}function Bn(e){var n=e[an];if(n)return n;for(var a=e.parentNode;a;){if(n=a[He]||a[an]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=Tg(e);e!==null;){if(a=e[an])return a;e=Tg(e)}return n}e=a,a=e.parentNode}return null}function Wn(e){if(e=e[an]||e[He]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function Ni(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function mi(e){var n=e[ln];return n||(n=e[ln]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Je(e){e[yn]=!0}var $n=new Set,A={};function j(e,n){at(e,n),at(e+"Capture",n)}function at(e,n){for(A[e]=n,e=0;e<n.length;e++)$n.add(n[e])}var et=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),tt={},Bt={};function kt(e){return Dn.call(Bt,e)?!0:Dn.call(tt,e)?!1:et.test(e)?Bt[e]=!0:(tt[e]=!0,!1)}function It(e,n,a){if(kt(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Wt(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Zt(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function ie(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function de(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function ee(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,f=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(v){a=""+v,f.call(this,v)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(v){a=""+v},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Ne(e){if(!e._valueTracker){var n=de(e)?"checked":"value";e._valueTracker=ee(e,n,""+e[n])}}function cn(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=de(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function $e(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ve=/[\n"\\]/g;function ke(e){return e.replace(Ve,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Vt(e,n,a,o,u,f,v,R){e.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.type=v:e.removeAttribute("type"),n!=null?v==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+ie(n)):e.value!==""+ie(n)&&(e.value=""+ie(n)):v!=="submit"&&v!=="reset"||e.removeAttribute("value"),n!=null?Me(e,v,ie(n)):a!=null?Me(e,v,ie(a)):o!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?e.name=""+ie(R):e.removeAttribute("name")}function qn(e,n,a,o,u,f,v,R){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Ne(e);return}a=a!=null?""+ie(a):"",n=n!=null?""+ie(n):a,R||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=R?e.checked:!!o,e.defaultChecked=!!o,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(e.name=v),Ne(e)}function Me(e,n,a){n==="number"&&$e(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Nn(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+ie(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function gi(e,n,a){if(n!=null&&(n=""+ie(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+ie(a):""}function Vi(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(k(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=ie(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),Ne(e)}function _i(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Xe=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function un(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||Xe.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function ki(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&un(e,u,o)}else for(var f in n)n.hasOwnProperty(f)&&un(e,f,n[f])}function Be(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ji=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ka=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Es(e){return ka.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function pa(){}var nu=null;function iu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var $s=null,tr=null;function gp(e){var n=Wn(e);if(n&&(e=n.stateNode)){var a=e[_n]||null;t:switch(e=n.stateNode,n.type){case"input":if(Vt(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ke(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[_n]||null;if(!u)throw Error(s(90));Vt(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&cn(o)}break t;case"textarea":gi(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&Nn(e,!!a.multiple,n,!1)}}}var au=!1;function _p(e,n,a){if(au)return e(n,a);au=!0;try{var o=e(n);return o}finally{if(au=!1,($s!==null||tr!==null)&&(Zl(),$s&&(n=$s,e=tr,tr=$s=null,gp(n),e)))for(n=0;n<e.length;n++)gp(e[n])}}function $r(e,n){var a=e.stateNode;if(a===null)return null;var o=a[_n]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var ma=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),su=!1;if(ma)try{var to={};Object.defineProperty(to,"passive",{get:function(){su=!0}}),window.addEventListener("test",to,to),window.removeEventListener("test",to,to)}catch{su=!1}var Xa=null,ru=null,cl=null;function vp(){if(cl)return cl;var e,n=ru,a=n.length,o,u="value"in Xa?Xa.value:Xa.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var v=a-e;for(o=1;o<=v&&n[a-o]===u[f-o];o++);return cl=u.slice(e,1<o?1-o:void 0)}function ul(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function fl(){return!0}function xp(){return!1}function si(e){function n(a,o,u,f,v){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=v,this.currentTarget=null;for(var R in e)e.hasOwnProperty(R)&&(a=e[R],this[R]=a?a(f):f[R]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?fl:xp,this.isPropagationStopped=xp,this}return x(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=fl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=fl)},persist:function(){},isPersistent:fl}),n}var Ts={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hl=si(Ts),eo=x({},Ts,{view:0,detail:0}),$v=si(eo),ou,lu,no,dl=x({},eo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:uu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==no&&(no&&e.type==="mousemove"?(ou=e.screenX-no.screenX,lu=e.screenY-no.screenY):lu=ou=0,no=e),ou)},movementY:function(e){return"movementY"in e?e.movementY:lu}}),Sp=si(dl),tx=x({},dl,{dataTransfer:0}),ex=si(tx),nx=x({},eo,{relatedTarget:0}),cu=si(nx),ix=x({},Ts,{animationName:0,elapsedTime:0,pseudoElement:0}),ax=si(ix),sx=x({},Ts,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),rx=si(sx),ox=x({},Ts,{data:0}),yp=si(ox),lx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},cx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ux={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function fx(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=ux[e])?!!n[e]:!1}function uu(){return fx}var hx=x({},eo,{key:function(e){if(e.key){var n=lx[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=ul(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?cx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:uu,charCode:function(e){return e.type==="keypress"?ul(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ul(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),dx=si(hx),px=x({},dl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Mp=si(px),mx=x({},eo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:uu}),gx=si(mx),_x=x({},Ts,{propertyName:0,elapsedTime:0,pseudoElement:0}),vx=si(_x),xx=x({},dl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Sx=si(xx),yx=x({},Ts,{newState:0,oldState:0}),Mx=si(yx),bx=[9,13,27,32],fu=ma&&"CompositionEvent"in window,io=null;ma&&"documentMode"in document&&(io=document.documentMode);var Ex=ma&&"TextEvent"in window&&!io,bp=ma&&(!fu||io&&8<io&&11>=io),Ep=" ",Tp=!1;function Ap(e,n){switch(e){case"keyup":return bx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Rp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var er=!1;function Tx(e,n){switch(e){case"compositionend":return Rp(n);case"keypress":return n.which!==32?null:(Tp=!0,Ep);case"textInput":return e=n.data,e===Ep&&Tp?null:e;default:return null}}function Ax(e,n){if(er)return e==="compositionend"||!fu&&Ap(e,n)?(e=vp(),cl=ru=Xa=null,er=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return bp&&n.locale!=="ko"?null:n.data;default:return null}}var Rx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Cp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Rx[e.type]:n==="textarea"}function wp(e,n,a,o){$s?tr?tr.push(o):tr=[o]:$s=o,n=nc(n,"onChange"),0<n.length&&(a=new hl("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var ao=null,so=null;function Cx(e){fg(e,0)}function pl(e){var n=Ni(e);if(cn(n))return e}function Dp(e,n){if(e==="change")return n}var Np=!1;if(ma){var hu;if(ma){var du="oninput"in document;if(!du){var Up=document.createElement("div");Up.setAttribute("oninput","return;"),du=typeof Up.oninput=="function"}hu=du}else hu=!1;Np=hu&&(!document.documentMode||9<document.documentMode)}function Lp(){ao&&(ao.detachEvent("onpropertychange",Op),so=ao=null)}function Op(e){if(e.propertyName==="value"&&pl(so)){var n=[];wp(n,so,e,iu(e)),_p(Cx,n)}}function wx(e,n,a){e==="focusin"?(Lp(),ao=n,so=a,ao.attachEvent("onpropertychange",Op)):e==="focusout"&&Lp()}function Dx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return pl(so)}function Nx(e,n){if(e==="click")return pl(n)}function Ux(e,n){if(e==="input"||e==="change")return pl(n)}function Lx(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var vi=typeof Object.is=="function"?Object.is:Lx;function ro(e,n){if(vi(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Dn.call(n,u)||!vi(e[u],n[u]))return!1}return!0}function Pp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function zp(e,n){var a=Pp(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Pp(a)}}function Ip(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Ip(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Fp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=$e(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=$e(e.document)}return n}function pu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Ox=ma&&"documentMode"in document&&11>=document.documentMode,nr=null,mu=null,oo=null,gu=!1;function Bp(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;gu||nr==null||nr!==$e(o)||(o=nr,"selectionStart"in o&&pu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),oo&&ro(oo,o)||(oo=o,o=nc(mu,"onSelect"),0<o.length&&(n=new hl("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=nr)))}function As(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var ir={animationend:As("Animation","AnimationEnd"),animationiteration:As("Animation","AnimationIteration"),animationstart:As("Animation","AnimationStart"),transitionrun:As("Transition","TransitionRun"),transitionstart:As("Transition","TransitionStart"),transitioncancel:As("Transition","TransitionCancel"),transitionend:As("Transition","TransitionEnd")},_u={},Gp={};ma&&(Gp=document.createElement("div").style,"AnimationEvent"in window||(delete ir.animationend.animation,delete ir.animationiteration.animation,delete ir.animationstart.animation),"TransitionEvent"in window||delete ir.transitionend.transition);function Rs(e){if(_u[e])return _u[e];if(!ir[e])return e;var n=ir[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Gp)return _u[e]=n[a];return e}var Hp=Rs("animationend"),Vp=Rs("animationiteration"),kp=Rs("animationstart"),Px=Rs("transitionrun"),zx=Rs("transitionstart"),Ix=Rs("transitioncancel"),Xp=Rs("transitionend"),Wp=new Map,vu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");vu.push("scrollEnd");function Xi(e,n){Wp.set(e,n),j(n,[e])}var ml=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Ui=[],ar=0,xu=0;function gl(){for(var e=ar,n=xu=ar=0;n<e;){var a=Ui[n];Ui[n++]=null;var o=Ui[n];Ui[n++]=null;var u=Ui[n];Ui[n++]=null;var f=Ui[n];if(Ui[n++]=null,o!==null&&u!==null){var v=o.pending;v===null?u.next=u:(u.next=v.next,v.next=u),o.pending=u}f!==0&&qp(a,u,f)}}function _l(e,n,a,o){Ui[ar++]=e,Ui[ar++]=n,Ui[ar++]=a,Ui[ar++]=o,xu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Su(e,n,a,o){return _l(e,n,a,o),vl(e)}function Cs(e,n){return _l(e,null,null,n),vl(e)}function qp(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-zt(a),e=f.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),f):null}function vl(e){if(50<Do)throw Do=0,Df=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var sr={};function Fx(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function xi(e,n,a,o){return new Fx(e,n,a,o)}function yu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ga(e,n){var a=e.alternate;return a===null?(a=xi(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Yp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function xl(e,n,a,o,u,f){var v=0;if(o=e,typeof e=="function")yu(e)&&(v=1);else if(typeof e=="string")v=kS(e,a,wt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case z:return e=xi(31,a,n,u),e.elementType=z,e.lanes=f,e;case w:return ws(a.children,u,f,n);case M:v=8,u|=24;break;case S:return e=xi(12,a,n,u|2),e.elementType=S,e.lanes=f,e;case V:return e=xi(13,a,n,u),e.elementType=V,e.lanes=f,e;case N:return e=xi(19,a,n,u),e.elementType=N,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case L:v=10;break t;case C:v=9;break t;case U:v=11;break t;case I:v=14;break t;case E:v=16,o=null;break t}v=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=xi(v,a,n,u),n.elementType=e,n.type=o,n.lanes=f,n}function ws(e,n,a,o){return e=xi(7,e,o,n),e.lanes=a,e}function Mu(e,n,a){return e=xi(6,e,null,n),e.lanes=a,e}function jp(e){var n=xi(18,null,null,0);return n.stateNode=e,n}function bu(e,n,a){return n=xi(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Zp=new WeakMap;function Li(e,n){if(typeof e=="object"&&e!==null){var a=Zp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:Ge(n)},Zp.set(e,n),n)}return{value:e,source:n,stack:Ge(n)}}var rr=[],or=0,Sl=null,lo=0,Oi=[],Pi=0,Wa=null,$i=1,ta="";function _a(e,n){rr[or++]=lo,rr[or++]=Sl,Sl=e,lo=n}function Kp(e,n,a){Oi[Pi++]=$i,Oi[Pi++]=ta,Oi[Pi++]=Wa,Wa=e;var o=$i;e=ta;var u=32-zt(o)-1;o&=~(1<<u),a+=1;var f=32-zt(n)+u;if(30<f){var v=u-u%5;f=(o&(1<<v)-1).toString(32),o>>=v,u-=v,$i=1<<32-zt(n)+u|a<<u|o,ta=f+e}else $i=1<<f|a<<u|o,ta=e}function Eu(e){e.return!==null&&(_a(e,1),Kp(e,1,0))}function Tu(e){for(;e===Sl;)Sl=rr[--or],rr[or]=null,lo=rr[--or],rr[or]=null;for(;e===Wa;)Wa=Oi[--Pi],Oi[Pi]=null,ta=Oi[--Pi],Oi[Pi]=null,$i=Oi[--Pi],Oi[Pi]=null}function Qp(e,n){Oi[Pi++]=$i,Oi[Pi++]=ta,Oi[Pi++]=Wa,$i=n.id,ta=n.overflow,Wa=e}var Gn=null,sn=null,Re=!1,qa=null,zi=!1,Au=Error(s(519));function Ya(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw co(Li(n,e)),Au}function Jp(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[an]=e,n[_n]=o,a){case"dialog":Ee("cancel",n),Ee("close",n);break;case"iframe":case"object":case"embed":Ee("load",n);break;case"video":case"audio":for(a=0;a<Uo.length;a++)Ee(Uo[a],n);break;case"source":Ee("error",n);break;case"img":case"image":case"link":Ee("error",n),Ee("load",n);break;case"details":Ee("toggle",n);break;case"input":Ee("invalid",n),qn(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Ee("invalid",n);break;case"textarea":Ee("invalid",n),Vi(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||mg(n.textContent,a)?(o.popover!=null&&(Ee("beforetoggle",n),Ee("toggle",n)),o.onScroll!=null&&Ee("scroll",n),o.onScrollEnd!=null&&Ee("scrollend",n),o.onClick!=null&&(n.onclick=pa),n=!0):n=!1,n||Ya(e,!0)}function $p(e){for(Gn=e.return;Gn;)switch(Gn.tag){case 5:case 31:case 13:zi=!1;return;case 27:case 3:zi=!0;return;default:Gn=Gn.return}}function lr(e){if(e!==Gn)return!1;if(!Re)return $p(e),Re=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Wf(e.type,e.memoizedProps)),a=!a),a&&sn&&Ya(e),$p(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));sn=Eg(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));sn=Eg(e)}else n===27?(n=sn,os(e.type)?(e=Kf,Kf=null,sn=e):sn=n):sn=Gn?Fi(e.stateNode.nextSibling):null;return!0}function Ds(){sn=Gn=null,Re=!1}function Ru(){var e=qa;return e!==null&&(ci===null?ci=e:ci.push.apply(ci,e),qa=null),e}function co(e){qa===null?qa=[e]:qa.push(e)}var Cu=P(null),Ns=null,va=null;function ja(e,n,a){bt(Cu,n._currentValue),n._currentValue=a}function xa(e){e._currentValue=Cu.current,J(Cu)}function wu(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function Du(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var v=u.child;f=f.firstContext;t:for(;f!==null;){var R=f;f=u;for(var B=0;B<n.length;B++)if(R.context===n[B]){f.lanes|=a,R=f.alternate,R!==null&&(R.lanes|=a),wu(f.return,a,e),o||(v=null);break t}f=R.next}}else if(u.tag===18){if(v=u.return,v===null)throw Error(s(341));v.lanes|=a,f=v.alternate,f!==null&&(f.lanes|=a),wu(v,a,e),v=null}else v=u.child;if(v!==null)v.return=u;else for(v=u;v!==null;){if(v===e){v=null;break}if(u=v.sibling,u!==null){u.return=v.return,v=u;break}v=v.return}u=v}}function cr(e,n,a,o){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var v=u.alternate;if(v===null)throw Error(s(387));if(v=v.memoizedProps,v!==null){var R=u.type;vi(u.pendingProps.value,v.value)||(e!==null?e.push(R):e=[R])}}else if(u===Et.current){if(v=u.alternate,v===null)throw Error(s(387));v.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Io):e=[Io])}u=u.return}e!==null&&Du(n,e,a,o),n.flags|=262144}function yl(e){for(e=e.firstContext;e!==null;){if(!vi(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Us(e){Ns=e,va=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Hn(e){return tm(Ns,e)}function Ml(e,n){return Ns===null&&Us(e),tm(e,n)}function tm(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},va===null){if(e===null)throw Error(s(308));va=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else va=va.next=n;return a}var Bx=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},Gx=r.unstable_scheduleCallback,Hx=r.unstable_NormalPriority,Tn={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Nu(){return{controller:new Bx,data:new Map,refCount:0}}function uo(e){e.refCount--,e.refCount===0&&Gx(Hx,function(){e.controller.abort()})}var fo=null,Uu=0,ur=0,fr=null;function Vx(e,n){if(fo===null){var a=fo=[];Uu=0,ur=zf(),fr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Uu++,n.then(em,em),n}function em(){if(--Uu===0&&fo!==null){fr!==null&&(fr.status="fulfilled");var e=fo;fo=null,ur=0,fr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function kx(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var nm=O.S;O.S=function(e,n){B0=Nt(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Vx(e,n),nm!==null&&nm(e,n)};var Ls=P(null);function Lu(){var e=Ls.current;return e!==null?e:tn.pooledCache}function bl(e,n){n===null?bt(Ls,Ls.current):bt(Ls,n.pool)}function im(){var e=Lu();return e===null?null:{parent:Tn._currentValue,pool:e}}var hr=Error(s(460)),Ou=Error(s(474)),El=Error(s(542)),Tl={then:function(){}};function am(e){return e=e.status,e==="fulfilled"||e==="rejected"}function sm(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(pa,pa),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,om(e),e;default:if(typeof n.status=="string")n.then(pa,pa);else{if(e=tn,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,om(e),e}throw Ps=n,hr}}function Os(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ps=a,hr):a}}var Ps=null;function rm(){if(Ps===null)throw Error(s(459));var e=Ps;return Ps=null,e}function om(e){if(e===hr||e===El)throw Error(s(483))}var dr=null,ho=0;function Al(e){var n=ho;return ho+=1,dr===null&&(dr=[]),sm(dr,e,n)}function po(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Rl(e,n){throw n.$$typeof===g?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function lm(e){function n(Q,X){if(e){var nt=Q.deletions;nt===null?(Q.deletions=[X],Q.flags|=16):nt.push(X)}}function a(Q,X){if(!e)return null;for(;X!==null;)n(Q,X),X=X.sibling;return null}function o(Q){for(var X=new Map;Q!==null;)Q.key!==null?X.set(Q.key,Q):X.set(Q.index,Q),Q=Q.sibling;return X}function u(Q,X){return Q=ga(Q,X),Q.index=0,Q.sibling=null,Q}function f(Q,X,nt){return Q.index=nt,e?(nt=Q.alternate,nt!==null?(nt=nt.index,nt<X?(Q.flags|=67108866,X):nt):(Q.flags|=67108866,X)):(Q.flags|=1048576,X)}function v(Q){return e&&Q.alternate===null&&(Q.flags|=67108866),Q}function R(Q,X,nt,vt){return X===null||X.tag!==6?(X=Mu(nt,Q.mode,vt),X.return=Q,X):(X=u(X,nt),X.return=Q,X)}function B(Q,X,nt,vt){var ae=nt.type;return ae===w?gt(Q,X,nt.props.children,vt,nt.key):X!==null&&(X.elementType===ae||typeof ae=="object"&&ae!==null&&ae.$$typeof===E&&Os(ae)===X.type)?(X=u(X,nt.props),po(X,nt),X.return=Q,X):(X=xl(nt.type,nt.key,nt.props,null,Q.mode,vt),po(X,nt),X.return=Q,X)}function it(Q,X,nt,vt){return X===null||X.tag!==4||X.stateNode.containerInfo!==nt.containerInfo||X.stateNode.implementation!==nt.implementation?(X=bu(nt,Q.mode,vt),X.return=Q,X):(X=u(X,nt.children||[]),X.return=Q,X)}function gt(Q,X,nt,vt,ae){return X===null||X.tag!==7?(X=ws(nt,Q.mode,vt,ae),X.return=Q,X):(X=u(X,nt),X.return=Q,X)}function yt(Q,X,nt){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=Mu(""+X,Q.mode,nt),X.return=Q,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case y:return nt=xl(X.type,X.key,X.props,null,Q.mode,nt),po(nt,X),nt.return=Q,nt;case T:return X=bu(X,Q.mode,nt),X.return=Q,X;case E:return X=Os(X),yt(Q,X,nt)}if(k(X)||Y(X))return X=ws(X,Q.mode,nt,null),X.return=Q,X;if(typeof X.then=="function")return yt(Q,Al(X),nt);if(X.$$typeof===L)return yt(Q,Ml(Q,X),nt);Rl(Q,X)}return null}function ot(Q,X,nt,vt){var ae=X!==null?X.key:null;if(typeof nt=="string"&&nt!==""||typeof nt=="number"||typeof nt=="bigint")return ae!==null?null:R(Q,X,""+nt,vt);if(typeof nt=="object"&&nt!==null){switch(nt.$$typeof){case y:return nt.key===ae?B(Q,X,nt,vt):null;case T:return nt.key===ae?it(Q,X,nt,vt):null;case E:return nt=Os(nt),ot(Q,X,nt,vt)}if(k(nt)||Y(nt))return ae!==null?null:gt(Q,X,nt,vt,null);if(typeof nt.then=="function")return ot(Q,X,Al(nt),vt);if(nt.$$typeof===L)return ot(Q,X,Ml(Q,nt),vt);Rl(Q,nt)}return null}function ct(Q,X,nt,vt,ae){if(typeof vt=="string"&&vt!==""||typeof vt=="number"||typeof vt=="bigint")return Q=Q.get(nt)||null,R(X,Q,""+vt,ae);if(typeof vt=="object"&&vt!==null){switch(vt.$$typeof){case y:return Q=Q.get(vt.key===null?nt:vt.key)||null,B(X,Q,vt,ae);case T:return Q=Q.get(vt.key===null?nt:vt.key)||null,it(X,Q,vt,ae);case E:return vt=Os(vt),ct(Q,X,nt,vt,ae)}if(k(vt)||Y(vt))return Q=Q.get(nt)||null,gt(X,Q,vt,ae,null);if(typeof vt.then=="function")return ct(Q,X,nt,Al(vt),ae);if(vt.$$typeof===L)return ct(Q,X,nt,Ml(X,vt),ae);Rl(X,vt)}return null}function Qt(Q,X,nt,vt){for(var ae=null,Ue=null,Jt=X,_e=X=0,Ae=null;Jt!==null&&_e<nt.length;_e++){Jt.index>_e?(Ae=Jt,Jt=null):Ae=Jt.sibling;var Le=ot(Q,Jt,nt[_e],vt);if(Le===null){Jt===null&&(Jt=Ae);break}e&&Jt&&Le.alternate===null&&n(Q,Jt),X=f(Le,X,_e),Ue===null?ae=Le:Ue.sibling=Le,Ue=Le,Jt=Ae}if(_e===nt.length)return a(Q,Jt),Re&&_a(Q,_e),ae;if(Jt===null){for(;_e<nt.length;_e++)Jt=yt(Q,nt[_e],vt),Jt!==null&&(X=f(Jt,X,_e),Ue===null?ae=Jt:Ue.sibling=Jt,Ue=Jt);return Re&&_a(Q,_e),ae}for(Jt=o(Jt);_e<nt.length;_e++)Ae=ct(Jt,Q,_e,nt[_e],vt),Ae!==null&&(e&&Ae.alternate!==null&&Jt.delete(Ae.key===null?_e:Ae.key),X=f(Ae,X,_e),Ue===null?ae=Ae:Ue.sibling=Ae,Ue=Ae);return e&&Jt.forEach(function(hs){return n(Q,hs)}),Re&&_a(Q,_e),ae}function oe(Q,X,nt,vt){if(nt==null)throw Error(s(151));for(var ae=null,Ue=null,Jt=X,_e=X=0,Ae=null,Le=nt.next();Jt!==null&&!Le.done;_e++,Le=nt.next()){Jt.index>_e?(Ae=Jt,Jt=null):Ae=Jt.sibling;var hs=ot(Q,Jt,Le.value,vt);if(hs===null){Jt===null&&(Jt=Ae);break}e&&Jt&&hs.alternate===null&&n(Q,Jt),X=f(hs,X,_e),Ue===null?ae=hs:Ue.sibling=hs,Ue=hs,Jt=Ae}if(Le.done)return a(Q,Jt),Re&&_a(Q,_e),ae;if(Jt===null){for(;!Le.done;_e++,Le=nt.next())Le=yt(Q,Le.value,vt),Le!==null&&(X=f(Le,X,_e),Ue===null?ae=Le:Ue.sibling=Le,Ue=Le);return Re&&_a(Q,_e),ae}for(Jt=o(Jt);!Le.done;_e++,Le=nt.next())Le=ct(Jt,Q,_e,Le.value,vt),Le!==null&&(e&&Le.alternate!==null&&Jt.delete(Le.key===null?_e:Le.key),X=f(Le,X,_e),Ue===null?ae=Le:Ue.sibling=Le,Ue=Le);return e&&Jt.forEach(function(ty){return n(Q,ty)}),Re&&_a(Q,_e),ae}function Ke(Q,X,nt,vt){if(typeof nt=="object"&&nt!==null&&nt.type===w&&nt.key===null&&(nt=nt.props.children),typeof nt=="object"&&nt!==null){switch(nt.$$typeof){case y:t:{for(var ae=nt.key;X!==null;){if(X.key===ae){if(ae=nt.type,ae===w){if(X.tag===7){a(Q,X.sibling),vt=u(X,nt.props.children),vt.return=Q,Q=vt;break t}}else if(X.elementType===ae||typeof ae=="object"&&ae!==null&&ae.$$typeof===E&&Os(ae)===X.type){a(Q,X.sibling),vt=u(X,nt.props),po(vt,nt),vt.return=Q,Q=vt;break t}a(Q,X);break}else n(Q,X);X=X.sibling}nt.type===w?(vt=ws(nt.props.children,Q.mode,vt,nt.key),vt.return=Q,Q=vt):(vt=xl(nt.type,nt.key,nt.props,null,Q.mode,vt),po(vt,nt),vt.return=Q,Q=vt)}return v(Q);case T:t:{for(ae=nt.key;X!==null;){if(X.key===ae)if(X.tag===4&&X.stateNode.containerInfo===nt.containerInfo&&X.stateNode.implementation===nt.implementation){a(Q,X.sibling),vt=u(X,nt.children||[]),vt.return=Q,Q=vt;break t}else{a(Q,X);break}else n(Q,X);X=X.sibling}vt=bu(nt,Q.mode,vt),vt.return=Q,Q=vt}return v(Q);case E:return nt=Os(nt),Ke(Q,X,nt,vt)}if(k(nt))return Qt(Q,X,nt,vt);if(Y(nt)){if(ae=Y(nt),typeof ae!="function")throw Error(s(150));return nt=ae.call(nt),oe(Q,X,nt,vt)}if(typeof nt.then=="function")return Ke(Q,X,Al(nt),vt);if(nt.$$typeof===L)return Ke(Q,X,Ml(Q,nt),vt);Rl(Q,nt)}return typeof nt=="string"&&nt!==""||typeof nt=="number"||typeof nt=="bigint"?(nt=""+nt,X!==null&&X.tag===6?(a(Q,X.sibling),vt=u(X,nt),vt.return=Q,Q=vt):(a(Q,X),vt=Mu(nt,Q.mode,vt),vt.return=Q,Q=vt),v(Q)):a(Q,X)}return function(Q,X,nt,vt){try{ho=0;var ae=Ke(Q,X,nt,vt);return dr=null,ae}catch(Jt){if(Jt===hr||Jt===El)throw Jt;var Ue=xi(29,Jt,null,Q.mode);return Ue.lanes=vt,Ue.return=Q,Ue}finally{}}}var zs=lm(!0),cm=lm(!1),Za=!1;function Pu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function zu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ka(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Qa(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(ze&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=vl(e),qp(e,null,a),n}return _l(e,o,n,a),vl(e)}function mo(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,nn(e,a)}}function Iu(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=v:f=f.next=v,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Fu=!1;function go(){if(Fu){var e=fr;if(e!==null)throw e}}function _o(e,n,a,o){Fu=!1;var u=e.updateQueue;Za=!1;var f=u.firstBaseUpdate,v=u.lastBaseUpdate,R=u.shared.pending;if(R!==null){u.shared.pending=null;var B=R,it=B.next;B.next=null,v===null?f=it:v.next=it,v=B;var gt=e.alternate;gt!==null&&(gt=gt.updateQueue,R=gt.lastBaseUpdate,R!==v&&(R===null?gt.firstBaseUpdate=it:R.next=it,gt.lastBaseUpdate=B))}if(f!==null){var yt=u.baseState;v=0,gt=it=B=null,R=f;do{var ot=R.lane&-536870913,ct=ot!==R.lane;if(ct?(Te&ot)===ot:(o&ot)===ot){ot!==0&&ot===ur&&(Fu=!0),gt!==null&&(gt=gt.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});t:{var Qt=e,oe=R;ot=n;var Ke=a;switch(oe.tag){case 1:if(Qt=oe.payload,typeof Qt=="function"){yt=Qt.call(Ke,yt,ot);break t}yt=Qt;break t;case 3:Qt.flags=Qt.flags&-65537|128;case 0:if(Qt=oe.payload,ot=typeof Qt=="function"?Qt.call(Ke,yt,ot):Qt,ot==null)break t;yt=x({},yt,ot);break t;case 2:Za=!0}}ot=R.callback,ot!==null&&(e.flags|=64,ct&&(e.flags|=8192),ct=u.callbacks,ct===null?u.callbacks=[ot]:ct.push(ot))}else ct={lane:ot,tag:R.tag,payload:R.payload,callback:R.callback,next:null},gt===null?(it=gt=ct,B=yt):gt=gt.next=ct,v|=ot;if(R=R.next,R===null){if(R=u.shared.pending,R===null)break;ct=R,R=ct.next,ct.next=null,u.lastBaseUpdate=ct,u.shared.pending=null}}while(!0);gt===null&&(B=yt),u.baseState=B,u.firstBaseUpdate=it,u.lastBaseUpdate=gt,f===null&&(u.shared.lanes=0),ns|=v,e.lanes=v,e.memoizedState=yt}}function um(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function fm(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)um(a[e],n)}var pr=P(null),Cl=P(0);function hm(e,n){e=Ca,bt(Cl,e),bt(pr,n),Ca=e|n.baseLanes}function Bu(){bt(Cl,Ca),bt(pr,pr.current)}function Gu(){Ca=Cl.current,J(pr),J(Cl)}var Si=P(null),Ii=null;function Ja(e){var n=e.alternate;bt(Mn,Mn.current&1),bt(Si,e),Ii===null&&(n===null||pr.current!==null||n.memoizedState!==null)&&(Ii=e)}function Hu(e){bt(Mn,Mn.current),bt(Si,e),Ii===null&&(Ii=e)}function dm(e){e.tag===22?(bt(Mn,Mn.current),bt(Si,e),Ii===null&&(Ii=e)):$a()}function $a(){bt(Mn,Mn.current),bt(Si,Si.current)}function yi(e){J(Si),Ii===e&&(Ii=null),J(Mn)}var Mn=P(0);function wl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||jf(a)||Zf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Sa=0,pe=null,je=null,An=null,Dl=!1,mr=!1,Is=!1,Nl=0,vo=0,gr=null,Xx=0;function vn(){throw Error(s(321))}function Vu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!vi(e[a],n[a]))return!1;return!0}function ku(e,n,a,o,u,f){return Sa=f,pe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,O.H=e===null||e.memoizedState===null?Km:sf,Is=!1,f=a(o,u),Is=!1,mr&&(f=mm(n,a,o,u)),pm(e),f}function pm(e){O.H=yo;var n=je!==null&&je.next!==null;if(Sa=0,An=je=pe=null,Dl=!1,vo=0,gr=null,n)throw Error(s(300));e===null||Rn||(e=e.dependencies,e!==null&&yl(e)&&(Rn=!0))}function mm(e,n,a,o){pe=e;var u=0;do{if(mr&&(gr=null),vo=0,mr=!1,25<=u)throw Error(s(301));if(u+=1,An=je=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}O.H=Qm,f=n(a,o)}while(mr);return f}function Wx(){var e=O.H,n=e.useState()[0];return n=typeof n.then=="function"?xo(n):n,e=e.useState()[0],(je!==null?je.memoizedState:null)!==e&&(pe.flags|=1024),n}function Xu(){var e=Nl!==0;return Nl=0,e}function Wu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function qu(e){if(Dl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Dl=!1}Sa=0,An=je=pe=null,mr=!1,vo=Nl=0,gr=null}function ti(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return An===null?pe.memoizedState=An=e:An=An.next=e,An}function bn(){if(je===null){var e=pe.alternate;e=e!==null?e.memoizedState:null}else e=je.next;var n=An===null?pe.memoizedState:An.next;if(n!==null)An=n,je=e;else{if(e===null)throw pe.alternate===null?Error(s(467)):Error(s(310));je=e,e={memoizedState:je.memoizedState,baseState:je.baseState,baseQueue:je.baseQueue,queue:je.queue,next:null},An===null?pe.memoizedState=An=e:An=An.next=e}return An}function Ul(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function xo(e){var n=vo;return vo+=1,gr===null&&(gr=[]),e=sm(gr,e,n),n=pe,(An===null?n.memoizedState:An.next)===null&&(n=n.alternate,O.H=n===null||n.memoizedState===null?Km:sf),e}function Ll(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return xo(e);if(e.$$typeof===L)return Hn(e)}throw Error(s(438,String(e)))}function Yu(e){var n=null,a=pe.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=pe.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Ul(),pe.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=Z;return n.index++,a}function ya(e,n){return typeof n=="function"?n(e):n}function Ol(e){var n=bn();return ju(n,je,e)}function ju(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=e.baseQueue,f=o.pending;if(f!==null){if(u!==null){var v=u.next;u.next=f.next,f.next=v}n.baseQueue=u=f,o.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var R=v=null,B=null,it=n,gt=!1;do{var yt=it.lane&-536870913;if(yt!==it.lane?(Te&yt)===yt:(Sa&yt)===yt){var ot=it.revertLane;if(ot===0)B!==null&&(B=B.next={lane:0,revertLane:0,gesture:null,action:it.action,hasEagerState:it.hasEagerState,eagerState:it.eagerState,next:null}),yt===ur&&(gt=!0);else if((Sa&ot)===ot){it=it.next,ot===ur&&(gt=!0);continue}else yt={lane:0,revertLane:it.revertLane,gesture:null,action:it.action,hasEagerState:it.hasEagerState,eagerState:it.eagerState,next:null},B===null?(R=B=yt,v=f):B=B.next=yt,pe.lanes|=ot,ns|=ot;yt=it.action,Is&&a(f,yt),f=it.hasEagerState?it.eagerState:a(f,yt)}else ot={lane:yt,revertLane:it.revertLane,gesture:it.gesture,action:it.action,hasEagerState:it.hasEagerState,eagerState:it.eagerState,next:null},B===null?(R=B=ot,v=f):B=B.next=ot,pe.lanes|=yt,ns|=yt;it=it.next}while(it!==null&&it!==n);if(B===null?v=f:B.next=R,!vi(f,e.memoizedState)&&(Rn=!0,gt&&(a=fr,a!==null)))throw a;e.memoizedState=f,e.baseState=v,e.baseQueue=B,o.lastRenderedState=f}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Zu(e){var n=bn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var v=u=u.next;do f=e(f,v.action),v=v.next;while(v!==u);vi(f,n.memoizedState)||(Rn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function gm(e,n,a){var o=pe,u=bn(),f=Re;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var v=!vi((je||u).memoizedState,a);if(v&&(u.memoizedState=a,Rn=!0),u=u.queue,Ju(xm.bind(null,o,u,e),[e]),u.getSnapshot!==n||v||An!==null&&An.memoizedState.tag&1){if(o.flags|=2048,_r(9,{destroy:void 0},vm.bind(null,o,u,a,n),null),tn===null)throw Error(s(349));f||(Sa&127)!==0||_m(o,n,a)}return a}function _m(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=pe.updateQueue,n===null?(n=Ul(),pe.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function vm(e,n,a,o){n.value=a,n.getSnapshot=o,Sm(n)&&ym(e)}function xm(e,n,a){return a(function(){Sm(n)&&ym(e)})}function Sm(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!vi(e,a)}catch{return!0}}function ym(e){var n=Cs(e,2);n!==null&&ui(n,e,2)}function Ku(e){var n=ti();if(typeof e=="function"){var a=e;if(e=a(),Is){Pt(!0);try{a()}finally{Pt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ya,lastRenderedState:e},n}function Mm(e,n,a,o){return e.baseState=a,ju(e,je,typeof o=="function"?o:ya)}function qx(e,n,a,o,u){if(Il(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){f.listeners.push(v)}};O.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,bm(n,f)):(f.next=a.next,n.pending=a.next=f)}}function bm(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var f=O.T,v={};O.T=v;try{var R=a(u,o),B=O.S;B!==null&&B(v,R),Em(e,n,R)}catch(it){Qu(e,n,it)}finally{f!==null&&v.types!==null&&(f.types=v.types),O.T=f}}else try{f=a(u,o),Em(e,n,f)}catch(it){Qu(e,n,it)}}function Em(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Tm(e,n,o)},function(o){return Qu(e,n,o)}):Tm(e,n,a)}function Tm(e,n,a){n.status="fulfilled",n.value=a,Am(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,bm(e,a)))}function Qu(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Am(n),n=n.next;while(n!==o)}e.action=null}function Am(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Rm(e,n){return n}function Cm(e,n){if(Re){var a=tn.formState;if(a!==null){t:{var o=pe;if(Re){if(sn){e:{for(var u=sn,f=zi;u.nodeType!==8;){if(!f){u=null;break e}if(u=Fi(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){sn=Fi(u.nextSibling),o=u.data==="F!";break t}}Ya(o)}o=!1}o&&(n=a[0])}}return a=ti(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Rm,lastRenderedState:n},a.queue=o,a=Ym.bind(null,pe,o),o.dispatch=a,o=Ku(!1),f=af.bind(null,pe,!1,o.queue),o=ti(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=qx.bind(null,pe,u,f,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function wm(e){var n=bn();return Dm(n,je,e)}function Dm(e,n,a){if(n=ju(e,n,Rm)[0],e=Ol(ya)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=xo(n)}catch(v){throw v===hr?El:v}else o=n;n=bn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(pe.flags|=2048,_r(9,{destroy:void 0},Yx.bind(null,u,a),null)),[o,f,e]}function Yx(e,n){e.action=n}function Nm(e){var n=bn(),a=je;if(a!==null)return Dm(n,a,e);bn(),n=n.memoizedState,a=bn();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function _r(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=pe.updateQueue,n===null&&(n=Ul(),pe.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function Um(){return bn().memoizedState}function Pl(e,n,a,o){var u=ti();pe.flags|=e,u.memoizedState=_r(1|n,{destroy:void 0},a,o===void 0?null:o)}function zl(e,n,a,o){var u=bn();o=o===void 0?null:o;var f=u.memoizedState.inst;je!==null&&o!==null&&Vu(o,je.memoizedState.deps)?u.memoizedState=_r(n,f,a,o):(pe.flags|=e,u.memoizedState=_r(1|n,f,a,o))}function Lm(e,n){Pl(8390656,8,e,n)}function Ju(e,n){zl(2048,8,e,n)}function jx(e){pe.flags|=4;var n=pe.updateQueue;if(n===null)n=Ul(),pe.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function Om(e){var n=bn().memoizedState;return jx({ref:n,nextImpl:e}),function(){if((ze&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Pm(e,n){return zl(4,2,e,n)}function zm(e,n){return zl(4,4,e,n)}function Im(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Fm(e,n,a){a=a!=null?a.concat([e]):null,zl(4,4,Im.bind(null,n,e),a)}function $u(){}function Bm(e,n){var a=bn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Vu(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function Gm(e,n){var a=bn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Vu(n,o[1]))return o[0];if(o=e(),Is){Pt(!0);try{e()}finally{Pt(!1)}}return a.memoizedState=[o,n],o}function tf(e,n,a){return a===void 0||(Sa&1073741824)!==0&&(Te&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=H0(),pe.lanes|=e,ns|=e,a)}function Hm(e,n,a,o){return vi(a,n)?a:pr.current!==null?(e=tf(e,a,o),vi(e,n)||(Rn=!0),e):(Sa&42)===0||(Sa&1073741824)!==0&&(Te&261930)===0?(Rn=!0,e.memoizedState=a):(e=H0(),pe.lanes|=e,ns|=e,n)}function Vm(e,n,a,o,u){var f=F.p;F.p=f!==0&&8>f?f:8;var v=O.T,R={};O.T=R,af(e,!1,n,a);try{var B=u(),it=O.S;if(it!==null&&it(R,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var gt=kx(B,o);So(e,n,gt,Ei(e))}else So(e,n,o,Ei(e))}catch(yt){So(e,n,{then:function(){},status:"rejected",reason:yt},Ei())}finally{F.p=f,v!==null&&R.types!==null&&(v.types=R.types),O.T=v}}function Zx(){}function ef(e,n,a,o){if(e.tag!==5)throw Error(s(476));var u=km(e).queue;Vm(e,u,n,st,a===null?Zx:function(){return Xm(e),a(o)})}function km(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:st,baseState:st,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ya,lastRenderedState:st},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ya,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Xm(e){var n=km(e);n.next===null&&(n=e.alternate.memoizedState),So(e,n.next.queue,{},Ei())}function nf(){return Hn(Io)}function Wm(){return bn().memoizedState}function qm(){return bn().memoizedState}function Kx(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=Ei();e=Ka(a);var o=Qa(n,e,a);o!==null&&(ui(o,n,a),mo(o,n,a)),n={cache:Nu()},e.payload=n;return}n=n.return}}function Qx(e,n,a){var o=Ei();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Il(e)?jm(n,a):(a=Su(e,n,a,o),a!==null&&(ui(a,e,o),Zm(a,n,o)))}function Ym(e,n,a){var o=Ei();So(e,n,a,o)}function So(e,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Il(e))jm(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var v=n.lastRenderedState,R=f(v,a);if(u.hasEagerState=!0,u.eagerState=R,vi(R,v))return _l(e,n,u,0),tn===null&&gl(),!1}catch{}finally{}if(a=Su(e,n,u,o),a!==null)return ui(a,e,o),Zm(a,n,o),!0}return!1}function af(e,n,a,o){if(o={lane:2,revertLane:zf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Il(e)){if(n)throw Error(s(479))}else n=Su(e,a,o,2),n!==null&&ui(n,e,2)}function Il(e){var n=e.alternate;return e===pe||n!==null&&n===pe}function jm(e,n){mr=Dl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Zm(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,nn(e,a)}}var yo={readContext:Hn,use:Ll,useCallback:vn,useContext:vn,useEffect:vn,useImperativeHandle:vn,useLayoutEffect:vn,useInsertionEffect:vn,useMemo:vn,useReducer:vn,useRef:vn,useState:vn,useDebugValue:vn,useDeferredValue:vn,useTransition:vn,useSyncExternalStore:vn,useId:vn,useHostTransitionStatus:vn,useFormState:vn,useActionState:vn,useOptimistic:vn,useMemoCache:vn,useCacheRefresh:vn};yo.useEffectEvent=vn;var Km={readContext:Hn,use:Ll,useCallback:function(e,n){return ti().memoizedState=[e,n===void 0?null:n],e},useContext:Hn,useEffect:Lm,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Pl(4194308,4,Im.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Pl(4194308,4,e,n)},useInsertionEffect:function(e,n){Pl(4,2,e,n)},useMemo:function(e,n){var a=ti();n=n===void 0?null:n;var o=e();if(Is){Pt(!0);try{e()}finally{Pt(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=ti();if(a!==void 0){var u=a(n);if(Is){Pt(!0);try{a(n)}finally{Pt(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=Qx.bind(null,pe,e),[o.memoizedState,e]},useRef:function(e){var n=ti();return e={current:e},n.memoizedState=e},useState:function(e){e=Ku(e);var n=e.queue,a=Ym.bind(null,pe,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:$u,useDeferredValue:function(e,n){var a=ti();return tf(a,e,n)},useTransition:function(){var e=Ku(!1);return e=Vm.bind(null,pe,e.queue,!0,!1),ti().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=pe,u=ti();if(Re){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),tn===null)throw Error(s(349));(Te&127)!==0||_m(o,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,Lm(xm.bind(null,o,f,e),[e]),o.flags|=2048,_r(9,{destroy:void 0},vm.bind(null,o,f,a,n),null),a},useId:function(){var e=ti(),n=tn.identifierPrefix;if(Re){var a=ta,o=$i;a=(o&~(1<<32-zt(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Nl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Xx++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:nf,useFormState:Cm,useActionState:Cm,useOptimistic:function(e){var n=ti();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=af.bind(null,pe,!0,a),a.dispatch=n,[e,n]},useMemoCache:Yu,useCacheRefresh:function(){return ti().memoizedState=Kx.bind(null,pe)},useEffectEvent:function(e){var n=ti(),a={impl:e};return n.memoizedState=a,function(){if((ze&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},sf={readContext:Hn,use:Ll,useCallback:Bm,useContext:Hn,useEffect:Ju,useImperativeHandle:Fm,useInsertionEffect:Pm,useLayoutEffect:zm,useMemo:Gm,useReducer:Ol,useRef:Um,useState:function(){return Ol(ya)},useDebugValue:$u,useDeferredValue:function(e,n){var a=bn();return Hm(a,je.memoizedState,e,n)},useTransition:function(){var e=Ol(ya)[0],n=bn().memoizedState;return[typeof e=="boolean"?e:xo(e),n]},useSyncExternalStore:gm,useId:Wm,useHostTransitionStatus:nf,useFormState:wm,useActionState:wm,useOptimistic:function(e,n){var a=bn();return Mm(a,je,e,n)},useMemoCache:Yu,useCacheRefresh:qm};sf.useEffectEvent=Om;var Qm={readContext:Hn,use:Ll,useCallback:Bm,useContext:Hn,useEffect:Ju,useImperativeHandle:Fm,useInsertionEffect:Pm,useLayoutEffect:zm,useMemo:Gm,useReducer:Zu,useRef:Um,useState:function(){return Zu(ya)},useDebugValue:$u,useDeferredValue:function(e,n){var a=bn();return je===null?tf(a,e,n):Hm(a,je.memoizedState,e,n)},useTransition:function(){var e=Zu(ya)[0],n=bn().memoizedState;return[typeof e=="boolean"?e:xo(e),n]},useSyncExternalStore:gm,useId:Wm,useHostTransitionStatus:nf,useFormState:Nm,useActionState:Nm,useOptimistic:function(e,n){var a=bn();return je!==null?Mm(a,je,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Yu,useCacheRefresh:qm};Qm.useEffectEvent=Om;function rf(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:x({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var of={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=Ei(),u=Ka(o);u.payload=n,a!=null&&(u.callback=a),n=Qa(e,u,o),n!==null&&(ui(n,e,o),mo(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=Ei(),u=Ka(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Qa(e,u,o),n!==null&&(ui(n,e,o),mo(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=Ei(),o=Ka(a);o.tag=2,n!=null&&(o.callback=n),n=Qa(e,o,a),n!==null&&(ui(n,e,a),mo(n,e,a))}};function Jm(e,n,a,o,u,f,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,f,v):n.prototype&&n.prototype.isPureReactComponent?!ro(a,o)||!ro(u,f):!0}function $m(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&of.enqueueReplaceState(n,n.state,null)}function Fs(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=x({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function t0(e){ml(e)}function e0(e){console.error(e)}function n0(e){ml(e)}function Fl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function i0(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function lf(e,n,a){return a=Ka(a),a.tag=3,a.payload={element:null},a.callback=function(){Fl(e,n)},a}function a0(e){return e=Ka(e),e.tag=3,e}function s0(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;e.payload=function(){return u(f)},e.callback=function(){i0(n,a,o)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(e.callback=function(){i0(n,a,o),typeof u!="function"&&(is===null?is=new Set([this]):is.add(this));var R=o.stack;this.componentDidCatch(o.value,{componentStack:R!==null?R:""})})}function Jx(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&cr(n,a,u,!0),a=Si.current,a!==null){switch(a.tag){case 31:case 13:return Ii===null?Kl():a.alternate===null&&xn===0&&(xn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Tl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Lf(e,o,u)),!1;case 22:return a.flags|=65536,o===Tl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Lf(e,o,u)),!1}throw Error(s(435,a.tag))}return Lf(e,o,u),Kl(),!1}if(Re)return n=Si.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Au&&(e=Error(s(422),{cause:o}),co(Li(e,a)))):(o!==Au&&(n=Error(s(423),{cause:o}),co(Li(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=Li(o,a),u=lf(e.stateNode,o,u),Iu(e,u),xn!==4&&(xn=2)),!1;var f=Error(s(520),{cause:o});if(f=Li(f,a),wo===null?wo=[f]:wo.push(f),xn!==4&&(xn=2),n===null)return!0;o=Li(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=lf(a.stateNode,o,e),Iu(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(is===null||!is.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=a0(u),s0(u,e,a,o),Iu(a,u),!1}a=a.return}while(a!==null);return!1}var cf=Error(s(461)),Rn=!1;function Vn(e,n,a,o){n.child=e===null?cm(n,null,a,o):zs(n,e.child,a,o)}function r0(e,n,a,o,u){a=a.render;var f=n.ref;if("ref"in o){var v={};for(var R in o)R!=="ref"&&(v[R]=o[R])}else v=o;return Us(n),o=ku(e,n,a,v,f,u),R=Xu(),e!==null&&!Rn?(Wu(e,n,u),Ma(e,n,u)):(Re&&R&&Eu(n),n.flags|=1,Vn(e,n,o,u),n.child)}function o0(e,n,a,o,u){if(e===null){var f=a.type;return typeof f=="function"&&!yu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,l0(e,n,f,o,u)):(e=xl(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!_f(e,u)){var v=f.memoizedProps;if(a=a.compare,a=a!==null?a:ro,a(v,o)&&e.ref===n.ref)return Ma(e,n,u)}return n.flags|=1,e=ga(f,o),e.ref=n.ref,e.return=n,n.child=e}function l0(e,n,a,o,u){if(e!==null){var f=e.memoizedProps;if(ro(f,o)&&e.ref===n.ref)if(Rn=!1,n.pendingProps=o=f,_f(e,u))(e.flags&131072)!==0&&(Rn=!0);else return n.lanes=e.lanes,Ma(e,n,u)}return uf(e,n,a,o,u)}function c0(e,n,a,o){var u=o.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(o=n.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~f}else o=0,n.child=null;return u0(e,n,f,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&bl(n,f!==null?f.cachePool:null),f!==null?hm(n,f):Bu(),dm(n);else return o=n.lanes=536870912,u0(e,n,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(bl(n,f.cachePool),hm(n,f),$a(),n.memoizedState=null):(e!==null&&bl(n,null),Bu(),$a());return Vn(e,n,u,a),n.child}function Mo(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function u0(e,n,a,o,u){var f=Lu();return f=f===null?null:{parent:Tn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&bl(n,null),Bu(),dm(n),e!==null&&cr(e,n,o,!0),n.childLanes=u,null}function Bl(e,n){return n=Hl({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function f0(e,n,a){return zs(n,e.child,null,a),e=Bl(n,n.pendingProps),e.flags|=2,yi(n),n.memoizedState=null,e}function $x(e,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Re){if(o.mode==="hidden")return e=Bl(n,o),n.lanes=536870912,Mo(null,e);if(Hu(n),(e=sn)?(e=bg(e,zi),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Wa!==null?{id:$i,overflow:ta}:null,retryLane:536870912,hydrationErrors:null},a=jp(e),a.return=n,n.child=a,Gn=n,sn=null)):e=null,e===null)throw Ya(n);return n.lanes=536870912,null}return Bl(n,o)}var f=e.memoizedState;if(f!==null){var v=f.dehydrated;if(Hu(n),u)if(n.flags&256)n.flags&=-257,n=f0(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(Rn||cr(e,n,a,!1),u=(a&e.childLanes)!==0,Rn||u){if(o=tn,o!==null&&(v=Fe(o,a),v!==0&&v!==f.retryLane))throw f.retryLane=v,Cs(e,v),ui(o,e,v),cf;Kl(),n=f0(e,n,a)}else e=f.treeContext,sn=Fi(v.nextSibling),Gn=n,Re=!0,qa=null,zi=!1,e!==null&&Qp(n,e),n=Bl(n,o),n.flags|=4096;return n}return e=ga(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Gl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function uf(e,n,a,o,u){return Us(n),a=ku(e,n,a,o,void 0,u),o=Xu(),e!==null&&!Rn?(Wu(e,n,u),Ma(e,n,u)):(Re&&o&&Eu(n),n.flags|=1,Vn(e,n,a,u),n.child)}function h0(e,n,a,o,u,f){return Us(n),n.updateQueue=null,a=mm(n,o,a,u),pm(e),o=Xu(),e!==null&&!Rn?(Wu(e,n,f),Ma(e,n,f)):(Re&&o&&Eu(n),n.flags|=1,Vn(e,n,a,f),n.child)}function d0(e,n,a,o,u){if(Us(n),n.stateNode===null){var f=sr,v=a.contextType;typeof v=="object"&&v!==null&&(f=Hn(v)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=of,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},Pu(n),v=a.contextType,f.context=typeof v=="object"&&v!==null?Hn(v):sr,f.state=n.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(rf(n,a,v,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(v=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),v!==f.state&&of.enqueueReplaceState(f,f.state,null),_o(n,o,f,u),go(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){f=n.stateNode;var R=n.memoizedProps,B=Fs(a,R);f.props=B;var it=f.context,gt=a.contextType;v=sr,typeof gt=="object"&&gt!==null&&(v=Hn(gt));var yt=a.getDerivedStateFromProps;gt=typeof yt=="function"||typeof f.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,gt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(R||it!==v)&&$m(n,f,o,v),Za=!1;var ot=n.memoizedState;f.state=ot,_o(n,o,f,u),go(),it=n.memoizedState,R||ot!==it||Za?(typeof yt=="function"&&(rf(n,a,yt,o),it=n.memoizedState),(B=Za||Jm(n,a,B,o,ot,it,v))?(gt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=it),f.props=o,f.state=it,f.context=v,o=B):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,zu(e,n),v=n.memoizedProps,gt=Fs(a,v),f.props=gt,yt=n.pendingProps,ot=f.context,it=a.contextType,B=sr,typeof it=="object"&&it!==null&&(B=Hn(it)),R=a.getDerivedStateFromProps,(it=typeof R=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(v!==yt||ot!==B)&&$m(n,f,o,B),Za=!1,ot=n.memoizedState,f.state=ot,_o(n,o,f,u),go();var ct=n.memoizedState;v!==yt||ot!==ct||Za||e!==null&&e.dependencies!==null&&yl(e.dependencies)?(typeof R=="function"&&(rf(n,a,R,o),ct=n.memoizedState),(gt=Za||Jm(n,a,gt,o,ot,ct,B)||e!==null&&e.dependencies!==null&&yl(e.dependencies))?(it||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,ct,B),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,ct,B)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||v===e.memoizedProps&&ot===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&ot===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ct),f.props=o,f.state=ct,f.context=B,o=gt):(typeof f.componentDidUpdate!="function"||v===e.memoizedProps&&ot===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&ot===e.memoizedState||(n.flags|=1024),o=!1)}return f=o,Gl(e,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&o?(n.child=zs(n,e.child,null,u),n.child=zs(n,null,a,u)):Vn(e,n,a,u),n.memoizedState=f.state,e=n.child):e=Ma(e,n,u),e}function p0(e,n,a,o){return Ds(),n.flags|=256,Vn(e,n,a,o),n.child}var ff={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function hf(e){return{baseLanes:e,cachePool:im()}}function df(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=bi),e}function m0(e,n,a){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,v;if((v=f)||(v=e!==null&&e.memoizedState===null?!1:(Mn.current&2)!==0),v&&(u=!0,n.flags&=-129),v=(n.flags&32)!==0,n.flags&=-33,e===null){if(Re){if(u?Ja(n):$a(),(e=sn)?(e=bg(e,zi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Wa!==null?{id:$i,overflow:ta}:null,retryLane:536870912,hydrationErrors:null},a=jp(e),a.return=n,n.child=a,Gn=n,sn=null)):e=null,e===null)throw Ya(n);return Zf(e)?n.lanes=32:n.lanes=536870912,null}var R=o.children;return o=o.fallback,u?($a(),u=n.mode,R=Hl({mode:"hidden",children:R},u),o=ws(o,u,a,null),R.return=n,o.return=n,R.sibling=o,n.child=R,o=n.child,o.memoizedState=hf(a),o.childLanes=df(e,v,a),n.memoizedState=ff,Mo(null,o)):(Ja(n),pf(n,R))}var B=e.memoizedState;if(B!==null&&(R=B.dehydrated,R!==null)){if(f)n.flags&256?(Ja(n),n.flags&=-257,n=mf(e,n,a)):n.memoizedState!==null?($a(),n.child=e.child,n.flags|=128,n=null):($a(),R=o.fallback,u=n.mode,o=Hl({mode:"visible",children:o.children},u),R=ws(R,u,a,null),R.flags|=2,o.return=n,R.return=n,o.sibling=R,n.child=o,zs(n,e.child,null,a),o=n.child,o.memoizedState=hf(a),o.childLanes=df(e,v,a),n.memoizedState=ff,n=Mo(null,o));else if(Ja(n),Zf(R)){if(v=R.nextSibling&&R.nextSibling.dataset,v)var it=v.dgst;v=it,o=Error(s(419)),o.stack="",o.digest=v,co({value:o,source:null,stack:null}),n=mf(e,n,a)}else if(Rn||cr(e,n,a,!1),v=(a&e.childLanes)!==0,Rn||v){if(v=tn,v!==null&&(o=Fe(v,a),o!==0&&o!==B.retryLane))throw B.retryLane=o,Cs(e,o),ui(v,e,o),cf;jf(R)||Kl(),n=mf(e,n,a)}else jf(R)?(n.flags|=192,n.child=e.child,n=null):(e=B.treeContext,sn=Fi(R.nextSibling),Gn=n,Re=!0,qa=null,zi=!1,e!==null&&Qp(n,e),n=pf(n,o.children),n.flags|=4096);return n}return u?($a(),R=o.fallback,u=n.mode,B=e.child,it=B.sibling,o=ga(B,{mode:"hidden",children:o.children}),o.subtreeFlags=B.subtreeFlags&65011712,it!==null?R=ga(it,R):(R=ws(R,u,a,null),R.flags|=2),R.return=n,o.return=n,o.sibling=R,n.child=o,Mo(null,o),o=n.child,R=e.child.memoizedState,R===null?R=hf(a):(u=R.cachePool,u!==null?(B=Tn._currentValue,u=u.parent!==B?{parent:B,pool:B}:u):u=im(),R={baseLanes:R.baseLanes|a,cachePool:u}),o.memoizedState=R,o.childLanes=df(e,v,a),n.memoizedState=ff,Mo(e.child,o)):(Ja(n),a=e.child,e=a.sibling,a=ga(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(v=n.deletions,v===null?(n.deletions=[e],n.flags|=16):v.push(e)),n.child=a,n.memoizedState=null,a)}function pf(e,n){return n=Hl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Hl(e,n){return e=xi(22,e,null,n),e.lanes=0,e}function mf(e,n,a){return zs(n,e.child,null,a),e=pf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function g0(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),wu(e.return,n,a)}function gf(e,n,a,o,u,f){var v=e.memoizedState;v===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:f}:(v.isBackwards=n,v.rendering=null,v.renderingStartTime=0,v.last=o,v.tail=a,v.tailMode=u,v.treeForkCount=f)}function _0(e,n,a){var o=n.pendingProps,u=o.revealOrder,f=o.tail;o=o.children;var v=Mn.current,R=(v&2)!==0;if(R?(v=v&1|2,n.flags|=128):v&=1,bt(Mn,v),Vn(e,n,o,a),o=Re?lo:0,!R&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&g0(e,a,n);else if(e.tag===19)g0(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&wl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),gf(n,!1,u,a,f,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&wl(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}gf(n,!0,a,null,f,o);break;case"together":gf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function Ma(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),ns|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(cr(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=ga(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=ga(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function _f(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&yl(e)))}function tS(e,n,a){switch(n.tag){case 3:Rt(n,n.stateNode.containerInfo),ja(n,Tn,e.memoizedState.cache),Ds();break;case 27:case 5:se(n);break;case 4:Rt(n,n.stateNode.containerInfo);break;case 10:ja(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Hu(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Ja(n),n.flags|=128,null):(a&n.child.childLanes)!==0?m0(e,n,a):(Ja(n),e=Ma(e,n,a),e!==null?e.sibling:null);Ja(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(cr(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return _0(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),bt(Mn,Mn.current),o)break;return null;case 22:return n.lanes=0,c0(e,n,a,n.pendingProps);case 24:ja(n,Tn,e.memoizedState.cache)}return Ma(e,n,a)}function v0(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)Rn=!0;else{if(!_f(e,a)&&(n.flags&128)===0)return Rn=!1,tS(e,n,a);Rn=(e.flags&131072)!==0}else Rn=!1,Re&&(n.flags&1048576)!==0&&Kp(n,lo,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(e=Os(n.elementType),n.type=e,typeof e=="function")yu(e)?(o=Fs(e,o),n.tag=1,n=d0(null,n,e,o,a)):(n.tag=0,n=uf(null,n,e,o,a));else{if(e!=null){var u=e.$$typeof;if(u===U){n.tag=11,n=r0(null,n,e,o,a);break t}else if(u===I){n.tag=14,n=o0(null,n,e,o,a);break t}}throw n=ht(e)||e,Error(s(306,n,""))}}return n;case 0:return uf(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Fs(o,n.pendingProps),d0(e,n,o,u,a);case 3:t:{if(Rt(n,n.stateNode.containerInfo),e===null)throw Error(s(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,zu(e,n),_o(n,o,null,a);var v=n.memoizedState;if(o=v.cache,ja(n,Tn,o),o!==f.cache&&Du(n,[Tn],a,!0),go(),o=v.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:v.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=p0(e,n,o,a);break t}else if(o!==u){u=Li(Error(s(424)),n),co(u),n=p0(e,n,o,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(sn=Fi(e.firstChild),Gn=n,Re=!0,qa=null,zi=!0,a=cm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Ds(),o===u){n=Ma(e,n,a);break t}Vn(e,n,o,a)}n=n.child}return n;case 26:return Gl(e,n),e===null?(a=wg(n.type,null,n.pendingProps,null))?n.memoizedState=a:Re||(a=n.type,e=n.pendingProps,o=ic(rt.current).createElement(a),o[an]=n,o[_n]=e,kn(o,a,e),Je(o),n.stateNode=o):n.memoizedState=wg(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return se(n),e===null&&Re&&(o=n.stateNode=Ag(n.type,n.pendingProps,rt.current),Gn=n,zi=!0,u=sn,os(n.type)?(Kf=u,sn=Fi(o.firstChild)):sn=u),Vn(e,n,n.pendingProps.children,a),Gl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Re&&((u=o=sn)&&(o=DS(o,n.type,n.pendingProps,zi),o!==null?(n.stateNode=o,Gn=n,sn=Fi(o.firstChild),zi=!1,u=!0):u=!1),u||Ya(n)),se(n),u=n.type,f=n.pendingProps,v=e!==null?e.memoizedProps:null,o=f.children,Wf(u,f)?o=null:v!==null&&Wf(u,v)&&(n.flags|=32),n.memoizedState!==null&&(u=ku(e,n,Wx,null,null,a),Io._currentValue=u),Gl(e,n),Vn(e,n,o,a),n.child;case 6:return e===null&&Re&&((e=a=sn)&&(a=NS(a,n.pendingProps,zi),a!==null?(n.stateNode=a,Gn=n,sn=null,e=!0):e=!1),e||Ya(n)),null;case 13:return m0(e,n,a);case 4:return Rt(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=zs(n,null,o,a):Vn(e,n,o,a),n.child;case 11:return r0(e,n,n.type,n.pendingProps,a);case 7:return Vn(e,n,n.pendingProps,a),n.child;case 8:return Vn(e,n,n.pendingProps.children,a),n.child;case 12:return Vn(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,ja(n,n.type,o.value),Vn(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,Us(n),u=Hn(u),o=o(u),n.flags|=1,Vn(e,n,o,a),n.child;case 14:return o0(e,n,n.type,n.pendingProps,a);case 15:return l0(e,n,n.type,n.pendingProps,a);case 19:return _0(e,n,a);case 31:return $x(e,n,a);case 22:return c0(e,n,a,n.pendingProps);case 24:return Us(n),o=Hn(Tn),e===null?(u=Lu(),u===null&&(u=tn,f=Nu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:o,cache:u},Pu(n),ja(n,Tn,u)):((e.lanes&a)!==0&&(zu(e,n),_o(n,null,null,a),go()),u=e.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),ja(n,Tn,o)):(o=f.cache,ja(n,Tn,o),o!==u.cache&&Du(n,[Tn],a,!0))),Vn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function ba(e){e.flags|=4}function vf(e,n,a,o,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(W0())e.flags|=8192;else throw Ps=Tl,Ou}else e.flags&=-16777217}function x0(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Og(n))if(W0())e.flags|=8192;else throw Ps=Tl,Ou}function Vl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?St():536870912,e.lanes|=n,yr|=n)}function bo(e,n){if(!Re)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function rn(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function eS(e,n,a){var o=n.pendingProps;switch(Tu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return rn(n),null;case 1:return rn(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),xa(Tn),Ft(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(lr(n)?ba(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Ru())),rn(n),null;case 26:var u=n.type,f=n.memoizedState;return e===null?(ba(n),f!==null?(rn(n),x0(n,f)):(rn(n),vf(n,u,null,o,a))):f?f!==e.memoizedState?(ba(n),rn(n),x0(n,f)):(rn(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&ba(n),rn(n),vf(n,u,e,o,a)),null;case 27:if($t(n),a=rt.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&ba(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return rn(n),null}e=wt.current,lr(n)?Jp(n):(e=Ag(u,o,a),n.stateNode=e,ba(n))}return rn(n),null;case 5:if($t(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&ba(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return rn(n),null}if(f=wt.current,lr(n))Jp(n);else{var v=ic(rt.current);switch(f){case 1:f=v.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=v.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=v.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?v.createElement("select",{is:o.is}):v.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?v.createElement(u,{is:o.is}):v.createElement(u)}}f[an]=n,f[_n]=o;t:for(v=n.child;v!==null;){if(v.tag===5||v.tag===6)f.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===n)break t;for(;v.sibling===null;){if(v.return===null||v.return===n)break t;v=v.return}v.sibling.return=v.return,v=v.sibling}n.stateNode=f;t:switch(kn(f,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&ba(n)}}return rn(n),vf(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&ba(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=rt.current,lr(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=Gn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[an]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||mg(e.nodeValue,a)),e||Ya(n,!0)}else e=ic(e).createTextNode(o),e[an]=n,n.stateNode=e}return rn(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=lr(n),a!==null){if(e===null){if(!o)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[an]=n}else Ds(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;rn(n),e=!1}else a=Ru(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(yi(n),n):(yi(n),null);if((n.flags&128)!==0)throw Error(s(558))}return rn(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=lr(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[an]=n}else Ds(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;rn(n),u=!1}else u=Ru(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(yi(n),n):(yi(n),null)}return yi(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Vl(n,n.updateQueue),rn(n),null);case 4:return Ft(),e===null&&Gf(n.stateNode.containerInfo),rn(n),null;case 10:return xa(n.type),rn(n),null;case 19:if(J(Mn),o=n.memoizedState,o===null)return rn(n),null;if(u=(n.flags&128)!==0,f=o.rendering,f===null)if(u)bo(o,!1);else{if(xn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=wl(e),f!==null){for(n.flags|=128,bo(o,!1),e=f.updateQueue,n.updateQueue=e,Vl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Yp(a,e),a=a.sibling;return bt(Mn,Mn.current&1|2),Re&&_a(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&Nt()>Yl&&(n.flags|=128,u=!0,bo(o,!1),n.lanes=4194304)}else{if(!u)if(e=wl(f),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,Vl(n,e),bo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!Re)return rn(n),null}else 2*Nt()-o.renderingStartTime>Yl&&a!==536870912&&(n.flags|=128,u=!0,bo(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(e=o.last,e!==null?e.sibling=f:n.child=f,o.last=f)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=Nt(),e.sibling=null,a=Mn.current,bt(Mn,u?a&1|2:a&1),Re&&_a(n,o.treeForkCount),e):(rn(n),null);case 22:case 23:return yi(n),Gu(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(rn(n),n.subtreeFlags&6&&(n.flags|=8192)):rn(n),a=n.updateQueue,a!==null&&Vl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&J(Ls),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),xa(Tn),rn(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function nS(e,n){switch(Tu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return xa(Tn),Ft(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return $t(n),null;case 31:if(n.memoizedState!==null){if(yi(n),n.alternate===null)throw Error(s(340));Ds()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(yi(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Ds()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return J(Mn),null;case 4:return Ft(),null;case 10:return xa(n.type),null;case 22:case 23:return yi(n),Gu(),e!==null&&J(Ls),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return xa(Tn),null;case 25:return null;default:return null}}function S0(e,n){switch(Tu(n),n.tag){case 3:xa(Tn),Ft();break;case 26:case 27:case 5:$t(n);break;case 4:Ft();break;case 31:n.memoizedState!==null&&yi(n);break;case 13:yi(n);break;case 19:J(Mn);break;case 10:xa(n.type);break;case 22:case 23:yi(n),Gu(),e!==null&&J(Ls);break;case 24:xa(Tn)}}function Eo(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var f=a.create,v=a.inst;o=f(),v.destroy=o}a=a.next}while(a!==u)}}catch(R){qe(n,n.return,R)}}function ts(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&e)===e){var v=o.inst,R=v.destroy;if(R!==void 0){v.destroy=void 0,u=n;var B=a,it=R;try{it()}catch(gt){qe(u,B,gt)}}}o=o.next}while(o!==f)}}catch(gt){qe(n,n.return,gt)}}function y0(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{fm(n,a)}catch(o){qe(e,e.return,o)}}}function M0(e,n,a){a.props=Fs(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){qe(e,n,o)}}function To(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){qe(e,n,u)}}function ea(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){qe(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){qe(e,n,u)}else a.current=null}function b0(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){qe(e,e.return,u)}}function xf(e,n,a){try{var o=e.stateNode;ES(o,e.type,a,n),o[_n]=n}catch(u){qe(e,e.return,u)}}function E0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&os(e.type)||e.tag===4}function Sf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||E0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&os(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function yf(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=pa));else if(o!==4&&(o===27&&os(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(yf(e,n,a),e=e.sibling;e!==null;)yf(e,n,a),e=e.sibling}function kl(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&os(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(kl(e,n,a),e=e.sibling;e!==null;)kl(e,n,a),e=e.sibling}function T0(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);kn(n,o,a),n[an]=e,n[_n]=a}catch(f){qe(e,e.return,f)}}var Ea=!1,Cn=!1,Mf=!1,A0=typeof WeakSet=="function"?WeakSet:Set,Pn=null;function iS(e,n){if(e=e.containerInfo,kf=uc,e=Fp(e),pu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var v=0,R=-1,B=-1,it=0,gt=0,yt=e,ot=null;e:for(;;){for(var ct;yt!==a||u!==0&&yt.nodeType!==3||(R=v+u),yt!==f||o!==0&&yt.nodeType!==3||(B=v+o),yt.nodeType===3&&(v+=yt.nodeValue.length),(ct=yt.firstChild)!==null;)ot=yt,yt=ct;for(;;){if(yt===e)break e;if(ot===a&&++it===u&&(R=v),ot===f&&++gt===o&&(B=v),(ct=yt.nextSibling)!==null)break;yt=ot,ot=yt.parentNode}yt=ct}a=R===-1||B===-1?null:{start:R,end:B}}else a=null}a=a||{start:0,end:0}}else a=null;for(Xf={focusedElem:e,selectionRange:a},uc=!1,Pn=n;Pn!==null;)if(n=Pn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Pn=e;else for(;Pn!==null;){switch(n=Pn,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var Qt=Fs(a.type,u);e=o.getSnapshotBeforeUpdate(Qt,f),o.__reactInternalSnapshotBeforeUpdate=e}catch(oe){qe(a,a.return,oe)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Yf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Yf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,Pn=e;break}Pn=n.return}}function R0(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Aa(e,a),o&4&&Eo(5,a);break;case 1:if(Aa(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(v){qe(a,a.return,v)}else{var u=Fs(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(v){qe(a,a.return,v)}}o&64&&y0(a),o&512&&To(a,a.return);break;case 3:if(Aa(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{fm(e,n)}catch(v){qe(a,a.return,v)}}break;case 27:n===null&&o&4&&T0(a);case 26:case 5:Aa(e,a),n===null&&o&4&&b0(a),o&512&&To(a,a.return);break;case 12:Aa(e,a);break;case 31:Aa(e,a),o&4&&D0(e,a);break;case 13:Aa(e,a),o&4&&N0(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=hS.bind(null,a),US(e,a))));break;case 22:if(o=a.memoizedState!==null||Ea,!o){n=n!==null&&n.memoizedState!==null||Cn,u=Ea;var f=Cn;Ea=o,(Cn=n)&&!f?Ra(e,a,(a.subtreeFlags&8772)!==0):Aa(e,a),Ea=u,Cn=f}break;case 30:break;default:Aa(e,a)}}function C0(e){var n=e.alternate;n!==null&&(e.alternate=null,C0(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&pi(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var fn=null,ri=!1;function Ta(e,n,a){for(a=a.child;a!==null;)w0(e,n,a),a=a.sibling}function w0(e,n,a){if(dt&&typeof dt.onCommitFiberUnmount=="function")try{dt.onCommitFiberUnmount(ut,a)}catch{}switch(a.tag){case 26:Cn||ea(a,n),Ta(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Cn||ea(a,n);var o=fn,u=ri;os(a.type)&&(fn=a.stateNode,ri=!1),Ta(e,n,a),Oo(a.stateNode),fn=o,ri=u;break;case 5:Cn||ea(a,n);case 6:if(o=fn,u=ri,fn=null,Ta(e,n,a),fn=o,ri=u,fn!==null)if(ri)try{(fn.nodeType===9?fn.body:fn.nodeName==="HTML"?fn.ownerDocument.body:fn).removeChild(a.stateNode)}catch(f){qe(a,n,f)}else try{fn.removeChild(a.stateNode)}catch(f){qe(a,n,f)}break;case 18:fn!==null&&(ri?(e=fn,yg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),wr(e)):yg(fn,a.stateNode));break;case 4:o=fn,u=ri,fn=a.stateNode.containerInfo,ri=!0,Ta(e,n,a),fn=o,ri=u;break;case 0:case 11:case 14:case 15:ts(2,a,n),Cn||ts(4,a,n),Ta(e,n,a);break;case 1:Cn||(ea(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&M0(a,n,o)),Ta(e,n,a);break;case 21:Ta(e,n,a);break;case 22:Cn=(o=Cn)||a.memoizedState!==null,Ta(e,n,a),Cn=o;break;default:Ta(e,n,a)}}function D0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{wr(e)}catch(a){qe(n,n.return,a)}}}function N0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{wr(e)}catch(a){qe(n,n.return,a)}}function aS(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new A0),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new A0),n;default:throw Error(s(435,e.tag))}}function Xl(e,n){var a=aS(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=dS.bind(null,e,o);o.then(u,u)}})}function oi(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],f=e,v=n,R=v;t:for(;R!==null;){switch(R.tag){case 27:if(os(R.type)){fn=R.stateNode,ri=!1;break t}break;case 5:fn=R.stateNode,ri=!1;break t;case 3:case 4:fn=R.stateNode.containerInfo,ri=!0;break t}R=R.return}if(fn===null)throw Error(s(160));w0(f,v,u),fn=null,ri=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)U0(n,e),n=n.sibling}var Wi=null;function U0(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:oi(n,e),li(e),o&4&&(ts(3,e,e.return),Eo(3,e),ts(5,e,e.return));break;case 1:oi(n,e),li(e),o&512&&(Cn||a===null||ea(a,a.return)),o&64&&Ea&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Wi;if(oi(n,e),li(e),o&512&&(Cn||a===null||ea(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[yn]||f[an]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),kn(f,o,a),f[an]=e,Je(f),o=f;break t;case"link":var v=Ug("link","href",u).get(o+(a.href||""));if(v){for(var R=0;R<v.length;R++)if(f=v[R],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(R,1);break e}}f=u.createElement(o),kn(f,o,a),u.head.appendChild(f);break;case"meta":if(v=Ug("meta","content",u).get(o+(a.content||""))){for(R=0;R<v.length;R++)if(f=v[R],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(R,1);break e}}f=u.createElement(o),kn(f,o,a),u.head.appendChild(f);break;default:throw Error(s(468,o))}f[an]=e,Je(f),o=f}e.stateNode=o}else Lg(u,e.type,e.stateNode);else e.stateNode=Ng(u,o,e.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?Lg(u,e.type,e.stateNode):Ng(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&xf(e,e.memoizedProps,a.memoizedProps)}break;case 27:oi(n,e),li(e),o&512&&(Cn||a===null||ea(a,a.return)),a!==null&&o&4&&xf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(oi(n,e),li(e),o&512&&(Cn||a===null||ea(a,a.return)),e.flags&32){u=e.stateNode;try{_i(u,"")}catch(Qt){qe(e,e.return,Qt)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,xf(e,u,a!==null?a.memoizedProps:u)),o&1024&&(Mf=!0);break;case 6:if(oi(n,e),li(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(Qt){qe(e,e.return,Qt)}}break;case 3:if(rc=null,u=Wi,Wi=ac(n.containerInfo),oi(n,e),Wi=u,li(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{wr(n.containerInfo)}catch(Qt){qe(e,e.return,Qt)}Mf&&(Mf=!1,L0(e));break;case 4:o=Wi,Wi=ac(e.stateNode.containerInfo),oi(n,e),li(e),Wi=o;break;case 12:oi(n,e),li(e);break;case 31:oi(n,e),li(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Xl(e,o)));break;case 13:oi(n,e),li(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(ql=Nt()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Xl(e,o)));break;case 22:u=e.memoizedState!==null;var B=a!==null&&a.memoizedState!==null,it=Ea,gt=Cn;if(Ea=it||u,Cn=gt||B,oi(n,e),Cn=gt,Ea=it,li(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||B||Ea||Cn||Bs(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){B=a=n;try{if(f=B.stateNode,u)v=f.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{R=B.stateNode;var yt=B.memoizedProps.style,ot=yt!=null&&yt.hasOwnProperty("display")?yt.display:null;R.style.display=ot==null||typeof ot=="boolean"?"":(""+ot).trim()}}catch(Qt){qe(B,B.return,Qt)}}}else if(n.tag===6){if(a===null){B=n;try{B.stateNode.nodeValue=u?"":B.memoizedProps}catch(Qt){qe(B,B.return,Qt)}}}else if(n.tag===18){if(a===null){B=n;try{var ct=B.stateNode;u?Mg(ct,!0):Mg(B.stateNode,!1)}catch(Qt){qe(B,B.return,Qt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Xl(e,a))));break;case 19:oi(n,e),li(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Xl(e,o)));break;case 30:break;case 21:break;default:oi(n,e),li(e)}}function li(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(E0(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=Sf(e);kl(e,f,u);break;case 5:var v=a.stateNode;a.flags&32&&(_i(v,""),a.flags&=-33);var R=Sf(e);kl(e,R,v);break;case 3:case 4:var B=a.stateNode.containerInfo,it=Sf(e);yf(e,it,B);break;default:throw Error(s(161))}}catch(gt){qe(e,e.return,gt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function L0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;L0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Aa(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)R0(e,n.alternate,n),n=n.sibling}function Bs(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:ts(4,n,n.return),Bs(n);break;case 1:ea(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&M0(n,n.return,a),Bs(n);break;case 27:Oo(n.stateNode);case 26:case 5:ea(n,n.return),Bs(n);break;case 22:n.memoizedState===null&&Bs(n);break;case 30:Bs(n);break;default:Bs(n)}e=e.sibling}}function Ra(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,f=n,v=f.flags;switch(f.tag){case 0:case 11:case 15:Ra(u,f,a),Eo(4,f);break;case 1:if(Ra(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(it){qe(o,o.return,it)}if(o=f,u=o.updateQueue,u!==null){var R=o.stateNode;try{var B=u.shared.hiddenCallbacks;if(B!==null)for(u.shared.hiddenCallbacks=null,u=0;u<B.length;u++)um(B[u],R)}catch(it){qe(o,o.return,it)}}a&&v&64&&y0(f),To(f,f.return);break;case 27:T0(f);case 26:case 5:Ra(u,f,a),a&&o===null&&v&4&&b0(f),To(f,f.return);break;case 12:Ra(u,f,a);break;case 31:Ra(u,f,a),a&&v&4&&D0(u,f);break;case 13:Ra(u,f,a),a&&v&4&&N0(u,f);break;case 22:f.memoizedState===null&&Ra(u,f,a),To(f,f.return);break;case 30:break;default:Ra(u,f,a)}n=n.sibling}}function bf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&uo(a))}function Ef(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&uo(e))}function qi(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)O0(e,n,a,o),n=n.sibling}function O0(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:qi(e,n,a,o),u&2048&&Eo(9,n);break;case 1:qi(e,n,a,o);break;case 3:qi(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&uo(e)));break;case 12:if(u&2048){qi(e,n,a,o),e=n.stateNode;try{var f=n.memoizedProps,v=f.id,R=f.onPostCommit;typeof R=="function"&&R(v,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(B){qe(n,n.return,B)}}else qi(e,n,a,o);break;case 31:qi(e,n,a,o);break;case 13:qi(e,n,a,o);break;case 23:break;case 22:f=n.stateNode,v=n.alternate,n.memoizedState!==null?f._visibility&2?qi(e,n,a,o):Ao(e,n):f._visibility&2?qi(e,n,a,o):(f._visibility|=2,vr(e,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&bf(v,n);break;case 24:qi(e,n,a,o),u&2048&&Ef(n.alternate,n);break;default:qi(e,n,a,o)}}function vr(e,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,v=n,R=a,B=o,it=v.flags;switch(v.tag){case 0:case 11:case 15:vr(f,v,R,B,u),Eo(8,v);break;case 23:break;case 22:var gt=v.stateNode;v.memoizedState!==null?gt._visibility&2?vr(f,v,R,B,u):Ao(f,v):(gt._visibility|=2,vr(f,v,R,B,u)),u&&it&2048&&bf(v.alternate,v);break;case 24:vr(f,v,R,B,u),u&&it&2048&&Ef(v.alternate,v);break;default:vr(f,v,R,B,u)}n=n.sibling}}function Ao(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:Ao(a,o),u&2048&&bf(o.alternate,o);break;case 24:Ao(a,o),u&2048&&Ef(o.alternate,o);break;default:Ao(a,o)}n=n.sibling}}var Ro=8192;function xr(e,n,a){if(e.subtreeFlags&Ro)for(e=e.child;e!==null;)P0(e,n,a),e=e.sibling}function P0(e,n,a){switch(e.tag){case 26:xr(e,n,a),e.flags&Ro&&e.memoizedState!==null&&XS(a,Wi,e.memoizedState,e.memoizedProps);break;case 5:xr(e,n,a);break;case 3:case 4:var o=Wi;Wi=ac(e.stateNode.containerInfo),xr(e,n,a),Wi=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=Ro,Ro=16777216,xr(e,n,a),Ro=o):xr(e,n,a));break;default:xr(e,n,a)}}function z0(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Co(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Pn=o,F0(o,e)}z0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)I0(e),e=e.sibling}function I0(e){switch(e.tag){case 0:case 11:case 15:Co(e),e.flags&2048&&ts(9,e,e.return);break;case 3:Co(e);break;case 12:Co(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Wl(e)):Co(e);break;default:Co(e)}}function Wl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Pn=o,F0(o,e)}z0(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:ts(8,n,n.return),Wl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Wl(n));break;default:Wl(n)}e=e.sibling}}function F0(e,n){for(;Pn!==null;){var a=Pn;switch(a.tag){case 0:case 11:case 15:ts(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:uo(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Pn=o;else t:for(a=e;Pn!==null;){o=Pn;var u=o.sibling,f=o.return;if(C0(o),o===a){Pn=null;break t}if(u!==null){u.return=f,Pn=u;break t}Pn=f}}}var sS={getCacheForType:function(e){var n=Hn(Tn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Hn(Tn).controller.signal}},rS=typeof WeakMap=="function"?WeakMap:Map,ze=0,tn=null,be=null,Te=0,We=0,Mi=null,es=!1,Sr=!1,Tf=!1,Ca=0,xn=0,ns=0,Gs=0,Af=0,bi=0,yr=0,wo=null,ci=null,Rf=!1,ql=0,B0=0,Yl=1/0,jl=null,is=null,Un=0,as=null,Mr=null,wa=0,Cf=0,wf=null,G0=null,Do=0,Df=null;function Ei(){return(ze&2)!==0&&Te!==0?Te&-Te:O.T!==null?zf():ai()}function H0(){if(bi===0)if((Te&536870912)===0||Re){var e=te;te<<=1,(te&3932160)===0&&(te=262144),bi=e}else bi=536870912;return e=Si.current,e!==null&&(e.flags|=32),bi}function ui(e,n,a){(e===tn&&(We===2||We===9)||e.cancelPendingCommit!==null)&&(br(e,0),ss(e,Te,bi,!1)),Kt(e,a),((ze&2)===0||e!==tn)&&(e===tn&&((ze&2)===0&&(Gs|=a),xn===4&&ss(e,Te,bi,!1)),na(e))}function V0(e,n,a){if((ze&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Lt(e,n),u=o?cS(e,n):Uf(e,n,!0),f=o;do{if(u===0){Sr&&!o&&ss(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!oS(a)){u=Uf(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var v=0;else v=e.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){n=v;t:{var R=e;u=wo;var B=R.current.memoizedState.isDehydrated;if(B&&(br(R,v).flags|=256),v=Uf(R,v,!1),v!==2){if(Tf&&!B){R.errorRecoveryDisabledLanes|=f,Gs|=f,u=4;break t}f=ci,ci=u,f!==null&&(ci===null?ci=f:ci.push.apply(ci,f))}u=v}if(f=!1,u!==2)continue}}if(u===1){br(e,0),ss(e,n,0,!0);break}t:{switch(o=e,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:ss(o,n,bi,!es);break t;case 2:ci=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=ql+300-Nt(),10<u)){if(ss(o,n,bi,!es),ft(o,0,!0)!==0)break t;wa=n,o.timeoutHandle=xg(k0.bind(null,o,a,ci,jl,Rf,n,bi,Gs,yr,es,f,"Throttled",-0,0),u);break t}k0(o,a,ci,jl,Rf,n,bi,Gs,yr,es,f,null,-0,0)}}break}while(!0);na(e)}function k0(e,n,a,o,u,f,v,R,B,it,gt,yt,ot,ct){if(e.timeoutHandle=-1,yt=n.subtreeFlags,yt&8192||(yt&16785408)===16785408){yt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:pa},P0(n,f,yt);var Qt=(f&62914560)===f?ql-Nt():(f&4194048)===f?B0-Nt():0;if(Qt=WS(yt,Qt),Qt!==null){wa=f,e.cancelPendingCommit=Qt(Q0.bind(null,e,n,f,a,o,u,v,R,B,gt,yt,null,ot,ct)),ss(e,f,v,!it);return}}Q0(e,n,f,a,o,u,v,R,B)}function oS(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!vi(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ss(e,n,a,o){n&=~Af,n&=~Gs,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var f=31-zt(u),v=1<<f;o[f]=-1,u&=~v}a!==0&&ue(e,a,n)}function Zl(){return(ze&6)===0?(No(0),!1):!0}function Nf(){if(be!==null){if(We===0)var e=be.return;else e=be,va=Ns=null,qu(e),dr=null,ho=0,e=be;for(;e!==null;)S0(e.alternate,e),e=e.return;be=null}}function br(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,RS(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),wa=0,Nf(),tn=e,be=a=ga(e.current,null),Te=n,We=0,Mi=null,es=!1,Sr=Lt(e,n),Tf=!1,yr=bi=Af=Gs=ns=xn=0,ci=wo=null,Rf=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-zt(o),f=1<<u;n|=e[u],o&=~f}return Ca=n,gl(),a}function X0(e,n){pe=null,O.H=yo,n===hr||n===El?(n=rm(),We=3):n===Ou?(n=rm(),We=4):We=n===cf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Mi=n,be===null&&(xn=1,Fl(e,Li(n,e.current)))}function W0(){var e=Si.current;return e===null?!0:(Te&4194048)===Te?Ii===null:(Te&62914560)===Te||(Te&536870912)!==0?e===Ii:!1}function q0(){var e=O.H;return O.H=yo,e===null?yo:e}function Y0(){var e=O.A;return O.A=sS,e}function Kl(){xn=4,es||(Te&4194048)!==Te&&Si.current!==null||(Sr=!0),(ns&134217727)===0&&(Gs&134217727)===0||tn===null||ss(tn,Te,bi,!1)}function Uf(e,n,a){var o=ze;ze|=2;var u=q0(),f=Y0();(tn!==e||Te!==n)&&(jl=null,br(e,n)),n=!1;var v=xn;t:do try{if(We!==0&&be!==null){var R=be,B=Mi;switch(We){case 8:Nf(),v=6;break t;case 3:case 2:case 9:case 6:Si.current===null&&(n=!0);var it=We;if(We=0,Mi=null,Er(e,R,B,it),a&&Sr){v=0;break t}break;default:it=We,We=0,Mi=null,Er(e,R,B,it)}}lS(),v=xn;break}catch(gt){X0(e,gt)}while(!0);return n&&e.shellSuspendCounter++,va=Ns=null,ze=o,O.H=u,O.A=f,be===null&&(tn=null,Te=0,gl()),v}function lS(){for(;be!==null;)j0(be)}function cS(e,n){var a=ze;ze|=2;var o=q0(),u=Y0();tn!==e||Te!==n?(jl=null,Yl=Nt()+500,br(e,n)):Sr=Lt(e,n);t:do try{if(We!==0&&be!==null){n=be;var f=Mi;e:switch(We){case 1:We=0,Mi=null,Er(e,n,f,1);break;case 2:case 9:if(am(f)){We=0,Mi=null,Z0(n);break}n=function(){We!==2&&We!==9||tn!==e||(We=7),na(e)},f.then(n,n);break t;case 3:We=7;break t;case 4:We=5;break t;case 7:am(f)?(We=0,Mi=null,Z0(n)):(We=0,Mi=null,Er(e,n,f,7));break;case 5:var v=null;switch(be.tag){case 26:v=be.memoizedState;case 5:case 27:var R=be;if(v?Og(v):R.stateNode.complete){We=0,Mi=null;var B=R.sibling;if(B!==null)be=B;else{var it=R.return;it!==null?(be=it,Ql(it)):be=null}break e}}We=0,Mi=null,Er(e,n,f,5);break;case 6:We=0,Mi=null,Er(e,n,f,6);break;case 8:Nf(),xn=6;break t;default:throw Error(s(462))}}uS();break}catch(gt){X0(e,gt)}while(!0);return va=Ns=null,O.H=o,O.A=u,ze=a,be!==null?0:(tn=null,Te=0,gl(),xn)}function uS(){for(;be!==null&&!ge();)j0(be)}function j0(e){var n=v0(e.alternate,e,Ca);e.memoizedProps=e.pendingProps,n===null?Ql(e):be=n}function Z0(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=h0(a,n,n.pendingProps,n.type,void 0,Te);break;case 11:n=h0(a,n,n.pendingProps,n.type.render,n.ref,Te);break;case 5:qu(n);default:S0(a,n),n=be=Yp(n,Ca),n=v0(a,n,Ca)}e.memoizedProps=e.pendingProps,n===null?Ql(e):be=n}function Er(e,n,a,o){va=Ns=null,qu(n),dr=null,ho=0;var u=n.return;try{if(Jx(e,u,n,a,Te)){xn=1,Fl(e,Li(a,e.current)),be=null;return}}catch(f){if(u!==null)throw be=u,f;xn=1,Fl(e,Li(a,e.current)),be=null;return}n.flags&32768?(Re||o===1?e=!0:Sr||(Te&536870912)!==0?e=!1:(es=e=!0,(o===2||o===9||o===3||o===6)&&(o=Si.current,o!==null&&o.tag===13&&(o.flags|=16384))),K0(n,e)):Ql(n)}function Ql(e){var n=e;do{if((n.flags&32768)!==0){K0(n,es);return}e=n.return;var a=eS(n.alternate,n,Ca);if(a!==null){be=a;return}if(n=n.sibling,n!==null){be=n;return}be=n=e}while(n!==null);xn===0&&(xn=5)}function K0(e,n){do{var a=nS(e.alternate,e);if(a!==null){a.flags&=32767,be=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){be=e;return}be=e=a}while(e!==null);xn=6,be=null}function Q0(e,n,a,o,u,f,v,R,B){e.cancelPendingCommit=null;do Jl();while(Un!==0);if((ze&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=xu,re(e,a,f,v,R,B),e===tn&&(be=tn=null,Te=0),Mr=n,as=e,wa=a,Cf=f,wf=u,G0=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,pS($,function(){return ng(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=O.T,O.T=null,u=F.p,F.p=2,v=ze,ze|=4;try{iS(e,n,a)}finally{ze=v,F.p=u,O.T=o}}Un=1,J0(),$0(),tg()}}function J0(){if(Un===1){Un=0;var e=as,n=Mr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=O.T,O.T=null;var o=F.p;F.p=2;var u=ze;ze|=4;try{U0(n,e);var f=Xf,v=Fp(e.containerInfo),R=f.focusedElem,B=f.selectionRange;if(v!==R&&R&&R.ownerDocument&&Ip(R.ownerDocument.documentElement,R)){if(B!==null&&pu(R)){var it=B.start,gt=B.end;if(gt===void 0&&(gt=it),"selectionStart"in R)R.selectionStart=it,R.selectionEnd=Math.min(gt,R.value.length);else{var yt=R.ownerDocument||document,ot=yt&&yt.defaultView||window;if(ot.getSelection){var ct=ot.getSelection(),Qt=R.textContent.length,oe=Math.min(B.start,Qt),Ke=B.end===void 0?oe:Math.min(B.end,Qt);!ct.extend&&oe>Ke&&(v=Ke,Ke=oe,oe=v);var Q=zp(R,oe),X=zp(R,Ke);if(Q&&X&&(ct.rangeCount!==1||ct.anchorNode!==Q.node||ct.anchorOffset!==Q.offset||ct.focusNode!==X.node||ct.focusOffset!==X.offset)){var nt=yt.createRange();nt.setStart(Q.node,Q.offset),ct.removeAllRanges(),oe>Ke?(ct.addRange(nt),ct.extend(X.node,X.offset)):(nt.setEnd(X.node,X.offset),ct.addRange(nt))}}}}for(yt=[],ct=R;ct=ct.parentNode;)ct.nodeType===1&&yt.push({element:ct,left:ct.scrollLeft,top:ct.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<yt.length;R++){var vt=yt[R];vt.element.scrollLeft=vt.left,vt.element.scrollTop=vt.top}}uc=!!kf,Xf=kf=null}finally{ze=u,F.p=o,O.T=a}}e.current=n,Un=2}}function $0(){if(Un===2){Un=0;var e=as,n=Mr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=O.T,O.T=null;var o=F.p;F.p=2;var u=ze;ze|=4;try{R0(e,n.alternate,n)}finally{ze=u,F.p=o,O.T=a}}Un=3}}function tg(){if(Un===4||Un===3){Un=0,Pe();var e=as,n=Mr,a=wa,o=G0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Un=5:(Un=0,Mr=as=null,eg(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(is=null),In(a),n=n.stateNode,dt&&typeof dt.onCommitFiberRoot=="function")try{dt.onCommitFiberRoot(ut,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=O.T,u=F.p,F.p=2,O.T=null;try{for(var f=e.onRecoverableError,v=0;v<o.length;v++){var R=o[v];f(R.value,{componentStack:R.stack})}}finally{O.T=n,F.p=u}}(wa&3)!==0&&Jl(),na(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===Df?Do++:(Do=0,Df=e):Do=0,No(0)}}function eg(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,uo(n)))}function Jl(){return J0(),$0(),tg(),ng()}function ng(){if(Un!==5)return!1;var e=as,n=Cf;Cf=0;var a=In(wa),o=O.T,u=F.p;try{F.p=32>a?32:a,O.T=null,a=wf,wf=null;var f=as,v=wa;if(Un=0,Mr=as=null,wa=0,(ze&6)!==0)throw Error(s(331));var R=ze;if(ze|=4,I0(f.current),O0(f,f.current,v,a),ze=R,No(0,!1),dt&&typeof dt.onPostCommitFiberRoot=="function")try{dt.onPostCommitFiberRoot(ut,f)}catch{}return!0}finally{F.p=u,O.T=o,eg(e,n)}}function ig(e,n,a){n=Li(a,n),n=lf(e.stateNode,n,2),e=Qa(e,n,2),e!==null&&(Kt(e,2),na(e))}function qe(e,n,a){if(e.tag===3)ig(e,e,a);else for(;n!==null;){if(n.tag===3){ig(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(is===null||!is.has(o))){e=Li(a,e),a=a0(2),o=Qa(n,a,2),o!==null&&(s0(a,o,n,e),Kt(o,2),na(o));break}}n=n.return}}function Lf(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new rS;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Tf=!0,u.add(a),e=fS.bind(null,e,n,a),n.then(e,e))}function fS(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,tn===e&&(Te&a)===a&&(xn===4||xn===3&&(Te&62914560)===Te&&300>Nt()-ql?(ze&2)===0&&br(e,0):Af|=a,yr===Te&&(yr=0)),na(e)}function ag(e,n){n===0&&(n=St()),e=Cs(e,n),e!==null&&(Kt(e,n),na(e))}function hS(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),ag(e,a)}function dS(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),ag(e,a)}function pS(e,n){return q(e,n)}var $l=null,Tr=null,Of=!1,tc=!1,Pf=!1,rs=0;function na(e){e!==Tr&&e.next===null&&(Tr===null?$l=Tr=e:Tr=Tr.next=e),tc=!0,Of||(Of=!0,gS())}function No(e,n){if(!Pf&&tc){Pf=!0;do for(var a=!1,o=$l;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var v=o.suspendedLanes,R=o.pingedLanes;f=(1<<31-zt(42|e)+1)-1,f&=u&~(v&~R),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,lg(o,f))}else f=Te,f=ft(o,o===tn?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||Lt(o,f)||(a=!0,lg(o,f));o=o.next}while(a);Pf=!1}}function mS(){sg()}function sg(){tc=Of=!1;var e=0;rs!==0&&AS()&&(e=rs);for(var n=Nt(),a=null,o=$l;o!==null;){var u=o.next,f=rg(o,n);f===0?(o.next=null,a===null?$l=u:a.next=u,u===null&&(Tr=a)):(a=o,(e!==0||(f&3)!==0)&&(tc=!0)),o=u}Un!==0&&Un!==5||No(e),rs!==0&&(rs=0)}function rg(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var v=31-zt(f),R=1<<v,B=u[v];B===-1?((R&a)===0||(R&o)!==0)&&(u[v]=Dt(R,n)):B<=n&&(e.expiredLanes|=R),f&=~R}if(n=tn,a=Te,a=ft(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(We===2||We===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&on(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Lt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&on(o),In(a)){case 2:case 8:a=b;break;case 32:a=$;break;case 268435456:a=At;break;default:a=$}return o=og.bind(null,e),a=q(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&on(o),e.callbackPriority=2,e.callbackNode=null,2}function og(e,n){if(Un!==0&&Un!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Jl()&&e.callbackNode!==a)return null;var o=Te;return o=ft(e,e===tn?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(V0(e,o,n),rg(e,Nt()),e.callbackNode!=null&&e.callbackNode===a?og.bind(null,e):null)}function lg(e,n){if(Jl())return null;V0(e,n,!0)}function gS(){CS(function(){(ze&6)!==0?q(D,mS):sg()})}function zf(){if(rs===0){var e=ur;e===0&&(e=Yt,Yt<<=1,(Yt&261888)===0&&(Yt=256)),rs=e}return rs}function cg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Es(""+e)}function ug(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function _S(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var f=cg((u[_n]||null).action),v=o.submitter;v&&(n=(n=v[_n]||null)?cg(n.formAction):v.getAttribute("formAction"),n!==null&&(f=n,v=null));var R=new hl("action","action",null,o,u);e.push({event:R,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(rs!==0){var B=v?ug(u,v):new FormData(u);ef(a,{pending:!0,data:B,method:u.method,action:f},null,B)}}else typeof f=="function"&&(R.preventDefault(),B=v?ug(u,v):new FormData(u),ef(a,{pending:!0,data:B,method:u.method,action:f},f,B))},currentTarget:u}]})}}for(var If=0;If<vu.length;If++){var Ff=vu[If],vS=Ff.toLowerCase(),xS=Ff[0].toUpperCase()+Ff.slice(1);Xi(vS,"on"+xS)}Xi(Hp,"onAnimationEnd"),Xi(Vp,"onAnimationIteration"),Xi(kp,"onAnimationStart"),Xi("dblclick","onDoubleClick"),Xi("focusin","onFocus"),Xi("focusout","onBlur"),Xi(Px,"onTransitionRun"),Xi(zx,"onTransitionStart"),Xi(Ix,"onTransitionCancel"),Xi(Xp,"onTransitionEnd"),at("onMouseEnter",["mouseout","mouseover"]),at("onMouseLeave",["mouseout","mouseover"]),at("onPointerEnter",["pointerout","pointerover"]),at("onPointerLeave",["pointerout","pointerover"]),j("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),j("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),j("onBeforeInput",["compositionend","keypress","textInput","paste"]),j("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),j("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),j("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Uo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),SS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Uo));function fg(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var f=void 0;if(n)for(var v=o.length-1;0<=v;v--){var R=o[v],B=R.instance,it=R.currentTarget;if(R=R.listener,B!==f&&u.isPropagationStopped())break t;f=R,u.currentTarget=it;try{f(u)}catch(gt){ml(gt)}u.currentTarget=null,f=B}else for(v=0;v<o.length;v++){if(R=o[v],B=R.instance,it=R.currentTarget,R=R.listener,B!==f&&u.isPropagationStopped())break t;f=R,u.currentTarget=it;try{f(u)}catch(gt){ml(gt)}u.currentTarget=null,f=B}}}}function Ee(e,n){var a=n[en];a===void 0&&(a=n[en]=new Set);var o=e+"__bubble";a.has(o)||(hg(n,e,2,!1),a.add(o))}function Bf(e,n,a){var o=0;n&&(o|=4),hg(a,e,o,n)}var ec="_reactListening"+Math.random().toString(36).slice(2);function Gf(e){if(!e[ec]){e[ec]=!0,$n.forEach(function(a){a!=="selectionchange"&&(SS.has(a)||Bf(a,!1,e),Bf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[ec]||(n[ec]=!0,Bf("selectionchange",!1,n))}}function hg(e,n,a,o){switch(Hg(n)){case 2:var u=jS;break;case 8:u=ZS;break;default:u=eh}a=u.bind(null,n,a,e),u=void 0,!su||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function Hf(e,n,a,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var v=o.tag;if(v===3||v===4){var R=o.stateNode.containerInfo;if(R===u)break;if(v===4)for(v=o.return;v!==null;){var B=v.tag;if((B===3||B===4)&&v.stateNode.containerInfo===u)return;v=v.return}for(;R!==null;){if(v=Bn(R),v===null)return;if(B=v.tag,B===5||B===6||B===26||B===27){o=f=v;continue t}R=R.parentNode}}o=o.return}_p(function(){var it=f,gt=iu(a),yt=[];t:{var ot=Wp.get(e);if(ot!==void 0){var ct=hl,Qt=e;switch(e){case"keypress":if(ul(a)===0)break t;case"keydown":case"keyup":ct=dx;break;case"focusin":Qt="focus",ct=cu;break;case"focusout":Qt="blur",ct=cu;break;case"beforeblur":case"afterblur":ct=cu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ct=Sp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ct=ex;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ct=gx;break;case Hp:case Vp:case kp:ct=ax;break;case Xp:ct=vx;break;case"scroll":case"scrollend":ct=$v;break;case"wheel":ct=Sx;break;case"copy":case"cut":case"paste":ct=rx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ct=Mp;break;case"toggle":case"beforetoggle":ct=Mx}var oe=(n&4)!==0,Ke=!oe&&(e==="scroll"||e==="scrollend"),Q=oe?ot!==null?ot+"Capture":null:ot;oe=[];for(var X=it,nt;X!==null;){var vt=X;if(nt=vt.stateNode,vt=vt.tag,vt!==5&&vt!==26&&vt!==27||nt===null||Q===null||(vt=$r(X,Q),vt!=null&&oe.push(Lo(X,vt,nt))),Ke)break;X=X.return}0<oe.length&&(ot=new ct(ot,Qt,null,a,gt),yt.push({event:ot,listeners:oe}))}}if((n&7)===0){t:{if(ot=e==="mouseover"||e==="pointerover",ct=e==="mouseout"||e==="pointerout",ot&&a!==nu&&(Qt=a.relatedTarget||a.fromElement)&&(Bn(Qt)||Qt[He]))break t;if((ct||ot)&&(ot=gt.window===gt?gt:(ot=gt.ownerDocument)?ot.defaultView||ot.parentWindow:window,ct?(Qt=a.relatedTarget||a.toElement,ct=it,Qt=Qt?Bn(Qt):null,Qt!==null&&(Ke=c(Qt),oe=Qt.tag,Qt!==Ke||oe!==5&&oe!==27&&oe!==6)&&(Qt=null)):(ct=null,Qt=it),ct!==Qt)){if(oe=Sp,vt="onMouseLeave",Q="onMouseEnter",X="mouse",(e==="pointerout"||e==="pointerover")&&(oe=Mp,vt="onPointerLeave",Q="onPointerEnter",X="pointer"),Ke=ct==null?ot:Ni(ct),nt=Qt==null?ot:Ni(Qt),ot=new oe(vt,X+"leave",ct,a,gt),ot.target=Ke,ot.relatedTarget=nt,vt=null,Bn(gt)===it&&(oe=new oe(Q,X+"enter",Qt,a,gt),oe.target=nt,oe.relatedTarget=Ke,vt=oe),Ke=vt,ct&&Qt)e:{for(oe=yS,Q=ct,X=Qt,nt=0,vt=Q;vt;vt=oe(vt))nt++;vt=0;for(var ae=X;ae;ae=oe(ae))vt++;for(;0<nt-vt;)Q=oe(Q),nt--;for(;0<vt-nt;)X=oe(X),vt--;for(;nt--;){if(Q===X||X!==null&&Q===X.alternate){oe=Q;break e}Q=oe(Q),X=oe(X)}oe=null}else oe=null;ct!==null&&dg(yt,ot,ct,oe,!1),Qt!==null&&Ke!==null&&dg(yt,Ke,Qt,oe,!0)}}t:{if(ot=it?Ni(it):window,ct=ot.nodeName&&ot.nodeName.toLowerCase(),ct==="select"||ct==="input"&&ot.type==="file")var Ue=Dp;else if(Cp(ot))if(Np)Ue=Ux;else{Ue=Dx;var Jt=wx}else ct=ot.nodeName,!ct||ct.toLowerCase()!=="input"||ot.type!=="checkbox"&&ot.type!=="radio"?it&&Be(it.elementType)&&(Ue=Dp):Ue=Nx;if(Ue&&(Ue=Ue(e,it))){wp(yt,Ue,a,gt);break t}Jt&&Jt(e,ot,it),e==="focusout"&&it&&ot.type==="number"&&it.memoizedProps.value!=null&&Me(ot,"number",ot.value)}switch(Jt=it?Ni(it):window,e){case"focusin":(Cp(Jt)||Jt.contentEditable==="true")&&(nr=Jt,mu=it,oo=null);break;case"focusout":oo=mu=nr=null;break;case"mousedown":gu=!0;break;case"contextmenu":case"mouseup":case"dragend":gu=!1,Bp(yt,a,gt);break;case"selectionchange":if(Ox)break;case"keydown":case"keyup":Bp(yt,a,gt)}var _e;if(fu)t:{switch(e){case"compositionstart":var Ae="onCompositionStart";break t;case"compositionend":Ae="onCompositionEnd";break t;case"compositionupdate":Ae="onCompositionUpdate";break t}Ae=void 0}else er?Ap(e,a)&&(Ae="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Ae="onCompositionStart");Ae&&(bp&&a.locale!=="ko"&&(er||Ae!=="onCompositionStart"?Ae==="onCompositionEnd"&&er&&(_e=vp()):(Xa=gt,ru="value"in Xa?Xa.value:Xa.textContent,er=!0)),Jt=nc(it,Ae),0<Jt.length&&(Ae=new yp(Ae,e,null,a,gt),yt.push({event:Ae,listeners:Jt}),_e?Ae.data=_e:(_e=Rp(a),_e!==null&&(Ae.data=_e)))),(_e=Ex?Tx(e,a):Ax(e,a))&&(Ae=nc(it,"onBeforeInput"),0<Ae.length&&(Jt=new yp("onBeforeInput","beforeinput",null,a,gt),yt.push({event:Jt,listeners:Ae}),Jt.data=_e)),_S(yt,e,it,a,gt)}fg(yt,n)})}function Lo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function nc(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=$r(e,a),u!=null&&o.unshift(Lo(e,u,f)),u=$r(e,n),u!=null&&o.push(Lo(e,u,f))),e.tag===3)return o;e=e.return}return[]}function yS(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function dg(e,n,a,o,u){for(var f=n._reactName,v=[];a!==null&&a!==o;){var R=a,B=R.alternate,it=R.stateNode;if(R=R.tag,B!==null&&B===o)break;R!==5&&R!==26&&R!==27||it===null||(B=it,u?(it=$r(a,f),it!=null&&v.unshift(Lo(a,it,B))):u||(it=$r(a,f),it!=null&&v.push(Lo(a,it,B)))),a=a.return}v.length!==0&&e.push({event:n,listeners:v})}var MS=/\r\n?/g,bS=/\u0000|\uFFFD/g;function pg(e){return(typeof e=="string"?e:""+e).replace(MS,`
`).replace(bS,"")}function mg(e,n){return n=pg(n),pg(e)===n}function Ze(e,n,a,o,u,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||_i(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&_i(e,""+o);break;case"className":Wt(e,"class",o);break;case"tabIndex":Wt(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Wt(e,a,o);break;case"style":ki(e,o,f);break;case"data":if(n!=="object"){Wt(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Es(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ze(e,n,"name",u.name,u,null),Ze(e,n,"formEncType",u.formEncType,u,null),Ze(e,n,"formMethod",u.formMethod,u,null),Ze(e,n,"formTarget",u.formTarget,u,null)):(Ze(e,n,"encType",u.encType,u,null),Ze(e,n,"method",u.method,u,null),Ze(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Es(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=pa);break;case"onScroll":o!=null&&Ee("scroll",e);break;case"onScrollEnd":o!=null&&Ee("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=Es(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":Ee("beforetoggle",e),Ee("toggle",e),It(e,"popover",o);break;case"xlinkActuate":Zt(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Zt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Zt(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Zt(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Zt(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Zt(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Zt(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Zt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Zt(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":It(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Ji.get(a)||a,It(e,a,o))}}function Vf(e,n,a,o,u,f){switch(a){case"style":ki(e,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?_i(e,o):(typeof o=="number"||typeof o=="bigint")&&_i(e,""+o);break;case"onScroll":o!=null&&Ee("scroll",e);break;case"onScrollEnd":o!=null&&Ee("scrollend",e);break;case"onClick":o!=null&&(e.onclick=pa);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!A.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[_n]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):It(e,a,o)}}}function kn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ee("error",e),Ee("load",e);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var v=a[f];if(v!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ze(e,n,f,v,a,null)}}u&&Ze(e,n,"srcSet",a.srcSet,a,null),o&&Ze(e,n,"src",a.src,a,null);return;case"input":Ee("invalid",e);var R=f=v=u=null,B=null,it=null;for(o in a)if(a.hasOwnProperty(o)){var gt=a[o];if(gt!=null)switch(o){case"name":u=gt;break;case"type":v=gt;break;case"checked":B=gt;break;case"defaultChecked":it=gt;break;case"value":f=gt;break;case"defaultValue":R=gt;break;case"children":case"dangerouslySetInnerHTML":if(gt!=null)throw Error(s(137,n));break;default:Ze(e,n,o,gt,a,null)}}qn(e,f,R,B,it,v,u,!1);return;case"select":Ee("invalid",e),o=v=f=null;for(u in a)if(a.hasOwnProperty(u)&&(R=a[u],R!=null))switch(u){case"value":f=R;break;case"defaultValue":v=R;break;case"multiple":o=R;default:Ze(e,n,u,R,a,null)}n=f,a=v,e.multiple=!!o,n!=null?Nn(e,!!o,n,!1):a!=null&&Nn(e,!!o,a,!0);return;case"textarea":Ee("invalid",e),f=u=o=null;for(v in a)if(a.hasOwnProperty(v)&&(R=a[v],R!=null))switch(v){case"value":o=R;break;case"defaultValue":u=R;break;case"children":f=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(s(91));break;default:Ze(e,n,v,R,a,null)}Vi(e,o,u,f);return;case"option":for(B in a)if(a.hasOwnProperty(B)&&(o=a[B],o!=null))switch(B){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Ze(e,n,B,o,a,null)}return;case"dialog":Ee("beforetoggle",e),Ee("toggle",e),Ee("cancel",e),Ee("close",e);break;case"iframe":case"object":Ee("load",e);break;case"video":case"audio":for(o=0;o<Uo.length;o++)Ee(Uo[o],e);break;case"image":Ee("error",e),Ee("load",e);break;case"details":Ee("toggle",e);break;case"embed":case"source":case"link":Ee("error",e),Ee("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(it in a)if(a.hasOwnProperty(it)&&(o=a[it],o!=null))switch(it){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ze(e,n,it,o,a,null)}return;default:if(Be(n)){for(gt in a)a.hasOwnProperty(gt)&&(o=a[gt],o!==void 0&&Vf(e,n,gt,o,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(o=a[R],o!=null&&Ze(e,n,R,o,a,null))}function ES(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,v=null,R=null,B=null,it=null,gt=null;for(ct in a){var yt=a[ct];if(a.hasOwnProperty(ct)&&yt!=null)switch(ct){case"checked":break;case"value":break;case"defaultValue":B=yt;default:o.hasOwnProperty(ct)||Ze(e,n,ct,null,o,yt)}}for(var ot in o){var ct=o[ot];if(yt=a[ot],o.hasOwnProperty(ot)&&(ct!=null||yt!=null))switch(ot){case"type":f=ct;break;case"name":u=ct;break;case"checked":it=ct;break;case"defaultChecked":gt=ct;break;case"value":v=ct;break;case"defaultValue":R=ct;break;case"children":case"dangerouslySetInnerHTML":if(ct!=null)throw Error(s(137,n));break;default:ct!==yt&&Ze(e,n,ot,ct,o,yt)}}Vt(e,v,R,B,it,gt,f,u);return;case"select":ct=v=R=ot=null;for(f in a)if(B=a[f],a.hasOwnProperty(f)&&B!=null)switch(f){case"value":break;case"multiple":ct=B;default:o.hasOwnProperty(f)||Ze(e,n,f,null,o,B)}for(u in o)if(f=o[u],B=a[u],o.hasOwnProperty(u)&&(f!=null||B!=null))switch(u){case"value":ot=f;break;case"defaultValue":R=f;break;case"multiple":v=f;default:f!==B&&Ze(e,n,u,f,o,B)}n=R,a=v,o=ct,ot!=null?Nn(e,!!a,ot,!1):!!o!=!!a&&(n!=null?Nn(e,!!a,n,!0):Nn(e,!!a,a?[]:"",!1));return;case"textarea":ct=ot=null;for(R in a)if(u=a[R],a.hasOwnProperty(R)&&u!=null&&!o.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:Ze(e,n,R,null,o,u)}for(v in o)if(u=o[v],f=a[v],o.hasOwnProperty(v)&&(u!=null||f!=null))switch(v){case"value":ot=u;break;case"defaultValue":ct=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&Ze(e,n,v,u,o,f)}gi(e,ot,ct);return;case"option":for(var Qt in a)if(ot=a[Qt],a.hasOwnProperty(Qt)&&ot!=null&&!o.hasOwnProperty(Qt))switch(Qt){case"selected":e.selected=!1;break;default:Ze(e,n,Qt,null,o,ot)}for(B in o)if(ot=o[B],ct=a[B],o.hasOwnProperty(B)&&ot!==ct&&(ot!=null||ct!=null))switch(B){case"selected":e.selected=ot&&typeof ot!="function"&&typeof ot!="symbol";break;default:Ze(e,n,B,ot,o,ct)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var oe in a)ot=a[oe],a.hasOwnProperty(oe)&&ot!=null&&!o.hasOwnProperty(oe)&&Ze(e,n,oe,null,o,ot);for(it in o)if(ot=o[it],ct=a[it],o.hasOwnProperty(it)&&ot!==ct&&(ot!=null||ct!=null))switch(it){case"children":case"dangerouslySetInnerHTML":if(ot!=null)throw Error(s(137,n));break;default:Ze(e,n,it,ot,o,ct)}return;default:if(Be(n)){for(var Ke in a)ot=a[Ke],a.hasOwnProperty(Ke)&&ot!==void 0&&!o.hasOwnProperty(Ke)&&Vf(e,n,Ke,void 0,o,ot);for(gt in o)ot=o[gt],ct=a[gt],!o.hasOwnProperty(gt)||ot===ct||ot===void 0&&ct===void 0||Vf(e,n,gt,ot,o,ct);return}}for(var Q in a)ot=a[Q],a.hasOwnProperty(Q)&&ot!=null&&!o.hasOwnProperty(Q)&&Ze(e,n,Q,null,o,ot);for(yt in o)ot=o[yt],ct=a[yt],!o.hasOwnProperty(yt)||ot===ct||ot==null&&ct==null||Ze(e,n,yt,ot,o,ct)}function gg(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function TS(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],f=u.transferSize,v=u.initiatorType,R=u.duration;if(f&&R&&gg(v)){for(v=0,R=u.responseEnd,o+=1;o<a.length;o++){var B=a[o],it=B.startTime;if(it>R)break;var gt=B.transferSize,yt=B.initiatorType;gt&&gg(yt)&&(B=B.responseEnd,v+=gt*(B<R?1:(R-it)/(B-it)))}if(--o,n+=8*(f+v)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var kf=null,Xf=null;function ic(e){return e.nodeType===9?e:e.ownerDocument}function _g(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function vg(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Wf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var qf=null;function AS(){var e=window.event;return e&&e.type==="popstate"?e===qf?!1:(qf=e,!0):(qf=null,!1)}var xg=typeof setTimeout=="function"?setTimeout:void 0,RS=typeof clearTimeout=="function"?clearTimeout:void 0,Sg=typeof Promise=="function"?Promise:void 0,CS=typeof queueMicrotask=="function"?queueMicrotask:typeof Sg<"u"?function(e){return Sg.resolve(null).then(e).catch(wS)}:xg;function wS(e){setTimeout(function(){throw e})}function os(e){return e==="head"}function yg(e,n){var a=n,o=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(u),wr(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Oo(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Oo(a);for(var f=a.firstChild;f;){var v=f.nextSibling,R=f.nodeName;f[yn]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=v}}else a==="body"&&Oo(e.ownerDocument.body);a=u}while(a);wr(n)}function Mg(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function Yf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Yf(a),pi(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function DS(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[yn])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=Fi(e.nextSibling),e===null)break}return null}function NS(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Fi(e.nextSibling),e===null))return null;return e}function bg(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Fi(e.nextSibling),e===null))return null;return e}function jf(e){return e.data==="$?"||e.data==="$~"}function Zf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function US(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function Fi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Kf=null;function Eg(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return Fi(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function Tg(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function Ag(e,n,a){switch(n=ic(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Oo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);pi(e)}var Bi=new Map,Rg=new Set;function ac(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Da=F.d;F.d={f:LS,r:OS,D:PS,C:zS,L:IS,m:FS,X:GS,S:BS,M:HS};function LS(){var e=Da.f(),n=Zl();return e||n}function OS(e){var n=Wn(e);n!==null&&n.tag===5&&n.type==="form"?Xm(n):Da.r(e)}var Ar=typeof document>"u"?null:document;function Cg(e,n,a){var o=Ar;if(o&&typeof n=="string"&&n){var u=ke(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Rg.has(u)||(Rg.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),kn(n,"link",e),Je(n),o.head.appendChild(n)))}}function PS(e){Da.D(e),Cg("dns-prefetch",e,null)}function zS(e,n){Da.C(e,n),Cg("preconnect",e,n)}function IS(e,n,a){Da.L(e,n,a);var o=Ar;if(o&&e&&n){var u='link[rel="preload"][as="'+ke(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+ke(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+ke(a.imageSizes)+'"]')):u+='[href="'+ke(e)+'"]';var f=u;switch(n){case"style":f=Rr(e);break;case"script":f=Cr(e)}Bi.has(f)||(e=x({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),Bi.set(f,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(Po(f))||n==="script"&&o.querySelector(zo(f))||(n=o.createElement("link"),kn(n,"link",e),Je(n),o.head.appendChild(n)))}}function FS(e,n){Da.m(e,n);var a=Ar;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+ke(o)+'"][href="'+ke(e)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Cr(e)}if(!Bi.has(f)&&(e=x({rel:"modulepreload",href:e},n),Bi.set(f,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(zo(f)))return}o=a.createElement("link"),kn(o,"link",e),Je(o),a.head.appendChild(o)}}}function BS(e,n,a){Da.S(e,n,a);var o=Ar;if(o&&e){var u=mi(o).hoistableStyles,f=Rr(e);n=n||"default";var v=u.get(f);if(!v){var R={loading:0,preload:null};if(v=o.querySelector(Po(f)))R.loading=5;else{e=x({rel:"stylesheet",href:e,"data-precedence":n},a),(a=Bi.get(f))&&Qf(e,a);var B=v=o.createElement("link");Je(B),kn(B,"link",e),B._p=new Promise(function(it,gt){B.onload=it,B.onerror=gt}),B.addEventListener("load",function(){R.loading|=1}),B.addEventListener("error",function(){R.loading|=2}),R.loading|=4,sc(v,n,o)}v={type:"stylesheet",instance:v,count:1,state:R},u.set(f,v)}}}function GS(e,n){Da.X(e,n);var a=Ar;if(a&&e){var o=mi(a).hoistableScripts,u=Cr(e),f=o.get(u);f||(f=a.querySelector(zo(u)),f||(e=x({src:e,async:!0},n),(n=Bi.get(u))&&Jf(e,n),f=a.createElement("script"),Je(f),kn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function HS(e,n){Da.M(e,n);var a=Ar;if(a&&e){var o=mi(a).hoistableScripts,u=Cr(e),f=o.get(u);f||(f=a.querySelector(zo(u)),f||(e=x({src:e,async:!0,type:"module"},n),(n=Bi.get(u))&&Jf(e,n),f=a.createElement("script"),Je(f),kn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function wg(e,n,a,o){var u=(u=rt.current)?ac(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Rr(a.href),a=mi(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Rr(a.href);var f=mi(u).hoistableStyles,v=f.get(e);if(v||(u=u.ownerDocument||u,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,v),(f=u.querySelector(Po(e)))&&!f._p&&(v.instance=f,v.state.loading=5),Bi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Bi.set(e,a),f||VS(u,e,a,v.state))),n&&o===null)throw Error(s(528,""));return v}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Cr(a),a=mi(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Rr(e){return'href="'+ke(e)+'"'}function Po(e){return'link[rel="stylesheet"]['+e+"]"}function Dg(e){return x({},e,{"data-precedence":e.precedence,precedence:null})}function VS(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),kn(n,"link",a),Je(n),e.head.appendChild(n))}function Cr(e){return'[src="'+ke(e)+'"]'}function zo(e){return"script[async]"+e}function Ng(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+ke(a.href)+'"]');if(o)return n.instance=o,Je(o),o;var u=x({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),Je(o),kn(o,"style",u),sc(o,a.precedence,e),n.instance=o;case"stylesheet":u=Rr(a.href);var f=e.querySelector(Po(u));if(f)return n.state.loading|=4,n.instance=f,Je(f),f;o=Dg(a),(u=Bi.get(u))&&Qf(o,u),f=(e.ownerDocument||e).createElement("link"),Je(f);var v=f;return v._p=new Promise(function(R,B){v.onload=R,v.onerror=B}),kn(f,"link",o),n.state.loading|=4,sc(f,a.precedence,e),n.instance=f;case"script":return f=Cr(a.src),(u=e.querySelector(zo(f)))?(n.instance=u,Je(u),u):(o=a,(u=Bi.get(f))&&(o=x({},a),Jf(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),Je(u),kn(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,sc(o,a.precedence,e));return n.instance}function sc(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,v=0;v<o.length;v++){var R=o[v];if(R.dataset.precedence===n)f=R;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Qf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Jf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var rc=null;function Ug(e,n,a){if(rc===null){var o=new Map,u=rc=new Map;u.set(a,o)}else u=rc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[yn]||f[an]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var v=f.getAttribute(n)||"";v=e+v;var R=o.get(v);R?R.push(f):o.set(v,[f])}}return o}function Lg(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function kS(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Og(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function XS(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=Rr(o.href),f=n.querySelector(Po(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=oc.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,Je(f);return}f=n.ownerDocument||n,o=Dg(o),(u=Bi.get(u))&&Qf(o,u),f=f.createElement("link"),Je(f);var v=f;v._p=new Promise(function(R,B){v.onload=R,v.onerror=B}),kn(f,"link",o),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=oc.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var $f=0;function WS(e,n){return e.stylesheets&&e.count===0&&cc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&cc(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&$f===0&&($f=62500*TS());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&cc(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>$f?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function oc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)cc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var lc=null;function cc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,lc=new Map,n.forEach(qS,e),lc=null,oc.call(e))}function qS(e,n){if(!(n.state.loading&4)){var a=lc.get(e);if(a)var o=a.get(null);else{a=new Map,lc.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var v=u[f];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),o=v)}o&&a.set(null,o)}u=n.instance,v=u.getAttribute("data-precedence"),f=a.get(v)||o,f===o&&a.set(null,u),a.set(v,u),this.count++,o=oc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Io={$$typeof:L,Provider:null,Consumer:null,_currentValue:st,_currentValue2:st,_threadCount:0};function YS(e,n,a,o,u,f,v,R,B){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ht(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ht(0),this.hiddenUpdates=Ht(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=B,this.incompleteTransitions=new Map}function Pg(e,n,a,o,u,f,v,R,B,it,gt,yt){return e=new YS(e,n,a,v,B,it,gt,yt,R),n=1,f===!0&&(n|=24),f=xi(3,null,null,n),e.current=f,f.stateNode=e,n=Nu(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},Pu(f),e}function zg(e){return e?(e=sr,e):sr}function Ig(e,n,a,o,u,f){u=zg(u),o.context===null?o.context=u:o.pendingContext=u,o=Ka(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=Qa(e,o,n),a!==null&&(ui(a,e,n),mo(a,e,n))}function Fg(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function th(e,n){Fg(e,n),(e=e.alternate)&&Fg(e,n)}function Bg(e){if(e.tag===13||e.tag===31){var n=Cs(e,67108864);n!==null&&ui(n,e,67108864),th(e,67108864)}}function Gg(e){if(e.tag===13||e.tag===31){var n=Ei();n=dn(n);var a=Cs(e,n);a!==null&&ui(a,e,n),th(e,n)}}var uc=!0;function jS(e,n,a,o){var u=O.T;O.T=null;var f=F.p;try{F.p=2,eh(e,n,a,o)}finally{F.p=f,O.T=u}}function ZS(e,n,a,o){var u=O.T;O.T=null;var f=F.p;try{F.p=8,eh(e,n,a,o)}finally{F.p=f,O.T=u}}function eh(e,n,a,o){if(uc){var u=nh(o);if(u===null)Hf(e,n,o,fc,a),Vg(e,o);else if(QS(u,e,n,a,o))o.stopPropagation();else if(Vg(e,o),n&4&&-1<KS.indexOf(e)){for(;u!==null;){var f=Wn(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var v=Tt(f.pendingLanes);if(v!==0){var R=f;for(R.pendingLanes|=2,R.entangledLanes|=2;v;){var B=1<<31-zt(v);R.entanglements[1]|=B,v&=~B}na(f),(ze&6)===0&&(Yl=Nt()+500,No(0))}}break;case 31:case 13:R=Cs(f,2),R!==null&&ui(R,f,2),Zl(),th(f,2)}if(f=nh(o),f===null&&Hf(e,n,o,fc,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else Hf(e,n,o,null,a)}}function nh(e){return e=iu(e),ih(e)}var fc=null;function ih(e){if(fc=null,e=Bn(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===31){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return fc=e,null}function Hg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Qe()){case D:return 2;case b:return 8;case $:case mt:return 32;case At:return 268435456;default:return 32}default:return 32}}var ah=!1,ls=null,cs=null,us=null,Fo=new Map,Bo=new Map,fs=[],KS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Vg(e,n){switch(e){case"focusin":case"focusout":ls=null;break;case"dragenter":case"dragleave":cs=null;break;case"mouseover":case"mouseout":us=null;break;case"pointerover":case"pointerout":Fo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Bo.delete(n.pointerId)}}function Go(e,n,a,o,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=Wn(n),n!==null&&Bg(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function QS(e,n,a,o,u){switch(n){case"focusin":return ls=Go(ls,e,n,a,o,u),!0;case"dragenter":return cs=Go(cs,e,n,a,o,u),!0;case"mouseover":return us=Go(us,e,n,a,o,u),!0;case"pointerover":var f=u.pointerId;return Fo.set(f,Go(Fo.get(f)||null,e,n,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,Bo.set(f,Go(Bo.get(f)||null,e,n,a,o,u)),!0}return!1}function kg(e){var n=Bn(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,di(e.priority,function(){Gg(a)});return}}else if(n===31){if(n=d(a),n!==null){e.blockedOn=n,di(e.priority,function(){Gg(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function hc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=nh(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);nu=o,a.target.dispatchEvent(o),nu=null}else return n=Wn(a),n!==null&&Bg(n),e.blockedOn=a,!1;n.shift()}return!0}function Xg(e,n,a){hc(e)&&a.delete(n)}function JS(){ah=!1,ls!==null&&hc(ls)&&(ls=null),cs!==null&&hc(cs)&&(cs=null),us!==null&&hc(us)&&(us=null),Fo.forEach(Xg),Bo.forEach(Xg)}function dc(e,n){e.blockedOn===n&&(e.blockedOn=null,ah||(ah=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,JS)))}var pc=null;function Wg(e){pc!==e&&(pc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){pc===e&&(pc=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(ih(o||a)===null)continue;break}var f=Wn(a);f!==null&&(e.splice(n,3),n-=3,ef(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function wr(e){function n(B){return dc(B,e)}ls!==null&&dc(ls,e),cs!==null&&dc(cs,e),us!==null&&dc(us,e),Fo.forEach(n),Bo.forEach(n);for(var a=0;a<fs.length;a++){var o=fs[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<fs.length&&(a=fs[0],a.blockedOn===null);)kg(a),a.blockedOn===null&&fs.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],v=u[_n]||null;if(typeof f=="function")v||Wg(a);else if(v){var R=null;if(f&&f.hasAttribute("formAction")){if(u=f,v=f[_n]||null)R=v.formAction;else if(ih(u)!==null)continue}else R=v.action;typeof R=="function"?a[o+1]=R:(a.splice(o,3),o-=3),Wg(a)}}}function qg(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(v){return u=v})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function sh(e){this._internalRoot=e}mc.prototype.render=sh.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=Ei();Ig(a,o,e,n,null,null)},mc.prototype.unmount=sh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Ig(e.current,2,null,e,null,null),Zl(),n[He]=null}};function mc(e){this._internalRoot=e}mc.prototype.unstable_scheduleHydration=function(e){if(e){var n=ai();e={blockedOn:null,target:e,priority:n};for(var a=0;a<fs.length&&n!==0&&n<fs[a].priority;a++);fs.splice(a,0,e),a===0&&kg(e)}};var Yg=t.version;if(Yg!=="19.2.7")throw Error(s(527,Yg,"19.2.7"));F.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(n),e=e!==null?_(e):null,e=e===null?null:e.stateNode,e};var $S={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var gc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!gc.isDisabled&&gc.supportsFiber)try{ut=gc.inject($S),dt=gc}catch{}}return Vo.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",u=t0,f=e0,v=n0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError)),n=Pg(e,1,!1,null,null,a,o,null,u,f,v,qg),e[He]=n.current,Gf(e),new sh(n)},Vo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,u="",f=t0,v=e0,R=n0,B=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.formState!==void 0&&(B=a.formState)),n=Pg(e,1,!0,n,a??null,o,u,B,f,v,R,qg),n.context=zg(null),a=n.current,o=Ei(),o=dn(o),u=Ka(o),u.callback=null,Qa(a,u,o),a=o,n.current.lanes=a,Kt(n,a),na(n),e[He]=n.current,Gf(e),new mc(n)},Vo.version="19.2.7",Vo}var i_;function cy(){if(i_)return lh.exports;i_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),lh.exports=ly(),lh.exports}var uy=cy();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const qd="184",fy=0,a_=1,hy=2,Bc=1,pv=2,Ko=3,Ms=0,ii=1,ra=2,Fa=0,Wr=1,Jo=2,s_=3,r_=4,dy=5,qs=100,py=101,my=102,gy=103,_y=104,vy=200,xy=201,Sy=202,yy=203,Jh=204,$h=205,My=206,by=207,Ey=208,Ty=209,Ay=210,Ry=211,Cy=212,wy=213,Dy=214,td=0,ed=1,nd=2,Yr=3,id=4,ad=5,sd=6,rd=7,mv=0,Ny=1,Uy=2,ca=0,gv=1,_v=2,vv=3,Yd=4,xv=5,Sv=6,yv=7,Mv=300,Ks=301,jr=302,hh=303,dh=304,$c=306,od=1e3,Ia=1001,ld=1002,Xn=1003,Ly=1004,_c=1005,Kn=1006,ph=1007,js=1008,wi=1009,bv=1010,Ev=1011,nl=1012,jd=1013,ha=1014,oa=1015,Ga=1016,Zd=1017,Kd=1018,il=1020,Tv=35902,Av=35899,Rv=1021,Cv=1022,Qi=1023,Ha=1026,Zs=1027,wv=1028,Qd=1029,Qs=1030,Jd=1031,$d=1033,Gc=33776,Hc=33777,Vc=33778,kc=33779,cd=35840,ud=35841,fd=35842,hd=35843,dd=36196,pd=37492,md=37496,gd=37488,_d=37489,Wc=37490,vd=37491,xd=37808,Sd=37809,yd=37810,Md=37811,bd=37812,Ed=37813,Td=37814,Ad=37815,Rd=37816,Cd=37817,wd=37818,Dd=37819,Nd=37820,Ud=37821,Ld=36492,Od=36494,Pd=36495,zd=36283,Id=36284,qc=36285,Fd=36286,Oy=3200,Bd=0,Py=1,xs="",Hi="srgb",Yc="srgb-linear",jc="linear",Ye="srgb",Dr=7680,o_=519,zy=512,Iy=513,Fy=514,tp=515,By=516,Gy=517,ep=518,Hy=519,l_=35044,c_="300 es",la=2e3,al=2001;function Vy(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Zc(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function ky(){const r=Zc("canvas");return r.style.display="block",r}const u_={};function f_(...r){const t="THREE."+r.shift();console.log(t,...r)}function Dv(r){const t=r[0];if(typeof t=="string"&&t.startsWith("TSL:")){const i=r[1];i&&i.isStackTrace?r[0]+=" "+i.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function le(...r){r=Dv(r);const t="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...r)}}function De(...r){r=Dv(r);const t="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...r)}}function Gd(...r){const t=r.join(" ");t in u_||(u_[t]=!0,le(...r))}function Xy(r,t,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const Wy={[td]:ed,[nd]:sd,[id]:rd,[Yr]:ad,[ed]:td,[sd]:nd,[rd]:id,[ad]:Yr};class Js{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,t);t.target=null}}}const jn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],mh=Math.PI/180,Hd=180/Math.PI;function sl(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(jn[r&255]+jn[r>>8&255]+jn[r>>16&255]+jn[r>>24&255]+"-"+jn[t&255]+jn[t>>8&255]+"-"+jn[t>>16&15|64]+jn[t>>24&255]+"-"+jn[i&63|128]+jn[i>>8&255]+"-"+jn[i>>16&255]+jn[i>>24&255]+jn[s&255]+jn[s>>8&255]+jn[s>>16&255]+jn[s>>24&255]).toLowerCase()}function Se(r,t,i){return Math.max(t,Math.min(i,r))}function qy(r,t){return(r%t+t)%t}function gh(r,t,i){return(1-i)*r+i*t}function ko(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function fi(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const fp=class fp{constructor(t=0,i=0){this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Se(this.x,t.x,i.x),this.y=Se(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Se(this.x,t,i),this.y=Se(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Se(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Se(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,h=this.y-t.y;return this.x=c*s-h*l+t.x,this.y=c*l+h*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};fp.prototype.isVector2=!0;let ne=fp;class Qr{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,h,d){let m=s[l+0],p=s[l+1],_=s[l+2],x=s[l+3],g=c[h+0],y=c[h+1],T=c[h+2],w=c[h+3];if(x!==w||m!==g||p!==y||_!==T){let M=m*g+p*y+_*T+x*w;M<0&&(g=-g,y=-y,T=-T,w=-w,M=-M);let S=1-d;if(M<.9995){const C=Math.acos(M),L=Math.sin(C);S=Math.sin(S*C)/L,d=Math.sin(d*C)/L,m=m*S+g*d,p=p*S+y*d,_=_*S+T*d,x=x*S+w*d}else{m=m*S+g*d,p=p*S+y*d,_=_*S+T*d,x=x*S+w*d;const C=1/Math.sqrt(m*m+p*p+_*_+x*x);m*=C,p*=C,_*=C,x*=C}}t[i]=m,t[i+1]=p,t[i+2]=_,t[i+3]=x}static multiplyQuaternionsFlat(t,i,s,l,c,h){const d=s[l],m=s[l+1],p=s[l+2],_=s[l+3],x=c[h],g=c[h+1],y=c[h+2],T=c[h+3];return t[i]=d*T+_*x+m*y-p*g,t[i+1]=m*T+_*g+p*x-d*y,t[i+2]=p*T+_*y+d*g-m*x,t[i+3]=_*T-d*x-m*g-p*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,h=t._order,d=Math.cos,m=Math.sin,p=d(s/2),_=d(l/2),x=d(c/2),g=m(s/2),y=m(l/2),T=m(c/2);switch(h){case"XYZ":this._x=g*_*x+p*y*T,this._y=p*y*x-g*_*T,this._z=p*_*T+g*y*x,this._w=p*_*x-g*y*T;break;case"YXZ":this._x=g*_*x+p*y*T,this._y=p*y*x-g*_*T,this._z=p*_*T-g*y*x,this._w=p*_*x+g*y*T;break;case"ZXY":this._x=g*_*x-p*y*T,this._y=p*y*x+g*_*T,this._z=p*_*T+g*y*x,this._w=p*_*x-g*y*T;break;case"ZYX":this._x=g*_*x-p*y*T,this._y=p*y*x+g*_*T,this._z=p*_*T-g*y*x,this._w=p*_*x+g*y*T;break;case"YZX":this._x=g*_*x+p*y*T,this._y=p*y*x+g*_*T,this._z=p*_*T-g*y*x,this._w=p*_*x-g*y*T;break;case"XZY":this._x=g*_*x-p*y*T,this._y=p*y*x-g*_*T,this._z=p*_*T+g*y*x,this._w=p*_*x+g*y*T;break;default:le("Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],h=i[1],d=i[5],m=i[9],p=i[2],_=i[6],x=i[10],g=s+d+x;if(g>0){const y=.5/Math.sqrt(g+1);this._w=.25/y,this._x=(_-m)*y,this._y=(c-p)*y,this._z=(h-l)*y}else if(s>d&&s>x){const y=2*Math.sqrt(1+s-d-x);this._w=(_-m)/y,this._x=.25*y,this._y=(l+h)/y,this._z=(c+p)/y}else if(d>x){const y=2*Math.sqrt(1+d-s-x);this._w=(c-p)/y,this._x=(l+h)/y,this._y=.25*y,this._z=(m+_)/y}else{const y=2*Math.sqrt(1+x-s-d);this._w=(h-l)/y,this._x=(c+p)/y,this._y=(m+_)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Se(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,h=t._w,d=i._x,m=i._y,p=i._z,_=i._w;return this._x=s*_+h*d+l*p-c*m,this._y=l*_+h*m+c*d-s*p,this._z=c*_+h*p+s*m-l*d,this._w=h*_-s*d-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){let s=t._x,l=t._y,c=t._z,h=t._w,d=this.dot(t);d<0&&(s=-s,l=-l,c=-c,h=-h,d=-d);let m=1-i;if(d<.9995){const p=Math.acos(d),_=Math.sin(p);m=Math.sin(m*p)/_,i=Math.sin(i*p)/_,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const hp=class hp{constructor(t=0,i=0,s=0){this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(h_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(h_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,h=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*h,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,h=t.y,d=t.z,m=t.w,p=2*(h*l-d*s),_=2*(d*i-c*l),x=2*(c*s-h*i);return this.x=i+m*p+h*x-d*_,this.y=s+m*_+d*p-c*x,this.z=l+m*x+c*_-h*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Se(this.x,t.x,i.x),this.y=Se(this.y,t.y,i.y),this.z=Se(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Se(this.x,t,i),this.y=Se(this.y,t,i),this.z=Se(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Se(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*h-s*m,this.z=s*d-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return _h.copy(this).projectOnVector(t),this.sub(_h)}reflect(t){return this.sub(_h.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Se(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};hp.prototype.isVector3=!0;let W=hp;const _h=new W,h_=new Qr,dp=class dp{constructor(t,i,s,l,c,h,d,m,p){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,d,m,p)}set(t,i,s,l,c,h,d,m,p){const _=this.elements;return _[0]=t,_[1]=l,_[2]=d,_[3]=i,_[4]=c,_[5]=m,_[6]=s,_[7]=h,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],d=s[3],m=s[6],p=s[1],_=s[4],x=s[7],g=s[2],y=s[5],T=s[8],w=l[0],M=l[3],S=l[6],C=l[1],L=l[4],U=l[7],V=l[2],N=l[5],I=l[8];return c[0]=h*w+d*C+m*V,c[3]=h*M+d*L+m*N,c[6]=h*S+d*U+m*I,c[1]=p*w+_*C+x*V,c[4]=p*M+_*L+x*N,c[7]=p*S+_*U+x*I,c[2]=g*w+y*C+T*V,c[5]=g*M+y*L+T*N,c[8]=g*S+y*U+T*I,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],_=t[8];return i*h*_-i*d*p-s*c*_+s*d*m+l*c*p-l*h*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],_=t[8],x=_*h-d*p,g=d*m-_*c,y=p*c-h*m,T=i*x+s*g+l*y;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/T;return t[0]=x*w,t[1]=(l*p-_*s)*w,t[2]=(d*s-l*h)*w,t[3]=g*w,t[4]=(_*i-l*m)*w,t[5]=(l*c-d*i)*w,t[6]=y*w,t[7]=(s*m-p*i)*w,t[8]=(h*i-s*c)*w,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,h,d){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*h+p*d)+h+t,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(vh.makeScale(t,i)),this}rotate(t){return this.premultiply(vh.makeRotation(-t)),this}translate(t,i){return this.premultiply(vh.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}};dp.prototype.isMatrix3=!0;let he=dp;const vh=new he,d_=new he().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),p_=new he().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Yy(){const r={enabled:!0,workingColorSpace:Yc,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===Ye&&(l.r=Ba(l.r),l.g=Ba(l.g),l.b=Ba(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Ye&&(l.r=qr(l.r),l.g=qr(l.g),l.b=qr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===xs?jc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Gd("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Gd("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[Yc]:{primaries:t,whitePoint:s,transfer:jc,toXYZ:d_,fromXYZ:p_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Hi},outputColorSpaceConfig:{drawingBufferColorSpace:Hi}},[Hi]:{primaries:t,whitePoint:s,transfer:Ye,toXYZ:d_,fromXYZ:p_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Hi}}}),r}const Ce=Yy();function Ba(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function qr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Nr;class jy{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{Nr===void 0&&(Nr=Zc("canvas")),Nr.width=t.width,Nr.height=t.height;const l=Nr.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=Nr}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Zc("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=Ba(c[h]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Ba(i[s]/255)*255):i[s]=Ba(i[s]);return{data:i,width:t.width,height:t.height}}else return le("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Zy=0;class np{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Zy++}),this.uuid=sl(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayWidth,i.displayHeight,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?c.push(xh(l[h].image)):c.push(xh(l[h]))}else c=xh(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function xh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?jy.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(le("Texture: Unable to serialize Texture."),{})}let Ky=0;const Sh=new W;class Qn extends Js{constructor(t=Qn.DEFAULT_IMAGE,i=Qn.DEFAULT_MAPPING,s=Ia,l=Ia,c=Kn,h=js,d=Qi,m=wi,p=Qn.DEFAULT_ANISOTROPY,_=xs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ky++}),this.uuid=sl(),this.name="",this.source=new np(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new ne(0,0),this.repeat=new ne(1,1),this.center=new ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new he,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Sh).x}get height(){return this.source.getSize(Sh).y}get depth(){return this.source.getSize(Sh).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){le(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){le(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Mv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case od:t.x=t.x-Math.floor(t.x);break;case Ia:t.x=t.x<0?0:1;break;case ld:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case od:t.y=t.y-Math.floor(t.y);break;case Ia:t.y=t.y<0?0:1;break;case ld:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Qn.DEFAULT_IMAGE=null;Qn.DEFAULT_MAPPING=Mv;Qn.DEFAULT_ANISOTROPY=1;const pp=class pp{constructor(t=0,i=0,s=0,l=1){this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,h=t.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const m=t.elements,p=m[0],_=m[4],x=m[8],g=m[1],y=m[5],T=m[9],w=m[2],M=m[6],S=m[10];if(Math.abs(_-g)<.01&&Math.abs(x-w)<.01&&Math.abs(T-M)<.01){if(Math.abs(_+g)<.1&&Math.abs(x+w)<.1&&Math.abs(T+M)<.1&&Math.abs(p+y+S-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const L=(p+1)/2,U=(y+1)/2,V=(S+1)/2,N=(_+g)/4,I=(x+w)/4,E=(T+M)/4;return L>U&&L>V?L<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(L),l=N/s,c=I/s):U>V?U<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(U),s=N/l,c=E/l):V<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(V),s=I/c,l=E/c),this.set(s,l,c,i),this}let C=Math.sqrt((M-T)*(M-T)+(x-w)*(x-w)+(g-_)*(g-_));return Math.abs(C)<.001&&(C=1),this.x=(M-T)/C,this.y=(x-w)/C,this.z=(g-_)/C,this.w=Math.acos((p+y+S-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Se(this.x,t.x,i.x),this.y=Se(this.y,t.y,i.y),this.z=Se(this.z,t.z,i.z),this.w=Se(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Se(this.x,t,i),this.y=Se(this.y,t,i),this.z=Se(this.z,t,i),this.w=Se(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Se(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};pp.prototype.isVector4=!0;let Sn=pp;class Qy extends Js{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Kn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new Sn(0,0,t,i),this.scissorTest=!1,this.viewport=new Sn(0,0,t,i),this.textures=[];const l={width:t,height:i,depth:s.depth},c=new Qn(l),h=s.count;for(let d=0;d<h;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:Kn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new np(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ua extends Qy{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class Nv extends Qn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Xn,this.minFilter=Xn,this.wrapR=Ia,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Jy extends Qn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Xn,this.minFilter=Xn,this.wrapR=Ia,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Jc=class Jc{constructor(t,i,s,l,c,h,d,m,p,_,x,g,y,T,w,M){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,d,m,p,_,x,g,y,T,w,M)}set(t,i,s,l,c,h,d,m,p,_,x,g,y,T,w,M){const S=this.elements;return S[0]=t,S[4]=i,S[8]=s,S[12]=l,S[1]=c,S[5]=h,S[9]=d,S[13]=m,S[2]=p,S[6]=_,S[10]=x,S[14]=g,S[3]=y,S[7]=T,S[11]=w,S[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Jc().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return this.determinant()===0?(t.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const i=this.elements,s=t.elements,l=1/Ur.setFromMatrixColumn(t,0).length(),c=1/Ur.setFromMatrixColumn(t,1).length(),h=1/Ur.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,h=Math.cos(s),d=Math.sin(s),m=Math.cos(l),p=Math.sin(l),_=Math.cos(c),x=Math.sin(c);if(t.order==="XYZ"){const g=h*_,y=h*x,T=d*_,w=d*x;i[0]=m*_,i[4]=-m*x,i[8]=p,i[1]=y+T*p,i[5]=g-w*p,i[9]=-d*m,i[2]=w-g*p,i[6]=T+y*p,i[10]=h*m}else if(t.order==="YXZ"){const g=m*_,y=m*x,T=p*_,w=p*x;i[0]=g+w*d,i[4]=T*d-y,i[8]=h*p,i[1]=h*x,i[5]=h*_,i[9]=-d,i[2]=y*d-T,i[6]=w+g*d,i[10]=h*m}else if(t.order==="ZXY"){const g=m*_,y=m*x,T=p*_,w=p*x;i[0]=g-w*d,i[4]=-h*x,i[8]=T+y*d,i[1]=y+T*d,i[5]=h*_,i[9]=w-g*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(t.order==="ZYX"){const g=h*_,y=h*x,T=d*_,w=d*x;i[0]=m*_,i[4]=T*p-y,i[8]=g*p+w,i[1]=m*x,i[5]=w*p+g,i[9]=y*p-T,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(t.order==="YZX"){const g=h*m,y=h*p,T=d*m,w=d*p;i[0]=m*_,i[4]=w-g*x,i[8]=T*x+y,i[1]=x,i[5]=h*_,i[9]=-d*_,i[2]=-p*_,i[6]=y*x+T,i[10]=g-w*x}else if(t.order==="XZY"){const g=h*m,y=h*p,T=d*m,w=d*p;i[0]=m*_,i[4]=-x,i[8]=p*_,i[1]=g*x+w,i[5]=h*_,i[9]=y*x-T,i[2]=T*x-y,i[6]=d*_,i[10]=w*x+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose($y,t,tM)}lookAt(t,i,s){const l=this.elements;return Ti.subVectors(t,i),Ti.lengthSq()===0&&(Ti.z=1),Ti.normalize(),ds.crossVectors(s,Ti),ds.lengthSq()===0&&(Math.abs(s.z)===1?Ti.x+=1e-4:Ti.z+=1e-4,Ti.normalize(),ds.crossVectors(s,Ti)),ds.normalize(),vc.crossVectors(Ti,ds),l[0]=ds.x,l[4]=vc.x,l[8]=Ti.x,l[1]=ds.y,l[5]=vc.y,l[9]=Ti.y,l[2]=ds.z,l[6]=vc.z,l[10]=Ti.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],d=s[4],m=s[8],p=s[12],_=s[1],x=s[5],g=s[9],y=s[13],T=s[2],w=s[6],M=s[10],S=s[14],C=s[3],L=s[7],U=s[11],V=s[15],N=l[0],I=l[4],E=l[8],z=l[12],Z=l[1],G=l[5],Y=l[9],lt=l[13],ht=l[2],k=l[6],O=l[10],F=l[14],st=l[3],_t=l[7],Mt=l[11],P=l[15];return c[0]=h*N+d*Z+m*ht+p*st,c[4]=h*I+d*G+m*k+p*_t,c[8]=h*E+d*Y+m*O+p*Mt,c[12]=h*z+d*lt+m*F+p*P,c[1]=_*N+x*Z+g*ht+y*st,c[5]=_*I+x*G+g*k+y*_t,c[9]=_*E+x*Y+g*O+y*Mt,c[13]=_*z+x*lt+g*F+y*P,c[2]=T*N+w*Z+M*ht+S*st,c[6]=T*I+w*G+M*k+S*_t,c[10]=T*E+w*Y+M*O+S*Mt,c[14]=T*z+w*lt+M*F+S*P,c[3]=C*N+L*Z+U*ht+V*st,c[7]=C*I+L*G+U*k+V*_t,c[11]=C*E+L*Y+U*O+V*Mt,c[15]=C*z+L*lt+U*F+V*P,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],h=t[1],d=t[5],m=t[9],p=t[13],_=t[2],x=t[6],g=t[10],y=t[14],T=t[3],w=t[7],M=t[11],S=t[15],C=m*y-p*g,L=d*y-p*x,U=d*g-m*x,V=h*y-p*_,N=h*g-m*_,I=h*x-d*_;return i*(w*C-M*L+S*U)-s*(T*C-M*V+S*N)+l*(T*L-w*V+S*I)-c*(T*U-w*N+M*I)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],_=t[8],x=t[9],g=t[10],y=t[11],T=t[12],w=t[13],M=t[14],S=t[15],C=i*d-s*h,L=i*m-l*h,U=i*p-c*h,V=s*m-l*d,N=s*p-c*d,I=l*p-c*m,E=_*w-x*T,z=_*M-g*T,Z=_*S-y*T,G=x*M-g*w,Y=x*S-y*w,lt=g*S-y*M,ht=C*lt-L*Y+U*G+V*Z-N*z+I*E;if(ht===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/ht;return t[0]=(d*lt-m*Y+p*G)*k,t[1]=(l*Y-s*lt-c*G)*k,t[2]=(w*I-M*N+S*V)*k,t[3]=(g*N-x*I-y*V)*k,t[4]=(m*Z-h*lt-p*z)*k,t[5]=(i*lt-l*Z+c*z)*k,t[6]=(M*U-T*I-S*L)*k,t[7]=(_*I-g*U+y*L)*k,t[8]=(h*Y-d*Z+p*E)*k,t[9]=(s*Z-i*Y-c*E)*k,t[10]=(T*N-w*U+S*C)*k,t[11]=(x*U-_*N-y*C)*k,t[12]=(d*z-h*G-m*E)*k,t[13]=(i*G-s*z+l*E)*k,t[14]=(w*L-T*V-M*C)*k,t[15]=(_*V-x*L+g*C)*k,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,h=t.x,d=t.y,m=t.z,p=c*h,_=c*d;return this.set(p*h+s,p*d-l*m,p*m+l*d,0,p*d+l*m,_*d+s,_*m-l*h,0,p*m-l*d,_*m+l*h,c*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,h){return this.set(1,s,c,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,h=i._y,d=i._z,m=i._w,p=c+c,_=h+h,x=d+d,g=c*p,y=c*_,T=c*x,w=h*_,M=h*x,S=d*x,C=m*p,L=m*_,U=m*x,V=s.x,N=s.y,I=s.z;return l[0]=(1-(w+S))*V,l[1]=(y+U)*V,l[2]=(T-L)*V,l[3]=0,l[4]=(y-U)*N,l[5]=(1-(g+S))*N,l[6]=(M+C)*N,l[7]=0,l[8]=(T+L)*I,l[9]=(M-C)*I,l[10]=(1-(g+w))*I,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;t.x=l[12],t.y=l[13],t.z=l[14];const c=this.determinant();if(c===0)return s.set(1,1,1),i.identity(),this;let h=Ur.set(l[0],l[1],l[2]).length();const d=Ur.set(l[4],l[5],l[6]).length(),m=Ur.set(l[8],l[9],l[10]).length();c<0&&(h=-h),Yi.copy(this);const p=1/h,_=1/d,x=1/m;return Yi.elements[0]*=p,Yi.elements[1]*=p,Yi.elements[2]*=p,Yi.elements[4]*=_,Yi.elements[5]*=_,Yi.elements[6]*=_,Yi.elements[8]*=x,Yi.elements[9]*=x,Yi.elements[10]*=x,i.setFromRotationMatrix(Yi),s.x=h,s.y=d,s.z=m,this}makePerspective(t,i,s,l,c,h,d=la,m=!1){const p=this.elements,_=2*c/(i-t),x=2*c/(s-l),g=(i+t)/(i-t),y=(s+l)/(s-l);let T,w;if(m)T=c/(h-c),w=h*c/(h-c);else if(d===la)T=-(h+c)/(h-c),w=-2*h*c/(h-c);else if(d===al)T=-h/(h-c),w=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=_,p[4]=0,p[8]=g,p[12]=0,p[1]=0,p[5]=x,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=T,p[14]=w,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,s,l,c,h,d=la,m=!1){const p=this.elements,_=2/(i-t),x=2/(s-l),g=-(i+t)/(i-t),y=-(s+l)/(s-l);let T,w;if(m)T=1/(h-c),w=h/(h-c);else if(d===la)T=-2/(h-c),w=-(h+c)/(h-c);else if(d===al)T=-1/(h-c),w=-c/(h-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=_,p[4]=0,p[8]=0,p[12]=g,p[1]=0,p[5]=x,p[9]=0,p[13]=y,p[2]=0,p[6]=0,p[10]=T,p[14]=w,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}};Jc.prototype.isMatrix4=!0;let gn=Jc;const Ur=new W,Yi=new gn,$y=new W(0,0,0),tM=new W(1,1,1),ds=new W,vc=new W,Ti=new W,m_=new gn,g_=new Qr;class bs{constructor(t=0,i=0,s=0,l=bs.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],h=l[4],d=l[8],m=l[1],p=l[5],_=l[9],x=l[2],g=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(Se(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,y),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(g,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Se(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-x,c),this._z=0);break;case"ZXY":this._x=Math.asin(Se(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-x,y),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Se(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(g,y),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(Se(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-x,c)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-Se(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(g,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-_,y),this._y=0);break;default:le("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return m_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(m_,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return g_.setFromEuler(this),this.setFromQuaternion(g_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}bs.DEFAULT_ORDER="XYZ";let ip=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},eM=0;const __=new W,Lr=new Qr,Na=new gn,xc=new W,Xo=new W,nM=new W,iM=new Qr,v_=new W(1,0,0),x_=new W(0,1,0),S_=new W(0,0,1),y_={type:"added"},aM={type:"removed"},Or={type:"childadded",child:null},yh={type:"childremoved",child:null};class Jn extends Js{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:eM++}),this.uuid=sl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Jn.DEFAULT_UP.clone();const t=new W,i=new bs,s=new Qr,l=new W(1,1,1);function c(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new gn},normalMatrix:{value:new he}}),this.matrix=new gn,this.matrixWorld=new gn,this.matrixAutoUpdate=Jn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Jn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ip,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Lr.setFromAxisAngle(t,i),this.quaternion.multiply(Lr),this}rotateOnWorldAxis(t,i){return Lr.setFromAxisAngle(t,i),this.quaternion.premultiply(Lr),this}rotateX(t){return this.rotateOnAxis(v_,t)}rotateY(t){return this.rotateOnAxis(x_,t)}rotateZ(t){return this.rotateOnAxis(S_,t)}translateOnAxis(t,i){return __.copy(t).applyQuaternion(this.quaternion),this.position.add(__.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(v_,t)}translateY(t){return this.translateOnAxis(x_,t)}translateZ(t){return this.translateOnAxis(S_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Na.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?xc.copy(t):xc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Xo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Na.lookAt(Xo,xc,this.up):Na.lookAt(xc,Xo,this.up),this.quaternion.setFromRotationMatrix(Na),l&&(Na.extractRotation(l.matrixWorld),Lr.setFromRotationMatrix(Na),this.quaternion.premultiply(Lr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(De("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(y_),Or.child=t,this.dispatchEvent(Or),Or.child=null):De("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(aM),yh.child=t,this.dispatchEvent(yh),yh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Na.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Na.multiply(t.parent.matrixWorld)),t.applyMatrix4(Na),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(y_),Or.child=t,this.dispatchEvent(Or),Or.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xo,t,nM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xo,iM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const i=t.x,s=t.y,l=t.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*s-c[8]*l,c[13]+=s-c[1]*i-c[5]*s-c[9]*l,c[14]+=l-c[2]*i-c[6]*s-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const x=m[p];c(t.shapes,x)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(t.materials,this.material[m]));l.material=d}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(t.animations,m))}}if(i){const d=h(t.geometries),m=h(t.materials),p=h(t.textures),_=h(t.images),x=h(t.shapes),g=h(t.skeletons),y=h(t.animations),T=h(t.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),_.length>0&&(s.images=_),x.length>0&&(s.shapes=x),g.length>0&&(s.skeletons=g),y.length>0&&(s.animations=y),T.length>0&&(s.nodes=T)}return s.object=l,s;function h(d){const m=[];for(const p in d){const _=d[p];delete _.metadata,m.push(_)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}Jn.DEFAULT_UP=new W(0,1,0);Jn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Jn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class za extends Jn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const sM={type:"move"};class Mh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new za,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new za,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new za,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){h=!0;for(const w of t.hand.values()){const M=i.getJointPose(w,s),S=this._getHandJoint(p,w);M!==null&&(S.matrix.fromArray(M.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=M.radius),S.visible=M!==null}const _=p.joints["index-finger-tip"],x=p.joints["thumb-tip"],g=_.position.distanceTo(x.position),y=.02,T=.005;p.inputState.pinching&&g>y+T?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&g<=y-T&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:t,target:this})));d!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(sM)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new za;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}const Uv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ps={h:0,s:0,l:0},Sc={h:0,s:0,l:0};function bh(r,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(t-r)*6*i:i<1/2?t:i<2/3?r+(t-r)*6*(2/3-i):r}class xe{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=Hi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ce.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=Ce.workingColorSpace){return this.r=t,this.g=i,this.b=s,Ce.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=Ce.workingColorSpace){if(t=qy(t,1),i=Se(i,0,1),s=Se(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,h=2*s-c;this.r=bh(h,c,t+1/3),this.g=bh(h,c,t),this.b=bh(h,c,t-1/3)}return Ce.colorSpaceToWorking(this,l),this}setStyle(t,i=Hi){function s(c){c!==void 0&&parseFloat(c)<1&&le("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:le("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);le("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=Hi){const s=Uv[t.toLowerCase()];return s!==void 0?this.setHex(s,i):le("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ba(t.r),this.g=Ba(t.g),this.b=Ba(t.b),this}copyLinearToSRGB(t){return this.r=qr(t.r),this.g=qr(t.g),this.b=qr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Hi){return Ce.workingToColorSpace(Zn.copy(this),t),Math.round(Se(Zn.r*255,0,255))*65536+Math.round(Se(Zn.g*255,0,255))*256+Math.round(Se(Zn.b*255,0,255))}getHexString(t=Hi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Ce.workingColorSpace){Ce.workingToColorSpace(Zn.copy(this),i);const s=Zn.r,l=Zn.g,c=Zn.b,h=Math.max(s,l,c),d=Math.min(s,l,c);let m,p;const _=(d+h)/2;if(d===h)m=0,p=0;else{const x=h-d;switch(p=_<=.5?x/(h+d):x/(2-h-d),h){case s:m=(l-c)/x+(l<c?6:0);break;case l:m=(c-s)/x+2;break;case c:m=(s-l)/x+4;break}m/=6}return t.h=m,t.s=p,t.l=_,t}getRGB(t,i=Ce.workingColorSpace){return Ce.workingToColorSpace(Zn.copy(this),i),t.r=Zn.r,t.g=Zn.g,t.b=Zn.b,t}getStyle(t=Hi){Ce.workingToColorSpace(Zn.copy(this),t);const i=Zn.r,s=Zn.g,l=Zn.b;return t!==Hi?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(ps),this.setHSL(ps.h+t,ps.s+i,ps.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(ps),t.getHSL(Sc);const s=gh(ps.h,Sc.h,i),l=gh(ps.s,Sc.s,i),c=gh(ps.l,Sc.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Zn=new xe;xe.NAMES=Uv;class ap{constructor(t,i=25e-5){this.isFogExp2=!0,this.name="",this.color=new xe(t),this.density=i}clone(){return new ap(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class rM extends Jn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bs,this.environmentIntensity=1,this.environmentRotation=new bs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const ji=new W,Ua=new W,Eh=new W,La=new W,Pr=new W,zr=new W,M_=new W,Th=new W,Ah=new W,Rh=new W,Ch=new Sn,wh=new Sn,Dh=new Sn;class Ki{constructor(t=new W,i=new W,s=new W){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),ji.subVectors(t,i),l.cross(ji);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){ji.subVectors(l,i),Ua.subVectors(s,i),Eh.subVectors(t,i);const h=ji.dot(ji),d=ji.dot(Ua),m=ji.dot(Eh),p=Ua.dot(Ua),_=Ua.dot(Eh),x=h*p-d*d;if(x===0)return c.set(0,0,0),null;const g=1/x,y=(p*m-d*_)*g,T=(h*_-d*m)*g;return c.set(1-y-T,T,y)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,La)===null?!1:La.x>=0&&La.y>=0&&La.x+La.y<=1}static getInterpolation(t,i,s,l,c,h,d,m){return this.getBarycoord(t,i,s,l,La)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,La.x),m.addScaledVector(h,La.y),m.addScaledVector(d,La.z),m)}static getInterpolatedAttribute(t,i,s,l,c,h){return Ch.setScalar(0),wh.setScalar(0),Dh.setScalar(0),Ch.fromBufferAttribute(t,i),wh.fromBufferAttribute(t,s),Dh.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(Ch,c.x),h.addScaledVector(wh,c.y),h.addScaledVector(Dh,c.z),h}static isFrontFacing(t,i,s,l){return ji.subVectors(s,i),Ua.subVectors(t,i),ji.cross(Ua).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ji.subVectors(this.c,this.b),Ua.subVectors(this.a,this.b),ji.cross(Ua).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ki.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Ki.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return Ki.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return Ki.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ki.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let h,d;Pr.subVectors(l,s),zr.subVectors(c,s),Th.subVectors(t,s);const m=Pr.dot(Th),p=zr.dot(Th);if(m<=0&&p<=0)return i.copy(s);Ah.subVectors(t,l);const _=Pr.dot(Ah),x=zr.dot(Ah);if(_>=0&&x<=_)return i.copy(l);const g=m*x-_*p;if(g<=0&&m>=0&&_<=0)return h=m/(m-_),i.copy(s).addScaledVector(Pr,h);Rh.subVectors(t,c);const y=Pr.dot(Rh),T=zr.dot(Rh);if(T>=0&&y<=T)return i.copy(c);const w=y*p-m*T;if(w<=0&&p>=0&&T<=0)return d=p/(p-T),i.copy(s).addScaledVector(zr,d);const M=_*T-y*x;if(M<=0&&x-_>=0&&y-T>=0)return M_.subVectors(c,l),d=(x-_)/(x-_+(y-T)),i.copy(l).addScaledVector(M_,d);const S=1/(M+w+g);return h=w*S,d=g*S,i.copy(s).addScaledVector(Pr,h).addScaledVector(zr,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class rl{constructor(t=new W(1/0,1/0,1/0),i=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Zi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Zi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Zi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let h=0,d=c.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,Zi):Zi.fromBufferAttribute(c,h),Zi.applyMatrix4(t.matrixWorld),this.expandByPoint(Zi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),yc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),yc.copy(s.boundingBox)),yc.applyMatrix4(t.matrixWorld),this.union(yc)}const l=t.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Zi),Zi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Wo),Mc.subVectors(this.max,Wo),Ir.subVectors(t.a,Wo),Fr.subVectors(t.b,Wo),Br.subVectors(t.c,Wo),ms.subVectors(Fr,Ir),gs.subVectors(Br,Fr),Hs.subVectors(Ir,Br);let i=[0,-ms.z,ms.y,0,-gs.z,gs.y,0,-Hs.z,Hs.y,ms.z,0,-ms.x,gs.z,0,-gs.x,Hs.z,0,-Hs.x,-ms.y,ms.x,0,-gs.y,gs.x,0,-Hs.y,Hs.x,0];return!Nh(i,Ir,Fr,Br,Mc)||(i=[1,0,0,0,1,0,0,0,1],!Nh(i,Ir,Fr,Br,Mc))?!1:(bc.crossVectors(ms,gs),i=[bc.x,bc.y,bc.z],Nh(i,Ir,Fr,Br,Mc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Zi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Zi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Oa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Oa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Oa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Oa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Oa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Oa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Oa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Oa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Oa),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Oa=[new W,new W,new W,new W,new W,new W,new W,new W],Zi=new W,yc=new rl,Ir=new W,Fr=new W,Br=new W,ms=new W,gs=new W,Hs=new W,Wo=new W,Mc=new W,bc=new W,Vs=new W;function Nh(r,t,i,s,l){for(let c=0,h=r.length-3;c<=h;c+=3){Vs.fromArray(r,c);const d=l.x*Math.abs(Vs.x)+l.y*Math.abs(Vs.y)+l.z*Math.abs(Vs.z),m=t.dot(Vs),p=i.dot(Vs),_=s.dot(Vs);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>d)return!1}return!0}const wn=new W,Ec=new ne;let oM=0;class fa extends Js{constructor(t,i,s=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:oM++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=l_,this.updateRanges=[],this.gpuType=oa,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Ec.fromBufferAttribute(this,i),Ec.applyMatrix3(t),this.setXY(i,Ec.x,Ec.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)wn.fromBufferAttribute(this,i),wn.applyMatrix3(t),this.setXYZ(i,wn.x,wn.y,wn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)wn.fromBufferAttribute(this,i),wn.applyMatrix4(t),this.setXYZ(i,wn.x,wn.y,wn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)wn.fromBufferAttribute(this,i),wn.applyNormalMatrix(t),this.setXYZ(i,wn.x,wn.y,wn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)wn.fromBufferAttribute(this,i),wn.transformDirection(t),this.setXYZ(i,wn.x,wn.y,wn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=ko(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=fi(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=ko(i,this.array)),i}setX(t,i){return this.normalized&&(i=fi(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=ko(i,this.array)),i}setY(t,i){return this.normalized&&(i=fi(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=ko(i,this.array)),i}setZ(t,i){return this.normalized&&(i=fi(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=ko(i,this.array)),i}setW(t,i){return this.normalized&&(i=fi(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=fi(i,this.array),s=fi(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=fi(i,this.array),s=fi(s,this.array),l=fi(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=fi(i,this.array),s=fi(s,this.array),l=fi(l,this.array),c=fi(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==l_&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}}class Lv extends fa{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class Ov extends fa{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class hn extends fa{constructor(t,i,s){super(new Float32Array(t),i,s)}}const lM=new rl,qo=new W,Uh=new W;class sp{constructor(t=new W,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):lM.setFromPoints(t).getCenter(s);let l=0;for(let c=0,h=t.length;c<h;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;qo.subVectors(t,this.center);const i=qo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(qo,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Uh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(qo.copy(t.center).add(Uh)),this.expandByPoint(qo.copy(t.center).sub(Uh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let cM=0;const Gi=new gn,Lh=new Jn,Gr=new W,Ai=new rl,Yo=new rl,zn=new W;class hi extends Js{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:cM++}),this.uuid=sl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Vy(t)?Ov:Lv)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new he().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Gi.makeRotationFromQuaternion(t),this.applyMatrix4(Gi),this}rotateX(t){return Gi.makeRotationX(t),this.applyMatrix4(Gi),this}rotateY(t){return Gi.makeRotationY(t),this.applyMatrix4(Gi),this}rotateZ(t){return Gi.makeRotationZ(t),this.applyMatrix4(Gi),this}translate(t,i,s){return Gi.makeTranslation(t,i,s),this.applyMatrix4(Gi),this}scale(t,i,s){return Gi.makeScale(t,i,s),this.applyMatrix4(Gi),this}lookAt(t){return Lh.lookAt(t),Lh.updateMatrix(),this.applyMatrix4(Lh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gr).negate(),this.translate(Gr.x,Gr.y,Gr.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const h=t[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new hn(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&le("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new rl);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){De("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];Ai.setFromBufferAttribute(c),this.morphTargetsRelative?(zn.addVectors(this.boundingBox.min,Ai.min),this.boundingBox.expandByPoint(zn),zn.addVectors(this.boundingBox.max,Ai.max),this.boundingBox.expandByPoint(zn)):(this.boundingBox.expandByPoint(Ai.min),this.boundingBox.expandByPoint(Ai.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&De('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new sp);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){De("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(t){const s=this.boundingSphere.center;if(Ai.setFromBufferAttribute(t),i)for(let c=0,h=i.length;c<h;c++){const d=i[c];Yo.setFromBufferAttribute(d),this.morphTargetsRelative?(zn.addVectors(Ai.min,Yo.min),Ai.expandByPoint(zn),zn.addVectors(Ai.max,Yo.max),Ai.expandByPoint(zn)):(Ai.expandByPoint(Yo.min),Ai.expandByPoint(Yo.max))}Ai.getCenter(s);let l=0;for(let c=0,h=t.count;c<h;c++)zn.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(zn));if(i)for(let c=0,h=i.length;c<h;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,_=d.count;p<_;p++)zn.fromBufferAttribute(d,p),m&&(Gr.fromBufferAttribute(t,p),zn.add(Gr)),l=Math.max(l,s.distanceToSquared(zn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&De('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){De("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new fa(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let E=0;E<s.count;E++)d[E]=new W,m[E]=new W;const p=new W,_=new W,x=new W,g=new ne,y=new ne,T=new ne,w=new W,M=new W;function S(E,z,Z){p.fromBufferAttribute(s,E),_.fromBufferAttribute(s,z),x.fromBufferAttribute(s,Z),g.fromBufferAttribute(c,E),y.fromBufferAttribute(c,z),T.fromBufferAttribute(c,Z),_.sub(p),x.sub(p),y.sub(g),T.sub(g);const G=1/(y.x*T.y-T.x*y.y);isFinite(G)&&(w.copy(_).multiplyScalar(T.y).addScaledVector(x,-y.y).multiplyScalar(G),M.copy(x).multiplyScalar(y.x).addScaledVector(_,-T.x).multiplyScalar(G),d[E].add(w),d[z].add(w),d[Z].add(w),m[E].add(M),m[z].add(M),m[Z].add(M))}let C=this.groups;C.length===0&&(C=[{start:0,count:t.count}]);for(let E=0,z=C.length;E<z;++E){const Z=C[E],G=Z.start,Y=Z.count;for(let lt=G,ht=G+Y;lt<ht;lt+=3)S(t.getX(lt+0),t.getX(lt+1),t.getX(lt+2))}const L=new W,U=new W,V=new W,N=new W;function I(E){V.fromBufferAttribute(l,E),N.copy(V);const z=d[E];L.copy(z),L.sub(V.multiplyScalar(V.dot(z))).normalize(),U.crossVectors(N,z);const G=U.dot(m[E])<0?-1:1;h.setXYZW(E,L.x,L.y,L.z,G)}for(let E=0,z=C.length;E<z;++E){const Z=C[E],G=Z.start,Y=Z.count;for(let lt=G,ht=G+Y;lt<ht;lt+=3)I(t.getX(lt+0)),I(t.getX(lt+1)),I(t.getX(lt+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new fa(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let g=0,y=s.count;g<y;g++)s.setXYZ(g,0,0,0);const l=new W,c=new W,h=new W,d=new W,m=new W,p=new W,_=new W,x=new W;if(t)for(let g=0,y=t.count;g<y;g+=3){const T=t.getX(g+0),w=t.getX(g+1),M=t.getX(g+2);l.fromBufferAttribute(i,T),c.fromBufferAttribute(i,w),h.fromBufferAttribute(i,M),_.subVectors(h,c),x.subVectors(l,c),_.cross(x),d.fromBufferAttribute(s,T),m.fromBufferAttribute(s,w),p.fromBufferAttribute(s,M),d.add(_),m.add(_),p.add(_),s.setXYZ(T,d.x,d.y,d.z),s.setXYZ(w,m.x,m.y,m.z),s.setXYZ(M,p.x,p.y,p.z)}else for(let g=0,y=i.count;g<y;g+=3)l.fromBufferAttribute(i,g+0),c.fromBufferAttribute(i,g+1),h.fromBufferAttribute(i,g+2),_.subVectors(h,c),x.subVectors(l,c),_.cross(x),s.setXYZ(g+0,_.x,_.y,_.z),s.setXYZ(g+1,_.x,_.y,_.z),s.setXYZ(g+2,_.x,_.y,_.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)zn.fromBufferAttribute(t,i),zn.normalize(),t.setXYZ(i,zn.x,zn.y,zn.z)}toNonIndexed(){function t(d,m){const p=d.array,_=d.itemSize,x=d.normalized,g=new p.constructor(m.length*_);let y=0,T=0;for(let w=0,M=m.length;w<M;w++){d.isInterleavedBufferAttribute?y=m[w]*d.data.stride+d.offset:y=m[w]*_;for(let S=0;S<_;S++)g[T++]=p[y++]}return new fa(g,_,x)}if(this.index===null)return le("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new hi,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,s);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let _=0,x=p.length;_<x;_++){const g=p[_],y=t(g,s);m.push(y)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let x=0,g=p.length;x<g;x++){const y=p[x];_.push(y.toJSON(t.data))}_.length>0&&(l[m]=_,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const p in l){const _=l[p];this.setAttribute(p,_.clone(i))}const c=t.morphAttributes;for(const p in c){const _=[],x=c[p];for(let g=0,y=x.length;g<y;g++)_.push(x[g].clone(i));this.morphAttributes[p]=_}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let p=0,_=h.length;p<_;p++){const x=h[p];this.addGroup(x.start,x.count,x.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let uM=0;class ol extends Js{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:uM++}),this.uuid=sl(),this.name="",this.type="Material",this.blending=Wr,this.side=Ms,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Jh,this.blendDst=$h,this.blendEquation=qs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xe(0,0,0),this.blendAlpha=0,this.depthFunc=Yr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=o_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Dr,this.stencilZFail=Dr,this.stencilZPass=Dr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){le(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){le(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Wr&&(s.blending=this.blending),this.side!==Ms&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Jh&&(s.blendSrc=this.blendSrc),this.blendDst!==$h&&(s.blendDst=this.blendDst),this.blendEquation!==qs&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Yr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==o_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Dr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Dr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Dr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const h=[];for(const d in c){const m=c[d];delete m.metadata,h.push(m)}return h}if(i){const c=l(t.textures),h=l(t.images);c.length>0&&(s.textures=c),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Pa=new W,Oh=new W,Tc=new W,_s=new W,Ph=new W,Ac=new W,zh=new W;class Pv{constructor(t=new W,i=new W(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Pa)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=Pa.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(Pa.copy(this.origin).addScaledVector(this.direction,i),Pa.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){Oh.copy(t).add(i).multiplyScalar(.5),Tc.copy(i).sub(t).normalize(),_s.copy(this.origin).sub(Oh);const c=t.distanceTo(i)*.5,h=-this.direction.dot(Tc),d=_s.dot(this.direction),m=-_s.dot(Tc),p=_s.lengthSq(),_=Math.abs(1-h*h);let x,g,y,T;if(_>0)if(x=h*m-d,g=h*d-m,T=c*_,x>=0)if(g>=-T)if(g<=T){const w=1/_;x*=w,g*=w,y=x*(x+h*g+2*d)+g*(h*x+g+2*m)+p}else g=c,x=Math.max(0,-(h*g+d)),y=-x*x+g*(g+2*m)+p;else g=-c,x=Math.max(0,-(h*g+d)),y=-x*x+g*(g+2*m)+p;else g<=-T?(x=Math.max(0,-(-h*c+d)),g=x>0?-c:Math.min(Math.max(-c,-m),c),y=-x*x+g*(g+2*m)+p):g<=T?(x=0,g=Math.min(Math.max(-c,-m),c),y=g*(g+2*m)+p):(x=Math.max(0,-(h*c+d)),g=x>0?c:Math.min(Math.max(-c,-m),c),y=-x*x+g*(g+2*m)+p);else g=h>0?-c:c,x=Math.max(0,-(h*g+d)),y=-x*x+g*(g+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,x),l&&l.copy(Oh).addScaledVector(Tc,g),y}intersectSphere(t,i){Pa.subVectors(t.center,this.origin);const s=Pa.dot(this.direction),l=Pa.dot(Pa)-s*s,c=t.radius*t.radius;if(l>c)return null;const h=Math.sqrt(c-l),d=s-h,m=s+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,h,d,m;const p=1/this.direction.x,_=1/this.direction.y,x=1/this.direction.z,g=this.origin;return p>=0?(s=(t.min.x-g.x)*p,l=(t.max.x-g.x)*p):(s=(t.max.x-g.x)*p,l=(t.min.x-g.x)*p),_>=0?(c=(t.min.y-g.y)*_,h=(t.max.y-g.y)*_):(c=(t.max.y-g.y)*_,h=(t.min.y-g.y)*_),s>h||c>l||((c>s||isNaN(s))&&(s=c),(h<l||isNaN(l))&&(l=h),x>=0?(d=(t.min.z-g.z)*x,m=(t.max.z-g.z)*x):(d=(t.max.z-g.z)*x,m=(t.min.z-g.z)*x),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,Pa)!==null}intersectTriangle(t,i,s,l,c){Ph.subVectors(i,t),Ac.subVectors(s,t),zh.crossVectors(Ph,Ac);let h=this.direction.dot(zh),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;_s.subVectors(this.origin,t);const m=d*this.direction.dot(Ac.crossVectors(_s,Ac));if(m<0)return null;const p=d*this.direction.dot(Ph.cross(_s));if(p<0||m+p>h)return null;const _=-d*_s.dot(zh);return _<0?null:this.at(_/h,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Xr extends ol{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bs,this.combine=mv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const b_=new gn,ks=new Pv,Rc=new sp,E_=new W,Cc=new W,wc=new W,Dc=new W,Ih=new W,Nc=new W,T_=new W,Uc=new W;class we extends Jn{constructor(t=new hi,i=new Xr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(c&&d){Nc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const _=d[m],x=c[m];_!==0&&(Ih.fromBufferAttribute(x,t),h?Nc.addScaledVector(Ih,_):Nc.addScaledVector(Ih.sub(i),_))}i.add(Nc)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Rc.copy(s.boundingSphere),Rc.applyMatrix4(c),ks.copy(t.ray).recast(t.near),!(Rc.containsPoint(ks.origin)===!1&&(ks.intersectSphere(Rc,E_)===null||ks.origin.distanceToSquared(E_)>(t.far-t.near)**2))&&(b_.copy(c).invert(),ks.copy(t.ray).applyMatrix4(b_),!(s.boundingBox!==null&&ks.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,ks)))}_computeIntersections(t,i,s){let l;const c=this.geometry,h=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,_=c.attributes.uv1,x=c.attributes.normal,g=c.groups,y=c.drawRange;if(d!==null)if(Array.isArray(h))for(let T=0,w=g.length;T<w;T++){const M=g[T],S=h[M.materialIndex],C=Math.max(M.start,y.start),L=Math.min(d.count,Math.min(M.start+M.count,y.start+y.count));for(let U=C,V=L;U<V;U+=3){const N=d.getX(U),I=d.getX(U+1),E=d.getX(U+2);l=Lc(this,S,t,s,p,_,x,N,I,E),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const T=Math.max(0,y.start),w=Math.min(d.count,y.start+y.count);for(let M=T,S=w;M<S;M+=3){const C=d.getX(M),L=d.getX(M+1),U=d.getX(M+2);l=Lc(this,h,t,s,p,_,x,C,L,U),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let T=0,w=g.length;T<w;T++){const M=g[T],S=h[M.materialIndex],C=Math.max(M.start,y.start),L=Math.min(m.count,Math.min(M.start+M.count,y.start+y.count));for(let U=C,V=L;U<V;U+=3){const N=U,I=U+1,E=U+2;l=Lc(this,S,t,s,p,_,x,N,I,E),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const T=Math.max(0,y.start),w=Math.min(m.count,y.start+y.count);for(let M=T,S=w;M<S;M+=3){const C=M,L=M+1,U=M+2;l=Lc(this,h,t,s,p,_,x,C,L,U),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function fM(r,t,i,s,l,c,h,d){let m;if(t.side===ii?m=s.intersectTriangle(h,c,l,!0,d):m=s.intersectTriangle(l,c,h,t.side===Ms,d),m===null)return null;Uc.copy(d),Uc.applyMatrix4(r.matrixWorld);const p=i.ray.origin.distanceTo(Uc);return p<i.near||p>i.far?null:{distance:p,point:Uc.clone(),object:r}}function Lc(r,t,i,s,l,c,h,d,m,p){r.getVertexPosition(d,Cc),r.getVertexPosition(m,wc),r.getVertexPosition(p,Dc);const _=fM(r,t,i,s,Cc,wc,Dc,T_);if(_){const x=new W;Ki.getBarycoord(T_,Cc,wc,Dc,x),l&&(_.uv=Ki.getInterpolatedAttribute(l,d,m,p,x,new ne)),c&&(_.uv1=Ki.getInterpolatedAttribute(c,d,m,p,x,new ne)),h&&(_.normal=Ki.getInterpolatedAttribute(h,d,m,p,x,new W),_.normal.dot(s.direction)>0&&_.normal.multiplyScalar(-1));const g={a:d,b:m,c:p,normal:new W,materialIndex:0};Ki.getNormal(Cc,wc,Dc,g.normal),_.face=g,_.barycoord=x}return _}class hM extends Qn{constructor(t=null,i=1,s=1,l,c,h,d,m,p=Xn,_=Xn,x,g){super(null,h,d,m,p,_,l,c,x,g),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Fh=new W,dM=new W,pM=new he;class Ws{constructor(t=new W(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=Fh.subVectors(s,i).cross(dM.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i,s=!0){const l=t.delta(Fh),c=this.normal.dot(l);if(c===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const h=-(t.start.dot(this.normal)+this.constant)/c;return s===!0&&(h<0||h>1)?null:i.copy(t.start).addScaledVector(l,h)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||pM.getNormalMatrix(t),l=this.coplanarPoint(Fh).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Xs=new sp,mM=new ne(.5,.5),Oc=new W;class rp{constructor(t=new Ws,i=new Ws,s=new Ws,l=new Ws,c=new Ws,h=new Ws){this.planes=[t,i,s,l,c,h]}set(t,i,s,l,c,h){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(c),d[5].copy(h),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=la,s=!1){const l=this.planes,c=t.elements,h=c[0],d=c[1],m=c[2],p=c[3],_=c[4],x=c[5],g=c[6],y=c[7],T=c[8],w=c[9],M=c[10],S=c[11],C=c[12],L=c[13],U=c[14],V=c[15];if(l[0].setComponents(p-h,y-_,S-T,V-C).normalize(),l[1].setComponents(p+h,y+_,S+T,V+C).normalize(),l[2].setComponents(p+d,y+x,S+w,V+L).normalize(),l[3].setComponents(p-d,y-x,S-w,V-L).normalize(),s)l[4].setComponents(m,g,M,U).normalize(),l[5].setComponents(p-m,y-g,S-M,V-U).normalize();else if(l[4].setComponents(p-m,y-g,S-M,V-U).normalize(),i===la)l[5].setComponents(p+m,y+g,S+M,V+U).normalize();else if(i===al)l[5].setComponents(m,g,M,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Xs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Xs.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Xs)}intersectsSprite(t){Xs.center.set(0,0,0);const i=mM.distanceTo(t.center);return Xs.radius=.7071067811865476+i,Xs.applyMatrix4(t.matrixWorld),this.intersectsSphere(Xs)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Oc.x=l.normal.x>0?t.max.x:t.min.x,Oc.y=l.normal.y>0?t.max.y:t.min.y,Oc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Oc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class zv extends Qn{constructor(t=[],i=Ks,s,l,c,h,d,m,p,_){super(t,i,s,l,c,h,d,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class gM extends Qn{constructor(t,i,s,l,c,h,d,m,p){super(t,i,s,l,c,h,d,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Zr extends Qn{constructor(t,i,s=ha,l,c,h,d=Xn,m=Xn,p,_=Ha,x=1){if(_!==Ha&&_!==Zs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:t,height:i,depth:x};super(g,l,c,h,d,m,_,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new np(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class _M extends Zr{constructor(t,i=ha,s=Ks,l,c,h=Xn,d=Xn,m,p=Ha){const _={width:t,height:t,depth:1},x=[_,_,_,_,_,_];super(t,t,i,s,l,c,h,d,m,p),this.image=x,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Iv extends Qn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class ys extends hi{constructor(t=1,i=1,s=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:h};const d=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const m=[],p=[],_=[],x=[];let g=0,y=0;T("z","y","x",-1,-1,s,i,t,h,c,0),T("z","y","x",1,-1,s,i,-t,h,c,1),T("x","z","y",1,1,t,s,i,l,h,2),T("x","z","y",1,-1,t,s,-i,l,h,3),T("x","y","z",1,-1,t,i,s,l,c,4),T("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new hn(p,3)),this.setAttribute("normal",new hn(_,3)),this.setAttribute("uv",new hn(x,2));function T(w,M,S,C,L,U,V,N,I,E,z){const Z=U/I,G=V/E,Y=U/2,lt=V/2,ht=N/2,k=I+1,O=E+1;let F=0,st=0;const _t=new W;for(let Mt=0;Mt<O;Mt++){const P=Mt*G-lt;for(let J=0;J<k;J++){const bt=J*Z-Y;_t[w]=bt*C,_t[M]=P*L,_t[S]=ht,p.push(_t.x,_t.y,_t.z),_t[w]=0,_t[M]=0,_t[S]=N>0?1:-1,_.push(_t.x,_t.y,_t.z),x.push(J/I),x.push(1-Mt/E),F+=1}}for(let Mt=0;Mt<E;Mt++)for(let P=0;P<I;P++){const J=g+P+k*Mt,bt=g+P+k*(Mt+1),wt=g+(P+1)+k*(Mt+1),Ct=g+(P+1)+k*Mt;m.push(J,bt,Ct),m.push(bt,wt,Ct),st+=6}d.addGroup(y,st,z),y+=st,g+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ys(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Ri extends hi{constructor(t=1,i=1,s=1,l=32,c=1,h=!1,d=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:s,radialSegments:l,heightSegments:c,openEnded:h,thetaStart:d,thetaLength:m};const p=this;l=Math.floor(l),c=Math.floor(c);const _=[],x=[],g=[],y=[];let T=0;const w=[],M=s/2;let S=0;C(),h===!1&&(t>0&&L(!0),i>0&&L(!1)),this.setIndex(_),this.setAttribute("position",new hn(x,3)),this.setAttribute("normal",new hn(g,3)),this.setAttribute("uv",new hn(y,2));function C(){const U=new W,V=new W;let N=0;const I=(i-t)/s;for(let E=0;E<=c;E++){const z=[],Z=E/c,G=Z*(i-t)+t;for(let Y=0;Y<=l;Y++){const lt=Y/l,ht=lt*m+d,k=Math.sin(ht),O=Math.cos(ht);V.x=G*k,V.y=-Z*s+M,V.z=G*O,x.push(V.x,V.y,V.z),U.set(k,I,O).normalize(),g.push(U.x,U.y,U.z),y.push(lt,1-Z),z.push(T++)}w.push(z)}for(let E=0;E<l;E++)for(let z=0;z<c;z++){const Z=w[z][E],G=w[z+1][E],Y=w[z+1][E+1],lt=w[z][E+1];(t>0||z!==0)&&(_.push(Z,G,lt),N+=3),(i>0||z!==c-1)&&(_.push(G,Y,lt),N+=3)}p.addGroup(S,N,0),S+=N}function L(U){const V=T,N=new ne,I=new W;let E=0;const z=U===!0?t:i,Z=U===!0?1:-1;for(let Y=1;Y<=l;Y++)x.push(0,M*Z,0),g.push(0,Z,0),y.push(.5,.5),T++;const G=T;for(let Y=0;Y<=l;Y++){const ht=Y/l*m+d,k=Math.cos(ht),O=Math.sin(ht);I.x=z*O,I.y=M*Z,I.z=z*k,x.push(I.x,I.y,I.z),g.push(0,Z,0),N.x=k*.5+.5,N.y=O*.5*Z+.5,y.push(N.x,N.y),T++}for(let Y=0;Y<l;Y++){const lt=V+Y,ht=G+Y;U===!0?_.push(ht,ht+1,lt):_.push(ht+1,ht,lt),E+=3}p.addGroup(S,E,U===!0?1:2),S+=E}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ri(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Va{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){le("Curve: .getPoint() not implemented.")}getPointAt(t,i){const s=this.getUtoTmapping(t);return this.getPoint(s,i)}getPoints(t=5){const i=[];for(let s=0;s<=t;s++)i.push(this.getPoint(s/t));return i}getSpacedPoints(t=5){const i=[];for(let s=0;s<=t;s++)i.push(this.getPointAt(s/t));return i}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const i=[];let s,l=this.getPoint(0),c=0;i.push(0);for(let h=1;h<=t;h++)s=this.getPoint(h/t),c+=s.distanceTo(l),i.push(c),l=s;return this.cacheArcLengths=i,i}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,i=null){const s=this.getLengths();let l=0;const c=s.length;let h;i?h=i:h=t*s[c-1];let d=0,m=c-1,p;for(;d<=m;)if(l=Math.floor(d+(m-d)/2),p=s[l]-h,p<0)d=l+1;else if(p>0)m=l-1;else{m=l;break}if(l=m,s[l]===h)return l/(c-1);const _=s[l],g=s[l+1]-_,y=(h-_)/g;return(l+y)/(c-1)}getTangent(t,i){let l=t-1e-4,c=t+1e-4;l<0&&(l=0),c>1&&(c=1);const h=this.getPoint(l),d=this.getPoint(c),m=i||(h.isVector2?new ne:new W);return m.copy(d).sub(h).normalize(),m}getTangentAt(t,i){const s=this.getUtoTmapping(t);return this.getTangent(s,i)}computeFrenetFrames(t,i=!1){const s=new W,l=[],c=[],h=[],d=new W,m=new gn;for(let y=0;y<=t;y++){const T=y/t;l[y]=this.getTangentAt(T,new W)}c[0]=new W,h[0]=new W;let p=Number.MAX_VALUE;const _=Math.abs(l[0].x),x=Math.abs(l[0].y),g=Math.abs(l[0].z);_<=p&&(p=_,s.set(1,0,0)),x<=p&&(p=x,s.set(0,1,0)),g<=p&&s.set(0,0,1),d.crossVectors(l[0],s).normalize(),c[0].crossVectors(l[0],d),h[0].crossVectors(l[0],c[0]);for(let y=1;y<=t;y++){if(c[y]=c[y-1].clone(),h[y]=h[y-1].clone(),d.crossVectors(l[y-1],l[y]),d.length()>Number.EPSILON){d.normalize();const T=Math.acos(Se(l[y-1].dot(l[y]),-1,1));c[y].applyMatrix4(m.makeRotationAxis(d,T))}h[y].crossVectors(l[y],c[y])}if(i===!0){let y=Math.acos(Se(c[0].dot(c[t]),-1,1));y/=t,l[0].dot(d.crossVectors(c[0],c[t]))>0&&(y=-y);for(let T=1;T<=t;T++)c[T].applyMatrix4(m.makeRotationAxis(l[T],y*T)),h[T].crossVectors(l[T],c[T])}return{tangents:l,normals:c,binormals:h}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Fv extends Va{constructor(t=0,i=0,s=1,l=1,c=0,h=Math.PI*2,d=!1,m=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=i,this.xRadius=s,this.yRadius=l,this.aStartAngle=c,this.aEndAngle=h,this.aClockwise=d,this.aRotation=m}getPoint(t,i=new ne){const s=i,l=Math.PI*2;let c=this.aEndAngle-this.aStartAngle;const h=Math.abs(c)<Number.EPSILON;for(;c<0;)c+=l;for(;c>l;)c-=l;c<Number.EPSILON&&(h?c=0:c=l),this.aClockwise===!0&&!h&&(c===l?c=-l:c=c-l);const d=this.aStartAngle+t*c;let m=this.aX+this.xRadius*Math.cos(d),p=this.aY+this.yRadius*Math.sin(d);if(this.aRotation!==0){const _=Math.cos(this.aRotation),x=Math.sin(this.aRotation),g=m-this.aX,y=p-this.aY;m=g*_-y*x+this.aX,p=g*x+y*_+this.aY}return s.set(m,p)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class vM extends Fv{constructor(t,i,s,l,c,h){super(t,i,s,s,l,c,h),this.isArcCurve=!0,this.type="ArcCurve"}}function op(){let r=0,t=0,i=0,s=0;function l(c,h,d,m){r=c,t=d,i=-3*c+3*h-2*d-m,s=2*c-2*h+d+m}return{initCatmullRom:function(c,h,d,m,p){l(h,d,p*(d-c),p*(m-h))},initNonuniformCatmullRom:function(c,h,d,m,p,_,x){let g=(h-c)/p-(d-c)/(p+_)+(d-h)/_,y=(d-h)/_-(m-h)/(_+x)+(m-d)/x;g*=_,y*=_,l(h,d,g,y)},calc:function(c){const h=c*c,d=h*c;return r+t*c+i*h+s*d}}}const A_=new W,R_=new W,Bh=new op,Gh=new op,Hh=new op;class Bv extends Va{constructor(t=[],i=!1,s="centripetal",l=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=i,this.curveType=s,this.tension=l}getPoint(t,i=new W){const s=i,l=this.points,c=l.length,h=(c-(this.closed?0:1))*t;let d=Math.floor(h),m=h-d;this.closed?d+=d>0?0:(Math.floor(Math.abs(d)/c)+1)*c:m===0&&d===c-1&&(d=c-2,m=1);let p,_;this.closed||d>0?p=l[(d-1)%c]:(R_.subVectors(l[0],l[1]).add(l[0]),p=R_);const x=l[d%c],g=l[(d+1)%c];if(this.closed||d+2<c?_=l[(d+2)%c]:(A_.subVectors(l[c-1],l[c-2]).add(l[c-1]),_=A_),this.curveType==="centripetal"||this.curveType==="chordal"){const y=this.curveType==="chordal"?.5:.25;let T=Math.pow(p.distanceToSquared(x),y),w=Math.pow(x.distanceToSquared(g),y),M=Math.pow(g.distanceToSquared(_),y);w<1e-4&&(w=1),T<1e-4&&(T=w),M<1e-4&&(M=w),Bh.initNonuniformCatmullRom(p.x,x.x,g.x,_.x,T,w,M),Gh.initNonuniformCatmullRom(p.y,x.y,g.y,_.y,T,w,M),Hh.initNonuniformCatmullRom(p.z,x.z,g.z,_.z,T,w,M)}else this.curveType==="catmullrom"&&(Bh.initCatmullRom(p.x,x.x,g.x,_.x,this.tension),Gh.initCatmullRom(p.y,x.y,g.y,_.y,this.tension),Hh.initCatmullRom(p.z,x.z,g.z,_.z,this.tension));return s.set(Bh.calc(m),Gh.calc(m),Hh.calc(m)),s}copy(t){super.copy(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(l.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let i=0,s=this.points.length;i<s;i++){const l=this.points[i];t.points.push(l.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(new W().fromArray(l))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function C_(r,t,i,s,l){const c=(s-t)*.5,h=(l-i)*.5,d=r*r,m=r*d;return(2*i-2*s+c+h)*m+(-3*i+3*s-2*c-h)*d+c*r+i}function xM(r,t){const i=1-r;return i*i*t}function SM(r,t){return 2*(1-r)*r*t}function yM(r,t){return r*r*t}function $o(r,t,i,s){return xM(r,t)+SM(r,i)+yM(r,s)}function MM(r,t){const i=1-r;return i*i*i*t}function bM(r,t){const i=1-r;return 3*i*i*r*t}function EM(r,t){return 3*(1-r)*r*r*t}function TM(r,t){return r*r*r*t}function tl(r,t,i,s,l){return MM(r,t)+bM(r,i)+EM(r,s)+TM(r,l)}class AM extends Va{constructor(t=new ne,i=new ne,s=new ne,l=new ne){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=i,this.v2=s,this.v3=l}getPoint(t,i=new ne){const s=i,l=this.v0,c=this.v1,h=this.v2,d=this.v3;return s.set(tl(t,l.x,c.x,h.x,d.x),tl(t,l.y,c.y,h.y,d.y)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class RM extends Va{constructor(t=new W,i=new W,s=new W,l=new W){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=i,this.v2=s,this.v3=l}getPoint(t,i=new W){const s=i,l=this.v0,c=this.v1,h=this.v2,d=this.v3;return s.set(tl(t,l.x,c.x,h.x,d.x),tl(t,l.y,c.y,h.y,d.y),tl(t,l.z,c.z,h.z,d.z)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class CM extends Va{constructor(t=new ne,i=new ne){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=i}getPoint(t,i=new ne){const s=i;return t===1?s.copy(this.v2):(s.copy(this.v2).sub(this.v1),s.multiplyScalar(t).add(this.v1)),s}getPointAt(t,i){return this.getPoint(t,i)}getTangent(t,i=new ne){return i.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,i){return this.getTangent(t,i)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class wM extends Va{constructor(t=new W,i=new W){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=i}getPoint(t,i=new W){const s=i;return t===1?s.copy(this.v2):(s.copy(this.v2).sub(this.v1),s.multiplyScalar(t).add(this.v1)),s}getPointAt(t,i){return this.getPoint(t,i)}getTangent(t,i=new W){return i.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,i){return this.getTangent(t,i)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class DM extends Va{constructor(t=new ne,i=new ne,s=new ne){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=i,this.v2=s}getPoint(t,i=new ne){const s=i,l=this.v0,c=this.v1,h=this.v2;return s.set($o(t,l.x,c.x,h.x),$o(t,l.y,c.y,h.y)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Gv extends Va{constructor(t=new W,i=new W,s=new W){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=i,this.v2=s}getPoint(t,i=new W){const s=i,l=this.v0,c=this.v1,h=this.v2;return s.set($o(t,l.x,c.x,h.x),$o(t,l.y,c.y,h.y),$o(t,l.z,c.z,h.z)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class NM extends Va{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,i=new ne){const s=i,l=this.points,c=(l.length-1)*t,h=Math.floor(c),d=c-h,m=l[h===0?h:h-1],p=l[h],_=l[h>l.length-2?l.length-1:h+1],x=l[h>l.length-3?l.length-1:h+2];return s.set(C_(d,m.x,p.x,_.x,x.x),C_(d,m.y,p.y,_.y,x.y)),s}copy(t){super.copy(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(l.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let i=0,s=this.points.length;i<s;i++){const l=this.points[i];t.points.push(l.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(new ne().fromArray(l))}return this}}var UM=Object.freeze({__proto__:null,ArcCurve:vM,CatmullRomCurve3:Bv,CubicBezierCurve:AM,CubicBezierCurve3:RM,EllipseCurve:Fv,LineCurve:CM,LineCurve3:wM,QuadraticBezierCurve:DM,QuadraticBezierCurve3:Gv,SplineCurve:NM});class Kc extends hi{constructor(t=[new ne(0,-.5),new ne(.5,0),new ne(0,.5)],i=12,s=0,l=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:i,phiStart:s,phiLength:l},i=Math.floor(i),l=Se(l,0,Math.PI*2);const c=[],h=[],d=[],m=[],p=[],_=1/i,x=new W,g=new ne,y=new W,T=new W,w=new W;let M=0,S=0;for(let C=0;C<=t.length-1;C++)switch(C){case 0:M=t[C+1].x-t[C].x,S=t[C+1].y-t[C].y,y.x=S*1,y.y=-M,y.z=S*0,w.copy(y),y.normalize(),m.push(y.x,y.y,y.z);break;case t.length-1:m.push(w.x,w.y,w.z);break;default:M=t[C+1].x-t[C].x,S=t[C+1].y-t[C].y,y.x=S*1,y.y=-M,y.z=S*0,T.copy(y),y.x+=w.x,y.y+=w.y,y.z+=w.z,y.normalize(),m.push(y.x,y.y,y.z),w.copy(T)}for(let C=0;C<=i;C++){const L=s+C*_*l,U=Math.sin(L),V=Math.cos(L);for(let N=0;N<=t.length-1;N++){x.x=t[N].x*U,x.y=t[N].y,x.z=t[N].x*V,h.push(x.x,x.y,x.z),g.x=C/i,g.y=N/(t.length-1),d.push(g.x,g.y);const I=m[3*N+0]*U,E=m[3*N+1],z=m[3*N+0]*V;p.push(I,E,z)}}for(let C=0;C<i;C++)for(let L=0;L<t.length-1;L++){const U=L+C*t.length,V=U,N=U+t.length,I=U+t.length+1,E=U+1;c.push(V,N,E),c.push(I,E,N)}this.setIndex(c),this.setAttribute("position",new hn(h,3)),this.setAttribute("uv",new hn(d,2)),this.setAttribute("normal",new hn(p,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Kc(t.points,t.segments,t.phiStart,t.phiLength)}}class ll extends hi{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,h=i/2,d=Math.floor(s),m=Math.floor(l),p=d+1,_=m+1,x=t/d,g=i/m,y=[],T=[],w=[],M=[];for(let S=0;S<_;S++){const C=S*g-h;for(let L=0;L<p;L++){const U=L*x-c;T.push(U,-C,0),w.push(0,0,1),M.push(L/d),M.push(1-S/m)}}for(let S=0;S<m;S++)for(let C=0;C<d;C++){const L=C+p*S,U=C+p*(S+1),V=C+1+p*(S+1),N=C+1+p*S;y.push(L,U,N),y.push(U,V,N)}this.setIndex(y),this.setAttribute("position",new hn(T,3)),this.setAttribute("normal",new hn(w,3)),this.setAttribute("uv",new hn(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ll(t.width,t.height,t.widthSegments,t.heightSegments)}}class el extends hi{constructor(t=1,i=32,s=16,l=0,c=Math.PI*2,h=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:h,thetaLength:d},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const m=Math.min(h+d,Math.PI);let p=0;const _=[],x=new W,g=new W,y=[],T=[],w=[],M=[];for(let S=0;S<=s;S++){const C=[],L=S/s;let U=0;S===0&&h===0?U=.5/i:S===s&&m===Math.PI&&(U=-.5/i);for(let V=0;V<=i;V++){const N=V/i;x.x=-t*Math.cos(l+N*c)*Math.sin(h+L*d),x.y=t*Math.cos(h+L*d),x.z=t*Math.sin(l+N*c)*Math.sin(h+L*d),T.push(x.x,x.y,x.z),g.copy(x).normalize(),w.push(g.x,g.y,g.z),M.push(N+U,1-L),C.push(p++)}_.push(C)}for(let S=0;S<s;S++)for(let C=0;C<i;C++){const L=_[S][C+1],U=_[S][C],V=_[S+1][C],N=_[S+1][C+1];(S!==0||h>0)&&y.push(L,U,N),(S!==s-1||m<Math.PI)&&y.push(U,V,N)}this.setIndex(y),this.setAttribute("position",new hn(T,3)),this.setAttribute("normal",new hn(w,3)),this.setAttribute("uv",new hn(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new el(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class lp extends hi{constructor(t=1,i=.4,s=12,l=48,c=Math.PI*2,h=0,d=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:i,radialSegments:s,tubularSegments:l,arc:c,thetaStart:h,thetaLength:d},s=Math.floor(s),l=Math.floor(l);const m=[],p=[],_=[],x=[],g=new W,y=new W,T=new W;for(let w=0;w<=s;w++){const M=h+w/s*d;for(let S=0;S<=l;S++){const C=S/l*c;y.x=(t+i*Math.cos(M))*Math.cos(C),y.y=(t+i*Math.cos(M))*Math.sin(C),y.z=i*Math.sin(M),p.push(y.x,y.y,y.z),g.x=t*Math.cos(C),g.y=t*Math.sin(C),T.subVectors(y,g).normalize(),_.push(T.x,T.y,T.z),x.push(S/l),x.push(w/s)}}for(let w=1;w<=s;w++)for(let M=1;M<=l;M++){const S=(l+1)*w+M-1,C=(l+1)*(w-1)+M-1,L=(l+1)*(w-1)+M,U=(l+1)*w+M;m.push(S,C,U),m.push(C,L,U)}this.setIndex(m),this.setAttribute("position",new hn(p,3)),this.setAttribute("normal",new hn(_,3)),this.setAttribute("uv",new hn(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new lp(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Qc extends hi{constructor(t=new Gv(new W(-1,-1,0),new W(-1,1,0),new W(1,1,0)),i=64,s=1,l=8,c=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:i,radius:s,radialSegments:l,closed:c};const h=t.computeFrenetFrames(i,c);this.tangents=h.tangents,this.normals=h.normals,this.binormals=h.binormals;const d=new W,m=new W,p=new ne;let _=new W;const x=[],g=[],y=[],T=[];w(),this.setIndex(T),this.setAttribute("position",new hn(x,3)),this.setAttribute("normal",new hn(g,3)),this.setAttribute("uv",new hn(y,2));function w(){for(let L=0;L<i;L++)M(L);M(c===!1?i:0),C(),S()}function M(L){_=t.getPointAt(L/i,_);const U=h.normals[L],V=h.binormals[L];for(let N=0;N<=l;N++){const I=N/l*Math.PI*2,E=Math.sin(I),z=-Math.cos(I);m.x=z*U.x+E*V.x,m.y=z*U.y+E*V.y,m.z=z*U.z+E*V.z,m.normalize(),g.push(m.x,m.y,m.z),d.x=_.x+s*m.x,d.y=_.y+s*m.y,d.z=_.z+s*m.z,x.push(d.x,d.y,d.z)}}function S(){for(let L=1;L<=i;L++)for(let U=1;U<=l;U++){const V=(l+1)*(L-1)+(U-1),N=(l+1)*L+(U-1),I=(l+1)*L+U,E=(l+1)*(L-1)+U;T.push(V,N,E),T.push(N,I,E)}}function C(){for(let L=0;L<=i;L++)for(let U=0;U<=l;U++)p.x=L/i,p.y=U/l,y.push(p.x,p.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Qc(new UM[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}function Kr(r){const t={};for(const i in r){t[i]={};for(const s in r[i]){const l=r[i][s];if(w_(l))l.isRenderTargetTexture?(le("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone();else if(Array.isArray(l))if(w_(l[0])){const c=[];for(let h=0,d=l.length;h<d;h++)c[h]=l[h].clone();t[i][s]=c}else t[i][s]=l.slice();else t[i][s]=l}}return t}function ni(r){const t={};for(let i=0;i<r.length;i++){const s=Kr(r[i]);for(const l in s)t[l]=s[l]}return t}function w_(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function LM(r){const t=[];for(let i=0;i<r.length;i++)t.push(r[i].clone());return t}function Hv(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ce.workingColorSpace}const OM={clone:Kr,merge:ni};var PM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class da extends ol{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=PM,this.fragmentShader=zM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Kr(t.uniforms),this.uniformsGroups=LM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class IM extends da{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ei extends ol{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bd,this.normalScale=new ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bs,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class FM extends ei{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ne(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Se(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(i){this.ior=(1+.4*i)/(1-.4*i)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new xe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new xe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new xe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class BM extends ol{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Oy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class GM extends ol{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class cp extends Jn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new xe(t),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const Vh=new gn,D_=new W,N_=new W;class Vv{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ne(512,512),this.mapType=wi,this.map=null,this.mapPass=null,this.matrix=new gn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new rp,this._frameExtents=new ne(1,1),this._viewportCount=1,this._viewports=[new Sn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;D_.setFromMatrixPosition(t.matrixWorld),i.position.copy(D_),N_.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(N_),i.updateMatrixWorld(),Vh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vh,i.coordinateSystem,i.reversedDepth),i.coordinateSystem===al||i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Vh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Pc=new W,zc=new Qr,ia=new W;class kv extends Jn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new gn,this.projectionMatrix=new gn,this.projectionMatrixInverse=new gn,this.coordinateSystem=la,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Pc,zc,ia),ia.x===1&&ia.y===1&&ia.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Pc,zc,ia.set(1,1,1)).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorld.decompose(Pc,zc,ia),ia.x===1&&ia.y===1&&ia.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Pc,zc,ia.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const vs=new W,U_=new ne,L_=new ne;class Ci extends kv{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Hd*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(mh*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Hd*2*Math.atan(Math.tan(mh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){vs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(vs.x,vs.y).multiplyScalar(-t/vs.z),vs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(vs.x,vs.y).multiplyScalar(-t/vs.z)}getViewSize(t,i){return this.getViewBounds(t,U_,L_),i.subVectors(L_,U_)}setViewOffset(t,i,s,l,c,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(mh*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;c+=h.offsetX*l/m,i-=h.offsetY*s/p,l*=h.width/m,s*=h.height/p}const d=this.filmOffset;d!==0&&(c+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class HM extends Vv{constructor(){super(new Ci(90,1,.5,500)),this.isPointLightShadow=!0}}class VM extends cp{constructor(t,i,s=0,l=2){super(t,i),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new HM}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.distance=this.distance,i.object.decay=this.decay,i.object.shadow=this.shadow.toJSON(),i}}class up extends kv{constructor(t=-1,i=1,s=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,h=s+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,h=c+p*this.view.width,d-=_*this.view.offsetY,m=d-_*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class kM extends Vv{constructor(){super(new up(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class O_ extends cp{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Jn.DEFAULT_UP),this.updateMatrix(),this.target=new Jn,this.shadow=new kM}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}class XM extends cp{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}const Hr=-90,Vr=1;class WM extends Jn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Ci(Hr,Vr,t,i);l.layers=this.layers,this.add(l);const c=new Ci(Hr,Vr,t,i);c.layers=this.layers,this.add(c);const h=new Ci(Hr,Vr,t,i);h.layers=this.layers,this.add(h);const d=new Ci(Hr,Vr,t,i);d.layers=this.layers,this.add(d);const m=new Ci(Hr,Vr,t,i);m.layers=this.layers,this.add(m);const p=new Ci(Hr,Vr,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,h,d,m]=i;for(const p of i)this.remove(p);if(t===la)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===al)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,h,d,m,p,_]=this.children,x=t.getRenderTarget(),g=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),T=t.xr.enabled;t.xr.enabled=!1;const w=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let M=!1;t.isWebGLRenderer===!0?M=t.state.buffers.depth.getReversed():M=t.reversedDepthBuffer,t.setRenderTarget(s,0,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,c),t.setRenderTarget(s,1,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,h),t.setRenderTarget(s,2,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,d),t.setRenderTarget(s,3,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,m),t.setRenderTarget(s,4,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,p),s.texture.generateMipmaps=w,t.setRenderTarget(s,5,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,_),t.setRenderTarget(x,g,y),t.xr.enabled=T,s.texture.needsPMREMUpdate=!0}}class qM extends Ci{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const P_=new gn;class YM{constructor(t,i,s=0,l=1/0){this.ray=new Pv(t,i),this.near=s,this.far=l,this.camera=null,this.layers=new ip,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,i){this.ray.set(t,i)}setFromCamera(t,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):De("Raycaster: Unsupported camera type: "+i.type)}setFromXRController(t){return P_.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(P_),this}intersectObject(t,i=!0,s=[]){return Vd(t,this,s,i),s.sort(z_),s}intersectObjects(t,i=!0,s=[]){for(let l=0,c=t.length;l<c;l++)Vd(t[l],this,s,i);return s.sort(z_),s}}function z_(r,t){return r.distance-t.distance}function Vd(r,t,i,s){let l=!0;if(r.layers.test(t.layers)&&r.raycast(t,i)===!1&&(l=!1),l===!0&&s===!0){const c=r.children;for(let h=0,d=c.length;h<d;h++)Vd(c[h],t,i,!0)}}const mp=class mp{constructor(t,i,s,l){this.elements=[1,0,0,1],t!==void 0&&this.set(t,i,s,l)}identity(){return this.set(1,0,0,1),this}fromArray(t,i=0){for(let s=0;s<4;s++)this.elements[s]=t[s+i];return this}set(t,i,s,l){const c=this.elements;return c[0]=t,c[2]=i,c[1]=s,c[3]=l,this}};mp.prototype.isMatrix2=!0;let I_=mp;function F_(r,t,i,s){const l=jM(s);switch(i){case Rv:return r*t;case wv:return r*t/l.components*l.byteLength;case Qd:return r*t/l.components*l.byteLength;case Qs:return r*t*2/l.components*l.byteLength;case Jd:return r*t*2/l.components*l.byteLength;case Cv:return r*t*3/l.components*l.byteLength;case Qi:return r*t*4/l.components*l.byteLength;case $d:return r*t*4/l.components*l.byteLength;case Gc:case Hc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Vc:case kc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case ud:case hd:return Math.max(r,16)*Math.max(t,8)/4;case cd:case fd:return Math.max(r,8)*Math.max(t,8)/2;case dd:case pd:case gd:case _d:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case md:case Wc:case vd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case xd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Sd:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case yd:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Md:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case bd:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Ed:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Td:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Ad:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Rd:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Cd:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case wd:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Dd:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Nd:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Ud:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Ld:case Od:case Pd:return Math.ceil(r/4)*Math.ceil(t/4)*16;case zd:case Id:return Math.ceil(r/4)*Math.ceil(t/4)*8;case qc:case Fd:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function jM(r){switch(r){case wi:case bv:return{byteLength:1,components:1};case nl:case Ev:case Ga:return{byteLength:2,components:1};case Zd:case Kd:return{byteLength:2,components:4};case ha:case jd:case oa:return{byteLength:4,components:1};case Tv:case Av:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qd}}));typeof window<"u"&&(window.__THREE__?le("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qd);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Xv(){let r=null,t=!1,i=null,s=null;function l(c,h){i(c,h),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&r!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function ZM(r){const t=new WeakMap;function i(d,m){const p=d.array,_=d.usage,x=p.byteLength,g=r.createBuffer();r.bindBuffer(m,g),r.bufferData(m,p,_),d.onUploadCallback();let y;if(p instanceof Float32Array)y=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)y=r.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?y=r.HALF_FLOAT:y=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=r.SHORT;else if(p instanceof Uint32Array)y=r.UNSIGNED_INT;else if(p instanceof Int32Array)y=r.INT;else if(p instanceof Int8Array)y=r.BYTE;else if(p instanceof Uint8Array)y=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:g,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:x}}function s(d,m,p){const _=m.array,x=m.updateRanges;if(r.bindBuffer(p,d),x.length===0)r.bufferSubData(p,0,_);else{x.sort((y,T)=>y.start-T.start);let g=0;for(let y=1;y<x.length;y++){const T=x[g],w=x[y];w.start<=T.start+T.count+1?T.count=Math.max(T.count,w.start+w.count-T.start):(++g,x[g]=w)}x.length=g+1;for(let y=0,T=x.length;y<T;y++){const w=x[y];r.bufferSubData(p,w.start*_.BYTES_PER_ELEMENT,_,w.start,w.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(r.deleteBuffer(m.buffer),t.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=t.get(d);(!_||_.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:h}}var KM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,QM=`#ifdef USE_ALPHAHASH
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
#endif`,JM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$M=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,t1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,e1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,n1=`#ifdef USE_AOMAP
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
#endif`,i1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,a1=`#ifdef USE_BATCHING
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
#endif`,s1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,r1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,o1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,l1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,c1=`#ifdef USE_IRIDESCENCE
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
#endif`,u1=`#ifdef USE_BUMPMAP
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
#endif`,f1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,h1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,d1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,p1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,m1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,g1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,_1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,v1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,x1=`#define PI 3.141592653589793
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
} // validated`,S1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,y1=`vec3 transformedNormal = objectNormal;
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
#endif`,M1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,b1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,E1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,T1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,A1="gl_FragColor = linearToOutputTexel( gl_FragColor );",R1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,C1=`#ifdef USE_ENVMAP
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
#endif`,w1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,D1=`#ifdef USE_ENVMAP
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
#endif`,N1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,U1=`#ifdef USE_ENVMAP
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
#endif`,L1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,O1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,P1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,z1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,I1=`#ifdef USE_GRADIENTMAP
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
}`,F1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,B1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,G1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,H1=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,V1=`#ifdef USE_ENVMAP
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
#endif`,k1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,X1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,W1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,q1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Y1=`PhysicalMaterial material;
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
#endif`,j1=`uniform sampler2D dfgLUT;
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
}`,Z1=`
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
#endif`,K1=`#if defined( RE_IndirectDiffuse )
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
#endif`,Q1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,J1=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,$1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,eb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ib=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ab=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,rb=`#if defined( USE_POINTS_UV )
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
#endif`,ob=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ub=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hb=`#ifdef USE_MORPHTARGETS
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
#endif`,db=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,mb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,gb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_b=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,xb=`#ifdef USE_NORMALMAP
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
#endif`,Sb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,yb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Mb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Eb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Tb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ab=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Rb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Cb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Db=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Nb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ub=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Lb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ob=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Pb=`float getShadowMask() {
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
}`,zb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ib=`#ifdef USE_SKINNING
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
#endif`,Fb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Bb=`#ifdef USE_SKINNING
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
#endif`,Gb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Hb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Vb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Xb=`#ifdef USE_TRANSMISSION
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
#endif`,Wb=`#ifdef USE_TRANSMISSION
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
#endif`,qb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Kb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Qb=`uniform sampler2D t2D;
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
}`,Jb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$b=`#ifdef ENVMAP_TYPE_CUBE
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
}`,tE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nE=`#include <common>
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
}`,iE=`#if DEPTH_PACKING == 3200
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
}`,aE=`#define DISTANCE
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
}`,sE=`#define DISTANCE
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
}`,rE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,oE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lE=`uniform float scale;
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
}`,cE=`uniform vec3 diffuse;
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
}`,uE=`#include <common>
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
}`,fE=`uniform vec3 diffuse;
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
}`,hE=`#define LAMBERT
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
}`,dE=`#define LAMBERT
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
}`,pE=`#define MATCAP
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
}`,mE=`#define MATCAP
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
}`,gE=`#define NORMAL
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
}`,_E=`#define NORMAL
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
}`,vE=`#define PHONG
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
}`,xE=`#define PHONG
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
}`,SE=`#define STANDARD
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
}`,yE=`#define STANDARD
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
}`,ME=`#define TOON
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
}`,bE=`#define TOON
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
}`,EE=`uniform float size;
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
}`,TE=`uniform vec3 diffuse;
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
}`,AE=`#include <common>
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
}`,RE=`uniform vec3 color;
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
}`,CE=`uniform float rotation;
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
}`,wE=`uniform vec3 diffuse;
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
}`,ve={alphahash_fragment:KM,alphahash_pars_fragment:QM,alphamap_fragment:JM,alphamap_pars_fragment:$M,alphatest_fragment:t1,alphatest_pars_fragment:e1,aomap_fragment:n1,aomap_pars_fragment:i1,batching_pars_vertex:a1,batching_vertex:s1,begin_vertex:r1,beginnormal_vertex:o1,bsdfs:l1,iridescence_fragment:c1,bumpmap_pars_fragment:u1,clipping_planes_fragment:f1,clipping_planes_pars_fragment:h1,clipping_planes_pars_vertex:d1,clipping_planes_vertex:p1,color_fragment:m1,color_pars_fragment:g1,color_pars_vertex:_1,color_vertex:v1,common:x1,cube_uv_reflection_fragment:S1,defaultnormal_vertex:y1,displacementmap_pars_vertex:M1,displacementmap_vertex:b1,emissivemap_fragment:E1,emissivemap_pars_fragment:T1,colorspace_fragment:A1,colorspace_pars_fragment:R1,envmap_fragment:C1,envmap_common_pars_fragment:w1,envmap_pars_fragment:D1,envmap_pars_vertex:N1,envmap_physical_pars_fragment:V1,envmap_vertex:U1,fog_vertex:L1,fog_pars_vertex:O1,fog_fragment:P1,fog_pars_fragment:z1,gradientmap_pars_fragment:I1,lightmap_pars_fragment:F1,lights_lambert_fragment:B1,lights_lambert_pars_fragment:G1,lights_pars_begin:H1,lights_toon_fragment:k1,lights_toon_pars_fragment:X1,lights_phong_fragment:W1,lights_phong_pars_fragment:q1,lights_physical_fragment:Y1,lights_physical_pars_fragment:j1,lights_fragment_begin:Z1,lights_fragment_maps:K1,lights_fragment_end:Q1,lightprobes_pars_fragment:J1,logdepthbuf_fragment:$1,logdepthbuf_pars_fragment:tb,logdepthbuf_pars_vertex:eb,logdepthbuf_vertex:nb,map_fragment:ib,map_pars_fragment:ab,map_particle_fragment:sb,map_particle_pars_fragment:rb,metalnessmap_fragment:ob,metalnessmap_pars_fragment:lb,morphinstance_vertex:cb,morphcolor_vertex:ub,morphnormal_vertex:fb,morphtarget_pars_vertex:hb,morphtarget_vertex:db,normal_fragment_begin:pb,normal_fragment_maps:mb,normal_pars_fragment:gb,normal_pars_vertex:_b,normal_vertex:vb,normalmap_pars_fragment:xb,clearcoat_normal_fragment_begin:Sb,clearcoat_normal_fragment_maps:yb,clearcoat_pars_fragment:Mb,iridescence_pars_fragment:bb,opaque_fragment:Eb,packing:Tb,premultiplied_alpha_fragment:Ab,project_vertex:Rb,dithering_fragment:Cb,dithering_pars_fragment:wb,roughnessmap_fragment:Db,roughnessmap_pars_fragment:Nb,shadowmap_pars_fragment:Ub,shadowmap_pars_vertex:Lb,shadowmap_vertex:Ob,shadowmask_pars_fragment:Pb,skinbase_vertex:zb,skinning_pars_vertex:Ib,skinning_vertex:Fb,skinnormal_vertex:Bb,specularmap_fragment:Gb,specularmap_pars_fragment:Hb,tonemapping_fragment:Vb,tonemapping_pars_fragment:kb,transmission_fragment:Xb,transmission_pars_fragment:Wb,uv_pars_fragment:qb,uv_pars_vertex:Yb,uv_vertex:jb,worldpos_vertex:Zb,background_vert:Kb,background_frag:Qb,backgroundCube_vert:Jb,backgroundCube_frag:$b,cube_vert:tE,cube_frag:eE,depth_vert:nE,depth_frag:iE,distance_vert:aE,distance_frag:sE,equirect_vert:rE,equirect_frag:oE,linedashed_vert:lE,linedashed_frag:cE,meshbasic_vert:uE,meshbasic_frag:fE,meshlambert_vert:hE,meshlambert_frag:dE,meshmatcap_vert:pE,meshmatcap_frag:mE,meshnormal_vert:gE,meshnormal_frag:_E,meshphong_vert:vE,meshphong_frag:xE,meshphysical_vert:SE,meshphysical_frag:yE,meshtoon_vert:ME,meshtoon_frag:bE,points_vert:EE,points_frag:TE,shadow_vert:AE,shadow_frag:RE,sprite_vert:CE,sprite_frag:wE},Gt={common:{diffuse:{value:new xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new he}},envmap:{envMap:{value:null},envMapRotation:{value:new he},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new he}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new he}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new he},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new he},normalScale:{value:new ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new he},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new he}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new he}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new he}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new W},probesMax:{value:new W},probesResolution:{value:new W}},points:{diffuse:{value:new xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0},uvTransform:{value:new he}},sprite:{diffuse:{value:new xe(16777215)},opacity:{value:1},center:{value:new ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}}},sa={basic:{uniforms:ni([Gt.common,Gt.specularmap,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.fog]),vertexShader:ve.meshbasic_vert,fragmentShader:ve.meshbasic_frag},lambert:{uniforms:ni([Gt.common,Gt.specularmap,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.fog,Gt.lights,{emissive:{value:new xe(0)},envMapIntensity:{value:1}}]),vertexShader:ve.meshlambert_vert,fragmentShader:ve.meshlambert_frag},phong:{uniforms:ni([Gt.common,Gt.specularmap,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.fog,Gt.lights,{emissive:{value:new xe(0)},specular:{value:new xe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ve.meshphong_vert,fragmentShader:ve.meshphong_frag},standard:{uniforms:ni([Gt.common,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.roughnessmap,Gt.metalnessmap,Gt.fog,Gt.lights,{emissive:{value:new xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ve.meshphysical_vert,fragmentShader:ve.meshphysical_frag},toon:{uniforms:ni([Gt.common,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.gradientmap,Gt.fog,Gt.lights,{emissive:{value:new xe(0)}}]),vertexShader:ve.meshtoon_vert,fragmentShader:ve.meshtoon_frag},matcap:{uniforms:ni([Gt.common,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.fog,{matcap:{value:null}}]),vertexShader:ve.meshmatcap_vert,fragmentShader:ve.meshmatcap_frag},points:{uniforms:ni([Gt.points,Gt.fog]),vertexShader:ve.points_vert,fragmentShader:ve.points_frag},dashed:{uniforms:ni([Gt.common,Gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ve.linedashed_vert,fragmentShader:ve.linedashed_frag},depth:{uniforms:ni([Gt.common,Gt.displacementmap]),vertexShader:ve.depth_vert,fragmentShader:ve.depth_frag},normal:{uniforms:ni([Gt.common,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,{opacity:{value:1}}]),vertexShader:ve.meshnormal_vert,fragmentShader:ve.meshnormal_frag},sprite:{uniforms:ni([Gt.sprite,Gt.fog]),vertexShader:ve.sprite_vert,fragmentShader:ve.sprite_frag},background:{uniforms:{uvTransform:{value:new he},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ve.background_vert,fragmentShader:ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new he}},vertexShader:ve.backgroundCube_vert,fragmentShader:ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ve.cube_vert,fragmentShader:ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ve.equirect_vert,fragmentShader:ve.equirect_frag},distance:{uniforms:ni([Gt.common,Gt.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ve.distance_vert,fragmentShader:ve.distance_frag},shadow:{uniforms:ni([Gt.lights,Gt.fog,{color:{value:new xe(0)},opacity:{value:1}}]),vertexShader:ve.shadow_vert,fragmentShader:ve.shadow_frag}};sa.physical={uniforms:ni([sa.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new he},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new he},clearcoatNormalScale:{value:new ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new he},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new he},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new he},sheen:{value:0},sheenColor:{value:new xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new he},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new he},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new he},transmissionSamplerSize:{value:new ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new he},attenuationDistance:{value:0},attenuationColor:{value:new xe(0)},specularColor:{value:new xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new he},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new he},anisotropyVector:{value:new ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new he}}]),vertexShader:ve.meshphysical_vert,fragmentShader:ve.meshphysical_frag};const Ic={r:0,b:0,g:0},DE=new gn,Wv=new he;Wv.set(-1,0,0,0,1,0,0,0,1);function NE(r,t,i,s,l,c){const h=new xe(0);let d=l===!0?0:1,m,p,_=null,x=0,g=null;function y(C){let L=C.isScene===!0?C.background:null;if(L&&L.isTexture){const U=C.backgroundBlurriness>0;L=t.get(L,U)}return L}function T(C){let L=!1;const U=y(C);U===null?M(h,d):U&&U.isColor&&(M(U,1),L=!0);const V=r.xr.getEnvironmentBlendMode();V==="additive"?i.buffers.color.setClear(0,0,0,1,c):V==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(r.autoClear||L)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function w(C,L){const U=y(L);U&&(U.isCubeTexture||U.mapping===$c)?(p===void 0&&(p=new we(new ys(1,1,1),new da({name:"BackgroundCubeMaterial",uniforms:Kr(sa.backgroundCube.uniforms),vertexShader:sa.backgroundCube.vertexShader,fragmentShader:sa.backgroundCube.fragmentShader,side:ii,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(V,N,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(p)),p.material.uniforms.envMap.value=U,p.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(DE.makeRotationFromEuler(L.backgroundRotation)).transpose(),U.isCubeTexture&&U.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(Wv),p.material.toneMapped=Ce.getTransfer(U.colorSpace)!==Ye,(_!==U||x!==U.version||g!==r.toneMapping)&&(p.material.needsUpdate=!0,_=U,x=U.version,g=r.toneMapping),p.layers.enableAll(),C.unshift(p,p.geometry,p.material,0,0,null)):U&&U.isTexture&&(m===void 0&&(m=new we(new ll(2,2),new da({name:"BackgroundMaterial",uniforms:Kr(sa.background.uniforms),vertexShader:sa.background.vertexShader,fragmentShader:sa.background.fragmentShader,side:Ms,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=U,m.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,m.material.toneMapped=Ce.getTransfer(U.colorSpace)!==Ye,U.matrixAutoUpdate===!0&&U.updateMatrix(),m.material.uniforms.uvTransform.value.copy(U.matrix),(_!==U||x!==U.version||g!==r.toneMapping)&&(m.material.needsUpdate=!0,_=U,x=U.version,g=r.toneMapping),m.layers.enableAll(),C.unshift(m,m.geometry,m.material,0,0,null))}function M(C,L){C.getRGB(Ic,Hv(r)),i.buffers.color.setClear(Ic.r,Ic.g,Ic.b,L,c)}function S(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return h},setClearColor:function(C,L=1){h.set(C),d=L,M(h,d)},getClearAlpha:function(){return d},setClearAlpha:function(C){d=C,M(h,d)},render:T,addToRenderList:w,dispose:S}}function UE(r,t){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=g(null);let c=l,h=!1;function d(G,Y,lt,ht,k){let O=!1;const F=x(G,ht,lt,Y);c!==F&&(c=F,p(c.object)),O=y(G,ht,lt,k),O&&T(G,ht,lt,k),k!==null&&t.update(k,r.ELEMENT_ARRAY_BUFFER),(O||h)&&(h=!1,U(G,Y,lt,ht),k!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function m(){return r.createVertexArray()}function p(G){return r.bindVertexArray(G)}function _(G){return r.deleteVertexArray(G)}function x(G,Y,lt,ht){const k=ht.wireframe===!0;let O=s[Y.id];O===void 0&&(O={},s[Y.id]=O);const F=G.isInstancedMesh===!0?G.id:0;let st=O[F];st===void 0&&(st={},O[F]=st);let _t=st[lt.id];_t===void 0&&(_t={},st[lt.id]=_t);let Mt=_t[k];return Mt===void 0&&(Mt=g(m()),_t[k]=Mt),Mt}function g(G){const Y=[],lt=[],ht=[];for(let k=0;k<i;k++)Y[k]=0,lt[k]=0,ht[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Y,enabledAttributes:lt,attributeDivisors:ht,object:G,attributes:{},index:null}}function y(G,Y,lt,ht){const k=c.attributes,O=Y.attributes;let F=0;const st=lt.getAttributes();for(const _t in st)if(st[_t].location>=0){const P=k[_t];let J=O[_t];if(J===void 0&&(_t==="instanceMatrix"&&G.instanceMatrix&&(J=G.instanceMatrix),_t==="instanceColor"&&G.instanceColor&&(J=G.instanceColor)),P===void 0||P.attribute!==J||J&&P.data!==J.data)return!0;F++}return c.attributesNum!==F||c.index!==ht}function T(G,Y,lt,ht){const k={},O=Y.attributes;let F=0;const st=lt.getAttributes();for(const _t in st)if(st[_t].location>=0){let P=O[_t];P===void 0&&(_t==="instanceMatrix"&&G.instanceMatrix&&(P=G.instanceMatrix),_t==="instanceColor"&&G.instanceColor&&(P=G.instanceColor));const J={};J.attribute=P,P&&P.data&&(J.data=P.data),k[_t]=J,F++}c.attributes=k,c.attributesNum=F,c.index=ht}function w(){const G=c.newAttributes;for(let Y=0,lt=G.length;Y<lt;Y++)G[Y]=0}function M(G){S(G,0)}function S(G,Y){const lt=c.newAttributes,ht=c.enabledAttributes,k=c.attributeDivisors;lt[G]=1,ht[G]===0&&(r.enableVertexAttribArray(G),ht[G]=1),k[G]!==Y&&(r.vertexAttribDivisor(G,Y),k[G]=Y)}function C(){const G=c.newAttributes,Y=c.enabledAttributes;for(let lt=0,ht=Y.length;lt<ht;lt++)Y[lt]!==G[lt]&&(r.disableVertexAttribArray(lt),Y[lt]=0)}function L(G,Y,lt,ht,k,O,F){F===!0?r.vertexAttribIPointer(G,Y,lt,k,O):r.vertexAttribPointer(G,Y,lt,ht,k,O)}function U(G,Y,lt,ht){w();const k=ht.attributes,O=lt.getAttributes(),F=Y.defaultAttributeValues;for(const st in O){const _t=O[st];if(_t.location>=0){let Mt=k[st];if(Mt===void 0&&(st==="instanceMatrix"&&G.instanceMatrix&&(Mt=G.instanceMatrix),st==="instanceColor"&&G.instanceColor&&(Mt=G.instanceColor)),Mt!==void 0){const P=Mt.normalized,J=Mt.itemSize,bt=t.get(Mt);if(bt===void 0)continue;const wt=bt.buffer,Ct=bt.type,rt=bt.bytesPerElement,Et=Ct===r.INT||Ct===r.UNSIGNED_INT||Mt.gpuType===jd;if(Mt.isInterleavedBufferAttribute){const Rt=Mt.data,Ft=Rt.stride,se=Mt.offset;if(Rt.isInstancedInterleavedBuffer){for(let $t=0;$t<_t.locationSize;$t++)S(_t.location+$t,Rt.meshPerAttribute);G.isInstancedMesh!==!0&&ht._maxInstanceCount===void 0&&(ht._maxInstanceCount=Rt.meshPerAttribute*Rt.count)}else for(let $t=0;$t<_t.locationSize;$t++)M(_t.location+$t);r.bindBuffer(r.ARRAY_BUFFER,wt);for(let $t=0;$t<_t.locationSize;$t++)L(_t.location+$t,J/_t.locationSize,Ct,P,Ft*rt,(se+J/_t.locationSize*$t)*rt,Et)}else{if(Mt.isInstancedBufferAttribute){for(let Rt=0;Rt<_t.locationSize;Rt++)S(_t.location+Rt,Mt.meshPerAttribute);G.isInstancedMesh!==!0&&ht._maxInstanceCount===void 0&&(ht._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let Rt=0;Rt<_t.locationSize;Rt++)M(_t.location+Rt);r.bindBuffer(r.ARRAY_BUFFER,wt);for(let Rt=0;Rt<_t.locationSize;Rt++)L(_t.location+Rt,J/_t.locationSize,Ct,P,J*rt,J/_t.locationSize*Rt*rt,Et)}}else if(F!==void 0){const P=F[st];if(P!==void 0)switch(P.length){case 2:r.vertexAttrib2fv(_t.location,P);break;case 3:r.vertexAttrib3fv(_t.location,P);break;case 4:r.vertexAttrib4fv(_t.location,P);break;default:r.vertexAttrib1fv(_t.location,P)}}}}C()}function V(){z();for(const G in s){const Y=s[G];for(const lt in Y){const ht=Y[lt];for(const k in ht){const O=ht[k];for(const F in O)_(O[F].object),delete O[F];delete ht[k]}}delete s[G]}}function N(G){if(s[G.id]===void 0)return;const Y=s[G.id];for(const lt in Y){const ht=Y[lt];for(const k in ht){const O=ht[k];for(const F in O)_(O[F].object),delete O[F];delete ht[k]}}delete s[G.id]}function I(G){for(const Y in s){const lt=s[Y];for(const ht in lt){const k=lt[ht];if(k[G.id]===void 0)continue;const O=k[G.id];for(const F in O)_(O[F].object),delete O[F];delete k[G.id]}}}function E(G){for(const Y in s){const lt=s[Y],ht=G.isInstancedMesh===!0?G.id:0,k=lt[ht];if(k!==void 0){for(const O in k){const F=k[O];for(const st in F)_(F[st].object),delete F[st];delete k[O]}delete lt[ht],Object.keys(lt).length===0&&delete s[Y]}}}function z(){Z(),h=!0,c!==l&&(c=l,p(c.object))}function Z(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:z,resetDefaultState:Z,dispose:V,releaseStatesOfGeometry:N,releaseStatesOfObject:E,releaseStatesOfProgram:I,initAttributes:w,enableAttribute:M,disableUnusedAttributes:C}}function LE(r,t,i){let s;function l(m){s=m}function c(m,p){r.drawArrays(s,m,p),i.update(p,s,1)}function h(m,p,_){_!==0&&(r.drawArraysInstanced(s,m,p,_),i.update(p,s,_))}function d(m,p,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,p,0,_);let g=0;for(let y=0;y<_;y++)g+=p[y];i.update(g,s,1)}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d}function OE(r,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const I=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(I){return!(I!==Qi&&s.convert(I)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(I){const E=I===Ga&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==wi&&s.convert(I)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==oa&&!E)}function m(I){if(I==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const _=m(p);_!==p&&(le("WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const x=i.logarithmicDepthBuffer===!0,g=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control");i.reversedDepthBuffer===!0&&g===!1&&le("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const y=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),T=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=r.getParameter(r.MAX_TEXTURE_SIZE),M=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),S=r.getParameter(r.MAX_VERTEX_ATTRIBS),C=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),L=r.getParameter(r.MAX_VARYING_VECTORS),U=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),V=r.getParameter(r.MAX_SAMPLES),N=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:x,reversedDepthBuffer:g,maxTextures:y,maxVertexTextures:T,maxTextureSize:w,maxCubemapSize:M,maxAttributes:S,maxVertexUniforms:C,maxVaryings:L,maxFragmentUniforms:U,maxSamples:V,samples:N}}function PE(r){const t=this;let i=null,s=0,l=!1,c=!1;const h=new Ws,d=new he,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(x,g){const y=x.length!==0||g||s!==0||l;return l=g,s=x.length,y},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(x,g){i=_(x,g,0)},this.setState=function(x,g,y){const T=x.clippingPlanes,w=x.clipIntersection,M=x.clipShadows,S=r.get(x);if(!l||T===null||T.length===0||c&&!M)c?_(null):p();else{const C=c?0:s,L=C*4;let U=S.clippingState||null;m.value=U,U=_(T,g,L,y);for(let V=0;V!==L;++V)U[V]=i[V];S.clippingState=U,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=C}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function _(x,g,y,T){const w=x!==null?x.length:0;let M=null;if(w!==0){if(M=m.value,T!==!0||M===null){const S=y+w*4,C=g.matrixWorldInverse;d.getNormalMatrix(C),(M===null||M.length<S)&&(M=new Float32Array(S));for(let L=0,U=y;L!==w;++L,U+=4)h.copy(x[L]).applyMatrix4(C,d),h.normal.toArray(M,U),M[U+3]=h.constant}m.value=M,m.needsUpdate=!0}return t.numPlanes=w,t.numIntersection=0,M}}const Ss=4,B_=[.125,.215,.35,.446,.526,.582],Ys=20,zE=256,jo=new up,G_=new xe;let kh=null,Xh=0,Wh=0,qh=!1;const IE=new W;class H_{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,l=100,c={}){const{size:h=256,position:d=IE}=c;kh=this._renderer.getRenderTarget(),Xh=this._renderer.getActiveCubeFace(),Wh=this._renderer.getActiveMipmapLevel(),qh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=X_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=k_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(kh,Xh,Wh),this._renderer.xr.enabled=qh,t.scissorTest=!1,kr(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Ks||t.mapping===jr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),kh=this._renderer.getRenderTarget(),Xh=this._renderer.getActiveCubeFace(),Wh=this._renderer.getActiveMipmapLevel(),qh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Kn,minFilter:Kn,generateMipmaps:!1,type:Ga,format:Qi,colorSpace:Yc,depthBuffer:!1},l=V_(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=V_(t,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=FE(c)),this._blurMaterial=GE(c,t,i),this._ggxMaterial=BE(c,t,i)}return l}_compileMaterial(t){const i=new we(new hi,t);this._renderer.compile(i,jo)}_sceneToCubeUV(t,i,s,l,c){const m=new Ci(90,1,i,s),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],x=this._renderer,g=x.autoClear,y=x.toneMapping;x.getClearColor(G_),x.toneMapping=ca,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(l),x.clearDepth(),x.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new we(new ys,new Xr({name:"PMREM.Background",side:ii,depthWrite:!1,depthTest:!1})));const w=this._backgroundBox,M=w.material;let S=!1;const C=t.background;C?C.isColor&&(M.color.copy(C),t.background=null,S=!0):(M.color.copy(G_),S=!0);for(let L=0;L<6;L++){const U=L%3;U===0?(m.up.set(0,p[L],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+_[L],c.y,c.z)):U===1?(m.up.set(0,0,p[L]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+_[L],c.z)):(m.up.set(0,p[L],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+_[L]));const V=this._cubeSize;kr(l,U*V,L>2?V:0,V,V),x.setRenderTarget(l),S&&x.render(w,m),x.render(t,m)}x.toneMapping=y,x.autoClear=g,t.background=C}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===Ks||t.mapping===jr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=X_()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=k_());const c=l?this._cubemapMaterial:this._equirectMaterial,h=this._lodMeshes[0];h.material=c;const d=c.uniforms;d.envMap.value=t;const m=this._cubeSize;kr(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(h,jo)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);i.autoClear=s}_applyGGXFilter(t,i,s){const l=this._renderer,c=this._pingPongRenderTarget,h=this._ggxMaterial,d=this._lodMeshes[s];d.material=h;const m=h.uniforms,p=s/(this._lodMeshes.length-1),_=i/(this._lodMeshes.length-1),x=Math.sqrt(p*p-_*_),g=0+p*1.25,y=x*g,{_lodMax:T}=this,w=this._sizeLods[s],M=3*w*(s>T-Ss?s-T+Ss:0),S=4*(this._cubeSize-w);m.envMap.value=t.texture,m.roughness.value=y,m.mipInt.value=T-i,kr(c,M,S,3*w,2*w),l.setRenderTarget(c),l.render(d,jo),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=T-s,kr(t,M,S,3*w,2*w),l.setRenderTarget(t),l.render(d,jo)}_blur(t,i,s,l,c){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,s,l,"latitudinal",c),this._halfBlur(h,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&De("blur direction must be either latitudinal or longitudinal!");const _=3,x=this._lodMeshes[l];x.material=p;const g=p.uniforms,y=this._sizeLods[s]-1,T=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*Ys-1),w=c/T,M=isFinite(c)?1+Math.floor(_*w):Ys;M>Ys&&le(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Ys}`);const S=[];let C=0;for(let I=0;I<Ys;++I){const E=I/w,z=Math.exp(-E*E/2);S.push(z),I===0?C+=z:I<M&&(C+=2*z)}for(let I=0;I<S.length;I++)S[I]=S[I]/C;g.envMap.value=t.texture,g.samples.value=M,g.weights.value=S,g.latitudinal.value=h==="latitudinal",d&&(g.poleAxis.value=d);const{_lodMax:L}=this;g.dTheta.value=T,g.mipInt.value=L-s;const U=this._sizeLods[l],V=3*U*(l>L-Ss?l-L+Ss:0),N=4*(this._cubeSize-U);kr(i,V,N,3*U,2*U),m.setRenderTarget(i),m.render(x,jo)}}function FE(r){const t=[],i=[],s=[];let l=r;const c=r-Ss+1+B_.length;for(let h=0;h<c;h++){const d=Math.pow(2,l);t.push(d);let m=1/d;h>r-Ss?m=B_[h-r+Ss-1]:h===0&&(m=0),i.push(m);const p=1/(d-2),_=-p,x=1+p,g=[_,_,x,_,x,x,_,_,x,x,_,x],y=6,T=6,w=3,M=2,S=1,C=new Float32Array(w*T*y),L=new Float32Array(M*T*y),U=new Float32Array(S*T*y);for(let N=0;N<y;N++){const I=N%3*2/3-1,E=N>2?0:-1,z=[I,E,0,I+2/3,E,0,I+2/3,E+1,0,I,E,0,I+2/3,E+1,0,I,E+1,0];C.set(z,w*T*N),L.set(g,M*T*N);const Z=[N,N,N,N,N,N];U.set(Z,S*T*N)}const V=new hi;V.setAttribute("position",new fa(C,w)),V.setAttribute("uv",new fa(L,M)),V.setAttribute("faceIndex",new fa(U,S)),s.push(new we(V,null)),l>Ss&&l--}return{lodMeshes:s,sizeLods:t,sigmas:i}}function V_(r,t,i){const s=new ua(r,t,i);return s.texture.mapping=$c,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function kr(r,t,i,s,l){r.viewport.set(t,i,s,l),r.scissor.set(t,i,s,l)}function BE(r,t,i){return new da({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:zE,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:tu(),fragmentShader:`

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
		`,blending:Fa,depthTest:!1,depthWrite:!1})}function GE(r,t,i){const s=new Float32Array(Ys),l=new W(0,1,0);return new da({name:"SphericalGaussianBlur",defines:{n:Ys,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:tu(),fragmentShader:`

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
		`,blending:Fa,depthTest:!1,depthWrite:!1})}function k_(){return new da({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:tu(),fragmentShader:`

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
		`,blending:Fa,depthTest:!1,depthWrite:!1})}function X_(){return new da({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:tu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fa,depthTest:!1,depthWrite:!1})}function tu(){return`

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
	`}class qv extends ua{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new zv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new ys(5,5,5),c=new da({name:"CubemapFromEquirect",uniforms:Kr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:ii,blending:Fa});c.uniforms.tEquirect.value=i;const h=new we(l,c),d=i.minFilter;return i.minFilter===js&&(i.minFilter=Kn),new WM(1,10,this).update(t,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,s,l);t.setRenderTarget(c)}}function HE(r){let t=new WeakMap,i=new WeakMap,s=null;function l(g,y=!1){return g==null?null:y?h(g):c(g)}function c(g){if(g&&g.isTexture){const y=g.mapping;if(y===hh||y===dh)if(t.has(g)){const T=t.get(g).texture;return d(T,g.mapping)}else{const T=g.image;if(T&&T.height>0){const w=new qv(T.height);return w.fromEquirectangularTexture(r,g),t.set(g,w),g.addEventListener("dispose",p),d(w.texture,g.mapping)}else return null}}return g}function h(g){if(g&&g.isTexture){const y=g.mapping,T=y===hh||y===dh,w=y===Ks||y===jr;if(T||w){let M=i.get(g);const S=M!==void 0?M.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==S)return s===null&&(s=new H_(r)),M=T?s.fromEquirectangular(g,M):s.fromCubemap(g,M),M.texture.pmremVersion=g.pmremVersion,i.set(g,M),M.texture;if(M!==void 0)return M.texture;{const C=g.image;return T&&C&&C.height>0||w&&C&&m(C)?(s===null&&(s=new H_(r)),M=T?s.fromEquirectangular(g):s.fromCubemap(g),M.texture.pmremVersion=g.pmremVersion,i.set(g,M),g.addEventListener("dispose",_),M.texture):null}}}return g}function d(g,y){return y===hh?g.mapping=Ks:y===dh&&(g.mapping=jr),g}function m(g){let y=0;const T=6;for(let w=0;w<T;w++)g[w]!==void 0&&y++;return y===T}function p(g){const y=g.target;y.removeEventListener("dispose",p);const T=t.get(y);T!==void 0&&(t.delete(y),T.dispose())}function _(g){const y=g.target;y.removeEventListener("dispose",_);const T=i.get(y);T!==void 0&&(i.delete(y),T.dispose())}function x(){t=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:x}}function VE(r){const t={};function i(s){if(t[s]!==void 0)return t[s];const l=r.getExtension(s);return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Gd("WebGLRenderer: "+s+" extension not supported."),l}}}function kE(r,t,i,s){const l={},c=new WeakMap;function h(x){const g=x.target;g.index!==null&&t.remove(g.index);for(const T in g.attributes)t.remove(g.attributes[T]);g.removeEventListener("dispose",h),delete l[g.id];const y=c.get(g);y&&(t.remove(y),c.delete(g)),s.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function d(x,g){return l[g.id]===!0||(g.addEventListener("dispose",h),l[g.id]=!0,i.memory.geometries++),g}function m(x){const g=x.attributes;for(const y in g)t.update(g[y],r.ARRAY_BUFFER)}function p(x){const g=[],y=x.index,T=x.attributes.position;let w=0;if(T===void 0)return;if(y!==null){const C=y.array;w=y.version;for(let L=0,U=C.length;L<U;L+=3){const V=C[L+0],N=C[L+1],I=C[L+2];g.push(V,N,N,I,I,V)}}else{const C=T.array;w=T.version;for(let L=0,U=C.length/3-1;L<U;L+=3){const V=L+0,N=L+1,I=L+2;g.push(V,N,N,I,I,V)}}const M=new(T.count>=65535?Ov:Lv)(g,1);M.version=w;const S=c.get(x);S&&t.remove(S),c.set(x,M)}function _(x){const g=c.get(x);if(g){const y=x.index;y!==null&&g.version<y.version&&p(x)}else p(x);return c.get(x)}return{get:d,update:m,getWireframeAttribute:_}}function XE(r,t,i){let s;function l(x){s=x}let c,h;function d(x){c=x.type,h=x.bytesPerElement}function m(x,g){r.drawElements(s,g,c,x*h),i.update(g,s,1)}function p(x,g,y){y!==0&&(r.drawElementsInstanced(s,g,c,x*h,y),i.update(g,s,y))}function _(x,g,y){if(y===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,g,0,c,x,0,y);let w=0;for(let M=0;M<y;M++)w+=g[M];i.update(w,s,1)}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=_}function WE(r){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,h,d){switch(i.calls++,h){case r.TRIANGLES:i.triangles+=d*(c/3);break;case r.LINES:i.lines+=d*(c/2);break;case r.LINE_STRIP:i.lines+=d*(c-1);break;case r.LINE_LOOP:i.lines+=d*c;break;case r.POINTS:i.points+=d*c;break;default:De("WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function qE(r,t,i){const s=new WeakMap,l=new Sn;function c(h,d,m){const p=h.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,x=_!==void 0?_.length:0;let g=s.get(d);if(g===void 0||g.count!==x){let Z=function(){E.dispose(),s.delete(d),d.removeEventListener("dispose",Z)};var y=Z;g!==void 0&&g.texture.dispose();const T=d.morphAttributes.position!==void 0,w=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,S=d.morphAttributes.position||[],C=d.morphAttributes.normal||[],L=d.morphAttributes.color||[];let U=0;T===!0&&(U=1),w===!0&&(U=2),M===!0&&(U=3);let V=d.attributes.position.count*U,N=1;V>t.maxTextureSize&&(N=Math.ceil(V/t.maxTextureSize),V=t.maxTextureSize);const I=new Float32Array(V*N*4*x),E=new Nv(I,V,N,x);E.type=oa,E.needsUpdate=!0;const z=U*4;for(let G=0;G<x;G++){const Y=S[G],lt=C[G],ht=L[G],k=V*N*4*G;for(let O=0;O<Y.count;O++){const F=O*z;T===!0&&(l.fromBufferAttribute(Y,O),I[k+F+0]=l.x,I[k+F+1]=l.y,I[k+F+2]=l.z,I[k+F+3]=0),w===!0&&(l.fromBufferAttribute(lt,O),I[k+F+4]=l.x,I[k+F+5]=l.y,I[k+F+6]=l.z,I[k+F+7]=0),M===!0&&(l.fromBufferAttribute(ht,O),I[k+F+8]=l.x,I[k+F+9]=l.y,I[k+F+10]=l.z,I[k+F+11]=ht.itemSize===4?l.w:1)}}g={count:x,texture:E,size:new ne(V,N)},s.set(d,g),d.addEventListener("dispose",Z)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",h.morphTexture,i);else{let T=0;for(let M=0;M<p.length;M++)T+=p[M];const w=d.morphTargetsRelative?1:1-T;m.getUniforms().setValue(r,"morphTargetBaseInfluence",w),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",g.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}return{update:c}}function YE(r,t,i,s,l){let c=new WeakMap;function h(p){const _=l.render.frame,x=p.geometry,g=t.get(p,x);if(c.get(g)!==_&&(t.update(g),c.set(g,_)),p.isInstancedMesh&&(p.hasEventListener("dispose",m)===!1&&p.addEventListener("dispose",m),c.get(p)!==_&&(i.update(p.instanceMatrix,r.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,r.ARRAY_BUFFER),c.set(p,_))),p.isSkinnedMesh){const y=p.skeleton;c.get(y)!==_&&(y.update(),c.set(y,_))}return g}function d(){c=new WeakMap}function m(p){const _=p.target;_.removeEventListener("dispose",m),s.releaseStatesOfObject(_),i.remove(_.instanceMatrix),_.instanceColor!==null&&i.remove(_.instanceColor)}return{update:h,dispose:d}}const jE={[gv]:"LINEAR_TONE_MAPPING",[_v]:"REINHARD_TONE_MAPPING",[vv]:"CINEON_TONE_MAPPING",[Yd]:"ACES_FILMIC_TONE_MAPPING",[Sv]:"AGX_TONE_MAPPING",[yv]:"NEUTRAL_TONE_MAPPING",[xv]:"CUSTOM_TONE_MAPPING"};function ZE(r,t,i,s,l){const c=new ua(t,i,{type:r,depthBuffer:s,stencilBuffer:l,depthTexture:s?new Zr(t,i):void 0}),h=new ua(t,i,{type:Ga,depthBuffer:!1,stencilBuffer:!1}),d=new hi;d.setAttribute("position",new hn([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new hn([0,2,0,0,2,0],2));const m=new IM({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new we(d,m),_=new up(-1,1,1,-1,0,1);let x=null,g=null,y=!1,T,w=null,M=[],S=!1;this.setSize=function(C,L){c.setSize(C,L),h.setSize(C,L);for(let U=0;U<M.length;U++){const V=M[U];V.setSize&&V.setSize(C,L)}},this.setEffects=function(C){M=C,S=M.length>0&&M[0].isRenderPass===!0;const L=c.width,U=c.height;for(let V=0;V<M.length;V++){const N=M[V];N.setSize&&N.setSize(L,U)}},this.begin=function(C,L){if(y||C.toneMapping===ca&&M.length===0)return!1;if(w=L,L!==null){const U=L.width,V=L.height;(c.width!==U||c.height!==V)&&this.setSize(U,V)}return S===!1&&C.setRenderTarget(c),T=C.toneMapping,C.toneMapping=ca,!0},this.hasRenderPass=function(){return S},this.end=function(C,L){C.toneMapping=T,y=!0;let U=c,V=h;for(let N=0;N<M.length;N++){const I=M[N];if(I.enabled!==!1&&(I.render(C,V,U,L),I.needsSwap!==!1)){const E=U;U=V,V=E}}if(x!==C.outputColorSpace||g!==C.toneMapping){x=C.outputColorSpace,g=C.toneMapping,m.defines={},Ce.getTransfer(x)===Ye&&(m.defines.SRGB_TRANSFER="");const N=jE[g];N&&(m.defines[N]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=U.texture,C.setRenderTarget(w),C.render(p,_),w=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){c.depthTexture&&c.depthTexture.dispose(),c.dispose(),h.dispose(),d.dispose(),m.dispose()}}const Yv=new Qn,kd=new Zr(1,1),jv=new Nv,Zv=new Jy,Kv=new zv,W_=[],q_=[],Y_=new Float32Array(16),j_=new Float32Array(9),Z_=new Float32Array(4);function Jr(r,t,i){const s=r[0];if(s<=0||s>0)return r;const l=t*i;let c=W_[l];if(c===void 0&&(c=new Float32Array(l),W_[l]=c),t!==0){s.toArray(c,0);for(let h=1,d=0;h!==t;++h)d+=i,r[h].toArray(c,d)}return c}function Ln(r,t){if(r.length!==t.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==t[i])return!1;return!0}function On(r,t){for(let i=0,s=t.length;i<s;i++)r[i]=t[i]}function eu(r,t){let i=q_[t];i===void 0&&(i=new Int32Array(t),q_[t]=i);for(let s=0;s!==t;++s)i[s]=r.allocateTextureUnit();return i}function KE(r,t){const i=this.cache;i[0]!==t&&(r.uniform1f(this.addr,t),i[0]=t)}function QE(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Ln(i,t))return;r.uniform2fv(this.addr,t),On(i,t)}}function JE(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(Ln(i,t))return;r.uniform3fv(this.addr,t),On(i,t)}}function $E(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Ln(i,t))return;r.uniform4fv(this.addr,t),On(i,t)}}function tT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(Ln(i,t))return;r.uniformMatrix2fv(this.addr,!1,t),On(i,t)}else{if(Ln(i,s))return;Z_.set(s),r.uniformMatrix2fv(this.addr,!1,Z_),On(i,s)}}function eT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(Ln(i,t))return;r.uniformMatrix3fv(this.addr,!1,t),On(i,t)}else{if(Ln(i,s))return;j_.set(s),r.uniformMatrix3fv(this.addr,!1,j_),On(i,s)}}function nT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(Ln(i,t))return;r.uniformMatrix4fv(this.addr,!1,t),On(i,t)}else{if(Ln(i,s))return;Y_.set(s),r.uniformMatrix4fv(this.addr,!1,Y_),On(i,s)}}function iT(r,t){const i=this.cache;i[0]!==t&&(r.uniform1i(this.addr,t),i[0]=t)}function aT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Ln(i,t))return;r.uniform2iv(this.addr,t),On(i,t)}}function sT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Ln(i,t))return;r.uniform3iv(this.addr,t),On(i,t)}}function rT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Ln(i,t))return;r.uniform4iv(this.addr,t),On(i,t)}}function oT(r,t){const i=this.cache;i[0]!==t&&(r.uniform1ui(this.addr,t),i[0]=t)}function lT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Ln(i,t))return;r.uniform2uiv(this.addr,t),On(i,t)}}function cT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Ln(i,t))return;r.uniform3uiv(this.addr,t),On(i,t)}}function uT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Ln(i,t))return;r.uniform4uiv(this.addr,t),On(i,t)}}function fT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(kd.compareFunction=i.isReversedDepthBuffer()?ep:tp,c=kd):c=Yv,i.setTexture2D(t||c,l)}function hT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||Zv,l)}function dT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||Kv,l)}function pT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||jv,l)}function mT(r){switch(r){case 5126:return KE;case 35664:return QE;case 35665:return JE;case 35666:return $E;case 35674:return tT;case 35675:return eT;case 35676:return nT;case 5124:case 35670:return iT;case 35667:case 35671:return aT;case 35668:case 35672:return sT;case 35669:case 35673:return rT;case 5125:return oT;case 36294:return lT;case 36295:return cT;case 36296:return uT;case 35678:case 36198:case 36298:case 36306:case 35682:return fT;case 35679:case 36299:case 36307:return hT;case 35680:case 36300:case 36308:case 36293:return dT;case 36289:case 36303:case 36311:case 36292:return pT}}function gT(r,t){r.uniform1fv(this.addr,t)}function _T(r,t){const i=Jr(t,this.size,2);r.uniform2fv(this.addr,i)}function vT(r,t){const i=Jr(t,this.size,3);r.uniform3fv(this.addr,i)}function xT(r,t){const i=Jr(t,this.size,4);r.uniform4fv(this.addr,i)}function ST(r,t){const i=Jr(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function yT(r,t){const i=Jr(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function MT(r,t){const i=Jr(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function bT(r,t){r.uniform1iv(this.addr,t)}function ET(r,t){r.uniform2iv(this.addr,t)}function TT(r,t){r.uniform3iv(this.addr,t)}function AT(r,t){r.uniform4iv(this.addr,t)}function RT(r,t){r.uniform1uiv(this.addr,t)}function CT(r,t){r.uniform2uiv(this.addr,t)}function wT(r,t){r.uniform3uiv(this.addr,t)}function DT(r,t){r.uniform4uiv(this.addr,t)}function NT(r,t,i){const s=this.cache,l=t.length,c=eu(i,l);Ln(s,c)||(r.uniform1iv(this.addr,c),On(s,c));let h;this.type===r.SAMPLER_2D_SHADOW?h=kd:h=Yv;for(let d=0;d!==l;++d)i.setTexture2D(t[d]||h,c[d])}function UT(r,t,i){const s=this.cache,l=t.length,c=eu(i,l);Ln(s,c)||(r.uniform1iv(this.addr,c),On(s,c));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||Zv,c[h])}function LT(r,t,i){const s=this.cache,l=t.length,c=eu(i,l);Ln(s,c)||(r.uniform1iv(this.addr,c),On(s,c));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||Kv,c[h])}function OT(r,t,i){const s=this.cache,l=t.length,c=eu(i,l);Ln(s,c)||(r.uniform1iv(this.addr,c),On(s,c));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||jv,c[h])}function PT(r){switch(r){case 5126:return gT;case 35664:return _T;case 35665:return vT;case 35666:return xT;case 35674:return ST;case 35675:return yT;case 35676:return MT;case 5124:case 35670:return bT;case 35667:case 35671:return ET;case 35668:case 35672:return TT;case 35669:case 35673:return AT;case 5125:return RT;case 36294:return CT;case 36295:return wT;case 36296:return DT;case 35678:case 36198:case 36298:case 36306:case 35682:return NT;case 35679:case 36299:case 36307:return UT;case 35680:case 36300:case 36308:case 36293:return LT;case 36289:case 36303:case 36311:case 36292:return OT}}class zT{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=mT(i.type)}}class IT{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=PT(i.type)}}class FT{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const d=l[c];d.setValue(t,i[d.id],s)}}}const Yh=/(\w+)(\])?(\[|\.)?/g;function K_(r,t){r.seq.push(t),r.map[t.id]=t}function BT(r,t,i){const s=r.name,l=s.length;for(Yh.lastIndex=0;;){const c=Yh.exec(s),h=Yh.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){K_(i,p===void 0?new zT(d,r,t):new IT(d,r,t));break}else{let x=i.map[d];x===void 0&&(x=new FT(d),K_(i,x)),i=x}}}class Xc{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let h=0;h<s;++h){const d=t.getActiveUniform(i,h),m=t.getUniformLocation(i,d.name);BT(d,m,this)}const l=[],c=[];for(const h of this.seq)h.type===t.SAMPLER_2D_SHADOW||h.type===t.SAMPLER_CUBE_SHADOW||h.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(h):c.push(h);l.length>0&&(this.seq=l.concat(c))}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,h=i.length;c!==h;++c){const d=i[c],m=s[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const h=t[l];h.id in i&&s.push(h)}return s}}function Q_(r,t,i){const s=r.createShader(t);return r.shaderSource(s,i),r.compileShader(s),s}const GT=37297;let HT=0;function VT(r,t){const i=r.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let h=l;h<c;h++){const d=h+1;s.push(`${d===t?">":" "} ${d}: ${i[h]}`)}return s.join(`
`)}const J_=new he;function kT(r){Ce._getMatrix(J_,Ce.workingColorSpace,r);const t=`mat3( ${J_.elements.map(i=>i.toFixed(4))} )`;switch(Ce.getTransfer(r)){case jc:return[t,"LinearTransferOETF"];case Ye:return[t,"sRGBTransferOETF"];default:return le("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function $_(r,t,i){const s=r.getShaderParameter(t,r.COMPILE_STATUS),c=(r.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const h=/ERROR: 0:(\d+)/.exec(c);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+c+`

`+VT(r.getShaderSource(t),d)}else return c}function XT(r,t){const i=kT(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const WT={[gv]:"Linear",[_v]:"Reinhard",[vv]:"Cineon",[Yd]:"ACESFilmic",[Sv]:"AgX",[yv]:"Neutral",[xv]:"Custom"};function qT(r,t){const i=WT[t];return i===void 0?(le("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Fc=new W;function YT(){Ce.getLuminanceCoefficients(Fc);const r=Fc.x.toFixed(4),t=Fc.y.toFixed(4),i=Fc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function jT(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qo).join(`
`)}function ZT(r){const t=[];for(const i in r){const s=r[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function KT(r,t){const i={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(t,l),h=c.name;let d=1;c.type===r.FLOAT_MAT2&&(d=2),c.type===r.FLOAT_MAT3&&(d=3),c.type===r.FLOAT_MAT4&&(d=4),i[h]={type:c.type,location:r.getAttribLocation(t,h),locationSize:d}}return i}function Qo(r){return r!==""}function tv(r,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ev(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const QT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xd(r){return r.replace(QT,$T)}const JT=new Map;function $T(r,t){let i=ve[t];if(i===void 0){const s=JT.get(t);if(s!==void 0)i=ve[s],le('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return Xd(i)}const tA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nv(r){return r.replace(tA,eA)}function eA(r,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function iv(r){let t=`precision ${r.precision} float;
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
#define LOW_PRECISION`),t}const nA={[Bc]:"SHADOWMAP_TYPE_PCF",[Ko]:"SHADOWMAP_TYPE_VSM"};function iA(r){return nA[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const aA={[Ks]:"ENVMAP_TYPE_CUBE",[jr]:"ENVMAP_TYPE_CUBE",[$c]:"ENVMAP_TYPE_CUBE_UV"};function sA(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":aA[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const rA={[jr]:"ENVMAP_MODE_REFRACTION"};function oA(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":rA[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const lA={[mv]:"ENVMAP_BLENDING_MULTIPLY",[Ny]:"ENVMAP_BLENDING_MIX",[Uy]:"ENVMAP_BLENDING_ADD"};function cA(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":lA[r.combine]||"ENVMAP_BLENDING_NONE"}function uA(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function fA(r,t,i,s){const l=r.getContext(),c=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=iA(i),p=sA(i),_=oA(i),x=cA(i),g=uA(i),y=jT(i),T=ZT(c),w=l.createProgram();let M,S,C=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Qo).join(`
`),M.length>0&&(M+=`
`),S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Qo).join(`
`),S.length>0&&(S+=`
`)):(M=[iv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qo).join(`
`),S=[iv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+_:"",i.envMap?"#define "+x:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ca?"#define TONE_MAPPING":"",i.toneMapping!==ca?ve.tonemapping_pars_fragment:"",i.toneMapping!==ca?qT("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ve.colorspace_pars_fragment,XT("linearToOutputTexel",i.outputColorSpace),YT(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Qo).join(`
`)),h=Xd(h),h=tv(h,i),h=ev(h,i),d=Xd(d),d=tv(d,i),d=ev(d,i),h=nv(h),d=nv(d),i.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,S=["#define varying in",i.glslVersion===c_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===c_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const L=C+M+h,U=C+S+d,V=Q_(l,l.VERTEX_SHADER,L),N=Q_(l,l.FRAGMENT_SHADER,U);l.attachShader(w,V),l.attachShader(w,N),i.index0AttributeName!==void 0?l.bindAttribLocation(w,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(w,0,"position"),l.linkProgram(w);function I(G){if(r.debug.checkShaderErrors){const Y=l.getProgramInfoLog(w)||"",lt=l.getShaderInfoLog(V)||"",ht=l.getShaderInfoLog(N)||"",k=Y.trim(),O=lt.trim(),F=ht.trim();let st=!0,_t=!0;if(l.getProgramParameter(w,l.LINK_STATUS)===!1)if(st=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,w,V,N);else{const Mt=$_(l,V,"vertex"),P=$_(l,N,"fragment");De("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(w,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+k+`
`+Mt+`
`+P)}else k!==""?le("WebGLProgram: Program Info Log:",k):(O===""||F==="")&&(_t=!1);_t&&(G.diagnostics={runnable:st,programLog:k,vertexShader:{log:O,prefix:M},fragmentShader:{log:F,prefix:S}})}l.deleteShader(V),l.deleteShader(N),E=new Xc(l,w),z=KT(l,w)}let E;this.getUniforms=function(){return E===void 0&&I(this),E};let z;this.getAttributes=function(){return z===void 0&&I(this),z};let Z=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return Z===!1&&(Z=l.getProgramParameter(w,GT)),Z},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(w),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=HT++,this.cacheKey=t,this.usedTimes=1,this.program=w,this.vertexShader=V,this.fragmentShader=N,this}let hA=0;class dA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new pA(t),i.set(t,s)),s}}class pA{constructor(t){this.id=hA++,this.code=t,this.usedTimes=0}}function mA(r){return r===Qs||r===Wc||r===qc}function gA(r,t,i,s,l,c){const h=new ip,d=new dA,m=new Set,p=[],_=new Map,x=s.logarithmicDepthBuffer;let g=s.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(E){return m.add(E),E===0?"uv":`uv${E}`}function w(E,z,Z,G,Y,lt){const ht=G.fog,k=Y.geometry,O=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?G.environment:null,F=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap,st=t.get(E.envMap||O,F),_t=st&&st.mapping===$c?st.image.height:null,Mt=y[E.type];E.precision!==null&&(g=s.getMaxPrecision(E.precision),g!==E.precision&&le("WebGLProgram.getParameters:",E.precision,"not supported, using",g,"instead."));const P=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,J=P!==void 0?P.length:0;let bt=0;k.morphAttributes.position!==void 0&&(bt=1),k.morphAttributes.normal!==void 0&&(bt=2),k.morphAttributes.color!==void 0&&(bt=3);let wt,Ct,rt,Et;if(Mt){const Kt=sa[Mt];wt=Kt.vertexShader,Ct=Kt.fragmentShader}else wt=E.vertexShader,Ct=E.fragmentShader,d.update(E),rt=d.getVertexShaderID(E),Et=d.getFragmentShaderID(E);const Rt=r.getRenderTarget(),Ft=r.state.buffers.depth.getReversed(),se=Y.isInstancedMesh===!0,$t=Y.isBatchedMesh===!0,Ie=!!E.map,ce=!!E.matcap,me=!!st,ye=!!E.aoMap,qt=!!E.lightMap,Oe=!!E.bumpMap,Ge=!!E.normalMap,Dn=!!E.displacementMap,q=!!E.emissiveMap,on=!!E.metalnessMap,ge=!!E.roughnessMap,Pe=E.anisotropy>0,Nt=E.clearcoat>0,Qe=E.dispersion>0,D=E.iridescence>0,b=E.sheen>0,$=E.transmission>0,mt=Pe&&!!E.anisotropyMap,At=Nt&&!!E.clearcoatMap,Ut=Nt&&!!E.clearcoatNormalMap,Ot=Nt&&!!E.clearcoatRoughnessMap,ut=D&&!!E.iridescenceMap,dt=D&&!!E.iridescenceThicknessMap,Pt=b&&!!E.sheenColorMap,zt=b&&!!E.sheenRoughnessMap,xt=!!E.specularMap,pt=!!E.specularColorMap,jt=!!E.specularIntensityMap,Yt=$&&!!E.transmissionMap,te=$&&!!E.thicknessMap,H=!!E.gradientMap,Tt=!!E.alphaMap,ft=E.alphaTest>0,Lt=!!E.alphaHash,Dt=!!E.extensions;let St=ca;E.toneMapped&&(Rt===null||Rt.isXRRenderTarget===!0)&&(St=r.toneMapping);const Ht={shaderID:Mt,shaderType:E.type,shaderName:E.name,vertexShader:wt,fragmentShader:Ct,defines:E.defines,customVertexShaderID:rt,customFragmentShaderID:Et,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:g,batching:$t,batchingColor:$t&&Y._colorsTexture!==null,instancing:se,instancingColor:se&&Y.instanceColor!==null,instancingMorph:se&&Y.morphTexture!==null,outputColorSpace:Rt===null?r.outputColorSpace:Rt.isXRRenderTarget===!0?Rt.texture.colorSpace:Ce.workingColorSpace,alphaToCoverage:!!E.alphaToCoverage,map:Ie,matcap:ce,envMap:me,envMapMode:me&&st.mapping,envMapCubeUVHeight:_t,aoMap:ye,lightMap:qt,bumpMap:Oe,normalMap:Ge,displacementMap:Dn,emissiveMap:q,normalMapObjectSpace:Ge&&E.normalMapType===Py,normalMapTangentSpace:Ge&&E.normalMapType===Bd,packedNormalMap:Ge&&E.normalMapType===Bd&&mA(E.normalMap.format),metalnessMap:on,roughnessMap:ge,anisotropy:Pe,anisotropyMap:mt,clearcoat:Nt,clearcoatMap:At,clearcoatNormalMap:Ut,clearcoatRoughnessMap:Ot,dispersion:Qe,iridescence:D,iridescenceMap:ut,iridescenceThicknessMap:dt,sheen:b,sheenColorMap:Pt,sheenRoughnessMap:zt,specularMap:xt,specularColorMap:pt,specularIntensityMap:jt,transmission:$,transmissionMap:Yt,thicknessMap:te,gradientMap:H,opaque:E.transparent===!1&&E.blending===Wr&&E.alphaToCoverage===!1,alphaMap:Tt,alphaTest:ft,alphaHash:Lt,combine:E.combine,mapUv:Ie&&T(E.map.channel),aoMapUv:ye&&T(E.aoMap.channel),lightMapUv:qt&&T(E.lightMap.channel),bumpMapUv:Oe&&T(E.bumpMap.channel),normalMapUv:Ge&&T(E.normalMap.channel),displacementMapUv:Dn&&T(E.displacementMap.channel),emissiveMapUv:q&&T(E.emissiveMap.channel),metalnessMapUv:on&&T(E.metalnessMap.channel),roughnessMapUv:ge&&T(E.roughnessMap.channel),anisotropyMapUv:mt&&T(E.anisotropyMap.channel),clearcoatMapUv:At&&T(E.clearcoatMap.channel),clearcoatNormalMapUv:Ut&&T(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ot&&T(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ut&&T(E.iridescenceMap.channel),iridescenceThicknessMapUv:dt&&T(E.iridescenceThicknessMap.channel),sheenColorMapUv:Pt&&T(E.sheenColorMap.channel),sheenRoughnessMapUv:zt&&T(E.sheenRoughnessMap.channel),specularMapUv:xt&&T(E.specularMap.channel),specularColorMapUv:pt&&T(E.specularColorMap.channel),specularIntensityMapUv:jt&&T(E.specularIntensityMap.channel),transmissionMapUv:Yt&&T(E.transmissionMap.channel),thicknessMapUv:te&&T(E.thicknessMap.channel),alphaMapUv:Tt&&T(E.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(Ge||Pe),vertexNormals:!!k.attributes.normal,vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!k.attributes.uv&&(Ie||Tt),fog:!!ht,useFog:E.fog===!0,fogExp2:!!ht&&ht.isFogExp2,flatShading:E.wireframe===!1&&(E.flatShading===!0||k.attributes.normal===void 0&&Ge===!1&&(E.isMeshLambertMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isMeshPhysicalMaterial)),sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:Ft,skinning:Y.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:bt,numDirLights:z.directional.length,numPointLights:z.point.length,numSpotLights:z.spot.length,numSpotLightMaps:z.spotLightMap.length,numRectAreaLights:z.rectArea.length,numHemiLights:z.hemi.length,numDirLightShadows:z.directionalShadowMap.length,numPointLightShadows:z.pointShadowMap.length,numSpotLightShadows:z.spotShadowMap.length,numSpotLightShadowsWithMaps:z.numSpotLightShadowsWithMaps,numLightProbes:z.numLightProbes,numLightProbeGrids:lt.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:E.dithering,shadowMapEnabled:r.shadowMap.enabled&&Z.length>0,shadowMapType:r.shadowMap.type,toneMapping:St,decodeVideoTexture:Ie&&E.map.isVideoTexture===!0&&Ce.getTransfer(E.map.colorSpace)===Ye,decodeVideoTextureEmissive:q&&E.emissiveMap.isVideoTexture===!0&&Ce.getTransfer(E.emissiveMap.colorSpace)===Ye,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===ra,flipSided:E.side===ii,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Dt&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Dt&&E.extensions.multiDraw===!0||$t)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Ht.vertexUv1s=m.has(1),Ht.vertexUv2s=m.has(2),Ht.vertexUv3s=m.has(3),m.clear(),Ht}function M(E){const z=[];if(E.shaderID?z.push(E.shaderID):(z.push(E.customVertexShaderID),z.push(E.customFragmentShaderID)),E.defines!==void 0)for(const Z in E.defines)z.push(Z),z.push(E.defines[Z]);return E.isRawShaderMaterial===!1&&(S(z,E),C(z,E),z.push(r.outputColorSpace)),z.push(E.customProgramCacheKey),z.join()}function S(E,z){E.push(z.precision),E.push(z.outputColorSpace),E.push(z.envMapMode),E.push(z.envMapCubeUVHeight),E.push(z.mapUv),E.push(z.alphaMapUv),E.push(z.lightMapUv),E.push(z.aoMapUv),E.push(z.bumpMapUv),E.push(z.normalMapUv),E.push(z.displacementMapUv),E.push(z.emissiveMapUv),E.push(z.metalnessMapUv),E.push(z.roughnessMapUv),E.push(z.anisotropyMapUv),E.push(z.clearcoatMapUv),E.push(z.clearcoatNormalMapUv),E.push(z.clearcoatRoughnessMapUv),E.push(z.iridescenceMapUv),E.push(z.iridescenceThicknessMapUv),E.push(z.sheenColorMapUv),E.push(z.sheenRoughnessMapUv),E.push(z.specularMapUv),E.push(z.specularColorMapUv),E.push(z.specularIntensityMapUv),E.push(z.transmissionMapUv),E.push(z.thicknessMapUv),E.push(z.combine),E.push(z.fogExp2),E.push(z.sizeAttenuation),E.push(z.morphTargetsCount),E.push(z.morphAttributeCount),E.push(z.numDirLights),E.push(z.numPointLights),E.push(z.numSpotLights),E.push(z.numSpotLightMaps),E.push(z.numHemiLights),E.push(z.numRectAreaLights),E.push(z.numDirLightShadows),E.push(z.numPointLightShadows),E.push(z.numSpotLightShadows),E.push(z.numSpotLightShadowsWithMaps),E.push(z.numLightProbes),E.push(z.shadowMapType),E.push(z.toneMapping),E.push(z.numClippingPlanes),E.push(z.numClipIntersection),E.push(z.depthPacking)}function C(E,z){h.disableAll(),z.instancing&&h.enable(0),z.instancingColor&&h.enable(1),z.instancingMorph&&h.enable(2),z.matcap&&h.enable(3),z.envMap&&h.enable(4),z.normalMapObjectSpace&&h.enable(5),z.normalMapTangentSpace&&h.enable(6),z.clearcoat&&h.enable(7),z.iridescence&&h.enable(8),z.alphaTest&&h.enable(9),z.vertexColors&&h.enable(10),z.vertexAlphas&&h.enable(11),z.vertexUv1s&&h.enable(12),z.vertexUv2s&&h.enable(13),z.vertexUv3s&&h.enable(14),z.vertexTangents&&h.enable(15),z.anisotropy&&h.enable(16),z.alphaHash&&h.enable(17),z.batching&&h.enable(18),z.dispersion&&h.enable(19),z.batchingColor&&h.enable(20),z.gradientMap&&h.enable(21),z.packedNormalMap&&h.enable(22),z.vertexNormals&&h.enable(23),E.push(h.mask),h.disableAll(),z.fog&&h.enable(0),z.useFog&&h.enable(1),z.flatShading&&h.enable(2),z.logarithmicDepthBuffer&&h.enable(3),z.reversedDepthBuffer&&h.enable(4),z.skinning&&h.enable(5),z.morphTargets&&h.enable(6),z.morphNormals&&h.enable(7),z.morphColors&&h.enable(8),z.premultipliedAlpha&&h.enable(9),z.shadowMapEnabled&&h.enable(10),z.doubleSided&&h.enable(11),z.flipSided&&h.enable(12),z.useDepthPacking&&h.enable(13),z.dithering&&h.enable(14),z.transmission&&h.enable(15),z.sheen&&h.enable(16),z.opaque&&h.enable(17),z.pointsUvs&&h.enable(18),z.decodeVideoTexture&&h.enable(19),z.decodeVideoTextureEmissive&&h.enable(20),z.alphaToCoverage&&h.enable(21),z.numLightProbeGrids>0&&h.enable(22),E.push(h.mask)}function L(E){const z=y[E.type];let Z;if(z){const G=sa[z];Z=OM.clone(G.uniforms)}else Z=E.uniforms;return Z}function U(E,z){let Z=_.get(z);return Z!==void 0?++Z.usedTimes:(Z=new fA(r,z,E,l),p.push(Z),_.set(z,Z)),Z}function V(E){if(--E.usedTimes===0){const z=p.indexOf(E);p[z]=p[p.length-1],p.pop(),_.delete(E.cacheKey),E.destroy()}}function N(E){d.remove(E)}function I(){d.dispose()}return{getParameters:w,getProgramCacheKey:M,getUniforms:L,acquireProgram:U,releaseProgram:V,releaseShaderCache:N,programs:p,dispose:I}}function _A(){let r=new WeakMap;function t(h){return r.has(h)}function i(h){let d=r.get(h);return d===void 0&&(d={},r.set(h,d)),d}function s(h){r.delete(h)}function l(h,d,m){r.get(h)[d]=m}function c(){r=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function vA(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.materialVariant!==t.materialVariant?r.materialVariant-t.materialVariant:r.z!==t.z?r.z-t.z:r.id-t.id}function av(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function sv(){const r=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function h(g){let y=0;return g.isInstancedMesh&&(y+=2),g.isSkinnedMesh&&(y+=1),y}function d(g,y,T,w,M,S){let C=r[t];return C===void 0?(C={id:g.id,object:g,geometry:y,material:T,materialVariant:h(g),groupOrder:w,renderOrder:g.renderOrder,z:M,group:S},r[t]=C):(C.id=g.id,C.object=g,C.geometry=y,C.material=T,C.materialVariant=h(g),C.groupOrder=w,C.renderOrder=g.renderOrder,C.z=M,C.group=S),t++,C}function m(g,y,T,w,M,S){const C=d(g,y,T,w,M,S);T.transmission>0?s.push(C):T.transparent===!0?l.push(C):i.push(C)}function p(g,y,T,w,M,S){const C=d(g,y,T,w,M,S);T.transmission>0?s.unshift(C):T.transparent===!0?l.unshift(C):i.unshift(C)}function _(g,y){i.length>1&&i.sort(g||vA),s.length>1&&s.sort(y||av),l.length>1&&l.sort(y||av)}function x(){for(let g=t,y=r.length;g<y;g++){const T=r[g];if(T.id===null)break;T.id=null,T.object=null,T.geometry=null,T.material=null,T.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:m,unshift:p,finish:x,sort:_}}function xA(){let r=new WeakMap;function t(s,l){const c=r.get(s);let h;return c===void 0?(h=new sv,r.set(s,[h])):l>=c.length?(h=new sv,c.push(h)):h=c[l],h}function i(){r=new WeakMap}return{get:t,dispose:i}}function SA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new W,color:new xe};break;case"SpotLight":i={position:new W,direction:new W,color:new xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new W,color:new xe,distance:0,decay:0};break;case"HemisphereLight":i={direction:new W,skyColor:new xe,groundColor:new xe};break;case"RectAreaLight":i={color:new xe,position:new W,halfWidth:new W,halfHeight:new W};break}return r[t.id]=i,i}}}function yA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=i,i}}}let MA=0;function bA(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function EA(r){const t=new SA,i=yA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new W);const l=new W,c=new gn,h=new gn;function d(p){let _=0,x=0,g=0;for(let z=0;z<9;z++)s.probe[z].set(0,0,0);let y=0,T=0,w=0,M=0,S=0,C=0,L=0,U=0,V=0,N=0,I=0;p.sort(bA);for(let z=0,Z=p.length;z<Z;z++){const G=p[z],Y=G.color,lt=G.intensity,ht=G.distance;let k=null;if(G.shadow&&G.shadow.map&&(G.shadow.map.texture.format===Qs?k=G.shadow.map.texture:k=G.shadow.map.depthTexture||G.shadow.map.texture),G.isAmbientLight)_+=Y.r*lt,x+=Y.g*lt,g+=Y.b*lt;else if(G.isLightProbe){for(let O=0;O<9;O++)s.probe[O].addScaledVector(G.sh.coefficients[O],lt);I++}else if(G.isDirectionalLight){const O=t.get(G);if(O.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const F=G.shadow,st=i.get(G);st.shadowIntensity=F.intensity,st.shadowBias=F.bias,st.shadowNormalBias=F.normalBias,st.shadowRadius=F.radius,st.shadowMapSize=F.mapSize,s.directionalShadow[y]=st,s.directionalShadowMap[y]=k,s.directionalShadowMatrix[y]=G.shadow.matrix,C++}s.directional[y]=O,y++}else if(G.isSpotLight){const O=t.get(G);O.position.setFromMatrixPosition(G.matrixWorld),O.color.copy(Y).multiplyScalar(lt),O.distance=ht,O.coneCos=Math.cos(G.angle),O.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),O.decay=G.decay,s.spot[w]=O;const F=G.shadow;if(G.map&&(s.spotLightMap[V]=G.map,V++,F.updateMatrices(G),G.castShadow&&N++),s.spotLightMatrix[w]=F.matrix,G.castShadow){const st=i.get(G);st.shadowIntensity=F.intensity,st.shadowBias=F.bias,st.shadowNormalBias=F.normalBias,st.shadowRadius=F.radius,st.shadowMapSize=F.mapSize,s.spotShadow[w]=st,s.spotShadowMap[w]=k,U++}w++}else if(G.isRectAreaLight){const O=t.get(G);O.color.copy(Y).multiplyScalar(lt),O.halfWidth.set(G.width*.5,0,0),O.halfHeight.set(0,G.height*.5,0),s.rectArea[M]=O,M++}else if(G.isPointLight){const O=t.get(G);if(O.color.copy(G.color).multiplyScalar(G.intensity),O.distance=G.distance,O.decay=G.decay,G.castShadow){const F=G.shadow,st=i.get(G);st.shadowIntensity=F.intensity,st.shadowBias=F.bias,st.shadowNormalBias=F.normalBias,st.shadowRadius=F.radius,st.shadowMapSize=F.mapSize,st.shadowCameraNear=F.camera.near,st.shadowCameraFar=F.camera.far,s.pointShadow[T]=st,s.pointShadowMap[T]=k,s.pointShadowMatrix[T]=G.shadow.matrix,L++}s.point[T]=O,T++}else if(G.isHemisphereLight){const O=t.get(G);O.skyColor.copy(G.color).multiplyScalar(lt),O.groundColor.copy(G.groundColor).multiplyScalar(lt),s.hemi[S]=O,S++}}M>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Gt.LTC_FLOAT_1,s.rectAreaLTC2=Gt.LTC_FLOAT_2):(s.rectAreaLTC1=Gt.LTC_HALF_1,s.rectAreaLTC2=Gt.LTC_HALF_2)),s.ambient[0]=_,s.ambient[1]=x,s.ambient[2]=g;const E=s.hash;(E.directionalLength!==y||E.pointLength!==T||E.spotLength!==w||E.rectAreaLength!==M||E.hemiLength!==S||E.numDirectionalShadows!==C||E.numPointShadows!==L||E.numSpotShadows!==U||E.numSpotMaps!==V||E.numLightProbes!==I)&&(s.directional.length=y,s.spot.length=w,s.rectArea.length=M,s.point.length=T,s.hemi.length=S,s.directionalShadow.length=C,s.directionalShadowMap.length=C,s.pointShadow.length=L,s.pointShadowMap.length=L,s.spotShadow.length=U,s.spotShadowMap.length=U,s.directionalShadowMatrix.length=C,s.pointShadowMatrix.length=L,s.spotLightMatrix.length=U+V-N,s.spotLightMap.length=V,s.numSpotLightShadowsWithMaps=N,s.numLightProbes=I,E.directionalLength=y,E.pointLength=T,E.spotLength=w,E.rectAreaLength=M,E.hemiLength=S,E.numDirectionalShadows=C,E.numPointShadows=L,E.numSpotShadows=U,E.numSpotMaps=V,E.numLightProbes=I,s.version=MA++)}function m(p,_){let x=0,g=0,y=0,T=0,w=0;const M=_.matrixWorldInverse;for(let S=0,C=p.length;S<C;S++){const L=p[S];if(L.isDirectionalLight){const U=s.directional[x];U.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(M),x++}else if(L.isSpotLight){const U=s.spot[y];U.position.setFromMatrixPosition(L.matrixWorld),U.position.applyMatrix4(M),U.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(M),y++}else if(L.isRectAreaLight){const U=s.rectArea[T];U.position.setFromMatrixPosition(L.matrixWorld),U.position.applyMatrix4(M),h.identity(),c.copy(L.matrixWorld),c.premultiply(M),h.extractRotation(c),U.halfWidth.set(L.width*.5,0,0),U.halfHeight.set(0,L.height*.5,0),U.halfWidth.applyMatrix4(h),U.halfHeight.applyMatrix4(h),T++}else if(L.isPointLight){const U=s.point[g];U.position.setFromMatrixPosition(L.matrixWorld),U.position.applyMatrix4(M),g++}else if(L.isHemisphereLight){const U=s.hemi[w];U.direction.setFromMatrixPosition(L.matrixWorld),U.direction.transformDirection(M),w++}}}return{setup:d,setupView:m,state:s}}function rv(r){const t=new EA(r),i=[],s=[],l=[];function c(g){x.camera=g,i.length=0,s.length=0,l.length=0}function h(g){i.push(g)}function d(g){s.push(g)}function m(g){l.push(g)}function p(){t.setup(i)}function _(g){t.setupView(i,g)}const x={lightsArray:i,shadowsArray:s,lightProbeGridArray:l,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:x,setupLights:p,setupLightsView:_,pushLight:h,pushShadow:d,pushLightProbeGrid:m}}function TA(r){let t=new WeakMap;function i(l,c=0){const h=t.get(l);let d;return h===void 0?(d=new rv(r),t.set(l,[d])):c>=h.length?(d=new rv(r),h.push(d)):d=h[c],d}function s(){t=new WeakMap}return{get:i,dispose:s}}const AA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,RA=`uniform sampler2D shadow_pass;
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
}`,CA=[new W(1,0,0),new W(-1,0,0),new W(0,1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1)],wA=[new W(0,-1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1),new W(0,-1,0),new W(0,-1,0)],ov=new gn,Zo=new W,jh=new W;function DA(r,t,i){let s=new rp;const l=new ne,c=new ne,h=new Sn,d=new BM,m=new GM,p={},_=i.maxTextureSize,x={[Ms]:ii,[ii]:Ms,[ra]:ra},g=new da({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ne},radius:{value:4}},vertexShader:AA,fragmentShader:RA}),y=g.clone();y.defines.HORIZONTAL_PASS=1;const T=new hi;T.setAttribute("position",new fa(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new we(T,g),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bc;let S=this.type;this.render=function(N,I,E){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||N.length===0)return;this.type===pv&&(le("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Bc);const z=r.getRenderTarget(),Z=r.getActiveCubeFace(),G=r.getActiveMipmapLevel(),Y=r.state;Y.setBlending(Fa),Y.buffers.depth.getReversed()===!0?Y.buffers.color.setClear(0,0,0,0):Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const lt=S!==this.type;lt&&I.traverse(function(ht){ht.material&&(Array.isArray(ht.material)?ht.material.forEach(k=>k.needsUpdate=!0):ht.material.needsUpdate=!0)});for(let ht=0,k=N.length;ht<k;ht++){const O=N[ht],F=O.shadow;if(F===void 0){le("WebGLShadowMap:",O,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;l.copy(F.mapSize);const st=F.getFrameExtents();l.multiply(st),c.copy(F.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(c.x=Math.floor(_/st.x),l.x=c.x*st.x,F.mapSize.x=c.x),l.y>_&&(c.y=Math.floor(_/st.y),l.y=c.y*st.y,F.mapSize.y=c.y));const _t=r.state.buffers.depth.getReversed();if(F.camera._reversedDepth=_t,F.map===null||lt===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===Ko){if(O.isPointLight){le("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new ua(l.x,l.y,{format:Qs,type:Ga,minFilter:Kn,magFilter:Kn,generateMipmaps:!1}),F.map.texture.name=O.name+".shadowMap",F.map.depthTexture=new Zr(l.x,l.y,oa),F.map.depthTexture.name=O.name+".shadowMapDepth",F.map.depthTexture.format=Ha,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Xn,F.map.depthTexture.magFilter=Xn}else O.isPointLight?(F.map=new qv(l.x),F.map.depthTexture=new _M(l.x,ha)):(F.map=new ua(l.x,l.y),F.map.depthTexture=new Zr(l.x,l.y,ha)),F.map.depthTexture.name=O.name+".shadowMap",F.map.depthTexture.format=Ha,this.type===Bc?(F.map.depthTexture.compareFunction=_t?ep:tp,F.map.depthTexture.minFilter=Kn,F.map.depthTexture.magFilter=Kn):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Xn,F.map.depthTexture.magFilter=Xn);F.camera.updateProjectionMatrix()}const Mt=F.map.isWebGLCubeRenderTarget?6:1;for(let P=0;P<Mt;P++){if(F.map.isWebGLCubeRenderTarget)r.setRenderTarget(F.map,P),r.clear();else{P===0&&(r.setRenderTarget(F.map),r.clear());const J=F.getViewport(P);h.set(c.x*J.x,c.y*J.y,c.x*J.z,c.y*J.w),Y.viewport(h)}if(O.isPointLight){const J=F.camera,bt=F.matrix,wt=O.distance||J.far;wt!==J.far&&(J.far=wt,J.updateProjectionMatrix()),Zo.setFromMatrixPosition(O.matrixWorld),J.position.copy(Zo),jh.copy(J.position),jh.add(CA[P]),J.up.copy(wA[P]),J.lookAt(jh),J.updateMatrixWorld(),bt.makeTranslation(-Zo.x,-Zo.y,-Zo.z),ov.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),F._frustum.setFromProjectionMatrix(ov,J.coordinateSystem,J.reversedDepth)}else F.updateMatrices(O);s=F.getFrustum(),U(I,E,F.camera,O,this.type)}F.isPointLightShadow!==!0&&this.type===Ko&&C(F,E),F.needsUpdate=!1}S=this.type,M.needsUpdate=!1,r.setRenderTarget(z,Z,G)};function C(N,I){const E=t.update(w);g.defines.VSM_SAMPLES!==N.blurSamples&&(g.defines.VSM_SAMPLES=N.blurSamples,y.defines.VSM_SAMPLES=N.blurSamples,g.needsUpdate=!0,y.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new ua(l.x,l.y,{format:Qs,type:Ga})),g.uniforms.shadow_pass.value=N.map.depthTexture,g.uniforms.resolution.value=N.mapSize,g.uniforms.radius.value=N.radius,r.setRenderTarget(N.mapPass),r.clear(),r.renderBufferDirect(I,null,E,g,w,null),y.uniforms.shadow_pass.value=N.mapPass.texture,y.uniforms.resolution.value=N.mapSize,y.uniforms.radius.value=N.radius,r.setRenderTarget(N.map),r.clear(),r.renderBufferDirect(I,null,E,y,w,null)}function L(N,I,E,z){let Z=null;const G=E.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(G!==void 0)Z=G;else if(Z=E.isPointLight===!0?m:d,r.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const Y=Z.uuid,lt=I.uuid;let ht=p[Y];ht===void 0&&(ht={},p[Y]=ht);let k=ht[lt];k===void 0&&(k=Z.clone(),ht[lt]=k,I.addEventListener("dispose",V)),Z=k}if(Z.visible=I.visible,Z.wireframe=I.wireframe,z===Ko?Z.side=I.shadowSide!==null?I.shadowSide:I.side:Z.side=I.shadowSide!==null?I.shadowSide:x[I.side],Z.alphaMap=I.alphaMap,Z.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,Z.map=I.map,Z.clipShadows=I.clipShadows,Z.clippingPlanes=I.clippingPlanes,Z.clipIntersection=I.clipIntersection,Z.displacementMap=I.displacementMap,Z.displacementScale=I.displacementScale,Z.displacementBias=I.displacementBias,Z.wireframeLinewidth=I.wireframeLinewidth,Z.linewidth=I.linewidth,E.isPointLight===!0&&Z.isMeshDistanceMaterial===!0){const Y=r.properties.get(Z);Y.light=E}return Z}function U(N,I,E,z,Z){if(N.visible===!1)return;if(N.layers.test(I.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&Z===Ko)&&(!N.frustumCulled||s.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,N.matrixWorld);const lt=t.update(N),ht=N.material;if(Array.isArray(ht)){const k=lt.groups;for(let O=0,F=k.length;O<F;O++){const st=k[O],_t=ht[st.materialIndex];if(_t&&_t.visible){const Mt=L(N,_t,z,Z);N.onBeforeShadow(r,N,I,E,lt,Mt,st),r.renderBufferDirect(E,null,lt,Mt,N,st),N.onAfterShadow(r,N,I,E,lt,Mt,st)}}}else if(ht.visible){const k=L(N,ht,z,Z);N.onBeforeShadow(r,N,I,E,lt,k,null),r.renderBufferDirect(E,null,lt,k,N,null),N.onAfterShadow(r,N,I,E,lt,k,null)}}const Y=N.children;for(let lt=0,ht=Y.length;lt<ht;lt++)U(Y[lt],I,E,z,Z)}function V(N){N.target.removeEventListener("dispose",V);for(const E in p){const z=p[E],Z=N.target.uuid;Z in z&&(z[Z].dispose(),delete z[Z])}}}function NA(r,t){function i(){let H=!1;const Tt=new Sn;let ft=null;const Lt=new Sn(0,0,0,0);return{setMask:function(Dt){ft!==Dt&&!H&&(r.colorMask(Dt,Dt,Dt,Dt),ft=Dt)},setLocked:function(Dt){H=Dt},setClear:function(Dt,St,Ht,Kt,re){re===!0&&(Dt*=Kt,St*=Kt,Ht*=Kt),Tt.set(Dt,St,Ht,Kt),Lt.equals(Tt)===!1&&(r.clearColor(Dt,St,Ht,Kt),Lt.copy(Tt))},reset:function(){H=!1,ft=null,Lt.set(-1,0,0,0)}}}function s(){let H=!1,Tt=!1,ft=null,Lt=null,Dt=null;return{setReversed:function(St){if(Tt!==St){const Ht=t.get("EXT_clip_control");St?Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.ZERO_TO_ONE_EXT):Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.NEGATIVE_ONE_TO_ONE_EXT),Tt=St;const Kt=Dt;Dt=null,this.setClear(Kt)}},getReversed:function(){return Tt},setTest:function(St){St?Rt(r.DEPTH_TEST):Ft(r.DEPTH_TEST)},setMask:function(St){ft!==St&&!H&&(r.depthMask(St),ft=St)},setFunc:function(St){if(Tt&&(St=Wy[St]),Lt!==St){switch(St){case td:r.depthFunc(r.NEVER);break;case ed:r.depthFunc(r.ALWAYS);break;case nd:r.depthFunc(r.LESS);break;case Yr:r.depthFunc(r.LEQUAL);break;case id:r.depthFunc(r.EQUAL);break;case ad:r.depthFunc(r.GEQUAL);break;case sd:r.depthFunc(r.GREATER);break;case rd:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Lt=St}},setLocked:function(St){H=St},setClear:function(St){Dt!==St&&(Dt=St,Tt&&(St=1-St),r.clearDepth(St))},reset:function(){H=!1,ft=null,Lt=null,Dt=null,Tt=!1}}}function l(){let H=!1,Tt=null,ft=null,Lt=null,Dt=null,St=null,Ht=null,Kt=null,re=null;return{setTest:function(ue){H||(ue?Rt(r.STENCIL_TEST):Ft(r.STENCIL_TEST))},setMask:function(ue){Tt!==ue&&!H&&(r.stencilMask(ue),Tt=ue)},setFunc:function(ue,nn,Fe){(ft!==ue||Lt!==nn||Dt!==Fe)&&(r.stencilFunc(ue,nn,Fe),ft=ue,Lt=nn,Dt=Fe)},setOp:function(ue,nn,Fe){(St!==ue||Ht!==nn||Kt!==Fe)&&(r.stencilOp(ue,nn,Fe),St=ue,Ht=nn,Kt=Fe)},setLocked:function(ue){H=ue},setClear:function(ue){re!==ue&&(r.clearStencil(ue),re=ue)},reset:function(){H=!1,Tt=null,ft=null,Lt=null,Dt=null,St=null,Ht=null,Kt=null,re=null}}}const c=new i,h=new s,d=new l,m=new WeakMap,p=new WeakMap;let _={},x={},g={},y=new WeakMap,T=[],w=null,M=!1,S=null,C=null,L=null,U=null,V=null,N=null,I=null,E=new xe(0,0,0),z=0,Z=!1,G=null,Y=null,lt=null,ht=null,k=null;const O=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,st=0;const _t=r.getParameter(r.VERSION);_t.indexOf("WebGL")!==-1?(st=parseFloat(/^WebGL (\d)/.exec(_t)[1]),F=st>=1):_t.indexOf("OpenGL ES")!==-1&&(st=parseFloat(/^OpenGL ES (\d)/.exec(_t)[1]),F=st>=2);let Mt=null,P={};const J=r.getParameter(r.SCISSOR_BOX),bt=r.getParameter(r.VIEWPORT),wt=new Sn().fromArray(J),Ct=new Sn().fromArray(bt);function rt(H,Tt,ft,Lt){const Dt=new Uint8Array(4),St=r.createTexture();r.bindTexture(H,St),r.texParameteri(H,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(H,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ht=0;Ht<ft;Ht++)H===r.TEXTURE_3D||H===r.TEXTURE_2D_ARRAY?r.texImage3D(Tt,0,r.RGBA,1,1,Lt,0,r.RGBA,r.UNSIGNED_BYTE,Dt):r.texImage2D(Tt+Ht,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Dt);return St}const Et={};Et[r.TEXTURE_2D]=rt(r.TEXTURE_2D,r.TEXTURE_2D,1),Et[r.TEXTURE_CUBE_MAP]=rt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Et[r.TEXTURE_2D_ARRAY]=rt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Et[r.TEXTURE_3D]=rt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),Rt(r.DEPTH_TEST),h.setFunc(Yr),Oe(!1),Ge(a_),Rt(r.CULL_FACE),ye(Fa);function Rt(H){_[H]!==!0&&(r.enable(H),_[H]=!0)}function Ft(H){_[H]!==!1&&(r.disable(H),_[H]=!1)}function se(H,Tt){return g[H]!==Tt?(r.bindFramebuffer(H,Tt),g[H]=Tt,H===r.DRAW_FRAMEBUFFER&&(g[r.FRAMEBUFFER]=Tt),H===r.FRAMEBUFFER&&(g[r.DRAW_FRAMEBUFFER]=Tt),!0):!1}function $t(H,Tt){let ft=T,Lt=!1;if(H){ft=y.get(Tt),ft===void 0&&(ft=[],y.set(Tt,ft));const Dt=H.textures;if(ft.length!==Dt.length||ft[0]!==r.COLOR_ATTACHMENT0){for(let St=0,Ht=Dt.length;St<Ht;St++)ft[St]=r.COLOR_ATTACHMENT0+St;ft.length=Dt.length,Lt=!0}}else ft[0]!==r.BACK&&(ft[0]=r.BACK,Lt=!0);Lt&&r.drawBuffers(ft)}function Ie(H){return w!==H?(r.useProgram(H),w=H,!0):!1}const ce={[qs]:r.FUNC_ADD,[py]:r.FUNC_SUBTRACT,[my]:r.FUNC_REVERSE_SUBTRACT};ce[gy]=r.MIN,ce[_y]=r.MAX;const me={[vy]:r.ZERO,[xy]:r.ONE,[Sy]:r.SRC_COLOR,[Jh]:r.SRC_ALPHA,[Ay]:r.SRC_ALPHA_SATURATE,[Ey]:r.DST_COLOR,[My]:r.DST_ALPHA,[yy]:r.ONE_MINUS_SRC_COLOR,[$h]:r.ONE_MINUS_SRC_ALPHA,[Ty]:r.ONE_MINUS_DST_COLOR,[by]:r.ONE_MINUS_DST_ALPHA,[Ry]:r.CONSTANT_COLOR,[Cy]:r.ONE_MINUS_CONSTANT_COLOR,[wy]:r.CONSTANT_ALPHA,[Dy]:r.ONE_MINUS_CONSTANT_ALPHA};function ye(H,Tt,ft,Lt,Dt,St,Ht,Kt,re,ue){if(H===Fa){M===!0&&(Ft(r.BLEND),M=!1);return}if(M===!1&&(Rt(r.BLEND),M=!0),H!==dy){if(H!==S||ue!==Z){if((C!==qs||V!==qs)&&(r.blendEquation(r.FUNC_ADD),C=qs,V=qs),ue)switch(H){case Wr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Jo:r.blendFunc(r.ONE,r.ONE);break;case s_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case r_:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:De("WebGLState: Invalid blending: ",H);break}else switch(H){case Wr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Jo:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case s_:De("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case r_:De("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:De("WebGLState: Invalid blending: ",H);break}L=null,U=null,N=null,I=null,E.set(0,0,0),z=0,S=H,Z=ue}return}Dt=Dt||Tt,St=St||ft,Ht=Ht||Lt,(Tt!==C||Dt!==V)&&(r.blendEquationSeparate(ce[Tt],ce[Dt]),C=Tt,V=Dt),(ft!==L||Lt!==U||St!==N||Ht!==I)&&(r.blendFuncSeparate(me[ft],me[Lt],me[St],me[Ht]),L=ft,U=Lt,N=St,I=Ht),(Kt.equals(E)===!1||re!==z)&&(r.blendColor(Kt.r,Kt.g,Kt.b,re),E.copy(Kt),z=re),S=H,Z=!1}function qt(H,Tt){H.side===ra?Ft(r.CULL_FACE):Rt(r.CULL_FACE);let ft=H.side===ii;Tt&&(ft=!ft),Oe(ft),H.blending===Wr&&H.transparent===!1?ye(Fa):ye(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),h.setFunc(H.depthFunc),h.setTest(H.depthTest),h.setMask(H.depthWrite),c.setMask(H.colorWrite);const Lt=H.stencilWrite;d.setTest(Lt),Lt&&(d.setMask(H.stencilWriteMask),d.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),d.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),q(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?Rt(r.SAMPLE_ALPHA_TO_COVERAGE):Ft(r.SAMPLE_ALPHA_TO_COVERAGE)}function Oe(H){G!==H&&(H?r.frontFace(r.CW):r.frontFace(r.CCW),G=H)}function Ge(H){H!==fy?(Rt(r.CULL_FACE),H!==Y&&(H===a_?r.cullFace(r.BACK):H===hy?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ft(r.CULL_FACE),Y=H}function Dn(H){H!==lt&&(F&&r.lineWidth(H),lt=H)}function q(H,Tt,ft){H?(Rt(r.POLYGON_OFFSET_FILL),(ht!==Tt||k!==ft)&&(ht=Tt,k=ft,h.getReversed()&&(Tt=-Tt),r.polygonOffset(Tt,ft))):Ft(r.POLYGON_OFFSET_FILL)}function on(H){H?Rt(r.SCISSOR_TEST):Ft(r.SCISSOR_TEST)}function ge(H){H===void 0&&(H=r.TEXTURE0+O-1),Mt!==H&&(r.activeTexture(H),Mt=H)}function Pe(H,Tt,ft){ft===void 0&&(Mt===null?ft=r.TEXTURE0+O-1:ft=Mt);let Lt=P[ft];Lt===void 0&&(Lt={type:void 0,texture:void 0},P[ft]=Lt),(Lt.type!==H||Lt.texture!==Tt)&&(Mt!==ft&&(r.activeTexture(ft),Mt=ft),r.bindTexture(H,Tt||Et[H]),Lt.type=H,Lt.texture=Tt)}function Nt(){const H=P[Mt];H!==void 0&&H.type!==void 0&&(r.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function Qe(){try{r.compressedTexImage2D(...arguments)}catch(H){De("WebGLState:",H)}}function D(){try{r.compressedTexImage3D(...arguments)}catch(H){De("WebGLState:",H)}}function b(){try{r.texSubImage2D(...arguments)}catch(H){De("WebGLState:",H)}}function $(){try{r.texSubImage3D(...arguments)}catch(H){De("WebGLState:",H)}}function mt(){try{r.compressedTexSubImage2D(...arguments)}catch(H){De("WebGLState:",H)}}function At(){try{r.compressedTexSubImage3D(...arguments)}catch(H){De("WebGLState:",H)}}function Ut(){try{r.texStorage2D(...arguments)}catch(H){De("WebGLState:",H)}}function Ot(){try{r.texStorage3D(...arguments)}catch(H){De("WebGLState:",H)}}function ut(){try{r.texImage2D(...arguments)}catch(H){De("WebGLState:",H)}}function dt(){try{r.texImage3D(...arguments)}catch(H){De("WebGLState:",H)}}function Pt(H){return x[H]!==void 0?x[H]:r.getParameter(H)}function zt(H,Tt){x[H]!==Tt&&(r.pixelStorei(H,Tt),x[H]=Tt)}function xt(H){wt.equals(H)===!1&&(r.scissor(H.x,H.y,H.z,H.w),wt.copy(H))}function pt(H){Ct.equals(H)===!1&&(r.viewport(H.x,H.y,H.z,H.w),Ct.copy(H))}function jt(H,Tt){let ft=p.get(Tt);ft===void 0&&(ft=new WeakMap,p.set(Tt,ft));let Lt=ft.get(H);Lt===void 0&&(Lt=r.getUniformBlockIndex(Tt,H.name),ft.set(H,Lt))}function Yt(H,Tt){const Lt=p.get(Tt).get(H);m.get(Tt)!==Lt&&(r.uniformBlockBinding(Tt,Lt,H.__bindingPointIndex),m.set(Tt,Lt))}function te(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),h.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),_={},x={},Mt=null,P={},g={},y=new WeakMap,T=[],w=null,M=!1,S=null,C=null,L=null,U=null,V=null,N=null,I=null,E=new xe(0,0,0),z=0,Z=!1,G=null,Y=null,lt=null,ht=null,k=null,wt.set(0,0,r.canvas.width,r.canvas.height),Ct.set(0,0,r.canvas.width,r.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:Rt,disable:Ft,bindFramebuffer:se,drawBuffers:$t,useProgram:Ie,setBlending:ye,setMaterial:qt,setFlipSided:Oe,setCullFace:Ge,setLineWidth:Dn,setPolygonOffset:q,setScissorTest:on,activeTexture:ge,bindTexture:Pe,unbindTexture:Nt,compressedTexImage2D:Qe,compressedTexImage3D:D,texImage2D:ut,texImage3D:dt,pixelStorei:zt,getParameter:Pt,updateUBOMapping:jt,uniformBlockBinding:Yt,texStorage2D:Ut,texStorage3D:Ot,texSubImage2D:b,texSubImage3D:$,compressedTexSubImage2D:mt,compressedTexSubImage3D:At,scissor:xt,viewport:pt,reset:te}}function UA(r,t,i,s,l,c,h){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new ne,_=new WeakMap,x=new Set;let g;const y=new WeakMap;let T=!1;try{T=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(D,b){return T?new OffscreenCanvas(D,b):Zc("canvas")}function M(D,b,$){let mt=1;const At=Qe(D);if((At.width>$||At.height>$)&&(mt=$/Math.max(At.width,At.height)),mt<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const Ut=Math.floor(mt*At.width),Ot=Math.floor(mt*At.height);g===void 0&&(g=w(Ut,Ot));const ut=b?w(Ut,Ot):g;return ut.width=Ut,ut.height=Ot,ut.getContext("2d").drawImage(D,0,0,Ut,Ot),le("WebGLRenderer: Texture has been resized from ("+At.width+"x"+At.height+") to ("+Ut+"x"+Ot+")."),ut}else return"data"in D&&le("WebGLRenderer: Image in DataTexture is too big ("+At.width+"x"+At.height+")."),D;return D}function S(D){return D.generateMipmaps}function C(D){r.generateMipmap(D)}function L(D){return D.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?r.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function U(D,b,$,mt,At,Ut=!1){if(D!==null){if(r[D]!==void 0)return r[D];le("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let Ot;mt&&(Ot=t.get("EXT_texture_norm16"),Ot||le("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ut=b;if(b===r.RED&&($===r.FLOAT&&(ut=r.R32F),$===r.HALF_FLOAT&&(ut=r.R16F),$===r.UNSIGNED_BYTE&&(ut=r.R8),$===r.UNSIGNED_SHORT&&Ot&&(ut=Ot.R16_EXT),$===r.SHORT&&Ot&&(ut=Ot.R16_SNORM_EXT)),b===r.RED_INTEGER&&($===r.UNSIGNED_BYTE&&(ut=r.R8UI),$===r.UNSIGNED_SHORT&&(ut=r.R16UI),$===r.UNSIGNED_INT&&(ut=r.R32UI),$===r.BYTE&&(ut=r.R8I),$===r.SHORT&&(ut=r.R16I),$===r.INT&&(ut=r.R32I)),b===r.RG&&($===r.FLOAT&&(ut=r.RG32F),$===r.HALF_FLOAT&&(ut=r.RG16F),$===r.UNSIGNED_BYTE&&(ut=r.RG8),$===r.UNSIGNED_SHORT&&Ot&&(ut=Ot.RG16_EXT),$===r.SHORT&&Ot&&(ut=Ot.RG16_SNORM_EXT)),b===r.RG_INTEGER&&($===r.UNSIGNED_BYTE&&(ut=r.RG8UI),$===r.UNSIGNED_SHORT&&(ut=r.RG16UI),$===r.UNSIGNED_INT&&(ut=r.RG32UI),$===r.BYTE&&(ut=r.RG8I),$===r.SHORT&&(ut=r.RG16I),$===r.INT&&(ut=r.RG32I)),b===r.RGB_INTEGER&&($===r.UNSIGNED_BYTE&&(ut=r.RGB8UI),$===r.UNSIGNED_SHORT&&(ut=r.RGB16UI),$===r.UNSIGNED_INT&&(ut=r.RGB32UI),$===r.BYTE&&(ut=r.RGB8I),$===r.SHORT&&(ut=r.RGB16I),$===r.INT&&(ut=r.RGB32I)),b===r.RGBA_INTEGER&&($===r.UNSIGNED_BYTE&&(ut=r.RGBA8UI),$===r.UNSIGNED_SHORT&&(ut=r.RGBA16UI),$===r.UNSIGNED_INT&&(ut=r.RGBA32UI),$===r.BYTE&&(ut=r.RGBA8I),$===r.SHORT&&(ut=r.RGBA16I),$===r.INT&&(ut=r.RGBA32I)),b===r.RGB&&($===r.UNSIGNED_SHORT&&Ot&&(ut=Ot.RGB16_EXT),$===r.SHORT&&Ot&&(ut=Ot.RGB16_SNORM_EXT),$===r.UNSIGNED_INT_5_9_9_9_REV&&(ut=r.RGB9_E5),$===r.UNSIGNED_INT_10F_11F_11F_REV&&(ut=r.R11F_G11F_B10F)),b===r.RGBA){const dt=Ut?jc:Ce.getTransfer(At);$===r.FLOAT&&(ut=r.RGBA32F),$===r.HALF_FLOAT&&(ut=r.RGBA16F),$===r.UNSIGNED_BYTE&&(ut=dt===Ye?r.SRGB8_ALPHA8:r.RGBA8),$===r.UNSIGNED_SHORT&&Ot&&(ut=Ot.RGBA16_EXT),$===r.SHORT&&Ot&&(ut=Ot.RGBA16_SNORM_EXT),$===r.UNSIGNED_SHORT_4_4_4_4&&(ut=r.RGBA4),$===r.UNSIGNED_SHORT_5_5_5_1&&(ut=r.RGB5_A1)}return(ut===r.R16F||ut===r.R32F||ut===r.RG16F||ut===r.RG32F||ut===r.RGBA16F||ut===r.RGBA32F)&&t.get("EXT_color_buffer_float"),ut}function V(D,b){let $;return D?b===null||b===ha||b===il?$=r.DEPTH24_STENCIL8:b===oa?$=r.DEPTH32F_STENCIL8:b===nl&&($=r.DEPTH24_STENCIL8,le("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===ha||b===il?$=r.DEPTH_COMPONENT24:b===oa?$=r.DEPTH_COMPONENT32F:b===nl&&($=r.DEPTH_COMPONENT16),$}function N(D,b){return S(D)===!0||D.isFramebufferTexture&&D.minFilter!==Xn&&D.minFilter!==Kn?Math.log2(Math.max(b.width,b.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?b.mipmaps.length:1}function I(D){const b=D.target;b.removeEventListener("dispose",I),z(b),b.isVideoTexture&&_.delete(b),b.isHTMLTexture&&x.delete(b)}function E(D){const b=D.target;b.removeEventListener("dispose",E),G(b)}function z(D){const b=s.get(D);if(b.__webglInit===void 0)return;const $=D.source,mt=y.get($);if(mt){const At=mt[b.__cacheKey];At.usedTimes--,At.usedTimes===0&&Z(D),Object.keys(mt).length===0&&y.delete($)}s.remove(D)}function Z(D){const b=s.get(D);r.deleteTexture(b.__webglTexture);const $=D.source,mt=y.get($);delete mt[b.__cacheKey],h.memory.textures--}function G(D){const b=s.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),s.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let mt=0;mt<6;mt++){if(Array.isArray(b.__webglFramebuffer[mt]))for(let At=0;At<b.__webglFramebuffer[mt].length;At++)r.deleteFramebuffer(b.__webglFramebuffer[mt][At]);else r.deleteFramebuffer(b.__webglFramebuffer[mt]);b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer[mt])}else{if(Array.isArray(b.__webglFramebuffer))for(let mt=0;mt<b.__webglFramebuffer.length;mt++)r.deleteFramebuffer(b.__webglFramebuffer[mt]);else r.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&r.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let mt=0;mt<b.__webglColorRenderbuffer.length;mt++)b.__webglColorRenderbuffer[mt]&&r.deleteRenderbuffer(b.__webglColorRenderbuffer[mt]);b.__webglDepthRenderbuffer&&r.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const $=D.textures;for(let mt=0,At=$.length;mt<At;mt++){const Ut=s.get($[mt]);Ut.__webglTexture&&(r.deleteTexture(Ut.__webglTexture),h.memory.textures--),s.remove($[mt])}s.remove(D)}let Y=0;function lt(){Y=0}function ht(){return Y}function k(D){Y=D}function O(){const D=Y;return D>=l.maxTextures&&le("WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+l.maxTextures),Y+=1,D}function F(D){const b=[];return b.push(D.wrapS),b.push(D.wrapT),b.push(D.wrapR||0),b.push(D.magFilter),b.push(D.minFilter),b.push(D.anisotropy),b.push(D.internalFormat),b.push(D.format),b.push(D.type),b.push(D.generateMipmaps),b.push(D.premultiplyAlpha),b.push(D.flipY),b.push(D.unpackAlignment),b.push(D.colorSpace),b.join()}function st(D,b){const $=s.get(D);if(D.isVideoTexture&&Pe(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&$.__version!==D.version){const mt=D.image;if(mt===null)le("WebGLRenderer: Texture marked for update but no image data found.");else if(mt.complete===!1)le("WebGLRenderer: Texture marked for update but image is incomplete");else{Ft($,D,b);return}}else D.isExternalTexture&&($.__webglTexture=D.sourceTexture?D.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,$.__webglTexture,r.TEXTURE0+b)}function _t(D,b){const $=s.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&$.__version!==D.version){Ft($,D,b);return}else D.isExternalTexture&&($.__webglTexture=D.sourceTexture?D.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,$.__webglTexture,r.TEXTURE0+b)}function Mt(D,b){const $=s.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&$.__version!==D.version){Ft($,D,b);return}i.bindTexture(r.TEXTURE_3D,$.__webglTexture,r.TEXTURE0+b)}function P(D,b){const $=s.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&$.__version!==D.version){se($,D,b);return}i.bindTexture(r.TEXTURE_CUBE_MAP,$.__webglTexture,r.TEXTURE0+b)}const J={[od]:r.REPEAT,[Ia]:r.CLAMP_TO_EDGE,[ld]:r.MIRRORED_REPEAT},bt={[Xn]:r.NEAREST,[Ly]:r.NEAREST_MIPMAP_NEAREST,[_c]:r.NEAREST_MIPMAP_LINEAR,[Kn]:r.LINEAR,[ph]:r.LINEAR_MIPMAP_NEAREST,[js]:r.LINEAR_MIPMAP_LINEAR},wt={[zy]:r.NEVER,[Hy]:r.ALWAYS,[Iy]:r.LESS,[tp]:r.LEQUAL,[Fy]:r.EQUAL,[ep]:r.GEQUAL,[By]:r.GREATER,[Gy]:r.NOTEQUAL};function Ct(D,b){if(b.type===oa&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Kn||b.magFilter===ph||b.magFilter===_c||b.magFilter===js||b.minFilter===Kn||b.minFilter===ph||b.minFilter===_c||b.minFilter===js)&&le("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(D,r.TEXTURE_WRAP_S,J[b.wrapS]),r.texParameteri(D,r.TEXTURE_WRAP_T,J[b.wrapT]),(D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY)&&r.texParameteri(D,r.TEXTURE_WRAP_R,J[b.wrapR]),r.texParameteri(D,r.TEXTURE_MAG_FILTER,bt[b.magFilter]),r.texParameteri(D,r.TEXTURE_MIN_FILTER,bt[b.minFilter]),b.compareFunction&&(r.texParameteri(D,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(D,r.TEXTURE_COMPARE_FUNC,wt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Xn||b.minFilter!==_c&&b.minFilter!==js||b.type===oa&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||s.get(b).__currentAnisotropy){const $=t.get("EXT_texture_filter_anisotropic");r.texParameterf(D,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),s.get(b).__currentAnisotropy=b.anisotropy}}}function rt(D,b){let $=!1;D.__webglInit===void 0&&(D.__webglInit=!0,b.addEventListener("dispose",I));const mt=b.source;let At=y.get(mt);At===void 0&&(At={},y.set(mt,At));const Ut=F(b);if(Ut!==D.__cacheKey){At[Ut]===void 0&&(At[Ut]={texture:r.createTexture(),usedTimes:0},h.memory.textures++,$=!0),At[Ut].usedTimes++;const Ot=At[D.__cacheKey];Ot!==void 0&&(At[D.__cacheKey].usedTimes--,Ot.usedTimes===0&&Z(b)),D.__cacheKey=Ut,D.__webglTexture=At[Ut].texture}return $}function Et(D,b,$){return Math.floor(Math.floor(D/$)/b)}function Rt(D,b,$,mt){const Ut=D.updateRanges;if(Ut.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,b.width,b.height,$,mt,b.data);else{Ut.sort((zt,xt)=>zt.start-xt.start);let Ot=0;for(let zt=1;zt<Ut.length;zt++){const xt=Ut[Ot],pt=Ut[zt],jt=xt.start+xt.count,Yt=Et(pt.start,b.width,4),te=Et(xt.start,b.width,4);pt.start<=jt+1&&Yt===te&&Et(pt.start+pt.count-1,b.width,4)===Yt?xt.count=Math.max(xt.count,pt.start+pt.count-xt.start):(++Ot,Ut[Ot]=pt)}Ut.length=Ot+1;const ut=i.getParameter(r.UNPACK_ROW_LENGTH),dt=i.getParameter(r.UNPACK_SKIP_PIXELS),Pt=i.getParameter(r.UNPACK_SKIP_ROWS);i.pixelStorei(r.UNPACK_ROW_LENGTH,b.width);for(let zt=0,xt=Ut.length;zt<xt;zt++){const pt=Ut[zt],jt=Math.floor(pt.start/4),Yt=Math.ceil(pt.count/4),te=jt%b.width,H=Math.floor(jt/b.width),Tt=Yt,ft=1;i.pixelStorei(r.UNPACK_SKIP_PIXELS,te),i.pixelStorei(r.UNPACK_SKIP_ROWS,H),i.texSubImage2D(r.TEXTURE_2D,0,te,H,Tt,ft,$,mt,b.data)}D.clearUpdateRanges(),i.pixelStorei(r.UNPACK_ROW_LENGTH,ut),i.pixelStorei(r.UNPACK_SKIP_PIXELS,dt),i.pixelStorei(r.UNPACK_SKIP_ROWS,Pt)}}function Ft(D,b,$){let mt=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(mt=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(mt=r.TEXTURE_3D);const At=rt(D,b),Ut=b.source;i.bindTexture(mt,D.__webglTexture,r.TEXTURE0+$);const Ot=s.get(Ut);if(Ut.version!==Ot.__version||At===!0){if(i.activeTexture(r.TEXTURE0+$),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){const ft=Ce.getPrimaries(Ce.workingColorSpace),Lt=b.colorSpace===xs?null:Ce.getPrimaries(b.colorSpace),Dt=b.colorSpace===xs||ft===Lt?r.NONE:r.BROWSER_DEFAULT_WEBGL;i.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Dt)}i.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment);let dt=M(b.image,!1,l.maxTextureSize);dt=Nt(b,dt);const Pt=c.convert(b.format,b.colorSpace),zt=c.convert(b.type);let xt=U(b.internalFormat,Pt,zt,b.normalized,b.colorSpace,b.isVideoTexture);Ct(mt,b);let pt;const jt=b.mipmaps,Yt=b.isVideoTexture!==!0,te=Ot.__version===void 0||At===!0,H=Ut.dataReady,Tt=N(b,dt);if(b.isDepthTexture)xt=V(b.format===Zs,b.type),te&&(Yt?i.texStorage2D(r.TEXTURE_2D,1,xt,dt.width,dt.height):i.texImage2D(r.TEXTURE_2D,0,xt,dt.width,dt.height,0,Pt,zt,null));else if(b.isDataTexture)if(jt.length>0){Yt&&te&&i.texStorage2D(r.TEXTURE_2D,Tt,xt,jt[0].width,jt[0].height);for(let ft=0,Lt=jt.length;ft<Lt;ft++)pt=jt[ft],Yt?H&&i.texSubImage2D(r.TEXTURE_2D,ft,0,0,pt.width,pt.height,Pt,zt,pt.data):i.texImage2D(r.TEXTURE_2D,ft,xt,pt.width,pt.height,0,Pt,zt,pt.data);b.generateMipmaps=!1}else Yt?(te&&i.texStorage2D(r.TEXTURE_2D,Tt,xt,dt.width,dt.height),H&&Rt(b,dt,Pt,zt)):i.texImage2D(r.TEXTURE_2D,0,xt,dt.width,dt.height,0,Pt,zt,dt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Yt&&te&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Tt,xt,jt[0].width,jt[0].height,dt.depth);for(let ft=0,Lt=jt.length;ft<Lt;ft++)if(pt=jt[ft],b.format!==Qi)if(Pt!==null)if(Yt){if(H)if(b.layerUpdates.size>0){const Dt=F_(pt.width,pt.height,b.format,b.type);for(const St of b.layerUpdates){const Ht=pt.data.subarray(St*Dt/pt.data.BYTES_PER_ELEMENT,(St+1)*Dt/pt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ft,0,0,St,pt.width,pt.height,1,Pt,Ht)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ft,0,0,0,pt.width,pt.height,dt.depth,Pt,pt.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ft,xt,pt.width,pt.height,dt.depth,0,pt.data,0,0);else le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Yt?H&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,ft,0,0,0,pt.width,pt.height,dt.depth,Pt,zt,pt.data):i.texImage3D(r.TEXTURE_2D_ARRAY,ft,xt,pt.width,pt.height,dt.depth,0,Pt,zt,pt.data)}else{Yt&&te&&i.texStorage2D(r.TEXTURE_2D,Tt,xt,jt[0].width,jt[0].height);for(let ft=0,Lt=jt.length;ft<Lt;ft++)pt=jt[ft],b.format!==Qi?Pt!==null?Yt?H&&i.compressedTexSubImage2D(r.TEXTURE_2D,ft,0,0,pt.width,pt.height,Pt,pt.data):i.compressedTexImage2D(r.TEXTURE_2D,ft,xt,pt.width,pt.height,0,pt.data):le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Yt?H&&i.texSubImage2D(r.TEXTURE_2D,ft,0,0,pt.width,pt.height,Pt,zt,pt.data):i.texImage2D(r.TEXTURE_2D,ft,xt,pt.width,pt.height,0,Pt,zt,pt.data)}else if(b.isDataArrayTexture)if(Yt){if(te&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Tt,xt,dt.width,dt.height,dt.depth),H)if(b.layerUpdates.size>0){const ft=F_(dt.width,dt.height,b.format,b.type);for(const Lt of b.layerUpdates){const Dt=dt.data.subarray(Lt*ft/dt.data.BYTES_PER_ELEMENT,(Lt+1)*ft/dt.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Lt,dt.width,dt.height,1,Pt,zt,Dt)}b.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,dt.width,dt.height,dt.depth,Pt,zt,dt.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,xt,dt.width,dt.height,dt.depth,0,Pt,zt,dt.data);else if(b.isData3DTexture)Yt?(te&&i.texStorage3D(r.TEXTURE_3D,Tt,xt,dt.width,dt.height,dt.depth),H&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,dt.width,dt.height,dt.depth,Pt,zt,dt.data)):i.texImage3D(r.TEXTURE_3D,0,xt,dt.width,dt.height,dt.depth,0,Pt,zt,dt.data);else if(b.isFramebufferTexture){if(te)if(Yt)i.texStorage2D(r.TEXTURE_2D,Tt,xt,dt.width,dt.height);else{let ft=dt.width,Lt=dt.height;for(let Dt=0;Dt<Tt;Dt++)i.texImage2D(r.TEXTURE_2D,Dt,xt,ft,Lt,0,Pt,zt,null),ft>>=1,Lt>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in r){const ft=r.canvas;if(ft.hasAttribute("layoutsubtree")||ft.setAttribute("layoutsubtree","true"),dt.parentNode!==ft){ft.appendChild(dt),x.add(b),ft.onpaint=Kt=>{const re=Kt.changedElements;for(const ue of x)re.includes(ue.image)&&(ue.needsUpdate=!0)},ft.requestPaint();return}const Lt=0,Dt=r.RGBA,St=r.RGBA,Ht=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,Lt,Dt,St,Ht,dt),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(jt.length>0){if(Yt&&te){const ft=Qe(jt[0]);i.texStorage2D(r.TEXTURE_2D,Tt,xt,ft.width,ft.height)}for(let ft=0,Lt=jt.length;ft<Lt;ft++)pt=jt[ft],Yt?H&&i.texSubImage2D(r.TEXTURE_2D,ft,0,0,Pt,zt,pt):i.texImage2D(r.TEXTURE_2D,ft,xt,Pt,zt,pt);b.generateMipmaps=!1}else if(Yt){if(te){const ft=Qe(dt);i.texStorage2D(r.TEXTURE_2D,Tt,xt,ft.width,ft.height)}H&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Pt,zt,dt)}else i.texImage2D(r.TEXTURE_2D,0,xt,Pt,zt,dt);S(b)&&C(mt),Ot.__version=Ut.version,b.onUpdate&&b.onUpdate(b)}D.__version=b.version}function se(D,b,$){if(b.image.length!==6)return;const mt=rt(D,b),At=b.source;i.bindTexture(r.TEXTURE_CUBE_MAP,D.__webglTexture,r.TEXTURE0+$);const Ut=s.get(At);if(At.version!==Ut.__version||mt===!0){i.activeTexture(r.TEXTURE0+$);const Ot=Ce.getPrimaries(Ce.workingColorSpace),ut=b.colorSpace===xs?null:Ce.getPrimaries(b.colorSpace),dt=b.colorSpace===xs||Ot===ut?r.NONE:r.BROWSER_DEFAULT_WEBGL;i.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);const Pt=b.isCompressedTexture||b.image[0].isCompressedTexture,zt=b.image[0]&&b.image[0].isDataTexture,xt=[];for(let St=0;St<6;St++)!Pt&&!zt?xt[St]=M(b.image[St],!0,l.maxCubemapSize):xt[St]=zt?b.image[St].image:b.image[St],xt[St]=Nt(b,xt[St]);const pt=xt[0],jt=c.convert(b.format,b.colorSpace),Yt=c.convert(b.type),te=U(b.internalFormat,jt,Yt,b.normalized,b.colorSpace),H=b.isVideoTexture!==!0,Tt=Ut.__version===void 0||mt===!0,ft=At.dataReady;let Lt=N(b,pt);Ct(r.TEXTURE_CUBE_MAP,b);let Dt;if(Pt){H&&Tt&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Lt,te,pt.width,pt.height);for(let St=0;St<6;St++){Dt=xt[St].mipmaps;for(let Ht=0;Ht<Dt.length;Ht++){const Kt=Dt[Ht];b.format!==Qi?jt!==null?H?ft&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,Ht,0,0,Kt.width,Kt.height,jt,Kt.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,Ht,te,Kt.width,Kt.height,0,Kt.data):le("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?ft&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,Ht,0,0,Kt.width,Kt.height,jt,Yt,Kt.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,Ht,te,Kt.width,Kt.height,0,jt,Yt,Kt.data)}}}else{if(Dt=b.mipmaps,H&&Tt){Dt.length>0&&Lt++;const St=Qe(xt[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Lt,te,St.width,St.height)}for(let St=0;St<6;St++)if(zt){H?ft&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,0,0,xt[St].width,xt[St].height,jt,Yt,xt[St].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,te,xt[St].width,xt[St].height,0,jt,Yt,xt[St].data);for(let Ht=0;Ht<Dt.length;Ht++){const re=Dt[Ht].image[St].image;H?ft&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,Ht+1,0,0,re.width,re.height,jt,Yt,re.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,Ht+1,te,re.width,re.height,0,jt,Yt,re.data)}}else{H?ft&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,0,0,jt,Yt,xt[St]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,te,jt,Yt,xt[St]);for(let Ht=0;Ht<Dt.length;Ht++){const Kt=Dt[Ht];H?ft&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,Ht+1,0,0,jt,Yt,Kt.image[St]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,Ht+1,te,jt,Yt,Kt.image[St])}}}S(b)&&C(r.TEXTURE_CUBE_MAP),Ut.__version=At.version,b.onUpdate&&b.onUpdate(b)}D.__version=b.version}function $t(D,b,$,mt,At,Ut){const Ot=c.convert($.format,$.colorSpace),ut=c.convert($.type),dt=U($.internalFormat,Ot,ut,$.normalized,$.colorSpace),Pt=s.get(b),zt=s.get($);if(zt.__renderTarget=b,!Pt.__hasExternalTextures){const xt=Math.max(1,b.width>>Ut),pt=Math.max(1,b.height>>Ut);At===r.TEXTURE_3D||At===r.TEXTURE_2D_ARRAY?i.texImage3D(At,Ut,dt,xt,pt,b.depth,0,Ot,ut,null):i.texImage2D(At,Ut,dt,xt,pt,0,Ot,ut,null)}i.bindFramebuffer(r.FRAMEBUFFER,D),ge(b)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,mt,At,zt.__webglTexture,0,on(b)):(At===r.TEXTURE_2D||At>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&At<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,mt,At,zt.__webglTexture,Ut),i.bindFramebuffer(r.FRAMEBUFFER,null)}function Ie(D,b,$){if(r.bindRenderbuffer(r.RENDERBUFFER,D),b.depthBuffer){const mt=b.depthTexture,At=mt&&mt.isDepthTexture?mt.type:null,Ut=V(b.stencilBuffer,At),Ot=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;ge(b)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,on(b),Ut,b.width,b.height):$?r.renderbufferStorageMultisample(r.RENDERBUFFER,on(b),Ut,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,Ut,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ot,r.RENDERBUFFER,D)}else{const mt=b.textures;for(let At=0;At<mt.length;At++){const Ut=mt[At],Ot=c.convert(Ut.format,Ut.colorSpace),ut=c.convert(Ut.type),dt=U(Ut.internalFormat,Ot,ut,Ut.normalized,Ut.colorSpace);ge(b)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,on(b),dt,b.width,b.height):$?r.renderbufferStorageMultisample(r.RENDERBUFFER,on(b),dt,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,dt,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ce(D,b,$){const mt=b.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,D),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const At=s.get(b.depthTexture);if(At.__renderTarget=b,(!At.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),mt){if(At.__webglInit===void 0&&(At.__webglInit=!0,b.depthTexture.addEventListener("dispose",I)),At.__webglTexture===void 0){At.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,At.__webglTexture),Ct(r.TEXTURE_CUBE_MAP,b.depthTexture);const Pt=c.convert(b.depthTexture.format),zt=c.convert(b.depthTexture.type);let xt;b.depthTexture.format===Ha?xt=r.DEPTH_COMPONENT24:b.depthTexture.format===Zs&&(xt=r.DEPTH24_STENCIL8);for(let pt=0;pt<6;pt++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,xt,b.width,b.height,0,Pt,zt,null)}}else st(b.depthTexture,0);const Ut=At.__webglTexture,Ot=on(b),ut=mt?r.TEXTURE_CUBE_MAP_POSITIVE_X+$:r.TEXTURE_2D,dt=b.depthTexture.format===Zs?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(b.depthTexture.format===Ha)ge(b)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,dt,ut,Ut,0,Ot):r.framebufferTexture2D(r.FRAMEBUFFER,dt,ut,Ut,0);else if(b.depthTexture.format===Zs)ge(b)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,dt,ut,Ut,0,Ot):r.framebufferTexture2D(r.FRAMEBUFFER,dt,ut,Ut,0);else throw new Error("Unknown depthTexture format")}function me(D){const b=s.get(D),$=D.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==D.depthTexture){const mt=D.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),mt){const At=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,mt.removeEventListener("dispose",At)};mt.addEventListener("dispose",At),b.__depthDisposeCallback=At}b.__boundDepthTexture=mt}if(D.depthTexture&&!b.__autoAllocateDepthBuffer)if($)for(let mt=0;mt<6;mt++)ce(b.__webglFramebuffer[mt],D,mt);else{const mt=D.texture.mipmaps;mt&&mt.length>0?ce(b.__webglFramebuffer[0],D,0):ce(b.__webglFramebuffer,D,0)}else if($){b.__webglDepthbuffer=[];for(let mt=0;mt<6;mt++)if(i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[mt]),b.__webglDepthbuffer[mt]===void 0)b.__webglDepthbuffer[mt]=r.createRenderbuffer(),Ie(b.__webglDepthbuffer[mt],D,!1);else{const At=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ut=b.__webglDepthbuffer[mt];r.bindRenderbuffer(r.RENDERBUFFER,Ut),r.framebufferRenderbuffer(r.FRAMEBUFFER,At,r.RENDERBUFFER,Ut)}}else{const mt=D.texture.mipmaps;if(mt&&mt.length>0?i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=r.createRenderbuffer(),Ie(b.__webglDepthbuffer,D,!1);else{const At=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ut=b.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Ut),r.framebufferRenderbuffer(r.FRAMEBUFFER,At,r.RENDERBUFFER,Ut)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function ye(D,b,$){const mt=s.get(D);b!==void 0&&$t(mt.__webglFramebuffer,D,D.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),$!==void 0&&me(D)}function qt(D){const b=D.texture,$=s.get(D),mt=s.get(b);D.addEventListener("dispose",E);const At=D.textures,Ut=D.isWebGLCubeRenderTarget===!0,Ot=At.length>1;if(Ot||(mt.__webglTexture===void 0&&(mt.__webglTexture=r.createTexture()),mt.__version=b.version,h.memory.textures++),Ut){$.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(b.mipmaps&&b.mipmaps.length>0){$.__webglFramebuffer[ut]=[];for(let dt=0;dt<b.mipmaps.length;dt++)$.__webglFramebuffer[ut][dt]=r.createFramebuffer()}else $.__webglFramebuffer[ut]=r.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){$.__webglFramebuffer=[];for(let ut=0;ut<b.mipmaps.length;ut++)$.__webglFramebuffer[ut]=r.createFramebuffer()}else $.__webglFramebuffer=r.createFramebuffer();if(Ot)for(let ut=0,dt=At.length;ut<dt;ut++){const Pt=s.get(At[ut]);Pt.__webglTexture===void 0&&(Pt.__webglTexture=r.createTexture(),h.memory.textures++)}if(D.samples>0&&ge(D)===!1){$.__webglMultisampledFramebuffer=r.createFramebuffer(),$.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let ut=0;ut<At.length;ut++){const dt=At[ut];$.__webglColorRenderbuffer[ut]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,$.__webglColorRenderbuffer[ut]);const Pt=c.convert(dt.format,dt.colorSpace),zt=c.convert(dt.type),xt=U(dt.internalFormat,Pt,zt,dt.normalized,dt.colorSpace,D.isXRRenderTarget===!0),pt=on(D);r.renderbufferStorageMultisample(r.RENDERBUFFER,pt,xt,D.width,D.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ut,r.RENDERBUFFER,$.__webglColorRenderbuffer[ut])}r.bindRenderbuffer(r.RENDERBUFFER,null),D.depthBuffer&&($.__webglDepthRenderbuffer=r.createRenderbuffer(),Ie($.__webglDepthRenderbuffer,D,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Ut){i.bindTexture(r.TEXTURE_CUBE_MAP,mt.__webglTexture),Ct(r.TEXTURE_CUBE_MAP,b);for(let ut=0;ut<6;ut++)if(b.mipmaps&&b.mipmaps.length>0)for(let dt=0;dt<b.mipmaps.length;dt++)$t($.__webglFramebuffer[ut][dt],D,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,dt);else $t($.__webglFramebuffer[ut],D,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);S(b)&&C(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ot){for(let ut=0,dt=At.length;ut<dt;ut++){const Pt=At[ut],zt=s.get(Pt);let xt=r.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(xt=D.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(xt,zt.__webglTexture),Ct(xt,Pt),$t($.__webglFramebuffer,D,Pt,r.COLOR_ATTACHMENT0+ut,xt,0),S(Pt)&&C(xt)}i.unbindTexture()}else{let ut=r.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(ut=D.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(ut,mt.__webglTexture),Ct(ut,b),b.mipmaps&&b.mipmaps.length>0)for(let dt=0;dt<b.mipmaps.length;dt++)$t($.__webglFramebuffer[dt],D,b,r.COLOR_ATTACHMENT0,ut,dt);else $t($.__webglFramebuffer,D,b,r.COLOR_ATTACHMENT0,ut,0);S(b)&&C(ut),i.unbindTexture()}D.depthBuffer&&me(D)}function Oe(D){const b=D.textures;for(let $=0,mt=b.length;$<mt;$++){const At=b[$];if(S(At)){const Ut=L(D),Ot=s.get(At).__webglTexture;i.bindTexture(Ut,Ot),C(Ut),i.unbindTexture()}}}const Ge=[],Dn=[];function q(D){if(D.samples>0){if(ge(D)===!1){const b=D.textures,$=D.width,mt=D.height;let At=r.COLOR_BUFFER_BIT;const Ut=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ot=s.get(D),ut=b.length>1;if(ut)for(let Pt=0;Pt<b.length;Pt++)i.bindFramebuffer(r.FRAMEBUFFER,Ot.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Pt,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Ot.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Pt,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Ot.__webglMultisampledFramebuffer);const dt=D.texture.mipmaps;dt&&dt.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ot.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ot.__webglFramebuffer);for(let Pt=0;Pt<b.length;Pt++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(At|=r.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(At|=r.STENCIL_BUFFER_BIT)),ut){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ot.__webglColorRenderbuffer[Pt]);const zt=s.get(b[Pt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,zt,0)}r.blitFramebuffer(0,0,$,mt,0,0,$,mt,At,r.NEAREST),m===!0&&(Ge.length=0,Dn.length=0,Ge.push(r.COLOR_ATTACHMENT0+Pt),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Ge.push(Ut),Dn.push(Ut),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Dn)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Ge))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ut)for(let Pt=0;Pt<b.length;Pt++){i.bindFramebuffer(r.FRAMEBUFFER,Ot.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Pt,r.RENDERBUFFER,Ot.__webglColorRenderbuffer[Pt]);const zt=s.get(b[Pt]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Ot.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Pt,r.TEXTURE_2D,zt,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ot.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&m){const b=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[b])}}}function on(D){return Math.min(l.maxSamples,D.samples)}function ge(D){const b=s.get(D);return D.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Pe(D){const b=h.render.frame;_.get(D)!==b&&(_.set(D,b),D.update())}function Nt(D,b){const $=D.colorSpace,mt=D.format,At=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||$!==Yc&&$!==xs&&(Ce.getTransfer($)===Ye?(mt!==Qi||At!==wi)&&le("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):De("WebGLTextures: Unsupported texture color space:",$)),b}function Qe(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(p.width=D.naturalWidth||D.width,p.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(p.width=D.displayWidth,p.height=D.displayHeight):(p.width=D.width,p.height=D.height),p}this.allocateTextureUnit=O,this.resetTextureUnits=lt,this.getTextureUnits=ht,this.setTextureUnits=k,this.setTexture2D=st,this.setTexture2DArray=_t,this.setTexture3D=Mt,this.setTextureCube=P,this.rebindTextures=ye,this.setupRenderTarget=qt,this.updateRenderTargetMipmap=Oe,this.updateMultisampleRenderTarget=q,this.setupDepthRenderbuffer=me,this.setupFrameBufferTexture=$t,this.useMultisampledRTT=ge,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function LA(r,t){function i(s,l=xs){let c;const h=Ce.getTransfer(l);if(s===wi)return r.UNSIGNED_BYTE;if(s===Zd)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Kd)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Tv)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===Av)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===bv)return r.BYTE;if(s===Ev)return r.SHORT;if(s===nl)return r.UNSIGNED_SHORT;if(s===jd)return r.INT;if(s===ha)return r.UNSIGNED_INT;if(s===oa)return r.FLOAT;if(s===Ga)return r.HALF_FLOAT;if(s===Rv)return r.ALPHA;if(s===Cv)return r.RGB;if(s===Qi)return r.RGBA;if(s===Ha)return r.DEPTH_COMPONENT;if(s===Zs)return r.DEPTH_STENCIL;if(s===wv)return r.RED;if(s===Qd)return r.RED_INTEGER;if(s===Qs)return r.RG;if(s===Jd)return r.RG_INTEGER;if(s===$d)return r.RGBA_INTEGER;if(s===Gc||s===Hc||s===Vc||s===kc)if(h===Ye)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Gc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Hc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Vc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===kc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Gc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Hc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Vc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===kc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===cd||s===ud||s===fd||s===hd)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===cd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===ud)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===fd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===hd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===dd||s===pd||s===md||s===gd||s===_d||s===Wc||s===vd)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===dd||s===pd)return h===Ye?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===md)return h===Ye?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===gd)return c.COMPRESSED_R11_EAC;if(s===_d)return c.COMPRESSED_SIGNED_R11_EAC;if(s===Wc)return c.COMPRESSED_RG11_EAC;if(s===vd)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===xd||s===Sd||s===yd||s===Md||s===bd||s===Ed||s===Td||s===Ad||s===Rd||s===Cd||s===wd||s===Dd||s===Nd||s===Ud)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===xd)return h===Ye?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Sd)return h===Ye?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===yd)return h===Ye?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Md)return h===Ye?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===bd)return h===Ye?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Ed)return h===Ye?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Td)return h===Ye?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Ad)return h===Ye?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Rd)return h===Ye?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Cd)return h===Ye?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===wd)return h===Ye?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Dd)return h===Ye?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Nd)return h===Ye?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Ud)return h===Ye?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Ld||s===Od||s===Pd)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===Ld)return h===Ye?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Od)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Pd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===zd||s===Id||s===qc||s===Fd)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===zd)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Id)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===qc)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Fd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===il?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const OA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,PA=`
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

}`;class zA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new Iv(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new da({vertexShader:OA,fragmentShader:PA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new we(new ll(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class IA extends Js{constructor(t,i){super();const s=this;let l=null,c=1,h=null,d="local-floor",m=1,p=null,_=null,x=null,g=null,y=null,T=null;const w=typeof XRWebGLBinding<"u",M=new zA,S={},C=i.getContextAttributes();let L=null,U=null;const V=[],N=[],I=new ne;let E=null;const z=new Ci;z.viewport=new Sn;const Z=new Ci;Z.viewport=new Sn;const G=[z,Z],Y=new qM;let lt=null,ht=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(rt){let Et=V[rt];return Et===void 0&&(Et=new Mh,V[rt]=Et),Et.getTargetRaySpace()},this.getControllerGrip=function(rt){let Et=V[rt];return Et===void 0&&(Et=new Mh,V[rt]=Et),Et.getGripSpace()},this.getHand=function(rt){let Et=V[rt];return Et===void 0&&(Et=new Mh,V[rt]=Et),Et.getHandSpace()};function k(rt){const Et=N.indexOf(rt.inputSource);if(Et===-1)return;const Rt=V[Et];Rt!==void 0&&(Rt.update(rt.inputSource,rt.frame,p||h),Rt.dispatchEvent({type:rt.type,data:rt.inputSource}))}function O(){l.removeEventListener("select",k),l.removeEventListener("selectstart",k),l.removeEventListener("selectend",k),l.removeEventListener("squeeze",k),l.removeEventListener("squeezestart",k),l.removeEventListener("squeezeend",k),l.removeEventListener("end",O),l.removeEventListener("inputsourceschange",F);for(let rt=0;rt<V.length;rt++){const Et=N[rt];Et!==null&&(N[rt]=null,V[rt].disconnect(Et))}lt=null,ht=null,M.reset();for(const rt in S)delete S[rt];t.setRenderTarget(L),y=null,g=null,x=null,l=null,U=null,Ct.stop(),s.isPresenting=!1,t.setPixelRatio(E),t.setSize(I.width,I.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(rt){c=rt,s.isPresenting===!0&&le("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(rt){d=rt,s.isPresenting===!0&&le("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(rt){p=rt},this.getBaseLayer=function(){return g!==null?g:y},this.getBinding=function(){return x===null&&w&&(x=new XRWebGLBinding(l,i)),x},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function(rt){if(l=rt,l!==null){if(L=t.getRenderTarget(),l.addEventListener("select",k),l.addEventListener("selectstart",k),l.addEventListener("selectend",k),l.addEventListener("squeeze",k),l.addEventListener("squeezestart",k),l.addEventListener("squeezeend",k),l.addEventListener("end",O),l.addEventListener("inputsourceschange",F),C.xrCompatible!==!0&&await i.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(I),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let Rt=null,Ft=null,se=null;C.depth&&(se=C.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Rt=C.stencil?Zs:Ha,Ft=C.stencil?il:ha);const $t={colorFormat:i.RGBA8,depthFormat:se,scaleFactor:c};x=this.getBinding(),g=x.createProjectionLayer($t),l.updateRenderState({layers:[g]}),t.setPixelRatio(1),t.setSize(g.textureWidth,g.textureHeight,!1),U=new ua(g.textureWidth,g.textureHeight,{format:Qi,type:wi,depthTexture:new Zr(g.textureWidth,g.textureHeight,Ft,void 0,void 0,void 0,void 0,void 0,void 0,Rt),stencilBuffer:C.stencil,colorSpace:t.outputColorSpace,samples:C.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const Rt={antialias:C.antialias,alpha:!0,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(l,i,Rt),l.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),U=new ua(y.framebufferWidth,y.framebufferHeight,{format:Qi,type:wi,colorSpace:t.outputColorSpace,stencilBuffer:C.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),Ct.setContext(l),Ct.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function F(rt){for(let Et=0;Et<rt.removed.length;Et++){const Rt=rt.removed[Et],Ft=N.indexOf(Rt);Ft>=0&&(N[Ft]=null,V[Ft].disconnect(Rt))}for(let Et=0;Et<rt.added.length;Et++){const Rt=rt.added[Et];let Ft=N.indexOf(Rt);if(Ft===-1){for(let $t=0;$t<V.length;$t++)if($t>=N.length){N.push(Rt),Ft=$t;break}else if(N[$t]===null){N[$t]=Rt,Ft=$t;break}if(Ft===-1)break}const se=V[Ft];se&&se.connect(Rt)}}const st=new W,_t=new W;function Mt(rt,Et,Rt){st.setFromMatrixPosition(Et.matrixWorld),_t.setFromMatrixPosition(Rt.matrixWorld);const Ft=st.distanceTo(_t),se=Et.projectionMatrix.elements,$t=Rt.projectionMatrix.elements,Ie=se[14]/(se[10]-1),ce=se[14]/(se[10]+1),me=(se[9]+1)/se[5],ye=(se[9]-1)/se[5],qt=(se[8]-1)/se[0],Oe=($t[8]+1)/$t[0],Ge=Ie*qt,Dn=Ie*Oe,q=Ft/(-qt+Oe),on=q*-qt;if(Et.matrixWorld.decompose(rt.position,rt.quaternion,rt.scale),rt.translateX(on),rt.translateZ(q),rt.matrixWorld.compose(rt.position,rt.quaternion,rt.scale),rt.matrixWorldInverse.copy(rt.matrixWorld).invert(),se[10]===-1)rt.projectionMatrix.copy(Et.projectionMatrix),rt.projectionMatrixInverse.copy(Et.projectionMatrixInverse);else{const ge=Ie+q,Pe=ce+q,Nt=Ge-on,Qe=Dn+(Ft-on),D=me*ce/Pe*ge,b=ye*ce/Pe*ge;rt.projectionMatrix.makePerspective(Nt,Qe,D,b,ge,Pe),rt.projectionMatrixInverse.copy(rt.projectionMatrix).invert()}}function P(rt,Et){Et===null?rt.matrixWorld.copy(rt.matrix):rt.matrixWorld.multiplyMatrices(Et.matrixWorld,rt.matrix),rt.matrixWorldInverse.copy(rt.matrixWorld).invert()}this.updateCamera=function(rt){if(l===null)return;let Et=rt.near,Rt=rt.far;M.texture!==null&&(M.depthNear>0&&(Et=M.depthNear),M.depthFar>0&&(Rt=M.depthFar)),Y.near=Z.near=z.near=Et,Y.far=Z.far=z.far=Rt,(lt!==Y.near||ht!==Y.far)&&(l.updateRenderState({depthNear:Y.near,depthFar:Y.far}),lt=Y.near,ht=Y.far),Y.layers.mask=rt.layers.mask|6,z.layers.mask=Y.layers.mask&-5,Z.layers.mask=Y.layers.mask&-3;const Ft=rt.parent,se=Y.cameras;P(Y,Ft);for(let $t=0;$t<se.length;$t++)P(se[$t],Ft);se.length===2?Mt(Y,z,Z):Y.projectionMatrix.copy(z.projectionMatrix),J(rt,Y,Ft)};function J(rt,Et,Rt){Rt===null?rt.matrix.copy(Et.matrixWorld):(rt.matrix.copy(Rt.matrixWorld),rt.matrix.invert(),rt.matrix.multiply(Et.matrixWorld)),rt.matrix.decompose(rt.position,rt.quaternion,rt.scale),rt.updateMatrixWorld(!0),rt.projectionMatrix.copy(Et.projectionMatrix),rt.projectionMatrixInverse.copy(Et.projectionMatrixInverse),rt.isPerspectiveCamera&&(rt.fov=Hd*2*Math.atan(1/rt.projectionMatrix.elements[5]),rt.zoom=1)}this.getCamera=function(){return Y},this.getFoveation=function(){if(!(g===null&&y===null))return m},this.setFoveation=function(rt){m=rt,g!==null&&(g.fixedFoveation=rt),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=rt)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(Y)},this.getCameraTexture=function(rt){return S[rt]};let bt=null;function wt(rt,Et){if(_=Et.getViewerPose(p||h),T=Et,_!==null){const Rt=_.views;y!==null&&(t.setRenderTargetFramebuffer(U,y.framebuffer),t.setRenderTarget(U));let Ft=!1;Rt.length!==Y.cameras.length&&(Y.cameras.length=0,Ft=!0);for(let ce=0;ce<Rt.length;ce++){const me=Rt[ce];let ye=null;if(y!==null)ye=y.getViewport(me);else{const Oe=x.getViewSubImage(g,me);ye=Oe.viewport,ce===0&&(t.setRenderTargetTextures(U,Oe.colorTexture,Oe.depthStencilTexture),t.setRenderTarget(U))}let qt=G[ce];qt===void 0&&(qt=new Ci,qt.layers.enable(ce),qt.viewport=new Sn,G[ce]=qt),qt.matrix.fromArray(me.transform.matrix),qt.matrix.decompose(qt.position,qt.quaternion,qt.scale),qt.projectionMatrix.fromArray(me.projectionMatrix),qt.projectionMatrixInverse.copy(qt.projectionMatrix).invert(),qt.viewport.set(ye.x,ye.y,ye.width,ye.height),ce===0&&(Y.matrix.copy(qt.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale)),Ft===!0&&Y.cameras.push(qt)}const se=l.enabledFeatures;if(se&&se.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&w){x=s.getBinding();const ce=x.getDepthInformation(Rt[0]);ce&&ce.isValid&&ce.texture&&M.init(ce,l.renderState)}if(se&&se.includes("camera-access")&&w){t.state.unbindTexture(),x=s.getBinding();for(let ce=0;ce<Rt.length;ce++){const me=Rt[ce].camera;if(me){let ye=S[me];ye||(ye=new Iv,S[me]=ye);const qt=x.getCameraImage(me);ye.sourceTexture=qt}}}}for(let Rt=0;Rt<V.length;Rt++){const Ft=N[Rt],se=V[Rt];Ft!==null&&se!==void 0&&se.update(Ft,Et,p||h)}bt&&bt(rt,Et),Et.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:Et}),T=null}const Ct=new Xv;Ct.setAnimationLoop(wt),this.setAnimationLoop=function(rt){bt=rt},this.dispose=function(){}}}const FA=new gn,Qv=new he;Qv.set(-1,0,0,0,1,0,0,0,1);function BA(r,t){function i(M,S){M.matrixAutoUpdate===!0&&M.updateMatrix(),S.value.copy(M.matrix)}function s(M,S){S.color.getRGB(M.fogColor.value,Hv(r)),S.isFog?(M.fogNear.value=S.near,M.fogFar.value=S.far):S.isFogExp2&&(M.fogDensity.value=S.density)}function l(M,S,C,L,U){S.isNodeMaterial?S.uniformsNeedUpdate=!1:S.isMeshBasicMaterial?c(M,S):S.isMeshLambertMaterial?(c(M,S),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(c(M,S),x(M,S)):S.isMeshPhongMaterial?(c(M,S),_(M,S),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(c(M,S),g(M,S),S.isMeshPhysicalMaterial&&y(M,S,U)):S.isMeshMatcapMaterial?(c(M,S),T(M,S)):S.isMeshDepthMaterial?c(M,S):S.isMeshDistanceMaterial?(c(M,S),w(M,S)):S.isMeshNormalMaterial?c(M,S):S.isLineBasicMaterial?(h(M,S),S.isLineDashedMaterial&&d(M,S)):S.isPointsMaterial?m(M,S,C,L):S.isSpriteMaterial?p(M,S):S.isShadowMaterial?(M.color.value.copy(S.color),M.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function c(M,S){M.opacity.value=S.opacity,S.color&&M.diffuse.value.copy(S.color),S.emissive&&M.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(M.map.value=S.map,i(S.map,M.mapTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,i(S.alphaMap,M.alphaMapTransform)),S.bumpMap&&(M.bumpMap.value=S.bumpMap,i(S.bumpMap,M.bumpMapTransform),M.bumpScale.value=S.bumpScale,S.side===ii&&(M.bumpScale.value*=-1)),S.normalMap&&(M.normalMap.value=S.normalMap,i(S.normalMap,M.normalMapTransform),M.normalScale.value.copy(S.normalScale),S.side===ii&&M.normalScale.value.negate()),S.displacementMap&&(M.displacementMap.value=S.displacementMap,i(S.displacementMap,M.displacementMapTransform),M.displacementScale.value=S.displacementScale,M.displacementBias.value=S.displacementBias),S.emissiveMap&&(M.emissiveMap.value=S.emissiveMap,i(S.emissiveMap,M.emissiveMapTransform)),S.specularMap&&(M.specularMap.value=S.specularMap,i(S.specularMap,M.specularMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest);const C=t.get(S),L=C.envMap,U=C.envMapRotation;L&&(M.envMap.value=L,M.envMapRotation.value.setFromMatrix4(FA.makeRotationFromEuler(U)).transpose(),L.isCubeTexture&&L.isRenderTargetTexture===!1&&M.envMapRotation.value.premultiply(Qv),M.reflectivity.value=S.reflectivity,M.ior.value=S.ior,M.refractionRatio.value=S.refractionRatio),S.lightMap&&(M.lightMap.value=S.lightMap,M.lightMapIntensity.value=S.lightMapIntensity,i(S.lightMap,M.lightMapTransform)),S.aoMap&&(M.aoMap.value=S.aoMap,M.aoMapIntensity.value=S.aoMapIntensity,i(S.aoMap,M.aoMapTransform))}function h(M,S){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,S.map&&(M.map.value=S.map,i(S.map,M.mapTransform))}function d(M,S){M.dashSize.value=S.dashSize,M.totalSize.value=S.dashSize+S.gapSize,M.scale.value=S.scale}function m(M,S,C,L){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,M.size.value=S.size*C,M.scale.value=L*.5,S.map&&(M.map.value=S.map,i(S.map,M.uvTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,i(S.alphaMap,M.alphaMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest)}function p(M,S){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,M.rotation.value=S.rotation,S.map&&(M.map.value=S.map,i(S.map,M.mapTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,i(S.alphaMap,M.alphaMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest)}function _(M,S){M.specular.value.copy(S.specular),M.shininess.value=Math.max(S.shininess,1e-4)}function x(M,S){S.gradientMap&&(M.gradientMap.value=S.gradientMap)}function g(M,S){M.metalness.value=S.metalness,S.metalnessMap&&(M.metalnessMap.value=S.metalnessMap,i(S.metalnessMap,M.metalnessMapTransform)),M.roughness.value=S.roughness,S.roughnessMap&&(M.roughnessMap.value=S.roughnessMap,i(S.roughnessMap,M.roughnessMapTransform)),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)}function y(M,S,C){M.ior.value=S.ior,S.sheen>0&&(M.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),M.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(M.sheenColorMap.value=S.sheenColorMap,i(S.sheenColorMap,M.sheenColorMapTransform)),S.sheenRoughnessMap&&(M.sheenRoughnessMap.value=S.sheenRoughnessMap,i(S.sheenRoughnessMap,M.sheenRoughnessMapTransform))),S.clearcoat>0&&(M.clearcoat.value=S.clearcoat,M.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(M.clearcoatMap.value=S.clearcoatMap,i(S.clearcoatMap,M.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,i(S.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(M.clearcoatNormalMap.value=S.clearcoatNormalMap,i(S.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===ii&&M.clearcoatNormalScale.value.negate())),S.dispersion>0&&(M.dispersion.value=S.dispersion),S.iridescence>0&&(M.iridescence.value=S.iridescence,M.iridescenceIOR.value=S.iridescenceIOR,M.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(M.iridescenceMap.value=S.iridescenceMap,i(S.iridescenceMap,M.iridescenceMapTransform)),S.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=S.iridescenceThicknessMap,i(S.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),S.transmission>0&&(M.transmission.value=S.transmission,M.transmissionSamplerMap.value=C.texture,M.transmissionSamplerSize.value.set(C.width,C.height),S.transmissionMap&&(M.transmissionMap.value=S.transmissionMap,i(S.transmissionMap,M.transmissionMapTransform)),M.thickness.value=S.thickness,S.thicknessMap&&(M.thicknessMap.value=S.thicknessMap,i(S.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=S.attenuationDistance,M.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(M.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(M.anisotropyMap.value=S.anisotropyMap,i(S.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=S.specularIntensity,M.specularColor.value.copy(S.specularColor),S.specularColorMap&&(M.specularColorMap.value=S.specularColorMap,i(S.specularColorMap,M.specularColorMapTransform)),S.specularIntensityMap&&(M.specularIntensityMap.value=S.specularIntensityMap,i(S.specularIntensityMap,M.specularIntensityMapTransform))}function T(M,S){S.matcap&&(M.matcap.value=S.matcap)}function w(M,S){const C=t.get(S).light;M.referencePosition.value.setFromMatrixPosition(C.matrixWorld),M.nearDistance.value=C.shadow.camera.near,M.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function GA(r,t,i,s){let l={},c={},h=[];const d=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(C,L){const U=L.program;s.uniformBlockBinding(C,U)}function p(C,L){let U=l[C.id];U===void 0&&(T(C),U=_(C),l[C.id]=U,C.addEventListener("dispose",M));const V=L.program;s.updateUBOMapping(C,V);const N=t.render.frame;c[C.id]!==N&&(g(C),c[C.id]=N)}function _(C){const L=x();C.__bindingPointIndex=L;const U=r.createBuffer(),V=C.__size,N=C.usage;return r.bindBuffer(r.UNIFORM_BUFFER,U),r.bufferData(r.UNIFORM_BUFFER,V,N),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,L,U),U}function x(){for(let C=0;C<d;C++)if(h.indexOf(C)===-1)return h.push(C),C;return De("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(C){const L=l[C.id],U=C.uniforms,V=C.__cache;r.bindBuffer(r.UNIFORM_BUFFER,L);for(let N=0,I=U.length;N<I;N++){const E=Array.isArray(U[N])?U[N]:[U[N]];for(let z=0,Z=E.length;z<Z;z++){const G=E[z];if(y(G,N,z,V)===!0){const Y=G.__offset,lt=Array.isArray(G.value)?G.value:[G.value];let ht=0;for(let k=0;k<lt.length;k++){const O=lt[k],F=w(O);typeof O=="number"||typeof O=="boolean"?(G.__data[0]=O,r.bufferSubData(r.UNIFORM_BUFFER,Y+ht,G.__data)):O.isMatrix3?(G.__data[0]=O.elements[0],G.__data[1]=O.elements[1],G.__data[2]=O.elements[2],G.__data[3]=0,G.__data[4]=O.elements[3],G.__data[5]=O.elements[4],G.__data[6]=O.elements[5],G.__data[7]=0,G.__data[8]=O.elements[6],G.__data[9]=O.elements[7],G.__data[10]=O.elements[8],G.__data[11]=0):ArrayBuffer.isView(O)?G.__data.set(new O.constructor(O.buffer,O.byteOffset,G.__data.length)):(O.toArray(G.__data,ht),ht+=F.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,Y,G.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function y(C,L,U,V){const N=C.value,I=L+"_"+U;if(V[I]===void 0)return typeof N=="number"||typeof N=="boolean"?V[I]=N:ArrayBuffer.isView(N)?V[I]=N.slice():V[I]=N.clone(),!0;{const E=V[I];if(typeof N=="number"||typeof N=="boolean"){if(E!==N)return V[I]=N,!0}else{if(ArrayBuffer.isView(N))return!0;if(E.equals(N)===!1)return E.copy(N),!0}}return!1}function T(C){const L=C.uniforms;let U=0;const V=16;for(let I=0,E=L.length;I<E;I++){const z=Array.isArray(L[I])?L[I]:[L[I]];for(let Z=0,G=z.length;Z<G;Z++){const Y=z[Z],lt=Array.isArray(Y.value)?Y.value:[Y.value];for(let ht=0,k=lt.length;ht<k;ht++){const O=lt[ht],F=w(O),st=U%V,_t=st%F.boundary,Mt=st+_t;U+=_t,Mt!==0&&V-Mt<F.storage&&(U+=V-Mt),Y.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=U,U+=F.storage}}}const N=U%V;return N>0&&(U+=V-N),C.__size=U,C.__cache={},this}function w(C){const L={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(L.boundary=4,L.storage=4):C.isVector2?(L.boundary=8,L.storage=8):C.isVector3||C.isColor?(L.boundary=16,L.storage=12):C.isVector4?(L.boundary=16,L.storage=16):C.isMatrix3?(L.boundary=48,L.storage=48):C.isMatrix4?(L.boundary=64,L.storage=64):C.isTexture?le("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(C)?(L.boundary=16,L.storage=C.byteLength):le("WebGLRenderer: Unsupported uniform value type.",C),L}function M(C){const L=C.target;L.removeEventListener("dispose",M);const U=h.indexOf(L.__bindingPointIndex);h.splice(U,1),r.deleteBuffer(l[L.id]),delete l[L.id],delete c[L.id]}function S(){for(const C in l)r.deleteBuffer(l[C]);h=[],l={},c={}}return{bind:m,update:p,dispose:S}}const HA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let aa=null;function VA(){return aa===null&&(aa=new hM(HA,16,16,Qs,Ga),aa.name="DFG_LUT",aa.minFilter=Kn,aa.magFilter=Kn,aa.wrapS=Ia,aa.wrapT=Ia,aa.generateMipmaps=!1,aa.needsUpdate=!0),aa}class kA{constructor(t={}){const{canvas:i=ky(),context:s=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:g=!1,outputBufferType:y=wi}=t;this.isWebGLRenderer=!0;let T;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=s.getContextAttributes().alpha}else T=h;const w=y,M=new Set([$d,Jd,Qd]),S=new Set([wi,ha,nl,il,Zd,Kd]),C=new Uint32Array(4),L=new Int32Array(4),U=new W;let V=null,N=null;const I=[],E=[];let z=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ca,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const Z=this;let G=!1,Y=null;this._outputColorSpace=Hi;let lt=0,ht=0,k=null,O=-1,F=null;const st=new Sn,_t=new Sn;let Mt=null;const P=new xe(0);let J=0,bt=i.width,wt=i.height,Ct=1,rt=null,Et=null;const Rt=new Sn(0,0,bt,wt),Ft=new Sn(0,0,bt,wt);let se=!1;const $t=new rp;let Ie=!1,ce=!1;const me=new gn,ye=new W,qt=new Sn,Oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ge=!1;function Dn(){return k===null?Ct:1}let q=s;function on(A,j){return i.getContext(A,j)}try{const A={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:x};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${qd}`),i.addEventListener("webglcontextlost",St,!1),i.addEventListener("webglcontextrestored",Ht,!1),i.addEventListener("webglcontextcreationerror",Kt,!1),q===null){const j="webgl2";if(q=on(j,A),q===null)throw on(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw De("WebGLRenderer: "+A.message),A}let ge,Pe,Nt,Qe,D,b,$,mt,At,Ut,Ot,ut,dt,Pt,zt,xt,pt,jt,Yt,te,H,Tt,ft;function Lt(){ge=new VE(q),ge.init(),H=new LA(q,ge),Pe=new OE(q,ge,t,H),Nt=new NA(q,ge),Pe.reversedDepthBuffer&&g&&Nt.buffers.depth.setReversed(!0),Qe=new WE(q),D=new _A,b=new UA(q,ge,Nt,D,Pe,H,Qe),$=new HE(Z),mt=new ZM(q),Tt=new UE(q,mt),At=new kE(q,mt,Qe,Tt),Ut=new YE(q,At,mt,Tt,Qe),jt=new qE(q,Pe,b),zt=new PE(D),Ot=new gA(Z,$,ge,Pe,Tt,zt),ut=new BA(Z,D),dt=new xA,Pt=new TA(ge),pt=new NE(Z,$,Nt,Ut,T,m),xt=new DA(Z,Ut,Pe),ft=new GA(q,Qe,Pe,Nt),Yt=new LE(q,ge,Qe),te=new XE(q,ge,Qe),Qe.programs=Ot.programs,Z.capabilities=Pe,Z.extensions=ge,Z.properties=D,Z.renderLists=dt,Z.shadowMap=xt,Z.state=Nt,Z.info=Qe}Lt(),w!==wi&&(z=new ZE(w,i.width,i.height,l,c));const Dt=new IA(Z,q);this.xr=Dt,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){const A=ge.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ge.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Ct},this.setPixelRatio=function(A){A!==void 0&&(Ct=A,this.setSize(bt,wt,!1))},this.getSize=function(A){return A.set(bt,wt)},this.setSize=function(A,j,at=!0){if(Dt.isPresenting){le("WebGLRenderer: Can't change size while VR device is presenting.");return}bt=A,wt=j,i.width=Math.floor(A*Ct),i.height=Math.floor(j*Ct),at===!0&&(i.style.width=A+"px",i.style.height=j+"px"),z!==null&&z.setSize(i.width,i.height),this.setViewport(0,0,A,j)},this.getDrawingBufferSize=function(A){return A.set(bt*Ct,wt*Ct).floor()},this.setDrawingBufferSize=function(A,j,at){bt=A,wt=j,Ct=at,i.width=Math.floor(A*at),i.height=Math.floor(j*at),this.setViewport(0,0,A,j)},this.setEffects=function(A){if(w===wi){De("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let j=0;j<A.length;j++)if(A[j].isOutputPass===!0){le("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}z.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(st)},this.getViewport=function(A){return A.copy(Rt)},this.setViewport=function(A,j,at,et){A.isVector4?Rt.set(A.x,A.y,A.z,A.w):Rt.set(A,j,at,et),Nt.viewport(st.copy(Rt).multiplyScalar(Ct).round())},this.getScissor=function(A){return A.copy(Ft)},this.setScissor=function(A,j,at,et){A.isVector4?Ft.set(A.x,A.y,A.z,A.w):Ft.set(A,j,at,et),Nt.scissor(_t.copy(Ft).multiplyScalar(Ct).round())},this.getScissorTest=function(){return se},this.setScissorTest=function(A){Nt.setScissorTest(se=A)},this.setOpaqueSort=function(A){rt=A},this.setTransparentSort=function(A){Et=A},this.getClearColor=function(A){return A.copy(pt.getClearColor())},this.setClearColor=function(){pt.setClearColor(...arguments)},this.getClearAlpha=function(){return pt.getClearAlpha()},this.setClearAlpha=function(){pt.setClearAlpha(...arguments)},this.clear=function(A=!0,j=!0,at=!0){let et=0;if(A){let tt=!1;if(k!==null){const Bt=k.texture.format;tt=M.has(Bt)}if(tt){const Bt=k.texture.type,kt=S.has(Bt),It=pt.getClearColor(),Wt=pt.getClearAlpha(),Zt=It.r,ie=It.g,de=It.b;kt?(C[0]=Zt,C[1]=ie,C[2]=de,C[3]=Wt,q.clearBufferuiv(q.COLOR,0,C)):(L[0]=Zt,L[1]=ie,L[2]=de,L[3]=Wt,q.clearBufferiv(q.COLOR,0,L))}else et|=q.COLOR_BUFFER_BIT}j&&(et|=q.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),at&&(et|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),et!==0&&q.clear(et)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),Y=A},this.dispose=function(){i.removeEventListener("webglcontextlost",St,!1),i.removeEventListener("webglcontextrestored",Ht,!1),i.removeEventListener("webglcontextcreationerror",Kt,!1),pt.dispose(),dt.dispose(),Pt.dispose(),D.dispose(),$.dispose(),Ut.dispose(),Tt.dispose(),ft.dispose(),Ot.dispose(),Dt.dispose(),Dt.removeEventListener("sessionstart",ai),Dt.removeEventListener("sessionend",di),pn.stop()};function St(A){A.preventDefault(),f_("WebGLRenderer: Context Lost."),G=!0}function Ht(){f_("WebGLRenderer: Context Restored."),G=!1;const A=Qe.autoReset,j=xt.enabled,at=xt.autoUpdate,et=xt.needsUpdate,tt=xt.type;Lt(),Qe.autoReset=A,xt.enabled=j,xt.autoUpdate=at,xt.needsUpdate=et,xt.type=tt}function Kt(A){De("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function re(A){const j=A.target;j.removeEventListener("dispose",re),ue(j)}function ue(A){nn(A),D.remove(A)}function nn(A){const j=D.get(A).programs;j!==void 0&&(j.forEach(function(at){Ot.releaseProgram(at)}),A.isShaderMaterial&&Ot.releaseShaderCache(A))}this.renderBufferDirect=function(A,j,at,et,tt,Bt){j===null&&(j=Oe);const kt=tt.isMesh&&tt.matrixWorld.determinant()<0,It=Bn(A,j,at,et,tt);Nt.setMaterial(et,kt);let Wt=at.index,Zt=1;if(et.wireframe===!0){if(Wt=At.getWireframeAttribute(at),Wt===void 0)return;Zt=2}const ie=at.drawRange,de=at.attributes.position;let ee=ie.start*Zt,Ne=(ie.start+ie.count)*Zt;Bt!==null&&(ee=Math.max(ee,Bt.start*Zt),Ne=Math.min(Ne,(Bt.start+Bt.count)*Zt)),Wt!==null?(ee=Math.max(ee,0),Ne=Math.min(Ne,Wt.count)):de!=null&&(ee=Math.max(ee,0),Ne=Math.min(Ne,de.count));const cn=Ne-ee;if(cn<0||cn===1/0)return;Tt.setup(tt,et,It,at,Wt);let $e,Ve=Yt;if(Wt!==null&&($e=mt.get(Wt),Ve=te,Ve.setIndex($e)),tt.isMesh)et.wireframe===!0?(Nt.setLineWidth(et.wireframeLinewidth*Dn()),Ve.setMode(q.LINES)):Ve.setMode(q.TRIANGLES);else if(tt.isLine){let ke=et.linewidth;ke===void 0&&(ke=1),Nt.setLineWidth(ke*Dn()),tt.isLineSegments?Ve.setMode(q.LINES):tt.isLineLoop?Ve.setMode(q.LINE_LOOP):Ve.setMode(q.LINE_STRIP)}else tt.isPoints?Ve.setMode(q.POINTS):tt.isSprite&&Ve.setMode(q.TRIANGLES);if(tt.isBatchedMesh)if(ge.get("WEBGL_multi_draw"))Ve.renderMultiDraw(tt._multiDrawStarts,tt._multiDrawCounts,tt._multiDrawCount);else{const ke=tt._multiDrawStarts,Vt=tt._multiDrawCounts,qn=tt._multiDrawCount,Me=Wt?mt.get(Wt).bytesPerElement:1,Nn=D.get(et).currentProgram.getUniforms();for(let gi=0;gi<qn;gi++)Nn.setValue(q,"_gl_DrawID",gi),Ve.render(ke[gi]/Me,Vt[gi])}else if(tt.isInstancedMesh)Ve.renderInstances(ee,cn,tt.count);else if(at.isInstancedBufferGeometry){const ke=at._maxInstanceCount!==void 0?at._maxInstanceCount:1/0,Vt=Math.min(at.instanceCount,ke);Ve.renderInstances(ee,cn,Vt)}else Ve.render(ee,cn)};function Fe(A,j,at){A.transparent===!0&&A.side===ra&&A.forceSinglePass===!1?(A.side=ii,A.needsUpdate=!0,En(A,j,at),A.side=Ms,A.needsUpdate=!0,En(A,j,at),A.side=ra):En(A,j,at)}this.compile=function(A,j,at=null){at===null&&(at=A),N=Pt.get(at),N.init(j),E.push(N),at.traverseVisible(function(tt){tt.isLight&&tt.layers.test(j.layers)&&(N.pushLight(tt),tt.castShadow&&N.pushShadow(tt))}),A!==at&&A.traverseVisible(function(tt){tt.isLight&&tt.layers.test(j.layers)&&(N.pushLight(tt),tt.castShadow&&N.pushShadow(tt))}),N.setupLights();const et=new Set;return A.traverse(function(tt){if(!(tt.isMesh||tt.isPoints||tt.isLine||tt.isSprite))return;const Bt=tt.material;if(Bt)if(Array.isArray(Bt))for(let kt=0;kt<Bt.length;kt++){const It=Bt[kt];Fe(It,at,tt),et.add(It)}else Fe(Bt,at,tt),et.add(Bt)}),N=E.pop(),et},this.compileAsync=function(A,j,at=null){const et=this.compile(A,j,at);return new Promise(tt=>{function Bt(){if(et.forEach(function(kt){D.get(kt).currentProgram.isReady()&&et.delete(kt)}),et.size===0){tt(A);return}setTimeout(Bt,10)}ge.get("KHR_parallel_shader_compile")!==null?Bt():setTimeout(Bt,10)})};let dn=null;function In(A){dn&&dn(A)}function ai(){pn.stop()}function di(){pn.start()}const pn=new Xv;pn.setAnimationLoop(In),typeof self<"u"&&pn.setContext(self),this.setAnimationLoop=function(A){dn=A,Dt.setAnimationLoop(A),A===null?pn.stop():pn.start()},Dt.addEventListener("sessionstart",ai),Dt.addEventListener("sessionend",di),this.render=function(A,j){if(j!==void 0&&j.isCamera!==!0){De("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;Y!==null&&Y.renderStart(A,j);const at=Dt.enabled===!0&&Dt.isPresenting===!0,et=z!==null&&(k===null||at)&&z.begin(Z,k);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),Dt.enabled===!0&&Dt.isPresenting===!0&&(z===null||z.isCompositing()===!1)&&(Dt.cameraAutoUpdate===!0&&Dt.updateCamera(j),j=Dt.getCamera()),A.isScene===!0&&A.onBeforeRender(Z,A,j,k),N=Pt.get(A,E.length),N.init(j),N.state.textureUnits=b.getTextureUnits(),E.push(N),me.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),$t.setFromProjectionMatrix(me,la,j.reversedDepth),ce=this.localClippingEnabled,Ie=zt.init(this.clippingPlanes,ce),V=dt.get(A,I.length),V.init(),I.push(V),Dt.enabled===!0&&Dt.isPresenting===!0){const kt=Z.xr.getDepthSensingMesh();kt!==null&&an(kt,j,-1/0,Z.sortObjects)}an(A,j,0,Z.sortObjects),V.finish(),Z.sortObjects===!0&&V.sort(rt,Et),Ge=Dt.enabled===!1||Dt.isPresenting===!1||Dt.hasDepthSensing()===!1,Ge&&pt.addToRenderList(V,A),this.info.render.frame++,Ie===!0&&zt.beginShadows();const tt=N.state.shadowsArray;if(xt.render(tt,A,j),Ie===!0&&zt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(et&&z.hasRenderPass())===!1){const kt=V.opaque,It=V.transmissive;if(N.setupLights(),j.isArrayCamera){const Wt=j.cameras;if(It.length>0)for(let Zt=0,ie=Wt.length;Zt<ie;Zt++){const de=Wt[Zt];He(kt,It,A,de)}Ge&&pt.render(A);for(let Zt=0,ie=Wt.length;Zt<ie;Zt++){const de=Wt[Zt];_n(V,A,de,de.viewport)}}else It.length>0&&He(kt,It,A,j),Ge&&pt.render(A),_n(V,A,j)}k!==null&&ht===0&&(b.updateMultisampleRenderTarget(k),b.updateRenderTargetMipmap(k)),et&&z.end(Z),A.isScene===!0&&A.onAfterRender(Z,A,j),Tt.resetDefaultState(),O=-1,F=null,E.pop(),E.length>0?(N=E[E.length-1],b.setTextureUnits(N.state.textureUnits),Ie===!0&&zt.setGlobalState(Z.clippingPlanes,N.state.camera)):N=null,I.pop(),I.length>0?V=I[I.length-1]:V=null,Y!==null&&Y.renderEnd()};function an(A,j,at,et){if(A.visible===!1)return;if(A.layers.test(j.layers)){if(A.isGroup)at=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(j);else if(A.isLightProbeGrid)N.pushLightProbeGrid(A);else if(A.isLight)N.pushLight(A),A.castShadow&&N.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||$t.intersectsSprite(A)){et&&qt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(me);const kt=Ut.update(A),It=A.material;It.visible&&V.push(A,kt,It,at,qt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||$t.intersectsObject(A))){const kt=Ut.update(A),It=A.material;if(et&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),qt.copy(A.boundingSphere.center)):(kt.boundingSphere===null&&kt.computeBoundingSphere(),qt.copy(kt.boundingSphere.center)),qt.applyMatrix4(A.matrixWorld).applyMatrix4(me)),Array.isArray(It)){const Wt=kt.groups;for(let Zt=0,ie=Wt.length;Zt<ie;Zt++){const de=Wt[Zt],ee=It[de.materialIndex];ee&&ee.visible&&V.push(A,kt,ee,at,qt.z,de)}}else It.visible&&V.push(A,kt,It,at,qt.z,null)}}const Bt=A.children;for(let kt=0,It=Bt.length;kt<It;kt++)an(Bt[kt],j,at,et)}function _n(A,j,at,et){const{opaque:tt,transmissive:Bt,transparent:kt}=A;N.setupLightsView(at),Ie===!0&&zt.setGlobalState(Z.clippingPlanes,at),et&&Nt.viewport(st.copy(et)),tt.length>0&&en(tt,j,at),Bt.length>0&&en(Bt,j,at),kt.length>0&&en(kt,j,at),Nt.buffers.depth.setTest(!0),Nt.buffers.depth.setMask(!0),Nt.buffers.color.setMask(!0),Nt.setPolygonOffset(!1)}function He(A,j,at,et){if((at.isScene===!0?at.overrideMaterial:null)!==null)return;if(N.state.transmissionRenderTarget[et.id]===void 0){const ee=ge.has("EXT_color_buffer_half_float")||ge.has("EXT_color_buffer_float");N.state.transmissionRenderTarget[et.id]=new ua(1,1,{generateMipmaps:!0,type:ee?Ga:wi,minFilter:js,samples:Math.max(4,Pe.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ce.workingColorSpace})}const Bt=N.state.transmissionRenderTarget[et.id],kt=et.viewport||st;Bt.setSize(kt.z*Z.transmissionResolutionScale,kt.w*Z.transmissionResolutionScale);const It=Z.getRenderTarget(),Wt=Z.getActiveCubeFace(),Zt=Z.getActiveMipmapLevel();Z.setRenderTarget(Bt),Z.getClearColor(P),J=Z.getClearAlpha(),J<1&&Z.setClearColor(16777215,.5),Z.clear(),Ge&&pt.render(at);const ie=Z.toneMapping;Z.toneMapping=ca;const de=et.viewport;if(et.viewport!==void 0&&(et.viewport=void 0),N.setupLightsView(et),Ie===!0&&zt.setGlobalState(Z.clippingPlanes,et),en(A,at,et),b.updateMultisampleRenderTarget(Bt),b.updateRenderTargetMipmap(Bt),ge.has("WEBGL_multisampled_render_to_texture")===!1){let ee=!1;for(let Ne=0,cn=j.length;Ne<cn;Ne++){const $e=j[Ne],{object:Ve,geometry:ke,material:Vt,group:qn}=$e;if(Vt.side===ra&&Ve.layers.test(et.layers)){const Me=Vt.side;Vt.side=ii,Vt.needsUpdate=!0,Fn(Ve,at,et,ke,Vt,qn),Vt.side=Me,Vt.needsUpdate=!0,ee=!0}}ee===!0&&(b.updateMultisampleRenderTarget(Bt),b.updateRenderTargetMipmap(Bt))}Z.setRenderTarget(It,Wt,Zt),Z.setClearColor(P,J),de!==void 0&&(et.viewport=de),Z.toneMapping=ie}function en(A,j,at){const et=j.isScene===!0?j.overrideMaterial:null;for(let tt=0,Bt=A.length;tt<Bt;tt++){const kt=A[tt],{object:It,geometry:Wt,group:Zt}=kt;let ie=kt.material;ie.allowOverride===!0&&et!==null&&(ie=et),It.layers.test(at.layers)&&Fn(It,j,at,Wt,ie,Zt)}}function Fn(A,j,at,et,tt,Bt){A.onBeforeRender(Z,j,at,et,tt,Bt),A.modelViewMatrix.multiplyMatrices(at.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),tt.onBeforeRender(Z,j,at,et,A,Bt),tt.transparent===!0&&tt.side===ra&&tt.forceSinglePass===!1?(tt.side=ii,tt.needsUpdate=!0,Z.renderBufferDirect(at,j,et,tt,A,Bt),tt.side=Ms,tt.needsUpdate=!0,Z.renderBufferDirect(at,j,et,tt,A,Bt),tt.side=ra):Z.renderBufferDirect(at,j,et,tt,A,Bt),A.onAfterRender(Z,j,at,et,tt,Bt)}function En(A,j,at){j.isScene!==!0&&(j=Oe);const et=D.get(A),tt=N.state.lights,Bt=N.state.shadowsArray,kt=tt.state.version,It=Ot.getParameters(A,tt.state,Bt,j,at,N.state.lightProbeGridArray),Wt=Ot.getProgramCacheKey(It);let Zt=et.programs;et.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?j.environment:null,et.fog=j.fog;const ie=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;et.envMap=$.get(A.envMap||et.environment,ie),et.envMapRotation=et.environment!==null&&A.envMap===null?j.environmentRotation:A.envMapRotation,Zt===void 0&&(A.addEventListener("dispose",re),Zt=new Map,et.programs=Zt);let de=Zt.get(Wt);if(de!==void 0){if(et.currentProgram===de&&et.lightsStateVersion===kt)return yn(A,It),de}else It.uniforms=Ot.getUniforms(A),Y!==null&&A.isNodeMaterial&&Y.build(A,at,It),A.onBeforeCompile(It,Z),de=Ot.acquireProgram(It,Wt),Zt.set(Wt,de),et.uniforms=It.uniforms;const ee=et.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(ee.clippingPlanes=zt.uniform),yn(A,It),et.needsLights=Ni(A),et.lightsStateVersion=kt,et.needsLights&&(ee.ambientLightColor.value=tt.state.ambient,ee.lightProbe.value=tt.state.probe,ee.directionalLights.value=tt.state.directional,ee.directionalLightShadows.value=tt.state.directionalShadow,ee.spotLights.value=tt.state.spot,ee.spotLightShadows.value=tt.state.spotShadow,ee.rectAreaLights.value=tt.state.rectArea,ee.ltc_1.value=tt.state.rectAreaLTC1,ee.ltc_2.value=tt.state.rectAreaLTC2,ee.pointLights.value=tt.state.point,ee.pointLightShadows.value=tt.state.pointShadow,ee.hemisphereLights.value=tt.state.hemi,ee.directionalShadowMatrix.value=tt.state.directionalShadowMatrix,ee.spotLightMatrix.value=tt.state.spotLightMatrix,ee.spotLightMap.value=tt.state.spotLightMap,ee.pointShadowMatrix.value=tt.state.pointShadowMatrix),et.lightProbeGrid=N.state.lightProbeGridArray.length>0,et.currentProgram=de,et.uniformsList=null,de}function ln(A){if(A.uniformsList===null){const j=A.currentProgram.getUniforms();A.uniformsList=Xc.seqWithValue(j.seq,A.uniforms)}return A.uniformsList}function yn(A,j){const at=D.get(A);at.outputColorSpace=j.outputColorSpace,at.batching=j.batching,at.batchingColor=j.batchingColor,at.instancing=j.instancing,at.instancingColor=j.instancingColor,at.instancingMorph=j.instancingMorph,at.skinning=j.skinning,at.morphTargets=j.morphTargets,at.morphNormals=j.morphNormals,at.morphColors=j.morphColors,at.morphTargetsCount=j.morphTargetsCount,at.numClippingPlanes=j.numClippingPlanes,at.numIntersection=j.numClipIntersection,at.vertexAlphas=j.vertexAlphas,at.vertexTangents=j.vertexTangents,at.toneMapping=j.toneMapping}function pi(A,j){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;U.setFromMatrixPosition(j.matrixWorld);for(let at=0,et=A.length;at<et;at++){const tt=A[at];if(tt.texture!==null&&tt.boundingBox.containsPoint(U))return tt}return null}function Bn(A,j,at,et,tt){j.isScene!==!0&&(j=Oe),b.resetTextureUnits();const Bt=j.fog,kt=et.isMeshStandardMaterial||et.isMeshLambertMaterial||et.isMeshPhongMaterial?j.environment:null,It=k===null?Z.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:Ce.workingColorSpace,Wt=et.isMeshStandardMaterial||et.isMeshLambertMaterial&&!et.envMap||et.isMeshPhongMaterial&&!et.envMap,Zt=$.get(et.envMap||kt,Wt),ie=et.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,de=!!at.attributes.tangent&&(!!et.normalMap||et.anisotropy>0),ee=!!at.morphAttributes.position,Ne=!!at.morphAttributes.normal,cn=!!at.morphAttributes.color;let $e=ca;et.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&($e=Z.toneMapping);const Ve=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,ke=Ve!==void 0?Ve.length:0,Vt=D.get(et),qn=N.state.lights;if(Ie===!0&&(ce===!0||A!==F)){const Be=A===F&&et.id===O;zt.setState(et,A,Be)}let Me=!1;et.version===Vt.__version?(Vt.needsLights&&Vt.lightsStateVersion!==qn.state.version||Vt.outputColorSpace!==It||tt.isBatchedMesh&&Vt.batching===!1||!tt.isBatchedMesh&&Vt.batching===!0||tt.isBatchedMesh&&Vt.batchingColor===!0&&tt.colorTexture===null||tt.isBatchedMesh&&Vt.batchingColor===!1&&tt.colorTexture!==null||tt.isInstancedMesh&&Vt.instancing===!1||!tt.isInstancedMesh&&Vt.instancing===!0||tt.isSkinnedMesh&&Vt.skinning===!1||!tt.isSkinnedMesh&&Vt.skinning===!0||tt.isInstancedMesh&&Vt.instancingColor===!0&&tt.instanceColor===null||tt.isInstancedMesh&&Vt.instancingColor===!1&&tt.instanceColor!==null||tt.isInstancedMesh&&Vt.instancingMorph===!0&&tt.morphTexture===null||tt.isInstancedMesh&&Vt.instancingMorph===!1&&tt.morphTexture!==null||Vt.envMap!==Zt||et.fog===!0&&Vt.fog!==Bt||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==zt.numPlanes||Vt.numIntersection!==zt.numIntersection)||Vt.vertexAlphas!==ie||Vt.vertexTangents!==de||Vt.morphTargets!==ee||Vt.morphNormals!==Ne||Vt.morphColors!==cn||Vt.toneMapping!==$e||Vt.morphTargetsCount!==ke||!!Vt.lightProbeGrid!=N.state.lightProbeGridArray.length>0)&&(Me=!0):(Me=!0,Vt.__version=et.version);let Nn=Vt.currentProgram;Me===!0&&(Nn=En(et,j,tt),Y&&et.isNodeMaterial&&Y.onUpdateProgram(et,Nn,Vt));let gi=!1,Vi=!1,_i=!1;const Xe=Nn.getUniforms(),un=Vt.uniforms;if(Nt.useProgram(Nn.program)&&(gi=!0,Vi=!0,_i=!0),et.id!==O&&(O=et.id,Vi=!0),Vt.needsLights){const Be=pi(N.state.lightProbeGridArray,tt);Vt.lightProbeGrid!==Be&&(Vt.lightProbeGrid=Be,Vi=!0)}if(gi||F!==A){Nt.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Xe.setValue(q,"projectionMatrix",A.projectionMatrix),Xe.setValue(q,"viewMatrix",A.matrixWorldInverse);const Ji=Xe.map.cameraPosition;Ji!==void 0&&Ji.setValue(q,ye.setFromMatrixPosition(A.matrixWorld)),Pe.logarithmicDepthBuffer&&Xe.setValue(q,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(et.isMeshPhongMaterial||et.isMeshToonMaterial||et.isMeshLambertMaterial||et.isMeshBasicMaterial||et.isMeshStandardMaterial||et.isShaderMaterial)&&Xe.setValue(q,"isOrthographic",A.isOrthographicCamera===!0),F!==A&&(F=A,Vi=!0,_i=!0)}if(Vt.needsLights&&(qn.state.directionalShadowMap.length>0&&Xe.setValue(q,"directionalShadowMap",qn.state.directionalShadowMap,b),qn.state.spotShadowMap.length>0&&Xe.setValue(q,"spotShadowMap",qn.state.spotShadowMap,b),qn.state.pointShadowMap.length>0&&Xe.setValue(q,"pointShadowMap",qn.state.pointShadowMap,b)),tt.isSkinnedMesh){Xe.setOptional(q,tt,"bindMatrix"),Xe.setOptional(q,tt,"bindMatrixInverse");const Be=tt.skeleton;Be&&(Be.boneTexture===null&&Be.computeBoneTexture(),Xe.setValue(q,"boneTexture",Be.boneTexture,b))}tt.isBatchedMesh&&(Xe.setOptional(q,tt,"batchingTexture"),Xe.setValue(q,"batchingTexture",tt._matricesTexture,b),Xe.setOptional(q,tt,"batchingIdTexture"),Xe.setValue(q,"batchingIdTexture",tt._indirectTexture,b),Xe.setOptional(q,tt,"batchingColorTexture"),tt._colorsTexture!==null&&Xe.setValue(q,"batchingColorTexture",tt._colorsTexture,b));const ki=at.morphAttributes;if((ki.position!==void 0||ki.normal!==void 0||ki.color!==void 0)&&jt.update(tt,at,Nn),(Vi||Vt.receiveShadow!==tt.receiveShadow)&&(Vt.receiveShadow=tt.receiveShadow,Xe.setValue(q,"receiveShadow",tt.receiveShadow)),(et.isMeshStandardMaterial||et.isMeshLambertMaterial||et.isMeshPhongMaterial)&&et.envMap===null&&j.environment!==null&&(un.envMapIntensity.value=j.environmentIntensity),un.dfgLUT!==void 0&&(un.dfgLUT.value=VA()),Vi){if(Xe.setValue(q,"toneMappingExposure",Z.toneMappingExposure),Vt.needsLights&&Wn(un,_i),Bt&&et.fog===!0&&ut.refreshFogUniforms(un,Bt),ut.refreshMaterialUniforms(un,et,Ct,wt,N.state.transmissionRenderTarget[A.id]),Vt.needsLights&&Vt.lightProbeGrid){const Be=Vt.lightProbeGrid;un.probesSH.value=Be.texture,un.probesMin.value.copy(Be.boundingBox.min),un.probesMax.value.copy(Be.boundingBox.max),un.probesResolution.value.copy(Be.resolution)}Xc.upload(q,ln(Vt),un,b)}if(et.isShaderMaterial&&et.uniformsNeedUpdate===!0&&(Xc.upload(q,ln(Vt),un,b),et.uniformsNeedUpdate=!1),et.isSpriteMaterial&&Xe.setValue(q,"center",tt.center),Xe.setValue(q,"modelViewMatrix",tt.modelViewMatrix),Xe.setValue(q,"normalMatrix",tt.normalMatrix),Xe.setValue(q,"modelMatrix",tt.matrixWorld),et.uniformsGroups!==void 0){const Be=et.uniformsGroups;for(let Ji=0,ka=Be.length;Ji<ka;Ji++){const Es=Be[Ji];ft.update(Es,Nn),ft.bind(Es,Nn)}}return Nn}function Wn(A,j){A.ambientLightColor.needsUpdate=j,A.lightProbe.needsUpdate=j,A.directionalLights.needsUpdate=j,A.directionalLightShadows.needsUpdate=j,A.pointLights.needsUpdate=j,A.pointLightShadows.needsUpdate=j,A.spotLights.needsUpdate=j,A.spotLightShadows.needsUpdate=j,A.rectAreaLights.needsUpdate=j,A.hemisphereLights.needsUpdate=j}function Ni(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return lt},this.getActiveMipmapLevel=function(){return ht},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(A,j,at){const et=D.get(A);et.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,et.__autoAllocateDepthBuffer===!1&&(et.__useRenderToTexture=!1),D.get(A.texture).__webglTexture=j,D.get(A.depthTexture).__webglTexture=et.__autoAllocateDepthBuffer?void 0:at,et.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,j){const at=D.get(A);at.__webglFramebuffer=j,at.__useDefaultFramebuffer=j===void 0};const mi=q.createFramebuffer();this.setRenderTarget=function(A,j=0,at=0){k=A,lt=j,ht=at;let et=null,tt=!1,Bt=!1;if(A){const It=D.get(A);if(It.__useDefaultFramebuffer!==void 0){Nt.bindFramebuffer(q.FRAMEBUFFER,It.__webglFramebuffer),st.copy(A.viewport),_t.copy(A.scissor),Mt=A.scissorTest,Nt.viewport(st),Nt.scissor(_t),Nt.setScissorTest(Mt),O=-1;return}else if(It.__webglFramebuffer===void 0)b.setupRenderTarget(A);else if(It.__hasExternalTextures)b.rebindTextures(A,D.get(A.texture).__webglTexture,D.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const ie=A.depthTexture;if(It.__boundDepthTexture!==ie){if(ie!==null&&D.has(ie)&&(A.width!==ie.image.width||A.height!==ie.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(A)}}const Wt=A.texture;(Wt.isData3DTexture||Wt.isDataArrayTexture||Wt.isCompressedArrayTexture)&&(Bt=!0);const Zt=D.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Zt[j])?et=Zt[j][at]:et=Zt[j],tt=!0):A.samples>0&&b.useMultisampledRTT(A)===!1?et=D.get(A).__webglMultisampledFramebuffer:Array.isArray(Zt)?et=Zt[at]:et=Zt,st.copy(A.viewport),_t.copy(A.scissor),Mt=A.scissorTest}else st.copy(Rt).multiplyScalar(Ct).floor(),_t.copy(Ft).multiplyScalar(Ct).floor(),Mt=se;if(at!==0&&(et=mi),Nt.bindFramebuffer(q.FRAMEBUFFER,et)&&Nt.drawBuffers(A,et),Nt.viewport(st),Nt.scissor(_t),Nt.setScissorTest(Mt),tt){const It=D.get(A.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+j,It.__webglTexture,at)}else if(Bt){const It=j;for(let Wt=0;Wt<A.textures.length;Wt++){const Zt=D.get(A.textures[Wt]);q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0+Wt,Zt.__webglTexture,at,It)}}else if(A!==null&&at!==0){const It=D.get(A.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,It.__webglTexture,at)}O=-1},this.readRenderTargetPixels=function(A,j,at,et,tt,Bt,kt,It=0){if(!(A&&A.isWebGLRenderTarget)){De("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Wt=D.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&kt!==void 0&&(Wt=Wt[kt]),Wt){Nt.bindFramebuffer(q.FRAMEBUFFER,Wt);try{const Zt=A.textures[It],ie=Zt.format,de=Zt.type;if(A.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+It),!Pe.textureFormatReadable(ie)){De("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Pe.textureTypeReadable(de)){De("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=A.width-et&&at>=0&&at<=A.height-tt&&q.readPixels(j,at,et,tt,H.convert(ie),H.convert(de),Bt)}finally{const Zt=k!==null?D.get(k).__webglFramebuffer:null;Nt.bindFramebuffer(q.FRAMEBUFFER,Zt)}}},this.readRenderTargetPixelsAsync=async function(A,j,at,et,tt,Bt,kt,It=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Wt=D.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&kt!==void 0&&(Wt=Wt[kt]),Wt)if(j>=0&&j<=A.width-et&&at>=0&&at<=A.height-tt){Nt.bindFramebuffer(q.FRAMEBUFFER,Wt);const Zt=A.textures[It],ie=Zt.format,de=Zt.type;if(A.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+It),!Pe.textureFormatReadable(ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Pe.textureTypeReadable(de))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ee=q.createBuffer();q.bindBuffer(q.PIXEL_PACK_BUFFER,ee),q.bufferData(q.PIXEL_PACK_BUFFER,Bt.byteLength,q.STREAM_READ),q.readPixels(j,at,et,tt,H.convert(ie),H.convert(de),0);const Ne=k!==null?D.get(k).__webglFramebuffer:null;Nt.bindFramebuffer(q.FRAMEBUFFER,Ne);const cn=q.fenceSync(q.SYNC_GPU_COMMANDS_COMPLETE,0);return q.flush(),await Xy(q,cn,4),q.bindBuffer(q.PIXEL_PACK_BUFFER,ee),q.getBufferSubData(q.PIXEL_PACK_BUFFER,0,Bt),q.deleteBuffer(ee),q.deleteSync(cn),Bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,j=null,at=0){const et=Math.pow(2,-at),tt=Math.floor(A.image.width*et),Bt=Math.floor(A.image.height*et),kt=j!==null?j.x:0,It=j!==null?j.y:0;b.setTexture2D(A,0),q.copyTexSubImage2D(q.TEXTURE_2D,at,0,0,kt,It,tt,Bt),Nt.unbindTexture()};const Je=q.createFramebuffer(),$n=q.createFramebuffer();this.copyTextureToTexture=function(A,j,at=null,et=null,tt=0,Bt=0){let kt,It,Wt,Zt,ie,de,ee,Ne,cn;const $e=A.isCompressedTexture?A.mipmaps[Bt]:A.image;if(at!==null)kt=at.max.x-at.min.x,It=at.max.y-at.min.y,Wt=at.isBox3?at.max.z-at.min.z:1,Zt=at.min.x,ie=at.min.y,de=at.isBox3?at.min.z:0;else{const un=Math.pow(2,-tt);kt=Math.floor($e.width*un),It=Math.floor($e.height*un),A.isDataArrayTexture?Wt=$e.depth:A.isData3DTexture?Wt=Math.floor($e.depth*un):Wt=1,Zt=0,ie=0,de=0}et!==null?(ee=et.x,Ne=et.y,cn=et.z):(ee=0,Ne=0,cn=0);const Ve=H.convert(j.format),ke=H.convert(j.type);let Vt;j.isData3DTexture?(b.setTexture3D(j,0),Vt=q.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(b.setTexture2DArray(j,0),Vt=q.TEXTURE_2D_ARRAY):(b.setTexture2D(j,0),Vt=q.TEXTURE_2D),Nt.activeTexture(q.TEXTURE0),Nt.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,j.flipY),Nt.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),Nt.pixelStorei(q.UNPACK_ALIGNMENT,j.unpackAlignment);const qn=Nt.getParameter(q.UNPACK_ROW_LENGTH),Me=Nt.getParameter(q.UNPACK_IMAGE_HEIGHT),Nn=Nt.getParameter(q.UNPACK_SKIP_PIXELS),gi=Nt.getParameter(q.UNPACK_SKIP_ROWS),Vi=Nt.getParameter(q.UNPACK_SKIP_IMAGES);Nt.pixelStorei(q.UNPACK_ROW_LENGTH,$e.width),Nt.pixelStorei(q.UNPACK_IMAGE_HEIGHT,$e.height),Nt.pixelStorei(q.UNPACK_SKIP_PIXELS,Zt),Nt.pixelStorei(q.UNPACK_SKIP_ROWS,ie),Nt.pixelStorei(q.UNPACK_SKIP_IMAGES,de);const _i=A.isDataArrayTexture||A.isData3DTexture,Xe=j.isDataArrayTexture||j.isData3DTexture;if(A.isDepthTexture){const un=D.get(A),ki=D.get(j),Be=D.get(un.__renderTarget),Ji=D.get(ki.__renderTarget);Nt.bindFramebuffer(q.READ_FRAMEBUFFER,Be.__webglFramebuffer),Nt.bindFramebuffer(q.DRAW_FRAMEBUFFER,Ji.__webglFramebuffer);for(let ka=0;ka<Wt;ka++)_i&&(q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,D.get(A).__webglTexture,tt,de+ka),q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,D.get(j).__webglTexture,Bt,cn+ka)),q.blitFramebuffer(Zt,ie,kt,It,ee,Ne,kt,It,q.DEPTH_BUFFER_BIT,q.NEAREST);Nt.bindFramebuffer(q.READ_FRAMEBUFFER,null),Nt.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else if(tt!==0||A.isRenderTargetTexture||D.has(A)){const un=D.get(A),ki=D.get(j);Nt.bindFramebuffer(q.READ_FRAMEBUFFER,Je),Nt.bindFramebuffer(q.DRAW_FRAMEBUFFER,$n);for(let Be=0;Be<Wt;Be++)_i?q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,un.__webglTexture,tt,de+Be):q.framebufferTexture2D(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,un.__webglTexture,tt),Xe?q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,ki.__webglTexture,Bt,cn+Be):q.framebufferTexture2D(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,ki.__webglTexture,Bt),tt!==0?q.blitFramebuffer(Zt,ie,kt,It,ee,Ne,kt,It,q.COLOR_BUFFER_BIT,q.NEAREST):Xe?q.copyTexSubImage3D(Vt,Bt,ee,Ne,cn+Be,Zt,ie,kt,It):q.copyTexSubImage2D(Vt,Bt,ee,Ne,Zt,ie,kt,It);Nt.bindFramebuffer(q.READ_FRAMEBUFFER,null),Nt.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else Xe?A.isDataTexture||A.isData3DTexture?q.texSubImage3D(Vt,Bt,ee,Ne,cn,kt,It,Wt,Ve,ke,$e.data):j.isCompressedArrayTexture?q.compressedTexSubImage3D(Vt,Bt,ee,Ne,cn,kt,It,Wt,Ve,$e.data):q.texSubImage3D(Vt,Bt,ee,Ne,cn,kt,It,Wt,Ve,ke,$e):A.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,Bt,ee,Ne,kt,It,Ve,ke,$e.data):A.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,Bt,ee,Ne,$e.width,$e.height,Ve,$e.data):q.texSubImage2D(q.TEXTURE_2D,Bt,ee,Ne,kt,It,Ve,ke,$e);Nt.pixelStorei(q.UNPACK_ROW_LENGTH,qn),Nt.pixelStorei(q.UNPACK_IMAGE_HEIGHT,Me),Nt.pixelStorei(q.UNPACK_SKIP_PIXELS,Nn),Nt.pixelStorei(q.UNPACK_SKIP_ROWS,gi),Nt.pixelStorei(q.UNPACK_SKIP_IMAGES,Vi),Bt===0&&j.generateMipmaps&&q.generateMipmap(Vt),Nt.unbindTexture()},this.initRenderTarget=function(A){D.get(A).__webglFramebuffer===void 0&&b.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?b.setTextureCube(A,0):A.isData3DTexture?b.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?b.setTexture2DArray(A,0):b.setTexture2D(A,0),Nt.unbindTexture()},this.resetState=function(){lt=0,ht=0,k=null,Nt.reset(),Tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return la}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Ce._getDrawingBufferColorSpace(t),i.unpackColorSpace=Ce._getUnpackColorSpace()}}const XA={0:[[{x:0,y:-.75,z:0},{x:-.32,y:-.6,z:0},{x:-.42,y:-.3,z:0},{x:-.45,y:0,z:0},{x:-.42,y:.3,z:0},{x:-.32,y:.6,z:0},{x:0,y:.75,z:0},{x:.32,y:.6,z:0},{x:.42,y:.3,z:0},{x:.45,y:0,z:0},{x:.42,y:-.3,z:0},{x:.32,y:-.6,z:0},{x:0,y:-.75,z:0}]],1:[[{x:-.22,y:-.75,z:0},{x:.22,y:-.75,z:0}],[{x:0,y:-.75,z:0},{x:0,y:.72,z:0},{x:-.15,y:.55,z:0}]],2:[[{x:-.35,y:.4,z:0},{x:-.3,y:.62,z:0},{x:-.12,y:.75,z:0},{x:.12,y:.75,z:0},{x:.32,y:.62,z:0},{x:.35,y:.35,z:0},{x:.15,y:.08,z:0},{x:-.35,y:-.5,z:0},{x:-.35,y:-.75,z:0},{x:.35,y:-.75,z:0}]],3:[[{x:-.32,y:.55,z:0},{x:-.1,y:.75,z:0},{x:.25,y:.75,z:0},{x:.35,y:.52,z:0},{x:.2,y:.2,z:0},{x:-.05,y:.08,z:0},{x:.22,y:-.05,z:0},{x:.35,y:-.38,z:0},{x:.25,y:-.72,z:0},{x:-.1,y:-.75,z:0},{x:-.32,y:-.55,z:0}]],4:[[{x:-.32,y:.72,z:0},{x:-.35,y:.12,z:0},{x:.35,y:.12,z:0}],[{x:.18,y:-.75,z:0},{x:.18,y:.75,z:0}]],5:[[{x:.32,y:.75,z:0},{x:-.28,y:.75,z:0},{x:-.28,y:.1,z:0},{x:0,y:.12,z:0},{x:.28,y:.05,z:0},{x:.35,y:-.28,z:0},{x:.25,y:-.68,z:0},{x:-.1,y:-.75,z:0},{x:-.32,y:-.58,z:0}]],6:[[{x:.28,y:.7,z:0},{x:-.1,y:.75,z:0},{x:-.32,y:.45,z:0},{x:-.35,y:-.15,z:0},{x:-.2,y:-.65,z:0},{x:.05,y:-.75,z:0},{x:.32,y:-.6,z:0},{x:.35,y:-.18,z:0},{x:.1,y:.05,z:0},{x:-.15,y:.05,z:0},{x:-.32,y:-.15,z:0}]],7:[[{x:-.35,y:.72,z:0},{x:.35,y:.75,z:0},{x:.08,y:-.1,z:0},{x:-.12,y:-.75,z:0}]],8:[[{x:0,y:0,z:0},{x:-.3,y:.18,z:0},{x:-.32,y:.5,z:0},{x:-.12,y:.72,z:0},{x:.12,y:.72,z:0},{x:.32,y:.5,z:0},{x:.3,y:.18,z:0},{x:0,y:0,z:0},{x:-.32,y:-.18,z:0},{x:-.35,y:-.52,z:0},{x:-.15,y:-.75,z:0},{x:.15,y:-.75,z:0},{x:.35,y:-.52,z:0},{x:.32,y:-.18,z:0},{x:0,y:0,z:0}]],9:[[{x:.32,y:.18,z:0},{x:.12,y:.02,z:0},{x:-.15,y:.02,z:0},{x:-.32,y:.18,z:0},{x:-.35,y:.52,z:0},{x:-.12,y:.72,z:0},{x:.12,y:.72,z:0},{x:.32,y:.52,z:0},{x:.35,y:.12,z:0},{x:.22,y:-.42,z:0},{x:-.1,y:-.75,z:0},{x:-.28,y:-.7,z:0}]]},WA=[1,6,2,7,5,0,4,9,8,3];function lv(r,t=1){const i=WA.indexOf(r);return i===-1?0:(-.22+i/9*.44)*t}class qA{constructor(){this.ctx=null,this.humNode=null,this.humGain=null,this.backgroundNoiseGain=null,this.mercurySpikeNode=null,this.isHumming=!1,this.masterGain=null,this.clickVolume=.5,this.humVolume=.15}init(){if(!this.ctx)try{const t=window.AudioContext||window.webkitAudioContext;if(!t)return;this.ctx=new t,this.masterGain=this.ctx.createGain(),this.masterGain.gain.setValueAtTime(.8,this.ctx.currentTime),this.masterGain.connect(this.ctx.destination)}catch(t){console.warn("Web Audio API is not supported in this browser",t)}}setMasterVolume(t){this.init(),!(!this.masterGain||!this.ctx)&&this.masterGain.gain.setValueAtTime(t,this.ctx.currentTime)}setHumVolume(t){this.humVolume=t,this.humGain&&this.ctx&&this.humGain.gain.setValueAtTime(t*.1,this.ctx.currentTime)}setClickVolume(t){this.clickVolume=t}playSwitchClick(){if(this.init(),!this.ctx||!this.masterGain)return;this.ctx.state==="suspended"&&this.ctx.resume();const t=this.ctx.currentTime,i=this.ctx.createOscillator(),s=this.ctx.createGain();i.type="sine",i.frequency.setValueAtTime(1400,t),i.frequency.exponentialRampToValueAtTime(120,t+.08),s.gain.setValueAtTime(this.clickVolume*.8,t),s.gain.linearRampToValueAtTime(.001,t+.08),i.connect(s),s.connect(this.masterGain),i.start(t),i.stop(t+.09);const l=this.ctx.createOscillator(),c=this.ctx.createGain();l.type="triangle",l.frequency.setValueAtTime(150,t),l.frequency.setValueAtTime(60,t+.02),c.gain.setValueAtTime(this.clickVolume*1,t),c.gain.linearRampToValueAtTime(.001,t+.15),l.connect(c),c.connect(this.masterGain),l.start(t),l.stop(t+.16);const h=this.ctx.sampleRate*.02,d=this.ctx.createBuffer(1,h,this.ctx.sampleRate),m=d.getChannelData(0);for(let g=0;g<h;g++)m[g]=Math.random()*2-1;const p=this.ctx.createBufferSource();p.buffer=d;const _=this.ctx.createBiquadFilter();_.type="bandpass",_.frequency.setValueAtTime(2500,t),_.Q.setValueAtTime(4,t);const x=this.ctx.createGain();x.gain.setValueAtTime(this.clickVolume*.4,t),x.gain.linearRampToValueAtTime(.001,t+.02),p.connect(_),_.connect(x),x.connect(this.masterGain),p.start(t)}playRelayTick(){if(this.init(),!this.ctx||!this.masterGain||this.clickVolume<.01)return;this.ctx.state==="suspended"&&this.ctx.resume();const t=this.ctx.currentTime,i=this.ctx.createOscillator(),s=this.ctx.createGain();i.type="triangle",i.frequency.setValueAtTime(3200,t),i.frequency.exponentialRampToValueAtTime(600,t+.015),s.gain.setValueAtTime(this.clickVolume*.22,t),s.gain.exponentialRampToValueAtTime(.001,t+.015),i.connect(s),s.connect(this.masterGain),i.start(t),i.stop(t+.016);const l=this.ctx.createOscillator(),c=this.ctx.createGain();l.type="sine",l.frequency.setValueAtTime(6500,t),c.gain.setValueAtTime(this.clickVolume*.12,t),c.gain.exponentialRampToValueAtTime(.001,t+.008),l.connect(c),c.connect(this.masterGain),l.start(t),l.stop(t+.01)}startTransformerHum(){if(this.init(),!this.ctx||!this.masterGain||this.isHumming)return;this.ctx.state==="suspended"&&this.ctx.resume();const t=this.ctx.currentTime;this.isHumming=!0,this.humGain=this.ctx.createGain(),this.humGain.gain.setValueAtTime(0,t),this.humGain.gain.linearRampToValueAtTime(this.humVolume*.12,t+1.2);const i=this.ctx.createOscillator();i.type="sine",i.frequency.setValueAtTime(60,t);const s=this.ctx.createOscillator();s.type="triangle",s.frequency.setValueAtTime(120,t);const l=this.ctx.createGain();l.gain.setValueAtTime(.35,t);const c=this.ctx.createOscillator();c.type="sawtooth",c.frequency.setValueAtTime(180,t);const h=this.ctx.createGain();h.gain.setValueAtTime(.08,t);const d=this.ctx.createOscillator();d.type="sine",d.frequency.setValueAtTime(.7,t);const m=this.ctx.createGain();m.gain.setValueAtTime(.08,t);const p=this.ctx.createBiquadFilter();p.type="lowpass",p.frequency.setValueAtTime(280,t),d.connect(m),m.connect(l.gain),i.connect(p),s.connect(l),l.connect(p),c.connect(h),h.connect(p),p.connect(this.humGain),this.humGain.connect(this.masterGain),d.start(t),i.start(t),s.start(t),c.start(t),this.humNode=i}stopTransformerHum(){if(!this.ctx||!this.isHumming)return;const t=this.ctx.currentTime;this.humGain&&(this.humGain.gain.cancelScheduledValues(t),this.humGain.gain.setValueAtTime(this.humGain.gain.value,t),this.humGain.gain.exponentialRampToValueAtTime(1e-4,t+.4)),setTimeout(()=>{try{this.humNode&&(this.humNode.disconnect(),this.humNode=null),this.humGain&&(this.humGain.disconnect(),this.humGain=null)}catch{}this.isHumming=!1},500)}playPowerSputter(){if(this.init(),!this.ctx||!this.masterGain||this.clickVolume<.01)return;this.ctx.state==="suspended"&&this.ctx.resume();const t=this.ctx.currentTime,i=.6;for(let s=0;s<8;s++){const l=Math.random()*i,c=t+l,h=this.ctx.createBiquadFilter();h.type="bandpass",h.frequency.setValueAtTime(800+Math.random()*2e3,c),h.Q.setValueAtTime(3+Math.random()*5,c);const d=this.ctx.createOscillator();d.type="sawtooth",d.frequency.setValueAtTime(150+Math.random()*300,c);const m=this.ctx.createGain();m.gain.setValueAtTime(this.clickVolume*.15,c),m.gain.linearRampToValueAtTime(.001,c+.01+Math.random()*.03),d.connect(h),h.connect(m),m.connect(this.masterGain),d.start(c),d.stop(c+.05)}}}const mn=new qA,cv={classic:{core:16774112,sheath:16726784,aura:16720384,ambient:16731136,trace:5068287},mercury:{core:14743551,sheath:35071,aura:19711,ambient:41727,trace:16736768},radioactive:{core:15794160,sheath:65348,aura:52241,ambient:1179426,trace:16746496}},YA=({powerOn:r,glowColor:t,exaggerateDepth:i,showGrid:s,timeMode:l,format12:c,flickerDegree:h,runCpp:d,dofEnabled:m,soundEnabled:p,cameraTilt:_,cameraPan:x,onFpsUpdate:g,onTubeClick:y,onBackgroundClick:T})=>{const w=Xt.useRef(null),M=Xt.useRef(null),S=Xt.useRef(r),C=Xt.useRef(t),L=Xt.useRef(i),U=Xt.useRef(s),V=Xt.useRef(c),N=Xt.useRef(l),I=Xt.useRef(h),E=Xt.useRef(d),z=Xt.useRef(p),Z=Xt.useRef(_),G=Xt.useRef(x),Y=Xt.useRef(y),lt=Xt.useRef(T);Xt.useEffect(()=>{S.current=r},[r]),Xt.useEffect(()=>{C.current=t},[t]),Xt.useEffect(()=>{L.current=i},[i]),Xt.useEffect(()=>{U.current=s},[s]),Xt.useEffect(()=>{V.current=c},[c]),Xt.useEffect(()=>{N.current=l},[l]),Xt.useEffect(()=>{I.current=h},[h]),Xt.useEffect(()=>{E.current=d},[d]),Xt.useEffect(()=>{z.current=p},[p]),Xt.useEffect(()=>{Z.current=_},[_]),Xt.useEffect(()=>{G.current=x},[x]),Xt.useEffect(()=>{Y.current=y},[y]),Xt.useEffect(()=>{lt.current=T},[T]),Xt.useRef([0,0,0,0,0,0]);const ht=Xt.useRef(!0);Xt.useRef(!1),Xt.useRef({x:0,y:0});const k=Xt.useRef({x:.25,y:.1}),O=Xt.useRef({x:.25,y:.1}),F=Xt.useRef(Array(6).fill(null).map(()=>Array(10).fill(0)));return Xt.useEffect(()=>{if(!M.current||!w.current)return;const st=w.current.clientWidth,_t=w.current.clientHeight,Mt=new kA({canvas:M.current,antialias:!0,alpha:!1,powerPreference:"high-performance",precision:"highp"});Mt.setPixelRatio(Math.min(window.devicePixelRatio,2)),Mt.setSize(st,_t),Mt.shadowMap.enabled=!0,Mt.shadowMap.type=pv,Mt.toneMapping=Yd,Mt.toneMappingExposure=1.35;const P=new rM;P.background=new xe(394500),P.fog=new ap(394500,.04);const J=st/_t,bt=36,wt=J<1?bt*(1/J)*1.15:bt,Ct=new Ci(wt,J,.1,50);Ct.position.set(0,1.4,7.8);const rt=new XM(1708557,.6);P.add(rt);const Et=new O_(16774634,1.25);Et.position.set(-3,6,4),Et.castShadow=!0,Et.shadow.mapSize.width=1024,Et.shadow.mapSize.height=1024,Et.shadow.bias=-5e-4,Et.shadow.radius=4,P.add(Et);const Rt=new O_(1121326,.45);Rt.position.set(2,-4,-1),P.add(Rt);const Ft=[];[-3.4,-2.2,-.6,.6,2.2,3.4].forEach(xt=>{const pt=new VM(16733440,0,3.5,1.8);pt.position.set(xt,-.2,.4),P.add(pt),Ft.push(pt)});const $t=new ei({color:12886362,roughness:.25,metalness:.9});(()=>{const xt=new za,pt=new ys(8.4,.5,2.4),jt=new ei({color:2430477,roughness:.35,metalness:.05}),Yt=new we(pt,jt);Yt.position.set(0,-.45,0),Yt.receiveShadow=!0,Yt.castShadow=!0,xt.add(Yt);const te=new ys(8.2,.04,2.2),H=new ei({color:1314828,roughness:.18,metalness:.95}),Tt=new we(te,H);Tt.position.set(0,-.18,0),Tt.receiveShadow=!0,Tt.castShadow=!0,xt.add(Tt);const ft=new Ri(.04,.04,.02,8);[[-4,1],[4,1],[-4,-1],[4,-1]].forEach(([Ht,Kt])=>{const re=new we(ft,$t);re.position.set(Ht,-.15,Kt),xt.add(re)});const Dt=new ys(.6,.02,.22),St=new we(Dt,$t);St.position.set(0,-.17,1),St.receiveShadow=!0,xt.add(St),P.add(xt)})();const ce=[],me=[],ye=.44,qt=1.7;for(let xt=0;xt<=30;xt++){const pt=xt/30,jt=-.18+pt*qt;let Yt=ye;if(pt>.85){const te=(pt-.85)/.15;Yt=ye*Math.cos(te*Math.PI*.48)}else if(pt<.08){const te=pt/.08;Yt=ye*(.94+te*.06)}me.push(new ne(Yt,jt-.7))}const Oe=new Kc(me,32),Ge=new FM({color:16777215,metalness:.1,roughness:.06,transmission:.98,ior:1.52,thickness:.45,specularIntensity:2.5,clearcoat:1,clearcoatRoughness:.05,attenuationColor:new xe(15659775),attenuationDistance:1.5,transparent:!0,depthWrite:!1,side:ii}),Dn=new ei({color:1118481,roughness:.42,metalness:.15}),q=xt=>{const pt=new za;pt.position.set(xt,.48,0);const jt=new Ri(.48,.48,.28,32),Yt=new ei({color:2233104,roughness:.7,metalness:.05}),te=new we(jt,Yt);te.position.set(0,-.6,0),te.castShadow=!0,te.receiveShadow=!0,te.userData.isTube=!0,pt.add(te);const H=new Ri(.5,.5,.04,32),Tt=new we(H,$t);Tt.position.set(0,-.74,0),Tt.userData.isTube=!0,pt.add(Tt);const ft=new Ri(.44,.44,.08,24),Lt=new we(ft,Dn);Lt.position.set(0,-.42,0),Lt.userData.isTube=!0,pt.add(Lt);const Dt=new we(Oe,Ge);Dt.position.set(0,0,0),Dt.renderOrder=10,Dt.userData.isTube=!0,pt.add(Dt);const St=new za;if(s){const He=new Ri(.39,.39,1.32,14,6,!0),en=new ei({color:4011314,wireframe:!0,transparent:!0,opacity:.25,metalness:1,roughness:.4}),Fn=new we(He,en);Fn.position.set(0,.12,0),Fn.rotation.y=.25,Fn.userData.isTube=!0,St.add(Fn);const En=new Ri(.388,.388,1.32,14,6,!0),ln=new ei({color:4011314,wireframe:!0,transparent:!0,opacity:.25,metalness:1,roughness:.4}),yn=new we(En,ln);yn.position.set(0,.12,0),yn.rotation.y=-.25,yn.userData.isTube=!0,St.add(yn);const pi=new ei({color:1906709,roughness:.8,metalness:.15,side:ra}),Bn=new Ri(.37,.37,1.1,12,1,!0,Math.PI*.55,Math.PI*.9),Wn=new we(Bn,pi);Wn.position.set(0,.12,-.06),St.add(Wn);const Ni=new Ri(.015,.015,1.34,6),mi=new ei({color:2367516,metalness:.9}),Je=new we(Ni,mi);Je.position.set(-.35,.12,-.15);const $n=new we(Ni,mi);$n.position.set(.35,.12,-.15),St.add(Je,$n)}pt.add(St);const Ht=new ei({color:2366746,roughness:.8,metalness:.1,transparent:!0,opacity:.92}),Kt=new Ri(.38,.38,.012,18),re=new we(Kt,Ht);re.position.set(0,.76,0),pt.add(re);const ue=new we(Kt,Ht);ue.position.set(0,-.36,0),pt.add(ue);const nn=new ei({color:13553358,roughness:.15,metalness:1}),Fe=new lp(.12,.012,8,16),dn=new we(Fe,nn);dn.position.set(0,.82,0),dn.rotation.set(.12,.18,0),pt.add(dn);const In=new ei({color:4077106,roughness:.5,metalness:.9}),ai=new Ri(.006,.006,.12,6);for(let He=0;He<11;He++){const en=He/11*Math.PI*2,Fn=.28,En=new we(ai,In);En.position.set(Math.cos(en)*Fn,-.41,Math.sin(en)*Fn),pt.add(En)}const di=[];for(let He=0;He<=9;He++){const en=new za,Fn=lv(He,i);en.position.set(0,.1,Fn),en.scale.set(.72,.72,.72);const En=XA[He]||[],ln=[],yn=[];En.forEach($n=>{if($n.length<2)return;const A=$n.map(Wt=>new W(Wt.x,Wt.y,Wt.z)),j=new Bv(A),at=new Qc(j,32,.045,6,!1),et=new Xr({color:16727040,transparent:!0,opacity:0,blending:Jo,depthWrite:!1}),tt=new we(at,et);en.add(tt),yn.push(tt);const Bt=new Qc(j,32,.012,6,!1),kt=new ei({color:2236189,roughness:.4,metalness:.95,emissive:new xe(0),emissiveIntensity:0}),It=new we(Bt,kt);en.add(It),ln.push(It)});const pi=new ll(.8,1.4),Bn=document.createElement("canvas");Bn.width=128,Bn.height=128;const Wn=Bn.getContext("2d");if(Wn){const $n=Wn.createRadialGradient(64,64,4,64,64,60);$n.addColorStop(0,"rgba(255, 80, 5, 0.7)"),$n.addColorStop(.3,"rgba(255, 50, 0, 0.25)"),$n.addColorStop(1,"rgba(255, 0, 0, 0)"),Wn.fillStyle=$n,Wn.fillRect(0,0,128,128)}const Ni=new gM(Bn),mi=new Xr({map:Ni,transparent:!0,blending:Jo,depthWrite:!1,opacity:0}),Je=new we(pi,mi);Je.position.set(0,0,-.05),en.add(Je),pt.add(en),di.push({coreMesh:ln[0],subCores:ln,subSheaths:yn,glowMesh:Je,index:He,pathsCount:En.length})}const pn=new el(.024,8,8),an=new Xr({color:4476415,transparent:!0,opacity:.005}),_n=new we(pn,an);_n.position.set(.08,-.38,.22),pt.add(_n),P.add(pt),ce.push({group:pt,digitMeshes:di})};[-3.5,-2.3,-.6,.6,2.3,3.5].forEach(xt=>{q(xt)});const ge=[],Pe=xt=>{const pt=new za;pt.position.set(xt,.48,0);const jt=new Ri(.12,.14,.1,16),Yt=new we(jt,$t);Yt.position.set(0,-.5,0),pt.add(Yt);const te=[],H=.1;for(let re=0;re<=20;re++){const ue=re/20,nn=-.3+ue*1.1;let Fe=H;ue>.8&&(Fe=H*Math.cos((ue-.8)/.2*Math.PI*.48)),te.push(new ne(Fe,nn-.2))}const Tt=new Kc(te,16),ft=new we(Tt,Ge);ft.renderOrder=10,pt.add(ft);const Lt=new el(.035,12,12),Dt=new el(.075,12,12),St=[-.1,.3],Ht=[],Kt=[];St.forEach(re=>{const ue=new ei({color:2236189,roughness:.1,metalness:.9,emissiveIntensity:0}),nn=new we(Lt,ue);nn.position.set(0,re,0),pt.add(nn),Ht.push(nn);const Fe=new Xr({color:16726784,transparent:!0,opacity:0,blending:Jo,depthWrite:!1}),dn=new we(Dt,Fe);dn.position.set(0,re,0),pt.add(dn),Kt.push(dn)}),P.add(pt),ge.push({dots:Ht,sheaths:Kt})};Pe(-1.45),Pe(1.45);let Nt=0,Qe=-1,D=0,b=0,$=0,mt=0;const At=xt=>{const pt=(xt-Nt)/1e3;Nt=xt,D++,xt-b>=1e3&&(g&&g(Math.round(D*1e3/(xt-b))),D=0,b=xt),O.current.y=G.current,O.current.x=Z.current,k.current.y+=(O.current.y-k.current.y)*.08,k.current.x+=(O.current.x-k.current.x)*.08;const jt=8.6,Yt=k.current.y,te=k.current.x;Ct.position.x=jt*Math.sin(Yt)*Math.cos(te),Ct.position.z=jt*Math.cos(Yt)*Math.cos(te),Ct.position.y=jt*Math.sin(te)+.5,Ct.lookAt(new W(0,.5,0));const H=new Date;let Tt=N.current==="utc"?H.getUTCHours():H.getHours(),ft=N.current==="utc"?H.getUTCMinutes():H.getMinutes(),Lt=N.current==="utc"?H.getUTCSeconds():H.getSeconds(),Dt=H.getMilliseconds();V.current&&(Tt=Tt%12,Tt===0&&(Tt=12));const St=S.current&&Dt<500;ht.current=St;let Ht=[Math.floor(Tt/10),Tt%10,Math.floor(ft/10),ft%10,Math.floor(Lt/10),Lt%10];E.current&&($+=pt,$>.06&&($=0,mt=(mt+1)%10),Ht=[(mt+2)%10,(mt+7)%10,(mt+4)%10,(mt+9)%10,(mt+1)%10,(mt+6)%10]),S.current&&!E.current&&Lt!==Qe&&(Qe=Lt,z.current&&(mn.playRelayTick(),Lt===0&&mn.playPowerSputter()));const Kt=cv[C.current]||cv.classic;ge.forEach(re=>{re.dots.forEach((ue,nn)=>{const Fe=ue.material,dn=re.sheaths[nn].material;if(St){Fe.color.setHex(Kt.core),Fe.emissive.setHex(Kt.sheath),Fe.emissiveIntensity=8,dn.color.setHex(Kt.sheath);const In=.85+Math.sin(xt*.05+nn*5)*.15;dn.opacity=.5*In}else Fe.color.setHex(2236189),Fe.emissive.setHex(0),Fe.emissiveIntensity=0,dn.opacity=0})});for(let re=0;re<6;re++){const ue=Ht[re],nn=ce[re];let Fe=!1;nn.digitMeshes.forEach(In=>{const ai=In.index;let di=0;In.subCores.forEach(En=>{const ln=En.parent;ln&&(ln.position.z=lv(ai,L.current))}),S.current&&ai===ue&&(di=1,Fe=!0);const pn=F.current[re][ai],an=16,_n=7;let He=pn;di>pn?(He+=(di-pn)*an*pt,He>1&&(He=1)):(He+=(di-pn)*_n*pt,He<0&&(He=0)),F.current[re][ai]=He;const en=F.current[re][ai];In.subCores.forEach(En=>{const ln=En.material;if(en>.02){let yn=1;if(I.current>.01){const pi=xt*.06,Bn=Math.sin(pi+re*12)*Math.sin(pi*.43)*Math.cos(pi*1.83+ai);yn=1-Math.abs(Bn)*I.current*.42}ln.color.lerpColors(new xe(3156259),new xe(Kt.core),Math.pow(en,3)),ln.emissive.setHex(Kt.sheath),ln.emissiveIntensity=8*en*yn}else ln.color.setHex(1643536),ln.emissive.setHex(0),ln.emissiveIntensity=0}),In.subSheaths.forEach(En=>{const ln=En.material;ln.color.setHex(Kt.sheath);const yn=.95+Math.sin(xt*.041+re*10)*.05*I.current;ln.opacity=.85*Math.pow(en,2)*yn});const Fn=In.glowMesh.material;Fn.color.setHex(Kt.aura),Fn.opacity=.75*en});const dn=Ft[re];if(S.current&&Fe){dn.color.setHex(Kt.ambient);const In=.9+Math.sin(xt*.03+re*7)*.1*I.current;dn.intensity=4.5*In}else dn.intensity=0}Mt.render(P,Ct),requestAnimationFrame(At)},Ut=requestAnimationFrame(At);r&&p&&mn.startTransformerHum();const Ot=()=>{if(!w.current||!M.current)return;const xt=w.current.clientWidth,pt=w.current.clientHeight,jt=xt/pt;Ct.aspect=jt;const Yt=jt<1?bt*(1/jt)*1.15:bt;Ct.fov=Yt,Ct.updateProjectionMatrix(),Mt.setSize(xt,pt)},ut=new ResizeObserver(()=>{window.requestAnimationFrame(()=>{Ot()})});w.current&&ut.observe(w.current);const dt=new YM,Pt=new ne,zt=xt=>{var H;const pt=M.current;if(!pt)return;const jt=pt.getBoundingClientRect();Pt.x=(xt.clientX-jt.left)/jt.width*2-1,Pt.y=-((xt.clientY-jt.top)/jt.height)*2+1,dt.setFromCamera(Pt,Ct);let Yt=!1;const te=dt.intersectObjects(P.children,!0);for(const Tt of te)if((H=Tt.object.userData)!=null&&H.isTube){Yt=!0;break}Yt?Y.current&&Y.current():lt.current&&lt.current()};return M.current&&M.current.addEventListener("click",zt),()=>{cancelAnimationFrame(Ut),ut.disconnect(),M.current&&M.current.removeEventListener("click",zt),Mt.dispose()}},[]),Xt.useEffect(()=>{r&&p?mn.startTransformerHum():mn.stopTransformerHum()},[r,p]),K.jsxs("div",{className:"relative w-full h-full select-none",ref:w,id:"canvas-container",children:[K.jsx("canvas",{ref:M,className:"w-full h-full block cursor-grab active:cursor-grabbing",id:"webgl-canvas"}),K.jsx("div",{id:"camera-vignette-fx",className:`absolute inset-0 pointer-events-none transition-all duration-1000 ${m?"bg-[radial-gradient(circle_at_center,transparent_40%,rgba(6,5,4,0.72)_100%)] shadow-[inset_0_0_80px_rgba(0,0,0,0.85)]":"bg-[radial-gradient(circle_at_center,transparent_60%,rgba(6,5,4,0.4)_100%)]"}`}),r&&K.jsx("div",{id:"crt-flare",className:"absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.3)_50%)] bg-[length:100%_4px]"})]})};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jA=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),ZA=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,i,s)=>s?s.toUpperCase():i.toLowerCase()),uv=r=>{const t=ZA(r);return t.charAt(0).toUpperCase()+t.slice(1)},Jv=(...r)=>r.filter((t,i,s)=>!!t&&t.trim()!==""&&s.indexOf(t)===i).join(" ").trim(),KA=r=>{for(const t in r)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var QA={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JA=Xt.forwardRef(({color:r="currentColor",size:t=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:l="",children:c,iconNode:h,...d},m)=>Xt.createElement("svg",{ref:m,...QA,width:t,height:t,stroke:r,strokeWidth:s?Number(i)*24/Number(t):i,className:Jv("lucide",l),...!c&&!KA(d)&&{"aria-hidden":"true"},...d},[...h.map(([p,_])=>Xt.createElement(p,_)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Di=(r,t)=>{const i=Xt.forwardRef(({className:s,...l},c)=>Xt.createElement(JA,{ref:c,iconNode:t,className:Jv(`lucide-${jA(uv(r))}`,`lucide-${r}`,s),...l}));return i.displayName=uv(r),i};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $A=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],Zh=Di("activity",$A);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t2=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],e2=Di("clock",t2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n2=[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],fv=Di("compass",n2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i2=[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]],a2=Di("cpu",i2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s2=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],hv=Di("database",s2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r2=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Kh=Di("eye",r2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o2=[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]],l2=Di("gauge",o2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c2=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],u2=Di("layers",c2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f2=[["path",{d:"M12 2v10",key:"mnfbl"}],["path",{d:"M18.4 6.6a9 9 0 1 1-12.77.04",key:"obofu9"}]],h2=Di("power",f2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d2=[["path",{d:"M10 8h4",key:"1sr2af"}],["path",{d:"M12 21v-9",key:"17s77i"}],["path",{d:"M12 8V3",key:"13r4qs"}],["path",{d:"M17 16h4",key:"h1uq16"}],["path",{d:"M19 12V3",key:"o1uvq1"}],["path",{d:"M19 21v-5",key:"qua636"}],["path",{d:"M3 14h4",key:"bcjad9"}],["path",{d:"M5 10V3",key:"cb8scm"}],["path",{d:"M5 21v-7",key:"1w1uti"}]],p2=Di("sliders-vertical",d2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m2=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],dv=Di("volume-2",m2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g2=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],_2=Di("volume-x",g2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v2=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],Qh=Di("zap",v2);function x2(){const[r,t]=Xt.useState(!0),[i,s]=Xt.useState("classic"),[l,c]=Xt.useState(1.2),[h,d]=Xt.useState(!0),[m,p]=Xt.useState("local"),[_,x]=Xt.useState(!1),[g,y]=Xt.useState(.15),[T,w]=Xt.useState(!0),[M,S]=Xt.useState(!0),[C,L]=Xt.useState(.15),[U,V]=Xt.useState(0),[N,I]=Xt.useState(!0),[E,z]=Xt.useState(!1),[Z,G]=Xt.useState(50),[Y,lt]=Xt.useState(30),[ht,k]=Xt.useState(60),[O,F]=Xt.useState(!1),st=Xt.useRef({powerOn:r,runCpp:O,shufflingActive:E});Xt.useEffect(()=>{st.current={powerOn:r,runCpp:O,shufflingActive:E}},[r,O,E]);const[_t,Mt]=Xt.useState(Date.now()),[P,J]=Xt.useState(318.4),[bt,wt]=Xt.useState(.142),[Ct,rt]=Xt.useState(15.2);Xt.useEffect(()=>{const qt=setInterval(()=>{Mt(Date.now()),r&&!O&&(J(Oe=>parseFloat((Oe+(Math.random()-.5)*.12).toFixed(2))),wt(Oe=>parseFloat(Math.max(.08,Math.min(.25,Oe+(Math.random()-.5)*.004)).toFixed(3))),rt(Oe=>parseFloat(Math.max(14.8,Math.min(15.6,Oe+(Math.random()-.5)*.015)).toFixed(2))))},85);return()=>clearInterval(qt)},[r,O]),Xt.useEffect(()=>{mn.init(),mn.setClickVolume(Z/100)},[Z]),Xt.useEffect(()=>{mn.setHumVolume(Y/100)},[Y]);const Et=()=>{mn.playSwitchClick(),r||mn.playPowerSputter(),t(!r)},Rt=()=>{mn.playSwitchClick(),S(!M)},Ft=qt=>{mn.playSwitchClick(),s(qt)},se=()=>{mn.playSwitchClick(),mn.playPowerSputter(),F(!0),setTimeout(()=>{F(!1),mn.playSwitchClick()},4500)},$t=()=>{mn.playSwitchClick(),d(!h)},Ie=()=>{mn.playSwitchClick(),w(!T)},ce=()=>{mn.playSwitchClick(),p(m==="local"?"utc":"local")},me=()=>{mn.playSwitchClick(),x(!_)},ye=()=>{if(!st.current.powerOn||st.current.runCpp||st.current.shufflingActive)return;mn.playSwitchClick(),mn.playPowerSputter(),F(!0),z(!0);let qt=0;const Oe=setInterval(()=>{qt<18?(mn.playRelayTick(),qt++):clearInterval(Oe)},75);setTimeout(()=>{F(!1),z(!1),mn.playSwitchClick()},1500)};return Xt.useEffect(()=>{const qt=setInterval(()=>{ye()},3e4);return()=>clearInterval(qt)},[]),K.jsxs("div",{className:`min-h-[100dvh] bg-[#070605] flex flex-col items-center justify-between font-sans antialiased text-[#dcd1c4] select-none transition-all duration-500 ${N?"p-4 md:p-6":"p-0"}`,id:"app-wrapper",children:[N&&K.jsxs("header",{className:"w-full max-w-7xl flex flex-col sm:flex-row items-center justify-between border-b border-[#251f1a] pb-4 mb-4 select-none",id:"telemetry-header",children:[K.jsxs("div",{className:"flex items-center gap-3",children:[K.jsxs("div",{className:"relative flex items-center justify-center",children:[K.jsx("span",{className:`absolute w-3 h-3 rounded-full ${r?"bg-orange-500 animate-pulse shadow-[0_0_12px_#f97316]":"bg-neutral-800"}`}),K.jsx("span",{className:"w-5 h-5 rounded-full border border-[#f97316]/20 bg-[#120a06]"})]}),K.jsxs("div",{children:[K.jsx("h1",{className:"text-[#eee3be] text-xl font-bold tracking-widest font-sans",id:"app-title",children:"NIXIE VACUUM CHRONOMETER"}),K.jsx("p",{className:"text-xs font-mono text-[#766355] mt-0.5 tracking-wider uppercase",children:"HIGH VOLTAGE DISCHARGE INDUCTOR // LAB-GRADE MK-VII"})]})]}),K.jsxs("div",{className:"flex gap-6 mt-3 sm:mt-0 font-mono text-[10px]",id:"header-counters",children:[K.jsxs("div",{className:"border-l border-[#2e2620] pl-4",children:[K.jsx("span",{className:"block text-[#604f44] uppercase",children:"SYS_POWER"}),K.jsx("span",{className:`font-semibold ${r?"text-green-500":"text-red-500"}`,children:r?"170V DC [LIVE]":"DISCONNECTED"})]}),K.jsxs("div",{className:"border-l border-[#2e2620] pl-4",children:[K.jsx("span",{className:"block text-[#604f44] uppercase",children:"PLASMA_GAS"}),K.jsx("span",{className:"text-[#cfb9a3] font-semibold",children:r?`${Ct} TORR`:"0.00 TORR"})]}),K.jsxs("div",{className:"border-l border-[#2e2620] pl-4",children:[K.jsx("span",{className:"block text-[#604f44] uppercase",children:"FRAME_REND"}),K.jsxs("span",{className:"text-orange-400 font-semibold",children:[ht," FPS"]})]})]})]}),K.jsxs("main",{className:`grid grid-cols-1 ${N?"w-full max-w-7xl lg:grid-cols-4 gap-6 flex-grow":"fixed inset-0 w-full h-[100dvh] lg:grid-cols-1 z-50"} items-stretch transition-all duration-300`,id:"instrument-deck",children:[N&&K.jsxs("section",{className:"lg:col-span-1 flex flex-col gap-6",id:"telemetry-deck-left",children:[K.jsxs("div",{className:"bg-[#120d0b] border border-[#231c17] rounded-xl p-5 flex flex-col justify-between shadow-2xl relative overflow-hidden",id:"card-power",children:[K.jsx("div",{className:"absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-orange-500/5 to-transparent pointer-events-none"}),K.jsxs("div",{children:[K.jsxs("div",{className:"flex items-center justify-between mb-4",children:[K.jsxs("span",{className:"font-mono text-xs text-[#a28e7e] tracking-wider uppercase flex items-center gap-1.5 font-bold",children:[K.jsx(Qh,{className:"w-3.5 h-3.5 text-orange-400"})," 高電圧電源制御 (MAIN POWER)"]}),K.jsx("span",{className:"text-[9px] font-mono bg-orange-950/40 text-orange-400 border border-orange-500/20 px-1.5 py-0.5 rounded",children:"MAIN-R1"})]}),K.jsx("p",{className:"text-xs text-[#8c7868] leading-relaxed mb-6",children:"ニキシー管アノードのガラス放電電極に170V高電圧電力を供給します。低温起動時にはネオンガスの放電が揺らぐことがあります。"})]}),K.jsxs("div",{className:"flex flex-col gap-3",children:[K.jsxs("button",{onClick:Et,className:`w-full py-3.5 px-4 rounded-lg font-bold tracking-wider text-sm flex items-center justify-center gap-2.5 transition-all outline-none border cursor-pointer ${r?"bg-[#ff4f00] hover:bg-[#ff6924] text-[#fff4e1] border-orange-600 shadow-[0_0_20px_rgba(255,79,0,0.35)]":"bg-[#251e1a] hover:bg-[#2d2520] text-[#715c4d] border-neutral-800"}`,id:"power-switch-button",children:[K.jsx(h2,{className:"w-4.5 h-4.5"}),r?"主電源 ［ON］":"主電源 ［待機］"]}),K.jsxs("button",{disabled:!r||O,onClick:se,className:`w-full py-2 px-3 rounded-lg font-mono text-xs font-semibold tracking-wider flex items-center justify-center gap-2 transition-all border cursor-pointer ${O?"bg-[#d49930] text-[#120a00] border-[#fbbd54] animate-pulse":r?"bg-[#1d1612] hover:bg-[#271e19] text-[#e8b56d] border-[#3f3128]":"bg-neutral-900 border-[#1f1a17] text-neutral-700 cursor-not-allowed"}`,id:"cpp-trigger-button",children:[K.jsx(a2,{className:"w-3.5 h-3.5"}),O?"電極再生中 [9V]":"電極再生スイープを実行 (CPP)"]})]})]}),K.jsxs("div",{className:"bg-[#120d0b] border border-[#231c17] rounded-xl p-5 flex flex-col justify-between shadow-2xl relative",id:"card-gas-mixture",children:[K.jsxs("span",{className:"font-mono text-xs text-[#a28e7e] tracking-wider uppercase mb-3 flex items-center gap-1.5 font-bold",children:[K.jsx(hv,{className:"w-3.5 h-3.5 text-blue-400"})," 放電ガス・スペクトル (GAS SPECTRUM)"]}),K.jsx("p",{className:"text-xs text-[#8c7868] leading-relaxed mb-4",children:"ガラス管に封入された混合ガスの比率を変更し、放電光の美しさとスペクトル波長（発光色）を調整します。"}),K.jsxs("div",{className:"flex flex-col gap-2.5",children:[K.jsxs("button",{disabled:!r,onClick:()=>Ft("classic"),className:`w-full p-2.5 rounded-lg flex items-center justify-between border transition-all text-xs cursor-pointer ${r?i==="classic"?"bg-[#251307] border-orange-500 text-orange-400 font-bold":"bg-[#18120e] hover:bg-[#1e1713] border-[#29221d] text-[#ae9a8a]":"opacity-30 cursor-not-allowed border-neutral-900"}`,children:[K.jsxs("div",{className:"flex items-center gap-2",children:[K.jsx("span",{className:"w-2 h-2 rounded-full bg-orange-500 shadow-[0_0_6px_#f97316]"}),K.jsx("span",{children:"クラシック・ネオン［琥珀］ (Ne-Ar)"})]}),K.jsx("span",{className:"font-mono text-[9px] text-[#604f44]",children:"170V DC"})]}),K.jsxs("button",{disabled:!r,onClick:()=>Ft("mercury"),className:`w-full p-2.5 rounded-lg flex items-center justify-between border transition-all text-xs cursor-pointer ${r?i==="mercury"?"bg-[#0b172d] border-blue-500 text-blue-400 font-bold":"bg-[#18120e] hover:bg-[#1e1713] border-[#29221d] text-[#ae9a8a]":"opacity-30 cursor-not-allowed border-neutral-900"}`,children:[K.jsxs("div",{className:"flex items-center gap-2",children:[K.jsx("span",{className:"w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_6px_#3b82f6]"}),K.jsx("span",{children:"水銀インダクション［蒼碧］ (Hg-Ne)"})]}),K.jsx("span",{className:"font-mono text-[9px] text-[#604f44]",children:"185V DC"})]}),K.jsxs("button",{disabled:!r,onClick:()=>Ft("radioactive"),className:`w-full p-2.5 rounded-lg flex items-center justify-between border transition-all text-xs cursor-pointer ${r?i==="radioactive"?"bg-[#0c1c13] border-emerald-500 text-emerald-400 font-bold":"bg-[#18120e] hover:bg-[#1e1713] border-[#29221d] text-[#ae9a8a]":"opacity-30 cursor-not-allowed border-neutral-900"}`,children:[K.jsxs("div",{className:"flex items-center gap-2",children:[K.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_6px_#10b981]"}),K.jsx("span",{children:"クリプトン・グロウ［翠緑］ (Kr-N2)"})]}),K.jsx("span",{className:"font-mono text-[9px] text-[#604f44]",children:"210V DC"})]})]})]})]}),K.jsxs("section",{className:`flex flex-col ${N?"lg:col-span-2 min-h-[460px] md:min-h-[500px]":"w-full h-full lg:col-span-1 absolute inset-0 z-0 bg-transparent"} justify-between ${N?"gap-4":"gap-0"}`,id:"middle-viewport",children:[K.jsxs("div",{className:`${N?"bg-radial from-[#15110e] to-[#0a0807] border border-[#2b221a] rounded-2xl flex-grow overflow-hidden shadow-inner relative flex flex-col":"w-full h-full bg-black relative flex-grow overflow-hidden flex flex-col"}`,id:"nixie-stage",children:[N&&K.jsxs(K.Fragment,{children:[K.jsxs("div",{className:"absolute top-4 left-4 z-10 flex gap-2 font-mono text-[9px]",id:"stage-status-tags",children:[K.jsx("span",{className:"px-2 py-1 rounded bg-black/60 backdrop-blur-md border border-[#261f18] text-[#a59180] tracking-wider font-semibold uppercase",children:"GLASS IOR: 1.54"}),K.jsx("span",{className:"px-2 py-1 rounded bg-black/60 backdrop-blur-md border border-[#261f18] text-[#a59180] tracking-wider font-semibold uppercase",children:"DOB: 1968"})]}),K.jsx("div",{className:"absolute top-4 right-4 z-10 flex gap-2 font-mono text-[9px]",id:"stage-util-tags",children:K.jsxs("span",{className:"px-2 py-1 rounded bg-black/60 backdrop-blur-md border border-[#261f18] text-[#f97316] tracking-wider font-bold uppercase flex items-center gap-1.5 animate-pulse",children:[K.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-orange-500"})," HDR PASS"]})})]}),K.jsx("div",{className:"w-full flex-grow relative",id:"canvas-frame",children:K.jsx(YA,{powerOn:r,glowColor:i,exaggerateDepth:l,showGrid:h,timeMode:m,format12:_,flickerDegree:g,runCpp:O,dofEnabled:T,soundEnabled:M,cameraTilt:C,cameraPan:U,onFpsUpdate:k,onTubeClick:ye,onBackgroundClick:()=>I(!0)})}),N&&K.jsxs("div",{className:"absolute bottom-4 left-1/2 -translate-x-1/2 z-10 bg-black/70 backdrop-blur-md border border-[#252019] px-4 py-2 rounded-full text-[9px] font-mono tracking-widest text-[#7c695b] text-center flex items-center gap-2 uppercase select-none w-[90%] justify-center pointer-events-none",id:"orbit-tips",children:[K.jsx(fv,{className:"w-3.5 h-3.5 text-[#a48c77]"})," NIXIE TUBES ARE INTERACTIVE. CLICK THEM TO TRIGGER SHUFFLE"]})]}),N&&K.jsxs("div",{className:"flex flex-col items-center gap-1 bg-[#110c09] border border-[#2a2119] rounded-xl p-4 shadow-xl text-center select-none",id:"shuffle-deck",children:[K.jsxs("button",{disabled:!r||O||E,onClick:ye,className:`px-8 py-3.5 rounded-lg font-bold tracking-widest text-[#ffffff] border transition-all cursor-pointer flex items-center justify-center gap-2.5 ${r?E?"bg-[#ff5500] border-[#ffa14c] animate-pulse shadow-[0_0_20px_#ff5500]":"bg-gradient-to-b from-[#ff5500] to-[#b33300] hover:from-[#ff6d24] hover:to-[#cd3f00] border-[#ff7315] shadow-[0_4px_12px_rgba(255,85,0,0.25)] hover:shadow-[0_4px_20px_rgba(255,85,0,0.45)]":"bg-neutral-900 border-[#221c17] text-neutral-600 cursor-not-allowed"}`,id:"shuffle-filaments-button",children:[K.jsx(Zh,{className:`w-4 h-4 ${E?"animate-[spin_1s_linear_infinite]":""}`}),K.jsx("span",{children:"SHUFFLE FILAMENTS"})]}),K.jsx("span",{className:"text-[9px] font-mono text-[#7a6452] uppercase mt-1 tracking-wider",children:"TRIGGER RANDOMIZED DISCHARGE SWEEP // SCRAMBLE ELECTRODES"})]})]}),N&&K.jsxs("section",{className:"lg:col-span-1 flex flex-col gap-6",id:"telemetry-deck-right",onClick:qt=>qt.stopPropagation(),children:[K.jsxs("div",{className:"bg-[#120d0b] border border-[#231c17] rounded-xl p-5 shadow-2xl flex flex-col justify-between",id:"card-hardware-calibration",children:[K.jsx("div",{children:K.jsxs("span",{className:"font-mono text-[11px] text-[#a28e7e] tracking-wider uppercase mb-5 flex items-center gap-1.5 font-bold",children:[K.jsx(p2,{className:"w-3.5 h-3.5 text-orange-400"})," 真空管ダイヤル (DIALS)"]})}),K.jsxs("div",{className:"flex flex-col gap-6",children:[K.jsxs("div",{children:[K.jsxs("div",{className:"flex items-center justify-between mb-2 font-mono text-[10px]",children:[K.jsxs("span",{className:"text-[#a28e7e] flex items-center gap-1",children:[K.jsx(u2,{className:"w-3.5 h-3.5 text-amber-500"})," 前後奥行き補正 (Z-DEPTH)"]}),K.jsxs("span",{className:"text-orange-400 font-bold",children:[l.toFixed(1),"x"]})]}),K.jsx("input",{type:"range",min:"0.5",max:"2.5",step:"0.1",value:l,onChange:qt=>c(parseFloat(qt.target.value)),className:"w-full h-1 bg-gradient-to-r from-orange-950 to-orange-600 rounded-lg appearance-none cursor-pointer accent-[#ff5500] outline-none"})]}),K.jsxs("div",{children:[K.jsxs("div",{className:"flex items-center justify-between mb-2 font-mono text-[10px]",children:[K.jsxs("span",{className:"text-[#a28e7e] flex items-center gap-1",children:[K.jsx(Zh,{className:"w-3.5 h-3.5 text-[#ff7139]"})," 放電ゆらぎ強度 (FLICKER)"]}),K.jsxs("span",{className:"text-orange-400 font-bold",children:[Math.round(g*100),"%"]})]}),K.jsx("input",{type:"range",min:"0.0",max:"1.0",step:"0.05",value:g,onChange:qt=>y(parseFloat(qt.target.value)),className:"w-full h-1 bg-gradient-to-r from-orange-950 to-orange-600 rounded-lg appearance-none cursor-pointer accent-[#ff5500] outline-none"})]}),K.jsxs("div",{children:[K.jsxs("div",{className:"flex items-center justify-between mb-2 font-mono text-[10px]",children:[K.jsxs("span",{className:"text-[#a28e7e] flex items-center gap-1",children:[K.jsx(Kh,{className:"w-3.5 h-3.5 text-[#ff7139]"})," カメラ俯瞰角度 (TILT)"]}),K.jsxs("span",{className:"text-orange-400 font-bold",children:[(C*10).toFixed(1),"°"]})]}),K.jsx("input",{type:"range",min:"0.0",max:"0.5",step:"0.01",value:C,onChange:qt=>L(parseFloat(qt.target.value)),className:"w-full h-1 bg-gradient-to-r from-orange-950 to-orange-600 rounded-lg appearance-none cursor-pointer accent-[#ff5500] outline-none"})]}),K.jsxs("div",{children:[K.jsxs("div",{className:"flex items-center justify-between mb-2 font-mono text-[10px]",children:[K.jsxs("span",{className:"text-[#a28e7e] flex items-center gap-1",children:[K.jsx(fv,{className:"w-3.5 h-3.5 text-[#ff7139]"})," カメラ左右角度 (PAN)"]}),K.jsxs("span",{className:"text-orange-400 font-bold",children:[(U*10).toFixed(1),"°"]})]}),K.jsx("input",{type:"range",min:"-0.7",max:"0.7",step:"0.01",value:U,onChange:qt=>V(parseFloat(qt.target.value)),className:"w-full h-1 bg-gradient-to-r from-orange-950 to-orange-600 rounded-lg appearance-none cursor-pointer accent-[#ff5500] outline-none"})]}),K.jsxs("div",{className:"border-t border-[#231a15] pt-4 mt-2",children:[K.jsxs("div",{className:"flex items-center justify-between mb-4 font-mono text-[11px] text-[#a28e7e] font-bold",children:[K.jsxs("span",{className:"flex items-center gap-1.5 uppercase",children:[M?K.jsx(dv,{className:"w-3.5 h-3.5 text-orange-400"}):K.jsx(_2,{className:"w-3.5 h-3.5 text-neutral-600"}),"スピーカー (AUDIO)"]}),K.jsxs("label",{className:"relative inline-flex items-center cursor-pointer select-none",children:[K.jsx("input",{type:"checkbox",checked:M,onChange:Rt,className:"sr-only peer"}),K.jsx("div",{className:"w-8 h-4 bg-[#231a14] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-[#866f5c] after:border-neutral-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-[#ff5500] peer-checked:after:bg-[#fff]"})]})]}),K.jsxs("div",{className:`space-y-4 transition-opacity duration-300 ${M?"opacity-100":"opacity-30 pointer-events-none"}`,children:[K.jsxs("div",{children:[K.jsxs("div",{className:"flex justify-between font-mono text-[10px] mb-2",children:[K.jsx("span",{className:"text-[#8c7868]",children:"高周波トランス・ノイズ"}),K.jsxs("span",{className:"text-orange-400 flex items-center gap-1",children:[K.jsx(Qh,{className:"w-2.5 h-2.5"}),Y,"%"]})]}),K.jsx("input",{type:"range",min:"0",max:"100",value:Y,onChange:qt=>lt(parseInt(qt.target.value)),className:"w-full h-1 bg-[#251e18] rounded-lg appearance-none cursor-pointer accent-[#ff5500] outline-none"})]}),K.jsxs("div",{children:[K.jsxs("div",{className:"flex justify-between font-mono text-[10px] mb-2",children:[K.jsx("span",{className:"text-[#8c7868]",children:"電磁リレー・クリック音"}),K.jsxs("span",{className:"text-orange-400 flex items-center gap-1",children:[K.jsx(dv,{className:"w-2.5 h-2.5"}),Z,"%"]})]}),K.jsx("input",{type:"range",min:"0",max:"100",value:Z,onChange:qt=>G(parseInt(qt.target.value)),className:"w-full h-1 bg-[#251e18] rounded-lg appearance-none cursor-pointer accent-[#ff5500] outline-none"})]})]})]})]})]}),K.jsxs("div",{className:"bg-[#0f0b09] border border-[#2d2218] rounded-xl p-5 shadow-[inset_0_2px_10px_rgba(0,0,0,0.5),0_10px_30px_rgba(0,0,0,0.8)] space-y-4",id:"card-switches-grid",children:[K.jsxs("div",{className:"flex justify-between items-center border-b border-[#2d2218] pb-3 mb-2",children:[K.jsxs("span",{className:"font-mono text-[11px] text-[#a28e7e] tracking-wider flex items-center gap-2 font-bold",children:[K.jsx(hv,{className:"w-3.5 h-3.5 text-amber-500"})," システム構成切替 (SWITCHES)"]}),K.jsxs("span",{className:"flex gap-1",children:[K.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-red-900 animate-pulse"}),K.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-amber-900"})]})]}),K.jsxs("div",{className:"grid grid-cols-2 gap-3",id:"grid-toggle-switches",children:[K.jsxs("button",{onClick:$t,className:`relative p-3 rounded-md border-b-4 border-r-2 text-left flex flex-col justify-between h-20 transition-all font-mono cursor-pointer ${h?"bg-gradient-to-br from-[#2a1d15] to-[#1c120c] border-b-[#000] border-r-[#111] border-t border-l border-[#4a3322] shadow-[inset_0_2px_4px_rgba(255,255,255,0.05),0_2px_8px_rgba(255,85,0,0.15)] translate-y-[2px]":"bg-gradient-to-br from-[#1a1410] to-[#0c0806] border-b-[#3a2a1f] border-r-[#2a1f16] border-t border-l border-[#221710] shadow-[0_4px_10px_rgba(0,0,0,0.5)]"}`,children:[K.jsxs("div",{className:"flex justify-between w-full items-start",children:[K.jsx("span",{className:`text-[9px] font-bold uppercase tracking-widest ${h?"text-[#ffbf80]":"text-[#5a483a]"}`,children:"陽極電極網"}),K.jsx("span",{className:`w-2 h-2 rounded-full border border-black ${h?"bg-[#ff5500] shadow-[0_0_8px_#ff5500]":"bg-[#111]"}`})]}),K.jsx("div",{className:`text-[10px] font-bold mt-2 ${h?"text-[#fff]":"text-[#4a3b30]"}`,children:h?"ON (ACTIVE)":"OFF (HIDDEN)"})]}),K.jsxs("button",{onClick:Ie,className:`relative p-3 rounded-md border-b-4 border-r-2 text-left flex flex-col justify-between h-20 transition-all font-mono cursor-pointer ${T?"bg-gradient-to-br from-[#2a1d15] to-[#1c120c] border-b-[#000] border-r-[#111] border-t border-l border-[#4a3322] shadow-[inset_0_2px_4px_rgba(255,255,255,0.05),0_2px_8px_rgba(255,85,0,0.15)] translate-y-[2px]":"bg-gradient-to-br from-[#1a1410] to-[#0c0806] border-b-[#3a2a1f] border-r-[#2a1f16] border-t border-l border-[#221710] shadow-[0_4px_10px_rgba(0,0,0,0.5)]"}`,children:[K.jsxs("div",{className:"flex justify-between w-full items-start",children:[K.jsx("span",{className:`text-[9px] font-bold uppercase tracking-widest ${T?"text-[#ffbf80]":"text-[#5a483a]"}`,children:"被写界深度"}),K.jsx("span",{className:`w-2 h-2 rounded-full border border-black ${T?"bg-[#ff5500] shadow-[0_0_8px_#ff5500]":"bg-[#111]"}`})]}),K.jsx("div",{className:`text-[10px] font-bold mt-2 ${T?"text-[#fff]":"text-[#4a3b30]"}`,children:T?"ON (ACTIVE)":"OFF (DISABLED)"})]}),K.jsxs("button",{onClick:ce,className:`relative p-3 rounded-md border-b-4 border-r-2 text-left flex flex-col justify-between h-20 transition-all font-mono cursor-pointer ${m==="local"?"bg-gradient-to-br from-[#2a1d15] to-[#1c120c] border-b-[#000] border-r-[#111] border-t border-l border-[#4a3322] shadow-[inset_0_2px_4px_rgba(255,255,255,0.05),0_2px_8px_rgba(255,85,0,0.15)] translate-y-[2px]":"bg-gradient-to-br from-[#1a1410] to-[#0c0806] border-b-[#3a2a1f] border-r-[#2a1f16] border-t border-l border-[#221710] shadow-[0_4px_10px_rgba(0,0,0,0.5)]"}`,children:[K.jsxs("div",{className:"flex justify-between w-full items-start",children:[K.jsx("span",{className:`text-[9px] font-bold uppercase tracking-widest ${m==="local"?"text-[#ffbf80]":"text-[#5a483a]"}`,children:"タイムゾーン"}),K.jsx("span",{className:`w-2 h-2 rounded-full border border-black ${m==="local"?"bg-[#ff5500] shadow-[0_0_8px_#ff5500]":"bg-[#111]"}`})]}),K.jsx("div",{className:`text-[10px] font-bold mt-2 ${m==="local"?"text-[#fff]":"text-[#4a3b30]"}`,children:m==="local"?"LOCAL":"UTC"})]}),K.jsxs("button",{onClick:me,className:`relative p-3 rounded-md border-b-4 border-r-2 text-left flex flex-col justify-between h-20 transition-all font-mono cursor-pointer ${_?"bg-gradient-to-br from-[#2a1d15] to-[#1c120c] border-b-[#000] border-r-[#111] border-t border-l border-[#4a3322] shadow-[inset_0_2px_4px_rgba(255,255,255,0.05),0_2px_8px_rgba(255,85,0,0.15)] translate-y-[2px]":"bg-gradient-to-br from-[#1a1410] to-[#0c0806] border-b-[#3a2a1f] border-r-[#2a1f16] border-t border-l border-[#221710] shadow-[0_4px_10px_rgba(0,0,0,0.5)]"}`,children:[K.jsxs("div",{className:"flex justify-between w-full items-start",children:[K.jsx("span",{className:`text-[9px] font-bold uppercase tracking-widest ${_?"text-[#ffbf80]":"text-[#5a483a]"}`,children:"時間規格表示"}),K.jsx("span",{className:`w-2 h-2 rounded-full border border-black ${_?"bg-[#ff5500] shadow-[0_0_8px_#ff5500]":"bg-[#111]"}`})]}),K.jsx("div",{className:`text-[10px] font-bold mt-2 ${_?"text-[#fff]":"text-[#4a3b30]"}`,children:_?"12H (AM/PM)":"24H (MILITARY)"})]})]}),K.jsxs("button",{onClick:()=>I(!1),className:"w-full mt-2 p-3 bg-[#1c1410] hover:bg-[#251a14] border border-[#ff5500]/30 hover:border-[#ff5500]/60 text-[#ffb180] rounded-lg text-xs font-bold tracking-widest flex items-center justify-center gap-2 transition-all cursor-pointer shadow-[0_0_15px_rgba(255,85,0,0.1)] hover:shadow-[0_0_20px_rgba(255,85,0,0.2)]",children:[K.jsx(Kh,{className:"w-4 h-4"})," 全画面表示 (FULLSCREEN)"]})]})]})]}),N&&K.jsx("footer",{className:"w-full max-w-7xl bg-[#0f0b09] border border-[#231b15] rounded-xl p-4 mt-6 select-none",id:"telemetry-bar",onClick:qt=>qt.stopPropagation(),children:K.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 font-mono text-[10px]",id:"telemetry-grid",children:[K.jsxs("div",{className:"flex flex-col gap-1 items-start text-left bg-black/30 p-2.5 rounded border border-[#1b1511]",children:[K.jsxs("span",{className:"text-[#59493c] font-bold uppercase flex items-center gap-1",children:[K.jsx(Kh,{className:"w-3 h-3 text-[#ff5500]"})," SYSTEM CORE"]}),K.jsx("span",{className:"text-[#a59383] font-semibold",children:"SOVIET IN-18 GLASS x6"})]}),K.jsxs("div",{className:"flex flex-col gap-1 items-start text-left bg-black/30 p-2.5 rounded border border-[#1b1511]",children:[K.jsxs("span",{className:"text-[#59493c] font-bold uppercase flex items-center gap-1",children:[K.jsx(l2,{className:"w-3 h-3 text-emerald-400"})," ANODE TEMPERATURE"]}),K.jsx("span",{className:"text-emerald-400 font-semibold",children:r?`${P} K`:"0.0 K"})]}),K.jsxs("div",{className:"flex flex-col gap-1 items-start text-left bg-black/30 p-2.5 rounded border border-[#1b1511]",children:[K.jsxs("span",{className:"text-[#59493c] font-bold uppercase flex items-center gap-1",children:[K.jsx(Zh,{className:"w-3 h-3 text-amber-500"})," SPUTTER COATING RATE"]}),K.jsx("span",{className:"text-orange-400 font-semibold",children:r?`${bt} mg/Ah`:"0.000 mg/Ah"})]}),K.jsxs("div",{className:"flex flex-col gap-1 items-start text-left bg-black/30 p-2.5 rounded border border-[#1b1511]",children:[K.jsxs("span",{className:"text-[#59493c] font-bold uppercase flex items-center gap-1",children:[K.jsx(e2,{className:"w-3 h-3 text-blue-400"})," TIMECODE LOG"]}),K.jsx("span",{className:"text-[#ae9a8a] font-semibold truncate w-full",children:_t})]}),K.jsxs("div",{className:"flex flex-col gap-1 items-start text-left bg-black/30 p-2.5 rounded border border-[#1b1511] col-span-2",children:[K.jsxs("span",{className:"text-[#59493c] font-bold uppercase flex items-center gap-1",children:[K.jsx(Qh,{className:"w-3 h-3 text-orange-400"})," CALIBRATION STATIONS"]}),K.jsxs("span",{className:"text-[#7c6a5a] text-[9px] w-full truncate font-medium",children:["SWEEP SWT=[",O?"ACTIVE":"STANDBY","], DOFVIG=[",T?"ON":"OFF","]"]})]})]})})]})}window.addEventListener("error",r=>{(r.message==="ResizeObserver loop limit exceeded"||r.message==="ResizeObserver loop completed with undelivered notifications.")&&r.stopImmediatePropagation()});uy.createRoot(document.getElementById("root")).render(K.jsx(Xt.StrictMode,{children:K.jsx(x2,{})}));
