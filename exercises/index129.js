// # Exercise 129

// * Create a new index129.js file
// * Define a iceCreamFlavors array with 10 flavors
// * Iterate over each iceCreamFlavors items and show the flavors name as output

const iceCreamFlavors = ['Chocolate', 'Vanilla', 'Mint', 'Pecan', 'Ferrero', 'Rocky Road', 'Bubblegum', 'Mango', 'Papaya', 'Caramel']

const flavorsAvailable = function(iceCreamFlavors) {
    for(let i = 0; i < iceCreamFlavors.length; iceCreamFlavors++) {
        console.log(` 
        These are the flavors available in our shop: 
        
        ${iceCreamFlavors.join(', ')}`)
    }
}

flavorsAvailable(iceCreamFlavors)