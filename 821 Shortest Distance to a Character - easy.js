/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
const shortestToChar = function(S, C) {
    const result = []
    const idxC = []
    const array = S.split('')
    
    for (let i = 0; i < array.length; i++) {
        array[i] === C && idxC.push(i)
    }    
    
    array.forEach((char, idx) => {
        if (char === C) {
            result.push(0)
        } else {
            let diff = Infinity
            for (let i = 0; i < idxC.length; i++) {
                diff = Math.min(diff, Math.abs(idx - idxC[i]))
            }
            result.push(diff)
        }        
    })    
    
    return result
};
