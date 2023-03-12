function newHouse(input) {

    let flower = input[0];
    let desiredNumber = Number(input[1]);
    let budget = Number(input[2]);
    let totalSum = 0;

    if (flower === "Roses") {
        if (desiredNumber > 80) {
            totalSum = desiredNumber * 5.00 * 0.90;
        } else {
            totalSum = desiredNumber * 5.00;
        }

    } else if (flower === "Dahlias") {
        if (desiredNumber > 90) {
            totalSum = desiredNumber * 3.80 * 0.85;
        } else {
            totalSum = desiredNumber * 3.80;
        }

    } else if (flower === "Tulips") {
        if (desiredNumber > 80) {
            totalSum = desiredNumber * 2.80 * 0.85;
        } else {
            totalSum = desiredNumber * 2.80;
        }

    } else if (flower === "Narcissus") {
        if (desiredNumber < 120) {
            totalSum = desiredNumber * 3.00 * 1.15;
        } else {
            totalSum = desiredNumber * 3.00;
        }
    } else if (flower === "Gladiolus") {
        if (desiredNumber < 80) {
            totalSum = desiredNumber * 2.50 * 1.20;
        } else {
            totalSum = desiredNumber * 2.50;
        }
    }

    let rest = Math.abs(budget - totalSum)

    if (budget >= totalSum) {
        console.log(`Hey, you have a great garden with ${desiredNumber} ${flower} and ${rest.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${rest.toFixed(2)} leva more.`);
    }

}

newHouse(["Tulips", "88", "260"])
