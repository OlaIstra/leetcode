/**
 * @param {number[]} A
 * @return {boolean}
 */
const isMonotonic = function(A) {
    const decreasing = [...A].sort((a, b) => a < b ? 1 : -1 )
    
    const increasing = [...A].sort((a, b) => a > b ? 1 : -1 )
    
    return (decreasing.join(' ') === A.join(' ') || increasing.join(' ') === A.join(' '))
};

const isMonotonic = function(A) {
    let increasing = true
    let decreasing = true
    
    for(let i = 0; i < A.length; i++) {
        if(A[i] > A[i + 1]) increasing = false;
        if(A[i] < A[i + 1]) decreasing = false;
    }
    return increasing || decreasing;
};
