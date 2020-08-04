/**
 * @param {number[]} arr
 * @return {number}
 */
const findLucky = function(arr) {
    const hash = {}
    
    arr.forEach(elem => {
        hash[elem] ? hash[elem]++ : hash[elem] = 1
    })
    
    const array = Object.entries(hash).filter(elem => {
        return Number(elem[0]) === elem[1]
    })
    
    return array.length ? array[array.length - 1][1] : -1
};
