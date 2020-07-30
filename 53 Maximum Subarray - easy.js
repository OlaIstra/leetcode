/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function(nums) {
    
    let maxBest = -Infinity
    let maxCurrent = 0
    
    if (nums.length < 2) return nums[0]
    
    for (let i = 0; i < nums.length; i++) {
        maxCurrent = Math.max(maxCurrent + nums[i], nums[i])
        maxBest = Math.max(maxCurrent, maxBest)
    }
    
    return maxBest
};
