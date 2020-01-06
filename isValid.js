/*
Sherlock considers a string to be valid if all characters of the string appear the same number of times. It is also valid if he can remove just 1 character at 1 index in the string, and the remaining characters will occur the same number of times. Given a string s, determine if it is valid. If so, return YES, otherwise return NO.

For example, if s = 'abc', it is a valid string because frequencies are {a:1, b:1, c;1}. So is s = 'abcc' because we can remove one 'c' and have 1 of each character in the remaining string. If s = 'abccc' however, the string is not valid as we can only remove 1 occurrence of c. That would leave character frequencies of {a:1, b:1, c:2}.
*/

function isValid(s) {
    let cache = new Set()

    for (let char of s) {
        if (!cache[char]) {
            cache[char] = 1
        } else {
            cache[char]++
        }
    }

    let sorted = Object.values(cache).sort((a, b) => a - b)
    let len = sorted.length

    if (sorted[0] === sorted[len - 1]) {
        return 'YES'
    } else if ((sorted[0] === sorted[len - 2] && sorted[len - 1] - sorted[0] === 1)
        || (sorted[1] === sorted[len - 1] && sorted[0] === 1)) {
        return 'YES'
    } else {
        return 'NO'
    }

}