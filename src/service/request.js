export default class Request {

    getResource = async ({requestPath}) => {
        console.log('sending request: ' + requestPath);
        const res = await fetch(`${requestPath}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${requestPath}` +
                `, received ${res.status}`)
        }
        return await res.json();
    };

};