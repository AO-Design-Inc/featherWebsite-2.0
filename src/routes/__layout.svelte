<script>
	import '../app.scss';
	import { interpolateNumber } from 'd3-interpolate';
	import { navigating } from '$app/stores';
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	import Dash from '$lib/dash.svelte';
	import Footer from '$lib/footer.svelte';

	const progress = tweened(0, {
		duration: 3000,
		easing: cubicOut,
		interpolate: interpolateNumber
	});
</script>

<svelte:window
	on:sveltekit:navigation-start={() => {
		progress.set(1.0);
	}}
	on:sveltekit:navigation-end={() => {
		progress.set(0.1);
	}}
/>

<svelte:head>
	<meta name="robots" content="index, follow" />
	<html lang="en-GB" />
</svelte:head>
{#if $navigating}
	<progress value={$progress} class="progress-bar" />
{/if}
<Dash />
<slot />
<Footer />

<style>
	.progress-bar {
		position: fixed;
		left: 0%;
		top: 0%;
		width: 100%;
		height: 3px;
		border: none;

	}
	progress::-webkit-progress-value,
	progress::-moz-progress-bar,
	progress::-webkit-progress-bar {
		height: 3px;
		background-color: #f87c86;
	}
</style>
