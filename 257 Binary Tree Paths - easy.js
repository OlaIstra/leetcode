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
 * @return {string[]}
 */
const binaryTreePaths = function(root) {
    const result = []
    
    const getPath = (root, str) => {
        
        if (!root) return

        str += '->'+root.val
        if (!root.left && !root.right) {
            result.push(str.slice(2))
            return
        }
        getPath(root.left, str)
        getPath(root.right, str)
        
    } 
    getPath(root, '')
    return result
};
