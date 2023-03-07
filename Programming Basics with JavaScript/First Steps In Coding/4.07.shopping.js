function shopping(input) {
    let budget = Number(input[0]);
    let numVideo = Number(input[1]);
    let numProcess = Number(input[2]);
    let numRam = Number(input[3]);

    let videocards = 250;
    let processor = videocards * numVideo * 0.35;
    let ram = videocards * numVideo * 0.10;
    let sum = videocards * numVideo + processor * numProcess + ram * numRam;

    if (numVideo > numProcess) {
        totalSum = sum * 0.85;
    } else {
        totalSum = sum
    }

    let leftsum = Math.abs(budget - totalSum);

    if (totalSum <= budget) {
        console.log(`You have ${leftsum.toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${leftsum.toFixed(2)} leva more!`);
    }


}

shopping(['900', '2', '1', '3'])
shopping(["920.45", "3", "1", "1"])
