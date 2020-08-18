/**
 * @param {string} s
 * @return {string}
 */
const reverseVowels = function(s) {
    const array = s.split('')
    const vowels= ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    
    let i = 0
    let j = array.length - 1
    
    while (i < j) {
        if (vowels.includes(array[i]) && vowels.includes(array[j])) {
            const temp = array[i]
            array[i] = array[j]
            array[j] = temp
            i++
            j--
        } else {
            if (!vowels.includes(array[i]) && vowels.includes(array[j])) {
                i++
            } else if (vowels.includes(array[i]) && !vowels.includes(array[j])) {
                j--
            } else if (!vowels.includes(array[i]) && !vowels.includes(array[j])) {
                i++
                j--
            }
        }    
    }

    return array.join('')
};
