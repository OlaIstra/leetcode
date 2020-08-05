/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
const isPrefixOfWord = function(sentence, searchWord) {
    const array = sentence.split(' ')
    
    const arrayOfAll = array.filter(elem => elem.search(searchWord) === 0)
    
    if (arrayOfAll.length === 0) return -1
    
    return array.indexOf(arrayOfAll[0]) + 1
};
