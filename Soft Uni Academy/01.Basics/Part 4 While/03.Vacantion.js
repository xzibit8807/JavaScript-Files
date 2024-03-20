function jess(input) {
    let index = 0;
    let vacantionPrice = Number(input[index]);
    index++;

    let jessMoney = Number(input[index]);
    index++;

    let days = 0;
    let totalDays = 0;

    while (jessMoney < vacantionPrice) {
        let action = input[index];
        index++;

        let sum = Number(input[index]);
        index++;
        if (action === `save`) {
            jessMoney += sum;
            days = 0;
        } else if (action === `spend`) {
            if (sum > jessMoney) {
                jessMoney = 0;
            } else {
                jessMoney -= sum;
            }

            days++;
        }
        totalDays++;

        if (days === 5) {
            console.log(`You can't save the money.`);
            console.log(`${totalDays}`);
            break;
        }
    }
    if (jessMoney >= vacantionPrice) {
        console.log(`You saved the money for ${totalDays} days.`);
    }
}

jess(["2000", "1000", "spend", "1200", "save", "2000"])