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
var isPalindrome = function(head) {
    if(head == null || head.next === null) return true;
    
    let slow = fast = head;

    while (fast != null && fast.next != null) {
        slow = slow.next
        fast = fast.next.next;
    }

    let prev = ListNode(0,null);
    
    while ( slow !=null) {
        let temp = slow.next;
        slow.next = prev;
        prev = slow;
        slow = temp;
    }

    slow = head;

    while ( prev != null) {
        if( slow.val != prev.val) return false;
        slow = slow.next
        prev = prev.next
    }
    return true
};