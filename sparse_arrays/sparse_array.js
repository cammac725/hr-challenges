function matchingStrings(strings, queries) {
    let result = []
    let counter = 0
    // loop through queries array
    // for each item in array
    for (let i = 0; i < queries.length; i++) {
        // loop through strings array
        for (let j = 0; j < strings.length; j++) {
            // if strings item matches queries item
            if (strings[j] == queries[i]) {
                // increment counter
                counter += 1
            }
        }
        // add counter to result array
        result.push(counter)
        // reset counter to 0 for next queries loop
        counter = 0
    }
    return result
}