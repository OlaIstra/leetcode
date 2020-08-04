/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = function(a, b) {
  // RULES
  // 1st + 2nd + inMind = sum, new inMind
  //   0 +  0  + 0 = 0, 0 
  //   0 +  0  + 1 = 1, 0 
  //   0 +  1  + 1 = 0, 1
  //   1 +  1  + 1 = 1, 1

  let inMind = 0;
  let result = '';

  let length1 = a.length - 1;
  let length2 = b.length - 1;

  for (; length1 >= 0 || length2 >= 0 || inMind > 0; length1--, length2--) {
    let sum = (+a[length1] || 0) + (+b[length2] || 0) + inMind;
      
    if (sum > 1) {
      sum = sum % 2;
      inMind = 1;
    } else {
      inMind = 0;
    }
    result = `${sum}${result}`;
  }
  return result;
};
