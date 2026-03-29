<script lang="ts">
	import {afterNavigate} from "$app/navigation";
	import {getUserOrUndefined} from "$lib/browser/auth";
	import type {User} from "@teamhanko/hanko-elements";

	let user : User | undefined = undefined;
	
	afterNavigate(async () =>{
		user = await getUserOrUndefined()
	})
</script>

<header>
	<div class="corner">
		
	</div>

	<nav>
		<a class="nav_element" href="/"> Home </a>
		<a class="nav_element" href="/projects"> Projects </a>
		<a class="nav_element" href="/media"> Media </a>
		<a class="nav_element" href="/blog"> Blog </a>
		<a class="nav_element" href="/reviews"> Reviews </a>
	</nav>

	<div class="corner">
		{#if user !== undefined}
			<a class="profile_picture_container" href="/dashboard">
				<img class="profile_picture" src={user.picture} alt="The user's profile"/>
			</a>
		{/if}
	</div>
</header>

<style>
	header {
		display: flex;
		height: fit-content;
		justify-content: space-between;
	}

	.corner {
		width: 3em;
		height: 3em;
		margin: 1% 5%;
	}

	nav {
		display: flex;
		justify-content: center;
		--background: rgba(255, 255, 255, 0.7);
	}
	

	a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 0.8rem;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--color-theme-1);
	}
</style>
