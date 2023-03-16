function skiTrip(input) {

    let dayStay = Number(input[0]);
    let roomType = input[1];
    let rate = input[2];
    let sum = 0;

    switch (roomType) {
        case "room for one person":
            if (dayStay < 10) {
                sum = dayStay * 18.00
            } else if (dayStay >= 10 && dayStay <= 15) {
                sum = (dayStay - 1) * 18.00
            } else if (dayStay > 15) {
                sum = (dayStay - 1) * 18.00
            }
            break;
        case "apartment":
            if (dayStay < 10) {
                sum = (dayStay - 1) * 25.00 * 0.70
            } else if (dayStay >= 10 && dayStay <= 15) {
                sum = (dayStay - 1) * 25.00 * 0.65
            } else if (dayStay > 15) {
                sum = (dayStay - 1) * 25.00 * 0.50
            }
            break;
        case "president apartment":
            if (dayStay < 10) {
                sum = (dayStay - 1) * 35.00 * 0.90
            } else if (dayStay >= 10 && dayStay <= 15) {
                sum = (dayStay - 1) * 35.00 * 0.85
            } else if (dayStay > 15) {
                sum = (dayStay - 1) * 35.00 * 0.80
            }
            break;
    } 
    if (rate === "positive") {
        sum = sum * 1.25
    } else if (rate === "negative") {
        sum = sum * 0.90
    }
    console.log(sum.toFixed(2));

}

skiTrip(["30",
"president apartment",
"negative"])

