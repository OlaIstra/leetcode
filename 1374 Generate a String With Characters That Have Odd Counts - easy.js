/**
 * @param {number} n
 * @return {string}
 */
const generateTheString = function(n) {
    return n % 2 === 0
        ? 'a'.repeat(n-1)+'b'
        : 'a'.repeat(n)
};
