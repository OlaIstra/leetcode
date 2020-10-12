/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
const backspaceCompare = function(S, T) {
    return removeChars(S) === removeChars(T)
};

const removeChars = (str) => {
    const result = []
    
    for (let i in str) {
        str[i] === '#' ? result.pop() : result.push(str[i])
    }
    
    return result.join('')
}
