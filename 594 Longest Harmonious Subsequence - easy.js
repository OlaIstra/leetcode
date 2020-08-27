/**
 * @param {number[]} nums
 * @return {number}
 */
const findLHS = function(nums) {
    const hash = {}
    let result = 0
    
    for(let num of nums) {
        hash[num] = hash[num] + 1 || 1
    }    
    
    for (let key in hash) {
        if(hash[Number(key) + 1]) {
            result = Math.max(result, hash[key] + hash[Number(key) + 1])
        }
    }
    
    return result
    
};
