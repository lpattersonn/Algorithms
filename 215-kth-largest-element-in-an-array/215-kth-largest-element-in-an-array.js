/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
// sort through the array
    let sortedArray = nums.sort((a, b) => {
      return b - a;
    })
// return value
    return sortedArray[k - 1]
};