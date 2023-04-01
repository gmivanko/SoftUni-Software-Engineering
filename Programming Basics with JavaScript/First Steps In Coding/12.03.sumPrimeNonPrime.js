function sumPrimeNonPrime(input) {
    let index = 0;
    let command = input[index];
    index++;

    let sumPrimeNums = 0;
    let sumNonPrimeNums = 0;

    while (command !== 'stop') {
        let num = Number(command);

        if (num < 0) {
            console.log('Number is negative.'); 
            command = input[index];
            index++;
            continue;
        }
        let isPrime = true;

        for (let divider = 2; divider < num; divider++) {
            if (num % divider === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime === true) {
            sumPrimeNums += num
        } else {
            sumNonPrimeNums += num
        }
        command = input[index];
        index++;
    }
    console.log(`Sum of all prime numbers is: ${sumPrimeNums}`);
    console.log(`Sum of all non prime numbers is: ${sumNonPrimeNums}`);

}

sumPrimeNonPrime(["30",
    "83",
    "33",
    "-1",
    "20",
    "stop"])
