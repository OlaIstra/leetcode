/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
const isPalindrome = function(head) {
    let ltr = ''
    let rtl = ''
    
    let curr = head
    
    while (curr) {
        ltr = ltr + curr.val
        rtl = curr.val + rtl
        curr = curr.next
    }
    
    return ltr === rtl
};
