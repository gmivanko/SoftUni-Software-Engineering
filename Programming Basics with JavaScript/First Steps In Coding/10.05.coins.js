function coins(input) {
    let change = Number(input[0]);
    let coinChange = 0;

    // change *= 100  .00000000001
    change = Math.round(change * 100)  // = .00000000 
    // change = Math.floor(change * 100)  // = .00000000 
    // change = (change * 100).toFixed(2)  // = .00
    while (change > 0) {
        if (change >= 200) {
            change -= 200;
        } else if (change >= 100) {
            change -= 100
        } else if (change >= 50) {
            change -= 50
        } else if (change >= 20) {
            change -= 20
        } else if (change >= 10) {
            change -= 10
        } else if (change >= 5) {
            change -= 5
        } else if (change >= 2) {
            change -= 2
        } else {
            change -= 1
        }
        coinChange++ // += 1;
    }
    console.log(coinChange);

}

coins(['1.23']);
coins(['2']);
coins(['0.56']);
coins(['2.73']);
