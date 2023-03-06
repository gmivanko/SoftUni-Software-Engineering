function time15Minutes(input){
    let hour = Number(input[0]);
    let min = Number(input[1]);
    let timeMin = hour * 60 + min;
        timeMin = timeMin + 15;
    let hours = Math.floor(timeMin / 60);
    let minutes = timeMin % 60;
    //let h = hours % 24    

    if (hours > 23) {
        hours = 0
    }
        //if (hours === 24) {
        //    hours = 0;
        //}

    if (minutes < 10) {
       console.log(`${hours}:0${minutes}`); //console.log(`${h}:0${minutes}`);
    } else {
        console.log(`${hours}:${minutes}`); //console.log(`${h}:${minutes}`); 
    }

}

time15Minutes(["0", "08"])