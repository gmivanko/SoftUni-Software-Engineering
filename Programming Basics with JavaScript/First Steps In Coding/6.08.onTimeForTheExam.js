function onTimeForTheExam(input) {
    let examTimeH = Number(input[0]);
    let examTimeM = Number(input[1]);
    let arrivalHour = Number(input[2]);
    let arrivalMin = Number(input[3]);
    let examTotalMin = examTimeH * 60 + examTimeM;
    let arrivalTotalMin = arrivalHour * 60 + arrivalMin;
    let diff = Math.abs(examTotalMin - arrivalTotalMin);
    let hours = 0;
    let minutes = 0;

    if (examTotalMin < arrivalTotalMin) {
        console.log("Late");
    } else if (examTotalMin - arrivalTotalMin <= 30) {
        console.log("On time");
    } else {
        console.log('Early');
    }
    if (examTotalMin > arrivalTotalMin && diff < 60 && diff >= 1) {
        console.log(`${diff} minutes before the start`)
    } else if (examTotalMin > arrivalTotalMin && diff >= 60) {
        hours = Math.floor(diff / 60)
        minutes = diff % 60;
        if (minutes < 10) {
            console.log(`${hours}:0${minutes} hours before the start`)
        } else {
            console.log(`${hours}:${minutes} hours before the start`)
        }
    }
    if (examTotalMin < arrivalTotalMin && diff >= 1 && diff < 60) {
        // diff = Math.abs(diff);
        console.log(`${diff} minutes after the start`);
    } else if (examTotalMin < arrivalTotalMin && diff >= 60) {
        // diff = Math.abs(diff);
        hours = Math.floor(diff / 60)
        minutes = diff % 60;
        if (minutes < 10) {
            console.log(`${hours}:0${minutes} hours after the start`)
        } else {
            console.log(`${hours}:${minutes} hours after the start`)
        }
    }
}

onTimeForTheExam(["9", "30", "9", "50"])
onTimeForTheExam(["9", "00", "8", "30"])
onTimeForTheExam(["16", "00", "15", "00"])
onTimeForTheExam(["9", "00", "10", "30"])
onTimeForTheExam(["14", "00", "13", "55"])
onTimeForTheExam(["11", "30", "8", "12"])
onTimeForTheExam(["10", "00", "10", "00"])
onTimeForTheExam(["11", "30", "10", "55"])
// onTimeForTheExam(["11", "30", "12", "29"])