function worldSwimingRecord(input){
    let recordTime = Number(input[0]);
    let distance = Number(input[1]);
    let timePerMeter = Number(input[2]);

    let delayTime = Math.floor(distance / 15) *12.5
    let ivanSpeed = distance * timePerMeter + delayTime

    if (ivanSpeed < recordTime){
        console.log(`Yes, he succeeded! The new world record is ${ivanSpeed.toFixed(2)} seconds.`);
    } else {
        let neededTieme = ivanSpeed - recordTime
        console.log(`No, he failed! He was ${neededTieme.toFixed(2)} seconds slower.`);
    }
}

worldSwimingRecord(["55555.67","3017","5.03"])
