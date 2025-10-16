/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {

    // Dummy node to handle edge cases
    let dummy = new ListNode(0);
    dummy.next = head;

    // Move to the node just before 'left'
    let prev = dummy;
    for (let i = 1; i < left; i++) {
        prev = prev.next;
    }
    
        // Start reversing from 'left' position
    let curr = prev.next;
    let reversePrev = null;
    

 // Reverse nodes from left to right
    for (let i = 0; i <= right - left; i++) {
        let next = curr.next;
        curr.next = reversePrev;
        reversePrev = curr;
        curr = next;
    }

     // Connect the reversed segment back
    // prev.next is the start of reversed segment (now the tail)
    prev.next.next = curr; // Connect tail to the node after 'right'
    prev.next = reversePrev; // Connect the node before 'left' to new head of reversed segment
    
    return dummy.next

    // let curr = head
    // let prev = new ListNode(0);
    // let res = new ListNode(0);
    // while (curr) {
    //     if (curr.val >= left && curr.val <= right && curr) {
    //         // console.log('inside con')
    //         // console.log({ curr, res })
    //         while (curr.val >= left && curr.val <= right && curr) {
    //             const next = curr.next;
    //             curr.next = prev;
    //             prev = curr;
    //             curr = next;               
    //         }
    //         // res.next = prev;
    //         console.log('Reach prev')
    //         console.log({ prev, res })
    //         res.next.next = prev
    //         // while(prev.val !=0 ){
    //         // console.log('Res next', res.next)
    //         //     res.next = new ListNode(prev.val)
    //         //     console.log({ res })
    //         //     prev = prev.next
    //         // }
    //         console.log({ res })
    //     } else {
    //         res.next = new ListNode(curr.val);
    //         curr = curr.next
    //         console.log('in Else')
    //         console.log({ curr, res })

    //     }

    // }
    //     console.log('at end')
    //     console.log({res});

    // while (curr) {
    //     if (curr.val >= left && curr.val <= right && curr) {
    //         console.log("inside condition ");
    //         let prev1 = new ListNode(0);

    //         while (curr.val >= left && curr.val <= right && curr) {
    //             const next = curr.next;
    //             curr.next = prev1;
    //             prev1 = curr;
    //             curr = next
    //         }
    //         console.log({  prev1 });
    //             // if (curr) {
    //             //     prev.next = new ListNode(curr.val)
    //             // }
    //     } else {
    //         prev.next = new ListNode(curr.val)
    //         curr = curr.next;
    //     }
    //     // if(curr) 
    //     console.log({ prev });
    // }

    // return prev.next;
};