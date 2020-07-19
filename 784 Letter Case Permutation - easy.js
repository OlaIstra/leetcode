/**
 * @param {string} S
 * @return {string[]}
 */
const letterCasePermutation = function(S) {
    const result = []
    
    const dfs = (current, idx) => {
        if (current.length === S.length) {
            result.push(current)
            return
        }
        
        if (S.charAt(idx) >= '0' && S.charAt(idx) <= '9') {
            current += S.charAt(idx)
            dfs(current, idx + 1)
        } else {
            
            dfs(current + S.charAt(idx).toUpperCase(), idx + 1)
             dfs(current + S.charAt(idx).toLowerCase(), idx + 1)
        }
        
    }
    
    dfs('', 0)
        
    return result
};
