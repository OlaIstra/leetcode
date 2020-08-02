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
const sumOfLeftLeaves = function(root) {
    let sum = 0
    
    const isLeft = (root) => {
        if (!root) { return sum }
        if (root.left && !root.left.left && !root.left.right) {
            sum += root.left.val;
        }
        isLeft(root.left);
        isLeft(root.right);
      }
    
    isLeft(root)
    
    return sum
    
    
};
