/**
 * @param {number} n
 * @param {number} m
 * @param {number[][]} indices
 * @return {number}
 */
const oddCells = (n, m, indices) => {
    let count = 0
    // Set up the matrix
    let matrix = [...Array(n)].map(() => Array(m).fill(0));
    
    // Perform all additions
    for (let [x,y] of indices){
        for (let j = 0; j < m; j++)
            matrix[x][j]++;
        for (let i = 0; i < n; i++)
            matrix[i][y]++;
    }
    
    // Count all the odds
    for (let i = 0; i < n; i++)
        for (let j = 0; j < m; j++)
            if (matrix[i][j] % 2 != 0)
                count++;
    return count;
};
