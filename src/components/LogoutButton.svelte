<script>
    import { Hanko } from "@teamhanko/hanko-elements";
    import { navigate } from 'svelte-routing';

    const hankoApi = import.meta.env.VITE_HANKO_API_URL;

    const hanko = new Hanko(hankoApi);
    const logout = () => {
        hanko.logout().catch((error) => {
            console.log("Error during logging out : " + error);
        });
        navigate("/");
    };
</script>

<button on:click={logout}>Logout</button>