function moving(input) {
    let index = 0;
    let width = Number(input[index]);
    index++;
    let length = Number(input[index]);
    index++;
    let height = Number(input[index]);
    index++;

    let volume = width * length * height;
    let numCartons = 0;
    let cartons = 0;
    let diff = 0;

    while (numCartons !== 'Done') {
        cartons += Number(numCartons);

        if (volume < cartons) {

            break;

        }

        numCartons = input[index];
        index++;
    }
    diff = Math.abs(volume - cartons)
    if (numCartons === 'Done') {
        console.log(`${diff} Cubic meters left.`)
    } else {
        console.log(`No more free space! You need ${diff} Cubic meters more.`)
    }

}

moving(["10",
    "10",
    "2",
    "20",
    "20",
    "20",
    "20",
    "122"])
moving(["10",
    "1",
    "2",
    "4",
    "6",
    "Done"])
