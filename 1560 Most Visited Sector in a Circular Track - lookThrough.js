/**
 * @param {number} n
 * @param {number[]} rounds
 * @return {number[]}
 */
const mostVisited = function(n, rounds) {
    const start = rounds[0]
    const finish = rounds[rounds.length-1]
    const result = []
    
    if(start <= finish) {
        for(let i = start; i <= finish; i++) {
            result.push(i)
        }
    } else {
        for(let i = 1; i <= finish; i++) {
            result.push(i)
        }
        for(let i = start; i <= n; i++) {
            result.push(i)
        }
    }
    return result
}
