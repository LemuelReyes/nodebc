// # Exercise 120

// * Create a new index120.js file
// * Define a students variable and assign an empty array
// * Assing students values in the following indexes: 0, 1, 2, 3, 4 and 5
// * Show the index number and value as otput:
// ```
// index 0: Marta
// ```

const students = []

students[0] = 'Marta'
students[1] = 'Lem'

console.log(`
    Index ${students.indexOf('Marta')}: ${students[0]}
`)
