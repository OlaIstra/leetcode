/**
 * @param {number[]} nums
 * @return {number}
 */
const minMoves = function(nums) {
    const length = nums.length;
    
    let min = nums[0];
    let sum = min;
    
    for(let i = 1; i < length; i++){
        console.log('-------')
        sum += nums[i];
        console.log(sum)
        min = Math.min(nums[i], min);
        console.log(min)
    }
    
    return sum - length * min;
};

const minMoves = function(nums) {
  return nums.reduce((acc, cur) => acc + cur) - nums.length * Math.min(...nums);
};
