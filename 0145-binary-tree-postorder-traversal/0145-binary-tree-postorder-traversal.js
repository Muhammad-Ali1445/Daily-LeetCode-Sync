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
var postorderTraversal = function (root) {

    // ---- Iterative approach ----

    if (root === null) return [];
    const result = [];
    const stack = [root];
    while (stack.length !== 0) {
        const curr = stack.pop();
        result.push(curr.val);

        if (curr.left) stack.push(curr.left);
        if (curr.right) stack.push(curr.right);
    }
    return result.reverse();

    // ---- Recursive approach -----

    // if (root === null) return [];
    // const leftValues = postorderTraversal(root.left);
    // const rightValues = postorderTraversal(root.right);
    // return [...leftValues, ...rightValues, root.val]
};