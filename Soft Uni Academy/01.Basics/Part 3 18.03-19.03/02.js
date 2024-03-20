/* 01.
function task(input){
    let n = Number(input[0]);

    for(let i = n; i >= 1; i = i--){
        console.log(i);
    }
}
task(["10"]) */
/*  03. Numbers 1...N with Step 3
function one2n(input){
    let n = Number(input[0]);
    for (let i = 1; i <= n; i +=3){
        console.log(i);
    }
}

one2n(["15"]) */
/* 04. Even Powers of 2
function evenPowersOf2(input){
    let n = Number(input[0]);
    for (let i = 0; i <=n; i+=2){    
        console.log(Math.pow(2,i));
    }
}

evenPowersOf2	(["10"])  */

/* 05. Character characterSequence
function characterSequence(input){
    let name = input[0];

    for(let i = 0; i < name.length; i ++){
        console.log(name[i]);
    }
}

characterSequence(["jade ch"]) */

/* 06. Vowels Sum
function vowS(input) {
    let name = input[0];
    let sum = 0;

    for (let i = 0; i < name.length; i++) {
        let ch = name[i];
        switch (ch) {
            case "a": sum += 1; break;
            case "e": sum += 2; break;
            case "i": sum += 3; break;
            case "o": sum += 4; break;
            case "u": sum += 5; break;
        }
        
    }
    console.log(sum)
}
vowS(["Hello"]) */
// 07. 
function sum(input) {
    let num = input[0];
    let sum = 0;

    for (let i = 0; i < num.length; i++) {
        let ctNum = Number(num[i]);
        sum += ctNum;

    }

    console.log(`The sum of the digits is:${sum}`);
}

sum(["55"])  

/*  08. Numbers, Divisible by 9 

function numbersBy9(input){
    let start = Number(input[0]);
    let end = Number(input[1]);
    let sum = 0;
    let nTp = "";

    for (let i = start; i <= end; i++){
        if (i % 9 === 0){
            sum += i;
            nTp += i + " \n";
        }
    }
    console.log(`The sum: ${sum}`);
    console.log(nTp);
}

numbersBy9(["100","200"]) */

/* 02
function num2N(input){
    let n = Number(input[0]);

    for (let i = n; i >= 1; i--){
        console.log(i);
    }
}

num2N(["10"]) */

/* 01. Numbers Ending in 7
function number7(){

    for(i = 7; i <= 997; i+=10)
    if (i% 10 == 7){
        console.log(i);
    }
}
number7([]) */
/* 02. Multiplication Table
function multyP(input){
    let num = Number(input[0]);
    for (let multiplier = 1; multiplier <=10; multiplier++){
        console.log(`${multiplier} * ${num} = ${multiplier * num}`);
    }
}
multyP(["5"]) */
/*  03.histogram
function histogram(input){
    let n = Number(input[0]);

    let range1Count = 0;
    let range2Count = 0;
    let range3Count = 0;
    let range4Count = 0;
    let range5Count = 0;


    for(let i = 1; i <= n; i++){
        let theNum = Number(input[i])

    if (theNum < 200){
        range1Count++;
    }else if (theNum <= 399){
        range2Count++;
    }else if(theNum <= 599){
        range3Count++;
    }else if (theNum <= 799){
        range4Count++;
    }else {
        range5Count++;
    }

    }
    let p1 = (range1Count /n *100);
    let p2 = (range2Count /n *100);
    let p3 = (range3Count /n *100);
    let p4 = (range4Count /n *100);
    let p5 = (range5Count /n *100);

    console.log(`${p1.toFixed(2)}%`);
    console.log(`${p2.toFixed(2)}%`);
    console.log(`${p3.toFixed(2)}%`);
    console.log(`${p4.toFixed(2)}%`);
    console.log(`${p5.toFixed(2)}%`);
}

histogram (["7", "800", "801", "250", "199", "399", "599", "799"])
*/

/*  05. Salary
function salary(input){
    let tabsCount = Number(input[0]);
    let salary = Number(input[1]);
    
    for (let i = 2; i <= tabsCount + 2; i++){
        let curTab = input[i];

        if (curTab === `Facebook`){
            salary -= 150;
        }else if (curTab === `Instagram`){
            salary -= 100;
        }else if (curTab === `Reddit`){
            salary -= 50;
        }

        if (salary <= 0){
            console.log(`You have lost your salary.`);
            return;
        }
    }
    console.log(salary);
}

salary(["10","750","Facebook","Dev.bg","Instagram","Facebook","Reddit","Facebook","Facebook"])
*/
/* 04. Clever Lily
function lily(input){
    let age = Number(input[0]);
    let washMashine = Number(input[1]);
    let pricePerToy = Number(input[2]);

    let bdMoney = 10;
    let herMoney = 0;

    for (let bd = 1; bd <= age; bd++)
    if ( bd % 2 === 0){
         herMoney += (bdMoney - 1);
         bdMoney +=10;
    }else {
        herMoney += pricePerToy;
    }
    if (herMoney >= washMashine){
        let sumLeft = herMoney - washMashine;
        console.log(`Yes! ${sumLeft.toFixed(2)}`);
    }else {
        neededMoney = washMashine - herMoney;
        console.log(`No! ${neededMoney.toFixed(2)}`);
    }
}

lily(["10","170.00","6"]) */


// 08. Tennis Ranklist
function tenisRL(input){
    turnamentsCount = Number(input[0]);
    startPoints = Number(input[1]);

    let pointsWon = 0;
    let tournamentWon = 0

    for (let i =2; i < input.length; i++){
        let tournamentR = input[i];

        if (tournamentR === "W"){
            pointsWon += 2000;
            tournamentWon++;
        }else if (tournamentR === `F`){
            pointsWon += 1200;
        }else if (tournamentR === `SF`){
            pointsWon += 720;
        }
    }
   
    console.log(`Final points: ${startPoints + pointsWon}`);

    let avgPoints = Math.floor(pointsWon / turnamentsCount);
    console.log(`Average points: ${avgPoints}`);

    let tWp = (tournamentWon / turnamentsCount) * 100;
    console.log(`${tWp.toFixed(2)}%`);
}

tenisRL(["5","1400","F","SF","W","W","SF"])