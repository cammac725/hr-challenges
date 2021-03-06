/*
A left rotation operation on an array of size n shifts each of the array's elements 1 unit to the left. For example, if 2 left rotations are performed on array [1, 2, 3, 4, 5], then the array would become [3, 4, 5, 1, 2].

Given an array of n integers and a number, d, perform d left rotations on the array. Then print the updated array as a single line of space-separated integers.

*/

// helper func

// function shiftLeft(array) {
//     let first = array[0]
//     for (let i = 0; i < array.length - 1; i++) {
//         array[i] = array[i + 1]
//     }
//     array[array.length - 1] = first
// }


function main(arr, d) {
    let count = 0
    while (count < d) {
        arr.push(arr.shift())
        // shiftLeft(arr)   // helper
        count++
    }
    return arr
}

// OR

function leftRot(a, d) {
    // init var "removed"
    // splice off d elems starting from 0 index
    let removed = a.splice(0, d)
    // concatenate those elems onto whatever is left of the array
    // and return them joined with spaces in between
    return a.concat(removed).join(' ')
}