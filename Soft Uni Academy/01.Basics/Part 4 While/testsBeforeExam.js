/* Coffee Machine 
function coffeeMachine(input) {
    let drink = input[0];
    let sugar = input[1];
    let count = Number(input[2]);
    let price = 0;

    switch (drink) {
        case `Espresso`:
            switch (sugar) {
                case `Extra`: price = count * 1.2; break;
                case `Normal`: price = count * 1; break;
                case `Without`: price = count * 0.9; break;
            }
            break;

        case `Cappuccino`:
            switch (sugar) {
                case `Extra`: price = count * 1.6; break;
                case `Normal`: price = count * 1.2; break;
                case `Without`: price = count * 1; break;
            }
            break;

        case `Tea`:
            switch (sugar) {
                case `Extra`: price = count * 0.7; break;
                case `Normal`: price = count * 0.6; break;
                case `Without`: price = count * 0.5; break;
            }
    }
    if (drink == `Espresso` && count >= 5) {
        price = price * 0.75;
    }
    if (sugar == `Without`) {
        price = price * 0.65;
    }
    if (price > 15) {
        price = price * 0.8;
    }
    console.log(`You bought ${count} cups of ${drink} for ${price.toFixed(2)} lv.`);
}


coffeeMachine(["Cappuccino","Normal","13"]) */
/* Tournament of Christmas
function tournament(input) {
    let index = 0;
    let daysOfTournament = Number(input[index]);
    index++;

    let result = ``;
    let wonMoney = 0;
    let command = ``;
    let totalWins = 0;
    let totalLoses = 0;

    for (i = 0; i < daysOfTournament; i++) {
        let wins = 0;
        let loses = 0;
        let wonMoneyBuffer = 0;
        while (command !== `Finish`) {
            command = input[index];
            index++;
            if(command == `Finish`){
                command = input[index];
                break;
            }
            result = input[index];
            index++;

            switch (result) {
                case `win`: wins++; break;
                case `lose`: loses++; break;
            }
 
        }
        wonMoneyBuffer += wins * 20;
        if (wins > loses) {
            wonMoneyBuffer *= 1.1;
            wonMoney += wonMoneyBuffer;
        }else {
            wonMoney += wonMoneyBuffer;
        }
        totalWins += wins;
        totalLoses += loses;
    }
    if (totalWins > totalLoses) {
        wonMoney *= 1.2;
        console.log(`You won the tournament! Total raised money: ${wonMoney.toFixed(2)}`);
    } else {

        console.log(`You lost the tournament! Total raised money: ${wonMoney.toFixed(2)}`);
    }
}

tournament([`3`,`darts`,`lose`,`handball`,`lose`,`judo`,`win`,`Finish`,`snooker`,`lose`,`swimming`,`lose`,`squash`,`lose`,`table tennis`,`win`,`Finish`,`volleyball`,`win`,`basketball`,`win`,`Finish`])
*/
// 05. Suitcases Load
function suitcases(input){
    let index = 0;
    let totalSpace = Number(input[index]);
    index++;
    let bags = Number(input[index]);
    index++;
    let buffer = 0;
    let counter = 0;
     
    while(bags !== `End`){
        bags = Number(bags);
        counter++
        if(counter %3 == 0){
            bags *= 1.1;
        }
        buffer += bags;
        if(totalSpace <= buffer || totalSpace <= bags){
            break;
        }
        bags = input[index];
        index++;
    }
    if(totalSpace >= buffer){
        console.log(`Congratulations! All suitcases are loaded!`);
        console.log(`Statistic: ${counter} suitcases loaded.`);
    }else {
        console.log(`No more space!`);
        console.log(`Statistic: ${counter-1} suitcases loaded.`);
    }
}

suitcases([`700.5`,
    `180`,
    `340.6`,
    `126`,
    `220`])