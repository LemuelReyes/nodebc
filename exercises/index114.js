// # Exercise 114

// * Create a new index114.js file
// * Define a revert function that accepts a string parameter
// * This function shows the reverted text parameter
// * For example if you call the revert function with 'hello' the function will show: olleh
// * Call this function using at least 5 different words :)

const revert = function(word) {
    console.log(word.split('').reverse().join("").toLowerCase());
}

revert('Lemuel')