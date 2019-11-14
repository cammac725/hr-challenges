// Complete the digitSum function below.

// input s is a numeric string
function sumStrDigits(s) {
    let currentSum = 0
    
    // loop over each char in s
    for (let i = 0; i < s.length; i++) {
        currentSum += parseInt(s[i])
    }
    return currentSum
}

function superDigit(n, k) {
    // recursively

    // change n from an int to a string 
    const s = n.toString()
    // base case: when length of current sum == 1
    if (s.length === 1) {
        // return current sum
        return s
    }

    // call helper function and multiply by k
    const currentSum = sumStrDigits(s) * k
    // recurse with k as 1
    return superDigit(currentSum, 1)
    
}

// function superDigit(n, k) {
//     // iteratively
//     
//     // change n from an int to a string 
//     const s = n.toString()
//     let currentSum = sumStrDigits(s)
//         // sum them up, multiply by k
//     currentSum *= k

//     currentSum = currentSum.toString()

//     // use a while loop that loops until string's length == 1?
//     while (currentSum.length > 1){
//         // if the length of the sum ==1, we're done
//         // otherwise, repeat the process of summing up all the digits
//         currentSum = sumStrDigits(currentSum).toString()
//     }
//     return currentSum

// }