// # Exercise 147

// * Create a new index147.js 
// * Copy and paste the code from the previous exercise
// * Refactor the code to match the requirements
// * The shouldOpenBatCave function not longer accepts two parameters
// * Now the shouldOpenBatCave function only accepts a user parameter
// * Instead of calling the shouldOpenBatCave function passing username and password now we only pass the user object
// * The rest of the code should still work the same way and show the proper output


const user = {
    username: 'batman',
    password: 'Alfred1960KPO!'
};

function shouldOpenBatCave(username) {
    if(username.username === user.username && username.password === user.password) {
        console.log(`Batcave Initialized. Welcome Bruce, you have a few updates and notifications.`)
        return true;
    } else {
        console.log(`Access denied.`)
        return false;
    }
}

shouldOpenBatCave(user)
