/**
 * @param {string[]} A
 * @return {string[]}
 */
const commonChars = function(A) {
    let result = [...A[0]]
    for (let i = 1; i < A.length; i++) {
        result = result.filter(letter => {
            const length = A[i].length
            const newString = A[i].replace(letter, '')
            A[i] = newString
            return newString.length < length
        })
    }
    return result
};
