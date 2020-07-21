/**
 * @param {number} n
 * @return {boolean}
 */
const hasAlternatingBits = function(n) {
    const binary = n.toString(2)
    
    let prev = 5
    let isAlternate = true
    for (idx in binary) {
        if (binary[idx] === prev) {
            isAlternate = false
            break
        } else {
            prev = binary[idx]
        }
        
    }
    
    return isAlternate
};
