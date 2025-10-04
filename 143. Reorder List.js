/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {

//     if (head == null || head.next == null) return;
//     let p1 = p2 = head;

//     while (p2.next != null && p2.next.next != null) {
//         p1 = p1.next;
//         p2 = p2.next.next;
//     }

//  // Reverse the half after middle
//     const preMiddle = p1;
//     const preCurrent =  p1.next;
//     while (preCurrent.next != null) {
//         const current = preCurrent.next;
//         preCurrent.next = current.next;
//         current.next = preMiddle.next;
//         preMiddle.next = current;
//     }
//     // Start reordering
//     p1 = head;
//     p2 = preMiddle.next;
//     while (p1 != preMiddle) {
//         preMiddle.next = p2.next;
//         p2.next = p1.next;
//         p1.next =p2;
//         p1 = p2.next;
//         p2 = preMiddle.next;
//     };
// }

helper(head);
};

var helper = function(head) {
    if (head === null || head.next === null) {
        return head;
    }
    let last = head;
    let prev = head;
    while (last.next !== null) {
        prev = last;
        last = last.next;
    }
    prev.next = null;
    const next = head.next;
    head.next = last;
    last.next = helper(next);
    return head;
};