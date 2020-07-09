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
 * @return {TreeNode}
 */
const increasingBST = function(root) {
    const newRoot = new TreeNode(undefined); //create dummy tree
    let current = newRoot; //current is dummy tree
    
    const inorder = node => { //function inorder is for creating 
        if (node === null) { //if we got the last node in the tree we go out of function
            return;
        }
        inorder(node.left); // we go to the most left node
        
        // for current node, we want to only link the node to the right
        node.left = null;
        current.right = node;
        
        // reassign node to current for the next operation
        current = node;
        inorder(node.right);
    }
    
    inorder(root)
    return newRoot.right;
};
