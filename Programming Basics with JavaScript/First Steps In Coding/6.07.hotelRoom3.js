function hotelRoom(input) {
    let month = input[0];
    let nights = Number(input[1]);
    let roomType = " "
    let priceS = 0
    let priceA = 0
    let condition = (roomType = "Studio" && month === "May" || month === "October")
    let secCon = (roomType = "Studio" && month === "June" || month === "September")

    switch (month) {
        case "May":
        case "October":
            roomType = "Studio";
            priceS = nights * 50;
            roomType = "Apartment";
            priceA = nights * 65;
            break;
        case "June":
        case "September":
            roomType = "Studio";
            priceS = nights * 75.2;
            roomType = "Apartment";
            priceA = nights * 68.7;
            break;
        case "July":
        case "August":
            roomType = "Studio";
            priceS = nights * 76;
            roomType = "Apartment";
            priceA = nights * 77;
            break;
    }

    if (condition && nights > 7) {
        priceS *= 0.95
    } else if (condition && nights > 14) {
        priceS *= 0.7
    } else if (secCon & nights > 14) {
        priceS *= 0.8
    }
    if (roomType === "Apartment" && nights > 14) {
        priceA *= 0.9
    }
    console.log(`Apartment: ${priceA.toFixed(2)} lv.`)
    console.log(`Studio: ${priceS.toFixed(2)} lv.`)
}

hotelRoom(["May", "15"])
hotelRoom(["June", "14"])
hotelRoom(["July", "20"])