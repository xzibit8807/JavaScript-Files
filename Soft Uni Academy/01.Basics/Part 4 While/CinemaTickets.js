function cinemaTicket(input) {
    let studentTicket1 = 0;
    let standardTicket1 = 0;
    let kidTicket1 = 0;

    let index = 0;
    let command = input[index];
    index++;
    let command1 = ``
    let places1 = 0;
    let movie1 = ``;
    let ticketTotal = 0;

    while (command !== `Finish`) {
        if (command1 == `End`) {
            command = input[index];
            index++;
        }

        let studentTicket = 0;
        let standardTicket = 0;
        let kidTicket = 0;
        let movieName = command;


        movie1 = movieName;
        let avPlaces = Number(input[index]);
        index++;
        let placesTaken = 0;
        places1 += placesTaken;

        command1 = input[index];
        index++;

        while (command1 !== `End`) {
            let ticketType = command1;
            placesTaken++

            if (ticketType === `student`) {
                studentTicket++
            } else if (ticketType === `standard`) {
                standardTicket++
            } else if (ticketType === `kid`) {
                kidTicket++
            }
            if (placesTaken === avPlaces) {
                command = input[index];
                command1 = input[index];
                index++;
                break;
            }
            command1 = input[index];
            index++;
        }
        let totalTickets = studentTicket + standardTicket + kidTicket
        let percentT = (totalTickets / avPlaces) * 100;
        console.log(`${movie1} - ${percentT.toFixed(2)}% full.`);
        ticketTotal += totalTickets
        standardTicket1 += standardTicket
        studentTicket1 += studentTicket;
        kidTicket1 += kidTicket;

    }
    console.log(`Total tickets: ${ticketTotal}`);

    let standardTP = (standardTicket1 / ticketTotal) * 100;
    let studentTP = (studentTicket1 / ticketTotal) * 100;
    let kidTP = (kidTicket1 / ticketTotal) * 100;

    console.log(`${studentTP.toFixed(2)}% student tickets.`);

    console.log(`${standardTP.toFixed(2)}% standard tickets.`);

    console.log(`${kidTP.toFixed(2)}% kids tickets.`);

}

cinemaTicket(["The Matrix",

"20",

"student",

"standard",

"kid",

"kid",

"student",

"student",

"standard",

"student",

"End",

"The Green Mile",

"17",

"student",

"standard",

"standard",

"student",

"standard",

"student",

"End",

"Amadeus",

"3",

"standard",

"standard",

"standard",

"Finish"])