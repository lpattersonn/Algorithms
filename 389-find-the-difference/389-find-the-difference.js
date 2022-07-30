/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let sObj = {};
    let tObj = {};
    let result = "";
    for (let ele of s) {
        if (sObj[ele] === undefined) {
            sObj[ele] = 1;
        } else {
            sObj[ele]++;
        }
    }
     for (let ele of t) {
        if (tObj[ele] === undefined) {
            tObj[ele] = 1;
        } else {
            tObj[ele]++;
        }
    }
    
    for (let key in tObj) {
        if (sObj[key] !== tObj[key]) {
            result = key;
        }
    }
    return result;
};