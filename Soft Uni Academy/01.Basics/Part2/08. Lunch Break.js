function lunchBreak(input){
    let movieName = (input[0]);
    let movieDuration = Number(input[1]);
    let breakDuration = Number(input[2]);

    let lunchTime = (1/8) * breakDuration
    let leisureTIme = (1/4) * breakDuration

    let totalOcupationTIme = lunchTime + leisureTIme
    let timeLeft = breakDuration - totalOcupationTIme

    if (timeLeft >= movieDuration){
        let finalTime = Math.ceil(timeLeft - movieDuration)
        console.log(`You have enough time to watch ${movieName} and left with ${finalTime} minutes free time.`);
    } else {
        let timeNeeded = Math.ceil( movieDuration - timeLeft)
        console.log(`You don't have enough time to watch ${movieName}, you need ${timeNeeded} more minutes.`);
    }
}

lunchBreak(["Teen Wolf",
"48",
"60"])
