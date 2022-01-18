<script context="module">
    // Get posts info
    const allPosts = import.meta.globEager(`../../lib/posts/*.md`);
    let posts = [];
    // Get the posts' slugs
    for (let path in allPosts) {
        const post = allPosts[path];
        const slug = post.metadata.slug;
        const p = { post, slug };
        posts.push(p);
    }

    // console.log(posts[0].post.metadata);
    // console.log(posts[0].post);

    export function load({ url, params }) {
        const { tags } = params;
        // Find the post with the slug
        const filteredPosts = posts.filter((p) => {
            return p.post.metadata.tags.includes(tags);
        });
        return {
            props: {
            // Tell page to load that post's module
                filteredPosts: filteredPosts,
                tag: tags
            }
        };
    };
</script>

<script>
    import Thumbnail from "$lib/thumbnail.svelte";
    export let filteredPosts;
    export let tag;
    // console.log(filteredPosts);
</script>


<div class="container">
    <div class="tags">
        Posts tagged with #{tag}
    </div>
    <div class="grid">
        {#each filteredPosts as { post, slug }}
            <Thumbnail title={post.metadata.title} summary={post.metadata.summary} link={post.metadata.slug} tags={post.metadata.tags}
                thumbnail={post.metadata.thumbnail} 
            />
        {/each}
    </div>
    <div class="spacer" style="padding: 45px" />
</div>


<style>

    .tags {
        padding: 35px;
        font-size: 40px;
        font-weight: 300;
    }
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .grid {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 50px;
    }
</style>