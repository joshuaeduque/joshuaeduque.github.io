function x(){}const M=t=>t;function k(t,n){for(const e in n)t[e]=n[e];return t}function w(t){return t()}function z(){return Object.create(null)}function j(t){t.forEach(w)}function P(t){return typeof t=="function"}function S(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function U(t){return Object.keys(t).length===0}function E(t,...n){if(t==null){for(const o of n)o(void 0);return x}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function A(t,n,e){t.$$.on_destroy.push(E(n,e))}function B(t,n,e,o){if(t){const r=b(t,n,e,o);return t[0](r)}}function b(t,n,e,o){return t[1]&&o?k(e.ctx.slice(),t[1](o(n))):e.ctx}function C(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const l=[],f=Math.max(n.dirty.length,r.length);for(let u=0;u<f;u+=1)l[u]=n.dirty[u]|r[u];return l}return n.dirty|r}return n.dirty}function D(t,n,e,o,r,l){if(r){const f=b(n,e,o,l);t.p(f,r)}}function G(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let o=0;o<e;o++)n[o]=-1;return n}return-1}function H(t){const n=typeof t=="string"&&t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return n?[parseFloat(n[1]),n[2]||"px"]:[t,"px"]}let a;function d(t){a=t}function y(){if(!a)throw new Error("Function called outside component initialization");return a}function I(t){y().$$.on_mount.push(t)}function J(t){y().$$.after_update.push(t)}const i=[],p=[];let c=[];const g=[],m=Promise.resolve();let h=!1;function O(){h||(h=!0,m.then(v))}function K(){return O(),m}function q(t){c.push(t)}const _=new Set;let s=0;function v(){if(s!==0)return;const t=a;do{try{for(;s<i.length;){const n=i[s];s++,d(n),F(n.$$)}}catch(n){throw i.length=0,s=0,n}for(d(null),i.length=0,s=0;p.length;)p.pop()();for(let n=0;n<c.length;n+=1){const e=c[n];_.has(e)||(_.add(e),e())}c.length=0}while(i.length);for(;g.length;)g.pop()();h=!1,_.clear(),d(t)}function F(t){if(t.fragment!==null){t.update(),j(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(q)}}function L(t){const n=[],e=[];c.forEach(o=>t.indexOf(o)===-1?n.push(o):e.push(o)),e.forEach(o=>o()),c=n}export{B as a,C as b,A as c,J as d,p as e,H as f,G as g,q as h,P as i,M as j,d as k,z as l,v as m,x as n,I as o,U as p,L as q,j as r,S as s,K as t,D as u,a as v,w,i as x,O as y};
