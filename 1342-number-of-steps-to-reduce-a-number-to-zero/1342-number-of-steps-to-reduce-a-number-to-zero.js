/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
    let val = num;
    let count = 0;
    
    // creat a loop
    for (let i = 0; i <= num; i++) {
        
        // if num is greater than zero and is a even numbe set val to num/2
        if (val > 0 && val % 2 === 0) {
            val = val / 2
            count++
        }
        
        // if num is great than zero and is not a even number set val to num - 1
        if (val > 0 && val % 2 !== 0) {
            val = val - 1;
            count++
        }
            
    }

    return count;
};

