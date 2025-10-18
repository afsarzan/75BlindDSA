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
var reverseKGroup = function(head, k) {

   if (!head) return null;

    let tail = head;
    for (let i = 0; i < k; i++) {
        if (!tail) return head;
        tail = tail.next;
    }

    function reverse(cur, end) {
        let prev = null;
        while (cur !== end) {
            let next = cur.next;
            cur.next = prev;
            prev = cur;
            cur = next;
        }
        return prev;
    }

    let newHead = reverse(head, tail);
    head.next = reverseKGroup(tail, k);
    return newHead; 


    // let prev = new ListNode(0);
    // let counter = 0;
    // while (head) {
    //     // while(counter < k && head){
    //     //     console.log({counter, k})
    //     //     const next = head.next;
    //     //     head.next = prev;
    //     //     prev = head;
    //     //     head = next
    //     //     // prev.next.next = head.next
    //     //     head = head.next
    //     //     counter++;
    //     // }
    //     //     console.log({prev , head})
    //     //     prev.next = head.next.next;
    //     //     // counter = 0;
    //     //     // head = head.next.next
        
    //     //     // console.log({prev , head})
    // }
    // return prev.next
};

var getGroupEnd = function (head,k){
    while(head && k >1){
        head = head.next;
        k--
    }
    return head;
}

var reverseList = function(head, stop) {
    var prev = stop;
    while (head !== stop) {
        var next = head.next;
        head.next = prev;
        prev = head;
        head = next;
    }
    return prev;
}