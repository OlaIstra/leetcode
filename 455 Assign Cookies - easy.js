/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
const findContentChildren = function(g, s) {
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);
    
    let result = 0;
    
    for(let i = 0, j =0 ; i < g.length && j < s.length; i++, j++) {
        g[i] <= s[j] ? result++ : i--
    }
    return result;
};
