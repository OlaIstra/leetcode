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
const deepestLeavesSum = function(root) {
    let sum = 0
    let deepest = 0
    
    const traverse = (node, level) => {
        if (!node) return 
        
        if (level === deepest) {
            sum += node.val
        } 
        
        if (level > deepest) {
            deepest = level
            sum = node.val
        }
        
        traverse(node.left, level + 1)
        traverse(node.right, level + 1)
    }
    
    traverse(root, 0)
    
    
    return sum
};
