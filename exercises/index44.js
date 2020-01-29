// # Exercise 44

// * Create a new index44.js file
// * Define a text variable and assign the following value: HELLO
// * Define a result variable
// * Get each char from the text variable and revert the text assigning it to the result variable
// * At the end you should be able to show the following text: OLLEH
// * Once you reverted the text, transform it to lowercase
// * Show the final output: `the final result is: olleh`
// * It kind of sound spanish, right?.. ole!!! (lol)

const greeting = 'HELLO'
const first = greeting.charAt(0).toLowerCase()
const second = greeting.charAt(1).toLowerCase()
const third = greeting.charAt(2).toLowerCase()
const fourth = greeting.charAt(3).toLowerCase()
const fifth = greeting.charAt(4).toLowerCase()

const revertMessage = `
    The final result is: ${fifth}${fourth}${third}${second}${first}
`

console.log(revertMessage)


// FASTER WAY

// const greeting = 'HELLO';
// const result = greeting.split('').reverse().join('').toLowerCase(); 
// console.log(result);