/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function(s, t) {
    
    if (s.length !== t.length) return false
    
    let hashS = {}
    let hashT = {}
    
    for (let i = 0; i < s.length; i++) {
        hashS[s[i]]
            ? hashS[s[i]]++
            : hashS[s[i]] = 1
    }
    
    for (let i = 0; i < t.length; i++) {
        hashT[t[i]]
            ? hashT[t[i]]++
            : hashT[t[i]] = 1
    } 
    
    for (let key in hashS) {
        if (hashT[key] !== hashS[key]) {
            return false
        }
    }
    
    return true
};
