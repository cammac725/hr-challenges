/*
Create a list, seqList, of N empty sequences, where each sequence is indexed from 0 to N - 1. The elements within each of the N sequences also use 0-indexing.

Create an integer, lastAnswer, and initialize it to 0.

The 2 types of queries that can be performed on your list of sequences (seqList) are described below:
    1. Query: 1 x y
        1. Find the sequence, seq, at index ((x ^ lastAnswer) % N) in seqList.
        2. Append integer y to sequence seq.
    2. Query: 2 x y
        1. Find the sequence, seq, at index ((x ^ lastAnswer) % N) in seqList.
        2. Find the value of element y % size in  seq(where size is the size of seq) and assign it to lastAnswer.
        3. Print the new value of lastAnswer on a new line
*/

function dynamicArray(n, queries) {
    let lastAnswer = 0
    let array = [...new Array(n)].map(x => [])
    let ans = []
    queries.forEach(v => {
        let index = (v[1] ^ lastAnswer) % n
        if (v[0] == 1) {
            array[index].push(v[2])
        } else if (v[0] == 2) {
            lastAnswer = array[index][v[2] % array[index].length]
            ans.push(lastAnswer)
        }


        // switch (v[0]) {
        //     case 1:
        //         array[index].push(v[2])
        //         break
        //     case 2: lastAnswer = array[index][v[2] % array[index].length]
        //         ans.push(lastAnswer)
        //         break
        //     default:
        // }
    })
    return ans
}