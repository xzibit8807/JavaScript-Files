/* 01. Sort Numbers
function sortNumbers(num1, num2, num3) {
    let numbers = [num1, num2, num3];
  
    numbers.sort(function(a, b) {
      return b - a;
    });
  
    numbers.forEach(function(number) {
      console.log(number);
    });
  }
  
sortNumbers(2, 1, 3); */
/* 02. English Name of the Last Digit
function nameOfDigit(input) {
    let num = input.toString();
    let buffer = 0;
    for (let i = 0; i < num.length; i++) {
        buffer = Number(num[i]);
    }
    switch (buffer) {
        case 1: buffer = `one`; break;
        case 2: buffer = `two`; break;
        case 3: buffer = `tree`; break;
        case 4: buffer = `four`; break;
        case 5: buffer = `five`; break;
        case 6: buffer = `six`; break;
        case 7: buffer = `seven`; break;
        case 8: buffer = `eight`; break;
        case 9: buffer = `nine`; break;
        case 0: buffer = `zero`; break;
    }
    console.log(buffer);
}

nameOfDigit(512) */
/* 03. Next Day
function dayPlusOne(year, month, day) {
    if (day === 30) {
        day = 0;
        month += 1;
    }
    if (year === 1) {
        year = 1901
    }
    day += 1;
    console.log(`${year}-${month}-${day}`);
}
dayPlusOne(2016, 9, 30); */
/* 04. Reverse String
function reverseStr(word){
    let wordInput = word.toString("");
    let reverseWord = wordInput.split("").reverse().join("");
    console.log(reverseWord);
}
reverseStr([`Hello`]); */
/* 05. Amazing Numbers
function amazingNumber(num){
    num = num.toString();
    let sum = 0;
    for(let i = 0; i <num.length; i++){
        sum += Number(num[i]);
    }
    let result = sum.toString().includes(`9`);
    console.log(result ? `${num} Amazing? True` : 
    `${num} Amazing? False`);
}
amazingNumber(999); */
/* 06. Gramophone
function gramophone(bandName,album,song){
    let time = (bandName.length * album.length) * song.length /2;

    let result = Math.ceil(time/2.5);
    console.log(`The plate was rotated ${result} times.`);
}
gramophone(['Black Sabbath', 'Paranoid',
'War Pigs']); */
/* 07. Required reading
function requiredTime(pages, pPerHour, days){
    let totalTime = (pages / pPerHour) /days;
    console.log(totalTime); 
}
requiredTime(212, 20, 2); */
/* 08. Centuries to Minutes- toFix
function centuriesToMin(centuries){
    centuries = Number(centuries);
    console.log(`${centuries} centuries = ${centuries *100} years = ${centuries *36524} days = ${centuries *876576} hours = ${centuries*52594560} minutes`);
}
centuriesToMin(5);*/
/*  01
function sumFirstAndLast(data){
    let firstElementIndex= data[0];
    let lastElementIndex = data.length -1;
    let lastNum = data[lastElementIndex];

    console.log(firstElementIndex + lastNum);
}

sumFirstAndLast([20, 30, 40]) */
/* 02
function dayOfWeek(day) {
    let dayOfWeekAsStr = ["Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"]
    let result = dayOfWeekAsStr[day - 1];

    if (result) {
        console.log(result);
    } else {
        console.log(`Invalid day!`);
    }
}  */
/* 03
function reverse(n, arr){
    let res = [];
    for(let i=0; i< n; i++){
        res.push(arr[i])       
    }
    let buff = ""
    for(let i = res.length - 1; i >=0; i--){
        buff += res[i] + " ";
    }
    console.log(buff);
}
reverse(3, [10, 20, 30, 40, 50]); */
/* 04
function lineUp(arr){
    for(i = 0; i<arr.length /2; i++){
        let currentEl = arr[i];
        let nextEl = arr[arr.length -1 -i];
        arr[i] = nextEl;
        arr[arr.length -1 -i] = currentEl;
    }
    console.log(arr.join(" "));
}
lineUp([`a`, `b`, `c`, `d`, `e`]); */
/* 05
function sum(numAsTex){
    let sum = 0;
    for(let text of numAsTex){
        let num = Number(text);
        sum += num % 2 === 0 ? num : 0;
    }
    console.log(sum); 
}
sum() */
/* 06
function evenOddSum(input){
    let even = 0;
    let odd = 0;
    for(let i = 0; i< input.length; i++){
        let buff = input[i];
        buff % 2 === 0 ? even += buff : odd += buff;
    }
    let result = even - odd;
    console.log(result);
}
evenOddSum([1,2,3,4,5,6]); */
/* 07
function equalArr(arrOne, arrTwo) {
    let total = 0;
    let same = true;
    for (let i = 0; i < arrOne.length; i++) {
        if (arrOne[i] === arrTwo[i]) {
            total += Number(arrOne[i]);
        } else {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            same = false;
            break;
        }
    }
    if (same) {
        console.log(`Arrays are identical. Sum: ${total}`);
    }
}
equalArr(['10', '20', '30'],
    ['11', '20', '30']);
/* 08
function sum(num) {
    let result = [];

    while (num.length > 1) {
        for (let i = 0; i < num.length - 1; i++) {
            result[i] = num[i] + num[i + 1]
        }
        num = result;
        result = [];
    }
    console.log(num.toString(""));
}

sum([2,10,3]) */
/* 01. Add and Subtract
function addAndSubtract(input) {
    let sumOldArr = 0;
    let newArr = 0;
    let arrLength = input.length;

    for (let index = 0; index < arrLength; index++) {
        let currentNum = Number(input[index]);
        sumOldArr += currentNum

        if (currentNum % 2 === 0) {
            currentNum += index;
        } else {
            currentNum -= index;
        }
        input[index] = currentNum;
        newArr += currentNum;
    }
    console.log(input);
    console.log(sumOldArr);
    console.log(newArr);
}
addAndSubtract([5, 15, 23, 56, 35]); */
/* 02. Common Elements
function commonElements(arr1, arr2) {

    for (let i = 0; i < arr1.length; i++) {
        let currentElement = arr1[i];
        if (arr2.includes(currentElement)) {
            console.log(currentElement);
        }
    }
}
commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],
    ['Petar', 10, 'hey', 4, 'hello', '2']); */
