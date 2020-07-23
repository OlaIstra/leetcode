/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
const buildArray = function(target, n) {
    const list = []
    const result = []
    
    for (let i = 1; i <= n ; i++ ) {
        list.push(i)
    }
    let j = 0
    
    for (let k = 0; k < list.length; k++) {
        if (list[k] !== target[j]) {
            result.push('Push')
            result.push('Pop')
        } else {
            result.push('Push')
            j++
        }
        if (target.length === j) return result
    }
};
