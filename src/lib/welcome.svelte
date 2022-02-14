<div id="welcome">
	<div id="center-container">
		<div id="welcome-head">Welcome to Feather</div>
		<div id="button-container">
			<button>
				Download Feather
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
			</button>
			<button>
				Launch Feather
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
			</button>
		</div>
	</div>
</div>

<style lang="scss">
	#welcome {
		width: 100%;
		height: 100vh;
		display: grid;
		place-items: center;
		#welcome-head {
			height: 120vh;
			text-align: center;
			line-height: 101%;
			@media screen and (min-width: 1240px) {
				height: min(150vh, 875px);
			}
			@media screen and (max-width: $bp) {
				height: max(100vh, 660px);
			}
		}
        #button-container {
            display: flex;
            align-items: center;
            
        }
	}
</style>
