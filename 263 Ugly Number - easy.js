/**
 * @param {number} num
 * @return {boolean}
 */
const isUgly = function(num) {
    if (num === 0) return false;
    let i = 0;
    
    while(num !== 1) {
        const x = num/2;
        const y = num/3;
        const z = num/5;
        
        if ( x % 1 === 0) {
            num = x;
        } else if ( y % 1 === 0) {
            num = y;
        } else if( z % 1 === 0) {
            num = z;
        } else {
            return false;
        }
        i++;
    }
    return true;
};
