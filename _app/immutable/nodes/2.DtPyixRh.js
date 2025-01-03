import{f as J,s as W,n as O,o as F,h as j}from"../chunks/scheduler.Va3TKrii.js";import{S as K,i as X,m as N,g as V,k as H,d as b,e as g,s as T,c as _,a as D,y as P,f as M,o as w,h as u,z as A,A as Y,t as Z,b as ee}from"../chunks/index.Bs5Smh7t.js";function B(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function te(n){const t=n-1;return t*t*t+1}function E(n){return n===1?n:1-Math.pow(2,-10*n)}function q(n,{delay:t=0,duration:e=400,easing:s=te,x:i=0,y:p=0,opacity:r=0}={}){const f=getComputedStyle(n),m=+f.opacity,C=f.transform==="none"?"":f.transform,h=m*(1-r),[v,$]=J(i),[S,I]=J(p);return{delay:t,duration:e,easing:s,css:(y,d)=>`
			transform: ${C} translate(${(1-y)*v}${$}, ${(1-y)*S}${I});
			opacity: ${m-h*d}`}}function G(n,t,e){const s=n.slice();return s[2]=t[e],s}function Q(n){let t,e,s="JOSHUA DUQUE",i,p,r,f=`<p class="font-roboto header-responsive svelte-r7zd96">ABOUT ME</p> <p class="font-roboto-mono text-responsive svelte-r7zd96">My name&#39;s Joshua Duque and I&#39;m a computer science student at UTSA. Software became my
				passion as a teen writing cheats for my favorite online video games. Now, I&#39;d like to make
				it a career. While most of my work is for personal utility, I&#39;d like to diversify in the
				future. Thank you for visiting and please enjoy.</p>`,m,C,h,v,$="PROJECTS",S,I,y,d,L='<a href="https://github.com/joshuaeduque" target="_blank"><img class="github-responsive brightness-0 svelte-r7zd96" src="/images/github-mark.svg" alt="GitHub logo"/></a>',U,x=B(n[1]),l=[];for(let o=0;o<x.length;o+=1)l[o]=R(G(n,x,o));return{c(){t=g("section"),e=g("p"),e.textContent=s,p=T(),r=g("div"),r.innerHTML=f,C=T(),h=g("div"),v=g("p"),v.textContent=$,S=T();for(let o=0;o<l.length;o+=1)l[o].c();y=T(),d=g("div"),d.innerHTML=L,this.h()},l(o){t=_(o,"SECTION",{class:!0});var c=D(t);e=_(c,"P",{class:!0,"data-svelte-h":!0}),P(e)!=="svelte-1546iy5"&&(e.textContent=s),p=M(c),r=_(c,"DIV",{"data-svelte-h":!0}),P(r)!=="svelte-oyvvlq"&&(r.innerHTML=f),C=M(c),h=_(c,"DIV",{});var a=D(h);v=_(a,"P",{class:!0,"data-svelte-h":!0}),P(v)!=="svelte-bc4c4a"&&(v.textContent=$),S=M(a);for(let k=0;k<l.length;k+=1)l[k].l(a);a.forEach(b),y=M(c),d=_(c,"DIV",{class:!0,"data-svelte-h":!0}),P(d)!=="svelte-6wectt"&&(d.innerHTML=L),c.forEach(b),this.h()},h(){w(e,"class","font-librebarcode name-responsive svelte-r7zd96"),w(v,"class","font-roboto header-responsive svelte-r7zd96"),w(d,"class","flex flex-row justify-center"),w(t,"class","grid overflow-x-hidden content-center p-4 w-screen max-w-full h-screen gap-y-6")},m(o,c){V(o,t,c),u(t,e),u(t,p),u(t,r),u(t,C),u(t,h),u(h,v),u(h,S);for(let a=0;a<l.length;a+=1)l[a]&&l[a].m(h,null);u(t,y),u(t,d)},p(o,c){if(n=o,c&2){x=B(n[1]);let a;for(a=0;a<x.length;a+=1){const k=G(n,x,a);l[a]?l[a].p(k,c):(l[a]=R(k),l[a].c(),l[a].m(h,null))}for(;a<l.length;a+=1)l[a].d(1);l.length=x.length}},i(o){o&&(i||j(()=>{i=A(e,q,{duration:z,easing:E,y:-100}),i.start()})),o&&(m||j(()=>{m=A(r,q,{duration:z,easing:E,x:-100}),m.start()})),o&&(I||j(()=>{I=A(h,q,{duration:z,easing:E,x:100}),I.start()})),o&&(U||j(()=>{U=A(d,q,{duration:z,easing:E,y:100}),U.start()}))},o:O,d(o){o&&b(t),Y(l,o)}}}function R(n){let t,e,s=n[2].name+"",i,p;return{c(){t=g("p"),e=g("a"),i=Z(s),p=T(),this.h()},l(r){t=_(r,"P",{class:!0});var f=D(t);e=_(f,"A",{href:!0});var m=D(e);i=ee(m,s),m.forEach(b),p=M(f),f.forEach(b),this.h()},h(){w(e,"href",n[2].link),w(t,"class","text-responsive px-1 w-fit font-roboto-mono transition hover:bg-black hover:text-white svelte-r7zd96")},m(r,f){V(r,t,f),u(t,e),u(e,i),u(t,p)},p:O,d(r){r&&b(t)}}}function ne(n){let t,e=n[0]&&Q(n);return{c(){e&&e.c(),t=N()},l(s){e&&e.l(s),t=N()},m(s,i){e&&e.m(s,i),V(s,t,i)},p(s,[i]){s[0]?e?(e.p(s,i),i&1&&H(e,1)):(e=Q(s),e.c(),H(e,1),e.m(t.parentNode,t)):e&&(e.d(1),e=null)},i(s){H(e)},o:O,d(s){s&&b(t),e&&e.d(s)}}}const z=1e3;function se(n,t,e){const s=[{name:"PS3MAPI",link:"https://github.com/joshuaeduque/PS3MAPI"},{name:"DragonScroll",link:"https://github.com/joshuaeduque/DragonScroll"},{name:"T6Injector",link:"https://github.com/joshuaeduque/T6Injector"}];let i=!1;return F(()=>{e(0,i=!0)}),[i,s]}class ie extends K{constructor(t){super(),X(this,t,se,ne,W,{})}}export{ie as component};
