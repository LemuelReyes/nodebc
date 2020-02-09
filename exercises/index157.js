// # Exercise 157

// * Create a new index157.js 
// * Copy and paste the code from exercise 156
// * Refactor the code to match requirements
// * At the beginning of the code define a console variable and assign one of the following values as string: PS4 or XBOX
// * Iterate over the games array and filter to show only the ones which console property equals the selected console variable value
// * Basically we filter games by PS4 or XBOX `using the array filter method`

const console = 'PS4';

const game = {
    games: [
        {name: 'Metal Gear', price: 3, sold: 3, system: 'PS4', 
        showDetail: function() {
            console.log(`
                name: ${this.name},
                price: ${this.price},
                sold: ${this.sold},
                system: ${this.system}
            `)
            
        }},
        {name: 'Crash Bandicoot N. Sane Trilogy', price: 1050, sold: 500, system: 'XBOX', 
        showDetail: function() {
            console.log(`
                name: ${this.name},
                price: ${this.price},
                sold: ${this.sold},
                system: ${this.system}
            `)
            
        }},
    ]
}

// FILTER BY CONSOLE
const filterGames = game.games.filter((game) => game.system === console);

console.log(filterGames)
