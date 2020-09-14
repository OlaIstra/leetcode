/**
 * @param {number} num
 * @return {boolean}
 */
const isPowerOfFour = function(num) {
    let i = 0
    
    while (Math.pow(4, i) <= num) {
        if (Math.pow(4, i) === num) {
            return true
        } else {
            i++
        }
    }
    
    return false
};

const isPowerOfFour = function(num) {
    const binaryNum = num.toString(2);
    return num >= 1
        && binaryNum.length % 2
        && binaryNum.lastIndexOf('1') === binaryNum.indexOf('1');
};
