/* 01. Agency Profit  ----
function agencyProfit(input){
    let agencyName = (input[0]);
    let countAdultT = Number(input[1]);
    let countChildrenT = Number(input[2]);
    let priceAdultT = Number(input[3]);
    let additionalTax = Number(input[4]);
    let priceChrildenT = priceAdultT * 0.3

    let fullTicketPrice = (priceAdultT + additionalTax ) *countAdultT +( priceChrildenT + additionalTax) * countChildrenT 
    let income = fullTicketPrice * 0.2
    console.log(`The profit of your agency from ${agencyName} tickets is ${income.toFixed(2)} lv.`);
}

agencyProfit (["WizzAir","15","5","120","40"])

*/
/*   02.AddBags
function addBags(input){
    let priceBagage = Number(input[0]);
    let bagageLeight = Number(input[1]);
    let daysToTrip = Number(input[2]);
    let countBagage = Number(input[3]);

    if (bagageLeight < 10){
        priceBagage = priceBagage * 0.2
    } else if (bagageLeight >=10 & bagageLeight < 20){
        priceBagage = priceBagage * 0.5
    } else {
        priceBagage = priceBagage
    }

    if (daysToTrip > 30){
        priceBagage = priceBagage + (priceBagage * 0.1)
    } else if ( daysToTrip >= 7 & daysToTrip <= 30){
        priceBagage = priceBagage + (priceBagage * 0.15)
    } else if ( daysToTrip < 7){
        priceBagage = (priceBagage * 0.4) + priceBagage
    }
    let totalPrice = priceBagage * countBagage
    console.log(`The total price of bags is: ${totalPrice.toFixed(2)} lv.`);
}

addBags(["63.80","23","3","1"])

*/

/*03. Aluminum Joinery

function alumin(input) {
    let countAlumin = Number(input[0]);
    let sizePrice = (input[1]);
    let deliveryType = (input[2]);
    let totalSum = 0;


    if (countAlumin <= 10) {
        console.log(`Invalid order`);

    } else if (sizePrice === "90X130") {
        totalSum = 110;
        if (countAlumin > 30 && countAlumin <= 60) {
            totalSum = totalSum * 0.95;
        } else if (countAlumin > 60) {
            totalSum = totalSum * 0.92;
        }
        if (deliveryType === "With delivery") {
            deliveryType = 60;
        } else {
            deliveryType = 0;
        }
        let finalPrice = (totalSum * countAlumin) + deliveryType
        if (countAlumin > 99) {
            finalPrice = finalPrice * 0.96;
        }
        console.log(`${finalPrice.toFixed(2)} BGN`);
    } else if (sizePrice === "100X150") {
        totalSum = 140;
        if (countAlumin > 40 && countAlumin <= 80) {
            totalSum = totalSum * 0.94;
        } else if (countAlumin >= 80) {
            totalSum = totalSum * 0.9;
        }
        if (deliveryType === "With delivery") {
            deliveryType = 60;
        } else {
            deliveryType = 0;
        }
        let finalPrice = (totalSum * countAlumin) + deliveryType
        if (countAlumin > 99) {
            finalPrice = finalPrice * 0.96;
        }
        console.log(`${finalPrice.toFixed(2)} BGN`);

    } else if (sizePrice === "130X180") {
        totalSum = 190;
        if (countAlumin > 20 && countAlumin <= 50) {
            totalSum = totalSum * 0.93;
        } else if (countAlumin > 50) {
            totalSum = totalSum * 0.88;
        }
        if (deliveryType === "With delivery") {
            deliveryType = 60;
        } else {
            deliveryType = 0;
        }
        let finalPrice = Number(totalSum * countAlumin) + deliveryType;

        if (countAlumin > 99) {
            finalPrice = finalPrice * 0.96;

            
        }
        console.log(`${finalPrice.toFixed(2)} BGN`);

    } else if (sizePrice === "200X300") {
        totalSum = 250;
        if (countAlumin > 25 && countAlumin <= 50) {
            totalSum = totalSum * 0.91;
        } else if (countAlumin > 50) {
            totalSum = totalSum * 0.86;
        }
        if (deliveryType === "With delivery") {
            deliveryType = 60;
        } else {
            deliveryType = 0;
        }
        let finalPrice = (totalSum * countAlumin) + deliveryType;
        if (countAlumin > 99) {
            finalPrice = finalPrice * 0.96;
        }
        console.log(`${finalPrice.toFixed(2)} BGN`);
    }

}

alumin(["11", "90X130", "With delivery"])
*/


//Day of Weak
/*
function dayOfWeek(input){
    let day = Number(input[0]);
    if (day === 1){
        console.log("Monday");
    } else if (day === 2){
        console.log("Tuesday");
    }else if (day === 3){
        console.log("Wednesday");
    }else if (day === 4){
        console.log("Thursday");
    }else if (day === 5){
        console.log("Friday");
    }else if (day === 6){
        console.log("Saturday");
    }else if (day === 7){
        console.log("Sunday");
    }else {
        console.log("Error");
    }
}

dayOfWeek(["5"])
*/
/* day of week 
function dayOfW (input){
    let day = (input[0])
    switch (day){
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Tursday":
        case "Friday":
        console.log(`Working day`);
        break;
        case "Saturday":
        case "Sunday":
            console.log(`Weekend`);
        break;
        default:
            console.log(`Error`);
        break
    }
}

dayOfW(["Monday"]) */
/* 04. Balls
function balls(input){
    let n = Number(input[0]);
    let points = 0;
    let reds = 0;
    let orange = 0;
    let yellow = 0;
    let white = 0;
    let black = 0;
    let other = 0;
    let color = ""

    for (let i =+ 1; i < n +1; i++){
        color = input[i];
        if (color === "red"){
            reds +=1;
            points += 5;

        }else if (color === `orange`){
            orange += 1;
            points += 10;
        }else if (color === `yellow`){
            yellow +=1;
            points += 15;
        }else if (color === `white`){
            white +=1;
            points +=20;
        }else if (color ===`black`){
            black +=1;
            points = Math.floor(points / 2)
        }else {
            other +=1;
        }
    }
    console.log(`Total points: ${points}`);
    console.log(`Red balls: ${reds}`);
    console.log(`Orange balls: ${orange}`);
    console.log(`Yellow balls: ${yellow}`);
    console.log(`White balls: ${white}`);
    console.log(`Other colors picked: ${other}`);
    console.log(`Divides from black balls: ${black}`);
}

balls (["3","white","black","pink"])
*/
// 05. Best Player
