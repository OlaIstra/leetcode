/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function(s) {
    if (s === '') return true
    
    const str = s.replace(/[^a-z0-9]/gi,'').toLowerCase()
    
    return str === str.split('').reverse().join('')
};
