<script>
    import { onMount } from "svelte";
    import { register } from "@teamhanko/hanko-elements";

    const hankoApi = import.meta.env.VITE_HANKO_API_URL;
    const redirectAfterLogin = () => {
        //User logged in
        history.back()
    };

    onMount(async () => {
        await register(hankoApi);
    });
</script>


<hanko-auth on:onSessionCreated={redirectAfterLogin} />

