import{_ as A,a as C,b as H}from"../../chunks/3-review-ca6b3645.js";import{S as U,i as $,s as F,v as G,w as J,x as K,p,n as j,A as L,e as v,t as D,j as E,c as b,a as w,g as I,d as h,l as V,b as y,_ as M,f as N,E as f,h as O,o as Q,H as R,m as W}from"../../chunks/vendor-9661f7ef.js";import{T as X}from"../../chunks/thumbnail-2cc3e0ee.js";function z(i,t,s){const e=i.slice();return e[2]=t[s].post,e[3]=t[s].slug,e}function B(i){let t,s;return t=new X({props:{title:i[2].metadata.title,summary:i[2].metadata.summary,link:i[2].metadata.slug,tags:i[2].metadata.tags,thumbnail:i[2].metadata.thumbnail}}),{c(){G(t.$$.fragment)},l(e){J(t.$$.fragment,e)},m(e,r){K(t,e,r),s=!0},p(e,r){const c={};r&1&&(c.title=e[2].metadata.title),r&1&&(c.summary=e[2].metadata.summary),r&1&&(c.link=e[2].metadata.slug),r&1&&(c.tags=e[2].metadata.tags),r&1&&(c.thumbnail=e[2].metadata.thumbnail),t.$set(c)},i(e){s||(p(t.$$.fragment,e),s=!0)},o(e){j(t.$$.fragment,e),s=!1},d(e){L(t,e)}}}function Y(i){let t,s,e,r,c,u,P,_,d,m=i[0],l=[];for(let a=0;a<m.length;a+=1)l[a]=B(z(i,m,a));const q=a=>j(l[a],1,1,()=>{l[a]=null});return{c(){t=v("div"),s=v("div"),e=D("Posts tagged with #"),r=D(i[1]),c=E(),u=v("div");for(let a=0;a<l.length;a+=1)l[a].c();P=E(),_=v("div"),this.h()},l(a){t=b(a,"DIV",{class:!0});var o=w(t);s=b(o,"DIV",{class:!0});var n=w(s);e=I(n,"Posts tagged with #"),r=I(n,i[1]),n.forEach(h),c=V(o),u=b(o,"DIV",{class:!0});var g=w(u);for(let k=0;k<l.length;k+=1)l[k].l(g);g.forEach(h),P=V(o),_=b(o,"DIV",{class:!0,style:!0}),w(_).forEach(h),o.forEach(h),this.h()},h(){y(s,"class","tags svelte-zjfayw"),y(u,"class","grid svelte-zjfayw"),y(_,"class","spacer"),M(_,"padding","45px"),y(t,"class","container svelte-zjfayw")},m(a,o){N(a,t,o),f(t,s),f(s,e),f(s,r),f(t,c),f(t,u);for(let n=0;n<l.length;n+=1)l[n].m(u,null);f(t,P),f(t,_),d=!0},p(a,[o]){if((!d||o&2)&&O(r,a[1]),o&1){m=a[0];let n;for(n=0;n<m.length;n+=1){const g=z(a,m,n);l[n]?(l[n].p(g,o),p(l[n],1)):(l[n]=B(g),l[n].c(),p(l[n],1),l[n].m(u,null))}for(W(),n=m.length;n<l.length;n+=1)q(n);Q()}},i(a){if(!d){for(let o=0;o<m.length;o+=1)p(l[o]);d=!0}},o(a){l=l.filter(Boolean);for(let o=0;o<l.length;o+=1)j(l[o]);d=!1},d(a){a&&h(t),R(l,a)}}}const S={"../../lib/posts/1-mandel.md":A,"../../lib/posts/2-webgl.md":C,"../../lib/posts/3-review.md":H};let T=[];for(let i in S){const t=S[i],s=t.metadata.slug,e={post:t,slug:s};T.push(e)}function at({url:i,params:t}){const{tags:s}=t;return{props:{filteredPosts:T.filter(r=>r.post.metadata.tags.includes(s)),tag:s}}}function Z(i,t,s){let{filteredPosts:e}=t,{tag:r}=t;return i.$$set=c=>{"filteredPosts"in c&&s(0,e=c.filteredPosts),"tag"in c&&s(1,r=c.tag)},[e,r]}class st extends U{constructor(t){super();$(this,t,Z,Y,F,{filteredPosts:0,tag:1})}}export{st as default,at as load};