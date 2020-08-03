/**
 * @param {string} S
 * @return {string}
 */
const reverseOnlyLetters = function(S) {
    const lettersArray = S.split``.filter( char => /[a-zA-Z]/.test(char))
    const result = []
    
    for (let i = 0; i < S.length; i++){
        /[a-zA-Z]/.test(S[i]) ? result.push(lettersArray.pop()) :  result.push(S[i])
    }
    return result.join``
};
