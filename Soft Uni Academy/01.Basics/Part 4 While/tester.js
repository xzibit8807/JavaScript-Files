/*function oscars(input) {
    let actorName = input[0];
    let academyPoints = Number(input[1]);
    let numberOfRaters = Number(input[2]);


    let totalPoint = 0;
    for (let i = 3; i < input.length; i += 2) {
        let nameOfRate = input[i];
        let length = nameOfRate.length;
        let pointOfRater = Number(input[i + 1]);

        let totalPointOfRater = length * pointOfRater / 2;
        totalPoint += totalPointOfRater;

    }
    totalPoint += academyPoints;
    if (totalPoint >= 1250.5) {
        console.log(`Congratulations, ${actorName} got a nominee for leading role with ${totalPoint.toFixed(1)}!`)
    } else {
        let neededPoints = 1250.5 - totalPoint;
        console.log(`Sorry, ${actorName} you need ${neededPoints.toFixed(1)} more!`)
    }

}
oscars(["Sandra Bullock", "340", "5", "Robert De Niro", "50", "Julia Roberts", "40.5", "Daniel Day-Lewis", "39.4", "Nicolas Cage", "29.9", "Stoyanka Mutafova", "33"])
*/
/*02. Password
function pass(input) {
    let index = 0;
    let user = input[index];
    index++;
    let password = input[index];
    index++;

    let inbountpass = input[index];
    index++;

    while (inbountpass !== password) {
        inbountpass = input[index];
        index++
    }
    console.log(`Welcome ${user}!`);
}
pass(["Nakov", "1234", "Pass", "1324", "1234"])
*/
/* 03. Sum Numbers
function sumN(input){
    let index = 0;

    let num = Number(input[index]);
    index++;
    let sum = 0;

    while (sum < num){
        let currentNumber = Number(input[index]);
        index++;
        sum += currentNumber
    }
    console.log(sum);
}

sumN(["100", "10", "20", "30", "40"]) */
/* next tas 04
function book(input) {
    let index = 0

    let serchBook = input[index];
    index++;
  

    let booknegativCouner = 0;

    let command = input[index];
    index++;
    let isFound = false;

    while (command !== "No More Books") {
        let currentBook = command;
        if (serchBook === currentBook) {
            isFound = true;
            break;
        }

        booknegativCouner++;
        command = input[index];
        index++
    }
    if (!isFound) {
        console.log(`The book you search is not here!`);
        console.log(`You checked ${booknegativCouner} books.`);
    } else {

        console.log(`You checked ${booknegativCouner} books and found it.`);
    }
}
book(["The Spot",

"Hunger Games",

"Harry Potter",

"Torronto",

"Spotify",

"No More Books"])  */
/*05. AcnegativCoun Balance
function banckAcc(input){
    let index = 0;
    let acc = 0;

    let command = input[index];
    index++

    while (command !==`NoMoreMoney`){
        let money = Number(command);

        if (money < 0){
            console.log(`Invalid operation!`);
            break;
        }
        acc+= money;
        console.log(`Increase: ${money.toFixed(2)}`);
        command = input[index];
        index++
    }
    console.log(`Total: ${acc.toFixed(2)}`);
}

banckAcc(["5.51","69.42","100","NoMoreMoney"])  */
/* 06. Max Number & 07
function maxN(input){
    let index = 0;
    let command = input[index];
    index++
    let maxNum = Number.MAX_SAFE_INTEGER;

    while(command !== `Stop`){
        let crnN = Number(command);

        if(crnN < maxNum){
            maxNum = crnN;
        }

        command = input[index];
        index++;
    }
    console.log(maxNum);
}

maxN(["100","99","80","70","Stop"])  */
/* 08. Graduation
function gradesOfStudent(input) {
    let index = 0;
    let name = input[index];
    index++;
    let avgGrade = 0;
    let negativCounBadGrades = 0;
    let dismist = false;

    let i = 1;

    while (i <= 12) {
        let grade = Number(input[index]);
        index++
        if (grade < 4.00) {
            negativCounBadGrades++;
            if (negativCounBadGrades > 1) {
                dismist = true;
                console.log(`${name} has been excluded at ${i} grade`);
                break;
            }
            continue;
        }
        avgGrade += grade;
        i++;

    }
    if (!dismist) {
        console.log(`${name} graduated. Average grade: ${(avgGrade / 12).toFixed(2)}`);
    }

}

gradesOfStudent(["Gosho", "5", "5.5", "6", "5.43", "5.5", "6", "5.55", "5", "6", "6", "5.43", "5"])  */
/* 02. Marin Exams
function examPreparation(input) {
    let index = 0;
    let negativeGradeCounter = input[index];
    index++;

    let negativCoun = 0;
    let countSubmitted = 0;
    let sumGrades = 0;
    let needBreak = false;
    let taskName = ``;


    let command = input[index];
    index++;

    while (command !== `Enough`) {
        taskName = command;
        let grade = Number(input[index]);
        index++;


        if (grade <= 4) {
            negativCoun++;
            if (negativeGradeCounter <= negativCoun) {
                needBreak = true;
                break;
            }

        }

        countSubmitted++;
        sumGrades += grade;
        command = input[index];
        index++;


    }
    if (needBreak) {
        console.log(`You need a break, ${negativeGradeCounter} poor grades.`);
    } else {
        let avgSum = sumGrades / countSubmitted;
        console.log(`Average score: ${avgSum.toFixed(2)}`);
        console.log(`Number of problems: ${countSubmitted}`);
        console.log(`Last problem: ${taskName}`);
    }

}

examPreparation(["3", "Money", "6", "Story", "4", "Spring Time", "5", "Bus", "6", "Enough"])  */
/*05. Coins 
function coins(input){
    let moneyInLv = Number(input[0]);
    let money = Math.floor(moneyInLv *100)
    let count = 0;

    while (money > 0){
        if (money >= 200){
            money -= 200;
        }else if (money >= 100){
            money -=100;
        }else if (money >= 50){
            money -= 50;
        }else if(money >= 20){
            money -= 20;
        }else if (money >= 10){
            money -= .10;
        }else if (money >= 5){
            money -= 5;
        }else if (money >= 2){
            money -= 2;
        }else if (money >= 1){
            money -= 1;
        }
        count++;
    }
    console.log(count);
}

coins(["1.23"])  */
/*   second (my) way
function coins(input){
    let money = Number(input[0]);
    let count = 0;

    while (money > 0){
        if (money >= 2){
            money -= 2;
        }else if (money >= 1){
            money -=1;
        }else if (money >= 0.50){
            money -= 0.50;
        }else if(money >= 0.20){
            money -= 0.20;
        }else if (money >= 0.10){
            money -= 0.10;
        }else if (money >= 0.05){
            money -= 0.05;
        }else if (money >= 0.02){
            money -= 0.02;
        }else if (money >= 0.01){
            money -= 0.01;
        }else {
            money =0;
        }
        count++;
    }
    console.log(count);
}
coins(["2"]) */
/* 07. Moving
function moving(input){
    let index = 0;
    let w = Number(input[index]);
    index++;
    let l = Number(input[index]);
    index++;
    let h = Number(input[index]);
    index ++;

    let comand = input[index];
    index++;

    let freeSpace = l * w * h;

    while (comand !== `Done`){
        let box = Number(comand);

        freeSpace -= box;

        if (freeSpace < 0){
            break;
        }
        comand = input[index];
        index++;
    }
    if (freeSpace >= 0){
        console.log(`${freeSpace} Cubic meters left.`);
    } else {
        console.log(`No more free space! You need ${Math.abs(freeSpace)} Cubic meters more.`);
    }
}

moving(["10","10","2","20", "20", "20", "20", "122"]) */
/* 06. Cake
function backAcake(input){
    let index = 0;
    let l = Number(input[index]);
    index++;
    let w = Number(input[index]);
    index++;
    let totalPieces = l*w;

    let command = input[index];
    index++;
    let cakeFinisched = false;

    while (command !== `STOP`){
        totalPieces-= command;
        if( totalPieces <= 0){
            cakeFinisched = true;
            break;
        }
        command = input[index];
        index++;
    }
    if(cakeFinisched == false){
        console.log(`${totalPieces} pieces are left.`);
    }else {
        console.log(`No more cake left! You need ${Math.abs(totalPieces)} pieces more.`);
    }
}

backAcake(["10" ,"2", "2" ,"4" ,"6" ,"STOP"])  */
/*04. Walking
function walking(input) {
    let index = 0;
    let target = 10000;
    let steps = input[0];
    index++
    let totalSteps = 0;

    for (i = 1 ; i <= input.length ; i++){
        if (steps === `Going home`){
            steps = input[index];
            index++;
            steps = Number(steps);
            target -= steps;
            totalSteps += steps;
            break;
        }
        steps = Number(steps);
        target -= steps;
        totalSteps += steps;
        steps = input[index];
        index++;
    }
    if (totalSteps >= 10000){
        console.log(`Goal reached! Good job!`);
        console.log(`${Math.abs(target)} steps over the goal!`);
    } else {
        console.log(`${target} more steps to reach goal.`);
    }
}

walking(["1500" ,"3000" ,"250" ,"1548" ,"2000" ,"Going home" , "2000"]) */
/* Time Clock 
function clock(input){
    for (let h = 0; h<= 23; h++){
        for (let m =0; m<= 59; m++){
            console.log(`${h}:${m}`);
        }
    }
}
*/

