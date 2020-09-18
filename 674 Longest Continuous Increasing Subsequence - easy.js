/**
 * @param {number[]} nums
 * @return {number}
 */
const findLengthOfLCIS = function(nums) {
    if (nums.length === 0) return 0
    
    let counter = 1
    let prev = nums[0]
    let maxLength = 1
    
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > prev) {
            counter++
            maxLength = Math.max(maxLength, counter)
            prev = nums[i]
        } else {
            counter = 1
            prev = nums[i]
        }
    }
    
    return maxLength
};
