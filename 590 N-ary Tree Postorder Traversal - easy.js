//Iteravtive Post-order Traverse
//Time Complexity: O(N)
//Space Complexity: O(N)
/**
 * @param {Node} root
 * @return {number[]}
 */
const postorder = function(root) {
    const result = [], stack = [root];
    
    while (stack.length) {
        const curr = stack.pop();
        if (!curr) continue;
        result.push(curr.val);
        stack.push(...curr.children);
    }
    return result.reverse();
};


//Recursive Post-order Traverse
//Time Complexity: O(N)
//Space Complexity:
//O(log N) in average case.
//O(N) in worst case, that there is an unbalanced tree.
/**
 * @param {Node} root
 * @return {number[]}
 */
const postorder = function(root) {
    const result = [];
    traverse(root);
    return result;
    
    function traverse(node) {
        if (!node) return;
        for(child of node.children) {
            traverse(child);
        }
        result.push(node.val);
    } 
};
