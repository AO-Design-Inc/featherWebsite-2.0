<!-- <script context="module">
	export const hydrate = true;
  export const router = true;
  export const handle = true;
</script> -->

<script>
	import Splash from './splash.svelte';
	import Tutorial from './tutorial.svelte';
	import Features from './features.svelte';
	import SignUp from './sign-up.svelte';
	import { onMount } from 'svelte';

	onMount(() => {
		window.document.body.classList.remove('lightmode');
	});
</script>

<main>
	<div class="spacer one" />
	<Splash />
	<div class="spacer two" />
	<Tutorial />
	<div class="spacer two" />
	<Features />
	<div class="spacer two" />
	<SignUp />
	<div class="spacer two" />
</main>

<style lang="scss">
	main {
		padding-left: calc(20 * $g);
		padding-right: calc(20 * $g);
		width: calc(248 * $g);
		// min-height: calc(558 * $g);
		height: auto;
		margin: 0px;
	}

	.spacer.one {
		min-height: 45px;
		height: get-vw(45px);
		@media screen and (min-width: 1240px) {
			height: min(get-vw(45px), 45px);
		}
	}
	.spacer.two {
		min-height: 95px;
		height: get-vw(95px);
		@media screen and (min-width: 1240px) {
			height: min(get-vw(95px), 95px);
		}
	}
</style>
