/*
Lexicographical order is often known as alphabetical order when dealing with strings. A string is greater than another string if it comes later in a lexicographically sorted list.

Given a word, create a new word by swapping some or all of its characters. This new word must meet two criteria:

It must be greater than the original word
It must be the smallest word that meets the first condition
For example, given the word w = abcd, the next largest word is abdc.

Complete the function biggerIsGreater below to create and return the new string meeting the criteria. If it is not possible, return no answer.

*/

function biggerIsGreater(w) {
    // find non-increasing suffix
    let word = w.split('')
    let i, j, k
    i = j = k = word.length - 1

    while (i > 0 && word[i - 1] >= word[i]) {
        i--
    }
    if (i <= 0) {
        return "no answer"
    }

    // find successor to pivot
    while (word[j] <= word[i - 1]) {
        j--
    }
    [word[i - 1], word[j]] = [word[j], word[i - 1]]

    // reverse suffix
    while (i < k) {
        [word[i], word[k]] = [word[k], word[i]]
        i++
        k--
    }

    return word.join('')
}