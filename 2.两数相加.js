/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function (l1, l2) {
  let head = null
  let tempNode = null
  let overflow = 0

  while (l1 || l2) {
    const n1 = l1 ? l1.val : 0
    const n2 = l2 ? l2.val : 0
    const sum = n1 + n2 + overflow

    if (!head) {
      tempNode = new ListNode(sum % 10)
      head = tempNode
    } else {
      tempNode.next = new ListNode(sum % 10)
      tempNode = tempNode.next
    }
    overflow = (sum - (sum % 10)) / 10
    if (l1) {
      l1 = l1.next
    }
    if (l2) {
      l2 = l2.next
    }
  }

  if (overflow > 0) {
    tempNode.next = new ListNode(overflow)
  }

  return head
}
// @lc code=end
