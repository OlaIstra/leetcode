/**
 * @param {string} S
 * @return {string}
 */
const removeOuterParentheses = function(S) {
    let count = 0
    let result = ''

    for (let i = 0; i < S.length; i++) {
        if (S[i] === '(') {
            ( count > 0 ) && (result += S[i])
            count++
        } else {
            count--
            ( count > 0 ) && (result += S[i])
        } 
    }
    return result
};
