/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
const fairCandySwap = function(A, B) {

    const amountA = [...A].reduce((total, el) => total + el)
    const amountB = [...B].reduce((total, el) => total + el)
    
    const medium = (amountA + amountB)/2
    
    const copyB = [...B];
    
    for(let i = 0; i < A.length; i++) {
        
        const candyAmount = Math.abs(medium - (amountA - A[i]) );
        const isEqual = (amountB - candyAmount + A[i]) === medium;
        
        if(copyB.includes(candyAmount) && isEqual) {
            return [A[i], candyAmount];
        }
    }
    
    return false;
};
