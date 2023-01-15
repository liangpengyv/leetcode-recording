/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
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
 * @param {ListNode} head
 * @return {ListNode}
 */
const detectCycle = function (head) {
  if (head === null) {
    return null
  }

  let pre = head
  let cur = head
  while (cur && cur.next) {
    pre = pre.next
    cur = cur.next.next
    if (pre === cur) {
      let temp = head
      while (temp !== pre) {
        temp = temp.next
        pre = pre.next
      }
      return pre
    }
  }
  return null
}
// @lc code=end
