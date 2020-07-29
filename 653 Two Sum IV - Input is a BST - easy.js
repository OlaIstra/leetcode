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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
    const vals = []
    
    const getVals = (root) => {
        if (!root) return vals
        
        vals.push(root.val)
        
        getVals(root.left)
        getVals(root.right)
    }
    
    getVals(root)
    
    const hash = {}
    
    vals.forEach(el => {
        hash[el] ? hash[el]++ : hash[el] = 1
    })
    
    let isEqual = false
    
    for (let el in hash) {
        if (hash[k - el]) {
            if (k / 2 === Number(el) && hash[el] > 1 || k / 2 !== Number(el)) {
                isEqual = true
            } 
        }
    }
    
    return isEqual
};
