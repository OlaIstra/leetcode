/**
 * @param {string} S
 * @return {number[]}
 */
const diStringMatch = function(S) {
    const array = []
    const result = []
    for (let i = 0; i <= S.length; i++) {
        array.push(i)
    }
    
    for (let i = 0; i <= S.length; i++) {
        S[i] === 'I'
            ? result.push(array.shift())
            : result.push(array.pop())
    }
    
    return result
};
