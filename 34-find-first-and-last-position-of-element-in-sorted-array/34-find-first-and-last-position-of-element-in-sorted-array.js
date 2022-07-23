/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let result = [];
    let resultTwo = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            result.push(i);
        }
    }if (result.length === 1) {
    result[1] = result[0];
        return result;
         } if (result.length === 0) {
        result = [-1, -1];
        return result;
    } if (result.length > 2) {
        resultTwo[0] = result[0];
        resultTwo[1] = result[result.length - 1]
        return resultTwo;
    }
    return result;
};