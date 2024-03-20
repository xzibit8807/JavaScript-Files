/* 09.
function fruitOreVegetable (input){
    let type = input[0]
switch (type) {
    case "banana":
    case "apple":
    case "kiwi":
    case "cherry":
    case "lemon":
    case "grapes": console.log("fruit");break;
    case "tomato":
    case "cucumber":
    case "pepper":
    case "carrot": console.log("vegetable");break;
    default: console.log("unknown");break;
}
}

fruitOreVegetable (["cucumber"])
*/

/*04. Personal Titles
function title (input){
    let age = Number(input[0]);
    let gender = (input[1]);

   if (age >= 16){
    if (gender === "m"){
        console.log("Mr.");
    } else {
        console.log("Ms.");
    }
   } else {
    if (gender === "m"){
        console.log("Master");
    }else {
        console.log("Miss");

   } 
   }

  
}
   title (["15", "m"])  */

/* 05. Small Shop
function shopM(input){
    let product = input[0];
    let town = input[1];
    let count = input[2];
    let money = 0;

    switch(town){
        case "Sofia":
            switch(product){
                case "coffee": money = count * 0.5; break;
                case "water": money = count * 0.8; break;
                case "beer": money = count * 1.2; break;
                case "sweets": money = count * 1.45; break;
                case "peanuts": money = count * 1.6; break;
            }
            break;
        case "Plovdiv":
            switch(product){
                case "coffee": money = count * 0.4; break;
                case "water": money = count * 0.7; break;
                case "beer": money = count * 1.15; break;
                case "sweets": money = count * 1.30; break;
                case "peanuts": money = count * 1.5; break;
            }
            break;
        case "Varna":
            switch(product){
                case "coffee": money = count * 0.45; break;
                case "water": money = count * 0.7; break;
                case "beer": money = count * 1.10; break;
                case "sweets": money = count * 1.35; break;
                case "peanuts": money = count * 1.55; break;
            }
            break;
    }
    console.log(money);
}

shopM (["coffee","Varna","2"])  */

/*   06. Number in Range
function numberR (input){
    let num = Number(input[0]);

    if (num >= -100 && num <= 100 && num !==0){
        console.log("Yes");
    } else {
        console.log("No");
    }
}

numberR (["110"])  */

/* 08.Cinema Ticket
function cinemaTickets(input){
    let day = (input[0]);
    if (day === "Monday" || day == "Tuesday" || day === "Friday"){
        console.log("12");
    } else if ( day === "Wednesday" || day === "Thursday"){
        console.log("14");
    } else {
        console.log("16");
    }
}

cinemaTickets (["Monday"])  */
/* 10. Invalid Number
function iNumber(input){
    let num = Number(input[0])

    if (num >= 100 && num <= 200 || num == 0){

    }else {
        console.log("invalid");
    }
}

iNumber (["200"])  */
// 02.Weekend or Working Day
/*
function dayOfWeek (input){
    let day = input[0];

    if( day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday"){
        console.log("Working day");
    } else if (day === "Saturday" || day === "Sunday"){
        console.log("Weekend");
    } else {
        console.log("Error");
    }
} 

dayOfWeek (["Monday"]) */
/* 03. animalType Type
function animalType (input){
    let animal = input[0];

    if( animal === "crocodile" || animal === "tortoise" || animal === "snake"){
        console.log("reptile");
    } else if (animal === "dog"){
        console.log("mammal");
    } else {
        console.log("unknown");
    }
} 

animalType (["dog"]) */

