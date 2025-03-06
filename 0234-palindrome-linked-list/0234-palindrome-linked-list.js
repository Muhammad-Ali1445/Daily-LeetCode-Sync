/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {

    const reverseLinkedList = (head, prev = null) => {
        if (head === null) return prev;
        const next = head.next;
        head.next = prev;
        return reverseLinkedList(next, head);
    };


    // Edge Case
    if (!head || !head.next) return true;
    let slow = head;
    let fast = head;
    
    // finding Middle Point of LinkedList
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    let firstHalf = head; // First List
    let secondHalf = reverseLinkedList(slow); // Second List

    while (secondHalf !== null) {
        if (firstHalf.val !== secondHalf.val) {
            return false;
        }
        firstHalf = firstHalf.next;
        secondHalf = secondHalf.next;
    }
    return true;
};