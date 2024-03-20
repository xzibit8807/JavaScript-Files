/* 01. Reveal Words
function realWorld(words, text){

    let wordsArr = words.split(`, `);

    for (const word of wordsArr) {

        let specialWord = `*`.repeat(word.length);
        text = text.replace(specialWord, word)
        
    }
    console.log(text);
}
realWorld('great, learning','softuni is ***** place for ******** new programming languages'); */
/* 02. Modern Times of #(HashTag)
function wordsSpecial(input) {

    let inputArray = input.split(` `);

    for (const word of inputArray) {

        if (word[0] === `#` & word.length > 1) {
            let wordsArray = word.split(``);
            wordsArray.shift();

            let wordToPrint = ``;

            for (const char of wordsArray) {
                if (!isNaN(char)) {
                    wordToPrint = ``;
                    break;
                } else {
                    wordToPrint += char;
                }
            }
            if (wordToPrint.length > 0) {
                console.log(wordToPrint);
            }
        }
    }
}
wordsSpecial('Nowadays everyone uses # to tag a #special word in #socialMedia');    */
/* 03. Extract File
function extractFile(path) {
    let lastSlashIndex = path.lastIndexOf(`\\`);
    let lastStopIndex = path.lastIndexOf(".");
    let fileName = path.substring(lastSlashIndex + 1, lastStopIndex);
    let extension = path.substring(lastStopIndex + 1);
    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${extension}`);
}
extractFile('C:\\Internal\\training-internal\\Template.pptx');  */
/* 04. String Substring
function subStr(word, text) {
    let newText = text.split(` `);

    let isNotFound = true;

    for (const element of newText) {
        if (word.toLowerCase() === element.toLowerCase()) {
            console.log(word);
            isNotFound = false;
            break;
        }
    }
    if (isNotFound) {
        console.log(`${word} not found!`);
    }
}
subStr('javascript', 'JavaScript is the best programming language');  */
/* 05. Replace Repeating Chars
function repeatingChars(text) {
    let output = ``;
    let textLenght = text.length;

    for (let i = 0; i < textLenght; i++) {
        let currentEl = text[i];
        let prevEl = text[i - 1];

        if (currentEl !== prevEl) {
            output += currentEl;
        }
    }
    console.log(output);
}
repeatingChars('aaaaabbbbbcdddeeeedssaa');  */
/* 06. Pascal-Case Splitter
function pascalCase(input) {

    let words = [];
    let index = 0;
    input += `L`;

    for (let i = 1; i <= input.length; i++) {
        if (input.charCodeAt(i) >= 65 && input.charCodeAt(i) <= 90) {
            words.push(input.substring(index, i));
            index = i;
        }

    }
    //words.push(input.substring(index, input.length));
    console.log(words.join(`, `));
} 
pascalCase('SplitMeIfYouCanHaHaYouCantOrYouCan'); */
/* 07. Cut and Reverse
function cutReverse(input){
    
    let firstHalf = input.split(``).slice(0, input.length/2).reverse().join(``)
    let secondHalf = input.split(``).slice(input.length/2).reverse().join(``)

    console.log(firstHalf);
    console.log(secondHalf);
}
cutReverse('tluciffiDsIsihTgnizamAoSsIsihT'); */
/* 08. Hard Word
function hardWords(input) {
    let text = input[0];
    let words = input[1].slice(0);

    words = words.sort((w1, w2) => w2.length - w1.length);

    for (const word of words) {
        let template = `_`.repeat(word.length);

        while (text.includes(template)) {
            text = text.replace(template, word);
        }
    }
    console.log(text);
}
hardWords(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.', ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]); */
/* 09. Password Generator
function passwordGen(text) {

    let joinedText = (text[0] + text[1]).split(``);
    let word = text[2].toUpperCase().split(``);
    let counter = 0;
    let passwordArr = [];


    for (const letter of joinedText) {
        if (letter == `a` || letter == `e` || letter == `i` || letter == `o` || letter == `u`) {
            passwordArr.push(word[counter]);
            counter++;
            if (counter > word.length - 1) {
                counter = 0;
            }
        } else {
            passwordArr.push(letter);
        }
    }
    let password = passwordArr.reverse().join(``);
    console.log(`Your generated password is ${password}`);
}
passwordGen(['ilovepizza', 'ihatevegetables', 'orange'])  */
// 10. Letters Change Numbers
function lettersCNum(input) {

    let inputArr = input.split(` `);
    //  let cArr = inputArr[0]
    let arrLength = inputArr.length;
    let result = 0;
    let endResult = 0;

    for (let i = 0; i < arrLength; i++) {

        let currentArray = inputArr[i];
        currentArray = currentArray.split(``);
        let lengthFromCurrentArray = currentArray.length;

        for (j = 0; j < lengthFromCurrentArray; j++) {
            let letter = currentArray[j];

            let firstLetter = inputArr.shift(``);
            let lastLetter = inputArr.pop(``);
            let testUpperFirst = firstLetter.toUpperCase();
            let testLowerFirst = firstLetter.toLowerCase();
            let testUpperLast = lastLetter.toUpperCase();
            let testLowerLast = lastLetter.toLowerCase();

            if (j < 2) {

                if (testUpperFirst == firstLetter) {
                    switch (testLowerFirst) {
                        case `a`: result += inputArr / 1; break;
                        case `b`: result += inputArr / 2; break;
                        case `c`: result += inputArr / 3; break;
                        case `d`: result += inputArr / 4; break;
                        case `e`: result += inputArr / 5; break;
                        case `f`: result += inputArr / 6; break;
                        case `g`: result += inputArr / 7; break;
                        case `h`: result += inputArr / 8; break;
                        case `i`: result += inputArr / 9; break;
                        case `j`: result += inputArr / 10; break;
                        case `k`: result += inputArr / 11; break;
                        case `l`: result += inputArr / 12; break;
                        case `m`: result += inputArr / 13; break;
                        case `n`: result += inputArr / 14; break;
                        case `o`: result += inputArr / 15; break;
                        case `p`: result += inputArr / 16; break;
                        case `q`: result += inputArr / 17; break;
                        case `r`: result += inputArr / 18; break;
                        case `s`: result += inputArr / 19; break;
                        case `t`: result += inputArr / 20; break;
                        case `u`: result += inputArr / 21; break;
                        case `v`: result += inputArr / 22; break;
                        case `w`: result += inputArr / 23; break;
                        case `x`: result += inputArr / 24; break;
                        case `y`: result += inputArr / 25; break;
                        case `z`: result += inputArr / 26; break;
                    }
                }
                if (testLowerFirst == firstLetter) {
                    switch (firstLetter) {
                        case `a`: result += inputArr * 1; break;
                        case `b`: result += inputArr * 2; break;
                        case `c`: result += inputArr * 3; break;
                        case `d`: result += inputArr * 4; break;
                        case `e`: result += inputArr * 5; break;
                        case `f`: result += inputArr * 6; break;
                        case `g`: result += inputArr * 7; break;
                        case `h`: result += inputArr * 8; break;
                        case `i`: result += inputArr * 9; break;
                        case `j`: result += inputArr * 10; break;
                        case `k`: result += inputArr * 11; break;
                        case `l`: result += inputArr * 12; break;
                        case `m`: result += inputArr * 13; break;
                        case `n`: result += inputArr * 14; break;
                        case `o`: result += inputArr * 15; break;
                        case `p`: result += inputArr * 16; break;
                        case `q`: result += inputArr * 17; break;
                        case `r`: result += inputArr * 18; break;
                        case `s`: result += inputArr * 19; break;
                        case `t`: result += inputArr * 20; break;
                        case `u`: result += inputArr * 21; break;
                        case `v`: result += inputArr * 22; break;
                        case `w`: result += inputArr * 23; break;
                        case `x`: result += inputArr * 24; break;
                        case `y`: result += inputArr * 25; break;
                        case `z`: result += inputArr * 26; break;
                    }
                }
            } else if (j > 1 && j < 4) {
                break;
            } else if (j > 3) {

                if (testUpperLast == lastLetter) {
                    switch (testLowerLast) {
                        case `a`: result += inputArr / 1; break;
                        case `b`: result += inputArr / 2; break;
                        case `c`: result += inputArr / 3; break;
                        case `d`: result += inputArr / 4; break;
                        case `e`: result += inputArr / 5; break;
                        case `f`: result += inputArr / 6; break;
                        case `g`: result += inputArr / 7; break;
                        case `h`: result += inputArr / 8; break;
                        case `i`: result += inputArr / 9; break;
                        case `j`: result += inputArr / 10; break;
                        case `k`: result += inputArr / 11; break;
                        case `l`: result += inputArr / 12; break;
                        case `m`: result += inputArr / 13; break;
                        case `n`: result += inputArr / 14; break;
                        case `o`: result += inputArr / 15; break;
                        case `p`: result += inputArr / 16; break;
                        case `q`: result += inputArr / 17; break;
                        case `r`: result += inputArr / 18; break;
                        case `s`: result += inputArr / 19; break;
                        case `t`: result += inputArr / 20; break;
                        case `u`: result += inputArr / 21; break;
                        case `v`: result += inputArr / 22; break;
                        case `w`: result += inputArr / 23; break;
                        case `x`: result += inputArr / 24; break;
                        case `y`: result += inputArr / 25; break;
                        case `z`: result += inputArr / 26; break;
                    }
                }
                if (testLowerLast == lastLetter) {
                    switch (lastLetter) {
                        case `a`: result += inputArr + 1; break;
                        case `b`: result += inputArr + 2; break;
                        case `c`: result += inputArr + 3; break;
                        case `d`: result += inputArr + 4; break;
                        case `e`: result += inputArr + 5; break;
                        case `f`: result += inputArr + 6; break;
                        case `g`: result += inputArr + 7; break;
                        case `h`: result += inputArr + 8; break;
                        case `i`: result += inputArr + 9; break;
                        case `j`: result += inputArr + 10; break;
                        case `k`: result += inputArr + 11; break;
                        case `l`: result += inputArr + 12; break;
                        case `m`: result += inputArr + 13; break;
                        case `n`: result += inputArr + 14; break;
                        case `o`: result += inputArr + 15; break;
                        case `p`: result += inputArr + 16; break;
                        case `q`: result += inputArr + 17; break;
                        case `r`: result += inputArr + 18; break;
                        case `s`: result += inputArr + 19; break;
                        case `t`: result += inputArr + 20; break;
                        case `u`: result += inputArr + 21; break;
                        case `v`: result += inputArr + 22; break;
                        case `w`: result += inputArr + 23; break;
                        case `x`: result += inputArr + 24; break;
                        case `y`: result += inputArr + 25; break;
                        case `z`: result += inputArr + 26; break;
                    }
                }
            }
        }




        endResult += result;
    }
    console.log(endResult);

}
lettersCNum('A12b s17G')