/*
Alice and Bob each created one problem for HackerRank. A reviewer rates the two challenges, awarding points on a scale from 1 to 100 for three categories: problem clarity, originality, and difficulty.

Given 2 arrays of equal length, compare values at each corresponding index. If value at A[i] > B[i], Alice gets a point; if A[i] < B[i], Bob gets a point. If they're equal, no points are awarded.

Return array of the scores [Alice, Bob]
*/


function compareTriplets(a, b) {
    let countA = 0
    let countB = 0
    let result = []

    for (let i = 0; i < a.length; i++) {
        if (a[i] < b[i]) {
            countB++
        } else if (a[i] > b[i]) {
            countA++
        } else if (a[i] === b[i]) {
            continue
        }
        console.log("for", countA, countB)

    }
    result.push(countA, countB)
    return result

}