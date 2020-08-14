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
const findTilt = function(root) {
    let tilt = 0
    
    const getTilt = (node) => {
        if (!node) return 0        
        
        const leftTilt = getTilt(node.left)
        const rightTilt = getTilt(node.right)
        
        tilt += Math.abs(leftTilt - rightTilt)
        return leftTilt + rightTilt + node.val
    }
    
    getTilt(root)
    
    return tilt
};
