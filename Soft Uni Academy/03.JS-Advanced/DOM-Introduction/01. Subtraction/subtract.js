function subtract() {
    let numA = Number(document.getElementById("firstNumber").value);
    let numB = Number(document.getElementById("secondNumber").value);
    let res = numA - numB;
    document.getElementById("result").textContent = res;
}