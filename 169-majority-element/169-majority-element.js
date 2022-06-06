/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let obj = {};
    let count = 0;
    for (let num of nums) {
        if(obj[num] === undefined) {
            obj[num] = 1
        } else {
            obj[num]++
        }
    }
    for (let keys in obj) {
        if (obj[keys] > nums.length / 2) {
            count = Number(keys)
        }
    }
    
    return count;
};

// loop through nums
// convert values as am object
// loop through object of values === n/2