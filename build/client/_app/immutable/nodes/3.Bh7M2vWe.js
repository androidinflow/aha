import{s as M,n as E,b as N}from"../chunks/scheduler.Cp24rM3s.js";import{S as U,i as w,e as p,k as P,s as b,b as j,c as d,l as k,m as x,j as c,d as y,g as G,h,n as m,o as z,p as A,f as q}from"../chunks/index.CLLxW2Xa.js";import{e as D}from"../chunks/each.D6YF6ztN.js";function L(r,e,n){const t=r.slice();return t[2]=e[n],t}function B(r){let e,n="No posts available.";return{c(){e=p("p"),e.textContent=n},l(t){e=d(t,"P",{"data-svelte-h":!0}),G(e)!=="svelte-1mopmij"&&(e.textContent=n)},m(t,l){h(t,e,l)},p:E,d(t){t&&c(e)}}}function F(r){let e,n=D(r[1]),t=[];for(let l=0;l<n.length;l+=1)t[l]=S(L(r,n,l));return{c(){e=p("ul");for(let l=0;l<t.length;l+=1)t[l].c()},l(l){e=d(l,"UL",{});var i=k(e);for(let s=0;s<t.length;s+=1)t[s].l(i);i.forEach(c)},m(l,i){h(l,e,i);for(let s=0;s<t.length;s+=1)t[s]&&t[s].m(e,null)},p(l,i){if(i&2){n=D(l[1]);let s;for(s=0;s<n.length;s+=1){const _=L(l,n,s);t[s]?t[s].p(_,i):(t[s]=S(_),t[s].c(),t[s].m(e,null))}for(;s<t.length;s+=1)t[s].d(1);t.length=n.length}},d(l){l&&c(e),A(t,l)}}}function J(r){let e,n;return{c(){e=p("img"),this.h()},l(t){e=d(t,"IMG",{src:!0,alt:!0}),this.h()},h(){N(e.src,n=r[2].image)||q(e,"src",n),q(e,"alt","Post Image")},m(t,l){h(t,e,l)},p:E,d(t){t&&c(e)}}}function S(r){let e,n,t,l=r[2].id+"",i,s,_,v=r[2].text+"",g,C,u,a=r[2].image&&J(r);return{c(){e=p("li"),n=p("h2"),t=P("Post ID: "),i=P(l),s=b(),_=p("p"),g=P(v),C=b(),a&&a.c(),u=b()},l(o){e=d(o,"LI",{});var f=k(e);n=d(f,"H2",{});var I=k(n);t=x(I,"Post ID: "),i=x(I,l),I.forEach(c),s=y(f),_=d(f,"P",{});var H=k(_);g=x(H,v),H.forEach(c),C=y(f),a&&a.l(f),u=y(f),f.forEach(c)},m(o,f){h(o,e,f),m(e,n),m(n,t),m(n,i),m(e,s),m(e,_),m(_,g),m(e,C),a&&a.m(e,null),m(e,u)},p(o,f){o[2].image&&a.p(o,f)},d(o){o&&c(e),a&&a.d()}}}function K(r){let e,n=r[0].user.email+"",t,l,i,s="Posts",_,v;function g(a,o){return a[1].length>0?F:B}let u=g(r)(r);return{c(){e=p("h2"),t=P(n),l=b(),i=p("h1"),i.textContent=s,_=b(),u.c(),v=j()},l(a){e=d(a,"H2",{});var o=k(e);t=x(o,n),o.forEach(c),l=y(a),i=d(a,"H1",{"data-svelte-h":!0}),G(i)!=="svelte-rmphmr"&&(i.textContent=s),_=y(a),u.l(a),v=j()},m(a,o){h(a,e,o),m(e,t),h(a,l,o),h(a,i,o),h(a,_,o),u.m(a,o),h(a,v,o)},p(a,[o]){o&1&&n!==(n=a[0].user.email+"")&&z(t,n),u.p(a,o)},i:E,o:E,d(a){a&&(c(e),c(l),c(i),c(_),c(v)),u.d(a)}}}function O(r,e,n){let{data:t}=e;const{posts:l}=t;return console.log(t),r.$$set=i=>{"data"in i&&n(0,t=i.data)},[t,l]}class V extends U{constructor(e){super(),w(this,e,O,K,M,{data:0})}}export{V as component};