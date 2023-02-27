function vacationBooksList(input){
    let pageCount = Number(input[0]);
    let readePageForOneHour = Number(input[1]);
    let dayCount = Number(input[2]);

    let needTime = pageCount / readePageForOneHour;
    let needHoursForDay = needTime / dayCount;
    console.log(needHoursForDay)
}

vacationBooksList(["432 ",
"15 ",
"4 "]

)