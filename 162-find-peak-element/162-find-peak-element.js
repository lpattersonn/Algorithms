/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    let largestNum = nums[0], result = 0;
    // loop through array
    for (let element of nums) {
    // find largest number
        if (element > largestNum) {
            largestNum = element;
        }
    }
    // find index of largest number
    result = nums.indexOf(largestNum);
    if (nums.length === 1) {
      result = 0;
      return result;
    }
    if (result < 0) {
        result = 0;
        return result;
    }
    return result;
};

