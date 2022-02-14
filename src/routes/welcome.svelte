<div id="welcome">
	<div id="center-container">
		<div id="welcome-head">Welcome to Feather</div>
		<div class="spacer buttons" />
		<div id="button-container">
			<button id="download">
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
		</div>
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
			max-height: get-vw(215px);
			@media screen and (min-width: 1240px) {
				max-height: min(get-vw(215px), 215px);
			}
			@media screen and (max-width: $bp) {
				max-height: max(get-vw(215px), 215px);
			}
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
		.spacer.buttons {
			width: 100%;
			height: get-vw(40px);
			@media screen and (min-width: 1240px) {
				height: min(get-vw(40px), 40px);
			}
			@media screen and (max-width: $bp) {
				height: max(get-vw(40px), 40px);
			}
		}
		#button-container {
			display: flex;
			align-items: center;
			width: fit-content;
			margin: 0% auto;
			@media screen and (max-width: $bp) {
				display: block;
                width: 100%;
			}
			button {
				width: get-vw(235px);
				height: get-vw(55px);
				border-radius: get-vw(10px);
				margin: 0%;

				display: grid;
				place-items: center;

				font-size: get-vw(16px);

				@media screen and (min-width: 1240px) {
					width: min(get-vw(235px), 235px);
					height: min(get-vw(55px), 55px);
					font-size: min(get-vw(16px), 16px);
					border-radius: min(get-vw(10px), 10px);
				}
				@media screen and (max-width: $bp) {
					width: 100%;
					height: max(get-vw(55px), 55px);
					font-size: max(get-vw(16px), 16px);
					border-radius: max(get-vw(10px), 10px);
				}
			}
			button#download {
				border: none;
				background: #ffb0b0;
				box-shadow: 0px 0px 7px 2px rgba(251, 118, 128, 0.25);
			}
			.spacer.between.buttons {
				width: get-vw(35px);
				@media screen and (min-width: 1240px) {
					width: min(get-vw(35px), 35px);
				}
				@media screen and (max-width: $bp) {
					width: max(get-vw(35px), 15px);
				}
			}
			button#launch {
				background: none;
				border: 1px solid #ffdede;
				box-sizing: border-box;
				color: #fffffb;
			}
		}
	}
</style>
