/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr) {
    let newObj = {};
    let result = '';
    for (let element of arr) {
        if (newObj[element] === undefined) {
            newObj[element] = 1
        } else {
            newObj[element]++
        }
    }  for (let keys in newObj) {
        if (( newObj[keys] / arr.length) > 0.25) {
            result = keys;
        }
        }   
    console.log(newObj);
    return result;
};