<script>
	import DownloadModal from '$lib/download-modal.svelte';
	// import fsm from 'svelte-fsm';
	import { popUpMachine } from '$lib/popUpMachine';

	import fsm from 'svelte-fsm';
	import { onMount } from 'svelte';

	let UserAgent, getOS, downloadBuild;
	let downloadables = {
		windows: '',
		mac: '',
		mac64: '',
		linux: '',
		linux64: ''
	};

	onMount(async () => {
		UserAgent = {
			Value: window.navigator.userAgent,
			contains: function contains(ValueToSearchFor) {
				return this.Value.indexOf(ValueToSearchFor) >= 0;
			},
			lacks: function lacks(ValueToSearchFor) {
				return this.Value.indexOf(ValueToSearchFor) < 0;
			},
			match: function match(Pattern) {
				return this.Value.match(Pattern);
			},
			matches: function matches(Pattern) {
				return this.Value.match(Pattern) != null;
			}
		};
		downloadBuild = (os) => {
			downloadMachine.download();
			fetch('https://api.github.com/repos/AO-Design-Inc/Feather-Releases/releases/latest')
				.then((response) => response.json())
				.then((data) => {
					console.log('A', os);

					for (let i = 0; i < data.assets.length; i++) {
						let arr = data.assets[i].browser_download_url;
						if (arr.endsWith('.exe') === true && downloadables.windows === '')
							downloadables.windows = arr;
						if (
							arr.endsWith('.dmg') === true &&
							arr.indexOf('arm64') < 0 === true &&
							downloadables.mac === ''
						)
							downloadables.mac = arr;
						if (
							arr.endsWith('arm64.dmg') === true &&
							arr.indexOf('arm64') >= 0 === true &&
							downloadables.mac64 === ''
						)
							downloadables.mac64 = arr;
						if (
							arr.endsWith('.AppImage') === true &&
							arr.indexOf('arm64') >= 0 === true &&
							downloadables.linux64 === ''
						)
							(downloadables.linux64 = arr), console.log(downloadables.linux64, 'linuc');
						if (
							arr.endsWith('.AppImage') === true &&
							arr.indexOf('arm64') < 0 === true &&
							downloadables.linux === ''
						)
							(downloadables.linux = arr), console.log(downloadables.linux, 'linuc');
						else () => {};
					}

					if (os === 'Mac OS') {
						console.log('Downloading Mac Build', downloadables.mac);
						window.open(downloadables.mac, 'download');
						downloadMachine.done();
						return downloadables.mac;
					} else if (os === 'Windows') {
						console.log('Downloading Windows Build', downloadables.windows);
						window.open(downloadables.windows, 'download');
						downloadMachine.done();
						return downloadables.windows;
					} else if (os === 'Linux') {
						console.log('Downloading Linux Build', downloadables.linux);
						window.open(downloadables.linux, 'download');
						downloadMachine.done();
						return downloadables.linux;
					} else if (os === 'Mac OS 64') {
						console.log('Downloading Mac 64 Build', downloadables.mac64);
						window.open(downloadables.mac64, 'download');
						downloadMachine.done();
						return downloadables.mac64;
					} else if (os === 'Linux 64') {
						console.log('Downloading Linux 64 Build', downloadables.linux64);
						window.open(downloadables.linux64, 'download');
						downloadMachine.done();
						return downloadables.linux64;
					}
				})
				.catch((error) => console.log('Error: ', error));
		};
		getOS = () => {
			let os = null;

			switch (true) {
				case UserAgent.contains('OS X') && UserAgent.lacks('Android'):
					os = 'Mac OS';
					break;
				case UserAgent.contains('like Mac OS X') && UserAgent.contains('iPhone'):
					os = 'iOS';
					break;
				case UserAgent.contains('Windows'):
					os = 'Windows';
					break;
				case UserAgent.contains('Android') ||
					(UserAgent.contains('Adr') && UserAgent.lacks('Windows Phone')):
					os = 'Android';
					break;
				case UserAgent.contains('Linux') && UserAgent.lacks('Android'):
					os = 'Linux';
					break;
			}
			return os;
		};
	});
	// === downloads fsm === //
	const downloadMachine = fsm('DOWNLOAD', {
		DOWNLOAD: {
			download: 'DOWNLOADING'
		},
		DOWNLOADING: {
			_enter() {
				// getOS();
				this.done.debounce(1500);
				if (getOS() === 'Mac OS') popUpMachine.mac();
				else if (getOS() === 'Linux') popUpMachine.linux();
				else if (getOS() === 'Windows') downloadBuild('Windows')
			},
			done: 'DONE'
		},
		DONE: {
			_enter() {
				this.change.debounce(1500);
			},
			change: 'DOWNLOAD'
		}
	});
	export { downloadMachine };
	// === end downloads fsm === //
</script>

{#if $popUpMachine === 'HIDDEN'}
	<div />
{:else if $popUpMachine === 'SHOW_MAC'}
	<DownloadModal
		message="Select the appropriate installer for Mac:"
		option1="Feather for Intel Macs"
		option2="Feather for Apple Silicon"
		func1={() => downloadBuild('Mac OS')}
		func2={() => downloadBuild('Mac OS 64')}
	/>
{:else if $popUpMachine === 'SHOW_LINUX'}
	<DownloadModal
		message="Select the appropriate installer for Linux:"
		option1="Feather for AMD Linux"
		option2="Feather for  ARM Linux"
		func1={() => downloadBuild('Linux')}
		func2={() => downloadBuild('Linux 64')}
	/>
{/if}

<div id="welcome">
	<div id="center-container">
		<div style="width: 100%; height: 30px" />
		<div id="welcome-head">Welcome to Feather!</div>
		<div class="spacer text" />
		<div id="thanks-head">Thanks for stopping by!</div>
		<div class="spacer text two" />
		<div id="download-head">
			<p>
				<span on:click={downloadMachine.download} class="butt">
					{#if $downloadMachine === 'DOWNLOAD'}
						Download Feather
					{:else if $downloadMachine === 'DOWNLOADING'}
						Downloading...
					{:else if $downloadMachine === 'DONE'}
						Done!
					{/if}
				</span>
				<span class="trans"
					>if you haven't already.<br /> Or go to the app and login if it's already installed.</span
				>
			</p>
		</div>
		<div class="spacer text three" />
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
				span.trans {
					opacity: 0.6;
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
