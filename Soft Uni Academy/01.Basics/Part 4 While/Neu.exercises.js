/* MiltiPL Tabel
function multiplication(input){
    for (let x = 1; x <=10; x++){
        for(let y = 1; y <=10; y++){
            let z = x*y;
            console.log(`${x} * ${y} = ${z}`);
        }
    }
}

multiplication() */
/* Travel 
function travel(input){
    let index = 0;
    let command = input[index];
    index++;

    while (command !== `End`){
        let destination = command;
        let budget = Number (input[index]);
        index++
        let curentMoney = 0;
        while (curentMoney < budget){
            let money = Number(input[index]);
            index++;
            curentMoney += money;
        }
        console.log(`Going to ${destination}!`);
        command = input[index];
        index++
    }
}
travel (["Greece",
"1000",
"200",
"200",
"300",
"100",
"150",
"240",
"Spain",
"1200",
"300",
"500",
"193",
"423",
"End"]) */
/* Sum of two
function SumOfTwo(input) {
    let start = Number(input[0]);
    let end = Number(input[1]);
    let magicNum = Number(input[2]);
    let count = 0;
    let sum = 0;
    let one = 0;
    let two = 0;
    let isFount = false;

    for (let i = start; i <= end; i++) {
        for (let x = start; x <= end; x++) {
            sum = i + x
            count++;
            if (sum === magicNum) {
                one = i;
                two = x;
                isFount = true;
                break;
            }
        }
        if (isFount) {
            break;

        }


    }
    if (sum === magicNum) {
        console.log(`Combination N:${count} (${one} + ${two} = ${magicNum})`);
        return;
    } else if (sum !== magicNum) {
        console.log(`${count} combinations - neither equals ${magicNum}`);
    }
}


SumOfTwo(["1", "10", "5"]) */
/* 06. Building
function building(input){}

building(["6","4"])  */
/* 03 . eqSums
function eqSums(input) {
    let sumPr = 0;
    let sumNPr = 0;

    let index = 0;
    let command = input[index];
    index++;
    //  let isPr = true;

    while (command !== `stop`) {
        let curNum = Number(command);

        if (curNum < 0) {
            console.log(`Number is negative.`);
            command = input[index];
            index++
            continue;
        }

        let isPr = true;

        for (let divisor = 2; divisor < curNum; divisor++) {
            if (curNum % divisor == 0) {
                isPr = false;
                break;
            }

        }
        if (isPr === true) {
            sumPr += curNum;
        } else {
            sumNPr += curNum;
        }


        command = input[index];
        index++;
    }
    console.log(`Sum of all prime numbers is: ${sumPr}`);
    console.log(`Sum of all non prime numbers is: ${sumNPr}`);
}

eqSums(["3", "9", "0", "7", "19", "4", "stop"])  */

/* 02. Equal Sums Even Odd Position
function sumEvenOdd(input){
    let startNum = Number(input[0]);
    let endNum = Number(input[1]);
    let result = ``;

    for(let curNum = startNum; curNum <= endNum; curNum++){
        let evenNum = 0;
        let oddNum = 0;

        let curNumStr = String(curNum);

        for(let i=0; i < curNumStr.length; i++){
            let curDigit = Number(curNumStr[i]);

            if(i % 2 === 0){
                evenNum += curDigit;
            }else {
                oddNum += curDigit;
            }
        }
        if(evenNum === oddNum){
            result += curNumStr + ` `;
        }
    }
    console.log(result);
}

sumEvenOdd(["123456","124000"]) */
/* next 06. Cinema Tickets
function cinemaT(input) {
    let studentTickets = 0;
    let standardTickets = 0;
    let kidTIckets = 0;

    let index = 0;

    let command = input[index];
    index++;

    while (command !== `Finish`) {
        let movieName = command;

        let placecAvailable = Number(input[index]);
        index++

        let command1 = input[index];
        index++
        let placesTaken = 0;

        while (command1 !== `End`) {
            let ticketType = command1;
            placesTaken++;

            if (ticketType === `student`) {
                studentTickets++;
            } else if (ticketType === `standard`) {
                standardTickets++;
            } else if (ticketType === `kid`) {
                kidTIckets++;
            }

            if (placesTaken == placecAvailable) {
                break;
            }

            command1 = input[index];
            index++;    
        }
        let percentTaken = (placesTaken / placecAvailable) * 100;

        console.log(`${movieName} - ${percentTaken.toFixed(2)}% full.`);

        command = input[index];
        index++;
    }
    let totalTickets = studentTickets + standardTickets + kidTIckets
    console.log(`Total tickets: ${totalTickets}`);

    let standardTicketP = (standardTickets / totalTickets) * 100;
    let studentTicketPercent = (studentTickets / totalTickets) * 100;
    let kidTicketPercent = (kidTIckets / totalTickets) * 100;


    console.log(`${studentTicketPercent.toFixed(2)}% student tickets.`);

    console.log(`${standardTicketP.toFixed(2)}% standard tickets.`);

    console.log(`${kidTicketPercent.toFixed(2)}% kids tickets.`);
}

cinemaT([`Taxi`,"10","standard","kid","student","student","standard","standard","End","Scary Movie","6","student","student","student","student","student","student"
    ,"Finish"])   */
