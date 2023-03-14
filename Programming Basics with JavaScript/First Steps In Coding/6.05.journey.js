function journey(input) {
    let budget = Number(input[0]);
    let season = input[1];

    if (season === "summer") {
        place = "Camp"
        if (budget <= 100) {
            country = "Bulgaria"
            price = budget * 0.3
        } else if (budget <= 1000) {
            country = "Balkans"
            price = budget * 0.4
        } else if (budget > 1000) {
            country = "Europe"
            price = budget * 0.9
        }
    } else if (season === "winter") {
        place = "Hotel"
        if (budget <= 100) {
            country = "Bulgaria"
            price = budget * 0.7
        } else if (budget <= 1000) {
            country = "Balkans"
            price = budget * 0.8
        } else if (budget > 1000) {
            country = "Europe"
            price = budget * 0.9
        }
    }
    if (country === "Europe") {
        place = "Hotel"
    }
    console.log(`Somewhere in ${country}`);
    console.log(`${place} - ${price.toFixed(2)}`);
}

journey(["1500", "summer"])
