/* 01 
function formatGrade(grade){
    if (grade < 3){
        console.log(`Fail (2)`);
    }else if(grade >= 3.00 && grade < 3.50){
        console.log(`Poor (${grade.toFixed(2)})`);
    }else if(grade >= 3.50 && grade < 4.50){
        console.log(`Good (${grade.toFixed(2)})`);
    }else if ( grade >= 4.50 && grade < 5.50){
        console.log(`Very good (${grade.toFixed(2)})`);
    }else{
        console.log(`Excellent (${grade.toFixed(2)})`);
    }

}
formatGrade(3)
formatGrade(2.99432) */
/* 02
function myPow(x, y) {
    let result = 1;
    for (let i = 0; i < y; i++) {
        result *= x;
    }
    console.log(result);
  //  console.log(Math.pow(x, y));
}
myPow(3, 4); */
/*03 Repeat function
function repeater(text, n){
    let result = ``;
    for(let i = 0; i < n; i++){
        result += text;
    }
    return result;
}
let resultFromFunction = repeater("abc" ,3);
console.log(resultFromFunction); */
/* 05. Simple Calculator
function simpleCalculator(num1,num2,operator){

    let multiply = (a,b) => a * b;
    let divide = (a,b) => a / b;
    let add = (a,b) => a+b;
    let subtract = (a,b) => a - b;
    let result = 0;

    switch(operator){

        case "multiply": result = multiply(num1,num2); break;
        case "divide": result = divide(num1,num2); break;
        case "add": result = add(num1,num2); break;
        case "subtract":result = subtract(num1,num2); break;
    }
    console.log(result);
}

simpleCalculator(5,10,`multiply`); */
/* 04. Orders
function ordersTask(product,count){
    let coffee = 1.5;
    let water = 1;
    let coke = 1.4;
    let snacks = 2;
    let order = 0;

    switch (product) {
        case "coffee": order += coffee * count; break;
        case "water": order += water * count; break;
        case "coke": order += coke * count; break;
        case "snacks": order += snacks * count; break;
    }
    console.log(order.toFixed(2));
}
ordersTask("coffee", 2); */
/* 06. Sign Check
function singCheck(numOne, numTwo, numTree) {
    let result = numOne * numTwo * numTree;
    if (result >= 0) {
        console.log(`Positive`);
    } else {
        console.log(`Negative`);
    }
}
singCheck(-6, -12, 14); */
// 09. Special Numbers

function isSpecialNumber(num) {
    let sumOfDigits = 0;
    let isTrue = false;
    let digits = ``;

    for (i = 1; i <= num; i++) {
        digits = i.toString().split('');

        for (let x = 0; x < digits.length; x++) {

            sumOfDigits += parseInt(digits[i]);
        }
        if (sumOfDigits === 5 || sumOfDigits === 7 || sumOfDigits === 11) {
            isTrue = true;
        }
        console.log(`${sumOfDigits} -> ${isTrue}`);
    }

}


// function printSpecialNumbers(n) {
for (let i = 1; i <= n; i++) {
    let special = isSpecialNumber(i);

}
    //  }
}
isSpecialNumber(15);