/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findDuplicates = function(nums) {
    const result = []
    for (let i = 0; i < nums.length; i++){
        const index = Math.abs(nums[i]) - 1
        if (nums[index] < 0){
            result.push(index + 1)
        }
        nums[index] = -Math.abs(nums[index])
    }
    return result
};
