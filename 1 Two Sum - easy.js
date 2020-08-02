/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
    const hashTable = {}
    
    for (let i = 0; i< nums.length; i++) {
        hashTable[nums[i]] >= 0
            ? return [hashTable[nums[i]], i]
            : hashTable[target - nums[i]] = i  
    }
};
