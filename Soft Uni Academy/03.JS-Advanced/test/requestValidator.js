function requestValidator(obj) {
    const validMethod = ["GET", "POST", "DELETE", "CONNECT"];
    const uriPattern = /^[\w.]+$/g;
    const validVersion = ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0"];
    const specialChair = [`<`, `>`, `\\`, `&`, `'`, `"`];

    if (!validMethod.includes(obj.method)) {
        throw new Error("Invalid request header: Invalid Method")
    }
    if (!obj.uri || obj.uri !== "*" && !obj.uri.match(uriPattern)) {
        throw new Error("Invalid request header: Invalid URI");
    }

    if (!validVersion.includes(obj.version)) {
        throw new Error("Invalid request header: Invalid Version")
    }

    if(!obj.hasOwnProperty("message")){
        throw new Error("Invalid request header: Invalid Message")
    }
    for (let el of obj.message) {
        if (specialChair.includes(el)) {
            throw new Error("Invalid request header: Invalid Message")
        }
    }
    return obj;
}
console.log(requestValidator({

    method: 'GET',

    uri: 'svn.public.catalog',

    version: 'HTTP/1.1',

    message: ''

}));
/*"Invalid request header: Invalid {Method/URI/Version/Message}"*/