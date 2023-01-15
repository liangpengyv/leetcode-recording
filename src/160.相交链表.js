/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
const getIntersectionNode = function (headA, headB) {
  const hash = []
  let p = headA
  while (p !== null) {
    hash.push(p)
    p = p.next
  }

  let q = headB
  while (q !== null) {
    if (hash.includes(q)) {
      return q
    }
    q = q.next
  }
  return null
}
// @lc code=end
