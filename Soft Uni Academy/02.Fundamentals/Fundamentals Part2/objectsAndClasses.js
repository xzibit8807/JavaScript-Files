/* 01. Employees
function employees(input) {
    let obj = {};

    for (const name of input) {
        obj[name] = name.length;
    }
    for (const name in obj) {

        console.log(`Name: ${name} -- Personal Number: ${obj[name]}`);
    }
}
employees(['Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal']) */
/*02. Towns
function towns(input) {

    for (const townInfo of input) {
        let [townName, latitude, longitude] = townInfo.split(` | `);
        let currentTown = {
            town: townName,
            latitude: Number(latitude).toFixed(2),
            longitude: Number(longitude).toFixed(2)
        }
        console.log(currentTown);
    }
}
towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']); */
/* 03. Store Provision
function storeProvision(firstArr, secondArr) {
    let localStoreStorage = {};

    for (let i = 0; i < firstArr.length; i += 2) {
        let product = firstArr[i];
        let quantity = Number(firstArr[i + 1]);

        localStoreStorage[product] = quantity;
    }

    for (index = 0; index < secondArr.length; index += 2) {
        let product = secondArr[index];

        if (!localStoreStorage.hasOwnProperty(product)) {
            localStoreStorage[product] = 0;
        }
        localStoreStorage[product] += Number(secondArr[index + 1]);

    }
    for (const productKey in localStoreStorage) {
        console.log(`${productKey} -> ${localStoreStorage[productKey]}`);
    }
}
storeProvision(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'], ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']); */
/* 04. Movies
function moviesObj(input) {
    let movies = [];

    input.forEach(line => {
        if (line.includes(`addMovie`)) {
            let name = line.split(`addMovie `)[1];
            movies.push({ name });
        } else if (line.includes(`directedBy`)) {
            let [name, director] = line.split(` directedBy `);
            let movie = movies.find(m => m.name === name);

            if (movie) {
                movie.director = director;
            }
        } else if (line.includes(`onDate`)) {
            let [name, date] = line.split(` onDate `)
            let movie = movies.find(m => m.name === name);

            if (movie) {
                movie.date = date;
            }
        }
    });
    movies.forEach(movie => {
        if (movie.name && movie.director && movie.date) {
            console.log(JSON.stringify(movie));
        }
    });
}

moviesObj(['addMovie Fast and Furious', 'addMovie Godfather',
    'Inception directedBy Christopher Nolan', 'Godfather directedBy Francis Ford Coppola', 'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018', 'Batman onDate 01.08.2018', 'Fast and Furious directedBy Rob Cohen']);  */
/* 05. Inventory
function inventory(input) {
    let result = [];

    for (const line of input) {
        let [name, level, items] = line.split(` / `);

        let hero = {
            name,
            level: Number(level),
            items
        };

        result.push(hero);
    }
    result.sort((a, b) => a.level - b.level);

    for (const heroObject of result) {
        console.log(`Hero: ${heroObject.name}`);
        console.log(`level => ${heroObject.level}`);
        console.log(`items => ${heroObject.items}`);
    }
}
inventory(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']);  */ 
// 06. Make a Dictionary
function myDictionary(jsonStrings){
        let dictionary = {};
      
        jsonStrings.forEach((jsonString) => {
          let obj = JSON.parse(jsonString);
          for (const term in obj) {
            dictionary[term] = obj[term];
          }
        });
      
        let sortedTerms = Object.keys(dictionary).sort();
      
        sortedTerms.forEach((term) => {
          let definition = dictionary[term];

          console.log(`Term: ${term} => Definition: ${definition}`);
        });
      }
      
myDictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}']);
    /*  07. Class Vehicle
class Vehicle{
    constructor(type, model, parts, fuel){
        this.type = type;
        this.model = model;
        this.parts = parts;
        this.fuel = fuel;
        this.parts.quality = parts.engine * parts.power;
        

    }
    drive(fuelLoss){
        this.fuel -= fuelLoss;
    }
}


let parts = { engine: 6, power: 100 };
let vehicle = new Vehicle('a', 'b', parts, 200);
vehicle.drive(100);
console.log(vehicle.fuel);
console.log(vehicle.parts.quality);  */
