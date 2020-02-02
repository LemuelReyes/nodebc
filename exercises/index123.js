// # Exercise 123

// * Create a new index123.js file
// * Define a students array and assign more than 6 student names
// * Show the second and sixth students name in uppercase
// * Also, show the students array length with the following format:

// ```
// The students array has 8 items
// ```

// * (This is a example and you should replace 8 for your students array length)

const students = ['Lemuel', 'Raymond', 'Brian', 'Keyosha', 'Juliani', 'Zara']

const uppercaseStudents = [students[1].toUpperCase(), students[5].toUpperCase()]

students[6] = 'Joe from the block'
students[7] = 'Jenny from the block'

const lengthStudentsArray = students.length;

console.log(uppercaseStudents)
console.log(`The students array has ${students.length} items`)
