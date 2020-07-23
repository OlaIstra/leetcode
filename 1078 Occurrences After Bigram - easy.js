/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
const findOcurrences = function(text, first, second) {
    const textArr = text.split(' ')
    const result = []
    
    for (let i = 0; i < textArr.length; i++) {
        if (textArr[i] === first && textArr[i + 1] === second) {
            textArr[i + 2] && result.push(textArr[i + 2])
        }
    }
    
    return result
};
