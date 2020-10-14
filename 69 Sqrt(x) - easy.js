/**
 * @param {number} x
 * @return {number}
 */
const mySqrt = function(x) {
    if (x === 0 || x === 1) return x
    
    let left = 0
    let right = x
    let mid = Math.floor(right / 2)
    
    while (right - left > 1) {
        if (mid * mid <= x) {
            left = mid
        } else {
            right = mid
        }
        
        mid = Math.floor((right + left) / 2)
    }
    
    return left
};
