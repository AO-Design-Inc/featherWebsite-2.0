<script>
	const teamStruct = [
		{
			name: 'Jo Gao',
			title: 'COO',
			picture: '/avatars/jo.webp'
		},
		{
			name: 'Ojasvin Kirpane',
			title: 'CEO',
			picture: '/avatars/ojas.webp'
		},
		{
			name: 'Abhishek Cherath',
			title: 'CTO',
			picture: '/avatars/abhi.webp'
		},
		{
			name: 'Kyle Li',
			title: 'CMO',
			picture: '/avatars/kyle.webp'
		}
	];
</script>

<div id="about-container">
	<div class="container">
		<div class="spacer vert one" />
		<div class="spacer vert one" />
		<!-- <picture class="image">
			<img src="/about-illus.webp" alt="An illustration of what we do summed up abstractly." />
		</picture> -->
		<h1 class="text">About Us</h1>
		<div class="spacer vert two" />
		<h2 class="text">Who we are</h2>
		<p>
			We are Feather Systems!<br />
			So, Computers don’t work well together (especially across platforms). This leads to a lot of computer
			hardware running tasks that they are not necessarily optimised for. We turn people’s computers
			into routers for processing power, so that compute can happen where it is best for it to happen.
		</p>
		<h2 class="text">What we do</h2>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et sodales elit. Maecenas
			quis sapien a lacus hendrerit imperdiet. Sed luctus bibendum enim, ut ornare magna sodales
			non. Sed sed nisl in eros efficitur tristique venenatis sit amet turpis. Vivamus in tortor
			elit. Aenean lacinia semper orci.
		</p>
		<h2 class="text">Where we are going</h2>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et sodales elit. Maecenas
			quis sapien a lacus hendrerit imperdiet. Sed luctus bibendum enim, ut ornare magna sodales
			non. Sed sed nisl in eros efficitur tristique venenatis sit amet turpis. Vivamus in tortor
			elit. Aenean lacinia semper orci.
		</p>
		<h1>Our Team</h1>
		<div class="spacer vert one" />
		<div class="spacer vert one" />
		<div class="avatar-container">
			{#each teamStruct as { name, title, picture }, i}
				<div class="avatar-cards grow">
					<div class="filter" />
					<img src={picture} alt={name} />
					<div class="name">{name}</div>
					<div class="title">{title}</div>
				</div>
			{/each}
		</div>
		<div class="goodbye-message grow">
			<h1>Thanks for dropping by. 🎉</h1>
		</div>
		<div class="spacer vert two" />
	</div>
</div>

<style lang="scss">
	@import '../variables.scss';
	$aboutbp: 500px;
	// spacing and layout
	.container {
		width: get-vw(660px);
		margin: 0% auto;
		@media screen and (min-width: 1240px) {
			width: min(get-vw(660px), 660px);
		}
		@media screen and (max-width: $aboutbp) {
			width: max(get-vw(660px), 90%);
		}
		.avatar-container {
			display: grid;
			grid-template-columns: 1fr 1fr;
			grid-gap: get-vw(60px);
			@media screen and (min-width: 1240px) {
				grid-gap: min(get-vw(60px), 60px);
			}
			@media screen and (max-width: $bp) {
				grid-template-columns: 1fr;
				grid-gap: max(get-vw(60px), 60px);
			}
		}
		.avatar-cards {
			width: get-vw(300px);
			aspect-ratio: 10/13;
			border-radius: get-vw(10px);
			position: relative;
			@media screen and (min-width: 1240px) {
				width: min(get-vw(300px), 300px);
				border-radius: min(get-vw(10px), 10px);
			}
			@media screen and (max-width: $bp) {
				width: max(get-vw(300px), 100%);
				aspect-ratio: 10/10;
				overflow: hidden;
				border-radius: max(get-vw(10px), 10px);
			}
			.filter {
				z-index: 2;
				width: 100%;
				height: 100%;
				position: absolute;
				top: 0%;
				left: 0%;
				background-image: linear-gradient(
					0deg,
					#11131c 0%,
					rgba(240, 173, 183, 0) 56.28%,
					rgba(17, 19, 28, 0) 56.28%
				);
				@media screen and (max-width: $bp) {
					background-image: linear-gradient(
						0deg,
						#11131ca5 0%,
						rgba(240, 173, 183, 0) 25%,
						rgba(17, 19, 28, 0) 56.28%
					);
				}
			}
			img {
				z-index: 1;
				position: absolute;
				top: 0%;
				left: 0%;
				width: get-vw(300px);
				aspect-ratio: 10/13;
				@media screen and (min-width: 1240px) {
					width: min(get-vw(300px), 300px);
				}
				@media screen and (max-width: $bp) {
					width: max(get-vw(300px), 100%);
				}
			}
			.name {
				z-index: 3;
				position: absolute;
				bottom: 10%;
				left: 10%;
				max-width: get-vw(180px);

				font-size: get-vw(37px);
				font-weight: 700;
				line-height: 105%;
				@media screen and (min-width: 1240px) {
					font-size: min(get-vw(37px), 37px);
					max-width: min(get-vw(180px), 180px);
				}
				@media screen and (max-width: $bp) {
					max-width: max(get-vw(180px), 180px);
					font-size: max(get-vw(37px), 37px);
				}
			}
			.title {
				z-index: 3;
				position: absolute;
				bottom: 10%;
				right: 10%;
				font-size: 16px;
				font-style: normal;
				font-weight: 400;
				letter-spacing: 0em;
				text-align: right;
			}
		}

		//end
		.goodbye-message {
			height: 120vh;
			display: grid;
			place-items: center;
			h1 {
				text-align: center;
				line-height: 101%;
			}
			@media screen and (min-width: 1240px) {
				height: min(150vh, 875px);
			}
			@media screen and (max-width: $bp) {
				height: max(100vh, 660px);
			}
		}
	}

	// fonts and misc styling
	h1 {
		margin-top: get-vw(40px);
		margin-bottom: 1.5%;
		font-size: get-vw(89px);
		// text-align: center;

		@media screen and (min-width: 1240px) {
			font-size: min(get-vw(89px), 89px);
			margin-top: min(get-vw(40px), 40px);
		}
		@media screen and (max-width: $bp) {
			text-align: left;
			font-size: max(get-vw(89px), 59px);
			margin-top: max(get-vw(40px), 40px);
		}
	}
	h1.text {
		//gradient
		background: linear-gradient(96.56deg, #fff2f0 0%, #fcafa8 25%, #f5938b 40%);
		-webkit-background-clip: text;
		background-clip: text;
		-webkit-text-fill-color: transparent;
	}
	h2 {
		margin: 2% 0% 1% 0%;
		font-size: get-vw(37px);
		@media screen and (min-width: 1240px) {
			font-size: min(get-vw(37px), 37px);
		}
		@media screen and (max-width: $bp) {
			font-size: max(get-vw(37px), 37px);
		}
	}
	p {
		opacity: 0.85;
		font-size: 20px;
		font-style: normal;
		font-weight: 400;
		line-height: 1.75;
		letter-spacing: 0em;
		text-align: left;
		margin-top: 0.5%;
		margin-bottom: 7%;
	}

	// spacers
	.spacer.vert {
		width: 100%;
	}
	.vert.one {
		height: get-vw(25px);
		@media screen and (min-width: 1240px) {
			height: min(get-vw(25px), 25px);
		}
		@media screen and (max-width: $bp) {
			height: max(get-vw(25px), 25px);
		}
	}
	.vert.two {
		height: get-vw(5px);
		@media screen and (min-width: 1240px) {
			height: min(get-vw(5px), 5px);
		}
		@media screen and (max-width: $bp) {
			height: 0px;
		}
	}
</style>
