/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
const licenseKeyFormatting = function(S, K) {
    let result = ''
    let count = 0
    
    for (let i = S.length - 1; i >= 0; i--) {
        let symbol = S[i]
        
        if (symbol === '-') {
            continue
        }
        
        if (count === K) {
            result = '-' + result
            count = 0
        }
        
        result = symbol.toUpperCase() + result
        count++
    }
    
    return result
};
