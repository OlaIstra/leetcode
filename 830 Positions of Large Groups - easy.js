/**
 * @param {string} S
 * @return {number[][]}
 */
const largeGroupPositions = function(S) {
    const result = []
    const length = S.length
    
    let i = 0 
    let j = 0
    
    
    while (i < length){
        j = i
        while (j < length && S.charAt(i) === S.charAt(j)) j++
        
        if (j - i > 2) result.push([i, j - 1])
        i = j
    }
    
    return result
}

const largeGroupPositions = function(S) {
    const result = []
    const regex = /(\w)\1{2,}/g
    let found
    
    while ((found = regex.exec(S)) !== null) {
        result.push([found.index, found.index + found[0].length - 1])
    }
    
    return result
}
