/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfThree = function(n) {
    return ((Math.log10(n) / Math.log10(3)) % 1) === 0
};
