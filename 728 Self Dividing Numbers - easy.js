/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
const selfDividingNumbers = function(left, right) {
    const array = []

    for( let i = left; i <= right; i++ ) {
        array.push(i)
    }    

    const result = []

    array.forEach(num => {
        if ( num >=1 && num <= 9) {
            result.push(num)
        } else {
           if (num % 10 !== 0) {
                let isSelf = false
                num.toString().split('').every(digit => {
                   if (num % Number(digit) === 0 ) {
                       isSelf = true
                       return true
                   } else {
                        isSelf = false
                       return false
                   }
                   
               })
            isSelf && result.push(num)
           }
        }
    })

    return result
        
};