/* 07.Working Hours
function workingHouers(input) {
    let time = Number(input[0]);
    let curentDay = input[1];

    if (time >= 10 && time <= 18) {
        if (curentDay === "Monday" || curentDay === "Tuesday" || curentDay === "Wednesday" || curentDay === "Thursday" || curentDay === "Friday" || curentDay === "Saturday") {
            console.log("open");
        } else {
            console.log("closed");
        }
    } else {
        console.log("closed");
    }
}

workingHouers(["8", "Monday"])  */
/* 11. Fruit Shop
function fruitShop(input) {
    frut = input[0];
    day = input[1];
    count = Number(input[2]);
    money = 0

    if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday") {
        switch (frut) {
            case "banana": money = count * 2.5; console.log(money.toFixed(2)); break;
            case "apple": money = count * 1.2; console.log(money.toFixed(2)); break;
            case "orange": money = count * 0.85; console.log(money.toFixed(2)); break;
            case "grapefruit": money = count * 1.45; console.log(money.toFixed(2)); break;
            case "kiwi": money = count * 2.70; console.log(money.toFixed(2)); break; 
            case "pineapple": money = count * 5.50; console.log(money.toFixed(2)); break;
            case "grapes": money = count * 3.85; console.log(money.toFixed(2)); break;
            default: console.log("error");break;
        }

    } else if (day === "Saturday" || day === "Sunday") {
        switch (frut) {
            case "banana": money = count * 2.7; console.log(money.toFixed(2)); break;
            case "apple": money = count * 1.25; console.log(money.toFixed(2)); break;
            case "orange": money = count * 0.90; console.log(money.toFixed(2)); break;
            case "grapefruit": money = count * 1.60; console.log(money.toFixed(2)); break;
            case "kiwi": money = count * 3; console.log(money.toFixed(2)); break;
            case "pineapple": money = count * 5.60; console.log(money.toFixed(2)); break;
            case "grapes": money = count * 4.2; console.log(money.toFixed(2)); break;
            default: console.log("error"); console.log(money.toFixed(2)); break;
        }

    } else {
        console.log("error");
    }
  
}
fruitShop(["apple", "Workday", "2"]) */

/*01. Cinema

function cinema(input){
    let movieType = input[0];
    let c = Number(input[1])
    let r = Number(input[2])
    let seats = c * r;
    let final = 0

    switch(movieType){
        case "Premiere":final = seats *= 12; console.log(`${final.toFixed(2)} leva`);break;
        case "Normal":final = seats *= 7.5; console.log(`${final.toFixed(2)} leva`);break;
        case "Discount": final = seats *= 5; console.log(`${final.toFixed(2)} leva`);break;
    }
}

cinema (["Discount", "12", "30"]) */

/*02. Summer Outfit
function summerOutfit(input) {
    let degrees = Number(input[0]);
    let timeOfDay = input[1];

    let outfit = ``;
    let shoes = ``;


    switch (timeOfDay) {
        case `Morning`:
            if (degrees <= 18) {
                outfit = `Sweatshirt`;
                shoes = `Sneakers`;
            } else if (degrees <= 24) {
                outfit = `Shirt`;
                shoes = `Moccasins`;
            } else if (degrees >= 25) {
                outfit = `T-Shirt`;
                shoes = `Sandals`;
            }
            break;

        case `Afternoon`:
            if (degrees <= 18) {
                outfit = `Shirt`;
                shoes = `Moccasins`;
            } else if (degrees <= 24) {
                outfit = `T-Shirt`;
                shoes = `Sandals`;
            } else if (degrees >= 25) {
                outfit = `Swim Suit`;
                shoes = `Barefoot`;
            }
            break;
        case `Evening`:
            if (degrees <= 18) {
                outfit = `Shirt`;
                shoes = `Moccasins`;
            } else if (degrees <= 24) {
                outfit = `Shirt`;
                shoes = `Moccasins`;
            } else if (degrees >= 25) {
                outfit = `Shirt`;
                shoes = `Moccasins`;
            }
            break;
            
    }
    console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
}

summerOutfit(["16", "Morning"]) */

/* 03. New House
function neuHouse(input) {
    let type = input[0];
    let count = Number(input[1]);
    let thirMoney = Number(input[2]);
    let price = 0

    switch (type) {
        case "Roses": price = count * 5;

            if (count > 80) {
                price = price *= 0.9
            }
            break;

        case "Dahlias": price = count * 3.8;
            if (count > 90) {
                price = price * 0.85
            }
            break;

        case "Tulips": price = count * 2.8;
            if (count > 80) {
                price = price *= 0.85
            }
            break;

        case "Narcissus": price = count * 3;
            if (count < 120) {
                price = price *= 1.15
            }
            break;

        case "Gladiolus": price = count * 2.5;
            if (count < 80) {
                price = price *= 1.2
            }
            break;
    }
    if (thirMoney >= price) {
        let lMoney = thirMoney - price
        console.log(`Hey, you have a great garden with ${count} ${type} and ${lMoney.toFixed(2)} leva left.`);
    } else {
        let needed = price - thirMoney
        console.log(`Not enough money, you need ${needed.toFixed(2)} leva more.`);
    }

}

neuHouse(["Narcissus", "119", "360"]) */

