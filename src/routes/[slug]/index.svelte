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
        const { slug } = params;
        // Find the post with the slug
        const filteredPost = posts.find((p) => {
            return p.slug.toLowerCase() === slug.toLowerCase();
        });
        return {
            props: {
            // Tell page to load that post's module
                page: filteredPost.post.default
            }
        };
    };
</script>
  
<!-- <script>
    export let page;
</script> -->

<!-- <svelte:component this={page}/> -->