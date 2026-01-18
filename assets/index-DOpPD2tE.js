(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function ul(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const ct={},er=[],Mn=()=>{},Du=()=>!1,Xs=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),fl=n=>n.startsWith("onUpdate:"),Dt=Object.assign,hl=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Ch=Object.prototype.hasOwnProperty,nt=(n,e)=>Ch.call(n,e),We=Array.isArray,tr=n=>qs(n)==="[object Map]",Lu=n=>qs(n)==="[object Set]",ke=n=>typeof n=="function",St=n=>typeof n=="string",mi=n=>typeof n=="symbol",mt=n=>n!==null&&typeof n=="object",Iu=n=>(mt(n)||ke(n))&&ke(n.then)&&ke(n.catch),Uu=Object.prototype.toString,qs=n=>Uu.call(n),Ph=n=>qs(n).slice(8,-1),Nu=n=>qs(n)==="[object Object]",dl=n=>St(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Pr=ul(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ys=n=>{const e=Object.create(null);return(t=>e[t]||(e[t]=n(t)))},Dh=/-\w/g,fi=Ys(n=>n.replace(Dh,e=>e.slice(1).toUpperCase())),Lh=/\B([A-Z])/g,Ui=Ys(n=>n.replace(Lh,"-$1").toLowerCase()),Fu=Ys(n=>n.charAt(0).toUpperCase()+n.slice(1)),co=Ys(n=>n?`on${Fu(n)}`:""),ui=(n,e)=>!Object.is(n,e),ys=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Ou=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},pl=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let Ql;const $s=()=>Ql||(Ql=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ks(n){if(We(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=St(i)?Fh(i):Ks(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(St(n)||mt(n))return n}const Ih=/;(?![^(]*\))/g,Uh=/:([^]+)/,Nh=/\/\*[^]*?\*\//g;function Fh(n){const e={};return n.replace(Nh,"").split(Ih).forEach(t=>{if(t){const i=t.split(Uh);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function js(n){let e="";if(St(n))e=n;else if(We(n))for(let t=0;t<n.length;t++){const i=js(n[t]);i&&(e+=i+" ")}else if(mt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Oh="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Bh=ul(Oh);function Bu(n){return!!n||n===""}const zu=n=>!!(n&&n.__v_isRef===!0),Us=n=>St(n)?n:n==null?"":We(n)||mt(n)&&(n.toString===Uu||!ke(n.toString))?zu(n)?Us(n.value):JSON.stringify(n,Vu,2):String(n),Vu=(n,e)=>zu(e)?Vu(n,e.value):tr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[uo(i,s)+" =>"]=r,t),{})}:Lu(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>uo(t))}:mi(e)?uo(e):mt(e)&&!We(e)&&!Nu(e)?String(e):e,uo=(n,e="")=>{var t;return mi(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};let Ht;class zh{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ht,!e&&Ht&&(this.index=(Ht.scopes||(Ht.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=Ht;try{return Ht=this,e()}finally{Ht=t}}}on(){++this._on===1&&(this.prevScope=Ht,Ht=this)}off(){this._on>0&&--this._on===0&&(Ht=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Vh(){return Ht}let dt;const fo=new WeakSet;class Hu{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ht&&Ht.active&&Ht.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,fo.has(this)&&(fo.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||ku(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,ec(this),Wu(this);const e=dt,t=un;dt=this,un=!0;try{return this.fn()}finally{Xu(this),dt=e,un=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)_l(e);this.deps=this.depsTail=void 0,ec(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?fo.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ra(this)&&this.run()}get dirty(){return ra(this)}}let Gu=0,Dr,Lr;function ku(n,e=!1){if(n.flags|=8,e){n.next=Lr,Lr=n;return}n.next=Dr,Dr=n}function ml(){Gu++}function gl(){if(--Gu>0)return;if(Lr){let e=Lr;for(Lr=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Dr;){let e=Dr;for(Dr=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function Wu(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Xu(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),_l(i),Hh(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function ra(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(qu(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function qu(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Or)||(n.globalVersion=Or,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!ra(n))))return;n.flags|=2;const e=n.dep,t=dt,i=un;dt=n,un=!0;try{Wu(n);const r=n.fn(n._value);(e.version===0||ui(r,n._value))&&(n.flags|=128,n._value=r,e.version++)}catch(r){throw e.version++,r}finally{dt=t,un=i,Xu(n),n.flags&=-3}}function _l(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)_l(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function Hh(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let un=!0;const Yu=[];function Xn(){Yu.push(un),un=!1}function qn(){const n=Yu.pop();un=n===void 0?!0:n}function ec(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=dt;dt=void 0;try{e()}finally{dt=t}}}let Or=0;class Gh{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class xl{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!dt||!un||dt===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==dt)t=this.activeLink=new Gh(dt,this),dt.deps?(t.prevDep=dt.depsTail,dt.depsTail.nextDep=t,dt.depsTail=t):dt.deps=dt.depsTail=t,$u(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=dt.depsTail,t.nextDep=void 0,dt.depsTail.nextDep=t,dt.depsTail=t,dt.deps===t&&(dt.deps=i)}return t}trigger(e){this.version++,Or++,this.notify(e)}notify(e){ml();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{gl()}}}function $u(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)$u(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const sa=new WeakMap,Li=Symbol(""),oa=Symbol(""),Br=Symbol("");function Rt(n,e,t){if(un&&dt){let i=sa.get(n);i||sa.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new xl),r.map=i,r.key=t),r.track()}}function On(n,e,t,i,r,s){const o=sa.get(n);if(!o){Or++;return}const a=l=>{l&&l.trigger()};if(ml(),e==="clear")o.forEach(a);else{const l=We(n),c=l&&dl(t);if(l&&t==="length"){const u=Number(i);o.forEach((f,d)=>{(d==="length"||d===Br||!mi(d)&&d>=u)&&a(f)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(Br)),e){case"add":l?c&&a(o.get("length")):(a(o.get(Li)),tr(n)&&a(o.get(oa)));break;case"delete":l||(a(o.get(Li)),tr(n)&&a(o.get(oa)));break;case"set":tr(n)&&a(o.get(Li));break}}gl()}function Fi(n){const e=tt(n);return e===n?e:(Rt(e,"iterate",Br),fn(n)?e:e.map(Yn))}function vl(n){return Rt(n=tt(n),"iterate",Br),n}function ri(n,e){return hi(n)?nr(n)?zr(Yn(e)):zr(e):Yn(e)}const kh={__proto__:null,[Symbol.iterator](){return ho(this,Symbol.iterator,n=>ri(this,n))},concat(...n){return Fi(this).concat(...n.map(e=>We(e)?Fi(e):e))},entries(){return ho(this,"entries",n=>(n[1]=ri(this,n[1]),n))},every(n,e){return Pn(this,"every",n,e,void 0,arguments)},filter(n,e){return Pn(this,"filter",n,e,t=>t.map(i=>ri(this,i)),arguments)},find(n,e){return Pn(this,"find",n,e,t=>ri(this,t),arguments)},findIndex(n,e){return Pn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Pn(this,"findLast",n,e,t=>ri(this,t),arguments)},findLastIndex(n,e){return Pn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Pn(this,"forEach",n,e,void 0,arguments)},includes(...n){return po(this,"includes",n)},indexOf(...n){return po(this,"indexOf",n)},join(n){return Fi(this).join(n)},lastIndexOf(...n){return po(this,"lastIndexOf",n)},map(n,e){return Pn(this,"map",n,e,void 0,arguments)},pop(){return _r(this,"pop")},push(...n){return _r(this,"push",n)},reduce(n,...e){return tc(this,"reduce",n,e)},reduceRight(n,...e){return tc(this,"reduceRight",n,e)},shift(){return _r(this,"shift")},some(n,e){return Pn(this,"some",n,e,void 0,arguments)},splice(...n){return _r(this,"splice",n)},toReversed(){return Fi(this).toReversed()},toSorted(n){return Fi(this).toSorted(n)},toSpliced(...n){return Fi(this).toSpliced(...n)},unshift(...n){return _r(this,"unshift",n)},values(){return ho(this,"values",n=>ri(this,n))}};function ho(n,e,t){const i=vl(n),r=i[e]();return i!==n&&!fn(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=t(s.value)),s}),r}const Wh=Array.prototype;function Pn(n,e,t,i,r,s){const o=vl(n),a=o!==n&&!fn(n),l=o[e];if(l!==Wh[e]){const f=l.apply(n,s);return a?Yn(f):f}let c=t;o!==n&&(a?c=function(f,d){return t.call(this,ri(n,f),d,n)}:t.length>2&&(c=function(f,d){return t.call(this,f,d,n)}));const u=l.call(o,c,i);return a&&r?r(u):u}function tc(n,e,t,i){const r=vl(n);let s=t;return r!==n&&(fn(n)?t.length>3&&(s=function(o,a,l){return t.call(this,o,a,l,n)}):s=function(o,a,l){return t.call(this,o,ri(n,a),l,n)}),r[e](s,...i)}function po(n,e,t){const i=tt(n);Rt(i,"iterate",Br);const r=i[e](...t);return(r===-1||r===!1)&&yl(t[0])?(t[0]=tt(t[0]),i[e](...t)):r}function _r(n,e,t=[]){Xn(),ml();const i=tt(n)[e].apply(n,t);return gl(),qn(),i}const Xh=ul("__proto__,__v_isRef,__isVue"),Ku=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(mi));function qh(n){mi(n)||(n=String(n));const e=tt(this);return Rt(e,"has",n),e.hasOwnProperty(n)}class ju{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?nd:ef:s?Qu:Ju).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=We(e);if(!r){let l;if(o&&(l=kh[t]))return l;if(t==="hasOwnProperty")return qh}const a=Reflect.get(e,t,Pt(e)?e:i);if((mi(t)?Ku.has(t):Xh(t))||(r||Rt(e,"get",t),s))return a;if(Pt(a)){const l=o&&dl(t)?a:a.value;return r&&mt(l)?la(l):l}return mt(a)?r?la(a):Ml(a):a}}class Zu extends ju{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];const o=We(e)&&dl(t);if(!this._isShallow){const c=hi(s);if(!fn(i)&&!hi(i)&&(s=tt(s),i=tt(i)),!o&&Pt(s)&&!Pt(i))return c||(s.value=i),!0}const a=o?Number(t)<e.length:nt(e,t),l=Reflect.set(e,t,i,Pt(e)?e:r);return e===tt(r)&&(a?ui(i,s)&&On(e,"set",t,i):On(e,"add",t,i)),l}deleteProperty(e,t){const i=nt(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&On(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!mi(t)||!Ku.has(t))&&Rt(e,"has",t),i}ownKeys(e){return Rt(e,"iterate",We(e)?"length":Li),Reflect.ownKeys(e)}}class Yh extends ju{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const $h=new Zu,Kh=new Yh,jh=new Zu(!0);const aa=n=>n,es=n=>Reflect.getPrototypeOf(n);function Zh(n,e,t){return function(...i){const r=this.__v_raw,s=tt(r),o=tr(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=r[n](...i),u=t?aa:e?zr:Yn;return!e&&Rt(s,"iterate",l?oa:Li),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:a?[u(f[0]),u(f[1])]:u(f),done:d}},[Symbol.iterator](){return this}}}}function ts(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Jh(n,e){const t={get(r){const s=this.__v_raw,o=tt(s),a=tt(r);n||(ui(r,a)&&Rt(o,"get",r),Rt(o,"get",a));const{has:l}=es(o),c=e?aa:n?zr:Yn;if(l.call(o,r))return c(s.get(r));if(l.call(o,a))return c(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!n&&Rt(tt(r),"iterate",Li),r.size},has(r){const s=this.__v_raw,o=tt(s),a=tt(r);return n||(ui(r,a)&&Rt(o,"has",r),Rt(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=tt(a),c=e?aa:n?zr:Yn;return!n&&Rt(l,"iterate",Li),a.forEach((u,f)=>r.call(s,c(u),c(f),o))}};return Dt(t,n?{add:ts("add"),set:ts("set"),delete:ts("delete"),clear:ts("clear")}:{add(r){!e&&!fn(r)&&!hi(r)&&(r=tt(r));const s=tt(this);return es(s).has.call(s,r)||(s.add(r),On(s,"add",r,r)),this},set(r,s){!e&&!fn(s)&&!hi(s)&&(s=tt(s));const o=tt(this),{has:a,get:l}=es(o);let c=a.call(o,r);c||(r=tt(r),c=a.call(o,r));const u=l.call(o,r);return o.set(r,s),c?ui(s,u)&&On(o,"set",r,s):On(o,"add",r,s),this},delete(r){const s=tt(this),{has:o,get:a}=es(s);let l=o.call(s,r);l||(r=tt(r),l=o.call(s,r)),a&&a.call(s,r);const c=s.delete(r);return l&&On(s,"delete",r,void 0),c},clear(){const r=tt(this),s=r.size!==0,o=r.clear();return s&&On(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Zh(r,n,e)}),t}function Sl(n,e){const t=Jh(n,e);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(nt(t,r)&&r in i?t:i,r,s)}const Qh={get:Sl(!1,!1)},ed={get:Sl(!1,!0)},td={get:Sl(!0,!1)};const Ju=new WeakMap,Qu=new WeakMap,ef=new WeakMap,nd=new WeakMap;function id(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function rd(n){return n.__v_skip||!Object.isExtensible(n)?0:id(Ph(n))}function Ml(n){return hi(n)?n:El(n,!1,$h,Qh,Ju)}function sd(n){return El(n,!1,jh,ed,Qu)}function la(n){return El(n,!0,Kh,td,ef)}function El(n,e,t,i,r){if(!mt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=rd(n);if(s===0)return n;const o=r.get(n);if(o)return o;const a=new Proxy(n,s===2?i:t);return r.set(n,a),a}function nr(n){return hi(n)?nr(n.__v_raw):!!(n&&n.__v_isReactive)}function hi(n){return!!(n&&n.__v_isReadonly)}function fn(n){return!!(n&&n.__v_isShallow)}function yl(n){return n?!!n.__v_raw:!1}function tt(n){const e=n&&n.__v_raw;return e?tt(e):n}function od(n){return!nt(n,"__v_skip")&&Object.isExtensible(n)&&Ou(n,"__v_skip",!0),n}const Yn=n=>mt(n)?Ml(n):n,zr=n=>mt(n)?la(n):n;function Pt(n){return n?n.__v_isRef===!0:!1}function ai(n){return ad(n,!1)}function ad(n,e){return Pt(n)?n:new ld(n,e)}class ld{constructor(e,t){this.dep=new xl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:tt(e),this._value=t?e:Yn(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||fn(e)||hi(e);e=i?e:tt(e),ui(e,t)&&(this._rawValue=e,this._value=i?e:Yn(e),this.dep.trigger())}}function cd(n){return Pt(n)?n.value:n}const ud={get:(n,e,t)=>e==="__v_raw"?n:cd(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return Pt(r)&&!Pt(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function tf(n){return nr(n)?n:new Proxy(n,ud)}class fd{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new xl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Or-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&dt!==this)return ku(this,!0),!0}get value(){const e=this.dep.track();return qu(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function hd(n,e,t=!1){let i,r;return ke(n)?i=n:(i=n.get,r=n.set),new fd(i,r,t)}const ns={},Ns=new WeakMap;let Ai;function dd(n,e=!1,t=Ai){if(t){let i=Ns.get(t);i||Ns.set(t,i=[]),i.push(n)}}function pd(n,e,t=ct){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=t,c=T=>r?T:fn(T)||r===!1||r===0?Bn(T,1):Bn(T);let u,f,d,p,x=!1,_=!1;if(Pt(n)?(f=()=>n.value,x=fn(n)):nr(n)?(f=()=>c(n),x=!0):We(n)?(_=!0,x=n.some(T=>nr(T)||fn(T)),f=()=>n.map(T=>{if(Pt(T))return T.value;if(nr(T))return c(T);if(ke(T))return l?l(T,2):T()})):ke(n)?e?f=l?()=>l(n,2):n:f=()=>{if(d){Xn();try{d()}finally{qn()}}const T=Ai;Ai=u;try{return l?l(n,3,[p]):n(p)}finally{Ai=T}}:f=Mn,e&&r){const T=f,R=r===!0?1/0:r;f=()=>Bn(T(),R)}const g=Vh(),h=()=>{u.stop(),g&&g.active&&hl(g.effects,u)};if(s&&e){const T=e;e=(...R)=>{T(...R),h()}}let E=_?new Array(n.length).fill(ns):ns;const w=T=>{if(!(!(u.flags&1)||!u.dirty&&!T))if(e){const R=u.run();if(r||x||(_?R.some((L,D)=>ui(L,E[D])):ui(R,E))){d&&d();const L=Ai;Ai=u;try{const D=[R,E===ns?void 0:_&&E[0]===ns?[]:E,p];E=R,l?l(e,3,D):e(...D)}finally{Ai=L}}}else u.run()};return a&&a(w),u=new Hu(f),u.scheduler=o?()=>o(w,!1):w,p=T=>dd(T,!1,u),d=u.onStop=()=>{const T=Ns.get(u);if(T){if(l)l(T,4);else for(const R of T)R();Ns.delete(u)}},e?i?w(!0):E=u.run():o?o(w.bind(null,!0),!0):u.run(),h.pause=u.pause.bind(u),h.resume=u.resume.bind(u),h.stop=h,h}function Bn(n,e=1/0,t){if(e<=0||!mt(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,Pt(n))Bn(n.value,e,t);else if(We(n))for(let i=0;i<n.length;i++)Bn(n[i],e,t);else if(Lu(n)||tr(n))n.forEach(i=>{Bn(i,e,t)});else if(Nu(n)){for(const i in n)Bn(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Bn(n[i],e,t)}return n}function Yr(n,e,t,i){try{return i?n(...i):n()}catch(r){Zs(r,e,t)}}function Tn(n,e,t,i){if(ke(n)){const r=Yr(n,e,t,i);return r&&Iu(r)&&r.catch(s=>{Zs(s,e,t)}),r}if(We(n)){const r=[];for(let s=0;s<n.length;s++)r.push(Tn(n[s],e,t,i));return r}}function Zs(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||ct;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,l,c)===!1)return}a=a.parent}if(s){Xn(),Yr(s,null,10,[n,l,c]),qn();return}}md(n,t,r,i,o)}function md(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}const Nt=[];let mn=-1;const ir=[];let si=null,Zi=0;const nf=Promise.resolve();let Fs=null;function gd(n){const e=Fs||nf;return n?e.then(this?n.bind(this):n):e}function _d(n){let e=mn+1,t=Nt.length;for(;e<t;){const i=e+t>>>1,r=Nt[i],s=Vr(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function bl(n){if(!(n.flags&1)){const e=Vr(n),t=Nt[Nt.length-1];!t||!(n.flags&2)&&e>=Vr(t)?Nt.push(n):Nt.splice(_d(e),0,n),n.flags|=1,rf()}}function rf(){Fs||(Fs=nf.then(of))}function xd(n){We(n)?ir.push(...n):si&&n.id===-1?si.splice(Zi+1,0,n):n.flags&1||(ir.push(n),n.flags|=1),rf()}function nc(n,e,t=mn+1){for(;t<Nt.length;t++){const i=Nt[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Nt.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function sf(n){if(ir.length){const e=[...new Set(ir)].sort((t,i)=>Vr(t)-Vr(i));if(ir.length=0,si){si.push(...e);return}for(si=e,Zi=0;Zi<si.length;Zi++){const t=si[Zi];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}si=null,Zi=0}}const Vr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function of(n){try{for(mn=0;mn<Nt.length;mn++){const e=Nt[mn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Yr(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;mn<Nt.length;mn++){const e=Nt[mn];e&&(e.flags&=-2)}mn=-1,Nt.length=0,sf(),Fs=null,(Nt.length||ir.length)&&of()}}let rn=null,af=null;function Os(n){const e=rn;return rn=n,af=n&&n.type.__scopeId||null,e}function vd(n,e=rn,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&hc(-1);const s=Os(e);let o;try{o=n(...r)}finally{Os(s),i._d&&hc(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Sd(n,e){if(rn===null)return n;const t=to(rn),i=n.dirs||(n.dirs=[]);for(let r=0;r<e.length;r++){let[s,o,a,l=ct]=e[r];s&&(ke(s)&&(s={mounted:s,updated:s}),s.deep&&Bn(o),i.push({dir:s,instance:t,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function xi(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(Xn(),Tn(l,t,8,[n.el,a,n,e]),qn())}}function Md(n,e){if(Ft){let t=Ft.provides;const i=Ft.parent&&Ft.parent.provides;i===t&&(t=Ft.provides=Object.create(i)),t[n]=e}}function bs(n,e,t=!1){const i=vp();if(i||rr){let r=rr?rr._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&ke(e)?e.call(i&&i.proxy):e}}const Ed=Symbol.for("v-scx"),yd=()=>bs(Ed);function mo(n,e,t){return lf(n,e,t)}function lf(n,e,t=ct){const{immediate:i,deep:r,flush:s,once:o}=t,a=Dt({},t),l=e&&i||!e&&s!=="post";let c;if(Gr){if(s==="sync"){const p=yd();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=Mn,p.resume=Mn,p.pause=Mn,p}}const u=Ft;a.call=(p,x,_)=>Tn(p,u,x,_);let f=!1;s==="post"?a.scheduler=p=>{Kt(p,u&&u.suspense)}:s!=="sync"&&(f=!0,a.scheduler=(p,x)=>{x?p():bl(p)}),a.augmentJob=p=>{e&&(p.flags|=4),f&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const d=pd(n,e,a);return Gr&&(c?c.push(d):l&&d()),d}function bd(n,e,t){const i=this.proxy,r=St(n)?n.includes(".")?cf(i,n):()=>i[n]:n.bind(i,i);let s;ke(e)?s=e:(s=e.handler,t=e);const o=$r(this),a=lf(r,s.bind(i),t);return o(),a}function cf(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const Td=Symbol("_vte"),Ad=n=>n.__isTeleport,wd=Symbol("_leaveCb");function Tl(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Tl(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function uf(n,e){return ke(n)?Dt({name:n.name},e,{setup:n}):n}function ff(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}const Bs=new WeakMap;function Ir(n,e,t,i,r=!1){if(We(n)){n.forEach((x,_)=>Ir(x,e&&(We(e)?e[_]:e),t,i,r));return}if(Ur(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Ir(n,e,t,i.component.subTree);return}const s=i.shapeFlag&4?to(i.component):i.el,o=r?null:s,{i:a,r:l}=n,c=e&&e.r,u=a.refs===ct?a.refs={}:a.refs,f=a.setupState,d=tt(f),p=f===ct?Du:x=>nt(d,x);if(c!=null&&c!==l){if(ic(e),St(c))u[c]=null,p(c)&&(f[c]=null);else if(Pt(c)){c.value=null;const x=e;x.k&&(u[x.k]=null)}}if(ke(l))Yr(l,a,12,[o,u]);else{const x=St(l),_=Pt(l);if(x||_){const g=()=>{if(n.f){const h=x?p(l)?f[l]:u[l]:l.value;if(r)We(h)&&hl(h,s);else if(We(h))h.includes(s)||h.push(s);else if(x)u[l]=[s],p(l)&&(f[l]=u[l]);else{const E=[s];l.value=E,n.k&&(u[n.k]=E)}}else x?(u[l]=o,p(l)&&(f[l]=o)):_&&(l.value=o,n.k&&(u[n.k]=o))};if(o){const h=()=>{g(),Bs.delete(n)};h.id=-1,Bs.set(n,h),Kt(h,t)}else ic(n),g()}}}function ic(n){const e=Bs.get(n);e&&(e.flags|=8,Bs.delete(n))}$s().requestIdleCallback;$s().cancelIdleCallback;const Ur=n=>!!n.type.__asyncLoader,hf=n=>n.type.__isKeepAlive;function Rd(n,e){df(n,"a",e)}function Cd(n,e){df(n,"da",e)}function df(n,e,t=Ft){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(Js(e,i,t),t){let r=t.parent;for(;r&&r.parent;)hf(r.parent.vnode)&&Pd(i,e,t,r),r=r.parent}}function Pd(n,e,t,i){const r=Js(e,n,i,!0);Al(()=>{hl(i[e],r)},t)}function Js(n,e,t=Ft,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{Xn();const a=$r(t),l=Tn(e,t,n,o);return a(),qn(),l});return i?r.unshift(s):r.push(s),s}}const jn=n=>(e,t=Ft)=>{(!Gr||n==="sp")&&Js(n,(...i)=>e(...i),t)},Dd=jn("bm"),pf=jn("m"),Ld=jn("bu"),Id=jn("u"),mf=jn("bum"),Al=jn("um"),Ud=jn("sp"),Nd=jn("rtg"),Fd=jn("rtc");function Od(n,e=Ft){Js("ec",n,e)}const Bd=Symbol.for("v-ndc"),ca=n=>n?Of(n)?to(n):ca(n.parent):null,Nr=Dt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>ca(n.parent),$root:n=>ca(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>_f(n),$forceUpdate:n=>n.f||(n.f=()=>{bl(n.update)}),$nextTick:n=>n.n||(n.n=gd.bind(n.proxy)),$watch:n=>bd.bind(n)}),go=(n,e)=>n!==ct&&!n.__isScriptSetup&&nt(n,e),zd={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(go(i,e))return o[e]=1,i[e];if(r!==ct&&nt(r,e))return o[e]=2,r[e];if(nt(s,e))return o[e]=3,s[e];if(t!==ct&&nt(t,e))return o[e]=4,t[e];ua&&(o[e]=0)}}const c=Nr[e];let u,f;if(c)return e==="$attrs"&&Rt(n.attrs,"get",""),c(n);if((u=a.__cssModules)&&(u=u[e]))return u;if(t!==ct&&nt(t,e))return o[e]=4,t[e];if(f=l.config.globalProperties,nt(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return go(r,e)?(r[e]=t,!0):i!==ct&&nt(i,e)?(i[e]=t,!0):nt(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,props:s,type:o}},a){let l;return!!(t[a]||n!==ct&&a[0]!=="$"&&nt(n,a)||go(e,a)||nt(s,a)||nt(i,a)||nt(Nr,a)||nt(r.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:nt(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function rc(n){return We(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let ua=!0;function Vd(n){const e=_f(n),t=n.proxy,i=n.ctx;ua=!1,e.beforeCreate&&sc(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:p,updated:x,activated:_,deactivated:g,beforeDestroy:h,beforeUnmount:E,destroyed:w,unmounted:T,render:R,renderTracked:L,renderTriggered:D,errorCaptured:G,serverPrefetch:M,expose:y,inheritAttrs:I,components:J,directives:q,filters:re}=e;if(c&&Hd(c,i,null),o)for(const V in o){const te=o[V];ke(te)&&(i[V]=te.bind(t))}if(r){const V=r.call(t,t);mt(V)&&(n.data=Ml(V))}if(ua=!0,s)for(const V in s){const te=s[V],ge=ke(te)?te.bind(t,t):ke(te.get)?te.get.bind(t,t):Mn,me=!ke(te)&&ke(te.set)?te.set.bind(t):Mn,ve=Tp({get:ge,set:me});Object.defineProperty(i,V,{enumerable:!0,configurable:!0,get:()=>ve.value,set:Oe=>ve.value=Oe})}if(a)for(const V in a)gf(a[V],i,t,V);if(l){const V=ke(l)?l.call(t):l;Reflect.ownKeys(V).forEach(te=>{Md(te,V[te])})}u&&sc(u,n,"c");function j(V,te){We(te)?te.forEach(ge=>V(ge.bind(t))):te&&V(te.bind(t))}if(j(Dd,f),j(pf,d),j(Ld,p),j(Id,x),j(Rd,_),j(Cd,g),j(Od,G),j(Fd,L),j(Nd,D),j(mf,E),j(Al,T),j(Ud,M),We(y))if(y.length){const V=n.exposed||(n.exposed={});y.forEach(te=>{Object.defineProperty(V,te,{get:()=>t[te],set:ge=>t[te]=ge,enumerable:!0})})}else n.exposed||(n.exposed={});R&&n.render===Mn&&(n.render=R),I!=null&&(n.inheritAttrs=I),J&&(n.components=J),q&&(n.directives=q),M&&ff(n)}function Hd(n,e,t=Mn){We(n)&&(n=fa(n));for(const i in n){const r=n[i];let s;mt(r)?"default"in r?s=bs(r.from||i,r.default,!0):s=bs(r.from||i):s=bs(r),Pt(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function sc(n,e,t){Tn(We(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function gf(n,e,t,i){let r=i.includes(".")?cf(t,i):()=>t[i];if(St(n)){const s=e[n];ke(s)&&mo(r,s)}else if(ke(n))mo(r,n.bind(t));else if(mt(n))if(We(n))n.forEach(s=>gf(s,e,t,i));else{const s=ke(n.handler)?n.handler.bind(t):e[n.handler];ke(s)&&mo(r,s,n)}}function _f(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>zs(l,c,o,!0)),zs(l,e,o)),mt(e)&&s.set(e,l),l}function zs(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&zs(n,s,t,!0),r&&r.forEach(o=>zs(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=Gd[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const Gd={data:oc,props:ac,emits:ac,methods:wr,computed:wr,beforeCreate:It,created:It,beforeMount:It,mounted:It,beforeUpdate:It,updated:It,beforeDestroy:It,beforeUnmount:It,destroyed:It,unmounted:It,activated:It,deactivated:It,errorCaptured:It,serverPrefetch:It,components:wr,directives:wr,watch:Wd,provide:oc,inject:kd};function oc(n,e){return e?n?function(){return Dt(ke(n)?n.call(this,this):n,ke(e)?e.call(this,this):e)}:e:n}function kd(n,e){return wr(fa(n),fa(e))}function fa(n){if(We(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function It(n,e){return n?[...new Set([].concat(n,e))]:e}function wr(n,e){return n?Dt(Object.create(null),n,e):e}function ac(n,e){return n?We(n)&&We(e)?[...new Set([...n,...e])]:Dt(Object.create(null),rc(n),rc(e??{})):e}function Wd(n,e){if(!n)return e;if(!e)return n;const t=Dt(Object.create(null),n);for(const i in e)t[i]=It(n[i],e[i]);return t}function xf(){return{app:null,config:{isNativeTag:Du,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Xd=0;function qd(n,e){return function(i,r=null){ke(i)||(i=Dt({},i)),r!=null&&!mt(r)&&(r=null);const s=xf(),o=new WeakSet,a=[];let l=!1;const c=s.app={_uid:Xd++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:Ap,get config(){return s.config},set config(u){},use(u,...f){return o.has(u)||(u&&ke(u.install)?(o.add(u),u.install(c,...f)):ke(u)&&(o.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,d){if(!l){const p=c._ceVNode||Hn(i,r);return p.appContext=s,d===!0?d="svg":d===!1&&(d=void 0),n(p,u,d),l=!0,c._container=u,u.__vue_app__=c,to(p.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Tn(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=rr;rr=c;try{return u()}finally{rr=f}}};return c}}let rr=null;const Yd=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${fi(e)}Modifiers`]||n[`${Ui(e)}Modifiers`];function $d(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||ct;let r=t;const s=e.startsWith("update:"),o=s&&Yd(i,e.slice(7));o&&(o.trim&&(r=t.map(u=>St(u)?u.trim():u)),o.number&&(r=t.map(pl)));let a,l=i[a=co(e)]||i[a=co(fi(e))];!l&&s&&(l=i[a=co(Ui(e))]),l&&Tn(l,n,6,r);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Tn(c,n,6,r)}}const Kd=new WeakMap;function vf(n,e,t=!1){const i=t?Kd:e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!ke(n)){const l=c=>{const u=vf(c,e,!0);u&&(a=!0,Dt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(mt(n)&&i.set(n,null),null):(We(s)?s.forEach(l=>o[l]=null):Dt(o,s),mt(n)&&i.set(n,o),o)}function Qs(n,e){return!n||!Xs(e)?!1:(e=e.slice(2).replace(/Once$/,""),nt(n,e[0].toLowerCase()+e.slice(1))||nt(n,Ui(e))||nt(n,e))}function lc(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:d,setupState:p,ctx:x,inheritAttrs:_}=n,g=Os(n);let h,E;try{if(t.shapeFlag&4){const T=r||i,R=T;h=_n(c.call(R,T,u,f,p,d,x)),E=a}else{const T=e;h=_n(T.length>1?T(f,{attrs:a,slots:o,emit:l}):T(f,null)),E=e.props?a:jd(a)}}catch(T){Fr.length=0,Zs(T,n,1),h=Hn(di)}let w=h;if(E&&_!==!1){const T=Object.keys(E),{shapeFlag:R}=w;T.length&&R&7&&(s&&T.some(fl)&&(E=Zd(E,s)),w=ar(w,E,!1,!0))}return t.dirs&&(w=ar(w,null,!1,!0),w.dirs=w.dirs?w.dirs.concat(t.dirs):t.dirs),t.transition&&Tl(w,t.transition),h=w,Os(g),h}const jd=n=>{let e;for(const t in n)(t==="class"||t==="style"||Xs(t))&&((e||(e={}))[t]=n[t]);return e},Zd=(n,e)=>{const t={};for(const i in n)(!fl(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Jd(n,e,t){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?cc(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(o[d]!==i[d]&&!Qs(c,d))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?cc(i,o,c):!0:!!o;return!1}function cc(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!Qs(t,s))return!0}return!1}function Qd({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const Sf={},Mf=()=>Object.create(Sf),Ef=n=>Object.getPrototypeOf(n)===Sf;function ep(n,e,t,i=!1){const r={},s=Mf();n.propsDefaults=Object.create(null),yf(n,e,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);t?n.props=i?r:sd(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function tp(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=tt(r),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(Qs(n.emitsOptions,d))continue;const p=e[d];if(l)if(nt(s,d))p!==s[d]&&(s[d]=p,c=!0);else{const x=fi(d);r[x]=ha(l,a,x,p,n,!1)}else p!==s[d]&&(s[d]=p,c=!0)}}}else{yf(n,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!nt(e,f)&&((u=Ui(f))===f||!nt(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=ha(l,a,f,void 0,n,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!nt(e,f))&&(delete s[f],c=!0)}c&&On(n.attrs,"set","")}function yf(n,e,t,i){const[r,s]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(Pr(l))continue;const c=e[l];let u;r&&nt(r,u=fi(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:Qs(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=tt(t),c=a||ct;for(let u=0;u<s.length;u++){const f=s[u];t[f]=ha(r,l,f,c[f],n,!nt(c,f))}}return o}function ha(n,e,t,i,r,s){const o=n[t];if(o!=null){const a=nt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&ke(l)){const{propsDefaults:c}=r;if(t in c)i=c[t];else{const u=$r(r);i=c[t]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(t,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===Ui(t))&&(i=!0))}return i}const np=new WeakMap;function bf(n,e,t=!1){const i=t?np:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let l=!1;if(!ke(n)){const u=f=>{l=!0;const[d,p]=bf(f,e,!0);Dt(o,d),p&&a.push(...p)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return mt(n)&&i.set(n,er),er;if(We(s))for(let u=0;u<s.length;u++){const f=fi(s[u]);uc(f)&&(o[f]=ct)}else if(s)for(const u in s){const f=fi(u);if(uc(f)){const d=s[u],p=o[f]=We(d)||ke(d)?{type:d}:Dt({},d),x=p.type;let _=!1,g=!0;if(We(x))for(let h=0;h<x.length;++h){const E=x[h],w=ke(E)&&E.name;if(w==="Boolean"){_=!0;break}else w==="String"&&(g=!1)}else _=ke(x)&&x.name==="Boolean";p[0]=_,p[1]=g,(_||nt(p,"default"))&&a.push(f)}}const c=[o,a];return mt(n)&&i.set(n,c),c}function uc(n){return n[0]!=="$"&&!Pr(n)}const wl=n=>n==="_"||n==="_ctx"||n==="$stable",Rl=n=>We(n)?n.map(_n):[_n(n)],ip=(n,e,t)=>{if(e._n)return e;const i=vd((...r)=>Rl(e(...r)),t);return i._c=!1,i},Tf=(n,e,t)=>{const i=n._ctx;for(const r in n){if(wl(r))continue;const s=n[r];if(ke(s))e[r]=ip(r,s,i);else if(s!=null){const o=Rl(s);e[r]=()=>o}}},Af=(n,e)=>{const t=Rl(e);n.slots.default=()=>t},wf=(n,e,t)=>{for(const i in e)(t||!wl(i))&&(n[i]=e[i])},rp=(n,e,t)=>{const i=n.slots=Mf();if(n.vnode.shapeFlag&32){const r=e._;r?(wf(i,e,t),t&&Ou(i,"_",r,!0)):Tf(e,i)}else e&&Af(n,e)},sp=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,o=ct;if(i.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:wf(r,e,t):(s=!e.$stable,Tf(e,r)),o=e}else e&&(Af(n,e),o={default:1});if(s)for(const a in r)!wl(a)&&o[a]==null&&delete r[a]},Kt=up;function op(n){return ap(n)}function ap(n,e){const t=$s();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:p=Mn,insertStaticContent:x}=n,_=(A,C,B,Z=null,X=null,ne=null,b=void 0,ue=null,oe=!!C.dynamicChildren)=>{if(A===C)return;A&&!xr(A,C)&&(Z=F(A),Oe(A,X,ne,!0),A=null),C.patchFlag===-2&&(oe=!1,C.dynamicChildren=null);const{type:ie,ref:ae,shapeFlag:v}=C;switch(ie){case eo:g(A,C,B,Z);break;case di:h(A,C,B,Z);break;case xo:A==null&&E(C,B,Z,b);break;case gn:J(A,C,B,Z,X,ne,b,ue,oe);break;default:v&1?R(A,C,B,Z,X,ne,b,ue,oe):v&6?q(A,C,B,Z,X,ne,b,ue,oe):(v&64||v&128)&&ie.process(A,C,B,Z,X,ne,b,ue,oe,se)}ae!=null&&X?Ir(ae,A&&A.ref,ne,C||A,!C):ae==null&&A&&A.ref!=null&&Ir(A.ref,null,ne,A,!0)},g=(A,C,B,Z)=>{if(A==null)i(C.el=a(C.children),B,Z);else{const X=C.el=A.el;C.children!==A.children&&c(X,C.children)}},h=(A,C,B,Z)=>{A==null?i(C.el=l(C.children||""),B,Z):C.el=A.el},E=(A,C,B,Z)=>{[A.el,A.anchor]=x(A.children,C,B,Z,A.el,A.anchor)},w=({el:A,anchor:C},B,Z)=>{let X;for(;A&&A!==C;)X=d(A),i(A,B,Z),A=X;i(C,B,Z)},T=({el:A,anchor:C})=>{let B;for(;A&&A!==C;)B=d(A),r(A),A=B;r(C)},R=(A,C,B,Z,X,ne,b,ue,oe)=>{if(C.type==="svg"?b="svg":C.type==="math"&&(b="mathml"),A==null)L(C,B,Z,X,ne,b,ue,oe);else{const ie=A.el&&A.el._isVueCE?A.el:null;try{ie&&ie._beginPatch(),M(A,C,X,ne,b,ue,oe)}finally{ie&&ie._endPatch()}}},L=(A,C,B,Z,X,ne,b,ue)=>{let oe,ie;const{props:ae,shapeFlag:v,transition:m,dirs:P}=A;if(oe=A.el=o(A.type,ne,ae&&ae.is,ae),v&8?u(oe,A.children):v&16&&G(A.children,oe,null,Z,X,_o(A,ne),b,ue),P&&xi(A,null,Z,"created"),D(oe,A,A.scopeId,b,Z),ae){for(const Q in ae)Q!=="value"&&!Pr(Q)&&s(oe,Q,null,ae[Q],ne,Z);"value"in ae&&s(oe,"value",null,ae.value,ne),(ie=ae.onVnodeBeforeMount)&&dn(ie,Z,A)}P&&xi(A,null,Z,"beforeMount");const W=lp(X,m);W&&m.beforeEnter(oe),i(oe,C,B),((ie=ae&&ae.onVnodeMounted)||W||P)&&Kt(()=>{ie&&dn(ie,Z,A),W&&m.enter(oe),P&&xi(A,null,Z,"mounted")},X)},D=(A,C,B,Z,X)=>{if(B&&p(A,B),Z)for(let ne=0;ne<Z.length;ne++)p(A,Z[ne]);if(X){let ne=X.subTree;if(C===ne||Df(ne.type)&&(ne.ssContent===C||ne.ssFallback===C)){const b=X.vnode;D(A,b,b.scopeId,b.slotScopeIds,X.parent)}}},G=(A,C,B,Z,X,ne,b,ue,oe=0)=>{for(let ie=oe;ie<A.length;ie++){const ae=A[ie]=ue?oi(A[ie]):_n(A[ie]);_(null,ae,C,B,Z,X,ne,b,ue)}},M=(A,C,B,Z,X,ne,b)=>{const ue=C.el=A.el;let{patchFlag:oe,dynamicChildren:ie,dirs:ae}=C;oe|=A.patchFlag&16;const v=A.props||ct,m=C.props||ct;let P;if(B&&vi(B,!1),(P=m.onVnodeBeforeUpdate)&&dn(P,B,C,A),ae&&xi(C,A,B,"beforeUpdate"),B&&vi(B,!0),(v.innerHTML&&m.innerHTML==null||v.textContent&&m.textContent==null)&&u(ue,""),ie?y(A.dynamicChildren,ie,ue,B,Z,_o(C,X),ne):b||te(A,C,ue,null,B,Z,_o(C,X),ne,!1),oe>0){if(oe&16)I(ue,v,m,B,X);else if(oe&2&&v.class!==m.class&&s(ue,"class",null,m.class,X),oe&4&&s(ue,"style",v.style,m.style,X),oe&8){const W=C.dynamicProps;for(let Q=0;Q<W.length;Q++){const k=W[Q],be=v[k],he=m[k];(he!==be||k==="value")&&s(ue,k,be,he,X,B)}}oe&1&&A.children!==C.children&&u(ue,C.children)}else!b&&ie==null&&I(ue,v,m,B,X);((P=m.onVnodeUpdated)||ae)&&Kt(()=>{P&&dn(P,B,C,A),ae&&xi(C,A,B,"updated")},Z)},y=(A,C,B,Z,X,ne,b)=>{for(let ue=0;ue<C.length;ue++){const oe=A[ue],ie=C[ue],ae=oe.el&&(oe.type===gn||!xr(oe,ie)||oe.shapeFlag&198)?f(oe.el):B;_(oe,ie,ae,null,Z,X,ne,b,!0)}},I=(A,C,B,Z,X)=>{if(C!==B){if(C!==ct)for(const ne in C)!Pr(ne)&&!(ne in B)&&s(A,ne,C[ne],null,X,Z);for(const ne in B){if(Pr(ne))continue;const b=B[ne],ue=C[ne];b!==ue&&ne!=="value"&&s(A,ne,ue,b,X,Z)}"value"in B&&s(A,"value",C.value,B.value,X)}},J=(A,C,B,Z,X,ne,b,ue,oe)=>{const ie=C.el=A?A.el:a(""),ae=C.anchor=A?A.anchor:a("");let{patchFlag:v,dynamicChildren:m,slotScopeIds:P}=C;P&&(ue=ue?ue.concat(P):P),A==null?(i(ie,B,Z),i(ae,B,Z),G(C.children||[],B,ae,X,ne,b,ue,oe)):v>0&&v&64&&m&&A.dynamicChildren&&A.dynamicChildren.length===m.length?(y(A.dynamicChildren,m,B,X,ne,b,ue),(C.key!=null||X&&C===X.subTree)&&Rf(A,C,!0)):te(A,C,B,ae,X,ne,b,ue,oe)},q=(A,C,B,Z,X,ne,b,ue,oe)=>{C.slotScopeIds=ue,A==null?C.shapeFlag&512?X.ctx.activate(C,B,Z,b,oe):re(C,B,Z,X,ne,b,oe):ee(A,C,oe)},re=(A,C,B,Z,X,ne,b)=>{const ue=A.component=xp(A,Z,X);if(hf(A)&&(ue.ctx.renderer=se),Sp(ue,!1,b),ue.asyncDep){if(X&&X.registerDep(ue,j,b),!A.el){const oe=ue.subTree=Hn(di);h(null,oe,C,B),A.placeholder=oe.el}}else j(ue,A,C,B,X,ne,b)},ee=(A,C,B)=>{const Z=C.component=A.component;if(Jd(A,C,B))if(Z.asyncDep&&!Z.asyncResolved){V(Z,C,B);return}else Z.next=C,Z.update();else C.el=A.el,Z.vnode=C},j=(A,C,B,Z,X,ne,b)=>{const ue=()=>{if(A.isMounted){let{next:v,bu:m,u:P,parent:W,vnode:Q}=A;{const Ie=Cf(A);if(Ie){v&&(v.el=Q.el,V(A,v,b)),Ie.asyncDep.then(()=>{A.isUnmounted||ue()});return}}let k=v,be;vi(A,!1),v?(v.el=Q.el,V(A,v,b)):v=Q,m&&ys(m),(be=v.props&&v.props.onVnodeBeforeUpdate)&&dn(be,W,v,Q),vi(A,!0);const he=lc(A),we=A.subTree;A.subTree=he,_(we,he,f(we.el),F(we),A,X,ne),v.el=he.el,k===null&&Qd(A,he.el),P&&Kt(P,X),(be=v.props&&v.props.onVnodeUpdated)&&Kt(()=>dn(be,W,v,Q),X)}else{let v;const{el:m,props:P}=C,{bm:W,m:Q,parent:k,root:be,type:he}=A,we=Ur(C);vi(A,!1),W&&ys(W),!we&&(v=P&&P.onVnodeBeforeMount)&&dn(v,k,C),vi(A,!0);{be.ce&&be.ce._def.shadowRoot!==!1&&be.ce._injectChildStyle(he);const Ie=A.subTree=lc(A);_(null,Ie,B,Z,A,X,ne),C.el=Ie.el}if(Q&&Kt(Q,X),!we&&(v=P&&P.onVnodeMounted)){const Ie=C;Kt(()=>dn(v,k,Ie),X)}(C.shapeFlag&256||k&&Ur(k.vnode)&&k.vnode.shapeFlag&256)&&A.a&&Kt(A.a,X),A.isMounted=!0,C=B=Z=null}};A.scope.on();const oe=A.effect=new Hu(ue);A.scope.off();const ie=A.update=oe.run.bind(oe),ae=A.job=oe.runIfDirty.bind(oe);ae.i=A,ae.id=A.uid,oe.scheduler=()=>bl(ae),vi(A,!0),ie()},V=(A,C,B)=>{C.component=A;const Z=A.vnode.props;A.vnode=C,A.next=null,tp(A,C.props,Z,B),sp(A,C.children,B),Xn(),nc(A),qn()},te=(A,C,B,Z,X,ne,b,ue,oe=!1)=>{const ie=A&&A.children,ae=A?A.shapeFlag:0,v=C.children,{patchFlag:m,shapeFlag:P}=C;if(m>0){if(m&128){me(ie,v,B,Z,X,ne,b,ue,oe);return}else if(m&256){ge(ie,v,B,Z,X,ne,b,ue,oe);return}}P&8?(ae&16&&N(ie,X,ne),v!==ie&&u(B,v)):ae&16?P&16?me(ie,v,B,Z,X,ne,b,ue,oe):N(ie,X,ne,!0):(ae&8&&u(B,""),P&16&&G(v,B,Z,X,ne,b,ue,oe))},ge=(A,C,B,Z,X,ne,b,ue,oe)=>{A=A||er,C=C||er;const ie=A.length,ae=C.length,v=Math.min(ie,ae);let m;for(m=0;m<v;m++){const P=C[m]=oe?oi(C[m]):_n(C[m]);_(A[m],P,B,null,X,ne,b,ue,oe)}ie>ae?N(A,X,ne,!0,!1,v):G(C,B,Z,X,ne,b,ue,oe,v)},me=(A,C,B,Z,X,ne,b,ue,oe)=>{let ie=0;const ae=C.length;let v=A.length-1,m=ae-1;for(;ie<=v&&ie<=m;){const P=A[ie],W=C[ie]=oe?oi(C[ie]):_n(C[ie]);if(xr(P,W))_(P,W,B,null,X,ne,b,ue,oe);else break;ie++}for(;ie<=v&&ie<=m;){const P=A[v],W=C[m]=oe?oi(C[m]):_n(C[m]);if(xr(P,W))_(P,W,B,null,X,ne,b,ue,oe);else break;v--,m--}if(ie>v){if(ie<=m){const P=m+1,W=P<ae?C[P].el:Z;for(;ie<=m;)_(null,C[ie]=oe?oi(C[ie]):_n(C[ie]),B,W,X,ne,b,ue,oe),ie++}}else if(ie>m)for(;ie<=v;)Oe(A[ie],X,ne,!0),ie++;else{const P=ie,W=ie,Q=new Map;for(ie=W;ie<=m;ie++){const Me=C[ie]=oe?oi(C[ie]):_n(C[ie]);Me.key!=null&&Q.set(Me.key,ie)}let k,be=0;const he=m-W+1;let we=!1,Ie=0;const fe=new Array(he);for(ie=0;ie<he;ie++)fe[ie]=0;for(ie=P;ie<=v;ie++){const Me=A[ie];if(be>=he){Oe(Me,X,ne,!0);continue}let Re;if(Me.key!=null)Re=Q.get(Me.key);else for(k=W;k<=m;k++)if(fe[k-W]===0&&xr(Me,C[k])){Re=k;break}Re===void 0?Oe(Me,X,ne,!0):(fe[Re-W]=ie+1,Re>=Ie?Ie=Re:we=!0,_(Me,C[Re],B,null,X,ne,b,ue,oe),be++)}const xe=we?cp(fe):er;for(k=xe.length-1,ie=he-1;ie>=0;ie--){const Me=W+ie,Re=C[Me],_e=C[Me+1],Ge=Me+1<ae?_e.el||Pf(_e):Z;fe[ie]===0?_(null,Re,B,Ge,X,ne,b,ue,oe):we&&(k<0||ie!==xe[k]?ve(Re,B,Ge,2):k--)}}},ve=(A,C,B,Z,X=null)=>{const{el:ne,type:b,transition:ue,children:oe,shapeFlag:ie}=A;if(ie&6){ve(A.component.subTree,C,B,Z);return}if(ie&128){A.suspense.move(C,B,Z);return}if(ie&64){b.move(A,C,B,se);return}if(b===gn){i(ne,C,B);for(let v=0;v<oe.length;v++)ve(oe[v],C,B,Z);i(A.anchor,C,B);return}if(b===xo){w(A,C,B);return}if(Z!==2&&ie&1&&ue)if(Z===0)ue.beforeEnter(ne),i(ne,C,B),Kt(()=>ue.enter(ne),X);else{const{leave:v,delayLeave:m,afterLeave:P}=ue,W=()=>{A.ctx.isUnmounted?r(ne):i(ne,C,B)},Q=()=>{ne._isLeaving&&ne[wd](!0),v(ne,()=>{W(),P&&P()})};m?m(ne,W,Q):Q()}else i(ne,C,B)},Oe=(A,C,B,Z=!1,X=!1)=>{const{type:ne,props:b,ref:ue,children:oe,dynamicChildren:ie,shapeFlag:ae,patchFlag:v,dirs:m,cacheIndex:P}=A;if(v===-2&&(X=!1),ue!=null&&(Xn(),Ir(ue,null,B,A,!0),qn()),P!=null&&(C.renderCache[P]=void 0),ae&256){C.ctx.deactivate(A);return}const W=ae&1&&m,Q=!Ur(A);let k;if(Q&&(k=b&&b.onVnodeBeforeUnmount)&&dn(k,C,A),ae&6)ot(A.component,B,Z);else{if(ae&128){A.suspense.unmount(B,Z);return}W&&xi(A,null,C,"beforeUnmount"),ae&64?A.type.remove(A,C,B,se,Z):ie&&!ie.hasOnce&&(ne!==gn||v>0&&v&64)?N(ie,C,B,!1,!0):(ne===gn&&v&384||!X&&ae&16)&&N(oe,C,B),Z&&He(A)}(Q&&(k=b&&b.onVnodeUnmounted)||W)&&Kt(()=>{k&&dn(k,C,A),W&&xi(A,null,C,"unmounted")},B)},He=A=>{const{type:C,el:B,anchor:Z,transition:X}=A;if(C===gn){ut(B,Z);return}if(C===xo){T(A);return}const ne=()=>{r(B),X&&!X.persisted&&X.afterLeave&&X.afterLeave()};if(A.shapeFlag&1&&X&&!X.persisted){const{leave:b,delayLeave:ue}=X,oe=()=>b(B,ne);ue?ue(A.el,ne,oe):oe()}else ne()},ut=(A,C)=>{let B;for(;A!==C;)B=d(A),r(A),A=B;r(C)},ot=(A,C,B)=>{const{bum:Z,scope:X,job:ne,subTree:b,um:ue,m:oe,a:ie}=A;fc(oe),fc(ie),Z&&ys(Z),X.stop(),ne&&(ne.flags|=8,Oe(b,A,C,B)),ue&&Kt(ue,C),Kt(()=>{A.isUnmounted=!0},C)},N=(A,C,B,Z=!1,X=!1,ne=0)=>{for(let b=ne;b<A.length;b++)Oe(A[b],C,B,Z,X)},F=A=>{if(A.shapeFlag&6)return F(A.component.subTree);if(A.shapeFlag&128)return A.suspense.next();const C=d(A.anchor||A.el),B=C&&C[Td];return B?d(B):C};let $=!1;const ce=(A,C,B)=>{let Z;A==null?C._vnode&&(Oe(C._vnode,null,null,!0),Z=C._vnode.component):_(C._vnode||null,A,C,null,null,null,B),C._vnode=A,$||($=!0,nc(Z),sf(),$=!1)},se={p:_,um:Oe,m:ve,r:He,mt:re,mc:G,pc:te,pbc:y,n:F,o:n};return{render:ce,hydrate:void 0,createApp:qd(ce)}}function _o({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function vi({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function lp(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Rf(n,e,t=!1){const i=n.children,r=e.children;if(We(i)&&We(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=oi(r[s]),a.el=o.el),!t&&a.patchFlag!==-2&&Rf(o,a)),a.type===eo&&(a.patchFlag!==-1?a.el=o.el:a.__elIndex=s+(n.type===gn?1:0)),a.type===di&&!a.el&&(a.el=o.el)}}function cp(n){const e=n.slice(),t=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<c?s=a+1:o=a;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}function Cf(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Cf(e)}function fc(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function Pf(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?Pf(e.subTree):null}const Df=n=>n.__isSuspense;function up(n,e){e&&e.pendingBranch?We(n)?e.effects.push(...n):e.effects.push(n):xd(n)}const gn=Symbol.for("v-fgt"),eo=Symbol.for("v-txt"),di=Symbol.for("v-cmt"),xo=Symbol.for("v-stc"),Fr=[];let Zt=null;function Vs(n=!1){Fr.push(Zt=n?null:[])}function fp(){Fr.pop(),Zt=Fr[Fr.length-1]||null}let Hr=1;function hc(n,e=!1){Hr+=n,n<0&&Zt&&e&&(Zt.hasOnce=!0)}function Lf(n){return n.dynamicChildren=Hr>0?Zt||er:null,fp(),Hr>0&&Zt&&Zt.push(n),n}function If(n,e,t,i,r,s){return Lf(et(n,e,t,i,r,s,!0))}function Uf(n,e,t,i,r){return Lf(Hn(n,e,t,i,r,!0))}function Nf(n){return n?n.__v_isVNode===!0:!1}function xr(n,e){return n.type===e.type&&n.key===e.key}const Ff=({key:n})=>n??null,Ts=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?St(n)||Pt(n)||ke(n)?{i:rn,r:n,k:e,f:!!t}:n:null);function et(n,e=null,t=null,i=0,r=null,s=n===gn?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Ff(e),ref:e&&Ts(e),scopeId:af,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:rn};return a?(Cl(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=St(t)?8:16),Hr>0&&!o&&Zt&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Zt.push(l),l}const Hn=hp;function hp(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===Bd)&&(n=di),Nf(n)){const a=ar(n,e,!0);return t&&Cl(a,t),Hr>0&&!s&&Zt&&(a.shapeFlag&6?Zt[Zt.indexOf(n)]=a:Zt.push(a)),a.patchFlag=-2,a}if(bp(n)&&(n=n.__vccOpts),e){e=dp(e);let{class:a,style:l}=e;a&&!St(a)&&(e.class=js(a)),mt(l)&&(yl(l)&&!We(l)&&(l=Dt({},l)),e.style=Ks(l))}const o=St(n)?1:Df(n)?128:Ad(n)?64:mt(n)?4:ke(n)?2:0;return et(n,e,t,i,r,o,s,!0)}function dp(n){return n?yl(n)||Ef(n)?Dt({},n):n:null}function ar(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=n,c=e?mp(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Ff(c),ref:e&&e.ref?t&&s?We(s)?s.concat(Ts(e)):[s,Ts(e)]:Ts(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==gn?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&ar(n.ssContent),ssFallback:n.ssFallback&&ar(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&Tl(u,l.clone(u)),u}function As(n=" ",e=0){return Hn(eo,null,n,e)}function pp(n="",e=!1){return e?(Vs(),Uf(di,null,n)):Hn(di,null,n)}function _n(n){return n==null||typeof n=="boolean"?Hn(di):We(n)?Hn(gn,null,n.slice()):Nf(n)?oi(n):Hn(eo,null,String(n))}function oi(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:ar(n)}function Cl(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(We(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Cl(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!Ef(e)?e._ctx=rn:r===3&&rn&&(rn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else ke(e)?(e={default:e,_ctx:rn},t=32):(e=String(e),i&64?(t=16,e=[As(e)]):t=8);n.children=e,n.shapeFlag|=t}function mp(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=js([e.class,i.class]));else if(r==="style")e.style=Ks([e.style,i.style]);else if(Xs(r)){const s=e[r],o=i[r];o&&s!==o&&!(We(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function dn(n,e,t,i=null){Tn(n,e,7,[t,i])}const gp=xf();let _p=0;function xp(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||gp,s={uid:_p++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new zh(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:bf(i,r),emitsOptions:vf(i,r),emit:null,emitted:null,propsDefaults:ct,inheritAttrs:i.inheritAttrs,ctx:ct,data:ct,props:ct,attrs:ct,slots:ct,refs:ct,setupState:ct,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=$d.bind(null,s),n.ce&&n.ce(s),s}let Ft=null;const vp=()=>Ft||rn;let Hs,da;{const n=$s(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};Hs=e("__VUE_INSTANCE_SETTERS__",t=>Ft=t),da=e("__VUE_SSR_SETTERS__",t=>Gr=t)}const $r=n=>{const e=Ft;return Hs(n),n.scope.on(),()=>{n.scope.off(),Hs(e)}},dc=()=>{Ft&&Ft.scope.off(),Hs(null)};function Of(n){return n.vnode.shapeFlag&4}let Gr=!1;function Sp(n,e=!1,t=!1){e&&da(e);const{props:i,children:r}=n.vnode,s=Of(n);ep(n,i,s,e),rp(n,r,t||e);const o=s?Mp(n,e):void 0;return e&&da(!1),o}function Mp(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,zd);const{setup:i}=t;if(i){Xn();const r=n.setupContext=i.length>1?yp(n):null,s=$r(n),o=Yr(i,n,0,[n.props,r]),a=Iu(o);if(qn(),s(),(a||n.sp)&&!Ur(n)&&ff(n),a){if(o.then(dc,dc),e)return o.then(l=>{pc(n,l)}).catch(l=>{Zs(l,n,0)});n.asyncDep=o}else pc(n,o)}else Bf(n)}function pc(n,e,t){ke(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:mt(e)&&(n.setupState=tf(e)),Bf(n)}function Bf(n,e,t){const i=n.type;n.render||(n.render=i.render||Mn);{const r=$r(n);Xn();try{Vd(n)}finally{qn(),r()}}}const Ep={get(n,e){return Rt(n,"get",""),n[e]}};function yp(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,Ep),slots:n.slots,emit:n.emit,expose:e}}function to(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(tf(od(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Nr)return Nr[t](n)},has(e,t){return t in e||t in Nr}})):n.proxy}function bp(n){return ke(n)&&"__vccOpts"in n}const Tp=(n,e)=>hd(n,e,Gr),Ap="3.5.26";let pa;const mc=typeof window<"u"&&window.trustedTypes;if(mc)try{pa=mc.createPolicy("vue",{createHTML:n=>n})}catch{}const zf=pa?n=>pa.createHTML(n):n=>n,wp="http://www.w3.org/2000/svg",Rp="http://www.w3.org/1998/Math/MathML",Fn=typeof document<"u"?document:null,gc=Fn&&Fn.createElement("template"),Cp={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?Fn.createElementNS(wp,n):e==="mathml"?Fn.createElementNS(Rp,n):t?Fn.createElement(n,{is:t}):Fn.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>Fn.createTextNode(n),createComment:n=>Fn.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Fn.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{gc.innerHTML=zf(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=gc.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Pp=Symbol("_vtc");function Dp(n,e,t){const i=n[Pp];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const _c=Symbol("_vod"),Lp=Symbol("_vsh"),Ip=Symbol(""),Up=/(?:^|;)\s*display\s*:/;function Np(n,e,t){const i=n.style,r=St(t);let s=!1;if(t&&!r){if(e)if(St(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&ws(i,a,"")}else for(const o in e)t[o]==null&&ws(i,o,"");for(const o in t)o==="display"&&(s=!0),ws(i,o,t[o])}else if(r){if(e!==t){const o=i[Ip];o&&(t+=";"+o),i.cssText=t,s=Up.test(t)}}else e&&n.removeAttribute("style");_c in n&&(n[_c]=s?i.display:"",n[Lp]&&(i.display="none"))}const xc=/\s*!important$/;function ws(n,e,t){if(We(t))t.forEach(i=>ws(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=Fp(n,e);xc.test(t)?n.setProperty(Ui(i),t.replace(xc,""),"important"):n[i]=t}}const vc=["Webkit","Moz","ms"],vo={};function Fp(n,e){const t=vo[e];if(t)return t;let i=fi(e);if(i!=="filter"&&i in n)return vo[e]=i;i=Fu(i);for(let r=0;r<vc.length;r++){const s=vc[r]+i;if(s in n)return vo[e]=s}return e}const Sc="http://www.w3.org/1999/xlink";function Mc(n,e,t,i,r,s=Bh(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Sc,e.slice(6,e.length)):n.setAttributeNS(Sc,e,t):t==null||s&&!Bu(t)?n.removeAttribute(e):n.setAttribute(e,s?"":mi(t)?String(t):t)}function Ec(n,e,t,i,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?zf(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=Bu(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(r||e)}function Ji(n,e,t,i){n.addEventListener(e,t,i)}function Op(n,e,t,i){n.removeEventListener(e,t,i)}const yc=Symbol("_vei");function Bp(n,e,t,i,r=null){const s=n[yc]||(n[yc]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=zp(e);if(i){const c=s[e]=Gp(i,r);Ji(n,a,c,l)}else o&&(Op(n,a,o,l),s[e]=void 0)}}const bc=/(?:Once|Passive|Capture)$/;function zp(n){let e;if(bc.test(n)){e={};let i;for(;i=n.match(bc);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Ui(n.slice(2)),e]}let So=0;const Vp=Promise.resolve(),Hp=()=>So||(Vp.then(()=>So=0),So=Date.now());function Gp(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;Tn(kp(i,t.value),e,5,[i])};return t.value=n,t.attached=Hp(),t}function kp(n,e){if(We(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Tc=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Wp=(n,e,t,i,r,s)=>{const o=r==="svg";e==="class"?Dp(n,i,o):e==="style"?Np(n,t,i):Xs(e)?fl(e)||Bp(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Xp(n,e,i,o))?(Ec(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Mc(n,e,i,o,s,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!St(i))?Ec(n,fi(e),i,s,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Mc(n,e,i,o))};function Xp(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&Tc(e)&&ke(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Tc(e)&&St(t)?!1:e in n}const Ac=n=>{const e=n.props["onUpdate:modelValue"]||!1;return We(e)?t=>ys(e,t):e};function qp(n){n.target.composing=!0}function wc(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Mo=Symbol("_assign");function Rc(n,e,t){return e&&(n=n.trim()),t&&(n=pl(n)),n}const Yp={created(n,{modifiers:{lazy:e,trim:t,number:i}},r){n[Mo]=Ac(r);const s=i||r.props&&r.props.type==="number";Ji(n,e?"change":"input",o=>{o.target.composing||n[Mo](Rc(n.value,t,s))}),(t||s)&&Ji(n,"change",()=>{n.value=Rc(n.value,t,s)}),e||(Ji(n,"compositionstart",qp),Ji(n,"compositionend",wc),Ji(n,"change",wc))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:r,number:s}},o){if(n[Mo]=Ac(o),n.composing)return;const a=(s||n.type==="number")&&!/^0\d/.test(n.value)?pl(n.value):n.value,l=e??"";a!==l&&(document.activeElement===n&&n.type!=="range"&&(i&&e===t||r&&n.value.trim()===l)||(n.value=l))}},$p=Dt({patchProp:Wp},Cp);let Cc;function Kp(){return Cc||(Cc=op($p))}const jp=((...n)=>{const e=Kp().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=Jp(i);if(!r)return;const s=e._component;!ke(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=t(r,!1,Zp(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e});function Zp(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Jp(n){return St(n)?document.querySelector(n):n}const Qp={class:"timer-header"},em={class:"timer-display"},tm={class:"timer-controls"},nm=uf({__name:"Timer",props:{initialX:{},initialY:{}},emits:["close"],setup(n){const e=n,t=ai(e.initialX??window.innerWidth-240),i=ai(e.initialY??80),r=ai(!1),s=ai(0),o=ai(0);let a;function l(){if(!r.value)return;const E=performance.now();o.value=E-s.value,a=requestAnimationFrame(l)}function c(){r.value?(r.value=!1,cancelAnimationFrame(a)):(r.value=!0,s.value=performance.now()-o.value,l())}function u(){r.value=!1,cancelAnimationFrame(a),o.value=0}function f(E){const w=Math.floor(E/1e3),T=Math.floor(w/60),R=w%60,L=Math.floor(E%1e3/10);return`${T.toString().padStart(2,"0")}:${R.toString().padStart(2,"0")}.${L.toString().padStart(2,"0")}`}let d=!1,p=0,x=0;function _(E){E.target.tagName!=="BUTTON"&&(d=!0,p=E.clientX-t.value,x=E.clientY-i.value,E.currentTarget.setPointerCapture(E.pointerId),window.addEventListener("pointermove",g),window.addEventListener("pointerup",h))}function g(E){d&&(t.value=E.clientX-p,i.value=E.clientY-x)}function h(){d=!1,window.removeEventListener("pointermove",g),window.removeEventListener("pointerup",h)}return Al(()=>{cancelAnimationFrame(a),window.removeEventListener("pointermove",g),window.removeEventListener("pointerup",h)}),(E,w)=>(Vs(),If("div",{class:"timer-window",style:Ks({left:t.value+"px",top:i.value+"px"}),onPointerdown:_},[et("div",Qp,[w[1]||(w[1]=et("span",null,"TIMER",-1)),et("button",{class:"close-btn",onClick:w[0]||(w[0]=T=>E.$emit("close"))},"×")]),et("div",em,Us(f(o.value)),1),et("div",tm,[et("button",{onClick:c},Us(r.value?"PAUSE":"START"),1),et("button",{onClick:u},"RESET")])],36))}}),im=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},rm=im(nm,[["__scopeId","data-v-02bb8579"]]);const Pl="182",sm=0,Pc=1,om=2,Rs=1,am=2,Rr=3,pi=0,Wt=1,zn=2,Gn=0,sr=1,Dc=2,Lc=3,Ic=4,lm=5,Ri=100,cm=101,um=102,fm=103,hm=104,dm=200,pm=201,mm=202,gm=203,ma=204,ga=205,_m=206,xm=207,vm=208,Sm=209,Mm=210,Em=211,ym=212,bm=213,Tm=214,_a=0,xa=1,va=2,lr=3,Sa=4,Ma=5,Ea=6,ya=7,Vf=0,Am=1,wm=2,En=0,Hf=1,Gf=2,kf=3,Wf=4,Xf=5,qf=6,Yf=7,$f=300,Ii=301,cr=302,ba=303,Ta=304,no=306,Aa=1e3,Vn=1001,wa=1002,bt=1003,Rm=1004,is=1005,Ct=1006,Eo=1007,Pi=1008,jt=1009,Kf=1010,jf=1011,kr=1012,Dl=1013,An=1014,vn=1015,$n=1016,Ll=1017,Il=1018,Wr=1020,Zf=35902,Jf=35899,Qf=1021,eh=1022,cn=1023,Kn=1026,Di=1027,th=1028,Ul=1029,ur=1030,Nl=1031,Fl=1033,Cs=33776,Ps=33777,Ds=33778,Ls=33779,Ra=35840,Ca=35841,Pa=35842,Da=35843,La=36196,Ia=37492,Ua=37496,Na=37488,Fa=37489,Oa=37490,Ba=37491,za=37808,Va=37809,Ha=37810,Ga=37811,ka=37812,Wa=37813,Xa=37814,qa=37815,Ya=37816,$a=37817,Ka=37818,ja=37819,Za=37820,Ja=37821,Qa=36492,el=36494,tl=36495,nl=36283,il=36284,rl=36285,sl=36286,Cm=3200,nh=0,Pm=1,li="",tn="srgb",fr="srgb-linear",Gs="linear",st="srgb",Oi=7680,Uc=519,Dm=512,Lm=513,Im=514,Ol=515,Um=516,Nm=517,Bl=518,Fm=519,Nc=35044,Fc="300 es",Sn=2e3,ks=2001;function ih(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ws(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Om(){const n=Ws("canvas");return n.style.display="block",n}const Oc={};function Bc(...n){const e="THREE."+n.shift();console.log(e,...n)}function Ve(...n){const e="THREE."+n.shift();console.warn(e,...n)}function Ke(...n){const e="THREE."+n.shift();console.error(e,...n)}function Xr(...n){const e=n.join(" ");e in Oc||(Oc[e]=!0,Ve(...n))}function Bm(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}class dr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const At=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],yo=Math.PI/180,ol=180/Math.PI;function Kr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(At[n&255]+At[n>>8&255]+At[n>>16&255]+At[n>>24&255]+"-"+At[e&255]+At[e>>8&255]+"-"+At[e>>16&15|64]+At[e>>24&255]+"-"+At[t&63|128]+At[t>>8&255]+"-"+At[t>>16&255]+At[t>>24&255]+At[i&255]+At[i>>8&255]+At[i>>16&255]+At[i>>24&255]).toLowerCase()}function $e(n,e,t){return Math.max(e,Math.min(t,n))}function zm(n,e){return(n%e+e)%e}function bo(n,e,t){return(1-t)*n+t*e}function vr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Vt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Je{constructor(e=0,t=0){Je.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos($e(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Gt{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3],d=s[o+0],p=s[o+1],x=s[o+2],_=s[o+3];if(a<=0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a>=1){e[t+0]=d,e[t+1]=p,e[t+2]=x,e[t+3]=_;return}if(f!==_||l!==d||c!==p||u!==x){let g=l*d+c*p+u*x+f*_;g<0&&(d=-d,p=-p,x=-x,_=-_,g=-g);let h=1-a;if(g<.9995){const E=Math.acos(g),w=Math.sin(E);h=Math.sin(h*E)/w,a=Math.sin(a*E)/w,l=l*h+d*a,c=c*h+p*a,u=u*h+x*a,f=f*h+_*a}else{l=l*h+d*a,c=c*h+p*a,u=u*h+x*a,f=f*h+_*a;const E=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=E,c*=E,u*=E,f*=E}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],d=s[o+1],p=s[o+2],x=s[o+3];return e[t]=a*x+u*f+l*p-c*d,e[t+1]=l*x+u*d+c*f-a*p,e[t+2]=c*x+u*p+a*d-l*f,e[t+3]=u*x-a*f-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),d=l(i/2),p=l(r/2),x=l(s/2);switch(o){case"XYZ":this._x=d*u*f+c*p*x,this._y=c*p*f-d*u*x,this._z=c*u*x+d*p*f,this._w=c*u*f-d*p*x;break;case"YXZ":this._x=d*u*f+c*p*x,this._y=c*p*f-d*u*x,this._z=c*u*x-d*p*f,this._w=c*u*f+d*p*x;break;case"ZXY":this._x=d*u*f-c*p*x,this._y=c*p*f+d*u*x,this._z=c*u*x+d*p*f,this._w=c*u*f-d*p*x;break;case"ZYX":this._x=d*u*f-c*p*x,this._y=c*p*f+d*u*x,this._z=c*u*x-d*p*f,this._w=c*u*f+d*p*x;break;case"YZX":this._x=d*u*f+c*p*x,this._y=c*p*f+d*u*x,this._z=c*u*x-d*p*f,this._w=c*u*f-d*p*x;break;case"XZY":this._x=d*u*f-c*p*x,this._y=c*p*f-d*u*x,this._z=c*u*x+d*p*f,this._w=c*u*f+d*p*x;break;default:Ve("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],d=i+a+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($e(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let i=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let l=1-t;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,t=0,i=0){z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(zc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(zc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),f=2*(s*i-o*t);return this.x=t+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return To.copy(this).projectOnVector(e),this.sub(To)}reflect(e){return this.sub(To.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos($e(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const To=new z,zc=new Gt;class Xe{constructor(e,t,i,r,s,o,a,l,c){Xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],p=i[5],x=i[8],_=r[0],g=r[3],h=r[6],E=r[1],w=r[4],T=r[7],R=r[2],L=r[5],D=r[8];return s[0]=o*_+a*E+l*R,s[3]=o*g+a*w+l*L,s[6]=o*h+a*T+l*D,s[1]=c*_+u*E+f*R,s[4]=c*g+u*w+f*L,s[7]=c*h+u*T+f*D,s[2]=d*_+p*E+x*R,s[5]=d*g+p*w+x*L,s[8]=d*h+p*T+x*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,d=a*l-u*s,p=c*s-o*l,x=t*f+i*d+r*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/x;return e[0]=f*_,e[1]=(r*c-u*i)*_,e[2]=(a*i-r*o)*_,e[3]=d*_,e[4]=(u*t-r*l)*_,e[5]=(r*s-a*t)*_,e[6]=p*_,e[7]=(i*l-c*t)*_,e[8]=(o*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ao.makeScale(e,t)),this}rotate(e){return this.premultiply(Ao.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ao.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ao=new Xe,Vc=new Xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Hc=new Xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Vm(){const n={enabled:!0,workingColorSpace:fr,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===st&&(r.r=kn(r.r),r.g=kn(r.g),r.b=kn(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===st&&(r.r=or(r.r),r.g=or(r.g),r.b=or(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===li?Gs:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Xr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Xr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[fr]:{primaries:e,whitePoint:i,transfer:Gs,toXYZ:Vc,fromXYZ:Hc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:tn},outputColorSpaceConfig:{drawingBufferColorSpace:tn}},[tn]:{primaries:e,whitePoint:i,transfer:st,toXYZ:Vc,fromXYZ:Hc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:tn}}}),n}const je=Vm();function kn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function or(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Bi;class Hm{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Bi===void 0&&(Bi=Ws("canvas")),Bi.width=e.width,Bi.height=e.height;const r=Bi.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Bi}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ws("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=kn(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(kn(t[i]/255)*255):t[i]=kn(t[i]);return{data:t,width:e.width,height:e.height}}else return Ve("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Gm=0;class zl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Gm++}),this.uuid=Kr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(wo(r[o].image)):s.push(wo(r[o]))}else s=wo(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function wo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Hm.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ve("Texture: Unable to serialize Texture."),{})}let km=0;const Ro=new z;class Ot extends dr{constructor(e=Ot.DEFAULT_IMAGE,t=Ot.DEFAULT_MAPPING,i=Vn,r=Vn,s=Ct,o=Pi,a=cn,l=jt,c=Ot.DEFAULT_ANISOTROPY,u=li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:km++}),this.uuid=Kr(),this.name="",this.source=new zl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Je(0,0),this.repeat=new Je(1,1),this.center=new Je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ro).x}get height(){return this.source.getSize(Ro).y}get depth(){return this.source.getSize(Ro).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Ve(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ve(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==$f)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Aa:e.x=e.x-Math.floor(e.x);break;case Vn:e.x=e.x<0?0:1;break;case wa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Aa:e.y=e.y-Math.floor(e.y);break;case Vn:e.y=e.y<0?0:1;break;case wa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ot.DEFAULT_IMAGE=null;Ot.DEFAULT_MAPPING=$f;Ot.DEFAULT_ANISOTROPY=1;class xt{constructor(e=0,t=0,i=0,r=1){xt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],p=l[5],x=l[9],_=l[2],g=l[6],h=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-_)<.01&&Math.abs(x-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+_)<.1&&Math.abs(x+g)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(c+1)/2,T=(p+1)/2,R=(h+1)/2,L=(u+d)/4,D=(f+_)/4,G=(x+g)/4;return w>T&&w>R?w<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(w),r=L/i,s=D/i):T>R?T<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(T),i=L/r,s=G/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=D/s,r=G/s),this.set(i,r,s,t),this}let E=Math.sqrt((g-x)*(g-x)+(f-_)*(f-_)+(d-u)*(d-u));return Math.abs(E)<.001&&(E=1),this.x=(g-x)/E,this.y=(f-_)/E,this.z=(d-u)/E,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this.w=$e(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this.w=$e(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Wm extends dr{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ct,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new xt(0,0,e,t),this.scissorTest=!1,this.viewport=new xt(0,0,e,t);const r={width:e,height:t,depth:i.depth},s=new Ot(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Ct,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new zl(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class yn extends Wm{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class rh extends Ot{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=bt,this.minFilter=bt,this.wrapR=Vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Xm extends Ot{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=bt,this.minFilter=bt,this.wrapR=Vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class jr{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(sn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(sn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=sn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,sn):sn.fromBufferAttribute(s,o),sn.applyMatrix4(e.matrixWorld),this.expandByPoint(sn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),rs.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),rs.copy(i.boundingBox)),rs.applyMatrix4(e.matrixWorld),this.union(rs)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,sn),sn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Sr),ss.subVectors(this.max,Sr),zi.subVectors(e.a,Sr),Vi.subVectors(e.b,Sr),Hi.subVectors(e.c,Sr),Jn.subVectors(Vi,zi),Qn.subVectors(Hi,Vi),Si.subVectors(zi,Hi);let t=[0,-Jn.z,Jn.y,0,-Qn.z,Qn.y,0,-Si.z,Si.y,Jn.z,0,-Jn.x,Qn.z,0,-Qn.x,Si.z,0,-Si.x,-Jn.y,Jn.x,0,-Qn.y,Qn.x,0,-Si.y,Si.x,0];return!Co(t,zi,Vi,Hi,ss)||(t=[1,0,0,0,1,0,0,0,1],!Co(t,zi,Vi,Hi,ss))?!1:(os.crossVectors(Jn,Qn),t=[os.x,os.y,os.z],Co(t,zi,Vi,Hi,ss))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,sn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(sn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Dn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Dn=[new z,new z,new z,new z,new z,new z,new z,new z],sn=new z,rs=new jr,zi=new z,Vi=new z,Hi=new z,Jn=new z,Qn=new z,Si=new z,Sr=new z,ss=new z,os=new z,Mi=new z;function Co(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Mi.fromArray(n,s);const a=r.x*Math.abs(Mi.x)+r.y*Math.abs(Mi.y)+r.z*Math.abs(Mi.z),l=e.dot(Mi),c=t.dot(Mi),u=i.dot(Mi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const qm=new jr,Mr=new z,Po=new z;class Vl{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):qm.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Mr.subVectors(e,this.center);const t=Mr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Mr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Po.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Mr.copy(e.center).add(Po)),this.expandByPoint(Mr.copy(e.center).sub(Po))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Ln=new z,Do=new z,as=new z,ei=new z,Lo=new z,ls=new z,Io=new z;class sh{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ln)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ln.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ln.copy(this.origin).addScaledVector(this.direction,t),Ln.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Do.copy(e).add(t).multiplyScalar(.5),as.copy(t).sub(e).normalize(),ei.copy(this.origin).sub(Do);const s=e.distanceTo(t)*.5,o=-this.direction.dot(as),a=ei.dot(this.direction),l=-ei.dot(as),c=ei.lengthSq(),u=Math.abs(1-o*o);let f,d,p,x;if(u>0)if(f=o*l-a,d=o*a-l,x=s*u,f>=0)if(d>=-x)if(d<=x){const _=1/u;f*=_,d*=_,p=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d<=-x?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+c):d<=x?(f=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+c);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Do).addScaledVector(as,d),p}intersectSphere(e,t){Ln.subVectors(e.center,this.origin);const i=Ln.dot(this.direction),r=Ln.dot(Ln)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Ln)!==null}intersectTriangle(e,t,i,r,s){Lo.subVectors(t,e),ls.subVectors(i,e),Io.crossVectors(Lo,ls);let o=this.direction.dot(Io),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ei.subVectors(this.origin,e);const l=a*this.direction.dot(ls.crossVectors(ei,ls));if(l<0)return null;const c=a*this.direction.dot(Lo.cross(ei));if(c<0||l+c>o)return null;const u=-a*ei.dot(Io);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pt{constructor(e,t,i,r,s,o,a,l,c,u,f,d,p,x,_,g){pt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,f,d,p,x,_,g)}set(e,t,i,r,s,o,a,l,c,u,f,d,p,x,_,g){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=f,h[14]=d,h[3]=p,h[7]=x,h[11]=_,h[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,r=1/Gi.setFromMatrixColumn(e,0).length(),s=1/Gi.setFromMatrixColumn(e,1).length(),o=1/Gi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*u,p=o*f,x=a*u,_=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=p+x*c,t[5]=d-_*c,t[9]=-a*l,t[2]=_-d*c,t[6]=x+p*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,p=l*f,x=c*u,_=c*f;t[0]=d+_*a,t[4]=x*a-p,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=p*a-x,t[6]=_+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,p=l*f,x=c*u,_=c*f;t[0]=d-_*a,t[4]=-o*f,t[8]=x+p*a,t[1]=p+x*a,t[5]=o*u,t[9]=_-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,p=o*f,x=a*u,_=a*f;t[0]=l*u,t[4]=x*c-p,t[8]=d*c+_,t[1]=l*f,t[5]=_*c+d,t[9]=p*c-x,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*c,x=a*l,_=a*c;t[0]=l*u,t[4]=_-d*f,t[8]=x*f+p,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*f+x,t[10]=d-_*f}else if(e.order==="XZY"){const d=o*l,p=o*c,x=a*l,_=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=d*f+_,t[5]=o*u,t[9]=p*f-x,t[2]=x*f-p,t[6]=a*u,t[10]=_*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ym,e,$m)}lookAt(e,t,i){const r=this.elements;return Yt.subVectors(e,t),Yt.lengthSq()===0&&(Yt.z=1),Yt.normalize(),ti.crossVectors(i,Yt),ti.lengthSq()===0&&(Math.abs(i.z)===1?Yt.x+=1e-4:Yt.z+=1e-4,Yt.normalize(),ti.crossVectors(i,Yt)),ti.normalize(),cs.crossVectors(Yt,ti),r[0]=ti.x,r[4]=cs.x,r[8]=Yt.x,r[1]=ti.y,r[5]=cs.y,r[9]=Yt.y,r[2]=ti.z,r[6]=cs.z,r[10]=Yt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],p=i[13],x=i[2],_=i[6],g=i[10],h=i[14],E=i[3],w=i[7],T=i[11],R=i[15],L=r[0],D=r[4],G=r[8],M=r[12],y=r[1],I=r[5],J=r[9],q=r[13],re=r[2],ee=r[6],j=r[10],V=r[14],te=r[3],ge=r[7],me=r[11],ve=r[15];return s[0]=o*L+a*y+l*re+c*te,s[4]=o*D+a*I+l*ee+c*ge,s[8]=o*G+a*J+l*j+c*me,s[12]=o*M+a*q+l*V+c*ve,s[1]=u*L+f*y+d*re+p*te,s[5]=u*D+f*I+d*ee+p*ge,s[9]=u*G+f*J+d*j+p*me,s[13]=u*M+f*q+d*V+p*ve,s[2]=x*L+_*y+g*re+h*te,s[6]=x*D+_*I+g*ee+h*ge,s[10]=x*G+_*J+g*j+h*me,s[14]=x*M+_*q+g*V+h*ve,s[3]=E*L+w*y+T*re+R*te,s[7]=E*D+w*I+T*ee+R*ge,s[11]=E*G+w*J+T*j+R*me,s[15]=E*M+w*q+T*V+R*ve,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],p=e[14],x=e[3],_=e[7],g=e[11],h=e[15],E=l*p-c*d,w=a*p-c*f,T=a*d-l*f,R=o*p-c*u,L=o*d-l*u,D=o*f-a*u;return t*(_*E-g*w+h*T)-i*(x*E-g*R+h*L)+r*(x*w-_*R+h*D)-s*(x*T-_*L+g*D)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],p=e[11],x=e[12],_=e[13],g=e[14],h=e[15],E=f*g*c-_*d*c+_*l*p-a*g*p-f*l*h+a*d*h,w=x*d*c-u*g*c-x*l*p+o*g*p+u*l*h-o*d*h,T=u*_*c-x*f*c+x*a*p-o*_*p-u*a*h+o*f*h,R=x*f*l-u*_*l-x*a*d+o*_*d+u*a*g-o*f*g,L=t*E+i*w+r*T+s*R;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/L;return e[0]=E*D,e[1]=(_*d*s-f*g*s-_*r*p+i*g*p+f*r*h-i*d*h)*D,e[2]=(a*g*s-_*l*s+_*r*c-i*g*c-a*r*h+i*l*h)*D,e[3]=(f*l*s-a*d*s-f*r*c+i*d*c+a*r*p-i*l*p)*D,e[4]=w*D,e[5]=(u*g*s-x*d*s+x*r*p-t*g*p-u*r*h+t*d*h)*D,e[6]=(x*l*s-o*g*s-x*r*c+t*g*c+o*r*h-t*l*h)*D,e[7]=(o*d*s-u*l*s+u*r*c-t*d*c-o*r*p+t*l*p)*D,e[8]=T*D,e[9]=(x*f*s-u*_*s-x*i*p+t*_*p+u*i*h-t*f*h)*D,e[10]=(o*_*s-x*a*s+x*i*c-t*_*c-o*i*h+t*a*h)*D,e[11]=(u*a*s-o*f*s-u*i*c+t*f*c+o*i*p-t*a*p)*D,e[12]=R*D,e[13]=(u*_*r-x*f*r+x*i*d-t*_*d-u*i*g+t*f*g)*D,e[14]=(x*a*r-o*_*r-x*i*l+t*_*l+o*i*g-t*a*g)*D,e[15]=(o*f*r-u*a*r+u*i*l-t*f*l-o*i*d+t*a*d)*D,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,d=s*c,p=s*u,x=s*f,_=o*u,g=o*f,h=a*f,E=l*c,w=l*u,T=l*f,R=i.x,L=i.y,D=i.z;return r[0]=(1-(_+h))*R,r[1]=(p+T)*R,r[2]=(x-w)*R,r[3]=0,r[4]=(p-T)*L,r[5]=(1-(d+h))*L,r[6]=(g+E)*L,r[7]=0,r[8]=(x+w)*D,r[9]=(g-E)*D,r[10]=(1-(d+_))*D,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;if(e.x=r[12],e.y=r[13],e.z=r[14],this.determinant()===0)return i.set(1,1,1),t.identity(),this;let s=Gi.set(r[0],r[1],r[2]).length();const o=Gi.set(r[4],r[5],r[6]).length(),a=Gi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),on.copy(this);const c=1/s,u=1/o,f=1/a;return on.elements[0]*=c,on.elements[1]*=c,on.elements[2]*=c,on.elements[4]*=u,on.elements[5]*=u,on.elements[6]*=u,on.elements[8]*=f,on.elements[9]*=f,on.elements[10]*=f,t.setFromRotationMatrix(on),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Sn,l=!1){const c=this.elements,u=2*s/(t-e),f=2*s/(i-r),d=(t+e)/(t-e),p=(i+r)/(i-r);let x,_;if(l)x=s/(o-s),_=o*s/(o-s);else if(a===Sn)x=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===ks)x=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=f,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Sn,l=!1){const c=this.elements,u=2/(t-e),f=2/(i-r),d=-(t+e)/(t-e),p=-(i+r)/(i-r);let x,_;if(l)x=1/(o-s),_=o/(o-s);else if(a===Sn)x=-2/(o-s),_=-(o+s)/(o-s);else if(a===ks)x=-1/(o-s),_=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=f,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=x,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Gi=new z,on=new pt,Ym=new z(0,0,0),$m=new z(1,1,1),ti=new z,cs=new z,Yt=new z,Gc=new pt,kc=new Gt;class wn{constructor(e=0,t=0,i=0,r=wn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin($e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin($e(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-$e(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin($e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-$e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:Ve("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Gc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Gc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return kc.setFromEuler(this),this.setFromQuaternion(kc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}wn.DEFAULT_ORDER="XYZ";class Hl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Km=0;const Wc=new z,ki=new Gt,In=new pt,us=new z,Er=new z,jm=new z,Zm=new Gt,Xc=new z(1,0,0),qc=new z(0,1,0),Yc=new z(0,0,1),$c={type:"added"},Jm={type:"removed"},Wi={type:"childadded",child:null},Uo={type:"childremoved",child:null};class Tt extends dr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Km++}),this.uuid=Kr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tt.DEFAULT_UP.clone();const e=new z,t=new wn,i=new Gt,r=new z(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new pt},normalMatrix:{value:new Xe}}),this.matrix=new pt,this.matrixWorld=new pt,this.matrixAutoUpdate=Tt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Hl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ki.setFromAxisAngle(e,t),this.quaternion.multiply(ki),this}rotateOnWorldAxis(e,t){return ki.setFromAxisAngle(e,t),this.quaternion.premultiply(ki),this}rotateX(e){return this.rotateOnAxis(Xc,e)}rotateY(e){return this.rotateOnAxis(qc,e)}rotateZ(e){return this.rotateOnAxis(Yc,e)}translateOnAxis(e,t){return Wc.copy(e).applyQuaternion(this.quaternion),this.position.add(Wc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Xc,e)}translateY(e){return this.translateOnAxis(qc,e)}translateZ(e){return this.translateOnAxis(Yc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(In.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?us.copy(e):us.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Er.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?In.lookAt(Er,us,this.up):In.lookAt(us,Er,this.up),this.quaternion.setFromRotationMatrix(In),r&&(In.extractRotation(r.matrixWorld),ki.setFromRotationMatrix(In),this.quaternion.premultiply(ki.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ke("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent($c),Wi.child=e,this.dispatchEvent(Wi),Wi.child=null):Ke("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Jm),Uo.child=e,this.dispatchEvent(Uo),Uo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),In.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),In.multiply(e.parent.matrixWorld)),e.applyMatrix4(In),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent($c),Wi.child=e,this.dispatchEvent(Wi),Wi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Er,e,jm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Er,Zm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),p=o(e.animations),x=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),x.length>0&&(i.nodes=x)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Tt.DEFAULT_UP=new z(0,1,0);Tt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const an=new z,Un=new z,No=new z,Nn=new z,Xi=new z,qi=new z,Kc=new z,Fo=new z,Oo=new z,Bo=new z,zo=new xt,Vo=new xt,Ho=new xt;class ln{constructor(e=new z,t=new z,i=new z){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),an.subVectors(e,t),r.cross(an);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){an.subVectors(r,t),Un.subVectors(i,t),No.subVectors(e,t);const o=an.dot(an),a=an.dot(Un),l=an.dot(No),c=Un.dot(Un),u=Un.dot(No),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const d=1/f,p=(c*l-a*u)*d,x=(o*u-a*l)*d;return s.set(1-p-x,x,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Nn)===null?!1:Nn.x>=0&&Nn.y>=0&&Nn.x+Nn.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Nn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Nn.x),l.addScaledVector(o,Nn.y),l.addScaledVector(a,Nn.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return zo.setScalar(0),Vo.setScalar(0),Ho.setScalar(0),zo.fromBufferAttribute(e,t),Vo.fromBufferAttribute(e,i),Ho.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(zo,s.x),o.addScaledVector(Vo,s.y),o.addScaledVector(Ho,s.z),o}static isFrontFacing(e,t,i,r){return an.subVectors(i,t),Un.subVectors(e,t),an.cross(Un).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return an.subVectors(this.c,this.b),Un.subVectors(this.a,this.b),an.cross(Un).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ln.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ln.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return ln.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return ln.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ln.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Xi.subVectors(r,i),qi.subVectors(s,i),Fo.subVectors(e,i);const l=Xi.dot(Fo),c=qi.dot(Fo);if(l<=0&&c<=0)return t.copy(i);Oo.subVectors(e,r);const u=Xi.dot(Oo),f=qi.dot(Oo);if(u>=0&&f<=u)return t.copy(r);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Xi,o);Bo.subVectors(e,s);const p=Xi.dot(Bo),x=qi.dot(Bo);if(x>=0&&p<=x)return t.copy(s);const _=p*c-l*x;if(_<=0&&c>=0&&x<=0)return a=c/(c-x),t.copy(i).addScaledVector(qi,a);const g=u*x-p*f;if(g<=0&&f-u>=0&&p-x>=0)return Kc.subVectors(s,r),a=(f-u)/(f-u+(p-x)),t.copy(r).addScaledVector(Kc,a);const h=1/(g+_+d);return o=_*h,a=d*h,t.copy(i).addScaledVector(Xi,o).addScaledVector(qi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const oh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ni={h:0,s:0,l:0},fs={h:0,s:0,l:0};function Go(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ze{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=tn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=je.workingColorSpace){return this.r=e,this.g=t,this.b=i,je.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=je.workingColorSpace){if(e=zm(e,1),t=$e(t,0,1),i=$e(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Go(o,s,e+1/3),this.g=Go(o,s,e),this.b=Go(o,s,e-1/3)}return je.colorSpaceToWorking(this,r),this}setStyle(e,t=tn){function i(s){s!==void 0&&parseFloat(s)<1&&Ve("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ve("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);Ve("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=tn){const i=oh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ve("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=kn(e.r),this.g=kn(e.g),this.b=kn(e.b),this}copyLinearToSRGB(e){return this.r=or(e.r),this.g=or(e.g),this.b=or(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=tn){return je.workingToColorSpace(wt.copy(this),e),Math.round($e(wt.r*255,0,255))*65536+Math.round($e(wt.g*255,0,255))*256+Math.round($e(wt.b*255,0,255))}getHexString(e=tn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=je.workingColorSpace){je.workingToColorSpace(wt.copy(this),t);const i=wt.r,r=wt.g,s=wt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=je.workingColorSpace){return je.workingToColorSpace(wt.copy(this),t),e.r=wt.r,e.g=wt.g,e.b=wt.b,e}getStyle(e=tn){je.workingToColorSpace(wt.copy(this),e);const t=wt.r,i=wt.g,r=wt.b;return e!==tn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(ni),this.setHSL(ni.h+e,ni.s+t,ni.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ni),e.getHSL(fs);const i=bo(ni.h,fs.h,t),r=bo(ni.s,fs.s,t),s=bo(ni.l,fs.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const wt=new Ze;Ze.NAMES=oh;let Qm=0;class Zr extends dr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Qm++}),this.uuid=Kr(),this.name="",this.type="Material",this.blending=sr,this.side=pi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ma,this.blendDst=ga,this.blendEquation=Ri,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ze(0,0,0),this.blendAlpha=0,this.depthFunc=lr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Uc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Oi,this.stencilZFail=Oi,this.stencilZPass=Oi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Ve(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ve(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==sr&&(i.blending=this.blending),this.side!==pi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ma&&(i.blendSrc=this.blendSrc),this.blendDst!==ga&&(i.blendDst=this.blendDst),this.blendEquation!==Ri&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==lr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Uc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Oi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Oi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Oi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ah extends Zr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.combine=Vf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const vt=new z,hs=new Je;let eg=0;class bn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:eg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Nc,this.updateRanges=[],this.gpuType=vn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)hs.fromBufferAttribute(this,t),hs.applyMatrix3(e),this.setXY(t,hs.x,hs.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix3(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix4(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.applyNormalMatrix(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.transformDirection(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=vr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Vt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=vr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=vr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=vr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=vr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),i=Vt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),i=Vt(i,this.array),r=Vt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),i=Vt(i,this.array),r=Vt(r,this.array),s=Vt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Nc&&(e.usage=this.usage),e}}class lh extends bn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class ch extends bn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Wn extends bn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let tg=0;const Qt=new pt,ko=new Tt,Yi=new z,$t=new jr,yr=new jr,yt=new z;class Zn extends dr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:tg++}),this.uuid=Kr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ih(e)?ch:lh)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Xe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Qt.makeRotationFromQuaternion(e),this.applyMatrix4(Qt),this}rotateX(e){return Qt.makeRotationX(e),this.applyMatrix4(Qt),this}rotateY(e){return Qt.makeRotationY(e),this.applyMatrix4(Qt),this}rotateZ(e){return Qt.makeRotationZ(e),this.applyMatrix4(Qt),this}translate(e,t,i){return Qt.makeTranslation(e,t,i),this.applyMatrix4(Qt),this}scale(e,t,i){return Qt.makeScale(e,t,i),this.applyMatrix4(Qt),this}lookAt(e){return ko.lookAt(e),ko.updateMatrix(),this.applyMatrix4(ko.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Yi).negate(),this.translate(Yi.x,Yi.y,Yi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Wn(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Ve("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new jr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ke("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];$t.setFromBufferAttribute(s),this.morphTargetsRelative?(yt.addVectors(this.boundingBox.min,$t.min),this.boundingBox.expandByPoint(yt),yt.addVectors(this.boundingBox.max,$t.max),this.boundingBox.expandByPoint(yt)):(this.boundingBox.expandByPoint($t.min),this.boundingBox.expandByPoint($t.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ke('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ke("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){const i=this.boundingSphere.center;if($t.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];yr.setFromBufferAttribute(a),this.morphTargetsRelative?(yt.addVectors($t.min,yr.min),$t.expandByPoint(yt),yt.addVectors($t.max,yr.max),$t.expandByPoint(yt)):($t.expandByPoint(yr.min),$t.expandByPoint(yr.max))}$t.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)yt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(yt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)yt.fromBufferAttribute(a,c),l&&(Yi.fromBufferAttribute(e,c),yt.add(Yi)),r=Math.max(r,i.distanceToSquared(yt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Ke('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ke("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new bn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let G=0;G<i.count;G++)a[G]=new z,l[G]=new z;const c=new z,u=new z,f=new z,d=new Je,p=new Je,x=new Je,_=new z,g=new z;function h(G,M,y){c.fromBufferAttribute(i,G),u.fromBufferAttribute(i,M),f.fromBufferAttribute(i,y),d.fromBufferAttribute(s,G),p.fromBufferAttribute(s,M),x.fromBufferAttribute(s,y),u.sub(c),f.sub(c),p.sub(d),x.sub(d);const I=1/(p.x*x.y-x.x*p.y);isFinite(I)&&(_.copy(u).multiplyScalar(x.y).addScaledVector(f,-p.y).multiplyScalar(I),g.copy(f).multiplyScalar(p.x).addScaledVector(u,-x.x).multiplyScalar(I),a[G].add(_),a[M].add(_),a[y].add(_),l[G].add(g),l[M].add(g),l[y].add(g))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let G=0,M=E.length;G<M;++G){const y=E[G],I=y.start,J=y.count;for(let q=I,re=I+J;q<re;q+=3)h(e.getX(q+0),e.getX(q+1),e.getX(q+2))}const w=new z,T=new z,R=new z,L=new z;function D(G){R.fromBufferAttribute(r,G),L.copy(R);const M=a[G];w.copy(M),w.sub(R.multiplyScalar(R.dot(M))).normalize(),T.crossVectors(L,M);const I=T.dot(l[G])<0?-1:1;o.setXYZW(G,w.x,w.y,w.z,I)}for(let G=0,M=E.length;G<M;++G){const y=E[G],I=y.start,J=y.count;for(let q=I,re=I+J;q<re;q+=3)D(e.getX(q+0)),D(e.getX(q+1)),D(e.getX(q+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new bn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new z,s=new z,o=new z,a=new z,l=new z,c=new z,u=new z,f=new z;if(e)for(let d=0,p=e.count;d<p;d+=3){const x=e.getX(d+0),_=e.getX(d+1),g=e.getX(d+2);r.fromBufferAttribute(t,x),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,g),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,g),a.add(u),l.add(u),c.add(u),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)yt.fromBufferAttribute(e,t),yt.normalize(),e.setXYZ(t,yt.x,yt.y,yt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,d=new c.constructor(l.length*u);let p=0,x=0;for(let _=0,g=l.length;_<g;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*u;for(let h=0;h<u;h++)d[x++]=c[p++]}return new bn(d,u,f)}if(this.index===null)return Ve("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Zn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const d=c[u],p=e(d,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,p=f.length;d<p;d++)u.push(f[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const jc=new pt,Ei=new sh,ds=new Vl,Zc=new z,ps=new z,ms=new z,gs=new z,Wo=new z,_s=new z,Jc=new z,xs=new z;class kt extends Tt{constructor(e=new Zn,t=new ah){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){_s.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(Wo.fromBufferAttribute(f,e),o?_s.addScaledVector(Wo,u):_s.addScaledVector(Wo.sub(t),u))}t.add(_s)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ds.copy(i.boundingSphere),ds.applyMatrix4(s),Ei.copy(e.ray).recast(e.near),!(ds.containsPoint(Ei.origin)===!1&&(Ei.intersectSphere(ds,Zc)===null||Ei.origin.distanceToSquared(Zc)>(e.far-e.near)**2))&&(jc.copy(s).invert(),Ei.copy(e.ray).applyMatrix4(jc),!(i.boundingBox!==null&&Ei.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ei)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,_=d.length;x<_;x++){const g=d[x],h=o[g.materialIndex],E=Math.max(g.start,p.start),w=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let T=E,R=w;T<R;T+=3){const L=a.getX(T),D=a.getX(T+1),G=a.getX(T+2);r=vs(this,h,e,i,c,u,f,L,D,G),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const x=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let g=x,h=_;g<h;g+=3){const E=a.getX(g),w=a.getX(g+1),T=a.getX(g+2);r=vs(this,o,e,i,c,u,f,E,w,T),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,_=d.length;x<_;x++){const g=d[x],h=o[g.materialIndex],E=Math.max(g.start,p.start),w=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let T=E,R=w;T<R;T+=3){const L=T,D=T+1,G=T+2;r=vs(this,h,e,i,c,u,f,L,D,G),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const x=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let g=x,h=_;g<h;g+=3){const E=g,w=g+1,T=g+2;r=vs(this,o,e,i,c,u,f,E,w,T),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}}function ng(n,e,t,i,r,s,o,a){let l;if(e.side===Wt?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===pi,a),l===null)return null;xs.copy(a),xs.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(xs);return c<t.near||c>t.far?null:{distance:c,point:xs.clone(),object:n}}function vs(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,ps),n.getVertexPosition(l,ms),n.getVertexPosition(c,gs);const u=ng(n,e,t,i,ps,ms,gs,Jc);if(u){const f=new z;ln.getBarycoord(Jc,ps,ms,gs,f),r&&(u.uv=ln.getInterpolatedAttribute(r,a,l,c,f,new Je)),s&&(u.uv1=ln.getInterpolatedAttribute(s,a,l,c,f,new Je)),o&&(u.normal=ln.getInterpolatedAttribute(o,a,l,c,f,new z),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new z,materialIndex:0};ln.getNormal(ps,ms,gs,d.normal),u.face=d,u.barycoord=f}return u}class pr extends Zn{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let d=0,p=0;x("z","y","x",-1,-1,i,t,e,o,s,0),x("z","y","x",1,-1,i,t,-e,o,s,1),x("x","z","y",1,1,e,i,t,r,o,2),x("x","z","y",1,-1,e,i,-t,r,o,3),x("x","y","z",1,-1,e,t,i,r,s,4),x("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Wn(c,3)),this.setAttribute("normal",new Wn(u,3)),this.setAttribute("uv",new Wn(f,2));function x(_,g,h,E,w,T,R,L,D,G,M){const y=T/D,I=R/G,J=T/2,q=R/2,re=L/2,ee=D+1,j=G+1;let V=0,te=0;const ge=new z;for(let me=0;me<j;me++){const ve=me*I-q;for(let Oe=0;Oe<ee;Oe++){const He=Oe*y-J;ge[_]=He*E,ge[g]=ve*w,ge[h]=re,c.push(ge.x,ge.y,ge.z),ge[_]=0,ge[g]=0,ge[h]=L>0?1:-1,u.push(ge.x,ge.y,ge.z),f.push(Oe/D),f.push(1-me/G),V+=1}}for(let me=0;me<G;me++)for(let ve=0;ve<D;ve++){const Oe=d+ve+ee*me,He=d+ve+ee*(me+1),ut=d+(ve+1)+ee*(me+1),ot=d+(ve+1)+ee*me;l.push(Oe,He,ot),l.push(He,ut,ot),te+=6}a.addGroup(p,te,M),p+=te,d+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function hr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Ve("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Ut(n){const e={};for(let t=0;t<n.length;t++){const i=hr(n[t]);for(const r in i)e[r]=i[r]}return e}function ig(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function uh(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:je.workingColorSpace}const rg={clone:hr,merge:Ut};var sg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,og=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Rn extends Zr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sg,this.fragmentShader=og,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=hr(e.uniforms),this.uniformsGroups=ig(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class fh extends Tt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pt,this.projectionMatrix=new pt,this.projectionMatrixInverse=new pt,this.coordinateSystem=Sn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ii=new z,Qc=new Je,eu=new Je;class nn extends fh{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ol*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(yo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ol*2*Math.atan(Math.tan(yo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ii.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ii.x,ii.y).multiplyScalar(-e/ii.z),ii.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ii.x,ii.y).multiplyScalar(-e/ii.z)}getViewSize(e,t){return this.getViewBounds(e,Qc,eu),t.subVectors(eu,Qc)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(yo*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const $i=-90,Ki=1;class ag extends Tt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new nn($i,Ki,e,t);r.layers=this.layers,this.add(r);const s=new nn($i,Ki,e,t);s.layers=this.layers,this.add(s);const o=new nn($i,Ki,e,t);o.layers=this.layers,this.add(o);const a=new nn($i,Ki,e,t);a.layers=this.layers,this.add(a);const l=new nn($i,Ki,e,t);l.layers=this.layers,this.add(l);const c=new nn($i,Ki,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Sn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ks)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(f,d,p),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class hh extends Ot{constructor(e=[],t=Ii,i,r,s,o,a,l,c,u){super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class dh extends yn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new hh(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new pr(5,5,5),s=new Rn({name:"CubemapFromEquirect",uniforms:hr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Wt,blending:Gn});s.uniforms.tEquirect.value=t;const o=new kt(r,s),a=t.minFilter;return t.minFilter===Pi&&(t.minFilter=Ct),new ag(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}class Qi extends Tt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const lg={type:"move"};class Xo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const g=t.getJointPose(_,i),h=this._getHandJoint(c,_);g!==null&&(h.matrix.fromArray(g.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=g.radius),h.visible=g!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),p=.02,x=.005;c.inputState.pinching&&d>p+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(lg)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Qi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class cg extends Tt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wn,this.environmentIntensity=1,this.environmentRotation=new wn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class ug extends Ot{constructor(e=null,t=1,i=1,r,s,o,a,l,c=bt,u=bt,f,d){super(null,o,a,l,c,u,r,s,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const qo=new z,fg=new z,hg=new Xe;class wi{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=qo.subVectors(i,t).cross(fg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(qo),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||hg.getNormalMatrix(e),r=this.coplanarPoint(qo).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const yi=new Vl,dg=new Je(.5,.5),Ss=new z;class Gl{constructor(e=new wi,t=new wi,i=new wi,r=new wi,s=new wi,o=new wi){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Sn,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],f=s[5],d=s[6],p=s[7],x=s[8],_=s[9],g=s[10],h=s[11],E=s[12],w=s[13],T=s[14],R=s[15];if(r[0].setComponents(c-o,p-u,h-x,R-E).normalize(),r[1].setComponents(c+o,p+u,h+x,R+E).normalize(),r[2].setComponents(c+a,p+f,h+_,R+w).normalize(),r[3].setComponents(c-a,p-f,h-_,R-w).normalize(),i)r[4].setComponents(l,d,g,T).normalize(),r[5].setComponents(c-l,p-d,h-g,R-T).normalize();else if(r[4].setComponents(c-l,p-d,h-g,R-T).normalize(),t===Sn)r[5].setComponents(c+l,p+d,h+g,R+T).normalize();else if(t===ks)r[5].setComponents(l,d,g,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),yi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),yi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(yi)}intersectsSprite(e){yi.center.set(0,0,0);const t=dg.distanceTo(e.center);return yi.radius=.7071067811865476+t,yi.applyMatrix4(e.matrixWorld),this.intersectsSphere(yi)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Ss.x=r.normal.x>0?e.max.x:e.min.x,Ss.y=r.normal.y>0?e.max.y:e.min.y,Ss.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ss)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class qr extends Ot{constructor(e,t,i=An,r,s,o,a=bt,l=bt,c,u=Kn,f=1){if(u!==Kn&&u!==Di)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:f};super(d,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new zl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class pg extends qr{constructor(e,t=An,i=Ii,r,s,o=bt,a=bt,l,c=Kn){const u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,t,i,r,s,o,a,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class ph extends Ot{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class io extends Zn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,d=t/l,p=[],x=[],_=[],g=[];for(let h=0;h<u;h++){const E=h*d-o;for(let w=0;w<c;w++){const T=w*f-s;x.push(T,-E,0),_.push(0,0,1),g.push(w/a),g.push(1-h/l)}}for(let h=0;h<l;h++)for(let E=0;E<a;E++){const w=E+c*h,T=E+c*(h+1),R=E+1+c*(h+1),L=E+1+c*h;p.push(w,T,L),p.push(T,R,L)}this.setIndex(p),this.setAttribute("position",new Wn(x,3)),this.setAttribute("normal",new Wn(_,3)),this.setAttribute("uv",new Wn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new io(e.width,e.height,e.widthSegments,e.heightSegments)}}class mg extends Rn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class gg extends Zr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nh,this.normalScale=new Je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class _g extends Zr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Cm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class xg extends Zr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class mh extends Tt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ze(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class vg extends mh{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ze(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Yo=new pt,tu=new z,nu=new z;class Sg{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Je(512,512),this.mapType=jt,this.map=null,this.mapPass=null,this.matrix=new pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Gl,this._frameExtents=new Je(1,1),this._viewportCount=1,this._viewports=[new xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;tu.setFromMatrixPosition(e.matrixWorld),t.position.copy(tu),nu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(nu),t.updateMatrixWorld(),Yo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Yo,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Yo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class kl extends fh{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Mg extends Sg{constructor(){super(new kl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class iu extends mh{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.target=new Tt,this.shadow=new Mg}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Eg extends nn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const ru=new pt;class yg{constructor(e,t,i=0,r=1/0){this.ray=new sh(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Hl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ke("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return ru.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ru),this}intersectObject(e,t=!0,i=[]){return al(e,this,i,t),i.sort(su),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)al(e[r],this,i,t);return i.sort(su),i}}function su(n,e){return n.distance-e.distance}function al(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let o=0,a=s.length;o<a;o++)al(s[o],e,t,!0)}}function ou(n,e,t,i){const r=bg(i);switch(t){case Qf:return n*e;case th:return n*e/r.components*r.byteLength;case Ul:return n*e/r.components*r.byteLength;case ur:return n*e*2/r.components*r.byteLength;case Nl:return n*e*2/r.components*r.byteLength;case eh:return n*e*3/r.components*r.byteLength;case cn:return n*e*4/r.components*r.byteLength;case Fl:return n*e*4/r.components*r.byteLength;case Cs:case Ps:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ds:case Ls:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ca:case Da:return Math.max(n,16)*Math.max(e,8)/4;case Ra:case Pa:return Math.max(n,8)*Math.max(e,8)/2;case La:case Ia:case Na:case Fa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ua:case Oa:case Ba:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case za:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Va:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Ha:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Ga:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case ka:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Wa:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Xa:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case qa:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Ya:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case $a:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Ka:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case ja:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Za:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Ja:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Qa:case el:case tl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case nl:case il:return Math.ceil(n/4)*Math.ceil(e/4)*8;case rl:case sl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function bg(n){switch(n){case jt:case Kf:return{byteLength:1,components:1};case kr:case jf:case $n:return{byteLength:2,components:1};case Ll:case Il:return{byteLength:2,components:4};case An:case Dl:case vn:return{byteLength:4,components:1};case Zf:case Jf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Pl}}));typeof window<"u"&&(window.__THREE__?Ve("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Pl);function gh(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Tg(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,f=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,a),f.length===0)n.bufferSubData(c,0,u);else{f.sort((p,x)=>p.start-x.start);let d=0;for(let p=1;p<f.length;p++){const x=f[d],_=f[p];_.start<=x.start+x.count+1?x.count=Math.max(x.count,_.start+_.count-x.start):(++d,f[d]=_)}f.length=d+1;for(let p=0,x=f.length;p<x;p++){const _=f[p];n.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var Ag=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wg=`#ifdef USE_ALPHAHASH
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
#endif`,Rg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Cg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Pg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Dg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Lg=`#ifdef USE_AOMAP
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
#endif`,Ig=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ug=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Ng=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Fg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Og=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Bg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,zg=`#ifdef USE_IRIDESCENCE
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
#endif`,Vg=`#ifdef USE_BUMPMAP
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
#endif`,Hg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Gg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,kg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Wg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Xg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,qg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Yg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,$g=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Kg=`#define PI 3.141592653589793
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
} // validated`,jg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Zg=`vec3 transformedNormal = objectNormal;
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
#endif`,Jg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Qg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,e_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,t_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,n_="gl_FragColor = linearToOutputTexel( gl_FragColor );",i_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,r_=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,s_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,o_=`#ifdef USE_ENVMAP
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
#endif`,a_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,l_=`#ifdef USE_ENVMAP
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
#endif`,c_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,u_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,f_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,h_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,d_=`#ifdef USE_GRADIENTMAP
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
}`,p_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,m_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,g_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,__=`uniform bool receiveShadow;
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
#endif`,x_=`#ifdef USE_ENVMAP
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
#endif`,v_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,S_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,M_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,E_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,y_=`PhysicalMaterial material;
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
#endif`,b_=`uniform sampler2D dfgLUT;
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
		float v = 0.5 / ( gv + gl );
		return v;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
}`,T_=`
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,A_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
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
#endif`,w_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,R_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,C_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,P_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,D_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,L_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,I_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,U_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,N_=`#if defined( USE_POINTS_UV )
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
#endif`,F_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,O_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,B_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,z_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,V_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,H_=`#ifdef USE_MORPHTARGETS
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
#endif`,G_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,k_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,W_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,X_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,q_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Y_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$_=`#ifdef USE_NORMALMAP
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
#endif`,K_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,j_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Z_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,J_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Q_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,e0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,t0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,n0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,i0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,r0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,s0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,o0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,a0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
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
			shadowCoord.z += shadowBias;
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
			shadowCoord.z += shadowBias;
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
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,l0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,c0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
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
#endif`,u0=`float getShadowMask() {
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
}`,f0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,h0=`#ifdef USE_SKINNING
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
#endif`,d0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,p0=`#ifdef USE_SKINNING
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
#endif`,m0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,g0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,x0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,v0=`#ifdef USE_TRANSMISSION
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
#endif`,S0=`#ifdef USE_TRANSMISSION
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
#endif`,M0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,E0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,y0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,b0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const T0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,A0=`uniform sampler2D t2D;
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
}`,w0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,R0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,C0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,P0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,D0=`#include <common>
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
}`,L0=`#if DEPTH_PACKING == 3200
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
}`,I0=`#define DISTANCE
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
}`,U0=`#define DISTANCE
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
}`,N0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,F0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,O0=`uniform float scale;
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
}`,B0=`uniform vec3 diffuse;
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
}`,z0=`#include <common>
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
}`,V0=`uniform vec3 diffuse;
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
}`,H0=`#define LAMBERT
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
}`,G0=`#define LAMBERT
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,k0=`#define MATCAP
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
}`,W0=`#define MATCAP
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
}`,X0=`#define NORMAL
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
}`,q0=`#define NORMAL
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
}`,Y0=`#define PHONG
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
}`,$0=`#define PHONG
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,K0=`#define STANDARD
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
}`,j0=`#define STANDARD
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
}`,Z0=`#define TOON
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
}`,J0=`#define TOON
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
}`,Q0=`uniform float size;
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
}`,ex=`uniform vec3 diffuse;
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
}`,tx=`#include <common>
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
}`,nx=`uniform vec3 color;
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
}`,ix=`uniform float rotation;
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
}`,rx=`uniform vec3 diffuse;
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
}`,qe={alphahash_fragment:Ag,alphahash_pars_fragment:wg,alphamap_fragment:Rg,alphamap_pars_fragment:Cg,alphatest_fragment:Pg,alphatest_pars_fragment:Dg,aomap_fragment:Lg,aomap_pars_fragment:Ig,batching_pars_vertex:Ug,batching_vertex:Ng,begin_vertex:Fg,beginnormal_vertex:Og,bsdfs:Bg,iridescence_fragment:zg,bumpmap_pars_fragment:Vg,clipping_planes_fragment:Hg,clipping_planes_pars_fragment:Gg,clipping_planes_pars_vertex:kg,clipping_planes_vertex:Wg,color_fragment:Xg,color_pars_fragment:qg,color_pars_vertex:Yg,color_vertex:$g,common:Kg,cube_uv_reflection_fragment:jg,defaultnormal_vertex:Zg,displacementmap_pars_vertex:Jg,displacementmap_vertex:Qg,emissivemap_fragment:e_,emissivemap_pars_fragment:t_,colorspace_fragment:n_,colorspace_pars_fragment:i_,envmap_fragment:r_,envmap_common_pars_fragment:s_,envmap_pars_fragment:o_,envmap_pars_vertex:a_,envmap_physical_pars_fragment:x_,envmap_vertex:l_,fog_vertex:c_,fog_pars_vertex:u_,fog_fragment:f_,fog_pars_fragment:h_,gradientmap_pars_fragment:d_,lightmap_pars_fragment:p_,lights_lambert_fragment:m_,lights_lambert_pars_fragment:g_,lights_pars_begin:__,lights_toon_fragment:v_,lights_toon_pars_fragment:S_,lights_phong_fragment:M_,lights_phong_pars_fragment:E_,lights_physical_fragment:y_,lights_physical_pars_fragment:b_,lights_fragment_begin:T_,lights_fragment_maps:A_,lights_fragment_end:w_,logdepthbuf_fragment:R_,logdepthbuf_pars_fragment:C_,logdepthbuf_pars_vertex:P_,logdepthbuf_vertex:D_,map_fragment:L_,map_pars_fragment:I_,map_particle_fragment:U_,map_particle_pars_fragment:N_,metalnessmap_fragment:F_,metalnessmap_pars_fragment:O_,morphinstance_vertex:B_,morphcolor_vertex:z_,morphnormal_vertex:V_,morphtarget_pars_vertex:H_,morphtarget_vertex:G_,normal_fragment_begin:k_,normal_fragment_maps:W_,normal_pars_fragment:X_,normal_pars_vertex:q_,normal_vertex:Y_,normalmap_pars_fragment:$_,clearcoat_normal_fragment_begin:K_,clearcoat_normal_fragment_maps:j_,clearcoat_pars_fragment:Z_,iridescence_pars_fragment:J_,opaque_fragment:Q_,packing:e0,premultiplied_alpha_fragment:t0,project_vertex:n0,dithering_fragment:i0,dithering_pars_fragment:r0,roughnessmap_fragment:s0,roughnessmap_pars_fragment:o0,shadowmap_pars_fragment:a0,shadowmap_pars_vertex:l0,shadowmap_vertex:c0,shadowmask_pars_fragment:u0,skinbase_vertex:f0,skinning_pars_vertex:h0,skinning_vertex:d0,skinnormal_vertex:p0,specularmap_fragment:m0,specularmap_pars_fragment:g0,tonemapping_fragment:_0,tonemapping_pars_fragment:x0,transmission_fragment:v0,transmission_pars_fragment:S0,uv_pars_fragment:M0,uv_pars_vertex:E0,uv_vertex:y0,worldpos_vertex:b0,background_vert:T0,background_frag:A0,backgroundCube_vert:w0,backgroundCube_frag:R0,cube_vert:C0,cube_frag:P0,depth_vert:D0,depth_frag:L0,distance_vert:I0,distance_frag:U0,equirect_vert:N0,equirect_frag:F0,linedashed_vert:O0,linedashed_frag:B0,meshbasic_vert:z0,meshbasic_frag:V0,meshlambert_vert:H0,meshlambert_frag:G0,meshmatcap_vert:k0,meshmatcap_frag:W0,meshnormal_vert:X0,meshnormal_frag:q0,meshphong_vert:Y0,meshphong_frag:$0,meshphysical_vert:K0,meshphysical_frag:j0,meshtoon_vert:Z0,meshtoon_frag:J0,points_vert:Q0,points_frag:ex,shadow_vert:tx,shadow_frag:nx,sprite_vert:ix,sprite_frag:rx},ye={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new Je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new Je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},xn={basic:{uniforms:Ut([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:Ut([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Ze(0)}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:Ut([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:Ut([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:Ut([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new Ze(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:Ut([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:Ut([ye.points,ye.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:Ut([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:Ut([ye.common,ye.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:Ut([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:Ut([ye.sprite,ye.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distance:{uniforms:Ut([ye.common,ye.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distance_vert,fragmentShader:qe.distance_frag},shadow:{uniforms:Ut([ye.lights,ye.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};xn.physical={uniforms:Ut([xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new Je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new Je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new Je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};const Ms={r:0,b:0,g:0},bi=new wn,sx=new pt;function ox(n,e,t,i,r,s,o){const a=new Ze(0);let l=s===!0?0:1,c,u,f=null,d=0,p=null;function x(w){let T=w.isScene===!0?w.background:null;return T&&T.isTexture&&(T=(w.backgroundBlurriness>0?t:e).get(T)),T}function _(w){let T=!1;const R=x(w);R===null?h(a,l):R&&R.isColor&&(h(R,1),T=!0);const L=n.xr.getEnvironmentBlendMode();L==="additive"?i.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||T)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(w,T){const R=x(T);R&&(R.isCubeTexture||R.mapping===no)?(u===void 0&&(u=new kt(new pr(1,1,1),new Rn({name:"BackgroundCubeMaterial",uniforms:hr(xn.backgroundCube.uniforms),vertexShader:xn.backgroundCube.vertexShader,fragmentShader:xn.backgroundCube.fragmentShader,side:Wt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,D,G){this.matrixWorld.copyPosition(G.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),bi.copy(T.backgroundRotation),bi.x*=-1,bi.y*=-1,bi.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(bi.y*=-1,bi.z*=-1),u.material.uniforms.envMap.value=R,u.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(sx.makeRotationFromEuler(bi)),u.material.toneMapped=je.getTransfer(R.colorSpace)!==st,(f!==R||d!==R.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,f=R,d=R.version,p=n.toneMapping),u.layers.enableAll(),w.unshift(u,u.geometry,u.material,0,0,null)):R&&R.isTexture&&(c===void 0&&(c=new kt(new io(2,2),new Rn({name:"BackgroundMaterial",uniforms:hr(xn.background.uniforms),vertexShader:xn.background.vertexShader,fragmentShader:xn.background.fragmentShader,side:pi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=R,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=je.getTransfer(R.colorSpace)!==st,R.matrixAutoUpdate===!0&&R.updateMatrix(),c.material.uniforms.uvTransform.value.copy(R.matrix),(f!==R||d!==R.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,f=R,d=R.version,p=n.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function h(w,T){w.getRGB(Ms,uh(n)),i.buffers.color.setClear(Ms.r,Ms.g,Ms.b,T,o)}function E(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(w,T=1){a.set(w),l=T,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,h(a,l)},render:_,addToRenderList:g,dispose:E}}function ax(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(y,I,J,q,re){let ee=!1;const j=f(q,J,I);s!==j&&(s=j,c(s.object)),ee=p(y,q,J,re),ee&&x(y,q,J,re),re!==null&&e.update(re,n.ELEMENT_ARRAY_BUFFER),(ee||o)&&(o=!1,T(y,I,J,q),re!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(re).buffer))}function l(){return n.createVertexArray()}function c(y){return n.bindVertexArray(y)}function u(y){return n.deleteVertexArray(y)}function f(y,I,J){const q=J.wireframe===!0;let re=i[y.id];re===void 0&&(re={},i[y.id]=re);let ee=re[I.id];ee===void 0&&(ee={},re[I.id]=ee);let j=ee[q];return j===void 0&&(j=d(l()),ee[q]=j),j}function d(y){const I=[],J=[],q=[];for(let re=0;re<t;re++)I[re]=0,J[re]=0,q[re]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:J,attributeDivisors:q,object:y,attributes:{},index:null}}function p(y,I,J,q){const re=s.attributes,ee=I.attributes;let j=0;const V=J.getAttributes();for(const te in V)if(V[te].location>=0){const me=re[te];let ve=ee[te];if(ve===void 0&&(te==="instanceMatrix"&&y.instanceMatrix&&(ve=y.instanceMatrix),te==="instanceColor"&&y.instanceColor&&(ve=y.instanceColor)),me===void 0||me.attribute!==ve||ve&&me.data!==ve.data)return!0;j++}return s.attributesNum!==j||s.index!==q}function x(y,I,J,q){const re={},ee=I.attributes;let j=0;const V=J.getAttributes();for(const te in V)if(V[te].location>=0){let me=ee[te];me===void 0&&(te==="instanceMatrix"&&y.instanceMatrix&&(me=y.instanceMatrix),te==="instanceColor"&&y.instanceColor&&(me=y.instanceColor));const ve={};ve.attribute=me,me&&me.data&&(ve.data=me.data),re[te]=ve,j++}s.attributes=re,s.attributesNum=j,s.index=q}function _(){const y=s.newAttributes;for(let I=0,J=y.length;I<J;I++)y[I]=0}function g(y){h(y,0)}function h(y,I){const J=s.newAttributes,q=s.enabledAttributes,re=s.attributeDivisors;J[y]=1,q[y]===0&&(n.enableVertexAttribArray(y),q[y]=1),re[y]!==I&&(n.vertexAttribDivisor(y,I),re[y]=I)}function E(){const y=s.newAttributes,I=s.enabledAttributes;for(let J=0,q=I.length;J<q;J++)I[J]!==y[J]&&(n.disableVertexAttribArray(J),I[J]=0)}function w(y,I,J,q,re,ee,j){j===!0?n.vertexAttribIPointer(y,I,J,re,ee):n.vertexAttribPointer(y,I,J,q,re,ee)}function T(y,I,J,q){_();const re=q.attributes,ee=J.getAttributes(),j=I.defaultAttributeValues;for(const V in ee){const te=ee[V];if(te.location>=0){let ge=re[V];if(ge===void 0&&(V==="instanceMatrix"&&y.instanceMatrix&&(ge=y.instanceMatrix),V==="instanceColor"&&y.instanceColor&&(ge=y.instanceColor)),ge!==void 0){const me=ge.normalized,ve=ge.itemSize,Oe=e.get(ge);if(Oe===void 0)continue;const He=Oe.buffer,ut=Oe.type,ot=Oe.bytesPerElement,N=ut===n.INT||ut===n.UNSIGNED_INT||ge.gpuType===Dl;if(ge.isInterleavedBufferAttribute){const F=ge.data,$=F.stride,ce=ge.offset;if(F.isInstancedInterleavedBuffer){for(let se=0;se<te.locationSize;se++)h(te.location+se,F.meshPerAttribute);y.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=F.meshPerAttribute*F.count)}else for(let se=0;se<te.locationSize;se++)g(te.location+se);n.bindBuffer(n.ARRAY_BUFFER,He);for(let se=0;se<te.locationSize;se++)w(te.location+se,ve/te.locationSize,ut,me,$*ot,(ce+ve/te.locationSize*se)*ot,N)}else{if(ge.isInstancedBufferAttribute){for(let F=0;F<te.locationSize;F++)h(te.location+F,ge.meshPerAttribute);y.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let F=0;F<te.locationSize;F++)g(te.location+F);n.bindBuffer(n.ARRAY_BUFFER,He);for(let F=0;F<te.locationSize;F++)w(te.location+F,ve/te.locationSize,ut,me,ve*ot,ve/te.locationSize*F*ot,N)}}else if(j!==void 0){const me=j[V];if(me!==void 0)switch(me.length){case 2:n.vertexAttrib2fv(te.location,me);break;case 3:n.vertexAttrib3fv(te.location,me);break;case 4:n.vertexAttrib4fv(te.location,me);break;default:n.vertexAttrib1fv(te.location,me)}}}}E()}function R(){G();for(const y in i){const I=i[y];for(const J in I){const q=I[J];for(const re in q)u(q[re].object),delete q[re];delete I[J]}delete i[y]}}function L(y){if(i[y.id]===void 0)return;const I=i[y.id];for(const J in I){const q=I[J];for(const re in q)u(q[re].object),delete q[re];delete I[J]}delete i[y.id]}function D(y){for(const I in i){const J=i[I];if(J[y.id]===void 0)continue;const q=J[y.id];for(const re in q)u(q[re].object),delete q[re];delete J[y.id]}}function G(){M(),o=!0,s!==r&&(s=r,c(s.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:G,resetDefaultState:M,dispose:R,releaseStatesOfGeometry:L,releaseStatesOfProgram:D,initAttributes:_,enableAttribute:g,disableUnusedAttributes:E}}function lx(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),t.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let p=0;for(let x=0;x<f;x++)p+=u[x];t.update(p,i,1)}function l(c,u,f,d){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let x=0;x<c.length;x++)o(c[x],u[x],d[x]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,f);let x=0;for(let _=0;_<f;_++)x+=u[_]*d[_];t.update(x,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function cx(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(D){return!(D!==cn&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(D){const G=D===$n&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==jt&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==vn&&!G)}function l(D){if(D==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(Ve("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),h=n.getParameter(n.MAX_VERTEX_ATTRIBS),E=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),T=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),R=n.getParameter(n.MAX_SAMPLES),L=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:x,maxTextureSize:_,maxCubemapSize:g,maxAttributes:h,maxVertexUniforms:E,maxVaryings:w,maxFragmentUniforms:T,maxSamples:R,samples:L}}function ux(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new wi,a=new Xe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||i!==0||r;return r=d,i=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,p){const x=f.clippingPlanes,_=f.clipIntersection,g=f.clipShadows,h=n.get(f);if(!r||x===null||x.length===0||s&&!g)s?u(null):c();else{const E=s?0:i,w=E*4;let T=h.clippingState||null;l.value=T,T=u(x,d,w,p);for(let R=0;R!==w;++R)T[R]=t[R];h.clippingState=T,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,p,x){const _=f!==null?f.length:0;let g=null;if(_!==0){if(g=l.value,x!==!0||g===null){const h=p+_*4,E=d.matrixWorldInverse;a.getNormalMatrix(E),(g===null||g.length<h)&&(g=new Float32Array(h));for(let w=0,T=p;w!==_;++w,T+=4)o.copy(f[w]).applyMatrix4(E,a),o.normal.toArray(g,T),g[T+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}function fx(n){let e=new WeakMap;function t(o,a){return a===ba?o.mapping=Ii:a===Ta&&(o.mapping=cr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===ba||a===Ta)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new dh(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const ci=4,au=[.125,.215,.35,.446,.526,.582],Ci=20,hx=256,br=new kl,lu=new Ze;let $o=null,Ko=0,jo=0,Zo=!1;const dx=new z;class cu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:o=256,position:a=dx}=s;$o=this._renderer.getRenderTarget(),Ko=this._renderer.getActiveCubeFace(),jo=this._renderer.getActiveMipmapLevel(),Zo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget($o,Ko,jo),this._renderer.xr.enabled=Zo,e.scissorTest=!1,ji(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ii||e.mapping===cr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),$o=this._renderer.getRenderTarget(),Ko=this._renderer.getActiveCubeFace(),jo=this._renderer.getActiveMipmapLevel(),Zo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Ct,minFilter:Ct,generateMipmaps:!1,type:$n,format:cn,colorSpace:fr,depthBuffer:!1},r=uu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=uu(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=px(s)),this._blurMaterial=gx(s,e,t),this._ggxMaterial=mx(s,e,t)}return r}_compileMaterial(e){const t=new kt(new Zn,e);this._renderer.compile(t,br)}_sceneToCubeUV(e,t,i,r,s){const l=new nn(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,p=f.toneMapping;f.getClearColor(lu),f.toneMapping=En,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new kt(new pr,new ah({name:"PMREM.Background",side:Wt,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,g=_.material;let h=!1;const E=e.background;E?E.isColor&&(g.color.copy(E),e.background=null,h=!0):(g.color.copy(lu),h=!0);for(let w=0;w<6;w++){const T=w%3;T===0?(l.up.set(0,c[w],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[w],s.y,s.z)):T===1?(l.up.set(0,0,c[w]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[w],s.z)):(l.up.set(0,c[w],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[w]));const R=this._cubeSize;ji(r,T*R,w>2?R:0,R,R),f.setRenderTarget(r),h&&f.render(_,l),f.render(e,l)}f.toneMapping=p,f.autoClear=d,e.background=E}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Ii||e.mapping===cr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=hu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fu());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;ji(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,br)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),d=0+c*1.25,p=f*d,{_lodMax:x}=this,_=this._sizeLods[i],g=3*_*(i>x-ci?i-x+ci:0),h=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=x-t,ji(s,g,h,3*_,2*_),r.setRenderTarget(s),r.render(a,br),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=x-i,ji(e,g,h,3*_,2*_),r.setRenderTarget(e),r.render(a,br)}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Ke("blur direction must be either latitudinal or longitudinal!");const u=3,f=this._lodMeshes[r];f.material=c;const d=c.uniforms,p=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Ci-1),_=s/x,g=isFinite(s)?1+Math.floor(u*_):Ci;g>Ci&&Ve(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Ci}`);const h=[];let E=0;for(let D=0;D<Ci;++D){const G=D/_,M=Math.exp(-G*G/2);h.push(M),D===0?E+=M:D<g&&(E+=2*M)}for(let D=0;D<h.length;D++)h[D]=h[D]/E;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=h,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:w}=this;d.dTheta.value=x,d.mipInt.value=w-i;const T=this._sizeLods[r],R=3*T*(r>w-ci?r-w+ci:0),L=4*(this._cubeSize-T);ji(t,R,L,3*T,2*T),l.setRenderTarget(t),l.render(f,br)}}function px(n){const e=[],t=[],i=[];let r=n;const s=n-ci+1+au.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>n-ci?l=au[o-n+ci-1]:o===0&&(l=0),t.push(l);const c=1/(a-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,x=6,_=3,g=2,h=1,E=new Float32Array(_*x*p),w=new Float32Array(g*x*p),T=new Float32Array(h*x*p);for(let L=0;L<p;L++){const D=L%3*2/3-1,G=L>2?0:-1,M=[D,G,0,D+2/3,G,0,D+2/3,G+1,0,D,G,0,D+2/3,G+1,0,D,G+1,0];E.set(M,_*x*L),w.set(d,g*x*L);const y=[L,L,L,L,L,L];T.set(y,h*x*L)}const R=new Zn;R.setAttribute("position",new bn(E,_)),R.setAttribute("uv",new bn(w,g)),R.setAttribute("faceIndex",new bn(T,h)),i.push(new kt(R,null)),r>ci&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function uu(n,e,t){const i=new yn(n,e,t);return i.texture.mapping=no,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ji(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function mx(n,e,t){return new Rn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:hx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ro(),fragmentShader:`

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

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

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
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function gx(n,e,t){const i=new Float32Array(Ci),r=new z(0,1,0);return new Rn({name:"SphericalGaussianBlur",defines:{n:Ci,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ro(),fragmentShader:`

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
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function fu(){return new Rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ro(),fragmentShader:`

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
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function hu(){return new Rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ro(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function ro(){return`

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
	`}function _x(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===ba||l===Ta,u=l===Ii||l===cr;if(c||u){let f=e.get(a);const d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new cu(n)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&r(p)?(t===null&&(t=new cu(n)),f=c?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function xx(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Xr("WebGLRenderer: "+i+" extension not supported."),r}}}function vx(n,e,t,i){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const x in d.attributes)e.remove(d.attributes[x]);d.removeEventListener("dispose",o),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const p in d)e.update(d[p],n.ARRAY_BUFFER)}function c(f){const d=[],p=f.index,x=f.attributes.position;let _=0;if(p!==null){const E=p.array;_=p.version;for(let w=0,T=E.length;w<T;w+=3){const R=E[w+0],L=E[w+1],D=E[w+2];d.push(R,L,L,D,D,R)}}else if(x!==void 0){const E=x.array;_=x.version;for(let w=0,T=E.length/3-1;w<T;w+=3){const R=w+0,L=w+1,D=w+2;d.push(R,L,L,D,D,R)}}else return;const g=new(ih(d)?ch:lh)(d,1);g.version=_;const h=s.get(f);h&&e.remove(h),s.set(f,g)}function u(f){const d=s.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function Sx(n,e,t){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,p){n.drawElements(i,p,s,d*o),t.update(p,i,1)}function c(d,p,x){x!==0&&(n.drawElementsInstanced(i,p,s,d*o,x),t.update(p,i,x))}function u(d,p,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,d,0,x);let g=0;for(let h=0;h<x;h++)g+=p[h];t.update(g,i,1)}function f(d,p,x,_){if(x===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let h=0;h<d.length;h++)c(d[h]/o,p[h],_[h]);else{g.multiDrawElementsInstancedWEBGL(i,p,0,s,d,0,_,0,x);let h=0;for(let E=0;E<x;E++)h+=p[E]*_[E];t.update(h,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function Mx(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:Ke("WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Ex(n,e,t){const i=new WeakMap,r=new xt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==f){let y=function(){G.dispose(),i.delete(a),a.removeEventListener("dispose",y)};var p=y;d!==void 0&&d.texture.dispose();const x=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],E=a.morphAttributes.normal||[],w=a.morphAttributes.color||[];let T=0;x===!0&&(T=1),_===!0&&(T=2),g===!0&&(T=3);let R=a.attributes.position.count*T,L=1;R>e.maxTextureSize&&(L=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const D=new Float32Array(R*L*4*f),G=new rh(D,R,L,f);G.type=vn,G.needsUpdate=!0;const M=T*4;for(let I=0;I<f;I++){const J=h[I],q=E[I],re=w[I],ee=R*L*4*I;for(let j=0;j<J.count;j++){const V=j*M;x===!0&&(r.fromBufferAttribute(J,j),D[ee+V+0]=r.x,D[ee+V+1]=r.y,D[ee+V+2]=r.z,D[ee+V+3]=0),_===!0&&(r.fromBufferAttribute(q,j),D[ee+V+4]=r.x,D[ee+V+5]=r.y,D[ee+V+6]=r.z,D[ee+V+7]=0),g===!0&&(r.fromBufferAttribute(re,j),D[ee+V+8]=r.x,D[ee+V+9]=r.y,D[ee+V+10]=r.z,D[ee+V+11]=re.itemSize===4?r.w:1)}}d={count:f,texture:G,size:new Je(R,L)},i.set(a,d),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let x=0;for(let g=0;g<c.length;g++)x+=c[g];const _=a.morphTargetsRelative?1:1-x;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function yx(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const bx={[Hf]:"LINEAR_TONE_MAPPING",[Gf]:"REINHARD_TONE_MAPPING",[kf]:"CINEON_TONE_MAPPING",[Wf]:"ACES_FILMIC_TONE_MAPPING",[qf]:"AGX_TONE_MAPPING",[Yf]:"NEUTRAL_TONE_MAPPING",[Xf]:"CUSTOM_TONE_MAPPING"};function Tx(n,e,t,i,r){const s=new yn(e,t,{type:n,depthBuffer:i,stencilBuffer:r}),o=new yn(e,t,{type:$n,depthBuffer:!1,stencilBuffer:!1}),a=new Zn;a.setAttribute("position",new Wn([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new Wn([0,2,0,0,2,0],2));const l=new mg({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new kt(a,l),u=new kl(-1,1,1,-1,0,1);let f=null,d=null,p=!1,x,_=null,g=[],h=!1;this.setSize=function(E,w){s.setSize(E,w),o.setSize(E,w);for(let T=0;T<g.length;T++){const R=g[T];R.setSize&&R.setSize(E,w)}},this.setEffects=function(E){g=E,h=g.length>0&&g[0].isRenderPass===!0;const w=s.width,T=s.height;for(let R=0;R<g.length;R++){const L=g[R];L.setSize&&L.setSize(w,T)}},this.begin=function(E,w){if(p||E.toneMapping===En&&g.length===0)return!1;if(_=w,w!==null){const T=w.width,R=w.height;(s.width!==T||s.height!==R)&&this.setSize(T,R)}return h===!1&&E.setRenderTarget(s),x=E.toneMapping,E.toneMapping=En,!0},this.hasRenderPass=function(){return h},this.end=function(E,w){E.toneMapping=x,p=!0;let T=s,R=o;for(let L=0;L<g.length;L++){const D=g[L];if(D.enabled!==!1&&(D.render(E,R,T,w),D.needsSwap!==!1)){const G=T;T=R,R=G}}if(f!==E.outputColorSpace||d!==E.toneMapping){f=E.outputColorSpace,d=E.toneMapping,l.defines={},je.getTransfer(f)===st&&(l.defines.SRGB_TRANSFER="");const L=bx[d];L&&(l.defines[L]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=T.texture,E.setRenderTarget(_),E.render(c,u),_=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){s.dispose(),o.dispose(),a.dispose(),l.dispose()}}const _h=new Ot,ll=new qr(1,1),xh=new rh,vh=new Xm,Sh=new hh,du=[],pu=[],mu=new Float32Array(16),gu=new Float32Array(9),_u=new Float32Array(4);function mr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=du[r];if(s===void 0&&(s=new Float32Array(r),du[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Mt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Et(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function so(n,e){let t=pu[e];t===void 0&&(t=new Int32Array(e),pu[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Ax(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function wx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;n.uniform2fv(this.addr,e),Et(t,e)}}function Rx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Mt(t,e))return;n.uniform3fv(this.addr,e),Et(t,e)}}function Cx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;n.uniform4fv(this.addr,e),Et(t,e)}}function Px(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Mt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Et(t,e)}else{if(Mt(t,i))return;_u.set(i),n.uniformMatrix2fv(this.addr,!1,_u),Et(t,i)}}function Dx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Mt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Et(t,e)}else{if(Mt(t,i))return;gu.set(i),n.uniformMatrix3fv(this.addr,!1,gu),Et(t,i)}}function Lx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Mt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Et(t,e)}else{if(Mt(t,i))return;mu.set(i),n.uniformMatrix4fv(this.addr,!1,mu),Et(t,i)}}function Ix(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Ux(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;n.uniform2iv(this.addr,e),Et(t,e)}}function Nx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;n.uniform3iv(this.addr,e),Et(t,e)}}function Fx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;n.uniform4iv(this.addr,e),Et(t,e)}}function Ox(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Bx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;n.uniform2uiv(this.addr,e),Et(t,e)}}function zx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;n.uniform3uiv(this.addr,e),Et(t,e)}}function Vx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;n.uniform4uiv(this.addr,e),Et(t,e)}}function Hx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(ll.compareFunction=t.isReversedDepthBuffer()?Bl:Ol,s=ll):s=_h,t.setTexture2D(e||s,r)}function Gx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||vh,r)}function kx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Sh,r)}function Wx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||xh,r)}function Xx(n){switch(n){case 5126:return Ax;case 35664:return wx;case 35665:return Rx;case 35666:return Cx;case 35674:return Px;case 35675:return Dx;case 35676:return Lx;case 5124:case 35670:return Ix;case 35667:case 35671:return Ux;case 35668:case 35672:return Nx;case 35669:case 35673:return Fx;case 5125:return Ox;case 36294:return Bx;case 36295:return zx;case 36296:return Vx;case 35678:case 36198:case 36298:case 36306:case 35682:return Hx;case 35679:case 36299:case 36307:return Gx;case 35680:case 36300:case 36308:case 36293:return kx;case 36289:case 36303:case 36311:case 36292:return Wx}}function qx(n,e){n.uniform1fv(this.addr,e)}function Yx(n,e){const t=mr(e,this.size,2);n.uniform2fv(this.addr,t)}function $x(n,e){const t=mr(e,this.size,3);n.uniform3fv(this.addr,t)}function Kx(n,e){const t=mr(e,this.size,4);n.uniform4fv(this.addr,t)}function jx(n,e){const t=mr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Zx(n,e){const t=mr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Jx(n,e){const t=mr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Qx(n,e){n.uniform1iv(this.addr,e)}function ev(n,e){n.uniform2iv(this.addr,e)}function tv(n,e){n.uniform3iv(this.addr,e)}function nv(n,e){n.uniform4iv(this.addr,e)}function iv(n,e){n.uniform1uiv(this.addr,e)}function rv(n,e){n.uniform2uiv(this.addr,e)}function sv(n,e){n.uniform3uiv(this.addr,e)}function ov(n,e){n.uniform4uiv(this.addr,e)}function av(n,e,t){const i=this.cache,r=e.length,s=so(t,r);Mt(i,s)||(n.uniform1iv(this.addr,s),Et(i,s));let o;this.type===n.SAMPLER_2D_SHADOW?o=ll:o=_h;for(let a=0;a!==r;++a)t.setTexture2D(e[a]||o,s[a])}function lv(n,e,t){const i=this.cache,r=e.length,s=so(t,r);Mt(i,s)||(n.uniform1iv(this.addr,s),Et(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||vh,s[o])}function cv(n,e,t){const i=this.cache,r=e.length,s=so(t,r);Mt(i,s)||(n.uniform1iv(this.addr,s),Et(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Sh,s[o])}function uv(n,e,t){const i=this.cache,r=e.length,s=so(t,r);Mt(i,s)||(n.uniform1iv(this.addr,s),Et(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||xh,s[o])}function fv(n){switch(n){case 5126:return qx;case 35664:return Yx;case 35665:return $x;case 35666:return Kx;case 35674:return jx;case 35675:return Zx;case 35676:return Jx;case 5124:case 35670:return Qx;case 35667:case 35671:return ev;case 35668:case 35672:return tv;case 35669:case 35673:return nv;case 5125:return iv;case 36294:return rv;case 36295:return sv;case 36296:return ov;case 35678:case 36198:case 36298:case 36306:case 35682:return av;case 35679:case 36299:case 36307:return lv;case 35680:case 36300:case 36308:case 36293:return cv;case 36289:case 36303:case 36311:case 36292:return uv}}class hv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Xx(t.type)}}class dv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=fv(t.type)}}class pv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Jo=/(\w+)(\])?(\[|\.)?/g;function xu(n,e){n.seq.push(e),n.map[e.id]=e}function mv(n,e,t){const i=n.name,r=i.length;for(Jo.lastIndex=0;;){const s=Jo.exec(i),o=Jo.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){xu(t,c===void 0?new hv(a,n,e):new dv(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new pv(a),xu(t,f)),t=f}}}class Is{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);mv(a,l,this)}const r=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function vu(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const gv=37297;let _v=0;function xv(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const Su=new Xe;function vv(n){je._getMatrix(Su,je.workingColorSpace,n);const e=`mat3( ${Su.elements.map(t=>t.toFixed(4))} )`;switch(je.getTransfer(n)){case Gs:return[e,"LinearTransferOETF"];case st:return[e,"sRGBTransferOETF"];default:return Ve("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Mu(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+xv(n.getShaderSource(e),a)}else return s}function Sv(n,e){const t=vv(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Mv={[Hf]:"Linear",[Gf]:"Reinhard",[kf]:"Cineon",[Wf]:"ACESFilmic",[qf]:"AgX",[Yf]:"Neutral",[Xf]:"Custom"};function Ev(n,e){const t=Mv[e];return t===void 0?(Ve("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Es=new z;function yv(){je.getLuminanceCoefficients(Es);const n=Es.x.toFixed(4),e=Es.y.toFixed(4),t=Es.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function bv(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Cr).join(`
`)}function Tv(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Av(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Cr(n){return n!==""}function Eu(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function yu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const wv=/^[ \t]*#include +<([\w\d./]+)>/gm;function cl(n){return n.replace(wv,Cv)}const Rv=new Map;function Cv(n,e){let t=qe[e];if(t===void 0){const i=Rv.get(e);if(i!==void 0)t=qe[i],Ve('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return cl(t)}const Pv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bu(n){return n.replace(Pv,Dv)}function Dv(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Tu(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Lv={[Rs]:"SHADOWMAP_TYPE_PCF",[Rr]:"SHADOWMAP_TYPE_VSM"};function Iv(n){return Lv[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Uv={[Ii]:"ENVMAP_TYPE_CUBE",[cr]:"ENVMAP_TYPE_CUBE",[no]:"ENVMAP_TYPE_CUBE_UV"};function Nv(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":Uv[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const Fv={[cr]:"ENVMAP_MODE_REFRACTION"};function Ov(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Fv[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Bv={[Vf]:"ENVMAP_BLENDING_MULTIPLY",[Am]:"ENVMAP_BLENDING_MIX",[wm]:"ENVMAP_BLENDING_ADD"};function zv(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Bv[n.combine]||"ENVMAP_BLENDING_NONE"}function Vv(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Hv(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Iv(t),c=Nv(t),u=Ov(t),f=zv(t),d=Vv(t),p=bv(t),x=Tv(s),_=r.createProgram();let g,h,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Cr).join(`
`),g.length>0&&(g+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Cr).join(`
`),h.length>0&&(h+=`
`)):(g=[Tu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Cr).join(`
`),h=[Tu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==En?"#define TONE_MAPPING":"",t.toneMapping!==En?qe.tonemapping_pars_fragment:"",t.toneMapping!==En?Ev("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,Sv("linearToOutputTexel",t.outputColorSpace),yv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Cr).join(`
`)),o=cl(o),o=Eu(o,t),o=yu(o,t),a=cl(a),a=Eu(a,t),a=yu(a,t),o=bu(o),a=bu(a),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,h=["#define varying in",t.glslVersion===Fc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Fc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const w=E+g+o,T=E+h+a,R=vu(r,r.VERTEX_SHADER,w),L=vu(r,r.FRAGMENT_SHADER,T);r.attachShader(_,R),r.attachShader(_,L),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function D(I){if(n.debug.checkShaderErrors){const J=r.getProgramInfoLog(_)||"",q=r.getShaderInfoLog(R)||"",re=r.getShaderInfoLog(L)||"",ee=J.trim(),j=q.trim(),V=re.trim();let te=!0,ge=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(te=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,R,L);else{const me=Mu(r,R,"vertex"),ve=Mu(r,L,"fragment");Ke("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+ee+`
`+me+`
`+ve)}else ee!==""?Ve("WebGLProgram: Program Info Log:",ee):(j===""||V==="")&&(ge=!1);ge&&(I.diagnostics={runnable:te,programLog:ee,vertexShader:{log:j,prefix:g},fragmentShader:{log:V,prefix:h}})}r.deleteShader(R),r.deleteShader(L),G=new Is(r,_),M=Av(r,_)}let G;this.getUniforms=function(){return G===void 0&&D(this),G};let M;this.getAttributes=function(){return M===void 0&&D(this),M};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(_,gv)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=_v++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=L,this}let Gv=0;class kv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Wv(e),t.set(e,i)),i}}class Wv{constructor(e){this.id=Gv++,this.code=e,this.usedTimes=0}}function Xv(n,e,t,i,r,s,o){const a=new Hl,l=new kv,c=new Set,u=[],f=new Map,d=r.logarithmicDepthBuffer;let p=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return c.add(M),M===0?"uv":`uv${M}`}function g(M,y,I,J,q){const re=J.fog,ee=q.geometry,j=M.isMeshStandardMaterial?J.environment:null,V=(M.isMeshStandardMaterial?t:e).get(M.envMap||j),te=V&&V.mapping===no?V.image.height:null,ge=x[M.type];M.precision!==null&&(p=r.getMaxPrecision(M.precision),p!==M.precision&&Ve("WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const me=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,ve=me!==void 0?me.length:0;let Oe=0;ee.morphAttributes.position!==void 0&&(Oe=1),ee.morphAttributes.normal!==void 0&&(Oe=2),ee.morphAttributes.color!==void 0&&(Oe=3);let He,ut,ot,N;if(ge){const it=xn[ge];He=it.vertexShader,ut=it.fragmentShader}else He=M.vertexShader,ut=M.fragmentShader,l.update(M),ot=l.getVertexShaderID(M),N=l.getFragmentShaderID(M);const F=n.getRenderTarget(),$=n.state.buffers.depth.getReversed(),ce=q.isInstancedMesh===!0,se=q.isBatchedMesh===!0,Pe=!!M.map,A=!!M.matcap,C=!!V,B=!!M.aoMap,Z=!!M.lightMap,X=!!M.bumpMap,ne=!!M.normalMap,b=!!M.displacementMap,ue=!!M.emissiveMap,oe=!!M.metalnessMap,ie=!!M.roughnessMap,ae=M.anisotropy>0,v=M.clearcoat>0,m=M.dispersion>0,P=M.iridescence>0,W=M.sheen>0,Q=M.transmission>0,k=ae&&!!M.anisotropyMap,be=v&&!!M.clearcoatMap,he=v&&!!M.clearcoatNormalMap,we=v&&!!M.clearcoatRoughnessMap,Ie=P&&!!M.iridescenceMap,fe=P&&!!M.iridescenceThicknessMap,xe=W&&!!M.sheenColorMap,Me=W&&!!M.sheenRoughnessMap,Re=!!M.specularMap,_e=!!M.specularColorMap,Ge=!!M.specularIntensityMap,U=Q&&!!M.transmissionMap,Ae=Q&&!!M.thicknessMap,pe=!!M.gradientMap,Ce=!!M.alphaMap,de=M.alphaTest>0,le=!!M.alphaHash,Se=!!M.extensions;let ze=En;M.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(ze=n.toneMapping);const ft={shaderID:ge,shaderType:M.type,shaderName:M.name,vertexShader:He,fragmentShader:ut,defines:M.defines,customVertexShaderID:ot,customFragmentShaderID:N,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:se,batchingColor:se&&q._colorsTexture!==null,instancing:ce,instancingColor:ce&&q.instanceColor!==null,instancingMorph:ce&&q.morphTexture!==null,outputColorSpace:F===null?n.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:fr,alphaToCoverage:!!M.alphaToCoverage,map:Pe,matcap:A,envMap:C,envMapMode:C&&V.mapping,envMapCubeUVHeight:te,aoMap:B,lightMap:Z,bumpMap:X,normalMap:ne,displacementMap:b,emissiveMap:ue,normalMapObjectSpace:ne&&M.normalMapType===Pm,normalMapTangentSpace:ne&&M.normalMapType===nh,metalnessMap:oe,roughnessMap:ie,anisotropy:ae,anisotropyMap:k,clearcoat:v,clearcoatMap:be,clearcoatNormalMap:he,clearcoatRoughnessMap:we,dispersion:m,iridescence:P,iridescenceMap:Ie,iridescenceThicknessMap:fe,sheen:W,sheenColorMap:xe,sheenRoughnessMap:Me,specularMap:Re,specularColorMap:_e,specularIntensityMap:Ge,transmission:Q,transmissionMap:U,thicknessMap:Ae,gradientMap:pe,opaque:M.transparent===!1&&M.blending===sr&&M.alphaToCoverage===!1,alphaMap:Ce,alphaTest:de,alphaHash:le,combine:M.combine,mapUv:Pe&&_(M.map.channel),aoMapUv:B&&_(M.aoMap.channel),lightMapUv:Z&&_(M.lightMap.channel),bumpMapUv:X&&_(M.bumpMap.channel),normalMapUv:ne&&_(M.normalMap.channel),displacementMapUv:b&&_(M.displacementMap.channel),emissiveMapUv:ue&&_(M.emissiveMap.channel),metalnessMapUv:oe&&_(M.metalnessMap.channel),roughnessMapUv:ie&&_(M.roughnessMap.channel),anisotropyMapUv:k&&_(M.anisotropyMap.channel),clearcoatMapUv:be&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:he&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:we&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Ie&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:fe&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:Me&&_(M.sheenRoughnessMap.channel),specularMapUv:Re&&_(M.specularMap.channel),specularColorMapUv:_e&&_(M.specularColorMap.channel),specularIntensityMapUv:Ge&&_(M.specularIntensityMap.channel),transmissionMapUv:U&&_(M.transmissionMap.channel),thicknessMapUv:Ae&&_(M.thicknessMap.channel),alphaMapUv:Ce&&_(M.alphaMap.channel),vertexTangents:!!ee.attributes.tangent&&(ne||ae),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!ee.attributes.uv&&(Pe||Ce),fog:!!re,useFog:M.fog===!0,fogExp2:!!re&&re.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:$,skinning:q.isSkinnedMesh===!0,morphTargets:ee.morphAttributes.position!==void 0,morphNormals:ee.morphAttributes.normal!==void 0,morphColors:ee.morphAttributes.color!==void 0,morphTargetsCount:ve,morphTextureStride:Oe,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:ze,decodeVideoTexture:Pe&&M.map.isVideoTexture===!0&&je.getTransfer(M.map.colorSpace)===st,decodeVideoTextureEmissive:ue&&M.emissiveMap.isVideoTexture===!0&&je.getTransfer(M.emissiveMap.colorSpace)===st,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===zn,flipSided:M.side===Wt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Se&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Se&&M.extensions.multiDraw===!0||se)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return ft.vertexUv1s=c.has(1),ft.vertexUv2s=c.has(2),ft.vertexUv3s=c.has(3),c.clear(),ft}function h(M){const y=[];if(M.shaderID?y.push(M.shaderID):(y.push(M.customVertexShaderID),y.push(M.customFragmentShaderID)),M.defines!==void 0)for(const I in M.defines)y.push(I),y.push(M.defines[I]);return M.isRawShaderMaterial===!1&&(E(y,M),w(y,M),y.push(n.outputColorSpace)),y.push(M.customProgramCacheKey),y.join()}function E(M,y){M.push(y.precision),M.push(y.outputColorSpace),M.push(y.envMapMode),M.push(y.envMapCubeUVHeight),M.push(y.mapUv),M.push(y.alphaMapUv),M.push(y.lightMapUv),M.push(y.aoMapUv),M.push(y.bumpMapUv),M.push(y.normalMapUv),M.push(y.displacementMapUv),M.push(y.emissiveMapUv),M.push(y.metalnessMapUv),M.push(y.roughnessMapUv),M.push(y.anisotropyMapUv),M.push(y.clearcoatMapUv),M.push(y.clearcoatNormalMapUv),M.push(y.clearcoatRoughnessMapUv),M.push(y.iridescenceMapUv),M.push(y.iridescenceThicknessMapUv),M.push(y.sheenColorMapUv),M.push(y.sheenRoughnessMapUv),M.push(y.specularMapUv),M.push(y.specularColorMapUv),M.push(y.specularIntensityMapUv),M.push(y.transmissionMapUv),M.push(y.thicknessMapUv),M.push(y.combine),M.push(y.fogExp2),M.push(y.sizeAttenuation),M.push(y.morphTargetsCount),M.push(y.morphAttributeCount),M.push(y.numDirLights),M.push(y.numPointLights),M.push(y.numSpotLights),M.push(y.numSpotLightMaps),M.push(y.numHemiLights),M.push(y.numRectAreaLights),M.push(y.numDirLightShadows),M.push(y.numPointLightShadows),M.push(y.numSpotLightShadows),M.push(y.numSpotLightShadowsWithMaps),M.push(y.numLightProbes),M.push(y.shadowMapType),M.push(y.toneMapping),M.push(y.numClippingPlanes),M.push(y.numClipIntersection),M.push(y.depthPacking)}function w(M,y){a.disableAll(),y.instancing&&a.enable(0),y.instancingColor&&a.enable(1),y.instancingMorph&&a.enable(2),y.matcap&&a.enable(3),y.envMap&&a.enable(4),y.normalMapObjectSpace&&a.enable(5),y.normalMapTangentSpace&&a.enable(6),y.clearcoat&&a.enable(7),y.iridescence&&a.enable(8),y.alphaTest&&a.enable(9),y.vertexColors&&a.enable(10),y.vertexAlphas&&a.enable(11),y.vertexUv1s&&a.enable(12),y.vertexUv2s&&a.enable(13),y.vertexUv3s&&a.enable(14),y.vertexTangents&&a.enable(15),y.anisotropy&&a.enable(16),y.alphaHash&&a.enable(17),y.batching&&a.enable(18),y.dispersion&&a.enable(19),y.batchingColor&&a.enable(20),y.gradientMap&&a.enable(21),M.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reversedDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),M.push(a.mask)}function T(M){const y=x[M.type];let I;if(y){const J=xn[y];I=rg.clone(J.uniforms)}else I=M.uniforms;return I}function R(M,y){let I=f.get(y);return I!==void 0?++I.usedTimes:(I=new Hv(n,y,M,s),u.push(I),f.set(y,I)),I}function L(M){if(--M.usedTimes===0){const y=u.indexOf(M);u[y]=u[u.length-1],u.pop(),f.delete(M.cacheKey),M.destroy()}}function D(M){l.remove(M)}function G(){l.dispose()}return{getParameters:g,getProgramCacheKey:h,getUniforms:T,acquireProgram:R,releaseProgram:L,releaseShaderCache:D,programs:u,dispose:G}}function qv(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function Yv(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Au(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function wu(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,d,p,x,_,g){let h=n[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:p,groupOrder:x,renderOrder:f.renderOrder,z:_,group:g},n[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=p,h.groupOrder=x,h.renderOrder=f.renderOrder,h.z=_,h.group=g),e++,h}function a(f,d,p,x,_,g){const h=o(f,d,p,x,_,g);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):t.push(h)}function l(f,d,p,x,_,g){const h=o(f,d,p,x,_,g);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):t.unshift(h)}function c(f,d){t.length>1&&t.sort(f||Yv),i.length>1&&i.sort(d||Au),r.length>1&&r.sort(d||Au)}function u(){for(let f=e,d=n.length;f<d;f++){const p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function $v(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new wu,n.set(i,[o])):r>=s.length?(o=new wu,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Kv(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new Ze};break;case"SpotLight":t={position:new z,direction:new z,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":t={color:new Ze,position:new z,halfWidth:new z,halfHeight:new z};break}return n[e.id]=t,t}}}function jv(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Zv=0;function Jv(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Qv(n){const e=new Kv,t=jv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new z);const r=new z,s=new pt,o=new pt;function a(c){let u=0,f=0,d=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let p=0,x=0,_=0,g=0,h=0,E=0,w=0,T=0,R=0,L=0,D=0;c.sort(Jv);for(let M=0,y=c.length;M<y;M++){const I=c[M],J=I.color,q=I.intensity,re=I.distance;let ee=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===ur?ee=I.shadow.map.texture:ee=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)u+=J.r*q,f+=J.g*q,d+=J.b*q;else if(I.isLightProbe){for(let j=0;j<9;j++)i.probe[j].addScaledVector(I.sh.coefficients[j],q);D++}else if(I.isDirectionalLight){const j=e.get(I);if(j.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const V=I.shadow,te=t.get(I);te.shadowIntensity=V.intensity,te.shadowBias=V.bias,te.shadowNormalBias=V.normalBias,te.shadowRadius=V.radius,te.shadowMapSize=V.mapSize,i.directionalShadow[p]=te,i.directionalShadowMap[p]=ee,i.directionalShadowMatrix[p]=I.shadow.matrix,E++}i.directional[p]=j,p++}else if(I.isSpotLight){const j=e.get(I);j.position.setFromMatrixPosition(I.matrixWorld),j.color.copy(J).multiplyScalar(q),j.distance=re,j.coneCos=Math.cos(I.angle),j.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),j.decay=I.decay,i.spot[_]=j;const V=I.shadow;if(I.map&&(i.spotLightMap[R]=I.map,R++,V.updateMatrices(I),I.castShadow&&L++),i.spotLightMatrix[_]=V.matrix,I.castShadow){const te=t.get(I);te.shadowIntensity=V.intensity,te.shadowBias=V.bias,te.shadowNormalBias=V.normalBias,te.shadowRadius=V.radius,te.shadowMapSize=V.mapSize,i.spotShadow[_]=te,i.spotShadowMap[_]=ee,T++}_++}else if(I.isRectAreaLight){const j=e.get(I);j.color.copy(J).multiplyScalar(q),j.halfWidth.set(I.width*.5,0,0),j.halfHeight.set(0,I.height*.5,0),i.rectArea[g]=j,g++}else if(I.isPointLight){const j=e.get(I);if(j.color.copy(I.color).multiplyScalar(I.intensity),j.distance=I.distance,j.decay=I.decay,I.castShadow){const V=I.shadow,te=t.get(I);te.shadowIntensity=V.intensity,te.shadowBias=V.bias,te.shadowNormalBias=V.normalBias,te.shadowRadius=V.radius,te.shadowMapSize=V.mapSize,te.shadowCameraNear=V.camera.near,te.shadowCameraFar=V.camera.far,i.pointShadow[x]=te,i.pointShadowMap[x]=ee,i.pointShadowMatrix[x]=I.shadow.matrix,w++}i.point[x]=j,x++}else if(I.isHemisphereLight){const j=e.get(I);j.skyColor.copy(I.color).multiplyScalar(q),j.groundColor.copy(I.groundColor).multiplyScalar(q),i.hemi[h]=j,h++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ye.LTC_FLOAT_1,i.rectAreaLTC2=ye.LTC_FLOAT_2):(i.rectAreaLTC1=ye.LTC_HALF_1,i.rectAreaLTC2=ye.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;const G=i.hash;(G.directionalLength!==p||G.pointLength!==x||G.spotLength!==_||G.rectAreaLength!==g||G.hemiLength!==h||G.numDirectionalShadows!==E||G.numPointShadows!==w||G.numSpotShadows!==T||G.numSpotMaps!==R||G.numLightProbes!==D)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=g,i.point.length=x,i.hemi.length=h,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=T+R-L,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=L,i.numLightProbes=D,G.directionalLength=p,G.pointLength=x,G.spotLength=_,G.rectAreaLength=g,G.hemiLength=h,G.numDirectionalShadows=E,G.numPointShadows=w,G.numSpotShadows=T,G.numSpotMaps=R,G.numLightProbes=D,i.version=Zv++)}function l(c,u){let f=0,d=0,p=0,x=0,_=0;const g=u.matrixWorldInverse;for(let h=0,E=c.length;h<E;h++){const w=c[h];if(w.isDirectionalLight){const T=i.directional[f];T.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(g),f++}else if(w.isSpotLight){const T=i.spot[p];T.position.setFromMatrixPosition(w.matrixWorld),T.position.applyMatrix4(g),T.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(g),p++}else if(w.isRectAreaLight){const T=i.rectArea[x];T.position.setFromMatrixPosition(w.matrixWorld),T.position.applyMatrix4(g),o.identity(),s.copy(w.matrixWorld),s.premultiply(g),o.extractRotation(s),T.halfWidth.set(w.width*.5,0,0),T.halfHeight.set(0,w.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),x++}else if(w.isPointLight){const T=i.point[d];T.position.setFromMatrixPosition(w.matrixWorld),T.position.applyMatrix4(g),d++}else if(w.isHemisphereLight){const T=i.hemi[_];T.direction.setFromMatrixPosition(w.matrixWorld),T.direction.transformDirection(g),_++}}}return{setup:a,setupView:l,state:i}}function Ru(n){const e=new Qv(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function eS(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Ru(n),e.set(r,[a])):s>=o.length?(a=new Ru(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const tS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,nS=`uniform sampler2D shadow_pass;
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
}`,iS=[new z(1,0,0),new z(-1,0,0),new z(0,1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1)],rS=[new z(0,-1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1),new z(0,-1,0),new z(0,-1,0)],Cu=new pt,Tr=new z,Qo=new z;function sS(n,e,t){let i=new Gl;const r=new Je,s=new Je,o=new xt,a=new _g,l=new xg,c={},u=t.maxTextureSize,f={[pi]:Wt,[Wt]:pi,[zn]:zn},d=new Rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Je},radius:{value:4}},vertexShader:tS,fragmentShader:nS}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const x=new Zn;x.setAttribute("position",new bn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new kt(x,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Rs;let h=this.type;this.render=function(L,D,G){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||L.length===0)return;L.type===am&&(Ve("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),L.type=Rs);const M=n.getRenderTarget(),y=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),J=n.state;J.setBlending(Gn),J.buffers.depth.getReversed()===!0?J.buffers.color.setClear(0,0,0,0):J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);const q=h!==this.type;q&&D.traverse(function(re){re.material&&(Array.isArray(re.material)?re.material.forEach(ee=>ee.needsUpdate=!0):re.material.needsUpdate=!0)});for(let re=0,ee=L.length;re<ee;re++){const j=L[re],V=j.shadow;if(V===void 0){Ve("WebGLShadowMap:",j,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const te=V.getFrameExtents();if(r.multiply(te),s.copy(V.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/te.x),r.x=s.x*te.x,V.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/te.y),r.y=s.y*te.y,V.mapSize.y=s.y)),V.map===null||q===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===Rr){if(j.isPointLight){Ve("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new yn(r.x,r.y,{format:ur,type:$n,minFilter:Ct,magFilter:Ct,generateMipmaps:!1}),V.map.texture.name=j.name+".shadowMap",V.map.depthTexture=new qr(r.x,r.y,vn),V.map.depthTexture.name=j.name+".shadowMapDepth",V.map.depthTexture.format=Kn,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=bt,V.map.depthTexture.magFilter=bt}else{j.isPointLight?(V.map=new dh(r.x),V.map.depthTexture=new pg(r.x,An)):(V.map=new yn(r.x,r.y),V.map.depthTexture=new qr(r.x,r.y,An)),V.map.depthTexture.name=j.name+".shadowMap",V.map.depthTexture.format=Kn;const me=n.state.buffers.depth.getReversed();this.type===Rs?(V.map.depthTexture.compareFunction=me?Bl:Ol,V.map.depthTexture.minFilter=Ct,V.map.depthTexture.magFilter=Ct):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=bt,V.map.depthTexture.magFilter=bt)}V.camera.updateProjectionMatrix()}const ge=V.map.isWebGLCubeRenderTarget?6:1;for(let me=0;me<ge;me++){if(V.map.isWebGLCubeRenderTarget)n.setRenderTarget(V.map,me),n.clear();else{me===0&&(n.setRenderTarget(V.map),n.clear());const ve=V.getViewport(me);o.set(s.x*ve.x,s.y*ve.y,s.x*ve.z,s.y*ve.w),J.viewport(o)}if(j.isPointLight){const ve=V.camera,Oe=V.matrix,He=j.distance||ve.far;He!==ve.far&&(ve.far=He,ve.updateProjectionMatrix()),Tr.setFromMatrixPosition(j.matrixWorld),ve.position.copy(Tr),Qo.copy(ve.position),Qo.add(iS[me]),ve.up.copy(rS[me]),ve.lookAt(Qo),ve.updateMatrixWorld(),Oe.makeTranslation(-Tr.x,-Tr.y,-Tr.z),Cu.multiplyMatrices(ve.projectionMatrix,ve.matrixWorldInverse),V._frustum.setFromProjectionMatrix(Cu,ve.coordinateSystem,ve.reversedDepth)}else V.updateMatrices(j);i=V.getFrustum(),T(D,G,V.camera,j,this.type)}V.isPointLightShadow!==!0&&this.type===Rr&&E(V,G),V.needsUpdate=!1}h=this.type,g.needsUpdate=!1,n.setRenderTarget(M,y,I)};function E(L,D){const G=e.update(_);d.defines.VSM_SAMPLES!==L.blurSamples&&(d.defines.VSM_SAMPLES=L.blurSamples,p.defines.VSM_SAMPLES=L.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new yn(r.x,r.y,{format:ur,type:$n})),d.uniforms.shadow_pass.value=L.map.depthTexture,d.uniforms.resolution.value=L.mapSize,d.uniforms.radius.value=L.radius,n.setRenderTarget(L.mapPass),n.clear(),n.renderBufferDirect(D,null,G,d,_,null),p.uniforms.shadow_pass.value=L.mapPass.texture,p.uniforms.resolution.value=L.mapSize,p.uniforms.radius.value=L.radius,n.setRenderTarget(L.map),n.clear(),n.renderBufferDirect(D,null,G,p,_,null)}function w(L,D,G,M){let y=null;const I=G.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(I!==void 0)y=I;else if(y=G.isPointLight===!0?l:a,n.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){const J=y.uuid,q=D.uuid;let re=c[J];re===void 0&&(re={},c[J]=re);let ee=re[q];ee===void 0&&(ee=y.clone(),re[q]=ee,D.addEventListener("dispose",R)),y=ee}if(y.visible=D.visible,y.wireframe=D.wireframe,M===Rr?y.side=D.shadowSide!==null?D.shadowSide:D.side:y.side=D.shadowSide!==null?D.shadowSide:f[D.side],y.alphaMap=D.alphaMap,y.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,y.map=D.map,y.clipShadows=D.clipShadows,y.clippingPlanes=D.clippingPlanes,y.clipIntersection=D.clipIntersection,y.displacementMap=D.displacementMap,y.displacementScale=D.displacementScale,y.displacementBias=D.displacementBias,y.wireframeLinewidth=D.wireframeLinewidth,y.linewidth=D.linewidth,G.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const J=n.properties.get(y);J.light=G}return y}function T(L,D,G,M,y){if(L.visible===!1)return;if(L.layers.test(D.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&y===Rr)&&(!L.frustumCulled||i.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,L.matrixWorld);const q=e.update(L),re=L.material;if(Array.isArray(re)){const ee=q.groups;for(let j=0,V=ee.length;j<V;j++){const te=ee[j],ge=re[te.materialIndex];if(ge&&ge.visible){const me=w(L,ge,M,y);L.onBeforeShadow(n,L,D,G,q,me,te),n.renderBufferDirect(G,null,q,me,L,te),L.onAfterShadow(n,L,D,G,q,me,te)}}}else if(re.visible){const ee=w(L,re,M,y);L.onBeforeShadow(n,L,D,G,q,ee,null),n.renderBufferDirect(G,null,q,ee,L,null),L.onAfterShadow(n,L,D,G,q,ee,null)}}const J=L.children;for(let q=0,re=J.length;q<re;q++)T(J[q],D,G,M,y)}function R(L){L.target.removeEventListener("dispose",R);for(const G in c){const M=c[G],y=L.target.uuid;y in M&&(M[y].dispose(),delete M[y])}}}const oS={[_a]:xa,[va]:Ea,[Sa]:ya,[lr]:Ma,[xa]:_a,[Ea]:va,[ya]:Sa,[Ma]:lr};function aS(n,e){function t(){let U=!1;const Ae=new xt;let pe=null;const Ce=new xt(0,0,0,0);return{setMask:function(de){pe!==de&&!U&&(n.colorMask(de,de,de,de),pe=de)},setLocked:function(de){U=de},setClear:function(de,le,Se,ze,ft){ft===!0&&(de*=ze,le*=ze,Se*=ze),Ae.set(de,le,Se,ze),Ce.equals(Ae)===!1&&(n.clearColor(de,le,Se,ze),Ce.copy(Ae))},reset:function(){U=!1,pe=null,Ce.set(-1,0,0,0)}}}function i(){let U=!1,Ae=!1,pe=null,Ce=null,de=null;return{setReversed:function(le){if(Ae!==le){const Se=e.get("EXT_clip_control");le?Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.ZERO_TO_ONE_EXT):Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.NEGATIVE_ONE_TO_ONE_EXT),Ae=le;const ze=de;de=null,this.setClear(ze)}},getReversed:function(){return Ae},setTest:function(le){le?F(n.DEPTH_TEST):$(n.DEPTH_TEST)},setMask:function(le){pe!==le&&!U&&(n.depthMask(le),pe=le)},setFunc:function(le){if(Ae&&(le=oS[le]),Ce!==le){switch(le){case _a:n.depthFunc(n.NEVER);break;case xa:n.depthFunc(n.ALWAYS);break;case va:n.depthFunc(n.LESS);break;case lr:n.depthFunc(n.LEQUAL);break;case Sa:n.depthFunc(n.EQUAL);break;case Ma:n.depthFunc(n.GEQUAL);break;case Ea:n.depthFunc(n.GREATER);break;case ya:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ce=le}},setLocked:function(le){U=le},setClear:function(le){de!==le&&(Ae&&(le=1-le),n.clearDepth(le),de=le)},reset:function(){U=!1,pe=null,Ce=null,de=null,Ae=!1}}}function r(){let U=!1,Ae=null,pe=null,Ce=null,de=null,le=null,Se=null,ze=null,ft=null;return{setTest:function(it){U||(it?F(n.STENCIL_TEST):$(n.STENCIL_TEST))},setMask:function(it){Ae!==it&&!U&&(n.stencilMask(it),Ae=it)},setFunc:function(it,hn,Cn){(pe!==it||Ce!==hn||de!==Cn)&&(n.stencilFunc(it,hn,Cn),pe=it,Ce=hn,de=Cn)},setOp:function(it,hn,Cn){(le!==it||Se!==hn||ze!==Cn)&&(n.stencilOp(it,hn,Cn),le=it,Se=hn,ze=Cn)},setLocked:function(it){U=it},setClear:function(it){ft!==it&&(n.clearStencil(it),ft=it)},reset:function(){U=!1,Ae=null,pe=null,Ce=null,de=null,le=null,Se=null,ze=null,ft=null}}}const s=new t,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},f={},d=new WeakMap,p=[],x=null,_=!1,g=null,h=null,E=null,w=null,T=null,R=null,L=null,D=new Ze(0,0,0),G=0,M=!1,y=null,I=null,J=null,q=null,re=null;const ee=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,V=0;const te=n.getParameter(n.VERSION);te.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(te)[1]),j=V>=1):te.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),j=V>=2);let ge=null,me={};const ve=n.getParameter(n.SCISSOR_BOX),Oe=n.getParameter(n.VIEWPORT),He=new xt().fromArray(ve),ut=new xt().fromArray(Oe);function ot(U,Ae,pe,Ce){const de=new Uint8Array(4),le=n.createTexture();n.bindTexture(U,le),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Se=0;Se<pe;Se++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(Ae,0,n.RGBA,1,1,Ce,0,n.RGBA,n.UNSIGNED_BYTE,de):n.texImage2D(Ae+Se,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,de);return le}const N={};N[n.TEXTURE_2D]=ot(n.TEXTURE_2D,n.TEXTURE_2D,1),N[n.TEXTURE_CUBE_MAP]=ot(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),N[n.TEXTURE_2D_ARRAY]=ot(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),N[n.TEXTURE_3D]=ot(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),F(n.DEPTH_TEST),o.setFunc(lr),X(!1),ne(Pc),F(n.CULL_FACE),B(Gn);function F(U){u[U]!==!0&&(n.enable(U),u[U]=!0)}function $(U){u[U]!==!1&&(n.disable(U),u[U]=!1)}function ce(U,Ae){return f[U]!==Ae?(n.bindFramebuffer(U,Ae),f[U]=Ae,U===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=Ae),U===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=Ae),!0):!1}function se(U,Ae){let pe=p,Ce=!1;if(U){pe=d.get(Ae),pe===void 0&&(pe=[],d.set(Ae,pe));const de=U.textures;if(pe.length!==de.length||pe[0]!==n.COLOR_ATTACHMENT0){for(let le=0,Se=de.length;le<Se;le++)pe[le]=n.COLOR_ATTACHMENT0+le;pe.length=de.length,Ce=!0}}else pe[0]!==n.BACK&&(pe[0]=n.BACK,Ce=!0);Ce&&n.drawBuffers(pe)}function Pe(U){return x!==U?(n.useProgram(U),x=U,!0):!1}const A={[Ri]:n.FUNC_ADD,[cm]:n.FUNC_SUBTRACT,[um]:n.FUNC_REVERSE_SUBTRACT};A[fm]=n.MIN,A[hm]=n.MAX;const C={[dm]:n.ZERO,[pm]:n.ONE,[mm]:n.SRC_COLOR,[ma]:n.SRC_ALPHA,[Mm]:n.SRC_ALPHA_SATURATE,[vm]:n.DST_COLOR,[_m]:n.DST_ALPHA,[gm]:n.ONE_MINUS_SRC_COLOR,[ga]:n.ONE_MINUS_SRC_ALPHA,[Sm]:n.ONE_MINUS_DST_COLOR,[xm]:n.ONE_MINUS_DST_ALPHA,[Em]:n.CONSTANT_COLOR,[ym]:n.ONE_MINUS_CONSTANT_COLOR,[bm]:n.CONSTANT_ALPHA,[Tm]:n.ONE_MINUS_CONSTANT_ALPHA};function B(U,Ae,pe,Ce,de,le,Se,ze,ft,it){if(U===Gn){_===!0&&($(n.BLEND),_=!1);return}if(_===!1&&(F(n.BLEND),_=!0),U!==lm){if(U!==g||it!==M){if((h!==Ri||T!==Ri)&&(n.blendEquation(n.FUNC_ADD),h=Ri,T=Ri),it)switch(U){case sr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Dc:n.blendFunc(n.ONE,n.ONE);break;case Lc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ic:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Ke("WebGLState: Invalid blending: ",U);break}else switch(U){case sr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Dc:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Lc:Ke("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ic:Ke("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ke("WebGLState: Invalid blending: ",U);break}E=null,w=null,R=null,L=null,D.set(0,0,0),G=0,g=U,M=it}return}de=de||Ae,le=le||pe,Se=Se||Ce,(Ae!==h||de!==T)&&(n.blendEquationSeparate(A[Ae],A[de]),h=Ae,T=de),(pe!==E||Ce!==w||le!==R||Se!==L)&&(n.blendFuncSeparate(C[pe],C[Ce],C[le],C[Se]),E=pe,w=Ce,R=le,L=Se),(ze.equals(D)===!1||ft!==G)&&(n.blendColor(ze.r,ze.g,ze.b,ft),D.copy(ze),G=ft),g=U,M=!1}function Z(U,Ae){U.side===zn?$(n.CULL_FACE):F(n.CULL_FACE);let pe=U.side===Wt;Ae&&(pe=!pe),X(pe),U.blending===sr&&U.transparent===!1?B(Gn):B(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),s.setMask(U.colorWrite);const Ce=U.stencilWrite;a.setTest(Ce),Ce&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),ue(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?F(n.SAMPLE_ALPHA_TO_COVERAGE):$(n.SAMPLE_ALPHA_TO_COVERAGE)}function X(U){y!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),y=U)}function ne(U){U!==sm?(F(n.CULL_FACE),U!==I&&(U===Pc?n.cullFace(n.BACK):U===om?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):$(n.CULL_FACE),I=U}function b(U){U!==J&&(j&&n.lineWidth(U),J=U)}function ue(U,Ae,pe){U?(F(n.POLYGON_OFFSET_FILL),(q!==Ae||re!==pe)&&(n.polygonOffset(Ae,pe),q=Ae,re=pe)):$(n.POLYGON_OFFSET_FILL)}function oe(U){U?F(n.SCISSOR_TEST):$(n.SCISSOR_TEST)}function ie(U){U===void 0&&(U=n.TEXTURE0+ee-1),ge!==U&&(n.activeTexture(U),ge=U)}function ae(U,Ae,pe){pe===void 0&&(ge===null?pe=n.TEXTURE0+ee-1:pe=ge);let Ce=me[pe];Ce===void 0&&(Ce={type:void 0,texture:void 0},me[pe]=Ce),(Ce.type!==U||Ce.texture!==Ae)&&(ge!==pe&&(n.activeTexture(pe),ge=pe),n.bindTexture(U,Ae||N[U]),Ce.type=U,Ce.texture=Ae)}function v(){const U=me[ge];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function m(){try{n.compressedTexImage2D(...arguments)}catch(U){Ke("WebGLState:",U)}}function P(){try{n.compressedTexImage3D(...arguments)}catch(U){Ke("WebGLState:",U)}}function W(){try{n.texSubImage2D(...arguments)}catch(U){Ke("WebGLState:",U)}}function Q(){try{n.texSubImage3D(...arguments)}catch(U){Ke("WebGLState:",U)}}function k(){try{n.compressedTexSubImage2D(...arguments)}catch(U){Ke("WebGLState:",U)}}function be(){try{n.compressedTexSubImage3D(...arguments)}catch(U){Ke("WebGLState:",U)}}function he(){try{n.texStorage2D(...arguments)}catch(U){Ke("WebGLState:",U)}}function we(){try{n.texStorage3D(...arguments)}catch(U){Ke("WebGLState:",U)}}function Ie(){try{n.texImage2D(...arguments)}catch(U){Ke("WebGLState:",U)}}function fe(){try{n.texImage3D(...arguments)}catch(U){Ke("WebGLState:",U)}}function xe(U){He.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),He.copy(U))}function Me(U){ut.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),ut.copy(U))}function Re(U,Ae){let pe=c.get(Ae);pe===void 0&&(pe=new WeakMap,c.set(Ae,pe));let Ce=pe.get(U);Ce===void 0&&(Ce=n.getUniformBlockIndex(Ae,U.name),pe.set(U,Ce))}function _e(U,Ae){const Ce=c.get(Ae).get(U);l.get(Ae)!==Ce&&(n.uniformBlockBinding(Ae,Ce,U.__bindingPointIndex),l.set(Ae,Ce))}function Ge(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},ge=null,me={},f={},d=new WeakMap,p=[],x=null,_=!1,g=null,h=null,E=null,w=null,T=null,R=null,L=null,D=new Ze(0,0,0),G=0,M=!1,y=null,I=null,J=null,q=null,re=null,He.set(0,0,n.canvas.width,n.canvas.height),ut.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:F,disable:$,bindFramebuffer:ce,drawBuffers:se,useProgram:Pe,setBlending:B,setMaterial:Z,setFlipSided:X,setCullFace:ne,setLineWidth:b,setPolygonOffset:ue,setScissorTest:oe,activeTexture:ie,bindTexture:ae,unbindTexture:v,compressedTexImage2D:m,compressedTexImage3D:P,texImage2D:Ie,texImage3D:fe,updateUBOMapping:Re,uniformBlockBinding:_e,texStorage2D:he,texStorage3D:we,texSubImage2D:W,texSubImage3D:Q,compressedTexSubImage2D:k,compressedTexSubImage3D:be,scissor:xe,viewport:Me,reset:Ge}}function lS(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Je,u=new WeakMap;let f;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(v,m){return p?new OffscreenCanvas(v,m):Ws("canvas")}function _(v,m,P){let W=1;const Q=ae(v);if((Q.width>P||Q.height>P)&&(W=P/Math.max(Q.width,Q.height)),W<1)if(typeof HTMLImageElement<"u"&&v instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&v instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&v instanceof ImageBitmap||typeof VideoFrame<"u"&&v instanceof VideoFrame){const k=Math.floor(W*Q.width),be=Math.floor(W*Q.height);f===void 0&&(f=x(k,be));const he=m?x(k,be):f;return he.width=k,he.height=be,he.getContext("2d").drawImage(v,0,0,k,be),Ve("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+k+"x"+be+")."),he}else return"data"in v&&Ve("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),v;return v}function g(v){return v.generateMipmaps}function h(v){n.generateMipmap(v)}function E(v){return v.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:v.isWebGL3DRenderTarget?n.TEXTURE_3D:v.isWebGLArrayRenderTarget||v.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function w(v,m,P,W,Q=!1){if(v!==null){if(n[v]!==void 0)return n[v];Ve("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+v+"'")}let k=m;if(m===n.RED&&(P===n.FLOAT&&(k=n.R32F),P===n.HALF_FLOAT&&(k=n.R16F),P===n.UNSIGNED_BYTE&&(k=n.R8)),m===n.RED_INTEGER&&(P===n.UNSIGNED_BYTE&&(k=n.R8UI),P===n.UNSIGNED_SHORT&&(k=n.R16UI),P===n.UNSIGNED_INT&&(k=n.R32UI),P===n.BYTE&&(k=n.R8I),P===n.SHORT&&(k=n.R16I),P===n.INT&&(k=n.R32I)),m===n.RG&&(P===n.FLOAT&&(k=n.RG32F),P===n.HALF_FLOAT&&(k=n.RG16F),P===n.UNSIGNED_BYTE&&(k=n.RG8)),m===n.RG_INTEGER&&(P===n.UNSIGNED_BYTE&&(k=n.RG8UI),P===n.UNSIGNED_SHORT&&(k=n.RG16UI),P===n.UNSIGNED_INT&&(k=n.RG32UI),P===n.BYTE&&(k=n.RG8I),P===n.SHORT&&(k=n.RG16I),P===n.INT&&(k=n.RG32I)),m===n.RGB_INTEGER&&(P===n.UNSIGNED_BYTE&&(k=n.RGB8UI),P===n.UNSIGNED_SHORT&&(k=n.RGB16UI),P===n.UNSIGNED_INT&&(k=n.RGB32UI),P===n.BYTE&&(k=n.RGB8I),P===n.SHORT&&(k=n.RGB16I),P===n.INT&&(k=n.RGB32I)),m===n.RGBA_INTEGER&&(P===n.UNSIGNED_BYTE&&(k=n.RGBA8UI),P===n.UNSIGNED_SHORT&&(k=n.RGBA16UI),P===n.UNSIGNED_INT&&(k=n.RGBA32UI),P===n.BYTE&&(k=n.RGBA8I),P===n.SHORT&&(k=n.RGBA16I),P===n.INT&&(k=n.RGBA32I)),m===n.RGB&&(P===n.UNSIGNED_INT_5_9_9_9_REV&&(k=n.RGB9_E5),P===n.UNSIGNED_INT_10F_11F_11F_REV&&(k=n.R11F_G11F_B10F)),m===n.RGBA){const be=Q?Gs:je.getTransfer(W);P===n.FLOAT&&(k=n.RGBA32F),P===n.HALF_FLOAT&&(k=n.RGBA16F),P===n.UNSIGNED_BYTE&&(k=be===st?n.SRGB8_ALPHA8:n.RGBA8),P===n.UNSIGNED_SHORT_4_4_4_4&&(k=n.RGBA4),P===n.UNSIGNED_SHORT_5_5_5_1&&(k=n.RGB5_A1)}return(k===n.R16F||k===n.R32F||k===n.RG16F||k===n.RG32F||k===n.RGBA16F||k===n.RGBA32F)&&e.get("EXT_color_buffer_float"),k}function T(v,m){let P;return v?m===null||m===An||m===Wr?P=n.DEPTH24_STENCIL8:m===vn?P=n.DEPTH32F_STENCIL8:m===kr&&(P=n.DEPTH24_STENCIL8,Ve("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):m===null||m===An||m===Wr?P=n.DEPTH_COMPONENT24:m===vn?P=n.DEPTH_COMPONENT32F:m===kr&&(P=n.DEPTH_COMPONENT16),P}function R(v,m){return g(v)===!0||v.isFramebufferTexture&&v.minFilter!==bt&&v.minFilter!==Ct?Math.log2(Math.max(m.width,m.height))+1:v.mipmaps!==void 0&&v.mipmaps.length>0?v.mipmaps.length:v.isCompressedTexture&&Array.isArray(v.image)?m.mipmaps.length:1}function L(v){const m=v.target;m.removeEventListener("dispose",L),G(m),m.isVideoTexture&&u.delete(m)}function D(v){const m=v.target;m.removeEventListener("dispose",D),y(m)}function G(v){const m=i.get(v);if(m.__webglInit===void 0)return;const P=v.source,W=d.get(P);if(W){const Q=W[m.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&M(v),Object.keys(W).length===0&&d.delete(P)}i.remove(v)}function M(v){const m=i.get(v);n.deleteTexture(m.__webglTexture);const P=v.source,W=d.get(P);delete W[m.__cacheKey],o.memory.textures--}function y(v){const m=i.get(v);if(v.depthTexture&&(v.depthTexture.dispose(),i.remove(v.depthTexture)),v.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(m.__webglFramebuffer[W]))for(let Q=0;Q<m.__webglFramebuffer[W].length;Q++)n.deleteFramebuffer(m.__webglFramebuffer[W][Q]);else n.deleteFramebuffer(m.__webglFramebuffer[W]);m.__webglDepthbuffer&&n.deleteRenderbuffer(m.__webglDepthbuffer[W])}else{if(Array.isArray(m.__webglFramebuffer))for(let W=0;W<m.__webglFramebuffer.length;W++)n.deleteFramebuffer(m.__webglFramebuffer[W]);else n.deleteFramebuffer(m.__webglFramebuffer);if(m.__webglDepthbuffer&&n.deleteRenderbuffer(m.__webglDepthbuffer),m.__webglMultisampledFramebuffer&&n.deleteFramebuffer(m.__webglMultisampledFramebuffer),m.__webglColorRenderbuffer)for(let W=0;W<m.__webglColorRenderbuffer.length;W++)m.__webglColorRenderbuffer[W]&&n.deleteRenderbuffer(m.__webglColorRenderbuffer[W]);m.__webglDepthRenderbuffer&&n.deleteRenderbuffer(m.__webglDepthRenderbuffer)}const P=v.textures;for(let W=0,Q=P.length;W<Q;W++){const k=i.get(P[W]);k.__webglTexture&&(n.deleteTexture(k.__webglTexture),o.memory.textures--),i.remove(P[W])}i.remove(v)}let I=0;function J(){I=0}function q(){const v=I;return v>=r.maxTextures&&Ve("WebGLTextures: Trying to use "+v+" texture units while this GPU supports only "+r.maxTextures),I+=1,v}function re(v){const m=[];return m.push(v.wrapS),m.push(v.wrapT),m.push(v.wrapR||0),m.push(v.magFilter),m.push(v.minFilter),m.push(v.anisotropy),m.push(v.internalFormat),m.push(v.format),m.push(v.type),m.push(v.generateMipmaps),m.push(v.premultiplyAlpha),m.push(v.flipY),m.push(v.unpackAlignment),m.push(v.colorSpace),m.join()}function ee(v,m){const P=i.get(v);if(v.isVideoTexture&&oe(v),v.isRenderTargetTexture===!1&&v.isExternalTexture!==!0&&v.version>0&&P.__version!==v.version){const W=v.image;if(W===null)Ve("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)Ve("WebGLRenderer: Texture marked for update but image is incomplete");else{N(P,v,m);return}}else v.isExternalTexture&&(P.__webglTexture=v.sourceTexture?v.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,P.__webglTexture,n.TEXTURE0+m)}function j(v,m){const P=i.get(v);if(v.isRenderTargetTexture===!1&&v.version>0&&P.__version!==v.version){N(P,v,m);return}else v.isExternalTexture&&(P.__webglTexture=v.sourceTexture?v.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,P.__webglTexture,n.TEXTURE0+m)}function V(v,m){const P=i.get(v);if(v.isRenderTargetTexture===!1&&v.version>0&&P.__version!==v.version){N(P,v,m);return}t.bindTexture(n.TEXTURE_3D,P.__webglTexture,n.TEXTURE0+m)}function te(v,m){const P=i.get(v);if(v.isCubeDepthTexture!==!0&&v.version>0&&P.__version!==v.version){F(P,v,m);return}t.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+m)}const ge={[Aa]:n.REPEAT,[Vn]:n.CLAMP_TO_EDGE,[wa]:n.MIRRORED_REPEAT},me={[bt]:n.NEAREST,[Rm]:n.NEAREST_MIPMAP_NEAREST,[is]:n.NEAREST_MIPMAP_LINEAR,[Ct]:n.LINEAR,[Eo]:n.LINEAR_MIPMAP_NEAREST,[Pi]:n.LINEAR_MIPMAP_LINEAR},ve={[Dm]:n.NEVER,[Fm]:n.ALWAYS,[Lm]:n.LESS,[Ol]:n.LEQUAL,[Im]:n.EQUAL,[Bl]:n.GEQUAL,[Um]:n.GREATER,[Nm]:n.NOTEQUAL};function Oe(v,m){if(m.type===vn&&e.has("OES_texture_float_linear")===!1&&(m.magFilter===Ct||m.magFilter===Eo||m.magFilter===is||m.magFilter===Pi||m.minFilter===Ct||m.minFilter===Eo||m.minFilter===is||m.minFilter===Pi)&&Ve("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(v,n.TEXTURE_WRAP_S,ge[m.wrapS]),n.texParameteri(v,n.TEXTURE_WRAP_T,ge[m.wrapT]),(v===n.TEXTURE_3D||v===n.TEXTURE_2D_ARRAY)&&n.texParameteri(v,n.TEXTURE_WRAP_R,ge[m.wrapR]),n.texParameteri(v,n.TEXTURE_MAG_FILTER,me[m.magFilter]),n.texParameteri(v,n.TEXTURE_MIN_FILTER,me[m.minFilter]),m.compareFunction&&(n.texParameteri(v,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(v,n.TEXTURE_COMPARE_FUNC,ve[m.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(m.magFilter===bt||m.minFilter!==is&&m.minFilter!==Pi||m.type===vn&&e.has("OES_texture_float_linear")===!1)return;if(m.anisotropy>1||i.get(m).__currentAnisotropy){const P=e.get("EXT_texture_filter_anisotropic");n.texParameterf(v,P.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(m.anisotropy,r.getMaxAnisotropy())),i.get(m).__currentAnisotropy=m.anisotropy}}}function He(v,m){let P=!1;v.__webglInit===void 0&&(v.__webglInit=!0,m.addEventListener("dispose",L));const W=m.source;let Q=d.get(W);Q===void 0&&(Q={},d.set(W,Q));const k=re(m);if(k!==v.__cacheKey){Q[k]===void 0&&(Q[k]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,P=!0),Q[k].usedTimes++;const be=Q[v.__cacheKey];be!==void 0&&(Q[v.__cacheKey].usedTimes--,be.usedTimes===0&&M(m)),v.__cacheKey=k,v.__webglTexture=Q[k].texture}return P}function ut(v,m,P){return Math.floor(Math.floor(v/P)/m)}function ot(v,m,P,W){const k=v.updateRanges;if(k.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,m.width,m.height,P,W,m.data);else{k.sort((fe,xe)=>fe.start-xe.start);let be=0;for(let fe=1;fe<k.length;fe++){const xe=k[be],Me=k[fe],Re=xe.start+xe.count,_e=ut(Me.start,m.width,4),Ge=ut(xe.start,m.width,4);Me.start<=Re+1&&_e===Ge&&ut(Me.start+Me.count-1,m.width,4)===_e?xe.count=Math.max(xe.count,Me.start+Me.count-xe.start):(++be,k[be]=Me)}k.length=be+1;const he=n.getParameter(n.UNPACK_ROW_LENGTH),we=n.getParameter(n.UNPACK_SKIP_PIXELS),Ie=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,m.width);for(let fe=0,xe=k.length;fe<xe;fe++){const Me=k[fe],Re=Math.floor(Me.start/4),_e=Math.ceil(Me.count/4),Ge=Re%m.width,U=Math.floor(Re/m.width),Ae=_e,pe=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ge),n.pixelStorei(n.UNPACK_SKIP_ROWS,U),t.texSubImage2D(n.TEXTURE_2D,0,Ge,U,Ae,pe,P,W,m.data)}v.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,he),n.pixelStorei(n.UNPACK_SKIP_PIXELS,we),n.pixelStorei(n.UNPACK_SKIP_ROWS,Ie)}}function N(v,m,P){let W=n.TEXTURE_2D;(m.isDataArrayTexture||m.isCompressedArrayTexture)&&(W=n.TEXTURE_2D_ARRAY),m.isData3DTexture&&(W=n.TEXTURE_3D);const Q=He(v,m),k=m.source;t.bindTexture(W,v.__webglTexture,n.TEXTURE0+P);const be=i.get(k);if(k.version!==be.__version||Q===!0){t.activeTexture(n.TEXTURE0+P);const he=je.getPrimaries(je.workingColorSpace),we=m.colorSpace===li?null:je.getPrimaries(m.colorSpace),Ie=m.colorSpace===li||he===we?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,m.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,m.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);let fe=_(m.image,!1,r.maxTextureSize);fe=ie(m,fe);const xe=s.convert(m.format,m.colorSpace),Me=s.convert(m.type);let Re=w(m.internalFormat,xe,Me,m.colorSpace,m.isVideoTexture);Oe(W,m);let _e;const Ge=m.mipmaps,U=m.isVideoTexture!==!0,Ae=be.__version===void 0||Q===!0,pe=k.dataReady,Ce=R(m,fe);if(m.isDepthTexture)Re=T(m.format===Di,m.type),Ae&&(U?t.texStorage2D(n.TEXTURE_2D,1,Re,fe.width,fe.height):t.texImage2D(n.TEXTURE_2D,0,Re,fe.width,fe.height,0,xe,Me,null));else if(m.isDataTexture)if(Ge.length>0){U&&Ae&&t.texStorage2D(n.TEXTURE_2D,Ce,Re,Ge[0].width,Ge[0].height);for(let de=0,le=Ge.length;de<le;de++)_e=Ge[de],U?pe&&t.texSubImage2D(n.TEXTURE_2D,de,0,0,_e.width,_e.height,xe,Me,_e.data):t.texImage2D(n.TEXTURE_2D,de,Re,_e.width,_e.height,0,xe,Me,_e.data);m.generateMipmaps=!1}else U?(Ae&&t.texStorage2D(n.TEXTURE_2D,Ce,Re,fe.width,fe.height),pe&&ot(m,fe,xe,Me)):t.texImage2D(n.TEXTURE_2D,0,Re,fe.width,fe.height,0,xe,Me,fe.data);else if(m.isCompressedTexture)if(m.isCompressedArrayTexture){U&&Ae&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ce,Re,Ge[0].width,Ge[0].height,fe.depth);for(let de=0,le=Ge.length;de<le;de++)if(_e=Ge[de],m.format!==cn)if(xe!==null)if(U){if(pe)if(m.layerUpdates.size>0){const Se=ou(_e.width,_e.height,m.format,m.type);for(const ze of m.layerUpdates){const ft=_e.data.subarray(ze*Se/_e.data.BYTES_PER_ELEMENT,(ze+1)*Se/_e.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,de,0,0,ze,_e.width,_e.height,1,xe,ft)}m.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,de,0,0,0,_e.width,_e.height,fe.depth,xe,_e.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,de,Re,_e.width,_e.height,fe.depth,0,_e.data,0,0);else Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?pe&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,de,0,0,0,_e.width,_e.height,fe.depth,xe,Me,_e.data):t.texImage3D(n.TEXTURE_2D_ARRAY,de,Re,_e.width,_e.height,fe.depth,0,xe,Me,_e.data)}else{U&&Ae&&t.texStorage2D(n.TEXTURE_2D,Ce,Re,Ge[0].width,Ge[0].height);for(let de=0,le=Ge.length;de<le;de++)_e=Ge[de],m.format!==cn?xe!==null?U?pe&&t.compressedTexSubImage2D(n.TEXTURE_2D,de,0,0,_e.width,_e.height,xe,_e.data):t.compressedTexImage2D(n.TEXTURE_2D,de,Re,_e.width,_e.height,0,_e.data):Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?pe&&t.texSubImage2D(n.TEXTURE_2D,de,0,0,_e.width,_e.height,xe,Me,_e.data):t.texImage2D(n.TEXTURE_2D,de,Re,_e.width,_e.height,0,xe,Me,_e.data)}else if(m.isDataArrayTexture)if(U){if(Ae&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ce,Re,fe.width,fe.height,fe.depth),pe)if(m.layerUpdates.size>0){const de=ou(fe.width,fe.height,m.format,m.type);for(const le of m.layerUpdates){const Se=fe.data.subarray(le*de/fe.data.BYTES_PER_ELEMENT,(le+1)*de/fe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,le,fe.width,fe.height,1,xe,Me,Se)}m.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,xe,Me,fe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Re,fe.width,fe.height,fe.depth,0,xe,Me,fe.data);else if(m.isData3DTexture)U?(Ae&&t.texStorage3D(n.TEXTURE_3D,Ce,Re,fe.width,fe.height,fe.depth),pe&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,xe,Me,fe.data)):t.texImage3D(n.TEXTURE_3D,0,Re,fe.width,fe.height,fe.depth,0,xe,Me,fe.data);else if(m.isFramebufferTexture){if(Ae)if(U)t.texStorage2D(n.TEXTURE_2D,Ce,Re,fe.width,fe.height);else{let de=fe.width,le=fe.height;for(let Se=0;Se<Ce;Se++)t.texImage2D(n.TEXTURE_2D,Se,Re,de,le,0,xe,Me,null),de>>=1,le>>=1}}else if(Ge.length>0){if(U&&Ae){const de=ae(Ge[0]);t.texStorage2D(n.TEXTURE_2D,Ce,Re,de.width,de.height)}for(let de=0,le=Ge.length;de<le;de++)_e=Ge[de],U?pe&&t.texSubImage2D(n.TEXTURE_2D,de,0,0,xe,Me,_e):t.texImage2D(n.TEXTURE_2D,de,Re,xe,Me,_e);m.generateMipmaps=!1}else if(U){if(Ae){const de=ae(fe);t.texStorage2D(n.TEXTURE_2D,Ce,Re,de.width,de.height)}pe&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,xe,Me,fe)}else t.texImage2D(n.TEXTURE_2D,0,Re,xe,Me,fe);g(m)&&h(W),be.__version=k.version,m.onUpdate&&m.onUpdate(m)}v.__version=m.version}function F(v,m,P){if(m.image.length!==6)return;const W=He(v,m),Q=m.source;t.bindTexture(n.TEXTURE_CUBE_MAP,v.__webglTexture,n.TEXTURE0+P);const k=i.get(Q);if(Q.version!==k.__version||W===!0){t.activeTexture(n.TEXTURE0+P);const be=je.getPrimaries(je.workingColorSpace),he=m.colorSpace===li?null:je.getPrimaries(m.colorSpace),we=m.colorSpace===li||be===he?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,m.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,m.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);const Ie=m.isCompressedTexture||m.image[0].isCompressedTexture,fe=m.image[0]&&m.image[0].isDataTexture,xe=[];for(let le=0;le<6;le++)!Ie&&!fe?xe[le]=_(m.image[le],!0,r.maxCubemapSize):xe[le]=fe?m.image[le].image:m.image[le],xe[le]=ie(m,xe[le]);const Me=xe[0],Re=s.convert(m.format,m.colorSpace),_e=s.convert(m.type),Ge=w(m.internalFormat,Re,_e,m.colorSpace),U=m.isVideoTexture!==!0,Ae=k.__version===void 0||W===!0,pe=Q.dataReady;let Ce=R(m,Me);Oe(n.TEXTURE_CUBE_MAP,m);let de;if(Ie){U&&Ae&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ce,Ge,Me.width,Me.height);for(let le=0;le<6;le++){de=xe[le].mipmaps;for(let Se=0;Se<de.length;Se++){const ze=de[Se];m.format!==cn?Re!==null?U?pe&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Se,0,0,ze.width,ze.height,Re,ze.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Se,Ge,ze.width,ze.height,0,ze.data):Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?pe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Se,0,0,ze.width,ze.height,Re,_e,ze.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Se,Ge,ze.width,ze.height,0,Re,_e,ze.data)}}}else{if(de=m.mipmaps,U&&Ae){de.length>0&&Ce++;const le=ae(xe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ce,Ge,le.width,le.height)}for(let le=0;le<6;le++)if(fe){U?pe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,xe[le].width,xe[le].height,Re,_e,xe[le].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,Ge,xe[le].width,xe[le].height,0,Re,_e,xe[le].data);for(let Se=0;Se<de.length;Se++){const ft=de[Se].image[le].image;U?pe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Se+1,0,0,ft.width,ft.height,Re,_e,ft.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Se+1,Ge,ft.width,ft.height,0,Re,_e,ft.data)}}else{U?pe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Re,_e,xe[le]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,Ge,Re,_e,xe[le]);for(let Se=0;Se<de.length;Se++){const ze=de[Se];U?pe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Se+1,0,0,Re,_e,ze.image[le]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Se+1,Ge,Re,_e,ze.image[le])}}}g(m)&&h(n.TEXTURE_CUBE_MAP),k.__version=Q.version,m.onUpdate&&m.onUpdate(m)}v.__version=m.version}function $(v,m,P,W,Q,k){const be=s.convert(P.format,P.colorSpace),he=s.convert(P.type),we=w(P.internalFormat,be,he,P.colorSpace),Ie=i.get(m),fe=i.get(P);if(fe.__renderTarget=m,!Ie.__hasExternalTextures){const xe=Math.max(1,m.width>>k),Me=Math.max(1,m.height>>k);Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?t.texImage3D(Q,k,we,xe,Me,m.depth,0,be,he,null):t.texImage2D(Q,k,we,xe,Me,0,be,he,null)}t.bindFramebuffer(n.FRAMEBUFFER,v),ue(m)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,W,Q,fe.__webglTexture,0,b(m)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,W,Q,fe.__webglTexture,k),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ce(v,m,P){if(n.bindRenderbuffer(n.RENDERBUFFER,v),m.depthBuffer){const W=m.depthTexture,Q=W&&W.isDepthTexture?W.type:null,k=T(m.stencilBuffer,Q),be=m.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;ue(m)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,b(m),k,m.width,m.height):P?n.renderbufferStorageMultisample(n.RENDERBUFFER,b(m),k,m.width,m.height):n.renderbufferStorage(n.RENDERBUFFER,k,m.width,m.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,be,n.RENDERBUFFER,v)}else{const W=m.textures;for(let Q=0;Q<W.length;Q++){const k=W[Q],be=s.convert(k.format,k.colorSpace),he=s.convert(k.type),we=w(k.internalFormat,be,he,k.colorSpace);ue(m)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,b(m),we,m.width,m.height):P?n.renderbufferStorageMultisample(n.RENDERBUFFER,b(m),we,m.width,m.height):n.renderbufferStorage(n.RENDERBUFFER,we,m.width,m.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function se(v,m,P){const W=m.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,v),!(m.depthTexture&&m.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=i.get(m.depthTexture);if(Q.__renderTarget=m,(!Q.__webglTexture||m.depthTexture.image.width!==m.width||m.depthTexture.image.height!==m.height)&&(m.depthTexture.image.width=m.width,m.depthTexture.image.height=m.height,m.depthTexture.needsUpdate=!0),W){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,m.depthTexture.addEventListener("dispose",L)),Q.__webglTexture===void 0){Q.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture),Oe(n.TEXTURE_CUBE_MAP,m.depthTexture);const Ie=s.convert(m.depthTexture.format),fe=s.convert(m.depthTexture.type);let xe;m.depthTexture.format===Kn?xe=n.DEPTH_COMPONENT24:m.depthTexture.format===Di&&(xe=n.DEPTH24_STENCIL8);for(let Me=0;Me<6;Me++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,xe,m.width,m.height,0,Ie,fe,null)}}else ee(m.depthTexture,0);const k=Q.__webglTexture,be=b(m),he=W?n.TEXTURE_CUBE_MAP_POSITIVE_X+P:n.TEXTURE_2D,we=m.depthTexture.format===Di?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(m.depthTexture.format===Kn)ue(m)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,we,he,k,0,be):n.framebufferTexture2D(n.FRAMEBUFFER,we,he,k,0);else if(m.depthTexture.format===Di)ue(m)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,we,he,k,0,be):n.framebufferTexture2D(n.FRAMEBUFFER,we,he,k,0);else throw new Error("Unknown depthTexture format")}function Pe(v){const m=i.get(v),P=v.isWebGLCubeRenderTarget===!0;if(m.__boundDepthTexture!==v.depthTexture){const W=v.depthTexture;if(m.__depthDisposeCallback&&m.__depthDisposeCallback(),W){const Q=()=>{delete m.__boundDepthTexture,delete m.__depthDisposeCallback,W.removeEventListener("dispose",Q)};W.addEventListener("dispose",Q),m.__depthDisposeCallback=Q}m.__boundDepthTexture=W}if(v.depthTexture&&!m.__autoAllocateDepthBuffer)if(P)for(let W=0;W<6;W++)se(m.__webglFramebuffer[W],v,W);else{const W=v.texture.mipmaps;W&&W.length>0?se(m.__webglFramebuffer[0],v,0):se(m.__webglFramebuffer,v,0)}else if(P){m.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(t.bindFramebuffer(n.FRAMEBUFFER,m.__webglFramebuffer[W]),m.__webglDepthbuffer[W]===void 0)m.__webglDepthbuffer[W]=n.createRenderbuffer(),ce(m.__webglDepthbuffer[W],v,!1);else{const Q=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,k=m.__webglDepthbuffer[W];n.bindRenderbuffer(n.RENDERBUFFER,k),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,k)}}else{const W=v.texture.mipmaps;if(W&&W.length>0?t.bindFramebuffer(n.FRAMEBUFFER,m.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,m.__webglFramebuffer),m.__webglDepthbuffer===void 0)m.__webglDepthbuffer=n.createRenderbuffer(),ce(m.__webglDepthbuffer,v,!1);else{const Q=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,k=m.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,k),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,k)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function A(v,m,P){const W=i.get(v);m!==void 0&&$(W.__webglFramebuffer,v,v.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),P!==void 0&&Pe(v)}function C(v){const m=v.texture,P=i.get(v),W=i.get(m);v.addEventListener("dispose",D);const Q=v.textures,k=v.isWebGLCubeRenderTarget===!0,be=Q.length>1;if(be||(W.__webglTexture===void 0&&(W.__webglTexture=n.createTexture()),W.__version=m.version,o.memory.textures++),k){P.__webglFramebuffer=[];for(let he=0;he<6;he++)if(m.mipmaps&&m.mipmaps.length>0){P.__webglFramebuffer[he]=[];for(let we=0;we<m.mipmaps.length;we++)P.__webglFramebuffer[he][we]=n.createFramebuffer()}else P.__webglFramebuffer[he]=n.createFramebuffer()}else{if(m.mipmaps&&m.mipmaps.length>0){P.__webglFramebuffer=[];for(let he=0;he<m.mipmaps.length;he++)P.__webglFramebuffer[he]=n.createFramebuffer()}else P.__webglFramebuffer=n.createFramebuffer();if(be)for(let he=0,we=Q.length;he<we;he++){const Ie=i.get(Q[he]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=n.createTexture(),o.memory.textures++)}if(v.samples>0&&ue(v)===!1){P.__webglMultisampledFramebuffer=n.createFramebuffer(),P.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,P.__webglMultisampledFramebuffer);for(let he=0;he<Q.length;he++){const we=Q[he];P.__webglColorRenderbuffer[he]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,P.__webglColorRenderbuffer[he]);const Ie=s.convert(we.format,we.colorSpace),fe=s.convert(we.type),xe=w(we.internalFormat,Ie,fe,we.colorSpace,v.isXRRenderTarget===!0),Me=b(v);n.renderbufferStorageMultisample(n.RENDERBUFFER,Me,xe,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.RENDERBUFFER,P.__webglColorRenderbuffer[he])}n.bindRenderbuffer(n.RENDERBUFFER,null),v.depthBuffer&&(P.__webglDepthRenderbuffer=n.createRenderbuffer(),ce(P.__webglDepthRenderbuffer,v,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(k){t.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture),Oe(n.TEXTURE_CUBE_MAP,m);for(let he=0;he<6;he++)if(m.mipmaps&&m.mipmaps.length>0)for(let we=0;we<m.mipmaps.length;we++)$(P.__webglFramebuffer[he][we],v,m,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,we);else $(P.__webglFramebuffer[he],v,m,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);g(m)&&h(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(be){for(let he=0,we=Q.length;he<we;he++){const Ie=Q[he],fe=i.get(Ie);let xe=n.TEXTURE_2D;(v.isWebGL3DRenderTarget||v.isWebGLArrayRenderTarget)&&(xe=v.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(xe,fe.__webglTexture),Oe(xe,Ie),$(P.__webglFramebuffer,v,Ie,n.COLOR_ATTACHMENT0+he,xe,0),g(Ie)&&h(xe)}t.unbindTexture()}else{let he=n.TEXTURE_2D;if((v.isWebGL3DRenderTarget||v.isWebGLArrayRenderTarget)&&(he=v.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(he,W.__webglTexture),Oe(he,m),m.mipmaps&&m.mipmaps.length>0)for(let we=0;we<m.mipmaps.length;we++)$(P.__webglFramebuffer[we],v,m,n.COLOR_ATTACHMENT0,he,we);else $(P.__webglFramebuffer,v,m,n.COLOR_ATTACHMENT0,he,0);g(m)&&h(he),t.unbindTexture()}v.depthBuffer&&Pe(v)}function B(v){const m=v.textures;for(let P=0,W=m.length;P<W;P++){const Q=m[P];if(g(Q)){const k=E(v),be=i.get(Q).__webglTexture;t.bindTexture(k,be),h(k),t.unbindTexture()}}}const Z=[],X=[];function ne(v){if(v.samples>0){if(ue(v)===!1){const m=v.textures,P=v.width,W=v.height;let Q=n.COLOR_BUFFER_BIT;const k=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,be=i.get(v),he=m.length>1;if(he)for(let Ie=0;Ie<m.length;Ie++)t.bindFramebuffer(n.FRAMEBUFFER,be.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,be.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer);const we=v.texture.mipmaps;we&&we.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,be.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let Ie=0;Ie<m.length;Ie++){if(v.resolveDepthBuffer&&(v.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),v.stencilBuffer&&v.resolveStencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),he){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,be.__webglColorRenderbuffer[Ie]);const fe=i.get(m[Ie]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,fe,0)}n.blitFramebuffer(0,0,P,W,0,0,P,W,Q,n.NEAREST),l===!0&&(Z.length=0,X.length=0,Z.push(n.COLOR_ATTACHMENT0+Ie),v.depthBuffer&&v.resolveDepthBuffer===!1&&(Z.push(k),X.push(k),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,X)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Z))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),he)for(let Ie=0;Ie<m.length;Ie++){t.bindFramebuffer(n.FRAMEBUFFER,be.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.RENDERBUFFER,be.__webglColorRenderbuffer[Ie]);const fe=i.get(m[Ie]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,be.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.TEXTURE_2D,fe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(v.depthBuffer&&v.resolveDepthBuffer===!1&&l){const m=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[m])}}}function b(v){return Math.min(r.maxSamples,v.samples)}function ue(v){const m=i.get(v);return v.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&m.__useRenderToTexture!==!1}function oe(v){const m=o.render.frame;u.get(v)!==m&&(u.set(v,m),v.update())}function ie(v,m){const P=v.colorSpace,W=v.format,Q=v.type;return v.isCompressedTexture===!0||v.isVideoTexture===!0||P!==fr&&P!==li&&(je.getTransfer(P)===st?(W!==cn||Q!==jt)&&Ve("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ke("WebGLTextures: Unsupported texture color space:",P)),m}function ae(v){return typeof HTMLImageElement<"u"&&v instanceof HTMLImageElement?(c.width=v.naturalWidth||v.width,c.height=v.naturalHeight||v.height):typeof VideoFrame<"u"&&v instanceof VideoFrame?(c.width=v.displayWidth,c.height=v.displayHeight):(c.width=v.width,c.height=v.height),c}this.allocateTextureUnit=q,this.resetTextureUnits=J,this.setTexture2D=ee,this.setTexture2DArray=j,this.setTexture3D=V,this.setTextureCube=te,this.rebindTextures=A,this.setupRenderTarget=C,this.updateRenderTargetMipmap=B,this.updateMultisampleRenderTarget=ne,this.setupDepthRenderbuffer=Pe,this.setupFrameBufferTexture=$,this.useMultisampledRTT=ue,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function cS(n,e){function t(i,r=li){let s;const o=je.getTransfer(r);if(i===jt)return n.UNSIGNED_BYTE;if(i===Ll)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Il)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Zf)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Jf)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Kf)return n.BYTE;if(i===jf)return n.SHORT;if(i===kr)return n.UNSIGNED_SHORT;if(i===Dl)return n.INT;if(i===An)return n.UNSIGNED_INT;if(i===vn)return n.FLOAT;if(i===$n)return n.HALF_FLOAT;if(i===Qf)return n.ALPHA;if(i===eh)return n.RGB;if(i===cn)return n.RGBA;if(i===Kn)return n.DEPTH_COMPONENT;if(i===Di)return n.DEPTH_STENCIL;if(i===th)return n.RED;if(i===Ul)return n.RED_INTEGER;if(i===ur)return n.RG;if(i===Nl)return n.RG_INTEGER;if(i===Fl)return n.RGBA_INTEGER;if(i===Cs||i===Ps||i===Ds||i===Ls)if(o===st)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Cs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ps)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ds)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ls)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Cs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ps)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ds)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ls)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ra||i===Ca||i===Pa||i===Da)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Ra)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ca)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Pa)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Da)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===La||i===Ia||i===Ua||i===Na||i===Fa||i===Oa||i===Ba)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===La||i===Ia)return o===st?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Ua)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Na)return s.COMPRESSED_R11_EAC;if(i===Fa)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Oa)return s.COMPRESSED_RG11_EAC;if(i===Ba)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===za||i===Va||i===Ha||i===Ga||i===ka||i===Wa||i===Xa||i===qa||i===Ya||i===$a||i===Ka||i===ja||i===Za||i===Ja)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===za)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Va)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ha)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ga)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ka)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Wa)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Xa)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===qa)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ya)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===$a)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ka)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ja)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Za)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ja)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Qa||i===el||i===tl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Qa)return o===st?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===el)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===tl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===nl||i===il||i===rl||i===sl)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===nl)return s.COMPRESSED_RED_RGTC1_EXT;if(i===il)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===rl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===sl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Wr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const uS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fS=`
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

}`;class hS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new ph(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Rn({vertexShader:uS,fragmentShader:fS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new kt(new io(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class dS extends dr{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,d=null,p=null,x=null;const _=typeof XRWebGLBinding<"u",g=new hS,h={},E=t.getContextAttributes();let w=null,T=null;const R=[],L=[],D=new Je;let G=null;const M=new nn;M.viewport=new xt;const y=new nn;y.viewport=new xt;const I=[M,y],J=new Eg;let q=null,re=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(N){let F=R[N];return F===void 0&&(F=new Xo,R[N]=F),F.getTargetRaySpace()},this.getControllerGrip=function(N){let F=R[N];return F===void 0&&(F=new Xo,R[N]=F),F.getGripSpace()},this.getHand=function(N){let F=R[N];return F===void 0&&(F=new Xo,R[N]=F),F.getHandSpace()};function ee(N){const F=L.indexOf(N.inputSource);if(F===-1)return;const $=R[F];$!==void 0&&($.update(N.inputSource,N.frame,c||o),$.dispatchEvent({type:N.type,data:N.inputSource}))}function j(){r.removeEventListener("select",ee),r.removeEventListener("selectstart",ee),r.removeEventListener("selectend",ee),r.removeEventListener("squeeze",ee),r.removeEventListener("squeezestart",ee),r.removeEventListener("squeezeend",ee),r.removeEventListener("end",j),r.removeEventListener("inputsourceschange",V);for(let N=0;N<R.length;N++){const F=L[N];F!==null&&(L[N]=null,R[N].disconnect(F))}q=null,re=null,g.reset();for(const N in h)delete h[N];e.setRenderTarget(w),p=null,d=null,f=null,r=null,T=null,ot.stop(),i.isPresenting=!1,e.setPixelRatio(G),e.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(N){s=N,i.isPresenting===!0&&Ve("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(N){a=N,i.isPresenting===!0&&Ve("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(N){c=N},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f===null&&_&&(f=new XRWebGLBinding(r,t)),f},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(N){if(r=N,r!==null){if(w=e.getRenderTarget(),r.addEventListener("select",ee),r.addEventListener("selectstart",ee),r.addEventListener("selectend",ee),r.addEventListener("squeeze",ee),r.addEventListener("squeezestart",ee),r.addEventListener("squeezeend",ee),r.addEventListener("end",j),r.addEventListener("inputsourceschange",V),E.xrCompatible!==!0&&await t.makeXRCompatible(),G=e.getPixelRatio(),e.getSize(D),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let $=null,ce=null,se=null;E.depth&&(se=E.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,$=E.stencil?Di:Kn,ce=E.stencil?Wr:An);const Pe={colorFormat:t.RGBA8,depthFormat:se,scaleFactor:s};f=this.getBinding(),d=f.createProjectionLayer(Pe),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),T=new yn(d.textureWidth,d.textureHeight,{format:cn,type:jt,depthTexture:new qr(d.textureWidth,d.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:E.stencil,colorSpace:e.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const $={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,$),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),T=new yn(p.framebufferWidth,p.framebufferHeight,{format:cn,type:jt,colorSpace:e.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),ot.setContext(r),ot.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function V(N){for(let F=0;F<N.removed.length;F++){const $=N.removed[F],ce=L.indexOf($);ce>=0&&(L[ce]=null,R[ce].disconnect($))}for(let F=0;F<N.added.length;F++){const $=N.added[F];let ce=L.indexOf($);if(ce===-1){for(let Pe=0;Pe<R.length;Pe++)if(Pe>=L.length){L.push($),ce=Pe;break}else if(L[Pe]===null){L[Pe]=$,ce=Pe;break}if(ce===-1)break}const se=R[ce];se&&se.connect($)}}const te=new z,ge=new z;function me(N,F,$){te.setFromMatrixPosition(F.matrixWorld),ge.setFromMatrixPosition($.matrixWorld);const ce=te.distanceTo(ge),se=F.projectionMatrix.elements,Pe=$.projectionMatrix.elements,A=se[14]/(se[10]-1),C=se[14]/(se[10]+1),B=(se[9]+1)/se[5],Z=(se[9]-1)/se[5],X=(se[8]-1)/se[0],ne=(Pe[8]+1)/Pe[0],b=A*X,ue=A*ne,oe=ce/(-X+ne),ie=oe*-X;if(F.matrixWorld.decompose(N.position,N.quaternion,N.scale),N.translateX(ie),N.translateZ(oe),N.matrixWorld.compose(N.position,N.quaternion,N.scale),N.matrixWorldInverse.copy(N.matrixWorld).invert(),se[10]===-1)N.projectionMatrix.copy(F.projectionMatrix),N.projectionMatrixInverse.copy(F.projectionMatrixInverse);else{const ae=A+oe,v=C+oe,m=b-ie,P=ue+(ce-ie),W=B*C/v*ae,Q=Z*C/v*ae;N.projectionMatrix.makePerspective(m,P,W,Q,ae,v),N.projectionMatrixInverse.copy(N.projectionMatrix).invert()}}function ve(N,F){F===null?N.matrixWorld.copy(N.matrix):N.matrixWorld.multiplyMatrices(F.matrixWorld,N.matrix),N.matrixWorldInverse.copy(N.matrixWorld).invert()}this.updateCamera=function(N){if(r===null)return;let F=N.near,$=N.far;g.texture!==null&&(g.depthNear>0&&(F=g.depthNear),g.depthFar>0&&($=g.depthFar)),J.near=y.near=M.near=F,J.far=y.far=M.far=$,(q!==J.near||re!==J.far)&&(r.updateRenderState({depthNear:J.near,depthFar:J.far}),q=J.near,re=J.far),J.layers.mask=N.layers.mask|6,M.layers.mask=J.layers.mask&3,y.layers.mask=J.layers.mask&5;const ce=N.parent,se=J.cameras;ve(J,ce);for(let Pe=0;Pe<se.length;Pe++)ve(se[Pe],ce);se.length===2?me(J,M,y):J.projectionMatrix.copy(M.projectionMatrix),Oe(N,J,ce)};function Oe(N,F,$){$===null?N.matrix.copy(F.matrixWorld):(N.matrix.copy($.matrixWorld),N.matrix.invert(),N.matrix.multiply(F.matrixWorld)),N.matrix.decompose(N.position,N.quaternion,N.scale),N.updateMatrixWorld(!0),N.projectionMatrix.copy(F.projectionMatrix),N.projectionMatrixInverse.copy(F.projectionMatrixInverse),N.isPerspectiveCamera&&(N.fov=ol*2*Math.atan(1/N.projectionMatrix.elements[5]),N.zoom=1)}this.getCamera=function(){return J},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(N){l=N,d!==null&&(d.fixedFoveation=N),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=N)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(J)},this.getCameraTexture=function(N){return h[N]};let He=null;function ut(N,F){if(u=F.getViewerPose(c||o),x=F,u!==null){const $=u.views;p!==null&&(e.setRenderTargetFramebuffer(T,p.framebuffer),e.setRenderTarget(T));let ce=!1;$.length!==J.cameras.length&&(J.cameras.length=0,ce=!0);for(let C=0;C<$.length;C++){const B=$[C];let Z=null;if(p!==null)Z=p.getViewport(B);else{const ne=f.getViewSubImage(d,B);Z=ne.viewport,C===0&&(e.setRenderTargetTextures(T,ne.colorTexture,ne.depthStencilTexture),e.setRenderTarget(T))}let X=I[C];X===void 0&&(X=new nn,X.layers.enable(C),X.viewport=new xt,I[C]=X),X.matrix.fromArray(B.transform.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale),X.projectionMatrix.fromArray(B.projectionMatrix),X.projectionMatrixInverse.copy(X.projectionMatrix).invert(),X.viewport.set(Z.x,Z.y,Z.width,Z.height),C===0&&(J.matrix.copy(X.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale)),ce===!0&&J.cameras.push(X)}const se=r.enabledFeatures;if(se&&se.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){f=i.getBinding();const C=f.getDepthInformation($[0]);C&&C.isValid&&C.texture&&g.init(C,r.renderState)}if(se&&se.includes("camera-access")&&_){e.state.unbindTexture(),f=i.getBinding();for(let C=0;C<$.length;C++){const B=$[C].camera;if(B){let Z=h[B];Z||(Z=new ph,h[B]=Z);const X=f.getCameraImage(B);Z.sourceTexture=X}}}}for(let $=0;$<R.length;$++){const ce=L[$],se=R[$];ce!==null&&se!==void 0&&se.update(ce,F,c||o)}He&&He(N,F),F.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:F}),x=null}const ot=new gh;ot.setAnimationLoop(ut),this.setAnimationLoop=function(N){He=N},this.dispose=function(){}}}const Ti=new wn,pS=new pt;function mS(n,e){function t(g,h){g.matrixAutoUpdate===!0&&g.updateMatrix(),h.value.copy(g.matrix)}function i(g,h){h.color.getRGB(g.fogColor.value,uh(n)),h.isFog?(g.fogNear.value=h.near,g.fogFar.value=h.far):h.isFogExp2&&(g.fogDensity.value=h.density)}function r(g,h,E,w,T){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(g,h):h.isMeshToonMaterial?(s(g,h),f(g,h)):h.isMeshPhongMaterial?(s(g,h),u(g,h)):h.isMeshStandardMaterial?(s(g,h),d(g,h),h.isMeshPhysicalMaterial&&p(g,h,T)):h.isMeshMatcapMaterial?(s(g,h),x(g,h)):h.isMeshDepthMaterial?s(g,h):h.isMeshDistanceMaterial?(s(g,h),_(g,h)):h.isMeshNormalMaterial?s(g,h):h.isLineBasicMaterial?(o(g,h),h.isLineDashedMaterial&&a(g,h)):h.isPointsMaterial?l(g,h,E,w):h.isSpriteMaterial?c(g,h):h.isShadowMaterial?(g.color.value.copy(h.color),g.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(g,h){g.opacity.value=h.opacity,h.color&&g.diffuse.value.copy(h.color),h.emissive&&g.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(g.map.value=h.map,t(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,t(h.alphaMap,g.alphaMapTransform)),h.bumpMap&&(g.bumpMap.value=h.bumpMap,t(h.bumpMap,g.bumpMapTransform),g.bumpScale.value=h.bumpScale,h.side===Wt&&(g.bumpScale.value*=-1)),h.normalMap&&(g.normalMap.value=h.normalMap,t(h.normalMap,g.normalMapTransform),g.normalScale.value.copy(h.normalScale),h.side===Wt&&g.normalScale.value.negate()),h.displacementMap&&(g.displacementMap.value=h.displacementMap,t(h.displacementMap,g.displacementMapTransform),g.displacementScale.value=h.displacementScale,g.displacementBias.value=h.displacementBias),h.emissiveMap&&(g.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,g.emissiveMapTransform)),h.specularMap&&(g.specularMap.value=h.specularMap,t(h.specularMap,g.specularMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest);const E=e.get(h),w=E.envMap,T=E.envMapRotation;w&&(g.envMap.value=w,Ti.copy(T),Ti.x*=-1,Ti.y*=-1,Ti.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Ti.y*=-1,Ti.z*=-1),g.envMapRotation.value.setFromMatrix4(pS.makeRotationFromEuler(Ti)),g.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=h.reflectivity,g.ior.value=h.ior,g.refractionRatio.value=h.refractionRatio),h.lightMap&&(g.lightMap.value=h.lightMap,g.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,g.lightMapTransform)),h.aoMap&&(g.aoMap.value=h.aoMap,g.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,g.aoMapTransform))}function o(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,h.map&&(g.map.value=h.map,t(h.map,g.mapTransform))}function a(g,h){g.dashSize.value=h.dashSize,g.totalSize.value=h.dashSize+h.gapSize,g.scale.value=h.scale}function l(g,h,E,w){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.size.value=h.size*E,g.scale.value=w*.5,h.map&&(g.map.value=h.map,t(h.map,g.uvTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,t(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function c(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.rotation.value=h.rotation,h.map&&(g.map.value=h.map,t(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,t(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function u(g,h){g.specular.value.copy(h.specular),g.shininess.value=Math.max(h.shininess,1e-4)}function f(g,h){h.gradientMap&&(g.gradientMap.value=h.gradientMap)}function d(g,h){g.metalness.value=h.metalness,h.metalnessMap&&(g.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,g.metalnessMapTransform)),g.roughness.value=h.roughness,h.roughnessMap&&(g.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,g.roughnessMapTransform)),h.envMap&&(g.envMapIntensity.value=h.envMapIntensity)}function p(g,h,E){g.ior.value=h.ior,h.sheen>0&&(g.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),g.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(g.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,g.sheenColorMapTransform)),h.sheenRoughnessMap&&(g.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,g.sheenRoughnessMapTransform))),h.clearcoat>0&&(g.clearcoat.value=h.clearcoat,g.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(g.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,g.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(g.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Wt&&g.clearcoatNormalScale.value.negate())),h.dispersion>0&&(g.dispersion.value=h.dispersion),h.iridescence>0&&(g.iridescence.value=h.iridescence,g.iridescenceIOR.value=h.iridescenceIOR,g.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(g.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,g.iridescenceMapTransform)),h.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),h.transmission>0&&(g.transmission.value=h.transmission,g.transmissionSamplerMap.value=E.texture,g.transmissionSamplerSize.value.set(E.width,E.height),h.transmissionMap&&(g.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,g.transmissionMapTransform)),g.thickness.value=h.thickness,h.thicknessMap&&(g.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=h.attenuationDistance,g.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(g.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(g.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=h.specularIntensity,g.specularColor.value.copy(h.specularColor),h.specularColorMap&&(g.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,g.specularColorMapTransform)),h.specularIntensityMap&&(g.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,g.specularIntensityMapTransform))}function x(g,h){h.matcap&&(g.matcap.value=h.matcap)}function _(g,h){const E=e.get(h).light;g.referencePosition.value.setFromMatrixPosition(E.matrixWorld),g.nearDistance.value=E.shadow.camera.near,g.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function gS(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,w){const T=w.program;i.uniformBlockBinding(E,T)}function c(E,w){let T=r[E.id];T===void 0&&(x(E),T=u(E),r[E.id]=T,E.addEventListener("dispose",g));const R=w.program;i.updateUBOMapping(E,R);const L=e.render.frame;s[E.id]!==L&&(d(E),s[E.id]=L)}function u(E){const w=f();E.__bindingPointIndex=w;const T=n.createBuffer(),R=E.__size,L=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,T),n.bufferData(n.UNIFORM_BUFFER,R,L),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,w,T),T}function f(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return Ke("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){const w=r[E.id],T=E.uniforms,R=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let L=0,D=T.length;L<D;L++){const G=Array.isArray(T[L])?T[L]:[T[L]];for(let M=0,y=G.length;M<y;M++){const I=G[M];if(p(I,L,M,R)===!0){const J=I.__offset,q=Array.isArray(I.value)?I.value:[I.value];let re=0;for(let ee=0;ee<q.length;ee++){const j=q[ee],V=_(j);typeof j=="number"||typeof j=="boolean"?(I.__data[0]=j,n.bufferSubData(n.UNIFORM_BUFFER,J+re,I.__data)):j.isMatrix3?(I.__data[0]=j.elements[0],I.__data[1]=j.elements[1],I.__data[2]=j.elements[2],I.__data[3]=0,I.__data[4]=j.elements[3],I.__data[5]=j.elements[4],I.__data[6]=j.elements[5],I.__data[7]=0,I.__data[8]=j.elements[6],I.__data[9]=j.elements[7],I.__data[10]=j.elements[8],I.__data[11]=0):(j.toArray(I.__data,re),re+=V.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,J,I.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(E,w,T,R){const L=E.value,D=w+"_"+T;if(R[D]===void 0)return typeof L=="number"||typeof L=="boolean"?R[D]=L:R[D]=L.clone(),!0;{const G=R[D];if(typeof L=="number"||typeof L=="boolean"){if(G!==L)return R[D]=L,!0}else if(G.equals(L)===!1)return G.copy(L),!0}return!1}function x(E){const w=E.uniforms;let T=0;const R=16;for(let D=0,G=w.length;D<G;D++){const M=Array.isArray(w[D])?w[D]:[w[D]];for(let y=0,I=M.length;y<I;y++){const J=M[y],q=Array.isArray(J.value)?J.value:[J.value];for(let re=0,ee=q.length;re<ee;re++){const j=q[re],V=_(j),te=T%R,ge=te%V.boundary,me=te+ge;T+=ge,me!==0&&R-me<V.storage&&(T+=R-me),J.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=T,T+=V.storage}}}const L=T%R;return L>0&&(T+=R-L),E.__size=T,E.__cache={},this}function _(E){const w={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(w.boundary=4,w.storage=4):E.isVector2?(w.boundary=8,w.storage=8):E.isVector3||E.isColor?(w.boundary=16,w.storage=12):E.isVector4?(w.boundary=16,w.storage=16):E.isMatrix3?(w.boundary=48,w.storage=48):E.isMatrix4?(w.boundary=64,w.storage=64):E.isTexture?Ve("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ve("WebGLRenderer: Unsupported uniform value type.",E),w}function g(E){const w=E.target;w.removeEventListener("dispose",g);const T=o.indexOf(w.__bindingPointIndex);o.splice(T,1),n.deleteBuffer(r[w.id]),delete r[w.id],delete s[w.id]}function h(){for(const E in r)n.deleteBuffer(r[E]);o=[],r={},s={}}return{bind:l,update:c,dispose:h}}const _S=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let pn=null;function xS(){return pn===null&&(pn=new ug(_S,16,16,ur,$n),pn.name="DFG_LUT",pn.minFilter=Ct,pn.magFilter=Ct,pn.wrapS=Vn,pn.wrapT=Vn,pn.generateMipmaps=!1,pn.needsUpdate=!0),pn}class vS{constructor(e={}){const{canvas:t=Om(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:p=jt}=e;this.isWebGLRenderer=!0;let x;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=i.getContextAttributes().alpha}else x=o;const _=p,g=new Set([Fl,Nl,Ul]),h=new Set([jt,An,kr,Wr,Ll,Il]),E=new Uint32Array(4),w=new Int32Array(4);let T=null,R=null;const L=[],D=[];let G=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=En,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let y=!1;this._outputColorSpace=tn;let I=0,J=0,q=null,re=-1,ee=null;const j=new xt,V=new xt;let te=null;const ge=new Ze(0);let me=0,ve=t.width,Oe=t.height,He=1,ut=null,ot=null;const N=new xt(0,0,ve,Oe),F=new xt(0,0,ve,Oe);let $=!1;const ce=new Gl;let se=!1,Pe=!1;const A=new pt,C=new z,B=new xt,Z={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let X=!1;function ne(){return q===null?He:1}let b=i;function ue(S,O){return t.getContext(S,O)}try{const S={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Pl}`),t.addEventListener("webglcontextlost",ze,!1),t.addEventListener("webglcontextrestored",ft,!1),t.addEventListener("webglcontextcreationerror",it,!1),b===null){const O="webgl2";if(b=ue(O,S),b===null)throw ue(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw Ke("WebGLRenderer: "+S.message),S}let oe,ie,ae,v,m,P,W,Q,k,be,he,we,Ie,fe,xe,Me,Re,_e,Ge,U,Ae,pe,Ce,de;function le(){oe=new xx(b),oe.init(),pe=new cS(b,oe),ie=new cx(b,oe,e,pe),ae=new aS(b,oe),ie.reversedDepthBuffer&&d&&ae.buffers.depth.setReversed(!0),v=new Mx(b),m=new qv,P=new lS(b,oe,ae,m,ie,pe,v),W=new fx(M),Q=new _x(M),k=new Tg(b),Ce=new ax(b,k),be=new vx(b,k,v,Ce),he=new yx(b,be,k,v),Ge=new Ex(b,ie,P),Me=new ux(m),we=new Xv(M,W,Q,oe,ie,Ce,Me),Ie=new mS(M,m),fe=new $v,xe=new eS(oe),_e=new ox(M,W,Q,ae,he,x,l),Re=new sS(M,he,ie),de=new gS(b,v,ie,ae),U=new lx(b,oe,v),Ae=new Sx(b,oe,v),v.programs=we.programs,M.capabilities=ie,M.extensions=oe,M.properties=m,M.renderLists=fe,M.shadowMap=Re,M.state=ae,M.info=v}le(),_!==jt&&(G=new Tx(_,t.width,t.height,r,s));const Se=new dS(M,b);this.xr=Se,this.getContext=function(){return b},this.getContextAttributes=function(){return b.getContextAttributes()},this.forceContextLoss=function(){const S=oe.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=oe.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return He},this.setPixelRatio=function(S){S!==void 0&&(He=S,this.setSize(ve,Oe,!1))},this.getSize=function(S){return S.set(ve,Oe)},this.setSize=function(S,O,K=!0){if(Se.isPresenting){Ve("WebGLRenderer: Can't change size while VR device is presenting.");return}ve=S,Oe=O,t.width=Math.floor(S*He),t.height=Math.floor(O*He),K===!0&&(t.style.width=S+"px",t.style.height=O+"px"),G!==null&&G.setSize(t.width,t.height),this.setViewport(0,0,S,O)},this.getDrawingBufferSize=function(S){return S.set(ve*He,Oe*He).floor()},this.setDrawingBufferSize=function(S,O,K){ve=S,Oe=O,He=K,t.width=Math.floor(S*K),t.height=Math.floor(O*K),this.setViewport(0,0,S,O)},this.setEffects=function(S){if(_===jt){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let O=0;O<S.length;O++)if(S[O].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}G.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(j)},this.getViewport=function(S){return S.copy(N)},this.setViewport=function(S,O,K,Y){S.isVector4?N.set(S.x,S.y,S.z,S.w):N.set(S,O,K,Y),ae.viewport(j.copy(N).multiplyScalar(He).round())},this.getScissor=function(S){return S.copy(F)},this.setScissor=function(S,O,K,Y){S.isVector4?F.set(S.x,S.y,S.z,S.w):F.set(S,O,K,Y),ae.scissor(V.copy(F).multiplyScalar(He).round())},this.getScissorTest=function(){return $},this.setScissorTest=function(S){ae.setScissorTest($=S)},this.setOpaqueSort=function(S){ut=S},this.setTransparentSort=function(S){ot=S},this.getClearColor=function(S){return S.copy(_e.getClearColor())},this.setClearColor=function(){_e.setClearColor(...arguments)},this.getClearAlpha=function(){return _e.getClearAlpha()},this.setClearAlpha=function(){_e.setClearAlpha(...arguments)},this.clear=function(S=!0,O=!0,K=!0){let Y=0;if(S){let H=!1;if(q!==null){const Ee=q.texture.format;H=g.has(Ee)}if(H){const Ee=q.texture.type,De=h.has(Ee),Te=_e.getClearColor(),Le=_e.getClearAlpha(),Ue=Te.r,Be=Te.g,Ne=Te.b;De?(E[0]=Ue,E[1]=Be,E[2]=Ne,E[3]=Le,b.clearBufferuiv(b.COLOR,0,E)):(w[0]=Ue,w[1]=Be,w[2]=Ne,w[3]=Le,b.clearBufferiv(b.COLOR,0,w))}else Y|=b.COLOR_BUFFER_BIT}O&&(Y|=b.DEPTH_BUFFER_BIT),K&&(Y|=b.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),b.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ze,!1),t.removeEventListener("webglcontextrestored",ft,!1),t.removeEventListener("webglcontextcreationerror",it,!1),_e.dispose(),fe.dispose(),xe.dispose(),m.dispose(),W.dispose(),Q.dispose(),he.dispose(),Ce.dispose(),de.dispose(),we.dispose(),Se.dispose(),Se.removeEventListener("sessionstart",ql),Se.removeEventListener("sessionend",Yl),gi.stop()};function ze(S){S.preventDefault(),Bc("WebGLRenderer: Context Lost."),y=!0}function ft(){Bc("WebGLRenderer: Context Restored."),y=!1;const S=v.autoReset,O=Re.enabled,K=Re.autoUpdate,Y=Re.needsUpdate,H=Re.type;le(),v.autoReset=S,Re.enabled=O,Re.autoUpdate=K,Re.needsUpdate=Y,Re.type=H}function it(S){Ke("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function hn(S){const O=S.target;O.removeEventListener("dispose",hn),Cn(O)}function Cn(S){Mh(S),m.remove(S)}function Mh(S){const O=m.get(S).programs;O!==void 0&&(O.forEach(function(K){we.releaseProgram(K)}),S.isShaderMaterial&&we.releaseShaderCache(S))}this.renderBufferDirect=function(S,O,K,Y,H,Ee){O===null&&(O=Z);const De=H.isMesh&&H.matrixWorld.determinant()<0,Te=yh(S,O,K,Y,H);ae.setMaterial(Y,De);let Le=K.index,Ue=1;if(Y.wireframe===!0){if(Le=be.getWireframeAttribute(K),Le===void 0)return;Ue=2}const Be=K.drawRange,Ne=K.attributes.position;let Ye=Be.start*Ue,at=(Be.start+Be.count)*Ue;Ee!==null&&(Ye=Math.max(Ye,Ee.start*Ue),at=Math.min(at,(Ee.start+Ee.count)*Ue)),Le!==null?(Ye=Math.max(Ye,0),at=Math.min(at,Le.count)):Ne!=null&&(Ye=Math.max(Ye,0),at=Math.min(at,Ne.count));const gt=at-Ye;if(gt<0||gt===1/0)return;Ce.setup(H,Y,Te,K,Le);let _t,lt=U;if(Le!==null&&(_t=k.get(Le),lt=Ae,lt.setIndex(_t)),H.isMesh)Y.wireframe===!0?(ae.setLineWidth(Y.wireframeLinewidth*ne()),lt.setMode(b.LINES)):lt.setMode(b.TRIANGLES);else if(H.isLine){let Fe=Y.linewidth;Fe===void 0&&(Fe=1),ae.setLineWidth(Fe*ne()),H.isLineSegments?lt.setMode(b.LINES):H.isLineLoop?lt.setMode(b.LINE_LOOP):lt.setMode(b.LINE_STRIP)}else H.isPoints?lt.setMode(b.POINTS):H.isSprite&&lt.setMode(b.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)Xr("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),lt.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(oe.get("WEBGL_multi_draw"))lt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Fe=H._multiDrawStarts,rt=H._multiDrawCounts,Qe=H._multiDrawCount,Xt=Le?k.get(Le).bytesPerElement:1,Ni=m.get(Y).currentProgram.getUniforms();for(let qt=0;qt<Qe;qt++)Ni.setValue(b,"_gl_DrawID",qt),lt.render(Fe[qt]/Xt,rt[qt])}else if(H.isInstancedMesh)lt.renderInstances(Ye,gt,H.count);else if(K.isInstancedBufferGeometry){const Fe=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,rt=Math.min(K.instanceCount,Fe);lt.renderInstances(Ye,gt,rt)}else lt.render(Ye,gt)};function Xl(S,O,K){S.transparent===!0&&S.side===zn&&S.forceSinglePass===!1?(S.side=Wt,S.needsUpdate=!0,Qr(S,O,K),S.side=pi,S.needsUpdate=!0,Qr(S,O,K),S.side=zn):Qr(S,O,K)}this.compile=function(S,O,K=null){K===null&&(K=S),R=xe.get(K),R.init(O),D.push(R),K.traverseVisible(function(H){H.isLight&&H.layers.test(O.layers)&&(R.pushLight(H),H.castShadow&&R.pushShadow(H))}),S!==K&&S.traverseVisible(function(H){H.isLight&&H.layers.test(O.layers)&&(R.pushLight(H),H.castShadow&&R.pushShadow(H))}),R.setupLights();const Y=new Set;return S.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const Ee=H.material;if(Ee)if(Array.isArray(Ee))for(let De=0;De<Ee.length;De++){const Te=Ee[De];Xl(Te,K,H),Y.add(Te)}else Xl(Ee,K,H),Y.add(Ee)}),R=D.pop(),Y},this.compileAsync=function(S,O,K=null){const Y=this.compile(S,O,K);return new Promise(H=>{function Ee(){if(Y.forEach(function(De){m.get(De).currentProgram.isReady()&&Y.delete(De)}),Y.size===0){H(S);return}setTimeout(Ee,10)}oe.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let oo=null;function Eh(S){oo&&oo(S)}function ql(){gi.stop()}function Yl(){gi.start()}const gi=new gh;gi.setAnimationLoop(Eh),typeof self<"u"&&gi.setContext(self),this.setAnimationLoop=function(S){oo=S,Se.setAnimationLoop(S),S===null?gi.stop():gi.start()},Se.addEventListener("sessionstart",ql),Se.addEventListener("sessionend",Yl),this.render=function(S,O){if(O!==void 0&&O.isCamera!==!0){Ke("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;const K=Se.enabled===!0&&Se.isPresenting===!0,Y=G!==null&&(q===null||K)&&G.begin(M,q);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Se.enabled===!0&&Se.isPresenting===!0&&(G===null||G.isCompositing()===!1)&&(Se.cameraAutoUpdate===!0&&Se.updateCamera(O),O=Se.getCamera()),S.isScene===!0&&S.onBeforeRender(M,S,O,q),R=xe.get(S,D.length),R.init(O),D.push(R),A.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),ce.setFromProjectionMatrix(A,Sn,O.reversedDepth),Pe=this.localClippingEnabled,se=Me.init(this.clippingPlanes,Pe),T=fe.get(S,L.length),T.init(),L.push(T),Se.enabled===!0&&Se.isPresenting===!0){const De=M.xr.getDepthSensingMesh();De!==null&&ao(De,O,-1/0,M.sortObjects)}ao(S,O,0,M.sortObjects),T.finish(),M.sortObjects===!0&&T.sort(ut,ot),X=Se.enabled===!1||Se.isPresenting===!1||Se.hasDepthSensing()===!1,X&&_e.addToRenderList(T,S),this.info.render.frame++,se===!0&&Me.beginShadows();const H=R.state.shadowsArray;if(Re.render(H,S,O),se===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Y&&G.hasRenderPass())===!1){const De=T.opaque,Te=T.transmissive;if(R.setupLights(),O.isArrayCamera){const Le=O.cameras;if(Te.length>0)for(let Ue=0,Be=Le.length;Ue<Be;Ue++){const Ne=Le[Ue];Kl(De,Te,S,Ne)}X&&_e.render(S);for(let Ue=0,Be=Le.length;Ue<Be;Ue++){const Ne=Le[Ue];$l(T,S,Ne,Ne.viewport)}}else Te.length>0&&Kl(De,Te,S,O),X&&_e.render(S),$l(T,S,O)}q!==null&&J===0&&(P.updateMultisampleRenderTarget(q),P.updateRenderTargetMipmap(q)),Y&&G.end(M),S.isScene===!0&&S.onAfterRender(M,S,O),Ce.resetDefaultState(),re=-1,ee=null,D.pop(),D.length>0?(R=D[D.length-1],se===!0&&Me.setGlobalState(M.clippingPlanes,R.state.camera)):R=null,L.pop(),L.length>0?T=L[L.length-1]:T=null};function ao(S,O,K,Y){if(S.visible===!1)return;if(S.layers.test(O.layers)){if(S.isGroup)K=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(O);else if(S.isLight)R.pushLight(S),S.castShadow&&R.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||ce.intersectsSprite(S)){Y&&B.setFromMatrixPosition(S.matrixWorld).applyMatrix4(A);const De=he.update(S),Te=S.material;Te.visible&&T.push(S,De,Te,K,B.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||ce.intersectsObject(S))){const De=he.update(S),Te=S.material;if(Y&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),B.copy(S.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),B.copy(De.boundingSphere.center)),B.applyMatrix4(S.matrixWorld).applyMatrix4(A)),Array.isArray(Te)){const Le=De.groups;for(let Ue=0,Be=Le.length;Ue<Be;Ue++){const Ne=Le[Ue],Ye=Te[Ne.materialIndex];Ye&&Ye.visible&&T.push(S,De,Ye,K,B.z,Ne)}}else Te.visible&&T.push(S,De,Te,K,B.z,null)}}const Ee=S.children;for(let De=0,Te=Ee.length;De<Te;De++)ao(Ee[De],O,K,Y)}function $l(S,O,K,Y){const{opaque:H,transmissive:Ee,transparent:De}=S;R.setupLightsView(K),se===!0&&Me.setGlobalState(M.clippingPlanes,K),Y&&ae.viewport(j.copy(Y)),H.length>0&&Jr(H,O,K),Ee.length>0&&Jr(Ee,O,K),De.length>0&&Jr(De,O,K),ae.buffers.depth.setTest(!0),ae.buffers.depth.setMask(!0),ae.buffers.color.setMask(!0),ae.setPolygonOffset(!1)}function Kl(S,O,K,Y){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(R.state.transmissionRenderTarget[Y.id]===void 0){const Ye=oe.has("EXT_color_buffer_half_float")||oe.has("EXT_color_buffer_float");R.state.transmissionRenderTarget[Y.id]=new yn(1,1,{generateMipmaps:!0,type:Ye?$n:jt,minFilter:Pi,samples:ie.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:je.workingColorSpace})}const Ee=R.state.transmissionRenderTarget[Y.id],De=Y.viewport||j;Ee.setSize(De.z*M.transmissionResolutionScale,De.w*M.transmissionResolutionScale);const Te=M.getRenderTarget(),Le=M.getActiveCubeFace(),Ue=M.getActiveMipmapLevel();M.setRenderTarget(Ee),M.getClearColor(ge),me=M.getClearAlpha(),me<1&&M.setClearColor(16777215,.5),M.clear(),X&&_e.render(K);const Be=M.toneMapping;M.toneMapping=En;const Ne=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),R.setupLightsView(Y),se===!0&&Me.setGlobalState(M.clippingPlanes,Y),Jr(S,K,Y),P.updateMultisampleRenderTarget(Ee),P.updateRenderTargetMipmap(Ee),oe.has("WEBGL_multisampled_render_to_texture")===!1){let Ye=!1;for(let at=0,gt=O.length;at<gt;at++){const _t=O[at],{object:lt,geometry:Fe,material:rt,group:Qe}=_t;if(rt.side===zn&&lt.layers.test(Y.layers)){const Xt=rt.side;rt.side=Wt,rt.needsUpdate=!0,jl(lt,K,Y,Fe,rt,Qe),rt.side=Xt,rt.needsUpdate=!0,Ye=!0}}Ye===!0&&(P.updateMultisampleRenderTarget(Ee),P.updateRenderTargetMipmap(Ee))}M.setRenderTarget(Te,Le,Ue),M.setClearColor(ge,me),Ne!==void 0&&(Y.viewport=Ne),M.toneMapping=Be}function Jr(S,O,K){const Y=O.isScene===!0?O.overrideMaterial:null;for(let H=0,Ee=S.length;H<Ee;H++){const De=S[H],{object:Te,geometry:Le,group:Ue}=De;let Be=De.material;Be.allowOverride===!0&&Y!==null&&(Be=Y),Te.layers.test(K.layers)&&jl(Te,O,K,Le,Be,Ue)}}function jl(S,O,K,Y,H,Ee){S.onBeforeRender(M,O,K,Y,H,Ee),S.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),H.onBeforeRender(M,O,K,Y,S,Ee),H.transparent===!0&&H.side===zn&&H.forceSinglePass===!1?(H.side=Wt,H.needsUpdate=!0,M.renderBufferDirect(K,O,Y,H,S,Ee),H.side=pi,H.needsUpdate=!0,M.renderBufferDirect(K,O,Y,H,S,Ee),H.side=zn):M.renderBufferDirect(K,O,Y,H,S,Ee),S.onAfterRender(M,O,K,Y,H,Ee)}function Qr(S,O,K){O.isScene!==!0&&(O=Z);const Y=m.get(S),H=R.state.lights,Ee=R.state.shadowsArray,De=H.state.version,Te=we.getParameters(S,H.state,Ee,O,K),Le=we.getProgramCacheKey(Te);let Ue=Y.programs;Y.environment=S.isMeshStandardMaterial?O.environment:null,Y.fog=O.fog,Y.envMap=(S.isMeshStandardMaterial?Q:W).get(S.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&S.envMap===null?O.environmentRotation:S.envMapRotation,Ue===void 0&&(S.addEventListener("dispose",hn),Ue=new Map,Y.programs=Ue);let Be=Ue.get(Le);if(Be!==void 0){if(Y.currentProgram===Be&&Y.lightsStateVersion===De)return Jl(S,Te),Be}else Te.uniforms=we.getUniforms(S),S.onBeforeCompile(Te,M),Be=we.acquireProgram(Te,Le),Ue.set(Le,Be),Y.uniforms=Te.uniforms;const Ne=Y.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ne.clippingPlanes=Me.uniform),Jl(S,Te),Y.needsLights=Th(S),Y.lightsStateVersion=De,Y.needsLights&&(Ne.ambientLightColor.value=H.state.ambient,Ne.lightProbe.value=H.state.probe,Ne.directionalLights.value=H.state.directional,Ne.directionalLightShadows.value=H.state.directionalShadow,Ne.spotLights.value=H.state.spot,Ne.spotLightShadows.value=H.state.spotShadow,Ne.rectAreaLights.value=H.state.rectArea,Ne.ltc_1.value=H.state.rectAreaLTC1,Ne.ltc_2.value=H.state.rectAreaLTC2,Ne.pointLights.value=H.state.point,Ne.pointLightShadows.value=H.state.pointShadow,Ne.hemisphereLights.value=H.state.hemi,Ne.directionalShadowMap.value=H.state.directionalShadowMap,Ne.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Ne.spotShadowMap.value=H.state.spotShadowMap,Ne.spotLightMatrix.value=H.state.spotLightMatrix,Ne.spotLightMap.value=H.state.spotLightMap,Ne.pointShadowMap.value=H.state.pointShadowMap,Ne.pointShadowMatrix.value=H.state.pointShadowMatrix),Y.currentProgram=Be,Y.uniformsList=null,Be}function Zl(S){if(S.uniformsList===null){const O=S.currentProgram.getUniforms();S.uniformsList=Is.seqWithValue(O.seq,S.uniforms)}return S.uniformsList}function Jl(S,O){const K=m.get(S);K.outputColorSpace=O.outputColorSpace,K.batching=O.batching,K.batchingColor=O.batchingColor,K.instancing=O.instancing,K.instancingColor=O.instancingColor,K.instancingMorph=O.instancingMorph,K.skinning=O.skinning,K.morphTargets=O.morphTargets,K.morphNormals=O.morphNormals,K.morphColors=O.morphColors,K.morphTargetsCount=O.morphTargetsCount,K.numClippingPlanes=O.numClippingPlanes,K.numIntersection=O.numClipIntersection,K.vertexAlphas=O.vertexAlphas,K.vertexTangents=O.vertexTangents,K.toneMapping=O.toneMapping}function yh(S,O,K,Y,H){O.isScene!==!0&&(O=Z),P.resetTextureUnits();const Ee=O.fog,De=Y.isMeshStandardMaterial?O.environment:null,Te=q===null?M.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:fr,Le=(Y.isMeshStandardMaterial?Q:W).get(Y.envMap||De),Ue=Y.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Be=!!K.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Ne=!!K.morphAttributes.position,Ye=!!K.morphAttributes.normal,at=!!K.morphAttributes.color;let gt=En;Y.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(gt=M.toneMapping);const _t=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,lt=_t!==void 0?_t.length:0,Fe=m.get(Y),rt=R.state.lights;if(se===!0&&(Pe===!0||S!==ee)){const Lt=S===ee&&Y.id===re;Me.setState(Y,S,Lt)}let Qe=!1;Y.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==rt.state.version||Fe.outputColorSpace!==Te||H.isBatchedMesh&&Fe.batching===!1||!H.isBatchedMesh&&Fe.batching===!0||H.isBatchedMesh&&Fe.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Fe.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Fe.instancing===!1||!H.isInstancedMesh&&Fe.instancing===!0||H.isSkinnedMesh&&Fe.skinning===!1||!H.isSkinnedMesh&&Fe.skinning===!0||H.isInstancedMesh&&Fe.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Fe.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Fe.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Fe.instancingMorph===!1&&H.morphTexture!==null||Fe.envMap!==Le||Y.fog===!0&&Fe.fog!==Ee||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==Me.numPlanes||Fe.numIntersection!==Me.numIntersection)||Fe.vertexAlphas!==Ue||Fe.vertexTangents!==Be||Fe.morphTargets!==Ne||Fe.morphNormals!==Ye||Fe.morphColors!==at||Fe.toneMapping!==gt||Fe.morphTargetsCount!==lt)&&(Qe=!0):(Qe=!0,Fe.__version=Y.version);let Xt=Fe.currentProgram;Qe===!0&&(Xt=Qr(Y,O,H));let Ni=!1,qt=!1,gr=!1;const ht=Xt.getUniforms(),Bt=Fe.uniforms;if(ae.useProgram(Xt.program)&&(Ni=!0,qt=!0,gr=!0),Y.id!==re&&(re=Y.id,qt=!0),Ni||ee!==S){ae.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),ht.setValue(b,"projectionMatrix",S.projectionMatrix),ht.setValue(b,"viewMatrix",S.matrixWorldInverse);const zt=ht.map.cameraPosition;zt!==void 0&&zt.setValue(b,C.setFromMatrixPosition(S.matrixWorld)),ie.logarithmicDepthBuffer&&ht.setValue(b,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&ht.setValue(b,"isOrthographic",S.isOrthographicCamera===!0),ee!==S&&(ee=S,qt=!0,gr=!0)}if(Fe.needsLights&&(rt.state.directionalShadowMap.length>0&&ht.setValue(b,"directionalShadowMap",rt.state.directionalShadowMap,P),rt.state.spotShadowMap.length>0&&ht.setValue(b,"spotShadowMap",rt.state.spotShadowMap,P),rt.state.pointShadowMap.length>0&&ht.setValue(b,"pointShadowMap",rt.state.pointShadowMap,P)),H.isSkinnedMesh){ht.setOptional(b,H,"bindMatrix"),ht.setOptional(b,H,"bindMatrixInverse");const Lt=H.skeleton;Lt&&(Lt.boneTexture===null&&Lt.computeBoneTexture(),ht.setValue(b,"boneTexture",Lt.boneTexture,P))}H.isBatchedMesh&&(ht.setOptional(b,H,"batchingTexture"),ht.setValue(b,"batchingTexture",H._matricesTexture,P),ht.setOptional(b,H,"batchingIdTexture"),ht.setValue(b,"batchingIdTexture",H._indirectTexture,P),ht.setOptional(b,H,"batchingColorTexture"),H._colorsTexture!==null&&ht.setValue(b,"batchingColorTexture",H._colorsTexture,P));const Jt=K.morphAttributes;if((Jt.position!==void 0||Jt.normal!==void 0||Jt.color!==void 0)&&Ge.update(H,K,Xt),(qt||Fe.receiveShadow!==H.receiveShadow)&&(Fe.receiveShadow=H.receiveShadow,ht.setValue(b,"receiveShadow",H.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Bt.envMap.value=Le,Bt.flipEnvMap.value=Le.isCubeTexture&&Le.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&O.environment!==null&&(Bt.envMapIntensity.value=O.environmentIntensity),Bt.dfgLUT!==void 0&&(Bt.dfgLUT.value=xS()),qt&&(ht.setValue(b,"toneMappingExposure",M.toneMappingExposure),Fe.needsLights&&bh(Bt,gr),Ee&&Y.fog===!0&&Ie.refreshFogUniforms(Bt,Ee),Ie.refreshMaterialUniforms(Bt,Y,He,Oe,R.state.transmissionRenderTarget[S.id]),Is.upload(b,Zl(Fe),Bt,P)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Is.upload(b,Zl(Fe),Bt,P),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&ht.setValue(b,"center",H.center),ht.setValue(b,"modelViewMatrix",H.modelViewMatrix),ht.setValue(b,"normalMatrix",H.normalMatrix),ht.setValue(b,"modelMatrix",H.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const Lt=Y.uniformsGroups;for(let zt=0,lo=Lt.length;zt<lo;zt++){const _i=Lt[zt];de.update(_i,Xt),de.bind(_i,Xt)}}return Xt}function bh(S,O){S.ambientLightColor.needsUpdate=O,S.lightProbe.needsUpdate=O,S.directionalLights.needsUpdate=O,S.directionalLightShadows.needsUpdate=O,S.pointLights.needsUpdate=O,S.pointLightShadows.needsUpdate=O,S.spotLights.needsUpdate=O,S.spotLightShadows.needsUpdate=O,S.rectAreaLights.needsUpdate=O,S.hemisphereLights.needsUpdate=O}function Th(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return J},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(S,O,K){const Y=m.get(S);Y.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),m.get(S.texture).__webglTexture=O,m.get(S.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:K,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,O){const K=m.get(S);K.__webglFramebuffer=O,K.__useDefaultFramebuffer=O===void 0};const Ah=b.createFramebuffer();this.setRenderTarget=function(S,O=0,K=0){q=S,I=O,J=K;let Y=null,H=!1,Ee=!1;if(S){const Te=m.get(S);if(Te.__useDefaultFramebuffer!==void 0){ae.bindFramebuffer(b.FRAMEBUFFER,Te.__webglFramebuffer),j.copy(S.viewport),V.copy(S.scissor),te=S.scissorTest,ae.viewport(j),ae.scissor(V),ae.setScissorTest(te),re=-1;return}else if(Te.__webglFramebuffer===void 0)P.setupRenderTarget(S);else if(Te.__hasExternalTextures)P.rebindTextures(S,m.get(S.texture).__webglTexture,m.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Be=S.depthTexture;if(Te.__boundDepthTexture!==Be){if(Be!==null&&m.has(Be)&&(S.width!==Be.image.width||S.height!==Be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(S)}}const Le=S.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(Ee=!0);const Ue=m.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ue[O])?Y=Ue[O][K]:Y=Ue[O],H=!0):S.samples>0&&P.useMultisampledRTT(S)===!1?Y=m.get(S).__webglMultisampledFramebuffer:Array.isArray(Ue)?Y=Ue[K]:Y=Ue,j.copy(S.viewport),V.copy(S.scissor),te=S.scissorTest}else j.copy(N).multiplyScalar(He).floor(),V.copy(F).multiplyScalar(He).floor(),te=$;if(K!==0&&(Y=Ah),ae.bindFramebuffer(b.FRAMEBUFFER,Y)&&ae.drawBuffers(S,Y),ae.viewport(j),ae.scissor(V),ae.setScissorTest(te),H){const Te=m.get(S.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_CUBE_MAP_POSITIVE_X+O,Te.__webglTexture,K)}else if(Ee){const Te=O;for(let Le=0;Le<S.textures.length;Le++){const Ue=m.get(S.textures[Le]);b.framebufferTextureLayer(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0+Le,Ue.__webglTexture,K,Te)}}else if(S!==null&&K!==0){const Te=m.get(S.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,Te.__webglTexture,K)}re=-1},this.readRenderTargetPixels=function(S,O,K,Y,H,Ee,De,Te=0){if(!(S&&S.isWebGLRenderTarget)){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=m.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&De!==void 0&&(Le=Le[De]),Le){ae.bindFramebuffer(b.FRAMEBUFFER,Le);try{const Ue=S.textures[Te],Be=Ue.format,Ne=Ue.type;if(!ie.textureFormatReadable(Be)){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ie.textureTypeReadable(Ne)){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=S.width-Y&&K>=0&&K<=S.height-H&&(S.textures.length>1&&b.readBuffer(b.COLOR_ATTACHMENT0+Te),b.readPixels(O,K,Y,H,pe.convert(Be),pe.convert(Ne),Ee))}finally{const Ue=q!==null?m.get(q).__webglFramebuffer:null;ae.bindFramebuffer(b.FRAMEBUFFER,Ue)}}},this.readRenderTargetPixelsAsync=async function(S,O,K,Y,H,Ee,De,Te=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=m.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&De!==void 0&&(Le=Le[De]),Le)if(O>=0&&O<=S.width-Y&&K>=0&&K<=S.height-H){ae.bindFramebuffer(b.FRAMEBUFFER,Le);const Ue=S.textures[Te],Be=Ue.format,Ne=Ue.type;if(!ie.textureFormatReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ie.textureTypeReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ye=b.createBuffer();b.bindBuffer(b.PIXEL_PACK_BUFFER,Ye),b.bufferData(b.PIXEL_PACK_BUFFER,Ee.byteLength,b.STREAM_READ),S.textures.length>1&&b.readBuffer(b.COLOR_ATTACHMENT0+Te),b.readPixels(O,K,Y,H,pe.convert(Be),pe.convert(Ne),0);const at=q!==null?m.get(q).__webglFramebuffer:null;ae.bindFramebuffer(b.FRAMEBUFFER,at);const gt=b.fenceSync(b.SYNC_GPU_COMMANDS_COMPLETE,0);return b.flush(),await Bm(b,gt,4),b.bindBuffer(b.PIXEL_PACK_BUFFER,Ye),b.getBufferSubData(b.PIXEL_PACK_BUFFER,0,Ee),b.deleteBuffer(Ye),b.deleteSync(gt),Ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,O=null,K=0){const Y=Math.pow(2,-K),H=Math.floor(S.image.width*Y),Ee=Math.floor(S.image.height*Y),De=O!==null?O.x:0,Te=O!==null?O.y:0;P.setTexture2D(S,0),b.copyTexSubImage2D(b.TEXTURE_2D,K,0,0,De,Te,H,Ee),ae.unbindTexture()};const wh=b.createFramebuffer(),Rh=b.createFramebuffer();this.copyTextureToTexture=function(S,O,K=null,Y=null,H=0,Ee=null){Ee===null&&(H!==0?(Xr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ee=H,H=0):Ee=0);let De,Te,Le,Ue,Be,Ne,Ye,at,gt;const _t=S.isCompressedTexture?S.mipmaps[Ee]:S.image;if(K!==null)De=K.max.x-K.min.x,Te=K.max.y-K.min.y,Le=K.isBox3?K.max.z-K.min.z:1,Ue=K.min.x,Be=K.min.y,Ne=K.isBox3?K.min.z:0;else{const Jt=Math.pow(2,-H);De=Math.floor(_t.width*Jt),Te=Math.floor(_t.height*Jt),S.isDataArrayTexture?Le=_t.depth:S.isData3DTexture?Le=Math.floor(_t.depth*Jt):Le=1,Ue=0,Be=0,Ne=0}Y!==null?(Ye=Y.x,at=Y.y,gt=Y.z):(Ye=0,at=0,gt=0);const lt=pe.convert(O.format),Fe=pe.convert(O.type);let rt;O.isData3DTexture?(P.setTexture3D(O,0),rt=b.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(P.setTexture2DArray(O,0),rt=b.TEXTURE_2D_ARRAY):(P.setTexture2D(O,0),rt=b.TEXTURE_2D),b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,O.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,O.unpackAlignment);const Qe=b.getParameter(b.UNPACK_ROW_LENGTH),Xt=b.getParameter(b.UNPACK_IMAGE_HEIGHT),Ni=b.getParameter(b.UNPACK_SKIP_PIXELS),qt=b.getParameter(b.UNPACK_SKIP_ROWS),gr=b.getParameter(b.UNPACK_SKIP_IMAGES);b.pixelStorei(b.UNPACK_ROW_LENGTH,_t.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,_t.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,Ue),b.pixelStorei(b.UNPACK_SKIP_ROWS,Be),b.pixelStorei(b.UNPACK_SKIP_IMAGES,Ne);const ht=S.isDataArrayTexture||S.isData3DTexture,Bt=O.isDataArrayTexture||O.isData3DTexture;if(S.isDepthTexture){const Jt=m.get(S),Lt=m.get(O),zt=m.get(Jt.__renderTarget),lo=m.get(Lt.__renderTarget);ae.bindFramebuffer(b.READ_FRAMEBUFFER,zt.__webglFramebuffer),ae.bindFramebuffer(b.DRAW_FRAMEBUFFER,lo.__webglFramebuffer);for(let _i=0;_i<Le;_i++)ht&&(b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,m.get(S).__webglTexture,H,Ne+_i),b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,m.get(O).__webglTexture,Ee,gt+_i)),b.blitFramebuffer(Ue,Be,De,Te,Ye,at,De,Te,b.DEPTH_BUFFER_BIT,b.NEAREST);ae.bindFramebuffer(b.READ_FRAMEBUFFER,null),ae.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else if(H!==0||S.isRenderTargetTexture||m.has(S)){const Jt=m.get(S),Lt=m.get(O);ae.bindFramebuffer(b.READ_FRAMEBUFFER,wh),ae.bindFramebuffer(b.DRAW_FRAMEBUFFER,Rh);for(let zt=0;zt<Le;zt++)ht?b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,Jt.__webglTexture,H,Ne+zt):b.framebufferTexture2D(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,Jt.__webglTexture,H),Bt?b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,Lt.__webglTexture,Ee,gt+zt):b.framebufferTexture2D(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,Lt.__webglTexture,Ee),H!==0?b.blitFramebuffer(Ue,Be,De,Te,Ye,at,De,Te,b.COLOR_BUFFER_BIT,b.NEAREST):Bt?b.copyTexSubImage3D(rt,Ee,Ye,at,gt+zt,Ue,Be,De,Te):b.copyTexSubImage2D(rt,Ee,Ye,at,Ue,Be,De,Te);ae.bindFramebuffer(b.READ_FRAMEBUFFER,null),ae.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else Bt?S.isDataTexture||S.isData3DTexture?b.texSubImage3D(rt,Ee,Ye,at,gt,De,Te,Le,lt,Fe,_t.data):O.isCompressedArrayTexture?b.compressedTexSubImage3D(rt,Ee,Ye,at,gt,De,Te,Le,lt,_t.data):b.texSubImage3D(rt,Ee,Ye,at,gt,De,Te,Le,lt,Fe,_t):S.isDataTexture?b.texSubImage2D(b.TEXTURE_2D,Ee,Ye,at,De,Te,lt,Fe,_t.data):S.isCompressedTexture?b.compressedTexSubImage2D(b.TEXTURE_2D,Ee,Ye,at,_t.width,_t.height,lt,_t.data):b.texSubImage2D(b.TEXTURE_2D,Ee,Ye,at,De,Te,lt,Fe,_t);b.pixelStorei(b.UNPACK_ROW_LENGTH,Qe),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,Xt),b.pixelStorei(b.UNPACK_SKIP_PIXELS,Ni),b.pixelStorei(b.UNPACK_SKIP_ROWS,qt),b.pixelStorei(b.UNPACK_SKIP_IMAGES,gr),Ee===0&&O.generateMipmaps&&b.generateMipmap(rt),ae.unbindTexture()},this.initRenderTarget=function(S){m.get(S).__webglFramebuffer===void 0&&P.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?P.setTextureCube(S,0):S.isData3DTexture?P.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?P.setTexture2DArray(S,0):P.setTexture2D(S,0),ae.unbindTexture()},this.resetState=function(){I=0,J=0,q=null,ae.reset(),Ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Sn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=je._getDrawingBufferColorSpace(e),t.unpackColorSpace=je._getUnpackColorSpace()}}const Ar=new z;function en(n,e,t,i,r,s){const o=2*Math.PI*r/4,a=Math.max(s-2*r,0),l=Math.PI/4;Ar.copy(e),Ar[i]=0,Ar.normalize();const c=.5*o/(o+a),u=1-Ar.angleTo(n)/l;return Math.sign(Ar[t])===1?u*c:a/(o+a)+c+c*(1-u)}class Wl extends pr{constructor(e=1,t=1,i=1,r=2,s=.1){const o=r*2+1;if(s=Math.min(e/2,t/2,i/2,s),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:i,segments:r,radius:s},o===1)return;const a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;const l=new z,c=new z,u=new z(e,t,i).divideScalar(2).subScalar(s),f=this.attributes.position.array,d=this.attributes.normal.array,p=this.attributes.uv.array,x=f.length/6,_=new z,g=.5/o;for(let h=0,E=0;h<f.length;h+=3,E+=2)switch(l.fromArray(f,h),c.copy(l),c.x-=Math.sign(c.x)*g,c.y-=Math.sign(c.y)*g,c.z-=Math.sign(c.z)*g,c.normalize(),f[h+0]=u.x*Math.sign(l.x)+c.x*s,f[h+1]=u.y*Math.sign(l.y)+c.y*s,f[h+2]=u.z*Math.sign(l.z)+c.z*s,d[h+0]=c.x,d[h+1]=c.y,d[h+2]=c.z,Math.floor(h/x)){case 0:_.set(1,0,0),p[E+0]=en(_,c,"z","y",s,i),p[E+1]=1-en(_,c,"y","z",s,t);break;case 1:_.set(-1,0,0),p[E+0]=1-en(_,c,"z","y",s,i),p[E+1]=1-en(_,c,"y","z",s,t);break;case 2:_.set(0,1,0),p[E+0]=1-en(_,c,"x","z",s,e),p[E+1]=en(_,c,"z","x",s,i);break;case 3:_.set(0,-1,0),p[E+0]=1-en(_,c,"x","z",s,e),p[E+1]=1-en(_,c,"z","x",s,i);break;case 4:_.set(0,0,1),p[E+0]=1-en(_,c,"x","y",s,e),p[E+1]=1-en(_,c,"y","x",s,t);break;case 5:_.set(0,0,-1),p[E+0]=en(_,c,"x","y",s,e),p[E+1]=1-en(_,c,"y","x",s,t);break}}static fromJSON(e){return new Wl(e.width,e.height,e.depth,e.segments,e.radius)}}const SS={Q:{axis:"y",layer:1,dir:1},W:{axis:"y",layer:0,dir:1},E:{axis:"y",layer:-1,dir:1},A:{axis:"x",layer:-1,dir:1},S:{axis:"x",layer:0,dir:1},D:{axis:"x",layer:1,dir:1},Z:{axis:"z",layer:1,dir:-1},X:{axis:"z",layer:0,dir:-1},C:{axis:"z",layer:-1,dir:-1}};function ea(n){return Math.round(n)}function Pu(n){return`${n.x},${n.y},${n.z}`}function MS(n,e,t){const i=u(723727),r=n===1?u(16726832):i,s=n===-1?u(16749824):i,o=e===1?u(16777215):i,a=e===-1?u(16774912):i,l=t===1?u(3458905):i,c=t===-1?u(31487):i;return[r,s,o,a,l,c];function u(f){return new gg({color:f,roughness:.1,metalness:.15})}}const ta=1.01,na=1.01,ia=1.01,ES=30,yS=5;function bS(n,e){const t={isDown:!1,lastX:0,lastY:0,orientation:new Gt,radius:8,target:new z(0,0,0)};((_,g)=>{const h=new Gt().setFromAxisAngle(new z(0,1,0),_),E=g-Math.PI/2,w=new Gt().setFromAxisAngle(new z(1,0,0),E);t.orientation.copy(h).multiply(w)})(Math.PI*.25,Math.PI*.39);const r=(_,g,h)=>Math.max(g,Math.min(h,_)),s=()=>{const _=new z(.45,-.55,t.radius);_.applyQuaternion(t.orientation),n.position.copy(t.target).add(_),n.quaternion.copy(t.orientation),t.orientation.normalize()},o=_=>{_.button===2&&(t.isDown=!0,t.lastX=_.clientX,t.lastY=_.clientY,e.setPointerCapture?.(_.pointerId))},a=_=>{if(!t.isDown)return;const g=_.clientX-t.lastX,h=_.clientY-t.lastY;t.lastX=_.clientX,t.lastY=_.clientY;const E=.008,R=(new z(0,1,0).applyQuaternion(t.orientation).y<0?1:-1)*g*E,L=new Gt().setFromAxisAngle(new z(0,1,0),R),D=-h*E,G=new Gt().setFromAxisAngle(new z(1,0,0),D);t.orientation.multiply(G),t.orientation.premultiply(L),s()},l=_=>{_.button===2&&(t.isDown=!1)},c=_=>{_.preventDefault()},u=_=>{_.preventDefault();const g=Math.sign(_.deltaY);t.radius=r(t.radius+g*.6,yS,ES),s()};e.addEventListener("pointerdown",o,{passive:!0}),e.addEventListener("pointermove",a,{passive:!0}),e.addEventListener("pointerup",l,{passive:!0}),e.addEventListener("pointercancel",l,{passive:!0}),e.addEventListener("wheel",u,{passive:!1}),e.addEventListener("contextmenu",c);const f={up:!1,down:!1,left:!1,right:!1},d=_=>{(_.key==="ArrowUp"||_.key==="ArrowDown"||_.key==="ArrowLeft"||_.key==="ArrowRight")&&(_.preventDefault(),_.key==="ArrowUp"&&(f.up=!0),_.key==="ArrowDown"&&(f.down=!0),_.key==="ArrowLeft"&&(f.left=!0),_.key==="ArrowRight"&&(f.right=!0))},p=_=>{(_.key==="ArrowUp"||_.key==="ArrowDown"||_.key==="ArrowLeft"||_.key==="ArrowRight")&&(_.preventDefault(),_.key==="ArrowUp"&&(f.up=!1),_.key==="ArrowDown"&&(f.down=!1),_.key==="ArrowLeft"&&(f.left=!1),_.key==="ArrowRight"&&(f.right=!1))};return window.addEventListener("keydown",d,!1),window.addEventListener("keyup",p,!1),s(),{update:s,advance:_=>{const g=(f.right?1:0)-(f.left?1:0),h=(f.up?0:1)-(f.down?0:1);if(g===0&&h===0)return;const E=2.8,R=(new z(0,1,0).applyQuaternion(t.orientation).y<0?1:-1)*g*E*_,L=-h*E*_,D=new Gt().setFromAxisAngle(new z(0,1,0),R),G=new Gt().setFromAxisAngle(new z(1,0,0),L);t.orientation.multiply(G),t.orientation.premultiply(D),s()},destroy(){e.removeEventListener("pointerdown",o),e.removeEventListener("pointermove",a),e.removeEventListener("pointerup",l),e.removeEventListener("pointercancel",l),e.removeEventListener("wheel",u),e.removeEventListener("contextmenu",c),window.removeEventListener("keydown",d),window.removeEventListener("keyup",p)},setRadius(_){t.radius=_,s()}}}function TS(n){const e=new cg;e.background=new Ze(724758);const t=new vS({antialias:!0,alpha:!1});t.setPixelRatio(window.devicePixelRatio),n.appendChild(t.domElement);const i=new nn(32,1,.5,1e3);i.position.set(6,6,6),i.lookAt(0,0,0);const r=bS(i,t.domElement),s=new vg(16777215,2241365,3);e.add(s);const o=new iu(16777215,2.5);o.position.set(5,8,6),e.add(o);const a=new iu(16777215,2.2);a.position.set(-3,-5,-4),e.add(a);const l=new Qi;e.add(l);const c=new Map,u=new Wl(.96,.96,.96,10,.11),f=()=>{l.clear(),c.clear();for(let N=-1;N<=1;N++)for(let F=-1;F<=1;F++)for(let $=-1;$<=1;$++){const ce=MS(N,F,$),se=new kt(u,ce);se.position.set(N*ta,F*na,$*ia),l.add(se);const Pe={mesh:se,coord:{x:N,y:F,z:$}};c.set(Pu(Pe.coord),Pe)}};f();let d=0,p=null,x=5;const _=new Qi;e.add(_);const g=()=>{const N=n.clientWidth,F=n.clientHeight;t.setSize(N,F,!1),i.aspect=N/F,i.updateProjectionMatrix()},h=()=>g(),E=(N,F)=>{const $=[];for(const ce of c.values())N==="x"&&ce.coord.x===F&&$.push(ce),N==="y"&&ce.coord.y===F&&$.push(ce),N==="z"&&ce.coord.z===F&&$.push(ce);return $},w=N=>{_.rotation.set(0,0,0),_.position.set(0,0,0),_.updateMatrixWorld(!0);for(const F of N){const $=new z,ce=new Gt,se=new z;F.mesh.matrixWorld.decompose($,ce,se),l.remove(F.mesh),_.add(F.mesh),F.mesh.position.copy($),F.mesh.quaternion.copy(ce),F.mesh.scale.copy(se)}},T=N=>{for(const F of N){const $=new z,ce=new Gt,se=new z;F.mesh.updateMatrixWorld(!0),F.mesh.matrixWorld.decompose($,ce,se),l.add(F.mesh),F.mesh.position.copy($),F.mesh.quaternion.copy(ce),F.mesh.scale.copy(se)}c.clear();for(const F of L()){const $=F.mesh.position,ce=ea($.x/ta),se=ea($.y/na),Pe=ea($.z/ia);F.coord={x:ce,y:se,z:Pe},F.mesh.position.set(ce*ta,se*na,Pe*ia),R(F.mesh.quaternion),c.set(Pu(F.coord),F)}_.clear(),_.rotation.set(0,0,0)},R=N=>{const $=new pt().makeRotationFromQuaternion(N).elements,ce=(B,Z,X)=>{const ne=Math.abs(B),b=Math.abs(Z),ue=Math.abs(X);return ne>=b&&ne>=ue?[Math.sign(B)||1,0,0]:b>=ne&&b>=ue?[0,Math.sign(Z)||1,0]:[0,0,Math.sign(X)||1]},se=ce($[0],$[1],$[2]),Pe=ce($[4],$[5],$[6]),A=[se[1]*Pe[2]-se[2]*Pe[1],se[2]*Pe[0]-se[0]*Pe[2],se[0]*Pe[1]-se[1]*Pe[0]],C=new pt().set(se[0],Pe[0],A[0],0,se[1],Pe[1],A[1],0,se[2],Pe[2],A[2],0,0,0,0,1);N.setFromRotationMatrix(C)},L=()=>{const N=[];for(const $ of l.children)if($ instanceof kt){let ce=null;for(const se of c.values())if(se.mesh===$){ce=se;break}ce||(ce={mesh:$,coord:{x:0,y:0,z:0}}),N.push(ce)}for(const $ of _.children)if($ instanceof kt){let ce=null;for(const se of c.values())if(se.mesh===$){ce=se;break}ce||(ce={mesh:$,coord:{x:0,y:0,z:0}}),N.push(ce)}const F=new Map;for(const $ of N)F.set($.mesh,$);return[...F.values()]},D=(N,F=!1)=>{if(p)return;const $=SS[N],ce=F?-$.dir:$.dir;p={axis:$.axis,layer:$.layer,dir:ce,angle:Math.PI/2,progress:0};const se=E(p.axis,p.layer);w(se)},G=()=>{if(!p)return;const N=[];for(const F of _.children)if(F instanceof kt){let $;for(const ce of c.values())if(ce.mesh===F){$=ce;break}$||($={mesh:F,coord:{x:0,y:0,z:0}}),N.push($)}T(N),p=null},M=N=>{if(!p)return;const $=x*N/(Math.PI/2);p.progress=Math.min(1,p.progress+$);const ce=p.dir*p.angle*p.progress;p.axis==="x"&&(_.rotation.x=ce),p.axis==="y"&&(_.rotation.y=ce),p.axis==="z"&&(_.rotation.z=ce),p.progress>=1&&(p.axis==="x"&&(_.rotation.x=p.dir*p.angle),p.axis==="y"&&(_.rotation.y=p.dir*p.angle),p.axis==="z"&&(_.rotation.z=p.dir*p.angle),G())};let y=performance.now();const I=()=>{d=requestAnimationFrame(I);const N=performance.now(),F=Math.min(.033,(N-y)/1e3);y=N,M(F),r?.advance?.(F),t.render(e,i)},J=N=>{const F=N.key.toLowerCase(),$=N.shiftKey,se={q:"Q",w:"W",e:"E",a:"A",s:"S",d:"D",z:"Z",x:"X",c:"C"}[F];se&&D(se,$)},q=new yg,re=new Je;let ee=null;const j=(N,F)=>{const $=new z(1,0,0).applyQuaternion(i.quaternion),ce=new z(0,1,0).applyQuaternion(i.quaternion),se=(B,Z)=>B.clone().sub(Z.clone().multiplyScalar(B.dot(Z))),Pe=se($,F).normalize(),A=se(ce,F).normalize();return Pe.multiplyScalar(N.x).add(A.multiplyScalar(-N.y)).normalize()},V=(N,F,$)=>{const ce=new z().crossVectors(N,$).normalize(),se=Math.abs(ce.x),Pe=Math.abs(ce.y),A=Math.abs(ce.z);let C,B,Z;se>=Pe&&se>=A?(C="x",B=F.x,Z=Math.sign(ce.x)):Pe>=se&&Pe>=A?(C="y",B=F.y,Z=Math.sign(ce.y)):(C="z",B=F.z,Z=Math.sign(ce.z));const X=Z>0;return{axis:C,layer:B,clockwise:X}},te=(N,F,$)=>{if(p)return;p={axis:N,layer:F,dir:$?1:-1,angle:Math.PI/2,progress:0};const se=E(N,F);w(se)},ge=N=>{if(N.button!==0||p)return;const F=t.domElement.getBoundingClientRect();re.x=(N.clientX-F.left)/F.width*2-1,re.y=-((N.clientY-F.top)/F.height)*2+1,q.setFromCamera(re,i);const $=q.intersectObjects(l.children,!1);if($.length>0){const ce=$[0],se=ce.object;let Pe=null;for(const A of c.values())if(A.mesh===se){Pe=A;break}if(Pe&&ce.face){const C=ce.face.normal.clone().applyQuaternion(se.quaternion).normalize(),B=Math.abs(C.x),Z=Math.abs(C.y),X=Math.abs(C.z);let ne;B>=Z&&B>=X?ne=new z(Math.sign(C.x),0,0):Z>=B&&Z>=X?ne=new z(0,Math.sign(C.y),0):ne=new z(0,0,Math.sign(C.z)),ee={active:!0,startX:N.clientX,startY:N.clientY,faceNormal:ne,hitCoord:{...Pe.coord}},t.domElement.setPointerCapture(N.pointerId)}}},me=N=>{if(!ee||!ee.active)return;if(p){ee=null;return}const F=N.clientX-ee.startX,$=N.clientY-ee.startY,ce=20;if(Math.abs(F)>ce||Math.abs($)>ce){const se=new Je(F,$),Pe=j(se,ee.faceNormal),A=V(ee.faceNormal,ee.hitCoord,Pe);A&&te(A.axis,A.layer,A.clockwise),ee=null}},ve=N=>{N.button===0&&(ee=null)};return t.domElement.addEventListener("pointerdown",ge,{passive:!0}),t.domElement.addEventListener("pointermove",me,{passive:!0}),t.domElement.addEventListener("pointerup",ve,{passive:!0}),window.addEventListener("resize",h,!1),window.addEventListener("keydown",J,!1),g(),r.setRadius(15),I(),{reset:()=>{p||f()},scramble:(N=25)=>{if(p)return;const F=["Q","W","E","A","S","D","Z","X","C"],$=[];for(let Pe=0;Pe<N;Pe++){const A=F[Math.floor(Math.random()*F.length)],C=Math.random()<.5;$.push({m:A,inv:C})}const ce=()=>{if($.length===0){x=se;return}if(p)return;const Pe=$.shift();D(Pe.m,Pe.inv);const A=()=>{if(!p){ce();return}requestAnimationFrame(A)};A()},se=x;x=15,ce()},turn:(N,F=!1)=>{D(N,F)},destroy:()=>{cancelAnimationFrame(d),window.removeEventListener("resize",h,!1),window.removeEventListener("keydown",J,!1),t.domElement.removeEventListener("pointerdown",ge),t.domElement.removeEventListener("pointermove",me),t.domElement.removeEventListener("pointerup",ve),r.destroy(),t.dispose(),n.removeChild(t.domElement);const N=[];l.traverse(F=>{F instanceof kt&&N.push(F)});for(const F of N){const $=F.material;if(Array.isArray($))for(const ce of $)ce.dispose();else $.dispose()}u.dispose()},setSpeed:N=>{x=N}}}const AS={class:"page"},wS={class:"header"},RS={class:"controls"},CS={class:"speed-wrap"},PS=uf({__name:"App",setup(n){const e=ai(null),t=ai(!1),i=ai(5);let r=null;function s(){r?.reset()}function o(){r?.scramble()}function a(){r?.setSpeed(i.value+2)}function l(c){r?.turn(c)}return pf(()=>{e.value&&(r=TS(e.value),r.setSpeed(i.value+2),window.rubik=r)}),mf(()=>{r?.destroy(),r=null}),(c,u)=>(Vs(),If("div",AS,[et("div",wS,[u[12]||(u[12]=et("div",{class:"title"},"Vuebik Cube",-1)),et("div",RS,[et("button",{onClick:s},"reset"),et("button",{onClick:o},"scramble"),et("button",{onClick:u[0]||(u[0]=f=>t.value=!0),class:js({active:t.value})},"timer",2),et("button",{onClick:u[1]||(u[1]=f=>l("Q"))},"Q"),et("button",{onClick:u[2]||(u[2]=f=>l("W"))},"W"),et("button",{onClick:u[3]||(u[3]=f=>l("E"))},"E"),et("button",{onClick:u[4]||(u[4]=f=>l("A"))},"A"),et("button",{onClick:u[5]||(u[5]=f=>l("S"))},"S"),et("button",{onClick:u[6]||(u[6]=f=>l("D"))},"D"),et("button",{onClick:u[7]||(u[7]=f=>l("Z"))},"Z"),et("button",{onClick:u[8]||(u[8]=f=>l("X"))},"X"),et("button",{onClick:u[9]||(u[9]=f=>l("C"))},"C"),et("div",CS,[et("label",null,"Speed: "+Us(i.value),1),Sd(et("input",{type:"range",min:"1",max:"20","onUpdate:modelValue":u[10]||(u[10]=f=>i.value=f),onInput:a},null,544),[[Yp,i.value,void 0,{number:!0}]])])])]),et("div",{class:"canvasWrap",ref_key:"host",ref:e},[...u[13]||(u[13]=[et("div",{class:"hint"},[As(" left drag on face to turn, right drag to orbit, scroll to zoom. keys: "),et("span",{class:"kbd"},"q w e a s d z x c"),As(" (shift = inverse) "),et("br"),As(" arrow keys: orbit camera (hold two for diagonal combined orbit) ")],-1)])],512),t.value?(Vs(),Uf(rm,{key:0,onClose:u[11]||(u[11]=f=>t.value=!1)})):pp("",!0)]))}});jp(PS).mount("#app");
