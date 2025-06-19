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
 * @return {number}
 */
var maxDepth = function (root) {
    if (!root) return 0;
    const queue = [root];
    let depth = 0;
    while (queue.length > 0) {
        let queueSize = queue.length;

        for (let i = 0; i < queueSize; i++) {
            let curr = queue.shift();
            if (curr.left) queue.push(curr.left);
            if (curr.right) queue.push(curr.right);
        }
        depth++;
    }
    return depth;
};