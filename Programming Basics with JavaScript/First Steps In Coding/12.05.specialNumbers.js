function specialNumbers(input) {
    let n = Number(input[0]);
    let index = 0;
    let result = '';

    for (let i = 1111; i <= 9999; i++) {
        let strI = i.toString();
        let sum = 0;

        for (let index = 0; index < strI.length; index++) {
            let currentNum = Number(strI[index]);
            // index++;

            if (n % currentNum === 0) {
                sum++;
                // console.log(i);

                // index++;
                // } else if (index === strI.length) {
                //     i = Number(strI)
            }
            if (sum === 4) {
                result += `${i} `

            }
        }
    }
    console.log(result);
}

specialNumbers(["3"])
// specialNumbers(["11"])
// specialNumbers(["16"])