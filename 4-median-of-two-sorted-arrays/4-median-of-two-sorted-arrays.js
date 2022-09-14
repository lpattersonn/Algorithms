/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let sort = nums1, result;
    
    //Loop through nums2 and add it to nums1
    for (let val of nums2) {
        nums1.push(val);
    }
    
    // Sort the new array
    let sortedArray = nums1.sort((a,b) => {
        return a - b;
    })

    if (sortedArray.length % 2 !== 0) {
        let index = (sortedArray.length - 1) / 2
        result = sortedArray[index]
        return result;
    } else {
        let indexLeft = sortedArray.length / 2 - 1;
        let indexRight = sortedArray.length / 2;
        result = (sortedArray[indexLeft] + sortedArray[indexRight]) / 2;
        return result;
    }
};