/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const containsNearbyDuplicate = function(nums, k) {

    const hash = {}
    
    for (let i = 0; i < nums.length; i++) {  
        const cur = nums[i]
        
        if (hash[cur] >= 0 && (i - hash[cur] <= k)) return true
        hash[cur] = i
    }
    
    return false
};
