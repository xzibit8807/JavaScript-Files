/* 01. Print Characters
function printChar(input){
    for(i = 0; i < input.length; i++){
        console.log(input[i]);
    }
}
printChar('AWord'); */
/* 02. Substring
function substring(text, start, end) {
    let result = text.substring(start, start + end);
    console.log(result);
}
substring('ASentence', 1, 8); */
/* 03. Censored Words
function censoredWord(text, word) {
    let resultText = text.split(word);

    console.log(resultText.join(`*`.repeat(word.length)));
}
censoredWord('A small sentence with some words', 'small')   */
/* 04. Count String Occurrences
function countStr(text, word) {
    let newText = text.split(` `);
    let counter = 0;

    for (const wordCheck of newText) {
        if (wordCheck == word) {
            counter++;
        }
    }
    console.log(counter);
}
countStr('This is a word and it also is a sentence', 'is');  */
/* 04. Count String Occurrences
function countString(text, word) {

    //   console.log(text.split(" ").filter(x => x == word).length);
    let newText = text.split(` `);
    let textLength = newText.length;
    let count = 0;
    for (i = 0; i < textLength; i++) {
        let currentWord = newText[i];
        if(currentWord === word){
            count++;
        }
    }
    console.log(count);
}
countString('This is a word and it also is a sentence',
    'is')  */
