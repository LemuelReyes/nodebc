// # Exercise 131

// * Create a new index131.js file
// * Define a femaleStudents array and assign 5 students
// * Define a maleStudents array and assign 5 students
// * Define a students array and assign all students name using the femaleStudents and maleStudents arrays
// * Sort the students list
// * Show the following output:
//   1. Each **femaleStudents** name `using numeric indexes`
//   2. Each **maleStudents** name `using while`
//   3. Each **students** name `using for`

const femaleStudents = ['Jen', 'Alicia', 'Meredith', 'Pam', 'Ashley']
const maleStudents = ['Lemuel', 'Joe', 'Brian', 'Raymond', 'Jackson']
const studentsList = [...femaleStudents, ...maleStudents]
const sortStudentsList = studentsList.sort()

// Output sorted student names alphabetically

console.log(sortStudentsList)


// Output concatenated male and female list

console.log(studentsList)

// Output female student names using numeric index 

femaleStudentsNames = [femaleStudents[0], femaleStudents[1], femaleStudents[2], femaleStudents[3], femaleStudents[4]]

console.log(femaleStudentsNames)

// Loop through studentsList using for loop

const studentListLoop = function(studentsList) {
    for(let i = 0; i < studentsList.length - 1; studentsList++) {
        console.log(studentsList)
    }
}

studentListLoop(studentsList)


// Output male student names using while loop

const maleStudentsLoop = function(maleStudents) {
    
    let i = 0 

    while ( i < maleStudents.length - 1) {
        console.log(`${maleStudents.join(', ')}`)
        maleStudents++;
    }
}

maleStudentsLoop(maleStudents)