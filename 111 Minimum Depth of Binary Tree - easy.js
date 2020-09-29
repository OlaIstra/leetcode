/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const minDepth = function(root) {
    if (!root) return 0
    let depth = 1
    let min = Infinity
    const findMinDepth = (node, depth) => {
        if (!node) return
        if (node.left === null && node.right === null) {
            min = Math.min(depth, min)
            return
        }
        findMinDepth(node.left, depth + 1)
        findMinDepth(node.right, depth + 1)
    }    
    findMinDepth(root, 1)    
    return min
};
