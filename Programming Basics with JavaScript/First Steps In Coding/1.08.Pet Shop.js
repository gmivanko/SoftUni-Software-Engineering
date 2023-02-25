function petShop(input){
    let dogs = input[0]
    let cats  = input[1]
    let pricedogs = dogs * 2.5
    let pricecats = cats * 4
    let sum = ( (pricedogs + pricecats) + " " + "lv." )
    console.log(sum)
}

petShop([5, 4])