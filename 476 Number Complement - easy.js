/**
 * @param {number} num
 * @return {number}
 */
const findComplement = function(num) {    
    const result = []
    
    num.toString(2).split('').forEach(elem => {
        elem === '1' 
            ? result.push('0')
            : result.push('1')
    })
    
    return parseInt( result.join(''), 2 )
};
