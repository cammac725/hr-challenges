/*
Two strings are anagrams of each other if the letters of one string can be rearranged to form the other string. Given a string, find the number of pairs of substrings of the string that are anagrams of each other.

For example str = 'mom', the list of all anagrammatic pairs is [m, m], [mo, om] at positions [[0], [2]], [[0, 1], [1, 2]] respectively.

For example str = 'abba', the list is [a, a], [ab, ba], [b, b], [abb, bba] at positions [[0], [3]], [[0, 1], [2, 3]], [[1], [2]], and [[0, 1, 2], [1, 2, 3]] respectively.

For example str = 'abcd', no anagrammatic pairs exist, as no character repeats

Complete the function sherlockAndAnagrams in the editor below. It must return an integer that represents the number of anagrammatic pairs of substrings in s.
*/

function sherlockAndAnagrams(s) {
    let arr = []
    let cache = {}
    let count = 0

    // loop over string with 2 pointers
    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
            // create every substring and sort them
            arr.push(s.substring(i, j + 1)
                .split('')
                .sort()
                .join(''))
        }
    }

    // loop over the substrings and add them to hash if not already there
    for (let str of arr) {
        if (!cache[str]) {
            cache[str] = 1
        } else {
            cache[str]++
        }
    }

    // loop over hashmap and calculate how may unique combinations
    // n * (n - 1) / 2
    for (let [key, value] of Object.entries(cache)) {
        count += value * (value - 1) / 2
    }

    return count

}