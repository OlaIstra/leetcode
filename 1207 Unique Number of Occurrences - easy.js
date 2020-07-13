/**
 * @param {number[]} arr
 * @return {boolean}
 */
const uniqueOccurrences = function(arr) {
    const hash = {}
    
    arr.forEach(item => {
        if (hash[item]) {
            hash[item]++
        } else {
            hash[item] = 1
        }
    })
    
    const hashArr = Object.values(hash)
    const hashSet = new Set(hashArr)
    
    return hashArr.length === hashSet.size
};
