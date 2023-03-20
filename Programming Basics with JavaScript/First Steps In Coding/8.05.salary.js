function salary(input) {
    let tabs = Number(input[0]);
    let salary = Number(input[1]);
    let fine = 0;

    for (let i = 2; i <= tabs + 1; i++) {
        let openBrowser = String(input[i])

        switch (openBrowser) {
            case "Facebook": fine += 150; break;
            case "Instagram": fine += 100; break;
            case "Reddit": fine += 50; break;
        }
    }
    let rest = Number(Math.abs(salary - fine));
    if (salary <= fine) {
        console.log("You have lost your salary.");
    } else {
        console.log(rest);
    }
}


salary(["10",
    "750",
    "Facebook",
    "Dev.bg",
    "Instagram",
    "Facebook",
    "Reddit",
    "Facebook",
    "Facebook"])
salary(["3",
    "500",
    "Github.com",
    "Stackoverflow.com",
    "softuni.bg"])

