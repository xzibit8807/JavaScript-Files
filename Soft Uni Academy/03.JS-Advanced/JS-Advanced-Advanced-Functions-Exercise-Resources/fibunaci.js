function getFibonator(){
    let firstNum = 0;
    let secondNum = 1;

    function fibunaci(){
        let res = firstNum + secondNum;
        firstNum = secondNum;
        secondNum = res;
        return firstNum;
    }
    return fibunaci
}
let fib = getFibonator();

console.log(fib()); // 1

console.log(fib()); // 1

console.log(fib()); // 2

console.log(fib()); // 3

console.log(fib()); // 5

console.log(fib()); // 8

console.log(fib()); // 13