/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
const findTheDifference = function(s, t) {
    if (s.length === t.length) return
    
    const string = s.length < t.length ? t : s
    const stringSmall = s.length < t.length ? s : t
    const hash = {}
    string.split('').forEach(elem => {
        if (!hash[elem]) {
            hash[elem] = 1
        } else {
            hash[elem]++
        }
    })
    
    for (char in stringSmall) {
        hash[stringSmall[char]]--
        if (hash[stringSmall[char]] === 0) {
            delete hash[stringSmall[char]]
        }
    }
    
    return Object.keys(hash)[0]
};
