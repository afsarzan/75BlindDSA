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
var middleNode = function(head) {
    let total = 1;
    let start = head;
    while(start != null){
        if(start.val && start.next){
            start = start.next
            total++
        } else {
            break
        }
    }
    total = total % 2 == 0 ? (total/2)+1: Math.ceil(total / 2)
    console.log({total})
    start = head;
    const res = new ListNode(0);
    let inc = 1
    while(start){
        if(inc==total){
            res.next = start
        }
        start = start.next
        inc++
    }
    return res.next
};

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
var middleNode = function (head) {
    let slow = head;
    let fast = head;
    if(slow.next===null) return slow

    while (slow && fast) {
        slow = slow.next;
        fast = fast?.next?.next;

        if (fast?.next === null) break;
    }

    return slow

};