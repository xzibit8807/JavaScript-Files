/*
function BigerNummber(input){
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    if (num1 > num2){
      console.log(num1);
    }else {
      console.log(num2);
    }
  }

  BigerNummber(["5","3"])  

 // alert("Congratulations!!! You have just won $1 000 000!");

/*
    let myMoney = prompt("How much money do you want to convert:");
    let leva = parseInt(myMoney);
    let euro = leva / 1.95583;
    console.log(euro);
*/

/*
function Test(input){
  let sum1 = Number(input[0]);
  let sum2 = Number(input[1]);
  let sum3 = Number(input[2]);

  let Number1 = sum1 / sum2*0.2;
  let Number2 = sum2 / sum3*0.11;
  let Number3 = sum3 -sum2*0.5;
  let Result = Number1 + Number2 - Number3 /2 ;
  console.log("The Result is: " + Result + " and afuter " + sum2);
} 

Test(["2010","2020","3030"])
*/

// Task 3 for Even ore Odd Numbers (Day 3)
/*
function oddOrEven(input){
  let num1 = Number(input[0]);

  if (num1 %2 ==0){
    console.log("even");
  }else {
    console.log("odd");
  }
}

oddOrEven(["2"])

*/

//Password Guess zadacha 04 Day 3
/*
function password(input){
  let pass1 = (input[0]);

  if (pass1 == "s3cr3t!P@ssw0rd"){
    console.log("Welcome");
  } else {
    console.log("Wrong password!");
  }
}

password(["s3cr3t!P@ssw0rd"])
*/

//   Task 5 - Number 100...200  
//•	под 100 отпечатайте: "Less than 100"
//	между 100 и 200 отпечатайте: "Between 100 and 200"
//	над 200 отпечатайте: "Greater than 200"
/*
function numDefine(input){
  let theNum = Number(input[0]);

  if (theNum < 100 ){
    console.log("Less than 100");
  } else if (theNum >= 100 & theNum <=200){
    console.log("Between 100 and 200");
  } else{ (theNum > 200)
    console.log("Greater than 200");
  }
}

numDefine(["200"])
*/

/* Task 6  Speed Info 


function speedInfo(input){
  let curentSpeed = Number(input[0]);

  if (curentSpeed <= 10){
    console.log("slow");
  } else if (curentSpeed > 10 & curentSpeed <= 50){
    console.log("average");
  } else if (curentSpeed > 50 & curentSpeed <= 150){
    console.log("fast");
  } else if (curentSpeed > 150 & curentSpeed <= 1000){
    console.log("ultra fast");
  } else { (curentSpeed > 1000)
  console.log("extremely fast");}
}

speedInfo(["3500"])
*/

/* Task 07. Area of Figures
Да се напише функция,  която получава като вида и размерите на геометрична фигура и пресмята лицето й. Фигурите са четири вида: квадрат (square), 
правоъгълник (rectangle), кръг (circle) и триъгълник (triangle). На първия ред на входа се чете вида на фигурата (текст със следните възможности: square, 
  rectangle, circle или triangle).

•	Ако фигурата е квадрат (square): на следващия ред се чете едно дробно число - дължина на страната му
•	Ако фигурата е правоъгълник (rectangle): на следващите два реда четат две дробни числа - дължините на страните му
•	Ако фигурата е кръг (circle): на следващия ред чете едно дробно число - радиусът на кръга
•	Ако фигурата е триъгълник (triangle): на следващите два реда четат две дробни числа - дължината на страната му и дължината на височината към нея
Резултатът да се закръгли до 3 цифри след десетичната запетая. 
*/
/*
function figures(input){
  let form = input[0];

  if (form === "square"){
    let side = Number(input[1]);
    let result = side * side;
    console.log(result.toFixed(3));
  } else if (form === "rectangle"){
    let side1 = Number(input[1]);
    let side2 = Number(input[2]);
    let result = side1 * side2
    console.log(result.toFixed(3));
  } else if (form === "circle"){
    let r = Number(input[1]);
    let result = Math.PI * Math.pow(r, 2) ;
    console.log(result.toFixed(3));
  } else {(form === "triangle") 
    let sideA = Number(input[1]);
    let h = Number(input[2]);
    let result = sideA * h / 2
    console.log(result.toFixed(3));
  }


}

figures(["triangle","4.5","20"])

//Задача 9 от ден 3 11.03
*//* 
function gaden (input){
  let pricePerM2 = 7.61;
  let ground =Number(input[0]);
  let price = pricePerM2 * ground;
  let discountM2 = 0.18;
  let totalDiscount = price * discountM2
  let total = price - totalDiscount

  console.log("The final price is: "+ total + " lv.")
  console.log("The discount is: " + totalDiscount + " lv.")
}
gaden (["550"])
*/
// 1 zadacha ot 12.03

