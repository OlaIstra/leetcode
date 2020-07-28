// Iterative solution
// Time Complexity: O(H)
// Space Complexity: O(1)
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
const lowestCommonAncestor = function(root, p, q) {
    while (root) {
        if (root.val < p.val && root.val < q.val) {
            root = root.right;
        }
        else if (root.val > p.val && root.val > q.val) {
            root = root.left;
        } else {
            break;
        }
    }
    return root;
};
