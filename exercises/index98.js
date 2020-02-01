// # Exercise 98

// * Create a new index98.js file
// * Add all the numbers bettwen 0 and 1000 using for statement
// * The iteration must break if the partial result is bigger than 400
// * Show the result as output

for (let number = 0; number < 1001; number++)  {
    if (number < 400) {
        console.log(number);
    } else {
        break;
    }
}