function building(input) {
    let floor = Number(input[0]);
    let room = Number(input[1]);

    for (let i = floor; i > 0; i--) {
        let buff = '';
        for (let r = 0; r < room; r++) {
            if (i === floor) {
                buff += `L${i}${r} `;
            } else if (i % 2 === 0) {
                buff += `O${i}${r} `;
            } else {
                buff += `A${i}${r} `;
            }

        }
        console.log(buff);

    }

}

building(["6", "4"])
building(["9", "5"])
building(["4", "4"])