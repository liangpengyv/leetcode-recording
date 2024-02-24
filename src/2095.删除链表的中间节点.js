/*
 * @lc app=leetcode.cn id=2095 lang=javascript
 *
 * [2095] 删除链表的中间节点
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
const deleteMiddle = function (head) {
  if (head.next === null) return null

  let count = 1
  let curr = head
  while (curr.next) {
    count++
    curr = curr.next
  }

  let middle = Math.floor(count / 2)
  let p = head
  while (--middle) {
    p = p.next
  }

  const next = p.next.next
  p.next = next
  return head
}
// @lc code=end
