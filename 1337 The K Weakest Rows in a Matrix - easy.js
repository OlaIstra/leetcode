/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
const kWeakestRows = function(mat, k) {
    const result = [];
    
    for (let i = 0; i < mat.length; i++) {
        mat[i] = mat[i].reduce((acc, curr) => acc + curr);
    }
        
    for (let i = 0; i < k; i++) {
        const idx = mat.indexOf(Math.min(...mat));
        result.push(idx);
        mat[idx] = mat[idx] + Infinity;
    }
    
    return result;
};
