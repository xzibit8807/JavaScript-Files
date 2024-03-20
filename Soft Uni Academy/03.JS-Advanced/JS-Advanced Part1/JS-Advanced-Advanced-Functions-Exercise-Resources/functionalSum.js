function functionalSum(data){
    let input = data.split("");
    let sum = 0;
    for(let el of input){
        typeof(el) === Number ? sum+= el : el = 0;
    }
    console.log(sum);
}
functionalSum(add(1)(6)(-3)); //to do...