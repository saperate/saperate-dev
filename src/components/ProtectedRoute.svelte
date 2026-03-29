<script>
    import { onMount } from "svelte";
    import {goto} from "$app/navigation";
    import {validateSession} from "$lib/browser/auth.js";

    onMount(async () => {
        if(!await validateSession()){
            await goto("/auth");
        }
    })
</script>

<slot/>