/* 01. Number Pyramid
function numPzramid(input) {
    let number = Number(input[0]);
    let current = 1;
    let isBigger = false;
    let printCurrentLine = ``;

    for (let i = 1; i <= number; i++) {
        for (let c = 1; c <= i; c++) {
            if (current > number) {
                isBigger = true;
                break;
            }
            printCurrentLine += current + ` `;
            current++;
        }
        console.log(printCurrentLine);
        printCurrentLine = ``;
        if (isBigger) {
            break;
        }
    }
}

numPzramid(["7"]) */
/*   05. Special Numbers
function specialNum(input) {
    let num = Number(input[0]);
    let buffer = 0;
    let buff = ``;

    let magNum = 1111;

    while (magNum <= 9999) {
        let digits = magNum.toString().split('');
        buffer = ``;


        for (i = 0; i < digits.length; i++) {

            let index = Number(digits[i]);
            let curDigit = Number(index);

            if (num % curDigit === 0) {
                buffer += curDigit;

            }

        }
        buffer = Number(buffer);
        if (buffer >= 1110 && buffer <= 9999) {

            buff += `${magNum} `;
        }
        magNum++;
    }

    console.log(buff);
}
specialNum([`16`])   */
/*  Train The Trainer
function trainTheTrainer(input) {
    let index = 0;
    let command = Number(input[index]);
    index++;
    let name = ``;
    let sum = 0;
    let countOfPoints = ``;
    let hasEnded = false;
    let finalScore = 0;
    let counter = 0;

    while (name !== `Finish`) {
        name = input[index];
        index++
        counter++;
        if (command == `Finish`) {
            hasEnded = true;
            break;
        } else {
            sum = 0;

            for (i = 0; i < command; i++) {
                countOfPoints = Number(input[index]);
                index++;
                sum += countOfPoints;


            }
            if (command == `Finish`) {
                hasEnded = true;
            } else {
                let total = sum / command;
                console.log(`${name} - ${total.toFixed(2)}.`);
                name = input[index];
                finalScore += total;
                hasEnded = false;
            }
        }
    }
    if (!hasEnded) {
        let end = finalScore / counter;
        console.log(`Student's final assessment is ${end.toFixed(2)}.`);
    }
}

// trainTheTrainer(["3", "Arrays", "4.53", "5.23", "5.00", "Lists", "5.83", "6.00", "5.42", "Finish"])
trainTheTrainer (["2","Objects and Classes","5.77","4.23","Dictionaries","4.62","5.02","RegEx","2.88","3.42","Finish"]) */
/* 03. Combinations
function combies(input){
   let number = Number(input[0])
   let counter = 0;

   for(i = 0; i <= number; i ++){
       for(x1 = 0; x1 <= number; x1++){
           for(x2 = 0; x2 <= number; x2++){
               let result = i + x1 + x2;
               if(result === number){
                   counter++;
               }
           }
       }
   }
   console.log(counter);
}

combies(["25"])    */
/*   05  Traveling
function travel(input) {
    let index = 0;
    let destination = ``;
    let neededSum = 0;


    while (destination !== `End`) {
        let counter = 0;
        let hisMoney = 0;
        destination = input[index];
        index++;
        neededSum = Number(input[index]);
        index++;
        while (counter < neededSum) {
            hisMoney = Number(input[index]);
            index++;
            counter += hisMoney;
        }
        if (destination !== `End`) {
            console.log(`Going to ${destination}!`);
        } else {
            break;
        }
    }
}

travel(["Greece", "1000", "200", "200", "300", "100", "150", "240", "Spain", "1200", "300", "500", "193", "423", "End"]) */

/*06. Building
function building(input) {
    let floors = Number(input[0]);
    let rooms = Number(input[1]);
    let counterO = ``;
    let counterA = ``;
    let counterUp = ``;
    for (i = floors; i >= 1; i--) {
        let buffer = ``;
        if (i == floors) {
            for (A = 0; A < rooms; A++) {
                counterUp = `L${i}${A} `;
                buffer += counterUp;
            }
        } else if (i % 2 !== 0) {
            for (o = 0; o < rooms; o++) {
                counterO = `A${i}${o} `;
                buffer += counterO;

            }
        } else if (i % 2 == 0) {
            for (a = 0; a < rooms; a++) {
                counterA = `O${i}${a} `;
                buffer += counterA;
            }

        }
        console.log(buffer);
    }
}
building(["6", "4"]) */

/* 03 Santa Claus 
function santaClaus(input){
    let daysAway = Number(input[0]);
    let food = Number(input[1]);
    let eatenFoodOne = Number(input[2]);
    let eatenFoodTwo = Number(input[3]);
    let eatenFoodThree = Number(input[4]);
    let totalEatenFood = 0;

    for(let i = 0; i < daysAway; i++){
        totalEatenFood += eatenFoodOne + eatenFoodTwo + eatenFoodThree;
    }
    if(totalEatenFood <= food){
        console.log(`${food - totalEatenFood} kilos of food left.`);
    }else {
        console.log(`${totalEatenFood - food} more kilos of food are needed.`);
    }
}

santaClaus([`2`,`10`,`1`,`1`,`2`]) */
