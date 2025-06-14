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
    
     

    // ---- Recursive approach -----

    if (root === null) return [];
    const leftValues = postorderTraversal(root.left);
    const rightValues = postorderTraversal(root.right);
    return [...leftValues, ...rightValues, root.val]
};