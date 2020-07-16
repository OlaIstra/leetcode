/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const luckyNumbers  = function(matrix) {
    let maxColumn = []
    for (let i = 0; i < matrix[0].length; i++) {
        const col = []
        for (let j = 0; j < matrix.length; j++) {            
            col.push(matrix[j][i])
            
        }
        maxColumn.push(Math.max(...col))
    }

    let minRow = []
    matrix.forEach(el => {
        minRow.push(Math.min(...el))
    })
    
    return maxColumn.filter(el => {
        return minRow.includes(el)
    })
};
