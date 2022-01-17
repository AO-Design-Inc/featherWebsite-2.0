<script>
	import Form from './form.svelte';
</script>

<div class="container">
	<div class="inner">
		<div class="subscription">
			<div class="pre-alpha-text">
				Be the first to remote differently.
				<div style={'font-weight: bold '}>Join the Pre-Alpha</div>
			</div>
			<div class="form">
				<Form />
			</div>
		</div>
		<div class="images">
			<picture class="signup">
				<source media="(max-width:600px)" srcset="/small-signup.webp" />
				<img class="image" src="/signup.webp" alt="Intro Images 0" />
			</picture>
		</div>
	</div>
</div>

<style lang="scss">
	@import '../variables.scss';
	.signup {
		width: 100%;

		@media screen and (min-width: 600px) {
			content: url('/signup.webp');
		}
		@media screen and (max-width: 600px) {
			content: url('/small-signup.webp');
		}
		@media screen and (max-width: $bp) {
			display: none;
		}
	}

	.form {
		@media screen and (min-width: 600px) {
			width: 75%;
		}
		@media screen and (max-width: 600px) {
			width: 100%;
		}
	}

	.pre-alpha-text {
		margin-top: get-vw(40px);
		font-size: get-vw(35px);
		margin-bottom: get-vw(20px);
		@media screen and (max-width: $bp) {
			margin-top: max(get-vw(40px), 30px);
			font-size: max(get-vw(35px), 35px);
			margin-bottom: max(get-vw(20px), 30px);
		}
		@media screen and (min-width: 1240px) {
			margin-top: min(get-vw(40px), 40px);
			font-size: min(get-vw(35px), 35px);
			margin-bottom: min(get-vw(20px), 20px);
		}
	}

	.subscription {
		padding: 30px;

		@media screen and (max-width: $bp) {
			width: 100%;
		}
	}

	.images {
		@media screen and (min-width: 600px) {
			width: 45%;
		}
		@media screen and (max-width: 600px) {
			width: 100%;
		}
	}

	.inner {
		display: flex;
		flex-flow: wrap;
	}

	.container {
		width: 100%;
		@media screen and (max-width: $bp) {
			height: auto;
		}
		@media screen and (min-width: 1240px) {
			max-width: 1240px;
			padding: 0px;
			margin: 0px auto;
		}
		background: radial-gradient(
			102.54% 63.2% at 100% 0%,
			#1d2030 0%,
			rgba(29, 32, 48, 0.25) 71.95%
		);
		border-radius: 10px;
	}
</style>
