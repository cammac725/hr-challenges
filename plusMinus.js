/*
Given an array of integers, calculate the fractions of its elements that are positive, negative, and are zeros. Print the decimal value of each fraction on a new line, scaled to 6 decimals.

You must print the following 3 lines:

A decimal representing of the fraction of positive numbers in the array compared to its size.
A decimal representing of the fraction of negative numbers in the array compared to its size.
A decimal representing of the fraction of zeros in the array compared to its size.
*/

function plusMinus(arr) {
    let neg = 0
    let pos = 0
    let z = 0
    let len = arr.length
    for (let dig of arr) {
        if (Math.sign(dig) === 0) {
            z++
        } else if (Math.sign(dig) === 1) {
            pos++
        } else {
            neg++
        }
    }
    console.log((pos / len).toFixed(6))
    console.log((neg / len).toFixed(6))
    console.log((z / len).toFixed(6))
}