/**
 * @param {number[]} A
 * @return {number[]}
 */
const sortArrayByParityII = function(A) {
    const oddArray = []
    const evenArray = []
    const result = []
    
    A.forEach(item => {
        item % 2 === 0 
            ? evenArray.push(item)
            : oddArray.push(item)
    })
    
    while (oddArray.length > 0 && evenArray.length > 0) {
        result.push(evenArray.pop())
        result.push(oddArray.pop())
    }
    
    return result
    
};
