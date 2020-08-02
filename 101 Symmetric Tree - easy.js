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

const isSymmetric = function(root) {
    if (!root) {
        return true;
    }

    function isSymFunc(t1, t2) {
        if (!t1 && !t2) { return true }
        
        if (!t1 || !t2 || t1.val !== t2.val) { return false }
        
        return isSymFunc(t1.left, t2.right) && isSymFunc(t1.right, t2.left);
    }
    
    return isSymFunc(root.left, root.right);
};
