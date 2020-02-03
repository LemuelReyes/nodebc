// # Exercise 127

// * Create a new index127.js file
// * Define a iceCreamFlavors array with 10 flavors
// * Remove the first 2 elements using shift
// * Show the iceCreamFlavors items as output
// * Show each removed flavor

const iceCreamFlavors = ['Mint', 'Curry', 'Chocolate', 'Vanilla']

const removeFirstFlavor = iceCreamFlavors.shift(0)
const removeSecondFlavor = iceCreamFlavors.shift(1)

console.log(iceCreamFlavors)
console.log(removeFirstFlavor)
console.log(removeSecondFlavor)