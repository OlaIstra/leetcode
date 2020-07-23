/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = function(nums) {
    
    nums.sort((a, b) => a > b ? 1 : -1)
    if (nums[0] !== 0) return 0
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i + 1] && nums[i] + 1 !== nums[i + 1]) {
            return nums[i] + 1
            
        }
    }
    return nums[nums.length - 1] + 1
    
};
