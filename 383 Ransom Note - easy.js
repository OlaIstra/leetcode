/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
cinst canConstruct = function(ransomNote, magazine) {
    const hash = {};
    for(let char of magazine) {
        if (!hash[char]) {
            hash[char] = 0;
        }
        hash[char]++;
    }
    
    for(let char of ransomNote) {
        if(!hash[char]) {
            return false;
        } 
        hash[char]--;
    }
    return true;
};
