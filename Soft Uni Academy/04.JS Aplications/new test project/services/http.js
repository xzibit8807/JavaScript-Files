export function get(url){
    return fetch(url, {
        method: "GET",
    })
    .then((res) => res.json())
    .catch((err) => alert("Error"));    
}

