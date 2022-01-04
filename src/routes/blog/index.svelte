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
        return {
            props: {
                posts,
            }
        }
    }
</script>

<script>
    export let posts;
</script>

<div>

    <ul>
        {#each posts as {path, metadata}}
            <li>
                <a href={`/blog/${path.replace(".md", "")}`}>
                    {metadata.title} <br />
                    {metadata.summary}
                </a>
            </li>
        {/each}
    </ul>
</div>

