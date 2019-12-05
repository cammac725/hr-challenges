// Given a string, find the length of the longest substring without repeating characters.


function lengthOfLongestSubstring(s) {
    // init a cache
    let cache = {}
    // init a left pointer
    let pointerA = 0
    // init a second pointer to the right of left pointer
    let pointerB = 1
    // init a counter
    let count = 1
    // init a max variable
    let max = 1

    if (s.length === 0) {
        return 0
    }

    // split string into array
    let arr = s.split('')

    // loop over array
    while (pointerB < arr.length) {
        cache[arr[pointerA]] = true

        if (cache[arr[pointerB]]) {
            cache = {}
            count = 1
            pointerA++
            pointerB = pointerA + 1
            cache[arr[pointerA]] = true
        } else {
            count++
            cache[arr[pointerB]] = true
            pointerB++
            if (count > max) {
                max = count
            }
        }
    }
    return max
};