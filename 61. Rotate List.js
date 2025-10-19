/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */


 var rotateRight = function (head, k) {
    if (!head || k === 0) return head;

        let length = 1;
        let tail = head;
        while (tail.next) {
            tail = tail.next;
            length++;
        }

        k = k % length;
        if (k === 0) return head;

         tail.next = head; // form a cycle
         let stepsToNewHead = length - k;
         let newTail = tail;
        while (stepsToNewHead--) {
            newTail = newTail.next;
        }

        let newHead = newTail.next;
        newTail.next = null;
        console.log({ newHead });
        return newHead;
 }


// var rotateRight = function (head, k) {
//     if (!head || k === 0) return head;
//     let next = ListNode(0);
//     let res = head;
//     let totalNodes = 0;
//     while (head) {
//         totalNodes++;
//         head = head.next;
//     }

//     if( k == totalNodes || totalNodes == 1) return res;
//     head = res;
//     // let result = ListNode(0);
//     for(let i = 0; i< k%totalNodes; i++ ){
//         head = rotate(head,totalNodes)
//     }
//     // const ro = rotate(head,totalNodes)
//     // console.log({ head });
//     return head;

// };

// function rotate(head, totalNodes) {
//     const init = head;

//     let counter = 1;
//     while (head) {
//         console.log({ counter })
//         if (counter == totalNodes - 1) {
//             const next = head.next;
//             head.next = null;
//             next.next = init;
//             // console.log({ next })
//             return next;
//         }
//         counter++;
//         head = head.next;
//     }
//     return head;
// }