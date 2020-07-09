/**
 * @param {number} n
 * @return {number[]}
 */
const sumZero = function(n) {
    const uniqueIntegers = [];
    const half = Math.floor(n / 2);
    
    for (let i = 1; i <= half; i++) {
        uniqueIntegers.push(i);
        uniqueIntegers.push(-i);
    }
    
    if (n % 2) {
        uniqueIntegers.push(0);
    }
    
    return uniqueIntegers;
    
};
