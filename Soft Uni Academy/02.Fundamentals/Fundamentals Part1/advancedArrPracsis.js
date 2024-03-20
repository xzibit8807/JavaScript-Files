/* 01. Train
function train(arr) {

    let wagons = arr[0].split(` `).map(Number);
    let wagonCapacity = Number(arr[1]);

    for (let i = 2; i < arr.length; i++) {
        let command = arr[i].split(` `);

        if (command[0] === `Add`) {
            wagons.push(Number(command[1]));
        } else {
            let passengers = Number(command[0]);

            for (let cw = 0; cw < wagons.length; cw++) {

                if (wagonCapacity - wagons[cw] >= passengers) {
                    wagons[cw] += passengers;
                    break;
                }
            }
        }
    }
    console.log(wagons.join(` `));
}
train(['32 54 21 12 4 0 23','75',
    'Add 10','Add 0','30','10', '75'])  */
/* 02. Distinct Array
function distinctArr(arr){
    let resultArr = [];

    for(let num of arr){
        if(!resultArr.includes(num)){
            resultArr.push(num);
        }
    }
    console.log(resultArr.join(` `));
}
distinctArr([7, 8, 9, 7, 2, 3, 4, 1, 2]);  */
/* 03. House Party
function houseParty(input) {
    let partyList = [];

    for (let person of input) {

        let details = person.split(` `);
        let name = details[0];

        if (details.includes(`not`)) {

            if (partyList.includes(name)) {
                let nameIndex = partyList.indexOf(name);

                if (nameIndex !== -1) {
                    partyList.splice(nameIndex, 1);

                }
            }else{
                console.log(`${name} is not in the list!`);
            }
        } else {
            if (partyList.includes(name)) {
                console.log(`${name} is already in the list!`);
            } else {
                partyList.push(name);
            }
        }
    }
    partyList.forEach(person => console.log(person));
}
houseParty(['Allie is going!',
    'George is going!', 'John is not going!', 'George is not going!']);  */
/* 04. Sorting
function sortNums(input) {

    let sortedArr = input.sort((a, b) => b - a);
    let resultArr = [];
    let arrLength = input.length;

    for (let i = 0; i < arrLength / 2; i++) {
        let currentNum = sortedArr.shift();
        let lastNUm = sortedArr.pop();
        resultArr.push(currentNum);
        resultArr.push(lastNUm);
    }

    console.log(resultArr.join(` `));
}
sortNums([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]); */
/* 05. Sort an Array by 2 Criteria
function sortAtArr(input) {

    //   let sorted = input.sort((a, b) => {
    //       if (a.length !== b.length) {
    //           return a.length - b.length;
    //       }
    //       return a.localeCompare(b);
    //   });
    let sortedArr = input.sort((a, b) => {
        return a.length - b.length || a.localeCompare(b);
    })

    console.log(sortedArr.join(`\n`));
}
sortAtArr(['alpha','beta','gamma']);     */
/*  06. Bomb Numbers
function bomb(arr, bombExplosion) {

    let bomb = Number(bombExplosion.shift());
    let damage = Number(bombExplosion.shift());
    let currentArr = arr.slice().map(Number);
    let indexOfBomb = arr.indexOf(bomb);
    let bomber = arr.includes(bomb);
    while (bomber) {
        currentArr.splice(indexOfBomb - damage, damage * 2 + 1);
        indexOfBomb = currentArr.indexOf(bomb)
        bomber = currentArr.includes(bomb);
    }

    let newArrLength = currentArr.length;
    let buffer = 0;
    for (i = 0; i < newArrLength; i++) {
        buffer += Number(currentArr[i]);
    }
    console.log(buffer);
}
//bomb([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);  
//console.log(`--------------------------------`);
//bomb([1, 4, 4, 2, 8, 9,1],[9, 3]);
//console.log(`--------------------------------`);
bomb([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);   */
/* 07. Search for a Number
function searchForNum(numbersArr,commandsArr){
    let numsToTake = commandsArr[0];
    let numsToDelete = commandsArr[1];
    let searchedNum = commandsArr[2];

    let newArr = numbersArr.slice(0,numsToTake);

    newArr.splice(0,numsToDelete);

    let numberCounter = newArr.filter(e => e === searchedNum).length;

    console.log(`Number ${searchedNum} occurs ${numberCounter} times.`);
}
searchForNum([5, 2, 3, 4, 1, 6],[5, 2, 3]); */
/* 01 Black FLag
function blackFlag(input) {
    let days = Number(input[0]);
    let dailyPlunder = Number(input[1]);
    let target = Number(input[2]);
    let current = 0;

    for (let i = 1; i <= days; i++) {
        current += dailyPlunder;
        if (i % 3 == 0) {
            current += dailyPlunder * 0.5
        }
        if (i % 5 == 0) {
            current *= 0.7
        }
    }
    if (current >= target) {
        console.log(`Ahoy! ${current.toFixed(2)} plunder gained.`);
    } else {
        let percentage = current / target * 100;
        console.log(`Collected only ${percentage.toFixed(2)}% of the plunder.`);
    }
}
blackFlag([`5`, `40`, `100`]);    */
/* 02. Shopping List
function shoppingList(data) {
    let list = data.shift().split("!");
    let index = 0;
    let command = data[index];

    while (command !== "Go Shopping!") {
        let [tokens, item, newItem] = command.split(" ");
        switch (tokens) {
            case `Urgent`:
                if (!list.includes(item)) {
                    list.unshift(item);
                }
                break;
            case `Unnecessary`:
                if (list.includes(item)) {
                    list.splice(list.indexOf(item), 1);
                }
                break;
            case `Correct`:
                let indexOfElement = list.indexOf(item);
                if (indexOfElement > -1) {
                    list[indexOfElement] = newItem;
                }
                break;
            case `Rearrange`:
            if(list.includes(item)){
                let currentItem = list.splice(list.indexOf(item),1);
                list.push(currentItem[0]);
            }    
            break;
        }
        command = data[index];
        index++;
    }
    console.log(list.join(`, `));
}
shoppingList((["Tomatoes!Potatoes!Bread",
    "Unnecessary Milk",
    "Urgent Tomatoes", "Go Shopping!"])
);    */
/* 03. Moving Target
function movingTarget(data) {
    let target = data.shift().split(` `).map(Number);
    let index = 0;
    let command = data[index];
    index++;

    while (command !== "End") {
        let [tokens, targets, power] = command.split(" ");
        targets = Number(targets);
        power = Number(power)

        switch (tokens) {
            case "Shoot":
                if (targets >= 0 && targets < target.length) {
                    target[targets] -= power;
                    if (target[targets] <= 0) {
                        target.splice(targets, 1);
                    }
                }
                break;
            case "Add":
                if (targets >= 0 && targets < target.length) {
                    target.splice(targets, 0, power);
                } else {
                    console.log(`Invalid placement!`);
                }
                break;
            case "Strike":
                if (targets - power >= 0 && power + targets < target.length) {
                    target.splice(targets - power, power * 2 + 1)
                } else {
                    console.log(`Strike missed!`);
                }
                break;
        }
        command = data[index];
        index++;
    }
    console.log(target.join(`|`));
}
movingTarget(["52 74 23 44 96 110", "Shoot 5 10", "Shoot 1 80",
    "Strike 2 1", "Add 22 3", "End"]);  */
