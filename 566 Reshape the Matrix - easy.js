/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
const matrixReshape = function(nums, r, c) {
    if (nums.length * nums[0].length !== r*c) return nums
    
    const result = [[]]
    let row = 0
    let column = 0
    
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums[0].length; j++) {
            if (column >= c) {
                column = 0
                row++
                result.push([])
            }
            result[row][column++] = nums[i][j]
        }
    }
    
    return result
};
