// # Exercise 111

// * Create a new index111.js file
// * Define a even function that has one numeric parameter and returns a boolean value
// * This function must validate if the number passed as parameter is an even number or not (true or false)
// * Call this function using the following parameters: 2, 5, 3, 24, 12
// * If the number is even show the following message: %number% is even
// * Else show the following message: %number% is odd

const even = function(number) {

        if (number % 2 === 0 ) {
            console.log(`${number} is even`)            
        } else {
            console.log(`${number} is odd`)
        }
}

even(2);
