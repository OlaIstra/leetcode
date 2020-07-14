/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function(nums) {
    let idx = 0
 
    for(let i = 0; i < nums.length; i++){        
        if(nums[i] !== 0) {
           nums[idx] = nums[i]
            idx++
        }
    }
    nums.fill(0, idx, nums.length)
    
};
