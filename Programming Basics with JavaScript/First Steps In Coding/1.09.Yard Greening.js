function yardGreening(input){
    let sqm = Number(input[0])
    let sum = sqm * 7.61
    let dissum = 0.18 * sum
    let finalSum = sum - dissum

    console.log(`The final price is: ${finalSum} lv.`)
    console.log(`The discount is: ${dissum} lv.`)

}

yardGreening(["550"])