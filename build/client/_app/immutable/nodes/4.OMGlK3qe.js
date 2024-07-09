import{s as d,n as r}from"../chunks/scheduler.Cp24rM3s.js";import{S as m,i as f,k as g,e as h,m as p,c as v,g as _,h as c,q as x,j as u}from"../chunks/index.CLLxW2Xa.js";function k(s){let n,t,e="Login with github",a,i;return{c(){n=g(`// src/routes/login/+page.svelte

`),t=h("button"),t.textContent=e},l(o){n=p(o,`// src/routes/login/+page.svelte

`),t=v(o,"BUTTON",{"data-svelte-h":!0}),_(t)!=="svelte-1iojyki"&&(t.textContent=e)},m(o,l){c(o,n,l),c(o,t,l),a||(i=x(t,"click",s[0]),a=!0)},p:r,i:r,o:r,d(o){o&&(u(n),u(t)),a=!1,i()}}}function C(s,n,t){let{data:e}=n;function a(){document.cookie=`state=${e==null?void 0:e.authProviderState}`,window.location.href=e.authProviderRedirect||""}return s.$$set=i=>{"data"in i&&t(1,e=i.data)},[a,e]}class w extends m{constructor(n){super(),f(this,n,C,k,d,{data:1})}}export{w as component};
