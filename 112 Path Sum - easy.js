/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
const hasPathSum = function(root, sum) {
    if(!root) return false
    
    if(!root.left && !root.right) return root.val == sum ? true : false
    
    const remain = sum - root.val
    
    return hasPathSum(root.left, remain) || hasPathSum(root.right, remain)
};
