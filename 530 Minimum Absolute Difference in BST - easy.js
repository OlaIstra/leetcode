/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const getMinimumDifference = function(root) {
    const vals = []
    
    const getVals = (root) => {
        if (!root) return vals 
        
        vals.push(root.val)
        
        getVals(root.left)
        getVals(root.right)
    }
    
    getVals(root)
    
    vals.sort((a,b) => a < b ? 1 : -1)
    
    let diff = Infinity
    
    for (let i = 0; i < vals.length - 1; i++) {
        diff = Math.min(vals[i] - vals[i+1], diff)
    }
    
    return diff
};
