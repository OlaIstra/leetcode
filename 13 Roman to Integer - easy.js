/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function(s) {
    const array = s.split('')
    
    let result = 0
    let prev = 0
    
    array.forEach(item => {
        
        hash[item] > prev 
            ? result = result - prev - prev + hash[item]
            : result += hash[item]
        
        prev = hash[item]
        
    })
    return result
};

const hash = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
};
