function equipment(input){
    let yearTax = Number(input[0]);
    let snikers = yearTax - yearTax*0.4;
    let tShirt = snikers - snikers * 0.2;
    let ball = tShirt / 4;
    let accessories = ball / 5;
    
    let total = yearTax + snikers + tShirt + ball + accessories

    console.log(total);
}

equipment(["550"])