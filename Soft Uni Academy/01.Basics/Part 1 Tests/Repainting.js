function Repainting(input){
    let cover = Number(input[0])
    let paint = Number(input[1])
    let thinner = Number(input[2])
    let workTime = Number(input[3])

    let coverPrice = (cover +2) *1.50;
    let paintPrice = ((paint * 0.1) + paint) *14.50;
    let thinnerPrice = thinner * 5;
    let bagPrice = 0.40

    let materialsPrice = coverPrice + paintPrice + thinnerPrice + bagPrice
    let workPrice = workTime * (materialsPrice *0.3)
    let endPrice = workPrice + materialsPrice

    console.log(endPrice);
}

Repainting(["10", "11", "4", "8"])