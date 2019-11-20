/*
Given a array of integers, the absolute difference is arr[i] - arr[j], turned positive.
Find the minimum absolute difference between any 2 elements in the array

*/

function minimumAbsoluteDifference(arr) {
    // init final minimum value
    let final = +Infinity
    // sort the arr
    arr.sort((a, b) => a - b)
    // loop over arr
    // for each elem in arr
    for (let i = 1; i < arr.length; i++) {
        // init min variable and set to diff
        let min = Math.abs(arr[i - 1] - arr[i])
        // check if min is the smallest we've encountered
        if (min < final) {
            final = min
        }
    }
    return final

    // O(nlogn + n) runtime
    // O(1)   space
}