function hotelRoom(input) {
    let month = input[0];
    let days = Number(input[1]);
    let apart = 0;
    let studio = 0;

    switch (month) {
        case "May":
        case "October":
            apart = 65.00;
            studio = 50.00;
            if (days > 14) {
                apart = apart * 0.90;
                studio = studio * 0.70;
            }
            else if (days > 7) {
                studio = studio * 0.95;
            }
            break;
        case "June":
        case "September":
            apart = 68.70;
            studio = 75.20;
            if (days > 14) {
                apart = apart * 0.90;
                studio = studio * 0.80;
            }
            break;
        case "July":
        case "August":
            apart = 77.00;
            studio = 76.00;
            if (days > 14) {
                apart = apart * 0.90;
            }
            break;
    }
    console.log(`Apartment: ${(days * apart).toFixed(2)} lv.`)
    console.log(`Studio: ${(days * studio).toFixed(2)} lv.`)
}

hotelRoom(["May", "15"])
hotelRoom(["June", "14"])
hotelRoom(["July", "20"])


// function hotelRoom(input) {
//     let month = (input[0]);
//     let countNight = Number(input[1]);
//     let Apartment;
//     let Studio;

//     switch (month) {
//         case "May":
//         case "October":
//             Studio = 50;
//             Apartment = 65;

//             if (14 < countNight) {
//                 Studio = Studio * 0.70;
//                 Apartment = Apartment * 0.90;
//             }
//             else if (7 < countNight) {
//                 Studio = Studio * 0.95;
//             }
//             break;
//         case "June":
//         case "September":
//             Studio = 75.20;
//             Apartment = 68.70;
//             if (14 < countNight) {
//                 Studio = Studio * 0.80;
//                 Apartment = Apartment * 0.90;
//             }
//             break;
//         case "July":
//         case "August":
//             Studio = 76;
//             Apartment = 77;
//             if (14 < countNight) {
//                 Apartment = Apartment * 0.90;
//             }
//             break;
//     }
//     let sumA = (countNight * Apartment);
//     let sumB = (countNight * Studio);

//     console.log(`Apartment: ${sumA.toFixed(2)} lv.`)
//     console.log(`Studio: ${sumB.toFixed(2)} lv.`)
// }






//     if (month === "May" || month === "October") {
//         studio = 50.00
//         apart = 65.00

//         if (days > 7 && days <= 14) {
//             studio = studio * 0.95
//         } else if (days > 14) {
//             studio = studio * 0.70
//         } else {
//             studio = studio
//         }
//     } else if (month === "June" || month === "September ") {
//         studio = 75.20
//         apart = 68.70

//         if (days > 14) {
//             studio = studio * 0.80
//         }
//     } else if (month === "July" || month === "August") {
//         studio = 76.00
//         apart = 77.00
//     }

//     if (days > 14) {
//         apart = apart * 0.90
//     }

//     console.log(`Apartment: ${(days * apart).toFixed(2)} lv.`)
//     console.log(`Studio: ${(days * studio).toFixed(2)} lv.`)

// }

