/**
 * @param {number[]} nums
 * @return {number}
 */
const findNumbers = function(nums) {
    let count = 0
    
    nums.forEach(num => {
        (num.toString().split('').length % 2 === 0) && count++
    })
    
    return count
};
