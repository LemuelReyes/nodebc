// # Exercise 158

// * Create a new index158.js 
// * Copy and paste the code from the previous exercise ()
// * Refactor the code to match new requirements
// * Define a budget variable
// * Add all PS4 games price and assign it to the budget variable
// * Show the following message as output:
// ```
// I need %budget% CAD to get all this PS$ great games!!
// ```
// * Define a new gameNames array and assign all the games names (all strings)
// * Define a new gamePrices array and assign all the games prices (all numbers)
// * Show the gameNames items as output
// * Show the gamePrices items as output


const game = {
    games: [
        {name: 'Metal Gear', price: 75, sold: 3, system: 'PS4', 
        showDetail: function() {
            console.log(`
                name: ${this.name},
                price: ${this.price},
                sold: ${this.sold},
                system: ${this.system}
            `)
            
        }},
        {name: 'Crash Bandicoot N. Sane Trilogy', price: 15, sold: 500, system: 'PS4', 
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

const budget = [];
const gameNames = [];
const gamePrices = [];

// FILTER BY PRICE

const filterGamesByPrice = game.games.map(function(game) {
    return game.price;
});

// ADD GAME PRICES ARRAY TOGETHER

const addGamePrices = filterGamesByPrice.reduce((a,b) => a + b)

// GET THE TOTAL PRICE AND ADD IT TO BUDGET

budget.push(addGamePrices)

// FILTER BY PRICE 

gamePrices.push(filterGamesByPrice)

// FILTER BY GAME NAMES

const filterGameNames = game.games.map((game) => game.name);
gameNames.push(filterGameNames)

console.log(`
    I need ${budget} to buy these games.
`)

