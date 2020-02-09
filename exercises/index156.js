// // # Exercise 156

// // * Create a new index156.js 
// // * Copy and paste the code from exercise 155
// // * We need to refactor the code
// // * Add a method showDetail to each game object
// // * Calling the showDetail method will output the following message using the game properties values
// // ```
// // name: %name%
// // price: %price%
// // sold: %sold%
// // console: %console%
// // ```
// // * Update the games array iteration code and replace the previous console.log for a call to the showDetail method for each game object
// // * The objective is to use the showDetail to show the object properties values using an object method

// const metalGear = {
//     name: 'Metal Gear',
//     price: 75,
//     sold: 1000,
//     console: 'PS4',
//     showDetail() {
//         console.log(
//             `
//             name: ${this.name},
//             price: ${this.price},
//             sold: ${this.sold},
//             console: ${this.console}
//             `
//         )
//     }
// }

// const crashBandicoot = {
//     name: 'Crash Bandicoot',
//     price: 75,
//     sold: 1000,
//     console: 'PS4',
//     showDetail() {
//         console.log(
//             `
//             // name: ${this.name},
//             price: ${this.price},
//             sold: ${this.sold},
//             console: ${this.console}
//             `
//         )
//     }
// }


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
        {name: 'Crash Bandicoot N. Sane Trilogy', price: 1050, sold: 500, system: 'PS4', 
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

const filterGames = game.games.map(function(game) {
    return game.showDetail();
});

console.log(filterGames)


