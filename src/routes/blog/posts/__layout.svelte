<script context="module">
	const posts = import.meta.glob('./*.md');

	let body = [];
	for (let path in posts) {
		body.push(
			posts[path]().then(({ metadata }) => {
				return { path, metadata };
			})
		);
	}

	export const load = async ({ url }) => {
		const posts = await Promise.all(body);
		const name = url.pathname.replace('/blog/posts/', '');
		const post = posts.find((post) => {
			return post.path.replace('./', '').replace('.md', '') === name;
		});
		// console.log(post);
		return {
			props: {
				post
			}
		};
	};
</script>

<script>
	import '../../../app.scss';
	import { page } from '$app/stores';
	console.log(page);
	export let post;
	let socialArray = [
		{
			name: 'Twitter',
			url: `https://twitter.com/intent/tweet?text=Hello%20https://feather.systems/${page.url}`,
			icon: '/share-twitter.svg'
		},
		{
			name: 'Facebook',
			url: 'https://discord.gg/8KVKzg8HEk',
			icon: '/discord.svg'
		},
		{
			name: 'Reddit',
			url: 'https://www.reddit.com/r/FeatherSystems/',
			icon: '/reddit.svg'
		}
	];
</script>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/katex@0.15.1/dist/katex.min.css"
		integrity="sha384-R4558gYOUz8mP9YWpZJjofhk+zx0AS11p36HnD2ZKj/6JR5z27gSSULCNHIRReVs"
		crossorigin="anonymous"
	/>
	<!-- The loading of KaTeX is deferred to speed up page rendering -->
	<script
		defer
		src="https://cdn.jsdelivr.net/npm/katex@0.15.1/dist/katex.min.js"
		integrity="sha384-z1fJDqw8ZApjGO3/unPWUPsIymfsJmyrDVWC8Tv/a1HeOtGmkwNd/7xUS0Xcnvsx"
		crossorigin="anonymous"></script>

	<!-- To automatically render math in text elements, include the auto-render extension: -->
	<script
		defer
		src="https://cdn.jsdelivr.net/npm/katex@0.15.1/dist/contrib/auto-render.min.js"
		integrity="sha384-+XBljXPPiv+OzfbB3cVmLHf4hdUFHlWNZN5spNQ7rmHTXpd7WvJum6fIACpNNfIR"
		crossorigin="anonymous"
		onload="renderMathInElement(document.body);"></script>
</svelte:head>

<div class="container">
	<div class="spacer hundred" />
	<div class="thumbnail">
		<div class="heading-container">
			<div class="heading-box">
				<div class="heading">
					<div class="title">
						{post.metadata.title}
					</div>
					<div class="spacer ten" />
					<div class="meta">
						{post.metadata.author} - {new Date(post.metadata.date).toDateString()} - {#each post.metadata.tags as tag}
							<a class="tag" href={`/blog/tags/${tag}`}>
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
			{#each socialArray as { name, url, icon }, i}
				<a href={url} class={i}>
					<img src={icon} class="social image {name}" alt={name} />
				</a>
			{/each}
		</div>
		<div class="slot">
			<slot />
		</div>
	</div>
	<div class="spacer bottom" style={'padding: 15px'} />
</div>

<style lang="scss">
	@import '../../../variables.scss';
	.container {
		position: relative;
		width: get-vw(660px);
		margin: 0px auto 0px auto;
		@media screen and (max-width: $bp) {
			width: max(get-vw(660px), 90%);
		}
		@media screen and (min-width: 1240px) {
			width: min(get-vw(660px), 660px);
		}
	}
	.social-container {
		position: fixed;
		left: get-vw(310px);
		top: get-vw(310px);
		z-index: 1;
		width: 40px;
		height: 100%;
		padding-top: 30px;
		padding-right: 10px;
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

	.social.image {
		aspect-ratio: 1 / 1;
		width: 40px;
		height: 40px;
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
