function shoping(input){
    let petarMoneyBuge = Number(input[0]);
    let countVideoCards = Number(input[1]);
    let countProcesors = Number(input[2]);
    let countRams = Number(input[3]);

    let totalPriceVC = 250 * countVideoCards
    let pricePro = totalPriceVC * 0.35;
    let priceRam = totalPriceVC * 0.10;
    let totalPrice = totalPriceVC + (countProcesors * pricePro) + (countRams * priceRam)
    
    if (countVideoCards > countProcesors){
        totalPrice = totalPrice * 0.85
    }

    let moneyLeft = petarMoneyBuge - totalPrice
    
    if (moneyLeft >= 0){
        console.log(`You have ${moneyLeft.toFixed(2)} leva left!`);
    } else {
        let diference = totalPrice - petarMoneyBuge
        console.log(`Not enough money! You need ${diference.toFixed(2)} leva more!`);
    }

}

shoping(["920.45","3","1","1"])