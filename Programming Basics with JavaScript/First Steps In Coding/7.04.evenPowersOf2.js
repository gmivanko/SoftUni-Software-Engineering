function evenPowersOf2(input) {
    let n = Number(input[0]);
    // let num = 1;
    // for (let i = 0; i <= n; i += 2) {
    //     console.log(num);
    //     num = num * 2 * 2;
    // }
    for (let i = 0; i <= n; i += 2) {
        let res = Math.pow(2,i);
        console.log(res);
    }

}

evenPowersOf2(["7"])