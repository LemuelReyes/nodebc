// # Exercise 163

// * Create a new index163.js
// * Define a add function
// * This function will return a numeric value with result of adding all the numbers that we pass as parameter
// * As we don't know how many parameters we are going to get we need to use a dynamic way to add this functionality
// * Call the add function passing 5 numbers and show the result as output
// * Call the add function passing 10 numbers and show the result as output

const array = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]
function add(array) {
    
    const added = array.reduce((a,b) => a + b)
    return added;
}

console.log(add(array))

