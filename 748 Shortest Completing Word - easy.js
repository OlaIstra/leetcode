/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
const shortestCompletingWord = function(licensePlate, words) {
  const string = licensePlate.replace(/[^a-z]/gi,'').toLowerCase();
  let result = '';
  
  for (let i = 0; i < words.length; i++) {
    let currWord = words[i];
     
    for (let j = 0; j < string.length; j++) {
      const currRegExp = new RegExp (`${string[j]}`)
      currWord = currWord.replace(currRegExp, '');
    }
    
    if ( words[i].length - string.length !== currWord.length ) continue;
    if (result.length === 0 || words[i].length < result.length) result = words[i]
  }
  
  return result;
};
