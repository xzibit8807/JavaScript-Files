function solve() {
    const spanRef = document.querySelector("div[id=info] span");
    const baseUri = "http://localhost:3030/jsonstore/bus/schedule/"
    const arriveBtnRef = document.getElementById("arrive");
    const departBtnRef = document.getElementById("depart");
    let nextStop = "depot";
    let currentStop = ``;

    function depart() {
        fetch(baseUri + nextStop).then(response => {
            response.json().then(data => {
                nextStop = data.next;
                currentStop = data.name;

                spanRef.textContent = `Next stop ${data.name}`;

                arriveBtnRef.disabled = false;
                departBtnRef.disabled = true;
            })
        }).catch(e=> console.log("Error"));
    }

    function arrive() {
        spanRef.textContent = `Arriving at ${currentStop}`;
        arriveBtnRef.disabled = true;
        departBtnRef.disabled = false;

    }

    return {
        depart,
        arrive
    };
}

let result = solve();