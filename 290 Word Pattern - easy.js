/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
const wordPattern = function(pattern, s) {
    const str = s.split(' ')
    
    if (pattern.length !== str.length) return false
    
    const hash = {}
    
    for (let i = 0; i < str.length; i++) {
        if (hash[pattern[i]]) {
            if (hash[pattern[i]] !== str[i]) {
                return false;
           } 
        } else {
            if (Object.values(hash).indexOf(str[i]) !== -1){
                return false;
            } else {
                 hash[pattern[i]] = str[i];
            }
        }
    }
    
  
    return true
};
