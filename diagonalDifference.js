/*
Given a square matrix, calculate the absolute difference between the sums of its diagonals.
For example, the square matrix "arr" is shown below:
 1 2 3
 4 5 6
 9 8 9

The left-to-right diagonal = 1 + 5 + 9 = 15. The right to left diagonal = 3 + 5 + 9 = 17. Their absolute difference is |15 - 17| = 2.

*/

function diagonalDifference(arr) {
    // 2 variables, left to Right and right to Left
    let leftRight = 0
    let rightLeft = 0

    for (let row = 0; row < arr.length; row++) {
        // for left to right, row and col indices will be the same
        leftRight += arr[row][row]
        // for right to left, col will decrement by one
        rightLeft += arr[row][arr.length - row - 1]
    }

    return Math.abs(leftRight - rightLeft)
}