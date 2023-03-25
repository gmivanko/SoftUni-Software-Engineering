function graduation(input) {
    let index = 0;
    let name = input[index];
    index++;
    let negativeGradeCount = 0;
    let sumGrade = 0;
    let i = 1;
    let haxExcluded = false;

    while (i <= 12) {
        let currentGrade = Number(input[index]);
        index++;
        if (currentGrade < 4.00) {
            negativeGradeCount++;
            if (negativeGradeCount == 2) {
                haxExcluded = true;
                break;
            }
            continue;
        }
        sumGrade += currentGrade;
        i++;

    }
    let averageGrade = sumGrade / 12;
    if (haxExcluded) {
        console.log(`${name} has been excluded at ${i} grade`);
    } else {
        console.log(`${name} graduated. Average grade: ${averageGrade.toFixed(2)}`);
    }
}

graduation(["Gosho", 
"5",
"5.5",
"6",
"5.43",
"5.5",
"6",
"5.55",
"5",
"6",
"6",
"5.43",
"5"])
