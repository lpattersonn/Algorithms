/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    newArr = haystack.split(needle);
    console.log(newArr)
    let index = -1;
    if (newArr[0] === haystack) {
        return index;
    } else {
        index = newArr[0].length
    }
    
    return index;
};