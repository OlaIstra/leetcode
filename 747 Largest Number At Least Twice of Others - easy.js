/**
 * @param {number[]} nums
 * @return {number}
 */
const dominantIndex = function(nums) {
    if (nums.length === 1) return 0
    const arr = [...nums].sort((a, b) => b - a)
    
    return arr[0] >= arr[1] * 2 ? nums.indexOf(arr[0]) : -1
};
