/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const reverseStr = function(s, k) {    
  if(s.length < k) return s.split("").reverse().join("");
    
  let result = "";
    
  for (let i = 0; i < s.length; i += 2*k) {
    result += s.split("").slice(i, i+k).reverse().join("");
    result += s.slice(i+k, i+2*k);
  }
 
  return result;
};
