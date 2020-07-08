/**
 * @param {number[][]} grid
 * @return {number}
 */
const countNegatives = function(grid) {
    let countNegative = 0
    
    grid.forEach(array => {
        array.forEach(item => {
            if (item < 0) countNegative++
        })
    })
    
    return countNegative
};
