<script context="module">
	export async function load({ url, params, fetch }) {
		// const slug = url.pathname.split('/').slice(-1)[0]; // last part of url path
		const cleanUrl = `/${params.slug}.json`;
		const res = await fetch(cleanUrl);
		if (res.ok) {
			return {
				props: {
					post: await res.json()
				}
			};
		}
		return {
			status: res.status,
			error: new Error(`Could not load ${url}`)
		};
	}
</script>

<script>
	import Clipboard from 'svelte-clipboard';
	import '../../app.scss';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
    import hljs from 'highlight.js';
    import 'highlight.js/styles/atom-one-dark.css';
    
	let url = $page.url.pathname;
	onMount(async () => {
		url = window.location.href;
		// console.log(url);
		// const esc = str => str.replaceAll("<", "&lt;");
		// document.querySelectorAll("code") // this will escape and trim all elements including nohighlight
		// 	.forEach(elem =>elem.innerHTML = esc(elem.innerHTML.trim()));
		hljs.highlightAll();
		
	});

	export let post;
	// console.log(post);

	let socialArray = [
		{
			name: 'Link',
			url: `${url}`,
			icon: '/share-link.svg'
		},
		{
			name: 'Twitter',
			url: `https://twitter.com/intent/tweet?text=Check%20out%20this%20blog:%20https://feather.systems${url}`,
			icon: '/share-twitter.svg'
		},
		{
			name: 'Facebook',
			url: `https://www.facebook.com/sharer.php?u=https://feather.systems${url}`,
			icon: '/share-fb.svg'
		},
		{
			name: 'LinkedIn',
			url: `https://www.linkedin.com/sharing/share-offsite/?url=https://feather.systems/`,
			icon: '/share-linkedin.svg'
		}
	];
</script>

<svelte:head>
	<title>{post.title}</title>
	<meta name="description" content={post.summary} />
</svelte:head>

<div class="container">
	<div class="spacer hundred" />
	<div class="thumbnail">
		<div class="heading-container">
			<div class="heading-box">
				<div class="heading">
					<div class="title">
						{post.title}
					</div>
					<div class="spacer ten" />
					<div class="meta">
						{post.author} - {new Date(post.date).toDateString()} - {#each post.tags as tag}
							<a class="tag" sveltekit:prefetch href={`tags/${tag}`}>
								#{tag}
							</a>
						{/each}
					</div>
					<div class="spacer twenty" />
				</div>
			</div>
		</div>
	</div>
	<div class="content">
		<div class="social-container">
			<div class="sticky-social">
				{#each socialArray as { name, url, icon }, i}
					{#if name === 'Link'}
						<Clipboard
							text="https://feather.systems{url}"
							let:copy
							on:copy={() => {
								alert('Link has been copied to your clipboard');
							}}
						>
							<img on:click={copy} src={icon} class="social image {name}" alt={name} />
						</Clipboard>
					{:else}
						<a href={url} class={i}>
							<img src={icon} class="social image {name}" alt={name} />
						</a>
					{/if}
				{/each}
			</div>
		</div>
		<div class="slot">
			{@html post.html}
		</div>
		<div class="center-spacer" />
	</div>
	<div class="spacer hundred" />
	<div class="spacer hundred" />
	<div class="spacer bottom" style={'padding: 15px'} />
</div>



<style lang="scss">
	@import '../../variables.scss';
	.container {
		position: relative;
		width: get-vw(780px);
		margin: 0px auto 0px auto;
		@media screen and (max-width: $bp) {
			width: max(get-vw(780px), 90%);
		}
		@media screen and (min-width: 1240px) {
			width: min(get-vw(780px), 780px);
		}
	}

	.thumbnail {
		margin: 0 60px;
		@media screen and (max-width: $bp) {
			margin: 0;
		}
		@media screen and (max-width: 1112px) {
			margin: 0;
		}
	}

	.social-container {
		margin: get-vw(30px) 0px 0px 0px;
		/*position: fixed;
		left: get-vw(310px);
		top: get-vw(310px);
		z-index: 1;*/
		min-width: 60px;
		min-height: 100%;
		/*padding-top: 30px;
		padding-right: 10px;
		*/

		@media screen and (max-width: 1112px) {
			display: none;
		}
		@media screen and (max-width: $bp) {
			left: max(get-vw(310px), 310px);
			top: max(get-vw(270px), 270px);
		}
		@media screen and (min-width: 1240px) {
			left: max(get-vw(310px), 310px);
			top: max(get-vw(270px), 270px);
		}
	}

	.sticky-social {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: 160px;

		position: sticky;
		top: get-vw(150px);
	}

	.social.image {
		aspect-ratio: 1 / 1;
		width: 25px;
		height: 25px;
	}

	.center-spacer {
		min-width: 60px;
		flex-grow: 1;
		@media screen and (max-width: $bp) {
			min-width: 0;
		}

		@media screen and (max-width: 1112px) {
			min-width: 0;
		}
	}

	.title {
		font-size: get-vw(48px);
		font-weight: bold;
		@media screen and (max-width: $bp) {
			font-size: max(get-vw(48px), 37px);
		}
		@media screen and (min-width: 1240px) {
			font-size: min(get-vw(48px), 48px);
		}
	}
	.meta {
		opacity: 0.75;
	}
	.tag {
		margin-right: 5px;
		text-decoration: none;
		color: #fffffb;
	}

	.tag:hover {
		color: #fb7680;
	}

	.heading-box {
		display: flex;
		vertical-align: bottom;
		width: 100%;
	}

	.heading {
		display: flex;
		flex-direction: column;
		@media screen and (max-width: $bp) {
			width: 80%;
			padding-left: 20px;
		}
	}

	.content {
		display: flex;
		flex-direction: row;
		@media screen and (max-width: $bp) {
			margin: 0%;
		}
	}

	.slot {
		position: relative;
		z-index: 1;
		height: 100%;
		overflow: hidden;
		color: #fffffb;
	}
	.spacer.hundred {
		height: get-vw(85px);
		@media screen and (max-width: $bp) {
			height: max(get-vw(85px), 85px);
		}
		@media screen and (min-width: 1240px) {
			height: min(get-vw(85px), 85px);
		}
	}
	.spacer.ten {
		height: get-vw(10px);
		@media screen and (max-width: $bp) {
			height: max(get-vw(10px), 10px);
		}
		@media screen and (min-width: 1240px) {
			height: min(get-vw(10px), 10px);
		}
	}
	.spacer.twenty {
		height: get-vw(5px);
		@media screen and (max-width: $bp) {
			height: max(get-vw(5px), 5px);
		}
		@media screen and (min-width: 1240px) {
			height: min(get-vw(5px), 5px);
		}
	}
</style>
