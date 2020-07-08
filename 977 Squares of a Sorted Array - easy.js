/**
 * @param {number[]} A
 * @return {number[]}
 */
const sortedSquares = function(A) {
    const result = []
    
    A.forEach(num => {
        result.push(Math.pow(num, 2))
    })
    
    function sorting(a,b) {
        return a - b 
    }
    
    return result.sort(sorting)
};
