// Exercise 2:
// Write a function that find the frequency occurrence of a letter in a sentence.
// The function should return an integer. (Do not use the str.count()
// default python function)
// Examples: find_frequency(“t”, “this is a test”) → 3 
// find_frequency(“y”, “this is a test”) → 0

function findFrequency(letter, str) {
    // initialize a counter for letter occurences
    let count = 0

    // loop over string
    for (let i = 0; i < str.length; i++) {
        let x = str.charAt(i)
        if (x == letter) count++
    }

    return count

}