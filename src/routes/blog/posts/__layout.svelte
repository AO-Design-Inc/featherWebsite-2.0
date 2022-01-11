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
        const post = posts.find((post) => {
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
    let socialArray = [
      {
        name: "Twitter",
        url: "https://twitter.com/Feather_Systems",
        icon: "/twitter.svg",
      },
      {
        name: "Discord",
        url: "https://discord.gg/8KVKzg8HEk",
        icon: "/discord.svg",
      },
      {
        name: "Reddit",
        url: "https://www.reddit.com/r/FeatherSystems/",
        icon: "/reddit.svg",
      },
    ];
</script>

<div class="container">
    <div class="thumbnail">
        <img src={post.metadata.thumbnail} alt="background" class="background" />
        <div class="heading-container">
            <div class="heading-spacer" style={"height: 50%; width: 100%;"} />
            <div class="heading-box">
                <div class="social-container" />
                <div class="heading">
                    <div class="spacer" style={"padding: 15px"} />
                    <div class="tags">
                        Tags:
                        {#each post.metadata.tags as tag}
                            <a class="tag" href={`/blog/tags/${tag}`}>
                                #{tag}
                            </a>
                        {/each}
                    </div>
                    <div class="spacer" style={"padding: 5px"} />
                    <div class="date">
                        <em>{new Date(post.metadata.date).toDateString()}</em>
                    </div>
                    <div class="spacer" style={"padding: 5px"} />
                    <div class="title">
                        {post.metadata.title}
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="content">
        <div class="social-container">
            {#each socialArray as { name, url, icon }, i}
                <a href={url} class={i}>
                    <img src={icon} class="social image {name}" alt={name} />
                </a>
            {/each}
        </div>
        <div class="slot">
            <slot />
        </div>
    </div>
    <div class="spacer bottom" style={"padding: 15px"} />
</div>

<style lang="scss">
    @import '../../../variables.scss';
    .social-container {
        position: relative;
        z-index: 1;
        width: 40px;
        padding-top: 30px;
        padding-right: 10px;
        @media screen and (max-width: $bp) {
			display: none;
		}
    }

    .social.image {
        aspect-ratio: 1 / 1;
        width: 40px;
        height: 40px;
    }

    .title {
        font-size: 30px;
        font-weight: bold;
    }

    .tag {
        margin-right: 5px;
        text-decoration: none;
        color: black;
    }

    .tag:hover {
        color: #FB7680;
    }

    .container {
        background: #1d2030;
    }

    .background {
        width: 100%;
        height: 300px;
        display: block;
        object-fit: cover;
        mask-image: linear-gradient(360deg, rgba(17, 19, 28, 0) 0%, rgba(17, 19, 28, 0.75) 100%);
        -webkit-mask-image: linear-gradient(360deg, rgba(17, 19, 28, 0) 0%, rgba(17, 19, 28, 0.75) 100%);
    }

    .thumbnail {
        display: grid;
        grid-template-columns: 1fr;
    }

    .thumbnail .heading-container, .thumbnail img {
        grid-row-start: 1;
        grid-column-start: 1;
    }

    .thumbnail .heading-container {
        display: flex;
        flex-direction: column;
        color: black;
        margin-left: 23%;
        margin-right: 25%;
        z-index: 1;
        @media screen and (max-width: $bp) {
			margin-left: 0%;
            margin-right: 0%;
		}
        @media screen and (max-width: 800px) {
			margin-left: 0%;
            margin-right: auto;
		}
    }

    .heading-box {
        display: flex;
        vertical-align: bottom;
        width: 100%;
    }

    .heading {
        display: flex;
        flex-direction: column;
        background: #fffffb;
        width: 50%;
        height: 100%;
        border-radius: 10px 10px 0 0;
        padding-left: 30px;
        box-shadow: 10px 10px 0px 0px #E7E7E7;
        @media screen and (max-width: $bp) {
			width: 80%;
            padding-left: 20px;
		}
    }

    .content {
        display: flex;
        margin-left: 23%;
        margin-right: 23%;
        @media screen and (max-width: $bp) {
			margin: 0%;
		}
    }

    .slot {
        position: relative;
        z-index: 1;
        padding: 20px 20px 20px 30px;
        background: #fffffb;
        height: 100%;
        overflow: hidden;
        color: black;
        border-radius: 0 10px 10px 10px;
    }
    .spacer.bottom {
        @media screen and (max-width: $bp) {
			display: none;

		}
    }
</style>