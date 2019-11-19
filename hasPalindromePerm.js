function hasPalindromePermutation(theString) {

    // Track characters we've seen an odd number of times
    let unpairedChars = new Set()

    for (let char of theString) {
        // if set already has the char once
        if (unpairedChars.has(char)) {
            // delete it cuz it makes a pair
            unpairedChars.delete(char)

        } else {    
            // if it's not in the set, add it
            unpairedChars.add(char)

        }

    }
    // if there are zero or only one chars without a pair
    // it's true, it can be a palindrome
    return unpairedChars.size <= 1

}