export default class Request {

    getResource = async (requestPath) => {
        requestPath = Request.checkForHttp(requestPath);
        console.log('sending request: ' + requestPath);
        const res = await fetch(`${requestPath}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${requestPath}` +
                `, received ${res.status}`)
        }
        return await res.json();
    };

    static checkForHttp(requestPath) {
        if (!(requestPath.indexOf('http://') >= 0) && !(requestPath.indexOf('https://') >= 0)) {
            requestPath = 'http://' + requestPath;
        }
        return requestPath;
    }
};