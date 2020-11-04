/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
const findAndReplacePattern = function(words, pattern) {
    const result = []
    
    const patternNum = {}
    const patternLength = pattern.length
    
    for (let i = 0; i < pattern.length; i++) {
        patternNum[pattern[i]] ? patternNum[pattern[i]] += i : patternNum[pattern[i]] = i + ''
    }
    
    const patternVal= Object.values(patternNum)
    const patternValL = patternVal.length
    
    for (let j = 0; j < words.length; j++) { 
        const word = words[j]
        if (word.length !== patternLength) break
        
        const wordNum = {}
        for (let i = 0; i < word.length; i++) {
            wordNum[word[i]] ? wordNum[word[i]] += i : wordNum[word[i]] = i + ''
        }
        
        const wordVal = Object.values(wordNum)
        if (wordVal.length === patternValL) {
            let isTrue = true
            for (let i = 0; i < wordVal.length; i++) {
                if (wordVal[i] !== patternVal[i]) {
                    isTrue = false
                    break
                }
            }

            if (isTrue) {
                result.push(word)
            }
        }
        
    }
    
    return result
    
};
