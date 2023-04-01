function trainTheTrainers(input) {
    let index = 0;
    let peopleInJury = Number(input[index]);
    index++;
    let command = input[index];
    index++;
    let presentation = '';
    let totalRate = 0;
    let totalJudgeRate = 0;
    let totalSum = 0;
    let totalSumRate = 0;

    while (command !== 'Finish') {
        presentation = command
        let sum = 0;
        let rating = 0;
        let sumJudge = 0;

        while (sum < peopleInJury) {
            judge = Number(input[index]);
            index++;
            sumJudge += judge
            totalSumRate += judge
            sum++;
            totalRate++;
        }
        command = input[index];
        index++;
        totalJudgeRate = totalSumRate / totalRate
        rating = sumJudge / peopleInJury
        console.log(`${presentation} - ${rating.toFixed(2)}.`);

    }
    console.log(`Student's final assessment is ${totalJudgeRate.toFixed(2)}.`);
}

trainTheTrainers(["2",
    "While-Loop",
    "6.00",
    "5.50",
    "For-Loop",
    "5.84",
    "5.66",
    "Finish"])