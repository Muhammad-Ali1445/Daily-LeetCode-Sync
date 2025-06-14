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
var preorderTraversal = function (root) {

    // Iterative Solution

    if (root === null) return [];
    const result = [];
    const stack = [root];
    while (stack.length !== 0) {
        const curr = stack.pop();
        result.push(curr.val);

        if (curr.right) stack.push(curr.right);
        if (curr.left) stack.push(curr.left);
    }
    return result;

    // Recursive Solution 

    // if (root === null) return [];
    // const leftValues = preorderTraversal(root.left);
    // const rightValues = preorderTraversal(root.right);
    // return [root.val, ...leftValues, ...rightValues];
};