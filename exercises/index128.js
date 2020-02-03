// # Exercise 128

// * Create a new index128.js file
// * Define a iceCreamFlavors array with 10 flavors
// * Remove the last 4 elements using pop
// * Show the iceCreamFlavors items as output
// * Show each removed flavor

const iceCreamFlavors = ['Ferrero', 'Mint', 'Curry', 'Chocolate', 'Vanilla']

const removeFlavorOldest = iceCreamFlavors.pop(iceCreamFlavors.length - 1)
const removeFlavorOlderer = iceCreamFlavors.pop(iceCreamFlavors.length - 2)
const removeFlavorOlder = iceCreamFlavors.pop(iceCreamFlavors.length - 3)
const removeFlavorOld = iceCreamFlavors.pop(iceCreamFlavors.length - 4)

console.log(iceCreamFlavors)
console.log(removeFlavorOldest, removeFlavorOlderer, removeFlavorOlder, removeFlavorOld + ' are the flavors that were removed')