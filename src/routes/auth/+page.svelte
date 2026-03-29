<script>
    import HankoAuth from "../../components/HankoAuth.svelte";
    import {validateSession} from "$lib/browser/auth.js";
    import {navigate} from "svelte-routing";
    import {afterNavigate, goto} from "$app/navigation";

    afterNavigate(async () => {
        if(await validateSession()){
            await goto("/dashboard", {replaceState: true}); //We're already logged in, we don't need to be here
        }
    })
</script>

<div class="auth_container">
    <HankoAuth/>
</div>


<style>
    .auth_container {
        display: flex;
        justify-content: center;
        width: 100%;
        margin-top: 10%;
        margin-bottom: 10%;
    }
</style>