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
        <div class="content">
            <h2>
                {title}
            </h2>
            <div>
                {summary}
            </div>
            <div class="spacer" style="padding: 10px" />
            <div class="content-footer">
                <p class="tags">
                    {#each tags as tag}
                        <a class="tag" href={`/blog/tags/${tag}`}>
                            #{tag}
                        </a>
                    {/each}
                </p>
                <div id="arrow-icon" />
            </div>
            <div class="spacer" style="padding: 10px" />
        </div>
    </a>
</div>

<style>

    .tag {
        margin-right: 10px;
        text-decoration: none;
    }

    .tags {
        display: flex;
        flex-direction: row;
    }

    #arrow-icon {
        content: url("/arrow.svg");
    }

    .content-footer {
        display: flex;
        justify-content: space-between;
    }

    .content {
        padding-left: 20px;
        padding-right: 20px;
    }

    .thumbnail {
        height: 450px;
        border-radius: 10px;
        background: #1a1e2c;
    }

    img {
        border-radius: 10px 10px 0 0;
        width: 100%;
        object-fit: contain;
    }

    h2 {
        word-wrap: break-word;
    }

</style>