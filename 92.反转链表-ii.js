/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
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
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
const reverseBetween = function (head, left, right) {
  if (!head) {
    return null
  }

  const ret = new ListNode(-1, head)
  let pre = ret
  const count = right - left + 1
  while (--left) {
    pre = pre.next
  }
  pre.next = reverse(pre.next, count)
  return ret.next
}

const reverse = function (head, count) {
  let pre = null
  let cur = head
  while (count--) {
    [cur.next, pre, cur] = [pre, cur, cur.next]
  }
  head.next = cur
  return pre
}
// @lc code=end
