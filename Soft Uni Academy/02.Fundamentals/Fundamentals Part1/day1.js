/* 04 Foreing Language
function solve(country){
    if (country == `USA` || country == `England`){
        console.log(`English`);
    }else if(country == `Spain` || country == `Argentina` || country == `Mexico`){
        console.log(`Spanish`);
    }else {
        console.log(`unknown`);
    }
}
solve(`USA`) */
/* 05. Month Printer
function monthPrint(month){
    switch (month) {
        case 1: console.log(`January`);break;
        case 2:console.log(`February`);break;
        case 3:console.log(`March`);break;
        case 4:console.log(`April`);break;
        case 5:console.log(`May`);break;
        case 6:console.log(`June`);break;
        case 7:console.log(`July`);break;
        case 8:console.log(`August`);break;
        case 9:console.log(`September`);break;
        case 10:console.log(`October`);break;
        case 11:console.log(`November`);break;
        case 12:console.log(`December`);break;
    } 
    if(month >= 13){
        console.log(`Error!`);
    }
}
monthPrint(2) */
/*06. Theatre Promotions
function theatre(day,age){
    let price = 0;
    if (age >= 0 && age <=18){
        switch (day) {
            case `Weekday`:price = 12;break;
            case`Weekend`: price = 15;break;
            case`Holiday`:price = 5;break;
        }
    }else if(age > 18 && age <= 64){
        switch (day) {
            case `Weekday`:price = 18;break;
            case`Weekend`: price = 20;break;
            case`Holiday`:price = 12;break;
        } 
    }else if(age > 64 && age <= 122){
        switch (day) {
            case `Weekday`:price = 12;break;
            case`Weekend`: price = 15;break;
            case`Holiday`:price = 10;break;
        } 
    }
    if(price <= 0 ){
        console.log(`Error!`);
    }else{
        console.log(price + "$");
    }
}
theatre(`Holiday`,-12) */
/*07. Numbers from 1 to 5
function number(num){
    for (let i = 1; i<=5; i++){
        console.log(i);
    }
}
number() */
/* N to M
function solve(m,n){
    for(let i = m; i>= n; i--){
      console.log(i);
    }
  }
  solve(6,2) */
/*11. Sum of Odd Numbers
function solve(num){
    let counter = 1;
    let sum = 0;
    let i = 1;
    while (counter <= num){
        if(i % 2 != 0){
            console.log(i);
            sum += i;
            counter++;
        }
        i++;
    }
    console.log(`Sum: ${sum}`);
} */
/* 01. Ages
function solve(input){
    let age = Number(input);
    let result = ``;
    if(age <0 ){
        result = `out of bounds`;
    }else if(age>=0 && age <= 2){
        result = `baby`;
    }else if(age <= 13){
        result = `child`;
    }else if(age <= 19){
        result = `teenager`
    }else if( age <= 65){
        result = `adult`;
    }else if (age > 65){
        result = `elder`;
    }
    console.log(result);
}

solve(`20`) */
/* 02. Rounding
function solve(input,pres){
    if (pres > 15){
        pres = 15;
    }
    let result = parseFloat(input.toFixed(pres)); 

    console.log(result);
}
solve(3.1415926,4); */
/*03. Division
function dev(number){
    let result = ``;
    if(number % 10 === 0){
        console.log(`The number is divisible by 10`);
    }else if(number % 7 === 0){
        console.log(`The number is divisible by 7`);
    }else if(number % 6 === 0){
        console.log(`The number is divisible by 6`);
    }else if(number % 3 === 0){
        console.log(`The number is divisible by 3`);
    }else if(number % 2 === 0){
        console.log(`The number is divisible by 2`);
    }else {
        console.log(`Not divisible`);
    }
}
dev(30);*/
/* 04. Vacation 
function vac(count,type,day) {
    let totalSum = 0;
    switch (type) {
        case `Students`:
            if (day === `Friday`) {
                totalSum = count * 8.45;
            } else if (day === `Saturday`) {
                totalSum = count * 9.80;
            } else if (day === `Sunday`) {
                totalSum = count * 10.46;
            }
            if (count >= 30) {
                totalSum = totalSum * 0.85;
            }
            break;
        case `Business`:
            if (count >= 100) {
                count = count - 10;
            }
            if (day === `Friday`) {
                totalSum = count * 10.90;
            } else if (day === `Saturday`) {
                totalSum = count * 15.60;
            } else if (day === `Sunday`) {
                totalSum = count * 16;
            }
            break;
        case `Regular`:
            if (day === `Friday`) {
                totalSum = count * 15;
            } else if (day === `Saturday`) {
                totalSum = count * 20;
            } else if (day === `Sunday`) {
                totalSum = count * 22.50;
            }
            if (count >= 10 && count <= 20) {
                totalSum = totalSum * 0.95;
            }
            break;
    }
    console.log(`Total price: ${totalSum.toFixed(2)}`);
}
vac(30, `Students`, `Sunday`)    */
/* 05 Leap Year
function leapYear(input){
    let isLeap = input % 4 === 0 && input % 100 !== 0 || input % 400 === 0;
    if (isLeap){
        console.log(`yes`);
    } else{
        console.log(`no`);
    }
}
leapYear(1984);  */
/* 06. Print And Sum
function printSum(n,m){
    let sum = 0;
    let numersRow = ``;
    for (let i = n; i <= m; i++){
        sum += i;
        numersRow += `${i} `
    }
    console.log(numersRow);
    console.log(`Sum: ${sum}`);
}  */
/* 07. Triangle Of Numbers
function math(num){
    for(let times = 1; times <= 10; times++){
        let prod = num * times;
        console.log(`${num} X ${times} = ${prod}`);
    }
}
 math(5) */
