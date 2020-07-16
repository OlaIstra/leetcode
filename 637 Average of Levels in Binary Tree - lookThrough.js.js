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
 * @return {number[]}
 */
const averageOfLevels = function(root) {
    const result = []
    const queue = [root]
    if (root === null) return result
    while (queue.length) {
        let sum = 0
        const size = queue.length
        for (let i = 0; i < size; i++) {
            const head = queue.shift()
            sum += head.val
            
            if (head.left) queue.push(head.left)
            if (head.right) queue.push(head.right)
        }
        result.push(sum / size)
    }
    
    return result
    
};
