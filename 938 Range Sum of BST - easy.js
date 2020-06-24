/**
 * Definition for a binary tree node.
 * function TreeNode(   , left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */

const sum = (root, L, R) => {
    let result = 0;
    if(!root) return result
    console.log(root)
    if(root.val >= L && root.val <= R) {
        result += root.val;
    }
    if(root.val > L) {
        result += sum(root.left, L, R);
    }
    if(root.val < R) {
        result += sum(root.right, L, R);
    }
    
    return result;
}

const rangeSumBST = function(root, L, R) {
    return sum(root, L, R)
};
