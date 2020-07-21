/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
const uncommonFromSentences = function(A, B) {
    const string = A + ' ' + B
    
    const hash = {}
    
    string.split(' ').forEach(elem => {
        if (!hash[elem]) {
            hash[elem] = 1
        } else {
            hash[elem]++
        }
    })
    
    for (word in hash) {
        if (hash[word] !== 1) {
            delete hash[word]
        }
    }
    
    return Object.keys(hash)
};
