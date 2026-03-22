<script lang="ts">
	import {register, type User} from "@teamhanko/hanko-elements";
	
	const getUser = async () => {
		let hanko = (await register("https://saperate.dev")).hanko;
		return await hanko.getCurrentUser();
	}

</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>
THIS IS MAIN

{#await getUser()}
	<p>Loading stuff</p>
{:then user}
	{#if user !== undefined}
		Hello, ${user.name}
	{/if}
{:catch error}
	<p>Error: {error.message}</p>
{/await}


<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
