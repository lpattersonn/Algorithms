/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let obj = {};
    let count = 0;
    
    // loop through nums
    for (let num of nums) {
        // convert values as an object
        if(obj[num] === undefined) {
            obj[num] = 1
        } else {
            obj[num]++
        }
    }
    // loop through objects return key that has a value greater than n/2
    for (let keys in obj) {
        if (obj[keys] > nums.length / 2) {
            count = Number(keys)
        }
    }
    
    return count;
};
