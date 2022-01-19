<script>
	import Gallery from './image-gallery.svelte';
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';

	const stringArray = ['Desktop', 'Instantly', 'Natively', 'Different'];
	let index = 0;
	// let line;
	// $: line.classList.add('anim');
	onMount(() => {
		let line = document.getElementById('line-animation')
		line.classList.add('anim')
		const interval = setInterval(() => {
			index++;
			if (index > 2) clearInterval(interval);
		}, 3000);
		return () => {
			clearInterval(interval);
		};
	});
</script>

<div id="main" class="d">
	<div id="left">
		<div id="bs">
			<div id="title-box">
				<div id="title">
					<b>Remote</b> <br />
					{#key index}
						<span in:fade={{ duration: 300, delay: 300 }} out:fade={{ duration: 300 }}
							>{stringArray[index]}</span
						>
					{/key}
				</div>
				<div id="line-animation">
					<img id="line" src="./crossout.svg" alt="pink line crossing out the word desktop" />
				</div>
			</div>
			<div id="blurb">Enjoy local app streaming that feels completely native.</div>
			<div class="spacer two" />
			<div id="button-container">
				<button
					on:click={() =>
						window.open(
							'https://debonair-yumberry-7ef.notion.site/a088d6fbcf72470995a722249f52860e?v=3ad640a5516945b3ba7a7181ca084c97',
							'_blank'
						)}
					class=" secondary doc"
				>
					<div id="big">
						<div class="cont" style="display: flex">
							Documentation <div class="spacer" style="width:10px" />
							<img src="./arrow-docs.svg" alt="arrow" />
						</div>
					</div>
					<div id="small">Docs</div>
				</button>
				<div class="spacer three" />
				<button on:click={() => (window.location.href = '#t_main')} class="primary download">
					<div class="cont" style="display: flex">
						Read <div class="spacer" style="width:15px" />
						<img style="transform: rotate(90deg);" src="./arrow-read.svg" alt="arrow" />
					</div>
				</button>
			</div>
		</div>
	</div>
	<div class="spacer one" />
	<div id="right">
		<Gallery />
	</div>
</div>

<style lang="scss">
	$bpBreak: 850px;
	#main {
		height: get-vw(450px);
		width: 100%;
		display: flex;
		@media screen and (max-width: $bp) {
			display: block;
			height: auto;
		}
		max-width: 1240px;
		@media screen and (min-width: 1240px) {
			padding: 0px;
			margin: 0px auto;
			height: min(get-vw(450px), 450px);
		}
	}
	#left {
		display: flex;
		align-items: center;
		@media screen and (max-width: $bp) {
			height: auto;
		}
	}
	#left {
		.spacer.two {
			height: get-vw(40px);
			@media screen and (max-width: $bp) {
				height: get-vw(40px);
			}
			@media screen and (min-width: 1240px) {
				height: min(get-vw(40px), 40px);
			}
		}
		#bs {
			height: get-vw(385px);
			@media screen and (min-width: 1240px) {
				height: min(get-vw(385px), 385px);
			}
			@media screen and (max-width: $bp) {
				height: auto;
				width: 100%;
			}
		}

		#title-box {
			position: relative;
			height: 50%;
			@media screen and (max-width: $bp) {
				height: 100%;
			}
		}

		#title {
			font-size: get-vw(90px);
			@media screen and (max-width: $bp) {
				font-size: 80px;
			}
			@media screen and (min-width: 1240px) {
				font-size: min(get-vw(90px), 90px);
				width: min(get-vw(400px), 400px);
				height: min(get-vw(210px), 210px);
			}
			font-weight: 250;
			b {
				font-weight: 700;
			}
			line-height: 101%;
			width: get-vw(400px);
			height: get-vw(210px);
			@media screen and (max-width: $bp) {
				width: 100%;
				height: auto;
				font-size: 65px;
				padding-bottom: 20px;
				// font-size: get-vw(280px);
			}
		}
		#line-animation {
			position: absolute;
			top: 63%;
			left: -20px;
			@media screen and (max-width: $bp) {
				top: 60%;
				left: -10px;
			}
			overflow: hidden;
			height: 40%;
			max-width: 0;
			// animation: appear 3s cubic-bezier(0.32, 0, 0.67, 0) 0.3s 1 forwards;
		}

		// @keyframes appear {
		// 	0% {
		// 		max-width: 0;
		// 		opacity: 100%;
		// 	}
		// 	50% {
		// 		max-width: 400px;
		// 		opacity: 100%;
		// 	}
		// 	90% {
		// 		max-width: 400px;
		// 		opacity: 100%;
		// 	}
		// 	100% {
		// 		display: none;
		// 		max-width: 400px;
		// 		opacity: 0%;
		// 	}
		// }
		#line {
			width: get-vw(400px);
			@media screen and (min-width: 1240px) {
				width: min(get-vw(400px), 400px);
			}
			@media screen and (max-width: $bp) {
				width: max(get-vw(400px), 300px);
			}
		}
		#button-container {
			display: flex;
			button {
				cursor: pointer;
				height: get-vw(55px);
				// min-height: 55px;
				font-size: get-vw(20px);
				@media screen and (max-width: $bpBreak) {
					font-size: max(get-vw(16px), 16px);
					min-height: 55px;
				}
				@media screen and (max-width: $bp) {
					font-size: 138%;
				}
				@media screen and (min-width: 1240px) {
					height: min(get-vw(55px), 55px);
					font-size: min(get-vw(20px), 20px);
				}
			}
			.primary {
				aspect-ratio: 35/11;
				width: get-vw(175px);
				@media screen and (max-width: $bp) {
					width: 49%;
				}
				color: hsla(355, 52%, 30%, 1);
				font-weight: 250;
				box-shadow: none;
				border: none;
				background: hsla(0, 100%, 85%, 1);
				border-radius: get-vw(10px);
				display: grid;
				place-items: center;
				@media screen and (min-width: 1240px) {
					width: min(get-vw(175px), 175px);
					border-radius: min(get-vw(10px), 10px);
				}
			}
			.spacer.three {
				width: get-vw(15px);
				@media screen and (min-width: 1240px) {
					width: min(get-vw(15px), 15px);
				}
			}
			.secondary {
				aspect-ratio: 42/11;
				width: get-vw(220px);
				@media screen and (max-width: $bp) {
					width: 49%;
				}
				color: #fffffb;
				box-shadow: none;
				border: 1px solid #ffdede;
				background: #fb768100;
				border-radius: get-vw(10px);
				display: grid;
				place-items: center;
				@media screen and (min-width: 1240px) {
					width: min(get-vw(220px), 220px);
					border-radius: min(get-vw(10px), 10px);
				}

				#big {
					display: block;
				}
				#small {
					display: none;
				}
				@media screen and (max-width: 1050px) {
					#big {
						display: none;
					}
					#small {
						display: block;
					}
				}
			}
			@media screen and (max-width: $bp) {
				padding-bottom: 50px;
			}
		}
		@media screen and (max-width: $bp) {
			width: 100%;
		}
	}
	#left #blurb {
		width: get-vw(400px);
		height: get-vw(80px);
		@media screen and (max-width: $bp) {
			width: 100%;
			height: auto;
			padding-bottom: 20px;
		}
		font-family: 'Inter var';
		font-size: get-vw(26px);
		@media screen and (max-width: $bp) {
			font-size: 20px;
		}
		font-style: normal;
		font-weight: 250;
		line-height: 154%;
		letter-spacing: 0em;
		text-align: left;

		color: #fffffb;
		opacity: 0.6;
		@media screen and (min-width: 1240px) {
			width: min(get-vw(400px), 400px);
			height: min(get-vw(80px), 80px);
			font-size: min(get-vw(26px), 26px);
		}
	}
	#right {
		background: linear-gradient(180deg, #1d2030 0%, rgba(29, 32, 48, 0.25) 100%);
		border-radius: 10px;
		height: 100%;
		width: 100%;
		position: relative;
		aspect-ratio: 16 / 9;
		@media screen and (max-width: $bp) {
			aspect-ratio: 4 / 5;
			width: 100%;
		}
	}
	.spacer.one {
		width: 100%;
	}
</style>
