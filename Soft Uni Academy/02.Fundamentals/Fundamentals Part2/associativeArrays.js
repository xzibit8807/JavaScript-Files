/* 01. Phone Book
function phoneBookCreate(data) {
    let phoneBook = {};
    for (let el of data) {
        let [name, number] = el.split(" ");
        phoneBook[name] = number;
    }

    for (let key in phoneBook) {
        console.log(`${key} -> ${phoneBook[key]}`);
    }
}
phoneBookCreate(['Tim 0834212554', 'Peter 0877547887', 'Bill 0896543112', 'Tim 0876566344']);  */
/* 02. Meetings
function meetings(data) {
    let result = {};

    for (let el of data) {
        let [day, name] = el.split(" ");
        if (result.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`);
        } else {
            result[day] = name;
            console.log(`Scheduled for ${day}`);
        }
    }
    for(let [key, value] of Object.entries(result)){
        console.log(`${key} -> ${value}`);
    }
}
meetings(['Monday Peter', 'Wednesday Bill', 'Monday Tim', 'Friday Tim']); */
/* 03. Address Book
function addressBookSort(input) {
    let book = {};

    for (let el of input) {
        let [name, address] = el.split(":");
        book[name] = address;
    }
    let entries = Object.entries(book).sort(([keyA, valueA], [keyB, valueB]) => keyA.localeCompare(keyB));

    for (let [key, value] of entries) {
        console.log(`${key} -> ${value}`);
    }
}
addressBookSort(['Tim:Doe Crossing',
'Bill:Nelson Place','Peter:Carlyle Ave','Bill:Ornery Rd']); */
/* 04. Storage
function storage(data) {
    let result = {};

    for (let el of data) {
        let [product, count] = el.split(" ");
        if (!result.hasOwnProperty(product)) {
            result[product] = 0;
        }
        result[product] += Number(count);
    }

    for (let [key, value] of Object.entries(result)) {
        console.log(`${key} -> ${value}`);
    }
}
storage(['apple 50',
'apple 61',
'coffee 115',
'coffee 40']);  */
/* 04. Storage /second Way with MAP
function secondStorage(data){
    let map = new Map();

    for(let input of data){
        let [product, count] = input.split(` `);

        if(!map.has(product)){
            map.set(product, +count);
        }else {
            let currentCount = map.get(product);
            let newCount = currentCount += count;
            map.set(product, newCount)
        }
    }
}
secondStorage(['apple 50',
'apple 61',
'coffee 115',
'coffee 40']); */
// 05. School Grades
function schoolGrades(input) {

    let students = {};

    for (let i = 0; i < input.length; i++) {
        let data = input[i].split(' ');
        let student = data[0];
        let grades = data.slice(1).map(Number);

        if (students.hasOwnProperty(student)) {
            students[student].push(...grades);
        } else {
            students[student] = grades;
        }
    }

    let averageGrades = {};
    for (const student in students) {
        let grades = students[student];
        let sum = grades.reduce((acc, grade) => acc + grade, 0);
        let average = sum / grades.length;
        averageGrades[student] = average.toFixed(2);
    }

    let sortedGrades = Object.entries(averageGrades).sort(([keyA, valueA], [keyB, valueB]) => keyA.localeCompare(keyB));

    for (const [key, value] of sortedGrades) {
        console.log(`${key}: ${value}`);

    }
}

schoolGrades(['Lilly 4 6 6 5', 'Tim 5 6', 'Tammy 2 4 3', 'Tim 6 6']);
// 06. Word Occurrences


/* 06. Make a Dictionary - Objects and Classes 
function dictionary(input) {

    let result = {};

    for (const item of input) {
        let [word, description] = item.split(`:`);
        if (!result.hasOwnProperty(word)) {
            result[word] = ``;

        }
        result[word] = description;
    }

    let sortedResult = Object.entries(result).sort((a, b) => a[0].localeCompare(b[0]));
    for (const term in sortedResult) {
        let [name, definition] = sortedResult.split(`,`)
    
        console.log(`Term: ${term} => Definition: ${sortedResult[term]}`);
    }
}

dictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified,transmitted, or recorded."}']);
*/

