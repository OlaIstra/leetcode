/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = function(nums) {
    let prevMax = 0
    let curMax = 0;
    
    for (let n of nums) {
        const temp = curMax;
        curMax = Math.max(prevMax + n, curMax);
        prevMax = temp;
    }
    return Math.max(curMax, prevMax);
};
