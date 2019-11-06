/**
 * @param {number[]} height
 * @return {number}
 */

var maxArea = function (height) {

    let start = 0
    let end = height.length - 1
    let area = 0

    while (start < end) {

        // find the max area -> find the area of the rectangle
        area = Math.max(area, Math.min(height[start], height[end]) * (end - start))

        // move the shorter pointer
        height[start] < height[end] ? start++ : end--
    }
    return area


    // // this doesn't work on all cases:
    //     let maxArea = 0

    //     for (let i = 0; i < height.length; i++){
    //         for (let j = i+1; j < height.length - i+1; j++){

    //             let shortest = 0

    //             if (height[i] <= height[j]){
    //                 shortest = height[i]            
    //             } else {
    //                 shortest = height[j]
    //             }

    //             let length = j-i
    //             let newArea = shortest*length

    //             if (newArea > maxArea){
    //                 maxArea = newArea
    //             }

    //         }
    //     }
    //     return maxArea

};