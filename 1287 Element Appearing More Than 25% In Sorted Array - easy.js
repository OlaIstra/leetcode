/**
 * @param {number[]} arr
 * @return {number}
 */
const findSpecialInteger = function(arr) {
    const length = arr.length
    if (length === 1 || length === 2 || length === 3) return arr[0]
    
    const amount = Math.ceil(length / 4) + 1
    
    let result = null
    
    let prev = arr[0]
    let count = 0

    for (let i = 1; i < length; i++) {
        if (arr[i] === prev) {
            count++
            if (count >= amount) {
                result = prev
                break
            }
        } else {
            if (count >= amount) {
                result = prev
                break
            } else {
                prev = arr[i]
                count = 1
            }
        }
    }
    
    return result
};
