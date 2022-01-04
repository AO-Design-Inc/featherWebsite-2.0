<script context="module">
    const posts = import.meta.glob("./*.md");

    let body = [];
    for (let path in posts){
        body.push(
            posts[path]().then(({ metadata }) => {
                return { path, metadata }
            })
        );
    }

    export const load = async({ url }) => {
        const posts = await Promise.all(body);
        const name = url.pathname.replace("/blog/posts/", "");
        const post = posts.filter((post) => {
            return post.path.replace("./", "").replace(".md", "") === name;
        });
        // console.log(post);
        return {
            props: {
                post,
            }
        }
    }
</script>

<script>
	import '../../../app.scss';
    export let post;
    console.log(post);
</script>

<div>
    <slot />
</div>

<style>
    div {
        padding-left: 30px;
    }
</style>