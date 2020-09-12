/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
const largestSumAfterKNegations = function(A, K) {
    let counter = K
    const length = A.length

    A.sort((a, b) => a - b)

    for (let i = 0; i < length; i++) {
        if ( K === 0 ) break

        if (A[i] === 0) break

        if (A[i] > 0) {
            A.sort((a, b) => a - b)
            A[0] = A[0] * Math.pow(-1, K)
            break
        } else {
            A[i] = A[i] * (-1) 
            K--
        }
    }

    return A.reduce((acc, elem) => acc + elem, 0)
};
