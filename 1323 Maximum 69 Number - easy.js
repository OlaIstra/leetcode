/**
 * @param {number} num
 * @return {number}
 */
const maximum69Number  = function(num) {
    function is6(num) {
        return num === '6'
    }   
    
    const array = num.toString().split('')
    const index = array.findIndex(is6)
    
    if (index >= 0) {
        array.splice(index, 1, '9')
        return Number(array.join(''))
    } else {
        return num
    }

};
