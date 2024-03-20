/* 01. Print an Array with a Given Delimiter
function printArrD(input, del){

    let line = input.join(del);
    console.log(line);
}
printArrD(['One', 'Two', 'Three', 'Four', 'Five'], '-'); */
/* 02. Print every N-th Element from an Array
function printNEelements(arr, n){
    
    let newArr = [];
    for(let i = 0; i < arr.length; i += n){
            newArr.push(arr[i]);
    }
    return newArr;
}
console.log(printNEelements(['5', '20', '31', '4', '20'], 2)); */
/* 03. Add and Remove Elements
function addRemoveEl(input){
    let arr = [];
    let num = 1;

    for(let i = 0; i < input.length; i++){
        let option = input[i];
        if(option === `add`){
            arr.push(num);
        } else if( option === `remove`){
            arr.pop();
        }
        num += 1;
    }
    if(arr.length > 0){
        arr.forEach(element => {
            console.log(element);;
        });
    }else{
        console.log(`Empty`);
    }
}
addRemoveEl(['remove', 'remove', 'remove', 'remove']); */
/* 04. Rotate Array
function rotateArr(arr, n) {
    let rotator = arr;
    for (let i = 0; i < n; i++) {
        rotator = arr.pop();
        arr.unshift(rotator)
    }
    console.log(arr.join(" ").trim());
}
rotateArr(['Banana', 'Orange', 'Coconut', 'Apple'], 15); */
/* 05. Extract Increasing Subsequence from Array
function extractISA(numbers){
    let arr = numbers.join(" ").split(" ");
    let newArr = [Number(arr[0])];
    let bigestNumber = Number(arr[0]);

    for(let i = 0; i < arr.length; i++){
        let currentNum = Number(arr[i]);
        if(currentNum > bigestNumber){
            newArr.push(currentNum);
            bigestNumber = currentNum;
        }
    }
    return newArr;
}
extractISA([1, 3, 8, 4, 10, 12, 3, 2, 24]);  */
/* 05 Extract Increasing Subsequence from Array
function extractIS(data) {
    let bigestOne = Number.MIN_SAFE_INTEGER;

    return data.filter((x) => {
        if (x >= bigestOne) {
            bigestOne = x
            return true;
        }
        return false;
    })
}
console.log(extractIS([1, 3, 8, 4, 10, 12, 3, 2, 24])); */
/* 06. List Of Names
function listOfNames(names){
    names.sort((a, b) => a.localeCompare(b)).forEach((x,i) =>{
        console.log(`${i + 1}.${x}`);
    })
}
listOfNames(["John","Bob","Christina","Ema"]);  */
/* 07. Sorting Numbers
function sortNumbers(numbers) {
    let arrOne = numbers.join(" ").split(" ").sort((a, b) => a - b);
    let arrTwo = numbers.join(" ").split(" ").sort((a, b) => b - a);
    let arr = [];
    let iX = 0;
    let iZ = 0;
    for (let i = 0; i < numbers.length; i++) {
        let current = [];
        if (i % 2 == 0) {
            arr.push(arrOne[iX]);
            iX += 1;
        } else {
            arr.push(arrTwo[iZ]);
            iZ += 1;
        }
    }
    return arr;
}
console.log(sortNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])); */
/* 08. Sort an Array by 2 Criteria
function sortedTwo(data) {
    return data.sort((a, b) => {
        if (a.length !== b.length) {
            return a.length - b.length
        }
        return a.localeCompare(b);
    }).join("\n")
}
console.log(sortedTwo(['alpha', 'beta', 'gamma']));  */
// 09. Magic Matrices
function magicMatrices(data){
    for(let  row= 0; row < data.length -1; row++){
        let sumRowOne = data[row].reduce((acc, el) => acc + el);
        let sumRowTwo = data[row + 1].reduce((acc, el) => acc + el);
        let sumColOne = 0;
        let sumColTwo = 0;
        for(let col = 0; col < data.length; col++){
            sumColOne += data[row][col];
            sumColTwo += data[row +1][col];
        }
        if(sumRowOne !== sumRowTwo || sumColOne !== sumColTwo){
            console.log(false);
            return;
        }       
    }
    console.log(true);
}
magicMatrices([[4, 5, 6], [6, 5, 4], [5, 5, 5]]);
