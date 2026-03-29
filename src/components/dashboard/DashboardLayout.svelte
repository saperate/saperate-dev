<script>
    import {goto} from "$app/navigation";
    import ProtectedRoute from "../ProtectedRoute.svelte";
    import {getHanko} from "$lib/browser/auth.js";
    
    const logout = async () => {
        const hanko = await getHanko();
        await hanko.logout()
        await goto("/")
    };
</script>

<ProtectedRoute/>
<div class="main_container">
    <aside class="sidebar">
        <button class="sidebar_element" on:click={() => {goto("/dashboard")}}>
            Profile Info<!-- Stuff we see on the website (visibility, pfp, bio, ect) -->
        </button>
        <button class="sidebar_element" on:click={() => {goto("/dashboard/customize")}}>
            Customisation <!-- Change how the website looks -->
        </button>
        <button class="sidebar_element" on:click={() => {goto("/dashboard/privacy")}}>
            Privacy Settings
        </button>
        <button class="sidebar_element" on:click={() => {goto("/dashboard/account")}}>
            Account Settings
        </button>
        <button class="sidebar_element logout_button" on:click={logout}>
            Log-out
        </button>
    </aside>
    <div style="width: 60%; background-color: white">
        <slot/>
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
        height: fit-content;
        margin: 0 2%;
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