/**
 * @param {number[]} nums
 * @return {number[][]}
 */

const  subsets = function(nums) {
    const result = []
    
    const dfs = (cur, idx) => {
        result.push(cur);
        for(let i = idx; i < nums.length; i++) {
            dfs(cur.concat(nums[i]), i + 1);
        }
    }
    dfs([], 0);
    
    return result;
};
