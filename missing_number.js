var missingNumber = function (nums) {

    nums.sort((a, b) => a - b)

    if (nums.length === 1 && nums[0] === 0) {
        return 1
    }

    if (nums[0] !== 0) {
        return 0
    }


    for (let i = 0; i < nums.length - 1; i++) {

        let curr = nums[i]
        let next = nums[i + 1]

        if (curr + 1 === next) {
            continue

        } else if (curr + 1 !== next) {

            return curr + 1

        }
    }

    return nums[nums.length - 1] + 1
};