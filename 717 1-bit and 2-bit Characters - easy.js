/**
 * @param {number[]} bits
 * @return {boolean}
 */
const isOneBitCharacter = function(bits) {
  
  let isValid = true;
  
  for (let i = 0; i < bits.length - 1; i++) {
    if (bits[i] === 0) {
      isValid = true;
      continue;
    }
    
    isValid = !isValid;
  }
  
  return isValid;
};
