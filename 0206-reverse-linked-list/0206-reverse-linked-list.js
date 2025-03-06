/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

 // ------- Iteratively --------
var reverseList = function (head) {
    let prev = null;
    let curr = head
    while (curr !== null) {
        let next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }
    return prev
};

// --------- Recursively -----------

// var reverseList = function (head,prev=null) {
//    if(head===null) return prev
//    let next=head.next
//    head.next=prev
//    return reverseList(next,head)
// };