/*  01. Sum First and Last
function sumFirstLast(arr){

    if(arr.length === 1){
        return console.log(Number(arr.toString()));
    }
   // let sum = Number(arr[0]) + Number(arr(arr.length -1));
    let sum = Number(arr.shift()) + Number(arr.pop());
    console.log(sum);
}
sumFirstLast(['20', '30', '40']);   */
/* 02. Negative or Positive Numbers
function negativePositive(arr) {
    let myArr = [];

    for (let el of arr) {
        el = Number(el);
        if (el < 0) {
            myArr.unshift(el);
        } else {
            myArr.push(el);
        }
    }
    console.log(myArr.join("\n"));
}
negativePositive(['7', '-2', '8', '9']);  */
/* 03. First and Last K Numbers
function firstLastK(data){
    let k = data.shift();
    let firstK = data.slice(0,k);
    let lastK = data.slice( - k);
    console.log(firstK.join(" "));
    console.log(lastK.join(" "));
}
firstLastK([2, 7, 8, 9]);     */
/* 04. Last K Numbers Sequence
function lastKNS(n, k) {
    let arr = [1];

    while (n > arr.length) {
        let kArr = arr.slice(-k);
        let sum = 0;

        for (let i = 0; i < kArr.length; i++) {
            sum += kArr[i];
        }
        arr.push(sum);
    }
    console.log(arr.join(` `));
}
lastKNS(6, 3);   */
/* 05. Process Odd Numbers
function processOddNumbers(data){
    let oddNumbersArr = data.filter((el, i) => i % 2 !== 0);
    let doubledArr = oddNumbersArr.map(x => x *2);

    console.log(doubledArr.reverse().join(" "));

    return data.filter((el, index) => index % 2 !==0).map(x => x*2).reverse().join(" ");
}
processOddNumbers([10, 15, 20, 25] ); */
/* 06. Smallest Two Numbers
function smallestNum(data) {

    return data.sort((a, b) => a - b).splice(0, 2).join(" ");

}
console.log(smallestNum([30, 15, 50, 5]));    */
/* 07. List Of Products
function listOfProducts(arr) {

    //   let newArr = arr.sort((a, b) => a.localeCompare(b));
    let newArr = arr.sort();
    let current = ``;
    let counter = 0;
    for (let i = 0; i < arr.length; i++) {
        current = newArr[i];
        counter++;
        console.log(`${counter}.${current}`);
    }
}
listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples']); */
/* 08. Array Manipulations
function arrManipulations(input) {
    let numbers = input.shift().split(' ').map(Number);
  
    for (let i = 0; i < input.length; i++) {
      let [command, value, index] = input[i].split(' ');
  
      if (command === 'Add') {
        numbers.push(Number(value));
      } else if (command === 'Remove') {
        numbers = numbers.filter(num => num !== Number(value));
      } else if (command === 'RemoveAt') {
        numbers.splice(Number(value), 1);
      } else if (command === 'Insert') {
        numbers.splice(Number(index), 0, Number(value));
      }
    }
  
    console.log(numbers.join(' '));
  }
arrManipulations(['4 19 2 53 6 43',
'Add 3',
'Remove 2',
'RemoveAt 1',
'Insert 8 3']
);              */
/* Bomb Numbers
function detonateSequence(sequence, bomb) {
    let [bombNumber, bombPower] = bomb;
    let result = sequence.slice();

    while (result.includes(bombNumber)) {
        let bombIndex = result.indexOf(bombNumber);
        let leftBound = Math.max(bombIndex - bombPower, 0);
        let rightBound = Math.min(bombIndex + bombPower, result.length - 1);

        result.splice(leftBound, rightBound - leftBound + 1);
    }

    return result.reduce((sum, num) => sum + num, 0);
}

console.log(detonateSequence([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1])); */

