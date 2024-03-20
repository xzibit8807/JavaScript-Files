/*
function amazingNumber(num) {
    let numAsTex = num.toString();
    let sum = 0;

    for (let i = 0; numAsTex.length; i++) {
        sum += Number(numAsTex[i])
    }
    let sumAsString = sum.toString();
    let isAmazing = `False`;
    for(let i = 0; i < )
    if (sumAsString[i] === 9) {
        isAmazing = `True`;
        break;

    }
    console.log(sum);
}

amazingNumber(1233) */
/* 01
function echoType(data) {
    console.log(typeof (data));
    if (typeof (data) === "number" || typeof (data) === "string") {
        console.log(data);
    } else {
        console.log(`Parameter is not suitable for printing`);
    }
}
echoType(`Hello, JavaScript!`) */
/* 03 Integer and Float
function integerAndFloat(a,b,c){
    let sum = a + b + c;
    let isInteger = sum % 1 === 0;

    if(isInteger){
        console.log(`${sum} - Integer`);
    }else {
        console.log(`${sum} - Float`);
    }
}

integerAndFloat(9,100,1.1); */
/* Right Place
function rightPlace(a, b, c) {
    let newStr = a.replace("_", b)
    if (newStr === c) {
        console.log(`Matched`);
    } else {
        console.log(`Not Matched`);
    }
}
rightPlace(`Str_ng`, `I`, `Strong`); */
/*01. Sum Digits 
function sumDigits(num){
    let numAsString = num.toString();
    let sum = 0;
    for(let i = 0; i < numAsString.length; i++ ){
        let currentDigit = Number(numAsString[i]);
        sum += currentDigit;
    }
    console.log(sum);
}
sumDigits(245678); */
/*03.Converter
function convert(meters){
    let km = Number(meters) / 1000;
    console.log(km.toFixed(2));
}
convert()*/
/* Pounds to Dolars
function moneyConvent(pounds){
    let dollars = Number(pounds) * 1.31;
    console.log(dollars.toFixed(3));
}
moneyConvent(80) */
/*06.Reversed Chars
function reversed(a , b , c){
    console.log(`${c} ${b} ${a}`);
}
reversed('A','B','C'); */
/*07. Lower or Upper
function lowerOrUpper(input){
    let caseResult = ``;
    if(input === input.toUpperCase()){
        caseResult = `upper-case`;
    }else{
        caseResult = `lower-case`;
    }
    console.log(caseResult);
}
lowerOrUpper('L'); */
/*08. Calculator
function calculator(num1, symbol, num2){
    switch (symbol) {
        case `+`: console.log((num1 + num2).toFixed(2));break;
        case `-`:console.log((num1 - num2).toFixed(2));break;
        case `/`:console.log((num1 / num2).toFixed(2));break;
        case `*`:console.log((num1 * num2).toFixed(2));
    }
}
calculator(5,'*',10); */
/* 9.*Gladiator Expenses
function gladiator(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let expenses = 0;
    for (let fights = 1; fights <= lostFights; fights++) {
        if (fights % 2 === 0) {
            expenses += helmetPrice;
        }
        if (fights % 3 === 0) {
            expenses += swordPrice;
        }
        if (fights % 6 === 0) {
            expenses += shieldPrice;
        }
        if (fights % 12 === 0) {
            expenses += armorPrice;
        }
    }
    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}
gladiator(7, 2, 3, 4, 5) */
// 10. Spice Must Flow
function mining(yield) {
    let days = 0;
    let consumePerDay = 26;
    let totalYield = 0;

    while (yield >= 100) {
        days++;
        totalYield += yield - consumePerDay;
        yield -= 10;
    }
    if (totalYield >= consumePerDay) {
        totalYield -= consumePerDay;
    }
    console.log(days);
    console.log(totalYield);
}

mining(111);