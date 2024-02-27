/*
 * @lc app=leetcode.cn id=199 lang=javascript
 *
 * [199] 二叉树的右视图
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
 * @return {number[]}
 */
const rightSideView = function (root) {
  const result = []
  if (root === null) return result

  const q = [root]
  while (q.length > 0) {
    let size = q.length
    while (size--) {
      const node = q.shift()
      if (size === 0) result.push(node.val)

      if (node.left) q.push(node.left)
      if (node.right) q.push(node.right)
    }
  }
  return result
}
// @lc code=end
