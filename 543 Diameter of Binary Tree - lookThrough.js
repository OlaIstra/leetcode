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
const diameterOfBinaryTree = function(root) {
    let maxDiameter = 0;
    
    const getDepth = (node) => {
        if(!node) return 0;
        
        let left = getDepth(node.left);
        let right = getDepth(node.right);
        
        maxDiameter = Math.max(left + right, maxDiameter);
        return Math.max(left, right) + 1;
    }
    
    getDepth(root);
    return maxDiameter;
};
