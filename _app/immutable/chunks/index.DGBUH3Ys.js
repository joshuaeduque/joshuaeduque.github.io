import{a as l}from"./scheduler.xgREHNX-.js";function $(t){const o=t-1;return o*o*o+1}function C(t){return t===1?t:1-Math.pow(2,-10*t)}function O(t,{delay:o=0,duration:a=400,easing:e=$,x:f=0,y:i=0,opacity:s=0}={}){const n=getComputedStyle(t),r=+n.opacity,u=n.transform==="none"?"":n.transform,p=r*(1-s),[y,c]=l(f),[d,_]=l(i);return{delay:o,duration:a,easing:e,css:(m,g)=>`
			transform: ${u} translate(${(1-m)*y}${c}, ${(1-m)*d}${_});
			opacity: ${r-p*g}`}}function S(t,{delay:o=0,duration:a=400,easing:e=$,start:f=0,opacity:i=0}={}){const s=getComputedStyle(t),n=+s.opacity,r=s.transform==="none"?"":s.transform,u=1-f,p=n*(1-i);return{delay:o,duration:a,easing:e,css:(y,c)=>`
			transform: ${r} scale(${1-u*c});
			opacity: ${n-p*c}
		`}}export{C as e,O as f,S as s};
