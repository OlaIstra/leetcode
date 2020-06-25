/**
 * @param {string[]} words
 * @return {number}
 */
const uniqueMorseRepresentations = function(words) {
    const morse = {
        a:".-",
        b:"-...",
        c:"-.-.",
        d:"-..",
        e:".",
        f:"..-.",
        g:"--.",
        h:"....",
        i:"..",
        j:".---",
        k:"-.-",
        l:".-..",
        m:"--",
        n:"-.",
        o:"---",
        p:".--.",
        q:"--.-",
        r:".-.",
        s:"...",
        t:"-",
        u:"..-",
        v:"...-",
        w:".--",
        x:"-..-",
        y:"-.--",
        z:"--.."
    }

    const result = new Set()
    
    words.forEach(word => {
        result.add(word.split('').map(letter => morse[letter]).join(''))
    })

    return result.size
};
