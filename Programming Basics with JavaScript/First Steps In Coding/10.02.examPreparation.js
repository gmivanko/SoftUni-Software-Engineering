function examPreparation(input) {
    let index = 0;
    let weakGrades = Number(input[0]);
    index++;

    let command = input[index];
    index++
    // let command = input[index] % 2 === 1;
    // let grades = input[index] % 2 === 0;
    // index++

    let weakGradesCounter = 0;
    let sum = 0;
    let countProblems = 0;
    let taskName = "";
    // let needBreak = false;

    while (command !== 'Enough') {
        taskName = command;
        let grade = Number(input[index]);
        index++;
        countProblems++;
        sum += grade

        if (grade <= 4) {
            weakGradesCounter++;
            if (weakGrades === weakGradesCounter) {
                // needBreak = true;
                break;
            }

        }

        command = input[index];
        index++;

    }

    let average = sum / countProblems;

    if (command !== 'Enough') {
        // if (needBreak) {
        console.log(`You need a break, ${weakGradesCounter} poor grades.`);
    } else {
        console.log(`Average score: ${average.toFixed(2)}`);
        console.log(`Number of problems: ${countProblems}`);
        console.log(`Last problem: ${taskName}`);
    }
}

// examPreparation(["3",
//     "Money",
//     "6",
//     "Story",
//     "4",
//     "Spring Time",
//     "5",
//     "Bus",
//     "6",
//     "Enough"])
examPreparation(["2",
    "Income",
    "3",
    "Game Info",
    "6",
    "Best Player",
    "4"])
