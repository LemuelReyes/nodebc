// # Exercise 139

// * Create a new index139.js file
// * Define a numbers array with values between 1000 and 1
// * Iterate over the numbers array and filter the following values creating new arrays for each type:
//   * Even numbers
//   * Odd numbers
// * Show the last 10 odd numbers as output
// * Show the first 20 even numbers as output

const createThousandArray = function() {

    // To create an array from 1 - 1000
    
    const numbers = []

    for (let i = 1; i <= 1000; i++) {
        numbers[i-1] = i;
    }
    
    // TO GET EVEN NUMBER USING SHORTHAND

    const evenNumbers = numbers.filter(number => number % 2 === 0 ); 

    // TO GET THE LAST TEN EVEN NUMBERS IN THE ARRAY USING THE SLICE METHOD

    const lastTenEvenNumbers = evenNumbers.slice((evenNumbers.length - 10), numbers.length) 
    console.log(`These are the last ten even numbers in an array of 1000: ${lastTenEvenNumbers}`)


    // TO GET ODD NUMBER USING SHORTHAND

    const oddNumbers = numbers.filter(number => number % 2 !== 0 ); 

    // TO GET THE LAST TEN ODD NUMBERS IN THE ARRAY USING THE SLICE METHOD
    const lastTenOddNumbers = oddNumbers.slice((oddNumbers.length - 10), numbers.length) 
    console.log(`These are the last ten odd numbers in array of 1000: ${lastTenOddNumbers}`)
}

const arrayToThousand = createThousandArray();

console.log(arrayToThousand)

