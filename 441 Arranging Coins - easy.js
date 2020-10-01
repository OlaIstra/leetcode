/**
 * @param {number} n
 * @return {number}
 */
const arrangeCoins = function(n) {
    if (n === 0) return 0
    if (n === 1) return 1
    let sum = 0
    let prev = 0
    let current = 0
    
    while (sum < n) {
        current = prev + 1
        sum = sum + current
        if (n - sum < current + 1) {
            return current
        }
        prev = current
    }
    
};
