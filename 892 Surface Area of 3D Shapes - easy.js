/**
 * @param {number[][]} grid
 * @return {number}
 */
const surfaceArea = function(grid) {
    
  const height = grid.length;
  const width = grid[0].length;
    
  let result = 0;
    
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (grid[i][j] > 0) result += grid[i][j] * 4 + 2;
      if (i > 0) result -= 2 * Math.min(grid[i - 1][j], grid[i][j]);
      if (j > 0) result -= 2 * Math.min(grid[i][j - 1], grid[i][j]);
    }
  }
  return result;
};
