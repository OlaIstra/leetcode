/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    const num1Length = num1.length;
    const num2Length = num2.length;
    
    let maxLength = num1.length > num2.length ? num1.length : num2.length;
    maxLength++;
    
    let carry = 0;
    let total = '';
    
    for (let i = 0; i < maxLength; i++) {
        if (i === (maxLength - 1) && carry === 0) {
            continue;
        }
        let pos = num1Length - i - 1;
        let a = pos < 0 ? 0 : (num1.charCodeAt(pos) - 48);
        pos = num2Length - i - 1;
        let b = pos < 0 ? 0 : (num2.charCodeAt(pos) - 48);
        let t =  a + b + carry;
        carry = Math.floor(t/10);
        total =  (t % 10) + total;
    }
    return total;
};
