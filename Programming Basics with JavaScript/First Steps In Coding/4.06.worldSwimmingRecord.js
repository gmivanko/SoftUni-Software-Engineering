function worldSwimmingRecord(input){
    let timeRecord = Number(input[0]);
    let distRecord = Number(input[1]);
    let secForOnaMeter = Number(input[2]);
    let time = distRecord * secForOnaMeter;
    let delay = Math.floor(distRecord / 15) * 12.5;
    time =  time + delay; 
    

    if (time < timeRecord) {
        console.log(`Yes, he succeeded! The new world record is ${time.toFixed(2)} seconds.`)
    } else {
        let diff = Math.abs(time - timeRecord)
        console.log(`No, he failed! He was ${diff.toFixed(2)} seconds slower.`)
    }

}

worldSwimmingRecord(["10464",
"1500",
"20"])
