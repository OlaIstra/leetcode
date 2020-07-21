/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
const findLUSlength = function(a, b) {
    return a !== b ? Math.max(a.length, b.length) : -1
};
