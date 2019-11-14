// write a function that takes in an array of distinct integers and a target number. Function should find all triplets that sum up to the target and return a 2D array of these triplets. Inner arrays should have integers in ascending order. Outer arrays should be in ascending order with respect to the first number of the triplet.

// If no such triplets can be found, return an empty array


function threeNumberSum(arr, target) {

    // 3 nested loops => O(n^3)

    // sort the array
    // [1, 2, 3, 4, 5, 6, 7, 8, 9, 15], 30

    // what does sorting the array buy us?
    // since it's sorted, can we use binary search?
    // use binary search to eliminate one side of the array
    // where the values are too small to sum up to the target

    // we can't eliminate all elems on one side because there may be
    // a large elem on the opposite side

    // can we eliminate certain values?
    // can we utilize 3 pointers?
    const triplets = []
    arr.sort((a, b) => a - b)
    // loop through the sorted array
    for (let i = 0; i < arr.length - 2; i++) {
        // keep track of 2 other pointers
        // a left pointer that points at the value right after the curr elem
        let left = i + 1
        // a right pointer that starts at the end of the array
        let right = arr.length - 1
        // while left pointer < right pointer
        while (left < right) {
            const currentSum = arr[i] + arr[left] + arr[right]
            // if the sum of the values at the 3 pointers == target
            if (currentSum == target) {
                // add the three values to a result array
                triplets.push([arr[i], arr[left], arr[right]])
                // increment left pointer
                left++
                right--
            }
            // if the sum of the values at the 3 pointers < target
            else if (currentSum < target) {
                // we want to increase the size of their total sum
                // increment the left-most pointer
                left++
            }
            // if the sum of the 3 pointers > target
            else {
                // we want to decrease the size of their total sum
                // decrement the right-most pointer
                right--
            }
        }
    }

    return triplets




    // can we use the pairs solution we already had as a helper
    // function in solving this problem
    // [1, 2, 3], 6
    // sort the array
    // loop through our array
        // call our findPairs function to have it find (target - current)
        // pair = findPairs(arr, target-current)
        // to create a triplet, append our current elem to the returned pair

    // we'll have to implement a lightly different version of pairs function
    // to have it return the pairs themselves instead of the counter

    // function findPairs(arr, target) {
    //     const set = new Set(arr);
    //     const pairs = []

    //     for (let i = 0; i < arr.length; i++) {
            
    //         if (set.has(target - arr[i])) {
    //             pairs.push([arr[i], target - arr[i]])
    //         }
    //     }

    //     return pairs;
    // }
    
}