/* 05. Special Numbers
function specialNum(input) {
    let num = Number(input[0]);
    let buffer = ``;

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
            console.log(buffer + ` `);
        }
        magNum++;
    }
}
specialNum([`16`])   */
/* Easter Eggs
function easterEggs(input){
    let index = 0;
    let count = Number(input[index]);
    index++;
    let currentColor = ``;
    let red = 0;
    let orange = 0;
    let blue = 0;
    let green = 0;
    let maxColor = 0;
    let color = ``;

    for(i = 0; i <= count; i++){
        currentColor = input[index];
        index++
        if(currentColor == `red`){
            red++;
        }else if(currentColor == `orange`){
            orange++;
        }else if(currentColor == `blue`){
            blue++;
        }else if(currentColor == `green`){
            green++
        }
    }
    console.log(`Red eggs: ${red}`);
    console.log(`Orange eggs: ${orange}`);
    console.log(`Blue eggs: ${blue}`);
    console.log(`Green eggs: ${green}`);
    if(red > orange && red > blue && red > green){
        maxColor = red;
        color = `red`;
    }else if(orange > red && orange > blue && orange > green){
        maxColor = orange;
        color = `orange`;
    }else if(blue > red && blue > orange && blue > green){
        maxColor = blue;
        color = `blue`;
    }else if(green > red && green > blue && green > orange){
        maxColor = green;
        color = `green`;
    }
    console.log(`Max eggs: ${maxColor} -> ${color}`);
}

easterEggs(["7",
"orange",
"blue",
"green",
"green",
"blue",
"red",
"green"])  */

