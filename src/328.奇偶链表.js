/*
 * @lc app=leetcode.cn id=328 lang=javascript
 *
 * [328] 奇偶链表
 */

// @lc code=start
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
const oddEvenList = function (head) {
  if (head === null) return head

  const evenHead = head.next

  let odd = head
  let even = head.next

  while (even !== null && even.next !== null) {
    odd.next = even.next
    odd = even.next
    even.next = odd.next
    even = odd.next
  }

  odd.next = evenHead
  return head
}
// @lc code=end
