/**
 * @param {string} s
 * @return {number}
 */
const longestPalindrome = function(s) {
    const hash = {}
    
    s.split('').forEach( elem => {
        hash[elem] ? hash[elem]++ : hash[elem] = 1
    })
    
    let count = 0
    let isEqual = false
    for (let key in hash) {
        if (hash[key] % 2 === 0) {
            count += hash[key]
        } else {
            count += hash[key] - 1 
            isEqual = true
        }
    }

    return isEqual ? count + 1 : count
};
