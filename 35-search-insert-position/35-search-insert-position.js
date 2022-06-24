/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let result = nums.length;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > target) {
            result = i;
            return result;
        } else if (nums[i] === target) {
            result = i;
            return result;
        }
    } return result;
};