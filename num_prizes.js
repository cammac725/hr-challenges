function numofPrizes(k, marks) {
    // We need the k highest marks
    // init a storage
    // init a counter
    // loop thru in reverse order
        // while len of storage <= k

    // or

    // init a counter
    // loop and rank the scores in an object
        // 1 = highest score, 2 = 2nd highest score
    // add score:value to the rank:key
    // loop through scores
        // while i < rank[k]
            // incr counter

    // no, better

    // sort first, largest to smallest
    // then filter for items that larger than the last item
    // return the length of those items

    
    // sort marks array
    const sorted = marks.sort((a,b) => b - a)
    // filter sorted array for elements that are both larger than zero and larger than array[k-1], return length
    return sorted.filter(item => item >= sorted[k-1] && item > 0).length

    
    // let place = 1;
    //     let temp = 0;
    //     let prized = [1];
    //     const sorted = marks.sort((a, b) => b - a);
    //     // const reversed = sorted.reverse();
        
    //     for (let i = 1; i < sorted.length; i++) {
    //         if (sorted[i] == sorted[i - 1]) {
    //             prized.push(place);
    //         }
    //         else {
    //             place++
    //             temp = Math.max(place, i + 1);
    //             if (place < temp) {
    //                 place = temp;
    //             }
    //             prized.push(place)
    //         }
    //     }
    //     let sum = 0;
    //     for (let i = prized.length - 1; i >= 0; i--) {
    //         if (prized[i] <= k) {
    //             sum ++
    //         }
    //     }
    //     return sum;

}