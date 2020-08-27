/**
 * @param {string[]} words
 * @return {string}
 */
const longestWord = function(words) {
    words.sort()
    let result = ''
    
    for (const word of words) {
        let isValid = true
        let key = ''
        
        for (let i = 0; i < word.length - 1; i++) {
            key += word[i]
            if (!words.includes(key)) {
                isValid = false
                break;
            }
        }
        
        if (isValid && word.length > result.length) {
            result = word
        }
    }
    return result
};
