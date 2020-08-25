/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
const getHint = function(secret, guess) {
  const hash = {};
  let A = 0;
  let B = 0;
    
  for (let i = 0; i < 10; i++) hash[i] = 0;
    
  for (i = 0; i < secret.length; i++) {
      
    if (secret[i] === guess[i]) A++;
      
    else {
      hash[secret[i]]++;
      B += hash[secret[i]] <= 0 ? 1 : 0;
      hash[guess[i]]--;
      B += hash[guess[i]] >= 0 ? 1 : 0;
    }
  }
  return A + 'A' + B + 'B';
    
    
};
