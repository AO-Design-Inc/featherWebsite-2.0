---
slug: 2-webgl
title: 'WebGL with Emscripten: The Bare Minimum'
date: 2021-08-03
summary: Illustrating the bare minimum required to get WebGL up and running in C with the Emscripten compiler.
thumbnail: '/blog-2-tri-thumbnail.webp'
tags:
  - WebGL
author: Jo Gao
---

<script>
    import Katex from "$lib/katex.svelte";
    console.log('a');
    let e1 = "z_{0}=0";
    let e2 = "z*{n+1}=z_n^2+c";
</script>

<div align="center">
    <img style="width: 100%" src={"/blog-2-tri-thumbnail.webp"} alt="Thumbnail" />
</div>
<!-- ![webgl]({{site.baseurl}}/assets/2-Thumbnail-webgl.png) -->

The following article is something of a hybrid between the first [Emscripten tutorial](https://emscripten.org/docs/getting_started/Tutorial.html) and the [Getting Started with WebGL tutorial](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Tutorial/Getting_started_with_WebGL). It builds on the previous documentation to demonstrate how to render the same content in the WebGL tutorial, but in C.

This is not an Introduction to C programming or WebGL, so a basic understanding of both will be helpful. If you are new to WebGL, I would recommend at least skimming the Getting Started with WebGL tutorial linked above.

The focus of this article is to illustrate the bare minimum required to get WebGL up and running in C with the Emscripten compiler. And thus, if you do not yet have Emscripten installed, I would suggest doing so now from their [download page](https://emscripten.org/docs/getting_started/downloads.html).

The Github repo for this tutorial is available on our [Github](https://github.com/AO-Design-Inc/webGL-with-emscripten).

## HTML File

The following is a barebones HTML file with a canvas element. The `index.js` script after the canvas is the file that will be generated from compiling the C code.

<pre><code class="language-html">
&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
	&lt;head&gt;
		&lt;meta charset="UTF-8" /&gt;
		&lt;meta http-equiv="X-UA-Compatible" content="IE=edge" /&gt;
		&lt;meta name="viewport" content="width=device-width, initial-scale=1.0" /&gt;
		&lt;title&gt;Document&lt;/title&gt;
	&lt;/head&gt;
	&lt;body&gt;
		&lt;canvas id="canvas" height="400px" width="400px"&gt;&lt;/canvas&gt;
		&lt;script src="index.js"&gt;&lt;/script&gt;
	&lt;/body&gt;
&lt;/html&gt;
&lt;h1&gt;This is a header&lt;/h1&gt;
</code></pre>

## Header Files

<pre><code class="language-c">
#include &lt;emscripten/html5.h&gt;
#include &lt;GLES2/gl2.h&gt;
</code></pre>

The html5 header provides the bindings required to use html elements and events from native code. For this tutorial, it will allow us to set up the WebGL context in C. You can view the full documentation for `emscripten/html.5.h` [here](https://emscripten.org/docs/api_reference/html5.h.html)

The gl2 header provides the functions to draw and interact with the canvas context. The entire header file can be found [here](https://www.khronos.org/registry/OpenGL/api/GLES2/gl2.h).

## Setting up the Canvas

Before we can begin drawing, we must first obtain a canvas context. The html5 header file provides the functions needed to do this. To create a canvas context, the `emscripten_webgl_create_context` function takes a target and an `EmscriptenWebGLContextAttributes` object, used to specify various attributes for the context. A complete list of the object's attributes can be found [here](https://emscripten.org/docs/api_reference/html5.h.html#c.EmscriptenWebGLContextAttributes).

```c
int main(){ // beginning of main function

	// setting up EmscriptenWebGLContextAttributes
	EmscriptenWebGLContextAttributes attr;
	emscripten_webgl_init_context_attributes(&attr);
	attr.alpha = 0;

	// target the canvas selector
	EMSCRIPTEN_WEBGL_CONTEXT_HANDLE ctx = emscripten_webgl_create_context("#canvas", &attr);
	emscripten_webgl_make_context_current(ctx);
```

At the start of the main function, we create and initialize the `EmscriptenWebGLContextAttributes` object with all the default attributes settings except the alpha attribute, which is set to false. This is done mostly for the purpose of illustrating how to set specific attributes.

The `emscripten_webgl_create_context` function targets, `#canvas`, the selector for the canvas element in the html file. After creating the context, we must activate it using `emscripten_webgl_make_context_current`, to specify that all following GL calls will be applied to that context.

## Drawing to the Canvas

In JavaScript, we would use `clearColor` and `clear` on the canvas context to fill in the canvas. The equivalents of these methods are provided by the gl2 header as `glClearColor` and `glClear`.

<pre><code class="language-c">
	// this goes after you have activated the webgl context
	glClearColor(0.984, 0.4627, 0.502, 1.0);
	glClear(GL_COLOR_BUFFER_BIT);
	return 1;
} // end of main function
</code></pre>

## Compiling and Running

To compile with Emscripten, run the following command. This will output the index.js file that is sourced from the html file.

<pre><code class="language-bash">
emcc main.c -o index.js
</code></pre>

The html file can now be opened and viewed in a browser. Huzzah!

<div align="center">
    <img style="width: 100%" src={"/blog-2-tri-final.jpg"} alt="Final" />
</div>
