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
    if(head == null) return null;
    let next = ListNode(0);
    let res = head;
    let totalNodes = 0;
    while (head) {
        totalNodes++;
        head = head.next;
    }

    if( k == totalNodes || totalNodes == 1) return res;
    head = res;
    // let result = ListNode(0);
    for(let i = 0; i< k%totalNodes; i++ ){
        head = rotate(head,totalNodes)
    }
    // const ro = rotate(head,totalNodes)
    // console.log({ head });
    return head;

};

function rotate(head, totalNodes) {
    const init = head;

    let counter = 1;
    while (head) {
        console.log({ counter })
        if (counter == totalNodes - 1) {
            const next = head.next;
            head.next = null;
            next.next = init;
            // console.log({ next })
            return next;
        }
        counter++;
        head = head.next;
    }
    return head;
}