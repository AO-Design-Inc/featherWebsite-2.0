<script>
	import '../app.scss';
	import Dash from "$lib/dash.svelte";
	import Footer from "$lib/footer.svelte";
</script>

<svelte:head>
	<meta name="robots" content="index, follow" />
	<html lang="en-GB" />
</svelte:head>

<Dash />
<slot />
<Footer />
