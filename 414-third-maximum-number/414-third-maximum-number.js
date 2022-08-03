/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
  let newArray = nums.sort(function(a, b) {
  return b - a;
});
    let obj= {};
    let array = [];

    for (let ele of newArray) {
        if (obj[ele] === undefined) {
            obj[ele] = 1;
        } else {
            obj[ele]++;
        }
    }
    for (let keys in obj) {
        array.push(Number(keys));
        console.log(array)
    }
    let secondArray = array.sort(function (a, b) {
        return a - b;
    })
    
    console.log(secondArray);
    
    
        if (array.length < 3) {
        return array[array.length - 1];
    } else {
    return array[array.length - 3];
    }

};