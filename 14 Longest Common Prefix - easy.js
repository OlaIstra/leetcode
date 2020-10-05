/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function(strs) {
    if (strs.length === 0) return ''
    let result = ''
    let n = 0

    while(n < strs[0].length) {
        const str = strs[0][n]
        let isEqual = true

        for (let i = 0; i < strs.length; i++) {
            if (str !== strs[i][n]) {
                return result
            }
        }
     
        result += str
        n++
    }

    return result
};
