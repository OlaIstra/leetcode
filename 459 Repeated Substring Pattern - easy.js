/**
 * @param {string} s
 * @return {boolean}
 */
const repeatedSubstringPattern = function(s) {
    const length = s.length
    const half = length / 2
    
    let i = 0
    let devider = s[0]
    
    while (devider.length <= half) {
        if (length % devider.length === 0) {
            const j = length / devider.length
            
            if (devider.repeat(j) === s) {
                return true
            } else {
                i++
                devider += s[i] 
            }
            
        } else {
            i++
            devider += s[i] 
        }
    }
    
    return false
    
};