/* Piramide
function piramide(num){
   let result = ``;
   for(let rows = 1; rows <= num; rows++){
       for(let cols = 1; cols <= rows; cols++){
           result += `${rows} `;
       }
       console.log(result);
       result = ``;
   }
}
piramide(5) */
/* 09 Login
function login(input) {
    let index = 0;
    let username = input[index];
    index++;
    let passwordAttempts = 0;
    let password = username.split('').reverse().join('');
    let passwordTry = input[index];
    index++;

    for (let i = 1; i < input.length; i++) {

        if (password === passwordTry) {
            console.log(`User ${username} logged in.`);
            break;
        } else {
            passwordAttempts++;
            if (passwordAttempts === 4) {
                console.log(`User ${username} blocked!`);
                break;
            }
            console.log('Incorrect password. Try again.');
        }
        passwordTry = input[index];
        index++;
    }
}

login(['Acer', 'login', 'go', 'let me in', 'recA']); */
/* 10. The Pyramid Of King Djoser  - 80/100 to fix
function pyramidOfKing(sizeA, increment) {

    let sizeB = sizeA - 2;
    let buffer = 0;
    let counter = 0;
    let stones = 0;
    let marble = 0;
    let lapis = 0;
    let gold = 0;
    while (sizeA > 0) {
        counter++;
        if (counter % 5 === 0) {
            buffer = sizeA - 2;
            stones += (buffer * buffer) * increment;
            buffer = ((buffer * 2) + (sizeA * 2))* increment;
            lapis += buffer;
        } else if (sizeA === 1 || sizeA === 2) {
            gold += (sizeA * sizeA) * increment;
        } else {
            buffer = sizeB * sizeB;
            stones += buffer * increment;
            buffer = (sizeB * 2) + (sizeA * 2);
            marble += buffer * increment;
        }
        sizeB = sizeB - 2;
        sizeA = sizeA - 2;
    }
    counter = Math.floor(counter * increment);
    stones = Math.ceil(stones);
    marble = Math.ceil(marble);
    lapis = Math.ceil(lapis);
    gold = Math.ceil(gold);

    console.log(`Stone required: ${stones}`);
    console.log(`Marble required: ${marble}`);
    console.log(`Lapis Lazuli required: ${lapis}`);
    console.log(`Gold required: ${gold}`);
    console.log(`Final pyramid height: ${counter}`);
}
pyramidOfKing(23, 0.5);   */
// 11. Bitcoin "Mining"
function mining(input) {
    let bitcoinPrice = 11949.16;
    let index = 0;
    let dailyIncome = Number(input[index]);
    index++;
    let income = 0;
    let bitcoins = 0;
    let dayCount = 0;
    let dayOfFist = 0;

    while (dailyIncome != undefined) {
        dayCount++;
        if (dayCount % 3 === 0) {
            dailyIncome *= 0.7;
        }
        income += Number(dailyIncome * 67.51);
        income = Number(income.toFixed(2));

        if (income >= bitcoinPrice) {
            while (income >= bitcoinPrice) {
                income -= bitcoinPrice;
                income = Number(income.toFixed(2));
                bitcoins++;
                if (bitcoins === 1) {
                    dayOfFist += dayCount;
                }
            }
        }
        dailyIncome = input[index];
        index++;
    }
    console.log(`Bought bitcoins: ${bitcoins}`);
    if (bitcoins >= 1) {
        console.log(`Day of the first purchased bitcoin: ${dayOfFist}`);
    }
    console.log(`Left money: ${income.toFixed(2)} lv.`);
}
mining([3124.15, 504.212, 2511.124]);