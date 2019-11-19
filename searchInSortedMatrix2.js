function searchInSortedMatrix2(matrix, target) {
    let row = 0
    let col = matrix[row].length - 1

    while (row < matrix.length && col >= 0) {
        if (matrix[row][col] > target) {
            col--
        } else if (matrix[row][col] < target) {
            row++
        } else {
            return [row][col]
        }
    }
    return [-1, -1]
}

let matrix = [
    [1, 4, 7, 12, 15, 997, 999],
    [2, 5, 19, 31, 32, 35, 1001, 1007],
    [4, 8, 24, 34, 36, 1008, 1015],
    [40, 41, 42, 44, 45, 1018, 1020],
    [98, 99, 101, 104, 190, 1021, 1025]
]

console.log(searchInSortedMatrix2(matrix, 1004))