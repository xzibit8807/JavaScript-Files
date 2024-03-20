function attachEvents() {
    const textArea = document.getElementById("messages");
    const uri = "http://localhost:3030/jsonstore/messenger";
    document.getElementById("refresh").addEventListener("click", onLoadComments);
    document.getElementById("submit").addEventListener("click", onSubmitComment);
   
   
    async function onLoadComments(e) {
        textArea.textContent = "";
        const response = await fetch(uri);
        const data = await response.json();
        Object.values(data).forEach(row => {
            textArea.textContent += `${row.author}: ${row.content}\n`
        })
        textArea.textContent = textArea.textContent.trim();
    }

    async function onSubmitComment(e) {
        const dataRef = document.querySelectorAll("#controls input[type=`text`]");
        const author = dataRef[0].value;
        const post = dataRef[1].value;
        const data = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                author,
                content
            })
        }
        fetch(uri, data);
        dataRef[0].value = "";
        dataRef[1].value = "";
    }
}

attachEvents();