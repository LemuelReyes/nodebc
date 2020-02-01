// # Exercise 99

// * Create a new index99.js file
// * Add all even numbers bettwen 0 and 1000 using for statement
// * The iteration must break after finding the first 20 even numbers
// * Show the result as output

for(let number = 0; number <= 1000; number+=2) {
    if(number < 60) {
        console.log(number)
    } else {
        break;
    }
}
