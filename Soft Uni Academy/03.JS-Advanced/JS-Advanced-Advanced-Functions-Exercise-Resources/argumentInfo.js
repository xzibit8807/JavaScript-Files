function argumentInfo(...data) {
    res = {};
    
    for (let elements of data) {
        let type = typeof (elements);
        console.log(`${type}: ${elements}`);
        if (!res.hasOwnProperty(type)) {
            res[type] = 0;
        }
        res[type] = res[type] + 1;
    }

    let sortRes = Object.entries(res).sort((a, b) => b[1] - a[1]);

    for (let [key, value] of sortRes) {
        console.log(`${key} = ${value}`);
    }
}
argumentInfo('cat', 42, function () { console.log('Hello world!'); })