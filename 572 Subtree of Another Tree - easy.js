/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
const isSubtree = function(s, t) {
    if (!s) return !t
    return isSame(s, t) || isSubtree(s.left, t) || isSubtree(s.right, t)
};

const isSame = (r1, r2) => {
    if (!r1 || !r2) return !r1 && !r2
    if (r1.val !== r2.val) return false
    return isSame(r1.left, r2.left) && isSame(r1.right, r2.right)
}
