/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
const createTargetArray = function(nums, index) {
    const target = []
    
    index.forEach((idx,i)  => {
        target.splice( idx, 0, nums[i] )
    })

    return target
};
