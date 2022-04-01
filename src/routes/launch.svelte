<script>
	import { onMount } from 'svelte';
	let formValue;
	let bool = false;
	onMount(async () => {
		let formChild = formValue;
		let observer = new MutationObserver((mutationsList) => {
			console.log(mutationsList);
			bool = true;
		});
		observer.observe(formChild, { characterData: false, childList: true, attributes: false });
	});
</script>

<div class="title-container center center-text">
	<!-- <div>Redirecting...</div> -->
	<div class="spacer first" />
	<div class="hundred-width subheader">The Future of Compute with Feather</div>
	<div class="hundred-width title">We missed you.</div>
	<div class="spacer first two" />
	<div class="hundred-width date-time opacity-low constrain">
		We shared some incredible news, but don’t fret as we’ll have more in store in the future.
		Meanwhile, check out the VODs of the event below or get into contact with the team through
		social media.
	</div>
	<div class="spacer second" />
	<div class="video">
		<div class="text">Event Keynote</div>
		<div class="spacer three" />
		<div class="video-container">
			<iframe
				width="1425"
				height="509"
				src="https://www.youtube.com/embed/zHDPwXInmr0"
				title="YouTube video player"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowfullscreen
			/>
		</div>
	</div>
	<div class="spacer second" />
	<div class="video">
		<div class="text">Post Event Q&A</div>
		<div class="spacer three" />
		<div class="video-container">
			<iframe
				width="1425"
				height="509"
				src="https://www.youtube.com/embed/2TwP0bkqQ4M"
				title="YouTube video player"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowfullscreen
			/>
		</div>
	</div>
	<div class="spacer second" />
	<div class="video">
		<div class="text">Promo Video</div>
		<div class="spacer three" />
		<div class="video-container">
			<iframe
				width="1425"
				height="509"
				src="https://www.youtube.com/embed/vzMdy4xTRO4"
				title="YouTube video player"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowfullscreen
			/>
		</div>
	</div>
	<div class="spacer first two" />
	<div class="spacer second" />
	<div class="spacer second" />
	<div class="spacer second" />
	<div class="spacer second" />
</div>

<style lang="scss">
	@import '../variables';
	.video-container iframe {
		aspect-ratio: 585/335;
		width: get-vw(585px);
		@media screen and (min-width: 1240px) {
			width: min(get-vw(585px), 585px);
		}
		@media screen and (max-width: $bp) {
			width: max(get-vw(585px), 350px);
		}
	}
	.spacer.first {
		width: 100%;
		height: get-vw(90px);
		@media screen and (min-width: 1240px) {
			height: min(get-vw(90px), 90px);
		}
		@media screen and (max-width: $bp) {
			height: max(get-vw(90px), 90px);
		}
	}
	.spacer.second {
		width: 100%;
		height: get-vw(45px);
		@media screen and (min-width: 1240px) {
			height: min(get-vw(45px), 45px);
		}
		@media screen and (max-width: $bp) {
			height: max(get-vw(45px), 45px);
		}
	}
	.spacer.first.two {
		height: get-vw(10px);
		@media screen and (min-width: 1240px) {
			height: min(get-vw(10px), 10px);
		}
		@media screen and (max-width: $bp) {
			height: max(get-vw(10px), 10px);
		}
	}
	.spacer.second {
		width: 100%;
		height: get-vw(45px);
		@media screen and (min-width: 1240px) {
			height: min(get-vw(45px), 45px);
		}
		@media screen and (max-width: $bp) {
			height: max(get-vw(45px), 45px);
		}
	}
	.spacer.three {
		width: 100%;
		height: get-vw(10px);
		@media screen and (min-width: 1240px) {
			height: min(get-vw(10px), 10px);
		}
		@media screen and (max-width: $bp) {
			height: max(get-vw(10px), 10px);
		}
	}
	.title-container,
	.hundred-width {
		width: 100%;
		text-align: center;
	}
	.center {
		display: grid;
		place-items: center;
	}
	.title-container,
	.date-time {
		font-size: get-vw(26px);
		font-weight: 250;
		@media screen and (min-width: 1240px) {
			font-size: min(get-vw(26px), 26px);
		}
		@media screen and (max-width: $bp) {
			font-size: max(get-vw(26px), 26px);
		}
	}
	.constrain {
		max-width: get-vw(550px);
		font-size: get-vw(20px);
		@media screen and (min-width: 1240px) {
			max-width: min(get-vw(550px), 550px);
			font-size: min(get-vw(20px), 20px);
		}
		@media screen and (max-width: $bp) {
			max-width: max(get-vw(400px), 350px);
			font-size: max(get-vw(16px), 16px);
		}
	}
	.title {
		font-size: get-vw(72px);
		font-weight: 700;
		@media screen and (min-width: 1240px) {
			font-size: min(get-vw(72px), 72px);
		}
		@media screen and (max-width: $bp) {
			font-size: max(get-vw(72px), 50px);
		}
	}
	.opacity-low {
		opacity: 0.65;
	}
</style>
