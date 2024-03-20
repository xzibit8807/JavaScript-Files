function findNumber(input) {
    let n = Number(input);
    for (let a = 1; a <= 9; a++) {
      for (let b = 9; b >= a; b--) {
        for (let c = 0; c <= 9; c++) {
          for (let d = 9; d > c; d--) {
            const sum = a + b + c + d;
            const product = a * b * c * d;
            if (sum === product && n % 10 === 5) {
              console.log(`${a}${b}${c}${d}`);return;
            }
            let result  = Math.floor(product / sum)
            if (result == 3 && n % 3 == 0 ) {
                console.log(`${d}${c}${b}${a}`); return;
            }
          }
        }
      }
    }
    console.log("Nothing found");
  }
  
findNumber(["145"])
  