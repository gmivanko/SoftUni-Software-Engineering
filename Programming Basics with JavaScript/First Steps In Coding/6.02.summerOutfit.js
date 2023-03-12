function summerOutfit(input) {

    let degrees = Number(input[0]);
    let dayTime = input[1];
    let outfit = "";
    let shoe = "";

    switch (dayTime) {
        case "Morning":
            if (degrees >= 10 && degrees <= 18) {
                outfit = "Sweatshirt";
                shoe = "Sneakers";
            } else if (degrees >= 18 && degrees <= 24) {
                outfit = "Shirt";
                shoe = "Moccasins";
            } else if (degrees >= 25) {
                outfit = "T-Shirt";
                shoe = "Sandals";
            }
            break;
        case "Afternoon":
            if (degrees >= 10 && degrees <= 18) {
                outfit = "Shirt";
                shoe = "Moccasins";
            } else if (degrees > 18 && degrees <= 24) {
                outfit = "T-Shirt";
                shoe = "Sandals";
            } else if (degrees >= 25) {
                outfit = "Swim Suit";
                shoe = "Barefoot";
            }
            break;
        case "Evening":
            if (degrees >= 10 && degrees <= 18) {
                outfit = "Shirt";
                shoe = "Moccasins";
            } else if (degrees > 18 && degrees <= 24) {
                outfit = "Shirt";
                shoe = "Moccasins";
            } else if (degrees >= 25) {
                outfit = "Shirt";
                shoe = "Moccasins";
            }
            break;
    }
    console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoe}.`)
}


//     if (degrees >= 10 && degrees <= 18) {
//         if (dayTime === "Morning") {
//             outfit = "Sweatshirt";
//             shoe = "Sneakers";
//         } else if (dayTime === "Afternoon") {
//             outfit = "Shirt";
//             shoe = "Moccasins";
//         } else if (dayTime === "Evening") {
//             outfit = "Shirt";
//             shoe = "Moccasins";
//         }
//     } else if (degrees > 18 && degrees <= 24) {
//         if (dayTime === "Morning") {
//             outfit = "Shirt";
//             shoe = "Moccasins";
//         } else if (dayTime === "Afternoon") {
//             outfit = "T-Shirt";
//             shoe = "Sandals";
//         } else if (dayTime === "Evening") {
//             outfit = "Shirt";
//             shoe = "Moccasins";
//         }

//     } else if (degrees >= 25 && degrees <= 42) {
//         if (dayTime === "Morning") {
//             outfit = "T-Shirt";
//             shoe = "Sandals";
//         } else if (dayTime === "Afternoon") {
//             outfit = "Swim Suit";
//             shoe = "Barefoot";
//         } else if (dayTime === "Evening") {
//             outfit = "Shirt";
//             shoe = "Moccasins";
//         }
//     } console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoe}.`);

// }

summerOutfit(["22",
    "Afternoon"])