/*04. Fishing Boat
function fishingBoat(input) {
    let moneyAcc = Number(input[0]);
    let season = input[1];
    let count = Number(input[2])
    let total = 0

    switch (season) {
        case `Spring`: total = 3000;
            if (count <= 6) {
                total = total * 0.9;
            } else if (count >= 7 && count <= 11) {
                total = total * 0.85;
            } else if (count >= 12) {
                total = total * 0.75;
            }
            if (count % 2 === 0) {
                total = total * 0.95;
            }
            break;

        case `Summer`: total = 4200;
            if (count <= 6) {
                total = total * 0.9;
            } else if (count >= 7 && count <= 11) {
                total = total * 0.85;
            } else if (count >= 12) {
                total = total * 0.75;
            }
            if (count % 2 === 0) {
                total = total * 0.95;
            }
            break;

            case `Autumn`: total = 4200;
            if (count <= 6) {
                total = total * 0.9;
            } else if (count >= 7 && count <= 11) {
                total = total * 0.85;
            } else if (count >= 12) {
                total = total * 0.75;
            }
            break;

        case `Winter`: total = 2600;
            if (count <= 6) {
                total = total * 0.9;
            } else if (count >= 7 && count <= 11) {
                total = total * 0.85;
            } else if (count >= 12) {
                total = total * 0.75;
            }
            if (count % 2 === 0) {
                total = total * 0.95;
            }
            break;
    }
    if (moneyAcc >= total) {
        let leftMoney = moneyAcc - total;

        console.log(`Yes! You have ${leftMoney.toFixed(2)} leva left.`);
    } else {
        let needed = total - moneyAcc;

        console.log(`Not enough money! You need ${needed.toFixed(2)} leva.`);
    }

}


fishingBoat(["3600","Autumn","6"])    */

/*05. Journey
function journey(input) {
    let money = Number(input[0]);
    let season = input[1];
    let location = ``
    let leftMoney = 0
    let destination = ``

    if (money <= 100) {
        location = `Bulgaria`;
        if (season === `summer`) {
            leftMoney = money * 0.3;
            destination = `Camp`
        } else {
            leftMoney = money * 0.7
            destination = `Hotel`
        }
    } else if (money <= 1000) {
        location = `Balkans`
        if (season === `summer`) {
            leftMoney = money * 0.4;
            destination = `Camp`
        } else {
            leftMoney = money * 0.8;
            destination = `Hotel`
        }
    } else if (money > 1000) {
        location = `Europe`;
        destination = `Hotel`
        leftMoney = money * 0.9
    }

    console.log(`Somewhere in ${location}`);
    console.log(`${destination} - ${leftMoney.toFixed(2)}`);
}

journey(["678.53", "winter"])  */

/*06. Operations Between Numbers
function operationNum(input) {

    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let operator = input[2];
    let result = 0;
    let evenOrOdd = "";

    switch (operator) {
        case `+`: result = num1 + num2;
            if (result % 2 === 0) {
                evenOrOdd = `even`
            } else {
                evenOrOdd = `odd`
                break;
            }
            break;

        case `-`: result = num1 - num2;
            if (result % 2 === 0) {
                evenOrOdd = `even`
            } else {
                evenOrOdd = `odd`
                break;
            }
            break;

        case `*`: result = num1 * num2;
            if (result % 2 === 0) {
                evenOrOdd = `even`
            } else {
                evenOrOdd = `odd`
                break;
            }
            break;

        case `/`:
            if (num2 === 0) {
                console.log(`Cannot divide ${num1} by zero`)
            } else {
                result = num1 / num2
            }
            break;

        case `%`:
            if (num2 == 0) {
                console.log(`Cannot divide ${num1} by zero`)
            } else {
                result = num1 % num2;
                if (result % 2 === 0) {
                    evenOrOdd = `even`
                } else {
                    evenOrOdd = `odd`
                    break;
                }
            }

            break;

    } if (operator == "-" || operator == "+" || operator == "*") {
        console.log(`${num1} ${operator} ${num2} = ${result} - ${evenOrOdd}`);
    } else if (operator == "/" && num2 !== 0) {
        if (evenOrOdd = `odd`) {
            console.log(`${num1} ${operator} ${num2} = ${result.toFixed(2)}`)
        } else {
            console.log(`${num1} ${operator} ${num2} = ${result}`)
        }
    } else if (operator == "%" && num2 !== 0) {
        console.log(`${num1} ${operator} ${num2} = ${result}`)
    }

}

operationNum(["10", "3", "/"])  */

