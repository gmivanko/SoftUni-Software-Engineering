function radiansToDegrees(input){
    let radius = Number(input[0]);
    let degrees = radius * 180 / Math.PI;
    console.log(degrees)
}

radiansToDegrees(["3.1416"])