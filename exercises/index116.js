// # Exercise 116

// * Create a new index116.js file
// * Define the getHexaColor function that accepts one of the following web colors as parameter:
//   * white
//   * black
//   * blue
//   * green
//   * yellow
//   * pink
// * This function returns the hexa color for the given parameter color:
//   * param: white, return value: #FFFFFF
//   * param: black, return value: #000000
//   * param: blue, return value: #0b24fb
//   * param: green, return value: #0e7e12
//   * param: yellow, return value: #fffd38
//   * param: pink, return value: #fec1cc
// * The returned value must be a string
// * Call the function using each posible value as parameter
// * Show each hexa color as output

let getHexaColor = function(color) {
    const colorPicked = color;

    switch(colorPicked) {
        case 'white':
        console.log(`Color: white, #FFFFFF`) 
        break;
        case 'black':
        console.log(`Color: black, #000000`)
        break;
        case 'blue':
        console.log(`Color: blue, #0b24fb`)
        break;
        default:
        console.log(`Color is not available`);
    }
}

getHexaColor('blue');