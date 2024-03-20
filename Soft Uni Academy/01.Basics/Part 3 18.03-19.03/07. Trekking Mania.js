function climing(input) {

    let groupsCount = Number(input[0]);
    let musala = 0;
    let monbat = 0;
    let kilim = 0;
    let k2 = 0;
    let everest = 0;

    for(let i = 1; i < groupsCount + 1; i++ ){
        let groups1 = Number(input[i]);
        
        if (groups1 <= 5){
            musala += groups1;
        }else if (groups1 >5 && groups1 <= 12){
            monbat += groups1;
        }else if (groups1 >12 && groups1 <= 25){
            kilim += groups1;
        }else if (groups1 >25 && groups1 <= 40){
            k2 += groups1;
        }else {
            everest += groups1;
        }
    }
    let totalCount = musala + monbat + kilim + k2 + everest;
    let cMusala = (musala / totalCount ) * 100;
    let cMonbat = (monbat / totalCount ) * 100;
    let cKilim = (kilim / totalCount ) * 100;
    let cK2 = (k2 / totalCount ) * 100;
    let cEver = (everest / totalCount ) * 100;

    console.log(`${cMusala.toFixed(2)}%`);
    console.log(`${cMonbat.toFixed(2)}%`);
    console.log(`${cKilim.toFixed(2)}%`);
    console.log(`${cK2.toFixed(2)}%`);
    console.log(`${cEver.toFixed(2)}%`);
}

    climing(["10","10","5","1","100","12","26", "17", "37", "40", "78"])