/* 03. Merge Arrays
function mergeArr(arr1, arr2) {
    let resultArr = [];
    let arrLength = arr1.length

    for (let i = 0; i < arrLength; i++) {
        if (i % 2 === 0) {
            resultArr[i] = Number(arr1[i]) + Number(arr2[i]);
        } else {
            resultArr[i] = arr1[i] + arr2[i];
        }
    }

    console.log(resultArr.join(` - `));
}
mergeArr(['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11']) */
/* 04. Array Rotation
function arrayRotation(arr, rotations){
    for(let i = 0; i < rotations; i++){

        let firstElement = arr.shift();
        arr.push(firstElement)
    }
    console.log(arr.join(` `));
}
arrayRotation([51, 47, 32, 61, 21], 2); */
/* 05. Max Number
function maxNumber(arr) {
    let result = ``;
    let arrLength = arr.length;

    for (let i = 1; i <= arrLength; i++) {
        let isMax = true;
        let currentNum = Number(arr[i - 1]);

        for (let j = i; j < arrLength; j++) {
            let nextNum = Number(arr[j]);

            if (nextNum >= currentNum) {
                isMax = false;
                break;
            }
        }
        if (isMax) {
            result += `${currentNum} `

        }
    }
    console.log(result);

}

maxNumber([1, 4, 3, 2]); */
/* 06. Equal Sums
function equalSums(input) {
    let leftSum = 0;
    let rightSum = 0;
    let isEqual = false;
    let arrL = input.length;
    for (let i = 0; i < arrL; i++) {
        for (let j = 0; j < arrL; j++) {
            if (i !== j) {
                let num = Number(input[j])
                if (j < i) {
                    leftSum += num;
                } else if (j > i) {
                    rightSum += num;
                }
            }
            if (i === 0) {
                leftSum = 0;
            } else if (i === arrL) {
                rightSum = 0;
            }
        }
        if (leftSum === rightSum) {
            console.log(i);
            isEqual = true;
        } else {
            leftSum = 0;
            rightSum = 0;
        }
    }
    if (!isEqual) {
        console.log(`no`);
    }
}
equalSums([1, 2, 3, 3]) */
/* 07. Max Sequence of Equal Elements
function maxSequence(arr) {
    let Sequence = 1;
    let maxSequence = 0;
    let maxSequenceNum = 0;

    for (let index = 0; index < arr.length; index++) {

        if (index !== 0) {
            let currentNum = Number(arr[index]);
            let prevNum = Number(arr[index - 1]);

            if (currentNum === prevNum) {
                Sequence++

                if (Sequence > maxSequence) {
                    maxSequence = Sequence;
                    maxSequenceNum = currentNum;

                }
            } else {
                Sequence = 1;
            }
        }
    }
    console.log(`${(maxSequenceNum + ` `).repeat(maxSequence)}`);
}
maxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);  */
/* 08. Magic Sum
function magicSum(arr, num) {

    let arrLength = arr.length;
    for (let i = 0; i < arrLength; i++) {
        if (i !== 0) {
            let currentNum = Number(arr[i - 1]);
            for (let x = i; x < arrLength; x++) {

                let nextNum = Number(arr[x]);
                let magicSum = currentNum + nextNum;

                if (magicSum === num) {
                    console.log(`${currentNum} ${nextNum}`);
                }
            }
        }
    }
}
magicSum([1, 2, 3, 4, 5, 6], 6) */
// 09. Dungeonest Dark
function dungeonestDark(input) {
    let health = 100;
    let coins = 0;

    const inputString = input.toString(`,`)
    const wordsArray = inputString.split(' ');

    console.log(wordsArray);
    //let index = input.join(`[]`);
    let index = input.join(`.`).split(``);
    let arrLength = index.length;
    for (let i = 0; i < arrLength; i + 3) {
        let roomInput1 = input[i];
        let roomInput2 = Number(input[i + 1]);

        if (roomInput1 === `chest`) {
            coins += roomInput2;
            console.log(`You found ${coins} coins.`);
        } else if (roomInput1 === `"potion`) {
            health += roomInput2;
            if (health > 100) {
                health = 100;
            }
            console.log(`You healed for ${roomInput2} hp.`);
            console.log(`Current health: ${health} hp.`);
        } else {
            health -= roomInput2;
            if (health > 0) {
                console.log(`You slayed ${roomInput1}.`);
            } else {
                console.log(`You died! Killed by ${roomInput1}.`);
            }
        }

    }
    if (health > 0) {
        console.log(`You've made it!"`);
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }

}
dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);