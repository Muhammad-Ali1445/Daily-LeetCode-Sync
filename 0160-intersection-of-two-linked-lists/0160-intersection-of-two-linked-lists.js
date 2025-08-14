/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    let curr1 = headA
    let curr2 = headB
    while (curr1 !== curr2) {
        curr1 = curr1 ? curr1.next : headB
        curr2 = curr2 ? curr2.next : headA
    }
    return curr1
};