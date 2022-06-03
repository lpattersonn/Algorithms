/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function(words, pref) {
    let count = 0, prefCount = 0;
    
    // count number of charatcers in pref
    for (let char in pref) {
        if (char) {
            prefCount++
        }
    }
    
    // retrive same number of characters from word starting for index of 0
    for (let word of words) {
        if (word.substr(0, prefCount) === pref) {
    // if they match increase count by one
            count++;
        }
    }
    // return count
    return count;
};
