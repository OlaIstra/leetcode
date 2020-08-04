/**
 * @param {number[]} nums
 * @return {number}
 */
const minStartValue = function(nums) {
    let min = Infinity
    let sum = 0
    
    nums.forEach(elem => {
        min = Math.min(min, sum += elem)
    })
    
    return min < 0 ? 1 - min : 1
};
