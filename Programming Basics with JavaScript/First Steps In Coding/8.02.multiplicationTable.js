function multiplicationTable(input) {
    let num = Number(input[0]);
    let sum = 0;

    for (let i = 1; i <= 10; i++) {
        sum = num * i;
        console.log(`${i} * ${num} = ${sum}`);

    }
}


multiplicationTable(["5"])