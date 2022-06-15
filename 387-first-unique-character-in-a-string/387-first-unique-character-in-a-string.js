/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    // Create a new object
    let newObj = {};
    let index = -1
    
    // Loop through array
    for (let i = 0; i < s.length; i++) {
        // Push value as key[0] and index at key[1]
        if (newObj[s[i]] === undefined) {
            newObj[s[i]] = [1, [i]];
        } else {
            newObj[s[i]][0]++;
            newObj[s[i]][1].push(i);
        }
    }
// Loop through keys of newObj to find first non-repeating character 
    for (let keys in newObj) {
        if(newObj[keys][0] === 1) {
           index = newObj[keys][1][0]
           return index;
        }
    }
    console.log(index);
    return index;
};
