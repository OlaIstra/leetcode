/**
 * @param {number} n
 * @return {number}
 */
const countLargestGroup = function(n) {
    const hash = {}
    
    Array(n).fill().map((_,i) => i + 1).forEach( elem => {
        const totalDig = sumOfDigits(elem)
        
        hash[totalDig] ? hash[totalDig]++ : hash[totalDig] = 1
    })
    
    let max = 0
    
    for (let key in hash) {
        max = Math.max(hash[key], max)
    }
    
    return Object.keys(hash).filter( elem => hash[elem] === max).length
};

const sumOfDigits = (num) => {
    return String(num).split('').reduce((total,elem) => {
        return total + Number(elem)
    },0)
}
