/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {

    if(!head) return head;
    let slow = fast = head;
    while ( fast && fast.next ) {
        
        slow = slow.next;
        fast = fast.next.next;

        if(slow === fast){
            break;
        }
        
    }
    if( fast == null || fast.next == null) return null;

    fast=head;
    while(fast!=slow) {
    fast= fast.next;
    slow=slow.next;
    }
    return fast;
};