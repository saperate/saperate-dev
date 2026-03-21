<script>
    import {Hanko, register} from "@teamhanko/hanko-elements";
    import { navigate } from 'svelte-routing';
    
    const logout = async () => {
        const {hanko} = await register(
            "https://saperate.dev"
        );
        hanko.logout()
        navigate("/");
    };
</script>

<button on:click={logout}>Logout</button>