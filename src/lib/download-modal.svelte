<script>
	import { popUpMachine } from '$lib/popUpMachine';
	export let message = '';
	export let option1 = '';
	export let option2 = '';
	export let func1;
	export let func2;
</script>

<main>
	<div class="padding">
		<div on:click={popUpMachine.hide} class="closer">
			<svg
				width="20"
				height="20"
				viewBox="0 0 20 20"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<circle cx="10" cy="10" r="10" fill="#FB7680" />
				<path d="M5 5L15 15" stroke="#11131C" stroke-width="4" />
				<path d="M15 5L5 15" stroke="#11131C" stroke-width="4" />
			</svg>
		</div>
		<div class="text">{message}</div>
		<div class="spacer-m-b" />
		<div class="button-container">
			<div on:click={func1} class="button option1">{option1}</div>
			<div class="spacer-b-b" />
			<div on:click={func2} class="button option2">{option2}</div>
		</div>
	</div>
</main>

<style lang="scss">
	@import '../variables.scss';
	main {
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);

		z-index: 3;
		width: get-vw(500px);
		height: auto;
		background: #11131c;
		box-shadow: 0px 0px 30px rgba(251, 118, 128, 0.45);
		border-radius: 10px;
		@media screen and (min-width: 1240px) {
			width: min(get-vw(500px), 500px);
			height: auto;
		}
		@media screen and (max-width: $bp) {
			width: max(get-vw(500px), 300px);
			height: auto;
		}
		.spacer-m-b {
			width: 100%;
			height: get-vw(20px);
		}
		.spacer-b-b {
			width: get-vw(10px);
			height: 100%;
		}
		.padding {
			padding: 5% 5%;
			.text {
				font-size: get-vw(37px);
				font-weight: 700;
				line-height: 120%;
				@media screen and (min-width: 1240px) {
					font-size: min(get-vw(37px), 37px);
				}
				@media screen and (max-width: $bp) {
					font-size: max(get-vw(37px), 19px);
				}
			}
			.button-container {
				display: flex;
				.button {
					font-size: get-vw(16px);

					cursor: pointer;

					display: grid;
					place-items: center;

					padding: 1% 2%;

					height: get-vw(40px);
					border-radius: get-vw(10px);
					border: 1px solid #ffb0b0;
					color: #fffffb;
					background: transparent;

					transition: all 0.3s ease-in-out;
					@media screen and (min-width: 1240px) {
						font-size: min(get-vw(16px), 16px);
                        height: min(get-vw(40px), 40px);
					}
					@media screen and (max-width: $bp) {
						font-size: max(get-vw(16px), 16px);
                        height: max(get-vw(40px), 40px);
					}
				}
				.button:hover {
					transition: all 0.3s ease-in-out;
					background: #ffb0b0;
					color: #11131c;
				}
			}
		}
	}
</style>
