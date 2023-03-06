function godzillaVsKong(input){
    let budget = Number(input[0]);
    let extras = Number(input[1]);
    let extraOutfit = Number(input[2]);
    let decor = budget * 0.1;

    if (extras > 150) {
        extraOutfit = extraOutfit * 0.9;
    }
    
    let total = Math.abs(budget - decor - extraOutfit * extras);

    if (budget < decor + extraOutfit * extras) {
        console.log("Not enough money!");
        console.log(`Wingard needs ${total.toFixed(2)} leva more.`);
    } else {
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${total.toFixed(2)} leva left.`);
    }

}

godzillaVsKong(["20000",
"120",
"55.5"])




