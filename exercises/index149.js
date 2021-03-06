// # Exercise 149

// * Create a new index149.js
// * Define a user variable and assign a literal object as value
// * This user will have your personal data
// * Add at least 10 properties and values to describe you
// * Try using the following type values as properties values: string, number, boolean, array & object (yes, you can assign a literal object as property too)
// * Define at least 5 properties when we initialize the user object:
// ```
// const myObject = {
//   property: value,
//   property: value,
// }
// ```
// * Define the rest of the user properties using the dynamic way
// ```
// const myObject = {
//   property: value,
//   property: value,
// }

// myObject.newProperty = value;
// myObject.newProperty = value;
// myObject.newProperty = value;
// ```
// * Show the user object as output

const user = {
    name: 'Lemuel',
    age: 30,
    married: true,
    favoriteGames: ['Metalgear', 'LOL'],
    studying: {
        program: 'Node',
        classmates: ['Raymond', 'Brian', 'Keyosha']
    }
}

user.favoriteGames = ['Metalgear', 'LOL', 'Final Fantasy10'];
user.studying.teacher = 'Emerson';


console.log(user)