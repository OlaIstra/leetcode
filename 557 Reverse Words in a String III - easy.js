/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = function(s) {
    const result = []
    
    s.split(' ').map(word => {
        result.push(word.split('').reverse().join(''))
    })

    return result.join(' ')
};
