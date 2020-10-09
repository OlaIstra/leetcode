/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} N
 * @return {TreeNode[]}
 */

const hash = {
    0: [],
    1: [new TreeNode(0)]
}

const allPossibleFBT = function(N) {

    if (N % 2 === 0) return []
    if (hash[N]) return hash[N]
    
    const result = [];
    for (let i = 1; i <= N - 2; i += 2) {
        let leftTree = allPossibleFBT(i)
        let rightTree = allPossibleFBT(N - 1 - i)
        
        leftTree.forEach(left => {
            rightTree.forEach(right => {
                let root = new TreeNode(0)
                root.left = left
                root.right = right
                result.push(root)
            })
        })
        
        hash[N] = result
    }
    
    return result
};
