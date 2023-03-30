function equalSumsEvenOddPosition(input) {
    let startNum = Number(input[0]);
    let finalNum = Number(input[1]);
    let result = '';

    for (let i = startNum; i <= finalNum; i++) {
        let iStr = i.toString();
        let sumOdd = 0;
        let sumEven = 0;

        for (let index = 0; index < iStr.length; index++) {
            let currentNum = Number(iStr[index]);
            let position = index + 1;

            if (position % 2 === 0) {
                sumEven += currentNum;
            } else {
                sumOdd += currentNum;
            }
        }

        if (sumEven === sumOdd) {
            result += `${iStr} `;
        }
    }
     console.log(result);

}


equalSumsEvenOddPosition(["100000",
    "100050"])
