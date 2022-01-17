<script context="module">
	export function load({ error, status }) {
		return {
			props: {
				status: status,
                error: error.message
			}
		};
	}
</script>

<script>
	export let status;
    export let error;
</script>

<div class="container">
    <div class="status">{status}</div>
    <h1 class="sad">This page does not exist :(</h1>
</div>

<style>

    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 90px 120px 90px 120px;
    }

    .status{
        font-size: 60px;
        font-weight: bold;
    }
</style>
