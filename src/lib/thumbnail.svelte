<script>
	export let title;
	export let summary;
	export let link;
	export let tags;
	export let thumbnail;
</script>

<div class="thumbnail">
	<a href={link}>
		<img src={thumbnail} alt="Thumbnail" />
	</a>
	<div class="content">
		<a href={link}>
			<h2 class="title">
				{title}
			</h2>
			<div class="s">
				{summary}
			</div>
		</a>
		<!-- <div class="spacer" style="padding: 10px" /> -->
		<div class="content-footer">
			<p class="tags">
				{#each tags as tag}
					<a class="tag" href={`/blog/tags/${tag}`}>
						#{tag}
					</a>
				{/each}
			</p>
			<a href={link}>
				<div id="arrow-icon" />
			</a>
		</div>
		<!-- <div class="spacer" style="padding: 10px" /> -->
	</div>
</div>

<style lang="scss">
	@import '../variables.scss';

	.title {
		line-height: 1.5;
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
	.s {
		max-width: 100%;
		aspect-ratio: 29/10;
		overflow: hidden;
		white-space: pre-wrap;
		text-overflow: ellipsis;
		line-height: 1.6;
	}

	.thumbnail {
		aspect-ratio: 38 / 47;
		width: get-vw(350px);
		border-radius: get-vw(10px);
		background: #1a1e2c;
		@media screen and (max-width: $bp) {
			height: auto;
			width: 100%;
		}
		@media screen and (min-width: 1240px) {
			width: min(get-vw(380px), 380px);
			border-radius: min(get-vw(10px), 10px);
		}
	}

	img {
		border-radius: 10px 10px 0 0;
		width: 100%;
		object-fit: contain;
	}

	h2 {
		word-wrap: break-word;
		font-size: get-vw(26px);
		@media screen and (max-width: $bp) {
			font-size: max(get-vw(26px), 26px);
		}
		@media screen and (min-width: 1240px) {
			font-size: min(get-vw(26px), 26px);
		}
	}
</style>
