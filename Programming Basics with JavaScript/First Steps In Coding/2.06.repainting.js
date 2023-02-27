function repainting(input){
    let nylon = 1.5;
    let paint = 14.5;
    let paintThinner = 5;
    let bag = 0.4;
    // let additionalPaint = 10% 
    // let additionalNylon = 2 
    let squareMetersNylon = Number(input[0]);
    let litersPaintNeeded = Number(input[1]);
    let litersThinnerNeeded = Number(input[2]);
    let hoursNeeded = Number(input[3]);
    let nylonPrice = (squareMetersNylon + 2) * nylon;
    let paintPrice = (litersPaintNeeded * 1.1) * paint;
    let thinnerPrice = litersThinnerNeeded * paintThinner;
    let finalMaterialsPrice = nylonPrice + paintPrice + thinnerPrice + bag;
    let paymentCraftsman = (finalMaterialsPrice * 0.3) * hoursNeeded
    console.log(finalMaterialsPrice + paymentCraftsman)


}

repainting(["5 ",
"10 ",
"10 ",
"1 "]
)