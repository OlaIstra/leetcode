/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
const canBeEqual = function(target, arr) {
    
    let result = true
    const arrHash = {}
    const targetHash = {}
    
    arr.forEach(el => {
        arrHash[el]
            ? arrHash[el]++
            : arrHash[el] = 1
    })
    
    target.forEach(el => {
        targetHash[el]
            ? targetHash[el]++
            : targetHash[el] = 1
    })
    
    for (key in arrHash) {
        if (targetHash[key] !== arrHash[key]) {
            result = false
        }
    }
    
    
    return result               
};
