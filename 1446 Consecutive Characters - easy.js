/**
 * @param {string} s
 * @return {number}
 */
const maxPower = function(s) {    
    let maxLength = 1
    let count = 1
    
    for (let i = 1; i < s.length; i++) {
        if (s[i] === s[i - 1]) {
            count++
            maxLength = Math.max(count, maxLength)
        } else {
            count = 1
        }
    }
    
    return maxLength
};
