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
const sumRootToLeaf = function(root) {
    let result = 0
    
    const getPath = (root, string) => {
        if (!root) return string
        
        string += root.val
        
        if (!root.left && !root.right) {
            result += parseInt(string, 2)
            
        }           
            getPath(root.left, string)
            getPath(root.right, string)

    }

    getPath(root, '')
    
    return result
};
