/*
Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

For example, arr = [1, 3, 5, 7, 9]. Our minimum sum is 1 + 3 + 5 + 7 = 16 and our maximum sum is 3 + 5 + 7 + 9 = 24.
We would print 16 24

*/

function miniMaxSum(arr) {
    // sort the array first
    arr.sort((a, b) => a - b)

    let min = arr.slice(0, 4).reduce((acc, curr) => acc + curr, 0)

    let max = arr.slice(1).reduce((acc, curr) => acc + curr, 0)

    console.log(min, max)

}