function fruitShop(input) {

    let fruit = input[0];
    let day = input[1];
    let quantity = Number(input[2]);
    let finalSum = 0;
    let isTrue = false

    if (fruit === "banana" || fruit === "apple" || fruit === "orange" || fruit === "grapefruit"
        || fruit === "kiwi" || fruit === "pineapple" || fruit === "grapes") {
        if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Tursday" || day === "Friday") {

            switch (fruit) {
                case "banana": finalSum = quantity * 2.50; break;
                case "apple": finalSum = quantity * 1.20; break;
                case "orange": finalSum = quantity * 0.85; break;
                case "grapefruit": finalSum = quantity * 1.45; break;
                case "kiwi": finalSum = quantity * 2.70; break;
                case "pineapple": finalSum = quantity * 5.50; break;
                case "grapes": finalSum = quantity * 3.85; break;
            }

        } else if (day === "Saturday" || day === "Sunday") {
            switch (fruit) {
                case "banana": finalSum = quantity * 2.70; break;
                case "apple": finalSum = quantity * 1.25; break;
                case "orange": finalSum = quantity * 0.90; break;
                case "grapefruit": finalSum = quantity * 1.60; break;
                case "kiwi": finalSum = quantity * 3.00; break;
                case "pineapple": finalSum = quantity * 5.60; break;
                case "grapes": finalSum = quantity * 4.20; break;
            }
        } else {
            console.log("error");
        }
        if (finalSum > 0) {
            isTrue = true
        }
        //console.log(finalSum.toFixed(2));
    } else {
        console.log("error");
    }

    if (isTrue) {
        console.log(finalSum.toFixed(2));
    }


}

fruitShop(["apple", "Workday", "2"])

