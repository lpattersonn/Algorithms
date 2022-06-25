/**
 * @param {string} s
 * @param {character} letter
 * @return {number}
 */
var percentageLetter = function(s, letter) {
    let newObj = {};
    let result = 0;
    
    for (let i = 0; i < s.length; i++) {
        
        if (newObj[s[i]] === undefined) {
            newObj[s[i]] = 1;
        } else {
            newObj[s[i]]++;
        }
        
    } 
    if (newObj[letter]) {
        result = newObj[letter] / s.length * 100;
        return Math.floor(result);
    }

    return result;
};