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
 * @param {number} val
 * @return {TreeNode}
 */
const searchBST = function(root, val) {
        if (!root) return null

        if ( val === root.val ) {
            return root
        }    
    
        return (val < root.val)
                    ? searchBST(root.left, val)
                    : searchBST(root.right, val)
};
