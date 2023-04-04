function cinemaTickets(input) {
    let index = 0;
    let command = input[index];
    index++;
    let sumStudent = 0;
    let sumStandard = 0;
    let sumKid = 0;
    let percentStudents = 0;
    let percentStandard = 0;
    let percentKid = 0;
    let sumTicket = 0;

    while (command !== 'Finish') {
        let film = command;
        let numPlaces = Number(input[index]);
        index++;
        let ticket = 0;
        let student = 0;
        let standard = 0;
        let kid = 0;
        let percentEmployment = 0;

        while (command !== 'End') {
            command = input[index];
            index++;
            switch (command) {
                case 'student': ticket++; student++; break;
                case 'standard': ticket++; standard++; break;
                case 'kid': ticket++; kid++; break;
            }
            if (command === 'End' || ti === numPlaces) {
                command = input[index]
                index++
                break;
            }
            if (command === 'Finish') {
                break;
            }
        }
        sumStudent += student;
        sumStandard += standard;
        sumKid += kid;
        sumTicket += ticket
        percentEmployment = ticket / numPlaces * 100
        console.log(`${film} - ${percentEmployment.toFixed(2)}% full.`);
        percentStudents = sumStudent / sumTicket * 100;
        percentStandard = sumStandard / sumTicket * 100;
        percentKid = sumKid / sumTicket * 100;
    }

    console.log(`Total tickets: ${sumTicket}`);
    console.log(`${percentStudents.toFixed(2)}% student tickets.`);
    console.log(`${percentStandard.toFixed(2)}% standard tickets.`);
    console.log(`${percentKid.toFixed(2)}% kids tickets.`);
}

cinemaTickets(['Shutter Island',
    '9',
    'standard',
    'standard',
    'standard',
    'student',
    'student',
    'student',
    'kid',
    'kid',
    'kid',
    'Rush',
    '9',
    'standard',
    'standard',
    'standard',
    'student',
    'student',
    'student',
    'kid',
    'kid',
    'kid',
    'Deadpool',
    '9',
    'standard',
    'standard',
    'standard',
    'student',
    'student',
    'student',
    'kid',
    'kid',
    'kid',
    'Finish'])
