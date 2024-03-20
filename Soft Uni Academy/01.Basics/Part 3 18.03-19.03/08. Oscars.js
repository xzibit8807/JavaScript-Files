function Oscars(input) {
    let actor = input[0];
    let starterPoints = Number(input[1]);
    let countJ = Number(input[2]);


    for (let i = 3; i < input.length; i += 2) {
        let jName = input[i];
        let jPoints = Number(input[i + 1]);

        let pointsWon = jName.length * jPoints / 2;
        starterPoints += pointsWon;

        if (starterPoints > 1250.5) {
            console.log(`Congratulations, ${actor} got a nominee for leading role with ${starterPoints.toFixed(1)}!`);
            break;
        }

    }
    if (starterPoints <= 1250.5) {
        let pointNeeded = 1250.5 - starterPoints;
        console.log(`Sorry, ${actor} you need ${pointNeeded.toFixed(1)} more!`);


    }

}

Oscars(["Sandra Bullock", "340", "5", "Robert De Niro", "50", "Julia Roberts", "40.5", "Daniel Day-Lewis", "39.4", "Nicolas Cage", "29.9", "Stoyanka Mutafova", "33"])