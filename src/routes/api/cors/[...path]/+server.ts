import type {RequestHandler} from "@sveltejs/kit";


export const fallback: RequestHandler = async ({request, url}) => {
    const prefix = url.origin + "/api/cors/";
    const targetURL = url.href.slice(prefix.length);

    const requestHeaders = new Headers(request.headers);
    requestHeaders.delete("host");
    const response = await fetch(targetURL, {
        method : request.method,
        headers : requestHeaders,
        body: ["GET", "HEAD"].includes(request.method) ? undefined : request.body,
        // @ts-expect-error
        duplex: "half"
    })
    
    const responseHeaders = new Headers(response.headers);
    responseHeaders.set("Access-Control-Allow-Origin", "*");
    responseHeaders.delete("content-encoding");
    responseHeaders.delete("content-length");
    
    return new Response(response.body, {
        status: response.status,
        statusText : response.statusText,
        headers : responseHeaders
    })
};