/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
const leafSimilar = function(root1, root2) {
    const arr1 = []
    const arr2 = []
    
    const searchLeafs = (root, arr) => {
        if (!root) return arr

        if (!root.left && !root.right) arr.push(root.val)
        
        searchLeafs(root.left, arr)
        searchLeafs(root.right, arr)
    }
    
    searchLeafs(root1, arr1)
    searchLeafs(root2, arr2)

    return arr1.join(' ') === arr2.join(' ')
};
