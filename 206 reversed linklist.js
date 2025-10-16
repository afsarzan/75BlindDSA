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
var reverseList = function (head) {
 if (head === null) return null;
 let currentNode = head;
 let nextNode= null;   
 let prevNode = null;       

 while ( currentNode ) {
    // nextNode = currentNode.next;
    // head.next = previousNode
    // previousNode = currentNode
    // currentNode = nextNode
    // nextNode = null

    nextNode = currentNode.next;
    currentNode.next = prevNode;
    prevNode = currentNode;
    currentNode = nextNode;
    nextNode = null;
 }
    head = prevNode; // reset head
    return head;

//   let prev = null
//     let curr = head

//     while(curr) {
//         const next = curr.next
//         curr.next = prev
//         prev = curr
//         curr = next
//     }
//     return prev
};