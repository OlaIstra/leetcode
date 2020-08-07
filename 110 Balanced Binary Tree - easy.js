/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isBalanced = function(root) {
    if (!root) return true
    
    return ((Math.abs(checkBalance(root.right) - checkBalance(root.left)) <= 1) && isBalanced(root.right) && isBalanced(root.left))  ? true : false
};

const checkBalance = (root) => {
    if (!root) return 0
    return 1 + Math.max(checkBalance(root.right), checkBalance(root.left))
}
