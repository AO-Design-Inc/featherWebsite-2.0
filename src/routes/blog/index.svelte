<script context="module">
    const posts = import.meta.glob("./posts/*.md");

    let body = [];
    for (let path in posts){
        body.push(
            posts[path]().then(({ metadata }) => {
                return { path, metadata }
            })
        );
    }

    export const load = async() => {
        const posts = await Promise.all(body);
        posts.sort((a, b) => {
            return new Date(a.metadata.date) - new Date(b.metadata.date);
        });
        return {
            props: {
                posts,
            }
        }
    }
</script>

<script>
    import Thumbnail from "$lib/thumbnail.svelte";
    export let posts;
</script>

<div class="container">
    <div class="spacer" style="padding: 35px" />
    <div class="grid">
        {#each posts as {path, metadata}}
            <Thumbnail title={metadata.title} summary={metadata.summary} 
                link={`/blog/${path.replace(".md", "")}`} tags={metadata.tags} 
                thumbnail={metadata.thumbnail}    
            />
        {/each}
    </div>
    <div class="spacer" style="padding: 45px" />
</div>


<style>

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

