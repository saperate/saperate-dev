<script>
    import {register} from "@teamhanko/hanko-elements";
    import {goto} from "$app/navigation";
    import ProtectedRoute from "../ProtectedRoute.svelte";
    
    const logout = async () => {
        const {hanko} = await register(
            "https://saperate.dev"
        );
        await hanko.logout()
        await goto("/")
    };
</script>

<ProtectedRoute/>
<div class="main_container">
    <div class="sidebar">
        <button class="sidebar_element" on:click={() => {goto("/dashboard")}}>
            Account settings <!-- This is Hanko settings -->
        </button>
        <button class="sidebar_element" on:click={() => {goto("/dashboard/profile")}}>
            Profile settings <!-- Stuff we see on the website (visibility, pfp, bio, ect) -->
        </button>
        <button class="sidebar_element logout_button" on:click={logout}>
            Log-out
        </button>
    </div>
    <div>
        <slot/>
    </div>
    <div class="sidebar" style="background-color: transparent">
    </div>
</div>

<style>
    .main_container {
        display: flex;
        justify-content: center;
        flex-direction: row;
    }

    .sidebar {
        width: 18%;
        margin: 0 5%;
        background-color: var(--background-color, white);
        display: flex;
        flex-direction: column;
        padding: 1% 0;
    }

    .sidebar_element {
        color: White; /* Change this when adding themes */
        background-color: var(--color-theme-2);
        border-style: none;

        margin: 10% 14%;
        width: auto;
        aspect-ratio: 2.5;
        border-radius: 8px;
        min-height: 3.25em;

        display: flex;
        justify-content: center;
        text-align: center;
        flex-direction: column;
        transition: ease-out 0.25s;

        text-decoration: none;
    }

    .sidebar_element:hover {
        transform: scale(110%);
        transition: ease-out 0.1s;
        cursor: pointer;
    }

    .logout_button {
        background-color: transparent;
        border-color: red;
        color: red;
        border-style: solid;
    }

    .logout_button:hover {
        border-style: dotted;
    }
</style>