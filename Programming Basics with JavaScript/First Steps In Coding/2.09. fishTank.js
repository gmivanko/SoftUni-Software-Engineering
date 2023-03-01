function fishTank(input){
    let lenght = Number(input[0]);
    let wight = Number(input[1]);
    let height = Number(input[2]);
    let percent = Number(input[3]);
    
    let volumeAquarium = lenght * wight * height / 1000;
    let usedspace = volumeAquarium* percent / 100;
    let litetsUsed = volumeAquarium - usedspace;
    console.log(litetsUsed)

}

fishTank(["105 ",
"77 ",
"89 ",
"18.5 "]

)