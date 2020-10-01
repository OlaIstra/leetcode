/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
const removeElements = function(head, val) {
    if (!head) return head
    while (head && head.val === val) {
        head = head.next
    }
    let current = head
    let prev = null
    
    while(current) {
        if (current.val === val) {
            prev.next = current.next
            current = current.next
            continue
        }
        prev = current
        current = current.next
    }
    
    return head
};
