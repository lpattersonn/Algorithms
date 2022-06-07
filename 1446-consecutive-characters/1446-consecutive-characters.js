/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function(s) {
    let newObj = {};
    let count = 0;
    // Loop through "s" and create object     
    for (let i = 0; i < s.length; i++) {
        
        if (s[i] === s[i + 1]) {
               if (newObj[s[i]] === undefined) {
            newObj[s[i]] = 2
        }  if (newObj[s[i]] !== undefined &&  s[i] === s[i + 2]) {
            newObj[s[i]]++;
        }
        }
    }
    
    // Find highest value
    for (let key in newObj) {
        if (newObj[key] > count) {
            count = Number(newObj[key]);
        }
    }
    
    if (count === 0) {
        count = 1;
    }
    return count;
};