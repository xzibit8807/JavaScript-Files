/*
function specialNumbers(input){
    let number = Number(input[0]);
    let exit = ""

    for(let i = 1; i < 9; i++){
        if(number % i == 0) {
            for(let j = 1; j < 9; j++){
                if(number % j == 0){
                    for(let k = 1; k < 9; k++){
                        if(number % k == 0){
                            for(let n = 1; n < 9; n++){
                                if(number % n == 0){
                                    exit += `${i}${j}${k}${n} ` 

                                }
                            }
                        }
                    }
                }
            }
        }
    }

    console.log(exit);

}


specialNumbers([`16`]);   */
/*   05. Special Numbers
function specialNum(input) {
   let num = Number(input[0]);
   let buffer = '';

   for (let i = 1111; i <= 9999; i++) {
       let digits = i.toString().split('');
       let isSpecial = true;

       for (let j = 0; j < digits.length; j++) {
           let digit = parseInt(digits[j]);

           if (num % digit !== 0) {
               isSpecial = false;
               break;
           }
       }

       if (isSpecial) {
           buffer += i + ' ';
       }
   }

   console.log(buffer.trim());
}

specialNum(['16']); */

function sumsP(input){
    let n = Number(input[0]);
    for(let a = 1; a <= 9; a++){
        for(let b = 9;b > a; b--){
            for(let c = 0; c <= 9; c++){
                for (let d = 9; d > c; d--) {
                    if (a + b + c + d === a * b * c * d) {
                        let number = `${a}${b}${c}${d}`;
                        console.log(number); return;

                    } else if ((a * b * c * d) / (a + b + c + d) === 3 && n % 3 === 0) {
                        console.log(`${d}${c}${b}${a}`);  return;
                    }
                }
            }
        }
    }
    console.log("Nothing found");
}

sumsP(["123"]); // Очакван изход: 8191
