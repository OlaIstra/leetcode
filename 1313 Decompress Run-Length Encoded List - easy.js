/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
    let result = []

    while (nums.length > 0) {
        const freq = nums.shift()
        const val = nums.shift()

        const array = Array(freq).fill(val);
        result = result.concat(array)
    }

    return result
};
