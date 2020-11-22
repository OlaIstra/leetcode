/**
 * @param {number[][]} dominoes
 * @return {number}
 */
const numEquivDominoPairs = function(dominoes) {
    const arr = Array(100).fill(0)
    let count = 0
    
    for(const domino of dominoes){
        const num = domino[0] < domino[1] ? domino[0] * 10 + domino[1] : domino[1] * 10 + domino[0]
        count += arr[num]
        arr[num]++
    }
    
    return count
};
