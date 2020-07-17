/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
const smallestRangeI = function(A, K) {
    const max =Math.max(...A)
    const min =Math.min(...A);
    K = K > 0 ? K : -K
    const target = max - min - 2*K
    return target > 0 ? target : 0
};
