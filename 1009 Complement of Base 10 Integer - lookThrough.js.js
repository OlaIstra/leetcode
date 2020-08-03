/**
 * @param {number} N
 * @return {number}
 */

const bitwiseComplement = function(N) {
    const helper = N.toString(2).split('').map(function (n) {
        return n === 0 ? 1 : 0;   
    });
    return parseInt(helper.join(''), 2);
};

const bitwiseComplement = function(N) {
    
    // base case
    if (N === 0) return 1;
    
    // get number of bits required for N
    const n = Math.floor(Math.log2(N) + 1);
    
    // create bitmask of 1s of length of digits
    const mask = 2 ** n - 1;
    
    // xor these two nums for the result
    return N ^ mask;
};

const bitwiseComplement = function(N) {
  let mask = 1;
  while (N > mask) mask = (mask << 1) | 1;
  return N ^ mask;
};
