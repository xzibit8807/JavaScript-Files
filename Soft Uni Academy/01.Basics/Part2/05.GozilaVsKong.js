function gozilaVsKong(input){
    let movieBuget = Number(input[0]);
    let countActors = Number(input[1]);
    let priceCloating = Number(input[2]);

    let decores = 0.1 * movieBuget
    let totalCloatingPrice =  countActors * priceCloating

    if (countActors > 150){
        totalCloatingPrice = totalCloatingPrice * 0.9
    }

    if (totalCloatingPrice < movieBuget){
        let result1 = movieBuget - (totalCloatingPrice + decores)
        console.log("Action!");
        console.log(`Wingard starts filming with ${result1.toFixed(2)} leva left.`);
    } else {
        let result2 = (totalCloatingPrice + decores) - movieBuget
        console.log("Not enough money!");
        console.log(`Wingard needs ${result2.toFixed(2)} leva more.`);
    }
}

gozilaVsKong (["9587.88","222","55.68"])