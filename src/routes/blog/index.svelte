<script context="module">
	const posts = import.meta.glob('./posts/*.md');

	let body = [];
	for (let path in posts) {
		body.push(
			posts[path]().then(({ metadata }) => {
				return { path, metadata };
			})
		);
	}

	export const load = async () => {
		const posts = await Promise.all(body);
		posts.sort((a, b) => {
			return new Date(a.metadata.date) - new Date(b.metadata.date);
		});
		return {
			props: {
				posts
			}
		};
	};
</script>

<script>
	import Thumbnail from '$lib/thumbnail.svelte';
	import BlogBanner from '$lib/blog-banner.svelte';
	export let posts;
</script>

<div class="container">
	<div class="banner">
		<BlogBanner post={posts[0]} />
	</div>
	<div class="grid">
		{#each posts as { path, metadata }}
			<Thumbnail
				title={metadata.title}
				summary={metadata.summary}
				link={`/blog/${path.replace('.md', '')}`}
				tags={metadata.tags}
				thumbnail={metadata.thumbnail}
			/>
		{/each}
	</div>
</div>

<style lang="scss">
    @import '../../variables.scss';
	.banner {
		width: 100%;
	}

	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		max-width: 1240px;
		margin: 0px;
		padding: 0px get-vw(100px);
		@media screen and (min-width: 1440px) {
			padding: 0px;
			margin: 0px auto;
		}
	}
	.grid {
		padding-top: 70px;
		padding-bottom: 90px;
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		grid-gap: 50px;
		width: 100%;
		@media screen and (max-width: $bp) {
			grid-template-columns: 1fr;
		}
	}
</style>
