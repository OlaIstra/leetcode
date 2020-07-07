/**
 * @param {number[]} A
 * @return {number}
 */
const repeatedNTimes = function(A) {
    const hash = {}
    
    A.forEach(elem => {
        if (!hash[elem]) {
            hash[elem] = 1
        } else {
            hash[elem]++
        }
    })
    
    let result = 0
    Object.entries(hash).forEach(obj => {
        if (obj[1] > 1) return result = Number(obj[0])
    })
    
    return result
};
