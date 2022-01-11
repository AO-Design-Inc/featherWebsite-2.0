---
title: One of the Fastest Web Mandelbrot Renderers
date: 2022-01-01
summary: Our initial experiments rendering the Mandelbrot set with JavaScript, Web-workers & emerging web technologies like webassembly.
thumbnail: '/thumbnail-mandel.webp'
tags:
  - WASM
author: Ojasvin Kirpane, Abhishek Cherath, Jo Gao & Abhinuv Allu
---

<script>
    import { onMount } from 'svelte';
    let e1 = '\(z*{0}=0\)';
    let e2 = '\(z*{n+1}=z_n^2+c\)'
    onMount(() => {
        console.log('fuck')
		let script = document.createElement('script');
        script.src = "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js";
        document.head.append(script);
		
		script.onload = () => {
        MathJax = {
            tex: {inlineMath: [['$', '$'], ['\\(', '\\)']]},
            svg: {fontCache: 'global'}
            };
		};
					  
	});
</script>

## Introduction

Hey, welcome to the Feather Systems blog. This is the first post of many, documenting our journey towards creating simpler systems for better performance on the web.

This post will document our initial experiments rendering the Mandelbrot set with JavaScript, Web-workers & emerging web technologies like webassembly. You can access the project [here](https://js-wasm-mandelbrot-benchmark-3.vercel.app/) and view the code [here](https://github.com/AO-Design-Inc/js-wasm-mandelbrot-benchmark).

These experiments were tested and measured by the team to properly document each technology's advantages & disadvantages.

To elucidate, let's start with fractals & the mandelbrot set:

## The Mandelbrot Set

The Mandelbrot Set is defined as the set of complex numbers for which the function {e2} does not diverge when {e1}. An image of how the Mandelbrot set looks as follows. Points shaded black are in the set. We are using the Mandelbrot set to benchmark our code.

<div align="center">
    <img style="width: 100%" src={"/blog-mandelbrotrenderer.png"} alt="Thumbnail" />
</div>

The Mandelbrot Set is stunning. We highly recommend getting lost in its beauty using our rendering website ([https://mandelbrot-ascript.vercel.app/](https://mandelbrot-ascript.vercel.app/)). Click to zoom and Shift + Click to zoom out.

<div align="center">
    <img style="width: 100%" src={"/blog-thumbnail-temp.svg"} alt="Thumbnail" />
</div>

Aenean pulvinar hendrerit erat ut iaculis. Fusce quis lacus ipsum. Curabitur mauris quam, ullamcorper id pretium et, dictum ut tortor. Integer venenatis urna eros, ut sodales neque vehicula id. Morbi eget quam bibendum, aliquam lorem lacinia, dapibus leo. Nulla maximus lorem lorem, quis rutrum purus venenatis non. Sed lobortis urna justo, sit amet tempus velit egestas nec. Duis nec elit volutpat, lobortis dui eget, egestas nulla. Integer tincidunt dolor in posuere placerat. Nunc lacinia porttitor mauris sed pretium. Aliquam eleifend lacus in egestas volutpat. Nam pellentesque consectetur vulputate. Vestibulum eros risus, sollicitudin et scelerisque ut, efficitur sit amet orci. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla semper lobortis augue.

Maecenas gravida arcu eleifend sem facilisis ultricies. Duis tempus ut enim ac posuere. Integer eros augue, tempor quis mi vel, feugiat pulvinar ligula. Nullam eu lorem accumsan, posuere tellus sed, venenatis risus. Nullam pellentesque, ligula id scelerisque auctor, eros odio rhoncus mi, porta dapibus tellus lacus at nisl. Vivamus dictum nisi quam, quis euismod mauris euismod id. Vivamus a est dignissim, aliquet turpis tincidunt, rhoncus orci.

Nunc tincidunt quis tortor ut iaculis. Praesent tincidunt vehicula finibus. Phasellus iaculis volutpat leo, ut ullamcorper enim scelerisque et. Quisque fringilla mauris tellus, sit amet consectetur sem maximus sit amet. Pellentesque lectus ante, pellentesque ullamcorper turpis sed, dignissim rhoncus sem. Sed tempus, ipsum ac tristique porttitor, odio lacus rhoncus dolor, id aliquam justo felis quis est. Curabitur vel viverra lacus. In in tempor nisl, quis condimentum sapien. Ut semper fermentum nibh sed faucibus. Vivamus non sapien gravida, condimentum dui in, convallis sapien.

_{author}_
