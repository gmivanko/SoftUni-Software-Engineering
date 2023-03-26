function walking(input) {
    let index = 0;
    let command = input[index];
    index++;
    let sumStep = 0;

    while (command !== 'Going home') {
        step = Number(command);
        sumStep += step

        if (sumStep >= 10000) {
            let diff = sumStep - 10000;

            console.log(`Goal reached! Good job!`);
            console.log(`${diff} steps over the goal!`);
            break;
            // return;
        }
        command = input[index];
        index++
    }
    if (command === 'Going home') {
        command = input[index];
        index++
        sumStep += Number(command)
        if (sumStep >= 10000) {
            let diff = sumStep - 10000;

            console.log(`Goal reached! Good job!`);
            console.log(`${diff} steps over the goal!`);
            // break;
            // return;
        } else {
            let diff = Math.abs(sumStep - 10000)
            console.log(`${diff} more steps to reach goal.`);
        }
    }
}

walking(["1500", "300", "2500", "3000", "Going home", "200"])
walking(['1500', '3000', '250', '1548', '2000', 'Going home', '2000'])
