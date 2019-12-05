/*
Given two strings, determine if they share a common substring. A substring may be as small as one character.

For example, the words "a", "and", "art" share the common substring "a". The words "be" and "cat" do not share a substring.

Function Description

Complete the function twoStrings in the editor below.It should return a string, either YES or NO based on whether the strings share a common substring.

twoStrings has the following parameter(s):

s1, s2: two strings to analyze.
*/


function twoStrings(s1, s2) {
    let setA = new Set(s1)

    for (let i = 0; i < s2.length; i++) {
        if (setA.has(s2[i])) {
            return 'YES'
        }
    }
    return 'NO'
}

// OR

function twoStrings(s1, s2) {
    let setA = new Set(s1)
    let setB = new Set(s2)

    for (let char of setA) {
        if (setB.has(char)) return 'YES'
    }
    return 'NO'
}