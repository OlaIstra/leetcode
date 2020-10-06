/**
 * @param {string} s
 * @return {string}
 */
const reformat = function(s) {
    const chars = []
    const nums = []
    
    for (let i in s) {
        if (Number(s[i]) >= 0) {
            nums.push(s[i])
        } else {
            chars.push(s[i])
        }
    }
    
    if (Math.abs(chars.length - nums.length) > 1) return ''
    
    const max = (chars.length - nums.length) > 0 ? [...chars] : [...nums]
    
    const min = (chars.length - nums.length) <= 0 ? [...chars] : [...nums]
    
    const result = []
    
    for (let i = 0; i < max.length; i++) {
        result.push(max[i])
        result.push(min[i])
    }
    
    return result.join('')
};
