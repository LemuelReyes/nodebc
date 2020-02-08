// # Exercise 153

// * Create a new index153.js
// * Define a arithmetic variable and assing a literal value with the following methods:
//   * add
//   * subtract
//   * multiply
//   * divide
//   * remainder
// * Each method accepts 2 numeric parameters and shows the operation result 
// * So, add will add both numbers together and log the result (the rest of the methods work in the same way)
// * Show an error if the parameters values are not numbers
// * Call the methods:
// ```
// add(2, 10)
// subtract(10, 5)
// multiply(3, 100)
// divide(40, 2)
// remainder(20, 2)
// ```

const arithmetic = {
    add: (num1, num2) => num1 + num2,
    subtract: (num1, num2) => num1 - num2,
    multiply: (num1, num2) => num1 * num2,
    divide: (num1, num2) => num1 / num2,
    remainder: (num1, num2) => num1 % num2
}

console.log(arithmetic.add(5,5))
console.log(arithmetic.subtract(10, 5))
console.log(arithmetic.divide(100, 5))
console.log(arithmetic.remainder(42, 10))