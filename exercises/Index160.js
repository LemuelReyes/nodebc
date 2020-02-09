// # Exercise 160

// * Create a new index160.js
// * Define a propertiesNames array and assign the following string values: name, price, sold & console
// * Copy and paste the games array from exercise 155
// * Iterate over the games array
// * Show each game properties value using the properties names defined in the propertiesNames array
// * `Use the propertiesNames as dynamic properties accesor for the games array`

const propertiesNames = ['name', 'price', 'sold', 'system'];

const game = {
    games: [
        {name: 'Metal Gear', price: 3, sold: 1000, system: 'PS4'},
        {name: 'Crash Bandicoot N. Sane Trilogy', price: 15, sold: 500, system: 'PS4'},
        {name: 'NBA2K20', price: 75, sold: 250, system: 'XBOX'},
        {name: 'Devil May Cry', price: 50, sold: 6, system: 'Game Cube'}
    ]
}


// iterate over games, will output objects within an array
const result = game.games.map(game => game);

// outputting objects without array now
result.forEach(function(games) {

    // property array is unpacked. logs name, price, sold, system.
    propertiesNames.map(function(property){
        return property
    });

    // this is equal to the objects within the game.games
    const properties = Object.keys(games)

    // the property argument here is the property array items, or the strings within the array 
    properties.forEach(function(property){
        console.log(games[property])
    })
    // this will show the values of the properties, which is the point of this lesson
})
