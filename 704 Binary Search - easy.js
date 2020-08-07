/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function(nums, target) {
    let left = 0
    let right = nums.length - 1
    
    while(left <= right) {
        const middleIdx = Math.floor((left + right) / 2)
        
        if (nums[middleIdx] === target) {
            return middleIdx
        } else if (nums[middleIdx] < target) {
            left = middleIdx + 1
        } else if (nums[middleIdx] > target) {
            right = middleIdx - 1
        }
    }
    
    return -1
};
