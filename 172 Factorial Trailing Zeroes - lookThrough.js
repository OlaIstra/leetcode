/**
 * @param {number} n
 * @return {number}
 */
const trailingZeroes = function(n) {
    let numsOfZero = 0
    
    while(n >= 5) {
        numsOfZero += Math.floor(n/5)
        n = Math.floor(n/5)
    }
    
    return numsOfZero
}
