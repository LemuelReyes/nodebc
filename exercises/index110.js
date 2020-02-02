// # Exercise 110

// * Create a new index110.js file
// * Define the average function that accepts 5 numbers as parameter
// * Call the average function with the following values: 2, 4, 10, 20, 30
// * After executing the call show the following message: The average is %average%

const average = function(a, b, c, d, e) {

    const array = [a, b, c, d, e]
    const sum = array.reduce((a, b) => a + b, 0);
    const avg = (sum / array.length) || 0;

    console.log(`The average is: ${avg}.`);
    
}


average(1, 3, 5, 7, 10)