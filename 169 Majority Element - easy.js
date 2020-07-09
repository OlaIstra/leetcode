 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function(nums) {
    const length = nums.length / 2
    
    const hash = {}
    
    nums.forEach(elem => {
        if (hash[elem]) {
            hash[elem]++
        } else {
            hash[elem] = 1
        }
    })
    
    const majorAmount = Math.max(...Object.values(hash))
    
    return getKeyByValue(hash, majorAmount)
};

function getKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}
