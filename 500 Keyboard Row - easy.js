/**
 * @param {string[]} words
 * @return {string[]}
 */
const findWords = function(words) {
    const result = []
    
    words.forEach(word => {
        const lowWord = word.toLowerCase()
        let number = hash[lowWord[0]]
        let isSame = false
        
        for (let idx = 0; idx < lowWord.length; idx++ ) {  
            if (number === hash[lowWord[idx]]) {
                isSame = true
            } else {
                return isSame = false
            }
        }
        if (isSame) result.push(word)
    })
    
    return result
};

const hash = {'q':1, 'w':1, 'e':1, 'r':1, 't':1, 'y':1, 'u':1, 'i':1, 'o':1, 'p':1, 
                'a':2, 's':2, 'd':2, 'f':2, 'g':2, 'h':2, 'j':2, 'k':2, 'l':2, 
                'z':3, 'x':3, 'c':3, 'v':3, 'b':3, 'n':3, 'm':3};
