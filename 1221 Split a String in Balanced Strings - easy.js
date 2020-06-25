/**
 * @param {string} s
 * @return {number}
 */
const balancedStringSplit = function(s) {
    let count = 0
    let balanced = 0

    for (char of s) {
        char === 'L' ? count++ : count--
        count === 0 && balanced++
    }

    return balanced
};
