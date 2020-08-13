/**
 * @param {string[]} words
 * @return {string[]}
 */
const stringMatching = function(words) {
    words.sort((a, b) => a.length - b.length)

    const result = []
    for (let i = 0; i < words.length - 1; i++) {
        for (let j = i + 1; j < words.length; j++) {
            if (words[i].length < words[j].length && words[j].includes(words[i])) {
                result.push(words[i])
            }
        }
    }
    
    return Array.from(new Set(result))
};
