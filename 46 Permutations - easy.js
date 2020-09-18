/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = function(nums) {
    
    function* recurse(arr, options) {
        if(arr.length === nums.length) yield arr;
        
        for(let i = 0; i < options.length; i++) {
            yield* recurse([...arr, options[i]], [...options.slice(0, i), ...options.slice(i+1)])            
        }
    }
    return [...recurse([], nums)];    
};

const permute = (nums) => {
  const res = [];

  const go = (cur, rest) => {
    if (rest.length === 0) {
      res.push(cur);
      return;
    }

    for (let i = 0; i < rest.length; i++) {
      // note if using array push and splice here, it will cause mutation
      go(
        [...cur, rest[i]],
        [...rest.slice(0, i), ...rest.slice(i + 1)],
      );
    }
  };

  go([], nums);
  return res;
};

const permute = function(nums) {
  const output = [];
  /**
   * The goal is break down the problem by finding permutations in subarrays.
   * So we will maintain a subarray of fixed elements and a subarray for 
   * exploring permutations.
   *
   *                  [1], [2, 3]    [1, 2], [3]    [1, 2, 3]
   * [], [1, 2, 3] -> [2], [1, 3] -> [1, 3], [2] -> [1, 3, 2]
   *                  [3], [1, 2]    [2, 1], [1]    [2, 1, 3]
   *                                 [2, 3], [1]    [2, 3, 1]
   *                                 [3, 1], [2]    [3, 1, 2]
   *                                 [3, 2], [1]    [3, 2, 1]                                 
   */
  const dfs = (curr, rest) => {
    // base case. Found a permutation because there's nothing else to explore.
    if (rest.length === 0) {
      output.push(curr);
      return;
    }
    for (let i = 0; i < rest.length; i++) {
      dfs([...curr, rest[i]], [...rest.slice(0, i), ...rest.slice(i + 1)]);
    }
  }
  dfs([], nums);
  
  return output;
};
