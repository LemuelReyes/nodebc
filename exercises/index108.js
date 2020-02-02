// # Exercise 108

// * Create a new index108.js file
// * Define a sort function that accepts 3 numeric parameters with the following names: number1, number2 and number3
// * The function must sort the params values from lower to higher
// * Call the function with the following parameters: 10, 8, 25
// * Show the following result as output: 8, 10, 25
// * Refactor the sort function to accept a fourth parameter with the name highToLow (boolean)
// * If highToLow is true then you need to show the following output: 25, 10, 8
// * Call the function again with the following parameters: 10, 8, 25, true


// function sortNumber(a, b) {
//     return a - b;
//   }
  
//   const numArray = [25, 15, 20];
//   numArray.sort(sortNumber);
  
//   console.log(numArray);

const sortNumber = function(number1, number2, number3, highToLow) {

    const numArray = [number1, number2, number3]
    
    function sortAscendNumber(a, b) {
        return a - b;
    }
    function sortDescendNumber(a, b) {
        return b - a;
    }

    if(highToLow === true) {
        console.log(numArray.sort(sortDescendNumber));
    } else {
        console.log(numArray.sort(sortAscendNumber));
    }    
}

sortNumber(5, 10, 15, true);