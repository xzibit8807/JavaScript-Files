//01 Computer Build
function pci(input) {
    let customerType = input[input.length - 1];
    let lastPartIndex = input.length - 2;
    let allPartsPrice = 0;

    for (let index = 0; index <= lastPartIndex; index++) {
        let partPrice = Number(input[index]);
        if (partPrice < 0) {
            console.log(`Invalid price!`);
        } else {
            allPartsPrice += partPrice;
        }

    }
    let priceAfterTaxes = allPartsPrice * 1.2;
    let taxes = priceAfterTaxes - allPartsPrice;
    if(customerType === `special`){
        priceAfterTaxes *= 0.9;
    }
    if(priceAfterTaxes === 0){
        console.log(`Invalid order!`);
    }else{
        console.log("Congratulations you've just bought a new computer!");
        console.log(`Price without taxes: ${(allPartsPrice).toFixed(2)}$`);
        console.log(`Taxes: ${(taxes).toFixed(2)}$`);
        console.log(`-----------`);
        console.log(`Total price: ${(priceAfterTaxes.toFixed(2))}$`);
    }
}
pci([`1050`, `200`, `450`, `2`, `18.50`, `16.86`, `special`]);