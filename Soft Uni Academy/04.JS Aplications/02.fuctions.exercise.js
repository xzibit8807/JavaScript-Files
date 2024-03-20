/*01. Smallest of Three Numbers 
function smallest(numOne,numTwo,numTree){
    let result = Math.min(numOne,numTwo,numTree);
    console.log(result);
}
smallest(2,5,55); */
/* 02. Add and Subtract
function sums(numOne, numTwo, numTree) {
    function sum(numOne, numTwo) {
        return numOne + numTwo;
    }
    let result = sum(numOne, numTwo);

    function subtract(result, numTree) {
        return result - numTree;
    }
    return subtract(result, numTree);
}
console.log(sums(5, 3, 2));  */
/* 03. Characters in Range
function chars(firstChar, secondChar) {
    let startChar = Math.min(firstChar.charCodeAt(), secondChar.charCodeAt());
    let endChar = Math.max(firstChar.charCodeAt(), secondChar.charCodeAt());

    let charArr = [];

    for (let current = startChar + 1; current < endChar; current++) {
        charArr.push(String.fromCharCode(current));
    }
    return charArr.join(` `);

}

console.log(chars(`a`, `b`)); */
/*04. Odd And Even Sum
function oddAndEven(number) {

    let numAsString = number.toString();

    let oddSum = 0;
    let evenSum = 0;
    let numberAsStrLength = numAsString.length;

    for (let i = 0; i < numberAsStrLength; i++) {
        let currentNum = Number(numAsString[i]);

        if (currentNum % 2 === 0) {
            evenSum += currentNum;
        } else {
            oddSum += currentNum;
        }
    }
    return `Odd sum = ${oddSum}, Even sum = ${evenSum}`
} */
/* 05. Palindrome Integers
function palindrome(arr) {
    for (let i = 0; i < arr.length; i++) {
        let numAsString = arr[i].toString();
        let reversedNum = numAsString.split(``).reverse().join(``);

        if (numAsString === reversedNum) {
            console.log(true);
        } else {
            console.log(false);
        }
    }
}
console.log(palindrome([123, 323, 421, 121]));  */
/* 06. Password Validator
function passwordValidator(password) {

    let isValidPass = true;
    let isInvalidLength = password.length < 6 || password.length > 10;

    if (isInvalidLength) {
        isValidPass = false;
        console.log("Password must be between 6 and 10 characters");
    }

    let isOnlyLettersAndDigits = true;
    let digitsCounter = 0;

    for (let index = 0; index < password.length; index++) {
        let currentCode = password.charCodeAt(index);
        let isNotNumber = currentCode < 48 || currentCode > 57;
        let isNumber = currentCode >= 48 && currentCode <= 57;
        let isNotSmallLetter = currentCode < 97 || currentCode > 122;
        let isNotBigLetter = currentCode < 65 || currentCode > 90;

        if (isNumber) {
            digitsCounter++;
        }

        if (isNotNumber && isNotSmallLetter && isNotBigLetter) {
            isValidPass = false;
            isOnlyLettersAndDigits = false;
        }
    }
    if (!isOnlyLettersAndDigits) {
        console.log("Password must consist only of letters and digits");
    }
    if (!(digitsCounter >= 2)) {
        isValidPass = false;
        console.log("Password must have at least 2 digits");
    }

    if (isValidPass) {
        console.log('Password is valid');
    }

}
passwordValidator('Picture');
//passwordValidator(`logIn`); */
/* 07. NxN Matrix
function matrix(num) {
    function rowGenerator() {
        let row = ``;
        for (let j = 1; j <= num; j++) {
            row += `${num} `;
        }
        return row;
    }

    for (let i = 1; i <= num; i++) {

        console.log(rowGenerator());
    }

}
matrix(3);  */
/* 08. Perfect Number
function perfectNum(number) {

    let sum = 0;
    for (let i = 1; i <= number / 2; i++) {
        if (number % i === 0) {
            sum += i;
        }
    }
    if (sum === number && number !== 1) {
        console.log(`We have a perfect number!`);
    } else {
        console.log("It's not so perfect.");
    }
}
perfectNum(6);  */
/* 09. Loading Bar
function loadingBar(number){

    let percentCounter = number / 10;
    let dotCounter = 10 - percentCounter;

    if(percentCounter === 10){
        console.log(`100% Complete!`);
    }else{
        console.log(`${number}% [${`%`.repeat(percentCounter)}${`.`.repeat(dotCounter)}]`);
        console.log(`Still loading...`);
    }
}
loadingBar(30); */
/* 10. Factorial Division
function factorials(firstNum,secondNum){
    function factor(number){
        if(number === 0){
            return 1;
        }else{
            return number * factor(number - 1);
        }
    }
    let firstNumFactor = factor(firstNum);
    let secondNumFactor = factor(secondNum);
    let result = firstNumFactor / secondNumFactor;
    console.log(result.toFixed(2));
}
factorials(5,2);   */
/* 09  specialNumbers  - Data Types and Variables - Lab
function specialNumbers(num) {
    let result = ``;

    for (let i = 1; i <= num; i++) {
        let buffer = '';
        result = i;

        if (result > 9) {
            let numAsString = result.toString();
            let numOne = Number(numAsString[0]);
            let numTwo = Number(numAsString[1]);
            result = numOne + numTwo;
        }
        if (result === 5 || result === 7 || result === 11) {
            buffer = `${i} -> True`;
        } else {
            buffer = `${i} -> False`;
        }
        console.log(buffer);
    }
}

specialNumbers(20) */
/* 10. Triples of Latin Letters - Data Types and Variables - Lab
function latinLetters(n) {

    let endLetter = 97 + Number(n);
    let startLetter = 97;

    for (x = startLetter; x < endLetter; x++) {
        for (let i = startLetter; i < endLetter; i++) {
            for (let j = startLetter; j < endLetter; j++) {
                console.log(String.fromCharCode(x) + String.fromCharCode(i) + String.fromCharCode(j));
            }
        }
    }
}
latinLetters(`3`); */
/* 01. Print N-th Element  * Arrays - More Exercise
function printN(input) {
    let arrLength = input.length;
    let n = 0;
    let buffer = ``;

    for (i = 0; i < arrLength; i++) {
        n = input[i];
    }
    n = Number(n);
    for (let j = 0; j < arrLength - 1; j++) {

        if (j === 0) {
            buffer += `${input[j]} `;
        }
        else if (j === n) {
            buffer += `${input[j]} `;
            n += n;
        }
    }
    console.log(buffer);
}
printN(['5', '20', '31', '4', '20', '2']);   */
/* 02. Add and Remove
function rotateArray(input) {

    let buffer = ``;
    let arrLength = input.length;
    let num = 1;
    let counter = 0;

    for (let i = 0; i < arrLength; i++) {
        let = currentCommand = input[i];
        let nextCommand = input[i +1];
        if (currentCommand === `add` && nextCommand !== `remove`) {
            buffer += `${num} `;
            counter++;
        }
        num++;
    }
    if (counter === 0){
        buffer = `Empty`;
    }
    console.log(buffer);
}
rotateArray(['remove', 'remove', 'remove'] );  */
/* 02. 03. Rotate Array
function rotateArray(input) {
    let lastElement = Number(input.pop());

    for (let i = 0; i < lastElement; i++) {

        let firstElement = input.pop();
        input.unshift(firstElement);
    }

    console.log(input.join(` `));

}
//rotateArray(['1', '2', '3', '4', '2']);
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15']);   */
/* 04. Non-Decreasing Subset
function nonDecreasingSub(arr) {
    let highestNum = -9999;
    let buffer = ``;
    let counter = 0;
    let current = ``;
    for (let i = 0; i < arr.length; i++) {
        currentNum = arr[i];
        if (currentNum > highestNum) {
            highestNum = currentNum;
            buffer += `${highestNum} `;
            counter++;
        }
    } if (counter > 0) {
        console.log(buffer);
    } else {
        console.log(currentNum);
    }
}
nonDecreasingSub([-399999999]);   */
/* 05. Tseam Account
function tseamAcc(arr) {
    let accList = arr.shift().split(` `);
    let index = 0;
    let currentCommand = arr[index];
    index++;

    while (currentCommand !== "Play!") {
        let [command, game] = currentCommand.split(` `);
        switch (command) {
            case `Install`:
                if (accList.includes(game)) {
                    break;
                } else {
                    accList.push(game);
                }
                break;
            case `Uninstall`:
                if (accList.includes(game)) {
                    let idexToDelete = accList.indexOf(game);
                    accList.splice(idexToDelete, 1);
                }
                break;
            case `Update`:
                if (accList.includes(game)) {
                    let indexOfGame = accList.indexOf(game);
                    let buffer = accList.splice(indexOfGame, 1).toString(``);
                    accList.push(buffer);
                }
                break;
            case `Expansion`:
                let [game2, expansion] = game.split(`-`);
                if (accList.includes(game2)) {
                    let indexOfGame = accList.indexOf(game2);
                    //  let buffer = accList.slice(indexOfGame, 1);
                    let update = `${game2}:${expansion}`;
                    accList.splice(indexOfGame + 1, 0, update);
                }

                break;
        }
        currentCommand = arr[index];
        index++;
    }
    console.log(accList.join(` `));
}
tseamAcc(['CS WoW Diablo', 'Install LoL', 'Uninstall WoW',
    'Update Diablo', 'Expansion CS-Go', 'Play!']);         */
/* 06. Magic Matrices
function matrices(arr) {
    let areEqual = true;
    let arrLength = arr.length;
    let result = 0;
    let nextResult = 0;

    for (let i = 0; i < arrLength; i++) {
        let [numberOne, numberTwo, numberTree] = arr.shift();
        result = numberOne + numberTwo + numberTree;
        if (i > 0) {
            if (result !== nextResult) {
                areEqual = false;
                return areEqual;
            }
        }
        nextResult = result;
    }
    return areEqual;
}
console.log(matrices([[11, 32, 45], [21, 0, 1], [21, 1, 1]]));  */
function focused(){
    const sectionElement = document.querySelectorAll("div div");
    const inputFileds = document.getElementsByTagName("input");
    const inputFieldsArr = Array.from(inputFileds);

    inputFieldsArr.forEach(element => {
        input.addEventListener("focus", inputFocus);
        input.addEventListener(`blur`, inputBlur);
    })

    function inputFocus(e){
        const sectionElement = e.target.parentNode;
        sectionElement.className = `focused`;
    }

    function inputBlur(){
        const sectionElement = e.target.parentNode;
        sectionElement.className = ``;
    }
}