/* 07. Hotel Room
function hotelRoom(input) {
    let mount = input[0];
    let count = Number(input[1]);
    let apartmentSum = 0;
    let studioSum = 0;

    if (mount == "May" || mount == "October") {
        apartmentSum = 65 * count;
        if (count > 14) {
            apartmentSum = apartmentSum * 0.9;
        }
        studioSum = 50 * count;
        if (count > 7 && count <= 14) {
            studioSum = studioSum * 0.95;
        } else if (count > 14) {
            studioSum = studioSum * 0.7;
        }
    } else if (mount == "June" || mount == "September") {
        apartmentSum = 68.70 * count;
        if (count > 14) {
            apartmentSum = apartmentSum * 0.9;
        }
        studioSum = 75.20 * count;
        if (count > 14) {
            studioSum = studioSum * 0.8;
        }
    } else if (mount == "July" || mount == "August") {
        apartmentSum = 77 * count;
        if (count > 14) {
            apartmentSum = apartmentSum * 0.9;
        }
        studioSum = 76 * count;
    }
    console.log(`Apartment: ${apartmentSum.toFixed(2)} lv.`);
    console.log(`Studio: ${studioSum.toFixed(2)} lv.`);
}

hotelRoom(["August", "20"])  */

/*08. On Time for the Exam
function examTime(input) {
    let startTime = Number(input[0]);
    let startMinets = Number(input[1]);
    let arrivalTime = Number(input[2]);
    let arrivalMinets = Number(input[3]);
    let time1 = (startTime * 60) + startMinets;
    let time2 = (arrivalTime * 60) + arrivalMinets;
    let diference1 = time1 - time2;
    let diference2 = time2 - time1;

    if (diference1 <= 30 && diference1 > 0) {
        console.log(`On time`);
        console.log(`${diference1} minutes before the start`);
    } else if (diference2 > 0 && diference2 < 60) {
        console.log(`Late`);
        console.log(`${diference2} minutes after the start`)
    } else if (diference1 > 30 && diference1 < 60) {
        console.log(`Early`);
        console.log(`${diference1} minutes before the start`);
    } else if (diference1 >= 60) {
        let time3 = Math.floor(diference1 / 60);
        let minLeft = diference1 % 60;
        if (minLeft == "0") {
            minLeft = minLeft + "0";
        } else if (minLeft > 0 && minLeft < 10) {
            minLeft = `0` + minLeft;
        }
        console.log(`Early`);
        console.log(`${time3}:${minLeft} hours before the start`)
    } else if (diference2 >= 60) {
        let time3 = Math.floor(diference2 / 60);
        let minLeft = diference2 % 60;
        if (minLeft == "0") {
            minLeft = minLeft + "0";
        } else if (minLeft > 0 && minLeft < 10) {
            minLeft = `0` + minLeft;
        }
        console.log(`Late`);
        console.log(`${time3}:${minLeft} hours after the start`)
    } else if (diference1 == "0" || diference2 == "0") {
        console.log(`On time`);
    }
}

examTime(["16", "00", "14", "55"])  */

/* 09. Ski Trip
function skiTrip(input) {
    let days = Number(input[0]);
    let suit = input[1];
    let feedback = input[2];
    let total = 0
    let nights = days - 1;

    switch (suit) {
        case `room for one person`:
            total = 18 * nights;
            break;

        case `apartment`:
            total = 25
            if (nights < 10) {
                total = (total * 0.7) * nights;
            } else if (nights >= 10 && nights <= 15) {
                total = (total * 0.65) * nights;
            } else if (nights > 15) {
                total = (total * 0.5) * nights;
            }
            break;

        case `president apartment`:
            total = 35;
            if (nights >= 10 && nights <= 15) {
                total = (total * 0.65) * nights;
            } else if (nights < 10) {
                total = (total * 0.7) * nights;
            } else if (nights > 15) {
                total = (total * 0.8) * nights;
            }
            break;

    } if (feedback == `positive`) {
        total = total * 1.25;
    } else if (feedback == `negative`) {
        total = total * 0.9;
    }

    console.log(total.toFixed(2));
}

skiTrip(["12", "room for one person", "positive"])  */
