import{_ as U,a as z}from"../../chunks/2-webgl-6d719442.js";import{S as F,i as G,s as J,v as K,w as L,x as M,p as P,n as I,A as N,e as v,t as B,j as V,c as b,a as k,g as S,d as _,l as j,b as y,$ as T,f as O,E as u,h as Q,o as R,H as W,m as X}from"../../chunks/vendor-41622600.js";import{T as Y}from"../../chunks/thumbnail-574f4ee1.js";function $(i,t,n){const e=i.slice();return e[2]=t[n].post,e[3]=t[n].slug,e}function q(i){let t,n;return t=new Y({props:{title:i[2].metadata.title,summary:i[2].metadata.summary,link:i[2].metadata.link,tags:i[2].metadata.tags,thumbnail:i[2].metadata.thumbnail}}),{c(){K(t.$$.fragment)},l(e){L(t.$$.fragment,e)},m(e,r){M(t,e,r),n=!0},p(e,r){const c={};r&1&&(c.title=e[2].metadata.title),r&1&&(c.summary=e[2].metadata.summary),r&1&&(c.link=e[2].metadata.link),r&1&&(c.tags=e[2].metadata.tags),r&1&&(c.thumbnail=e[2].metadata.thumbnail),t.$set(c)},i(e){n||(P(t.$$.fragment,e),n=!0)},o(e){I(t.$$.fragment,e),n=!1},d(e){N(t,e)}}}function Z(i){let t,n,e,r,c,f,w,m,D,h,g,d=i[0],s=[];for(let a=0;a<d.length;a+=1)s[a]=q($(i,d,a));const H=a=>I(s[a],1,1,()=>{s[a]=null});return{c(){t=v("div"),n=v("div"),e=B("Posts tagged with "),r=B(i[1]),c=V(),f=v("div"),w=V(),m=v("div");for(let a=0;a<s.length;a+=1)s[a].c();D=V(),h=v("div"),this.h()},l(a){t=b(a,"DIV",{class:!0});var o=k(t);n=b(o,"DIV",{});var l=k(n);e=S(l,"Posts tagged with "),r=S(l,i[1]),l.forEach(_),c=j(o),f=b(o,"DIV",{class:!0,style:!0}),k(f).forEach(_),w=j(o),m=b(o,"DIV",{class:!0});var p=k(m);for(let E=0;E<s.length;E+=1)s[E].l(p);p.forEach(_),D=j(o),h=b(o,"DIV",{class:!0,style:!0}),k(h).forEach(_),o.forEach(_),this.h()},h(){y(f,"class","spacer"),T(f,"padding","35px"),y(m,"class","grid svelte-13vd4v1"),y(h,"class","spacer"),T(h,"padding","45px"),y(t,"class","container svelte-13vd4v1")},m(a,o){O(a,t,o),u(t,n),u(n,e),u(n,r),u(t,c),u(t,f),u(t,w),u(t,m);for(let l=0;l<s.length;l+=1)s[l].m(m,null);u(t,D),u(t,h),g=!0},p(a,[o]){if((!g||o&2)&&Q(r,a[1]),o&1){d=a[0];let l;for(l=0;l<d.length;l+=1){const p=$(a,d,l);s[l]?(s[l].p(p,o),P(s[l],1)):(s[l]=q(p),s[l].c(),P(s[l],1),s[l].m(m,null))}for(X(),l=d.length;l<s.length;l+=1)H(l);R()}},i(a){if(!g){for(let o=0;o<d.length;o+=1)P(s[o]);g=!0}},o(a){s=s.filter(Boolean);for(let o=0;o<s.length;o+=1)I(s[o]);g=!1},d(a){a&&_(t),W(s,a)}}}const A={"../../lib/posts/1-mandel.md":U,"../../lib/posts/2-webgl.md":z};let C=[];for(let i in A){const t=A[i],n=t.metadata.slug,e={post:t,slug:n};C.push(e)}function st({url:i,params:t}){const{tags:n}=t;return{props:{filteredPosts:C.filter(r=>r.post.metadata.tags.includes(n)),tag:n}}}function x(i,t,n){let{filteredPosts:e}=t,{tag:r}=t;return console.log(e),i.$$set=c=>{"filteredPosts"in c&&n(0,e=c.filteredPosts),"tag"in c&&n(1,r=c.tag)},[e,r]}class lt extends F{constructor(t){super();G(this,t,x,Z,J,{filteredPosts:0,tag:1})}}export{lt as default,st as load};