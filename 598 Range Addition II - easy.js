/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
const maxCount = function(m, n, ops) {
    if (ops.length === 0) return m * n
    
    let min1 = Infinity
    let min2 = Infinity
    
    ops.forEach(elem => {
        min1 = Math.min(elem[0], min1)
        min2 = Math.min(elem[1], min2)
    })
    
    return min1 * min2 
};
