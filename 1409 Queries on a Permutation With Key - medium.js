/**
 * @param {number[]} queries
 * @param {number} m
 * @return {number[]}
 */
const processQueries = function(queries, m) {
    const result = []
    const P = []
    
    for (let i = 1; i <= m; i++) {
        P.push(i)
    }
    
    for (let i = 0; i < queries.length; i++) {
        const num = queries[i]
        const pos = P.indexOf(num)
        P.splice(pos, 1)
        P.unshift(num)
        result.push(pos)
    }
    
    return result
};
