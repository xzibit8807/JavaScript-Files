
/* 01. Even Position Elements
function evenPositions(input){

    let result = ``;
    for(let i = 0; i < input.length; i+=2){
        result += input[i];
        result += ` `;
    }
            console.log(result);
}
evenPositions(['20', '30', '40', '50', '60']); */
/* 03. Sum First Last
function sumFL(input){
    let a = Number(input[0]);
    let b = Number(input[input.length - 1]);
    let result = a + b;
    console.log(result);
}
sumFL(['20', '30', '40']); */
/* 04. Negative / Positive Numbers
function negativePositive(input){
    
}
negativePositive([7, -2, 8, 9]) */
/* 04. Previous Day
function previousDay(year, month, day){
    let myDate = new Date(year, month - 1, day)
    myDate.setDate(myDate.getDate() -1);

    console.log(`${myDate.getFullYear()}-${myDate.getMonth() +1}-${myDate.getDate()}`);
}
previousDay( 2016, 9, 30)*/

/*05 Time To Walk
function timeToWalk(steps, footprint, speed){

    let distanceInM = steps * footprint;
    let speedMetersInSec = speed / 3.6;
    let time = distanceInM / speedMetersInSec;
    let res = Math.floor(distanceInM / 500);


    let timeInMin = Math.floor(time / 60);
    let timeInSec = Math.round(time - (timeInMin* 60));
    timeInMin += res;

    let hours = Math.floor(timeInMin / 60);

    let horsToPrint = hours < 10 ? `0${hours}` : `${hours}`;
    let minToPrint = (timeInMin % 60);
    minToPrint = minToPrint < 10 ? `0${minToPrint}` : `${minToPrint}`;
    let secToPrint = timeInSec < 10 ? `0${timeInSec}` : `${timeInSec}`;

    console.log(`${horsToPrint}:${minToPrint}:${secToPrint}`);

}
timeToWalk(4000, 0.60 , 5)  */
/* 06  
function speedLimits(speed, area){
    let limit = 0;
    let difference = 0;
    let status = "speeding";
    switch (area) {
        case "motorway": limit = 130;  
            break;
        case "interstate": limit = 90;
            break;
        case "city": limit = 50;
            break;
        case "residential": limit = 20;
            break;
    }

    difference = speed - limit;

    if(difference > 20 && difference <= 40){
        status = "excessive speeding"
    }else if(difference > 40){
        status = "reckless driving"
    }

    if(limit >= speed){
        console.log(`Driving ${speed} km/h in a ${limit} zone`);
    }else{
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`);
    }
}
speedLimits(200, 'motorway'); */

/* 07. Cooking by Numbers -to make
function cookingByNum(num, op1, op2, op3, op4, op5) {

    let myNumber = Number(num);
    let arrOp = [];
    arrOp.push(op1);
    arrOp.push(op2);
    arrOp.push(op3);
    arrOp.push(op4);
    arrOp.push(op5);

    for (let i = 0; i < arrOp.length; i++) {
        switch (arrOp[i]) {
            case "chop": myNumber /= 2;
                break;
            case "dice": myNumber = Math.sqrt(myNumber);
                break;
            case "spice": myNumber += 1;
                break;
            case "bake": myNumber *= 3;
                break;
            case "fillet": myNumber *= 0.8;
                break;
        }
        console.log(myNumber);
    }
}
cookingByNum('32', 'chop', 'chop', 'chop', 'chop', 'chop');  */

/*09. Words Uppercase
function wordsUp(text){
    let textArr = text.split(/[^a-zA-Z0-9]+/gm);
    for(let i = 0; i< textArr.length; i++){
        textArr[i] = textArr[i].toUpperCase();
    }
    if(!textArr[textArr.length -1]){
        textArr.pop()
    }
    console.log(textArr.join(", "));
}
wordsUp('Hi, how are you?'); */
// Exercise: Syntax, Functions and Statements ...
/*01. Fruit
function fruit(item, weight, price){

    let neededItem = weight / 1000;
    let money = neededItem * price;

    console.log(`I need $${money.toFixed(2)} to buy ${neededItem.toFixed(2)} kilograms ${item}.`);
}
fruit('orange', 2500, 1.80); */
/* 02. Greatest Common Divisor – GCD...
function greatestCD(num1, num2) {
    let gcd = num1 % num2;
    while (gcd !== 0) {
        num1 = num2;
        num2 = gcd;
        gcd = num1 % num2;
    }
    console.log(num2);
}
greatestCD(15, 5); */
/* 03. Same Numbers
function solve(input){

    let numbers = [] + input;
    numbers = numbers.split(``);
    let sum = 0;
    let isTrue = true;
    let firstNum = Number(numbers[0]);

    for(let i = 0; i < numbers.length; i++){

        let currentNum = Number(numbers[i]);

        sum += Number(numbers[i]);
        if(currentNum !== firstNum){
            isTrue = false;
        }else{
            firstNum = Number(numbers[i]);
        }
    }
    console.log(isTrue);
    console.log(sum);
}
solve(2222222);  */
/*04. Previous Day
function previousDay(year, month, day){

    let myDate = new Date(year, month - 1, day)
    myDate.setDate(myDate.getDate() -1);

    console.log(`${myDate.getFullYear()}-${myDate.getMonth() +1}-${myDate.getDate()}`);
}
prevDay(2016, 9, 30)  */

// First Operations
/* 01. Echo Function
function solve(input){
    let length = input.length;

    console.log(length);
    console.log(input);
} */
/*02. String Length
function stringLength(input1, input2, input3){
    let sum = input1.length + input2.length + input3.length;
    let averageSum = Math.floor(sum / 3);
    console.log(sum);
    console.log(averageSum);
} */
/* 03. Largest Number
function largestNum(num1, num2, num3){
    if(num1 > num2 && num1 > num3){
        console.log(`The largest number is ${num1}.`);
    }else if(num2 > num1 && num2 > num3){
        console.log(`The largest number is ${num2}.`);
    }else{
        console.log(`The largest number is ${num3}.`);
    }
} */

/*05. Math Operations
function solve(num1, num2, operator){
    let sum = "";
    switch (operator) {
        case "+": sum = num1 + num2;
            break;
        case "-": sum = num1 - num2; 
            break;
        case "*": sum = num1 * num2;
            break;
        case "/": sum = num1 / num2;
            break;
        case "%": sum = num1 % num2;
            break;
        case "**": sum = num1 ** num2;
            break;
    }
    console.log(sum);
}
solve(5, 6, `**`) */

