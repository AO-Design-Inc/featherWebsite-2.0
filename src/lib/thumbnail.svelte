<script>
	import { scale } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	export let title;
	export let summary;
	export let link;
	export let tags;
	export let thumbnail;

</script>

<a sveltekit:prefetch href={`/${link}`}>
	<div class="thumbnail">
		<div class="image">
			<img src={thumbnail} alt="Thumbnail" />
		</div>
		<div class="content">
			<h2 class="title truncate header">
				{title}
			</h2>
			<div class="summary truncate">
				{summary}
			</div>
			<div class="content-footer">
				<p class="tags">
					{#each tags as tag}
						<a sveltekit:prefetch class="tag" href={`/tags/${tag}`}>
							#{tag}
						</a>
					{/each}
				</p>
				<div id="arrow-icon" />
			</div>
		</div>
	</div>
</a>

<style lang="scss">
	@import '../variables.scss';

	.image {
		overflow: hidden;
		border-radius: 10px 10px 0 0;
	}

	.title {
		line-height: 1.25;
		font-size: get-vw(26px);
		@media screen and (max-width: $bp) {
			font-size: max(get-vw(26px), 26px);
		}
		@media screen and (min-width: 1240px) {
			font-size: min(get-vw(26px), 26px);
		}
	}
	.tag {
		margin-right: 10px;
		text-decoration: none;
	}

	.tags {
		display: flex;
		flex-direction: row;
	}

	#arrow-icon {
		content: url('/arrow.svg');
	}

	.content-footer {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.content {
		padding-left: 20px;
		padding-right: 20px;
	}
	.summary {
		width: 100%;
		min-height: 100px;
		line-height: 1.6;
		font-size: get-vw(16px);
		opacity: 0.75;
		@media screen and (max-width: $bp) {
			font-size: max(get-vw(16px), 16px);
		}
		@media screen and (min-width: 1240px) {
			font-size: min(get-vw(16px), 16px);
		}
	}

	.thumbnail {
		aspect-ratio: 38 / 47;
		min-width: get-vw(350px);
		height: 485px;
		// width: get-vw(350px);
		border-radius: get-vw(10px);
		background: #1a1e2c;
		@media screen and (max-width: $bp) {
			// min-width: max(get-vw(350px),350px);
			max-width: 100%;
			height: auto;
			width: 100%;
		}
		@media screen and (min-width: 1240px) {
			min-width: min(get-vw(350px),350px);
			width: min(get-vw(380px), 380px);
			border-radius: min(get-vw(10px), 10px);
		}
	}

	a {
		display: block;
	}

	img {
		border-radius: 10px 10px 0 0;
		width: 100%;
		object-fit: contain;
		transition: transform .4s;
		display: block;
	}

	.thumbnail:hover img {
		transform: scale(1.5);
	}

	h2 {
		word-wrap: break-word;
		font-size: get-vw(26px);
		min-height: 65px;
		@media screen and (max-width: $bp) {
			font-size: max(get-vw(26px), 26px);
		}
		@media screen and (min-width: 1240px) {
			font-size: min(get-vw(26px), 26px);
		}
	}
</style>
