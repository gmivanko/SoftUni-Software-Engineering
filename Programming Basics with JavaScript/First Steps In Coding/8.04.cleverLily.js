function cleverLily(input) {
    let age = Number(input[0]);
    let washMash = Number(input[1]);
    let toyPrice = Number(input[2]);
    let sum1 = 0;
    let sum2 = 0;
    let taken = 0;
    let totalSum = 0;

    for (let i = 2; i <= age; i += 2) {
        // if (i % 2 === 0)
        sum2 += i / 2 * 10;
    }
    sum1 = Math.ceil(age / 2) * toyPrice;
    taken = Math.floor(age / 2)
    totalSum = sum1 + sum2 - taken
    total = Math.abs(washMash - totalSum)
    if (washMash <= totalSum) {
        console.log(`Yes! ${total.toFixed(2)}`);
    } else {
        console.log(`No! ${total.toFixed(2)}`);
    }
}


cleverLily(["10",
    "170.00",
    "6"])
cleverLily(["21",
    "1570.98",
    "3"])

