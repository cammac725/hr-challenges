// given an array of integers, return the one that shows up
// only once


function singleNumber(nums) {
    // using reduce and XOR (bitwise)
    return nums.reduce((prev, curr) => {
        return prev ^ curr
    }, 0)


    // using for loop, no XOR
    nums.sort()
    for (let i = 0; i < nums.length; i++) {
        let sameAsAfter = nums[i] === nums[i + 1]
        let sameAsBefore = nums[i] === nums[i - 1]
        if (!sameAsBefore && !sameAsAfter) {
            return nums[i]
        }
    }

    // using math and 

}


