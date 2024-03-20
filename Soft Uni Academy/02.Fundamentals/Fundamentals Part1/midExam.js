/* 01. The Biscuit Factory  70/100
function biscuitFactory(input) {
    let biscuitsPerDay = Number(input[0]);
    let workers = Number(input[1]);
    let otherCompany = Number(input[2]);
    let productionOnDayTree = Math.floor(((biscuitsPerDay * workers) * 10) * 0.75);
    let productionOtherDays = (biscuitsPerDay * workers) * 20;
    let totalProduction = productionOnDayTree + productionOtherDays;
    let difference = 0;
    console.log(`You have produced ${totalProduction} biscuits for the past month.`);

    if (totalProduction > otherCompany) {
        let buffer = totalProduction - otherCompany;
        difference = (buffer / otherCompany) * 100;
        console.log(`You produce ${difference.toFixed(2)} percent more biscuits.`);
    } else {
        let buffer = otherCompany - totalProduction;
        difference = (buffer / otherCompany) * 100;
        console.log(`You produce ${difference.toFixed(2)} percent less biscuits.`);
    }

}
biscuitFactory([65, 12, 26000]);  */
/* 01. The Biscuit Factory  100/100
function biscuitFactory(input) {

    let totalBiscuits = 0;
    let biscuitsPerDay = Number(input[0]);
    let workerCount = Number(input[1]);
    let competingFactoryProduction = Number(input[2]);

    for (let day = 1; day <= 30; day++) {
        let biscuitsToday = biscuitsPerDay * workerCount;

        if (day % 3 === 0) {
            biscuitsToday *= 0.75;
        }

        totalBiscuits += Math.floor(biscuitsToday);
    }

    let percentageDifference = ((totalBiscuits - competingFactoryProduction) / competingFactoryProduction) * 100;

    console.log(`You have produced ${totalBiscuits} biscuits for the past month.`);

    if (percentageDifference > 0) {
        console.log(`You produce ${percentageDifference.toFixed(2)} percent more biscuits.`);
    } else {
        console.log(`You produce ${Math.abs(percentageDifference).toFixed(2)} percent less biscuits.`);
    }
}
biscuitFactory([65, 12, 26000]);   */
/* 02. Tax Calculator
function taxCalculator(arr) {
    let taxFamily = 50;
    let taxHeavy = 80;
    let taxSports = 100;
    let kmTax = 0;
    let totalTax = 0;
    let totalTaxToCollect = 0;
    let cars = arr.shift().split('>>');
    let carsLength = cars.length;

    for (i = 0; i < carsLength; i++) {
        let [type, years, km] = cars.shift(`,`).split(` `)

        if (type === `family`) {
            kmTax = Math.floor(km / 3000) * 12;
            totalTax = (taxFamily - (years * 5)) + kmTax;
            totalTaxToCollect += totalTax;
            console.log(`A ${type} car will pay ${totalTax.toFixed(2)} euros in taxes.`);
        }

        else if (type === `heavyDuty`) {
            kmTax = Math.floor(km / 9000) * 14;
            totalTax = (taxHeavy - (years * 8)) + kmTax;
            totalTaxToCollect += totalTax;
            console.log(`A ${type} car will pay ${totalTax.toFixed(2)} euros in taxes.`);
        }

        else if (type === `sports`) {
            kmTax = Math.floor(km / 2000) * 18;
            totalTax = (taxSports - (years * 9)) + kmTax;
            totalTaxToCollect += totalTax;
            console.log(`A ${type} car will pay ${totalTax.toFixed(2)} euros in taxes.`);
        }

        else {
            console.log("Invalid car type.");
        }

    }
    console.log(`The National Revenue Agency will collect ${totalTaxToCollect.toFixed(2)} euros in taxes.`);
}
taxCalculator([`family 3 7210>>van 4 2345>>heavyDuty 9 31000>>sports 4 7410`])  */
//03. Deck of Cards
function deckOfCards(input) {
    let cards = input.shift().split(", ");
    let commandsCount = Number(input.shift());

    for (let i = 0; i < commandsCount; i++) {
        let command = input[i].split(", ");
        let action = command[0];
        let card = command[1];

        if (action === "Add") {
            if (cards.includes(card)) {
                console.log("Card is already in the deck");
            } else {
                cards.push(card);
                console.log("Card successfully added");
            }
        } else if (action === "Remove") {
            if (cards.includes(card)) {
                cards = cards.filter((c) => c !== card);
                console.log("Card successfully removed");
            } else {
                console.log("Card not found");
            }
        } else if (action === "Remove At") {
            let index = Number(card);
            if (index >= 0 && index < cards.length) {
                cards.splice(index, 1);
                console.log("Card successfully removed");
            } else {
                console.log("Index out of range");
            }
        } else if (action === "Insert") {
            let index = Number(card);
            let cardToInsert = command[2];
            if (index >= 0 && index <= cards.length) {
                if (cards.includes(cardToInsert)) {
                    console.log("Card is already added");
                } else {
                    cards.splice(index, 0, cardToInsert);
                    console.log("Card successfully added");
                }
            } else {
                console.log("Index out of range");
            }

        }
    }

    console.log(cards.join(", "));
}
deckOfCards(["Ace of Diamonds, Queen of Hearts, King of Clubs", "3", "Add, King of Diamonds", "Insert, 2, Jack of Spades", "Remove, Ace of Diamonds"]);
console.log(`---------------------------------------------------`);
deckOfCards(["Jack of Spades, Ace of Clubs, Jack of Clubs", "2", "Insert, 2, Queen of Spades", "Remove At, 1"]);