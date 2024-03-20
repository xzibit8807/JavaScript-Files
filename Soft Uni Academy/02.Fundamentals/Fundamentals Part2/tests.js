/* 01. Password Reset
function passwordReset(input) {
    let password = input.shift();

    let commandParser = {
        'TakeOdd': (password) => {

            return [...password]
                .filter((symbol, index) => index % 2 !== 0)
                .join('');
        },
        'Cut': (password, index, length) => {

            index = Number(index);
            length = Number(length);

            let substring = password.substr(index, length);

            return password.replace(substring, '');

        },
        'Substitute': (password, substring, substitute) => {
            if (password.includes(substring)) {
                return password.replace(new RegExp(substring, 'g'), substitute);
            }
            console.log("Nothing to replace!");
            return password;

        }
    };

    input.forEach(line => {
        if (line !== 'Done') {
            let [command, ...tokens] = line.split(' ');
            let oldPassword = password;

            password = commandParser[command](password, ...tokens);

            if (oldPassword !== password) {
                console.log(password);
            }
        }
    });

    console.log(`Your password is: ${password}`);

}
passwordReset(["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
    "TakeOdd", "Cut 15 3",
    "Substitute :: -", "Substitute | ^", "Done"]);  */

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
                    animals +={
                        animalName,
                        neededFood,
                        area
                    };
                    if (!areasWithHungryAnimals[area]) {
                        areasWithHungryAnimals[area] = 1;
                    } else {
                        areasWithHungryAnimals[area]++;
                    }
                } else {
                    animals[animalName] += neededFood;
                }

                break;

            case "Feed":
                let food = Number(foodData);
                if (animals[animalName]) {
                    animals[animalName] -= food;
                    if (animals[animalName] <= 0) {
                        console.log(`${animalName} was successfully fed`);
                        delete animals[animalName];
                        areasWithHungryAnimals[area]-= 1;
                    }
                }
                break;
        }
    }



    let entrys = Object.entries(animals)
        .map(([name, food]) => `${name} -> ${food}g :`)
        .join(" ");
    let output = entrys.split(':')

    console.log(`Animals:`);

    for (const iterator of output) {
        if (iterator.length > 3) {
            console.log(` ${iterator.trim()}`);
        }
    }
    console.log(`Areas with hungry animals:`);
    let countOfAreas = Object.entries(areasWithHungryAnimals)
        .map(([area, count]) => console.log(`${area}: ${count}`));

}

processCommands(["Add: Jamie-600-WaterfallArea",
"Add: Maya-6570-WaterfallArea",
"Add: Adam-4500-ByTheCreek",
"Add: Bobbie-6570-WaterfallArea",
"Feed: Jamie-2000",
"Feed: Adam-2000",
"Feed: Adam-2500",
"EndDay"]);