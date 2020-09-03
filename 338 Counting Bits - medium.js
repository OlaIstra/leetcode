/**
 * @param {number} num
 * @return {number[]}
 */
const countBits = function(num) {
    const result = []
    
    for (let i = 0; i <= num; i++) {
        result.push((i.toString(2).split(1) || []).length - 1)
    }
    
    return result
};
