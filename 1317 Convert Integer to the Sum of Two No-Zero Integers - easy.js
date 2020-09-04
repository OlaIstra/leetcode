/**
 * @param {number} n
 * @return {number[]}
 */
const getNoZeroIntegers = function(n) {
    
    let first = 1
    let second = n - first
    const result = [first, n - first]
    

    while (String(result[1]).indexOf('0') !== -1 || String(result[0]).indexOf('0') !== -1) {
        result[0] = first++
        result[1] = n - first + 1
    }
    
    return result
};