/*
function sumSeconds(input){
  let time1 = Number(input[0]);
  let time2 = Number(input[1]);
  let time3 = Number(input[2]);

  let sumSec = time1 + time2 + time3

  let mins = Math.floor (sumSec / 60);
  let seconds = sumSec % 60;

  if (seconds <10){
    console.log(`${mins}:0${seconds}`);
  }else {
    console.log(`${mins}:${seconds}`);
  }
}

sumSeconds(["35","45","44"]);
*/
/*
function TimePlusMin (input){
  let hours = Number(input[0]);
  let mins = Number(input[1]);

  let minsFromHour = hours *60;
  let totalTime = minsFromHour + mins + 15;

  let totalHouers = Math.floor(totalTime /60);
  let totalMins = totalTime %60;

  if (totalHouers == 24){
    totalHouers = 0;
  } else if (totalHouers == 25){
    totalHouers = 1;
  } else if (totalHouers == 26){
    totalHouers = 2;
  } else if (totalHouers == 27){
    totalHouers = 3;
  } else if (totalHouers == 28){
    totalHouers = 4
  } else if (totalHouers == 30){
    totalHouers = 6
  }

  if (totalMins < 10){
    console.log(`${totalHouers}:0${totalMins}`);
  } else {
    console.log(`${totalHouers}:${totalMins}`)
  }

}

TimePlusMin (["29","59"]);
*/
/*
function bonusPoints (input){
  let startPoints = Number(input[0])
  let bonusPoints = 0;

  if (startPoints <= 100){
    bonusPoints = 5;
  } else if (startPoints <= 1000 & startPoints > 100 ){
    bonusPoints = 0.2 * startPoints;
  } else {
    bonusPoints = 0.1 * startPoints;
  }

  if (startPoints %2 === 0){
    bonusPoints = bonusPoints + 1
  } else if (startPoints %10 === 5){
    bonusPoints = bonusPoints + 2
  }

  console.log(bonusPoints);
  console.log(startPoints + bonusPoints);

}

bonusPoints(["2703"])
*/
/* Задача 04. Toy Shop от 12.03


function toyStore(input){
  let tripPrice = Number(input[0]);
  let countPuzzle = Number(input[1]);
  let countTalkingToys = Number(input[2]);
  let countTedyBers = Number(input[3]);
  let countMinions = Number(input[4]);
  let countTrucks = Number(input[5]);
  
  let puzzlePrice = 2.60;
  let talkingToyPrice = 3;
  let tedyBerPrice = 4.1;
  let minionsPrice = 8.2;
  let truckPrice = 2;

  let toysPrice = (puzzlePrice*countPuzzle)+(talkingToyPrice*countTalkingToys)+(tedyBerPrice*countTedyBers)+(minionsPrice*countMinions)+(truckPrice*countTrucks);
  let totalCount = countPuzzle + countTalkingToys + countTedyBers + countMinions + countTrucks

  if (totalCount >= 50){
    toysPrice = toysPrice - toysPrice * 0.25;
  }

  let priceAfterRent = toysPrice - toysPrice * 0.1;
  let priceAfterTrip = priceAfterRent - tripPrice;

  if (priceAfterTrip > 0) {
    console.log(`Yes! ${priceAfterTrip.toFixed(2)} lv left.`);
  } else {
    let neededMoney = tripPrice - priceAfterRent;
    console.log(`Not enough money! ${neededMoney.toFixed(2)} lv needed.`);
  }
}

toyStore(["320","8","2","5","5","1"])
*/
/*    Задача 4 Toy Shop v2 as they showed it on Video
function toyShop(input) {
  let vacationPrice = Number(input[0]);
  let puzzleCount = Number(input[1]);
  let dollsCount = Number(input[2]);
  let bearsCount = Number(input[3]);
  let minionsCount = Number(input[4]);
  let trucksCount = Number(input[5]);

  let moneyEarned = puzzleCount * 2.60 + dollsCount * 3 + bearsCount * 4.10 + minionsCount * 8.20 + trucksCount * 2
  let totalCount = puzzleCount + dollsCount + bearsCount + minionsCount + trucksCount

  if (totalCount >= 50){
    moneyEarned = 0.75 * moneyEarned
  }
  moneyEarned = 0.9 * moneyEarned;

  if (moneyEarned >= vacationPrice){
    let moneyLeft = moneyEarned - vacationPrice
    console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`);
  } else {
    let moneyNeed = vacationPrice - moneyEarned
    console.log(`Not enough money! ${moneyNeed.toFixed(2)} lv needed.`);
  }
}

toyShop (["40.8","20","25","30","50","10"])
*/

