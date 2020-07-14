/**
 * @param {number} num
 * @return {number}
 */
const addDigits = function(num) {
    const numS = num.toString().split('')
    let result = 0
    if ( numS.length > 1 ) {
        numS.forEach(el => {
            result += Number(el)
        })
        
        return addDigits(result)
    } else {
        result = num
    }
    return result
};
