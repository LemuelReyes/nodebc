// # Exercise 133

// * Create a new index133.js file
// * Define a mutants array with the following values:
// ```
// Professor X
// Cyclops
// Iceman
// Angel
// Magneto
// Beast
// Phoenix
// Logan
// Gambit
// ```

// ## First part
// * Iterate over the mutants items
// * Show each mutant name
// * Break the execution in case Magneto is part of the mutants list

// ## Second part
// * Fin out Magneto position and remove it from the mutants array
// * Iterate over the array without Magento on it and show each mutant name in upper case and the item position

let mutants = ['Professor X', 'Cyclops', 'Iceman', 'Angel', 'Magneto', 'Beast', 'Phoenix', 'Logan', 'Gambit']

for(let i = 0; i < mutants.length - 1; mutants++) {

    if(mutants.includes('Magneto')) {
        console.log('Magneto was found, shut down mutant database search')
        break;   
    } else {
        console.log(mutants)
    }
}