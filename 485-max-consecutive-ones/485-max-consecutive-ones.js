/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let num = nums.join("");
    let count = 0
    let numSplit = num.split("0")
    
    for (index of numSplit) {
        if (index.length > count) {
            count = index.length
        }
    }
    
    return count
};