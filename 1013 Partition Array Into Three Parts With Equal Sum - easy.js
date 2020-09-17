/**
 * @param {number[]} A
 * @return {boolean}
 */
const canThreePartsEqualSum = function(A) {
    const sum = A.reduce((acc, el) => acc + el, 0)
    
    if (sum % 3 !== 0) {
        return false
    }

    const part = sum / 3
    
    let count = 0
    let partSum = 0
    
    while (A.length > 0) {
        partSum += A.pop()
        
        if (partSum === part) {
            count++
            partSum = 0
        }
        
        if (count === 2 && A.length > 0) {
            return true
        }
    }
    
    return false
};
