function depositCalculator(input){
    let deposit = Number(input[0])
    let term = Number(input[1])
    let rate = Number(input[2])
    let interest = deposit * (rate / 100)
    let month = interest / 12 
    console.log(deposit + term * month)

}

depositCalculator(["2350","6","7"])