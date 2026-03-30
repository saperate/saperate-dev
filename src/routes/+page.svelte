<script lang="ts">
	import {type User} from "@teamhanko/hanko-elements";
	import {onMount} from "svelte";
	import {getHanko, getUserOrUndefined} from "$lib/browser/auth";
	import {goto} from "$app/navigation";
	
	let user : User | undefined = undefined;
	onMount(async () => {
		user = await getUserOrUndefined();
	});

	const changecss = async () => {
		const hanko = await getHanko();
		await hanko.logout()
		await goto("/")
	};
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>
THIS IS MAIN. I'll be presenting myself here. Who am I, what I like, my friends, my values, my strength & weaknesses
It also will have a section about how to and what can be commissioned. 
It should have a section with my socials, contact
I'd also want to show off my sonas here 
{user === undefined || user.username === undefined ? "" : "Hello " + user.username.username + "!!!"}

<!-- TODO add a page for donations/commissions, commissions would probably just redirect them to my discord or send a mail -->