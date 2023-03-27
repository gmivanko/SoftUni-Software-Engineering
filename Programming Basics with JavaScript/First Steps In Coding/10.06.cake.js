function cake(input) {
    let index = 0;
    let length = Number(input[index]);
    index++;
    let width = Number(input[index]);
    index++;
    let command = input[index];
    index++;
    let piecesTaken = 0;
    let piecesLeft = 0;
    let totalNumPieces = length * width;


    while (command !== 'STOP') {
        piecesTaken += Number(command);

        if (totalNumPieces <= piecesTaken) {
            
            break;
        }

        command = input[index];
        index++;

    }
    piecesLeft = Math.abs(totalNumPieces - piecesTaken)
    if (command === 'STOP') {
        console.log(`${piecesLeft} pieces are left.`);
    } else {
        console.log(`No more cake left! You need ${piecesLeft} pieces more.`)
    }

}

cake(["10",
    "10",
    "20",
    "20",
    "20",
    "20",
    "21"])

cake(["10",
    "2",
    "2",
    "4",
    "6",
    "STOP"])
