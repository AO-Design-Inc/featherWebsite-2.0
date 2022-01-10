<script>
	export let post;
</script>

<div class="container">
	<div class="thumbnail">
		<img src={post.metadata.thumbnail} alt="Thumbnail" class="background" />
		<div class="content">
			<div class="tags">
				{#each post.metadata.tags as tag}
					<a class="tag" href={`/blog/tags/${tag}`}>
						#{tag}
					</a>
				{/each}
			</div>
			<div class="title">
				{post.metadata.title}
			</div>
			<div class="summary">
				{post.metadata.summary}
			</div>
            <a href={`/blog/${post.path.replace("./", "").replace(".md", "")}`} class="button">
                <div class="button-text">
                    Read More
                </div>
                <div class="arrow-icon" />
            </a>
		</div>
	</div>
</div>

<style lang="scss">
	@import '../variables.scss';

    .button-text {
        font-size: 20px;
        margin-right: 10px;
        color: #74252b;
        font-weight: bold;
    }

    .button:hover  {
        background: #f87c86;
    }

    .button {
        display: flex;
        width: fit-content;
        padding: 15px 20px;
        border-radius: 10px 10px 10px 10px;
        background: #ffb0b0;
        margin-top: 30px;
    }

    .arrow-icon {
        content: url("/arrow-dark.svg");
        color: #74252b;
    }

    .summary {
        padding-top: 20px;
        line-height: 1.5;
    }

	.title {
        padding-top: 20px;
		font-weight: bold;
		font-size: get-vw(40px);
		@media screen and (max-width: $bp) {
			font-size: max(get-vw(40px), 20px);
		}
		@media screen and (min-width: 1240px) {
			font-size: min(get-vw(40px), 40px);
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
		margin-left: 66%;
		padding: get-vw(30px);
		background: rgba(0, 0, 0, 0.6);
		border-radius: 0px get-vw(10px) get-vw(10px) 0px;
		@media screen and (max-width: $bp) {
			padding: max(get-vw(30px), 30px);
			border-radius: 0px max(get-vw(10px), 10px) max(get-vw(10px), 10px) 0px;
		}
		@media screen and (min-width: 1240px) {
			padding: min(get-vw(30px), 30px);
			border-radius: 0px min(get-vw(10px), 10px) min(get-vw(10px), 10px) 0px;
		}
	}

	.thumbnail .content,
	.thumbnail img {
		grid-row-start: 1;
		grid-column-start: 1;
	}

	.thumbnail {
		display: grid;
		height: get-vw(445px);
		grid-template-columns: 1fr;
		@media screen and (min-width: 1240px) {
			height: min(get-vw(445px), 445px);
		}
		@media screen and (max-width: $bp) {
			height: max(get-vw(445px), 445px);
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
			height: max(get-vw(445px), 445px);
		}
	}

	.container {
		width: 100%;
		padding-top: 70px;
	}
</style>
