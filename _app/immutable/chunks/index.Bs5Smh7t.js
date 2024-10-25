var V=Object.defineProperty;var W=(e,t,n)=>t in e?V(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var C=(e,t,n)=>W(e,typeof t!="symbol"?t+"":t,n);import{n as w,r as A,i as P,h as j,j as G,k as I,l as J,m as K,p as Q,q as X,v as O,w as Y,x as Z,y as ee}from"./scheduler.Va3TKrii.js";const z=typeof window<"u";let te=z?()=>window.performance.now():()=>Date.now(),R=z?e=>requestAnimationFrame(e):w;const x=new Set;function M(e){x.forEach(t=>{t.c(e)||(x.delete(t),t.f())}),x.size!==0&&R(M)}function ne(e){let t;return x.size===0&&R(M),{promise:new Promise(n=>{x.add(t={c:e,f:n})}),abort(){x.delete(t)}}}let E=!1;function ie(){E=!0}function re(){E=!1}function se(e,t,n,i){for(;e<t;){const r=e+(t-e>>1);n(r)<=i?e=r+1:t=r}return e}function le(e){if(e.hydrate_init)return;e.hydrate_init=!0;let t=e.childNodes;if(e.nodeName==="HEAD"){const s=[];for(let l=0;l<t.length;l++){const u=t[l];u.claim_order!==void 0&&s.push(u)}t=s}const n=new Int32Array(t.length+1),i=new Int32Array(t.length);n[0]=-1;let r=0;for(let s=0;s<t.length;s++){const l=t[s].claim_order,u=(r>0&&t[n[r]].claim_order<=l?r+1:se(1,r,d=>t[n[d]].claim_order,l))-1;i[s]=n[u]+1;const f=u+1;n[f]=s,r=Math.max(f,r)}const o=[],a=[];let c=t.length-1;for(let s=n[r]+1;s!=0;s=i[s-1]){for(o.push(t[s-1]);c>=s;c--)a.push(t[c]);c--}for(;c>=0;c--)a.push(t[c]);o.reverse(),a.sort((s,l)=>s.claim_order-l.claim_order);for(let s=0,l=0;s<a.length;s++){for(;l<o.length&&a[s].claim_order>=o[l].claim_order;)l++;const u=l<o.length?o[l]:null;e.insertBefore(a[s],u)}}function ae(e,t){e.appendChild(t)}function T(e){if(!e)return document;const t=e.getRootNode?e.getRootNode():e.ownerDocument;return t&&t.host?t:e.ownerDocument}function oe(e){const t=F("style");return t.textContent="/* empty */",ce(T(e),t),t.sheet}function ce(e,t){return ae(e.head||e,t),t.sheet}function fe(e,t){if(E){for(le(e),(e.actual_end_child===void 0||e.actual_end_child!==null&&e.actual_end_child.parentNode!==e)&&(e.actual_end_child=e.firstChild);e.actual_end_child!==null&&e.actual_end_child.claim_order===void 0;)e.actual_end_child=e.actual_end_child.nextSibling;t!==e.actual_end_child?(t.claim_order!==void 0||t.parentNode!==e)&&e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling}else(t.parentNode!==e||t.nextSibling!==null)&&e.appendChild(t)}function je(e,t,n){E&&!n?fe(e,t):(t.parentNode!==e||t.nextSibling!=n)&&e.insertBefore(t,n||null)}function H(e){e.parentNode&&e.parentNode.removeChild(e)}function Pe(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function F(e){return document.createElement(e)}function B(e){return document.createTextNode(e)}function Re(){return B(" ")}function Be(){return B("")}function De(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Ie(e){return e.dataset.svelteH}function ue(e){return Array.from(e.childNodes)}function de(e){e.claim_info===void 0&&(e.claim_info={last_index:0,total_claimed:0})}function L(e,t,n,i,r=!1){de(e);const o=(()=>{for(let a=e.claim_info.last_index;a<e.length;a++){const c=e[a];if(t(c)){const s=n(c);return s===void 0?e.splice(a,1):e[a]=s,r||(e.claim_info.last_index=a),c}}for(let a=e.claim_info.last_index-1;a>=0;a--){const c=e[a];if(t(c)){const s=n(c);return s===void 0?e.splice(a,1):e[a]=s,r?s===void 0&&e.claim_info.last_index--:e.claim_info.last_index=a,c}}return i()})();return o.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,o}function _e(e,t,n,i){return L(e,r=>r.nodeName===t,r=>{const o=[];for(let a=0;a<r.attributes.length;a++){const c=r.attributes[a];n[c.name]||o.push(c.name)}o.forEach(a=>r.removeAttribute(a))},()=>i(t))}function Oe(e,t,n){return _e(e,t,n,F)}function me(e,t){return L(e,n=>n.nodeType===3,n=>{const i=""+t;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>B(t),!0)}function ke(e){return me(e," ")}function qe(e,t){t=""+t,e.data!==t&&(e.data=t)}function ze(e,t,n,i){n==null?e.style.removeProperty(t):e.style.setProperty(t,n,"")}function he(e,t,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(e,{detail:t,bubbles:n,cancelable:i})}function Me(e,t){return new e(t)}const N=new Map;let b=0;function pe(e){let t=5381,n=e.length;for(;n--;)t=(t<<5)-t^e.charCodeAt(n);return t>>>0}function $e(e,t){const n={stylesheet:oe(t),rules:{}};return N.set(e,n),n}function ye(e,t,n,i,r,o,a,c=0){const s=16.666/i;let l=`{
`;for(let h=0;h<=1;h+=s){const y=t+(n-t)*o(h);l+=h*100+`%{${a(y,1-y)}}
`}const u=l+`100% {${a(n,1-n)}}
}`,f=`__svelte_${pe(u)}_${c}`,d=T(e),{stylesheet:_,rules:m}=N.get(d)||$e(d,e);m[f]||(m[f]=!0,_.insertRule(`@keyframes ${f} ${u}`,_.cssRules.length));const $=e.style.animation||"";return e.style.animation=`${$?`${$}, `:""}${f} ${i}ms linear ${r}ms 1 both`,b+=1,f}function k(e,t){const n=(e.style.animation||"").split(", "),i=n.filter(t?o=>o.indexOf(t)<0:o=>o.indexOf("__svelte")===-1),r=n.length-i.length;r&&(e.style.animation=i.join(", "),b-=r,b||xe())}function xe(){R(()=>{b||(N.forEach(e=>{const{ownerNode:t}=e.stylesheet;t&&H(t)}),N.clear())})}let g;function ge(){return g||(g=Promise.resolve(),g.then(()=>{g=null})),g}function q(e,t,n){e.dispatchEvent(he(`intro${n}`))}const v=new Set;let p;function Te(){p={r:0,c:[],p}}function He(){p.r||A(p.c),p=p.p}function we(e,t){e&&e.i&&(v.delete(e),e.i(t))}function Fe(e,t,n,i){if(e&&e.o){if(v.has(e))return;v.add(e),p.c.push(()=>{v.delete(e),i&&(n&&e.d(1),i())}),e.o(t)}else i&&i()}const ve={duration:0};function Le(e,t,n){const i={direction:"in"};let r=t(e,n,i),o=!1,a,c,s=0;function l(){a&&k(e,a)}function u(){const{delay:d=0,duration:_=300,easing:m=G,tick:$=w,css:h}=r||ve;h&&(a=ye(e,0,1,_,d,m,h,s++)),$(0,1);const y=te()+d,U=y+_;c&&c.abort(),o=!0,j(()=>q(e,!0,"start")),c=ne(S=>{if(o){if(S>=U)return $(1,0),q(e,!0,"end"),l(),o=!1;if(S>=y){const D=m((S-y)/_);$(D,1-D)}}return o})}let f=!1;return{start(){f||(f=!0,k(e),P(r)?(r=r(i),ge().then(u)):u())},invalidate(){f=!1},end(){o&&(l(),o=!1)}}}function Ue(e){e&&e.c()}function Ve(e,t){e&&e.l(t)}function Ne(e,t,n){const{fragment:i,after_update:r}=e.$$;i&&i.m(t,n),j(()=>{const o=e.$$.on_mount.map(Y).filter(P);e.$$.on_destroy?e.$$.on_destroy.push(...o):A(o),e.$$.on_mount=[]}),r.forEach(j)}function be(e,t){const n=e.$$;n.fragment!==null&&(Q(n.after_update),A(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Ae(e,t){e.$$.dirty[0]===-1&&(Z.push(e),ee(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function We(e,t,n,i,r,o,a=null,c=[-1]){const s=X;O(e);const l=e.$$={fragment:null,ctx:[],props:o,update:w,not_equal:r,bound:I(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(s?s.$$.context:[])),callbacks:I(),dirty:c,skip_bound:!1,root:t.target||s.$$.root};a&&a(l.root);let u=!1;if(l.ctx=n?n(e,t.props||{},(f,d,..._)=>{const m=_.length?_[0]:d;return l.ctx&&r(l.ctx[f],l.ctx[f]=m)&&(!l.skip_bound&&l.bound[f]&&l.bound[f](m),u&&Ae(e,f)),d}):[],l.update(),u=!0,A(l.before_update),l.fragment=i?i(l.ctx):!1,t.target){if(t.hydrate){ie();const f=ue(t.target);l.fragment&&l.fragment.l(f),f.forEach(H)}else l.fragment&&l.fragment.c();t.intro&&we(e.$$.fragment),Ne(e,t.target,t.anchor),re(),J()}O(s)}class Ge{constructor(){C(this,"$$");C(this,"$$set")}$destroy(){be(this,1),this.$destroy=w}$on(t,n){if(!P(n))return w;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(t){this.$$set&&!K(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Ee="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Ee);export{Pe as A,Ge as S,ue as a,me as b,Oe as c,H as d,F as e,ke as f,je as g,fe as h,We as i,qe as j,we as k,Fe as l,Be as m,He as n,De as o,ze as p,Te as q,Me as r,Re as s,B as t,Ue as u,Ve as v,Ne as w,be as x,Ie as y,Le as z};
