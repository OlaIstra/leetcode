/**
 * @param {number[]} nums
 * @return {number[]}
 */
const runningSum = function(nums) {
    const result = [nums[0]]

    nums.forEach((num, idx) => {
        idx !== 0 && result.push(result[idx-1] + num)
    })

    return result
    
};
