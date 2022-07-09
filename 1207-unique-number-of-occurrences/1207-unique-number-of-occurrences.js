/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let newObj = {}
    for (let i = 0; i < arr.length; i++) {
        if (newObj[arr[i]] === undefined) {
              newObj[arr[i]] = 1;  
            } else {
                newObj[arr[i]]++;
            }
    }
    let valuesArr = Object.values(newObj).sort();
    let j = 0;
    for (let i = 1; i < valuesArr.length; i++) {
        if (valuesArr[j] === valuesArr[i]) {
            return false;
        }
        j++;
    }
    return true;
};