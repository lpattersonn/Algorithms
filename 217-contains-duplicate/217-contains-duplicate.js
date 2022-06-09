/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let obj = {}; 
    let result = false;
    
    for (let num of nums) {
        if (obj[num] === undefined) {
            obj[num] = 1;
        } else {
            obj[num]++;
        }
    }
    
    for (let keys in obj) {
        if (obj[keys] > 1)
            result = true;
    }
    
    return result;
};