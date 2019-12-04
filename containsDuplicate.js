/*
Given an array of integers, find if the array contains any duplicates.

Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.
*/

const containsDuplicate = function (nums) {
    let set = new Set()

    for (let i of nums) {
        if (!set.has(i)) {
            set.add(i)
        } else {
            return true
        }
    }
    return false
};