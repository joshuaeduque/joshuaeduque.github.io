import{f as Z,s as G,n as F,o as B,h as L}from"../chunks/scheduler.Va3TKrii.js";import{S as J,i as W,m as z,g as S,k as q,d as g,e as f,s as D,c as h,a as A,y as k,f as T,o as d,h as m,z as V}from"../chunks/index.Dqn6enHJ.js";const N="data:image/svg+xml,%3csvg%20width='98'%20height='96'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M48.854%200C21.839%200%200%2022%200%2049.217c0%2021.756%2013.993%2040.172%2033.405%2046.69%202.427.49%203.316-1.059%203.316-2.362%200-1.141-.08-5.052-.08-9.127-13.59%202.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015%204.934.326%207.523%205.052%207.523%205.052%204.367%207.496%2011.404%205.378%2014.235%204.074.404-3.178%201.699-5.378%203.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283%200-5.378%201.94-9.778%205.014-13.2-.485-1.222-2.184-6.275.486-13.038%200%200%204.125-1.304%2013.426%205.052a46.97%2046.97%200%200%201%2012.214-1.63c4.125%200%208.33.571%2012.213%201.63%209.302-6.356%2013.427-5.052%2013.427-5.052%202.67%206.763.97%2011.816.485%2013.038%203.155%203.422%205.015%207.822%205.015%2013.2%200%2018.905-11.404%2023.06-22.324%2024.283%201.78%201.548%203.316%204.481%203.316%209.126%200%206.6-.08%2011.897-.08%2013.526%200%201.304.89%202.853%203.316%202.364%2019.412-6.52%2033.405-24.935%2033.405-46.691C97.707%2022%2075.788%200%2048.854%200z'%20fill='%2324292f'/%3e%3c/svg%3e",Q="data:image/svg+xml,%3csvg%20id='Layer_1'%20data-name='Layer%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20122.88%20122.88'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill-rule:evenodd;}%3c/style%3e%3c/defs%3e%3ctitle%3eemail-round-color%3c/title%3e%3cpath%20class='cls-1'%20d='M61.44,0A61.44,61.44,0,1,1,0,61.44,61.44,61.44,0,0,1,61.44,0ZM30.73,38,62,63.47,91.91,38Zm-2,42.89L51,58.55,28.71,40.39V80.87ZM53.43,60.55l-22.95,23H92.21l-21.94-23L63,66.71h0a1.57,1.57,0,0,1-2,0l-7.59-6.19Zm19.24-2,21.5,22.54V40.19L72.67,58.51Z'/%3e%3c/svg%3e";function X(a){const n=a-1;return n*n*n+1}function $(a){return a===1?a:1-Math.pow(2,-10*a)}function j(a,{delay:n=0,duration:e=400,easing:t=X,x:o=0,y:I=0,opacity:w=0}={}){const p=getComputedStyle(a),i=+p.opacity,M=p.transform==="none"?"":p.transform,b=i*(1-w),[x,r]=Z(o),[C,_]=Z(I);return{delay:n,duration:e,easing:t,css:(v,l)=>`
			transform: ${M} translate(${(1-v)*x}${r}, ${(1-v)*C}${_});
			opacity: ${i-b*l}`}}function R(a){let n,e,t,o,I="JOSHUA DUQUE",w,p,i,M='<p class="font-notosansmono-condensed">cs major at utsa that&#39;s loved tech from a young age.</p> <p class="font-notosansmono-condensed">wannabe full stack developer.</p> <p class="font-notosansmono-condensed">i really like sony&#39;s playstation 3.</p> <p class="font-notosansmono-condensed underline w-fit hvr-sweep-to-right svelte-l0iatx"><a href="#about-me">about me</a></p>',b,x,r,C=`<a href="https://github.com/joshuaeduque" target="_blank"><img class="w-10 contrast-200 transition hover:scale-110" src="${N}" title="GitHub link" alt="GitHub link"/></a> <a href="mailto:joshuaeduque@gmail.com"><img class="w-10 contrast-200 transition hover:scale-110" src="${Q}" title="Email link" alt="Email link"/></a>`,_,v,l,E='<p class="font-notosansmono-condensed font-bold">projects</p> <div><p class="font-notosansmono-condensed underline hvr-sweep-to-right svelte-l0iatx"><a href="https://github.com/joshuaeduque/ps3mapi" target="_blank">PS3MAPI</a></p> <p class="font-notosansmono-condensed">Remote communications library for Sony&#39;s PlayStation 3 written in C#</p></div> <div><p class="font-notosansmono-condensed underline hvr-sweep-to-right svelte-l0iatx"><a href="https://devpost.com/software/futurefocus" target="_blank">FutureFocus</a></p> <p class="font-notosansmono-condensed">Groq AI powered career planner awarded best use of Terraform at RowdyHacks X</p></div> <div><p class="font-notosansmono-condensed underline hvr-sweep-to-right svelte-l0iatx"><a href="https://github.com/joshuaeduque/dragonscroll" target="_blank">DragonScroll</a></p> <p class="font-notosansmono-condensed">Offline personal book logger for Android using Room DB and SharedPreferences libraries</p></div>',P,H,c,O=`<p class="font-notosansmono-condensed font-bold">about me</p> <p class="font-notosansmono-condensed">My name is Joshua Duque, and I’m a computer science student at the University of Texas at San
			Antonio. I grew up in a small town with a population of about 3,000, spending my childhood
			with my mother and older brother. In our living room sat a CRT monitor connected to a desktop
			running Windows ME, where my mom played solitaire and my brother watched Flash Player videos.
			I can’t pinpoint the exact moment it happened, but the hum of the machine and the glow of the
			screen sparked a fascination with computers that’s stuck with me ever since.</p> <br/> <p class="font-notosansmono-condensed">As a teenager, I started learning C++ and basic x86/PowerPC assembly to create cheats for my
			favorite online games. I loved figuring out how each game worked and sharing in-game resources
			with my friends after a breakthrough. Later, I joined my high school’s robotics team as the
			only programmer, which introduced me to hardware components and embedded development—something
			I still enjoy working with today.</p> <br/> <p class="font-notosansmono-condensed">After graduating high school, I was uncertain about pursuing higher education right away.
			Instead, I spent time with family and worked locally during the COVID pandemic. However,
			someone close to me encouraged me to aim beyond the boundaries of my small town. With their
			support, I completed an associate degree at my local community college and decided to pursue a
			bachelor’s degree in computer science, turning my long-standing passion for technology into a
			career path.</p> <br/> <p class="font-notosansmono-condensed">My biggest hope is to inspire others from similar backgrounds to step out of their comfort
			zones and discover what’s truly possible for themselves. One day, I aspire to give back to my
			community in a meaningful way that genuinely impacts those who need it most. Thank you for
			taking the time to read, and I hope you have an amazing day :)</p>`;return{c(){n=f("div"),e=f("div"),t=f("div"),o=f("p"),o.textContent=I,p=D(),i=f("div"),i.innerHTML=M,x=D(),r=f("div"),r.innerHTML=C,v=D(),l=f("div"),l.innerHTML=E,H=D(),c=f("div"),c.innerHTML=O,this.h()},l(s){n=h(s,"DIV",{class:!0});var u=A(n);e=h(u,"DIV",{class:!0});var U=A(e);t=h(U,"DIV",{class:!0});var y=A(t);o=h(y,"P",{class:!0,"data-svelte-h":!0}),k(o)!=="svelte-1k1xpap"&&(o.textContent=I),p=T(y),i=h(y,"DIV",{class:!0,"data-svelte-h":!0}),k(i)!=="svelte-67lkg0"&&(i.innerHTML=M),x=T(y),r=h(y,"DIV",{class:!0,"data-svelte-h":!0}),k(r)!=="svelte-1982b1r"&&(r.innerHTML=C),y.forEach(g),U.forEach(g),v=T(u),l=h(u,"DIV",{class:!0,"data-svelte-h":!0}),k(l)!=="svelte-1x7wq6k"&&(l.innerHTML=E),u.forEach(g),H=T(s),c=h(s,"DIV",{id:!0,class:!0,"data-svelte-h":!0}),k(c)!=="svelte-hgr90w"&&(c.innerHTML=O),this.h()},h(){d(o,"class","font-librebarcode text-7xl"),d(i,"class","flex flex-col gap-4"),d(r,"class","flex gap-4"),d(t,"class","flex flex-col justify-center gap-4"),d(e,"class","h-fit flex sm:justify-center"),d(l,"class","h-fit flex flex-col gap-4"),d(n,"class","h-screen overflow-hidden p-4 grid content-evenly sm:grid-cols-2 sm:items-center"),d(c,"id","about-me"),d(c,"class","p-4")},m(s,u){S(s,n,u),m(n,e),m(e,t),m(t,o),m(t,p),m(t,i),m(t,x),m(t,r),m(n,v),m(n,l),S(s,H,u),S(s,c,u)},i(s){s&&(w||L(()=>{w=V(o,j,{y:-100,easing:$,duration:1e3}),w.start()})),s&&(b||L(()=>{b=V(i,j,{x:-100,easing:$,duration:1e3}),b.start()})),s&&(_||L(()=>{_=V(r,j,{y:100,easing:$,duration:1e3}),_.start()})),s&&(P||L(()=>{P=V(l,j,{x:100,easing:$,duration:1e3}),P.start()}))},o:F,d(s){s&&(g(n),g(H),g(c))}}}function K(a){let n,e=a[0]&&R();return{c(){e&&e.c(),n=z()},l(t){e&&e.l(t),n=z()},m(t,o){e&&e.m(t,o),S(t,n,o)},p(t,[o]){t[0]?e?o&1&&q(e,1):(e=R(),e.c(),q(e,1),e.m(n.parentNode,n)):e&&(e.d(1),e=null)},i(t){q(e)},o:F,d(t){t&&g(n),e&&e.d(t)}}}function Y(a,n,e){let t=!1;return B(async()=>{await document.fonts.ready,e(0,t=!0)}),[t]}class ne extends J{constructor(n){super(),W(this,n,Y,K,G,{})}}export{ne as component};
