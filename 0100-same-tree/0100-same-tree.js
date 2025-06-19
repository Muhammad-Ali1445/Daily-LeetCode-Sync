/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
    const q1 = [p];
    const q2 = [q];

    while (q1.length > 0 && q2.length > 0) {
        const node1 = q1.shift();
        const node2 = q2.shift();

        if (!node1 && !node2) continue;

        if (!node1 || !node2 || node1.val !== node2.val) return false;

        q1.push(node1.left);
        q1.push(node1.right);
        q2.push(node2.left);
        q2.push(node2.right);
    }
    return q1.length === 0 && q2.length === 0;
};