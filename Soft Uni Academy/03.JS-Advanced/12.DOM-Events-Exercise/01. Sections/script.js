function create(words) {

   const counteRef = document.getElementById("content");
   for(let word of words){
      let divRef = document.createElement("div");
      let pRif = document.createElement("p");
      pRif.style.display = "none";
      pRif.textContent = word;

      divRef.appendChild(pRif);
      counteRef.appendChild(divRef);

      divRef.addEventListener("click", onClickHandler);
   }

   function onClickHandler(e){
      let divRef = e.currentTarget;
      let pRef = divRef.children[0].style.display = "block";
   }
}