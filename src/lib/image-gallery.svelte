<script>
	import { fade } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { onMount } from 'svelte';

	let image = [
		'./gallery/Gallery1.webp',
		'./gallery/Gallery2.webp',
		'./gallery/Gallery3.webp',
		'./gallery/Gallery4.webp'
	];
	let mobileImage = [
		'./gallery/MobileMockup0.webp',
		'./gallery/MobileMockup1.webp',
		'./gallery/MobileMockup2.webp',
		'./gallery/MobileMockup3.webp'
	];
	let index = 0;
	onMount(() => {
		const interval = setInterval(() => {
			index++;
			if (index > 4) index = 0;
		}, 3000);
		return () => {
			clearInterval(interval);
		}
	})
	
</script>

<div class="image-gallery-main">
	{#if index === 0}
		<picture transition:fade|local={{ delay: 2400, duration: 2000, easing: quintOut }}>
			<source media="(max-width:810px)" srcset={mobileImage[0]} />
			<img class="image" src={image[0]} alt="Intro Images 0" />
		</picture>
	{:else if index === 1}
		<picture transition:fade|local={{ delay: 2400, duration: 2000, easing: quintOut }}>
			<source media="(max-width:810px)" srcset={mobileImage[1]} />
			<img class="image" src={image[1]} alt="Intro Images 1" />
		</picture>
	{:else if index === 2}
		<picture transition:fade|local={{ delay: 2400, duration: 2000, easing: quintOut }}>
			<source media="(max-width:810px)" srcset={mobileImage[2]} />
			<img class="image" src={image[2]} alt="Intro Images 1" />
		</picture>
	{:else}
		<picture transition:fade|local={{ delay: 2400, duration: 2000, easing: quintOut }}>
			<source media="(max-width:810px)" srcset={mobileImage[3]} />
			<img class="image" src={image[3]} alt="Intro Images 2" />
		</picture>
	{/if}
</div>

<style lang="scss">
	.image {
		position: absolute;
		right: 0%;
		top: 5%;
		min-width: 90%;
		width: 90%;
		@media screen and (max-width: $bp) {
			max-width: 100%;
			width: 100%;
			top: 0%;
			left: 0%;
		}
	}
</style>
