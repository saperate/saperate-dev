import {goto} from "$app/navigation";
import {Hanko} from "@teamhanko/hanko-elements";

const hankoApi = import.meta.env.VITE_HANKO_API_URL;


export async function getHanko(){
    return new Hanko(hankoApi)
}


export async function validateSession() {
    try {
        const hanko = await getHanko();
        return (await hanko.validateSession()).is_valid;
    } catch (error) {
        return false;
    }
}

export async function getUserOrUndefined() {
    try {
        const hanko = new Hanko(hankoApi);
        return await hanko.getCurrentUser();
    } catch (error) {
        
    }
}


export async function getUserOrAuth() {
    try {
        const hanko = new Hanko(hankoApi);
        return await hanko.getCurrentUser();
    } catch (error) {
        await goto("/auth");
    }
}