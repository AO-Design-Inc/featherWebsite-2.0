<script>
    export let post;
</script>

<div class="container">
    <div class="thumbnail">
        <img src={post.metadata.thumbnail} alt="Thumbnail" class="background" />
        <div class="content">
            <div class="tags">
                Tags:
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
        </div>
    </div>
</div>

<style>

    .title {
        font-weight: bold;
        font-size: 30px;
    }

    .tag {
        opacity: 100%;
        margin-right: 5px;
        text-decoration: none;
        color: white;
    }

    .tag:hover {
        color: #FB7680;
    }

    .content {
        margin-left: 66%;
        padding: 30px;
        background: rgba(0, 0, 0, .6);
    }

    .thumbnail .content, .thumbnail img {
        grid-row-start: 1;
        grid-column-start: 1;
    }

    .thumbnail {
        display: grid;
        grid-template-columns: 1fr;
    }

    .background {
        width: 100%;
        height: 300px;
        display: block;
        object-fit: cover;
        border-radius: 10px 10px 10px 10px;
    }

    .container {
        width: 100%;
        padding-top: 70px;
    }
</style>


