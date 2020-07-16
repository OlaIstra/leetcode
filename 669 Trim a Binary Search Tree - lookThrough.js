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
 * @param {number} L
 * @param {number} R
 * @return {TreeNode}
 */
const trimBST = function(root, L, R) {
    if (root === null) return root
    
    root.right = trimBST(root.right, L,R)
    root.left = trimBST(root.left, L,R)
    
    if (root.val < L) return root.right
    if (root.val > R) return root.left
    
    return root

};
