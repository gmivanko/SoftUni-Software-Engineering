function fishingBoat(input) {

    let budget = Number(input[0]);
    let season = input[1];
    let numOfFihermen = Number(input[2]);
    let discount = 0;
    let totalSum = 0;

    switch (season) {
        case "Spring": rent = 3000; break;
        case "Summer": rent = 4200; break;
        case "Autumn": rent = 4200; break;
        case "Winter": rent = 2600; break;
    }

    if (numOfFihermen <= 6) {
        discount = 0.90;
    } else if (numOfFihermen <= 11) {
        discount = 0.85;
    } else {
        discount = 0.75;
    }

    totalSum = rent * discount


    if (numOfFihermen % 2 === 0 && season !== "Autumn") {
        totalSum = totalSum * 0.95
    }
    rest = Math.abs(budget - totalSum)

    if (budget >= totalSum) {
        console.log(`Yes! You have ${rest.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${rest.toFixed(2)} leva.`)
    }
}


fishingBoat(["3000",
    "Summer",
    "11"])

    //function fishingBoat(input) {
    //
    //    let budget = Number(input[0]);
    //    let season = input[1];
    //    let numOfFihermen = Number(input[2]);
    //    let totalSum = 0;
    //
    //    if (season === "Spring") {
    //        rent = 3000
    //        if (numOfFihermen <= 6) {
    //            totalSum = rent * 0.90;
    //        } else if (numOfFihermen > 7 && numOfFihermen <= 11) {
    //            totalSum = rent * 0.85;
    //        } else if (numOfFihermen > 12) {
    //            totalSum = rent * 0.85;
    //        }
    //    } else if (season === "Summer") {
    //        rent = 4200
    //        if (numOfFihermen <= 6) {
    //            totalSum = rent * 0.90;
    //        } else if (numOfFihermen > 7 && numOfFihermen <= 11) {
    //            totalSum = rent * 0.85;
    //        } else if (numOfFihermen > 12) {
    //            totalSum = rent * 0.85;
    //        }
    //    } else if (season === "Autumn") {
    //        rent = 4200
    //        if (numOfFihermen <= 6) {
    //            totalSum = rent * 0.90;
    //        } else if (numOfFihermen > 7 && numOfFihermen <= 11) {
    //            totalSum = rent * 0.85;
    //        } else if (numOfFihermen > 12) {
    //            totalSum = rent * 0.85;
    //        }
    //    } else if (season === "Winter") {
    //        rent = 2600
    //        if (numOfFihermen <= 6) {
    //            totalSum = rent * 0.90;
    //        } else if (numOfFihermen > 7 && numOfFihermen <= 11) {
    //            totalSum = rent * 0.85;
    //        } else if (numOfFihermen > 12) {
    //            totalSum = rent * 0.75;
    //        }
    //    }
    //    
    //    if (numOfFihermen % 2 === 0 && season !== "Autumn") {
    //        totalSum = totalSum * 0.95
    //    }
    //
    //    let rest = Math.abs(budget - totalSum)
    //
    //    if (budget >= totalSum) {
    //        console.log(`Yes! You have ${rest.toFixed(2)} leva left.`)
    //    } else {
    //        console.log(`Not enough money! You need ${rest.toFixed(2)} leva.`)
    //    }
    //}

