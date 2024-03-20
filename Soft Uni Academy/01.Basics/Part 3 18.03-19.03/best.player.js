function bestPlayer(input){
    let index = 0;
    let playerName = input[index];
    index++;
    let score = Number(input[index]);
    index++;
    let player2 = ``;
    let score2 = 0;

    while(player2 !== `END`){
        player2 = input[index];
        index++;
        score2 = Number(input[index]);
        index++
        if (score < score2){
            playerName = player2;
            score = Number(score2);
        }
        if ( score >= 10 || score2 >= 10){
            break;
        }
    }
    console.log(`${playerName} is the best player!`);
    if (score >= 3){
        console.log(`He has scored ${score} goals and made a hat-trick !!!`);
    }else if( score < 3){
        console.log(`He has scored ${score} goals.`);
    }
}

bestPlayer(["Petrov","2","Drogba","11"])
