/**
 * @param {number[]} heights
 * @return {number}
 */
const heightChecker = function(heights) {
    let target = [...heights].sort((a,b) => {return a > b ? 1 : -1})
    
    let count = 0
    
    target.forEach((tItem, idx) => {
        tItem !== heights[idx] && count++
    })
    
    return count
};
