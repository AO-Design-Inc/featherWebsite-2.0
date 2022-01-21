<script>
	export let post;
	
	let hovering = false;
	function enter() {
		hovering = true;
	}
	function leave() {
		hovering = false;
	}
	

</script>

<div class="container">
	<div class="thumbnail">
		<div class="image">
			<img src={post.thumbnail} alt="Thumbnail" class="background" />
		</div>
		<div class="content">
			<div class="tags">
				{#each post.tags as tag}
					<a sveltekit:prefetch class="tag" href={`/tags/${tag}`}>
						#{tag}
					</a>
				{/each}
			</div>
			<div class="title">
				{post.title}
			</div>
			<div class="summary truncate">
				{post.summary}
			</div>
			<a on:mouseenter={enter} on:mouseleave={leave} sveltekit:prefetch href={`/${post.slug}`} class="button">
				<div class="button-text">Read More</div>
				<div class="arrow-icon" />
			</a>
		</div>
	</div>
</div>

<style lang="scss">
	@import '../variables.scss';

	.image {
		overflow: hidden;
	}

	.hovering {
		transform: scale(1.2);
	}

	img {
		display: block;
		transition: transform .4s;
	}

	.button-text {
		font-size: get-vw(20px);
		margin-right: 10px;
		color: #74252b;
		font-weight: 700;
		@media screen and (max-width: $bp) {
			font-size: max(get-vw(20px), 20px);
		}
		@media screen and (min-width: 1240px) {
			font-size: min(get-vw(20px), 20px);
		}
	}

	.button:hover {
		background: #f87c86;
	}

	.button {
		display: flex;
		width: fit-content;
		padding: get-vw(15px) get-vw(20px);
		border-radius: 10px 10px 10px 10px;
		background: #ffb0b0;
		margin-top: get-vw(30px);
		@media screen and (max-width: $bp) {
			margin-top: max(get-vw(30px), 30px);
			padding: max(get-vw(15px), 15px) max(get-vw(20px), 20px);
		}
		@media screen and (min-width: 1240px) {
			margin-top: min(get-vw(30px), 30px);
			padding: min(get-vw(15px), 15px) min(get-vw(20px), 20px);
		}
	}

	.arrow-icon {
		content: url('/arrow-dark.svg');
		color: #74252b;
	}

	.summary {
		max-width: 100%;
		width: 100%;
		aspect-ratio: 35/10;
		font-size: get-vw(20px);
		padding-top: get-vw(15px);
		line-height: 1.3;
		opacity: 0.75;
		@media screen and (max-width: $bp) {
			aspect-ratio: auto;
			font-size: max(get-vw(20px), 20px);
			padding-top: max(get-vw(15px), 15px);
		}
		@media screen and (min-width: 1240px) {
			font-size: min(get-vw(20px), 20px);
			padding-top: min(get-vw(15px), 15px);
		}
	}

	.title {
		padding-top: get-vw(15px);
		font-weight: 700;
		font-size: get-vw(37px);
		@media screen and (max-width: $bp) {
			font-size: max(get-vw(37px), 37px);
			padding-top: max(get-vw(15px), 15px);
		}
		@media screen and (min-width: 1240px) {
			font-size: min(get-vw(37px), 37px);
			padding-top: min(get-vw(15px), 15px);
		}
	}

	.tag {
		opacity: 100%;
		margin-right: 5px;
		text-decoration: none;
		color: white;
	}

	.tag:hover {
		color: #fb7680;
	}

	.content {
		z-index: 1;
		padding: get-vw(30px);
		background: rgba(0, 0, 0, 0.6);
		border-radius: 0px get-vw(10px) get-vw(10px) 0px;
		margin-left: 66%;
		@media screen and (max-width: $bp) {
			margin-left: 0%;
			padding: max(get-vw(30px), 20px);
			background: linear-gradient(180deg, rgba(17, 19, 28, 0) 0%, rgba(17, 19, 28, 0.75) 100%);
			border-radius: 0px max(get-vw(10px), 10px) max(get-vw(10px), 10px) 0px;
		}
		@media screen and (min-width: 1240px) {
			padding: min(get-vw(30px), 30px);
			border-radius: 0px min(get-vw(10px), 10px) min(get-vw(10px), 10px) 0px;
		}
	}

	.thumbnail .content,
	.thumbnail .image {
		grid-row-start: 1;
		grid-column-start: 1;
	}
	.thumbnail img.background {
		// object-fit: cover;
		background-image: linear-gradient(360deg, rgba(17, 19, 28, 0.25) 0%, rgba(17, 19, 28, 1) 100%);
	}

	.thumbnail {
		display: grid;
		height: get-vw(445px);
		grid-template-columns: 1fr;
		@media screen and (min-width: 1240px) {
			height: min(get-vw(445px), 445px);
		}
		@media screen and (max-width: $bp) {
			height: max(get-vw(445px), 500px);
		}
	}

	.background {
		width: 100%;
		height: get-vw(445px);
		display: block;
		object-fit: cover;
		border-radius: 10px 10px 10px 10px;
		@media screen and (min-width: 1240px) {
			height: min(get-vw(445px), 445px);
		}
		@media screen and (max-width: $bp) {
			height: max(get-vw(445px), 500px);
		}
	}

	.container {
		width: 100%;
		padding-top: 70px;
		height: auto;
	}
</style>
