/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isSubsequence = function(s, t) {
    let isSub = true
    let prevIdx = -1
    
    for (key in s) {
        const idx = t.indexOf(s[key], prevIdx + 1)
        if (idx === -1 ) return isSub = false
        prevIdx = idx
    }
    
    return isSub
};
