function solve() {
  const [generateBtnRef, buyBtnRef] = document.querySelectorAll("button");
  const [incomeText, outputText] = document.querySelectorAll("textarea");
  const tableBodyRef = document.querySelector("tbody");

  generateBtnRef.addEventListener("click", generateHandler)
  buyBtnRef.addEventListener("click", buyHandler);

  function generateHandler(e) {
    if (!incomeText.value) {
      return;
    }
    let value = JSON.parse(incomeText.value);
    for (let el of value) {
      let domEl = crateTableData(el)
      tableBodyRef.appendChild(domEl)
    }

  }

  function crateTableData(data) {
    let tableRow = document.createElement("tr")
    tableRow.innerHTML = 
    "<td>" +
     `<img src=${data.img}>` +
     "</td>" +
      "<td>" +
    `<p>${data.name}</p>` +
     "</td>" +
       "<td>" +
     `<p>${data.price}</p>` +
     "</td>" +
      "<td>" +
    `<p>${data.decFactor}</p>` +
     "</td>" +
      "<td>" +
      "<input type='checkbox'/>" +
      "</td>" 
    
    return tableRow;
    
  }

  function buyHandler(event) {
    let names = [];
    let totalPrice = 0;
    let avgDecFactor = 0;
    let selectCheckBox = Array.from(document.querySelectorAll("input[type=checkbox]")).filter(el => el.checked);
    
    selectCheckBox.forEach(el => {
      let [imgTD, nameTD, priceTD, decorFactorTD, markTD] = Array.from(el.parentElement.parentElement.children);
      names.push(nameTD.children[0].textContent);
      totalPrice += Number(priceTD.children[0].textContent);
      avgDecFactor += Number(decorFactorTD.children[0].textContent);
    });
    let res = `Bought furniture: ${names.join(", ")}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${avgDecFactor / names.length}`
    outputText.value = res;
  }
}
