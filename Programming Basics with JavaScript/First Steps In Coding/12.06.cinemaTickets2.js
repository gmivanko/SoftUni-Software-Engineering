function cinemaTickets(input) {
    let index = 0;
    let command = input[index];
    index++;
    let studentTicketCount = 0;
    let standardTicketCount = 0;
    let kidTicketCount = 0;

    while (command !== 'Finish') {
        let freeSpaces = Number(input[index]);
        index++;
        let ticketType = input[index];
        index++;
        let spacesTaken = 0;

        while (ticketType !== 'End') {
            spacesTaken++;

            if (ticketType === 'student') {
                studentTicketCount++;
            } else if (ticketType === 'standard') {
                standardTicketCount++;
            } else {
                kidTicketCount++;
            }
            if (spacesTaken === freeSpaces) {
                break;
            }
            ticketType = input[index];
            index++;
        }

        let takenSpacesPercent = (spacesTaken / freeSpaces) * 100;
        console.log(`${command} - ${takenSpacesPercent.toFixed(2)}% full.`);

        command = input[index];
        index++;
    }
    let totalTicketCount = studentTicketCount + standardTicketCount + kidTicketCount;
    let studentTicketPercent = (studentTicketCount / totalTicketCount * 100).toFixed(2);
    let standardTicketPercent = (standardTicketCount / totalTicketCount * 100).toFixed(2);
    let kidTicketPercent = (kidTicketCount / totalTicketCount * 100).toFixed(2);

    console.log(`Total tickets: ${totalTicketCount}`);
    console.log(`${studentTicketPercent}% student tickets`);
    console.log(`${standardTicketPercent}% standard tickets.`);
    console.log(`${kidTicketPercent}% kids tickets.`);


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
