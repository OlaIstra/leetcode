/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isIsomorphic = function(s, t) {
    for (let i = 0; i < s.length; i++) {
        const a = s.indexOf(s[i]);
        const b = t.indexOf(t[i]);
        
        if (t[a] !== t[i] || s[b] !== s[i]) {
            return false;
        }
    }
    return true;
};
