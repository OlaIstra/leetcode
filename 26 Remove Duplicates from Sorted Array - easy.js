/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function(nums) {
     nums.splice(0, nums.length, ...(new Set(nums)));
};

// const removeDuplicates = function(nums) {
//     let i = 0;
//     for(let j = 1; j < nums.length; j++){
//         if(nums[i] != nums[j]){
//             i++;
//             nums[i]=nums[j];
//         }
//     }
//     return i+1;
// };
