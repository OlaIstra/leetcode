/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function(s) {
    
    let arr = s.split('')
    let newArr = []
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '{') {
            newArr.push('}')
        } else if (arr[i] === '(') {
            newArr.push(')')
        } else if (arr[i] === '[') {
            newArr.push(']')
        } else if (arr[i] !== newArr.pop()) {
            return false
        }
    }
    
    if (newArr.length !== 0) return false
    
    return true

};
