/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
function deleteDuplicates(head: ListNode | null): ListNode | null {
    let dummy = new ListNode(0, head);
    let prev = dummy;
    let curr = head;

    while (curr != null) {

        console.log('curr.val:' + curr.val )
        console.log('curr.next.val:' + curr.next.val )
        if (curr.next != null && curr.val === curr.next.val) {
            // Skip all duplicates
            while (curr.next != null && curr.val === curr.next.val) {
                curr = curr.next;
            }
            console.log('Changed previous next to current next')
            prev.next = curr.next;
            // Don't update prev here - it stays at the same position
        } else {
            console.log('Changed previous to current')
            prev = curr;  // Only advance prev when no duplicates found
        }
        curr = curr.next;
    }
    
    return dummy.next;
}

