// # Exercise 138

// * Create a new index138.js file
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

// * Iterate over the mutants array
// * Add <3 symbol before the mutant name if the iterated name is one of the following:

// ```
// Professor X
// Logan
// Phoenix
// Gambit
// ```

// * Show the original mutant array items as output
// * Show the updated mutant array items as output

const mutants = ['Professor X', 'Cyclops', 'Iceman', 'Angel', 'Magneto', 'Beast', 'Phoenix', 'Logan', 'Gambit']

console.log(mutants)

mutants.map(function(mutant){

    const mutantILoveList = []
    
    if(mutant.includes('Professor X', 'Logan', 'Phoenix', 'Gambit' )) {
        mutantILoveList.push('Professor X <3', 'Logan <3', 'Phoenix <3', 'Gambit <3')
        console.log(mutantILoveList)
    } 
})

