// You are given a two dimensional matrix of distinct integers where 
// each row is sorted and each column is also sorted. The matrix
// does not necessarily have the same width and height. You are also
// given a target number and you must write a function that retuns
// an array of the row and column indices of the target number if it
// is contained and [-1, -1] if it is not contained.


function searchInSortedMatrix(matrix, target) {
    let row = 0
    let col = matrix[0].length - 1
    
    while (row < matrix.length && col >= 0) {
        if (target === matrix[row][col]) {
            return [row, col]
        } else if (target < matrix[row][col]) {
            if (target < matrix[row + 1][0]) {
                return binarySearch(matrix[row].slice(0, col), target, row)
            } else {
                col--
            }
        } else {
            row++
        }
    }
    return [-1, -1]
}

function binarySearch(matrix, target, rowIndex) {
    let start = 0
    let end = matrix.length - 1

    while (start <= end) {
        let mid = Math.floor((start + end) / 2)

        if (target < matrix[mid]) {
            end = mid - 1
        } else if (target > matrix[mid]) {
            start = mid + 1
        } else {
            return [rowIndex, mid]
        }
    }
    return [-1, -1] 
}



let matrix = [
    [1, 4, 7, 12, 15, 1000],
    [2, 5, 19, 31, 32, 1001],
    [3, 6, 23, 33, 35, 1002],
    [40, 41, 42, 44, 45, 1003],
    [99, 100, 103, 106, 128, 1004]
]

console.log(searchInSortedMatrix2(matrix, 1004))




    // function searchInSortedMatrix2(matrix, target) {
    
    //     let lowHeight = 0
    //     let lowWidth = 0
    //     let highHeight = matrix.length - 1
    //     let highWidth = matrix[0].length - 1
    
    
    
    //     while (highHeight > lowHeight || highWidth > lowWidth) {
    
    //         if (matrix[highHeight][highWidth] === target) {
    //             return [highHeight, highWidth]
    //         }
    //         if (matrix[highHeight][lowWidth] === target) {
    //             return [highHeight][lowWidth]
    //         }
    //         if (matrix[lowHeight][highWidth] === target) {
    //             return [lowHeight, highWidth]
    //         }
    //         if (matrix[lowHeight][lowWidth] === target) {
    //             return [lowHeight, lowWidth]
    //         }
    
    //         let midCol = Math.floor((lowWidth + (highWidth)) / 2)
    //         let midRow = Math.floor((lowHeight + (lowHeight)) / 2)
    
    //         if (matrix[midRow][midCol] > target) {
    //             highHeight = midRow
    //             highWidth = midCol
    //         } else {
    //             lowHeight = midRow
    //             lowWidth = midCol
    //         }
    //         if (matrix[midRow][midCol] === target) {
    //             return [midRow][midCol]
    //         }
    //     }
    // }