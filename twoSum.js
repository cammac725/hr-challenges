var twoSum = function (nums, target) {

    // brute force, nested loops
    // let resArr = []
    // for(let i = 0; i < nums.length-1; i++){
    //     for(let j = 1; j < nums.length; j++){
    //         if((nums[i] + nums[j]) === target){
    //             if(i !== j){
    //                 resArr.push(i, j)
    //                 return resArr      
    //             }
    //         }
    //     }
    // }

    // using cache
    let cache = {}
    let retArr = []
    for (let i = 0; i < nums.length; i++) {
        // console.log(cache[target - nums[i]])
        if (cache[target - nums[i]] !== undefined) {
            // console.log(cache[target], "here")
            retArr.push(cache[target - nums[i]])
            retArr.push(i)
            return retArr
        } else {
            cache[nums[i]] = i
        }
    }

    // using 2 pointers
    // let left = 0
    // let right = nums.length - 1
    // result = []
    // while (left < right) {
    //     if (nums[left] + nums[right] != target) {
    //         if (left + 1 == right) {
    //             right = nums.length - 1
    //             left++
    //         } else {
    //             right--
    //         }
    //     } else if (nums[left] + nums[right] == target) {
    //         result.push(left, right)
    //         return result
    //     }
    // }
};