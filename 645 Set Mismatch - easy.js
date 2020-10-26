/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findErrorNums = function(nums) {
    const arr = new Array(nums.length).fill(0)
    
    const hash = {}
    
    nums.forEach(el => {
        hash[el] ? hash[el]++ : hash[el] = 1
        arr[el - 1] = el 
    })
    const result = []
    
    for (let num in hash) {
        if (hash[num] === 2) {
            result.push(Number(num))
        }
    }
    
    result.push(arr.indexOf(0) + 1)
    
    return result
};
