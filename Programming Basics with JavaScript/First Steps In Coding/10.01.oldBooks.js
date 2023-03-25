function oldBooks(input) {
    let index = 0;
    let searchBook = input[index];
    index++;
    let command = input[index];
    index++;
    let bookChecked = 0;

    while (command !== 'No More Books') {
        if (command === searchBook) {
            console.log(`You checked ${bookChecked} books and found it.`);
            return;
            // break;
        }
        bookChecked++;
        command = input[index];
        index++;

    }

    console.log(`The book you search is not here!`);
    console.log(`You checked ${bookChecked} books.`);

    // if (command !== searchBook) {                               // if (command === 'No More Books')
    //     console.log(`The book you search is not here!`);
    //     console.log(`You checked ${bookChecked} books.`);
    // }

}

oldBooks(["The Spot",
    "Hunger Games",
    "Harry Potter",
    "Torronto",
    "Spotify",
    "No More Books"])
