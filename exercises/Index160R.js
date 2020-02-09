// # Exercise 160

// * Create a new index160.js
// * Define a propertiesNames array and assign the following string values: name, price, sold & console
// * Copy and paste the games array from exercise 155
// * Iterate over the games array
// * Show each game properties value using the properties names defined in the propertiesNames array
// * `Use the propertiesNames as dynamic properties accesor for the games array`

const propertiesNames = ['name', 'price', 'sold', 'console'];

const game = {
    games: [
        {name: 'Metal Gear', price: 3, sold: 3, system: 'PS4'},
        {name: 'Crash Bandicoot N. Sane Trilogy', price: 1050, sold: 500, system: 'PS4'},
        {name: 'NBA2K20', price: 75, sold: 250, system: 'XBOX'},
        {name: 'Devil May Cry', price: 50, sold: 6, system: 'Game Cube'}
    ]
}


const result = game.games.map(game => game);

const keys = Object.keys(result[0])

keys.forEach(function(game){
    console.log(game)
});
console.log(result)
console.log(keys)


