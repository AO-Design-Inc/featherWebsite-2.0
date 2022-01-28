<script>
	import Form from './form.svelte';
</script>

<main class="d">
	<a sveltekit:prefetch href="/">
		<div id="logo">
			<img src="/logo.svg" alt="Feather Logo" />
		</div>
	</a>
	<div class=" spacer one" />
	<a sveltekit:prefetch href="/blog">
		<div class="link">Blog</div>
	</a>
	<div class="spacer linker between" />
	<a sveltekit:prefetch href="/about">
		<div class="link">About</div>
	</a>
	<div class="spacer linker" />
	<div on:click={() => (window.location.href = '#sign-up')} >
		<div class="sign-up">Sign Up</div>
	</div>
	<!--<div class="form-container">
		<Form />
	</div>-->
	<!-- <div class="spacer two" /> -->
	<!-- <button> Get Feather </button> -->
</main>

<style lang="scss">
	@import '../variables.scss';
	$bpDash: 850px;
	.form-container {
		min-width: 350px;
		width: get-vw(450px);
		@media screen and (min-width: 1240px) {
			width: min(get-vw(450px), 450px);
		}
		@media screen and (max-width: $bpDash) {
			display: none;
		}
	}
	main {
		// aspect-ratio: 288 / 17;
		display: flex;
		align-items: center;
		max-width: 90%;
		min-height: 85px;
		position: relative;
		margin: 0px;
		padding: 0px get-vw(100px);
		@media screen and (min-width: 1440px) {
			max-width: 1240px;
			padding: 0px;
			margin: 0px auto;
		}
	}
	#logo img {
		/* width: calc(10 * var(--g)); */
		/* height: calc(10 * var(--g)); */
		aspect-ratio: 1 / 1;
		width: get-vw(50px);
		min-width: 50px;
		display: grid;
		place-items: center;
		@media screen and (min-width: 1240px) {
			width: min(get-vw(50px), 50px);
		}
	}
	.link {
		width: 24.6 * $g;
		text-align: center;
		font-size: max(get-vw(16px), 16px);
		/*background: rgba(255, 255, 255, 0.1);*/
		height: get-vw(45px);
		min-height: 45px;
		display: grid;
		place-items: center;
		border-radius: get-vw(10px);
		@media screen and (min-width: 1240px) {
			font-size: min(get-vw(16px), 16px);
			height: min(get-vw(45px), 45px);
			border-radius: min(get-vw(10px), 10px);
			width: min(get-vw(95px), 90px);
		}
		@media screen and (max-width: $bpDash) {
			width: max(get-vw(95px), 90px);
		}
	}
	.link:hover {
		transition: background 0.2s ease-in-out;
		background: rgba(255, 255, 255, 0.2);
	}
	.spacer.linker {
		width: get-vw(20px);
    @media screen and (max-width: $bpDash) {
			width: 0%;
		}
	}
	.spacer.linker.between {
    @media screen and (max-width: $bpDash) {
			width: max(get-vw(20px), 20px);
		}
	}
	.spacer.one {
		width: 155 * $g;
    @media screen and (max-width: $bpDash) {
			width: 200 * $g;
		}
	}
	.sign-up {
		width: 24.6 * $g; /*fix the spacers to accomodate this new button*/
		text-align: center;
		font-size: max(get-vw(16px), 16px);
		/*background: rgba(255, 255, 255, 0.1);*/
		height: get-vw(45px);
		min-height: 45px;
		display: grid;
		place-items: center;
		border: 1px solid white;
		border-radius: get-vw(10px);
		@media screen and (min-width: 1240px) {
			font-size: min(get-vw(16px), 16px);
			height: min(get-vw(45px), 45px);
			border-radius: min(get-vw(10px), 10px);
			width: min(get-vw(150px), 140px);
		}
		@media screen and (max-width: $bpDash) {
			width: max(get-vw(95px), 90px);
		}
	}
</style>
