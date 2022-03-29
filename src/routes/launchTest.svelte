<script>
	import { onMount } from 'svelte';
	let formValue;
	let bool = false;
	onMount(async () => {
		window.location.replace('https://app.gather.town/events/ZP9NFx90PwaA9CkRFV7n');
		let formChild = formValue;
		let observer = new MutationObserver((mutationsList) => {
			console.log(mutationsList);
			bool = true;
		});
		observer.observe(formChild, { characterData: false, childList: true, attributes: false });
	});
</script>

<div class="title-container center center-text">
	<div>Redirecting...</div>
</div>

<style lang="scss">
	@import '../variables';
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
