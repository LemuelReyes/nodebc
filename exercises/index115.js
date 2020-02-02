// # Exercise 115

// * Create a new index115.js file
// * Define a getLongerText that accepts two string values
// * This function returns the longer text
// * After calling the function show the longer word as output
// * Call this function 3 times with different words

const getLongerText = function(firstWord, secondWord){
    if(firstWord.length > secondWord.length) {
        console.log(`Between the words: '${firstWord}' and '${secondWord}', after much speculation, I
        have concluded that the longer word is ${firstWord}`)
    } else {
        console.log(`Between the word: ${firstWord} and ${secondWord}, after much speculation, I
        have concluded that the longer word is ${secondWord}`)
    }
}

getLongerText('love', 'oh')