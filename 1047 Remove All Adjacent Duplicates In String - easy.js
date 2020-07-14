/**
 * @param {string} S
 * @return {string}
 */
const removeDuplicates = function(S) {
    const array = S.split('')
        
    let removed = false
    
    do {
        removed = false
        for (let i = 0; i < array.length; i++) {
            
            if (array[i] === array[i+1]) {
                array.splice(i,2)
                removed = true
            }
        }
        
    } while(removed)
        
    return array.join('')   
    
};
