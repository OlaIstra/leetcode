/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
const bstFromPreorder = function(preorder) {
  const traverse = (root, val) => {
      root.val > val 
        ? root.left ? traverse(root.left, val) : root.left = new TreeNode(val, null, null)
        : root.right ? traverse(root.right, val) : root.right = new TreeNode(val, null, null)
      return
  }
  
  const root = new TreeNode(preorder[0], null, null)
  
  for (let i = 1; i < preorder.length; i++) {
      traverse(root, preorder[i])
  }
    return root
};
