/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const inorderTraversal = function(root) {
    const result = []
    
    const func = node => {
        if (!node) return
        
        func(node.left)
        result.push(node.val)
        func(node.right)
    }
    
    func(root)
    return result
};
