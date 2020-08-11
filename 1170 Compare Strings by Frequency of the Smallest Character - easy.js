/**
 * @param {string[]} queries
 * @param {string[]} words
 * @return {number[]}
 */
const numSmallerByFrequency = function(queries, words) {
    const result = []
    
    const amountOfMin = (word) => {
        let wordArray = Array.from(word);
        let minLetter = wordArray.sort()[0];
        return wordArray.filter(x => x === minLetter).length;
    }
    
    const amounts = words.map(word => amountOfMin(word));
    
    for(let letter of queries) {
        let counter = 0, am = amountOfMin(letter);
        for(let i in words) {
            if(am < amounts[i]) counter++;
        }
        result.push(counter); 
    }
    
    return result;
};
