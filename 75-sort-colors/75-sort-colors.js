/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
        
for (var i = 1; i < nums.length; i++)
    for (var j = 0; j < i; j++)
        if (nums[i] < nums[j]) {
          var x = nums[i];
          nums[i] = nums[j];
          nums[j] = x;
        }
    
    return nums;
};