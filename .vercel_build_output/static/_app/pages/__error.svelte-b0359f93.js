import{S as y,i as E,s as j,e as h,t as p,j as D,c as _,a as u,g as x,d as c,l as I,b as v,f as S,E as o,h as T,F as g}from"../chunks/vendor-4ee06943.js";function V(a){let s,e,r,i,l,d;return{c(){s=h("div"),e=h("div"),r=p(a[0]),i=D(),l=h("h1"),d=p("This page does not exist :("),this.h()},l(n){s=_(n,"DIV",{class:!0});var t=u(s);e=_(t,"DIV",{class:!0});var f=u(e);r=x(f,a[0]),f.forEach(c),i=I(t),l=_(t,"H1",{class:!0});var m=u(l);d=x(m,"This page does not exist :("),m.forEach(c),t.forEach(c),this.h()},h(){v(e,"class","status svelte-106xm8l"),v(l,"class","sad"),v(s,"class","container svelte-106xm8l")},m(n,t){S(n,s,t),o(s,e),o(e,r),o(s,i),o(s,l),o(l,d)},p(n,[t]){t&1&&T(r,n[0])},i:g,o:g,d(n){n&&c(s)}}}function q({error:a,status:s}){return{props:{status:s,error:a.message}}}function b(a,s,e){let{status:r}=s;return a.$$set=i=>{"status"in i&&e(0,r=i.status)},[r]}class C extends y{constructor(s){super();E(this,s,b,V,j,{status:0})}}export{C as default,q as load};
