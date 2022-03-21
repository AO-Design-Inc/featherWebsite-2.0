import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';
import preprocess from 'svelte-preprocess';
// import adapter from '@sveltejs/adapter-auto';
// import adapter from '@sveltejs/adapter-static';
import adapter from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],

	kit: {
		adapter: adapter(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',

		vite: {
			css: {
				define: {
					global: {}
				},
				preprocessorOptions: {
					scss: {
						additionalData: '@use "src/variables.scss" as *;'
					}
				}
			}
		}
	},

	preprocess: [
		preprocess({
			scss: {
				prependData: '@use "src/variables.scss" as *;'
			}
		}),
		mdsvex(mdsvexConfig)
	]
};

export default config;
