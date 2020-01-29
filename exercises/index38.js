// # Exercise 43

// * Create a new index43.js file
// * Define a text variable with the following value: `game of thrones`
// * Define 3 variables with the following names:
//   * firstChar
//   * secondChar
//   * thirdChar
// * Assign the firstChar the first char from the text variable
// * Assign the secondChar the char at index 5 from the text variable
// * Assign the thirdChar the char at index 8 from the text variable
// * Define a variable with the result name and assign the result value from using concat between firstChar, secondChar and thirdChar
// * Transform the result variable to uppercase
// * Show the result value as output: `the final result is: GOT`

// * What happens when you use an invalid index number (for example, 1000)?  Try it!

const name = 'Kobe'

const firstChar = name.charAt(0).toUpperCase()
const secondChar = name.charAt(1).toUpperCase()
const thirdChar = name.charAt(2).toUpperCase()
const fourthChar = name.charAt(3).toUpperCase()
const result = `Who the GOAT? : ${firstChar}${secondChar}${thirdChar}${fourthChar}`

console.log(firstChar)
console.log(secondChar)
console.log(thirdChar)
console.log(fourthChar)
console.log(result)