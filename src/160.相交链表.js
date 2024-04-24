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
  const arr = []

  let p = headA
  while (p !== null) {
    arr.push(p)
    p = p.next
  }

  let q = headB
  while (q !== null) {
    if (arr.includes(q)) {
      return q
    } else {
      q = q.next
    }
  }

  return null
}
// @lc code=end
