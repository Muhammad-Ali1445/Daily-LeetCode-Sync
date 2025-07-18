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
var inorderTraversal = function (root) {

    //--------- Iterative Version -------------

    let result = [];
    let stack = [];
    let curr = root;
    while (curr !== null || stack.length > 0) {
        while (curr !== null) {
            stack.push(curr);
            curr = curr.left;
        }
        curr = stack.pop();
        result.push(curr.val);

        curr = curr.right;
    }
    return result;

    // ------------ Recursive Version ----------

    // if (root === null) return [];
    // const leftValues = inorderTraversal(root.left);
    // const rightValues = inorderTraversal(root.right);
    // return [...leftValues, root.val, ...rightValues];
};