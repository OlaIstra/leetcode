/**
 * @param {string[]} A
 * @return {number}
 */

const minDeletionSize = function(A) {
    let result = 0
    
    for(let i = 0; i < A[0].length; i++) {
        for(let j = 1; j < A.length; j++){
            if(A[j][i] < A[j - 1][i]){
                result += 1
                break
            }
        }
    }
    return result
};
