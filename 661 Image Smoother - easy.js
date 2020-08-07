/**
 * @param {number[][]} M
 * @return {number[][]}
 */
const imageSmoother = function(matrix) {
    
    const result = []
  
    matrix.forEach((row, idxR) => {
        const temp = []
        row.forEach((el, idxC) => {
            temp.push(getGreyScale(matrix, idxR, idxC))
        })
        result.push(temp)
    })
    
    return result
};

const getGreyScale = (matrix, row, col) => {
  let totalCells = 0;
  let totalValue = 0;
  
  for(let i = row - 1; i <= row + 1; i++) {
    if(matrix[i] === undefined) continue;
    for(let j = col - 1; j <= col + 1; j++) {      
      if(matrix[i][j] === undefined) continue;
      totalCells++;
      totalValue += matrix[i][j];
    }
  }
  return Math.floor(totalValue / totalCells);
}
