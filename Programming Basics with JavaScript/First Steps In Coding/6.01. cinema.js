function cinema(input) {

    let typeProjec = input[0];
    let numberRows = Number(input[1]);
    let numberColumns = Number(input[2]);
    let totalSum = 0;

    if (typeProjec === "Premiere") {
        totalSum = numberRows * numberColumns * 12.00;
    } else if (typeProjec === "Normal") {
        totalSum = numberRows * numberColumns * 7.50;
    } else if (typeProjec === "Discount") {
        totalSum = numberRows * numberColumns * 5.00;
    } console.log(`${totalSum.toFixed(2)} leva`);

}

cinema(["Premiere", "10", "12"])
