/**
 * @param {number[]} nums
 * @return {number}
 */
const findShortestSubArray = function(nums) {
    const hash = {}
    
    nums.forEach(elem => {
        hash[elem] ? hash[elem]++ : hash[elem] = 1
    })
    
    const array = Object.entries(hash)
    array.sort((a, b) => a[1] < b[1] ? 1 : -1)
    
    const degree = array[0][1]
    
    const elems = array.filter(elem => elem[1] === degree)
    
    let minLength = Infinity
    
    elems.forEach(el => {
        const num = Number(el[0])
        const start = nums.indexOf(num)
        const end = nums.lastIndexOf(num)
        minLength = Math.min(end - start + 1, minLength)
    })
    
    return minLength
};
