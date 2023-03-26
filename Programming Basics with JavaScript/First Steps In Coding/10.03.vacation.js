function vacation(input) {
    let index = 0;
    let neededMoney = Number(input[index]);
    index++;
    let availableMoney = Number(input[index]);
    index++;

    let spendDays = 0;
    let dayPast = 0;
    // let savedMoney = true;

    while (availableMoney < neededMoney) {
        let typeAction = input[index];
        index++;
        let amount = Number(input[index]);
        index++;
        dayPast++;
        switch (typeAction) {
            case 'spend':
                availableMoney -= amount;
                spendDays++;
                if (availableMoney < 0) {
                    availableMoney = 0;
                }
                break;
            case 'save':
                availableMoney += amount;
                spendDays = 0;
                break;
        }
        if (spendDays === 5) {
            // savedMoney = false;
            break;
        }

    }
    if (spendDays === 5) {
        // if (!savedMoney) {
        console.log(`You can't save the money.`);
        console.log(dayPast);
    } else {
        console.log(`You saved the money for ${dayPast} days.`);

    }
}

vacation(["2000",
    "1000",
    "spend",
    "1200",
    "save",
    "2000"])
vacation(["110",
    "60",
    "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10"])
vacation(["250",
    "150",
    "spend",
    "50",
    "spend",
    "50",
    "save",
    "100",
    "save",
    "100"])
