/**
 * @param {number} num
 * @return {boolean}
 */
const isPerfectSquare = function(num) {
    if (num === 1 || num === 4) return true
    
    for (let i = 1; i < num / 2; i++) {
        if (i * i === num) {
            return true
        } else {
            if (i * i > num) {
                break
            }
        }
    }
    
    return false
};
