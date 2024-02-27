/*
 * @lc app=leetcode.cn id=1161 lang=javascript
 *
 * [1161] 最大层内元素和
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const maxLevelSum = function (root) {
  let levelResult = 1
  let maxSum = root.val
  const q = [root]
  for (let level = 1; q.length > 0; level++) {
    const size = q.length
    let sum = 0
    for (let i = 0; i < size; i++) {
      const node = q.shift()
      sum += node.val
      if (node.left) q.push(node.left)
      if (node.right) q.push(node.right)
    }
    if (sum > maxSum) {
      levelResult = level
      maxSum = sum
    }
  }
  return levelResult
}
// @lc code=end
