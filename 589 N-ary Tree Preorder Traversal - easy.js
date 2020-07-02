/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
const preorder = function(root) {
    const result = []
    
    function traverse(tree) {
        if (!tree) return result

        result.push(tree.val)

        for (let i = 0; i <= tree.children.length; i++) {
            traverse(tree.children[i])
        }
        return result
    }

    traverse(root)

    return result
};
