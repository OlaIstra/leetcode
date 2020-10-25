/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
const mostCommonWord = function(paragraph, banned) {
    const hash = {}
    
    paragraph.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?']/g," ").split(' ').forEach(el => {
        if (el !== '') {
            hash[el] ? hash[el]++ : hash[el] = 1
        }
    })
    
    const arr = Object.entries(hash)
    let word
    let max = 0
    
    arr.forEach(el => {
        if (!banned.includes(el[0])) {
            if (el[1] > max) {
                max = el[1]
                word = el[0]
            }
        }
    })
    
    return word
};
