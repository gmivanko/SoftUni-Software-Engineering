function tennisRanklist(input) {
    let numOfTourn = Number(input[0]);
    let startScore = Number(input[1]);
    let bonusScore = 0;
    let wonTourn = 0;


    // for (let i = 2; i <= numOfTourn + 1; i++) {
    for (let i = 2; i <= input.length ; i++) {
        let complTpurn = String(input[i]);
        if (complTpurn === "W") {
            bonusScore += 2000;
            wonTourn += 1;
        } else if (complTpurn === "F") {
            bonusScore += 1200;
        } else {
            bonusScore += 720
        }

        // switch (complTpurn) {
        //     case "W": bonusScore += 2000; break;
        //     case "F": bonusScore += 1200; break;
        //     case "SF": bonusScore += 720; break;
        // }
        // switch (complTpurn) {
        //     case "W": wonTourn += 1; break;
        // }
    }
    score = startScore + bonusScore
    average = bonusScore / numOfTourn
    percentWon = wonTourn / numOfTourn * 100

    console.log(`Final points: ${score}`);
    console.log(`Average points: ${Math.floor(average)}`);
    console.log(`${percentWon.toFixed(2)}%`);

}

tennisRanklist(["5", "1400", "F", "SF", "W", "W", "SF"])
tennisRanklist(["7", "1200", "SF", "F", "W", "F", "W", "SF", "W"])
