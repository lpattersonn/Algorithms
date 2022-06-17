/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let newArray = s.split(" ");
    let newArrayTwo = [];
    
    for (let char of newArray) {
        if (char.length !== 0) {
            newArrayTwo.push(char);
        }
    }
    
    let arrayLength = newArrayTwo[newArrayTwo.length - 1];
    return arrayLength.length;
};