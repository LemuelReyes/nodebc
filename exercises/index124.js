// # Exercise 124

// * Create a new index124.js file
// * Define a movies array with at least 10 movies that you really like
// * Show the first and last movie name from the movies array
// * To show the last item you need to use the movies lenght property to make it dynamic

const movies = ['Eternal sunshine of the spotless mind', 'The Last Samurai', 'Parasite', 'Inception', 'Florida Project']

const topTwo = [movies[0], movies[movies.length - 1]]

console.log(topTwo)