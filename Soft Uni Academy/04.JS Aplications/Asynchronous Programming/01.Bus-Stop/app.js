async function getInfo() {
    const baseURI = "http://localhost:3030/jsonstore/bus/businfo/";

    const stopIDRef = document.getElementById("stopId");
    const busId = stopIDRef.value;


    const stopNameRef = document.getElementById("stopName");
    const ulRef = document.getElementById("buses");
    try {
        const response = await fetch(baseURI + busId);
        const data = await response.json();


        stopNameRef.textContent = data.name;
        clear();

        for (let [busId, time] of Object.entries(data.buses)) {
            let li = document.createElement("li");
            li.textContent = `Bis ${busId} arrives in ${time} minutes`
            ulRef.appendChild(li);
        }
    }catch(e){
        appendErrorMSG();
    }
    function appendErrorMSG() {
        clear();
        stopNameRef.textContent = "Error";
    }

    function clear() {
        stopIDRef.value = "";
        ulRef.innerHTML = "";
    }

}