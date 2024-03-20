/* 01. Calorie Object
function calorieObj(data){
    let res = {};
    for(let i = 0; i < data.length; i += 2){
        let key = data[i];
        let value = data[i +1];
        res[key] = Number(value);
    }
    console.log(res);
}
calorieObj(['Yoghurt', '48', 'Rise', '138','Apple', '52']) */
/* 02. Construction Crew
function constCrew(obj){
    if(obj.dizziness == true){
        let weight = Number(obj.weight) / 10;
        let exp = Number(obj.experience);
        let res = weight * exp;
        obj.levelOfHydrated += res;
        obj.dizziness = false;
    }
    return obj;
}
console.log(constCrew({ weight: 80, experience: 1, levelOfHydrated: 0, dizziness: true })); */
/* 03. Car Factory  -?
function carFactory(data) {
    let model = data.model;
    let power = data.power;
    let color = data.color;
    let carriage = data.carriage;
    let wheelsize = data.wheelsize;

    let res = {};
    let engineEnum = {
        "Small engine": { power: 90, volume: 1800 },
        "Normal engine": { power: 120, volume: 2400 },
        "Monster engine": { power: 200, volume: 3500 }
    };
    let carriageEnum = {
        "hatchback": { type: 'hatchback', color },
          "coupe": { type: 'coupe', color }
    };
    res.model = model;

    if (power <= 90) {
        res.engine = engineEnum["Small engine"];
    } else if (power <= 120) {
        res.engine = engineEnum["Normal engine"];
    } else {
        res.engine = engineEnum["Monster engine"];
    };

    res.carriage = carriageEnum[carriage];

    if (wheelsize % 2 === 0) {
        wheelsize -= 1;
    };
    res.wheelsize = new Array(4).fill(wheelsize);
    return res;
}

console.table(carFactory({
    model: 'VW Golf II', power: 90,
    color: 'blue', carriage: 'hatchback', wheelsize: 14
}));     */
/* 03 Car Factory V2
function carFactory(car) {
    return {
        model: car.model,
        engine: {
            power: car.power <= 90 ? 90 : car.power <= 120 ? 120 : 200,
            volume: car.power <= 90 ? 1800 : car.power <= 120 ? 2400 : 3500,
        },
        carriage: {
            type: car.carriage,
            color: car.color,
        },
        wheels: new Array(4)
                    .fill(car.wheelsize % 2 === 0
                    ? car.wheelsize - 1
                    : car.wheelsize),
    };
}     */
/* 04. Heroic Inventory
function heroicInventory(input){
    let result = [];
    for (let iterator of input){
        let [name, level, items] = iterator.split(` / `);
        level = Number(level);
        items = items ? items.split(`, `) : [];
        result.push({name, level, items});
    }
    console.log(JSON.stringify(result));
}   */
/* 05. Lowest Prices in Cities - OBJECTS !!!
function lowestPriceCity(data){
    let res = {};
    data.forEach(element => {
        let [town, product, price] = element.split(` | `);
        price = Number(price);

        if(!res.hasOwnProperty(product)){
            res[product] = {};
        }
        if(res[product]["price"] === undefined || res[product]["price"] > price){
            res[product]["town"] = town;
            res[product]["price"] = price;
        }
       
    });
    for(let [product, productData] of Object.entries(res)){
        console.log(`${product} -> ${productData.price} (${productData.town})`);
    }
}
lowestPriceCity(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2', 'Sample Town | Peach | 1', 'Sofia | Orange | 3',
'Sofia | Peach | 2', 'New York | Sample Product | 1000.1', 'New York | Burger | 10']);  */
// 06. Store Catalogue

// 
/* 10. Heroes
function heroes(input) {
    let canCast = (state) => ({
        cast: (spell) => {
            console.log(`${state.name} cast ${spell}`);
            state.mana--;
        }
    })
    let canFighth = (state) => ({
        fight: () => {
            console.log(`${state.name} slashes at the foe!`);
            state.stamina--;
        }
    })

    let fighter = (name) => {
        let state = {
            name,
            health: 100,
            stamina: 100
        }
        return Object.assign(state, canFighth(state));
    }
    let mage = (name) => {
        let state = {
            name,
            health: 100,
            mana: 100
        }
        return Object.assign(state, canCast(state));
    }
    return {mage:mage,fighter: fighter}
}  */
/* 11. Jan's Notation * 
function calculator(input){

    let operationEnum = {
        "+": (a,b) => a + b,
        "-": (a,b) => a - b,
        "*": (a,b) => a * b,
        "/": (a,b) => a / b,
    }
    let result = [];
    let numbers = [];
    let operators = [];

    for(let el of input){
        if(typeof(el) === "number"){
            numbers.push(el);
        }else{
            operators.push(el);
        }
    }
    if(numbers.length <= operators.length){
        console.log("Error: not enough operands!");
        return;
    }else if(operators.length === 0 || numbers.length -1 > operators.length){
        console.log("Error: too many operands!");
        return;
    }

    for(let el of input){
        if(typeof(el) === "number"){
            result.push(el)
        }else{
            let numB = result.pop();
            let numA = result.pop();
            let res = operationEnum[el](numA, numB);
            result.push(res);            
        }

    }
    console.log(result.join(``));
}
calculator([31, 2, "+", 11, "/"]);  */
