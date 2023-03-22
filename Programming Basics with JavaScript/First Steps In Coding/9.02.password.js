function password(input) {
    // let username = input[0];
    // let pass = input[1];
    // let index = 2;
    let index = 0;
    let username = input[index];
    index++;
    let pass = input[index];
    index++;


    let currentPass = input[index];
    index++;
    while (pass !== currentPass) {
        currentPass = input[index];
        index++
    }
    console.log(`Welcome ${username}!`);

}

password(["Nakov",
    "1234",
    "Pass",
    "1324",
    "1234"])
