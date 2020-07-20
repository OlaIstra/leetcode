/**
 * @param {number} R
 * @param {number} C
 * @param {number} r0
 * @param {number} c0
 * @return {number[][]}
 */
var allCellsDistOrder = function(R, C, r0, c0) {
    const hash = {}
    
    for (let row = 0; row < R; row++) {
        for (let col = 0; col < C; col++) {
            const diff = Math.abs(row - r0) + Math.abs(col - c0)
            if (!hash[diff]) {
                hash[diff] = [[row, col]]
            } else {
                hash[diff].push([row,col])
            }
        }
    }
    const hashArr = Object.entries(hash)
    
    const hashArrNum = hashArr.map(el => {
        return [Number(el[0]), el[1]]
    })
    
    sortByKey(hashArrNum)    
    const result = []
    
    hashArr.forEach(elem => {
        if (elem[1].length > 1) {
            elem[1].forEach(el => {
                result.push(el)
            })
        } else {
            result.push(elem[1][0])
        }
    })
    return result
};

function sortByKey(arr) {
  arr.sort((a, b) => a[0] > b[0] ? 1 : -1);
}
