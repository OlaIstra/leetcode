/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function(nums) {
    let hash = {}
    let result = 0
    nums.forEach(num => {
        if (hash[num]) {
             hash[num]++
        } else {
            hash[num] = 1
        }
    })

    Object.entries(hash).forEach(arr => {
        if (arr[1] === 1) result = arr[0]
    })

    return result
};
