function suppliesForSchool(input){
    let pensPack = 5.8;
    let markerPack = 7.2;
    let preparation = 1.2;
    let numberOfPensPack = Number(input[0]);
    let numberOfMarkerPack = Number(input[1]);
    let litersOfPreparation = Number(input[2]);
    let discount = Number(input[3]) / 100;
    let pricePen = pensPack * numberOfPensPack;
    let priceMarker = markerPack * numberOfMarkerPack;
    let pricePreparation = preparation * litersOfPreparation;
    let totalPrice = pricePen + priceMarker  + pricePreparation;
    let finalDiscountPrice = totalPrice - totalPrice * discount;
    console.log(finalDiscountPrice)

}

suppliesForSchool(["4 ",
"2 ",
"5 ",
"13 "]
)