/*  Mid exam Preparations 01. SoftUni Reception
function reception(input) {
    let employeeOne = Number(input.shift());
    let employeeTwo = Number(input.shift());
    let employeeThree = Number(input.shift());
    let students = Number(input.shift());

    let answersPerHouer = employeeOne + employeeTwo + employeeThree;

    let neededHours = 0;

    while (students > 0) {
        neededHours++;
        students -= answersPerHouer;

        if (neededHours % 4 === 0) {
            neededHours++;
        }
    }
    console.log(`Time needed: ${neededHours}h.`);
}
reception(['5', '6', '4', '20']);  */
/* Problem 2. Array Modifier
function arrayModifier(arr) {
    let arrayOfNumbers = arr.shift().split(" ").map(Number);
    let arrLength = arr.length;


    for (let index = 0; index < arrLength; index++) {
        let currentCommand = arr[index].split(" ");
        let command = currentCommand.shift();
        let indexOne = Number(currentCommand.shift());
        let indexTwo = Number(currentCommand.shift());
        // let [command,indexOne,indexTwo] = arr[index].split(' ');



        switch (command) {
            case "swap":
                let temp = arrayOfNumbers[indexOne];
                arrayOfNumbers[indexOne] = arrayOfNumbers[indexTwo];
                arrayOfNumbers[indexTwo] = temp;
                break;
            case "multiply":
                let result = arrayOfNumbers[indexOne] * arrayOfNumbers[indexTwo];
                arrayOfNumbers[indexOne] = result;
                break;
            case "decrease":
                arrayOfNumbers = arrayOfNumbers.map(n => n - 1);
                break;
            case "end":
                break;
        }

    }

    console.log(arrayOfNumbers.join(', '));

}

arrayModifier([
    '23 -2 321 87 42 90 -123',
    'swap 1 3', 'swap 3 6', 'swap 1 0',
    'multiply 1 2', 'multiply 2 1', 'decrease', 'end']);  */
/*  03. Heart Delivery
function examPrep(arr) {

    let firstLine = arr.shift().split('@');
    let nextLine = arr.shift();
    let total = 0;

    while (nextLine !== 'Love!') {
        let result = nextLine.split(' ');
        total += Number(result[1]);

        if (total > firstLine.length - 1) {
            total = 0;
        }

        if (firstLine[total] === 0) {
            console.log(`Place ${total} already had Valentine's day.`);
        } else {
            firstLine[total] = firstLine[total] - 2;
            if (firstLine[total] === 0) {
                console.log(`Place ${total} has Valentine's day.`);

            }
        }
        nextLine = arr.shift();

    }

    console.log(`Cupid's last position was ${total}.`);

    let resultArr = [];
    let resultFlag = true;

    firstLine.forEach(element => {
        if (element !== 0) {
            resultFlag = false;
            resultArr.push(element);
        }
    });

    if (resultFlag) {
        console.log('Mission was successful.');
    } else {
        console.log(`Cupid has failed ${resultArr.length} places.`);
    }

}
examPrep(["10@10@10@2","Jump 1","Jump 2","Love!"]);  */

