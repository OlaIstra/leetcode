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
var convertBST = function(root) {
    const result = []
    
    const getVal = (root, res) => {
        if (!root) return res
        
        res.push(root.val)
        
        getVal(root.left, res)
        getVal(root.right, res)
    }
    
    getVal(root, result)
    
    result.sort((a, b) => a > b ? 1 : -1)
    
    const addSum = (root) => {
        if (!root) return null
        const idx = result.indexOf(root.val)
        const sum = result[idx + 1] !== undefined ? result.slice(idx + 1).reduce((total, sum) => total+sum) : 0     
        root.val += sum
        
        addSum(root.left)
        addSum(root.right)
    }
    
    addSum(root)
    
    return root
};

var convertBST = function(root) {
    if(root === null) return root;
    let curSum = 0;
    var dfs = function (node) {
        if(node === null) return;
        dfs(node.right);
        curSum += node.val;
        node.val = curSum;
        dfs(node.left);
    }
    dfs(root);
    return root;
};
