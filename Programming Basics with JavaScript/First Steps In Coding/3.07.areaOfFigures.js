function areaOfFigures(input){
    let type = input[0];
    let a = Number(input[1]);
    let area = 0;
    if (type === "square" ) {
        //let a = Number(input[1]);
        area = a * a;
        //console.log(area.toFixed(3))
    } else if (type === "rectangle") {
        //let a = Number(input[1])
        let b = Number(input[2]);
        area = a * b
        //console.log(area.toFixed(3))
    } else if (type === "circle") {
        //let a = Number(input[1])
        area = Math.PI * a * a; //Math.PI * Math.pow(a*2)
        //console.log(area.toFixed(3))
    } else if (type === "triangle") {
        //let a = Number(input[1])
        let h = Number(input[2]);
        area = a * h / 2;
       //console.log(area.toFixed(3))
    }
    console.log(area.toFixed(3));
}

areaOfFigures(["triangle",
"4.5",
"20"])
