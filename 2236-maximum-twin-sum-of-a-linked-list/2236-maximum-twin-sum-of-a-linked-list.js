/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function (head) {
    let slow = head
    let fast = head
    let stack = []

    while (fast && fast.next) {
        stack.push(slow)
        slow = slow.next
        fast = fast.next.next
    }

    let totalSum = 0
    while (slow) {
        let twin = stack.pop()
        let currSum = twin.val + slow.val
        totalSum = Math.max(totalSum, currSum)
        slow = slow.next
    }
    return totalSum
};