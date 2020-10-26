/**
 * @param {number[]} A
 * @return {boolean[]}
 */
const prefixesDivBy5 = function(A) {
    const result = []
    
    let binary = 0
        
    for(let i = 0 ; i < A.length; i++) {
        binary = binary << 1
        binary = binary % 5
        binary += A[i]
        result.push(binary % 5 === 0)
    }
    return result
};
