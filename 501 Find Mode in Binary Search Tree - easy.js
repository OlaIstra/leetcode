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
 * @return {number[]}
 */
var findMode = function(root) {
    if (!root) return []
    if (!root.left && !root.right) return [root.val]

    const hash = {}
    
    const getThrough = node => {
        if (!node) return
        
        hash[node.val] ? hash[node.val]++ : hash[node.val] = 1
        getThrough(node.left)
        getThrough(node.right)
    }

    getThrough(root)
    
    let max = -Infinity
    
    for (let idx in hash) {
        max = Math.max(max, hash[idx])
    }

    const result = []
    
    for (let idx in hash) {
        hash[idx] === max && result.push(idx)
    }
    
    return result
    
};
