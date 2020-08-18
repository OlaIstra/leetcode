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
 * @return {TreeNode}
 */
const bstToGst = function(root) {
    let result = 0
    
    const sumNodes = (root) => {
        if (!root) return
        sumNodes(root.right)
        root.val += result
        
        result = root.val
        sumNodes(root.left)
    }
    
    sumNodes(root)
    return root
};
