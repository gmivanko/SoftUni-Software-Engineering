function projectsCreation(input){
    let name = input[0]
    let numberProjects  = input[1]
    let time = numberProjects * 3
    let sum = ("The architect " + name + " will need " + time + " hours to complete " + numberProjects + " project/s.")
    console.log(sum)
}

projectsCreation(["Ivan", 4])