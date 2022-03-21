<script>
	// action="https://api.moosend.com/v3/subscribers/MailingListID/subscribe.Format?apikey=cb7f090a-1bf0-40fc-99b5-d5829d9f8d9a"
</script>

<div id="invite-container">
	<div class="spacer first" />
	<div class="title-container center center-text">
		<div class="hundred-width subheader">You're invited to:</div>
		<div class="hundred-width title">The Future of Compute</div>
		<div class="spacer first two" />
		<div class="hundred-width date-time opacity-low">
			Tuesday, March 29th<br />2pm EST / 11am PST
		</div>
		<div class="spacer second" />
		<div class="center form-container hundred-width">
			<form
				onsubmit="window.open('https://feather.moosend.com/show_campaign/15105efe-e915-4e28-8adf-97543eb9c7a7/00000000-0000-0000-0000-000000000000/')"
				class="embeddable-buttondown-form"
			>
				<input
					class="field"
					placeholder="Full Name*"
					type="text"
					name="metadata__name"
					id="bd-name"
					required
				/>
				<div class="spacer form" />
				<input
					class="field"
					placeholder="Organization"
					type="text"
					name="metadata__org"
					id="bd-org"
				/>
				<div class="spacer form" />
				<input
					class="field"
					placeholder="Enter your email*"
					type="email"
					name="email"
					id="bd-email"
					required
				/>
				<div class="spacer form" />
				<div class="check-container">
					<input type="checkbox" id="Alpha" name="tag" value="Updates" />
					<div class="spacer check" />
					<label class="opacity-low" for="Alpha"
						>Keep up w/ Feather by joining our mailing list</label
					>
				</div>
				<div class="spacer form" />
				<input class="sub" type="submit" value="Subscribe" />
				<input type="hidden" name="tag" value="Launch2022" />
			</form>
		</div>
		<!-- <div class="spacer second" /> -->
		<div class="spacer first" />
		<div class="spacer first" />
		<div class="hundred-width image-container center">
			<img src="/invite/circle-f.webp" alt="The Future of Computing" />
		</div>
	</div>
</div>

<style lang="scss">
	@import '../variables';
	.spacer.first {
		width: 100%;
		height: get-vw(60px);
		@media screen and (min-width: 1240px) {
			height: min(get-vw(60px), 60px);
		}
		@media screen and (max-width: $bp) {
			height: max(get-vw(60px), 60px);
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
	.spacer.form {
		width: 100%;
		height: get-vw(20px);
		@media screen and (min-width: 1240px) {
			height: min(get-vw(20px), 20px);
		}
		@media screen and (max-width: $bp) {
			height: max(get-vw(20px), 20px);
		}
	}
	#invite-container,
	.title-container,
	.hundred-width {
		width: 100%;
	}
	.center {
		display: grid;
		place-items: center;
	}
	#invite-container {
		height: auto;
		text-align: center;
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
		.image-container {
			display: none;
			filter: saturate(1.45);
			img {
				max-width: get-vw(480px);
				@media screen and (min-width: 1240px) {
					max-width: min(get-vw(480px), 480px);
				}
				@media screen and (max-width: $bp) {
					max-width: max(get-vw(480px), 400px);
				}
			}
		}
	}

	// === form styling for this page === //

	form {
		position: relative;
		.field {
			height: get-vw(45px);
			min-height: 45px;
			border-radius: 2 * $g;
			color: #fffffb;
			background: #474b52;
			border: none;
			width: 100%;
			max-width: get-vw(450px);
			font-size: max(get-vw(16px), 16px);

			//   margin-right: get-vw(80px);
			margin-bottom: 0;
			padding: 8px 16px;
			@media screen and (min-width: 1240px) {
				height: min(get-vw(45px), 45px);
				font-size: min(get-vw(16px), 16px);
			}
			@media screen and (max-width: $bp) {
				max-width: 100%;
			}
		}
		.sub {
			color: #fffffb;
			margin: 0px;
			width: 100%;
			max-width: get-vw(450px);
			height: get-vw(45px);
			min-height: 45px;
			box-shadow: none;
			border: none;
			background: #fb7680;
			border-radius: 2 * $g;
			display: grid;
			place-items: center;
			cursor: pointer;

			font-size: max(get-vw(16px), 16px);
			transition: background 0.3s ease-in-out;

			@media screen and (max-width: $bp) {
				max-width: 100%;
			}
			@media screen and (min-width: 1240px) {
				height: min(get-vw(45px), 45px);
				font-size: min(get-vw(16px), 16px);
			}
		}
		.check-container {
			display: flex;
			align-items: center;
			font-size: get-vw(16px);
			@media screen and (min-width: 1240px) {
				font-size: min(get-vw(16px), 16px);
			}
			@media screen and (max-width: $bp) {
				font-size: max(get-vw(16px), 16px);
			}
			input {
				margin: 0%;
			}
			.spacer.check {
				height: 100%;
				width: get-vw(10px);

				@media screen and (min-width: 1240px) {
					width: min(get-vw(10px), 10px);
				}
				@media screen and (max-width: $bp) {
					width: max(get-vw(10px), 10px);
				}
			}
		}
		.sub {
			transition: background 0.3s ease-in-out;
			background: #f87c86;
		}
	}

	// === end form styling for this page === //
</style>
