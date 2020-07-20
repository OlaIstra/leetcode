/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = function(numRows) {
    const result = []
    
    for (let i = 0; i < numRows; i++) {
        if (i === 0) {
            result.push([1])
        } else if (i === 1) {
            result.push([1, 1])
        } else {
            const tempArr = new Array()
            tempArr.length = i + 1
            tempArr[0] = tempArr[i] = 1
            for (let j = 1; j < i; j++ ) {
                tempArr[j] = result[i - 1][j - 1] + result[i - 1][j]
            }
            result.push(tempArr)
        }
    }
    return result
};