/*06. Easter Competition
function competition(input) {
    let index = 0;
    let maxCount = Number(input[index]);
    let current = ``;
    index++;
    let name = ``;
    let nameMaxPoints = ``;
    let points = 0;
    let total = 0;

    for (i = 0; i < maxCount; i++) {
        name = input[index];
        current = input[index]
        index++;
        points = 0;

        while (current !== `Stop` || current !== `undefined`) {

            current = input[index];
            if (current === `Stop`) {
                index++;
                break;
            } else {
                points += Number(input[index]);
                index++;
            }
        }
        console.log(`${name} has ${points} points.`);
        if (points > total) {
            nameMaxPoints = name;
            console.log(`${nameMaxPoints} is the new number 1!`);
            total = points;
        } else {
            continue;
        }

    }
    console.log(`${nameMaxPoints} won competition with ${total} points!`);
}

competition(["2",
"Chef Angelov",
"9",
"9",
"9",
"Stop",
"Chef Rowe",
"10",
"10",
"10",
"10",
"Stop"])  */
/* 01. Birthday Party
function Birthday(input){
    let rent = Number(input[0]);
    let cake = rent * 0.2;
    let drinks = cake - (cake * 0.45)
    let animator = rent / 3;

    let total = rent + cake + drinks + animator;

    console.log(total);
}

Birthday([`2250`])  */
/*Pets Food  
function petsFood(input) {
    let index = 0;
    let totalDays = Number(input[index]);
    index++;
    let biscuits = 0;
    let eatenFood = 0;
    let foodTotal = Number(input[index]);
    index++
    let food = 0;
    let dailyDogFood = 0;
    let dailyCatFood = 0;
    let countDog = 0;
    let countCat = 0;

    for (i = 0; i < totalDays; i++) {
        if (eatenFood < foodTotal) {
            let daily = 0
            food = Number(input[index]);
            index++
            dailyDogFood += food;
            countDog = food;
            food = Number(input[index]);
            index++;
            dailyCatFood += food;
            countCat = food;
            eatenFood += countCat + countDog;
            daily = countCat + countDog;
            if (i == 2) {
                biscuits = daily * 0.1;
            }
        } else {
            break;
        }

    }
    let total = (eatenFood / foodTotal) * 100;
    let eatenByDog = (dailyDogFood / eatenFood) * 100;
    let eatenByCat = (dailyCatFood / eatenFood) * 100;

    console.log(`Total eaten biscuits: ${Math.round(biscuits)}gr.`);
    console.log(`${total.toFixed(2)}% of the food has been eaten.`);
    console.log(`${eatenByDog.toFixed(2)}% eaten from the dog.`);
    console.log(`${eatenByCat.toFixed(2)}% eaten from the cat.`);

}

petsFood(["3",
    "500",
    "100",
    "30",
    "110",
    "25",
    "120",
    "35"])  */

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
    pyramidOfKing(23, 0.5);