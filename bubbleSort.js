/*
Given an array of integers, sort the array in ascending order using the Bubble Sort algorithm above. Once sorted, print the following three lines:

"Array is sorted in numSwaps swaps.", where numSwaps is the number of swaps that took place.
"First Element: firstElement", where firstElement is the first element in the sorted array.
"Last Element: lastElement", where lastElement is the last element in the sorted array.

*/

function countSwaps(arr) {
    let swapCount = 0
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
                swapCount++
            }
        }
    }
    console.log('Array is sorted in ' + swapCount + ' swaps.')
    console.log('First Element: ' + arr[0])
    console.log('Last Element: ' + arr[arr.length - 1])

}