function basketballEquipment(input){
    let annualFee = Number(input[0]);
    let shoes = annualFee - annualFee * 0.4;
    let outfit = shoes - shoes * 0.2;
    let ball = outfit / 4;
    let accessories = ball / 5;
    
    console.log(annualFee + shoes + outfit + ball + accessories)

}

basketballEquipment(["550 "])