/**
 * @param {number[]} nums
 * @return {number[]}
 */
const singleNumber = function(nums) {
    const hash = {}
    const result = []
    
    for (let num of nums) {
        hash[num] ? hash[num]++ : hash[num] = 1
    }
    
    for (let idx in hash) {
        if (hash[idx] === 1) {
            result.push(idx)
        }
    }
    
    return result
};
