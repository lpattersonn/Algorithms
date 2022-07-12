/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let obj = {};
    let result = 0
    for (let val of nums) {
        if (obj[val] === undefined) {
            obj[val] = 1;
        } else {
            obj[val]++;
        }
    } for (let key in obj) {
        if (obj[key] === 1) {
            result = key
        }
    }  return result;
};