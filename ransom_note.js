function checkMagazine(magazine, note) {
    // if length of note is longer than 
    // length of magazine, not enough words
    if (note.length > magazine.length) {
        return console.log('No')
    }

    // inititalize hash map (dict)
    let map = {}

    // while haven't reached end of magazine array
    while (magazine.length) {
        // grab first item in magazine
        let word = magazine.shift()
        // if the hash already has the word
        if (map.hasOwnProperty(word)) {
            // increment the word count(value)
            map[word]++
        } else {
            // set word count to 1
            map[word] = 1
        }
    }

    // while haven't reached the end of note array
    while (note.length) {
        // grab the first word in note
        let word = note.shift()
        // if word isn't in the hash
        // or word count in hash is 0
        if (!map.hasOwnProperty(word) || map[word] < 1) {
            return console.log('No')
        } else {
            // if word is in hash,
            // decrement the word count (we used one of them)
            map[word]--
        }
    }

    return console.log('Yes')
}