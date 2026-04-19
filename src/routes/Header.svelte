<script lang="ts">
    import {afterNavigate} from "$app/navigation";
    import {getUserOrUndefined} from "$lib/browser/auth";
    import type {User} from "@teamhanko/hanko-elements";
    import logo_transparent from '$lib/images/logo-transparent.svg';
    import account_filled from '$lib/images/account-filled.svg';
    import account_empty from '$lib/images/account-empty.svg';

    let user: User | undefined = undefined;

    afterNavigate(async () => {
        user = await getUserOrUndefined()
    })

    function getPicture(user : User | undefined) {
        if(user === undefined || user.picture === undefined)
            return account_filled
        return user.picture;
    }
    
</script>

<header>
    <div class="corner">
        <div class="logo_container">
            <img class="logo" src={logo_transparent} alt="logo"/>
        </div>
    </div>

    <nav>
        <a class={"nav_element"} href="/"> Home </a>
        <a class={"nav_element"} href="/projects"> Projects </a>
        <a class={"nav_element"} href="/media"> Media </a>
        <a class={"nav_element"} href="/blog"> Blog </a>
        <a class={"nav_element"} href="/reviews"> Reviews </a>
    </nav>

    <div class="corner">
            <a class="profile_picture_container" href="/dashboard">
                <img class="profile_picture" src={getPicture(user)} alt="The user's profile"/>
            </a>
    </div>
</header>

<style>
    header {
        display: flex;
        height: fit-content;
        justify-content: space-between;
        background-color: var(--color-bg-2);
        border-bottom: var(--color-theme-1);
        border-bottom-style: solid;
    }
    
    .nav_element{
        
    }

    .corner {
        width: 3.5em;
        height: 3.5em;
        margin: 0.5% 1%;
    }

    nav {
        display: flex;
        justify-content: center;
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
    
    .logo_container{
        display: flex;
        justify-content: center;
        height: 100%;
        margin: 0 3em;
    }
    
    .logo{
        display: flex;
        align-items: center;
        font-size: 3em;
    }
    
    .profile_picture_container{
        border-radius: 60%;
    }
    
    .profile_picture{
        width: 100%;
    }
</style>
