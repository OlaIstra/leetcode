/**
 * @param {number[]} arr
 * @return {number[]}
 */
const arrayRankTransform = function(arr) {
    const sorted = [...arr].sort((a, b) => a - b)
    const hash = {}
    
    for (let i = 0, r = 0; i < sorted.length; i ++) {
        if (sorted[i] !== sorted[i - 1]) {
            r += 1;
            hash[sorted[i]] = r;
        }
    }
    
    return arr.map(v => hash[v]);
};
