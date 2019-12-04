/*
You are given q queries. Each query is of the form two integers described below:
- 1 x : Insert x in your data structure.
- 2 y : Delete one occurence of y from your data structure, if present.
- 3 z : Check if any integer is present whose frequency is exactly . If yes, print 1 else 0.

The queries are given in the form of a 2-D array queries of size q where queries[i][0] contains the operation, and queries[i][1] contains the data element. For example, you are given array
queries = [(1, 1), (2, 2), (3, 2), (1, 1), (1, 1), (2, 1), (3, 2)].

The results of each operation are:

Operation   Array   Output
(1,1)       [1]
(2,2)       [1]
(3,2)                   0
(1,1)       [1,1]
(1,1)       [1,1,1]
(2,1)       [1,1]
(3,2)                   1
Return an array with the output: [0, 1].

Complete the freqQuery function in the editor below. It must return an array of integers where each element is a 1 if there is at least one element value with the queried number of occurrences in the current array, or 0 if there is not.

*/

function freqQuery(queries) {
    let output = []
    let obj = new Map()
    let freq = new Map()

    for ([i, j] of queries) {
        if ( [i] == 1 ) {
            if ( obj.has(j)) {
                freq[j]++
            } else {
                obj[j] = 1
                freq[j] = 1
            }
        }
        if ([i] == 2) {
            if (obj.has(j) && obj[j] > 0) {
                obj[j]--
                freq[j] = 0
            }
        }
        if ([i] == 3) {
            if (freq.has(j)) {
                output.push(1)
            } else {
                output.push(0)
            }
        }
    }
    return output
}