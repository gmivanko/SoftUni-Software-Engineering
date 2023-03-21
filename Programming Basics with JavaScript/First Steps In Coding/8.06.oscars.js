function oscars(input) {
    let actorName = input[0];
    let pointsAcademy = Number(input[1]);
    let countJudges = Number(input[2]);
    let totalScore = pointsAcademy;
    let sum = 0;

    // for (let i = 3; i <= (countJudges + 1) * 2; i +=2) {
    for (let i = 3; i < input.length; i += 2) {
        let judgeName = String(input[i]);
        let pointsGiven = Number(input[i + 1]);
        let judgeLength = judgeName.length;
        sum += pointsGiven
        let score = judgeLength * pointsGiven / 2
        // sumScore += score
        totalScore += score

        if (totalScore > 1250.5) {
            console.log(` Congratulations, ${actorName} got a nominee for leading role with ${totalScore.toFixed(1)}!`);
            return;
        }
    }
    pointsNeeded = Math.abs(1250.5 - totalScore)
    console.log(`Sorry, ${actorName} you need ${pointsNeeded.toFixed(1)} more!`)

}




oscars(["Zahari Baharov",
    "205",
    "4",
    "Johnny Depp",
    "45",
    "Will Smith",
    "29",
    "Jet Lee",
    "10",
    "Matthew Mcconaughey",
    "39"])


