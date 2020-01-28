// # Exercise 36

// * Create a new index36.js file
// * Define firstNumber variable and assign the following value: 10
// * Define secondNumber variable and assign the following value: 20
// * Show the following output:
//   * Both variables have the same value: true/false
//   * Both variables don't have the same value: true/false

// let firstNumber = 10;
// let secondNumber = 20;

// // Correct numbers

// let firstTest= 10;
// let secondTest = 20;

// // Incorrect numbers

// let wrongAnswerFirst = 11;
// let wrongAnswerSecond = 22;

// // Pass test, both numbers correct

// let pass = firstNumber === firstTest && secondNumber === secondTest;

// // Fail test, both numbers incorrect

// let noPass = firstNumber === wrongAnswerFirst && secondNumber === secondAnswerSecond;

// console.log(
//     `
//     Are both the same number?: ${pass}
//     Are both the same number: ${noPass}
//     `
// );

let firstNumber = 10;
let secondNumber = 20;

let result = firstNumber == secondNumber;

console.log('Both variable have the same value', result);
console.log('Both variable don\'t have the same value', !result);