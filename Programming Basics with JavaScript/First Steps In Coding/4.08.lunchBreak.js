function lunchBreak(input) {
    let serialName = input[0];
    let timeEp = Number(input[1]);
    let timeRest = Number(input[2]);
    let timeLunch = timeRest / 8;
    let timeToRest = timeRest / 4;
    let leftTime = timeRest - timeLunch - timeToRest;
    let leftTimeAll = Math.abs(leftTime - timeEp);

    if (leftTime >= timeEp) {
        console.log(`You have enough time to watch ${serialName} and left with ${Math.ceil(leftTimeAll)} minutes free time.`);
    } else {
        console.log(`You don't have enough time to watch ${serialName}, you need ${Math.ceil(leftTimeAll)} more minutes.`);
    }

}

lunchBreak(["Game of Thrones",
    "60",
    "96"])
