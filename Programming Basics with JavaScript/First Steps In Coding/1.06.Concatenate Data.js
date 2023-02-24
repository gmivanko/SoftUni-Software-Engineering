function concatenateData(input){
    let firstName = input[0]
    let lastName = input[1]
    let age = Number(input[2])
    let city = input[3]
    let sum = `You are ${firstName} ${lastName}, a ${age}-years old person from ${city}.`
    console.log(sum)

}
concatenateData(["Ivan" , "Dimitrov" , 35 , "Elin Pelin"])