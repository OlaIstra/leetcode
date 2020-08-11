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
const minDiffInBST = function(root) {
    let min = Infinity
    let prev = Infinity
    
    const findMin = (root) => {
        if (!root) return
        
        findMin(root.right)
        
        if (min > prev - root.val) {
            min = prev - root.val
        }
        
        prev = root.val
        
        findMin(root.left)
        
    }
    findMin(root)
    return min
};
