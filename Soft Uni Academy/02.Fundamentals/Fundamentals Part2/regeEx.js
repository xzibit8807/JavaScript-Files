/* 01. Match Full Name
function matchFN(input) {
    const regex = /[A-Z][a-z][a-z][a-z] [A-Z][a-z]+/gm;
    let text = String(input);
    let m;
    let buffer = ``;


    let match = regex.exec(text);
    while (match) {
        buffer += `${match} `;
        match = regex.exec(text);
    }
    console.log(buffer);
}
matchFN(`Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov`);     */
/* 01 that works 
function solve(input) {
    let pattern = /\b[A-Z][a-z]+[ ][A-Z][a-z]+\b/g;
    let validNames = [];
    let validName = null;
    while((validName = pattern.exec(input)) !== null){
    validNames.push(validName[0]);
      }
    console.log(validNames.join(' '));
    }
    solve(`Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov`);  */
/* 02. Match Phone Number
function regExPhones(input) {
    let validNames = [];
    let pattern = /(?<!\d)[+]359([ -])2\1\d{3}\1\d{4}\b/g;
    while ((validName = pattern.exec(input)) !== null) {
        validNames.push(validName[0]);
    }
    console.log(validNames.join(', '));
}
regExPhones(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222']); */
/*
function dateValidator(input) {

    let regex = /\b(?<day>\d{2})([-.\/])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})\b/g;

    let validDates = null;

    while ((validDates = regex.exec(input)) !== null) {

        let day = validDates.groups[`day`];
        let month = validDates.groups[`month`];
        let year = validDates.groups[`year`];

        console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
    }
}
dateValidator(['13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016']);  */
/* 01. Furniture
function furniture(input) {

    let pattern = />>(?<name>\w+)<<(?<price>\d+\.?\d+)!(?<quantity>\d+)/;
    let totalSum = 0;

    console.log(`Bought furniture:`);
    for (const el of input) {
        let result = el.match(pattern);

        if (result) {
            let items = result.groups.name;
            let price = +result.groups.price;
            let count = +result.groups.quantity;

            totalSum += price * count;
            console.log(items);
        }
    }
    console.log(`Total money spend: ${totalSum.toFixed(2)}`);
}
furniture(['>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase']);   */

//const { log } = require("console");

// 02. Race
function race(input) {

    let listOfParticipants = input.shift().split(`, `);
    let objectOfParticipants = {};

    for (const name of listOfParticipants) {
        objectOfParticipants[name] = 0;
    }
    
    let currentRow = input.shift();
    let lettersPattern = /[A-Za-z]/g;
    let digitPattern = /[0-9]/g;

    while (currentRow !== `end of race`) {
    
        let currentName = currentRow.match(lettersPattern).join(``);
        let distance = currentRow.match(digitPattern);

        let currentDistance = 0;

        distance.map(d => currentDistance += Number(d));

        if (objectOfParticipants.hasOwnProperty(currentName)) {
            objectOfParticipants[currentName] += currentDistance;
        }
        let currentRow = input.shift();
    }

    let sortedParticipants = Object.entries(objectOfParticipants).sort((a, b) => b[1] - a[1]);

    console.log(`"1st place: ${sortedParticipants[0][0]}`);
    console.log(`2nd place: ${sortedParticipants[0][1]}`);
    console.log(`3rd place: ${sortedParticipants[0][2]}`);

}
race(['George, Peter, Bill, Tom', 'G4e@55or%6g6!68e!!@ ', 'R1@!3a$y4456@', 'B5@i@#123ll',
    'G@e54o$r6ge#', '7P%et^#e5346r', 'T$o553m&6', 'end of race'])