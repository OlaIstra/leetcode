/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} t
 * @return {string}
 */
const tree2str = function(t) {
    if(!t) return ''
    
    if (!t.left && !t.right) {
        return `${t.val}`;
    } else if (!t.left) {
        return `${t.val}()(${tree2str(t.right)})`;
    } else if(!t.right) {
        return `${t.val}(${tree2str(t.left)})`;
    } else {
        return  `${t.val}(${tree2str(t.left)})(${tree2str(t.right)})`;
    }   
};
