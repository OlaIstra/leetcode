/**
 * @param {number[]} nums
 * @return {number[]}
 */
const minSubsequence = function(nums) {
    let numsSum = nums.reduce((sum, el) => sum + el, 0)
    nums.sort((a, b) => a - b)
    
    const result = []
    let resultSum = 0
    
    for (let i = nums.length - 1 ; i >= 0; i--) {
        result.push(nums[i])
        resultSum += nums[i]
        numsSum -= nums[i]
        if (resultSum > numsSum) {
            break
        }
    }
    
    return result

};
