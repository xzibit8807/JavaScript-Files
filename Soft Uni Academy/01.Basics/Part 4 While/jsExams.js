/* Computer Firm 
function compSale(input) {
    let n = Number(input[0]);
    let totalSales = 0;
    let totalRating = 0;

    for (let i = 1; i <= n; i++) {
        let rating = Number(input[i]) % 10;
        let sales = Math.floor(Number(input[i]) / 10);

        switch (rating) {
            case 2:
                totalSales += 0;
                break;
            case 3:
                totalSales += sales * 0.5;
                break;
            case 4:
                totalSales += sales * 0.7;
                break;
            case 5:
                totalSales += sales * 0.85;
                break;
            case 6:
                totalSales += sales;
                break;
        }

        totalRating += rating;
    }

    let averageRating = totalRating / n;

    console.log(totalSales.toFixed(2));
    console.log(averageRating.toFixed(2));

}


compSale(["3", "103", "103", "103"]) */

/* Hair Salon
function hairSalon(input){
    let index = 0;
    let targetSum = Number(input[index]);
    index++;
    let type = input[index];
    index++;
    let haircut = ``;
    let money = 0;

    while(type !== `closed`){
        if(money >= targetSum){
            break;
        }
        type = input[index];
        index++
        switch(type){
            case `mens`: money += 15; break;
            case `ladies`: money += 20;break;
            case `kids`: money += 10;break;
            case `touch up`: money += 20;break;
            case `full color`: money += 30;break;
        }
        type = input[index];
        index++
    }
    if(money >= targetSum){
        console.log(`You have reached your target for the day!`);
    }else if(targetSum > money){
        console.log(`Target not reached! You need ${targetSum - money}lv. more.`);
    }
    console.log(`Earned money: ${money}lv.`);
}

hairSalon(["50",
"color",
"full color",
"haircut",
"ladies"]) */
// 06. Sum And Product
function sumsP(input){
    let n = Number(input[0])
    for(let a = 1; a <= 9; a++){
        for(let b = 9;b > a; b--){
            for(let c = 0; c <= 9; c++){
                for (let d = 9; d > c; d--) {
                    if(a + b + c + d == a * b * c * d){
                        console.log(`${a}${b}${c}${d}`); break;
                    }else if((a * b * c * d) / (a + b + c + d) == 3 && n % 3 == 0){
                        console.log(`${d}${c}${b}${a}`); break;
                    }else {
                        console.log(`Nothing found`);break;
                    }
                    
                }
            }
        }
    }
}

sumsP(["123"])