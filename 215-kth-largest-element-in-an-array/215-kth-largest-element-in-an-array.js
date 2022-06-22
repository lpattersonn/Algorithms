/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    let sort = nums.sort((a, b) => {return b - a});
    let result = sort[k - 1]
    
    return result;
};