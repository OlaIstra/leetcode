/**
 * @param {string} s
 * @return {number}
 */
const removePalindromeSub = function(s) {
    if (s.length === 0) return 0
    
    return s === s.split('').reverse().join('') ? 1 : 2
};
