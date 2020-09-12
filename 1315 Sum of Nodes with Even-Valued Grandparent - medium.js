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
const sumEvenGrandparent = function(root) {
    let sum = 0

    const findGrandChild = (node) => {
        if (!node) return
        if (node.val % 2 === 0) {
            if (node.left && node.left.left) {
                sum += node.left.left.val
            }
            
            if (node.left && node.left.right) {
                sum += node.left.right.val
            }
            
            if (node.right && node.right.left) {
                sum += node.right.left.val
            }
            
            if (node.right && node.right.right) {
                sum += node.right.right.val
            }
        }

        findGrandChild(node.left)
        findGrandChild(node.right)
    }
    
    findGrandChild(root)
    
    return sum
};
