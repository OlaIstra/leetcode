/**
 * @param {number[]} arr
 * @return {number[][]}
 */
const minimumAbsDifference = function(arr) {
    arr.sort((a,b) => a > b ? 1 : -1)
    
    let minDiff = Infinity
    const hash = {}
    
    for (let i = 0; i < arr.length - 1; i++) {
        minDiff = arr[i+1] - arr[i]
        !hash[minDiff]
            ? hash[minDiff] = [[arr[i], arr[i+1]]]
            : hash[minDiff].push([arr[i], arr[i+1]])
    }
    
    const min = Math.min(...Object.keys(hash))
    
    return hash[min]
};
