<script>
	import { onMount } from 'svelte';

	let getOS = () => {
		var userAgent = window.navigator.userAgent,
			platform = window.navigator.platform,
			macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
			windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
			iosPlatforms = ['iPhone', 'iPad', 'iPod'],
			os = null;

		if (macosPlatforms.indexOf(platform) !== -1) {
			os = 'Mac OS';
		} else if (iosPlatforms.indexOf(platform) !== -1) {
			os = 'iOS';
		} else if (windowsPlatforms.indexOf(platform) !== -1) {
			os = 'Windows';
		} else if (/Android/.test(userAgent)) {
			os = 'Android';
		} else if (!os && /Linux/.test(platform)) {
			os = 'Linux';
		}
		return os;
	};
	let downloadBuild = (os) => {
		if (os === 'Mac OS') console.log('Downloading Mac Build');
		else if (os === 'Windows') console.log('Downloading Windows Build');
		else if (os === 'Linux') console.log('Downloading Linux Build');
	};
	onMount(() => {
		let userOS = getOS();
	});
</script>

<div id="welcome">
	<div id="center-container">
		<div style="width: 100%; height: 30px" />
		<div id="welcome-head">Welcome to Feather!</div>
		<div class="spacer text" />
		<div id="thanks-head">Thanks for signing up.</div>
		<div class="spacer text two" />
		<div id="download-head">
			<p>
				<span
					class="butt"
					on:click={() =>
						downloadBuild(
							getOS(),
							window.open('https://github.com/AO-Design-Inc/Feather-Releases', '_blank')
						)}>Download Feather</span
				>
				if you haven't already.<br /> Or go to the app and login if it's already installed.
			</p>
		</div>
		<div class="spacer text three" />
		<!-- <div id="button-container">
			<button on:click={() => downloadBuild(getOS())} id="download">
				<div class="cont" style="display: flex">
					Download Feather <div class="spacer" style="width:10px" />
					<svg
						width="18"
						height="17"
						viewBox="0 0 18 17"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M8.77948 -3.40207e-07L8.77948 15.75M8.77948 15.75L16.5625 8.33824M8.77948 15.75L0.996462 8.33823"
							stroke="#74252B"
							stroke-width="2"
							stroke-linejoin="round"
						/>
					</svg>
				</div>
			</button>
			<div class="spacer between buttons" />
			<a href="feather://open/">
				<button id="launch">
					<div class="cont" style="display: flex">
						Launch Feather <div class="spacer" style="width:10px" />
						<svg
							width="14"
							height="15"
							viewBox="0 0 14 15"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M0.933113 13.3279L12.07 2.19096M12.07 2.19096L1.32571 1.92844M12.07 2.19096L12.3326 12.9353"
								stroke="url(#paint0_linear_2198_467)"
								stroke-width="2"
								stroke-linejoin="round"
							/>
							<defs>
								<linearGradient
									id="paint0_linear_2198_467"
									x1="0.933113"
									y1="13.3279"
									x2="13.1307"
									y2="1.1303"
									gradientUnits="userSpaceOnUse"
								>
									<stop offset="0.369792" stop-color="#FFFBFC" />
									<stop offset="1" stop-color="#FFB0B0" />
								</linearGradient>
							</defs>
						</svg>
					</div>
				</button>
			</a>
		</div> -->
	</div>
</div>

<style lang="scss">
	@import '../variables.scss';
	#welcome {
		max-width: 100%;
		height: 80vh;
		display: grid;
		place-items: center;
		@media screen and (max-width: $bp) {
			margin: 0% 20px;
		}
		#center-container {
			height: auto;
		}
		#welcome-head {
			text-align: center;
			font-size: get-vw(102px);
			font-weight: 750;
			@media screen and (min-width: 1240px) {
				font-size: min(get-vw(102px), 102px);
			}
			@media screen and (max-width: $bp) {
				font-size: max(get-vw(102px), 65px);
			}
		}
		#thanks-head {
			opacity: 0.8;
			text-align: center;
			font-size: get-vw(75px);
			font-weight: 725;
			@media screen and (min-width: 1240px) {
				font-size: min(get-vw(75px), 75px);
			}
			@media screen and (max-width: $bp) {
				font-size: max(get-vw(75px), 36px);
			}
		}
		#download-head {
			opacity: 0.6;
			display: flex;
			align-items: center;

			text-align: center;
			font-size: get-vw(37px);
			font-weight: 700;
			line-height: 170%;
			@media screen and (min-width: 1240px) {
				font-size: min(get-vw(37px), 37px);
			}
			@media screen and (max-width: $bp) {
				font-size: max(get-vw(37px), 19px);
			}
			p {
				width: 100%;
				margin: 0%;
				text-align: center;
				span.butt {
					cursor: pointer;
					padding: 0.5% 2%;
					border-radius: get-vw(10px);
					border: 1px solid #ffb0b0;
					background: transparent;
					color: #fffffb;
					transition: color 0.1s ease-in-out, background 0.2s ease-in-out;
				}
				span.butt:hover {
					background: #ffb0b0;
					transition: color 0.1s ease-in-out, background 0.2s ease-in-out;
					color: #11131c;
				}
			}
		}
		.spacer.text {
			width: 100%;
			height: get-vw(5px);
			@media screen and (min-width: 1240px) {
				height: min(get-vw(5px), 5px);
			}
			@media screen and (max-width: $bp) {
				height: max(get-vw(5px), 5px);
			}
		}
		.spacer.text.two {
			width: 100%;
			height: get-vw(15px);
			@media screen and (min-width: 1240px) {
				height: min(get-vw(15px), 15px);
			}
			@media screen and (max-width: $bp) {
				height: max(get-vw(15px), 15px);
			}
		}
		.spacer.text.three {
			width: 100%;
			height: get-vw(25px);
			@media screen and (min-width: 1240px) {
				height: min(get-vw(25px), 25px);
			}
			@media screen and (max-width: $bp) {
				height: max(get-vw(25px), 25px);
			}
		}
	}
</style>
