/**
 * @param {number[]} nums
 * @return {number}
 */
const maxProduct = function(nums) {    
    const val1 = Math.max(...nums)
    const indexVal1 = nums.indexOf(val1)
    nums.splice(indexVal1, 1)
    const val2 = Math.max(...nums)
        
    return (val2 - 1)*(val1 - 1)
};
