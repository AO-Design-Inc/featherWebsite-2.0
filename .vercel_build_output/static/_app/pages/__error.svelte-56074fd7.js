import{S as y,i as E,s as j,e as h,t as p,j as D,c as _,a as u,g as x,d as c,l as I,b as v,f as S,E as o,h as T,F as g}from"../chunks/vendor-41622600.js";function V(a){let s,t,r,i,l,d;return{c(){s=h("div"),t=h("div"),r=p(a[0]),i=D(),l=h("h1"),d=p("This page does not exist :("),this.h()},l(n){s=_(n,"DIV",{class:!0});var e=u(s);t=_(e,"DIV",{class:!0});var f=u(t);r=x(f,a[0]),f.forEach(c),i=I(e),l=_(e,"H1",{class:!0});var m=u(l);d=x(m,"This page does not exist :("),m.forEach(c),e.forEach(c),this.h()},h(){v(t,"class","status svelte-106xm8l"),v(l,"class","sad"),v(s,"class","container svelte-106xm8l")},m(n,e){S(n,s,e),o(s,t),o(t,r),o(s,i),o(s,l),o(l,d)},p(n,[e]){e&1&&T(r,n[0])},i:g,o:g,d(n){n&&c(s)}}}function q({error:a,status:s}){return{props:{status:s,error:a.message}}}function b(a,s,t){let{status:r}=s;return a.$$set=i=>{"status"in i&&t(0,r=i.status)},[r]}class C extends y{constructor(s){super();E(this,s,b,V,j,{status:0})}}export{C as default,q as load};
