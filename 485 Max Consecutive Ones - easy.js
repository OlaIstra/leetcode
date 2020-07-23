/**
 * @param {number[]} nums
 * @return {number}
 */
const findMaxConsecutiveOnes = function(nums) {
    let max = 0
    let amount = 0
    nums.forEach(el => {
        if (el === 1) {
            amount++
        } else {
            max = Math.max(max, amount)
            amount = 0
        }
    })
    max = Math.max(max, amount)
    return max
};
