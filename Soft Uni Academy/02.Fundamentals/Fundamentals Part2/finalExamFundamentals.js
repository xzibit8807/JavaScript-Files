/* 01. Decrypting Commands
function decryptingCommands(input) {
    let message = input.shift();

    for (const command of input) {
        if (command === "Finish") {
            break;
        }

        let [action, ...activities] = command.split(" ");
        switch (action) {
            case "Replace":
                let [currentChar, newChar] = activities;
                message = message.split(currentChar).join(newChar);
                console.log(message);
                break;

            case "Cut":
                let [startIndex, endIndex] = activities.map(Number);
                if (isValidIndex(startIndex, message) && isValidIndex(endIndex, message)) {
                    message = message.slice(0, startIndex) + message.slice(endIndex + 1);
                    console.log(message);
                } else {
                    console.log("Invalid indices!");
                }
                break;

            case "Make":
                let caseType = activities[0];
                message = caseType === "Upper" ? message.toUpperCase() : message.toLowerCase();
                console.log(message);
                break;

            case "Check":
                let searchString = activities[0];
                if (message.includes(searchString)) {
                    console.log(`Message contains ${searchString}`);
                } else {
                    console.log(`Message doesn't contain ${searchString}`);
                }
                break;

            case "Sum":
                let [sumStartIndex, sumEndIndex] = activities.map(Number);
                function isValidIndex(index, str) {
                    return index >= 0 && index < str.length;
                }
                if (isValidIndex(sumStartIndex, message) && isValidIndex(sumEndIndex, message)) {
                    let expectedSum = message.slice(sumStartIndex, sumEndIndex + 1);
                    function getASCIISum(str) {
                        let sum = 0;
                        for (const char of str) {
                            sum += char.charCodeAt(0);
                        }
                        return sum;
                    }

                    let asciiSum = getASCIISum(expectedSum);
                    console.log(asciiSum);
                } else {
                    console.log("Invalid indices!");
                }
                break;

            default:
                console.log("Invalid command!");
                break;
        }
    }
}






decryptingCommands((["ILikeSoftUni", "Replace I We", "Make Upper", "Check SoftUni", "Sum 1 4", "Cut 1 4", "Finish"]));  */
/*02. Boss Rush
function bossRush(input) {

    let numberOfEntries = input.shift();
    let regex = /^[|][A-Z][A-Z][A-Z][A-Z]+[|][:][#][A-Za-z]+ [A-Za-z]+[#]/g;
    let regexOne = /^[|][A-Z][A-Z][A-Z][A-Z]+[|]/g;
    let regexTwo = /^[#][A-Za-z]+ [A-Za-z]+[#]/g

    for (let i = 0; i < numberOfEntries; i++) {
        let bossCheck = input.shift();
        let fullcheck = bossCheck.match(regex);
        if (fullcheck) {
            let [name, value] = bossCheck.split(':');
            let isValidName = name.match(regexOne);
            let isValidValue = value.match(regexTwo);

            if (isValidName && isValidValue) {
                let nameToPrint = name.replace(/\|/g, '');
                let valueToPrint = value.replace(/\#/g, '')
                let strength = nameToPrint.length;
                let armor = valueToPrint.length
                console.log(`${nameToPrint}, The ${valueToPrint}`);
                console.log(`>> Strength: ${strength}`);
                console.log(`>> Armor: ${armor}`);
            }
        } else {
            console.log("Access denied!");
        }
    }
}
bossRush((['3', '|PETER|:#Lead architect#', '|GEORGE|:#High Overseer#', '|KARL|: #Marketing lead#']));  */
//03. Wild Zoo
function processCommands(input) {
    let animals = {};
    let areasWithHungryAnimals = {};

    for (const command of input) {
        if (command === "EndDay") {
            break;
        }

        let [action, data] = command.split(": ");
        let [animalName, foodData, area] = data.split("-");

        switch (action) {
            case "Add":
                let neededFood = Number(foodData);
                if (!animals[animalName]) {
                    animals[animalName] = neededFood;
                    animals[animalName] = {
                        food: neededFood,
                        area,
                    };
                    if (!areasWithHungryAnimals[area]) {
                        areasWithHungryAnimals[area] = 1;
                    } else {
                        areasWithHungryAnimals[area]++;
                    }
                } else {
                    animals[animalName].food += neededFood;
                }

                break;

            case "Feed":
                let food = Number(foodData);
                if (animals[animalName]) {
                    animals[animalName].food -= food;
                    if (animals[animalName].food <= 0) {
                        console.log(`${animalName} was successfully fed`);
                        const removedAnimalArea = animals[animalName].area;
                        delete animals[animalName];
                        areasWithHungryAnimals[removedAnimalArea]--;
                    }
                }
                break;
        }
    }

    console.log("Animals:");
    let output = Object.entries(animals)
        .map(([name, data]) => ` ${name} -> ${data.food}g`)
        .join("\n");
    console.log(output);

    console.log("Areas with hungry animals:");

    let countOfAreas = Object.entries(areasWithHungryAnimals)
        .map(([area, count]) => `${area}: ${count}`)
        .join("/n");
    let resultsThere = countOfAreas.split('/n')
    for (const iterator of resultsThere) {
        let count = iterator.split(`:`)
        if(count[1] >= 1){
            console.log(iterator);
        }
    }


}

processCommands(["Add: Jamie-600-WaterfallArea",
    "Add: Maya-6570-WaterfallArea",
    "Add: Adam-4500-ByTheCreek",
    "Add: Bobbie-6570-WaterfallArea",
    "Feed: Jamie-2000",
    "Feed: Adam-2000",
    "Feed: Adam-2500",
    "EndDay"]);
