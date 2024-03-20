function solve() {
    const formRef = document.querySelector("form");
    formRef.addEventListener("submit", onSubmit);
    const taskRef = document.getElementById("task");
    const taskDescRef = document.getElementById("description");
    const dateRef = document.getElementById("date");
    const sectionRef = document.querySelectorAll("section");
    const openRef = sectionRef[1];
    const inProgres = sectionRef[2];
    const complete = sectionRef[3];


    function onSubmit(event) {
        event.preventDefault();
        const taskValue = taskRef.value;
        const taskDesc = taskDescRef.value;
        const date = dateRef.value;

        if (!taskDesc || !taskValue || !date) {
            return;
        }
        let myArticle = createArticle(taskValue, taskDesk, data);


        openRef.children[1].appendChild(myArticle);
        taskRef.value = "";
        taskDescRef.value = "";
        dateRef.value = "";
    }

    function createArticle(name, desc, date) {
        let article = document.createElement("article");
        article.innerHTML = `
        <h3>${name}</h3>
        <p>${desc}</p>
        <p>${date}</p>
        <div class = "flex">
        <button class = "green">Start</button>
        <button class = "red">Delete</button>
        </div>
        `;
    }

}