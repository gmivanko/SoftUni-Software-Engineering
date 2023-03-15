function hotelRoom(input) {
    let month = (input[0]);
    let countNight = Number(input[1]);
    let Apartment;
    let Studio;

    switch (month) {
        case "May":
        case "October":
            Studio = 50;
            Apartment = 65;

            if (14 < countNight) {
                Studio = Studio * 0.70;
                Apartment = Apartment * 0.90;
            }
            else if (7 < countNight) {
                Studio = Studio * 0.95;
            }
            break;
        case "June":
        case "September":
            Studio = 75.20;
            Apartment = 68.70;
            if (14 < countNight) {
                Studio = Studio * 0.80;
                Apartment = Apartment * 0.90;
            }
            break;
        case "July":
        case "August":
            Studio = 76;
            Apartment = 77;
            if (14 < countNight) {
                Apartment = Apartment * 0.90;
            }
            break;
    }
    let sumA = (countNight * Apartment);
    let sumB = (countNight * Studio);

    console.log(`Apartment: ${sumA.toFixed(2)} lv.`)
    console.log(`Studio: ${sumB.toFixed(2)} lv.`)
}

hotelRoom(["May", "15"])
hotelRoom(["June", "14"])
hotelRoom(["August", "20"])