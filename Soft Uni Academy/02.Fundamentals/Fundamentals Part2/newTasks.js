/* 01. Word Tracker
function wordsTRacker(input) {
    let map = new Map();
    let words2check = input.shift().split(` `);

    words2check.forEach(word => {
        map.set(word, 0)
    });
    for (const line of input) {
        for (const word of words2check) {

            if (line === word) {
                let currentQuantity = map.get(line)
                map.set(line, currentQuantity + 1);
            }
        }
    }
    let sortedWords = Array.from(map.entries()).sort((a, b) => b[1] - a[1]);

    sortedWords.forEach(element => {
        console.log(`${element.join(` - `)}`);
    })
}
wordsTRacker(['this sentence',
    'In', 'this', 'sentence', 'you', 'have',
    'to', 'count', 'the', 'occurrences', 'of',
    'the', 'words', 'this', 'and', 'sentence',
    'because', 'this', 'is', 'your', 'task']); */
/* 02. Odd Occurrences
function oddOcc(input){
    let inputArr = input.split(` `).map(e => e.toLowerCase());

    let wordsObject = {};

    for (const word of inputArr) {
        if(!wordsObject.hasOwnProperty(word)){
            wordsObject[word] = 0;
        }
        wordsObject[word]++;
    }
    let arrOfODdd = Object.entries(wordsObject).filter(double => double[1] % 2 !== 0).sort((a, b) => b[1] - a[1]);

    let result = ``;
    for (const word of arrOfODdd) {
        result += `${word[0]} `
    }
    console.log(result);
}
oddOcc('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');  */
/* 03. Piccolo
function piccolo(input) {

    let parking = new Set();

    for (const entry of input) {
        let [direction, carNumber] = entry.split(`, `);

        if (direction === `IN`) {
            parking.add(carNumber);
        } else if (direction === `OUT`) {
            parking.delete(carNumber);
        }
    }
    if (parking.size === 0) {
        console.log(`Parking Lot is Empty`);
    } else {
        let sortedCars = Array.from(parking).sort((a, b) => a.localeCompare(b));
        sortedCars.forEach(carNumber => console.log(carNumber))
   
    }
}
piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU'])  */
/* 04. Party Time
function partyTime(input) {
    let vipList = [];
    let regularList = [];

    let command = input.shift();

    while (command !== `PARTY`) {
        let firstChar = command[0];
        if (isNaN(firstChar)) {
            regularList.push(command)
        } else {
            vipList.push(command)
        }
        command = input.shift()
    }
    let allGuests = vipList.concat(regularList)

    for (const guest of input) {
        if (allGuests.includes(guest)) {
            allGuests.splice(allGuests.indexOf(guest), 1);
        }
    }
    console.log(allGuests.length);
    allGuests.forEach(guest => console.log(guest));
}
partyTime(['7IK9Yo0h', '9NoBUajQ', 'Ce8vwPmE',
    'SVQXQCbc', 'tSzE5t0p',
    'PARTY', '9NoBUajQ', 'Ce8vwPmE', 'SVQXQCbc']); */
/* 05. Card Game
function cardGame(input) {
    let valueObj = {
        [`2`]: 2,
        [`3`]: 3,
        [`4`]: 4,
        [`5`]: 5,
        [`6`]: 6,
        [`7`]: 7,
        [`8`]: 8,
        [`9`]: 9,
        [`10`]: 10,
        [`J`]: 11,
        [`Q`]: 12,
        [`K`]: 13,
        [`A`]: 14
    }


    let typeObj = {
        [`S`]: 4,
        [`H`]: 3,
        [`D`]: 2,
        [`C`]: 1,
    };



    let result = {};
    let = endResult = {};

    for (const item of input) {
        let [name, cards] = item.split(`: `);

        if (result.hasOwnProperty(name)) {
            let oldCardArr = result[name];
            let cardsArr = cards.split(`, `);
            for (const card of cardsArr) {
                if (!oldCardArr.includes(card)) {
                    oldCardArr.push(card)
                }
            }
            result[name] = oldCardArr;
        } else {
            let cardsArr = cards.split(`, `);
            let uniqueArr = [];
            for (const card of cardsArr) {
                if (!uniqueArr.includes(card)) {
                    uniqueArr.push(card);
                }
            }
            result[name] = uniqueArr;
        }
    }

    for (const [name, cards] of Object.entries(result)) {
        let sum = 0;
        for (const card of cards) {
            let cardAsArr = card.split(``);
            let cardType = cardAsArr.pop();
            let cardValue = cardAsArr.join(``);
            sum += valueObj[cardValue] * typeObj[cardType];

        }
        endResult[name] = sum;
    }

    for (const key in endResult) {

        console.log(`${key}: ${endResult[key]}`);

    }
}
cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD']);   */
/* 06. Company Users
function companyUsers(input) {
    let companies = {};

    input.forEach(double => {
        let [company, id] = double.split(` ->`)

        if (!companies.hasOwnProperty(company)) {
            companies[company] = [];
        }
        companies[company].push(id);
    });
    let sortedCompanies = Object.entries(companies).sort((a, b) => a[0].localeCompare(b[0]));

    for (const element of sortedCompanies) {
        let companyName = element[0]
        console.log(companyName);
        let set = new Set(element[1])
        for (const number of set) {
            console.log(`-- ${number}`);
        }
    }
}
companyUsers([
    'SoftUni ->AA12345', 'SoftUni ->BB12345',
    'Microsoft ->CC12345', 'HP ->BB12345']) */
/* 07. A Miner Task
function minerTask(input) {
    let resources = {};

    for (let i = 0; i < input.length; i += 2) {
        let resource = input[i];
        let quantity = Number(input[i + 1]);

        if (resources[resource]) {
            resources[resource] += quantity;
        } else {
            resources[resource] = quantity;
        }
    }
    for (const key in resources) {
        console.log(`${key} -> ${resources[key]}`);
    }
}
minerTask(['Gold', '155', 'Silver', '10', 'Copper', '17']); */

