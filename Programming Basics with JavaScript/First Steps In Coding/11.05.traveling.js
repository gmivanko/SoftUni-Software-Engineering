function traveling(input) {
    let index = 0;
    let command = input[index];
    index++;

    while (command !== 'End') {
        let country = command;
        let budget = Number(input[index]);
        index++;
        let sum = 0;

        while (sum < budget) {
            let money = Number(input[index]);
            index++;
            sum += money;
        }
        console.log(`Going to ${country}!`);
        command = input[index];
        index++;

    }
}

traveling(["Greece",
    "1000",
    "200",
    "200",
    "300",
    "100",
    "150",
    "240",
    "Spain",
    "1200",
    "300",
    "500",
    "193",
    "423",
    "End"])



// function traveling(input) {

//     for (let i = 0; i < input.length; i++) {

//         let currentInput = input[i];
//         let isNum = Number(currentInput);
//         if (currentInput === 'End') {
//             break;
//         }

//         if (!isNum) {
//             console.log(`Going to ${input[i]}!`);
//         }
//     }
// } 