/**
 * @param {number} rowIndex
 * @return {number[]}
 */
const getRow = function(rowIndex) {
    const result = [];
    
    for(let i = 0; i <= rowIndex; i++){
        result[i] = [];
    }
    
    for(let i = 0; i <= rowIndex; i++){
        result[i][0] = result[i][i] = 1;
    }    
    
    for(let i = 2; i <= rowIndex; i++){
        for(let j = 1; j < i; j++){  
            result[i][j] = result[i-1][j-1] + result[i-1][j];
        }
    }    
    
    return result[rowIndex];
};
