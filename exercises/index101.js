// # Exercise 101

// * Create a new index101.js file
// * Define a function named showUser that will output the following data:
//   * Your name
//   * Your age
//   * Your phone number
//   * Your street
//   * Your postal code
//   * If you're married or not (boolean)

let showUser = function() {
    let person = {
        name: 'Lemuel',
        age: 30,
        num: 7788700463,
        address: '7605 14th ave',
        married: true
    }

    console.log(`
        Hi my name is ${person.name}.
        I am ${person.age}.
        No: ${person.num}.
        Address: ${person.address}.
        Married: ${person.married}.
    `)
}

showUser()