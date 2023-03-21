function trekkingMania(input) {
    let numberGroups = Number(input[0]);
    let sum = 0;
    let mussalla = 0;
    let montBlanc = 0;
    let kilimanjaro = 0;
    let k2 = 0;
    let everest = 0;

    for (let i = 1; i <= numberGroups; i++) {
        let peopleCount = Number(input[i]);
        sum += peopleCount
        if (peopleCount <= 5) {
            mussalla += peopleCount;
        } else if (peopleCount <= 12) {
            montBlanc += peopleCount;
        } else if (peopleCount <= 25) {
            kilimanjaro += peopleCount;
        } else if (peopleCount <= 40) {
            k2 += peopleCount;
        } else {
            everest += peopleCount;
        }
    }
    let p1 = (mussalla / sum) * 100
    let p2 = (montBlanc / sum) * 100
    let p3 = (kilimanjaro / sum) * 100
    let p4 = (k2 / sum) * 100
    let p5 = (everest / sum) * 100

    console.log(`${p1.toFixed(2)}%\n${p2.toFixed(2)}%\n${p3.toFixed(2)}%\n${p4.toFixed(2)}%\n${p5.toFixed(2)}%`);
}

trekkingMania(["10",
    "10",
    "5",
    "1",
    "100",
    "12",
    "26",
    "17",
    "37",
    "40",
    "78"])
