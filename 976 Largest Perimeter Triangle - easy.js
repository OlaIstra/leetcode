/**
 * @param {number[]} A
 * @return {number}
 */
const largestPerimeter = function(A) {
    A.sort((a, b) => a < b ? 1 : -1)
    
    let start = 0 
    let result = 0
    
    while (start < A.length) {
        for (let i = start + 2; i < A.length; i++) {
            if (A[start] - A[start + 1] - A[i] < 0) {
                return result = A[start] + A[start + 1] + A[i]
            }
        }
        start++
    }
    
    return result
};
