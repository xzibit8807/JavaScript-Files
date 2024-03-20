function Salery(input){
  let sum1 = Number(input[0]);
  let foodVoucher = (input[1]);
  let bonus = Number(input[2]);

  let result1 = sum1 + foodVoucher + bonus
  let result2 = result1 *0.25
  let total = result1 - result2
  let totalB = total + result2

  console.log("Total Sum: "+total+" LV");
  console.log("Tax: " +result2 +" LV");
  console.log("Total of Salery with Tax "+ totalB +" LV");
  
}

Salery(["2400","60","1000"])

