/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = function(nums, target) {    
    if (nums[0] > target) return 0
    if (nums[nums.length - 1] < target) return nums.length
    
    for (let idx = 0; idx < nums.length; idx++) {
        if (nums[idx] === target) {
            return idx
            break
        } 
        if (nums[idx] < target && nums[idx + 1] > target) {
            return idx + 1
            break
        }
    }
    
};
