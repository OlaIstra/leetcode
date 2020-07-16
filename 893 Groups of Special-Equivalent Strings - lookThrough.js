/**
 * @param {string[]} A
 * @return {number}
 */
const numSpecialEquivGroups = function(A) {
    let count = 0
    const hash = {}
    
    for (let i = 0; i < A.length; i++) {
        const odd = []
        const even = []
        for (let j = 0; j < A[i].length; j++) {
            j % 2 === 0 
                ? even.push(A[i][j])
                : odd.push(A[i][j])
        }
        
        even.sort()
        odd.sort()
        
        const key = even.join('') + odd.join('')
        
        if (!hash[key]) {
            hash[key] = true
            count++
        }
    }
    
    return count
};
