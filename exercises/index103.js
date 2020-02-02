// # Exercise 103

// * Create a new index103.js file
// * Define a evenNumbers variable and assign a function as value
// * When executed the evenNumbers function will print even numbers between 0 and 100 as output
// * Execute this function 5 times

let evenNumbers = function(){
    for(let number = 0; number < 101; number++) {
        if (number % 2 === 0) {
            console.log(number);
        }
    }
}

evenNumbers();

