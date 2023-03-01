function foodDelivery(input){
    let chickenMenu = 10.35;
    let fishMenu = 12.4;
    let vegetarianMenu = 8.15;
    //dessert = 20% total price
    //delivery = 2.5
    let numberChickenMenus = Number(input[0]);
    let numberFishMenus = Number(input[1]);
    let numbersVegetarianMenus =  Number(input[2]);
    let totalPrice = numberChickenMenus * chickenMenu + numberFishMenus *fishMenu + numbersVegetarianMenus * vegetarianMenu; 
    let totalPriceWithDessert = totalPrice * 1.2;
    let totalPriceWithDelirevy = totalPriceWithDessert + 2.5;
    console.log(totalPriceWithDelirevy)

}

foodDelivery(["9 ",
"2 ",
"6 "]

)