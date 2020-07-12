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
const middleNode = function(head) {
    let hash = {}
    let count = 0
    
    while(head) {
        count++
        hash[count] = head
        head = head.next
    }
    
    const middle = (Math.floor(count/2)+1).toString()
    return hash[middle]
};
