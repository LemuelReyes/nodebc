// # Exercise 154

// * Create a new index154.js
// * Define a player variable and assign a literal object with the following properties and methods:
//   * property: name, value: null
//   * property: energy, value: 100
//   * property: lives, value: 3
//   * method: loseEnergy
//   * method: recoverEnergy
//   * method: loseLife
//   * method: recoverLife
// ## Methods
// * The loseEnergy accepts a damage numeric parameter and reduces the player object energy property value
// * The recoveryEnergy accepts a energyUp numeric parameter and restores the player object energy property value
// * The loseLife doesn't accept parameters and just subtract one player life every time you call it
// * The recoverLife doesn't accept parameters and just adds one player life every time you call it

// ## Rules
// * The player energy can't be negative
// * The player energy can't be more than 100
// * The player lives can't be bigger thant 99
// * If the player energy is equal or lees than 0 then the player will lose a life

// ## Play Time!!!
// 1. Set the player name
// 2. Player lose a life 
// 3. Player lose 10 energy value
// 4. Player lose 5 energy value
// 5. Player lose 15 energy value
// 6. Player lose 20 energy value
// 7. Player earn 10 energy value
// 8. Player lose 30 energy value
// 9. Player lose 40 energy value
// 10. Player lose a life
// 11. Player wins a life
// 12. Player wins a life

// * Simulate each game play using the players object methods
// * Show the following output after doing all the object methods calls
// ```
// The %player name% has %energy% energy % and  %lifes% lifes
// ```

const player = {
    name: 'Lemuel',
    energy: 100,
    lives: 3,
}

// PLAYER STATUS

function playerStatus(player) {

    let {name, energy, lives} = player;

    console.log(`${name} has ${energy} energy, and ${lives} lives`);
}

// LOSE ENERGY 

function loseEnergy(energyHit, player) {

    const {name, energy, lives} = player;

    const energyAftermath = function() {
        if(player.energy > energyHit) {
            console.log(
                `${player.name} has taken a hit! ${player.name} loses ${energyHit} energy. 
                `)
            return player.energy = player.energy - energyHit;
        } else if(player.energy <= energyHit) {
            console.log(
            `
            ${energyHit} energy is a critical hit!
            ${player.name} loses a life.
            `
            )
            // RESETS THE ENERGY BACK TO 100 WHEN LIFE IS LOST THROUGH ENERGY LOSS
            player.energy = 100;
            return player.lives = player.lives - 1
        }    
    }
    return energyAftermath();
}
// RECOVER ENERGY 

function recoverEnergy(energyUp, player) {
    
    const energyBoost = function() {
        if((energyUp + player.energy) <= 100) {
            console.log(`${player.name} has boosted their energy levels by ${energyUp}`)
            return energyUp + player.energy;
        } else if((energyUp + player.energy) > 100) {
            console.log(`Cannot exceed 100 energy`)
            return false;
        }  
    } 
    return player.energy = energyBoost()
}

// LOSE LIFE
const loseLife = function() {
    console.log(
        `
        -1 LIFE
        `
    )
    player.lives =  player.lives -= 1;

    if(player.lives <= 0) {
        console.log(
            `
*************************GAME OVER************************************** 
            `
            )
        return false;
    }
}

// RECOVER LIFE
function recoverLife() {
    console.log(
        `
        +1UP
        `
    )
    
    if(player.lives <= 98) {
        player.lives = player.lives += 1;
    }  else {
        console.log(`Cannot exceed 99 lives`)
        return false;
    }
}

// GAME OVER
if(player.lives <= 0) {
    console.log(
        `
*************************GAME OVER************************************** 
        `
    )
    return false;
}

console.log(playerStatus(player));
loseLife()
console.log(playerStatus(player));
loseEnergy(10, player)
console.log(playerStatus(player));
loseEnergy(5, player)
console.log(playerStatus(player));
loseEnergy(15, player)
console.log(playerStatus(player));
loseEnergy(20, player)
console.log(playerStatus(player));
recoverEnergy(10, player)
console.log(playerStatus(player));
loseEnergy(30, player)
console.log(playerStatus(player));
loseEnergy(40, player)
console.log(playerStatus(player));
loseLife()
console.log(playerStatus(player));
recoverLife()
console.log(playerStatus(player));
recoverLife()
console.log(playerStatus(player));

// only thing to fix is the undefined after every playerStatus call