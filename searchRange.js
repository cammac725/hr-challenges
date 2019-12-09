// O(n) solution

const searchRange = function (nums, target) {
    let result = [];
    let answer = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == target) {
            result.push(i);
            console.log(result);
        }
    }
    if (result.length == 0) {
        result.push(-1, -1)
        return result
    }
    else if (result.length == 1) {
        result.push(result[0])
        return result
    }
    else {
        answer.push(result[0], result[result.length - 1])
        return answer
    }
};