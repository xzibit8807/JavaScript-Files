function Aquarium(input){
    let lenght = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let PercentOcc = Number(input[3]) / 100;

    let totalVolume = (lenght * width * height) / 1000;
    let volumeTaken = PercentOcc * totalVolume;

    let freeVolume = totalVolume - volumeTaken;
    console.log(freeVolume);

}

Aquarium ("85", "75", "47", "17")