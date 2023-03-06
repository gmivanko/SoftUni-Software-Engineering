function toyShop(input){
    let excursion = Number(input[0]);
    let numPuzzle = Number(input[1]);
    let numDoll = Number(input[2]);
    let numBear = Number(input[3]);
    let numMinion = Number(input[4]);
    let numTruck = Number(input[5]);

    //let puzzle = 2.6;
    //let doll = 3;
    //let bear = 4.1;
    //let minion = 8.2;
    //let truck = 2;

    let totalSum = numPuzzle * 2.6 + numDoll * 3 + numBear * 4.1 + numMinion * 8.2 + numTruck * 2
    let totalNumber = numPuzzle + numDoll + numBear + numMinion + numTruck

    if (totalNumber >= 50) {
        totalReruceSum = totalSum - totalSum * 0.25
    } else {totalReruceSum = totalSum}
    
    let rentsum = totalReruceSum - totalReruceSum * 0.1
    let total = Math.abs(excursion - rentsum)
    if (rentsum >= excursion) {
        //total = rentsum - excursion
        console.log(`Yes! ${total.toFixed(2)} lv left.`)
    } else {
        //total = excursion - rentsum
        console.log(`Not enough money! ${total.toFixed(2)} lv needed.`)
    }


}

toyShop
(["40.8",
"20",
"25",
"30",
"50",
"10"])

