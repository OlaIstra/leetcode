/**
 * @param {number[][]} grid
 * @return {number}
 */
const projectionArea = function(grid) {
    let xSq = 0
    let ySq = 0
    let zSq = 0
    
    grid.forEach(arr => {
        ySq += Math.max(...arr)
        
        arr.forEach(el => {
            if (el > 0) {
                xSq++
            }
        })
    })
    
     for (let i = 0; i < grid.length; i++) {
         let max = 0
         for (let j = 0; j < grid[0].length; j++) {
             max = Math.max(max, grid[j][i])
         }
         zSq += max
     }   
    
    return xSq + ySq + zSq
};
