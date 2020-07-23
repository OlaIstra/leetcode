/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function(x) {
    const arr = x.toString().split('')
    
    return arr.join() === arr.reverse().join()
};
