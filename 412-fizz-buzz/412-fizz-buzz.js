/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let newArray = [];
    let newString = n.toString();
    for (let i = 0; i <= n; i++) {
        if (i !== 0) {
        if (i % 3 === 0 && i % 5 === 0) {
              newArray.push("FizzBuzz");
            } else if (i % 3 === 0) {
                       newArray.push("Fizz");
                       } else if (i % 5 === 0) {
                                  newArray.push("Buzz");
                                  } else {
            newArray.push(i.toString());
        }
    }
    }
    return newArray;
};