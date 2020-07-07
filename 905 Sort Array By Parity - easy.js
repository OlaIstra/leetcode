/**
 * @param {number[]} A
 * @return {number[]}
 */
const sortArrayByParity = function(A) {
    const result = []
    
    A.forEach(elem => {
        (elem % 2 === 0) ? result.unshift(elem) : result.push(elem)
    })
    
    return result
};
