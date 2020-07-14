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
 * @return {boolean}
 */
const isUnivalTree = function(root) {
    return preOrder(root, root.val);
};

function preOrder(node, val) {
    if (node == null) return true;
    
    if (node.val != val) return false;
    return preOrder(node.left, node.val) && preOrder(node.right, node.val);
}
