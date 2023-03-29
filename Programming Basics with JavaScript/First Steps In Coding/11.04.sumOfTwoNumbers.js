function sumOfTwoNumbers(input) {
    let startIntervals = Number(input[0]);
    let finalIntervals = Number(input[1]);
    let magicNumber = Number(input[2]);
    let comb = 0;
    // let combination = 0;
    let isFound = false;

    for (let x = startIntervals; x <= finalIntervals; x++) {
        for (let y = startIntervals; y <= finalIntervals; y++) {
            comb++;
            if (x + y === magicNumber) {
                isFound = true;
                // combination++;
                console.log(`Combination N:${comb} (${x} + ${y} = ${magicNumber})`);

                // if (combination === 1) {
                //     console.log(`Combination N:${comb} (${x} + ${y} = ${magicNumber})`);
                //     return;
                // } 
            }
        }
        if (isFound) {
            break;
        }
        // console.log(`${comb} combinations - neither equals ${magicNumber}`);

    } if (!isFound) {
        console.log(`${comb} combinations - neither equals ${magicNumber}`);
    }

}

sumOfTwoNumbers(["1", "10", "5"])
sumOfTwoNumbers(["23", "24", "20"])
sumOfTwoNumbers(["88", "888", "1000"])
sumOfTwoNumbers(["88", "888", "2000"])
