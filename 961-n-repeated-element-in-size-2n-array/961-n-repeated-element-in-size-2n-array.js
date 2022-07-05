/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function(nums) {
    let newObj = {}
    let result = 0
    for (let i = 0; i < nums.length; i++) {
        if (newObj[nums[i]] === undefined) {
            newObj[nums[i]] = 1;
        } else {
            newObj[nums[i]]++
        }
    }
    console.log(newObj);
    for (let keys in newObj) {
        if (newObj[keys] > 1) {
            result = keys;
        }
    }
    return result;
};