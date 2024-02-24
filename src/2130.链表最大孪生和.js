/*
 * @lc app=leetcode.cn id=2130 lang=javascript
 *
 * [2130] 链表最大孪生和
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
 * @return {number}
 */
const pairSum = function (head) {
  const list = []
  let curr = head
  while (curr) {
    list.push(curr.val)
    curr = curr.next
  }

  let max = -Infinity
  for (let i = 0, j = list.length - 1; i < j; i++, j--) {
    max = Math.max(max, list[i] + list[j])
  }
  return max
}
// @lc code=end
