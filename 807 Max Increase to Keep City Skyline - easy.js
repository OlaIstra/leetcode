/**
 * @param {number[][]} grid
 * @return {number}
 */
const maxIncreaseKeepingSkyline = function(grid) {
    const horVert = []
    const horHor = []
    
    grid.forEach(elem => {
        horHor.push(Math.max(...elem))
    })
    
    for (let i = 0; i < grid.length; i++) {
        let max = 0
        for (let j = 0; j < grid[0].length; j++) {
            max = Math.max(max, grid[j][i])
        }
        horVert.push(max)
    }
    let result = 0
    
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            const diff = Math.min(horHor[i], horVert[j])
            if (grid[i][j] < diff) {
                result += diff - grid[i][j]
            }
        }
    }
    
    return result
};

