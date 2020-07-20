/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
const countCharacters = function(words, chars) {
    return words.filter(word => {
        const charsRemain = chars.split('');
        let correctWord = true;
        
        word.split('').forEach(letter => {
            if (!correctWord) return;
            if (charsRemain.includes(letter)) {
                charsRemain.splice(charsRemain.indexOf(letter), 1);
            } else {
                correctWord = false;
                return
            }
        });
        
        return correctWord;
        
    }).join('').length;
}
