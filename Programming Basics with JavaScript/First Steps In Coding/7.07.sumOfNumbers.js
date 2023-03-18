function sumOfNumbers(input) {
    let text = String(input[0]);
    let sum = 0;

    for (let i = 0; i < text.length; i++) {
        let num = Number(text[i]);
        sum += num;
    }
    console.log(`The sum of the digits is:${sum}`);
}

sumOfNumbers(["564891"])