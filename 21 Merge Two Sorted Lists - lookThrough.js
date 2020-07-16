/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const mergeTwoLists = function(l1, l2) {
    const newList = new ListNode()
    let runner = newList

    while (l1 && l2) {
        if (l1.val < l2.val) {
            runner.next = l1
            l1 = l1.next
        } else {
            runner.next = l2
            l2 = l2.next
        }
        
        runner = runner.next
    }
    
    runner.next = l1 || l2
    
    return newList.next
};
