// # Exercise 100

// * Create a new index100.js file
// * Define a function that will show even numbers from 0 to 100 as output

function printEven(num) {
    for (let i=1; i<num; i++) {
      if(i % 2 === 0) {
        console.log(i);
      }
    }
  }

printEven(100)