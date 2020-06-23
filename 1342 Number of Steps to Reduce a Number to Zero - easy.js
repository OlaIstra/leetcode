/**
 * @param {number} num
 * @return {number}
 */
const numberOfSteps  = function(num) {
  let count = 0
  
  while (num > 0) {
    (num % 2 === 0) ? num = num / 2  : num--
    count++
  }
  return count
};
