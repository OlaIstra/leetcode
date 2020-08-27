/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
const rotateString = function(A, B) {
    if (A === B) return true
    
    let isValid = false 
    
    let count = 0
    let word = A
    while (count < A.length) {
        if (word === B) {
            isValid = true
            break
        }  else {
            word = `${word.slice(1)}${word[0]}`
            count++
        }
    }
    
    return isValid
    
};
