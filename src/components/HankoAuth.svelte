<script>
    import { onMount } from "svelte";
    import { register } from "@teamhanko/hanko-elements";
    import {goto} from "$app/navigation";

    const hankoApi = import.meta.env.VITE_HANKO_API_URL;
    const redirectAfterLogin = () => {
        //User logged in
        goto("/");
    };

    onMount(async () => {
        register(hankoApi).catch((error) => {
            // handle error
        });
    });
</script>


<hanko-auth on:onSessionCreated={redirectAfterLogin} />

