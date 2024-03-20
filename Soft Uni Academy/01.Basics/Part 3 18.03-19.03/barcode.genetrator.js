function bCode(input) {
    let start = Number(input[0]);
    let end = Number(input[1]);
    let buffer = ``;

    let digits = start.toString().split('');
    let endDigits = end.toString().split(``);
    let startDigit = (digits[0]);
    let secDigit = (digits[1]);
    let thirdDigit = (digits[2]);
    let lastDigit = (digits[3]);

    let firstEnd = endDigits[0];
    let scEnd = endDigits[1];
    let thirdEnd = endDigits[2];
    let lastEnd = endDigits[3];

    for (let i = startDigit; i <= firstEnd; i++) {
        if (i % 2 !== 0) {
            for (let j = secDigit; j <= scEnd; j++) {
                if (j % 2 !== 0) {
                    for (let y = thirdDigit; y <= thirdEnd; y++) {
                        if (y % 2 !== 0) {
                            for (let z = lastDigit; z <= lastEnd; z++) {
                                if (z % 2 !== 0) {
                                    buffer += `${i}${j}${y}${z} `
                                }
                            }
                        }
                    }
                }
            }
        }

    }
    console.log(buffer);
}
bCode(["1365", "5877"])