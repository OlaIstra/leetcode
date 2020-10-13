/**
 * @param {number[]} nums
 * @return {number}
 */
const pivotIndex = function(nums) {
    const sum = nums.reduce((num,curr)=>(num+curr),0)
    let currSum = 0
    
    for(let i = 0; i < nums.length; i++){
        if((sum - nums[i]) / 2 === currSum){
            return i;
        }
        currSum += nums[i];
    }
    
    return -1
};
